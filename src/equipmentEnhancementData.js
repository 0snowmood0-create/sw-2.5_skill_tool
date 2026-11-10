export const equipmentEnhancementContent = `
<div class="space-y-6">
    <!-- 頁頭標題卡片 -->
    <div class="bg-zinc-900/90 border border-amber-500/30 rounded-xl p-5 shadow-lg">
        <div class="flex items-center gap-3 mb-2">
            <div class="p-2.5 bg-amber-500/10 rounded-lg text-amber-400">
                <i class="fa-solid fa-hammer text-2xl"></i>
            </div>
            <div>
                <h2 class="text-xl font-bold text-amber-400 tracking-wider">SW2.5 武器與防具的改善與強化 (裝備強化)</h2>
                <p class="text-xs text-zinc-400">包含訂製武器、銀製武器、魔法強化、妖精武器、伊格尼斯加工、深淵強化與詛咒表等完整規則。</p>
            </div>
        </div>
    </div>

    <!-- 1. 武器的改善與強化 -->
    <div class="bg-zinc-900 border border-zinc-800 rounded-xl p-5 space-y-4 shadow-md">
        <div class="flex items-center gap-2 border-b border-zinc-800 pb-3">
            <span class="text-xs px-2.5 py-1 rounded bg-amber-950 text-amber-300 border border-amber-800 font-bold">Weapon Upgrades</span>
            <h3 class="text-lg font-bold text-amber-400">武器的改善與強化 (Weapon Enhancement)</h3>
        </div>

        <div class="space-y-4 text-xs text-zinc-300">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
                <!-- 訂製武器 -->
                <div class="bg-zinc-950 p-3.5 rounded-lg border border-zinc-800 space-y-1.5">
                    <h4 class="font-bold text-amber-300 text-sm flex items-center">
                        <i class="fa-solid fa-sliders mr-1.5"></i>訂製武器 (オーダーメイド武器)
                    </h4>
                    <p class="leading-relaxed">
                        調整武器必要筋力以提高/降低威力。必要筋力調整範圍為 <strong>+3 ～ -3</strong>（最低不得低於 1）。〈槍〉(Gun)類無法訂製。
                    </p>
                    <p class="text-zinc-400 text-[11px]">
                        • <strong>費用：</strong> 依調整筋力值計算（每 ±1 加價一次）。現有武器調整需 1 週時間。<br>
                        • <strong>名稱：</strong> 可自由命名或加上「・客製化（カスタム）」後綴。
                    </p>
                </div>

                <!-- 銀製武器 -->
                <div class="bg-zinc-950 p-3.5 rounded-lg border border-zinc-800 space-y-1.5">
                    <h4 class="font-bold text-slate-300 text-sm flex items-center">
                        <i class="fa-solid fa-coins mr-1.5 text-slate-400"></i>銀製武器 (銀製武器)
                    </h4>
                    <p class="leading-relaxed">
                        無視部分魔物之［○通常武器無效］，並可對以銀為弱點之魔物造成額外傷害。
                    </p>
                    <p class="text-zinc-400 text-[11px]">
                        • <strong>限制：</strong> 需購買新品，<strong>無法將現有武器改鍛為銀製</strong>。本身已有「銀製」註記或非銀質武器不可疊加。<br>
                        • <strong>名稱：</strong> 冠上「銀之（銀の）」或「Silver（シルバー）」。
                    </p>
                </div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-3">
                <!-- 魔法之武器+1 -->
                <div class="bg-zinc-950 p-3.5 rounded-lg border border-zinc-800 space-y-1.5">
                    <h4 class="font-bold text-cyan-300 text-sm flex items-center">
                        <i class="fa-solid fa-wand-magic-sparkles mr-1.5"></i>魔法之武器+1
                    </h4>
                    <p class="leading-relaxed">
                        命中力判定 <strong>+1</strong>，追加傷害 <strong>+1</strong>，視為魔法武器。
                    </p>
                    <p class="text-zinc-400 text-[11px]">
                        • <strong>限制：</strong> SS Rank 武器無法施加。現有武器強化需 1 個月。不可重複施加。<br>
                        • <strong>共存順序：</strong> 需先施加「+1」才能再進行「妖精武器」或「伊格尼斯加工」。
                    </p>
                </div>

                <!-- 妖精之武器 -->
                <div class="bg-zinc-950 p-3.5 rounded-lg border border-zinc-800 space-y-1.5">
                    <h4 class="font-bold text-emerald-300 text-sm flex items-center">
                        <i class="fa-solid fa-leaf mr-1.5"></i>妖精之武器 (妖精の武器)
                    </h4>
                    <p class="leading-relaxed">
                        輔助動作詠唱暗號可賦予傷害屬性（土/水·冰/炎/風/雷），亦可作為魔法武器擊中［○通常武器無效］敵方。
                    </p>
                    <p class="text-zinc-400 text-[11px]">
                        • <strong>時間與疊加：</strong> 單次加工需 1 個月。可多重強化屬性（每次增1種，切換暗號改變當前屬性）。
                    </p>
                </div>

                <!-- 伊格尼斯加工 -->
                <div class="bg-zinc-950 p-3.5 rounded-lg border border-zinc-800 space-y-1.5">
                    <h4 class="font-bold text-red-400 text-sm flex items-center">
                        <i class="fa-solid fa-fire-flame-curved mr-1.5"></i>伊格尼斯加工 (イグニダイト加工)
                    </h4>
                    <p class="leading-relaxed">
                        視為魔法武器。武器威力 <strong>+5</strong>（SS Rank 武器威力 <strong>+10</strong>）。
                    </p>
                    <p class="text-zinc-400 text-[11px]">
                        • <strong>條件：</strong> 需消耗 100 點名聲點，並擁有黑矮人鍛造師關係。需 1 週時間，無法重複加工。
                    </p>
                </div>
            </div>

            <!-- 武器強化價格表 -->
            <div class="space-y-2">
                <h4 class="font-bold text-amber-400 text-xs flex items-center">
                    <i class="fa-solid fa-table mr-1.5"></i>武器強化價格對照表 (單位：G)
                </h4>
                <div class="overflow-x-auto rounded-lg border border-zinc-800 bg-zinc-950">
                    <table class="w-full text-left text-xs text-zinc-300">
                        <thead class="bg-zinc-900 text-amber-400 font-bold border-b border-zinc-800">
                            <tr>
                                <th class="p-2 border-r border-zinc-800">強化名稱</th>
                                <th class="p-2 border-r border-zinc-800 text-center">B Rank</th>
                                <th class="p-2 border-r border-zinc-800 text-center">A Rank</th>
                                <th class="p-2 border-r border-zinc-800 text-center">S Rank</th>
                                <th class="p-2 text-center">SS Rank</th>
                            </tr>
                        </thead>
                        <tbody class="divide-y divide-zinc-800/60 font-mono text-[11px]">
                            <tr class="hover:bg-zinc-900/40"><td class="p-2 border-r border-zinc-800 font-sans font-bold text-amber-300">訂製武器 (每 ±1 筋力)</td><td class="p-2 border-r border-zinc-800 text-center">300</td><td class="p-2 border-r border-zinc-800 text-center">1,000</td><td class="p-2 border-r border-zinc-800 text-center">3,000</td><td class="p-2 text-center">6,000</td></tr>
                            <tr class="hover:bg-zinc-900/40"><td class="p-2 border-r border-zinc-800 font-sans font-bold text-slate-300">銀製武器</td><td class="p-2 border-r border-zinc-800 text-center">1,000</td><td class="p-2 border-r border-zinc-800 text-center">2,000</td><td class="p-2 border-r border-zinc-800 text-center">4,000</td><td class="p-2 text-center">6,000</td></tr>
                            <tr class="hover:bg-zinc-900/40"><td class="p-2 border-r border-zinc-800 font-sans font-bold text-cyan-300">魔法之武器+1</td><td class="p-2 border-r border-zinc-800 text-center">5,000</td><td class="p-2 border-r border-zinc-800 text-center">10,000</td><td class="p-2 border-r border-zinc-800 text-center">20,000</td><td class="p-2 text-center text-zinc-600">－</td></tr>
                            <tr class="hover:bg-zinc-900/40"><td class="p-2 border-r border-zinc-800 font-sans font-bold text-emerald-300">妖精之武器 (每1屬性)</td><td class="p-2 border-r border-zinc-800 text-center">1,500</td><td class="p-2 border-r border-zinc-800 text-center">3,000</td><td class="p-2 border-r border-zinc-800 text-center">6,000</td><td class="p-2 text-center">9,000</td></tr>
                            <tr class="hover:bg-zinc-900/40"><td class="p-2 border-r border-zinc-800 font-sans font-bold text-red-400">伊格尼斯加工</td><td class="p-2 border-r border-zinc-800 text-center">5,000</td><td class="p-2 border-r border-zinc-800 text-center">10,000</td><td class="p-2 border-r border-zinc-800 text-center">20,000</td><td class="p-2 text-center">40,000</td></tr>
                            <tr class="hover:bg-zinc-900/40"><td class="p-2 border-r border-zinc-800 font-sans font-bold text-purple-300">深淵強化 (每次)</td><td class="p-2 border-r border-zinc-800 text-center">2,000</td><td class="p-2 border-r border-zinc-800 text-center">4,000</td><td class="p-2 border-r border-zinc-800 text-center">8,000</td><td class="p-2 text-center">12,000</td></tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>

    <!-- 2. 防具的改善與強化 -->
    <div class="bg-zinc-900 border border-zinc-800 rounded-xl p-5 space-y-4 shadow-md">
        <div class="flex items-center gap-2 border-b border-zinc-800 pb-3">
            <span class="text-xs px-2.5 py-1 rounded bg-blue-950 text-blue-300 border border-blue-800 font-bold">Armor Upgrades</span>
            <h3 class="text-lg font-bold text-amber-400">防具的改善與強化 (Armor Enhancement)</h3>
        </div>

        <div class="space-y-4 text-xs text-zinc-300">
            <div class="grid grid-cols-1 md:grid-cols-3 gap-3">
                <!-- 魔法之鎧+1 -->
                <div class="bg-zinc-950 p-3.5 rounded-lg border border-zinc-800 space-y-1.5">
                    <h4 class="font-bold text-blue-300 text-sm flex items-center">
                        <i class="fa-solid fa-shield-cat mr-1.5"></i>魔法之鎧+1
                    </h4>
                    <p class="leading-relaxed">
                        防護點 <strong>+1</strong>。僅限鎧甲類（非金屬鎧/金屬鎧），盾牌無法施加。
                    </p>
                    <p class="text-zinc-400 text-[11px]">
                        • <strong>限制：</strong> SS Rank 無法施加。加工時間需 1 個月，不可重複施加。
                    </p>
                </div>

                <!-- 防彈加工之鎧 -->
                <div class="bg-zinc-950 p-3.5 rounded-lg border border-zinc-800 space-y-1.5">
                    <h4 class="font-bold text-orange-300 text-sm flex items-center">
                        <i class="fa-solid fa-shield-halved mr-1.5"></i>防彈加工之鎧 (防弾加工の鎧)
                    </h4>
                    <p class="leading-relaxed">
                        減免來自〈槍〉(Gun) 或魔力之矢/太矢射擊攻擊之傷害。
                    </p>
                    <p class="text-zinc-400 text-[11px]">
                        • <strong>限制：</strong> 上限可發揮 <strong>6 次</strong> 減免效果，之後需支付費用給魔動機協會修理（每 1 次修復需 1 天）。加工需 1 週。
                    </p>
                </div>

                <!-- 魔晶石(Mana-tite)追加裝甲 -->
                <div class="bg-zinc-950 p-3.5 rounded-lg border border-zinc-800 space-y-1.5">
                    <h4 class="font-bold text-emerald-300 text-sm flex items-center">
                        <i class="fa-solid fa-layer-group mr-1.5"></i>魔晶石追加裝甲 (マナタイトの追加装甲)
                    </h4>
                    <p class="leading-relaxed">
                        必要筋力 <strong>+3</strong>，防護點 <strong>+1</strong>。
                    </p>
                    <p class="text-zinc-400 text-[11px]">
                        • <strong>對象：</strong> 僅限〈金屬鎧〉或〈盾〉。加工需 1 週，不可重複施加。
                    </p>
                </div>
            </div>

            <!-- 防具強化價格表 -->
            <div class="space-y-2">
                <h4 class="font-bold text-amber-400 text-xs flex items-center">
                    <i class="fa-solid fa-table mr-1.5"></i>防具強化價格對照表 (單位：G)
                </h4>
                <div class="overflow-x-auto rounded-lg border border-zinc-800 bg-zinc-950">
                    <table class="w-full text-left text-xs text-zinc-300">
                        <thead class="bg-zinc-900 text-amber-400 font-bold border-b border-zinc-800">
                            <tr>
                                <th class="p-2 border-r border-zinc-800">強化名稱</th>
                                <th class="p-2 border-r border-zinc-800 text-center">B Rank</th>
                                <th class="p-2 border-r border-zinc-800 text-center">A Rank</th>
                                <th class="p-2 border-r border-zinc-800 text-center">S Rank</th>
                                <th class="p-2 text-center">SS Rank</th>
                            </tr>
                        </thead>
                        <tbody class="divide-y divide-zinc-800/60 font-mono text-[11px]">
                            <tr class="hover:bg-zinc-900/40"><td class="p-2 border-r border-zinc-800 font-sans font-bold text-blue-300">魔法之鎧+1 (鎧甲限定)</td><td class="p-2 border-r border-zinc-800 text-center">5,000</td><td class="p-2 border-r border-zinc-800 text-center">10,000</td><td class="p-2 border-r border-zinc-800 text-center">20,000</td><td class="p-2 text-center text-zinc-600">－</td></tr>
                            <tr class="hover:bg-zinc-900/40"><td class="p-2 border-r border-zinc-800 font-sans font-bold text-orange-300">防彈加工之鎧 (非金屬/金屬鎧)</td><td class="p-2 border-r border-zinc-800 text-center">1,500</td><td class="p-2 border-r border-zinc-800 text-center">3,000</td><td class="p-2 border-r border-zinc-800 text-center">6,000</td><td class="p-2 text-center">9,000</td></tr>
                            <tr class="hover:bg-zinc-900/40"><td class="p-2 border-r border-zinc-800 font-sans font-bold text-emerald-300">魔晶石追加裝甲 (金屬鎧/盾)</td><td class="p-2 border-r border-zinc-800 text-center">5,000</td><td class="p-2 border-r border-zinc-800 text-center">10,000</td><td class="p-2 border-r border-zinc-800 text-center">20,000</td><td class="p-2 text-center">30,000</td></tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>

    <!-- 3. 深淵強化 (Abyss Enhancement) 完整機制與清單 -->
    <div class="bg-zinc-900 border border-zinc-800 rounded-xl p-5 space-y-4 shadow-md">
        <div class="flex items-center gap-2 border-b border-zinc-800 pb-3">
            <span class="text-xs px-2.5 py-1 rounded bg-purple-950 text-purple-300 border border-purple-800 font-bold">Abyss Enhancement</span>
            <h3 class="text-lg font-bold text-amber-400">深淵強化 (Abyss Enhancement) 與 深淵詛咒 (Abyss Curse)</h3>
        </div>

        <div class="space-y-4 text-xs text-zinc-300">
            <!-- 流程與限制 -->
            <div class="bg-zinc-950 p-4 rounded-lg border border-purple-900/30 space-y-2">
                <h4 class="font-bold text-purple-300 text-sm flex items-center">
                    <i class="fa-solid fa-skull-crossbones mr-1.5"></i>深淵強化步驟與規則限制
                </h4>
                <p class="leading-relaxed">
                    透過注入〈深淵碎片（アビスシャード）〉增強裝備性能。經過深淵強化的裝備自動視為<strong>魔法裝備</strong>。
                </p>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-2 text-zinc-400 pt-1">
                    <p>• <strong>上限與限制：</strong> 每件裝備最多強化 <strong>2 次</strong>（不可選擇相同項目）。</p>
                    <p>• <strong>代價：</strong> 第 1 次需 <strong>3 個碎片 + 強化費用</strong>；第 2 次需 <strong>6 個碎片 + 強化費用</strong>。加工需 1 天。</p>
                    <p>• <strong>詛咒產生：</strong> 每次強化需擲骰決定副作用「深淵詛咒 (アビスカース)」。</p>
                    <p>• <strong>重擲詛咒：</strong> 可消耗 <strong>3 個碎片</strong>（若有2個詛咒重擲1個）或 <strong>6 個碎片</strong> 再次擲骰重洗詛咒（花費1天）。</p>
                </div>
            </div>

            <!-- 可選擇的強化效果清單 -->
            <div class="space-y-3">
                <h4 class="font-bold text-amber-400 text-xs flex items-center">
                    <i class="fa-solid fa-list-check mr-1.5"></i>深淵強化效果可選清單 (武器 / 鎧甲 / 盾)
                </h4>

                <div class="grid grid-cols-1 md:grid-cols-3 gap-3">
                    <!-- 武器專用 -->
                    <div class="bg-zinc-950 p-3 rounded-lg border border-zinc-800 space-y-1 text-[11px]">
                        <span class="text-amber-300 font-bold block mb-1">⚔️ 武器 (Weapon) 專用</span>
                        <p>• <strong>命中力+1：</strong> 命中判定 +1。</p>
                        <p>• <strong>追加傷害+1：</strong> 武器物理/魔法追加傷害 +1。</p>
                        <p>• <strong>必要筋力-2：</strong> 必力 -2（威力不變，最低不小於1）。</p>
                        <p>• <strong>C值-1：</strong> 爆擊值 -1（最低不可低於 7）。</p>
                        <p>• <strong>特定分類傷害+2：</strong> 對特定分類魔物追加傷害 +2（自選1分類）。</p>
                        <p>• <strong>特定屬性傷害+1：</strong> 對特定屬性追加傷害 +1（自選1屬性）。</p>
                        <p>• <strong>魔法行使達成值+1：</strong> 作為發動體時，真語/操靈魔法行使達成值 +1。</p>
                        <p>• <strong>魔法傷害+1：</strong> 作為發動體施放瞬間魔法時傷害 +1。</p>
                        <p>• <strong>魔法回復量+1：</strong> 作為發動體施放瞬間回復魔法時回復量 +1。</p>
                    </div>

                    <!-- 鎧甲專用 -->
                    <div class="bg-zinc-950 p-3 rounded-lg border border-zinc-800 space-y-1 text-[11px]">
                        <span class="text-blue-300 font-bold block mb-1">🛡️ 鎧甲 (Armor) 專用</span>
                        <p>• <strong>防護點+1：</strong> 鎧甲防護點 +1。</p>
                        <p>• <strong>必要筋力-2：</strong> 必力 -2（最低不小於1）。</p>
                        <p>• <strong>魔法傷害1點減少：</strong> 承受魔法傷害時 -1。</p>
                        <p>• <strong>特定分類防護點+2：</strong> 受到特定分類魔物物理傷害時防護點視為 +2。</p>
                        <p>• <strong>特定屬性傷害2點減少：</strong> 受到特定屬性物理/魔法傷害時 -2。</p>
                        <p>• <strong>判定套件強化：</strong> 指定［技巧/運動/觀察/知識］1種，對應判定達成值 +1。</p>
                    </div>

                    <!-- 盾專用 -->
                    <div class="bg-zinc-950 p-3 rounded-lg border border-zinc-800 space-y-1 text-[11px]">
                        <span class="text-emerald-300 font-bold block mb-1">🛡️ 盾 (Shield) 專用</span>
                        <p>• <strong>防護點+1：</strong> 盾防護點 +1。</p>
                        <p>• <strong>迴避力+1：</strong> 盾迴避力修正 +1。</p>
                        <p>• <strong>必要筋力-2：</strong> 必力 -2（最低不小於1）。</p>
                        <p>• <strong>魔法傷害1點減少：</strong> 承受魔法傷害時 -1。</p>
                        <p>• <strong>特定分類防護點+2：</strong> 受到特定分類魔物物理傷害時防護點視為 +2。</p>
                        <p>• <strong>特定屬性傷害2點減少：</strong> 受到特定屬性物理/魔法傷害時 -2。</p>
                    </div>
                </div>
            </div>

            <!-- 分類對照表與屬性對照表 -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2">
                <div class="space-y-1">
                    <span class="text-amber-400 font-bold block text-xs"><i class="fa-solid fa-layer-group mr-1"></i>分類決定表 (2d)</span>
                    <div class="overflow-x-auto rounded border border-zinc-800 bg-zinc-950 text-[11px]">
                        <table class="w-full text-left text-zinc-300">
                            <tbody class="divide-y divide-zinc-800/60 font-mono">
                                <tr><td class="p-1.5 font-bold text-amber-300 text-center w-12">1-1</td><td class="p-1.5">蠻族</td><td class="p-1.5 font-bold text-amber-300 text-center w-12">2-1</td><td class="p-1.5">魔動機</td></tr>
                                <tr><td class="p-1.5 font-bold text-amber-300 text-center">1-2</td><td class="p-1.5">動物</td><td class="p-1.5 font-bold text-amber-300 text-center">2-2</td><td class="p-1.5">幻獸</td></tr>
                                <tr><td class="p-1.5 font-bold text-amber-300 text-center">1-3</td><td class="p-1.5">植物</td><td class="p-1.5 font-bold text-amber-300 text-center">2-3</td><td class="p-1.5">妖精</td></tr>
                                <tr><td class="p-1.5 font-bold text-amber-300 text-center">1-4</td><td class="p-1.5">不死族 (Undead)</td><td class="p-1.5 font-bold text-amber-300 text-center">2-4</td><td class="p-1.5">魔神</td></tr>
                                <tr><td class="p-1.5 font-bold text-amber-300 text-center">1-5</td><td class="p-1.5">魔法生物</td><td class="p-1.5 font-bold text-amber-300 text-center">2-5</td><td class="p-1.5">人族</td></tr>
                                <tr><td class="p-1.5 font-bold text-amber-300 text-center">1-6</td><td class="p-1.5 text-zinc-400">蠻族/動物/植物/不死族/魔法生物 (任選1)</td><td class="p-1.5 font-bold text-amber-300 text-center">2-6</td><td class="p-1.5 text-zinc-400">魔動機/幻獸/妖精/魔神/人族 (任選1)</td></tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <div class="space-y-1">
                    <span class="text-amber-400 font-bold block text-xs"><i class="fa-solid fa-wand-sparkles mr-1"></i>屬性決定表 (2d)</span>
                    <div class="overflow-x-auto rounded border border-zinc-800 bg-zinc-950 text-[11px]">
                        <table class="w-full text-left text-zinc-300">
                            <tbody class="divide-y divide-zinc-800/60 font-mono">
                                <tr><td class="p-1.5 font-bold text-amber-300 text-center w-12">1-1</td><td class="p-1.5">土</td><td class="p-1.5 font-bold text-amber-300 text-center w-12">2-1</td><td class="p-1.5">斷空</td></tr>
                                <tr><td class="p-1.5 font-bold text-amber-300 text-center">1-2</td><td class="p-1.5">水・冰</td><td class="p-1.5 font-bold text-amber-300 text-center">2-2</td><td class="p-1.5">衝擊</td></tr>
                                <tr><td class="p-1.5 font-bold text-amber-300 text-center">1-3</td><td class="p-1.5">炎</td><td class="p-1.5 font-bold text-amber-300 text-center">2-3</td><td class="p-1.5">毒</td></tr>
                                <tr><td class="p-1.5 font-bold text-amber-300 text-center">1-4</td><td class="p-1.5">風</td><td class="p-1.5 font-bold text-amber-300 text-center">2-4</td><td class="p-1.5">病氣</td></tr>
                                <tr><td class="p-1.5 font-bold text-amber-300 text-center">1-5</td><td class="p-1.5">雷</td><td class="p-1.5 font-bold text-amber-300 text-center">2-5</td><td class="p-1.5">詛咒</td></tr>
                                <tr><td class="p-1.5 font-bold text-amber-300 text-center">1-6</td><td class="p-1.5">純能量</td><td class="p-1.5 font-bold text-amber-300 text-center">2-6</td><td class="p-1.5">精神效果</td></tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            <!-- 完整深淵詛咒表 (アビスカース表) -->
            <div class="space-y-2 pt-2">
                <h4 class="font-bold text-red-400 text-xs flex items-center justify-between">
                    <span><i class="fa-solid fa-skull mr-1.5"></i>深淵詛咒表 (アビスカース表 - 1d 擲 2 次)</span>
                </h4>
                <div class="overflow-x-auto rounded-lg border border-zinc-800 bg-zinc-950">
                    <table class="w-full text-left text-xs text-zinc-300">
                        <thead class="bg-zinc-900 text-amber-400 font-bold border-b border-zinc-800">
                            <tr>
                                <th class="p-2 border-r border-zinc-800 text-center w-14">出目</th>
                                <th class="p-2 border-r border-zinc-800 w-28">詛咒名稱</th>
                                <th class="p-2 border-r border-zinc-800 text-center w-20">發動時機</th>
                                <th class="p-2">詛咒效果</th>
                            </tr>
                        </thead>
                        <tbody class="divide-y divide-zinc-800/60 font-mono text-[11px]">
                            <tr class="hover:bg-zinc-900/40"><td class="p-2 border-r border-zinc-800 text-center font-bold text-amber-300">1-1</td><td class="p-2 border-r border-zinc-800 font-sans font-bold">「自傷の」</td><td class="p-2 border-r border-zinc-800 text-center font-sans text-amber-300">裝備時</td><td class="p-2 font-sans">裝備中發生爆擊(Critical)時，裝備者受到 5 點 HP 傷害。</td></tr>
                            <tr class="hover:bg-zinc-900/40"><td class="p-2 border-r border-zinc-800 text-center font-bold text-amber-300">1-2</td><td class="p-2 border-r border-zinc-800 font-sans font-bold">「嘆きの」</td><td class="p-2 border-r border-zinc-800 text-center font-sans text-amber-300">裝備時</td><td class="p-2 font-sans">接近敵人或緊張狀態時眼淚流不停。戰鬥中無法選擇［射程:術者］［射程:接觸］以外的對象。</td></tr>
                            <tr class="hover:bg-zinc-900/40"><td class="p-2 border-r border-zinc-800 text-center font-bold text-amber-300">1-3</td><td class="p-2 border-r border-zinc-800 font-sans font-bold">「優しき」</td><td class="p-2 border-r border-zinc-800 text-center font-sans text-amber-300">裝備時</td><td class="p-2 font-sans">容易同情敵人。對象為敵對角色且其 HP 減少 1 以上時，命中力與魔法行使判定承受 -2 修正。</td></tr>
                            <tr class="hover:bg-zinc-900/40"><td class="p-2 border-r border-zinc-800 text-center font-bold text-amber-300">1-4</td><td class="p-2 border-r border-zinc-800 font-sans font-bold">「差別の」</td><td class="p-2 border-r border-zinc-800 text-center font-sans text-amber-300">裝備時</td><td class="p-2 font-sans">對特定分類造成之物理/魔法傷害減少 2 點（分類隨機決定）。</td></tr>
                            <tr class="hover:bg-zinc-900/40"><td class="p-2 border-r border-zinc-800 text-center font-bold text-amber-300">1-5</td><td class="p-2 border-r border-zinc-800 font-sans font-bold">「脆弱な」</td><td class="p-2 border-r border-zinc-800 text-center font-sans text-amber-300">裝備時</td><td class="p-2 font-sans">受到魔法傷害時，傷害值 +1 點。</td></tr>
                            <tr class="hover:bg-zinc-900/40"><td class="p-2 border-r border-zinc-800 text-center font-bold text-amber-300">1-6</td><td class="p-2 border-r border-zinc-800 font-sans font-bold">「無謀な」</td><td class="p-2 border-r border-zinc-800 text-center font-sans text-amber-300">裝備時</td><td class="p-2 font-sans">防護點減少 2 點（最低可降至 0）。</td></tr>
                            <tr class="hover:bg-zinc-900/40"><td class="p-2 border-r border-zinc-800 text-center font-bold text-amber-300">2-1</td><td class="p-2 border-r border-zinc-800 font-sans font-bold">「重い」</td><td class="p-2 border-r border-zinc-800 text-center font-sans text-amber-300">裝備時</td><td class="p-2 font-sans">必要筋力 +2 點（威力與防護點不變）。</td></tr>
                            <tr class="hover:bg-zinc-900/40"><td class="p-2 border-r border-zinc-800 text-center font-bold text-amber-300">2-2</td><td class="p-2 border-r border-zinc-800 font-sans font-bold">「難しい」</td><td class="p-2 border-r border-zinc-800 text-center font-sans text-amber-300">裝備時</td><td class="p-2 font-sans">使用任何威力表時，點數③④的數值強制視為「0」（非自動失敗）。</td></tr>
                            <tr class="hover:bg-zinc-900/40"><td class="p-2 border-r border-zinc-800 text-center font-bold text-amber-300">2-3</td><td class="p-2 border-r border-zinc-800 font-sans font-bold">「軟弱な」</td><td class="p-2 border-r border-zinc-800 text-center font-sans text-amber-300">裝備時</td><td class="p-2 font-sans">精神抵抗力判定承受 -1 懲罰修正。</td></tr>
                            <tr class="hover:bg-zinc-900/40"><td class="p-2 border-r border-zinc-800 text-center font-bold text-amber-300">2-4</td><td class="p-2 border-r border-zinc-800 font-sans font-bold">「病弱な」</td><td class="p-2 border-r border-zinc-800 text-center font-sans text-amber-300">裝備時</td><td class="p-2 font-sans">生命抵抗力判定承受 -1 懲罰修正。</td></tr>
                            <tr class="hover:bg-zinc-900/40"><td class="p-2 border-r border-zinc-800 text-center font-bold text-amber-300">2-5</td><td class="p-2 border-r border-zinc-800 font-sans font-bold">「過敏な」</td><td class="p-2 border-r border-zinc-800 text-center font-sans text-amber-300">裝備時</td><td class="p-2 font-sans">受到特定屬性之物理/魔法傷害上升 2 點（屬性隨機決定）。</td></tr>
                            <tr class="hover:bg-zinc-900/40"><td class="p-2 border-r border-zinc-800 text-center font-bold text-amber-300">2-6</td><td class="p-2 border-r border-zinc-800 font-sans font-bold">「陽気な」</td><td class="p-2 border-r border-zinc-800 text-center font-sans text-amber-300">裝備時</td><td class="p-2 font-sans">精神抵抗失敗時會笑個不停。直到下一手番結束前所有行動判定承受 -1 懲罰（可累積）。</td></tr>
                            <tr class="hover:bg-zinc-900/40"><td class="p-2 border-r border-zinc-800 text-center font-bold text-amber-300">3-1</td><td class="p-2 border-r border-zinc-800 font-sans font-bold">「たどたどしい」</td><td class="p-2 border-r border-zinc-800 text-center font-sans text-amber-300">裝備時</td><td class="p-2 font-sans">說話容易結巴吃字。魔法行使判定承受 -1 懲罰修正。</td></tr>
                            <tr class="hover:bg-zinc-900/40"><td class="p-2 border-r border-zinc-800 text-center font-bold text-amber-300">3-2</td><td class="p-2 border-r border-zinc-800 font-sans font-bold">「代弁する」</td><td class="p-2 border-r border-zinc-800 text-center font-sans text-amber-300">裝備時</td><td class="p-2 font-sans">對話會直接以魔法文明語發聲（極難聽懂）。裝備中無法以魔法文明語以外語言說話，亦無法行使深智/魔動機/妖精魔法。</td></tr>
                            <tr class="hover:bg-zinc-900/40"><td class="p-2 border-r border-zinc-800 text-center font-bold text-amber-300">3-3</td><td class="p-2 border-r border-zinc-800 font-sans font-bold">「施しは受けない」</td><td class="p-2 border-r border-zinc-800 text-center font-sans text-amber-300">裝備時</td><td class="p-2 font-sans">戰鬥中若接受［抵抗:任意］之效果，直到下一手番開始前生命/精神抵抗承受 -2 修正。</td></tr>
                            <tr class="hover:bg-zinc-900/40"><td class="p-2 border-r border-zinc-800 text-center font-bold text-amber-300">3-4</td><td class="p-2 border-r border-zinc-800 font-sans font-bold">「死に近い」</td><td class="p-2 border-r border-zinc-800 text-center font-sans text-emerald-400">攜行時</td><td class="p-2 font-sans text-red-300">生死判定永遠承受等同於「冒險者等級」數值之懲罰修正。</td></tr>
                            <tr class="hover:bg-zinc-900/40"><td class="p-2 border-r border-zinc-800 text-center font-bold text-amber-300">3-5</td><td class="p-2 border-r border-zinc-800 font-sans font-bold">「おしゃれな」</td><td class="p-2 border-r border-zinc-800 text-center font-sans text-emerald-400">攜行時</td><td class="p-2 font-sans">極度想裝飾此裝備。獲得收入時必須將 1 成以上花費於裝飾此裝備上。</td></tr>
                            <tr class="hover:bg-zinc-900/40"><td class="p-2 border-r border-zinc-800 text-center font-bold text-amber-300">3-6</td><td class="p-2 border-r border-zinc-800 font-sans font-bold">「マナを吸う」</td><td class="p-2 border-r border-zinc-800 text-center font-sans text-emerald-400">攜行時</td><td class="p-2 font-sans">使用魔法或練技等依自身意志消耗 MP 之效果時，MP 消耗增加 1 點。</td></tr>
                            <tr class="hover:bg-zinc-900/40"><td class="p-2 border-r border-zinc-800 text-center font-bold text-amber-300">4-1</td><td class="p-2 border-r border-zinc-800 font-sans font-bold">「鈍重な」</td><td class="p-2 border-r border-zinc-800 text-center font-sans text-emerald-400">攜行時</td><td class="p-2 font-sans">移動力減半（無條件進位）。</td></tr>
                            <tr class="hover:bg-zinc-900/40"><td class="p-2 border-r border-zinc-800 text-center font-bold text-amber-300">4-2</td><td class="p-2 border-r border-zinc-800 font-sans font-bold">「定まらない」</td><td class="p-2 border-r border-zinc-800 text-center font-sans text-emerald-400">攜行時</td><td class="p-2 font-sans">戰鬥手番開始時擲 1d，若點數為「1」，視為未習得《瞄準》及以此為前提之戰鬥特技。</td></tr>
                            <tr class="hover:bg-zinc-900/40"><td class="p-2 border-r border-zinc-800 text-center font-bold text-amber-300">4-3</td><td class="p-2 border-r border-zinc-800 font-sans font-bold">「錯乱の」</td><td class="p-2 border-r border-zinc-800 text-center font-sans text-emerald-400">攜行時</td><td class="p-2 font-sans">戰鬥手番開始時擲 1d，若為「1」，近戰攻擊或［射程:接觸］必須從同位置全角色（含敵我）隨機選對象。</td></tr>
                            <tr class="hover:bg-zinc-900/40"><td class="p-2 border-r border-zinc-800 text-center font-bold text-amber-300">4-4</td><td class="p-2 border-r border-zinc-800 font-sans font-bold">「足絡みの」</td><td class="p-2 border-r border-zinc-800 text-center font-sans text-emerald-400">攜行時</td><td class="p-2 font-sans">戰鬥手番開始時擲 1d，若為「1」當場跌倒（轉倒），且該手番內無法起身。</td></tr>
                            <tr class="hover:bg-zinc-900/40"><td class="p-2 border-r border-zinc-800 text-center font-bold text-amber-300">4-5</td><td class="p-2 border-r border-zinc-800 font-sans font-bold">「滑り落ちる」</td><td class="p-2 border-r border-zinc-800 text-center font-sans text-emerald-400">攜行時</td><td class="p-2 font-sans">戰鬥手番開始時擲 1d，若為「1」手上裝備/保持物品全掉落（需用主動作撿起）。</td></tr>
                            <tr class="hover:bg-zinc-900/40"><td class="p-2 border-r border-zinc-800 text-center font-bold text-amber-300">4-6</td><td class="p-2 border-r border-zinc-800 font-sans font-bold"> 「悪臭放つ」</td><td class="p-2 border-r border-zinc-800 text-center font-sans text-emerald-400">攜行時</td><td class="p-2 font-sans">散發惡臭。隱密判定承受 -2 懲罰；冒險者階級視為下降 1 階。</td></tr>
                            <tr class="hover:bg-zinc-900/40"><td class="p-2 border-r border-zinc-800 text-center font-bold text-amber-300">5-1</td><td class="p-2 border-r border-zinc-800 font-sans font-bold">「醜悪な」</td><td class="p-2 border-r border-zinc-800 text-center font-sans text-emerald-400">攜行時</td><td class="p-2 font-sans">外觀極醜。賣出時價格降為基本價格 1/4；冒險者階級視為下降 1 階。</td></tr>
                            <tr class="hover:bg-zinc-900/40"><td class="p-2 border-r border-zinc-800 text-center font-bold text-amber-300">5-2</td><td class="p-2 border-r border-zinc-800 font-sans font-bold">「唸る」</td><td class="p-2 border-r border-zinc-800 text-center font-sans text-emerald-400">攜行時</td><td class="p-2 font-sans">常發出羽蟲嗡嗡聲。隱密判定與危險感知判定承受 -4 懲罰修正。</td></tr>
                            <tr class="hover:bg-zinc-900/40"><td class="p-2 border-r border-zinc-800 text-center font-bold text-amber-300">5-3</td><td class="p-2 border-r border-zinc-800 font-sans font-bold">「ふやけた」</td><td class="p-2 border-r border-zinc-800 text-center font-sans text-emerald-400">攜行時</td><td class="p-2 font-sans">質感泡水膨脹。追加傷害-1(武器) / 防護點-1(鎧/盾)；對病氣效果之生命/精神抵抗 -4。</td></tr>
                            <tr class="hover:bg-zinc-900/40"><td class="p-2 border-r border-zinc-800 text-center font-bold text-amber-300">5-4</td><td class="p-2 border-r border-zinc-800 font-sans font-bold">「古傷の」</td><td class="p-2 border-r border-zinc-800 text-center font-sans text-emerald-400">攜行時</td><td class="p-2 font-sans">受到 HP 回復效果（含休息回復）時，回復量減少 1 點。</td></tr>
                            <tr class="hover:bg-zinc-900/40"><td class="p-2 border-r border-zinc-800 text-center font-bold text-amber-300">5-5</td><td class="p-2 border-r border-zinc-800 font-sans font-bold">「まばゆい」</td><td class="p-2 border-r border-zinc-800 text-center font-sans text-emerald-400">攜行時</td><td class="p-2 font-sans">反射強光。自身常態因視野不良承受 -1 判定修正。</td></tr>
                            <tr class="hover:bg-zinc-900/40"><td class="p-2 border-r border-zinc-800 text-center font-bold text-amber-300">5-6</td><td class="p-2 border-r border-zinc-800 font-sans font-bold">「栄光なき」</td><td class="p-2 border-r border-zinc-800 text-center font-sans text-emerald-400">攜行時</td><td class="p-2 font-sans">行為判定大成功(雙六)不視為自動成功，需重新擲 2d 依點數判定（1日限1次）。</td></tr>
                            <tr class="hover:bg-zinc-900/40"><td class="p-2 border-r border-zinc-800 text-center font-bold text-amber-300">6-1</td><td class="p-2 border-r border-zinc-800 font-sans font-bold">「正直者の」</td><td class="p-2 border-r border-zinc-800 text-center font-sans text-emerald-400">攜行時</td><td class="p-2 font-sans">謊言立刻被看穿。成為真偽判定對象時承受 -4 懲罰修正。</td></tr>
                            <tr class="hover:bg-zinc-900/40"><td class="p-2 border-r border-zinc-800 text-center font-bold text-amber-300">6-2</td><td class="p-2 border-r border-zinc-800 font-sans font-bold"> 「乗り物酔いの」</td><td class="p-2 border-r border-zinc-800 text-center font-sans text-emerald-400">攜行時</td><td class="p-2 font-sans">易暈車。非靠自身雙腳移動 10 分鐘以上後 1 小時內，行動判定承受 -1 懲罰。</td></tr>
                            <tr class="hover:bg-zinc-900/40"><td class="p-2 border-r border-zinc-800 text-center font-bold text-amber-300">6-3</td><td class="p-2 border-r border-zinc-800 font-sans font-bold">「碧を厭う」</td><td class="p-2 border-r border-zinc-800 text-center font-sans text-emerald-400">攜行時</td><td class="p-2 font-sans">大自然中無法平靜。於自然環境中行動判定承受 -1 懲罰修正。</td></tr>
                            <tr class="hover:bg-zinc-900/40"><td class="p-2 border-r border-zinc-800 text-center font-bold text-amber-300">6-4</td><td class="p-2 border-r border-zinc-800 font-sans font-bold">「我慢できない」</td><td class="p-2 border-r border-zinc-800 text-center font-sans text-emerald-400">攜行時</td><td class="p-2 font-sans">每一跑團日需花費「冒險者等級x10 G」買嗜好品，否則隔天最大HP/MP -1。</td></tr>
                            <tr class="hover:bg-zinc-900/40"><td class="p-2 border-r border-zinc-800 text-center font-bold text-amber-300">6-5</td><td class="p-2 border-r border-zinc-800 font-sans font-bold">「つきまとう」</td><td class="p-2 border-r border-zinc-800 text-center font-sans text-emerald-400">攜行時</td><td class="p-2 font-sans">極度黏人。武器若使用非此武器命中判定-4/無法發動魔法；防具若未裝備迴避判定-4。</td></tr>
                            <tr class="hover:bg-zinc-900/40"><td class="p-2 border-r border-zinc-800 text-center font-bold text-amber-300">6-6</td><td class="p-2 border-r border-zinc-800 font-sans font-bold">「のろまな」</td><td class="p-2 border-r border-zinc-800 text-center font-sans text-emerald-400">攜行時</td><td class="p-2 font-sans text-red-300">戰鬥開始時之「戰鬥準備 (Battle Setup)」一切行動皆無法進行。</td></tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</div>
`;
