import { allSkillsData, allItemsData } from './src/data-index.js';
import { ruleSections } from './src/rules.js';
import { racesContent } from './src/racesData.js'; 
import { otherRulesContent } from './src/otherRulesData.js'; 
import { equipmentEnhancementContent } from './src/equipmentEnhancementData.js';
import { reputationRankContent } from './src/reputationRankData.js';
import { renderCharSheetConsole, initCharSheetQuickAddObserver } from './src/charSheetConsole.js';
import { DEMON_ACTION_TABLES } from './src/data-demon_act.js';
import { demonActionSimSection } from './src/data-demonSimSection.js'; // 依實際檔名與路徑調整
if (demonActionSimSection && Array.isArray(ruleSections) && !ruleSections.some(s => s.id === demonActionSimSection.id)) {
    ruleSections.push(demonActionSimSection);
}
// 頁面載入時啟用「技能檢索 / 道具檢索」卡片上的「+ 角色卡」快捷按鈕
initCharSheetQuickAddObserver();

// ==================== 資料正規化讀取輔助（相容新舊 Schema） ====================
function getSkillLevel(item) {
    if (typeof item.reqLevel === 'number') return item.reqLevel;
    if (typeof item.req_level === 'number') return item.req_level;
    return undefined;
}

function getSkillSubType(item) {
    return item.subCategory || item.type || '';
}

function getExtraField(item, key, fallback = '') {
    if (item?.extra && item.extra[key] !== undefined && item.extra[key] !== '') {
        return item.extra[key];
    }
    if (item && item[key] !== undefined && item[key] !== '') {
        return item[key];
    }
    return fallback;
}

function isCombatFeatItem(b) {
    if (!b) return false;
    const featCategories = ['戰鬥特技', '秘傳', '流派秘傳', '種族特徵'];
    const nonFeatCategories = ['魔動機術', '咒歌', '終律', '鼓咆', '陣率', '賦術', '操氣', '騎藝', '練技', '占瞳', '軍師', '天地使', '吟遊詩人', '生命工匠'];
    const subType = getSkillSubType(b);

    if (b.category && (b.category.includes('魔法') || nonFeatCategories.includes(b.category))) {
        return false;
    }
    return featCategories.includes(b.category) || (!b.category && ['被動', '宣言', '主動作', '自動'].includes(subType));
}

// 取得攤平後的道具陣列（相容 allItemsData 內含 golemsData: { golems, enhancements }）
function getNormalizedItemsDataset() {
    if (typeof allItemsData === 'undefined') return [];
    if (Array.isArray(allItemsData)) {
        return allItemsData.flatMap(entry => {
            if (!entry) return [];
            if (Array.isArray(entry.golems) || Array.isArray(entry.enhancements)) {
                return [...(entry.golems || []), ...(entry.enhancements || [])];
            }
            return [entry];
        });
    }
    if (allItemsData && typeof allItemsData === 'object') {
        return [...(allItemsData.golems || []), ...(allItemsData.enhancements || [])];
    }
    return [];
}

// 判斷是否為魔導武器或魔導義肢（支援 category / subCategory / tags / 名稱判定）
function isMagitechWeaponItem(item) {
    if (!item) return false;
    const cat = String(item.category || '');
    const sub = String(getSkillSubType(item) || '');
    const tags = Array.isArray(item.tags) ? item.tags : (Array.isArray(item.extra?.tags) ? item.extra.tags : []);
    return (
        cat.includes('魔導武器') ||
        sub.includes('魔導武器') ||
        tags.some(t => String(t).includes('魔導武器')) ||
        Boolean(item.isMagitechWeapon || item.extra?.isMagitechWeapon)
    );
}

function isMagitechProsthesisItem(item) {
    if (!item) return false;
    const cat = String(item.category || '');
    const sub = String(getSkillSubType(item) || '');
    const tags = Array.isArray(item.tags) ? item.tags : (Array.isArray(item.extra?.tags) ? item.extra.tags : []);
    return (
        cat.includes('魔導義肢') ||
        sub.includes('魔導義肢') ||
        tags.some(t => String(t).includes('魔導義肢')) ||
        Boolean(item.isMagitechProsthesis || item.extra?.isMagitechProsthesis)
    );
}

function syncItemCategorySelectOptions(dataset) {
    const categoryFilter = document.getElementById('item-category-filter');
    if (!categoryFilter || categoryFilter.dataset.magiSynced === '1') return;

    const existingValues = new Set(Array.from(categoryFilter.options).map(opt => opt.value));
    const priorityCategories = existingValues.has('武器-魔導武器')
        ? ['魔導義肢']
        : ['魔導武器', '魔導義肢'];

    priorityCategories.forEach(cat => {
        if (!existingValues.has(cat)) {
            const opt = document.createElement('option');
            opt.value = cat;
            opt.textContent = cat;
            categoryFilter.appendChild(opt);
            existingValues.add(cat);
        }
    });

    dataset.forEach(item => {
        if (item?.category && !existingValues.has(item.category)) {
            const opt = document.createElement('option');
            opt.value = item.category;
            opt.textContent = item.category;
            categoryFilter.appendChild(opt);
            existingValues.add(item.category);
        }
    });

    categoryFilter.dataset.magiSynced = '1';
}

// ==================== 自定義頁面（收藏與快捷牌組）核心管理 ====================
const CUSTOM_STORAGE_KEY = 'sw25_custom_deck_v1';

function getCustomItems() {
    try {
        return JSON.parse(localStorage.getItem(CUSTOM_STORAGE_KEY)) || [];
    } catch {
        return [];
    }
}

function saveCustomItems(list) {
    localStorage.setItem(CUSTOM_STORAGE_KEY, JSON.stringify(list));
    updateCustomBadgeCount();
}

function updateCustomBadgeCount() {
    const badge = document.getElementById('custom-badge-count');
    if (badge) badge.textContent = getCustomItems().length;
}

function getItemUniqueId(type, name, category = '') {
    return `${type}::${category}::${name}`;
}

function isItemPinned(id) {
    return getCustomItems().some(item => item.id === id);
}

window.togglePinDataItem = function(encodedData) {
    const payload = JSON.parse(decodeURIComponent(encodedData));
    const list = getCustomItems();
    const idx = list.findIndex(x => x.id === payload.id);

    if (idx !== -1) {
        list.splice(idx, 1);
    } else {
        list.push({ ...payload, userNote: '', pinnedAt: Date.now() });
    }
    saveCustomItems(list);

    const activeCustom = document.getElementById('tab-custom')?.classList.contains('text-amber-400');
    if (activeCustom) {
        renderCustomPage();
    } else {
        document.querySelectorAll(`[data-pin-id="${CSS.escape(payload.id)}"]`).forEach(btn => {
            const pinned = idx === -1;
            btn.innerHTML = pinned ? '<i class="fa-solid fa-star text-amber-400"></i> 已收藏' : '<i class="fa-regular fa-star"></i> 收藏';
            btn.className = pinned
                ? 'text-xs px-2.5 py-1 rounded-lg bg-amber-500/20 text-amber-300 border border-amber-500/40 transition-all shrink-0'
                : 'text-xs px-2.5 py-1 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-400 hover:text-amber-300 border border-zinc-700 transition-all shrink-0';
        });
    }
};

window.pinCurrentRuleSection = function(ruleId, ruleTitle, htmlContent) {
    const id = getItemUniqueId('rule', ruleTitle, ruleId);
    const list = getCustomItems();
    const idx = list.findIndex(x => x.id === id);

    if (idx !== -1) {
        list.splice(idx, 1);
    } else {
        list.push({
            id,
            itemType: 'rule',
            title: ruleTitle,
            ruleId,
            htmlContent,
            userNote: '',
            pinnedAt: Date.now()
        });
    }
    saveCustomItems(list);

    const btn = document.getElementById('btn-pin-current-rule');
    if (btn) {
        const pinned = idx === -1;
        btn.innerHTML = pinned
            ? '<i class="fa-solid fa-star text-amber-400 mr-1"></i>已加入自定義頁面'
            : '<i class="fa-regular fa-star mr-1"></i>將此規則加入自定義頁面';
    }
};

window.updateCustomItemNote = function(id, noteText) {
    const list = getCustomItems();
    const target = list.find(x => x.id === id);
    if (target) {
        target.userNote = noteText;
        saveCustomItems(list);
    }
};

window.exportCustomDeck = function() {
    const dataStr = JSON.stringify(getCustomItems(), null, 2);
    const blob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `SW25_自定義牌組_${new Date().toISOString().slice(0, 10)}.json`;
    a.click();
    URL.revokeObjectURL(url);
};

window.importCustomDeck = function(event) {
    const file = event.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (e) => {
        try {
            const imported = JSON.parse(e.target.result);
            if (Array.isArray(imported)) {
                saveCustomItems(imported);
                renderCustomPage();
                alert('匯入成功！');
            }
        } catch {
            alert('檔案格式錯誤，請選擇正確的 JSON 備份檔。');
        }
    };
    reader.readAsText(file);
};

function attachRulePinButton(ruleId, fallbackTitle, htmlContent) {
    const rulesContainer = document.getElementById('rules-container');
    if (!rulesContainer || !htmlContent) return;

    const h2Match = htmlContent.match(/<h2[^>]*>([\s\S]*?)<\/h2>/i);
    const extractedTitle = h2Match ? h2Match[1].replace(/<[^>]+>/g, '').trim() : fallbackTitle;

    const uid = getItemUniqueId('rule', extractedTitle, ruleId);
    const pinned = isItemPinned(uid);
    const encodedHtml = encodeURIComponent(htmlContent);

    const buttonHtml = `
        <button id="btn-pin-current-rule" type="button"
            onclick="pinCurrentRuleSection('${ruleId}', '${extractedTitle.replace(/'/g, "\\'")}', decodeURIComponent('${encodedHtml}'))"
            class="shrink-0 text-xs px-3 py-2 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-amber-300 border border-amber-500/30 transition-all shadow">
            <i class="${pinned ? 'fa-solid' : 'fa-regular'} fa-star text-amber-400 mr-1"></i>${pinned ? '已加入自定義頁面' : '將此規則加入自定義頁面'}
        </button>
    `;

    const h2El = rulesContainer.querySelector('h2');
    const titleCard = h2El ? h2El.closest('.bg-zinc-900\\/90, .rounded-xl') : null;

    if (titleCard) {
        const wrapper = document.createElement('div');
        wrapper.className = 'flex flex-wrap sm:flex-nowrap items-center justify-between gap-3';

        titleCard.classList.add('flex-1', 'min-w-0');
        titleCard.parentNode.insertBefore(wrapper, titleCard);
        wrapper.appendChild(titleCard);

        const btnBox = document.createElement('div');
        btnBox.innerHTML = buttonHtml.trim();
        wrapper.appendChild(btnBox.firstElementChild);
        return;
    }

    const bar = document.createElement('div');
    bar.className = 'flex justify-end mb-2';
    bar.innerHTML = buttonHtml;
    rulesContainer.prepend(bar);
}

// ==================== 1. 主頁籤切換 (同一層全站導覽) ====================
window.switchMainTab = function(tabName) {
    const secBards = document.getElementById('sec-bards');
    const secItems = document.getElementById('sec-items');
    const secRules = document.getElementById('sec-rules');
    const subtabsNav = document.getElementById('rule-subtabs-nav');
    const rulesContainer = document.getElementById('rules-container');

    document.querySelectorAll('.main-tab-btn').forEach(btn => {
        btn.className = "main-tab-btn py-2 px-3 rounded-lg text-zinc-400 hover:text-amber-400 transition-all border border-transparent whitespace-nowrap";
    });

    const activeBtn = document.getElementById(`tab-${tabName}`);
    if (activeBtn) {
        activeBtn.className = "main-tab-btn py-2 px-3 rounded-lg transition-all font-bold text-amber-400 bg-amber-500/10 border border-amber-500/30 whitespace-nowrap";
    }

    [secBards, secItems, secRules].forEach(sec => sec && sec.classList.add('hidden'));

    if (tabName === 'bards') {
        if (secBards) secBards.classList.remove('hidden');
        if (typeof window.filterBardSongs === 'function') window.filterBardSongs();
    } else if (tabName === 'items') {
        if (secItems) secItems.classList.remove('hidden');
        if (typeof window.filterItems === 'function') window.filterItems();
    } else {
        if (secRules) secRules.classList.remove('hidden');

        if (tabName === 'rules') {
            if (subtabsNav) subtabsNav.classList.remove('hidden');
            if (typeof window.switchRuleSubTab === 'function') {
                const firstRuleId = (Array.isArray(ruleSections) && ruleSections.length > 0) ? ruleSections[0].id : 'bard_rules';
                window.switchRuleSubTab(firstRuleId);
            }
        } else if (tabName === 'feat-tree') {
            if (subtabsNav) subtabsNav.classList.add('hidden');
            renderFeatTreePage();
        } else if (tabName === 'other_rules') {
            if (subtabsNav) subtabsNav.classList.add('hidden');
            if (rulesContainer && typeof otherRulesContent !== 'undefined') {
                rulesContainer.innerHTML = otherRulesContent;
                attachRulePinButton(tabName, '其他規則與判定總覽', otherRulesContent);
            }
        } else if (tabName === 'equipmentEnhancement_rules') {
            if (subtabsNav) subtabsNav.classList.add('hidden');
            if (rulesContainer && typeof equipmentEnhancementContent !== 'undefined') {
                rulesContainer.innerHTML = equipmentEnhancementContent;
                attachRulePinButton(tabName, '裝備強化與魔化規則', equipmentEnhancementContent);
            }
        } else if (tabName === 'reputation_rules') {
            if (subtabsNav) subtabsNav.classList.add('hidden');
            if (rulesContainer && typeof reputationRankContent !== 'undefined') {
                rulesContainer.innerHTML = reputationRankContent;
                attachRulePinButton(tabName, '名譽點與冒險者階級', reputationRankContent);
            }
        } else if (tabName === 'tools') {
            if (subtabsNav) subtabsNav.classList.add('hidden');
            if (rulesContainer) {
                rulesContainer.innerHTML = getFieldToolsHTML();
                initFieldTools();
            }
        } else if (tabName === 'char-sheet') {
            if (subtabsNav) subtabsNav.classList.add('hidden');
            renderCharSheetConsole('rules-container');
        } else if (tabName === 'custom') {
            if (subtabsNav) subtabsNav.classList.add('hidden');
            renderCustomPage();
        } else {
            if (subtabsNav) subtabsNav.classList.add('hidden');

            if (tabName === 'races') {
                if (rulesContainer && typeof racesContent !== 'undefined') {
                    rulesContainer.innerHTML = racesContent;
                    attachRulePinButton(tabName, '種族圖鑑與種族特徵', racesContent);
                }
            } else {
                const sectionData = Array.isArray(ruleSections)
                    ? ruleSections.find(s => s.id === tabName || s.id === `sec-${tabName}`)
                    : null;
                if (rulesContainer && sectionData) {
                    rulesContainer.innerHTML = sectionData.content;
                    attachRulePinButton(tabName, sectionData.title || tabName, sectionData.content);
                }
            }

            if (tabName === 'power_table_rules') {
                setTimeout(() => {
                    if (typeof window.renderPowerTableRows === 'function') window.renderPowerTableRows();
                    if (typeof window.calcPowerResult === 'function') window.calcPowerResult();
                }, 50);
            }
            if (tabName.includes('demon_action_sim')) {
                setTimeout(() => initDemonActionSimulator(DEMON_ACTION_TABLES), 50);
            }
        }
    }
};

// ==================== 2. 規則子頁籤切換 (職業規則區塊) ====================
window.switchRuleSubTab = function(ruleKey) {
    if (!ruleKey) return;

    const cleanTargetKey = ruleKey.replace(/^sec-/, '').replace(/_rules$/, '').toLowerCase();

    const subTabBtns = document.querySelectorAll('.rule-subtab-btn');
    subTabBtns.forEach(btn => {
        btn.className = "rule-subtab-btn px-3 py-1.5 rounded-lg text-sm bg-zinc-800 text-zinc-400 hover:text-amber-400 whitespace-nowrap transition-all border border-transparent";
    });

    const targetSubBtn = document.getElementById(`subtab-${ruleKey}`) || 
                         document.getElementById(`subtab-${cleanTargetKey}`) ||
                         document.getElementById(`subtab-sec-${cleanTargetKey}_rules`) ||
                         document.getElementById(ruleKey);

    if (targetSubBtn) {
        targetSubBtn.className = "rule-subtab-btn px-3 py-1.5 rounded-lg text-sm bg-amber-500/20 text-amber-400 border border-amber-500/30 whitespace-nowrap font-medium";
    }

    const rulesContainer = document.getElementById('rules-container');
    if (!rulesContainer) return;

    if (Array.isArray(ruleSections) && ruleSections.length > 0) {
        const sectionData = ruleSections.find(s => {
            if (!s || !s.id) return false;
            const cleanId = s.id.replace(/^sec-/, '').replace(/_rules$/, '').toLowerCase();
            return s.id === ruleKey || cleanId === cleanTargetKey;
        });

        if (sectionData && sectionData.content) {
            rulesContainer.innerHTML = sectionData.content;
            attachRulePinButton(sectionData.id, sectionData.title || ruleKey, sectionData.content);
        } else {
            console.warn(`[Rules Error] 在 ruleSections 中找不到匹配的 ID: "${ruleKey}"。可用的 ID 有:`, ruleSections.map(s => s.id));
        }
    }

    if (ruleKey.includes('power_table')) {
        setTimeout(() => {
            if (typeof window.renderPowerTableRows === 'function') window.renderPowerTableRows();
            if (typeof window.calcPowerResult === 'function') window.calcPowerResult();
        }, 50);
    }
    if (ruleKey.includes('demon_action_sim')) {
        setTimeout(() => initDemonActionSimulator(DEMON_ACTION_TABLES), 50);
    }
};

// ==================== 3. 技能檢索 - 防抖與篩選邏輯 ====================
let currentFilteredSkills = [];
let currentSkillPage = 1;
const pageSize = 20;
let debounceTimer = null;

window.filterBardSongs = function() {
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => {
        executeSkillFilter();
    }, 250);
};

function executeSkillFilter() {
    const queryField = document.getElementById('bard-search');
    const categoryField = document.getElementById('bard-category-filter');
    const levelField = document.getElementById('bard-level-filter');

    const rawQuery = queryField ? queryField.value.toLowerCase().trim() : '';
    const query = rawQuery.replace(/奈洛/g, '奈落');

    const categoryFilter = categoryField ? categoryField.value : '';
    const levelFilterVal = levelField ? levelField.value : '';

    const dataset = (typeof allSkillsData !== 'undefined' && Array.isArray(allSkillsData)) ? allSkillsData : [];

    currentFilteredSkills = dataset.filter(b => {
        if (!b) return false;

        const subType = getSkillSubType(b);
        const lv = getSkillLevel(b);
        const extraValues = (b.extra && typeof b.extra === 'object') ? Object.values(b.extra).join(' ') : '';

        const searchableText = [
            b.name,
            b.nameJp,
            b.summary,
            b.effect,
            b.category,
            subType,
            b.cost,
            b.target,
            b.range,
            b.duration,
            b.resistance,
            b.element,
            b.target_monsters,
            b.applicable_parts,
            b.prerequisite,
            b.usage,
            b.expansion,
            extraValues
        ].filter(Boolean).join(' ').toLowerCase();

        const matchesQuery = !query || searchableText.includes(query);

        const matchesCategory = !categoryFilter || 
            b.category === categoryFilter || 
            subType === categoryFilter ||
            (categoryFilter === "吟遊詩人" && (subType === "咒歌" || subType === "終律")) ||
            (categoryFilter === "軍師" && (subType === "鼓咆" || subType === "陣率" || b.category === "陣率" || b.category === "鼓咆"));

        const matchesLevel = !levelFilterVal || (lv !== undefined && lv <= parseInt(levelFilterVal, 10));

        return matchesQuery && matchesCategory && matchesLevel;
    });

    currentSkillPage = 1;
    renderBardSongs(true);
}

// ==================== 4. 道具檢索 - 獨立篩選與渲染邏輯 ====================
let itemDebounceTimer = null;

window.filterItems = function() {
    clearTimeout(itemDebounceTimer);
    itemDebounceTimer = setTimeout(() => {
        executeItemFilter();
    }, 200);
};

function executeItemFilter() {
    const searchInput = document.getElementById('item-search');
    const categoryFilter = document.getElementById('item-category-filter');
    const container = document.getElementById('item-list');
    const countEl = document.getElementById('item-count');

    if (!container) return;

    const dataset = getNormalizedItemsDataset();
    syncItemCategorySelectOptions(dataset);

    const rawQuery = searchInput ? searchInput.value.toLowerCase().trim() : '';
    const selectedCategory = categoryFilter ? categoryFilter.value : '';

    const filtered = dataset.filter(item => {
        if (!item) return false;

        let matchesCategory = !selectedCategory || item.category === selectedCategory;
        if (selectedCategory === '魔導武器' || selectedCategory === '武器-魔導武器') {
            matchesCategory = isMagitechWeaponItem(item);
        } else if (selectedCategory === '魔導義肢') {
            matchesCategory = isMagitechProsthesisItem(item);
        }

        const extraValues = (item.extra && typeof item.extra === 'object') ? Object.values(item.extra).join(' ') : '';
        const searchableText = [
            item.name,
            item.nameJp,
            item.category,
            getSkillSubType(item),
            item.effect,
            item.note,
            item.req,
            item.summary,
            item.description,
            item.price,
            item.cost,
            extraValues
        ].filter(Boolean).join(' ').toLowerCase();

        const matchesQuery = !rawQuery || searchableText.includes(rawQuery);

        return matchesCategory && matchesQuery;
    });

    if (countEl) countEl.textContent = filtered.length;

    if (filtered.length === 0) {
        container.innerHTML = `
            <div class="col-span-full text-center py-12 bg-zinc-900/50 rounded-xl border border-zinc-800">
                <i class="fa-solid fa-box-open text-4xl text-zinc-600 mb-3"></i>
                <p class="text-zinc-400 text-sm">查無符合條件的道具或裝備。</p>
            </div>
        `;
        return;
    }

    container.innerHTML = filtered.map(item => renderItemCard(item)).join('');
}

// ==================== 5. 戰鬥特技專用卡片 HTML 生成 ====================
export function renderCombatFeatCard(feat) {
    const subType = getSkillSubType(feat) || '被動';
    const prereq = getExtraField(feat, 'prerequisite', '無');
    const usage = getExtraField(feat, 'usage', '無');
    const risk = getExtraField(feat, 'risk', '');

    const typeBadgeStyles = {
        '被動': 'bg-slate-900 text-slate-300 border-slate-700',
        '宣言': 'bg-amber-950 text-amber-300 border-amber-800',
        '主動作': 'bg-purple-950 text-purple-300 border-purple-800',
        '自動': 'bg-emerald-950 text-emerald-300 border-emerald-800'
    };

    const badgeClass = typeBadgeStyles[subType] || 'bg-zinc-800 text-zinc-300 border-zinc-700';

    const uid = getItemUniqueId('feat', feat.name, feat.category);
    const pinned = isItemPinned(uid);
    const payload = encodeURIComponent(JSON.stringify({ id: uid, itemType: 'feat', data: feat }));

    return `
        <div class="bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden shadow-lg hover:border-zinc-700 transition-all flex flex-col">
            <div class="p-4 bg-zinc-950/60 border-b border-zinc-800 flex justify-between items-center gap-2">
                <div class="flex flex-wrap items-center gap-2">
                    <span class="text-xs px-2 py-0.5 rounded border bg-amber-950 text-amber-300 border-amber-800 font-medium">
                        ${feat.category || '戰鬥特技'}
                    </span>
                    <span class="text-xs px-2 py-0.5 rounded border ${badgeClass} font-medium">
                        ${subType}
                    </span>
                    <h3 class="text-base font-bold text-amber-400 ml-1">
                        <i class="fa-solid fa-shield-halved mr-1.5 text-amber-500"></i>${feat.name}
                        ${feat.nameJp ? `<span class="text-xs text-zinc-500 font-normal ml-1 font-mono">(${feat.nameJp})</span>` : ''}
                    </h3>
                </div>
                <button data-pin-id="${uid}" onclick="togglePinDataItem('${payload}')"
                    class="text-xs px-2.5 py-1 rounded-lg ${pinned ? 'bg-amber-500/20 text-amber-300 border-amber-500/40' : 'bg-zinc-800 hover:bg-zinc-700 text-zinc-400 hover:text-amber-300 border-zinc-700'} border transition-all shrink-0">
                    <i class="${pinned ? 'fa-solid text-amber-400' : 'fa-regular'} fa-star"></i> ${pinned ? '已收藏' : '收藏'}
                </button>
            </div>

            <div class="p-4 space-y-3">
                <div class="grid grid-cols-2 gap-2 text-xs bg-zinc-950 p-2.5 rounded-lg border border-zinc-800/80">
                    <div>
                        <span class="text-zinc-500 font-medium block mb-0.5">前提條件</span>
                        <span class="text-cyan-300 font-medium">${prereq}</span>
                    </div>
                    <div>
                        <span class="text-zinc-500 font-medium block mb-0.5">使用限制 / 裝備</span>
                        <span class="text-amber-300 font-medium">${usage}${risk && risk !== '無' ? `（風險：${risk}）` : ''}</span>
                    </div>
                </div>

                <div class="space-y-2">
                    ${feat.summary ? `
                        <div class="text-xs font-bold text-amber-500 flex items-center">
                            <i class="fa-solid fa-bookmark mr-1.5 text-xs"></i>概要：${feat.summary}
                        </div>
                    ` : ''}
                    <p class="text-xs text-zinc-300 leading-relaxed whitespace-pre-line bg-zinc-950/30 p-2.5 rounded border border-zinc-800/40">
                        ${feat.effect || ''}
                    </p>
                </div>
            </div>
        </div>
    `;
}

// ==================== 6. 道具與裝備專用卡片 HTML 生成 ====================
export function renderItemCard(item) {
    const subType = getSkillSubType(item);
    const isMagitechWeapon = isMagitechWeaponItem(item);
    const isMagitechProsthesis = isMagitechProsthesisItem(item);
    const isWeapon = isMagitechWeapon || ["劍", "槍", "斧", "打擊", "拋射", "格鬥", "扔擲", "魔動機槍", "魔導武器", "武器-劍", "武器-斧", "武器-槍", "武器-鈍器/錘", "武器-戰錘", "武器-長杖", "武器-弓", "武器-弩", "武器-魔導槍", "武器-魔導武器", "武器-連枷", "武器-格鬥/抓握", "武器-投擲"].includes(item.category);
    const isArmor = ["非金屬鎧", "金屬鎧", "盾", "防具-金屬鎧甲", "防具-非金屬鎧甲", "防具-盾牌"].includes(item.category);
    const isAccessory =
        item.category === "裝飾品" ||
        item.category === "飾品裝備" ||
        (typeof subType === "string" && (subType.includes("裝飾") || subType === "裝飾品"));
    const isGeograph = item.category === "地貌儀" || (item.name && item.name.includes("地貌儀"));
    const isMount = item.category && item.category.startsWith("騎獸");
    const isGrimoire =
        item.category === "魔導書" ||
        (typeof item.effect === "string" && item.effect.includes("<魔導書>")) ||
        (item.rank !== undefined && item.usage !== undefined && !isWeapon && !isArmor && !isMagitechProsthesis);

    const uid = getItemUniqueId('item', item.name, item.category);
    const pinned = isItemPinned(uid);
    const payload = encodeURIComponent(JSON.stringify({ id: uid, itemType: 'item', data: item }));

    let attrTableHTML = '';

    if (isWeapon) {
        const weaponSubRow = (isMagitechWeapon || item.rank || item.req || (subType && subType !== item.category))
            ? `
            <div class="grid grid-cols-6 border-t border-zinc-800/60 py-1.5 px-3 bg-zinc-950/80 text-xs">
                <span class="text-zinc-500 font-medium">分類</span>
                <span class="col-span-2 text-center text-cyan-300 font-medium">${subType || item.rank || item.category}</span>
                <span class="text-zinc-500 font-medium text-center">需求／備註</span>
                <span class="col-span-2 text-right text-amber-300 font-medium">${item.req || (isMagitechWeapon ? '魔動機術／魔導武器' : '－')}</span>
            </div>
            `
            : '';

        attrTableHTML = `
            <div class="grid grid-cols-6 border-b border-zinc-800/60 py-1.5 px-3 text-xs">
                <span class="text-zinc-500 font-medium">用法</span>
                <span class="text-center text-cyan-300 font-bold">${item.usage || '－'}</span>
                <span class="text-zinc-500 font-medium text-center">必力</span>
                <span class="text-center text-amber-300 font-bold">${item.req_str || '－'}</span>
                <span class="text-zinc-500 font-medium text-center">命中</span>
                <span class="text-right text-emerald-300 font-bold">${item.acc || '+0'}</span>
            </div>
            <div class="grid grid-cols-6 py-1.5 px-3 bg-zinc-900/40 text-xs">
                <span class="text-zinc-500 font-medium">威力</span>
                <span class="text-center text-pink-400 font-bold">${item.power || '－'}</span>
                <span class="text-zinc-500 font-medium text-center">C值</span>
                <span class="text-center text-purple-300 font-bold">${item.crit || '－'}</span>
                <span class="text-zinc-500 font-medium text-center">價格</span>
                <span class="text-right text-amber-400 font-bold">${item.price || '－'}</span>
            </div>
            ${weaponSubRow}
        `;
    } else if (isMagitechProsthesis) {
        const partSlot = getExtraField(item, 'part', '') || getExtraField(item, 'slot', '') || subType || '指定肢體部位';
        const reqInfo = item.req || getExtraField(item, 'prerequisite', '－');
        attrTableHTML = `
            <div class="grid grid-cols-6 border-b border-zinc-800/60 py-1.5 px-3 text-xs">
                <span class="text-zinc-500 font-medium">部位</span>
                <span class="col-span-2 text-center text-cyan-300 font-bold">${partSlot}</span>
                <span class="text-zinc-500 font-medium text-center">價格</span>
                <span class="col-span-2 text-right text-amber-400 font-bold">${item.price || '－'}</span>
            </div>
            <div class="grid grid-cols-6 py-1.5 px-3 bg-zinc-900/40 text-xs">
                <span class="text-zinc-500 font-medium">裝備條件</span>
                <span class="col-span-5 text-right text-emerald-300 font-medium">${reqInfo}</span>
            </div>
        `;
    } else if (isArmor) {
        attrTableHTML = `
            <div class="grid grid-cols-6 border-b border-zinc-800/60 py-1.5 px-3 text-xs">
                <span class="text-zinc-500 font-medium">用法</span>
                <span class="text-center text-cyan-300 font-bold">${item.usage || '－'}</span>
                <span class="text-zinc-500 font-medium text-center">必力</span>
                <span class="text-center text-amber-300 font-bold">${item.req_str || '－'}</span>
                <span class="text-zinc-500 font-medium text-center">迴避</span>
                <span class="text-right text-emerald-300 font-bold">${item.evasion || '0'}</span>
            </div>
            <div class="grid grid-cols-6 py-1.5 px-3 bg-zinc-900/40 text-xs">
                <span class="text-zinc-500 font-medium">防護點</span>
                <span class="text-center text-emerald-400 font-bold">${item.defense || '0'}</span>
                <span class="text-zinc-500 font-medium text-center">價格</span>
                <span class="col-span-3 text-right text-amber-400 font-bold">${item.price || '－'}</span>
            </div>
        `;
    } else if (isGrimoire) {
        attrTableHTML = `
            <div class="grid grid-cols-6 border-b border-zinc-800/60 py-1.5 px-3 text-xs">
                <span class="text-zinc-500 font-medium">階級</span>
                <span class="text-center text-purple-300 font-bold">${item.rank || '－'}</span>
                <span class="text-zinc-500 font-medium text-center">用法</span>
                <span class="text-center text-cyan-300 font-bold">${item.usage || '－'}</span>
                <span class="text-zinc-500 font-medium text-center">價格</span>
                <span class="text-right text-amber-400 font-bold">${item.price || '－'}</span>
            </div>
            <div class="grid grid-cols-6 py-1.5 px-3 bg-zinc-900/40 text-xs">
                <span class="text-zinc-500 font-medium">類別</span>
                <span class="col-span-5 text-emerald-300 font-medium">${item.category || '魔導書'}</span>
            </div>
        `;
    } else if (isGeograph) {
        attrTableHTML = `
            <div class="grid grid-cols-6 border-b border-zinc-800/60 py-1.5 px-3 text-xs">
                <span class="text-zinc-500 font-medium">範圍</span>
                <span class="col-span-3 text-cyan-300 font-medium">${item.range || '－'}</span>
                <span class="text-zinc-500 font-medium text-center">價格</span>
                <span class="text-right text-amber-400 font-bold">${item.price || '－'}</span>
            </div>
            <div class="grid grid-cols-6 py-1.5 px-3 bg-zinc-900/40 text-xs">
                <span class="text-zinc-500 font-medium">天/地/人脈</span>
                <span class="col-span-5 text-emerald-300 font-medium">天:${item.sky_limit || 0} / 地:${item.earth_limit || 0} / 人:${item.human_limit || 0}</span>
            </div>
        `;
    } else if (isMount) {
        attrTableHTML = `
            <div class="grid grid-cols-6 border-b border-zinc-800/60 py-1.5 px-3 text-xs">
                <span class="text-zinc-500 font-medium">條件</span>
                <span class="col-span-5 text-right text-cyan-300 font-bold">${item.req || '－'}</span>
            </div>
            <div class="grid grid-cols-6 py-1.5 px-3 bg-zinc-900/40 text-xs">
                <span class="text-zinc-500 font-medium">價格</span>
                <span class="col-span-5 text-right text-amber-400 font-bold">${item.price || '－'}</span>
            </div>
        `;
    } else if (isAccessory) {
        const slotLabel = subType === "裝飾品" ? "通用／不限" : (subType || "－");
        attrTableHTML = `
            <div class="grid grid-cols-6 border-b border-zinc-800/60 py-1.5 px-3 text-xs">
                <span class="text-zinc-500 font-medium">部位</span>
                <span class="col-span-3 text-cyan-300 font-bold">${slotLabel}</span>
                <span class="text-zinc-500 font-medium text-center">價格</span>
                <span class="text-right text-amber-400 font-bold">${item.price || '－'}</span>
            </div>
            <div class="grid grid-cols-6 py-1.5 px-3 bg-zinc-900/40 text-xs">
                <span class="text-zinc-500 font-medium">分類</span>
                <span class="col-span-5 text-emerald-300 font-medium">${item.category || '裝飾品'}</span>
            </div>
        `;
    } else {
        const reqLv = getSkillLevel(item);
        const priceSML = getExtraField(item, 'priceSmallMediumLarge', '');
        const normalMat = getExtraField(item, 'normalMaterial', '');
        const superiorMat = getExtraField(item, 'superiorMaterial', '');

        const extraPairs = [
            subType && subType !== item.category ? ['類型', subType] : null,
            item.rank ? ['階級', item.rank] : null,
            item.usage ? ['用法', item.usage] : null,
            item.req ? ['需求', item.req] : null,
            reqLv !== undefined && reqLv > 0 ? ['必要等級', `Lv ${reqLv}`] : null,
            item.mpCost !== undefined ? ['消耗 MP', item.mpCost] : null,
            item.cost && item.cost !== '－' ? ['消耗／價格', item.cost] : null,
            normalMat ? ['一般素材', normalMat] : null,
            superiorMat ? ['上位素材', superiorMat] : null,
        ].filter(Boolean);

        const extraRowsHTML = extraPairs.length > 0
            ? `<div class="grid grid-cols-2 gap-x-4 gap-y-1 border-t border-zinc-800/60 py-1.5 px-3 text-xs">
                ${extraPairs.map(([label, val]) => `
                    <div class="flex justify-between gap-2">
                        <span class="text-zinc-500 font-medium shrink-0">${label}</span>
                        <span class="text-cyan-300 font-medium text-right">${val}</span>
                    </div>
                `).join('')}
               </div>`
            : '';

        attrTableHTML = `
            <div class="grid grid-cols-6 py-1.5 px-3 bg-zinc-900/40 text-xs">
                <span class="text-zinc-500 font-medium">類別</span>
                <span class="col-span-2 text-center text-cyan-300 font-medium">${item.category || '道具'}</span>
                <span class="text-zinc-500 font-medium text-center">價格</span>
                <span class="col-span-2 text-right text-amber-400 font-bold">${item.price || priceSML || (item.cost && item.cost.startsWith('價格') ? item.cost.replace(/^價格.*?：/, '') : '非賣品')}</span>
            </div>
            ${extraRowsHTML}
        `;
    }

    const badgeStyle = isMount
        ? 'bg-amber-950 text-amber-300 border-amber-800'
        : isMagitechWeapon
        ? 'bg-purple-950 text-purple-300 border-purple-700'
        : isMagitechProsthesis
        ? 'bg-cyan-950 text-cyan-300 border-cyan-700'
        : 'bg-emerald-950 text-emerald-300 border-emerald-800';

    const itemIcon = isMount
        ? 'fa-horse'
        : isGrimoire
        ? 'fa-book-skull'
        : isMagitechWeapon
        ? 'fa-wand-sparkles'
        : isMagitechProsthesis
        ? 'fa-hand-sparkles'
        : 'fa-box-open';

    return `
        <div class="bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden shadow-lg hover:border-zinc-700 transition-all flex flex-col">
            <div class="p-4 bg-zinc-950/60 border-b border-zinc-800 flex justify-between items-center gap-2">
                <div class="flex flex-wrap items-center gap-2">
                    <span class="text-xs px-2 py-0.5 rounded border ${badgeStyle} font-medium">
                        ${item.category || '道具'}
                    </span>
                    ${isMagitechWeapon && item.category !== '魔導武器' ? `
                        <span class="text-xs px-2 py-0.5 rounded border bg-purple-950/80 text-purple-300 border-purple-700/80 font-medium">
                            魔導武器
                        </span>
                    ` : ''}
                    ${isMagitechProsthesis && item.category !== '魔導義肢' ? `
                        <span class="text-xs px-2 py-0.5 rounded border bg-cyan-950/80 text-cyan-300 border-cyan-700/80 font-medium">
                            魔導義肢
                        </span>
                    ` : ''}
                    <h3 class="text-base font-bold text-amber-400 ml-1">
                        <i class="fa-solid ${itemIcon} mr-1.5 text-amber-500"></i>${item.name}
                        ${item.nameJp ? `<span class="text-xs text-zinc-500 font-normal ml-1 font-mono">(${item.nameJp})</span>` : ''}
                    </h3>
                </div>
                <button data-pin-id="${uid}" onclick="togglePinDataItem('${payload}')"
                    class="text-xs px-2.5 py-1 rounded-lg ${pinned ? 'bg-amber-500/20 text-amber-300 border-amber-500/40' : 'bg-zinc-800 hover:bg-zinc-700 text-zinc-400 hover:text-amber-300 border-zinc-700'} border transition-all shrink-0">
                    <i class="${pinned ? 'fa-solid text-amber-400' : 'fa-regular'} fa-star"></i> ${pinned ? '已收藏' : '收藏'}
                </button>
            </div>

            <div class="p-4 space-y-3">
                <div class="bg-zinc-950 rounded-lg border border-zinc-800/80 overflow-hidden text-xs">
                    ${attrTableHTML}
                </div>

                <div class="space-y-2">
                    ${item.summary ? `
                        <div class="text-xs font-bold text-amber-500 flex items-center">
                            <i class="fa-solid fa-bookmark mr-1.5 text-xs"></i>概要：${item.summary}
                        </div>
                    ` : ''}
                    ${(item.effect || item.description) ? `
                        <p class="text-xs text-zinc-300 leading-relaxed whitespace-pre-line bg-zinc-950/30 p-2.5 rounded border border-zinc-800/40">
                            ${item.effect || item.description}
                        </p>
                    ` : ''}
                    ${item.note ? `
                        <p class="text-xs text-zinc-300 leading-relaxed whitespace-pre-line bg-zinc-950/60 p-2.5 rounded border border-amber-900/30 font-mono">
                            ${item.note}
                        </p>
                    ` : ''}
                </div>
            </div>
        </div>
    `;
}

// ==================== 7. 單張一般技能/魔法卡片 HTML 生成 ====================
function createSkillCardHTML(b) {
    const subType = getSkillSubType(b);
    const reqLv = getSkillLevel(b);
    const extra = (b.extra && typeof b.extra === 'object') ? b.extra : {};

    const isSong = subType === "咒歌" || b.category === "咒歌";
    const isFinale = subType === "終律" || b.category === "終律";
    const isCommand = subType === "鼓咆" || b.category === "鼓咆";
    const isTactics = subType === "陣率" || b.category === "陣率" || b.category === "軍師";
    const isMagi = b.category === "魔動機術";
    const isSorcerer = b.category === "操靈魔法";
    const isSorcery = b.category === "真語魔法";
    const isDivine = b.category === "神聖魔法" || b.category === "特殊神聖魔法";
    const isWizard = b.category === "深智魔法";
    const isFairy = b.category === "妖精魔法";
    const isAlchemist = b.category === "賦術" || subType === "賦術";
    const isBibliomancer = b.category === "祕奧魔法" || b.category === "典籍魔導士";
    const isDarkHunter = b.category === "操氣" || b.category === "暗獵者";
    const isDruid = b.category === "森羅魔法" || b.category === "德魯伊";
    const isAbyssgazer = b.category === "奈落魔法" || b.category === "奈落使";
    const isCurse = b.category === "咒詛魔法" || b.category === "咒法師";
    const isSummoner = b.category === "召異魔法" || b.category === "召異魔導士";
    const isTori = b.category === "闘理" || b.category === "闘學士" || b.category === "練體士";
    const isRider = b.category === "騎藝" || b.category === "騎手技能" || b.category === "騎手";
    const isGeomancer = b.category === "相域" || b.category === "天地使";

    let badgeColor = "bg-blue-950 text-blue-300 border-blue-800";
    let icon = "fa-wand-magic-sparkles";

    if (isSong) { badgeColor = "bg-amber-950 text-amber-400 border-amber-800"; icon = "fa-music"; }
    else if (isFinale) { badgeColor = "bg-purple-950 text-purple-300 border-purple-800"; icon = "fa-bolt-lightning"; }
    else if (isCommand) { badgeColor = "bg-orange-950 text-orange-300 border-orange-800"; icon = "fa-bullhorn"; }
    else if (isTactics) { badgeColor = "bg-stone-900 text-stone-300 border-stone-700"; icon = "fa-chess-knight"; }
    else if (isMagi) { badgeColor = "bg-cyan-950 text-cyan-300 border-cyan-800"; icon = "fa-gears"; }
    else if (isSorcerer) { badgeColor = "bg-emerald-950 text-emerald-300 border-emerald-800"; icon = "fa-hat-wizard"; }
    else if (isSorcery) { badgeColor = "bg-indigo-950 text-indigo-300 border-indigo-800"; icon = "fa-scroll"; }
    else if (isDivine) { badgeColor = "bg-yellow-950 text-yellow-300 border-yellow-700"; icon = "fa-hands-praying"; }
    else if (isWizard) { badgeColor = "bg-violet-950 text-violet-300 border-violet-800"; icon = "fa-hat-wizard"; }
    else if (isFairy) { badgeColor = "bg-teal-950 text-teal-300 border-teal-800"; icon = "fa-gem"; }
    else if (isAlchemist) { badgeColor = "bg-amber-950 text-amber-300 border-amber-800"; icon = "fa-layer-group"; }
    else if (isBibliomancer) { badgeColor = "bg-rose-950 text-rose-300 border-rose-800"; icon = "fa-book-bookmark"; }
    else if (isDarkHunter) { badgeColor = "bg-red-950 text-red-400 border-red-800"; icon = "fa-crosshairs"; }
    else if (isDruid) { badgeColor = "bg-lime-950 text-lime-300 border-lime-800"; icon = "fa-leaf"; }
    else if (isAbyssgazer) { badgeColor = "bg-zinc-950 text-amber-500 border-amber-900/80"; icon = "fa-eye-low-vision"; }
    else if (isCurse) { badgeColor = "bg-purple-950 text-fuchsia-300 border-fuchsia-800"; icon = "fa-skull"; }
    else if (isSummoner) { badgeColor = "bg-pink-950 text-pink-300 border-pink-800"; icon = "fa-fire-flame-curved"; }
    else if (isTori) { badgeColor = "bg-orange-950 text-amber-300 border-orange-700"; icon = "fa-hand-fist"; }
    else if (isRider) { badgeColor = "bg-emerald-950 text-emerald-400 border-emerald-700"; icon = "fa-horse"; }
    else if (isGeomancer) { badgeColor = "bg-sky-950 text-sky-300 border-sky-800"; icon = "fa-compass"; }

    const uid = getItemUniqueId('skill', b.name, b.category);
    const pinned = isItemPinned(uid);
    const payload = encodeURIComponent(JSON.stringify({ id: uid, itemType: 'skill', data: b }));

    const categoryBadgeHTML = b.category ? `<span class="text-xs px-2 py-0.5 rounded border shrink-0 ${badgeColor}">${b.category}</span>` : '';
    const typeBadgeHTML = (subType && subType !== b.category && !isDivine)
        ? `<span class="text-xs bg-zinc-800 text-zinc-300 px-2 py-0.5 rounded border border-zinc-700 font-medium shrink-0">${subType}</span>`
        : '';
    const godName = b.god || (isDivine && subType ? subType : '');
    const godBadgeHTML = godName
        ? `<span class="text-xs bg-amber-950/80 text-amber-300 px-2 py-0.5 rounded border border-amber-700/80 font-medium shrink-0"><i class="fa-solid fa-ankh mr-1 text-[10px]"></i>${godName}</span>`
        : '';
    const reqLevelHTML = (reqLv !== undefined && reqLv > 0)
        ? `<span class="text-xs bg-zinc-800/80 text-zinc-400 px-2 py-0.5 rounded border border-zinc-700/60 shrink-0">Req: Lv ${reqLv}</span>`
        : '';

    const rawTags = Array.isArray(extra.tags) ? extra.tags : (Array.isArray(b.tags) ? b.tags : []);
    const tagsHTML = rawTags.map(tag => {
        if (tag === "輔助動作" || tag === "補助動作" || tag === "隨動作") {
            return `<span class="text-xs bg-emerald-950/90 text-emerald-300 px-2 py-0.5 rounded border border-emerald-700/80 font-bold shrink-0" title="輔助動作"><i class="fa-solid fa-forward mr-1 text-[10px]"></i>${tag}</span>`;
        }
        return `<span class="text-xs bg-zinc-800 text-zinc-300 px-2 py-0.5 rounded border border-zinc-700 shrink-0">${tag}</span>`;
    }).join('');

    const costVal = b.cost || b.row1_val1 || '－';
    const targetVal = b.target || b.row1_val3 || '－';
    const rangeVal = b.range || b.row2_val1 || '－';
    const durationVal = b.duration || b.row2_val5 || '－';
    const resistVal = b.resistance || b.resist || '－';
    const elementVal = b.element || '－';

    const EXTRA_LABELS = {
        prerequisite: '前提條件',
        risk: '風險',
        usage: '適用／用法',
        stone: '魔動機石',
        expansion: '擴張效果',
        system: '系統',
        rankOrPre: '階級／前提',
        kiCost: '陣氣消耗',
        kiGain: '陣氣累積',
        veinType: '命脈類型',
        limit: '上限／限制',
        singing: '歌唱／條件',
        pet: '寵物',
        condition: '條件／對象',
        targetValue: '目標值',
        bonusCost: '追加消耗'
    };

    function renderExtraGrid(entries, colorClass = 'text-emerald-300') {
        const valid = entries.filter(([, v]) => v !== undefined && v !== null && String(v).trim() !== '');
        if (!valid.length) return '';
        return `
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1 py-1.5 px-3 bg-zinc-950/60 border-t border-zinc-800/60 text-xs">
                ${valid.map(([k, v]) => `
                    <div class="flex justify-between items-center gap-2">
                        <span class="text-zinc-500 font-medium shrink-0">${k}</span>
                        <span class="${colorClass} font-medium text-right break-words">${v}</span>
                    </div>
                `).join('')}
            </div>
        `;
    }

    let middleTableHTML = '';
    const renderedExtraKeys = new Set(['tags', 'expansion']);

    if (b.row3_label) {
        middleTableHTML = `
            <div class="grid grid-cols-6 border-b border-zinc-800/60 py-1.5 px-3">
                <span class="text-zinc-500 font-medium">${b.row1_label}</span>
                <span class="text-center text-zinc-300">${b.row1_val1}</span>
                <span class="text-center text-zinc-300">${b.row1_val2}</span>
                <span class="col-span-3 text-right text-zinc-300">${b.row1_val3}</span>
            </div>
            <div class="grid grid-cols-6 border-b border-zinc-800/60 py-1.5 px-3 bg-zinc-900/40">
                <span class="text-zinc-500 font-medium">${b.row2_label}</span>
                <span class="text-center text-zinc-300">${b.row2_val1}</span>
                <span class="text-center text-zinc-300">${b.row2_val2}</span>
                <span class="text-center text-zinc-300">${b.row2_val3}</span>
                <span class="text-center text-zinc-300">${b.row2_val4}</span>
                <span class="text-right text-amber-300 font-medium">${b.row2_val5}</span>
            </div>
            <div class="grid grid-cols-6 py-1.5 px-3">
                <span class="text-zinc-500 font-medium">${b.row3_label}</span>
                <span class="text-center text-amber-300 font-bold">${b.row3_val1}</span>
                <span class="text-center text-zinc-400">${b.row3_target_label}</span>
                <span class="text-center text-emerald-400 font-bold">${b.row3_target_val}</span>
                <span class="text-center text-zinc-400">${b.row3_bonus_label}</span>
                <span class="text-right text-pink-400 font-bold">${b.row3_bonus_val}</span>
            </div>
        `;
    } else if (isRider || extra.targetMonsters || extra.applicableParts || b.target_monsters || b.applicable_parts) {
        const targetMonsters = extra.targetMonsters || b.target_monsters || b.target || '全種類';
        const applicableParts = extra.applicableParts || b.applicable_parts || b.range || '無';
        const prereq = extra.prerequisite || b.prerequisite || '無';
        renderedExtraKeys.add('targetMonsters');
        renderedExtraKeys.add('applicableParts');
        renderedExtraKeys.add('prerequisite');

        middleTableHTML = `
            <div class="grid grid-cols-6 border-b border-zinc-800/60 py-1.5 px-3">
                <span class="text-zinc-500 font-medium">對應魔物</span>
                <span class="col-span-5 text-right text-emerald-300 font-medium">${targetMonsters}</span>
            </div>
            <div class="grid grid-cols-6 border-b border-zinc-800/60 py-1.5 px-3 bg-zinc-900/40">
                <span class="text-zinc-500 font-medium">適用部位</span>
                <span class="col-span-5 text-right text-amber-300 font-medium">${applicableParts}</span>
            </div>
            <div class="grid grid-cols-6 py-1.5 px-3">
                <span class="text-zinc-500 font-medium">前提條件</span>
                <span class="col-span-5 text-right text-cyan-300 font-medium">${prereq}</span>
            </div>
        `;
    } else if (isTori) {
        let applyText = extra.usage || b.usage || b.range || '－';
        let riskText = extra.risk || '無';
        if (!extra.risk && applyText.includes('風險：')) {
            const parts = applyText.split(/\s*[／/]\s*風險：/);
            applyText = parts[0] || '－';
            riskText = parts[1] || '無';
        }
        const prereq = extra.prerequisite || b.prerequisite || '無';
        renderedExtraKeys.add('usage');
        renderedExtraKeys.add('risk');
        renderedExtraKeys.add('prerequisite');

        middleTableHTML = `
            <div class="grid grid-cols-6 border-b border-zinc-800/60 py-1.5 px-3">
                <span class="text-zinc-500 font-medium">適用</span>
                <span class="col-span-3 text-amber-300 font-bold">${applyText}</span>
                <span class="text-zinc-500 font-medium text-right pr-2">風險</span>
                <span class="text-right ${riskText === '無' ? 'text-zinc-300' : 'text-rose-400 font-bold'}">${riskText}</span>
            </div>
            <div class="grid grid-cols-6 py-1.5 px-3 bg-zinc-900/40">
                <span class="text-zinc-500 font-medium">前提條件</span>
                <span class="col-span-5 text-right text-cyan-300 font-medium">${prereq}</span>
            </div>
        `;
    } else if (isAlchemist) {
        const prereq = extra.prerequisite || b.prerequisite || '無';
        const risk = extra.risk || '無';
        const usage = extra.usage || b.usage || '－';
        renderedExtraKeys.add('prerequisite');
        renderedExtraKeys.add('risk');
        renderedExtraKeys.add('usage');

        middleTableHTML = `
            <div class="grid grid-cols-6 border-b border-zinc-800/60 py-1.5 px-3">
                <span class="text-zinc-500 font-medium">消耗</span>
                <span class="col-span-2 text-cyan-300 font-bold">${costVal}</span>
                <span class="text-zinc-500 font-medium text-right pr-2">對象</span>
                <span class="col-span-2 text-right text-zinc-300">${targetVal}</span>
            </div>
            <div class="grid grid-cols-6 border-b border-zinc-800/60 py-1.5 px-3 bg-zinc-900/40">
                <span class="text-zinc-500 font-medium">射程</span>
                <span class="col-span-2 text-zinc-300 whitespace-nowrap">${rangeVal}</span>
                <span class="text-zinc-500 font-medium text-right pr-2">時間</span>
                <span class="col-span-2 text-right text-zinc-300">${durationVal}</span>
            </div>
            <div class="grid grid-cols-6 border-b border-zinc-800/60 py-1.5 px-3">
                <span class="text-zinc-500 font-medium">抵抗</span>
                <span class="col-span-2 text-amber-300 font-medium">${resistVal}</span>
                <span class="text-zinc-500 font-medium text-right pr-2">風險</span>
                <span class="col-span-2 text-right ${risk === '無' ? 'text-zinc-300' : 'text-rose-400 font-bold'}">${risk}</span>
            </div>
            ${renderExtraGrid([
                ['前提條件', prereq],
                ['適用／用法', usage]
            ], 'text-cyan-300')}
        `;
    } else if (isSong || isFinale) {
        renderedExtraKeys.add('singing');
        renderedExtraKeys.add('pet');
        renderedExtraKeys.add('condition');
        renderedExtraKeys.add('targetValue');
        renderedExtraKeys.add('bonusCost');

        const extraRows = [
            extra.singing ? ['歌唱／條件', extra.singing] : null,
            extra.pet ? ['寵物', extra.pet] : null,
            extra.condition ? ['條件／對象', extra.condition] : null,
            extra.targetValue ? ['目標值', extra.targetValue] : null,
            extra.bonusCost ? ['追加消耗', extra.bonusCost] : null,
        ].filter(Boolean);

        middleTableHTML = `
            <div class="grid grid-cols-6 border-b border-zinc-800/60 py-1.5 px-3">
                <span class="text-zinc-500 font-medium">消耗／巧奏</span>
                <span class="col-span-2 text-cyan-300 font-bold">${costVal}</span>
                <span class="text-zinc-500 font-medium text-right pr-2">抵抗</span>
                <span class="col-span-2 text-right text-amber-300 font-medium">${resistVal}</span>
            </div>
            <div class="grid grid-cols-6 border-b border-zinc-800/60 py-1.5 px-3 bg-zinc-900/40">
                <span class="text-zinc-500 font-medium">條件／範圍</span>
                <span class="col-span-2 text-zinc-300">${rangeVal}</span>
                <span class="text-zinc-500 font-medium text-right pr-2">屬性</span>
                <span class="col-span-2 text-right text-purple-300 font-medium">${elementVal}</span>
            </div>
            ${renderExtraGrid(extraRows, 'text-emerald-300')}
        `;
    } else if (isCommand || isTactics || isGeomancer) {
        renderedExtraKeys.add('system');
        renderedExtraKeys.add('rankOrPre');
        renderedExtraKeys.add('kiCost');
        renderedExtraKeys.add('kiGain');
        renderedExtraKeys.add('veinType');
        renderedExtraKeys.add('limit');
        renderedExtraKeys.add('bonusLabel');
        renderedExtraKeys.add('bonusVal');

        const extraRows = [
            extra.system ? ['系統', extra.system] : null,
            extra.rankOrPre ? ['階級／前提', extra.rankOrPre] : null,
            extra.kiCost ? ['陣氣消耗', extra.kiCost] : null,
            extra.kiGain ? ['陣氣累積', extra.kiGain] : null,
            extra.veinType ? ['命脈類型', extra.veinType] : null,
            extra.limit ? ['上限／限制', extra.limit] : null,
            (extra.bonusLabel && extra.bonusVal) ? [extra.bonusLabel, extra.bonusVal] : null,
        ].filter(Boolean);

        middleTableHTML = `
            <div class="grid grid-cols-6 border-b border-zinc-800/60 py-1.5 px-3">
                <span class="text-zinc-500 font-medium">消耗</span>
                <span class="col-span-2 text-cyan-300 font-bold">${costVal}</span>
                <span class="text-zinc-500 font-medium text-right pr-2">時間</span>
                <span class="col-span-2 text-right text-zinc-300">${durationVal}</span>
            </div>
            <div class="grid grid-cols-6 border-b border-zinc-800/60 py-1.5 px-3 bg-zinc-900/40">
                <span class="text-zinc-500 font-medium">條件／範圍</span>
                <span class="col-span-2 text-zinc-300">${rangeVal}</span>
                <span class="text-zinc-500 font-medium text-right pr-2">屬性</span>
                <span class="col-span-2 text-right text-purple-300 font-medium">${elementVal}</span>
            </div>
            ${renderExtraGrid(extraRows, 'text-amber-300')}
        `;
    } else {
        middleTableHTML = `
            <div class="grid grid-cols-6 border-b border-zinc-800/60 py-1.5 px-3">
                <span class="text-zinc-500 font-medium">消耗</span>
                <span class="col-span-2 text-cyan-300 font-bold">${costVal}</span>
                <span class="text-zinc-500 font-medium text-right pr-2">對象</span>
                <span class="col-span-2 text-right text-zinc-300">${targetVal}</span>
            </div>
            <div class="grid grid-cols-6 border-b border-zinc-800/60 py-1.5 px-3 bg-zinc-900/40">
                <span class="text-zinc-500 font-medium">射程</span>
                <span class="col-span-2 text-zinc-300 whitespace-nowrap">${rangeVal}</span>
                <span class="text-zinc-500 font-medium text-right pr-2">時間</span>
                <span class="col-span-2 text-right text-zinc-300">${durationVal}</span>
            </div>
            <div class="grid grid-cols-6 py-1.5 px-3">
                <span class="text-zinc-500 font-medium">抵抗</span>
                <span class="col-span-2 text-amber-300 font-medium">${resistVal}</span>
                <span class="text-zinc-500 font-medium text-right pr-2">屬性</span>
                <span class="col-span-2 text-right text-purple-300 font-medium">${elementVal}</span>
            </div>
        `;
    }

    const remainingExtraEntries = Object.entries(extra)
        .filter(([k, v]) => !renderedExtraKeys.has(k) && v !== undefined && v !== null && String(v).trim() !== '')
        .map(([k, v]) => [EXTRA_LABELS[k] || k, v]);

    const remainingExtraHTML = renderExtraGrid(remainingExtraEntries, 'text-cyan-300');

    const expansionText = extra.expansion || b.expansion || '';
    const expansionHTML = expansionText ? `
        <div class="space-y-1 pt-2 border-t border-zinc-800/60">
            <div class="text-xs font-bold text-amber-400 flex items-center">
                <i class="fa-solid fa-angles-up mr-1.5 text-xs text-amber-500"></i>擴張效果：
            </div>
            <p class="text-xs text-zinc-300 leading-relaxed whitespace-pre-line bg-amber-950/20 p-2.5 rounded border border-amber-900/30">
                ${expansionText}
            </p>
        </div>
    ` : '';

    return `
        <div class="bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden shadow-lg hover:border-zinc-700 transition-all flex flex-col">
            <div class="p-4 bg-zinc-950/60 border-b border-zinc-800 flex justify-between items-center gap-3">
                <div class="flex flex-wrap items-center gap-1.5 min-w-0">
                    ${categoryBadgeHTML}
                    ${typeBadgeHTML}
                    ${godBadgeHTML}
                    ${reqLevelHTML}
                    ${tagsHTML}
                    <h3 class="text-base font-bold text-amber-400 ml-1">
                        <i class="fa-solid ${icon} mr-1 text-amber-500"></i>${b.name}
                        ${b.nameJp ? `<span class="text-xs text-zinc-500 font-normal ml-1 font-mono">(${b.nameJp})</span>` : ''}
                    </h3>
                </div>
                <button data-pin-id="${uid}" onclick="togglePinDataItem('${payload}')"
                    class="text-xs px-2.5 py-1 rounded-lg ${pinned ? 'bg-amber-500/20 text-amber-300 border-amber-500/40' : 'bg-zinc-800 hover:bg-zinc-700 text-zinc-400 hover:text-amber-300 border-zinc-700'} border transition-all shrink-0">
                    <i class="${pinned ? 'fa-solid text-amber-400' : 'fa-regular'} fa-star"></i> ${pinned ? '已收藏' : '收藏'}
                </button>
            </div>

            <div class="p-4 space-y-3">
                <div class="bg-zinc-950 rounded-lg border border-zinc-800/80 overflow-hidden text-xs">
                    ${middleTableHTML}
                    ${remainingExtraHTML}
                </div>

                <div class="space-y-2">
                    <div class="space-y-1">
                        <div class="text-xs font-bold text-amber-500 flex items-center">
                            <i class="fa-solid fa-bookmark mr-1.5 text-xs"></i>概要：${b.summary || ''}
                        </div>
                        <p class="text-xs text-zinc-300 leading-relaxed whitespace-pre-line bg-zinc-950/30 p-2.5 rounded border border-zinc-800/40">
                            ${b.effect || ''}
                        </p>
                    </div>
                    ${expansionHTML}
                </div>
            </div>
        </div>
    `;
}

// ==================== 8. 技能 DOM 渲染與捲動懶載入 ====================
function renderBardSongs(isNewSearch = false) {
    const container = document.getElementById('bard-list');
    const countEl = document.getElementById('song-count');
    if (!container || !countEl) return;

    countEl.innerText = currentFilteredSkills.length;

    if (isNewSearch) {
        container.innerHTML = '';
    }

    if (currentFilteredSkills.length === 0) {
        container.innerHTML = `
            <div class="col-span-full text-center py-12 bg-zinc-900/50 rounded-xl border border-zinc-800">
                <i class="fa-solid fa-ghost text-4xl text-zinc-600 mb-3"></i>
                <p class="text-zinc-400 text-sm">沒有找到符合條件的技能或魔法。</p>
            </div>
        `;
        return;
    }

    const startIndex = (currentSkillPage - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    const pageItems = currentFilteredSkills.slice(startIndex, endIndex);

    if (pageItems.length === 0) return;

    const fragment = document.createElement('template');
    let htmlChunk = '';

    pageItems.forEach(b => {
        if (isCombatFeatItem(b)) {
            htmlChunk += renderCombatFeatCard(b);
        } else {
            htmlChunk += createSkillCardHTML(b);
        }
    });

    fragment.innerHTML = htmlChunk;
    container.appendChild(fragment.content);
}

window.addEventListener('scroll', () => {
    const secBards = document.getElementById('sec-bards');
    if (secBards && !secBards.classList.contains('hidden')) {
        if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 400) {
            if (currentSkillPage * pageSize < currentFilteredSkills.length) {
                currentSkillPage++;
                renderBardSongs(false);
            }
        }
    }
});

// ==================== 9. 頁面初始化 ====================
document.addEventListener('DOMContentLoaded', () => {
    updateCustomBadgeCount();
    syncItemCategorySelectOptions(getNormalizedItemsDataset());
    switchMainTab('bards');
    initCharSheetQuickAddObserver();
});

// ==================== 全域規則即時檢索系統 ====================
function getSearchableDatabase() {
    const db = [];
    const standaloneRuleIds = ['advanced_combat_rules', 'power_table_rules', 'sec-advanced_combat_rules', 'sec-power_table_rules'];

    if (Array.isArray(ruleSections)) {
        ruleSections.forEach(sec => {
            let extractedTitle = sec.title;
            if (!extractedTitle && sec.content) {
                const h2Match = sec.content.match(/<h2[^>]*>([\s\S]*?)<\/h2>/i);
                extractedTitle = h2Match ? h2Match[1].replace(/<[^>]+>/g, '').trim() : sec.id;
            }

            const isStandalone = standaloneRuleIds.includes(sec.id);

            db.push({
                id: sec.id,
                type: isStandalone ? 'main_tab' : 'rule_subtab',
                badge: isStandalone ? '獨立規則' : '技能規則',
                title: extractedTitle,
                icon: sec.icon || 'fa-solid fa-book-open',
                plainText: (sec.content || '').replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim()
            });
        });
    }

    const extraModules = [
        { id: 'races', title: '種族圖鑑與種族特徵', icon: 'fa-solid fa-users', content: typeof racesContent !== 'undefined' ? racesContent : '' },
        { id: 'other_rules', title: '其他規則與判定總覽', icon: 'fa-solid fa-book-bookmark', content: typeof otherRulesContent !== 'undefined' ? otherRulesContent : '' },
        { id: 'equipmentEnhancement_rules', title: '裝備強化與魔化規則', icon: 'fa-solid fa-hammer', content: typeof equipmentEnhancementContent !== 'undefined' ? equipmentEnhancementContent : '' },
        { id: 'reputation_rules', title: '名譽點與冒險者階級', icon: 'fa-solid fa-award', content: typeof reputationRankContent !== 'undefined' ? reputationRankContent : '' }
    ];

    extraModules.forEach(mod => {
        if (mod.content) {
            db.push({
                id: mod.id,
                type: 'main_tab',
                badge: '系統模組',
                title: mod.title,
                icon: mod.icon,
                plainText: mod.content.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim()
            });
        }
    });

    return db;
}

window.handleGlobalRuleSearch = function(query) {
    const resultsContainer = document.getElementById('global-search-results');
    const clearBtn = document.getElementById('clear-rule-search-btn');
    if (!resultsContainer) return;

    const keyword = query.trim();
    if (clearBtn) clearBtn.classList.toggle('hidden', keyword.length === 0);

    if (keyword.length === 0) {
        resultsContainer.classList.add('hidden');
        resultsContainer.innerHTML = '';
        return;
    }

    const db = getSearchableDatabase();
    const lowerKeyword = keyword.toLowerCase();
    const matches = [];

    db.forEach(item => {
        const titleMatch = item.title.toLowerCase().includes(lowerKeyword);
        const textIndex = item.plainText.toLowerCase().indexOf(lowerKeyword);

        if (titleMatch || textIndex !== -1) {
            let snippet = '';
            if (textIndex !== -1) {
                const start = Math.max(0, textIndex - 30);
                const end = Math.min(item.plainText.length, textIndex + keyword.length + 45);
                snippet = (start > 0 ? '...' : '') + item.plainText.slice(start, end) + (end < item.plainText.length ? '...' : '');
            } else {
                snippet = item.plainText.slice(0, 75) + '...';
            }

            const escapedKeyword = keyword.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
            const highlightRegex = new RegExp(`(${escapedKeyword})`, 'gi');
            const highlightedTitle = item.title.replace(highlightRegex, '<mark class="bg-amber-500/30 text-amber-300 font-bold px-0.5 rounded">$1</mark>');
            const highlightedSnippet = snippet.replace(highlightRegex, '<mark class="bg-amber-500/30 text-amber-300 font-bold px-0.5 rounded">$1</mark>');

            matches.push({
                ...item,
                highlightedTitle,
                highlightedSnippet,
                score: titleMatch ? 2 : 1
            });
        }
    });

    matches.sort((a, b) => b.score - a.score);
    resultsContainer.classList.remove('hidden');

    if (matches.length === 0) {
        resultsContainer.innerHTML = `
            <div class="p-4 text-center text-xs text-zinc-400">
                <i class="fa-regular fa-face-frown mr-1.5"></i>找不到包含「<span class="text-amber-400 font-bold">${keyword}</span>」的規則條目
            </div>
        `;
        return;
    }

    resultsContainer.innerHTML = matches.map(m => `
        <button 
            onclick="navigateToSearchResult('${m.type}', '${m.id}', '${keyword.replace(/'/g, "\\'")}')"
            class="w-full text-left p-3.5 hover:bg-zinc-800/90 transition-colors flex flex-col gap-1 focus:outline-none"
        >
            <div class="flex items-center justify-between">
                <span class="text-sm font-bold text-zinc-200 flex items-center gap-2">
                    <i class="${m.icon} text-amber-400 text-xs"></i>
                    <span>${m.highlightedTitle}</span>
                </span>
                <span class="text-[10px] px-2 py-0.5 rounded bg-zinc-950 text-zinc-400 border border-zinc-800">
                    ${m.badge}
                </span>
            </div>
            <p class="text-xs text-zinc-400 line-clamp-2 leading-relaxed pl-5">
                ${m.highlightedSnippet}
            </p>
        </button>
    `).join('');
};

window.navigateToSearchResult = function(type, targetId, keyword) {
    const resultsContainer = document.getElementById('global-search-results');
    if (resultsContainer) resultsContainer.classList.add('hidden');

    if (type === 'rule_subtab') {
        if (typeof window.switchMainTab === 'function') window.switchMainTab('rules');
        if (typeof window.switchRuleSubTab === 'function') window.switchRuleSubTab(targetId);
    } else if (type === 'main_tab') {
        const cleanMainId = targetId.replace(/^sec-/, '');
        if (typeof window.switchMainTab === 'function') window.switchMainTab(cleanMainId);
    }

    setTimeout(() => {
        const container = document.getElementById('rules-container') || document.querySelector('main');
        const walker = document.createTreeWalker(container, NodeFilter.SHOW_TEXT, null, false);
        let node;
        const lowerKw = keyword.toLowerCase();

        while ((node = walker.nextNode())) {
            if (node.nodeValue && node.nodeValue.toLowerCase().includes(lowerKw)) {
                const targetElement = node.parentElement;
                if (targetElement) {
                    targetElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
                    targetElement.classList.add('ring-2', 'ring-amber-400', 'bg-amber-500/20', 'rounded', 'transition-all');
                    setTimeout(() => {
                        targetElement.classList.remove('ring-2', 'ring-amber-400', 'bg-amber-500/20');
                    }, 2500);
                    break;
                }
            }
        }
    }, 80);
};

window.clearGlobalRuleSearch = function() {
    const input = document.getElementById('global-rule-search');
    const resultsContainer = document.getElementById('global-search-results');
    const clearBtn = document.getElementById('clear-rule-search-btn');

    if (input) input.value = '';
    if (resultsContainer) resultsContainer.classList.add('hidden');
    if (clearBtn) clearBtn.classList.add('hidden');
};

document.addEventListener('click', (e) => {
    const searchInput = document.getElementById('global-rule-search');
    const resultsContainer = document.getElementById('global-search-results');
    if (searchInput && resultsContainer && !searchInput.contains(e.target) && !resultsContainer.contains(e.target)) {
        resultsContainer.classList.add('hidden');
    }
});

// ==================== SW2.5 威力表完整資料矩陣 (0~100) ====================
export const powerTableData = {
    0:  [0, 0, 0, 0, 1, 2, 2, 3, 3, 4, 4],
    1:  [0, 0, 0, 0, 1, 2, 3, 3, 3, 4, 4],
    2:  [0, 0, 0, 1, 1, 2, 3, 4, 4, 4, 4],
    3:  [0, 0, 0, 1, 1, 2, 3, 4, 4, 4, 5],
    4:  [0, 0, 0, 1, 2, 2, 3, 4, 4, 5, 5],
    5:  [0, 0, 1, 1, 2, 2, 3, 4, 5, 5, 5],
    6:  [0, 0, 1, 1, 2, 3, 3, 4, 5, 5, 5],
    7:  [0, 0, 1, 1, 2, 3, 4, 4, 5, 5, 6],
    8:  [0, 0, 1, 2, 2, 3, 4, 4, 5, 6, 6],
    9:  [0, 0, 1, 2, 3, 3, 4, 4, 5, 6, 7],
    10: [0, 1, 1, 2, 3, 3, 4, 5, 5, 6, 7],
    11: [0, 1, 2, 2, 3, 3, 4, 5, 6, 6, 7],
    12: [0, 1, 2, 2, 3, 4, 4, 5, 6, 6, 7],
    13: [0, 1, 2, 3, 3, 4, 4, 5, 6, 7, 7],
    14: [0, 1, 2, 3, 4, 4, 4, 5, 6, 7, 8],
    15: [0, 1, 2, 3, 4, 4, 5, 5, 6, 7, 8],
    16: [0, 1, 2, 3, 4, 4, 5, 6, 7, 7, 8],
    17: [0, 1, 2, 3, 4, 5, 5, 6, 7, 7, 8],
    18: [0, 1, 2, 3, 4, 5, 6, 6, 7, 7, 8],
    19: [0, 1, 2, 3, 4, 5, 6, 7, 7, 8, 9],
    20: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    21: [0, 1, 2, 3, 4, 6, 6, 7, 8, 9, 10],
    22: [0, 1, 2, 3, 5, 6, 6, 7, 8, 9, 10],
    23: [0, 2, 2, 3, 5, 6, 7, 7, 8, 9, 10],
    24: [0, 2, 3, 4, 5, 6, 7, 7, 8, 9, 10],
    25: [0, 2, 3, 4, 5, 6, 7, 8, 8, 9, 10],
    26: [0, 2, 3, 4, 5, 6, 8, 8, 9, 9, 10],
    27: [0, 2, 3, 4, 6, 6, 8, 8, 9, 9, 10],
    28: [0, 2, 3, 4, 6, 6, 8, 9, 9, 10, 10],
    29: [0, 2, 3, 4, 6, 7, 8, 9, 9, 10, 10],
    30: [0, 2, 4, 4, 6, 7, 8, 9, 10, 10, 10],
    31: [0, 2, 4, 5, 6, 7, 8, 9, 10, 10, 11],
    32: [0, 3, 4, 5, 6, 7, 8, 10, 10, 10, 11],
    33: [0, 3, 4, 5, 6, 8, 8, 10, 10, 10, 11],
    34: [0, 3, 4, 5, 6, 8, 9, 10, 10, 11, 11],
    35: [0, 3, 4, 5, 7, 8, 9, 10, 10, 11, 12],
    36: [0, 3, 5, 5, 7, 8, 9, 10, 11, 11, 12],
    37: [0, 3, 5, 6, 7, 8, 9, 10, 11, 12, 12],
    38: [0, 3, 5, 6, 7, 8, 10, 10, 11, 12, 13],
    39: [0, 4, 5, 6, 7, 8, 10, 11, 11, 12, 13],
    40: [0, 4, 5, 6, 7, 9, 10, 11, 11, 12, 13],
    41: [0, 4, 6, 6, 7, 9, 10, 11, 12, 12, 13],
    42: [0, 4, 6, 7, 7, 9, 10, 11, 12, 13, 13],
    43: [0, 4, 6, 7, 8, 9, 10, 11, 12, 13, 14],
    44: [0, 4, 6, 7, 8, 10, 10, 11, 12, 13, 14],
    45: [0, 4, 6, 7, 9, 10, 10, 11, 12, 13, 14],
    46: [0, 4, 6, 7, 9, 10, 10, 12, 13, 13, 14],
    47: [0, 4, 6, 7, 9, 10, 11, 12, 13, 13, 15],
    48: [0, 4, 6, 7, 9, 10, 12, 12, 13, 13, 15],
    49: [0, 4, 6, 7, 10, 10, 12, 12, 13, 14, 15],
    50: [0, 4, 6, 8, 10, 10, 12, 12, 13, 15, 15],
    51: [0, 5, 7, 8, 10, 10, 12, 12, 13, 15, 15],
    52: [0, 5, 7, 8, 10, 11, 12, 12, 13, 15, 15],
    53: [0, 5, 7, 9, 10, 11, 12, 12, 14, 15, 15],
    54: [0, 5, 7, 9, 10, 11, 12, 13, 14, 15, 16],
    55: [0, 5, 7, 10, 10, 11, 12, 13, 14, 16, 16],
    56: [0, 5, 8, 10, 10, 11, 12, 13, 15, 16, 16],
    57: [0, 5, 8, 10, 11, 11, 12, 13, 15, 16, 17],
    58: [0, 5, 8, 10, 11, 12, 12, 13, 15, 16, 17],
    59: [0, 5, 9, 10, 11, 12, 12, 14, 15, 16, 17],
    60: [0, 5, 9, 10, 11, 12, 13, 14, 15, 16, 18],
    61: [0, 5, 9, 10, 11, 12, 13, 14, 16, 17, 18],
    62: [0, 5, 9, 10, 11, 13, 13, 14, 16, 17, 18],
    63: [0, 5, 9, 10, 11, 13, 13, 15, 17, 17, 18],
    64: [0, 5, 9, 10, 11, 13, 14, 15, 17, 17, 18],
    65: [0, 5, 9, 10, 12, 13, 14, 15, 17, 18, 18],
    66: [0, 5, 9, 10, 12, 13, 15, 15, 17, 18, 19],
    67: [0, 5, 9, 10, 12, 13, 15, 16, 17, 19, 19],
    68: [0, 5, 9, 10, 12, 14, 15, 16, 17, 19, 19],
    69: [0, 5, 9, 10, 12, 14, 16, 16, 17, 19, 19],
    70: [0, 5, 9, 10, 12, 14, 16, 17, 18, 19, 19],
    71: [0, 5, 9, 10, 13, 14, 16, 17, 18, 19, 20],
    72: [0, 5, 9, 10, 13, 15, 16, 17, 18, 19, 20],
    73: [0, 5, 9, 10, 13, 15, 16, 17, 19, 20, 21],
    74: [0, 6, 9, 10, 13, 15, 16, 18, 19, 20, 21],
    75: [0, 6, 9, 10, 13, 16, 16, 18, 19, 20, 21],
    76: [0, 6, 9, 10, 13, 16, 17, 18, 19, 20, 21],
    77: [0, 6, 9, 10, 13, 16, 17, 18, 20, 21, 22],
    78: [0, 6, 9, 10, 13, 16, 17, 19, 20, 22, 23],
    79: [0, 6, 9, 10, 13, 16, 18, 19, 20, 22, 23],
    80: [0, 6, 9, 10, 13, 16, 18, 20, 21, 22, 23],
    81: [0, 6, 9, 10, 13, 17, 18, 20, 21, 22, 23],
    82: [0, 6, 9, 10, 14, 17, 18, 20, 21, 22, 24],
    83: [0, 6, 9, 11, 14, 17, 18, 20, 21, 23, 24],
    84: [0, 6, 9, 11, 14, 17, 19, 20, 21, 23, 24],
    85: [0, 6, 9, 11, 14, 17, 19, 21, 22, 23, 24],
    86: [0, 7, 10, 11, 14, 17, 19, 21, 22, 23, 25],
    87: [0, 7, 10, 12, 14, 17, 19, 21, 22, 24, 25],
    88: [0, 7, 10, 12, 14, 18, 19, 21, 22, 24, 25],
    89: [0, 7, 10, 12, 15, 18, 19, 21, 22, 24, 26],
    90: [0, 7, 10, 12, 15, 18, 19, 21, 23, 25, 26],
    91: [0, 7, 11, 13, 15, 18, 19, 21, 23, 25, 26],
    92: [0, 7, 11, 13, 15, 18, 20, 21, 23, 25, 27],
    93: [0, 8, 11, 13, 15, 18, 20, 22, 23, 25, 27],
    94: [0, 8, 11, 13, 16, 18, 20, 22, 23, 25, 28],
    95: [0, 8, 11, 14, 16, 18, 20, 22, 23, 26, 28],
    96: [0, 8, 11, 14, 16, 19, 20, 22, 23, 26, 28],
    97: [0, 8, 12, 14, 16, 19, 20, 22, 24, 26, 28],
    98: [0, 8, 12, 15, 16, 19, 20, 22, 24, 27, 28],
    99: [0, 8, 12, 15, 17, 19, 20, 22, 24, 27, 29],
    100:[0, 8, 12, 15, 18, 19, 20, 22, 24, 27, 30]
};

window.calcPowerResult = function() {
    const powerInput = document.getElementById('calc-power-input');
    const diceInput = document.getElementById('calc-dice-input');
    const outputEl = document.getElementById('calc-power-output');

    if (!powerInput || !diceInput || !outputEl) return;

    let p = parseInt(powerInput.value) || 0;
    p = Math.max(0, Math.min(100, p));
    const roll = parseInt(diceInput.value) || 7;

    const row = powerTableData[p];
    if (row) {
        const val = row[roll - 2];
        outputEl.textContent = val === 0 ? '*' : val;
    }
};

window.renderPowerTableRows = function() {
    const tbody1 = document.getElementById('power-table-body-1');
    const tbody2 = document.getElementById('power-table-body-2');

    if (!tbody1 || !tbody2 || tbody1.children.length > 0) return;

    let html1 = '';
    let html2 = '';

    for (let p = 0; p <= 100; p++) {
        const rowData = powerTableData[p];
        const rowHTML = `
            <tr class="hover:bg-amber-500/10 transition-colors">
                <td class="py-1 px-1.5 font-bold text-amber-400 bg-zinc-900 border-r border-zinc-800">${p}</td>
                ${rowData.map(v => `<td class="py-1 px-1 ${v === 0 ? 'text-zinc-600 font-normal' : 'text-zinc-200'}">${v === 0 ? '*' : v}</td>`).join('')}
            </tr>
        `;
        if (p <= 50) {
            html1 += rowHTML;
        } else {
            html2 += rowHTML;
        }
    }

    tbody1.innerHTML = html1;
    tbody2.innerHTML = html2;
};

// ==================== 10. TRPG 跑團現場實用小工具 ====================
const expTableA = [0, 1000, 2000, 3500, 5000, 7000, 9500, 12500, 16500, 21500, 28000, 36000, 46000, 58500, 73500, 93500];
const expTableB = [0, 500, 1500, 2500, 4000, 5500, 7500, 10000, 13000, 17000, 22000, 28500, 36500, 46500, 59000, 74000];

function getFieldToolsHTML() {
    return `
        <div class="space-y-6">
            <div class="bg-zinc-900/90 border border-amber-500/30 rounded-xl p-5 shadow-lg flex items-center gap-3">
                <div class="p-2.5 bg-amber-500/10 rounded-lg text-amber-400">
                    <i class="fa-solid fa-toolbox text-2xl"></i>
                </div>
                <div>
                    <h2 class="text-xl font-bold text-amber-400 tracking-wider">SW2.5 跑團現場實用小工具</h2>
                    <p class="text-xs text-zinc-400">支援 C 值無限旋轉（爆擊）傷害模擬，以及 A/B 經驗表技能配點與冒險者等級即時試算。</p>
                </div>
            </div>

            <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div class="bg-zinc-900 border border-zinc-800 rounded-xl p-5 space-y-4 shadow-lg flex flex-col justify-between">
                    <div class="space-y-4">
                        <h3 class="text-base font-bold text-amber-400 border-b border-zinc-800 pb-2 flex items-center justify-between">
                            <span><i class="fa-solid fa-dice text-amber-500 mr-2"></i>1. 威力表旋轉（Critical）傷害模擬器</span>
                            <span class="text-[11px] font-normal text-zinc-500">自動判定 1,1 失誤與 C 值連轉</span>
                        </h3>

                        <div class="grid grid-cols-3 gap-3 text-xs">
                            <div>
                                <label class="block text-zinc-400 mb-1 font-medium">威力 (0~100)</label>
                                <input type="number" id="crit-power" min="0" max="100" value="20" oninput="calcManualCrit()" class="w-full bg-zinc-950 border border-zinc-700 rounded-lg px-3 py-2 text-amber-300 font-bold focus:outline-none focus:border-amber-500">
                            </div>
                            <div>
                                <label class="block text-zinc-400 mb-1 font-medium">C 值 (Crit)</label>
                                <select id="crit-value" onchange="calcManualCrit()" class="w-full bg-zinc-950 border border-zinc-700 rounded-lg px-3 py-2 text-pink-400 font-bold focus:outline-none focus:border-amber-500">
                                    <option value="8">8</option>
                                    <option value="9">9</option>
                                    <option value="10" selected>10</option>
                                    <option value="11">11</option>
                                    <option value="12">12</option>
                                    <option value="13">13 (不旋轉)</option>
                                </select>
                            </div>
                            <div>
                                <label class="block text-zinc-400 mb-1 font-medium">固定追加傷害</label>
                                <input type="number" id="crit-bonus" value="6" oninput="calcManualCrit()" class="w-full bg-zinc-950 border border-zinc-700 rounded-lg px-3 py-2 text-emerald-300 font-bold focus:outline-none focus:border-amber-500">
                            </div>
                        </div>

                        <div class="flex flex-col sm:flex-row gap-2 pt-1">
                            <button onclick="rollCritDamage()" class="flex-1 bg-amber-600 hover:bg-amber-500 text-zinc-950 font-bold py-2.5 px-4 rounded-lg text-sm transition-colors flex items-center justify-center gap-2 shadow">
                                <i class="fa-solid fa-dice-d6"></i> 模擬擲骰 (Roll 2d6)
                            </button>
                            <div class="flex items-center gap-2 bg-zinc-950 border border-zinc-800 rounded-lg px-3 py-1.5 text-xs">
                                <span class="text-zinc-400 whitespace-nowrap">手動輸入骰值序列：</span>
                                <input type="text" id="crit-manual-rolls" placeholder="例: 10, 11, 6" oninput="calcManualCrit()" class="w-28 bg-zinc-900 border border-zinc-700 rounded px-2 py-1 text-cyan-300 font-mono focus:outline-none focus:border-amber-500">
                            </div>
                        </div>
                    </div>

                    <div id="crit-result-box" class="bg-zinc-950 border border-zinc-800 rounded-xl p-4 space-y-2.5 mt-4">
                        <div class="flex justify-between items-center border-b border-zinc-800/80 pb-2">
                            <span class="text-xs text-zinc-400">最終總傷害（含追加傷害）</span>
                            <span id="crit-total-dmg" class="text-2xl font-extrabold text-amber-400 font-mono">10</span>
                        </div>
                        <div id="crit-roll-log" class="text-xs text-zinc-300 space-y-1 font-mono">
                            <div class="text-zinc-500">點擊「模擬擲骰」或輸入逗號分隔的 2d6 點數（如 10, 7）查看明細。</div>
                        </div>
                    </div>
                </div>

                <div class="bg-zinc-900 border border-zinc-800 rounded-xl p-5 space-y-4 shadow-lg flex flex-col justify-between">
                    <div class="space-y-3">
                        <h3 class="text-base font-bold text-amber-400 border-b border-zinc-800 pb-2 flex items-center justify-between">
                            <span><i class="fa-solid fa-chart-line text-amber-500 mr-2"></i>2. 經驗點與冒險者等級速算器</span>
                            <button onclick="addSkillExpRow()" class="text-xs bg-zinc-800 hover:bg-zinc-700 text-amber-400 border border-zinc-700 px-2.5 py-1 rounded transition-colors">
                                <i class="fa-solid fa-plus mr-1"></i>新增技能
                            </button>
                        </h3>

                        <div class="grid grid-cols-3 gap-2 text-xs bg-zinc-950 p-3 rounded-lg border border-zinc-800">
                            <div>
                                <label class="block text-zinc-500 mb-1">持有總經驗點</label>
                                <input type="number" id="exp-total-pool" value="10000" step="500" oninput="recalcSkillExp()" class="w-full bg-zinc-900 border border-zinc-700 rounded px-2 py-1 text-zinc-200 font-bold font-mono focus:outline-none focus:border-amber-500">
                            </div>
                            <div class="text-center flex flex-col justify-center">
                                <span class="text-zinc-500 mb-0.5">剩餘可用經驗</span>
                                <span id="exp-remaining" class="text-sm font-bold text-emerald-400 font-mono">0</span>
                            </div>
                            <div class="text-center flex flex-col justify-center border-l border-zinc-800">
                                <span class="text-zinc-500 mb-0.5">冒險者等級</span>
                                <span id="exp-adv-level" class="text-base font-extrabold text-amber-400 font-mono">Lv 1</span>
                            </div>
                        </div>

                        <div id="exp-skill-rows" class="space-y-2 max-h-56 overflow-y-auto pr-1 custom-scrollbar"></div>
                    </div>

                    <div class="text-[11px] text-zinc-500 border-t border-zinc-800/80 pt-2 flex justify-between items-center">
                        <span>※ A表：戰士/魔法師系 ｜ B表：斥候/吟遊/軍師/練體等</span>
                        <button onclick="resetSkillExpRows()" class="text-zinc-400 hover:text-amber-400 underline">重設預設</button>
                    </div>
                </div>
            </div>
        </div>
    `;
}

window.initFieldTools = function() {
    window.resetSkillExpRows();
    window.rollCritDamage();
};

function evaluatePowerCritSequence(power, critVal, bonus, rollSequence) {
    const p = Math.max(0, Math.min(100, parseInt(power) || 0));
    const c = parseInt(critVal) || 10;
    const fixed = parseInt(bonus) || 0;
    const row = powerTableData[p] || powerTableData[0];

    const totalEl = document.getElementById('crit-total-dmg');
    const logEl = document.getElementById('crit-roll-log');
    if (!totalEl || !logEl) return;

    if (!rollSequence || rollSequence.length === 0) return;

    if (rollSequence[0] === 2) {
        totalEl.innerHTML = `<span class="text-red-500">0 (自動失敗 1,1)</span>`;
        logEl.innerHTML = `<div class="text-red-400"><i class="fa-solid fa-skull-crossbones mr-1"></i>第 1 擲擲出 2（1,1 自動失敗），傷害歸零！</div>`;
        return;
    }

    let powerSum = 0;
    let logs = [];

    for (let i = 0; i < rollSequence.length; i++) {
        const r = Math.max(2, Math.min(12, rollSequence[i]));
        const dmg = row[r - 2];
        powerSum += dmg;
        const isCrit = r >= c;

        logs.push(`
            <div class="flex justify-between items-center ${isCrit ? 'text-pink-400 font-bold' : 'text-zinc-300'}">
                <span>第 ${i + 1} 轉：2d6 = <span class="underline">${r}</span> ${isCrit ? '🔥 CRITICAL! (旋轉加骰)' : ''}</span>
                <span>威力表傷害：+${dmg}</span>
            </div>
        `);

        if (!isCrit) break;
    }

    const finalDamage = powerSum + fixed;
    const critCount = Math.max(0, logs.length - 1);

    totalEl.innerHTML = `
        <span>${finalDamage}</span>
        ${critCount > 0 ? `<span class="text-xs bg-pink-950 text-pink-300 border border-pink-700 px-2 py-0.5 rounded ml-2 align-middle">${critCount} 旋轉!</span>` : ''}
    `;

    logs.push(`
        <div class="border-t border-zinc-800 pt-1.5 mt-1.5 text-zinc-400 flex justify-between">
            <span>威力累計 (${powerSum}) + 固定追加傷害 (${fixed >= 0 ? '+' + fixed : fixed})</span>
            <span class="text-amber-400 font-bold">= ${finalDamage} 點</span>
        </div>
    `);

    logEl.innerHTML = logs.join('');
}

window.rollCritDamage = function() {
    const power = document.getElementById('crit-power')?.value || 20;
    const critVal = parseInt(document.getElementById('crit-value')?.value) || 10;
    const bonus = document.getElementById('crit-bonus')?.value || 0;
    const manualInput = document.getElementById('crit-manual-rolls');

    const rolls = [];
    let safety = 0;
    while (safety < 20) {
        const d1 = Math.floor(Math.random() * 6) + 1;
        const d2 = Math.floor(Math.random() * 6) + 1;
        const sum = d1 + d2;
        rolls.push(sum);
        if ((safety === 0 && sum === 2) || sum < critVal) break;
        safety++;
    }

    if (manualInput) manualInput.value = rolls.join(', ');
    evaluatePowerCritSequence(power, critVal, bonus, rolls);
};

window.calcManualCrit = function() {
    const power = document.getElementById('crit-power')?.value || 20;
    const critVal = parseInt(document.getElementById('crit-value')?.value) || 10;
    const bonus = document.getElementById('crit-bonus')?.value || 0;
    const rawStr = document.getElementById('crit-manual-rolls')?.value || '';

    const rolls = rawStr.split(/[,，\s]+/)
        .map(s => parseInt(s.trim()))
        .filter(n => !isNaN(n) && n >= 2 && n <= 12);

    if (rolls.length > 0) {
        evaluatePowerCritSequence(power, critVal, bonus, rolls);
    }
};

window.addSkillExpRow = function(name = '', table = 'A', level = 1) {
    const container = document.getElementById('exp-skill-rows');
    if (!container) return;

    const row = document.createElement('div');
    row.className = 'exp-skill-row grid grid-cols-12 gap-2 items-center bg-zinc-950 p-2 rounded-lg border border-zinc-800/80 text-xs';
    row.innerHTML = `
        <input type="text" placeholder="技能名稱 (如: 戰士)" value="${name}" class="col-span-5 bg-zinc-900 border border-zinc-700 rounded px-2 py-1 text-zinc-200 focus:outline-none focus:border-amber-500">
        <select onchange="recalcSkillExp()" class="exp-table-select col-span-3 bg-zinc-900 border border-zinc-700 rounded px-1.5 py-1 text-amber-300 font-medium focus:outline-none">
            <option value="A" ${table === 'A' ? 'selected' : ''}>經驗表 A</option>
            <option value="B" ${table === 'B' ? 'selected' : ''}>經驗表 B</option>
        </select>
        <div class="col-span-3 flex items-center gap-1">
            <span class="text-zinc-500">Lv</span>
            <input type="number" min="0" max="15" value="${level}" onchange="recalcSkillExp()" oninput="recalcSkillExp()" class="exp-level-input w-full bg-zinc-900 border border-zinc-700 rounded px-1.5 py-1 text-cyan-300 font-bold text-center focus:outline-none">
        </div>
        <button onclick="this.parentElement.remove(); recalcSkillExp();" title="移除" class="col-span-1 text-zinc-500 hover:text-red-400 text-center">
            <i class="fa-solid fa-xmark"></i>
        </button>
    `;
    container.appendChild(row);
    window.recalcSkillExp();
};

window.resetSkillExpRows = function() {
    const container = document.getElementById('exp-skill-rows');
    if (!container) return;
    container.innerHTML = '';
    window.addSkillExpRow('主職 (如戰士/真語)', 'A', 4);
    window.addSkillExpRow('副職 (如斥候/賢者)', 'B', 3);
    window.addSkillExpRow('輔助 (如練體/賦術)', 'B', 1);
};

window.recalcSkillExp = function() {
    const totalPool = parseInt(document.getElementById('exp-total-pool')?.value) || 0;
    const rows = document.querySelectorAll('.exp-skill-row');
    let usedExp = 0;
    let maxAdvLevel = 0;

    rows.forEach(row => {
        const table = row.querySelector('.exp-table-select')?.value || 'A';
        let lv = parseInt(row.querySelector('.exp-level-input')?.value) || 0;
        lv = Math.max(0, Math.min(15, lv));

        if (lv > maxAdvLevel) maxAdvLevel = lv;
        usedExp += (table === 'A' ? expTableA[lv] : expTableB[lv]);
    });

    const remaining = totalPool - usedExp;
    const remEl = document.getElementById('exp-remaining');
    const advEl = document.getElementById('exp-adv-level');

    if (remEl) {
        remEl.textContent = `${remaining.toLocaleString()} 點`;
        remEl.className = `text-sm font-bold font-mono ${remaining < 0 ? 'text-red-400' : 'text-emerald-400'}`;
    }
    if (advEl) {
        advEl.textContent = `Lv ${maxAdvLevel}`;
    }
};

// ==================== 11. 自定義頁面渲染邏輯 ====================
window.renderCustomPage = function() {
    const rulesContainer = document.getElementById('rules-container');
    if (!rulesContainer) return;

    const list = getCustomItems();
    updateCustomBadgeCount();

    const headerHTML = `
        <div class="bg-zinc-900/90 border border-amber-500/30 rounded-xl p-5 shadow-lg flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <div class="flex items-center gap-3">
                <div class="p-2.5 bg-amber-500/10 rounded-lg text-amber-400">
                    <i class="fa-solid fa-star text-2xl"></i>
                </div>
                <div>
                    <h2 class="text-xl font-bold text-amber-400 tracking-wider">自定義頁面（我的常用牌組與規則）</h2>
                    <p class="text-xs text-zinc-400">已收藏 <span class="text-amber-300 font-bold">${list.length}</span> 項內容（自動儲存於瀏覽器，支援個人備註與 JSON 備份）。</p>
                </div>
            </div>
            <div class="flex items-center gap-2 text-xs">
                <button onclick="exportCustomDeck()" class="px-3 py-2 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-emerald-300 border border-zinc-700 transition-colors">
                    <i class="fa-solid fa-download mr-1"></i>匯出備份
                </button>
                <label class="px-3 py-2 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-cyan-300 border border-zinc-700 transition-colors cursor-pointer">
                    <i class="fa-solid fa-upload mr-1"></i>匯入備份
                    <input type="file" accept=".json" onchange="importCustomDeck(event)" class="hidden">
                </label>
            </div>
        </div>
    `;

    if (list.length === 0) {
        rulesContainer.innerHTML = headerHTML + `
            <div class="text-center py-16 bg-zinc-900/50 rounded-xl border border-zinc-800 space-y-3">
                <i class="fa-regular fa-star text-4xl text-zinc-600"></i>
                <p class="text-zinc-400 text-sm">目前尚未加入任何技能、裝備或規則。</p>
                <p class="text-zinc-500 text-xs">請在「技能檢索」「道具檢索」卡片右上角點擊 <span class="text-amber-400">☆ 收藏</span>，或在「規則分頁」點擊加入按鈕！</p>
            </div>
        `;
        return;
    }

    const cardItems = list.filter(x => x.itemType !== 'rule');
    const ruleItems = list.filter(x => x.itemType === 'rule');

    let cardsGridHTML = '';
    if (cardItems.length > 0) {
        const cards = cardItems.map(entry => {
            let baseCard = '';
            if (entry.itemType === 'feat') baseCard = renderCombatFeatCard(entry.data);
            else if (entry.itemType === 'item') baseCard = renderItemCard(entry.data);
            else baseCard = createSkillCardHTML(entry.data);

            return `
                <div class="flex flex-col gap-1.5">
                    ${baseCard}
                    <div class="bg-zinc-950 border border-zinc-800 rounded-lg px-3 py-2 flex items-center gap-2">
                        <i class="fa-solid fa-pen text-amber-500/70 text-xs"></i>
                        <input type="text" value="${(entry.userNote || '').replace(/"/g, '&quot;')}"
                            onchange="updateCustomItemNote('${entry.id}', this.value)"
                            placeholder="點擊輸入個人備註（如：主要輸出技、記得扣MP5...）"
                            class="w-full bg-transparent text-xs text-zinc-300 placeholder-zinc-600 focus:outline-none">
                    </div>
                </div>
            `;
        }).join('');

        cardsGridHTML = `
            <div class="mb-8">
                <h3 class="text-sm font-bold text-zinc-300 mb-3 flex items-center gap-2">
                    <i class="fa-solid fa-layer-group text-amber-400"></i>已收藏的技能、戰鬥特技與裝備／騎獸（${cardItems.length}）
                </h3>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    ${cards}
                </div>
            </div>
        `;
    }

    let rulesSectionHTML = '';
    if (ruleItems.length > 0) {
        const blocks = ruleItems.map(entry => `
            <details open class="bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden shadow-lg">
                <summary class="p-4 bg-zinc-950/80 border-b border-zinc-800 flex justify-between items-center cursor-pointer select-none">
                    <span class="font-bold text-amber-400 text-sm flex items-center gap-2">
                        <i class="fa-solid fa-book-open text-amber-500"></i>${entry.title}
                    </span>
                    <button onclick="event.preventDefault(); pinCurrentRuleSection('${entry.ruleId}', '${entry.title.replace(/'/g, "\\'")}', ''); renderCustomPage();"
                        class="text-xs px-2.5 py-1 rounded bg-red-950/60 hover:bg-red-900/60 text-red-300 border border-red-800/60">
                        <i class="fa-solid fa-trash-can mr-1"></i>移除規則
                    </button>
                </summary>
                <div class="p-4 max-h-[600px] overflow-y-auto">
                    ${entry.htmlContent}
                </div>
            </details>
        `).join('');

        rulesSectionHTML = `
            <div class="space-y-4">
                <h3 class="text-sm font-bold text-zinc-300 flex items-center gap-2">
                    <i class="fa-solid fa-bookmark text-amber-400"></i>已收藏的規則章節（${ruleItems.length}）
                </h3>
                ${blocks}
            </div>
        `;
    }

    rulesContainer.innerHTML = headerHTML + cardsGridHTML + rulesSectionHTML;
};

// ==================== 12. 戰鬥特技互動習得樹／等級篩選分頁 ====================
const featTreeState = {
    query: '',
    type: '',
    maxLevel: 15,
    prereqMode: '',
    selectedName: null
};

function getCombatFeatsForTree() {
    const dataset = (typeof allSkillsData !== 'undefined' && Array.isArray(allSkillsData)) ? allSkillsData : [];

    return dataset
        .filter(item => isCombatFeatItem(item))
        .map(item => {
            const subType = getSkillSubType(item) || '被動';
            const prereq = getExtraField(item, 'prerequisite', '無');
            const usage = getExtraField(item, 'usage', '無');
            const rawLv = getSkillLevel(item);
            const nums = (prereq.match(/\d+/g) || []).map(Number);
            const level = typeof rawLv === 'number' && rawLv > 0
                ? rawLv
                : (nums.length ? Math.max(...nums) : 0);

            return {
                ...item,
                name: item.name || '',
                nameJp: item.nameJp || '',
                type: subType,
                subCategory: subType,
                prerequisite: prereq,
                usage,
                summary: item.summary || item.effect || '',
                level
            };
        });
}

function normalizeFeatBaseName(name) {
    return (name || '').replace(/「舞」|\(浪\)|\(新技能\)|\/\*\*/g, '').trim();
}

function getFeatTreeRelations(feat, allFeats) {
    const p = feat.prerequisite || '';
    const prereqs = allFeats.filter(other => {
        if (other.name === feat.name) return false;
        const base = normalizeFeatBaseName(other.name);
        return base.length >= 2 && p.includes(base);
    });

    const selfBase = normalizeFeatBaseName(feat.name);
    const nexts = selfBase.length >= 2
        ? allFeats.filter(other => other.name !== feat.name && (other.prerequisite || '').includes(selfBase))
        : [];

    return { prereqs, nexts };
}

function getFeatLevelBucket(level) {
    if (!level || level <= 0) return 0;
    for (const b of [1, 3, 5, 7, 9, 11, 13, 15]) {
        if (level <= b) return b;
    }
    return 15;
}

function matchesFeatTreeFilter(feat, allFeats) {
    if (featTreeState.type && feat.type !== featTreeState.type) return false;
    if (feat.level > featTreeState.maxLevel) return false;

    const p = feat.prerequisite || '';
    const { prereqs, nexts } = getFeatTreeRelations(feat, allFeats);

    if (featTreeState.prereqMode === 'none' && !['無', '-', '－'].includes(p.trim())) return false;
    if (featTreeState.prereqMode === 'chain' && prereqs.length === 0 && nexts.length === 0) return false;
    if (featTreeState.prereqMode === '浪' && !feat.name.includes('浪') && !feat.nameJp.includes('浪')) return false;
    if (featTreeState.prereqMode === '拳鬥士' && !p.includes('拳鬥士') && !feat.usage.includes('拳鬥士')) return false;
    if (featTreeState.prereqMode === '咒歌' && !p.includes('咒歌') && !feat.usage.includes('咒歌') && !feat.summary.includes('咒歌') && !feat.summary.includes('演奏')) return false;
    if (featTreeState.prereqMode === '魔法' && !(p.includes('魔') || p.includes('賦術') || feat.usage.includes('魔') || feat.usage.includes('賦術') || feat.summary.includes('魔') || feat.summary.includes('MP') || feat.summary.includes('賦術'))) return false;

    if (featTreeState.query) {
        const q = featTreeState.query.toLowerCase();
        const hay = `${feat.name} ${feat.nameJp} ${feat.type} ${feat.prerequisite} ${feat.usage} ${feat.summary} ${feat.effect || ''}`.toLowerCase();
        if (!hay.includes(q)) return false;
    }
    return true;
}

window.addFeatTreeItemToCharSheet = function(featName, event) {
    if (event) event.stopPropagation();

    const allFeats = getCombatFeatsForTree();
    const target = allFeats.find(f => f.name === featName);
    if (!target) return;

    const payload = {
        itemType: 'feat',
        type: 'feat',
        category: target.category || '戰鬥特技',
        data: target,
        feat: target
    };

    const handler =
        window.addCardToActiveCharacter ||
        window.addFeatToActiveCharacter ||
        window.quickAddToCharSheet ||
        window.addItemToCharacterSheet;

    if (typeof handler === 'function') {
        handler(payload);
    } else {
        document.dispatchEvent(new CustomEvent('sw25:add-to-charsheet', { detail: payload }));
    }

    const btn = event?.currentTarget;
    if (btn) {
        const originalHTML = btn.innerHTML;
        btn.innerHTML = '<i class="fa-solid fa-check mr-1"></i>已加入';
        btn.classList.add('bg-emerald-500/20', 'text-emerald-300', 'border-emerald-500/40');
        setTimeout(() => {
            btn.innerHTML = originalHTML;
            btn.classList.remove('bg-emerald-500/20', 'text-emerald-300', 'border-emerald-500/40');
        }, 1200);
    }
};

window.selectFeatTreeItem = function(name) {
    featTreeState.selectedName = featTreeState.selectedName === name ? null : name;
    renderFeatTreePage();
};

window.resetFeatTreeFilters = function() {
    featTreeState.query = '';
    featTreeState.type = '';
    featTreeState.maxLevel = 15;
    featTreeState.prereqMode = '';
    featTreeState.selectedName = null;
    renderFeatTreePage();
};

window.renderFeatTreePage = function() {
    const rulesContainer = document.getElementById('rules-container');
    if (!rulesContainer) return;

    const allFeats = getCombatFeatsForTree();
    const matched = allFeats.filter(f => matchesFeatTreeFilter(f, allFeats));
    const matchedSet = new Set(matched.map(f => f.name));
    const selectedFeat = allFeats.find(f => f.name === featTreeState.selectedName) || null;
    const rel = selectedFeat ? getFeatTreeRelations(selectedFeat, allFeats) : { prereqs: [], nexts: [] };
    const prereqSet = new Set(rel.prereqs.map(f => f.name));
    const nextSet = new Set(rel.nexts.map(f => f.name));

    const buckets = [0, 1, 3, 5, 7, 9, 11, 13, 15];
    const borderMap = {
        '宣言': 'border-l-red-500',
        '被動': 'border-l-blue-500',
        '主動作': 'border-l-emerald-500',
        '自動': 'border-l-purple-500'
    };

    rulesContainer.innerHTML = `
        <div class="space-y-4">
            <div class="bg-zinc-900/90 border border-amber-500/30 rounded-xl p-4 shadow-lg flex flex-wrap items-center justify-between gap-3">
                <div>
                    <h2 class="text-lg font-bold text-amber-400 flex items-center gap-2">
                        <i class="fa-solid fa-diagram-project"></i>戰鬥特技互動習得樹／等級篩選
                    </h2>
                    <p class="text-xs text-zinc-400 mt-0.5">
                        依需求等級分欄排列；點選特技可高亮 <span class="text-sky-400 font-bold">前置特技</span> 與 <span class="text-emerald-400 font-bold">後續可解鎖</span>，並可一鍵加入角色卡。
                    </p>
                </div>
                <div class="flex flex-wrap items-center gap-3 text-xs text-zinc-400">
                    <span><i class="fa-solid fa-square text-red-500 mr-1"></i>宣言</span>
                    <span><i class="fa-solid fa-square text-blue-500 mr-1"></i>被動</span>
                    <span><i class="fa-solid fa-square text-emerald-500 mr-1"></i>主動作</span>
                    <span><i class="fa-solid fa-square text-purple-500 mr-1"></i>自動</span>
                    <span class="text-amber-300 font-mono">符合：${matched.length} / ${allFeats.length}</span>
                </div>
            </div>

            <div class="bg-zinc-900 border border-zinc-800 rounded-xl p-3.5 flex flex-wrap gap-2.5 items-center text-xs">
                <input type="text" id="ft-search-input" value="${featTreeState.query.replace(/"/g, '&quot;')}"
                    placeholder="搜尋特技名、日文、前提、摘要..."
                    class="flex-1 min-w-[180px] bg-zinc-950 border border-zinc-700 rounded-lg px-3 py-2 text-zinc-200 focus:outline-none focus:border-amber-500">

                <select id="ft-type-select" class="bg-zinc-950 border border-zinc-700 rounded-lg px-3 py-2 text-zinc-200 focus:outline-none focus:border-amber-500">
                    <option value="">所有類型</option>
                    ${['宣言', '被動', '主動作', '自動'].map(t => `<option value="${t}" ${featTreeState.type === t ? 'selected' : ''}>${t}</option>`).join('')}
                </select>

                <select id="ft-level-select" class="bg-zinc-950 border border-zinc-700 rounded-lg px-3 py-2 text-zinc-200 focus:outline-none focus:border-amber-500">
                    ${[15, 13, 11, 9, 7, 5, 3, 1].map(lv => `<option value="${lv}" ${featTreeState.maxLevel === lv ? 'selected' : ''}>角色上限 Lv ${lv}${lv === 15 ? '（全部）' : ''}</option>`).join('')}
                </select>

                <select id="ft-prereq-select" class="bg-zinc-950 border border-zinc-700 rounded-lg px-3 py-2 text-zinc-200 focus:outline-none focus:border-amber-500">
                    <option value="">所有前提條件</option>
                    <option value="none" ${featTreeState.prereqMode === 'none' ? 'selected' : ''}>無需求</option>
                    <option value="chain" ${featTreeState.prereqMode === 'chain' ? 'selected' : ''}>有前後置連鎖</option>
                    <option value="浪" ${featTreeState.prereqMode === '浪' ? 'selected' : ''}>浪人（(浪)）</option>
                    <option value="拳鬥士" ${featTreeState.prereqMode === '拳鬥士' ? 'selected' : ''}>拳鬥士相關</option>
                    <option value="咒歌" ${featTreeState.prereqMode === '咒歌' ? 'selected' : ''}>咒歌／演奏</option>
                    <option value="魔法" ${featTreeState.prereqMode === '魔法' ? 'selected' : ''}>魔法／賦術</option>
                </select>

                <button type="button" onclick="resetFeatTreeFilters()"
                    class="px-3 py-2 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-300 border border-zinc-700 transition-colors">
                    重設
                </button>
            </div>

            <div class="grid grid-cols-1 lg:grid-cols-12 gap-4 items-start">
                <div class="lg:col-span-9 bg-zinc-900 border border-zinc-800 rounded-xl p-3 overflow-x-auto custom-scrollbar">
                    <div class="grid grid-cols-9 gap-2.5 min-w-[1260px]">
                        ${buckets.map(bucket => {
                            const colItems = allFeats.filter(f => getFeatLevelBucket(f.level) === bucket);
                            const label = bucket === 0 ? '無需求 / 0' : `Lv ${bucket}`;
                            return `
                                <div class="flex flex-col gap-2">
                                    <div class="bg-zinc-950 border border-zinc-800 rounded-lg py-1.5 px-2 text-center text-xs font-bold text-amber-400 sticky top-0 z-10">
                                        ${label} (${colItems.length})
                                    </div>
                                    <div class="flex flex-col gap-2">
                                        ${colItems.map(feat => {
                                            let ringClass = 'border-zinc-800 hover:border-amber-500/60';
                                            if (featTreeState.selectedName === feat.name) ringClass = 'border-amber-400 ring-2 ring-amber-400/40';
                                            else if (prereqSet.has(feat.name)) ringClass = 'border-sky-400 ring-2 ring-sky-400/40';
                                            else if (nextSet.has(feat.name)) ringClass = 'border-emerald-400 ring-2 ring-emerald-400/40';

                                            const dimClass = matchedSet.has(feat.name) ? '' : 'opacity-25';
                                            const leftBorder = borderMap[feat.type] || 'border-l-blue-500';
                                            const escapedName = feat.name.replace(/'/g, "\\'");

                                            return `
                                                <div onclick="selectFeatTreeItem('${escapedName}')"
                                                    class="bg-zinc-950/90 border border-l-4 ${leftBorder} ${ringClass} ${dimClass} rounded-lg p-2 cursor-pointer transition-all flex flex-col justify-between gap-1.5">
                                                    <div>
                                                        <div class="flex justify-between items-start gap-1 text-xs font-bold text-zinc-100">
                                                            <span>${feat.name}</span>
                                                            <span class="text-[10px] px-1.5 py-0.5 rounded bg-zinc-800 text-zinc-400 shrink-0">${feat.type}</span>
                                                        </div>
                                                        <div class="text-[11px] text-amber-300/90 mt-1 break-words">前提：${feat.prerequisite}</div>
                                                        <div class="text-[11px] text-zinc-400 mt-1 line-clamp-2">${feat.summary}</div>
                                                    </div>
                                                    <div class="flex justify-end pt-0.5">
                                                        <button type="button" onclick="addFeatTreeItemToCharSheet('${escapedName}', event)"
                                                            class="text-[10px] px-2 py-0.5 rounded bg-emerald-950/70 hover:bg-emerald-900/80 text-emerald-300 border border-emerald-700/60 transition-colors">
                                                            <i class="fa-solid fa-user-plus mr-1"></i>角色卡
                                                        </button>
                                                    </div>
                                                </div>
                                            `;
                                        }).join('')}
                                    </div>
                                </div>
                            `;
                        }).join('')}
                    </div>
                </div>

                <aside class="lg:col-span-3 bg-zinc-900 border border-zinc-800 rounded-xl p-4 space-y-3 text-xs lg:sticky lg:top-24">
                    <h3 class="text-sm font-bold text-amber-400 border-b border-zinc-800 pb-2">特技詳情與連鎖</h3>
                    ${selectedFeat ? `
                        <div class="space-y-2">
                            <div class="flex items-start justify-between gap-2">
                                <div class="text-sm font-bold text-zinc-100">
                                    ${selectedFeat.name}
                                    ${selectedFeat.nameJp ? `<span class="text-xs text-zinc-500 font-mono font-normal">(${selectedFeat.nameJp})</span>` : ''}
                                </div>
                                <button type="button" onclick="addFeatTreeItemToCharSheet('${selectedFeat.name.replace(/'/g, "\\'")}', event)"
                                    class="text-xs px-2.5 py-1 rounded-lg bg-emerald-950/80 hover:bg-emerald-900 text-emerald-300 border border-emerald-700/70 transition-colors shrink-0">
                                    <i class="fa-solid fa-user-plus mr-1"></i>+ 角色卡
                                </button>
                            </div>
                            <div><span class="text-zinc-500">類型／需求：</span><span class="text-zinc-200">${selectedFeat.type} ／ ${selectedFeat.level > 0 ? 'Lv ' + selectedFeat.level : '無等級限制'}</span></div>
                            <div><span class="text-zinc-500">習得前提：</span><span class="text-amber-300 font-medium">${selectedFeat.prerequisite}</span></div>
                            <div><span class="text-zinc-500">使用限制：</span><span class="text-zinc-200">${selectedFeat.usage}</span></div>
                            <div class="bg-zinc-950 p-2.5 rounded-lg border border-zinc-800 text-zinc-300 leading-relaxed">${selectedFeat.summary}</div>

                            <div class="pt-1">
                                <div class="text-sky-400 font-bold mb-1">前置特技（${rel.prereqs.length}）</div>
                                <div class="flex flex-wrap gap-1.5">
                                    ${rel.prereqs.length
                                        ? rel.prereqs.map(p => `<button type="button" onclick="selectFeatTreeItem('${p.name.replace(/'/g, "\\'")}')" class="px-2 py-0.5 rounded-full bg-zinc-950 hover:bg-zinc-800 text-sky-300 border border-sky-500/40">← ${p.name}</button>`).join('')
                                        : '<span class="text-zinc-500">無前置特技</span>'}
                                </div>
                            </div>

                            <div class="pt-1">
                                <div class="text-emerald-400 font-bold mb-1">可解鎖後續（${rel.nexts.length}）</div>
                                <div class="flex flex-wrap gap-1.5">
                                    ${rel.nexts.length
                                        ? rel.nexts.map(n => `<button type="button" onclick="selectFeatTreeItem('${n.name.replace(/'/g, "\\'")}')" class="px-2 py-0.5 rounded-full bg-zinc-950 hover:bg-zinc-800 text-emerald-300 border border-emerald-500/40">→ ${n.name}</button>`).join('')
                                        : '<span class="text-zinc-500">無後續特技</span>'}
                                </div>
                            </div>
                        </div>
                    ` : `
                        <p class="text-zinc-400 leading-relaxed">點選左側任一戰鬥特技卡片，查看完整條件與前後置特技連鎖，或直接點擊卡片上的「角色卡」按鈕加入。</p>
                    `}
                </aside>
            </div>
        </div>
    `;

    const searchEl = document.getElementById('ft-search-input');
    const typeEl = document.getElementById('ft-type-select');
    const levelEl = document.getElementById('ft-level-select');
    const prereqEl = document.getElementById('ft-prereq-select');

    if (searchEl) {
        searchEl.addEventListener('input', e => {
            featTreeState.query = e.target.value;
            renderFeatTreePage();
        });
    }
    if (typeEl) {
        typeEl.addEventListener('change', e => {
            featTreeState.type = e.target.value;
            renderFeatTreePage();
        });
    }
    if (levelEl) {
        levelEl.addEventListener('change', e => {
            featTreeState.maxLevel = Number(e.target.value);
            renderFeatTreePage();
        });
    }
    if (prereqEl) {
        prereqEl.addEventListener('change', e => {
            featTreeState.prereqMode = e.target.value;
            renderFeatTreePage();
        });
    }
};

// ==================== 13. 魔神行動表／骰 1d 模擬器 ====================
const DEMON_ZH_NAMES = {
    "メングル": "曼格爾",
    "インプ": "小惡魔",
    "エルビレア": "艾爾比蕾亞",
    "ヌズマル": "努茲馬爾",
    "アザービースト": "異界獸",
    "アビスミニオンズ": "深淵隨從",
    "ケッククバック": "凱克庫巴克",
    "アガル": "阿加爾",
    "ナズラック": "納茲拉克",
    "モヴキラ": "莫ヴ綺拉",
    "ザルバード": "薩爾巴德",
    "ゼヌン": "澤努恩",
    "ダブラブルグ": "達布拉布魯格",
    "アルガギス": "阿爾加吉斯",
    "グルネル": "古魯涅爾",
    "ジヌゥネ": "吉努烏涅",
    "シハルス": "希哈爾斯",
    "ダルグブーリー": "達爾古布利",
    "テラービースト": "恐懼獸",
    "ゴードベル": "高德貝爾",
    "シャバライ": "夏巴萊",
    "ラグナカング": "拉格納康格",
    "セラッサルーイ": "塞菈薩魯伊",
    "マハティガ": "馬哈堤加",
    "メルビズ": "梅爾比茲",
    "エゼルヴ": "艾澤爾ヴ",
    "ケルベロス": "地獄犬",
    "サリティガーン": "薩利堤岡",
    "ホルグラド": "霍爾格拉德",
    "ルンゼマーゼ": "倫澤瑪澤",
    "フォルゴーン": "佛爾貢",
    "リゴーガン": "利戈岡",
    "ヴァンギガ": "梵吉加",
    "ドレッドパール": "恐懼珍珠",
    "ドッペルゲンガー": "分身魔",
    "バルーサビヨーネ": "巴魯薩比約涅",
    "ラグアドログ": "拉古阿多洛格",
};

function getDemonDisplayName(demon) {
    if (!demon) return '';
    const zh = demon.name || DEMON_ZH_NAMES[demon.nameJp];
    if (zh && demon.nameJp && zh !== demon.nameJp) {
        return `${zh}（${demon.nameJp}）`;
    }
    return zh || demon.nameJp || '';
}

export function initDemonActionSimulator(tableData) {
    const app = document.getElementById('demon-sim-app');
    if (!app || !tableData || !Array.isArray(tableData.demons)) return;
    if (app.dataset.initialized === '1') return;
    app.dataset.initialized = '1';

    const state = {
        selectedDemon: tableData.demons[0] || null,
        lastRoll: null,
        rerollUsed: false,
        summonPenaltyStack: 0,
        logs: [],
    };

    const el = {
        advLv: document.getElementById('sim-adventurer-lv'),
        demonLv: document.getElementById('sim-demon-lv'),
        intBonus: document.getElementById('sim-int-bonus'),
        currentMp: document.getElementById('sim-current-mp'),
        lvFilter: document.getElementById('sim-lv-filter'),
        excludeIllegal: document.getElementById('sim-exclude-illegal'),
        select: document.getElementById('sim-demon-select'),
        modLarge: document.getElementById('mod-large-container'),
        modContract: document.getElementById('mod-evil-contract'),
        modPotential: document.getElementById('mod-potential'),
        modExtra: document.getElementById('mod-extra'),
        cardContainer: document.getElementById('sim-demon-card-container'),
        logList: document.getElementById('sim-log-list'),
        clearLogBtn: document.getElementById('btn-clear-sim-log'),
    };

    const roll1d = () => Math.floor(Math.random() * 6) + 1;
    const roll2d = () => roll1d() + roll1d();

    function addLog(text, tone = 'zinc') {
        const time = new Date().toLocaleTimeString('zh-TW', { hour12: false });
        state.logs.unshift({ time, text, tone });
        if (state.logs.length > 50) state.logs.pop();
        renderLogs();
    }

    function renderLogs() {
        if (!el.logList) return;
        if (!state.logs.length) {
            el.logList.innerHTML = '<div class="text-zinc-500">尚未執行召喚操作或行動擲骰。</div>';
            return;
        }
        const toneMap = {
            amber: 'text-amber-300 border-amber-800/50 bg-amber-950/20',
            cyan: 'text-cyan-300 border-cyan-800/50 bg-cyan-950/20',
            rose: 'text-rose-300 border-rose-800/50 bg-rose-950/20',
            emerald: 'text-emerald-300 border-emerald-800/50 bg-emerald-950/20',
            zinc: 'text-zinc-300 border-zinc-800 bg-zinc-950/60',
        };
        el.logList.innerHTML = state.logs
            .map(l => `<div class="px-3 py-2 rounded-lg border ${toneMap[l.tone] || toneMap.zinc}"><span class="text-zinc-500 mr-2">[${l.time}]</span>${l.text}</div>`)
            .join('');
    }

    function getFilteredDemons() {
        const advLv = Math.max(1, parseInt(el.advLv?.value || '1', 10));
        const filterVal = el.lvFilter?.value || 'capped';
        const noIllegal = Boolean(el.excludeIllegal?.checked);

        return tableData.demons.filter(d => {
            if (noIllegal && d.illegal) return false;
            if (filterVal === 'capped') return d.level <= advLv;
            if (filterVal === 'all') return true;
            return d.level === parseInt(filterVal, 10);
        });
    }

    function refreshSelectOptions() {
        if (!el.select) return;
        const list = getFilteredDemons();
        const pool = list.length ? list : tableData.demons;
        el.select.innerHTML = pool
            .map(d => `<option value="${d.nameJp}">Lv.${d.level} ${getDemonDisplayName(d)}（MP ${d.summonCostMp}）${d.illegal ? ' [非法(X)]' : ''}</option>`)
            .join('');

        if (state.selectedDemon && pool.some(d => d.nameJp === state.selectedDemon.nameJp)) {
            el.select.value = state.selectedDemon.nameJp;
        } else {
            state.selectedDemon = pool[0] || null;
            state.lastRoll = null;
            state.rerollUsed = false;
            if (state.selectedDemon) el.select.value = state.selectedDemon.nameJp;
        }
    }

    function getActionModTotal() {
        let mod = parseInt(el.modExtra?.value || '0', 10) || 0;
        if (el.modLarge?.checked) mod += 1;
        if (el.modContract?.checked) mod += 2;
        mod += parseInt(el.modPotential?.value || '0', 10) || 0;
        return mod;
    }

    function matchActionRow(demon, die) {
        for (const row of demon.actions) {
            if (row.roll.includes('～')) {
                const [a, b] = row.roll.split('～').map(Number);
                if (die >= a && die <= b) return row;
            } else if (Number(row.roll) === die) {
                return row;
            }
        }
        return demon.actions[0];
    }

    function adjustMp(delta) {
        if (!el.currentMp) return false;
        const cur = parseInt(el.currentMp.value || '0', 10);
        if (cur + delta < 0) return false;
        el.currentMp.value = String(cur + delta);
        return true;
    }

    function renderCard() {
        if (!el.cardContainer) return;
        const d = state.selectedDemon;
        if (!d) {
            el.cardContainer.innerHTML = '<div class="col-span-12 text-zinc-400">無符合條件的魔神。</div>';
            return;
        }

        const displayName = getDemonDisplayName(d);
        const advLv = Math.max(1, parseInt(el.advLv?.value || '1', 10));
        const overAdvLv = d.level > advLv;
        const mod = getActionModTotal();
        const activeRow = state.lastRoll ? matchActionRow(d, state.lastRoll) : null;

        const rowsHtml = d.actions
            .map(row => {
                const hit = activeRow && activeRow.roll === row.roll;
                return `
                    <tr class="${hit ? 'bg-amber-500/15 text-amber-200 font-bold' : 'hover:bg-zinc-800/40 text-zinc-300'}">
                        <td class="py-2 px-3 text-center font-mono">${row.roll}</td>
                        <td class="py-2 px-3">${row.target}</td>
                        <td class="py-2 px-3">${row.action}</td>
                        <td class="py-2 px-3 text-center font-mono text-cyan-300">${row.check}${mod !== 0 ? ` (${mod >= 0 ? '+' : ''}${mod})` : ''}</td>
                        <td class="py-2 px-3 font-mono text-amber-300">${row.damageOrEffect}</td>
                    </tr>
                `;
            })
            .join('');

        const rollBanner = state.lastRoll
            ? `
                <div class="bg-zinc-950 border border-amber-500/40 rounded-lg p-3.5 space-y-2">
                    <div class="flex flex-wrap items-center justify-between gap-2">
                        <div class="text-xs">
                            <span class="text-zinc-400">1d 骰點：</span>
                            <span class="text-lg font-bold text-amber-400 font-mono">${state.lastRoll}</span>
                            <span class="text-zinc-400 ml-2">→ 對象：</span>
                            <span class="text-zinc-100 font-bold">${activeRow.target}</span>
                            <span class="text-zinc-400 ml-2">動作：</span>
                            <span class="text-cyan-300 font-bold">${activeRow.action}</span>
                        </div>
                        <div class="flex items-center gap-2">
                            <button id="btn-reroll-1d" ${state.rerollUsed ? 'disabled' : ''} class="px-2.5 py-1 rounded text-xs font-bold ${state.rerollUsed ? 'bg-zinc-800 text-zinc-500 cursor-not-allowed' : 'bg-purple-600 hover:bg-purple-500 text-white'}">
                                【改令】重骰 1 次
                            </button>
                            <button id="btn-cancel-action" class="px-2.5 py-1 rounded text-xs font-bold bg-rose-600 hover:bg-rose-500 text-white">
                                取消行動 (耗 MP ${d.cancelCostMp})
                            </button>
                        </div>
                    </div>
                    <div class="text-xs text-zinc-300">
                        達成值：<span class="text-cyan-300 font-bold">${activeRow.check}</span>
                        ${mod !== 0 ? `＋ 修正 <span class="text-emerald-300 font-bold">${mod >= 0 ? '+' : ''}${mod}</span>` : ''}
                        ／ 打擊點等：<span class="text-amber-300 font-bold">${activeRow.damageOrEffect}</span>
                    </div>
                </div>
            `
            : `<div class="text-xs text-zinc-500 bg-zinc-950/60 border border-zinc-800/80 rounded-lg p-3">點擊「擲 1d 決定行動」模擬魔神行動表。</div>`;

        el.cardContainer.innerHTML = `
            <div class="lg:col-span-5 bg-zinc-900 border border-zinc-800 rounded-xl p-4 shadow-lg space-y-3 text-xs">
                <div class="flex items-start justify-between gap-2 border-b border-zinc-800 pb-3">
                    <div>
                        <div class="flex items-center gap-2">
                            <span class="px-2 py-0.5 rounded bg-amber-500/15 text-amber-300 font-bold">Lv.${d.level}</span>
                            <h3 class="text-lg font-bold text-zinc-100">${displayName}</h3>
                        </div>
                        <div class="text-zinc-400 mt-1">魔物資料：P.${d.monsterDataPage} ／ 精神抵抗力：<span class="text-zinc-200 font-bold">${d.mentalResist}</span></div>
                    </div>
                    ${d.illegal ? '<span class="px-2 py-1 rounded bg-rose-950 text-rose-300 border border-rose-700 font-bold">非法供物 (X)</span>' : ''}
                </div>

                ${overAdvLv ? `<div class="p-2.5 rounded-lg bg-rose-950/60 border border-rose-800 text-rose-200">注意：魔神 Lv.${d.level} 高於冒險者 Lv.${advLv}，一般呼叫不可超過冒險者等級。</div>` : ''}

                <div class="grid grid-cols-2 gap-2 bg-zinc-950 p-3 rounded-lg border border-zinc-800">
                    <div>召喚消耗：<span class="text-cyan-300 font-bold">MP ${d.summonCostMp}</span></div>
                    <div>取消成本：<span class="text-rose-300 font-bold">MP ${d.cancelCostMp}</span></div>
                    <div>送還供物：<span class="text-amber-300 font-bold">${d.returnOfferingPrice.toLocaleString()}G</span></div>
                    <div>送還減值：<span class="text-pink-300 font-bold">${state.summonPenaltyStack}</span></div>
                </div>

                <div class="bg-zinc-950 p-3 rounded-lg border border-zinc-800">
                    <div class="text-zinc-400 mb-0.5">必須召喚供物</div>
                    <div class="${d.illegal ? 'text-rose-300 font-bold' : 'text-zinc-200'}">${d.summonOffering}</div>
                </div>

                <div class="flex flex-wrap gap-2 pt-1">
                    <button id="btn-pay-summon" class="flex-1 py-2 px-3 rounded-lg bg-cyan-600 hover:bg-cyan-500 text-white font-bold transition">
                        支付召喚 MP (${d.summonCostMp})
                    </button>
                    <button id="btn-roll-banish" class="flex-1 py-2 px-3 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-bold transition">
                        進行送還判定
                    </button>
                </div>
                <div class="text-[11px] text-zinc-500">※ 若開門逾 1 小時未送還，門將固定並產生「奈落的魔域」（威脅度最低冒險者 Lv+2）與惡評魔神使稱號。</div>
            </div>

            <div class="lg:col-span-7 bg-zinc-900 border border-zinc-800 rounded-xl p-4 shadow-lg space-y-3">
                <div class="flex flex-wrap items-center justify-between gap-2">
                    <h3 class="font-bold text-zinc-100 text-sm">魔神行動表（當前達成值修正：${mod >= 0 ? '+' : ''}${mod}）</h3>
                    <button id="btn-roll-1d" class="px-4 py-1.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-zinc-950 font-bold text-xs transition flex items-center gap-1.5">
                        <i class="fa-solid fa-dice-d6"></i>擲 1d 決定行動
                    </button>
                </div>

                ${rollBanner}

                <div class="overflow-x-auto">
                    <table class="w-full text-left border-collapse text-xs">
                        <thead>
                            <tr class="bg-zinc-950/60 text-zinc-400 border-b border-zinc-800">
                                <th class="py-2 px-3 w-14 text-center">1d</th>
                                <th class="py-2 px-3 w-24">對象</th>
                                <th class="py-2 px-3">射程與動作</th>
                                <th class="py-2 px-3 w-24 text-center">達成值</th>
                                <th class="py-2 px-3 w-32">打擊點等</th>
                            </tr>
                        </thead>
                        <tbody class="divide-y divide-zinc-800/70">
                            ${rowsHtml}
                        </tbody>
                    </table>
                </div>

                ${d.notes ? `<div class="bg-zinc-950/80 border border-zinc-800 rounded-lg p-3 text-xs text-zinc-300 leading-relaxed"><span class="text-amber-400 font-bold mr-1">動作解說：</span>${d.notes}</div>` : ''}
            </div>
        `;

        bindDynamicActions();
    }

    function bindDynamicActions() {
        const d = state.selectedDemon;
        if (!d) return;

        const displayName = getDemonDisplayName(d);

        const rollBtn = document.getElementById('btn-roll-1d');
        if (rollBtn) {
            rollBtn.onclick = () => {
                state.lastRoll = roll1d();
                state.rerollUsed = false;
                const row = matchActionRow(d, state.lastRoll);
                addLog(`【${displayName}】擲出 1d = ${state.lastRoll} → ${row.target}「${row.action}」（達成值 ${row.check}）`, 'amber');
                renderCard();
            };
        }

        const rerollBtn = document.getElementById('btn-reroll-1d');
        if (rerollBtn && !state.rerollUsed) {
            rerollBtn.onclick = () => {
                state.lastRoll = roll1d();
                state.rerollUsed = true;
                const row = matchActionRow(d, state.lastRoll);
                addLog(`【改令】重骰 1d = ${state.lastRoll}（須依新結果且不可取消）→ ${row.target}「${row.action}」`, 'cyan');
                renderCard();
            };
        }

        const cancelBtn = document.getElementById('btn-cancel-action');
        if (cancelBtn) {
            cancelBtn.onclick = () => {
                if (!adjustMp(-d.cancelCostMp)) {
                    addLog(`取消行動失敗：剩餘 MP 不足 ${d.cancelCostMp} 點。`, 'rose');
                    return;
                }
                addLog(`取消【${displayName}】本次行動表行動，消耗 MP ${d.cancelCostMp} 點。`, 'rose');
                state.lastRoll = null;
                state.rerollUsed = false;
                renderCard();
            };
        }

        const summonPayBtn = document.getElementById('btn-pay-summon');
        if (summonPayBtn) {
            summonPayBtn.onclick = () => {
                if (!adjustMp(-d.summonCostMp)) {
                    addLog(`召喚失敗：剩餘 MP 不足 ${d.summonCostMp} 點。`, 'rose');
                    return;
                }
                addLog(`指定召喚【${displayName}】（Lv.${d.level}），消耗 MP ${d.summonCostMp} 點，必須供物：${d.summonOffering}。`, 'cyan');
                renderCard();
            };
        }

        const banishBtn = document.getElementById('btn-roll-banish');
        if (banishBtn) {
            banishBtn.onclick = () => {
                const skillLv = Math.max(1, parseInt(el.demonLv?.value || '1', 10));
                const intB = parseInt(el.intBonus?.value || '0', 10) || 0;
                const contractPen = el.modContract?.checked ? -1 : 0;
                const overBonus = d.level > skillLv ? 4 : 0;
                const totalPen = Math.max(-8, state.summonPenaltyStack + contractPen);

                const dice2d = roll2d();
                const base = skillLv + intB + overBonus + totalPen;
                const achieved = dice2d + base;
                const targetVal = parseInt(d.mentalResist, 10) || 0;
                const success = achieved > targetVal;

                if (success) {
                    adjustMp(d.summonCostMp);
                    addLog(`送還【${displayName}】成功（2d=${dice2d} + 基準${base} = ${achieved} vs 精神抵抗 ${d.mentalResist}），返還召喚 MP ${d.summonCostMp} 點。`, 'emerald');
                } else {
                    const selfDmg = d.level + roll2d();
                    addLog(`送還【${displayName}】失敗（2d=${dice2d} + 基準${base} = ${achieved} vs 精神抵抗 ${d.mentalResist}），術者受到 ${selfDmg} 點確定傷害（魔神 Lv.${d.level} + 2d）。`, 'rose');
                }
                renderCard();
            };
        }
    }

    [el.advLv, el.demonLv, el.intBonus, el.lvFilter, el.excludeIllegal].forEach(input => {
        if (!input) return;
        input.addEventListener('change', () => {
            refreshSelectOptions();
            renderCard();
        });
    });

    [el.modLarge, el.modContract, el.modPotential, el.modExtra].forEach(input => {
        if (!input) return;
        input.addEventListener('change', renderCard);
    });

    if (el.select) {
        el.select.addEventListener('change', () => {
            const found = tableData.demons.find(x => x.nameJp === el.select.value);
            if (found) {
                state.selectedDemon = found;
                state.lastRoll = null;
                state.rerollUsed = false;
                addLog(`已指定魔神：Lv.${found.level}【${getDemonDisplayName(found)}】`, 'zinc');
                renderCard();
            }
        });
    }

    if (el.clearLogBtn) {
        el.clearLogBtn.addEventListener('click', () => {
            state.logs = [];
            renderLogs();
        });
    }

    refreshSelectOptions();
    renderCard();
    renderLogs();
}

window.jumpToRaceAnchor = function(anchorId) {
    const target = document.getElementById(anchorId);
    if (!target) return;

    const header = document.querySelector('header');
    const offset = header ? header.offsetHeight + 12 : 90;
    const top = target.getBoundingClientRect().top + window.scrollY - offset;

    window.scrollTo({
        top: Math.max(0, top),
        behavior: 'smooth'
    });
};