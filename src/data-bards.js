export const bardSongsData = [
  {
      type: "咒歌", req_level: 1, name: "醒眠曲",
      row1_label: "歌唱", row1_val1: "無", row1_val2: "寵物", row1_val3: "小鳥、青蛙",
      row2_label: "效果發生條件", row2_val1: "無", row2_val2: "抵抗", row2_val3: "消滅", row2_val4: "屬性", row2_val5: "精神效果",
      row3_label: "基礎樂素", row3_val1: "1（↑）", row3_target_label: "巧奏值", row3_target_val: "13", row3_bonus_label: "追加樂素", row3_bonus_val: "1（♡）",
      summary: "對象清醒",
      effect: "演奏使沉睡角色清醒的旋律。如果是自然沉睡的話，就會自動清醒。如果是因為魔法、咒歌或特殊能力等沉睡的話，就必須比較達成值，奏者必須大於目標才行。\n此曲的效果範圍內，角色將無法自然沉睡。如果是能導致沉睡的魔法等，首先必須比較達成值，並且必須大於此咒歌才行。"
  },
  {
      type: "咒歌", req_level: 1, name: "氛圍曲",
      row1_label: "歌唱", row1_val1: "無", row1_val2: "寵物", row1_val3: "蟲、青蛙",
      row2_label: "效果發生條件", row2_val1: "無", row2_val2: "抵抗", row2_val3: "消滅", row2_val4: "屬性", row2_val5: "精神效果",
      row3_label: "基礎樂素", row3_val1: "1（↓）", row3_target_label: "巧奏值", row3_target_val: "13", row3_bonus_label: "追加樂素", row3_bonus_val: "1（↓）",
      summary: "命中力 -1",
      effect: "演奏能平穩心情，喪失戰鬥慾望的旋律。目標的命中力判定受到－1的減值修正。"
  },
  {
      type: "咒歌", req_level: 1, name: "聚集動物",
      row1_label: "歌唱", row1_val1: "無", row1_val2: "寵物", row1_val3: "蟲、小鳥",
      row2_label: "效果發生條件", row2_val1: "無", row2_val2: "抵抗", row2_val3: "必中", row2_val4: "屬性", row2_val5: "精神效果",
      row3_label: "基礎樂素", row3_val1: "1（♡）", row3_target_label: "巧奏值", row3_target_val: "13", row3_bonus_label: "追加樂素", row3_bonus_val: "1（♡）",
      summary: "吸引小動物前來",
      effect: "演奏愉快的旋律，喚起附近小動物的興趣，並吸引到奏者身邊。能吸引的小動物只限於能乘坐在雙手上的哺乳類或鳥類。咒歌會立刻產生效果，但小動物必須花時間集合，集合完成的話需要3分鐘（18輪）後。\n如果危害到這些被吸引的小動物，即使只有一部份，此咒歌的效果就會消失。小動物會立刻四散逃逸。"
  },
  {
      type: "咒歌", req_level: 1, name: "聚集魚群",
      row1_label: "歌唱", row1_val1: "無", row1_val2: "寵物", row1_val3: "青蛙、小鳥",
      row2_label: "效果發生條件", row2_val1: "無", row2_val2: "抵抗", row2_val3: "必中", row2_val4: "屬性", row2_val5: "精神效果",
      row3_label: "基礎樂素", row3_val1: "1（♡）", row3_target_label: "巧奏值", row3_target_val: "13", row3_bonus_label: "追加樂素", row3_bonus_val: "1（♡）",
      summary: "吸引魚群前來",
      effect: "此咒歌只能在水邊使用。演奏水流般的旋律，喚起附近魚群的興趣，並吸引到奏者身邊。能吸引的只限於非兇猛類的魚（也就是說無法呼喚鯊魚等）。咒歌會立刻產生效果，但魚群必須花時間集合，集合完成的話需要3分鐘（18輪）後。\n如果危害到這些被吸引的魚，即使只有一部份，此咒歌的效果就會消失。魚群會立刻四散逃逸。"
  },
  {
      type: "咒歌", req_level: 1, name: "噪音",
      row1_label: "歌唱", row1_val1: "無", row1_val2: "寵物", row1_val3: "青蛙、小鳥、蟲",
      row2_label: "效果發生條件", row2_val1: "無", row2_val2: "抵抗", row2_val3: "消滅", row2_val4: "屬性", row2_val5: "精神效果",
      row3_label: "基礎樂素", row3_val1: "1（↓）", row3_target_label: "巧奏值", row3_target_val: "13", row3_bonus_label: "追加樂素", row3_bonus_val: "1（↓）",
      summary: "魔法行使判定 -1",
      effect: "製造難以入耳的旋律，削減利用聽覺的個體的集中力。目標各種的魔法行使判定受到－1的減值修正。"
  },
  {
      type: "咒歌", req_level: 1, name: "抒情曲",
      row1_label: "歌唱", row1_val1: "無", row1_val2: "寵物", row1_val3: "青蛙、蟲",
      row2_label: "效果發生條件", row2_val1: "無", row2_val2: "抵抗", row2_val3: "消滅", row2_val4: "屬性", row2_val5: "精神效果",
      row3_label: "基礎樂素", row3_val1: "1（↓）", row3_target_label: "巧奏值", row3_target_val: "13", row3_bonus_label: "追加樂素", row3_bonus_val: "1（↓）",
      summary: "迴避判定 -1",
      effect: "演奏帶有悲傷氛圍，讓人不禁落淚的旋律。目標的迴避力判定受到－1的減值修正。"
  },
  {
      type: "咒歌", req_level: 1, name: "戰歌",
      row1_label: "歌唱", row1_val1: "無", row1_val2: "寵物", row1_val3: "青蛙、蟲、小鳥",
      row2_label: "效果發生條件", row2_val1: "無", row2_val2: "抵抗", row2_val3: "必中", row2_val4: "屬性", row2_val5: "精神效果",
      row3_label: "基礎樂素", row3_val1: "1（↑）", row3_target_label: "巧奏值", row3_target_val: "13", row3_bonus_label: "追加樂素", row3_bonus_val: "1（↑）",
      summary: "命中判定 +1",
      effect: "演奏能使利用聽覺的個體的奮起勇氣的雄偉旋律。目標的命中力判定獲得＋1的加值修正。"
  },
  {
      type: "咒歌", req_level: 1, name: "安息曲",
      row1_label: "歌唱", row1_val1: "無", row1_val2: "寵物", row1_val3: "青蛙、蟲、小鳥",
      row2_label: "效果發生條件", row2_val1: "無", row2_val2: "抵抗", row2_val3: "消滅", row2_val4: "屬性", row2_val5: "-",
      row3_label: "基礎樂素", row3_val1: "1（↓）", row3_target_label: "巧奏值", row3_target_val: "13", row3_bonus_label: "追加樂素", row3_bonus_val: "1（♡）",
      summary: "不死族的所有行為判定 -2",
      effect: "演奏弔念死者的安穩旋律。當目標的分類為「不死生物」時，其所有的行為判定（包含生命、精神抵抗力判定與生死判定）受到－2的減值修正。此效果不被視為精神效果屬性。"
  },
  {
      type: "咒歌", req_level: 1, name: "強化歌",
      row1_label: "歌唱", row1_val1: "無", row1_val2: "寵物", row1_val3: "青蛙、小鳥",
      row2_label: "效果發生條件", row2_val1: "無", row2_val2: "抵抗", row2_val3: "消滅", row2_val4: "屬性", row2_val5: "精神效果",
      row3_label: "基礎樂素", row3_val1: "1（↓）", row3_target_label: "巧奏值", row3_target_val: "13", row3_bonus_label: "追加樂素", row3_bonus_val: "1（↑）",
      summary: "生命、精神抵抗判定 +1",
      effect: "演奏能使利用聽覺的個體的肉體與精神活性化的旋律。目標的生命、精神抵抗力判定獲得＋1的加值修正。"
  },
  {
      type: "咒歌", req_level: 5, name: "好奇頌",
      row1_label: "歌唱", row1_val1: "必須", row1_val2: "寵物", row1_val3: "小鳥、蟲",
      row2_label: "效果發生條件", row2_val1: "4（♡）", row2_val2: "抵抗", row2_val3: "消滅", row2_val4: "屬性", row2_val5: "精神效果",
      row3_label: "基礎樂素", row3_val1: "2（♡）", row3_target_label: "巧奏值", row3_target_val: "-", row3_bonus_label: "追加樂素", row3_bonus_val: "1（♡）",
      summary: "「炎」「水·冰」「土」「風」「雷」其中之一的屬性傷害＋2",
      effect: "奏者在使用此咒歌時，指定「炎」「水·冰」「土」「風」「雷」其中之一屬性。透過歌曲強化該屬性，提高屬性的力量。效果範圍內對角色或構造物所造成的"
  },
  {
      type: "咒歌", req_level: 5, name: "屬性曲",
      row1_label: "歌唱", row1_val1: "無", row1_val2: "寵物", row1_val3: "小鳥、蟲",
      row2_label: "效果發生條件", row2_val1: "無", row2_val2: "抵抗", row2_val3: "必中", row2_val4: "屬性", row2_val5: "-",
      row3_label: "基礎樂素", row3_val1: "2（♡）", row3_target_label: "巧奏值", row3_target_val: "18", row3_bonus_label: "追加樂素", row3_bonus_val: "1（♡）",
      summary: "將聆聽者引導至演奏者面前",
      effect: "演奏能強烈刺激好奇心的歌曲。當目標看見奏者時會無法抑制欲求，會以「正常移動」移動並出現在奏者面前。但如果「限制移動」也能移動到看得見奏者的位置的話，那也能選擇「限制移動」。只要目視到術者一次的話，此咒歌的效果就會消失。此外，如果一開始就能目視到術者的話，則此咒歌不會產生任何效果。"
  },
  {
      type: "咒歌", req_level: 5, name: "魅惑曲",
      row1_label: "歌唱", row1_val1: "必須", row1_val2: "寵物", row1_val3: "-",
      row2_label: "效果發生條件", row2_val1: "4（♡）", row2_val2: "抵抗", row2_val3: "消滅", row2_val4: "屬性", row2_val5: "精神效果(弱)",
      row3_label: "基礎樂素", row3_val1: "2（♡）", row3_target_label: "巧奏值", row3_target_val: "-", row3_bonus_label: "追加樂素", row3_bonus_val: "1（♡）",
      summary: "抑止對奏者不利的行動",
      effect: "目標被演奏或歌聲魅惑，聽得入神，無法加害於奏者。對象與奏者進行達成值比較時，奏者為被動測時不須擲骰子，自動以對奏者有利的結果。"
  },
  {
      type: "咒歌", req_level: 5, name: "增幅曲",
      row1_label: "歌唱", row1_val1: "無", row1_val2: "寵物", row1_val3: "小鳥、青蛙、蟲",
      row2_label: "效果發生條件", row2_val1: "無", row2_val2: "抵抗", row2_val3: "必中", row2_val4: "屬性", row2_val5: "精神效果",
      row3_label: "基礎樂素", row3_val1: "2（↑）", row3_target_label: "巧奏值", row3_target_val: "18", row3_bonus_label: "追加樂素", row3_bonus_val: "1（↑）",
      summary: "魔法行使判定+1",
      effect: "聽到的人腦袋十分清晰。對象魔法行使判定+1。"
  },
  {
      type: "咒歌", req_level: 5, name: "思鄉曲",
      row1_label: "歌唱", row1_val1: "無", row1_val2: "寵物", row1_val3: "小鳥、青蛙、蟲",
      row2_label: "效果發生條件", row2_val1: "6（↓） 6（♡）", row2_val2: "抵抗", row2_val3: "消滅", row2_val4: "屬性", row2_val5: "精神效果(弱)",
      row3_label: "基礎樂素", row3_val1: "2（↓）", row3_target_label: "巧奏值", row3_target_val: "18", row3_bonus_label: "追加樂素", row3_bonus_val: "1（♡）",
      summary: "引起目標想要歸返的衝動",
      effect: "使目標帶有強烈的思鄉意念，希望盡早歸返。目標會當場以歸返的移動為最優先。如果是戰鬥中的話，則會試圖脫離或逃亡。當目標處於無法脫離或逃亡的狀態，又或是已經歸返根據地的話，此咒歌不會產生效果。此咒歌即使在目標離開效果範圍，又或是奏者結束演奏，效果還會持續1小時。當經過1小時後，又或是目標歸返根據地時，效果就會消失。"
  },
  {
      type: "咒歌", req_level: 5, name: "弱化曲",
      row1_label: "歌唱", row1_val1: "無", row1_val2: "寵物", row1_val3: "青蛙、蟲",
      row2_label: "效果發生條件", row2_val1: "6（↓） 6（♡）", row2_val2: "抵抗", row2_val3: "消滅", row2_val4: "屬性", row2_val5: "精神效果",
      row3_label: "基礎樂素", row3_val1: "2（↓）", row3_target_label: "巧奏值", row3_target_val: "18", row3_bonus_label: "追加樂素", row3_bonus_val: "1（↓）",
      summary: "生命、精神抵抗-1",
      effect: "演奏難聽的旋律，使聽到的人集中力減弱。生命、精神抵抗-1。"
  },
  {
      type: "咒歌", req_level: 5, name: "情歌",
      row1_label: "歌唱", row1_val1: "必要", row1_val2: "寵物", row1_val3: "-",
      row2_label: "效果發生條件", row2_val1: "6（↑）6（♡）", row2_val2: "抵抗", row2_val3: "消滅", row2_val4: "屬性", row2_val5: "精神效果(弱)",
      row3_label: "基礎樂素", row3_val1: "2（♡）", row3_target_label: "巧奏值", row3_target_val: "18", row3_bonus_label: "追加樂素", row3_bonus_val: "1（↑）",
      summary: "萌生戀愛感情",
      effect: "演奏出讓心情快活，能萌生戀愛感情的旋律。目標會愛上身邊的異性。如果周遭有戀人或婚姻關係的對象的話，就會靠近對方。如果周遭沒有這類對象（又或是還沒有戀人之類的對象），會對最接近的異性抱持戀愛感情。不問種族。咒歌的效果範圍內沒有異性的話，不會產生效果。對抱持戀愛感情的對象，會盡可能地以帶有好感的方式，依自己的判斷行動。如果雙方已是戀人，會當場訴說愛意，互相確認彼此的感情。此咒歌的效果，即使奏者停止演奏，還會持續1小時。"
  },
  {
      type: "咒歌", req_level: 5, name: "搖籃曲",
      row1_label: "歌唱", row1_val1: "無", row1_val2: "寵物", row1_val3: "-",
      row2_label: "效果發生條件", row2_val1: "4（↓）4（♡）", row2_val2: "抵抗", row2_val3: "消滅", row2_val4: "屬性", row2_val5: "精神效果(弱)",
      row3_label: "基礎樂素", row3_val1: "2（↓）", row3_target_label: "巧奏值", row3_target_val: "18", row3_bonus_label: "追加樂素", row3_bonus_val: "1（♡）",
      summary: "引起目標強烈睡意",
      effect: "使目標帶有強烈的睡意，不能移動和自主行動，但遭受攻擊等需要進行判定時所有判定-4，該效果持續時間10秒(1回合)。"
  },
  {
      type: "咒歌", req_level: 10, name: "節奏曲",
      row1_label: "歌唱", row1_val1: "無", row1_val2: "寵物", row1_val3: "小鳥",
      row2_label: "效果發生條件", row2_val1: "4（↑）2（♡）", row2_val2: "抵抗", row2_val3: "消滅", row2_val4: "屬性", row2_val5: "精神效果",
      row3_label: "基礎樂素", row3_val1: "2（♡）", row3_target_label: "巧奏值", row3_target_val: "24", row3_bonus_label: "追加樂素", row3_bonus_val: "2（↑）",
      summary: "促使擊掌打拍子",
      effect: "演奏具節奏感的旋律，促使人擊掌打拍子。目標手持的道具會當場掉落，並配合音樂擊掌打起拍子。這將無法使用必須靠手部執行的動作。"
  },
  {
      type: "咒歌", req_level: 10, name: "合唱曲",
      row1_label: "歌唱", row1_val1: "必須", row1_val2: "寵物", row1_val3: "-",
      row2_label: "效果發生條件", row2_val1: "6（♡）", row2_val2: "抵抗", row2_val3: "消滅", row2_val4: "屬性", row2_val5: "精神效果",
      row3_label: "基礎樂素", row3_val1: "2（♡）", row3_target_label: "巧奏值", row3_target_val: "24", row3_bonus_label: "追加樂素", row3_bonus_val: "2（♡）",
      summary: "促使唱歌",
      effect: "透過延伸的旋律，使人與奏者共同唱歌。目標將會與奏者一同唱歌。唱歌途中只能進行「限制移動」，且無法行使需要發音的魔法，也不可對魔偶等下令。"
  },
  {
      type: "咒歌", req_level: 10, name: "亂音",
      row1_label: "歌唱", row1_val1: "無", row1_val2: "寵物", row1_val3: "蛙",
      row2_label: "效果發生條件", row2_val1: "無", row2_val2: "抵抗", row2_val3: "消滅", row2_val4: "屬性", row2_val5: "精神效果",
      row3_label: "基礎樂素", row3_val1: "2（↓）", row3_target_label: "巧奏值", row3_target_val: "24", row3_bonus_label: "追加樂素", row3_bonus_val: "2（↓）",
      summary: "封住宣言特技",
      effect: "透過礙耳的旋律，使人失去冷靜的判斷力。將無法宣言必須進行宣言的戰鬥特技。"
  },
  {
      type: "咒歌", req_level: 10, name: "熱舞曲",
      row1_label: "歌唱", row1_val1: "無", row1_val2: "寵物", row1_val3: "-",
      row2_label: "效果發生條件", row2_val1: "4（↑）2（♡）", row2_val2: "抵抗", row2_val3: "消滅", row2_val4: "屬性", row2_val5: "精神效果",
      row3_label: "基礎樂素", row3_val1: "2（♡）", row3_target_label: "巧奏值", row3_target_val: "24", row3_bonus_label: "追加樂素", row3_bonus_val: "2（↑）",
      summary: "命中與迴避力－ 2",
      effect: "演奏熱情的旋律，使人跳出激烈的舞蹈來妨礙命中或迴避。命中力與迴避力判定受到－2的減值修正。以拳鬥士技能進行命中力判定、迴避力判定的話，不會受此效果影響。"
  },
  {
      type: "咒歌", req_level: 10, name: "銳音",
      row1_label: "歌唱", row1_val1: "無", row1_val2: "寵物", row1_val3: "蟲",
      row2_label: "效果發生條件", row2_val1: "6（↓）", row2_val2: "抵抗", row2_val3: "消滅", row2_val4: "屬性", row2_val5: "精神效果",
      row3_label: "基礎樂素", row3_val1: "2（↓）", row3_target_label: "巧奏值", row3_target_val: "24", row3_bonus_label: "追加樂素", row3_bonus_val: "2（↓）",
      summary: "封住飛行能力",
      effect: "以刺耳的旋律妨礙飛行。於範圍內飛行的個體會墜落，並受到墜落傷害。此外，不再受到特殊能力「飛行」「飛翔」的效果影響，也無法重新起飛"
  },
  {
      type: "咒歌", req_level: 10, name: "精簡曲",
      row1_label: "歌唱", row1_val1: "無", row1_val2: "寵物", row1_val3: "小鳥、蟲、蛙",
      row2_label: "效果發生條件", row2_val1: "2（↓）4（♡）", row2_val2: "抵抗", row2_val3: "必中", row2_val4: "屬性", row2_val5: "精神效果",
      row3_label: "基礎樂素", row3_val1: "2（♡）", row3_target_label: "巧奏值", row3_target_val: "24", row3_bonus_label: "追加樂素", row3_bonus_val: "2（↓）",
      summary: "魔法行使的MP-1",
      effect: "以安穩的旋律聚集周遭的瑪那，協助魔法的行使。範圍內行使的所有魔法，其消耗MP 減少1點。此效果不會使消耗MP 降至0以下（最少1）"
  },
  {
      type: "咒歌", req_level: 10, name: "怠惰曲",
      row1_label: "歌唱", row1_val1: "無", row1_val2: "寵物", row1_val3: "小鳥",
      row2_label: "效果發生條件", row2_val1: "4（↓）2（♡）", row2_val2: "抵抗", row2_val3: "消滅", row2_val4: "屬性", row2_val5: "精神效果",
      row3_label: "基礎樂素", row3_val1: "2（♡）", row3_target_label: "巧奏值", row3_target_val: "24", row3_bonus_label: "追加樂素", row3_bonus_val: "2（↓）",
      summary: "行為判定-1",
      effect: "演奏能引起倦怠感的旋律，妨礙集中。目標所習得的所有行為判定-1。"
  },
  {
      type: "終律", req_level: 1, name: "終律:春天的強風",
      row1_label: "消耗", row1_val1: "2（↑）", row1_val2: "", row1_val3: "",
      row2_label: "抵抗", row2_val1: "半減", row2_val2: "屬性", row2_val3: "風", row2_val4: "", row2_val5: "",
      row3_label: "", row3_val1: "", row3_target_label: "", row3_target_val: "", row3_bonus_label: "", row3_bonus_val: "",
      summary: "1名威力10的傷害",
      effect: "對1名目標造成「威力10+奏力」的魔法傷害"
  },
  {
      type: "終律", req_level: 1, name: "終律:夏天的生命",
      row1_label: "消耗", row1_val1: "1（↑) 1（♡）", row1_val2: "", row1_val3: "",
      row2_label: "抵抗", row2_val1: "任意", row2_val2: "屬性", row2_val3: "-", row2_val4: "", row2_val5: "",
      row3_label: "", row3_val1: "", row3_target_label: "", row3_target_val: "", row3_bonus_label: "", row3_bonus_val: "",
      summary: "回復1名威力20的HP",
      effect: "回復1名目標「威力20+奏力」的HP，同一目標一天只能使用1次。對不死族、魔法生物、魔動機沒有效果"
  },
  {
      type: "終律", req_level: 1, name: "終律:秋天的果實",
      row1_label: "消耗", row1_val1: "1（↓）1（♡）", row1_val2: "", row1_val3: "",
      row2_label: "抵抗", row2_val1: "半減", row2_val2: "屬性", row2_val3: "-", row2_val4: "", row2_val5: "",
      row3_label: "", row3_val1: "", row3_target_label: "", row3_target_val: "", row3_bonus_label: "", row3_bonus_val: "",
      summary: "回復1名威力0的MP",
      effect: "回復1名目標「威力0+奏力」的MP，同一目標一天只能使用1次。對不死族、魔法生物、魔動機沒有效果"
  },
  {
      type: "終律", req_level: 1, name: "終律:冬天的寒風",
      row1_label: "消耗", row1_val1: "2（↓）", row1_val2: "", row1_val3: "",
      row2_label: "抵抗", row2_val1: "半減", row2_val2: "屬性", row2_val3: "風", row2_val4: "", row2_val5: "",
      row3_label: "", row3_val1: "", row3_target_label: "", row3_target_val: "", row3_bonus_label: "", row3_bonus_val: "",
      summary: "1名威力10的傷害",
      effect: "對1名目標造成「威力10+奏力」的魔法傷害"
  },
  {
      type: "終律", req_level: 5, name: "終律:野獸的咆嘯",
      row1_label: "消耗", row1_val1: "4（↑）", row1_val2: "", row1_val3: "",
      row2_label: "抵抗", row2_val1: "半減", row2_val2: "屬性", row2_val3: "衝擊", row2_val4: "", row2_val5: "",
      row3_label: "", row3_val1: "", row3_target_label: "", row3_target_val: "", row3_bonus_label: "", row3_bonus_val: "",
      summary: "3名威力20的傷害",
      effect: "對3名目標造成「威力20+奏力」的魔法傷害"
  },
  {
      type: "終律", req_level: 5, name: "終律:草原的吹息",
      row1_label: "消耗", row1_val1: "2（↑）2（♡）", row1_val2: "", row1_val3: "",
      row2_label: "抵抗", row2_val1: "任意", row2_val2: "屬性", row2_val3: "-", row2_val4: "", row2_val5: "",
      row3_label: "", row3_val1: "", row3_target_label: "", row3_target_val: "", row3_bonus_label: "", row3_bonus_val: "",
      summary: "回復3名威力30的HP",
      effect: "回復3名目標「威力30+奏力」的HP，同一目標一天只能使用1次。對不死族、魔法生物、魔動機沒有效果"
  },
  {
      type: "終律", req_level: 5, name: "終律:花之宴",
      row1_label: "消耗", row1_val1: "2（↓）2（♡）", row1_val2: "", row1_val3: "",
      row2_label: "抵抗", row2_val1: "任意", row2_val2: "屬性", row2_val3: "-", row2_val4: "", row2_val5: "",
      row3_label: "", row3_val1: "", row3_target_label: "", row3_target_val: "", row3_bonus_label: "", row3_bonus_val: "",
      summary: "回復3名威力10的MP",
      effect: "回復3名目標「威力10+奏力」的MP，同一目標一天只能使用1次。對不死族、魔法生物、魔動機沒有效果"
  },
  {
      type: "終律", req_level: 5, name: "終律:蛇洞的悲鳴",
      row1_label: "消耗", row1_val1: "4（↓）", row1_val2: "", row1_val3: "",
      row2_label: "抵抗", row2_val1: "半減", row2_val2: "屬性", row2_val3: "詛咒", row2_val4: "", row2_val5: "",
      row3_label: "", row3_val1: "", row3_target_label: "", row3_target_val: "", row3_bonus_label: "", row3_bonus_val: "",
      summary: "3名威力20的傷害",
      effect: "對3名目標造成「威力20+奏力」的魔法傷害"
  },

  {
      type: "終律", req_level: 10, name: "終律:火龍之舞",
      row1_label: "消耗", row1_val1: "6（↑）", row1_val2: "", row1_val3: "",
      row2_label: "抵抗", row2_val1: "半減", row2_val2: "屬性", row2_val3: "火和風", row2_val4: "", row2_val5: "",
      row3_label: "", row3_val1: "", row3_target_label: "", row3_target_val: "", row3_bonus_label: "", row3_bonus_val: "",
      summary: "5名威力30的傷害",
      effect: "對5名目標造成「威力30+奏力」的魔法傷害"
  },
  {
      type: "終律", req_level: 10, name: "終律:水龍之怒",
      row1_label: "消耗", row1_val1: "6（↓）", row1_val2: "", row1_val3: "",
      row2_label: "抵抗", row2_val1: "半減", row2_val2: "屬性", row2_val3: "水·冰和雷", row2_val4: "", row2_val5: "",
      row3_label: "", row3_val1: "", row3_target_label: "", row3_target_val: "", row3_bonus_label: "", row3_bonus_val: "",
      summary: "5名威力30的傷害",
      effect: "對5名目標造成「威力30+奏力」的魔法傷害"
  },
  {
      type: "終律", req_level: 10, name: "終律:蒼月的光",
      row1_label: "消耗", row1_val1: "3（↓）3（♡）", row1_val2: "", row1_val3: "",
      row2_label: "抵抗", row2_val1: "任意", row2_val2: "屬性", row2_val3: "-", row2_val4: "", row2_val5: "",
      row3_label: "", row3_val1: "", row3_target_label: "", row3_target_val: "", row3_bonus_label: "", row3_bonus_val: "",
      summary: "回復5名威力20的MP",
      effect: "回復5名目標「威力20+奏力」的MP，同一目標一天只能使用1次。對不死族、魔法生物、魔動機沒有效果"
  },
  {
      type: "終律", req_level: 10, name: "終律:白日溫暖",
      row1_label: "消耗", row1_val1: "3（↑）3（♡）", row1_val2: "", row1_val3: "",
      row2_label: "抵抗", row2_val1: "任意", row2_val2: "屬性", row2_val3: "-", row2_val4: "", row2_val5: "",
      row3_label: "", row3_val1: "", row3_target_label: "", row3_target_val: "", row3_bonus_label: "", row3_bonus_val: "",
      summary: "回復5名威力40的HP",
      effect: "回復5名目標「威力40+奏力」的HP，同一目標一天只能使用1次。對不死族、魔法生物、魔動機沒有效果"
  },         
];