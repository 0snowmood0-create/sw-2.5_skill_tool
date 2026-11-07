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

        // 主按鈕高亮樣式
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

        // 預設切換至第一個規則子頁籤 (吟遊詩人)
        switchRuleSubTab('bard_rules');
    }
};

// ==================== 2. 規則子頁籤切換 (職業規則區塊) ====================
window.switchRuleSubTab = function(ruleKey) {
    // 1. 更新所有子頁籤按鈕高亮樣式
    const subTabBtns = document.querySelectorAll('.rule-subtab-btn');
    subTabBtns.forEach(btn => {
        btn.className = "rule-subtab-btn px-3 py-1.5 rounded-lg text-sm bg-zinc-800 text-zinc-400 hover:text-amber-400 whitespace-nowrap transition-all border border-transparent";
    });

    const activeBtn = document.getElementById(`subtab-${ruleKey}`);
    if (activeBtn) {
        activeBtn.className = "rule-subtab-btn px-3 py-1.5 rounded-lg text-sm bg-amber-500/20 text-amber-400 border border-amber-500/30 whitespace-nowrap font-medium";
    }

    // 2. 隱藏所有規則內文區塊，僅顯示當前選擇的職業規則
    const allRuleSections = document.querySelectorAll('#rules-container > section');
    allRuleSections.forEach(sec => sec.classList.add('hidden'));

    // 支援包含 sec- 前綴或純 ruleKey 的 ID
    const targetSec = document.getElementById(`sec-${ruleKey}`) || document.getElementById(ruleKey);
    if (targetSec) {
        targetSec.classList.remove('hidden');
    }
};

// 相容性向後支援舊 switchTab 呼叫
window.switchTab = function(tabId) {
    if (tabId === 'bards') {
        switchMainTab('bards');
    } else {
        switchMainTab('rules');
        switchRuleSubTab(tabId.replace('sec-', ''));
    }
};

// ==================== 3. 全域搜尋與篩選函式 ====================
window.filterBardSongs = function() {
    const queryField = document.getElementById('bard-search');
    const categoryField = document.getElementById('bard-category-filter');
    const levelField = document.getElementById('bard-level-filter');

    const rawQuery = queryField ? queryField.value.toLowerCase().trim() : '';
    // 將「奈洛」自動規範化為「奈落」，確保搜尋「奈洛魔法」也能命中
    const query = rawQuery.replace(/奈洛/g, '奈落');

    const categoryFilter = categoryField ? categoryField.value : '';
    const levelFilterVal = levelField ? levelField.value : '';

    const dataset = (typeof allSkillsData !== 'undefined') ? allSkillsData : [];

    const filtered = dataset.filter(b => {
        const matchesQuery = !query || 
            (b.name && b.name.toLowerCase().includes(query)) || 
            (b.summary && b.summary.toLowerCase().includes(query)) ||
            (b.effect && b.effect.toLowerCase().includes(query)) ||
            (b.category && b.category.toLowerCase().includes(query)) ||
            (b.type && b.type.toLowerCase().includes(query)) ||
            (b.target_monsters && b.target_monsters.toLowerCase().includes(query)) ||
            (b.applicable_parts && b.applicable_parts.toLowerCase().includes(query)) ||
            (b.prerequisite && b.prerequisite.toLowerCase().includes(query)) ||
            (b.expansion && b.expansion.toLowerCase().includes(query));

        const matchesCategory = !categoryFilter || 
            b.category === categoryFilter || 
            (categoryFilter === "吟遊詩人" && (b.type === "咒歌" || b.type === "終律"));

        const matchesLevel = !levelFilterVal || b.req_level <= parseInt(levelFilterVal);

        return matchesQuery && matchesCategory && matchesLevel;
    });

    renderBardSongs(filtered);
};

// ==================== 4. 渲染技能/魔法卡片列表 ====================
function renderBardSongs(list) {
    const container = document.getElementById('bard-list');
    const countEl = document.getElementById('song-count');
    if (!container || !countEl) return;

    container.innerHTML = '';
    countEl.innerText = list.length;

    if (list.length === 0) {
        container.innerHTML = `
            <div class="col-span-full text-center py-12 bg-zinc-900/50 rounded-xl border border-zinc-800">
                <i class="fa-solid fa-ghost text-4xl text-zinc-600 mb-3"></i>
                <p class="text-zinc-400 text-sm">沒有找到符合條件的技能或魔法。</p>
            </div>
        `;
        return;
    }

    list.forEach(b => {
        // 類別判定變數宣告
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

        if (isSong) {
            badgeColor = "bg-amber-950 text-amber-400 border-amber-800";
            icon = "fa-music";
        } else if (isFinale) {
            badgeColor = "bg-purple-950 text-purple-300 border-purple-800";
            icon = "fa-bolt-lightning";
        } else if (isCommand) {
            badgeColor = "bg-orange-950 text-orange-300 border-orange-800";
            icon = "fa-bullhorn";
        } else if (isTactics) {
            badgeColor = "bg-stone-900 text-stone-300 border-stone-700";
            icon = "fa-chess-knight";
        } else if (isMagi) {
            badgeColor = "bg-cyan-950 text-cyan-300 border-cyan-800";
            icon = "fa-gears";
        } else if (isSorcerer) {
            badgeColor = "bg-emerald-950 text-emerald-300 border-emerald-800";
            icon = "fa-hat-wizard";
        } else if (isSorcery) {
            badgeColor = "bg-indigo-950 text-indigo-300 border-indigo-800";
            icon = "fa-scroll";
        } else if (isDivine) {
            badgeColor = "bg-yellow-950 text-yellow-300 border-yellow-700";
            icon = "fa-hands-praying";
        } else if (isWizard) {
            badgeColor = "bg-violet-950 text-violet-300 border-violet-800";
            icon = "fa-hat-wizard";
        } else if (isFairy) {
            badgeColor = "bg-teal-950 text-teal-300 border-teal-800";
            icon = "fa-gem";
        } else if (isAlchemist) {
            badgeColor = "bg-amber-950 text-amber-300 border-amber-800";
            icon = "fa-layer-group";
        } else if (isBibliomancer) {
            badgeColor = "bg-rose-950 text-rose-300 border-rose-800";
            icon = "fa-book-bookmark";
        } else if (isDarkHunter) {
            badgeColor = "bg-red-950 text-red-400 border-red-800";
            icon = "fa-crosshairs";
        } else if (isDruid) {
            badgeColor = "bg-lime-950 text-lime-300 border-lime-800";
            icon = "fa-leaf";
        } else if (isAbyssgazer) {
            badgeColor = "bg-zinc-950 text-amber-500 border-amber-900/80";
            icon = "fa-eye-low-vision";
        } else if (isRider) {
            badgeColor = "bg-emerald-950 text-emerald-400 border-emerald-700";
            icon = "fa-horse";
        }

        const categoryBadgeHTML = b.category ? `
            <span class="text-xs px-2 py-0.5 rounded border ${badgeColor}">
                ${b.category}
            </span>
        ` : '';

        const typeBadgeHTML = b.type ? `
            <span class="text-xs bg-zinc-800 text-zinc-300 px-2 py-0.5 rounded border border-zinc-700 font-medium">
                ${b.type}
            </span>
        ` : '';

        const godBadgeHTML = b.god ? `
            <span class="text-xs bg-amber-950/80 text-amber-300 px-2 py-0.5 rounded border border-amber-700/80 font-medium">
                <i class="fa-solid fa-ankh mr-1 text-[10px]"></i>${b.god}
            </span>
        ` : '';

        const reqLevelHTML = b.req_level !== undefined ? `
            <span class="text-xs bg-zinc-800/80 text-zinc-400 px-2 py-0.5 rounded border border-zinc-700/60">
                Req: Lv ${b.req_level}
            </span>
        ` : '';

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
        } 
        else if (isRider || b.target_monsters || b.applicable_parts) {
            const targetMonsters = b.target_monsters || '全種類';
            const applicableParts = b.applicable_parts || '無';
            const prerequisite = b.prerequisite || '無';

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
                    <span class="col-span-5 text-right text-cyan-300 font-medium">${prerequisite}</span>
                </div>
            `;
        }
        else {
            const costVal = b.row1_val1 || b.cost || '－';
            const targetVal = b.row1_val3 || b.target || '－';
            const rangeVal = b.row2_val1 || b.range || '－';
            const resistVal = b.resistance || b.resist || '－';
            const elementVal = b.element || '－';
            const durationVal = b.row2_val5 || b.duration || '－';

            middleTableHTML = `
                <div class="grid grid-cols-6 border-b border-zinc-800/60 py-1.5 px-3">
                    <span class="text-zinc-500 font-medium">消耗</span>
                    <span class="text-center text-cyan-300 font-bold">${costVal}</span>
                    <span class="text-zinc-500 font-medium text-center">對象</span>
                    <span class="col-span-3 text-right text-zinc-300">${targetVal}</span>
                </div>
                <div class="grid grid-cols-6 border-b border-zinc-800/60 py-1.5 px-3 bg-zinc-900/40">
                    <span class="text-zinc-500 font-medium">射程</span>
                    <span class="text-center text-zinc-300">${rangeVal}</span>
                    <span class="text-zinc-500 font-medium text-center">時間</span>
                    <span class="col-span-3 text-right text-zinc-300">${durationVal}</span>
                </div>
                <div class="grid grid-cols-6 py-1.5 px-3">
                    <span class="text-zinc-500 font-medium">抵抗</span>
                    <span class="text-center text-amber-300 font-medium">${resistVal}</span>
                    <span class="text-zinc-500 font-medium text-center">屬性</span>
                    <span class="col-span-3 text-right text-purple-300 font-medium">${elementVal}</span>
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

        container.innerHTML += `
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
    });
}

// ==================== 5. 動態渲染規則內容 ====================
function renderRules() {
    const container = document.getElementById('rules-container');
    if (!container || !Array.isArray(ruleSections)) return;

    container.innerHTML = ruleSections.map(rule => {
        // 自動確認 ID 格式 (確保有 sec- 前綴)
        const secId = rule.id.startsWith('sec-') ? rule.id : `sec-${rule.id}`;
        return `
            <section id="${secId}" class="space-y-6 hidden">
                ${rule.content}
            </section>
        `;
    }).join('');
}

// ==================== 6. 頁面初始化 ====================
document.addEventListener('DOMContentLoaded', () => {
    renderRules();
    
    // 預設顯示技能檢索頁面
    switchMainTab('bards');

    if (typeof filterBardSongs === 'function') {
        filterBardSongs();
    }
});