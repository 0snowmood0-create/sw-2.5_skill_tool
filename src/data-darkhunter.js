// ==========================================
// 暗獵者 (Dark Hunter) 操氣技能資料模組
// ==========================================
export const darkHunterSkillsData = [
  // --- Lv 1 ---
  {
    category: "操氣", type: "操氣", req_level: 1, name: ">> 氣集中 (気集中)",
    cost: "HP 1d", target: "自身",
    range: "自身/-", resistance: "任意", duration: "30s(3回合)",
    summary: "投擲命中力+1 (魔神/不死族+2)",
    effect: "效果期間內闇狩自身所進行的所有投擲攻擊命中力判定+1，攻擊目標分類為魔神或不死族的話投擲攻擊命中力判定再+1 (合計+2)。"
  },
  {
    category: "操氣", type: "操氣", req_level: 1, name: "△ 氣操法 (気操法)",
    cost: "HP 2d(6)", target: "1體",
    range: "特殊/射擊", resistance: "消滅", duration: "一瞬",
    summary: "以理力進行投擲攻擊",
    effect: "利用「黑暗獵人」技能和精神力進行投擲攻擊。無法受到戰鬥特技《雙手使用》《投擲》影響。武器需為「用法：1H投擲」，以精神力代替力量計算需求力量限制。命中率與附加傷害由理力計算。無需動作，直接由精神力操控投擲，雙手被綁不干擾。僅能投擲自己接觸到或隨身攜帶之物品。"
  },
  {
    category: "操氣", type: "操氣", req_level: 1, name: "△ >> 氣防陣 (気防陣)",
    cost: "HP 1d", target: "1體",
    range: "1(10m)/起點指定", resistance: "任意", duration: "30s(3回合)",
    summary: "受到的傷害-2 (魔神/不死族-3)",
    effect: "效果時間內，對象受到的所有物理傷害與魔法傷害-2。如果傷害來源是魔神或不死族則傷害-3。"
  },
  {
    category: "操氣", type: "操氣", req_level: 1, name: "○ 剛力彈 (剛力弾)",
    cost: "無", target: "自身",
    range: "自身/-", resistance: "無", duration: "永續",
    summary: "投擲物理傷害+1~+3 (魔神/不死族+2~+4)",
    effect: "投擲攻擊物理傷害+1（魔神/不死族額外+1，總計+2）。達5級時傷害量提升至+2（魔神/不死族總計+3）；達10級時提升至+3（魔神/不死族總計+4）。"
  },
  {
    category: "操氣", type: "操氣", req_level: 1, name: ">> 屬性付・轟 (属性付・轟)",
    cost: "HP 1d", target: "1體",
    range: "2(30m)/起點指定", resistance: "任意", duration: "30s(3回合)",
    summary: "武器攻擊附帶衝擊、土與火屬性",
    effect: "當目標進行武器攻擊時，該次攻擊所使用的武器將視為附帶衝擊屬性、土屬性與火屬性的魔法武器。"
  },
  {
    category: "操氣", type: "操氣", req_level: 1, name: ">> 屬性付・裂 (属性付・裂)",
    cost: "HP 1d", target: "1體",
    range: "2(30m)/起點指定", resistance: "任意", duration: "30s(3回合)",
    summary: "武器攻擊附帶斷空、水冰與風屬性",
    effect: "當目標進行武器攻擊時，該次攻擊所使用的武器將視為附帶斷空、水冰與風屬性的魔法武器。"
  },
  {
    category: "操氣", type: "操氣", req_level: 1, name: "○ 大亂獲 (大乱獲)",
    cost: "無", target: "自身",
    range: "自身/-", resistance: "無", duration: "永續",
    summary: "售價100G/1000G/10000G以下之自動戰利品1件改為1d個",
    effect: "從魔物獲得戰利品時，若售價「不超過100G」且屬「自動獲得」，其中一件數量變為「1d個」。達5級時條件提升至「不超過1,000G」；達10級時提升至「不超過10,000G」。不適用於BOSS級、劇本特殊設定、非自動獲得或特殊工具獲得之戰利品。"
  },
  {
    category: "操氣", type: "操氣", req_level: 1, name: ">> 念絲還 (念糸還)",
    cost: "HP 2", target: "自身",
    range: "自身/-", resistance: "任意", duration: "10s(1回合)",
    summary: "將投擲武器即刻收回手中",
    effect: "在效果期間內，闇狩投擲的所有武器，無論命中與否均會即刻返回手中並維持原裝備狀態。若武器本身具有特殊消耗/遺留效果，則優先遵循原規則。"
  },
  {
    category: "操氣", type: "操氣", req_level: 1, name: ">>念縛術 I (念縛術I)",
    cost: "HP 1d", target: "1體",
    range: "接觸/-", resistance: "必中", duration: "10s(1回合)",
    summary: "迴避力-1",
    effect: "以氣之力束縛目標行動。在效果持續期間內，目標進行迴避力判定時受到-1懲罰。與【念縛術II/III】為同名非重複效果，無法疊加（以最後施展者為準）。"
  },
  {
    category: "操氣", type: "操氣", req_level: 1, name: "○ 魔觀察 (魔観察)",
    cost: "無", target: "自身",
    range: "自身/-", resistance: "無", duration: "永續",
    summary: "魔物知識判定擴展至蠻族與不死族，5級弱點值-4，10級弱點效果倍增",
    effect: "魔物知識判定擴展至「魔神、蠻族、不死族」。5級以上時，對象為「魔神」則弱點值比原本少4點（最低保留至知名度值）。10級以上時，魔物知識判定成功後弱點值效果倍增（不與《弱點看破》疊加）。"
  },
  {
    category: "操氣", type: "操氣", req_level: 1, name: "△ >> 魔探法 (魔探法)",
    cost: "HP 1d", target: "自身",
    range: "自身/-", resistance: "任意", duration: "10分(60回合)",
    summary: "技巧/運動/觀察/知識判定+1 (魔域內常時有效)",
    effect: "進行技巧、運動、觀察、知識類別判定時獲得+1加成，僅作用於效果時間內發生的首次判定後解除。若身處奈落魔域內，則改為常時有效且無消耗。"
  },

  // --- Lv 5 ---
  {
    category: "操氣", type: "操氣", req_level: 5, name: "○ 遠操法 (遠操法)",
    cost: "無", target: "自身",
    range: "自身/-", resistance: "無", duration: "永續",
    summary: "延長氣操法進行攻擊的有效射程",
    effect: "使用【氣操法】時，射程變更為「2 (原本射程+20m)」。前提：須習得【氣操法】。"
  },
  {
    category: "操氣", type: "操氣", req_level: 5, name: "○ 皆操法 (皆操法)",
    cost: "無", target: "自身",
    range: "自身/-", resistance: "無", duration: "永續",
    summary: "氣操法可套用於1H近接武器",
    effect: "可將分類為「格鬥」以外且「用法: 1H（不含1H騎兵）」的近接武器透過【氣操法】遠程使用（射程1/10m，若有【遠操法】則為2/30m）。武器等級與追加傷害以《武器習熟/投擲》為準。前提：須習得【氣操法】。"
  },
  {
    category: "操氣", type: "操氣", req_level: 5, name: ">> 氣旋法 (気旋法)",
    cost: "HP 1d", target: "自身",
    range: "自身/-", resistance: "任意", duration: "10分(60回合)",
    summary: "投擲攻擊改以[形狀:貫通]執行",
    effect: "投擲攻擊（含氣操法）改為「形狀：貫通」處理。攻擊路徑左右各1m為有效範圍。武器於攻擊後自動返回手中。使用一次後解除，不可與【雙操法】同時作用。前提：須習得【念絲還】。"
  },
  {
    category: "操氣", type: "操氣", req_level: 5, name: ">> 雙操法 (双操法)",
    cost: "HP 2", target: "自身",
    range: "自身/-", resistance: "任意", duration: "10s(1回合)",
    summary: "氣操法攻擊目標改為2體",
    effect: "使用【氣操法】時目標改為「2體」，需準備兩件相同武器。命中力進行一次整體判定，HP消耗不翻倍，傷害分別計算。使用後效果自動解除。前提：須習得【氣操法】。"
  },
  {
    category: "操氣", type: "操氣", req_level: 5, name: "△ >> 操浮術 (操浮術)",
    cost: "HP 1d", target: "自身",
    range: "自身/-", resistance: "任意", duration: "1分(6回合)",
    summary: "漂浮離地10cm，無視不良地面",
    effect: "身體浮離地面/水面約10公分。可在水面行走並無視地形不良影響。倒地時效果暫失效，站起後恢復。"
  },
  {
    category: "操氣", type: "操氣", req_level: 5, name: "△ >> 念絲手 I (念糸手I)",
    cost: "HP 2d(9)", target: "自身",
    range: "自身/-", resistance: "任意", duration: "一瞬/1分(6回合)",
    summary: "延伸10米念絲作為手臂使用",
    effect: "伸出一條念絲作手臂操作（範圍10m內），可抓取、移動物品或操作1H武器。無法抓取角色或其持有物。力量與器用度依達成值決定（1點達成值=5kg）。闇狩受到1點以上傷害或消耗時效果解除。"
  },
  {
    category: "操氣", type: "操氣", req_level: 5, name: ">> 念縛術 II (念縛術II)",
    cost: "HP 1d", target: "1體",
    range: "接觸/-", resistance: "必中", duration: "10s(1回合)",
    summary: "主動行為判定-1",
    effect: "目標進行需要比較達成值的主動判定時受到-1懲罰。與【念縛術I/III】同名不重複。前提：須習得【念縛術I】。"
  },
  {
    category: "操氣", type: "操氣", req_level: 5, name: ">> 念避印 (念避印)",
    cost: "HP 2", target: "1體",
    range: "10m/-", resistance: "任意", duration: "10s(1回合)",
    summary: "使目標從氣旋法貫穿範圍中移除",
    effect: "在效果時間內，目標將自動從闇狩使用的【氣旋法】所造成的貫穿攻擊目標中排除。前提：須習得【氣旋法】。"
  },
  {
    category: "操氣", type: "操氣", req_level: 5, name: "△ 破邪健身 (破邪健身)",
    cost: "HP 1d", target: "自身",
    range: "自身/-", resistance: "任意", duration: "10s(1回合)",
    summary: "對毒/疾病/詛咒抵抗+2 (10級時魔神/不死族施放者無效化)",
    effect: "進行毒/疾病/詛咒抵抗時達成值+2。達10級時，來自魔神或不死族的此類屬性效果完全無效。可選擇消耗1d HP使迴避/生命/精神抵抗結果+1（魔域內不消耗HP且包含生死判定）。"
  },
  {
    category: "操氣", type: "操氣", req_level: 5, name: "△ 破邪光彈 (破邪光弾)",
    cost: "HP 2d(9)", target: "1體",
    range: "10m/射擊", resistance: "半減", duration: "一瞬",
    summary: "威力20純能量傷害 (魔神/不死族 威力40)",
    effect: "釋放光之箭矢，造成「威力20 (C值10) ＋ 理力」點純能量屬性魔法傷害。若目標為魔神或不死族則改為威力40。"
  },
  {
    category: "操氣", type: "操氣", req_level: 5, name: "○ 魔生法 (魔生法)",
    cost: "無", target: "自身",
    range: "自身/-", resistance: "無", duration: "永續",
    summary: "消費1d HP使迴避/抵抗結果+1 (魔域內無消耗且包含生死判定)",
    effect: "迴避力或生命/精神抵抗判定確認結果後，可消耗1d點HP使達成值+1。在奈落魔域內無需消耗HP，且生死判定亦可適用。"
  },

  // --- Lv 10 ---
  {
    category: "操氣", type: "操氣", req_level: 10, name: "○ 重操法 (重操法)",
    cost: "無", target: "自身",
    range: "自身/-", resistance: "無", duration: "永續",
    summary: "皆操法適用範圍擴展至2H近接武器與投擲武器",
    effect: "【氣操法】適用範圍擴展至「用法: 2H」近接武器及「投擲」武器（近接武器射程1/10m，有【遠操法】則為2/30m）。前提：須習得【皆操法】。"
  },
  {
    category: "操氣", type: "操氣", req_level: 10, name: "△ 念絲手 II (念糸手II)",
    cost: "HP 2d", target: "自身",
    range: "自身/-", resistance: "任意", duration: "一瞬/1分(6回合)",
    summary: "延伸兩條10米念絲作為雙手使用",
    effect: "效果同【念絲手I】，但伸出兩條念絲能如同雙手操作物體，可使用「用法: 2H」武器，但無法受《雙手使用》影響。前提：須習得【念絲手I】。"
  },
  {
    category: "操氣", type: "操氣", req_level: 10, name: ">> 念縛術 III (念縛術III)",
    cost: "HP 1d", target: "1體",
    range: "接觸/-", resistance: "必中", duration: "10s(1回合)",
    summary: "所有行動判定-1",
    effect: "目標對所有行動判定受到-1懲罰。與【念縛術I/II】同名不重複。前提：須習得【念縛術II】。"
  },
  {
    category: "操氣", type: "操氣", req_level: 10, name: "△ >> 縛術強化 (縛術強化)",
    cost: "HP 1d", target: "自身",
    range: "自身/-", resistance: "任意", duration: "10s(1回合)",
    summary: "將念縛術(I~III)的效果改為-2",
    effect: "在效果時間內，施展之念縛術（適用於I~III）的效果數值改為 -2。前提：須習得【念縛術I】。"
  },
  {
    category: "操氣", type: "操氣", req_level: 10, name: "△ 破邪光槍 (破邪光槍)",
    cost: "HP 2d", target: "1體",
    range: "10m/射擊", resistance: "半減", duration: "一瞬",
    summary: "威力30純能量傷害 (魔神/不死族 威力60)",
    effect: "釋放光之長槍，造成「威力30 (C值10) ＋ 理力」點純能量屬性魔法傷害。若目標為魔神或不死族則改為威力60。前提：須習得【破邪光彈】。"
  },
  {
    category: "操氣", type: "操氣", req_level: 10, name: "○ 魔游法 (魔遊法)",
    cost: "無", target: "自身",
    range: "自身/-", resistance: "無", duration: "永續",
    summary: "消耗1d HP使行為判定重擲 (1天1次，魔域內免消耗且可用於生死判定)",
    effect: "進行除生死判定外之行為判定時，確認出目後可消耗1d點HP重擲（1天1次）。在奈落魔域內免消耗且可用於生死判定（每日1次限制仍有效）。前提：須習得【魔探法】或【魔生法】。"
  }
];