import { allSkillsData, allItemsData } from './src/data-index.js';
import { ruleSections } from './src/rules.js';
import { racesContent } from './src/racesData.js'; 
import { otherRulesContent } from './src/otherRulesData.js'; 
import { equipmentEnhancementContent } from './src/equipmentEnhancementData.js';
import { reputationRankContent } from './src/reputationRankData.js'; // 若有新增名譽點模組

 
// ==================== 1. 主頁籤切換 (同一層全站導覽) ====================
window.switchMainTab = function(tabName) {
    const secBards = document.getElementById('sec-bards');
    const secItems = document.getElementById('sec-items');
    const secRules = document.getElementById('sec-rules');
    const subtabsNav = document.getElementById('rule-subtabs-nav');
    const rulesContainer = document.getElementById('rules-container');

    // 1. 重置所有導覽列按鈕高亮
    document.querySelectorAll('.main-tab-btn').forEach(btn => {
        btn.className = "main-tab-btn py-2 px-3 rounded-lg text-zinc-400 hover:text-amber-400 transition-all border border-transparent whitespace-nowrap";
    });

    // 2. 僅高亮當前點擊的按鈕
    const activeBtn = document.getElementById(`tab-${tabName}`);
    if (activeBtn) {
        activeBtn.className = "main-tab-btn py-2 px-3 rounded-lg transition-all font-bold text-amber-400 bg-amber-500/10 border border-amber-500/30 whitespace-nowrap";
    }

    // 3. 隱藏所有主要 Section 區塊
    [secBards, secItems, secRules].forEach(sec => sec && sec.classList.add('hidden'));

    // 4. 切換顯示內容
    if (tabName === 'bards') {
        if (secBards) secBards.classList.remove('hidden');
        if (typeof window.filterBardSongs === 'function') window.filterBardSongs();
    } else if (tabName === 'items') {
        if (secItems) secItems.classList.remove('hidden');
        if (typeof window.filterItems === 'function') window.filterItems();
    } else {
        if (secRules) secRules.classList.remove('hidden');

        if (tabName === 'rules') {
            // 切換至技能規則：顯示子選單並預設載入職業規則的第一項
            if (subtabsNav) subtabsNav.classList.remove('hidden');
            if (typeof window.switchRuleSubTab === 'function') {
                // 優先嘗試找到 ruleSections 的第一筆 ID，若無則降級回 'bard_rules' 或 'bard'
                const firstRuleId = (Array.isArray(ruleSections) && ruleSections.length > 0) ? ruleSections[0].id : 'bard_rules';
                window.switchRuleSubTab(firstRuleId);
            }
        } else if (tabName === 'other_rules') {
            if (subtabsNav) subtabsNav.classList.add('hidden');
            if (rulesContainer && typeof otherRulesContent !== 'undefined') {
                rulesContainer.innerHTML = otherRulesContent;
            }
        } else if (tabName === 'equipmentEnhancement_rules') {
            if (subtabsNav) subtabsNav.classList.add('hidden');
            if (rulesContainer && typeof equipmentEnhancementContent !== 'undefined') {
                rulesContainer.innerHTML = equipmentEnhancementContent;
            } 
        } else if (tabName === 'reputation_rules') {
            if (subtabsNav) subtabsNav.classList.add('hidden');
            if (rulesContainer && typeof reputationRankContent !== 'undefined') {
                rulesContainer.innerHTML = reputationRankContent;
            }
        } else if (tabName === 'tools') {
            if (subtabsNav) subtabsNav.classList.add('hidden');
            if (rulesContainer) {
                rulesContainer.innerHTML = getFieldToolsHTML();
                initFieldTools();
            }
        } else {
            // 切換至獨立頁面 (種族 / 上級戰鬥 / 威力表 等)：隱藏子選單
            if (subtabsNav) subtabsNav.classList.add('hidden');

            if (tabName === 'races') {
                if (rulesContainer && typeof racesContent !== 'undefined') {
                    rulesContainer.innerHTML = racesContent;
                }
            } else {
                // 渲染其餘來自 rules.js 的規則 (如 advanced_combat)
                const sectionData = Array.isArray(ruleSections) ? ruleSections.find(s => s.id === tabName) : null;
                if (rulesContainer && sectionData) {
                    rulesContainer.innerHTML = sectionData.content;
                }
            }

            // 威力表初始化
            if (tabName === 'power_table_rules') {
                setTimeout(() => {
                    if (typeof window.renderPowerTableRows === 'function') window.renderPowerTableRows();
                    if (typeof window.calcPowerResult === 'function') window.calcPowerResult();
                }, 50);
            }
        }
    }
};

// ==================== 2. 規則子頁籤切換 (職業規則區塊) ====================
window.switchRuleSubTab = function(ruleKey) {
    if (!ruleKey) return;

    // 1. 清理傳入的 ruleKey 取得純淨名稱 (例如將 "sec-bard_rules" 或 "bard_rules" 統一轉成 "bard")
    const cleanTargetKey = ruleKey.replace(/^sec-/, '').replace(/_rules$/, '').toLowerCase();

    // 2. 重置所有子頁籤按鈕樣式
    const subTabBtns = document.querySelectorAll('.rule-subtab-btn');
    subTabBtns.forEach(btn => {
        btn.className = "rule-subtab-btn px-3 py-1.5 rounded-lg text-sm bg-zinc-800 text-zinc-400 hover:text-amber-400 whitespace-nowrap transition-all border border-transparent";
    });

    // 3. 尋找並高亮按鈕 (相容各種 ID 命名)
    const targetSubBtn = document.getElementById(`subtab-${ruleKey}`) || 
                         document.getElementById(`subtab-${cleanTargetKey}`) ||
                         document.getElementById(`subtab-sec-${cleanTargetKey}_rules`) ||
                         document.getElementById(ruleKey);

    if (targetSubBtn) {
        targetSubBtn.className = "rule-subtab-btn px-3 py-1.5 rounded-lg text-sm bg-amber-500/20 text-amber-400 border border-amber-500/30 whitespace-nowrap font-medium";
    }

    const rulesContainer = document.getElementById('rules-container');
    if (!rulesContainer) return;

    // 4. 搜尋 ruleSections (自動比對去除 sec- 與 _rules 後的名稱)
    if (Array.isArray(ruleSections) && ruleSections.length > 0) {
        const sectionData = ruleSections.find(s => {
            if (!s || !s.id) return false;
            // 正確提取 s.id 的核心 key (如 sec-bard_rules 轉為 bard)
            const cleanId = s.id.replace(/^sec-/, '').replace(/_rules$/, '').toLowerCase();
            return s.id === ruleKey || cleanId === cleanTargetKey;
        });

        if (sectionData && sectionData.content) {
            rulesContainer.innerHTML = sectionData.content;
        } else {
            console.warn(`[Rules Error] 在 ruleSections 中找不到匹配的 ID: "${ruleKey}"。可用的 ID 有:`, ruleSections.map(s => s.id));
        }
    }

    // 5. 特殊初始化 (如威力表)
    if (ruleKey.includes('power_table')) {
        setTimeout(() => {
            if (typeof window.renderPowerTableRows === 'function') window.renderPowerTableRows();
            if (typeof window.calcPowerResult === 'function') window.calcPowerResult();
        }, 50);
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
        
        const matchesQuery = !query || 
            (b.name && b.name.toLowerCase().includes(query)) || 
            (b.nameJp && b.nameJp.toLowerCase().includes(query)) ||
            (b.summary && b.summary.toLowerCase().includes(query)) ||
            (b.effect && b.effect.toLowerCase().includes(query)) ||
            (b.category && b.category.toLowerCase().includes(query)) ||
            (b.type && b.type.toLowerCase().includes(query)) ||
            (b.target_monsters && b.target_monsters.toLowerCase().includes(query)) ||
            (b.applicable_parts && b.applicable_parts.toLowerCase().includes(query)) ||
            (b.prerequisite && b.prerequisite.toLowerCase().includes(query)) ||
            (b.usage && b.usage.toLowerCase().includes(query)) ||
            (b.expansion && b.expansion.toLowerCase().includes(query));

        const matchesCategory = !categoryFilter || 
            b.category === categoryFilter || 
            (categoryFilter === "吟遊詩人" && (b.type === "咒歌" || b.type === "終律"));

        const matchesLevel = !levelFilterVal || (b.req_level !== undefined && b.req_level <= parseInt(levelFilterVal));

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

    const rawQuery = searchInput ? searchInput.value.toLowerCase().trim() : '';
    const selectedCategory = categoryFilter ? categoryFilter.value : '';

    const dataset = (typeof allItemsData !== 'undefined' && Array.isArray(allItemsData)) ? allItemsData : [];

    const filtered = dataset.filter(item => {
        if (!item) return false;

        const matchesCategory = !selectedCategory || item.category === selectedCategory;
        const matchesQuery = !rawQuery ||
            (item.name && item.name.toLowerCase().includes(rawQuery)) ||
            (item.nameJp && item.nameJp.toLowerCase().includes(rawQuery)) ||
            (item.effect && item.effect.toLowerCase().includes(rawQuery)) ||
            (item.summary && item.summary.toLowerCase().includes(rawQuery)) ||
            (item.description && item.description.toLowerCase().includes(rawQuery)) ||
            (item.price && item.price.toString().toLowerCase().includes(rawQuery));

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
    const typeBadgeStyles = {
        '被動': 'bg-slate-900 text-slate-300 border-slate-700',
        '宣告': 'bg-amber-950 text-amber-300 border-amber-800',
        '主動作': 'bg-purple-950 text-purple-300 border-purple-800',
        '自動': 'bg-emerald-950 text-emerald-300 border-emerald-800'
    };

    const badgeClass = typeBadgeStyles[feat.type] || 'bg-zinc-800 text-zinc-300 border-zinc-700';

    return `
        <div class="bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden shadow-lg hover:border-zinc-700 transition-all flex flex-col justify-between">
            <div class="p-4 bg-zinc-950/60 border-b border-zinc-800 flex justify-between items-center">
                <div class="flex items-center gap-2">
                    <span class="text-xs px-2 py-0.5 rounded border bg-amber-950 text-amber-300 border-amber-800 font-medium">
                        ${feat.category || '戰鬥特技'}
                    </span>
                    <span class="text-xs px-2 py-0.5 rounded border ${badgeClass} font-medium">
                        ${feat.type || '被動'}
                    </span>
                    <h3 class="text-base font-bold text-amber-400 ml-1">
                        <i class="fa-solid fa-shield-halved mr-1.5 text-amber-500"></i>${feat.name}
                        ${feat.nameJp ? `<span class="text-xs text-zinc-500 font-normal ml-1 font-mono">(${feat.nameJp})</span>` : ''}
                    </h3>
                </div>
            </div>

            <div class="p-4 space-y-3">
                <div class="grid grid-cols-2 gap-2 text-xs bg-zinc-950 p-2.5 rounded-lg border border-zinc-800/80">
                    <div>
                        <span class="text-zinc-500 font-medium block mb-0.5">前提條件</span>
                        <span class="text-cyan-300 font-medium">${feat.prerequisite || '無'}</span>
                    </div>
                    <div>
                        <span class="text-zinc-500 font-medium block mb-0.5">使用限制 / 裝備</span>
                        <span class="text-amber-300 font-medium">${feat.usage || '無'}</span>
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
    const isWeapon = ["劍", "槍", "斧", "打擊", "拋射", "格鬥", "扔擲", "魔動機槍", "武器-劍", "武器-斧", "武器-槍", "武器-鈍器/錘", "武器-戰錘", "武器-長杖", "武器-弓", "武器-弩", "武器-魔導槍", "武器-連枷", "武器-格鬥/抓握", "武器-投擲"].includes(item.category);
    const isArmor = ["非金屬鎧", "金屬鎧", "盾", "防具-金屬鎧甲", "防具-盾牌"].includes(item.category);
    const isGeograph = item.name && item.name.includes("地貌儀");

    let attrTableHTML = '';

    if (isWeapon) {
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
    } else {
        attrTableHTML = `
            <div class="grid grid-cols-6 py-1.5 px-3 bg-zinc-900/40 text-xs">
                <span class="text-zinc-500 font-medium">類別</span>
                <span class="col-span-2 text-center text-cyan-300 font-medium">${item.category || '道具'}</span>
                <span class="text-zinc-500 font-medium text-center">價格</span>
                <span class="col-span-2 text-right text-amber-400 font-bold">${item.price || '非賣品'}</span>
            </div>
        `;
    }

    return `
        <div class="bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden shadow-lg hover:border-zinc-700 transition-all flex flex-col justify-between">
            <div class="p-4 bg-zinc-950/60 border-b border-zinc-800 flex justify-between items-center">
                <div class="flex items-center gap-2">
                    <span class="text-xs px-2 py-0.5 rounded border bg-emerald-950 text-emerald-300 border-emerald-800 font-medium">
                        ${item.category || '道具'}
                    </span>
                    <h3 class="text-base font-bold text-amber-400 ml-1">
                        <i class="fa-solid fa-box-open mr-1.5 text-amber-500"></i>${item.name}
                        ${item.nameJp ? `<span class="text-xs text-zinc-500 font-normal ml-1 font-mono">(${item.nameJp})</span>` : ''}
                    </h3>
                </div>
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
                    <p class="text-xs text-zinc-300 leading-relaxed whitespace-pre-line bg-zinc-950/30 p-2.5 rounded border border-zinc-800/40">
                        ${item.effect || item.description || ''}
                    </p>
                </div>
            </div>
        </div>
    `;
}

// 生成單張一般技能/魔法 HTML
function createSkillCardHTML(b) {
    const isSong = b.type === "咒歌" || b.category === "咒歌";
    const isFinale = b.type === "終律" || b.category === "終律";
    const isCommand = b.type === "鼓咆" || b.category === "鼓咆";
    const isTactics = b.type === "陣率" || b.category === "陣率" || b.category === "軍師";
    const isMagi = b.category === "魔動機術";
    const isSorcerer = b.category === "操靈魔法";
    const isSorcery = b.category === "真語魔法";
    const isDivine = b.category === "神聖魔法" || b.category === "特殊神聖魔法";
    const isWizard = b.category === "深智魔法";
    const isFairy = b.category === "妖精魔法";
    const isAlchemist = b.category === "賦術" || b.type === "賦術";
    const isBibliomancer = b.category === "祕奧魔法" || b.category === "典籍魔導士";
    const isDarkHunter = b.category === "操氣" || b.category === "暗獵者";
    const isDruid = b.category === "森羅魔法" || b.category === "德魯伊";
    const isAbyssgazer = b.category === "奈落魔法" || b.category === "奈落使";
    const isRider = b.category === "騎藝" || b.category === "騎手技能" || b.category === "騎手";

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
    else if (isRider) { badgeColor = "bg-emerald-950 text-emerald-400 border-emerald-700"; icon = "fa-horse"; }

    const categoryBadgeHTML = b.category ? `<span class="text-xs px-2 py-0.5 rounded border ${badgeColor}">${b.category}</span>` : '';
    const typeBadgeHTML = b.type ? `<span class="text-xs bg-zinc-800 text-zinc-300 px-2 py-0.5 rounded border border-zinc-700 font-medium">${b.type}</span>` : '';
    const godBadgeHTML = b.god ? `<span class="text-xs bg-amber-950/80 text-amber-300 px-2 py-0.5 rounded border border-amber-700/80 font-medium"><i class="fa-solid fa-ankh mr-1 text-[10px]"></i>${b.god}</span>` : '';
    const reqLevelHTML = b.req_level !== undefined ? `<span class="text-xs bg-zinc-800/80 text-zinc-400 px-2 py-0.5 rounded border border-zinc-700/60">Req: Lv ${b.req_level}</span>` : '';

    let middleTableHTML = '';
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
    } else if (isRider || b.target_monsters || b.applicable_parts) {
        middleTableHTML = `
            <div class="grid grid-cols-6 border-b border-zinc-800/60 py-1.5 px-3">
                <span class="text-zinc-500 font-medium">對應魔物</span>
                <span class="col-span-5 text-right text-emerald-300 font-medium">${b.target_monsters || '全種類'}</span>
            </div>
            <div class="grid grid-cols-6 border-b border-zinc-800/60 py-1.5 px-3 bg-zinc-900/40">
                <span class="text-zinc-500 font-medium">適用部位</span>
                <span class="col-span-5 text-right text-amber-300 font-medium">${b.applicable_parts || '無'}</span>
            </div>
            <div class="grid grid-cols-6 py-1.5 px-3">
                <span class="text-zinc-500 font-medium">前提條件</span>
                <span class="col-span-5 text-right text-cyan-300 font-medium">${b.prerequisite || '無'}</span>
            </div>
        `;
    } else {
        middleTableHTML = `
            <div class="grid grid-cols-6 border-b border-zinc-800/60 py-1.5 px-3">
                <span class="text-zinc-500 font-medium">消耗</span>
                <span class="text-center text-cyan-300 font-bold">${b.row1_val1 || b.cost || '－'}</span>
                <span class="text-zinc-500 font-medium text-center">對象</span>
                <span class="col-span-3 text-right text-zinc-300">${b.row1_val3 || b.target || '－'}</span>
            </div>
            <div class="grid grid-cols-6 border-b border-zinc-800/60 py-1.5 px-3 bg-zinc-900/40">
                <span class="text-zinc-500 font-medium">射程</span>
                <span class="text-center text-zinc-300">${b.row2_val1 || b.range || '－'}</span>
                <span class="text-zinc-500 font-medium text-center">時間</span>
                <span class="col-span-3 text-right text-zinc-300">${b.row2_val5 || b.duration || '－'}</span>
            </div>
            <div class="grid grid-cols-6 py-1.5 px-3">
                <span class="text-zinc-500 font-medium">抵抗</span>
                <span class="text-center text-amber-300 font-medium">${b.resistance || b.resist || '－'}</span>
                <span class="text-zinc-500 font-medium text-center">屬性</span>
                <span class="col-span-3 text-right text-purple-300 font-medium">${b.element || '－'}</span>
            </div>
        `;
    }

    const expansionHTML = b.expansion ? `
        <div class="space-y-1 pt-2 border-t border-zinc-800/60">
            <div class="text-xs font-bold text-amber-400 flex items-center">
                <i class="fa-solid fa-angles-up mr-1.5 text-xs text-amber-500"></i>擴張效果：
            </div>
            <p class="text-xs text-zinc-300 leading-relaxed whitespace-pre-line bg-amber-950/20 p-2.5 rounded border border-amber-900/30">
                ${b.expansion}
            </p>
        </div>
    ` : '';

    return `
        <div class="bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden shadow-lg hover:border-zinc-700 transition-all flex flex-col justify-between">
            <div class="p-4 bg-zinc-950/60 border-b border-zinc-800 flex justify-between items-center">
                <div class="flex flex-wrap items-center gap-1.5">
                    ${categoryBadgeHTML}
                    ${typeBadgeHTML}
                    ${godBadgeHTML}
                    ${reqLevelHTML}
                    <h3 class="text-base font-bold text-amber-400 ml-1">
                        <i class="fa-solid ${icon} mr-1 text-amber-500"></i>${b.name}
                    </h3>
                </div>
            </div>

            <div class="p-4 space-y-3">
                <div class="bg-zinc-950 rounded-lg border border-zinc-800/80 overflow-hidden text-xs">
                    ${middleTableHTML}
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

// ==================== 7. 技能 DOM 渲染與捲動懶載入 ====================
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
        const isCombatFeat = b.category === "戰鬥特技" || ['被動', '宣言', '主動作', '自動'].includes(b.type);
        if (isCombatFeat) {
            htmlChunk += renderCombatFeatCard(b);
        } else {
            htmlChunk += createSkillCardHTML(b);
        }
    });

    fragment.innerHTML = htmlChunk;
    container.appendChild(fragment.content);
}

// 捲動到底部自動載入技能下一頁
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

// ==================== 8. 頁面初始化 ====================
document.addEventListener('DOMContentLoaded', () => {
    switchMainTab('bards');
});
// ==================== 全域規則即時檢索系統 ====================

// 1. 建立統一的檢索索引庫 (精準對齊 index.html 頁籤 ID)
function getSearchableDatabase() {
    const db = [];

    // 獨立主頁籤 ID 清單 (這些雖然在 rules.js 裡，但導覽列上是獨立主分頁)
    const standaloneRuleIds = ['advanced_combat_rules', 'power_table_rules'];

    // 匯入 rules.js 中的所有規則章節
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

    // 匯入其他獨立主頁籤模組 (ID 完全對齊 index.html 按鈕)
    const extraModules = [
        { id: 'races', title: '種族圖鑑與種族特徵', icon: 'fa-solid fa-users', content: typeof racesContent !== 'undefined' ? racesContent : '' },
        { id: 'other_rules', title: '其他規則與判定總覽', icon: 'fa-solid fa-book-bookmark', content: typeof otherRulesContent !== 'undefined' ? otherRulesContent : '' },
        { id: 'equipmentEnhancement_rules', title: '裝備強化與魔化規則', icon: 'fa-solid fa-hammer', content: typeof equipmentEnhancementContent !== 'undefined' ? equipmentEnhancementContent : '' },
        { id: 'reputationRank_rules', title: '名譽點與冒險者階級', icon: 'fa-solid fa-award', content: typeof reputationRankContent !== 'undefined' ? reputationRankContent : '' }
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

// 2. 處理輸入搜尋事件
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

// 3. 點擊搜尋結果後自動跳轉分頁並捲動定位
window.navigateToSearchResult = function(type, targetId, keyword) {
    const resultsContainer = document.getElementById('global-search-results');
    if (resultsContainer) resultsContainer.classList.add('hidden');

    if (type === 'rule_subtab') {
        if (typeof window.switchMainTab === 'function') window.switchMainTab('rules');
        if (typeof window.switchRuleSubTab === 'function') window.switchRuleSubTab(targetId);
    } else if (type === 'main_tab') {
        if (typeof window.switchMainTab === 'function') window.switchMainTab(targetId);
    }

    // 延遲等待 DOM 渲染完成後捲動到關鍵字段落並閃爍高光
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

// 4. 清除搜尋狀態
window.clearGlobalRuleSearch = function() {
    const input = document.getElementById('global-rule-search');
    const resultsContainer = document.getElementById('global-search-results');
    const clearBtn = document.getElementById('clear-rule-search-btn');

    if (input) input.value = '';
    if (resultsContainer) resultsContainer.classList.add('hidden');
    if (clearBtn) clearBtn.classList.add('hidden');
};

// 點擊外部自動收起下拉選單
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

// 威力算牌器計算邏輯
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

// 渲染威力表 HTML 內容
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
// ==================== 9. TRPG 跑團現場實用小工具 ====================

// SW2.5 官方經驗點表 (累計消耗經驗點，索引 0 代表 Lv 0)
const expTableA = [0, 1000, 2000, 3500, 5000, 7000, 9500, 12500, 16500, 21500, 28000, 36000, 46000, 58500, 73500, 93500];
const expTableB = [0, 500, 1500, 2500, 4000, 5500, 7500, 10000, 13000, 17000, 22000, 28500, 36500, 46500, 59000, 74000];

// 生成小工具主畫面 HTML
function getFieldToolsHTML() {
    return `
        <div class="space-y-6">
            <!-- 頁面標題 -->
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
                <!-- 工具 1：威力表旋轉（爆擊）傷害計算與模擬器 -->
                <div class="bg-zinc-900 border border-zinc-800 rounded-xl p-5 space-y-4 shadow-lg flex flex-col justify-between">
                    <div class="space-y-4">
                        <h3 class="text-base font-bold text-amber-400 border-b border-zinc-800 pb-2 flex items-center justify-between">
                            <span><i class="fa-solid fa-dice text-amber-500 mr-2"></i>1. 威力表旋轉（Critical）傷害模擬器</span>
                            <span class="text-[11px] font-normal text-zinc-500">自動判定 1,1 失誤與 C 值連轉</span>
                        </h3>

                        <!-- 參數設定區 -->
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

                        <!-- 擲骰模式切換與按鈕 -->
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

                    <!-- 計算結果顯示面板 -->
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

                <!-- 工具 2：經驗點與冒險者等級速算器 -->
                <div class="bg-zinc-900 border border-zinc-800 rounded-xl p-5 space-y-4 shadow-lg flex flex-col justify-between">
                    <div class="space-y-3">
                        <h3 class="text-base font-bold text-amber-400 border-b border-zinc-800 pb-2 flex items-center justify-between">
                            <span><i class="fa-solid fa-chart-line text-amber-500 mr-2"></i>2. 經驗點與冒險者等級速算器</span>
                            <button onclick="addSkillExpRow()" class="text-xs bg-zinc-800 hover:bg-zinc-700 text-amber-400 border border-zinc-700 px-2.5 py-1 rounded transition-colors">
                                <i class="fa-solid fa-plus mr-1"></i>新增技能
                            </button>
                        </h3>

                        <!-- 總經驗點輸入與統計列 -->
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

                        <!-- 動態技能列表 -->
                        <div id="exp-skill-rows" class="space-y-2 max-h-56 overflow-y-auto pr-1 custom-scrollbar">
                            <!-- 由 JS 動態生成預設技能列 -->
                        </div>
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

// 初始化小工具預設狀態
window.initFieldTools = function() {
    window.resetSkillExpRows();
    window.rollCritDamage();
};

// --- 威力表旋轉計算核心 ---
function evaluatePowerCritSequence(power, critVal, bonus, rollSequence) {
    const p = Math.max(0, Math.min(100, parseInt(power) || 0));
    const c = parseInt(critVal) || 10;
    const fixed = parseInt(bonus) || 0;
    const row = powerTableData[p] || powerTableData[0];

    const totalEl = document.getElementById('crit-total-dmg');
    const logEl = document.getElementById('crit-roll-log');
    if (!totalEl || !logEl) return;

    if (!rollSequence || rollSequence.length === 0) return;

    // 第一擲若為 2 (1,1)，依 SW2.5 規則為自動失敗，總傷害強制為 0 (不加固定值)
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

// 模擬擲骰按鈕
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
        // 第1擲為2 (1,1) 或未達 C 值即停止旋轉
        if ((safety === 0 && sum === 2) || sum < critVal) break;
        safety++;
    }

    if (manualInput) manualInput.value = rolls.join(', ');
    evaluatePowerCritSequence(power, critVal, bonus, rolls);
};

// 手動輸入骰面序列計算
window.calcManualCrit = function() {
    const power = document.getElementById('crit-power')?.value || 20;
    const critVal = document.getElementById('crit-value')?.value || 10;
    const bonus = document.getElementById('crit-bonus')?.value || 0;
    const rawStr = document.getElementById('crit-manual-rolls')?.value || '';

    const rolls = rawStr.split(/[,，\s]+/)
        .map(s => parseInt(s.trim()))
        .filter(n => !isNaN(n) && n >= 2 && n <= 12);

    if (rolls.length > 0) {
        evaluatePowerCritSequence(power, critVal, bonus, rolls);
    }
};

// --- 經驗點與冒險者等級速算器核心 ---
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