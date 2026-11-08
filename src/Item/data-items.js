// SW2.5 冒險通用道具、生活用品與隨行動物資料集
export const itemData = [
    // ==================== 冒險必備組合與基本容器 ====================
    {
      name: "冒險者組合",
      nameJp: "冒険者セット",
      category: "冒險者道具",
      type: "道具",
      price: "100 G",
      summary: "背袋、水袋、毛毯、火把*6、火絨箱、繩索10m、小型刀",
      effect: "包含探險必備的基本裝備組合（含背袋、水袋、毛毯、火把×6、火絨箱、繩索 10m、小型刀）。"
    },
    {
      name: "袋子",
      nameJp: "袋",
      category: "冒險者道具",
      type: "道具",
      price: "8 G",
      summary: "布製收納袋",
      effect: "一般的布製收納袋。"
    },
    {
      name: "腰包",
      nameJp: "ベルトポーチ",
      category: "冒險者道具",
      type: "道具",
      price: "15 G",
      summary: "皮革製腰部配件包",
      effect: "固定於腰帶上的皮革製隨身小型收納包。"
    },
    {
      name: "水袋",
      nameJp: "水袋",
      category: "冒險者道具",
      type: "道具",
      price: "20 G",
      summary: "皮革製飲用水袋",
      effect: "盛裝飲用水的皮革水袋。"
    },
    {
      name: "背袋",
      nameJp: "背負い袋",
      category: "冒險者道具",
      type: "道具",
      price: "50 G",
      summary: "皮革製後背大容量背包",
      effect: "適合長途旅行使用的皮革製後背包。"
    },
  
    // ==================== 露營與生存器具 ====================
    {
      name: "餐具組",
      nameJp: "食器セット",
      category: "冒險者道具",
      type: "道具",
      price: "12 G",
      summary: "杯子、盤子、碗",
      effect: "野餐與露營用的餐具套組（含杯子、盤子、碗）。"
    },
    {
      name: "毛毯",
      nameJp: "毛布",
      category: "冒險者道具",
      type: "道具",
      price: "40 G",
      summary: "野宿禦寒毛毯",
      effect: "野宿或露營時鋪蓋保暖的毛毯。"
    },
    {
      name: "調理道具組合",
      nameJp: "調理道具セット",
      category: "冒險者道具",
      type: "道具",
      usage: "2H",
      price: "50 G",
      summary: "平底鍋、鍋子、烹飪勺",
      effect: "包含平底鍋、湯鍋、烹飪勺等野外料理用具。"
    },
    {
      name: "容易使用的調理道具組合",
      nameJp: "使いやすい調理道具セット",
      category: "冒險者道具",
      type: "道具",
      usage: "2H",
      price: "50 G (+5名譽點)",
      summary: "調理判定 +1 良好廚具組",
      effect: "名譽物品。進行［調理判定］時達成值 +1。"
    },
    {
      name: "帳篷",
      nameJp: "テント",
      category: "冒險者道具",
      type: "道具",
      price: "250 G~",
      summary: "2~4人用 250G~ / 5人用 300G~ / 6人用 350G~",
      effect: "野外宿營帳篷。依容納人數不同價格有所差異（2~4人用 250 G~、5人用 300 G~、6人用 350 G~）。"
    },
    {
      name: "火把 (6支)",
      nameJp: "たいまつ",
      category: "冒險者道具",
      type: "道具",
      usage: "1H",
      price: "5 G",
      summary: "6支一組 每支燃燒2小時 (半徑10m 掉落地不熄滅)",
      effect: "一組 6 支。單支可持續燃燒 2 小時，照明範圍半徑 10m。掉落到地上也不會熄滅。"
    },
    {
      name: "火絨箱",
      nameJp: "火口箱",
      category: "冒險者道具",
      type: "道具",
      usage: "2H",
      price: "20 G",
      summary: "生火打火石盒 10分鐘點燃",
      effect: "放置打火石及火絨的收納箱，消耗 10 分鐘可點燃易燃的火絨。"
    },
    {
      name: "燃えやすい火口箱",
      nameJp: "燃えやすい火口箱",
      category: "冒險者道具",
      type: "道具",
      usage: "2H",
      price: "20 G (+5名譽點)",
      summary: "改良生火盒 5分鐘迅速點燃",
      effect: "名譽物品。放置高易燃火絨的改良打火箱，只需 5 分鐘即可點燃。"
    },
    {
      name: "油",
      nameJp: "油",
      category: "冒險者道具",
      type: "消耗品",
      price: "20 G",
      summary: "油燈燃料 可持續燃燒12小時",
      effect: "供油燈使用的燃料油，單罐可供油燈持續燃燒 12 小時。"
    },
    {
      name: "火繩壺",
      nameJp: "火縄壺",
      category: "冒險者道具",
      type: "道具",
      usage: "1H",
      price: "100 G",
      summary: "火種打火機小壺 1分鐘點燃",
      effect: "內置火種與機械打火石的小壺，1 分鐘即可點燃火源。"
    },
    {
      name: "迅速的火繩壺",
      nameJp: "迅速の火縄壺",
      category: "冒險者道具",
      type: "道具",
      usage: "1H",
      price: "100 G (+20名譽點)",
      summary: "極速點燃小壺 30秒點燃",
      effect: "名譽物品。精巧的點火機制，只需 30 秒即可迅速點燃火源。"
    },
    {
      name: "油燈",
      nameJp: "ランダン",
      category: "冒險者道具",
      type: "道具",
      usage: "1H",
      price: "40 G",
      summary: "照明半徑10m 附快門控制光閘 (掉落地毀損)",
      effect: "照明範圍半徑 10m，附有快門光閘可限制光線照射方向。防護較弱，掉落到地上時會毀損。"
    },
    {
      name: "堅固的油燈",
      nameJp: "頑丈なランダン",
      category: "冒險者道具",
      type: "道具",
      usage: "1H",
      price: "40 G (+10名譽點)",
      summary: "耐摔堅固油燈 (從3m高掉落石地上不毀損)",
      effect: "名譽物品。防護強化的堅固油燈，即便從 3m 高度掉落至石頭地面也不會毀損。"
    },
    {
      name: "繩索",
      nameJp: "ローープ",
      category: "冒險者道具",
      type: "道具",
      price: "10 G",
      summary: "10m基礎繩索 (每追加1m/1G)",
      effect: "基礎長度 10m。可用於爬高或綑綁，長度每追加 1m 價格 +1 G。"
    },
    {
      name: "小型錘",
      nameJp: "小型ハンマー",
      category: "冒險者道具",
      type: "道具",
      usage: "1H",
      price: "10 G",
      summary: "施工作業小鐵錘 (無法當作武器)",
      effect: "用於釘楔子或設營的小鐵錘，構造不適用於戰鬥武器。"
    },
    {
      name: "良好平衡的小型錘",
      nameJp: "バランスのよい小型ハンマー",
      category: "冒險者道具",
      type: "道具",
      usage: "1H",
      price: "10 G (+5名譽點)",
      summary: "緊急時可當作<小錘>(釘頭錘B階)武器使用",
      effect: "名譽物品。重心經過配重平衡，緊急戰鬥時可直接當作《小錘》（釘頭錘 B 階級）武器使用。"
    },
    {
      name: "掛鉤",
      nameJp: "フック",
      category: "冒險者道具",
      type: "道具",
      price: "10 G",
      summary: "攀爬懸掛用金屬鉤爪",
      effect: "可配合繩索使用，固定於牆緣或樹枝上以供攀爬。"
    },
    {
      name: "楔子 (10個)",
      nameJp: "くさび",
      category: "冒險者道具",
      type: "道具",
      price: "20 G",
      summary: "10個一組 (追加1個/2G)",
      effect: "固定門窗或攀岩紮營用的金屬楔子。一組 10 個，追加單個 2 G。"
    },
    {
      name: "小型刀",
      nameJp: "小型ナイフ",
      category: "冒險者道具",
      type: "道具",
      usage: "1H",
      price: "20 G",
      summary: "日常割繩削木小刀 (無法當作武器)",
      effect: "用於料理切割或割繩削木的小型刀具，構造不適用於戰鬥武器。"
    },
    {
      name: "鋒利的刀",
      nameJp: "よく切れるナイフ",
      category: "冒險者道具",
      type: "道具",
      usage: "1H",
      price: "20 G (+5名譽點)",
      summary: "緊急時可當作<小刀>(刀劍B階/投擲B階)武器使用",
      effect: "名譽物品。開鋒鋒利的實用刀具，緊急戰鬥時可直接當作《小刀》（刀劍 B 階級 / 投擲 B 階級）武器使用。"
    },
    {
      name: "手鏡",
      nameJp: "手鏡",
      category: "冒險者道具",
      type: "道具",
      usage: "1H",
      price: "50 G~",
      summary: "S尺寸 50G / M尺寸 100G / L尺寸 150G",
      effect: "攜帶型手鏡。依尺寸規格價格不同（S尺寸 50 G、M尺寸 100 G、L尺寸 150 G）。"
    },
    {
      name: "平滑的手鏡",
      nameJp: "真っ平らの手鏡",
      category: "冒險者道具",
      type: "道具",
      usage: "1H",
      price: "50 G (+20名譽點)",
      summary: "變裝判定達成值 +1 高精細手鏡",
      effect: "名譽物品。極致平整無瑕的精工鏡子，裝備者進行［變裝判定］時達成值 +1。"
    },
  
    // ==================== 服飾與日常穿著 ====================
    {
      name: "換洗衣物組合",
      nameJp: "着替えセット",
      category: "冒險者道具",
      type: "道具",
      price: "10 G~",
      summary: "約1週份的個人換洗服裝組合",
      effect: "包含約一週份量的基本個人換洗衣服。"
    },
    {
      name: "內衣褲",
      nameJp: "下着",
      category: "冒險者道具",
      type: "道具",
      price: "3 G~",
      summary: "貼身內衣褲",
      effect: "基礎貼身內衣褲。"
    },
    {
      name: "日常服裝",
      nameJp: "普段着",
      category: "冒險者道具",
      type: "道具",
      price: "6 G~",
      summary: "上衣 6G~ / 裙子 7G~ / 褲子 8G~",
      effect: "平民日常穿著的普通服飾（上衣 6 G~、裙子 7 G~、褲子 8 G~）。"
    },
    {
      name: "泳裝",
      nameJp: "水着",
      category: "冒險者道具",
      type: "道具",
      price: "20 G~",
      summary: "防水不透光材質游泳服",
      effect: "經特殊處理被水潑濕也不會透光的游泳衣物。"
    },
    {
      name: "競技泳裝",
      nameJp: "競泳水着",
      category: "冒險者道具",
      type: "道具",
      price: "20 G (+10名譽點)",
      summary: "游泳判定達成值 +1 專業競技泳衣",
      effect: "名譽物品。流線型專業泳衣，進行［游泳判定］時達成值 +1。"
    },
    {
      name: "防寒衣",
      nameJp: "防寒着",
      category: "冒險者道具",
      type: "道具",
      price: "80 G~",
      summary: "厚重防寒上下套裝",
      effect: "雪地與嚴寒地區專用的厚重保暖上下套組。"
    },
    {
      name: "蓬鬆的防寒衣",
      nameJp: "ふかふかの防寒着",
      category: "冒險者道具",
      type: "道具",
      price: "80 G (+15名譽點)",
      summary: "水‧冰屬性傷害 -1，敏捷度 -6",
      effect: "名譽物品。極致蓬鬆保暖的套裝。裝備時承受的［水·冰屬性］傷害減免 1 點，但因極度厚重使［敏捷度］受到 -6 修正。"
    },
    {
      name: "騎馬服",
      nameJp: "乗馬服",
      category: "冒險者道具",
      type: "道具",
      price: "100 G~",
      summary: "專用騎乘上下套裝",
      effect: "耐磨且便於跨騎的專用騎乘服飾上下套組。"
    },
    {
      name: "時尚的騎馬服",
      nameJp: "粋な乗馬服",
      category: "冒險者道具",
      type: "道具",
      price: "100 G (+10名譽點)",
      summary: "騎乘判定達成值 +1 時尚騎馬服",
      effect: "名譽物品。剪裁合身時尚，進行［騎乘判定］時達成值 +1。"
    },
    {
      name: "禮服/洋裝",
      nameJp: "礼服/ドレス",
      category: "冒險者道具",
      type: "道具",
      price: "100 G~",
      summary: "宴會社交正式禮服",
      effect: "出入王宮、貴族宴會或正式社交場合穿著的高級禮服。"
    },
    {
      name: "千變萬化之衣",
      nameJp: "千変万化の衣",
      category: "冒險者道具",
      type: "道具",
      price: "18000 G",
      summary: "魔法物品 可自由改變外觀轉變成各種衣服",
      effect: "魔法道具。使用者可以透過意念隨時將其外觀幻化轉變成任何形式的普通衣服與服飾。"
    },
  
    // ==================== 隨行騎載動物 ====================
    {
      name: "驢子",
      nameJp: "ロバ",
      category: "冒險者道具",
      type: "道具",
      price: "800 G",
      summary: "耐勞負重小型載貨牲口",
      effect: "適合山路與步道負重馱運的小型家畜。"
    },
    {
      name: "騾子",
      nameJp: "ラバ",
      category: "冒險者道具",
      type: "道具",
      price: "1000 G",
      summary: "高負重長途馱運家畜",
      effect: "具備極佳耐力與負重能力的中型馱運動物。"
    },
    {
      name: "荷馬",
      nameJp: "荷馬",
      category: "冒險者道具",
      type: "道具",
      price: "1500 G",
      summary: "拉車馱運馬匹",
      effect: "用於牽引貨車或負重馱運的普通工作馬。"
    },
    {
      name: "駱駝",
      nameJp: "ラクダ",
      category: "冒險者道具",
      type: "道具",
      price: "2000 G",
      summary: "沙漠與荒漠耐旱騎載動物",
      effect: "適應極端乾旱沙漠與荒漠氣候的遠征馱運騎乘動物。"
    },
  
    // ==================== 文具、藝術與生活器具 ====================
    {
      name: "羽毛筆",
      nameJp: "羽根ペン",
      category: "冒險者道具",
      type: "道具",
      usage: "1H",
      price: "2 G",
      summary: "標準書寫用羽毛筆",
      effect: "配合墨水使用的普通書寫羽毛筆。"
    },
    {
      name: "輕盈的羽毛筆",
      nameJp: "軽い羽根ペン",
      category: "冒險者道具",
      type: "道具",
      usage: "1H",
      price: "50 G (+10名譽點)",
      summary: "執筆書寫速度 +10% 精工羽毛筆",
      effect: "名譽物品。重心輕巧，使執筆抄寫或紀錄的速度提升 10%。"
    },
    {
      name: "墨水",
      nameJp: "インク",
      category: "冒險者道具",
      type: "消耗品",
      price: "3 G",
      summary: "標準書寫黑色墨水瓶",
      effect: "配合羽毛筆書寫使用的普通墨水。"
    },
    {
      name: "畫筆",
      nameJp: "絵筆",
      category: "冒險者道具",
      type: "道具",
      usage: "1H",
      price: "5 G~",
      summary: "繪畫寫生專用畫筆",
      effect: "用於繪圖寫生或顏料塗刷的筆具。"
    },
    {
      name: "輕快的畫筆",
      nameJp: "軽快な絵筆",
      category: "冒險者道具",
      type: "道具",
      usage: "1H",
      price: "50 G (+10名譽點)",
      summary: "進行繪畫等行為判定時達成值 +1",
      effect: "名譽物品。靈巧順手，進行繪畫等相關行為判定時達成值 +1。"
    },
    {
      name: "油畫道具",
      nameJp: "油絵の具",
      category: "冒險者道具",
      type: "道具",
      price: "10 G~",
      summary: "7色一組的油畫顏料顏料盒",
      effect: "繪製油畫使用的專業顏料組（7 色一組）。"
    },
    {
      name: "刷子",
      nameJp: "はけ",
      category: "冒險者道具",
      type: "道具",
      usage: "1H",
      price: "5 G~",
      summary: "塗漆塗料大面積刷具",
      effect: "大面積塗抹顏料或油漆使用的毛刷。"
    },
    {
      name: "顏料",
      nameJp: "ペンキ",
      category: "冒險者道具",
      type: "消耗品",
      price: "20 G~",
      summary: "1罐 1L 塗料油漆",
      effect: "大容量塗料漆罐（1 罐容量 1L）。"
    },
    {
      name: "布",
      nameJp: "布",
      category: "冒險者道具",
      type: "道具",
      price: "4 G~",
      summary: "手帕尺寸 4G~ / 浴巾尺寸 10G~",
      effect: "通用布料。依尺寸面積價格不同（手帕尺寸 4 G~、浴巾尺寸 10 G~）。"
    },
    {
      name: "羊皮紙",
      nameJp: "羊皮紙",
      category: "冒險者道具",
      type: "道具",
      price: "5 G",
      summary: "5張一綑耐用羊皮紙",
      effect: "耐用的書寫羊皮紙（5 張一綑）。"
    },
    {
      name: "白紙書",
      nameJp: "白紙の本",
      category: "冒險者道具",
      type: "道具",
      price: "30 G",
      summary: "20頁空白精裝裝訂書本",
      effect: "未書寫的空白裝訂書本（共 20 頁）。"
    },
    {
      name: "素描本",
      nameJp: "スケッチブック",
      category: "冒險者道具",
      type: "道具",
      price: "50 G",
      summary: "10頁寫生作畫本",
      effect: "適合戶外繪圖作畫的素描本（共 10 頁）。"
    },
    {
      name: "充填布偶",
      nameJp: "めいぐるみ",
      category: "冒險者道具",
      type: "道具",
      price: "30 G~",
      summary: "S尺寸 30G / M尺寸 50G / L尺寸 75G",
      effect: "棉花或絨毛充填布偶（S尺寸 30 G、M尺寸 50 G、L尺寸 75 G）。"
    },
    {
      name: "掃帚",
      nameJp: "ほうき",
      category: "冒險者道具",
      type: "道具",
      usage: "2H",
      price: "30 G~",
      summary: "長柄打掃用掃帚",
      effect: "環境打掃與清潔用的雙手長柄掃帚。"
    },
    {
      name: "放大鏡",
      nameJp: "虫眼鏡",
      category: "冒險者道具",
      type: "道具",
      usage: "1H",
      price: "100 G",
      summary: "細部觀察放大鏡頭",
      effect: "用於細微遺跡文字、痕跡或物品構造觀察的放大鏡。"
    },
    {
      name: "沙漏",
      nameJp: "砂時計",
      category: "冒險者道具",
      type: "道具",
      price: "120 G~",
      summary: "可精確計時 3分鐘",
      effect: "用於時間監測與計算的精密沙漏（可精確計時 3 分鐘）。"
    },
    {
      name: "茶具組",
      nameJp: "ティーセット",
      category: "冒險者道具",
      type: "道具",
      usage: "2H",
      price: "60 G~",
      summary: "茶壺、濾茶器、杯子 4個",
      effect: "優雅飲茶的套組（含茶壺、濾茶器與 4 個茶杯）。"
    },
    {
      name: "化妝品組合",
      nameJp: "化粧品セット",
      category: "冒險者道具",
      type: "道具",
      usage: "1H",
      price: "100 G~",
      summary: "個人儀容打理化妝用品組",
      effect: "個人容姿整理、打理妝容或簡單遮瑕用的化妝品套組。"
    }
  ];

  // SW2.5 生活費、住宿餐飲、嗜好品與交通移動費用資料集
export const livingAndTransitItemsData = [
    // ==================== 1. 生活費 (自家) ====================
    {
      name: "住在自家自己煮 (1日)",
      nameJp: "自宅住まいで自炊",
      category: "冒險者道具",
      type: "生活與交通",
      price: "10 G~",
      summary: "節儉生活 10G~ / 體面生活 30G~",
      effect: "住在自家並自行料理的生活開銷。節儉生活每日約 10 G~，體面生活每日約 30 G~。"
    },
  
    // ==================== 2. 住宿費 ====================
    {
      name: "住宿不含餐 (1日)",
      nameJp: "素泊まり(1日)",
      category: "冒險者道具",
      type: "生活與交通",
      price: "15 G~",
      summary: "馬廄角落 15G / 標準房 30G / 套房 100G",
      effect: "不含餐點的單日住宿費用。馬廄角落 15 G~，標準房間 30 G~，高級套房 100 G~。"
    },
    {
      name: "住宿不含餐 (1週)",
      nameJp: "素泊まり(1週間)",
      category: "冒險者道具",
      type: "生活與交通",
      price: "150 G~",
      summary: "週租預付優惠 (餐費另計，標準房約 150G)",
      effect: "不含餐點的整週預付住宿費用。標準房間約 150 G~（餐費需另計）。"
    },
  
    // ==================== 3. 餐費與飲品 ====================
    {
      name: "麥酒",
      nameJp: "エール",
      category: "冒險者道具",
      type: "消耗品",
      price: "1 G~",
      summary: "單杯 1G~ / 1桶 300G~",
      effect: "酒館常見的麥酒。單杯 1 G~，一整桶 300 G~。"
    },
    {
      name: "葡萄酒",
      nameJp: "ワイン",
      category: "冒險者道具",
      type: "消耗品",
      price: "2 G~",
      summary: "單杯 2G~ / 1瓶 20G~",
      effect: "發酵釀造葡萄酒。單杯 2 G~，單瓶 20 G~。"
    },
    {
      name: "蒸餾酒",
      nameJp: "蒸留酒",
      category: "冒險者道具",
      type: "消耗品",
      price: "3 G~",
      summary: "單杯 3G~ / 1瓶 30G~",
      effect: "高烈度蒸餾酒。單杯 3 G~，單瓶 30 G~。"
    },
    {
      name: "一餐",
      nameJp: "食事(1食分)",
      category: "冒險者道具",
      type: "消耗品",
      price: "3 G~",
      summary: "輕食 3G / 午餐 8G / 晚餐 15G",
      effect: "酒館或旅店的單餐費用。輕食約 3 G~，豐富午餐約 8 G~，正式晚餐約 15 G~。"
    },
    {
      name: "保存食 (1日分)",
      nameJp: "保存食(1日)",
      category: "冒險者道具",
      type: "消耗品",
      price: "10 G~",
      summary: "野外遠征肉乾、果乾攜帶糧食",
      effect: "適合野外探險與遠征攜帶的肉乾、乾果等保存食品（單日份）。"
    },
    {
      name: "保存食 (1週分)",
      nameJp: "保存食(1週間分)",
      category: "冒險者道具",
      type: "消耗品",
      price: "50 G~",
      summary: "一週份遠征經濟包糧食",
      effect: "一週份量的野外攜帶保存糧食經濟組合。"
    },
    {
      name: "營養膠囊",
      nameJp: "営養カプセル",
      category: "冒險者道具",
      type: "消耗品",
      price: "100 G~",
      summary: "符民專用 食用1顆可1週不進食",
      effect: "符民（Runefolk）專用濃縮營養膠囊。食用 1 顆後可維持整整 1 週無需額外進食。"
    },
  
    // ==================== 4. 嗜好品 ====================
    {
      name: "菸草絲",
      nameJp: "刻み煙草",
      category: "冒險者道具",
      type: "消耗品",
      price: "10 G~",
      summary: "菸斗/煙管專用細絲菸草 (約 10 次份量)",
      effect: "供菸斗或煙管使用的切絲菸草，單份約可吸用 10 次。"
    },
    {
      name: "菸草卷 (12支)",
      nameJp: "巻き煙草",
      category: "冒險者道具",
      type: "消耗品",
      price: "24 G~",
      summary: "捲菸 12支裝 (單支 2 G)",
      effect: "捲好的單支菸草，一組 12 支。"
    },
    {
      name: "菸斗/煙管",
      nameJp: "パイプ/煙管",
      category: "冒險者道具",
      type: "道具",
      usage: "1H",
      price: "75 G~",
      summary: "吸用菸草器具",
      effect: "品嚐與吸用切絲菸草的個人器具。"
    },
    {
      name: "鐵煙管",
      nameJp: "鉄煙管",
      category: "冒險者道具",
      type: "道具/武器",
      usage: "1H",
      price: "225 G (+20名譽點)",
      summary: "堅固鐵製煙管 可當<小錘>(釘頭錘B階/投擲B階)武器使用",
      effect: "名譽物品。質地極致堅固的金屬鐵煙管，緊急戰鬥時可直接當作《小錘》（釘頭錘 B 階級 / 投擲 B 階級）武器使用。"
    },
  
    // ==================== 5. 移動與交通費用 ====================
    {
      name: "共乘馬車運費",
      nameJp: "乗合馬車",
      category: "冒險者道具",
      type: "生活與交通",
      price: "10 G~",
      summary: "1小時行程 10G (長距離每追加1小時+5G)",
      effect: "公共共乘馬車搭乘費用。1 小時車程基礎費 10 G，長途路線每多 1 小時 +5 G。"
    },
    {
      name: "魔動列車運費",
      nameJp: "魔動列車運賃",
      category: "冒險者道具",
      type: "生活與交通",
      price: "20 G~",
      summary: "1~2小時行程 二等包廂 20G / 一等包廂 50G",
      effect: "搭乘魔動列車的票價（1~2 小時行程）。二等包廂約 20 G~，一等包廂約 50 G~。"
    },
    {
      name: "飛船運費",
      nameJp: "飛空船運賃",
      category: "冒險者道具",
      type: "生活與交通",
      price: "500 G~",
      summary: "按日計價運費 船室為獨立個室或少數人共用",
      effect: "搭乘飛船的單日運費。船室基本上為獨立獨立房或少數人共用艙房。"
    },
    {
      name: "包馬車 (1日)",
      nameJp: "荷馬車チャーター",
      category: "冒險者道具",
      type: "生活與交通",
      price: "500 G~",
      summary: "含車夫單日包車 (1人乘500G / 2人乘750G / 4人乘1000G，多日需負擔車夫餐費)",
      effect: "包含車夫的 1 日私人包車服務。1 人乘 500 G、2 人乘 750 G、4 人乘 1000 G。若為多日行程需額外負擔馬車夫的餐費。"
    },
    {
      name: "包小型飛船 (1日)",
      nameJp: "小型飛空船チャーター",
      category: "冒險者道具",
      type: "生活與交通",
      price: "20000 G~",
      summary: "含 1名駕駛操控之單日租用 (包含駕駛餐費)",
      effect: "包含 1 名專業機師操作的 1 日小型飛船包船服務（包含機師的餐費，不提供無人單獨租借）。"
    }
  ];