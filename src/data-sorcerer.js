// ==========================================
// 操靈魔法 (Sorcerer Magic) 完整技能與魔法資料模組 (Lv 1~15)
// ==========================================
export const sorcererData = [
  // --- Lv 1 ---
  {
  category: "操靈魔法", type: "操靈魔法", req_level: 1, name: "魔化武器 (エンチャント・ウェポン)",
  row1_val1: "MP 2", row1_val3: "1名",
  row2_val1: "2(30m)/射擊", row2_val3: "任意", row2_val5: "3分(18回)",
  resistance: "任意", element: "－",
  summary: "武器、拳、爪等強化，物理攻擊+1",
  effect: `當對象進行近接攻擊、遠程攻擊時，使用的武器視為魔法武器，產生的物理傷害+1。`
  },
  {
  category: "操靈魔法", type: "操靈魔法", req_level: 1, name: "電光術 (スパーク)",
  row1_val1: "MP 6", row1_val3: "1區域(半徑3m/5)",
  row2_val1: "2(30m)/起點指定", row2_val3: "半減", row2_val5: "一瞬",
  resistance: "半減", element: "雷",
  summary: "威力0傷害",
  effect: `在空氣間產生小閃電，攻擊範圍內所有角色，造成「威力0 ＋魔力」點魔法傷害。`
  },
  {
  category: "操靈魔法", type: "操靈魔法", req_level: 1, name: "黑暗迷霧 (ダーク・ミスト)",
  row1_val1: "MP 2", row1_val3: "1區域(半徑3m/5)",
  row2_val1: "2(30m)/起點指定", row2_val3: "消滅", row2_val5: "10秒/1回合",
  resistance: "消滅", element: "－",
  summary: "迴避力-2",
  effect: `在指定的空間裡充滿魔法霧氣。抵抗失敗者會失去遠近感，迴避力受到－2 的減值修正。`
  },
  {
  category: "操靈魔法", type: "操靈魔法", req_level: 1, name: "防護術 (プロテクション)",
  row1_val1: "MP 1", row1_val3: "1名",
  row2_val1: "1(10m)/起點指定", row2_val3: "任意", row2_val5: "3分/18回合",
  resistance: "任意", element: "－",
  summary: "對象受到傷害-1",
  effect: `目標所受到的物理、魔法傷害－1點。【防護術】無法減少來自毒、疾病、詛咒屬性的傷害。`
  },
  
  // --- Lv 2 ---
  {
  category: "操靈魔法", type: "操靈魔法", req_level: 2, name: "地息治療術 (アース・ヒール)",
  row1_val1: "MP 3", row1_val3: "1名",
  row2_val1: "1(10m)/起點指定", row2_val3: "消滅", row2_val5: "一瞬",
  resistance: "消滅", element: "－",
  summary: "威力0回復(全總類有效)",
  effect: `恢復HP 的魔法。恢復量為「威力0 ＋魔力」點。也能恢復分類為「不死生物」「魔法生物」「魔動機」的角色。\n此魔法不會產生暴擊。`
  },
  {
  category: "操靈魔法", type: "操靈魔法", req_level: 2, name: "魔法反制 (カウンター・マジック)",
  row1_val1: "MP 1", row1_val3: "1名",
  row2_val1: "2(30m)/起點指定", row2_val3: "任意", row2_val5: "3分/18回合",
  resistance: "任意", element: "－",
  summary: "精神抵抗+2",
  effect: `目標進行精神抵抗力時，達成值獲得＋2的加值修正。`
  },
  {
  category: "操靈魔法", type: "操靈魔法", req_level: 2, name: "人偶操縱 (コマンド・ドール)",
  row1_val1: "MP 4", row1_val3: "1個人偶",
  row2_val1: "接觸", row2_val3: "無", row2_val5: "1天/命令達成",
  resistance: "無", element: "－",
  summary: "操縱人偶",
  effect: `給予人偶或玩偶命令，使其行動。受此魔法操控的目標會擁有與「使魔·貓」相同的資料（沒有特殊能力）。尺寸只限於小動物程度，運動能力相當於人類孩童。同一時間只能給予一道命令。`
  },
  {
  category: "操靈魔法", type: "操靈魔法", req_level: 2, name: "狂熱術 (ファナティシズム)",
  row1_val1: "MP 3", row1_val3: "1名",
  row2_val1: "2(30m)/起點指定", row2_val3: "消滅", row2_val5: "3分/18回合",
  resistance: "消滅", element: "精神效果",
  summary: "命中+2 迴避-2",
  effect: `目標在效果時間中，命令力判定獲得＋2的加值修正。迴避力判定受到－2 的減值修正。`
  },
  
  // --- Lv 3 ---
  {
  category: "操靈魔法", type: "操靈魔法", req_level: 3, name: "火焰武器 (ファイア・ウェポン)",
  row1_val1: "MP 4", row1_val3: "1名",
  row2_val1: "2(30m)/起點指定", row2_val3: "任意", row2_val5: "3分/18回合",
  resistance: "任意", element: "炎",
  summary: "賦予武器炎屬性，傷害+2",
  effect: `目標進行近接攻擊、射擊攻擊時，該攻擊所使用的武器會被視為炎屬性的魔法武器，物理傷害＋2點。`
  },
  {
  category: "操靈魔法", type: "操靈魔法", req_level: 3, name: "地息恢復術 (レイジング・アース)",
  row1_val1: "MP 7", row1_val3: "2~3區域(半徑10m)/空間",
  row2_val1: "1(10m)/起點指定", row2_val3: "必中", row2_val5: "30秒/3回合",
  resistance: "必中", element: "－",
  summary: "回合結束時恢復HP 3點",
  effect: `效果範圍內的角色，在自身的回合結束時恢復HP「3」點。分類為「不死生物」「魔法生物」「魔動機」的角色也能成為恢復的目標。`
  },
  {
  category: "操靈魔法", type: "操靈魔法", req_level: 3, name: "創造不死族 (クリエイト・アンデッド)",
  row1_val1: "MP 4~", row1_val3: "接觸點",
  row2_val1: "接觸", row2_val3: "－", row2_val5: "1日",
  resistance: "－", element: "－",
  summary: "製作不死族，遵從意志行動",
  effect: `製作不死生物。目標能遵從一道簡單的命令，並且會實行該命令直到被破壞為止。此魔法行使需要1小時。`
  },
  {
  category: "操靈魔法", type: "操靈魔法", req_level: 3, name: "創造魔像 (クリエイト・ゴーレム)",
  row1_val1: "MP 4~", row1_val3: "接觸點",
  row2_val1: "接觸", row2_val3: "－", row2_val5: "1日",
  resistance: "－", element: "－",
  summary: "製作魔像，遵從意志行動",
  effect: `製作魔像。目標能遵從一道簡單的命令，並且會實行該命令直到被破壞為止。此魔法行使需要1小時。`
  },
  
  // --- Lv 4 ---
  {
  category: "操靈魔法", type: "操靈魔法", req_level: 4, name: "偽裝術 (ディスガイア)",
  row1_val1: "MP 3", row1_val3: "1名全",
  row2_val1: "接觸/-", row2_val3: "任意", row2_val5: "1小時",
  resistance: "任意", element: "－",
  summary: "改變對象外觀",
  effect: `將目標的外表改變成術者所熟知的人族。產生變化的只有外觀，其大小、重量、聲音、氣味等都不會有所變化。`
  },
  {
  category: "操靈魔法", type: "操靈魔法", req_level: 4, name: "人偶視野 (ドール・サイト)",
  row1_val1: "MP 3", row1_val3: "1個人偶",
  row2_val1: "接觸/-", row2_val3: "無", row2_val5: "1小時",
  resistance: "無", element: "－",
  summary: "與人偶視野連結並視物",
  effect: `與人偶或玩偶的視野相通來看見東西。可在目標視野與自己視野間自由切換。`
  },
  {
  category: "操靈魔法", type: "操靈魔法", req_level: 4, name: "魔法抑制術 (フォビドゥン・マジック)",
  row1_val1: "MP 5", row1_val3: "1名",
  row2_val1: "1(10m)/起點指定", row2_val3: "消滅", row2_val5: "30秒/3回合",
  resistance: "消滅", element: "詛咒",
  summary: "禁止1系統3等以下魔法使用",
  effect: `指定一種魔法師系技能，該技能3級以下的魔法將無法使用。用於複數對象時只能指定同一系統。`
  },
  {
  category: "操靈魔法", type: "操靈魔法", req_level: 4, name: "劇毒雲 (ポイズン・クラウド)",
  row1_val1: "MP 6", row1_val3: "1區域(半徑3m)/5",
  row2_val1: "2(30m)/起點指定", row2_val3: "消滅", row2_val5: "1分(6回合)",
  resistance: "消滅", element: "毒",
  summary: "每回合造成3點毒屬性傷害",
  effect: `抵抗失敗的目標在1分鐘（6輪）內，於回合結束時會受到3點的毒屬性魔法傷害。`
  },
  
  // --- Lv 5 ---
  {
  category: "操靈魔法", type: "操靈魔法", req_level: 5, name: "大地之盾 (アース・シールド)",
  row1_val1: "MP 4", row1_val3: "1名",
  row2_val1: "2(30m)/起點指定", row2_val3: "任意", row2_val5: "3分(18回合)",
  resistance: "任意", element: "－",
  summary: "防護點+2",
  effect: `將大地的活力附加於防具與肉體上，使對象防護點+2。`
  },
  {
  category: "操靈魔法", type: "操靈魔法", req_level: 5, name: "強化控制 (インテンス・コントロール)",
  row1_val1: "MP 5", row1_val3: "1名",
  row2_val1: "2(30m)/起點指定", row2_val3: "任意", row2_val5: "3分(18回合)",
  resistance: "任意", element: "－",
  summary: "強化術者製作的魔偶/不死族",
  effect: `目標如果為術者所製作的魔法生物、不死生物或使魔，命中力與迴避力判定＋2，造成物理傷害＋2，承受物理與魔法傷害－2。`
  },
  {
  category: "操靈魔法", type: "操靈魔法", req_level: 5, name: "魔力過剩 (スペル・エンハンス)",
  row1_val1: "MP 3", row1_val3: "1名",
  row2_val1: "接觸/-", row2_val3: "任意", row2_val5: "3分(18回合)",
  resistance: "任意", element: "－",
  summary: "全魔力+1",
  effect: `讓對象的所有魔法能力強化。全魔力+1。`
  },
  
  // --- Lv 6 ---
  {
  category: "操靈魔法", type: "操靈魔法", req_level: 6, name: "反制偵測 (カウンター・センス)",
  row1_val1: "MP 3", row1_val3: "術者",
  row2_val1: "術者/-", row2_val3: "任意", row2_val5: "1日",
  resistance: "任意", element: "－",
  summary: "可探知被使用的魔法",
  effect: `當有魔法以術者為目標行使時，術者將得知該魔法名稱、效果與行使者位置。承受魔法一次後效果消失。`
  },
  {
  category: "操靈魔法", type: "操靈魔法", req_level: 6, name: "麻痺雲 (スタン・クラウド)",
  row1_val1: "MP 6", row1_val3: "1區域(半徑5m)/15",
  row2_val1: "2(30m)/起點指定", row2_val3: "消滅", row2_val5: "一瞬/30秒(3回合)",
  resistance: "消滅", element: "毒",
  summary: "封住宣言特技與輔助動作",
  effect: `抵抗失敗時於30秒（3輪）內，所有需要宣言的戰鬥特技與輔助動作將無法使用。`
  },
  {
  category: "操靈魔法", type: "操靈魔法", req_level: 6, name: "瑪那吸收 (マナ・アブソーブ)",
  row1_val1: "MP 6", row1_val3: "1區域(半徑5m)/15",
  row2_val1: "2(30m)/起點指定", row2_val3: "消滅", row2_val5: "一瞬/30秒(3回合)",
  resistance: "消滅", element: "－",
  summary: "消費MP 2倍，消耗時回復HP 3點",
  effect: `範圍內消耗MP的魔法/練技消耗變為2倍。消耗2倍MP的角色，HP會立刻恢復3點。`
  },
  {
  category: "操靈魔法", type: "操靈魔法", req_level: 6, name: "操控人偶 (リモート・ドール)",
  row1_val1: "MP 5", row1_val3: "1個人偶",
  row2_val1: "接觸/-", row2_val3: "無", row2_val5: "1小時",
  resistance: "無", element: "－",
  summary: "讓人偶作為分身行動",
  effect: `將視覺與聽覺交給目標人偶並操作其行動。操作期間術者本體無法採取任何行動。`
  },
  
  // --- Lv 7 ---
  {
  category: "操靈魔法", type: "操靈魔法", req_level: 7, name: "Δ»雙重指令 (ダブル・インディケイト)",
  row1_val1: "MP 6", row1_val3: "術者",
  row2_val1: "術者/-", row2_val3: "任意", row2_val5: "10秒(1回合)",
  resistance: "任意", element: "－",
  summary: "同時控制2個魔偶或不死族",
  effect: `術者可同時控制自己製作的2個魔偶或不死族，但兩者只能執行同一個命令。`
  },
  {
  category: "操靈魔法", type: "操靈魔法", req_level: 7, name: "吸血之觸 (ドレイン・タッチ)",
  row1_val1: "MP 7", row1_val3: "1名",
  row2_val1: "接觸/-", row2_val3: "半減", row2_val5: "一瞬",
  resistance: "半減", element: "詛咒",
  summary: "吸收威力10的HP",
  effect: `對目標造成「威力10＋魔力」點魔法傷害，同時術者恢復與適用傷害相同的HP。`
  },
  {
  category: "操靈魔法", type: "操靈魔法", req_level: 7, name: "復活術 (リザレクション)",
  row1_val1: "MP 20", row1_val3: "1名屍體",
  row2_val1: "接觸/-", row2_val3: "任意", row2_val5: "一瞬",
  resistance: "任意", element: "－",
  summary: "復活死者(目標值=死亡天數)",
  effect: `對屍體行使，成功可使死者復活。目標值與死後天數相同，行使需花費1小時。`
  },
  
  // --- Lv 8 ---
  {
  category: "操靈魔法", type: "操靈魔法", req_level: 8, name: "寒冰武器 (アイシクル・ウェポン)",
  row1_val1: "MP 5", row1_val3: "1名",
  row2_val1: "2(30m)/起點指定", row2_val3: "任意", row2_val5: "3分/18回合",
  resistance: "任意", element: "水·冰",
  summary: "賦予武器冰屬性，傷害+3",
  effect: `目標攻擊時武器視為冰屬性魔法武器，物理傷害＋3點。`
  },
  {
  category: "操靈魔法", type: "操靈魔法", req_level: 8, name: "腐蝕雲 (アシッド・クラウド)",
  row1_val1: "MP 10", row1_val3: "1區域(半徑5m)/15",
  row2_val1: "2(30m)/起點指定", row2_val3: "半減", row2_val5: "一瞬",
  resistance: "半減", element: "毒",
  summary: "威力20魔法傷害",
  effect: `將空氣轉換為酸，造成目標「威力20＋魔力」點魔法傷害。`
  },
  {
  category: "操靈魔法", type: "操靈魔法", req_level: 8, name: "幻象術 (イリュージョン)",
  row1_val1: "MP 4", row1_val3: "任意地點",
  row2_val1: "2(30m)/起點指定", row2_val3: "無", row2_val5: "1日",
  resistance: "無", element: "－",
  summary: "製作立體幻覺",
  effect: `製作外觀無法區別的幻覺（限定半徑3m空間內）。無聲音、氣味，無法碰觸。`
  },
  {
  category: "操靈魔法", type: "操靈魔法", req_level: 8, name: "焚燒術 (クリメイション)",
  row1_val1: "MP 8", row1_val3: "1名",
  row2_val1: "1(10m)/起點指定", row2_val3: "半減", row2_val5: "一瞬",
  resistance: "半減", element: "炎",
  summary: "威力20傷害(對不死/魔法/魔動+5)",
  effect: `造成目標「威力20＋魔力」點魔法傷害。若目標為不死生物、魔法生物或魔動機，傷害＋5點。`
  },
  
  // --- Lv 9 ---
  {
  category: "操靈魔法", type: "操靈魔法", req_level: 9, name: "詛咒人偶 (カース・ドール)",
  row1_val1: "MP 6", row1_val3: "1名",
  row2_val1: "2(30m)/起點指定", row2_val3: "半減", row2_val5: "一瞬",
  resistance: "半減", element: "詛咒",
  summary: "以人偶為媒介造成威力30傷害",
  effect: `對人偶進行突刺，造成目標「威力30＋魔力」點魔法傷害。發動體人偶會毀壞。`
  },
  {
  category: "操靈魔法", type: "操靈魔法", req_level: 9, name: "束縛術 (バインド・オペレーション)",
  row1_val1: "MP 8", row1_val3: "1名",
  row2_val1: "2(30m)/起點指定", row2_val3: "短縮", row2_val5: "3分(18回合)",
  resistance: "短縮", element: "－",
  summary: "移動限制為限制移動，判定-2",
  effect: `移動只能選擇「限制移動」，所有行為判定－2。符民或魔法生物抵抗力－2。`
  },
  {
  category: "操靈魔法", type: "操靈魔法", req_level: 9, name: "防護術 II (プロテクションⅡ)",
  row1_val1: "MP 8", row1_val3: "1名",
  row2_val1: "2(30m)/起點指定", row2_val3: "任意", row2_val5: "3分(18回合)",
  resistance: "任意", element: "－",
  summary: "對象受到的傷害-3",
  effect: `目標承受的物理傷害、魔法傷害－3點。無法減少毒、疾病、詛咒屬性傷害。`
  },
  {
  category: "操靈魔法", type: "操靈魔法", req_level: 9, name: "降靈術 (ポゼッション)",
  row1_val1: "MP 7", row1_val3: "術者",
  row2_val1: "術者/-", row2_val3: "任意", row2_val5: "3分(18回合)",
  resistance: "任意", element: "－",
  summary: "讓死者的靈魂附身",
  effect: `將死者靈魂移至術者肉體內，死者可憑自己意志對話或行動。`
  },
  
  // --- Lv 10 ---
  {
  category: "操靈魔法", type: "操靈魔法", req_level: 10, name: "覆蓋指令 (コマンド)",
  row1_val1: "MP 10", row1_val3: "1體全",
  row2_val1: "2(30m)/起點指定", row2_val3: "消滅", row2_val5: "1分(6回合)",
  resistance: "消滅", element: "－",
  summary: "奪取魔偶/不死族的控制權",
  effect: `奪取目標支配權並進行指示。限魔法生物及低智能不死生物。`
  },
  {
  category: "操靈魔法", type: "操靈魔法", req_level: 10, name: "替身人偶 (スケープ・ドール)",
  row1_val1: "MP 8", row1_val3: "1個人偶",
  row2_val1: "接觸/-", row2_val3: "無", row2_val5: "1日",
  resistance: "無", element: "－",
  summary: "以人偶代為承受傷害一次",
  effect: `當術者受到傷害時可由人偶代為承受，適用傷害變為0，之後人偶破壞。`
  },
  {
  category: "操靈魔法", type: "操靈魔法", req_level: 10, name: "身體修復 (フィジカル・ギミック)",
  row1_val1: "MP 12", row1_val3: "1名",
  row2_val1: "接觸/-", row2_val3: "任意", row2_val5: "永久",
  resistance: "任意", element: "－",
  summary: "人工修復肉體殘缺",
  effect: `修補肉體缺損部位。7天習慣期內行為判定-2，之後完全恢復。`
  },
  {
  category: "操靈魔法", type: "操靈魔法", req_level: 10, name: "石化術 (ペトロ・クラウド)",
  row1_val1: "MP 12", row1_val3: "1區域(半徑5m)/15",
  row2_val1: "2(30m)/起點指定", row2_val3: "消滅", row2_val5: "一瞬/1分(6回合)",
  resistance: "消滅", element: "詛咒",
  summary: "目標1分鐘後永遠石化",
  effect: `目標1分鐘後永遠石化。時間內可使用【移除詛咒】或擊倒術者解除。`
  },
  
  // --- Lv 11 ---
  {
  category: "操靈魔法", type: "操靈魔法", req_level: 11, name: "地息治療術 II (アース・ヒールⅡ)",
  row1_val1: "MP 8", row1_val3: "1名",
  row2_val1: "2(30m)/起點指定", row2_val3: "消滅", row2_val5: "一瞬",
  resistance: "消滅", element: "－",
  summary: "威力30回復(全總類有效)",
  effect: `恢復HP「威力30＋魔力」點。對不死生物、魔法生物、魔動機同樣有效。`
  },
  {
  category: "操靈魔法", type: "操靈魔法", req_level: 11, name: "匿蹤術 (スニーク)",
  row1_val1: "MP 18", row1_val3: "1名X",
  row2_val1: "接觸/-", row2_val3: "任意", row2_val5: "3分(18回合)",
  resistance: "任意", element: "－",
  summary: "隱藏於魔法與機械知覺",
  effect: `對於知覺為「魔法」或「機械」的角色無法知覺到目標。進行攻擊或魔法時解除。`
  },
  {
  category: "操靈魔法", type: "操靈魔法", req_level: 11, name: "敏捷術 (ヘイスト)",
  row1_val1: "MP 18", row1_val3: "1名X",
  row2_val1: "2(30m)/起點指定", row2_val3: "任意", row2_val5: "1分(6回合)",
  resistance: "任意", element: "－",
  summary: "移動+12m，回合結束1d>=5再行動",
  effect: `移動距離增加。回合結束擲1d，若為5以上可再進行1次主動作。`
  },
  
  // --- Lv 12 ---
  {
  category: "操靈魔法", type: "操靈魔法", req_level: 12, name: "Δ»移形換影 (チェンジ・ポジション)",
  row1_val1: "MP 12", row1_val3: "1個人偶",
  row2_val1: "2(30m)/起點指定", row2_val3: "無", row2_val5: "一瞬",
  resistance: "無", element: "－",
  summary: "與人偶交換位置",
  effect: `瞬間與目標人偶交換位置，可自動從亂戰區域脫離。每輪限1次。`
  },
  {
  category: "操靈魔法", type: "操靈魔法", req_level: 12, name: "風怒武器 (ソニック・ウェポン)",
  row1_val1: "MP 8", row1_val3: "1名",
  row2_val1: "2(30m)/起點指定", row2_val3: "任意", row2_val5: "1分(6回合)",
  resistance: "任意", element: "風",
  summary: "賦予武器風屬性，C-1，傷害+2",
  effect: `武器視為風屬性魔法武器，暴擊值－1（最低8），物理傷害＋2點。`
  },
  {
  category: "操靈魔法", type: "操靈魔法", req_level: 12, name: "瑪娜限制 (マナ・シール)",
  row1_val1: "MP 16", row1_val3: "1名",
  row2_val1: "1(10m)/起點指定", row2_val3: "消滅", row2_val5: "1分(6回合)",
  resistance: "消滅", element: "－",
  summary: "目標單回合MP消耗上限為10",
  effect: `目標1回合內自己消耗的MP上限為10點（消耗使魔或魔晶石不在此限）。`
  },
  
  // --- Lv 13 ---
  {
  category: "操靈魔法", type: "操靈魔法", req_level: 13, name: "地息恢復術 II (レイジング・アースⅡ)",
  row1_val1: "MP 18", row1_val3: "2~3區域(半徑10m)/空間",
  row2_val1: "1(10m)/起點指定", row2_val3: "必中", row2_val5: "30秒/3回合",
  resistance: "必中", element: "－",
  summary: "回合結束時恢復HP 10點",
  effect: `範圍內角色在自己回合結束時恢復HP「10」點。全種類對象有效。`
  },
  {
  category: "操靈魔法", type: "操靈魔法", req_level: 13, name: "幽體脫離 (レイス・フォーム)",
  row1_val1: "MP 20", row1_val3: "術者",
  row2_val1: "術者/-", row2_val3: "任意", row2_val5: "1日",
  resistance: "任意", element: "－",
  summary: "精神脫離肉體化為縛靈行動",
  effect: `精神變成縛靈行動，保持HP/MP/技能。肉體處於昏迷無防備狀態。`
  },
  
  // --- Lv 14 ---
  {
  category: "操靈魔法", type: "操靈魔法", req_level: 14, name: "分身人偶 (コピー・ドール)",
  row1_val1: "MP 20", row1_val3: "人偶*1",
  row2_val1: "接觸/-", row2_val3: "無", row2_val5: "1年",
  resistance: "無", element: "－",
  summary: "人偶變為分身操作，完全相同",
  effect: `將人偶變為與自己完全相同的分身並操作。分身HP歸0時魔法解除。`
  },
  
  // --- Lv 15 ---
  {
  category: "操靈魔法", type: "操靈魔法", req_level: 15, name: "記憶抽取 (スティール・メモリー)",
  row1_val1: "MP 19", row1_val3: "人體全",
  row2_val1: "接觸/-", row2_val3: "消滅", row2_val5: "永久",
  resistance: "消滅", element: "－",
  summary: "奪取目標特定期間的記憶",
  effect: `奪取目標特定期間的記憶變成自己的。解咒後目標取回記憶。`
  },
  {
  category: "操靈魔法", type: "操靈魔法", req_level: 15, name: "急速甦生術 (クイック・リザレクション)",
  row1_val1: "MP 30", row1_val3: "屍體*1",
  row2_val1: "1(10m)/起點指定", row2_val3: "任意", row2_val5: "一瞬",
  resistance: "任意", element: "－",
  summary: "立使死者復活，汙穢表+10",
  effect: `立使死者復活，汙穢表參照+10。`
  },
  {
  category: "操靈魔法", type: "操靈魔法", req_level: 15, name: "死滅雲 (デス・クラウド)",
  row1_val1: "MP 26", row1_val3: "1區域(半徑6m)/空間",
  row2_val1: "2(30m)/起點指定", row2_val3: "半減", row2_val5: "一瞬",
  resistance: "半減", element: "詛咒",
  summary: "威力60傷害，生死判定-20",
  effect: `造成「威力60＋魔力」點魔法傷害。若抵抗失敗且HP歸0，生死判定受-20懲罰。`
  },
  {
  category: "操靈魔法", type: "操靈魔法", req_level: 15, name: "返魂屍詛咒 (レブナント・カース)",
  row1_val1: "MP 30", row1_val3: "1體全",
  row2_val1: "接觸/-", row2_val3: "消滅", row2_val5: "1日",
  resistance: "消滅", element: "詛咒",
  summary: "目標死亡時化為遵從命令的返魂屍",
  effect: `效果期間目標死亡時獲得5點汙穢並變為返魂屍遵從命令。時間過後完全化為返魂屍無法復活。`
  }
  ];