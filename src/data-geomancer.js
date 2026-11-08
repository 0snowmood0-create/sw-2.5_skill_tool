// ==========================================
// SW2.5 天地使技能（Geomancer）相域資料集 (data-geomancer.js)
// ==========================================

export const geomancerData = [
  // ------------------------------------------
  // 【習得等級 1 級以上】
  // ------------------------------------------
  {
    category: "天地使",type: "相域", req_level: 1, name: "天相:降雷",
    row1_label: "相域類別", row1_val1: "天相", row1_val2: "天 1~4", row1_val3: "1天相:降雷",
    row2_label: "效果屬性", row2_val1: "雷", row2_val2: "-", row2_val3: "-", row2_val4: "-", row2_val5: "-",
    row3_label: "條件與限制", row3_val1: "相域內目標", row3_target_label: "效果時間", row3_target_val: "一瞬", row3_bonus_label: "使用限制", row3_bonus_val: "無",
    summary: "造成消費的命脈點數*2的確定傷害",
    effect: "從天降下雷電進行攻擊。對目標造成等同於「消耗的天之命脈點 × 2」點的確定傷害。此傷害屬性為「雷」。"
  },
  {
    category: "天地使",type: "相域", req_level: 1, name: "天相:空欺",
    row1_label: "相域類別", row1_val1: "天相", row1_val2: "天 2", row1_val3: "1天相:空を欺く",
    row2_label: "效果屬性", row2_val1: "無", row2_val2: "-", row2_val3: "-", row2_val4: "-", row2_val5: "-",
    row3_label: "條件與限制", row3_val1: "相域內目標", row3_target_label: "效果時間", row3_target_val: "10s（1回合）", row3_bonus_label: "使用限制", row3_bonus_val: "無",
    summary: "不受太陽光的影響、雷屬性無效",
    effect: "以來自高空的雲層遮蔽天日，使其免受太陽影響。在效果時間內，目標無論處於室外或室內，皆視為不受陽光相關效果影響。同時，在效果時間內目標視為擁有「雷屬性無效」特質。"
  },
  {
    category: "天地使",type: "相域", req_level: 1, name: "天相:看不見的傘",
    row1_label: "相域類別", row1_val1: "天相", row1_val2: "天 1~3", row1_val3: "1天相:見えない傘",
    row2_label: "效果屬性", row2_val1: "無", row2_val2: "-", row2_val3: "-", row2_val4: "-", row2_val5: "-",
    row3_label: "條件與限制", row3_val1: "相域內目標", row3_target_label: "效果時間", row3_target_val: "10s（1回合）", row3_bonus_label: "使用限制", row3_bonus_val: "無",
    summary: "對飛行施加限制，不會受到掉落物影響",
    effect: "對象的上方會出現看不見的傘，限制飛行能力。消耗 1 點：效果時間內，目標無法進行飛行移動。同時，身體不會接觸到由上方落下的雨或雪。消耗 2 點：除上述效果外，目標將無法使用或套用「劍之加護／風之翼」、「○飛行」或與之類似的能力。消耗 3 點：若目標在受此效果影響時處於飛行狀態，將會直接墜落並原地倒地。"
  },
  {
    category: "天地使",type: "相域", req_level: 1, name: "地相:地脈吸收",
    row1_label: "相域類別", row1_val1: "地相", row1_val2: "地 1~4", row1_val3: "1地相:地脈の吸收",
    row2_label: "效果屬性", row2_val1: "無", row2_val2: "-", row2_val3: "-", row2_val4: "-", row2_val5: "-",
    row3_label: "條件與限制", row3_val1: "相域內目標", row3_target_label: "效果時間", row3_target_val: "一瞬", row3_bonus_label: "使用限制", row3_bonus_val: "1日1次",
    summary: "回復消費的命脈點數*2的HP",
    effect: "吸取大地的活力以療癒傷口。目標回復等同於「消耗的地之命脈點 × 2」點的 HP。此相域每日限使用 1 次。"
  },
  {
    category: "天地使",type: "相域", req_level: 1, name: "地相:潛地",
    row1_label: "相域類別", row1_val1: "地相", row1_val2: "地 1~2", row1_val3: "1地相:地を泳ぐ",
    row2_label: "效果屬性", row2_val1: "無", row2_val2: "-", row2_val3: "-", row2_val4: "-", row2_val5: "-",
    row3_label: "條件與限制", row3_val1: "相域內目標", row3_target_label: "效果時間", row3_target_val: "10s（1回合）", row3_bonus_label: "使用限制", row3_bonus_val: "無",
    summary: "將對象的狀態視為在水中游泳",
    effect: "使水流環繞目標周圍，使其能使用水中移動能力。消耗 1 點：效果時間內，目標視為處於水中。可移動範圍僅限於天地使的「相域」範圍內。此效果不會導致目標無法呼吸或發聲，亦不會受到水中行動常見的移動限制或不利修正。消耗 2 點：若目標擁有「劍之加護／優游之水」或「水中適性」等不受水中行動限制的能力，其行動判定獲得 +1 加成修正。"
  },
  {
    category: "天地使",type: "相域", req_level: 1, name: "地相:沉入泥潭",
    row1_label: "相域類別", row1_val1: "地相", row1_val2: "地 1~3", row1_val3: "1地相:泥濘に沈む",
    row2_label: "效果屬性", row2_val1: "無", row2_val2: "-", row2_val3: "-", row2_val4: "-", row2_val5: "-",
    row3_label: "條件與限制", row3_val1: "非飛行目標", row3_target_label: "效果時間", row3_target_val: "10s（1回合）", row3_bonus_label: "使用限制", row3_bonus_val: "多部位全受影響",
    summary: "腳步沉重、移動和迴避受到限制",
    effect: "干涉目標足底的地形，使其產生如陷於泥沼般的錯覺，導致移動與迴避困難。消耗 1 點：效果時間內，目標無法進行移動。消耗 2 點：除上述效果外，目標的迴避力判定受到 -1 懲罰修正。消耗 3 點：迴避力判定的懲罰修正變更為 -2。註：此效果對處於飛行狀態的對象無效。若目標擁有多部位，則所有部位皆受此效果影響。"
  },
  {
    category: "天地使",type: "相域", req_level: 1, name: "人相:活",
    row1_label: "相域類別", row1_val1: "人相", row1_val2: "人 1~4", row1_val3: "1人相:活",
    row2_label: "效果屬性", row2_val1: "無", row2_val2: "-", row2_val3: "-", row2_val4: "-", row2_val5: "-",
    row3_label: "條件與限制", row3_val1: "相域內目標", row3_target_label: "效果時間", row3_target_val: "一瞬", row3_bonus_label: "使用限制", row3_bonus_val: "1日1次／上限最大值一半",
    summary: "回復消費的命脈點數的MP",
    effect: "給予對象活力。回復消費的命脈點數的 MP。此效果無法回復對象 MP 最大值的一半。此「領域(相域)」1日只能使用1次。"
  },
  {
    category: "天地使",type: "相域", req_level: 1, name: "人相:恐慌",
    row1_label: "相域類別", row1_val1: "人相", row1_val2: "人 1~4", row1_val3: "1人相:恐慌",
    row2_label: "效果屬性", row2_val1: "精神效果（弱）", row2_val2: "-", row2_val3: "-", row2_val4: "-", row2_val5: "-",
    row3_label: "條件與限制", row3_val1: "相域內目標", row3_target_label: "效果時間", row3_target_val: "10s（1回合）", row3_bonus_label: "使用限制", row3_bonus_val: "無",
    summary: "對天地使造成的傷害減少消費的命脈點數*2",
    effect: "使目標產生錯覺，認為天地使是強大的存在而感到退縮。效果時間內，目標對天地使造成的物理傷害與魔法傷害，皆減少「消耗的人之命脈點 *2」點。"
  },
  {
    category: "天地使",type: "相域", req_level: 1, name: "人相:反擊的意志",
    row1_label: "相域類別", row1_val1: "人相", row1_val2: "人 1~4", row1_val3: "1人相:反擊の意識",
    row2_label: "效果屬性", row2_val1: "無", row2_val2: "-", row2_val3: "-", row2_val4: "-", row2_val5: "-",
    row3_label: "條件與限制", row3_val1: "相域內目標", row3_target_label: "效果時間", row3_target_val: "10s（1回合）", row3_bonus_label: "使用限制", row3_bonus_val: "短時間效果限（<10分）",
    summary: "解除一個對像持續受到的不利效果",
    effect: "對象自身不期望的效果中依據規則解除一個效果。解除的效果由目標選擇。無法解除戰鬥特技的「風險」或對應之不利效果。此外，效果時間在 10 分鐘（60 輪）以上的效果（含永久效果）無法解除。"
  },

  // ------------------------------------------
  // 【習得等級 5 級以上】
  // ------------------------------------------
  {
    category: "天地使", type: "相域", req_level: 5, name: "天相:因果",
    row1_label: "相域類別", row1_val1: "天相", row1_val2: "天 1~4", row1_val3: "5天相:因果",
    row2_label: "效果屬性", row2_val1: "詛咒", row2_val2: "-", row2_val3: "-", row2_val4: "-", row2_val5: "-",
    row3_label: "條件與限制", row3_val1: "相域內目標", row3_target_label: "效果時間", row3_target_val: "10s（1回合）", row3_bonus_label: "使用限制", row3_bonus_val: "無",
    summary: "當對象造成傷害時，會受到消費的命脈點數的確定傷害",
    effect: "給予目標每當造成傷害便會反饋傷痛的因果。效果時間內，若目標對他人造成 1 點以上的物理、魔法或適用傷害，則目標自身每對 1 個部位造成傷害，便會受到等同於「消耗的天之命脈點」數值的確定傷害。"
  },
  {
    category: "天地使", type: "相域", req_level: 5, name: "天相:天魔的一擊",
    row1_label: "相域類別", row1_val1: "天相", row1_val2: "天 1~4", row1_val3: "5天相:天魔的一擊",
    row2_label: "效果屬性", row2_val1: "無", row2_val2: "-", row2_val3: "-", row2_val4: "-", row2_val5: "-",
    row3_label: "條件與限制", row3_val1: "相域內目標", row3_target_label: "效果時間", row3_target_val: "10s（1回合）", row3_bonus_label: "使用限制", row3_bonus_val: "無",
    summary: "魔法傷害得到消費的命脈點數的上升",
    effect: "增強魔法或與之類比的傷害。效果時間內，目標所給予的魔法傷害增加等同於「消耗的天之命脈點」的數值。"
  },
  {
    category: "天地使", type: "相域", req_level: 5, name: "天相:引導之箭",
    row1_label: "相域類別", row1_val1: "天相", row1_val2: "天 1~4", row1_val3: "5天相:導きの矢",
    row2_label: "效果屬性", row2_val1: "無", row2_val2: "-", row2_val3: "-", row2_val4: "-", row2_val5: "-",
    row3_label: "條件與限制", row3_val1: "相域內目標", row3_target_label: "效果時間", row3_target_val: "10s（1回合）", row3_bonus_label: "使用限制", row3_bonus_val: "遠隔攻擊限定",
    summary: "對象的遠隔攻擊的命中力追加消費的命脈點數的上升",
    effect: "透過風力等媒介改變箭矢或投擲武器的軌道，使其更容易命中。效果時間內，若目標進行遠距離攻擊，其命中力判定獲得等同於「消耗的天之命脈點」數值的加成修正。"
  },
  {
    category: "天地使", type: "相域", req_level: 5, name: "地相:宿命的戰士",
    row1_label: "相域類別", row1_val1: "地相", row1_val2: "地 2", row1_val3: "5地相:宿命的戰士",
    row2_label: "效果屬性", row2_val1: "無", row2_val2: "-", row2_val3: "-", row2_val4: "-", row2_val5: "-",
    row3_label: "條件與限制", row3_val1: "HP≤0 之目標", row3_target_label: "效果時間", row3_target_val: "一瞬", row3_bonus_label: "使用限制", row3_bonus_val: "無",
    summary: "讓HP0以下的對象回復到HP10並且甦醒",
    effect: "注入大地活力使其覺醒。若目標 HP 在 0 以下，將回復至「10」點；若處於氣絕狀態則立即覺醒。若目標為多部位角色，且在「核心部位」以外發生「部位欠損」狀態，同樣可使其覺醒。"
  },
  {
    category: "天地使", type: "相域", req_level: 5, name: "地相:屬性的分歧",
    row1_label: "相域類別", row1_val1: "地相", row1_val2: "地 3", row1_val3: "5地相:屬性の乖離",
    row2_label: "效果屬性", row2_val1: "無", row2_val2: "-", row2_val3: "-", row2_val4: "-", row2_val5: "-",
    row3_label: "條件與限制", row3_val1: "相域內目標", row3_target_label: "效果時間", row3_target_val: "10s（1回合）", row3_bonus_label: "使用限制", row3_bonus_val: "雙向屬性無效化",
    summary: "無法造成屬性傷害，也不會受到屬性傷害",
    effect: "從目標周遭奪取屬性之力。效果時間內，目標完全無法造成任何帶有屬性的物理、魔法或確定傷害；同時，目標也完全不會受到任何帶有屬性的物理、魔法或確定傷害。"
  },
  {
    category: "天地使", type: "相域", req_level: 5, name: "地相:沙塵之鎧",
    row1_label: "相域類別", row1_val1: "地相", row1_val2: "地 1~4", row1_val3: "5地相:巻き上げる沙塵の鎧",
    row2_label: "效果屬性", row2_val1: "無", row2_val2: "-", row2_val3: "-", row2_val4: "-", row2_val5: "-",
    row3_label: "條件與限制", row3_val1: "相域內目標", row3_target_label: "效果時間", row3_target_val: "10s（1回合）", row3_bonus_label: "使用限制", row3_bonus_val: "無",
    summary: "上升消費的命脈點數*2的防護點",
    effect: "在目標周圍捲起砂塵，形成臨時的鎧甲。防護點上升等同於「消耗的地之命脈點 *2」的數值。"
  },
  {
    category: "天地使",   type: "相域", req_level: 5, name: "人相:魂的別離",
    row1_label: "相域類別", row1_val1: "人相", row1_val2: "人 1~4", row1_val3: "5人相:魂的別離",
    row2_label: "效果屬性", row2_val1: "詛咒", row2_val2: "-", row2_val3: "-", row2_val4: "-", row2_val5: "-",
    row3_label: "條件與限制", row3_val1: "相域內目標", row3_target_label: "效果時間", row3_target_val: "10s（1回合）", row3_bonus_label: "使用限制", row3_bonus_val: "回復下限至 0",
    summary: "減少*2的HP、MP回復量",
    effect: "給予目標難以接受回復的詛咒。當目標受到任何 HP 或 MP 回復效果時，其回復量減少「消耗的人之命脈點 *2」點（最低降至 0）。"
  },
  {
    category: "天地使", type: "相域", req_level: 5, name: "人相:洩漏法力",
    row1_label: "相域類別", row1_val1: "人相", row1_val2: "人 1~4", row1_val3: "5人相:漏れ出るマナ",
    row2_label: "效果屬性", row2_val1: "詛咒", row2_val2: "-", row2_val3: "-", row2_val4: "-", row2_val5: "-",
    row3_label: "條件與限制", row3_val1: "相域內目標", row3_target_label: "效果時間", row3_target_val: "10s（1回合）", row3_bonus_label: "使用限制", row3_bonus_val: "無",
    summary: "魔力減少「消耗命脈點」點。",
    effect: "阻礙目標的魔法行使。效果時間內，目標的所有魔力減少等同於「消耗的人之命脈點」的數值。"
  },
  {
    category: "天地使", type: "相域", req_level: 5, name: "人相:夢食",
    row1_label: "相域類別", row1_val1: "人相", row1_val2: "人 1~4", row1_val3: "5人相:夢喰い",
    row2_label: "效果屬性", row2_val1: "詛咒", row2_val2: "-", row2_val3: "-", row2_val4: "-", row2_val5: "-",
    row3_label: "條件與限制", row3_val1: "相域內目標", row3_target_label: "效果時間", row3_target_val: "一瞬", row3_bonus_label: "使用限制", row3_bonus_val: "無",
    summary: "造成消費的命脈點數*2的確定傷害",
    effect: "詛咒並攻擊目標。造成等同於「消耗的人之命脈點 *2」點的確定傷害。"
  },

  // ------------------------------------------
  // 【習得等級 10 級以上】
  // ------------------------------------------
  {
    category: "天地使", type: "相域", req_level: 10, name: "天相:七星流轉",
    row1_label: "相域類別", row1_val1: "天相", row1_val2: "天 1~4", row1_val3: "10天相:七星流れ",
    row2_label: "效果屬性", row2_val1: "無", row2_val2: "-", row2_val3: "-", row2_val4: "-", row2_val5: "-",
    row3_label: "條件與限制", row3_val1: "相域內目標", row3_target_label: "效果時間", row3_target_val: "10s（1回合）", row3_bonus_label: "使用限制", row3_bonus_val: "僅限戰鬥中生效",
    summary: "擲出7的時候回復消費的命脈點數的HP、MP",
    effect: "以七星之導引為力。效果時間內，當目標進行行為判定、威力表判定、打擊點判定等任何使用 2d6 的擲骰，且出目合計為「7」時，目標的 HP 與 MP 各回復等同於「消耗的天之命脈點」的數值。此效果在非戰鬥狀態下無效。"
  },
  {
    category: "天地使", type: "相域", req_level: 10, name: "天相:法力的離別",
    row1_label: "相域類別", row1_val1: "天相", row1_val2: "天 1~4", row1_val3: "10天相:マナの離別",
    row2_label: "效果屬性", row2_val1: "無", row2_val2: "-", row2_val3: "-", row2_val4: "-", row2_val5: "-",
    row3_label: "條件與限制", row3_val1: "相域內目標", row3_target_label: "效果時間", row3_target_val: "一瞬", row3_bonus_label: "使用限制", row3_bonus_val: "無",
    summary: "減少消費的命脈點數*2的MP",
    effect: "讓對象被天運所拋棄，法力消失。減少對象等同於「消耗的天之命脈點 × 2」點的 MP。"
  },
  {
    category: "天地使", type: "相域", req_level: 10, name: "天相:烙印",
    row1_label: "相域類別", row1_val1: "天相", row1_val2: "天 1~4", row1_val3: "10天相:烙印",
    row2_label: "效果屬性", row2_val1: "無", row2_val2: "-", row2_val3: "-", row2_val4: "-", row2_val5: "-",
    row3_label: "條件與限制", row3_val1: "相域內目標", row3_target_label: "效果時間", row3_target_val: "一瞬", row3_bonus_label: "使用限制", row3_bonus_val: "指定 1 種屬性弱化",
    summary: "給予對象任意屬性的弱點",
    effect: "分析對象的構造，對特定屬性弱化。給予對象任意屬性的弱點（可選：炎、水冰、風、土、雷、純能量），該弱點屬性所造成的傷害追加「消耗的天之命脈點」點。"
  },
  {
    category: "天地使", type: "相域", req_level: 10, name: "地相:刮腳",
    row1_label: "相域類別", row1_val1: "地相", row1_val2: "地 1~3", row1_val3: "10地相:足搔き",
    row2_label: "效果屬性", row2_val1: "無", row2_val2: "-", row2_val3: "-", row2_val4: "-", row2_val5: "-",
    row3_label: "條件與限制", row3_val1: "地面目標", row3_target_label: "效果時間", row3_target_val: "10s（1回合）", row3_bonus_label: "使用限制", row3_bonus_val: "對不落地者無效",
    summary: "限制對方的移動與行動",
    effect: "讓對象的腳邊地形時常發生變化以妨礙對象。移動力減半（無條件進位），且行為判定受到「消耗的地之命脈點」數值的減值懲罰。此效果對不落地者無效。"
  },
  {
    category: "天地使", type: "相域", req_level: 10, name: "地相:大蛇眼",
    row1_label: "相域類別", row1_val1: "地相", row1_val2: "地 1~4", row1_val3: "10地相:大いなる蛇の目",
    row2_label: "效果屬性", row2_val1: "詛咒", row2_val2: "-", row2_val3: "-", row2_val4: "-", row2_val5: "-",
    row3_label: "條件與限制", row3_val1: "相域內所有角色", row3_target_label: "效果時間", row3_target_val: "10s（1回合）", row3_bonus_label: "使用限制", row3_bonus_val: "無",
    summary: "周圍腳色擲出雙1時受到消費的命脈點數*2的確定傷害",
    effect: "周圍的行動作為引信詛咒對方。領域（相域）範圍內存在的所有角色只要擲出雙1，就會對該目標造成「消耗的地之命脈點 *2」點確定傷害。"
  },
  {
    category: "天地使", type: "相域", req_level: 10, name: "人相:蜃氣樓",
    row1_label: "相域類別", row1_val1: "人相", row1_val2: "人 1~4", row1_val3: "10人相:蜃氣樓",
    row2_label: "效果屬性", row2_val1: "無", row2_val2: "-", row2_val3: "-", row2_val4: "-", row2_val5: "-",
    row3_label: "條件與限制", row3_val1: "相域內目標", row3_target_label: "效果時間", row3_target_val: "10s（1回合）", row3_bonus_label: "使用限制", row3_bonus_val: "擇一指定屬性減傷",
    summary: "指定屬性的物理、魔法傷害減少消費的命脈點數*2",
    effect: "以蜃氣樓覆蓋並隱藏目標的身姿。目標在效果時間內，可針對「特定屬性」的物理與魔法傷害減少「消耗的人之命脈點 *2」點。特定屬性由天地使在效果發動時，從炎、水冰、風、土、雷、純能量中任選其一。"
  },
  {
    category: "天地使", type: "相域", req_level: 10, name: "人相:殘像",
    row1_label: "相域類別", row1_val1: "人相", row1_val2: "人 4", row1_val3: "10人相:殘像",
    row2_label: "效果屬性", row2_val1: "無", row2_val2: "-", row2_val3: "-", row2_val4: "-", row2_val5: "-",
    row3_label: "條件與限制", row3_val1: "相域內目標", row3_target_label: "效果時間", row3_target_val: "10s（1回合）", row3_bonus_label: "使用限制", row3_bonus_val: "發動迴避成功後自動解除",
    summary: "產生分身",
    effect: "產生分身。執行迴避判定時自動成功，發動後自動解除。"
  },
  {
    category: "天地使", type: "相域", req_level: 10, name: "人相:存在的消失",
    row1_label: "相域類別", row1_val1: "人相", row1_val2: "人 1~4", row1_val3: "10人相:存在的消失",
    row2_label: "效果屬性", row2_val1: "無", row2_val2: "-", row2_val3: "-", row2_val4: "-", row2_val5: "-",
    row3_label: "條件與限制", row3_val1: "相域內目標", row3_target_label: "效果時間", row3_target_val: "10s（1回合）", row3_bonus_label: "使用限制", row3_bonus_val: "對全體/空間效果無效",
    summary: "從廣範圍效果(效果為全或空間以外的)的對象除外",
    effect: "當目標處於具有「最大對象數」限制的效果範圍內時，會自動從該對象中除外（不計入對象數量）。同時，目標無法被選為「形狀：貫通」或「形狀：突破」效果的對象（亦不會被無意中擊中）。若廣域效果標註對象為「所有（All）」或「空間」，則無法除外，仍會正常受到影響。此效果會在時間結束或發揮次數達到「消耗的人之命脈點」次數後消失。"
  },
  {
    category: "天地使", type: "相域", req_level: 10, name: "人相:人類替身",
    row1_label: "相域類別", row1_val1: "人相", row1_val2: "人 1~4", row1_val3: "10人相:人写し",
    row2_label: "效果屬性", row2_val1: "詛咒", row2_val2: "-", row2_val3: "-", row2_val4: "-", row2_val5: "-",
    row3_label: "條件與限制", row3_val1: "相域內目標", row3_target_label: "效果時間", row3_target_val: "10s（1回合）", row3_bonus_label: "使用限制", row3_bonus_val: "無",
    summary: "使目標承擔天地使所受的傷害",
    effect: "使目標與天地使的存在重疊，視為部分同一體。效果時間內若天地使受到物理或魔法傷害，每受一次傷，便對目標造成「天地使減少的 HP」或「消耗的人之命脈點 *2」中數值較大一方的確定傷害。"
  }
];
