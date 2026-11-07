// ==========================================
// 深智魔法 (Deep Wisdom Magic) 資料模組
// ==========================================
export const wizardSpellsData = [
  // --- Lv 1 ---
  {
    category: "深智魔法", type: "深智魔法", req_level: 1, name: "巫師印記 (ウィザード・サイン)",
    row1_val1: "MP 2", row1_val3: "1項物體",
    row2_val1: "接觸/-", row2_val3: "無", row2_val5: "12小時",
    resistance: "無", element: "－",
    summary: "留下術者的簽名",
    effect: "在目標上留下術者的簽名。持有實體的牆壁或地面也能成為目標。記號會持續發出淡淡的光芒，無論是誰都能目視到。對持有魔術師技能或操靈術師技能的角色，可以辨別出這個魔法。能作為簽名留下的，只限於術者的姓名，或是因透過名譽點而保證固有性與正當性的稱號。"
  },
  {
    category: "深智魔法", type: "深智魔法", req_level: 1, name: "虛幻術 (キャントリップ)",
    row1_val1: "MP 1", row1_val3: "術者",
    row2_val1: "術者/-", row2_val3: "無", row2_val5: "一瞬/10s(1回合)",
    resistance: "無", element: "－",
    summary: "讓人稍微看見幻覺",
    effect: "從術者的手掌中跑出花朵、自頭頂炸出煙火、或是全身被微小光粒照耀等，能在術者近身之處產生簡單的幻覺。"
  },
  {
    category: "深智魔法", type: "深智魔法", req_level: 1, name: "均化武器 (バランス・ウェポン)",
    row1_val1: "MP 2", row1_val3: "1名+1名",
    row2_val1: "2(30m)/起點指定", row2_val3: "消滅", row2_val5: "3分/18回合",
    resistance: "消滅", element: "－",
    summary: "敵人的物理傷害－4、我方＋1",
    effect: "對 1 名行使【鈍化武器】（真語魔法 1 級），同時對其他 1 名行使【魔化武器】（操靈魔法 1 級）。如果因目標的抵抗力判定而使【鈍化武器】沒有產生效果的話，【魔化武器】也不會出現效果。"
  },

  // --- Lv 2 ---
  {
    category: "深智魔法", type: "深智魔法", req_level: 2, name: "鎖定術 (ロックオン)",
    row1_val1: "MP 3", row1_val3: "1名全",
    row2_val1: "2(30m)/起點指定", row2_val3: "必中", row2_val5: "3分/18回合",
    resistance: "必中", element: "－",
    summary: "瞄準目標",
    effect: "於效果時間內，當瞄準目標時，術者會有如習得《集中射擊》般，不會發生誤射。"
  },
  {
    category: "深智魔法", type: "深智魔法", req_level: 2, name: "堅韌術 (タフパワー)",
    row1_val1: "MP 3", row1_val3: "1名全",
    row2_val1: "2(30m)/起點指定", row2_val3: "任意", row2_val5: "3分/18回合",
    resistance: "任意", element: "－",
    summary: "生命與精神抵抗力＋2",
    effect: "同時給予目標【活力術（バイタリティ）】（真語魔法 2 級）及【魔法反制（カウンター・マジック）】（操靈魔法 2 級）雙方的效果。"
  },
  {
    category: "深智魔法", type: "深智魔法", req_level: 2, name: "惡劣意象 (バッド・イメージ)",
    row1_val1: "MP 5", row1_val3: "2(半徑3m)/空間",
    row2_val1: "接觸", row2_val3: "必中", row2_val5: "1日",
    resistance: "必中", element: "－",
    summary: "產生令人感受不好的氣氛",
    effect: "踏入效果範圍內的角色，會感受到不好的氣氛。不會造成這以上的影響。"
  },

  // --- Lv 3 ---
  {
    category: "深智魔法", type: "深智魔法", req_level: 3, name: "移置聲音 (リプレイス・サウンド)",
    row1_val1: "MP 4", row1_val3: "任意地點",
    row2_val1: "2(30m)/起點指定", row2_val3: "無", row2_val5: "10s(1回合)",
    resistance: "無", element: "－",
    summary: "使術者的聲音在其他地方發出",
    effect: "效果時間內當術者出聲時，聲音不會出現在術者實際的位置，而是在作為目標的地點聽到。不會對自己聲音以外的聲響造成效果。"
  },
  {
    category: "深智魔法", type: "深智魔法", req_level: 3, name: "即席不死生物 (インスタント・アンデッド)",
    row1_val1: "MP 4~", row1_val3: "接觸點",
    row2_val1: "接觸", row2_val3: "無", row2_val5: "1分/6回合",
    resistance: "無", element: "－",
    summary: "當場製作不死生物",
    effect: "製作並使役不死生物。消耗 MP 與消耗材料等，都與【創造不死生物】（操靈魔法 3 級）相同，但效果時間有異。此外，對於【創造不死生物】同樣的技能等級限制，必須同時使魔術師技能、操靈術師技能雙方滿足條件。透過此魔法所製作出來的魔像，只能給予「遵從逐次指示」的命令。"
  },
  {
    category: "深智魔法", type: "深智魔法", req_level: 3, name: "即席魔像 (インスタント・ゴーレム)",
    row1_val1: "MP 4~", row1_val3: "接觸點",
    row2_val1: "接觸", row2_val3: "無", row2_val5: "1分/6回合",
    resistance: "無", element: "－",
    summary: "當場製作魔像",
    effect: "製作並使役魔像。消耗 MP 與消耗材料等，都與【創造魔像】（操靈魔法 3 級）相同，但效果時間有異。此外，對於【創造魔像】同樣的技能等級限制，必須同時使魔術師技能、操靈術師技能雙方滿足條件。透過此魔法所製作出來的魔像，只能給予「遵從逐次指示」的命令。"
  },
  {
    category: "深智魔法", type: "深智魔法", req_level: 3, name: "遙控鑰匙 (リモート・キー)",
    row1_val1: "MP 4", row1_val3: "1個物體",
    row2_val1: "1(10m)/起點指定", row2_val3: "消滅", row2_val5: "瞬間",
    resistance: "消滅", element: "－",
    summary: "遠距離操作鎖",
    effect: "在遠距離對鎖行使【上鎖術】（真語魔法 1 級）或【解鎖術】（真語魔法 3 級）。"
  },

  // --- Lv 4 ---
  {
    category: "深智魔法", type: "深智魔法", req_level: 4, name: "毒風術 (トキシック・ブリーズ)",
    row1_val1: "MP 7", row1_val3: "任意的地點",
    row2_val1: "2(30m)/貫通", row2_val3: "減半", row2_val5: "一瞬",
    resistance: "減半", element: "毒",
    summary: "威力20傷害",
    effect: "吹起毒風，造成目標「威力 20 ＋魔力」點魔法傷害。"
  },
  {
    category: "深智魔法", type: "深智魔法", req_level: 4, name: "飄浮之眼 (フローティング・アイ)",
    row1_val1: "MP 4", row1_val3: "接觸點",
    row2_val1: "接觸/-", row2_val3: "概要", row2_val5: "3分/18回合",
    resistance: "－", element: "－",
    summary: "製作飄浮的眼睛，進行偵察",
    effect: "製作在空中飄浮，直徑約數 cm 的眼球。此眼球能透過術者的意志，以每 10 秒（1 輪）30 m 的速度自在地移動。術者對該眼球看到景色能有如親眼看見般。然而此魔法的效果持續期間，術者本身的視覺將完全不會產生作用。眼球會在受到攻擊時會自動被破壞。同時，魔法也會被解除。"
  },

  // --- Lv 5 ---
  {
    category: "深智魔法", type: "深智魔法", req_level: 5, name: "瑪娜匯聚 (マナ・コンバージェンス)",
    row1_val1: "MP 4", row1_val3: "術者",
    row2_val1: "術者/-", row2_val3: "任意", row2_val5: "3分(18回合)",
    resistance: "任意", element: "－",
    summary: "以接觸行使的魔法，其魔力＋1",
    effect: "在術者的手上或發動體上集中瑪那。行使射程為「接觸」的魔法時，術者的魔力＋ 1。"
  },
  {
    category: "深智魔法", type: "深智魔法", req_level: 5, name: "防禦大師 (ディフェンス・マスター)",
    row1_val1: "MP 5", row1_val3: "1名",
    row2_val1: "2(30m)/起點指定", row2_val3: "任意", row2_val5: "3分(18回合)",
    resistance: "任意", element: "－",
    summary: "暫時賦予防禦類的戰鬥特技",
    effect: "賦予對象<防具熟習A/**>/<掩護>/<防禦姿勢>/<迴避行動I>/<阻擋>任意一種戰鬥特技，此魔法可疊加不同的戰鬥特技。"
  },

  // --- Lv 6 ---
  {
    category: "深智魔法", type: "深智魔法", req_level: 6, name: "沉睡雲 (スリープ・クラウド)",
    row1_val1: "MP 12", row1_val3: "1(半徑3m)/5",
    row2_val1: "2(30m)/起點指定", row2_val3: "消滅", row2_val5: "一瞬/30秒(3回合)",
    resistance: "消滅", element: "－",
    summary: "使目標沉睡",
    effect: "使目標沉睡。清醒時會是跌倒狀態。對無法睡眠的角色沒有效果。如果是持有複數部位的角色，如果其所有部位沒有同時成為目標的話，將完全不會產生效果。"
  },
  {
    category: "深智魔法", type: "深智魔法", req_level: 6, name: "封門術 (ホールド・ポータル)",
    row1_val1: "MP 4", row1_val3: "1項物體",
    row2_val1: "1(10m)/起點指定", row2_val3: "無", row2_val5: "6小時",
    resistance: "無", element: "－",
    summary: "使門絕對無法打開",
    effect: "這是對開關式的門行使的魔法。將作為目標的門封閉，無論如何使力都無法打開。"
  },

  // --- Lv 7 ---
  {
    category: "深智魔法", type: "深智魔法", req_level: 7, name: "遠隔遙控人偶 (ホールド・ポータル)",
    row1_val1: "MP 10", row1_val3: "1個人偶",
    row2_val1: "2(無限)/-", row2_val3: "永久", row2_val5: "1小時",
    resistance: "永久", element: "－",
    summary: "能在遠方移動人偶，並獲得視覺與聽覺",
    effect: "能對放置在遠方的人偶行使，得到【遙控人偶】的效果。能作為此魔法目標的人偶，只限於術者事先描繪過為了行使此魔法而準備的印記。描繪印記需要 1 小時的儀式。在那之後，只要經過 1週以上的時間的話，就再也無法成為此魔法的目標。1 具人偶只能描繪 1 個印記而已。印記雖然能永續存在，但只要讓它消失，或是描繪新的印記時，就會自動無效化。術者能同時描繪印記的人偶數量，只限於術者的『可使用的深智魔法等級』個。"
  },
  {
    category: "深智魔法", type: "深智魔法", req_level: 7, name: "抽取術 (ドロー・アウト)",
    row1_val1: "MP 7", row1_val3: "1名",
    row2_val1: "1(10m)／射擊", row2_val3: "半減", row2_val5: "一瞬",
    resistance: "半減", element: "詛咒",
    summary: "吸收威力10的HP和MP",
    effect: "對目標的 HP 與 MP 雙方造成『威力 10 ＋魔力』點魔法傷害，同時術者的 HP 與 MP 恢復與其適用傷害相同的數值。但是，MP 的恢復以『目標的最大 MP 的 10 分之 1（小數進位）』為上限。"
  },

  // --- Lv 8 ---
  {
    category: "深智魔法", type: "深智魔法", req_level: 8, name: "溫度幻覺 (サーマル・イリュージョン)",
    row1_val1: "MP 6", row1_val3: "任意的地點",
    row2_val1: "1(10m)/起點指定", row2_val3: "無", row2_val5: "1日",
    resistance: "無", element: "－",
    summary: "製作能欺騙溫度感覺的幻覺",
    effect: "製作欺騙溫度感覺的幻覺。幻覺的大小限於半徑 3 m 空間內能容納的尺寸。幻覺不會附帶影像、聲音或氣味，也無法碰觸。當角色進入幻覺的影響範圍內，會感受到術者設定的溫度。可與【幻象術】（操靈魔法 8 級）【觸感幻覺】等魔法互相重疊。"
  },
  {
    category: "深智魔法", type: "深智魔法", req_level: 8, name: "生命傳送 (ライフ・デリバー)",
    row1_val1: "MP 8", row1_val3: "1名+1名",
    row2_val1: "2(30m)/起點指定", row2_val3: "半減", row2_val5: "一瞬",
    resistance: "半減", element: "詛咒",
    summary: "從敵人身上奪取HP，並交給我方",
    effect: "對 1 名的 HP 造成『威力 10 ＋魔力』點魔法傷害，並使另 1 名恢復與其適用傷害相同的HP。承受傷害的目標，不能是『不死生物』『魔法生物』，但接受恢復的個體不限分類。"
  },

  // --- Lv 9 ---
  {
    category: "深智魔法", type: "深智魔法", req_level: 9, name: "三連閃電 (スリーショット・ライトニング)",
    row1_val1: "MP 12", row1_val3: "任意的3地點",
    row2_val1: "2(30m)/貫通", row2_val3: "半減", row2_val5: "一瞬",
    resistance: "半減", element: "雷",
    summary: "從 3 方向釋放威力 20 的閃電",
    effect: "同時發射 3 道【閃電術】（真語魔法 4 級）。發射方向必須彼此相異。被包含在複數效果範圍內的角色，必須進行相應次數的判定來判斷是否受效果影響（以 1 d 擲『1 ～ 3』）。但最多只會受到 1 次效果。也可收束為兩個方向（威力 25）和單一方向（威力 30）。"
  },
  {
    category: "深智魔法", type: "深智魔法", req_level: 9, name: "觸感幻覺 (タクタイル・イリュージョン)",
    row1_val1: "MP 6", row1_val3: "任意地點",
    row2_val1: "1(10m)／起點指定", row2_val3: "無", row2_val5: "1天",
    resistance: "無", element: "－",
    summary: "製作能欺騙觸覺的幻覺",
    effect: "製作欺騙觸覺的幻覺。幻覺的大小限於半徑 3 m 空間內能容納的尺寸。幻覺不會附帶影像、聲音或氣味，但能被碰觸。其感覺程度能從鐵板至與羽毛棉被等再現各式各樣的堅硬或柔軟度。可與【幻象術】（操靈魔法 8 級）【溫度幻覺】等魔法互相重疊。"
  },

  // --- Lv 10 ---
  {
    category: "深智魔法", type: "深智魔法", req_level: 10, name: "擴大目標 (マルチターゲット)",
    row1_val1: "MP 8", row1_val3: "術者",
    row2_val1: "術者/-", row2_val3: "任意", row2_val5: "10s(1回合)",
    resistance: "任意", element: "－",
    summary: "能同時行使數個廣範圍魔法",
    effect: "效果時間內，術者對目標為『半徑○○ m 的空間』『半徑○○ m ／全部』『半徑○○ m ／△』的魔法，可同時以複數地點為目標行使。此時，隨目標地點的數量行使該魔法的 MP 也會倍加。"
  },
  {
    category: "深智魔法", type: "深智魔法", req_level: 10, name: "防護術Ⅲ (プロテクションIII)",
    row1_val1: "MP 4", row1_val3: "1名",
    row2_val1: "2(30m)／起點指定", row2_val3: "任意", row2_val5: "3分(18回合)",
    resistance: "任意", element: "－",
    summary: "傷害減輕 4 點",
    effect: "目標所承受的物理傷害、魔法傷害－ 4 點。但無法減少帶有『毒』『疾病』『詛咒』等任一屬性的傷害。"
  },

  // --- Lv 11 ---
  {
    category: "深智魔法", type: "深智魔法", req_level: 11, name: "魔法幻惑 (デリュード・エンチャントメント)",
    row1_val1: "MP 12", row1_val3: "1項魔法",
    row2_val1: "接觸/-", row2_val3: "永久", row2_val5: "永久",
    resistance: "永久", element: "－",
    summary: "偽裝魔法效果的內容",
    effect: "將目標被附加的魔法效果一部分或是全部，對【魔法解析】（真語魔法7級）隱蔽、偽裝。達成值的比較如果【魔法解析】並非較高的一方，則會因為此魔法而得知用來偽裝的內容。"
  },
  {
    category: "深智魔法", type: "深智魔法", req_level: 11, name: "均化時間 (バランス・タイム)",
    row1_val1: "MP 18", row1_val3: "1名+1名",
    row2_val1: "2(30 m)/起點指定", row2_val3: "消滅", row2_val5: "1分(16回合)",
    resistance: "消滅", element: "－",
    summary: "延遲敵人的時間，加速我方的時間",
    effect: "對 1 名行使【緩慢術】（真語魔法 11 級），同時對其他 1 名行使【敏捷術】（操靈魔法 11 級）。如果因目標的抵抗力判定而使【緩慢術】沒有產生效果的話，【敏捷術】也不會出現效果。"
  },

  // --- Lv 12 ---
  {
    category: "深智魔法", type: "深智魔法", req_level: 12, name: "禁制詛咒 (ギアス)",
    row1_val1: "MP 19", row1_val3: "1名",
    row2_val1: "接觸/-", row2_val3: "消滅", row2_val5: "永久",
    resistance: "消滅", element: "詛咒",
    summary: "賦予禁忌的詛咒",
    effect: "給予目標禁止某項行動的命令。違反此禁止時，目標會感受到劇烈的痛苦，所有部位會受到『威力0+魔力』點魔法傷害。不能禁止呼吸、進食、睡眠等維持生命的必要行為。"
  },
  {
    category: "深智魔法", type: "深智魔法", req_level: 12, name: "自由飛行術 (フリー・フライト)",
    row1_val1: "MP 9", row1_val3: "術者",
    row2_val1: "術者/-", row2_val3: "任意", row2_val5: "1小時",
    resistance: "任意", element: "－",
    summary: "能自在飛行",
    effect: "術者獲得自在飛行的能力。移動力與位於地上相同，而且能使用所有的移動方法（限制、正常、全力）。"
  },

  // --- Lv 13 ---
  {
    category: "深智魔法", type: "深智魔法", req_level: 13, name: "死亡射線 (デス・レイ)",
    row1_val1: "MP 12", row1_val3: "1名",
    row2_val1: "2(30m)/射擊", row2_val3: "減半", row2_val5: "一瞬",
    resistance: "減半", element: "詛咒",
    summary: "威力 70 傷害",
    effect: "以詛咒的光線造成『威力 70 ＋魔力』點傷害。因為此效果而使 HP 降至 0 以下時，目標必須在隨後的生死判定受到－ 20 的減值修正。"
  },

  // --- Lv 14 ---
  {
    category: "深智魔法", type: "深智魔法", req_level: 14, name: "瑪那匯流 (マナ・インテグレイション)",
    row1_val1: "MP 15", row1_val3: "術者",
    row2_val1: "術者/-", row2_val3: "任意", row2_val5: "瞬間/ 3分鐘（18 輪）",
    resistance: "任意", element: "－",
    summary: "減少傷害 10 點，且之後只能在極近距離使用魔法",
    effect: "瑪那聚集在術者上，纏繞出強力的力場。此魔法在行使後的 3 分鐘（18 輪）內，術者所受到的各種物理傷害、魔法傷害－ 10 點。同時這段期間，除了對術者本身、其所有物、裝備品、可接觸的目標以外，將無法行使任何魔法。"
  },

  // --- Lv 15 ---
  {
    category: "深智魔法", type: "深智魔法", req_level: 15, name: "過載爆發 (オーバーブロウ)",
    row1_val1: "MP 25", row1_val3: "全(半徑30m)/空間",
    row2_val1: "術者/-", row2_val3: "減半", row2_val5: "3分(18回合)",
    resistance: "減半", element: "衝擊",
    summary: "展開威力 20，並能將一切吹飛的力場",
    effect: "效果時間內，每當術者自己的回合正要結束時，對範圍內任意角色造成『威力 20 ＋魔力』點魔法傷害，並將該目標彈開至離自己 30 m 遠的位置。方向為術者開始筆直的方向，如果是無法確定的狀態的話則由術者任意決定。"
  }
];