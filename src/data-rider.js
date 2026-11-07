/**
 * SW2.5 騎手技能 (Rider) - 全騎藝完整資料庫 (Lv1 / Lv5 / Lv10)
 */

 export const riderdata = [
  // ==========================================
  // 等級 1 以上可學會的騎藝
  // ==========================================
  {
    req_level: 1,
    category: "騎藝",
    name: "威嚇",
    type: "輔助動作",
    prerequisite: "無",
    target_monsters: "動物、幻獸",
    applicable_parts: "核心部位",
    summary: "讓騎獸瞪視，使特定的判定獲得 -1 的減值修正 (1輪)",
    effect: "以騎手的輔助動作，讓騎獸威嚇對方。騎手的［騎手技能等級 + 精神力加值］，對處於同一亂戰區的一名對象的精神抵抗比達成值。成功時可減低對方的命中力/魔法行使...等主動作的能力判定 -1。"
  },
  {
    req_level: 1,
    category: "騎藝",
    name: "以心傳心",
    type: "常態",
    prerequisite: "無",
    target_monsters: "動物、幻獸",
    applicable_parts: "全",
    summary: "騎手與騎獸的五感互通",
    effect: "騎手與騎獸的五感互通，如其中一方學習集中射擊/鷹眼，效果通用。"
  },
  {
    req_level: 1,
    category: "騎藝",
    name: "遠隔指令",
    type: "常態",
    prerequisite: "無",
    target_monsters: "動物、幻獸",
    applicable_parts: "全",
    summary: "30m內遠程命令騎獸",
    effect: "騎獸與騎手分開只要在 30m 內騎手就可以使用適用部位［核心］或［全］的騎藝，下指令時一樣不需發聲。"
  },
  {
    req_level: 1,
    category: "騎藝",
    name: "探索指令",
    type: "常態",
    prerequisite: "無",
    target_monsters: "動物、幻獸",
    applicable_parts: "核心",
    summary: "騎獸可執行足跡追蹤、異常感知、危險感知、探索、陷阱迴避判定",
    effect: "騎獸可執行足跡追蹤判定、異常感知判定、危險感知判定、探索判定、陷阱迴避判定。判定基準為：［騎手技能 + 智力加值］。原則上騎手需處於騎乘狀態，在身旁握住韁繩也行。"
  },
  {
    req_level: 1,
    category: "騎藝",
    name: "騎獸強化",
    type: "常態",
    prerequisite: "無",
    target_monsters: "動物、幻獸",
    applicable_parts: "核心/全",
    summary: "騎獸命中、迴避力 +1",
    effect: "騎獸命中、迴避力 +1，擁有核心部位者只適用於［核心］，無核心者適用於［全］。"
  },
  {
    req_level: 1,
    category: "騎藝",
    name: "騎獸的獻身",
    type: "常態",
    prerequisite: "無",
    target_monsters: "動物、幻獸",
    applicable_parts: "全",
    summary: "騎手HP降至0以下時，騎獸會守護騎師",
    effect: "騎師受到物理、魔法傷害導致 HP 降到 0 以下時，騎獸會代替成為攻擊對象並受到傷害。此騎藝只要騎獸和騎手在同一座標時適用，此外，騎獸複數部位的情況下傷害施加於核心。"
  },
  {
    req_level: 1,
    category: "騎藝",
    name: "攻擊妨礙",
    type: "常態",
    prerequisite: "無",
    target_monsters: "動物、幻獸、魔動機",
    applicable_parts: "無",
    summary: "騎手和同乘者迴避力 +1",
    effect: "騎手和同乘者迴避力 +1。"
  },
  {
    req_level: 1,
    category: "騎藝",
    name: "高處攻擊",
    type: "常態",
    prerequisite: "無",
    target_monsters: "動物、幻獸、魔動機",
    applicable_parts: "無",
    summary: "騎手和同乘者物理攻擊 +1",
    effect: "騎手和同乘者物理攻擊 +1（遠、近攻擊）。"
  },
  {
    req_level: 1,
    category: "騎藝",
    name: "連結騎術",
    type: "常態",
    prerequisite: "無",
    target_monsters: "動物、幻獸、魔動機",
    applicable_parts: "無",
    summary: "同乘者減值 -0",
    effect: "雙乘時所受到的減值修正（-4）不會發生在騎師與共乘者身上。此外，共乘者能以單手支撐身體，以主動作或輔助動作進行動作，此時，因為無法使用另一隻手的關係會受到 -2 的減值修正。"
  },
  {
    req_level: 1,
    category: "騎藝",
    name: "衝鋒",
    type: "主動作",
    prerequisite: "無",
    target_monsters: "動物、幻獸、魔動機",
    applicable_parts: "全",
    summary: "使用高威力的突擊",
    effect: "利用騎獸的速度與重量給予重大傷害的突擊攻擊。這個騎藝視同接近攻擊來進行處理。而騎師的武裝或是能力，在 1 輪中只能進行 1 次。成功通過命中力判定且計算傷害時，以此回合所移動的距離為 5m（餘數進位）為單位，使追加傷害增加 1 點。此時所計算的移動距離是從回合開始時的位置到目的地的最短直線距離，而若中途有障礙物的話，無法使用此騎藝。而在回合開始時便身處於亂戰狀態的場號也無法使用這個騎藝。"
  },
  {
    req_level: 1,
    category: "騎藝",
    name: "魔法指令",
    type: "主動作",
    prerequisite: "無",
    target_monsters: "動物、幻獸",
    applicable_parts: "全",
    summary: "騎獸使用魔法",
    effect: "騎獸使用魔法，僅限於騎手先行動的情況下，騎手行動完騎獸使用魔法，無關騎獸可執行行動的次數，一回合只能一次，此騎藝一天只能 2 次。"
  },
  {
    req_level: 1,
    category: "騎藝",
    name: "HP強化",
    type: "常態",
    prerequisite: "無",
    target_monsters: "動物、幻獸",
    applicable_parts: "全",
    summary: "騎獸的 HP +5",
    effect: "騎獸的所有部位 HP +5。"
  },

  // ==========================================
  // 等級 5 以上可學會的騎藝
  // ==========================================
  {
    req_level: 5,
    category: "騎藝",
    name: "限界驅動",
    type: "輔助動作",
    prerequisite: "無",
    target_monsters: "魔動機",
    applicable_parts: "全",
    summary: "讓魔動機暴走，命中 +2 追加傷害 +4，騎手與騎獸迴避 -4",
    effect: "讓魔動機暴走，命中 +2 追加傷害 +4，騎手與騎獸迴避 -4，行使後須進行 10 分鐘的調整才能再次使用。"
  },
  {
    req_level: 5,
    category: "騎藝",
    name: "勢如破竹",
    type: "常態",
    prerequisite: "無",
    target_monsters: "動物、幻獸、魔動機",
    applicable_parts: "全",
    summary: "騎獸任意 2 部位可執行主動作",
    effect: "給予騎獸各部位詳細的指示並同時動作。騎獸持有複數部位時，使其任意 2 個部位進行主動作。騎師能分別進行主動作。因為此效果而進行主動作的騎獸部位，直到下一回合開始前，迴避力判定受到 -2 的減值修正。"
  },
  {
    req_level: 5,
    category: "騎藝",
    name: "姿勢維持",
    type: "輔助動作",
    prerequisite: "無",
    target_monsters: "動物、幻獸、魔動機",
    applicable_parts: "無",
    summary: "騎獸專心移動，騎手判定 -4，可執行限制移動的動作",
    effect: "此動作執行與否需於騎獸移動時決定，騎獸專心移動，騎手判定受到 -4 的減值修正，但可執行限制移動的動作。使用時騎獸無法執行主動作。"
  },
  {
    req_level: 5,
    category: "騎藝",
    name: "人馬一體",
    type: "常態",
    prerequisite: "無",
    target_monsters: "動物、幻獸、魔動機",
    applicable_parts: "全",
    summary: "騎師能在騎乘狀態下自由使用雙手",
    effect: "在騎乘狀態下，僅以號令或體重移動就能隨騎師的意志操作騎獸。連單手都不用就能控制並騎乘騎獸。騎師能在騎乘狀態下自由地使用雙手。"
  },
  {
    req_level: 5,
    category: "騎藝",
    name: "超高處攻擊",
    type: "常態",
    prerequisite: "高處攻擊",
    target_monsters: "動物、幻獸、魔動機",
    applicable_parts: "無",
    summary: "騎手和同乘者物理攻擊再 +1（合計 +2）",
    effect: "騎手和同乘者物理攻擊再 +1（合計 +2，適用於遠、近攻擊）。"
  },
  {
    req_level: 5,
    category: "騎藝",
    name: "特殊能力解放",
    type: "常態",
    prerequisite: "無",
    target_monsters: "動物、幻獸、魔動機",
    applicable_parts: "全",
    summary: "可以使用騎獸持有的特定特殊能力",
    effect: "熟悉騎獸的動作與能力，自在地使用其特殊能力。能使用騎獸持有的特殊能力「前提：【特殊能力解放】」等項目。此外，也能使「擴充：【特殊能力解放】」等特殊能力在使用上更加有利。"
  },
  {
    req_level: 5,
    category: "騎藝",
    name: "擊潰踐踏",
    type: "主動作",
    prerequisite: "衝鋒",
    target_monsters: "動物、幻獸、魔動機",
    applicable_parts: "全",
    summary: "「形狀：突破」，對射線上所有目標進行 1 次接近攻擊",
    effect: "騎獸在戰場上以一直線奔馳，對其射線上的所有目標進行攻擊。以「射程：騎獸的全力移動」且「形狀：突破」，對所有目標進行 1 次接近攻擊。進行接近攻擊的部位（包含騎師）可以個別選擇目標。命中力判定以個別對象進行。使用此騎藝時，騎師與騎獸會被視為進行全力移動。"
  },
  {
    req_level: 5,
    category: "騎藝",
    name: "魔法指示次數增加",
    type: "常態",
    prerequisite: "魔法指示",
    target_monsters: "動物、幻獸、魔動機",
    applicable_parts: "全",
    summary: "1 天魔法指示次數增加至 4 次",
    effect: "魔法指示的使用次數上限由原本的每日 2 次增加至每日 4 次。"
  },
  {
    req_level: 5,
    category: "騎藝",
    name: "HP超強化",
    type: "常態",
    prerequisite: "HP強化",
    target_monsters: "動物、幻獸",
    applicable_parts: "全",
    summary: "騎獸的 HP 再 +5（合計 +10）",
    effect: "騎獸的所有部位 HP 再 +5（與【HP強化】合計 +10）。"
  },

  // ==========================================
  // 等級 10 以上可學會的騎藝
  // ==========================================
  {
    req_level: 10,
    category: "騎藝",
    name: "騎獸超強化",
    type: "常態",
    prerequisite: "騎獸強化",
    target_monsters: "動物、幻獸、魔動機",
    applicable_parts: "核心/全",
    summary: "騎獸命中、迴避力再 +1（合計 +2）",
    effect: "騎獸命中、迴避力再 +1（合計 +2），擁有核心部位者只適用於［核心］，無核心者適用於［全］。"
  },
  {
    req_level: 10,
    category: "騎藝",
    name: "騎乘指揮",
    type: "主動作",
    prerequisite: "無",
    target_monsters: "動物、幻獸、魔動機",
    applicable_parts: "無",
    summary: "亂戰區域內所有同伴（含騎獸）命中力判定獲得 +2 加值修正",
    effect: "騎師能判斷戰況給予同伴指示。此為騎乘中的騎師以主動作進行的騎藝。騎師所存在的亂戰區域內的所有同伴（包含騎獸），命中力判定獲得 +2 的加值修正。"
  },
  {
    req_level: 10,
    category: "騎藝",
    name: "至高處攻擊",
    type: "常態",
    prerequisite: "超高處攻擊",
    target_monsters: "動物、幻獸、魔動機",
    applicable_parts: "無",
    summary: "騎手和同乘者物理攻擊再 +2（合計 +4）",
    effect: "騎手和同乘者物理攻擊再 +2（與【高處攻擊】、【超高處攻擊】合計 +4，適用於遠、近攻擊）。"
  },
  {
    req_level: 10,
    category: "騎藝",
    name: "瞬發魔法指示",
    type: "常態",
    prerequisite: "魔法指示",
    target_monsters: "動物、幻獸、魔動機",
    applicable_parts: "全",
    summary: "能以輔助動作或戰鬥準備執行魔法指示",
    effect: "允許騎手以輔助動作或在戰鬥準備階段下達魔法指示。"
  },
  {
    req_level: 10,
    category: "騎藝",
    name: "超級衝鋒",
    type: "主動作",
    prerequisite: "衝鋒",
    target_monsters: "動物、幻獸、魔動機",
    applicable_parts: "全",
    summary: "全力移動時亦可使用衝鋒，但迴避力 -4",
    effect: "即使在進行全力移動的回合亦可使用【衝鋒】，但使用時騎手與騎獸的迴避力判定受到 -4 的減值修正。"
  },
  {
    req_level: 10,
    category: "騎藝",
    name: "超過驅動",
    type: "輔助動作",
    prerequisite: "限界驅動",
    target_monsters: "魔動機",
    applicable_parts: "全",
    summary: "強化限界驅動，命中 +4 追加傷害 +8，全部位 HP -10",
    effect: "讓魔動機極限暴走，命中 +4、追加傷害 +8，騎手與騎獸迴避力 -4。行使後須進行 10 分鐘調整才能再次使用，且騎獸全部位 HP 扣減 10 點。"
  },
  {
    req_level: 10,
    category: "騎藝",
    name: "超攻擊妨礙",
    type: "常態",
    prerequisite: "攻擊妨礙",
    target_monsters: "動物、幻獸、魔動機",
    applicable_parts: "無",
    summary: "騎手和同乘者迴避力再 +1（合計 +2）",
    effect: "騎手和同乘者迴避力再 +1（與【攻擊妨礙】合計 +2）。"
  },
  {
    req_level: 10,
    category: "騎藝",
    name: "特殊能力完全解放",
    type: "常態",
    prerequisite: "特殊能力解放",
    target_monsters: "動物、幻獸、魔動機",
    applicable_parts: "全",
    summary: "使騎獸的潛在能力完全覺醒並完全操控",
    effect: "使騎獸的潛在能力覺醒並能完全操控。可以使用騎獸持有的特殊能力「前提：【特殊能力完全解放】」等項目。此外，也能使「擴充：【特殊能力完全解放】」等特殊能力在使用上更加有利。"
  },
  {
    req_level: 10,
    category: "騎藝",
    name: "八面六臂",
    type: "常態",
    prerequisite: "無",
    target_monsters: "動物、幻獸、魔動機",
    applicable_parts: "全",
    summary: "使騎獸的所有部位皆可進行主動作（多部位動作時迴避 -2）",
    effect: "騎師能以主動作給予騎獸指示，使所有部位皆可進行主動作。與【勢如破竹】相同，複數部位進行主動作時，該部位於 1 回合內迴避力判定受到 -2 的減值修正。"
  },
  {
    req_level: 10,
    category: "騎藝",
    name: "穩定騎術",
    type: "常態",
    prerequisite: "姿勢維持",
    target_monsters: "動物、幻獸、魔動機",
    applicable_parts: "全",
    summary: "使用姿勢維持時騎獸仍可執行主動作，騎手判定維持 -4",
    effect: "在使用【姿勢維持】時，騎獸不再受限而可正常執行主動作，騎手的行為判定則維持 -4 的減值修正。"
  }
];