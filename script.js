import { allSkillsData } from './src/data-index.js';
import { ruleSections } from './src/rules.js';

// ==================== 1. 主頁籤切換 (技能檢索 vs 技能規則) ====================
window.switchMainTab = function(tabName) {
    const secBards = document.getElementById('sec-bards');
    const secRules = document.getElementById('sec-rules');
    const tabBardsBtn = document.getElementById('tab-bards');
    const tabRulesBtn = document.getElementById('tab-rules');

    if (!secBards || !secRules) return;

    if (tabName === 'bards') {
        secBards.classList.remove('hidden');
        secRules.classList.add('hidden');

        if (tabBardsBtn) {
            tabBardsBtn.className = "py-2 px-3 rounded-lg transition-all font-bold text-amber-400 bg-amber-500/10 border border-amber-500/30";
        }
        if (tabRulesBtn) {
            tabRulesBtn.className = "py-2 px-3 rounded-lg text-zinc-400 hover:text-amber-400 transition-all border border-transparent";
        }
    } else if (tabName === 'rules') {
        secBards.classList.add('hidden');
        secRules.classList.remove('hidden');

        if (tabRulesBtn) {
            tabRulesBtn.className = "py-2 px-3 rounded-lg transition-all font-bold text-amber-400 bg-amber-500/10 border border-amber-500/30";
        }
        if (tabBardsBtn) {
            tabBardsBtn.className = "py-2 px-3 rounded-lg text-zinc-400 hover:text-amber-400 transition-all border border-transparent";
        }

        switchRuleSubTab('bard_rules');
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

    const allRuleSections = document.querySelectorAll('#rules-container > section');
    allRuleSections.forEach(sec => sec.classList.add('hidden'));

    const targetSec = document.getElementById(`sec-${ruleKey}`) || document.getElementById(ruleKey);
    if (targetSec) {
        targetSec.classList.remove('hidden');
    }
};

window.switchTab = function(tabId) {
    if (tabId === 'bards') {
        switchMainTab('bards');
    } else {
        switchMainTab('rules');
        switchRuleSubTab(tabId.replace('sec-', ''));
    }
};

// ==================== 3. 效能優化變數與防抖機制 ====================
let currentFilteredList = [];
let currentPage = 1;
const pageSize = 20; // 每次只載入 20 筆
let debounceTimer = null;

// 防抖搜尋觸發
window.filterBardSongs = function() {
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => {
        executeFilter();
    }, 250); // 停止輸入 250ms 後才執行過濾與渲染
};

function executeFilter() {
    const queryField = document.getElementById('bard-search');
    const categoryField = document.getElementById('bard-category-filter');
    const levelField = document.getElementById('bard-level-filter');

    const rawQuery = queryField ? queryField.value.toLowerCase().trim() : '';
    const query = rawQuery.replace(/奈洛/g, '奈落');

    const categoryFilter = categoryField ? categoryField.value : '';
    const levelFilterVal = levelField ? levelField.value : '';

    const dataset = (typeof allSkillsData !== 'undefined') ? allSkillsData : [];

    currentFilteredList = dataset.filter(b => {
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

    // 重置分頁並開始渲染
    currentPage = 1;
    renderBardSongs(true);
}

// ==================== 4. 戰鬥特技專用卡片 HTML 生成 ====================
export function renderCombatFeatCard(feat) {
    const typeBadgeStyles = {
        '被動': 'bg-slate-900 text-slate-300 border-slate-700',
        '宣言': 'bg-amber-950 text-amber-300 border-amber-800',
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

// ==================== 5. 批次 DOM 渲染與分頁懶載入 ====================
function renderBardSongs(isNewSearch = false) {
    const container = document.getElementById('bard-list');
    const countEl = document.getElementById('song-count');
    if (!container || !countEl) return;

    countEl.innerText = currentFilteredList.length;

    if (isNewSearch) {
        container.innerHTML = '';
    }

    if (currentFilteredList.length === 0) {
        container.innerHTML = `
            <div class="col-span-full text-center py-12 bg-zinc-900/50 rounded-xl border border-zinc-800">
                <i class="fa-solid fa-ghost text-4xl text-zinc-600 mb-3"></i>
                <p class="text-zinc-400 text-sm">沒有找到符合條件的技能或魔法。</p>
            </div>
        `;
        return;
    }

    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    const pageItems = currentFilteredList.slice(startIndex, endIndex);

    if (pageItems.length === 0) return;

    // 使用 DocumentFragment 進行一次性 DOM 掛載
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

// 捲動到底部自動載入下一頁
window.addEventListener('scroll', () => {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 400) {
        if (currentPage * pageSize < currentFilteredList.length) {
            currentPage++;
            renderBardSongs(false);
        }
    }
});

// ==================== 6. 動態渲染規則內容 ====================
function renderRules() {
    const container = document.getElementById('rules-container');
    if (!container || !Array.isArray(ruleSections)) return;

    container.innerHTML = ruleSections.map(rule => {
        const secId = rule.id.startsWith('sec-') ? rule.id : `sec-${rule.id}`;
        return `
            <section id="${secId}" class="space-y-6 hidden">
                ${rule.content}
            </section>
        `;
    }).join('');
}

// ==================== 7. 頁面初始化 ====================
document.addEventListener('DOMContentLoaded', () => {
    renderRules();
    switchMainTab('bards');

    if (typeof filterBardSongs === 'function') {
        filterBardSongs();
    }
});