import { allSkillsData, allItemsData } from './src/data-index.js';
import { ruleSections } from './src/rules.js';

// ==================== 1. 主頁籤切換 (同一層全站導覽) ====================
window.switchMainTab = function(tabName) {
    const secBards = document.getElementById('sec-bards');
    const secItems = document.getElementById('sec-items');
    const secRules = document.getElementById('sec-rules');
    const subtabsNav = document.getElementById('rule-subtabs-nav');
    const rulesContainer = document.getElementById('rules-container');

    // 1. 【重置高亮】徹底清除頂層導覽列所有按鈕的高亮樣式
    document.querySelectorAll('.main-tab-btn').forEach(btn => {
        btn.className = "main-tab-btn py-2 px-3 rounded-lg text-zinc-400 hover:text-amber-400 transition-all border border-transparent whitespace-nowrap";
    });

    // 2. 【單一高亮】僅對目前點擊的按鈕加上金色高亮
    const activeBtn = document.getElementById(`tab-${tabName}`);
    if (activeBtn) {
        activeBtn.className = "main-tab-btn py-2 px-3 rounded-lg transition-all font-bold text-amber-400 bg-amber-500/10 border border-amber-500/30 whitespace-nowrap";
    }

    // 3. 隱藏所有主要 Section 區塊
    [secBards, secItems, secRules].forEach(sec => sec && sec.classList.add('hidden'));

    // 4. 根據傳入的 tabName 決定要顯示的內容
    if (tabName === 'bards') {
        if (secBards) secBards.classList.remove('hidden');
        if (typeof window.filterBardSongs === 'function') window.filterBardSongs();
    } else if (tabName === 'items') {
        if (secItems) secItems.classList.remove('hidden');
        if (typeof window.filterItems === 'function') window.filterItems();
    } else {
        // 開啟規則頁面主要容器
        if (secRules) secRules.classList.remove('hidden');

        // 判斷是否為「技能規則」總頁面
        if (tabName === 'rules') {
            // 顯示職業技能子選單
            if (subtabsNav) subtabsNav.classList.remove('hidden');
            // 預設切換至第一個技能規則 (吟遊詩人)
            if (typeof window.switchRuleSubTab === 'function') {
                window.switchRuleSubTab('bard_rules');
            }
        } else {
            // 切換至獨立頁面 (上級戰鬥規則 / 威力表 / 戰鬥特技規則 / 舞鬥士 等) -> 隱藏職業技能子選單
            if (subtabsNav) subtabsNav.classList.add('hidden');

            // 尋找並渲染對應規則內容
            const sectionData = Array.isArray(ruleSections) ? ruleSections.find(s => s.id === tabName) : null;
            if (rulesContainer && sectionData) {
                rulesContainer.innerHTML = sectionData.content;
            }

            // 若點擊的是威力表，自動渲染表格與算牌器
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
    const subTabBtns = document.querySelectorAll('.rule-subtab-btn');
    subTabBtns.forEach(btn => {
        btn.className = "rule-subtab-btn px-3 py-1.5 rounded-lg text-sm bg-zinc-800 text-zinc-400 hover:text-amber-400 whitespace-nowrap transition-all border border-transparent";
    });

    const activeBtn = document.getElementById(`subtab-${ruleKey}`);
    if (activeBtn) {
        activeBtn.className = "rule-subtab-btn px-3 py-1.5 rounded-lg text-sm bg-amber-500/20 text-amber-400 border border-amber-500/30 whitespace-nowrap font-medium";
    }

    const rulesContainer = document.getElementById('rules-container');
    const sectionData = Array.isArray(ruleSections) ? ruleSections.find(s => s.id === ruleKey) : null;
    
    if (rulesContainer && sectionData) {
        rulesContainer.innerHTML = sectionData.content;
    }

    if (ruleKey === 'power_table_rules') {
        setTimeout(() => {
            if (typeof window.renderPowerTableRows === 'function') window.renderPowerTableRows();
            if (typeof window.calcPowerResult === 'function') window.calcPowerResult();
        }, 50);
    }
};

window.switchTab = function(tabId) {
    if (tabId === 'bards') {
        switchMainTab('bards');
    } else if (tabId === 'items') {
        switchMainTab('items');
    } else {
        switchMainTab('rules');
        switchRuleSubTab(tabId.replace('sec-', ''));
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