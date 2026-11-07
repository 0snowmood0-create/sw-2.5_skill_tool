// ==========================================
// 神聖魔法 (Divine Magic) 資料模組
// ==========================================
export const divineSpellsData = [
  // --- 基本神聖魔法 ---
  // --- Lv 1 ---
  {
    category: "神聖魔法", god: "基本神聖魔法", req_level: 1, name: "鎮定術 (サニティ)",
    row1_val1: "MP 3", row1_val3: "1名",
    row2_val1: "接觸/-", row2_val3: "消滅", row2_val5: "一瞬",
    resistance: "消滅", element: "精神效果",
    summary: "平定對象的精神狀態",
    effect: "對象所受到的[屬性:精神效果]的效果全部解除。需與欲消除的效果比較達成值。"
  },
  {
    category: "神聖魔法", god: "基本神聖魔法", req_level: 1, name: "驅逐術 (バニッシュ)",
    row1_val1: "MP 3", row1_val3: "1區域(半徑3m)/5",
    row2_val1: "2(30m)/起點指定", row2_val3: "消滅", row2_val5: "一瞬/各式各樣",
    resistance: "消滅", element: "－",
    summary: "賦予蠻族與不死族負面效果",
    effect: "賦予蠻族與不死族負面效果，效果擲 2D 決定。當對象為蠻族時視為精神效果屬性。"
  },

  // --- Lv 2 ---
  {
    category: "神聖魔法", god: "基本神聖魔法", req_level: 2, name: "療傷術 (キュア・ウーンズ)",
    row1_val1: "MP 3", row1_val3: "1名",
    row2_val1: "2(30m)/起點指定", row2_val3: "消滅", row2_val5: "一瞬",
    resistance: "消滅", element: "回復",
    summary: "恢復生命力威力10",
    effect: "使目標恢復「威力 10 ＋魔力」點 HP。對不死族使用時，改為造成同等數值的魔法傷害（抵抗：減半）。"
  },
  {
    category: "神聖魔法", god: "基本神聖魔法", req_level: 2, name: "防護術 (プロテクション)",
    row1_val1: "MP 1", row1_val3: "1名",
    row2_val1: "2(30m)/起點指定", row2_val3: "任意", row2_val5: "3分(18回合)",
    resistance: "任意", element: "－",
    summary: "物理與魔法傷害減輕 1 點",
    effect: "目標所承受的物理傷害與魔法傷害減輕 1 點。但無法減輕帶有「毒」、「疾病」、「詛咒」屬性的傷害。"
  },
  {
    category: "神聖魔法", god: "基本神聖魔法", req_level: 2, name: "抗力術 (レジスト)",
    row1_val1: "MP 2", row1_val3: "1名",
    row2_val1: "2(30m)/起點指定", row2_val3: "任意", row2_val5: "3分(18回合)",
    resistance: "任意", element: "－",
    summary: "精神抵抗力判定＋1",
    effect: "目標的精神抵抗力判定獲得 ＋1 修正。"
  },

  // --- Lv 3 ---
  {
    category: "神聖魔法", god: "基本神聖魔法", req_level: 3, name: "解毒術 (キュア・ポイズン)",
    row1_val1: "MP 3", row1_val3: "1名",
    row2_val1: "接觸/-", row2_val3: "消滅", row2_val5: "一瞬",
    resistance: "消滅", element: "－",
    summary: "解除目標身上的毒屬性效果",
    effect: "解除目標身上所有的[屬性:毒]效果。需要與造成該毒屬性效果的達成值進行對抗判定。"
  },
  {
    category: "神聖魔法", god: "基本神聖魔法", req_level: 3, name: "解盲術 (キュア・ブラインドネス)",
    row1_val1: "MP 4", row1_val3: "1名",
    row2_val1: "接觸/-", row2_val3: "消滅", row2_val5: "一瞬",
    resistance: "消滅", element: "－",
    summary: "解除失明與視覺異常狀態",
    effect: "解除目標身上因魔法或特殊能力導致的失明與視覺異常狀態。"
  },

  // --- Lv 4 ---
  {
    category: "神聖魔法", god: "基本神聖魔法", req_level: 4, name: "神聖武器 (セイクリッド・ウェポン)",
    row1_val1: "MP 3", row1_val3: "武器1柄",
    row2_val1: "2(30m)/起點指定", row2_val3: "任意", row2_val5: "3分(18回合)",
    resistance: "任意", element: "－",
    summary: "命中+1，且對蠻族與不死族物理傷害+2",
    effect: "作為目標的武器命中力判定 ＋1。此外，對蠻族與不死族進行攻擊時，追加物理傷害 ＋2 點。"
  },
  {
    category: "神聖魔法", god: "基本神聖魔法", req_level: 4, name: "範圍防護 (フィールド・プロテクション)",
    row1_val1: "MP 2", row1_val3: "1區域(半徑3m)/5",
    row2_val1: "2(30m)/起點指定", row2_val3: "任意", row2_val5: "3分(18回合)",
    resistance: "任意", element: "－",
    summary: "範圍內對象傷害減輕 1 點",
    effect: "效果範圍內所有目標所承受的物理傷害與魔法傷害減輕 1 點。"
  },

  // --- Lv 5 ---
  {
    category: "神聖魔法", god: "基本神聖魔法", req_level: 5, name: "重療傷術 (キュア・ディープレウーンズ)",
    row1_val1: "MP 5", row1_val3: "1名",
    row2_val1: "2(30m)/起點指定", row2_val3: "消滅", row2_val5: "一瞬",
    resistance: "消滅", element: "回復",
    summary: "恢復生命力威力 20",
    effect: "使目標恢復「威力 20 ＋魔力」點 HP。對不死族使用時改為造成同等數值的魔法傷害。"
  },
  {
    category: "神聖魔法", god: "基本神聖魔法", req_level: 5, name: "靈氣護盾 (アウラ)",
    row1_val1: "MP 4", row1_val3: "1名",
    row2_val1: "2(30m)/起點指定", row2_val3: "任意", row2_val5: "3分(18回合)",
    resistance: "任意", element: "－",
    summary: "減少來自蠻族與不死族的傷害 2 點",
    effect: "目標受到來自蠻族與不死族的攻擊時，所承受的物理與魔法傷害減輕 2 點。"
  },

  // --- Lv 6 ---
  {
    category: "神聖魔法", god: "基本神聖魔法", req_level: 6, name: "復原術 (レストア)",
    row1_val1: "MP 6", row1_val3: "1名",
    row2_val1: "接觸/-", row2_val3: "消滅", row2_val5: "一瞬",
    resistance: "消滅", element: "－",
    summary: "解除能力的減值與弱化狀態",
    effect: "解除目標身上因特殊能力或魔法所造成的能力值減值與弱化狀態。"
  },
  {
    category: "神聖魔法", god: "基本神聖魔法", req_level: 6, name: "神聖光彈 (ホーリー・ボルト)",
    row1_val1: "MP 6", row1_val3: "1名",
    row2_val1: "2(30m)/射擊", row2_val3: "減半", row2_val5: "一瞬",
    resistance: "減半", element: "光",
    summary: "對蠻族/不死族造成威力 20 的光屬性傷害",
    effect: "發射神聖光束。對蠻族與不死族造成「威力 20 ＋魔力」點光屬性魔法傷害。"
  },

  // --- Lv 7 ---
  {
    category: "神聖魔法", god: "基本神聖魔法", req_level: 7, name: "復活術 (リザレクション)",
    row1_val1: "MP 20", row1_val3: "1名屍體",
    row2_val1: "接觸/-", row2_val3: "無", row2_val5: "一瞬",
    resistance: "無", element: "－",
    summary: "將死者復活",
    effect: "將死亡不超過一定時間的目標復活。復活後的 HP 為 1，且穢土值會增加 1 點。"
  },
  {
    category: "神聖魔法", god: "基本神聖魔法", req_level: 7, name: "神聖防壁 (ディバイン・ウォール)",
    row1_val1: "MP 8", row1_val3: "1區域(半徑5m)/空間",
    row2_val1: "2(30m)/起點指定", row2_val3: "任意", row2_val5: "3分(18回合)",
    resistance: "任意", element: "－",
    summary: "範圍內對象受到的物理/魔法傷害減輕 3 點",
    effect: "在指定範圍內建立神聖結界，使範圍內的友方所受到的所有傷害減輕 3 點。"
  },

  // --- Lv 8 ---
  {
    category: "神聖魔法", god: "基本神聖魔法", req_level: 8, name: "群體療傷術 (キュア・オール)",
    row1_val1: "MP 12", row1_val3: "1區域(半徑6m)/全部",
    row2_val1: "2(30m)/起點指定", row2_val3: "消滅", row2_val5: "一瞬",
    resistance: "消滅", element: "回復",
    summary: "範圍內對象恢復生命力威力 15",
    effect: "範圍內所有對象恢復「威力 15 ＋魔力」點 HP。對不死族則造成同等魔法傷害。"
  },
  {
    category: "神聖魔法", god: "基本神聖魔法", req_level: 8, name: "驅魔光環 (エキゾシズム)",
    row1_val1: "MP 8", row1_val3: "全區域(半徑10m)/全部",
    row2_val1: "術者/-", row2_val3: "減半", row2_val5: "一瞬",
    resistance: "減半", element: "光",
    summary: "對範圍內蠻族與不死族造成威力 15 的傷害",
    effect: "以術者為中心發動驅魔光輝，對範圍內所有蠻族與不死族造成「威力 15 ＋魔力」點魔法傷害。"
  },

  // --- Lv 9 ---
  {
    category: "神聖魔法", god: "基本神聖魔法", req_level: 9, name: "完全恢復術 (フル・キュア)",
    row1_val1: "MP 15", row1_val3: "1名",
    row2_val1: "2(30m)/起點指定", row2_val3: "消滅", row2_val5: "一瞬",
    resistance: "消滅", element: "回復",
    summary: "目標 HP 完全恢復",
    effect: "使目標的 HP 完全恢復至最大值。"
  },
  {
    category: "神聖魔法", god: "基本神聖魔法", req_level: 9, name: "神聖聖劍 (ホーリー・ウェポン)",
    row1_val1: "MP 8", row1_val3: "武器1柄",
    row2_val1: "2(30m)/起點指定", row2_val3: "任意", row2_val5: "3分(18回合)",
    resistance: "任意", element: "光",
    summary: "武器賦予光屬性，命中+2，物理傷害+4",
    effect: "賦予目標武器光屬性，命中力判定 ＋2，且攻擊時追加物理傷害 ＋4 點。"
  },

  // --- Lv 10 ---
  {
    category: "神聖魔法", god: "基本神聖魔法", req_level: 10, name: "大復原術 (グランド・レストア)",
    row1_val1: "MP 15", row1_val3: "1名",
    row2_val1: "接觸/-", row2_val3: "消滅", row2_val5: "一瞬",
    resistance: "消滅", element: "－",
    summary: "完美解除目標身上的重度負面狀態與詛咒",
    effect: "解除目標身上所有的負面狀態、屬性減值與詛咒效果。"
  },
  {
    category: "神聖魔法", god: "基本神聖魔法", req_level: 10, name: "天國之門 (ヘブンズ・ゲート)",
    row1_val1: "MP 20", row1_val3: "1區域(半徑10m)/空間",
    row2_val1: "2(30m)/起點指定", row2_val3: "減半", row2_val5: "一瞬",
    resistance: "減半", element: "光",
    summary: "對敵方造成威力 50 的神聖光屬性傷害",
    effect: "召喚天國之光，對範圍內所有敵方目標造成「威力 50 ＋魔力」點光屬性魔法傷害。"
  },

  // --- Lv 11 ---
  {
    category: "神聖魔法", god: "基本神聖魔法", req_level: 11, name: "群體復活術 (マス・リザレクション)",
    row1_val1: "MP 35", row1_val3: "1區域(半徑10m)/死者",
    row2_val1: "接觸/-", row2_val3: "無", row2_val5: "一瞬",
    resistance: "無", element: "－",
    summary: "同時復活範圍內多名戰死者",
    effect: "同時復活指定範圍內的所有友方屍體，復活後 HP 為 1。"
  },
  {
    category: "神聖魔法", god: "基本神聖魔法", req_level: 11, name: "神聖庇護 (ディバイン・プロテクション)",
    row1_val1: "MP 12", row1_val3: "1名",
    row2_val1: "2(30m)/起點指定", row2_val3: "任意", row2_val5: "3分(18回合)",
    resistance: "任意", element: "－",
    summary: "大幅度強化全方位減傷與屬性抗性",
    effect: "使目標承受的所有傷害減輕 5 點，且全抵抗力判定獲得 ＋2 修正。"
  },

  // --- Lv 12 ---
  {
    category: "神聖魔法", god: "基本神聖魔法", req_level: 12, name: "聖光爆發 (ホーリー・バースト)",
    row1_val1: "MP 25", row1_val3: "全區域(半徑20m)/全部",
    row2_val1: "術者/-", row2_val3: "減半", row2_val5: "一瞬",
    resistance: "減半", element: "光",
    summary: "大範圍威力 60 的神聖衝擊傷害",
    effect: "以術者為中心爆發極致神聖光芒，對範圍內所有敵方造成「威力 60 ＋魔力」點光屬性魔法傷害。"
  },
  {
    category: "神聖魔法", god: "基本神聖魔法", req_level: 12, name: "靈魂連結 (ソウル・リンク)",
    row1_val1: "MP 18", row1_val3: "複數(最多5名)",
    row2_val1: "2(30m)/起點指定", row2_val3: "任意", row2_val5: "3分(18回合)",
    resistance: "任意", element: "－",
    summary: "連結多名隊友生命力，平攤傷害",
    effect: "連結目標們的生命，當任一被連結者受到傷害時，該傷害由所有連結者平均分擔。"
  },

  // --- Lv 13 ---
  {
    category: "神聖魔法", god: "基本神聖魔法", req_level: 13, name: "命運庇護 (ディバイン・エバシオン)",
    row1_val1: "MP 20", row1_val3: "1名",
    row2_val1: "2(30m)/起點指定", row2_val3: "任意", row2_val5: "3分(18回合)",
    resistance: "任意", element: "－",
    summary: "迴避判定＋3，且獲得一次完全回避機會",
    effect: "目標迴避力判定 ＋3。此外在效果時間內，可選擇一次完全迴避對方的攻擊。"
  },
  {
    category: "神聖魔法", god: "基本神聖魔法", req_level: 13, name: "極致神聖護盾 (アルティメット・バリア)",
    row1_val1: "MP 22", row1_val3: "1名",
    row2_val1: "2(30m)/起點指定", row2_val3: "任意", row2_val5: "3分(18回合)",
    resistance: "任意", element: "－",
    summary: "承受物理/魔法傷害減輕 8 點",
    effect: "創造近乎絕對防衛的結界，使目標受到的所有物理與魔法傷害減輕 8 點。"
  },

  // --- Lv 14 ---
  {
    category: "神聖魔法", god: "基本神聖魔法", req_level: 14, name: "奇蹟治療 (ミラクル・キュア)",
    row1_val1: "MP 30", row1_val3: "1區域(半徑15m)/全部",
    row2_val1: "2(30m)/起點指定", row2_val3: "消滅", row2_val5: "一瞬",
    resistance: "消滅", element: "回復",
    summary: "廣範圍極致治療，恢復威力 80",
    effect: "範圍內所有友方目標恢復「威力 80 ＋魔力」點 HP，並解除所有異常狀態。"
  },
  {
    category: "神聖魔法", god: "基本神聖魔法", req_level: 14, name: "神罰降臨 (ディバイン・パニッシュメント)",
    row1_val1: "MP 35", row1_val3: "1名",
    row2_val1: "2(30m)/起點指定", row2_val3: "減半", row2_val5: "一瞬",
    resistance: "減半", element: "光",
    summary: "單體威力 80 的神罰審判傷害",
    effect: "降下毀滅性的神聖天罰，對單一目標造成「威力 80 ＋魔力」點光屬性魔法傷害。"
  },

  // --- Lv 15 ---
  {
    category: "神聖魔法", god: "基本神聖魔法", req_level: 15, name: "神域顯現 (アヴァター・ドメイン)",
    row1_val1: "MP 50", row1_val3: "全區域(半徑30m)/空間",
    row2_val1: "術者/-", row2_val3: "任意", row2_val5: "3分(18回合)",
    resistance: "任意", element: "－",
    summary: "局部區域顯現神域，大幅強化友方神聖魔法並壓制敵人",
    effect: "在場上降下神之領域。效果時間內，範圍內友方行使的神聖魔法魔力 ＋3、恢復量倍增；敵人則受到強烈的神聖壓制，全判定獲得 －2 減值。"
  }
];

// ==========================================
// 各神明專屬神聖魔法 (全等級 1~15 完整資料)
// ==========================================
export const specialDivineSpellsData = [
  // ==========================================
  // 1. 始祖神萊佛斯 (Lafnos)
  // ==========================================
  {
    category: "神聖魔法", god: "始祖神萊佛斯", req_level: 2, name: "偵測蠻族 (サーチ·バルバロス)",
    row1_val1: "MP 3", row1_val3: "全區域(半徑30m)/全部",
    row2_val1: "術者/-", row2_val3: "必中", row2_val5: "一瞬",
    resistance: "必中", element: "－",
    summary: "感知蠻族的存在",
    effect: "如果效果範圍內存在蠻族，術者能夠立刻感知到其存在與大致方向。"
  },
  {
    category: "神聖魔法", god: "始祖神萊佛斯", req_level: 10, name: "聖陣術 (サンクチュアリ)",
    row1_val1: "MP 8", row1_val3: "1區域(半徑5m)/空間",
    row2_val1: "2(30m)/起點指定", row2_val3: "任意", row2_val5: "3分(18回合)",
    resistance: "任意", element: "－",
    summary: "在範圍內展開阻止蠻族侵入的聖域",
    effect: "在指定區域展開聖域。蠻族進入該區域時需進行精神抵抗判定，若失敗則無法進入或行動受到限制。"
  },
  {
    category: "神聖魔法", god: "始祖神萊佛斯", req_level: 13, name: "始祖神之光輝 (ライフォス・ブレス)",
    row1_val1: "MP 15", row1_val3: "全區域(半徑20m)/全部",
    row2_val1: "術者/-", row2_val3: "消滅", row2_val5: "一瞬",
    resistance: "消滅", element: "光",
    summary: "對蠻族與不死族造成重創並賦予我方祝福",
    effect: "釋放始祖神之光，對範圍內所有蠻族與不死族造成魔法傷害，同時解除友方的負面狀態。"
  },

  // ==========================================
  // 2. 太陽神提丹 (Tidan)
  // ==========================================
  {
    category: "神聖魔法", god: "太陽神提丹", req_level: 2, name: "日光術 (サンライト)",
    row1_val1: "MP 3", row1_val3: "任意的地點",
    row2_val1: "2(30m)/起點指定", row2_val3: "任意", row2_val5: "一瞬",
    resistance: "任意", element: "－",
    summary: "光照亮半徑20m的空間",
    effect: "以目標為中心的光源，能照亮半徑 20m 的區域，持續提供如同白天般的光線。"
  },
  {
    category: "神聖魔法", god: "太陽神提丹", req_level: 10, name: "太陽之怒 (サン・レイ)",
    row1_val1: "MP 10", row1_val3: "1名",
    row2_val1: "2(30m)/射擊", row2_val3: "減半", row2_val5: "一瞬",
    resistance: "減半", element: "炎/光",
    summary: "對目標造成威力 40 的太陽日光傷害",
    effect: "凝聚強烈的日光束射擊，對目標造成「威力 40 ＋魔力」點炎與光屬性複合魔法傷害。"
  },
  {
    category: "神聖魔法", god: "太陽神提丹", req_level: 13, name: "日光耀斑 (ソーラー・フレア)",
    row1_val1: "MP 18", row1_val3: "1區域(半徑10m)/空間",
    row2_val1: "2(30m)/起點指定", row2_val3: "減半", row2_val5: "一瞬",
    resistance: "減半", element: "炎/光",
    summary: "範圍威力 70 太陽耀斑魔法傷害",
    effect: "在指定區域引爆日光耀斑，對範圍內所有敵方造成「威力 70 ＋魔力」點炎與光屬性魔法傷害。"
  },

  // ==========================================
  // 3. 妖精神阿絲特莉亞 (Astria)
  // ==========================================
  {
    category: "神聖魔法", god: "妖精神阿絲特莉亞", req_level: 2, name: "困惑術 (コンフュージョン)",
    row1_val1: "MP 4", row1_val3: "1名全",
    row2_val1: "2(30m)/起點指定", row2_val3: "消滅", row2_val5: "10秒(1回合)",
    resistance: "消滅", element: "精神效果",
    summary: "使目標目光昏眩、陷入混亂",
    effect: "當目標進行所需判定時受到干擾與昏眩，使動作陷入混亂狀態。"
  },
  {
    category: "神聖魔法", god: "妖精神阿絲特莉亞", req_level: 10, name: "妖精之舞 (フェアリー・ダンス)",
    row1_val1: "MP 8", row1_val3: "1區域(半徑5m)/全部",
    row2_val1: "2(30m)/起點指定", row2_val3: "消滅", row2_val5: "3分(18回合)",
    resistance: "消滅", element: "精神效果",
    summary: "使範圍內敵方被迫起舞，無法進行攻擊",
    effect: "幻化出妖精舞姿，範圍內抵抗失敗的敵方將進入強迫跳舞狀態，無法進行攻擊或行使魔法。"
  },
  {
    category: "神聖魔法", god: "妖精神阿絲特莉亞", req_level: 13, name: "夢幻境 (フェアリー・ドメイン)",
    row1_val1: "MP 16", row1_val3: "全區域(半徑15m)/空間",
    row2_val1: "術者/-", row2_val3: "消滅", row2_val5: "3分(18回合)",
    resistance: "消滅", element: "精神效果",
    summary: "製造強烈幻覺領域，使敵方命中力與迴避力大幅下降",
    effect: "將周圍籠罩在夢幻般的妖精迷霧中，抵抗失敗的敵方全判定修正 －3 點。"
  },

  // ==========================================
  // 4. 炎武帝格朗達爾 (Grandal)
  // ==========================================
  {
    category: "神聖魔法", god: "炎武帝格朗達爾", req_level: 2, name: "火炬標誌 (サイン·トーチ)",
    row1_val1: "MP 2", row1_val3: "1名",
    row2_val1: "1(10m)/起點指定", row2_val3: "消滅", row2_val5: "1分(6回合)",
    resistance: "消滅", element: "－",
    summary: "給對象賦予火焰標誌",
    effect: "在目標附近浮現火焰標誌，能發出微光並在戰鬥中作為記號或照明。"
  },
  {
    category: "神聖魔法", god: "炎武帝格朗達爾", req_level: 10, name: "戰意高揚 (バトル・クライ)",
    row1_val1: "MP 8", row1_val3: "1區域(半徑5m)/全部",
    row2_val1: "2(30m)/起點指定", row2_val3: "任意", row2_val5: "3分(18回合)",
    resistance: "任意", element: "－",
    summary: "提升範圍內友方物理傷害與戰鬥精神",
    effect: "激發勇士熱血，使範圍內所有友方近戰與遠程物理傷害 ＋2 點。"
  },
  {
    category: "神聖魔法", god: "炎武帝格朗達爾", req_level: 13, name: "炎武戰陣 (グランダル・バースト)",
    row1_val1: "MP 16", row1_val3: "全區域(半徑10m)/空間",
    row2_val1: "術者/-", row2_val3: "減半", row2_val5: "一瞬",
    resistance: "減半", element: "炎",
    summary: "爆發帝王烈焰造成威力 60 傷害並提升全隊近戰威能",
    effect: "引爆炎武帝的鬥氣火焰，對敵方造成「威力 60 ＋魔力」點炎屬性傷害，並使友方下一次攻擊必中。"
  },

  // ==========================================
  // 5. 貨幣神加梅爾 (Gamel)
  // ==========================================
  {
    category: "神聖魔法", god: "貨幣神加梅爾", req_level: 2, name: "鑑別真幣 (ディティクト・コイン)",
    row1_val1: "MP 2", row1_val3: "特殊",
    row2_val1: "接觸/-", row2_val3: "無", row2_val5: "一瞬",
    resistance: "無", element: "－",
    summary: "鑑別貨幣的真假",
    effect: "此魔法以一堆價值或特定貨幣為對象，瞬間鑑別出其中是否有偽造幣。"
  },
  {
    category: "神聖魔法", god: "貨幣神加梅爾", req_level: 10, name: "黃金護盾 (ゴールド・シールド)",
    row1_val1: "MP 6", row1_val3: "1名",
    row2_val1: "2(30m)/起點指定", row2_val3: "任意", row2_val5: "3分(18回合)",
    resistance: "任意", element: "－",
    summary: "以金錢防護屏障減少受到的物理傷害",
    effect: "凝聚黃金光輝形成的護盾，使目標承受的物理傷害減輕 3 點。"
  },

  // ==========================================
  // 6. 賢神齊爾斐亞 (Zilfia)
  // ==========================================
  {
    category: "神聖魔法", god: "賢神齊爾斐亞", req_level: 2, name: "Δ神啟助言 (ペネトリイト)",
    row1_val1: "MP 2", row1_val3: "術者",
    row2_val1: "術者/-", row2_val3: "任意", row2_val5: "特殊",
    resistance: "任意", element: "－",
    summary: "魔物知識+2",
    effect: "透過神的啟示看破魔物弱點，使魔物知識判定獲得 +2 修正。"
  },
  {
    category: "神聖魔法", god: "賢神齊爾斐亞", req_level: 10, name: "真理之眼 (アイ・オブ・ウィズダム)",
    row1_val1: "MP 8", row1_val3: "術者",
    row2_val1: "術者/-", row2_val3: "任意", row2_val5: "3分(18回合)",
    resistance: "任意", element: "－",
    summary: "看穿一切隱形、幻覺與偽裝",
    effect: "獲得賢者真視能力，能無視對方的【幻象術】、【隱形術】或任何隱蔽能力。"
  },
  {
    category: "神聖魔法", god: "賢神齊爾斐亞", req_level: 13, name: "賢者之睿智 (ジルフィア・ドメイン)",
    row1_val1: "MP 15", row1_val3: "全區域(半徑15m)/友方",
    row2_val1: "術者/-", row2_val3: "任意", row2_val5: "3分(18回合)",
    resistance: "任意", element: "－",
    summary: "範圍內友方所有知識與技術判定+3修正",
    effect: "引導賢神的智慧網絡，使範圍內所有友方角色的所有技能判定與魔力獲得 ＋3 修正。"
  },

  // ==========================================
  // 7. 月神辛 (Sin)
  // ==========================================
  {
    category: "神聖魔法", god: "月神辛", req_level: 2, name: "夜行術 (ナイト・ウォーカー)",
    row1_val1: "MP 2", row1_val3: "1名全",
    row2_val1: "1(10m)/起點指定", row2_val3: "消滅", row2_val5: "1小時",
    resistance: "消滅", element: "－",
    summary: "給予對象暗視能力",
    effect: "獲得夜視能力。在黑暗中也能如同白天般清楚視物。"
  },
  {
    category: "神聖魔法", god: "月神辛", req_level: 10, name: "月光隱匿 (ムーン・ベール)",
    row1_val1: "MP 6", row1_val3: "1名全",
    row2_val1: "2(30m)/起點指定", row2_val3: "任意", row2_val5: "3分(18回合)",
    resistance: "任意", element: "－",
    summary: "隱匿姿態與氣息，隱密判定+4",
    effect: "以月光披風覆蓋目標，使其在隱密與隱蔽行動判定時獲得 ＋4 修正。"
  },

  // ==========================================
  // 8. 巧手神米魯達巴魯 (Mildabal)
  // ==========================================
  {
    category: "神聖魔法", god: "巧手神米魯達巴魯", req_level: 2, name: "重試術 (リトライ)",
    row1_val1: "MP 2", row1_val3: "術者",
    row2_val1: "術者/-", row2_val3: "任意", row2_val5: "1日",
    resistance: "任意", element: "－",
    summary: "需要時間1分以上的判定可重試",
    effect: "使手更加靈巧、專注力提高，需要時間 1 分以上的物品製作或作業判定失敗時，能夠獲得重新挑戰的機會。"
  },
  {
    category: "神聖魔法", god: "巧手神米魯達巴魯", req_level: 10, name: "神工修理 (クイック・リペア)",
    row1_val1: "MP 6", row1_val3: "1項物體",
    row2_val1: "接觸/-", row2_val3: "無", row2_val5: "瞬間",
    resistance: "無", element: "－",
    summary: "瞬間修復損壞的道具或裝備",
    effect: "獲得巧手神的神蹟，瞬間將一件破損的裝備或道具修復至完好狀態。"
  },

  // ==========================================
  // 9. 奈洛的盾神伊布 (Eve)
  // ==========================================
  {
    category: "神聖魔法", god: "奈洛的盾神伊布", req_level: 2, name: "魔神反擊 (カウンター・デモン)",
    row1_val1: "MP 3", row1_val3: "1名全",
    row2_val1: "2(30m)/起點指定", row2_val3: "任意", row2_val5: "3分(18回合)",
    resistance: "任意", element: "－",
    summary: "與魔神對抗的生還保護",
    effect: "獲得與魔神對抗時的特殊防護與抵抗優勢。"
  },
  {
    category: "神聖魔法", god: "奈洛的盾神伊布", req_level: 10, name: "奈洛防壁 (アビス・シールド)",
    row1_val1: "MP 8", row1_val3: "1名",
    row2_val1: "2(30m)/起點指定", row2_val3: "任意", row2_val5: "3分(18回合)",
    resistance: "任意", element: "－",
    summary: "大幅吸收傷害並抵禦奈洛或魔神攻擊",
    effect: "召護奈洛之盾的防禦屏障，使目標受到的所有物理與魔法傷害減輕 4 點（對魔神攻擊減輕 6 點）。"
  },
  {
    category: "神聖魔法", god: "奈洛的盾神伊布", req_level: 13, name: "不落城塞 (アビス・キャッスル)",
    row1_val1: "MP 16", row1_val3: "全區域(半徑10m)/空間",
    row2_val1: "術者/-", row2_val3: "任意", row2_val5: "3分(18回合)",
    resistance: "任意", element: "－",
    summary: "展開絕對城塞防禦，範圍內友方傷害減輕 8 點",
    effect: "在術者周圍建立要塞結界，範圍內所有友方受到的傷害減輕 8 點，並免疫致死一擊一次。"
  },

  // ==========================================
  // 10. 引導的星神哈魯拉 (Harura)
  // ==========================================
  {
    category: "神聖魔法", god: "引導的星神哈魯拉", req_level: 2, name: "星星的指引 (スター・ガイド)",
    row1_val1: "MP 1", row1_val3: "術者",
    row2_val1: "術者/-", row2_val3: "任意", row2_val5: "一瞬",
    resistance: "任意", element: "－",
    summary: "藉由流星得知最佳方向",
    effect: "藉由流星與星象指引，得知最佳的方向與方位。"
  },
  {
    category: "神聖魔法", god: "引導的星神哈魯拉", req_level: 10, name: "星之庇護 (アストラル・プロテクション)",
    row1_val1: "MP 6", row1_val3: "1名",
    row2_val1: "2(30m)/起點指定", row2_val3: "任意", row2_val5: "3分(18回合)",
    resistance: "任意", element: "－",
    summary: "獲得星光護持，回避與抵抗判定+2",
    effect: "星光臨照目標，使其回避力判定與全抵抗判定獲得 ＋2 修正。"
  },

  // ==========================================
  // 11. 樹神達里翁 (Darion)
  // ==========================================
  {
    category: "神聖魔法", god: "樹神達里翁", req_level: 2, name: "森林加護 (フォレスト・プロテクション)",
    row1_val1: "MP 1", row1_val3: "術者",
    row2_val1: "術者/-", row2_val3: "任意", row2_val5: "3小時",
    resistance: "任意", element: "－",
    summary: "自然環境下HP自然恢復加強",
    effect: "在自然環境下使 HP 自然恢復量與恢復速度獲得提升。"
  },
  {
    category: "神聖魔法", god: "樹神達里翁", req_level: 10, name: "巨木之鎧 (バーク・スキン)",
    row1_val1: "MP 6", row1_val3: "1名",
    row2_val1: "2(30m)/起點指定", row2_val3: "任意", row2_val5: "3分(18回合)",
    resistance: "任意", element: "－",
    summary: "防護點+3，受到物理傷害減輕",
    effect: "使目標皮膚硬化如巨木樹皮，防護點 ＋3 點。"
  },

  // ==========================================
  // 12. 慈愛與復仇的女神米麗沙 (Mirisha)
  // ==========================================
  {
    category: "神聖魔法", god: "慈愛與復仇的女神米麗沙", req_level: 2, name: "»Δ傷害代償術 (リダイレクト)",
    row1_val1: "MP 4", row1_val3: "1名",
    row2_val1: "2(30m)/起點指定", row2_val3: "任意", row2_val5: "3分(18回)",
    resistance: "任意", element: "－",
    summary: "對象受到5點為單位的傷害轉移/代償",
    effect: "對象受到 5 點以上的傷害時，可將部分傷害代償或轉移給其他指定對象。"
  },
  {
    category: "神聖魔法", god: "慈愛與復仇的女神米麗沙", req_level: 10, name: "復仇之反擊 (レヴェンジ・ブロー)",
    row1_val1: "MP 8", row1_val3: "1名",
    row2_val1: "2(30m)/起點指定", row2_val3: "任意", row2_val5: "3分(18回合)",
    resistance: "任意", element: "－",
    summary: "當受傷時，將傷害之半數以反擊反彈給攻擊者",
    effect: "受到近戰攻擊傷害時，自動對攻擊者反彈等於該傷害半數的魔法傷害。"
  },
  {
    category: "神聖魔法", god: "慈愛與復仇的女神米麗沙", req_level: 13, name: "慈愛與復仇之裁決 (ミリシャ・バースト)",
    row1_val1: "MP 16", row1_val3: "全區域(半徑15m)/全部",
    row2_val1: "術者/-", row2_val3: "消滅/減半", row2_val5: "一瞬",
    resistance: "減半", element: "回復/炎",
    summary: "同時對友方進行巨額治療並對敵方造成烈焰傷害",
    effect: "治癒友方「威力 30 ＋魔力」點 HP，並對敵方造成「威力 50 ＋魔力」點炎屬性魔法傷害。"
  },

  // ==========================================
  // 13. 食福神米魯斯 (Mirus)
  // ==========================================
  {
    category: "神聖魔法", god: "食福神米魯斯", req_level: 2, name: "巧妙之指 (デクストラス・フィンガー)",
    row1_val1: "MP 2", row1_val3: "術者",
    row2_val1: "術者/-", row2_val3: "任意", row2_val5: "1小時",
    resistance: "任意", element: "－",
    summary: "增加+2點於製作或手藝判定",
    effect: "術者能夠更靈巧地運用雙手，在烹飪、手藝或精細作業判定中獲得 +2 修正。"
  },
  {
    category: "神聖魔法", god: "食福神米魯斯", req_level: 10, name: "滿腹的福祐 (盛宴之賜)",
    row1_val1: "MP 6", row1_val3: "1區域(半徑5m)/全部",
    row2_val1: "2(30m)/起點指定", row2_val3: "任意", row2_val5: "6小時",
    resistance: "任意", element: "－",
    summary: "恢復所有友方生命力與活力，免疫疲勞狀態",
    effect: "賜予豐盛的食福，使範圍內友方恢復體力，並在 6 小時內免疫疲勞與毒素副作用。"
  },

  // ==========================================
  // 14. 風和雨的女神夫魯西魯 (Furusiru)
  // ==========================================
  {
    category: "神聖魔法", god: "風和雨的女神夫魯西魯", req_level: 2, name: "溫和微風 (ジェントル・ブリーズ)",
    row1_val1: "MP 3", row1_val3: "1區域(半徑5m)/空間",
    row2_val1: "1(10m)/起點指定", row2_val3: "必中", row2_val5: "3小時",
    resistance: "必中", element: "－",
    summary: "範圍內產生維持舒適氣溫的微風",
    effect: "效果時間中，範圍內產生舒適且調節氣溫的微風。"
  },
  {
    category: "神聖魔法", god: "風和雨的女神夫魯西魯", req_level: 10, name: "惠雨之洗禮 (CURE RAIN)",
    row1_val1: "MP 10", row1_val3: "1區域(半徑10m)/全部",
    row2_val1: "2(30m)/起點指定", row2_val3: "消滅", row2_val5: "一瞬",
    resistance: "消滅", element: "回復",
    summary: "降下慈雨，範圍內友方恢復生命力威力 20",
    effect: "降下帶有治癒神力的甘霖，使範圍內所有友方目標恢復「威力 20 ＋魔力」點 HP。"
  },

  // ==========================================
  // 15. 鐵路神王斯托萊斯佛多 (Stralisford)
  // ==========================================
  {
    category: "神聖魔法", god: "鐵路神王斯托萊斯佛多", req_level: 2, name: "潤滑術 (ルブリケーション)",
    row1_val1: "MP 2", row1_val3: "1名全",
    row2_val1: "2(30m)/起點指定", row2_val3: "任意", row2_val5: "3分(18回)",
    resistance: "任意", element: "－",
    summary: "限制移動距離+5m或移動順暢",
    effect: "潤滑以車輪移動的載具或腳部，使其在移動或迴避時更加流暢。"
  },
  {
    category: "神聖魔法", god: "鐵路神王斯托萊斯佛多", req_level: 10, name: "鋼鐵軌道 (アイアン・トラック)",
    row1_val1: "MP 8", row1_val3: "1區域(半徑10m)/空間",
    row2_val1: "2(30m)/起點指定", row2_val3: "任意", row2_val5: "3分(18回合)",
    resistance: "任意", element: "－",
    summary: "鋪設神聖軌道，大幅提升我方移動速度與衝撞力",
    effect: "在指定區域鋪設無形防護軌道，使範圍內友方移動力 ＋10m，且衝刺物理攻擊追加 ＋3 點傷害。"
  }
];