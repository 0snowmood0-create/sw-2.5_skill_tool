export const warLeaderData = [
  // ------------------------------------------
  // 【鼓咆：習得等級 1 級以上】
  // ------------------------------------------
  {
    category: "軍師", type: "鼓咆", req_level: 1, name: ">>弱點追擊",
    row1_label: "系統與階級", row1_val1: "鼓舞系", row1_val2: "階級 1", row1_val3: "瑕疵への追擊",
    row2_label: "陣氣收支", row2_val1: "消耗：無", row2_val2: "累積：1", row2_val3: "-", row2_val4: "-", row2_val5: "-",
    row3_label: "條件與限制", row3_val1: "指揮範圍內夥伴", row3_target_label: "效果時間", row3_target_val: "10s（1回合）", row3_bonus_label: "續行效果", row3_bonus_val: "次回合可接 2 階",
    summary: "弱點的追加傷害 +1",
    effect: "讓敵人的弱點更加凸顯。在 10s 的期間內對於已看破弱點的敵人，在攻擊弱點時追加傷害 +1。使用這個鼓咆的軍師下一回合可以使用所有系統的 2 階鼓咆。"
  },
  {
    category: "軍師", type: "鼓咆", req_level: 1, name: "神展的架式",
    row1_label: "系統與階級", row1_val1: "鼓舞系", row1_val2: "階級 1", row1_val3: "神展の構え",
    row2_label: "陣氣收支", row2_val1: "消耗：無", row2_val2: "累積：1", row2_val3: "-", row2_val4: "-", row2_val5: "-",
    row3_label: "條件與限制", row3_val1: "指揮範圍內夥伴", row3_target_label: "效果時間", row3_target_val: "10s（1回合）", row3_bonus_label: "續行效果", row3_bonus_val: "次回合可接 2 階",
    summary: "移動 +5，限制移動 +2",
    effect: "跟夥伴連攜讓戰況往有利的方向發展。在 10s 的期間內移動 +5，限制移動 +2。使用這個鼓咆的軍師下一回合可以使用所有系統的 2 階鼓咆。"
  },
  {
    category: "軍師", type: "鼓咆", req_level: 1, name: "怒濤的攻陣I",
    row1_label: "系統與階級", row1_val1: "攻擊系", row1_val2: "階級 1", row1_val3: "怒濤の攻陣I",
    row2_label: "陣氣收支", row2_val1: "消耗：無", row2_val2: "累積：1", row2_val3: "-", row2_val4: "-", row2_val5: "-",
    row3_label: "條件與限制", row3_val1: "指揮範圍內夥伴", row3_target_label: "效果時間", row3_target_val: "10s（1回合）", row3_bonus_label: "適用範圍", row3_bonus_val: "近接／遠距物理",
    summary: "物理傷害 +1",
    effect: "下達能更有效率攻擊的指令。在 10s 的期間內對象的近接攻擊或遠距攻擊時物理傷害 +1。"
  },
  {
    category: "軍師", type: "鼓咆", req_level: 1, name: "怒濤的攻陣II:烈火",
    row1_label: "系統與階級", row1_val1: "攻擊系", row1_val2: "階級 2", row1_val3: "怒濤の攻陣II:烈火",
    row2_label: "陣氣收支", row2_val1: "消耗：無", row2_val2: "累積：1", row2_val3: "-", row2_val4: "-", row2_val5: "-",
    row3_label: "條件與限制", row3_val1: "指揮範圍內夥伴", row3_target_label: "效果時間", row3_target_val: "10s（1回合）", row3_bonus_label: "適用範圍", row3_bonus_val: "近接／射擊物理",
    summary: "物理傷害 +2",
    effect: "採取一氣呵成攻擊敵人的指揮。10s 的期間內對象進行近接攻擊、射擊攻擊時，物理傷害 ＋ 2。"
  },
  {
    category: "軍師", type: "鼓咆", req_level: 1, name: "怒濤的攻陣II:旋風",
    row1_label: "系統與階級", row1_val1: "攻擊系", row1_val2: "階級 2", row1_val3: "怒濤の攻陣II:旋風",
    row2_label: "陣氣收支", row2_val1: "消耗：無", row2_val2: "累積：1", row2_val3: "-", row2_val4: "-", row2_val5: "-",
    row3_label: "條件與限制", row3_val1: "指揮範圍內夥伴", row3_target_label: "效果時間", row3_target_val: "10s（1回合）", row3_bonus_label: "修正項目", row3_bonus_val: "命中力判定",
    summary: "命中力 +1",
    effect: "採取更準確地進行攻擊的指揮。目標的命中力判定獲得 ＋ 1 的加值修正。"
  },
  {
    category: "軍師", type: "鼓咆", req_level: 1, name: "強韌的丈陣I",
    row1_label: "系統與階級", row1_val1: "抵抗系", row1_val2: "階級 1", row1_val3: "強韌なる丈陣I",
    row2_label: "陣氣收支", row2_val1: "消耗：無", row2_val2: "累積：1", row2_val3: "-", row2_val4: "-", row2_val5: "-",
    row3_label: "條件與限制", row3_val1: "指揮範圍內夥伴", row3_target_label: "效果時間", row3_target_val: "判定後失效", row3_bonus_label: "擇一指定", row3_bonus_val: "生命或精神抵抗",
    summary: "生命或精神抵抗力 +1，判定後失效",
    effect: "預測來自於敵人的魔法與特殊能力，並做好防備指揮。生命或精神抵抗力 +1，獲得哪種加值修正，則在使用此鼓咆時由軍師決定。判定後失效。"
  },
  {
    category: "軍師", type: "鼓咆", req_level: 1, name: "強韌的丈陣II",
    row1_label: "系統與階級", row1_val1: "抵抗系", row1_val2: "階級 2", row1_val3: "強韌なる丈陣II",
    row2_label: "陣氣收支", row2_val1: "消耗：無", row2_val2: "累積：1", row2_val3: "-", row2_val4: "-", row2_val5: "-",
    row3_label: "條件與限制", row3_val1: "指揮範圍內夥伴", row3_target_label: "效果時間", row3_target_val: "10s（1回合）", row3_bonus_label: "擇一指定", row3_bonus_val: "生命或精神抵抗",
    summary: "生命或精神抵抗力 +1",
    effect: "使同伴們奮起，提高抵抗力。目標的生命抵抗力或精神抵抗力其中之一獲得 ＋ 1 的加值修正。獲得哪種加值修正，則在使用此鼓咆時由軍師決定。"
  },
  {
    category: "軍師", type: "鼓咆", req_level: 1, name: "流利的俊陣I",
    row1_label: "系統與階級", row1_val1: "迴避系", row1_val2: "階級 1", row1_val3: "流麗なる俊陣I",
    row2_label: "陣氣收支", row2_val1: "消耗：無", row2_val2: "累積：1", row2_val3: "-", row2_val4: "-", row2_val5: "-",
    row3_label: "條件與限制", row3_val1: "指揮範圍內夥伴", row3_target_label: "效果時間", row3_target_val: "判定後失效", row3_bonus_label: "修正項目", row3_bonus_val: "迴避力判定",
    summary: "迴避力 +1，判定後失效",
    effect: "採取優先於閃避的指揮。目標的迴避力判定獲得 ＋ 1 的加值修正，判定後失效。"
  },
  {
    category: "軍師", type: "鼓咆", req_level: 1, name: "流利的俊陣II",
    row1_label: "系統與階級", row1_val1: "迴避系", row1_val2: "階級 2", row1_val3: "流麗なる俊陣II",
    row2_label: "陣氣收支", row2_val1: "消耗：無", row2_val2: "累積：1", row2_val3: "-", row2_val4: "-", row2_val5: "-",
    row3_label: "條件與限制", row3_val1: "指揮範圍內夥伴", row3_target_label: "效果時間", row3_target_val: "10s（1回合）", row3_bonus_label: "修正項目", row3_bonus_val: "迴避力判定",
    summary: "迴避力 +1",
    effect: "看穿敵人的動作，讓我方能更加輕易地迴避。目標的迴避力判定獲得 ＋ 1 的加值修正。"
  },
  {
    category: "軍師", type: "鼓咆", req_level: 1, name: "鐵壁防陣I",
    row1_label: "系統與階級", row1_val1: "防禦系", row1_val2: "階級 1", row1_val3: "鐵壁の防陣I",
    row2_label: "陣氣收支", row2_val1: "消耗：無", row2_val2: "累積：1", row2_val3: "-", row2_val4: "-", row2_val5: "-",
    row3_label: "條件與限制", row3_val1: "指揮範圍內夥伴", row3_target_label: "效果時間", row3_target_val: "10s（1回合）", row3_bonus_label: "修正項目", row3_bonus_val: "防護點",
    summary: "防護點 +1",
    effect: "採取固守防禦的指揮。目標的防護點+1。"
  },
  {
    category: "軍師", type: "鼓咆", req_level: 1, name: "鐵壁防陣II:鐵鎧",
    row1_label: "系統與階級", row1_val1: "防禦系", row1_val2: "階級 2", row1_val3: "鐵壁の防陣II:鐵鎧",
    row2_label: "陣氣收支", row2_val1: "消耗：無", row2_val2: "累積：1", row2_val3: "-", row2_val4: "-", row2_val5: "-",
    row3_label: "條件與限制", row3_val1: "指揮範圍內夥伴", row3_target_label: "效果時間", row3_target_val: "10s（1回合）", row3_bonus_label: "修正項目", row3_bonus_val: "防護点",
    summary: "防護點 +2",
    effect: "採取鞏固守護，撐住攻擊的指揮。目標的防護點 ＋ 2。"
  },
  {
    category: "軍師", type: "鼓咆", req_level: 1, name: "鐵壁防陣II:堅體",
    row1_label: "系統與階級", row1_val1: "防禦系", row1_val2: "階級 2", row1_val3: "鐵壁の防陣II:堅體",
    row2_label: "陣氣收支", row2_val1: "消耗：無", row2_val2: "累積：1", row2_val3: "-", row2_val4: "-", row2_val5: "-",
    row3_label: "條件與限制", row3_val1: "指揮範圍內夥伴", row3_target_label: "效果時間", row3_target_val: "10s（1回合）", row3_bonus_label: "排除屬性", row3_bonus_val: "毒／疾病／詛咒",
    summary: "物理或魔法傷害 -1",
    effect: "採取戒備各種攻擊，保護自身的指揮。目標受到的物理傷害或魔法傷害 － 1點。但是無法減少來自「毒」「疾病」「詛咒」等持有任一屬性的攻擊。"
  },

  // ------------------------------------------
  // 【鼓咆：習得等級 5 級以上】
  // ------------------------------------------
  {
    category: "軍師", type: "鼓咆", req_level: 5, name: "勇壯的軍歌",
    row1_label: "系統與階級", row1_val1: "鼓舞系", row1_val2: "階級 1", row1_val3: "勇壯なる軍歌",
    row2_label: "陣氣收支", row2_val1: "消耗：無", row2_val2: "累積：1", row2_val3: "-", row2_val4: "-", row2_val5: "對軍師自身有效",
    row3_label: "條件與限制", row3_val1: "併用咒歌", row3_target_label: "效果時間", row3_target_val: "10s（1回合）", row3_bonus_label: "續行效果", row3_bonus_val: "次回合可接 2 階",
    summary: "限制咒歌的效果目標",
    effect: "此鼓咆屬於對軍師自身也有效果。在咒歌中追加歌詞，讓效果對象得以指定。軍師使用此鼓咆時可以指定讓咒歌目標設定為敵方或我方。效果期間咒歌的效果將會被限制為軍師所指令的對象。使用這個鼓咆的軍師下一回合可以使用所有系統的2階鼓咆。"
  },
  {
    category: "軍師", type: "鼓咆", req_level: 5, name: "復甦的奧秘",
    row1_label: "系統與階級", row1_val1: "鼓舞系", row1_val2: "階級 2", row1_val3: "蘇る秘奧",
    row2_label: "陣氣收支", row2_val1: "消耗：無", row2_val2: "累積：1", row2_val3: "-", row2_val4: "-", row2_val5: "-",
    row3_label: "條件與限制", row3_val1: "戰鬥中魔物 1 種", row3_target_label: "效果時間", row3_target_val: "一瞬", row3_bonus_label: "續行效果", row3_bonus_val: "次回合可接 2 階",
    summary: "再次使用魔物知識判定",
    effect: "將魔物的特徵告知同伴，喚醒同伴對魔物知識的記憶。軍師使用此鼓咆時指定戰鬥中一種類的魔物。此鼓咆發揮效果時立即對軍師指定的魔物進行魔物知識判定。使用這個鼓咆的軍師下一回合可以使用所有系統的2階鼓咆。"
  },
  {
    category: "軍師", type: "鼓咆", req_level: 5, name: "怒濤的攻陣Ⅲ：轟炎",
    row1_label: "系統與階級", row1_val1: "攻擊系", row1_val2: "階級 3", row1_val3: "怒濤の攻陣Ⅲ：轟炎",
    row2_label: "陣氣收支", row2_val1: "消耗：無", row2_val2: "累積：1", row2_val3: "-", row2_val4: "-", row2_val5: "-",
    row3_label: "條件與限制", row3_val1: "指揮範圍內夥伴", row3_target_label: "效果時間", row3_target_val: "10s（1回合）", row3_bonus_label: "適用範圍", row3_bonus_val: "近接／遠隔物理",
    summary: "物理傷害 ＋ 3",
    effect: "採取更進一步執行攻擊的指揮。目標進行近接攻擊、遠隔攻擊時，物理傷害 ＋ 3。"
  },
  {
    category: "軍師", type: "鼓咆", req_level: 5, name: "怒濤的攻陣Ⅲ：旋刃",
    row1_label: "系統與階級", row1_val1: "攻擊系", row1_val2: "階級 3", row1_val3: "怒濤の攻陣Ⅲ：旋刃",
    row2_label: "陣氣收支", row2_val1: "消耗：無", row2_val2: "累積：1", row2_val3: "-", row2_val4: "-", row2_val5: "-",
    row3_label: "條件與限制", row3_val1: "指揮範圍內夥伴", row3_target_label: "效果時間", row3_target_val: "10s（1回合）", row3_bonus_label: "雙重加成", row3_bonus_val: "傷害+1／命中+1",
    summary: "物理傷害 +1、命中力 +1",
    effect: "採取更準確且確實地造成傷害的指揮。目標的命中力判定獲得+1 的加值修正，進行近接攻擊、遠隔攻擊時，物理傷害+1。"
  },
  {
    category: "軍師", type: "鼓咆", req_level: 5, name: "怒濤的攻陣Ⅳ：爆焰",
    row1_label: "系統與階級", row1_val1: "攻擊系", row1_val2: "階級 4", row1_val3: "怒濤の攻陣Ⅳ：爆焰",
    row2_label: "陣氣收支", row2_val1: "消耗：無", row2_val2: "累積：2", row2_val3: "-", row2_val4: "-", row2_val5: "-",
    row3_label: "條件與限制", row3_val1: "指揮範圍內夥伴", row3_target_label: "效果時間", row3_target_val: "10s（1回合）", row3_bonus_label: "適用範圍", row3_bonus_val: "近接／射擊物理",
    summary: "物理傷害 ＋ 3",
    effect: "一邊採取強行打出傷害的指揮一邊為下一步布局。目標進行近接攻擊、射擊攻擊時，物理傷害 ＋ 3。"
  },
  {
    category: "軍師", type: "鼓咆", req_level: 5, name: "怒濤的攻陣Ⅳ：輝斬",
    row1_label: "系統與階級", row1_val1: "攻擊系", row1_val2: "階級 4", row1_val3: "怒濤の攻陣Ⅳ：輝斬",
    row2_label: "陣氣收支", row2_val1: "消耗：無", row2_val2: "累積：2", row2_val3: "-", row2_val4: "-", row2_val5: "-",
    row3_label: "條件與限制", row3_val1: "指揮範圍內夥伴", row3_target_label: "效果時間", row3_target_val: "10s（1回合）", row3_bonus_label: "雙重加成", row3_bonus_val: "傷害+1／命中+1",
    summary: "物理傷害 +1、命中力 +1",
    effect: "一邊採取更準確且確實地造成傷害的指揮一邊為下一步布局。目標的命中力判定獲得+1 的加值修正，進行近接攻擊、遠隔攻擊時，物理傷害+1。"
  },
  {
    category: "軍師", type: "鼓咆", req_level: 5, name: "流利的俊陣III",
    row1_label: "系統與階級", row1_val1: "迴避系", row1_val2: "階級 3", row1_val3: "流麗なる俊陣III",
    row2_label: "陣氣收支", row2_val1: "消耗：無", row2_val2: "累積：1", row2_val3: "-", row2_val4: "-", row2_val5: "-",
    row3_label: "條件與限制", row3_val1: "指揮範圍內夥伴", row3_target_label: "效果時間", row3_target_val: "10s（1回合）", row3_bonus_label: "修正項目", row3_bonus_val: "迴避力判定",
    summary: "迴避力 +2",
    effect: "預測敵人的攻擊，以確保夥伴的安全的方式指揮。目標的迴避力判定獲得+2 的加值修正。"
  },
  {
    category: "軍師", type: "鼓咆", req_level: 5, name: "流利的俊陣Ⅳ",
    row1_label: "系統與階級", row1_val1: "迴避系", row1_val2: "階級 4", row1_val3: "流麗なる俊陣Ⅳ",
    row2_label: "陣氣收支", row2_val1: "消耗：無", row2_val2: "累積：2", row2_val3: "-", row2_val4: "-", row2_val5: "-",
    row3_label: "條件與限制", row3_val1: "指揮範圍內夥伴", row3_target_label: "效果時間", row3_target_val: "10s（1回合）", row3_bonus_label: "修正項目", row3_bonus_val: "迴避力判定",
    summary: "迴避力 +2",
    effect: "一邊預測敵人的攻擊，以確保夥伴的安全的方式指揮一邊為下一步布局。目標的迴避力判定獲得+2 的加值修正。"
  },
  {
    category: "軍師", type: "鼓咆", req_level: 5, name: "鐵壁防陣III:鋼鎧",
    row1_label: "系統與階級", row1_val1: "防禦系", row1_val2: "階級 3", row1_val3: "鐵壁の防陣III:鋼鎧",
    row2_label: "陣氣收支", row2_val1: "消耗：無", row2_val2: "累積：1", row2_val3: "-", row2_val4: "-", row2_val5: "-",
    row3_label: "條件與限制", row3_val1: "指揮範圍內夥伴", row3_target_label: "效果時間", row3_target_val: "10s（1回合）", row3_bonus_label: "修正項目", row3_bonus_val: "防護點",
    summary: "防護點 +3",
    effect: "採取更加鞏固守勢的指揮。目標的防護點 ＋ 3。"
  },
  {
    category: "軍師", type: "鼓咆", req_level: 5, name: "鐵壁防陣III:甲盾",
    row1_label: "系統與階級", row1_val1: "防禦系", row1_val2: "階級 3", row1_val3: "鐵壁の防陣III:甲盾",
    row2_label: "陣氣收支", row2_val1: "消耗：無", row2_val2: "累積：1", row2_val3: "-", row2_val4: "-", row2_val5: "-",
    row3_label: "條件與限制", row3_val1: "指揮範圍內夥伴", row3_target_label: "效果時間", row3_target_val: "10s（1回合）", row3_bonus_label: "排除屬性", row3_bonus_val: "毒／疾病／詛咒",
    summary: "物理和魔法傷害 -1",
    effect: "採取戒備各種攻擊，保護自身的指揮。目標受到的物理傷害、魔法傷害 － 1點。但是無法減少來自「毒」「疾病」「詛咒」等持有任一屬性的攻擊。"
  },
  {
    category: "軍師", type: "鼓咆", req_level: 5, name: "鐵壁防陣Ⅳ:城鎧",
    row1_label: "系統與階級", row1_val1: "防禦系", row1_val2: "階級 4", row1_val3: "鐵壁の防陣Ⅳ:城鎧",
    row2_label: "陣氣收支", row2_val1: "消耗：無", row2_val2: "累積：2", row2_val3: "-", row2_val4: "-", row2_val5: "-",
    row3_label: "條件與限制", row3_val1: "指揮範圍內夥伴", row3_target_label: "效果時間", row3_target_val: "10s（1回合）", row3_bonus_label: "修正項目", row3_bonus_val: "防護點",
    summary: "防護點 +3",
    effect: "一邊採取更加鞏固守勢的指揮一邊為下一步布局。目標的防護點 ＋ 3。"
  },
  {
    category: "軍師", type: "鼓咆", req_level: 5, name: "鐵壁防陣Ⅳ:鏡盾",
    row1_label: "系統與階級", row1_val1: "防禦系", row1_val2: "階級 4", row1_val3: "鐵壁の防陣Ⅳ:鏡盾",
    row2_label: "陣氣收支", row2_val1: "消耗：無", row2_val2: "累積：2", row2_val3: "-", row2_val4: "-", row2_val5: "-",
    row3_label: "條件與限制", row3_val1: "指揮範圍內夥伴", row3_target_label: "效果時間", row3_target_val: "10s（1回合）", row3_bonus_label: "排除屬性", row3_bonus_val: "毒／疾病／詛咒",
    summary: "物理和魔法傷害 -1",
    effect: "一邊採取戒備各種攻擊，保護自身的指揮一邊為下一步布局。目標受到的物理傷害、魔法傷害-1點。但是無法減少來自「毒」「疾病」「詛咒」等持有任一屬性的攻擊。"
  },
  {
    category: "軍師", type: "鼓咆", req_level: 5, name: "強韌的丈陣III",
    row1_label: "系統與階級", row1_val1: "抵抗系", row1_val2: "階級 3", row1_val3: "強韌なる丈陣III",
    row2_label: "陣氣收支", row2_val1: "消耗：無", row2_val2: "累積：1", row2_val3: "-", row2_val4: "-", row2_val5: "-",
    row3_label: "條件與限制", row3_val1: "指揮範圍內夥伴", row3_target_label: "效果時間", row3_target_val: "10s（1回合）", row3_bonus_label: "擇一指定", row3_bonus_val: "生命或精神抵抗",
    summary: "生命或精神抵抗力 +2",
    effect: "使同伴們奮起，提高抵抗力。目標的生命抵抗力或精神抵抗力其中之一獲得+2的加值修正。獲得哪種加值修正，則在使用此鼓咆時由軍師決定。"
  },
  {
    category: "軍師", type: "鼓咆", req_level: 5, name: "強韌的丈陣Ⅳ",
    row1_label: "系統與階級", row1_val1: "抵抗系", row1_val2: "階級 4", row1_val3: "強韌なる丈陣Ⅳ",
    row2_label: "陣氣收支", row2_val1: "消耗：無", row2_val2: "累積：2", row2_val3: "-", row2_val4: "-", row2_val5: "-",
    row3_label: "條件與限制", row3_val1: "指揮範圍內夥伴", row3_target_label: "效果時間", row3_target_val: "10s（1回合）", row3_bonus_label: "擇一指定", row3_bonus_val: "生命或精神抵抗",
    summary: "生命或精神抵抗力 +2",
    effect: "使同伴們奮起，提高抵抗力並為下一步布局。目標的生命抵抗力或精神抵抗力其中之一獲得+2的加值修正。獲得哪種加值修正，則在使用此鼓咆時由軍師決定。"
  },

  // ------------------------------------------
  // 【鼓咆：習得等級 10 級以上】
  // ------------------------------------------
  {
    category: "軍師", type: "鼓咆", req_level: 10, name: "盛大的挑撥",
    row1_label: "系統與階級", row1_val1: "鼓舞系", row1_val2: "階級 2", row1_val3: "大いなる挑発",
    row2_label: "陣氣收支", row2_val1: "消耗：1", row2_val2: "累積：0", row2_val3: "-", row2_val4: "-", row2_val5: "軍師反受減值",
    row3_label: "條件與限制", row3_val1: "指揮範圍內夥伴", row3_target_label: "效果時間", row3_target_val: "10s（1回合）", row3_bonus_label: "軍師減值", row3_bonus_val: "迴避/抵抗 -3",
    summary: "隊友迴避與抵抗 +1，軍師自身迴避與抵抗 -3",
    effect: "大聲地彰顯自己的存在，以乍看之下毫無防備的架式集中敵人的注意。目標的迴避力判定與生命·精神抵抗力判定獲得+1的加值修正。使用此鼓咆的軍師，會例外地使迴避力判定受到-3、生命·精神抵抗力判定受到-3的減值修正。使用這個鼓咆的軍師下一回合可以使用所有系統的3階鼓咆。"
  },
  {
    category: "軍師", type: "鼓咆", req_level: 10, name: "傷勢診斷",
    row1_label: "系統與階級", row1_val1: "鼓舞系", row1_val2: "階級 2", row1_val3: "傷痍の見立て",
    row2_label: "陣氣收支", row2_val1: "消耗：1", row2_val2: "累積：0", row2_val3: "-", row2_val4: "-", row2_val5: "-",
    row3_label: "條件與限制", row3_val1: "指揮範圍內夥伴", row3_target_label: "效果時間", row3_target_val: "10s（1回合）", row3_bonus_label: "觸發條件", row3_bonus_val: "HP 回復≥1 時",
    summary: "HP 的回復量 +5",
    effect: "正確的把握夥伴的傷勢，做出明確的治療指示。效果期間內對象的HP回復1以上的話追加5點回復。使用這個鼓咆的軍師下一回合可以使用所有系統的3階鼓咆。"
  },
  {
    category: "軍師", type: "鼓咆", req_level: 10, name: "怒濤的攻陣V：獄火",
    row1_label: "系統與階級", row1_val1: "攻擊系", row1_val2: "階級 5", row1_val3: "怒濤の攻陣V：獄火",
    row2_label: "陣氣收支", row2_val1: "消耗：5", row2_val2: "累積：0", row2_val3: "-", row2_val4: "-", row2_val5: "-",
    row3_label: "條件與限制", row3_val1: "指揮範圍內夥伴", row3_target_label: "效果時間", row3_target_val: "10s（1回合）", row3_bonus_label: "適用範圍", row3_bonus_val: "近接／射擊物理",
    summary: "物理傷害 +6",
    effect: "下令集結總戰力進行攻擊，一口氣殲滅敵人。目標進行近接攻擊、射擊攻擊時，物理傷害+6。"
  },
  {
    category: "軍師", type: "鼓咆", req_level: 10, name: "怒濤的攻陣V：颱風",
    row1_label: "系統與階級", row1_val1: "攻擊系", row1_val2: "階級 5", row1_val3: "怒濤の攻陣V：颱風",
    row2_label: "陣氣收支", row2_val1: "消耗：5", row2_val2: "累積：0", row2_val3: "-", row2_val4: "-", row2_val5: "-",
    row3_label: "條件與限制", row3_val1: "指揮範圍內夥伴", row3_target_label: "效果時間", row3_target_val: "10s（1回合）", row3_bonus_label: "雙重加成", row3_bonus_val: "命中+2／傷害+2",
    summary: "命中 +2、物理傷害 +2",
    effect: "採取能確實地給予致命一擊，行動銳利的指揮。目標的命中力判定獲得+2 的加值修正，進行近接攻擊、射擊攻擊時，物理傷害+2。"
  },
  {
    category: "軍師", type: "鼓咆", req_level: 10, name: "流利的俊陣V",
    row1_label: "系統與階級", row1_val1: "迴避系", row1_val2: "階級 5", row1_val3: "流麗なる俊陣V",
    row2_label: "陣氣收支", row2_val1: "消耗：5", row2_val2: "累積：0", row2_val3: "-", row2_val4: "-", row2_val5: "-",
    row3_label: "條件與限制", row3_val1: "指揮範圍內夥伴", row3_target_label: "效果時間", row3_target_val: "10s（1回合）", row3_bonus_label: "修正項目", row3_bonus_val: "迴避力判定",
    summary: "迴避力 +4",
    effect: "預測敵人的攻擊，以確保夥伴的安全的方式指揮。目標的迴避力判定獲得+4的加值修正。"
  },
  {
    category: "軍師", type: "鼓咆", req_level: 10, name: "鐵壁防陣V:鋼城",
    row1_label: "系統與階級", row1_val1: "防禦系", row1_val2: "階級 5", row1_val3: "鐵壁の防陣V:鋼城",
    row2_label: "陣氣收支", row2_val1: "消耗：5", row2_val2: "累積：0", row2_val3: "-", row2_val4: "-", row2_val5: "-",
    row3_label: "條件與限制", row3_val1: "指揮範圍內夥伴", row3_target_label: "效果時間", row3_target_val: "10s（1回合）", row3_bonus_label: "修正項目", row3_bonus_val: "防護點",
    summary: "防護點 +7",
    effect: "將防禦提升到極限，減輕敵人的攻擊。目標的防護點+7。"
  },
  {
    category: "軍師", type: "鼓咆", req_level: 10, name: "鐵壁防陣V:巨壁",
    row1_label: "系統與階級", row1_val1: "防禦系", row1_val2: "階級 5", row1_val3: "鐵壁の防陣V:巨壁",
    row2_label: "陣氣收支", row2_val1: "消耗：5", row2_val2: "累積：0", row2_val3: "-", row2_val4: "-", row2_val5: "-",
    row3_label: "條件與限制", row3_val1: "指揮範圍內夥伴", row3_target_label: "效果時間", row3_target_val: "10s（1回合）", row3_bonus_label: "減傷項目", row3_bonus_val: "物理與魔法傷害",
    summary: "物理和魔法傷害 -3",
    effect: "採取戒備各種攻擊，保護自身的指揮。目標的物理和魔法傷害-3。"
  },
  {
    category: "軍師", type: "鼓咆", req_level: 10, name: "強韌的丈陣V:激生",
    row1_label: "系統與階級", row1_val1: "抵抗系", row1_val2: "階級 5", row1_val3: "強韌なる丈陣V:激生",
    row2_label: "陣氣收支", row2_val1: "消耗：5", row2_val2: "累積：0", row2_val3: "-", row2_val4: "-", row2_val5: "-",
    row3_label: "條件與限制", row3_val1: "指揮範圍內任意目標", row3_target_label: "效果時間", row3_target_val: "一瞬／10s", row3_bonus_label: "特殊效果", row3_bonus_val: "同【甦醒術】效果",
    summary: "發揮與【甦醒術】相同的效果，或生命與精神抵抗力 +2",
    effect: "對倒下，昏迷的人，以注入氣勢的巨大聲音將其喚醒。對範圍內所有任意目標，給予與【甦醒術】相同的效果。如果對象不適用於【甦醒術】的話生命抵抗力與精神抵抗力獲得+2。"
  },
  {
    category: "軍師", type: "鼓咆", req_level: 10, name: "強韌的丈陣V:魔泉",
    row1_label: "系統與階級", row1_val1: "抵抗系", row1_val2: "階級 5", row1_val3: "強韌なる丈陣V:魔泉",
    row2_label: "陣氣收支", row2_val1: "消耗：5", row2_val2: "累積：0", row2_val3: "-", row2_val4: "-", row2_val5: "精神效果",
    row3_label: "條件與限制", row3_val1: "指揮範圍內任意目標", row3_target_label: "效果時間", row3_target_val: "10s（1回合）", row3_bonus_label: "重複限制", row3_bonus_val: "可與其他節魔效果重複",
    summary: "消耗 MP 減少 5 點（最少 1）",
    effect: "以宛如唱歌般的美聲穩定心靈，使其能以較少的瑪那來發揮效果。範圍內所有任意目標，消耗MP 減 少 5 點（最 少 1）。此 效 果，能 與 其 他 減 少MP 的效果重複。"
  },

  // ------------------------------------------
  // 【陣律 (Tactics)】
  // ------------------------------------------
  {
    category: "軍師", type: "陣律", req_level: 1, name: "軍師的智慧",
    row1_label: "類別與前提", row1_val1: "陣律", row1_val2: "無前提", row1_val3: "軍師の知略",
    row2_label: "陣氣收支", row2_val1: "消耗：0", row2_val2: "累積：0", row2_val3: "-", row2_val4: "-", row2_val5: "-",
    row3_label: "發動條件", row3_val1: "先制判定前", row3_target_label: "對象", row3_target_val: "軍師本人", row3_bonus_label: "基準值", row3_bonus_val: "軍師+智力加值+1",
    summary: "先制判定時使用 {軍師技能 + 智力加值 + 1} 進行",
    effect: "透過智略從敵人身上搶奪先機。此陣律必須在先制判定前使用。目標以「軍師技能 + 智力加值 + 1」為基準值進行先制判定。此效果例外地只對軍師本人有效。"
  },
  {
    category: "軍師", type: "陣律", req_level: 1, name: "慮外烈擊 I",
    row1_label: "類別與前提", row1_val1: "陣律", row1_val2: "無前提", row1_val3: "慮外なる烈擊 I",
    row2_label: "陣氣收支", row2_val1: "消耗：3", row2_val2: "累積：0", row2_val3: "-", row2_val4: "-", row2_val5: "-",
    row3_label: "發動條件", row3_val1: "近接／遠隔攻擊命中時", row3_target_label: "對象", row3_target_val: "軍師本人", row3_bonus_label: "效果時間", row3_bonus_val: "一瞬",
    summary: "消耗 3 點陣氣，使自身攻擊物理傷害 +4",
    effect: "將積蓄的陣氣轉化為突襲的威力。近戰或遠隔攻擊命中時宣告使用，消耗 3 點陣氣，使該次攻擊的物理傷害 +4。"
  },
  {
    category: "軍師", type: "陣律", req_level: 5, name: "慮外烈擊 II",
    row1_label: "類別與前提", row1_val1: "陣律", row1_val2: "慮外烈擊 I", row1_val3: "慮外なる烈擊 II",
    row2_label: "陣氣收支", row2_val1: "消耗：5", row2_val2: "累積：0", row2_val3: "-", row2_val4: "-", row2_val5: "-",
    row3_label: "發動條件", row3_val1: "近接／遠隔攻擊命中時", row3_target_label: "對象", row3_target_val: "軍師本人", row3_bonus_label: "效果時間", row3_bonus_val: "一瞬",
    summary: "消耗 5 點陣氣，使自身攻擊物理傷害 +8",
    effect: "發揮超乎想像的強大破壞力。近戰或遠隔攻擊命中時宣告使用，消耗 5 點陣氣，使該次攻擊的物理傷害 +8。"
  },
  {
    category: "軍師", type: "陣律", req_level: 1, name: "掃討勝鬨",
    row1_label: "類別與前提", row1_val1: "陣律", row1_val2: "無前提", row1_val3: "掃討の勝鬨",
    row2_label: "陣氣收支", row2_val1: "消耗：0", row2_val2: "累積：1", row2_val3: "-", row2_val4: "-", row2_val5: "-",
    row3_label: "發動條件", row3_val1: "主動作擊敗敵人時", row3_target_label: "對象", row3_target_val: "軍師本人", row3_bonus_label: "效果時間", row3_bonus_val: "一瞬",
    summary: "擊敗敵人時獲得 1 點陣氣",
    effect: "藉由擊退強敵振奮自身士氣。軍師在主動作將 enemy 擊至戰鬥不能時發動，立即獲得 1 點陣氣。"
  },
  {
    category: "軍師", type: "陣律", req_level: 5, name: "怒濤之相",
    row1_label: "類別與前提", row1_val1: "陣律", row1_val2: "無前提", row1_val3: "怒濤の相",
    row2_label: "陣氣收支", row2_val1: "消耗：2", row2_val2: "累積：0", row2_val3: "-", row2_val4: "-", row2_val5: "-",
    row3_label: "發動條件", row3_val1: "宣告鼓咆時", row3_target_label: "對象", row3_target_val: "軍師本人", row3_bonus_label: "效果時間", row3_bonus_val: "當回合鼓咆",
    summary: "消耗 2 點陣氣，使當回合鼓咆階級視同 +1",
    effect: "在關鍵時刻爆發指揮力。消耗 2 點陣氣發動，使當回合使用的鼓咆階級在計算效果與繼承時視為 +1 階。"
  },
  {
    category: "軍師", type: "陣律", req_level: 5, name: "閃電動徹",
    row1_label: "類別與前提", row1_val1: "陣律", row1_val2: "無前提", row1_val3: "閃電動徹",
    row2_label: "陣氣收支", row2_val1: "消耗：4", row2_val2: "累積：0", row2_val3: "-", row2_val4: "-", row2_val5: "-",
    row3_label: "發動條件", row3_val1: "回合開始時", row3_target_label: "對象", row3_target_val: "軍師本人", row3_bonus_label: "效果時間", row3_bonus_val: "當回合",
    summary: "消耗 4 點陣氣，本回合可額外宣告第二次鼓咆",
    effect: "以閃電般迅速的決斷發出二次指揮。消耗 4 點陣氣，使軍師在當向前回合可以額外進行第二次鼓咆宣告。"
  }
];