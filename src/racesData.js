export const racesContent = `
<div class="space-y-6">
    <!-- 頁頭標題卡片 -->
    <div class="bg-zinc-900/90 border border-amber-500/30 rounded-xl p-5 shadow-lg">
        <div class="flex items-center gap-3 mb-2">
            <div class="p-2.5 bg-amber-500/10 rounded-lg text-amber-400">
                <i class="fa-solid fa-users text-2xl"></i>
            </div>
            <div>
                <h2 class="text-xl font-bold text-amber-400 tracking-wider">SW2.5 種族資料 (Race Information)</h2>
                <p class="text-xs text-zinc-400">提供拉克希雅世界各種族的初期能力、出身表、種族特徵與語言說明。</p>
            </div>
        </div>
    </div>

    <!-- 人類 (Human) 卡片 -->
    <div class="bg-zinc-900 border border-zinc-800 rounded-xl p-5 space-y-5 shadow-md">
        <!-- 種族標題與基本資訊 -->
        <div class="flex flex-wrap justify-between items-center border-b border-zinc-800 pb-3 gap-2">
            <div class="flex items-center gap-2">
                <span class="text-xs px-2.5 py-1 rounded bg-amber-950 text-amber-300 border border-amber-800 font-bold">人族</span>
                <h3 class="text-lg font-bold text-amber-400">人類 <span class="text-xs text-zinc-500 font-normal font-mono">(Human)</span></h3>
            </div>
            <div class="text-xs text-zinc-400 flex items-center gap-3">
                <span>污穢度：<strong class="text-amber-400">0</strong></span>
                <span>壽命：<strong class="text-zinc-200">約 100 歲 (15歲成人)</strong></span>
            </div>
        </div>

        <!-- 種族背景簡介 -->
        <p class="text-xs text-zinc-300 leading-relaxed bg-zinc-950 p-3.5 rounded-lg border border-zinc-800/80">
            人類是拉克希雅世界存在數量最多的人族。外表看起來和現實世界的人類沒有區別。能夠適應所有的技能，且在冒險者中數量最多。
        </p>

        <!-- 基本屬性、限制技能與語言 -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
            <div class="bg-zinc-950 p-3 rounded-lg border border-zinc-800 space-y-1">
                <span class="text-amber-400 font-bold block mb-1">
                    <i class="fa-solid fa-language mr-1"></i>初始習得語言
                </span>
                <p class="text-zinc-300">地方語、交易共通語的「會話語」與「閱讀」</p>
            </div>
            <div class="bg-zinc-950 p-3 rounded-lg border border-zinc-800 space-y-1">
                <span class="text-amber-400 font-bold block mb-1">
                    <i class="fa-solid fa-ban mr-1"></i>限制技能
                </span>
                <p class="text-zinc-300">無限制 (可適應所有技能)</p>
            </div>
            <div class="bg-zinc-950 p-3 rounded-lg border border-zinc-800 space-y-1">
                <span class="text-amber-400 font-bold block mb-1">
                    <i class="fa-solid fa-dice mr-1"></i>種族能力值
                </span>
                <p class="text-zinc-300 font-mono">A:2d / B:2d / C:2d / D:2d / E:2d / F:2d</p>
            </div>
        </div>

        <!-- 種族特徵 -->
        <div class="bg-zinc-950 p-4 rounded-lg border border-amber-500/30 space-y-2 text-xs">
            <h4 class="font-bold text-amber-300 text-sm flex items-center">
                <i class="fa-solid fa-shield-halved mr-1.5"></i>種族特徵：［劍之加護／命運轉變］
            </h4>
            <p class="text-zinc-300 leading-relaxed">
                在遊戲時間中，一天一次，可將行為判定、傷害計算、戰利品決定的 2d 擲骰數字上下反轉。（骰子數字「1」變為「6」、「2」變為「5」、「3」變為「4」）。高數值變為低數值不能避免，也不能只選擇 2d 中的其中一顆骰子進行翻面。
            </p>
            <div class="pt-2 border-t border-zinc-800/80 space-y-1.5 text-zinc-400">
                <p>
                    <strong class="text-amber-400 font-medium">［命運轉變 LV2］(冒險者等級 6 以上)：</strong>
                    在使用［劍之加護／命運轉變］後的結果 +1（但 66 轉 11 仍視為自動失敗）。
                </p>
                <p>
                    <strong class="text-amber-400 font-medium">［命運轉變 LV2］(冒險者等級 11 以上)：</strong>
                    在使用［劍之加護／命運轉變］後的結果 +2（但 66 轉 11 仍視為自動失敗）。
                </p>
            </div>
        </div>

        <!-- 出身表 (規則書 I) -->
        <div class="space-y-2">
            <h4 class="text-xs font-bold text-amber-400 flex items-center justify-between">
                <span><i class="fa-solid fa-table-list mr-1.5"></i>人類出身背景對照表 (規則書 I)</span>
                <span class="text-[10px] text-zinc-500 font-normal">A 表出身</span>
            </h4>
            <div class="overflow-x-auto rounded-lg border border-zinc-800 bg-zinc-950">
                <table class="w-full text-left text-xs text-zinc-300">
                    <thead class="bg-zinc-900 text-amber-400 font-bold border-b border-zinc-800">
                        <tr>
                            <th class="p-2 border-r border-zinc-800 text-center">2d 骰值</th>
                            <th class="p-2 border-r border-zinc-800">出身</th>
                            <th class="p-2 border-r border-zinc-800">初始技能</th>
                            <th class="p-2 border-r border-zinc-800 text-center">技</th>
                            <th class="p-2 border-r border-zinc-800 text-center">體</th>
                            <th class="p-2 border-r border-zinc-800 text-center">心</th>
                            <th class="p-2 text-right">初始經驗值</th>
                        </tr>
                    </thead>
                    <tbody class="divide-y divide-zinc-800/60 font-mono text-[11px]">
                        <tr class="hover:bg-zinc-900/40">
                            <td class="p-2 border-r border-zinc-800 text-center text-amber-300 font-bold">2~4</td>
                            <td class="p-2 border-r border-zinc-800 font-sans">魔動機師</td>
                            <td class="p-2 border-r border-zinc-800 font-sans">魔動機術</td>
                            <td class="p-2 border-r border-zinc-800 text-center text-cyan-300 font-bold">8</td>
                            <td class="p-2 border-r border-zinc-800 text-center text-amber-300 font-bold">4</td>
                            <td class="p-2 border-r border-zinc-800 text-center text-emerald-300 font-bold">9</td>
                            <td class="p-2 text-right text-amber-400 font-bold">2000</td>
                        </tr>
                        <tr class="hover:bg-zinc-900/40">
                            <td class="p-2 border-r border-zinc-800 text-center text-amber-300 font-bold">5</td>
                            <td class="p-2 border-r border-zinc-800 font-sans">魔術師</td>
                            <td class="p-2 border-r border-zinc-800 font-sans">真語魔法</td>
                            <td class="p-2 border-r border-zinc-800 text-center text-cyan-300 font-bold">6</td>
                            <td class="p-2 border-r border-zinc-800 text-center text-amber-300 font-bold">5</td>
                            <td class="p-2 border-r border-zinc-800 text-center text-emerald-300 font-bold">10</td>
                            <td class="p-2 text-right text-amber-400 font-bold">2000</td>
                        </tr>
                        <tr class="hover:bg-zinc-900/40">
                            <td class="p-2 border-r border-zinc-800 text-center text-amber-300 font-bold">6</td>
                            <td class="p-2 border-r border-zinc-800 font-sans">輕戰士</td>
                            <td class="p-2 border-r border-zinc-800 font-sans">輕戰士和斥侯</td>
                            <td class="p-2 border-r border-zinc-800 text-center text-cyan-300 font-bold">10</td>
                            <td class="p-2 border-r border-zinc-800 text-center text-amber-300 font-bold">7</td>
                            <td class="p-2 border-r border-zinc-800 text-center text-emerald-300 font-bold">4</td>
                            <td class="p-2 text-right text-amber-400 font-bold">2000</td>
                        </tr>
                        <tr class="hover:bg-zinc-900/40">
                            <td class="p-2 border-r border-zinc-800 text-center text-amber-300 font-bold">7</td>
                            <td class="p-2 border-r border-zinc-800 font-sans">一般人</td>
                            <td class="p-2 border-r border-zinc-800 font-sans text-zinc-500">無</td>
                            <td class="p-2 border-r border-zinc-800 text-center text-cyan-300 font-bold">7</td>
                            <td class="p-2 border-r border-zinc-800 text-center text-amber-300 font-bold">7</td>
                            <td class="p-2 border-r border-zinc-800 text-center text-emerald-300 font-bold">7</td>
                            <td class="p-2 text-right text-amber-400 font-bold">3000</td>
                        </tr>
                        <tr class="hover:bg-zinc-900/40">
                            <td class="p-2 border-r border-zinc-800 text-center text-amber-300 font-bold">8</td>
                            <td class="p-2 border-r border-zinc-800 font-sans">傭兵</td>
                            <td class="p-2 border-r border-zinc-800 font-sans">戰士 or 拳鬥士</td>
                            <td class="p-2 border-r border-zinc-800 text-center text-cyan-300 font-bold">7</td>
                            <td class="p-2 border-r border-zinc-800 text-center text-amber-300 font-bold">10</td>
                            <td class="p-2 border-r border-zinc-800 text-center text-emerald-300 font-bold">4</td>
                            <td class="p-2 text-right text-amber-400 font-bold">2000</td>
                        </tr>
                        <tr class="hover:bg-zinc-900/40">
                            <td class="p-2 border-r border-zinc-800 text-center text-amber-300 font-bold">9~10</td>
                            <td class="p-2 border-r border-zinc-800 font-sans">神官</td>
                            <td class="p-2 border-r border-zinc-800 font-sans">神聖魔法</td>
                            <td class="p-2 border-r border-zinc-800 text-center text-cyan-300 font-bold">4</td>
                            <td class="p-2 border-r border-zinc-800 text-center text-amber-300 font-bold">8</td>
                            <td class="p-2 border-r border-zinc-800 text-center text-emerald-300 font-bold">9</td>
                            <td class="p-2 text-right text-amber-400 font-bold">2000</td>
                        </tr>
                        <tr class="hover:bg-zinc-900/40">
                            <td class="p-2 border-r border-zinc-800 text-center text-amber-300 font-bold">11~12</td>
                            <td class="p-2 border-r border-zinc-800 font-sans">操靈術師</td>
                            <td class="p-2 border-r border-zinc-800 font-sans">操靈魔法</td>
                            <td class="p-2 border-r border-zinc-800 text-center text-cyan-300 font-bold">7</td>
                            <td class="p-2 border-r border-zinc-800 text-center text-amber-300 font-bold">4</td>
                            <td class="p-2 border-r border-zinc-800 text-center text-emerald-300 font-bold">10</td>
                            <td class="p-2 text-right text-amber-400 font-bold">2000</td>
                        </tr>
                        <tr class="hover:bg-zinc-900/40 bg-amber-500/5 font-sans">
                            <td class="p-2 border-r border-zinc-800 text-center text-amber-400 font-bold">*</td>
                            <td class="p-2 border-r border-zinc-800 text-amber-400 font-bold">冒險者</td>
                            <td class="p-2 border-r border-zinc-800 text-zinc-500">無 (自由選擇)</td>
                            <td class="p-2 border-r border-zinc-800 text-center text-cyan-300 font-bold">2d</td>
                            <td class="p-2 border-r border-zinc-800 text-center text-amber-300 font-bold">2d</td>
                            <td class="p-2 border-r border-zinc-800 text-center text-emerald-300 font-bold">2d</td>
                            <td class="p-2 text-right text-amber-400 font-bold">3000</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>

        <!-- 出身表 (規則書 II) -->
        <div class="space-y-2">
            <h4 class="text-xs font-bold text-amber-400 flex items-center justify-between">
                <span><i class="fa-solid fa-table-list mr-1.5"></i>人類出身背景對照表 (規則書 II)</span>
                <span class="text-[10px] text-zinc-500 font-normal">B 表出身</span>
            </h4>
            <div class="overflow-x-auto rounded-lg border border-zinc-800 bg-zinc-950">
                <table class="w-full text-left text-xs text-zinc-300">
                    <thead class="bg-zinc-900 text-amber-400 font-bold border-b border-zinc-800">
                        <tr>
                            <th class="p-2 border-r border-zinc-800 text-center">2d 骰值</th>
                            <th class="p-2 border-r border-zinc-800">出身</th>
                            <th class="p-2 border-r border-zinc-800">初始技能</th>
                            <th class="p-2 border-r border-zinc-800 text-center">技</th>
                            <th class="p-2 border-r border-zinc-800 text-center">體</th>
                            <th class="p-2 border-r border-zinc-800 text-center">心</th>
                            <th class="p-2 text-right">初始經驗值</th>
                        </tr>
                    </thead>
                    <tbody class="divide-y divide-zinc-800/60 font-mono text-[11px]">
                        <tr class="hover:bg-zinc-900/40">
                            <td class="p-2 border-r border-zinc-800 text-center text-amber-300 font-bold">2~4</td>
                            <td class="p-2 border-r border-zinc-800 font-sans">射手</td>
                            <td class="p-2 border-r border-zinc-800 font-sans">射手</td>
                            <td class="p-2 border-r border-zinc-800 text-center text-cyan-300 font-bold">9</td>
                            <td class="p-2 border-r border-zinc-800 text-center text-amber-300 font-bold">5</td>
                            <td class="p-2 border-r border-zinc-800 text-center text-emerald-300 font-bold">7</td>
                            <td class="p-2 text-right text-amber-400 font-bold">2500</td>
                        </tr>
                        <tr class="hover:bg-zinc-900/40">
                            <td class="p-2 border-r border-zinc-800 text-center text-amber-300 font-bold">5</td>
                            <td class="p-2 border-r border-zinc-800 font-sans">劍士</td>
                            <td class="p-2 border-r border-zinc-800 font-sans">輕戰士</td>
                            <td class="p-2 border-r border-zinc-800 text-center text-cyan-300 font-bold">9</td>
                            <td class="p-2 border-r border-zinc-800 text-center text-amber-300 font-bold">6</td>
                            <td class="p-2 border-r border-zinc-800 text-center text-emerald-300 font-bold">6</td>
                            <td class="p-2 text-right text-amber-400 font-bold">2500</td>
                        </tr>
                        <tr class="hover:bg-zinc-900/40">
                            <td class="p-2 border-r border-zinc-800 text-center text-amber-300 font-bold">6</td>
                            <td class="p-2 border-r border-zinc-800 font-sans">拳鬥士</td>
                            <td class="p-2 border-r border-zinc-800 font-sans">拳鬥士</td>
                            <td class="p-2 border-r border-zinc-800 text-center text-cyan-300 font-bold">8</td>
                            <td class="p-2 border-r border-zinc-800 text-center text-amber-300 font-bold">8</td>
                            <td class="p-2 border-r border-zinc-800 text-center text-emerald-300 font-bold">5</td>
                            <td class="p-2 text-right text-amber-400 font-bold">2000</td>
                        </tr>
                        <tr class="hover:bg-zinc-900/40">
                            <td class="p-2 border-r border-zinc-800 text-center text-amber-300 font-bold">7</td>
                            <td class="p-2 border-r border-zinc-800 font-sans">戰士</td>
                            <td class="p-2 border-r border-zinc-800 font-sans">戰士</td>
                            <td class="p-2 border-r border-zinc-800 text-center text-cyan-300 font-bold">7</td>
                            <td class="p-2 border-r border-zinc-800 text-center text-amber-300 font-bold">9</td>
                            <td class="p-2 border-r border-zinc-800 text-center text-emerald-300 font-bold">5</td>
                            <td class="p-2 text-right text-amber-400 font-bold">2000</td>
                        </tr>
                        <tr class="hover:bg-zinc-900/40">
                            <td class="p-2 border-r border-zinc-800 text-center text-amber-300 font-bold">8</td>
                            <td class="p-2 border-r border-zinc-800 font-sans">練體士</td>
                            <td class="p-2 border-r border-zinc-800 font-sans">練體士</td>
                            <td class="p-2 border-r border-zinc-800 text-center text-cyan-300 font-bold">6</td>
                            <td class="p-2 border-r border-zinc-800 text-center text-amber-300 font-bold">8</td>
                            <td class="p-2 border-r border-zinc-800 text-center text-emerald-300 font-bold">7</td>
                            <td class="p-2 text-right text-amber-400 font-bold">2500</td>
                        </tr>
                        <tr class="hover:bg-zinc-900/40">
                            <td class="p-2 border-r border-zinc-800 text-center text-amber-300 font-bold">9</td>
                            <td class="p-2 border-r border-zinc-800 font-sans">歌手</td>
                            <td class="p-2 border-r border-zinc-800 font-sans">吟遊詩人</td>
                            <td class="p-2 border-r border-zinc-800 text-center text-cyan-300 font-bold">5</td>
                            <td class="p-2 border-r border-zinc-800 text-center text-amber-300 font-bold">7</td>
                            <td class="p-2 border-r border-zinc-800 text-center text-emerald-300 font-bold">9</td>
                            <td class="p-2 text-right text-amber-400 font-bold">2500</td>
                        </tr>
                        <tr class="hover:bg-zinc-900/40">
                            <td class="p-2 border-r border-zinc-800 text-center text-amber-300 font-bold">10~12</td>
                            <td class="p-2 border-r border-zinc-800 font-sans">妖精使</td>
                            <td class="p-2 border-r border-zinc-800 font-sans">妖精魔法</td>
                            <td class="p-2 border-r border-zinc-800 text-center text-cyan-300 font-bold">5</td>
                            <td class="p-2 border-r border-zinc-800 text-center text-amber-300 font-bold">6</td>
                            <td class="p-2 border-r border-zinc-800 text-center text-emerald-300 font-bold">10</td>
                            <td class="p-2 text-right text-amber-400 font-bold">2000</td>
                        </tr>
                        <tr class="hover:bg-zinc-900/40">
                            <td class="p-2 border-r border-zinc-800 text-center text-amber-300 font-bold">-</td>
                            <td class="p-2 border-r border-zinc-800 font-sans">魔神使</td>
                            <td class="p-2 border-r border-zinc-800 font-sans">召異魔法</td>
                            <td class="p-2 border-r border-zinc-800 text-center text-cyan-300 font-bold">6</td>
                            <td class="p-2 border-r border-zinc-800 text-center text-amber-300 font-bold">6</td>
                            <td class="p-2 border-r border-zinc-800 text-center text-emerald-300 font-bold">9</td>
                            <td class="p-2 text-right text-amber-400 font-bold">2000</td>
                        </tr>
                        <tr class="hover:bg-zinc-900/40">
                            <td class="p-2 border-r border-zinc-800 text-center text-amber-300 font-bold">-</td>
                            <td class="p-2 border-r border-zinc-800 font-sans">天地使</td>
                            <td class="p-2 border-r border-zinc-800 font-sans">天地使技能</td>
                            <td class="p-2 border-r border-zinc-800 text-center text-cyan-300 font-bold">5</td>
                            <td class="p-2 border-r border-zinc-800 text-center text-amber-300 font-bold">9</td>
                            <td class="p-2 border-r border-zinc-800 text-center text-emerald-300 font-bold">7</td>
                            <td class="p-2 text-right text-amber-400 font-bold">2000</td>
                        </tr>
                        <tr class="hover:bg-zinc-900/40">
                            <td class="p-2 border-r border-zinc-800 text-center text-amber-300 font-bold">-</td>
                            <td class="p-2 border-r border-zinc-800 font-sans">舞者</td>
                            <td class="p-2 border-r border-zinc-800 font-sans">舞鬥士</td>
                            <td class="p-2 border-r border-zinc-800 text-center text-cyan-300 font-bold">10</td>
                            <td class="p-2 border-r border-zinc-800 text-center text-amber-300 font-bold">6</td>
                            <td class="p-2 border-r border-zinc-800 text-center text-emerald-300 font-bold">5</td>
                            <td class="p-2 text-right text-amber-400 font-bold">2000</td>
                        </tr>
                        <tr class="hover:bg-zinc-900/40">
                            <td class="p-2 border-r border-zinc-800 text-center text-amber-300 font-bold">-</td>
                            <td class="p-2 border-r border-zinc-800 font-sans">軍師</td>
                            <td class="p-2 border-r border-zinc-800 font-sans">軍師技能</td>
                            <td class="p-2 border-r border-zinc-800 text-center text-cyan-300 font-bold">8</td>
                            <td class="p-2 border-r border-zinc-800 text-center text-amber-300 font-bold">6</td>
                            <td class="p-2 border-r border-zinc-800 text-center text-emerald-300 font-bold">7</td>
                            <td class="p-2 text-right text-amber-400 font-bold">2500</td>
                        </tr>
                        <tr class="hover:bg-zinc-900/40">
                            <td class="p-2 border-r border-zinc-800 text-center text-amber-300 font-bold">-</td>
                            <td class="p-2 border-r border-zinc-800 font-sans">森羅導師</td>
                            <td class="p-2 border-r border-zinc-800 font-sans">德魯伊 (森羅魔法)</td>
                            <td class="p-2 border-r border-zinc-800 text-center text-cyan-300 font-bold">5</td>
                            <td class="p-2 border-r border-zinc-800 text-center text-amber-300 font-bold">6</td>
                            <td class="p-2 border-r border-zinc-800 text-center text-emerald-300 font-bold">10</td>
                            <td class="p-2 text-right text-amber-400 font-bold">2000</td>
                        </tr>
                        <tr class="hover:bg-zinc-900/40">
                            <td class="p-2 border-r border-zinc-800 text-center text-amber-300 font-bold">-</td>
                            <td class="p-2 border-r border-zinc-800 font-sans">騎手</td>
                            <td class="p-2 border-r border-zinc-800 font-sans">騎手技能</td>
                            <td class="p-2 border-r border-zinc-800 text-center text-cyan-300 font-bold">8</td>
                            <td class="p-2 border-r border-zinc-800 text-center text-amber-300 font-bold">8</td>
                            <td class="p-2 border-r border-zinc-800 text-center text-emerald-300 font-bold">5</td>
                            <td class="p-2 text-right text-amber-400 font-bold">2500</td>
                        </tr>
                        <tr class="hover:bg-zinc-900/40">
                            <td class="p-2 border-r border-zinc-800 text-center text-amber-300 font-bold">-</td>
                            <td class="p-2 border-r border-zinc-800 font-sans">煉金術師</td>
                            <td class="p-2 border-r border-zinc-800 font-sans">賦術</td>
                            <td class="p-2 border-r border-zinc-800 text-center text-cyan-300 font-bold">7</td>
                            <td class="p-2 border-r border-zinc-800 text-center text-amber-300 font-bold">6</td>
                            <td class="p-2 border-r border-zinc-800 text-center text-emerald-300 font-bold">8</td>
                            <td class="p-2 text-right text-amber-400 font-bold">2500</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>

    <!-- 精靈 (Elf) 卡片 -->
    <div class="bg-zinc-900 border border-zinc-800 rounded-xl p-5 space-y-5 shadow-md">
        <!-- 種族標題與基本資訊 -->
        <div class="flex flex-wrap justify-between items-center border-b border-zinc-800 pb-3 gap-2">
            <div class="flex items-center gap-2">
                <span class="text-xs px-2.5 py-1 rounded bg-teal-950 text-teal-300 border border-teal-800 font-bold">人族</span>
                <h3 class="text-lg font-bold text-amber-400">精靈 <span class="text-xs text-zinc-500 font-normal font-mono">(Elf)</span></h3>
            </div>
            <div class="text-xs text-zinc-400 flex items-center gap-3">
                <span>污穢度：<strong class="text-amber-400">0</strong></span>
                <span>壽命：<strong class="text-zinc-200">約 500 歲 (15歲成人)</strong></span>
            </div>
        </div>

        <!-- 種族背景簡介 -->
        <p class="text-xs text-zinc-300 leading-relaxed bg-zinc-950 p-3.5 rounded-lg border border-zinc-800/80">
            精靈是比人類更加高挑、更加美麗優雅的種族，擅長魔法。喜歡生活在湖泊、河流等淡水湖畔與河邊。熱愛自然，雖然喜歡舒適地享受漫長的人生，但因為強烈的好奇心而外出旅行的精靈也不在少數。相比人類更加嬌嫩、聰明且擅長使用魔法；更快更靈巧的特性使他們非常適合成為遊俠或輕戰士。15 歲視為成人，外表看起來衰老得非常緩慢，大部分在成人之後才會成為冒險者。
        </p>

        <!-- 基本屬性、限制技能與語言 -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
            <div class="bg-zinc-950 p-3 rounded-lg border border-zinc-800 space-y-1">
                <span class="text-amber-400 font-bold block mb-1">
                    <i class="fa-solid fa-language mr-1"></i>初始習得語言
                </span>
                <p class="text-zinc-300">精靈語、交易共通語的「會話語」與「閱讀」</p>
            </div>
            <div class="bg-zinc-950 p-3 rounded-lg border border-zinc-800 space-y-1">
                <span class="text-amber-400 font-bold block mb-1">
                    <i class="fa-solid fa-ban mr-1"></i>限制技能
                </span>
                <p class="text-zinc-300">無限制 (無不能選擇的技能)</p>
            </div>
            <div class="bg-zinc-950 p-3 rounded-lg border border-zinc-800 space-y-1">
                <span class="text-amber-400 font-bold block mb-1">
                    <i class="fa-solid fa-dice mr-1"></i>種族能力值
                </span>
                <p class="text-zinc-300 font-mono">A:2d / B:2d / C:1d / D:2d / E:2d / F:2d</p>
            </div>
        </div>

        <!-- 種族特徵 -->
        <div class="bg-zinc-950 p-4 rounded-lg border border-teal-500/30 space-y-3 text-xs">
            <div class="space-y-1">
                <h4 class="font-bold text-teal-300 text-sm flex items-center">
                    <i class="fa-solid fa-eye mr-1.5"></i>種族特徵：［暗視］
                </h4>
                <p class="text-zinc-300 leading-relaxed">
                    在黑暗中視物如白天一樣清楚。
                </p>
            </div>

            <div class="pt-2 border-t border-zinc-800/80 space-y-2">
                <h4 class="font-bold text-teal-300 text-sm flex items-center">
                    <i class="fa-solid fa-droplet mr-1.5"></i>種族特徵：［劍之加護／柔和之水］
                </h4>
                <p class="text-zinc-300 leading-relaxed">
                    在水中也可以像在陸地上一樣，毫無任何限制地行動。在水中 1 小時以內都不需要換氣；若在水中超過 1 小時，則必須進行 1 分鐘的換氣。精靈在水中也可以正常發出聲音。此外，對［毒屬性］與［疾病屬性］效果，生命抵抗判定與精神抵抗判定獲得 +2 修正。
                </p>
                <div class="pt-2 border-t border-zinc-800/60 space-y-1.5 text-zinc-400">
                    <p>
                        <strong class="text-teal-400 font-medium">［柔和之水 LV2］(冒險者等級 6 以上)：</strong>
                        自己單手碰觸的一人也能獲得相同效果（在水中無限制行動、不需要換氣，以及毒/疾病抵抗判定 +2 修正）。
                    </p>
                    <p>
                        <strong class="text-teal-400 font-medium">［柔和之水 LV3］(冒險者等級 11 以上)：</strong>
                        藉由全身在水中休息 1 小時，可獲得相當於睡眠 6 小時的回復效果，且可與一般的睡眠回復效果分開計算。
                    </p>
                </div>
            </div>
        </div>

        <!-- 出身表 (規則書 I) -->
        <div class="space-y-2">
            <h4 class="text-xs font-bold text-amber-400 flex items-center justify-between">
                <span><i class="fa-solid fa-table-list mr-1.5"></i>精靈出身背景對照表 (規則書 I)</span>
                <span class="text-[10px] text-zinc-500 font-normal">A 表出身</span>
            </h4>
            <div class="overflow-x-auto rounded-lg border border-zinc-800 bg-zinc-950">
                <table class="w-full text-left text-xs text-zinc-300">
                    <thead class="bg-zinc-900 text-amber-400 font-bold border-b border-zinc-800">
                        <tr>
                            <th class="p-2 border-r border-zinc-800 text-center">2d 骰值</th>
                            <th class="p-2 border-r border-zinc-800">出身</th>
                            <th class="p-2 border-r border-zinc-800">初始技能</th>
                            <th class="p-2 border-r border-zinc-800 text-center">技</th>
                            <th class="p-2 border-r border-zinc-800 text-center">體</th>
                            <th class="p-2 border-r border-zinc-800 text-center">心</th>
                            <th class="p-2 text-right">初始經驗值</th>
                        </tr>
                    </thead>
                    <tbody class="divide-y divide-zinc-800/60 font-mono text-[11px]">
                        <tr class="hover:bg-zinc-900/40">
                            <td class="p-2 border-r border-zinc-800 text-center text-amber-300 font-bold">2~3</td>
                            <td class="p-2 border-r border-zinc-800 font-sans">劍士</td>
                            <td class="p-2 border-r border-zinc-800 font-sans">輕戰士</td>
                            <td class="p-2 border-r border-zinc-800 text-center text-cyan-300 font-bold">12</td>
                            <td class="p-2 border-r border-zinc-800 text-center text-amber-300 font-bold">5</td>
                            <td class="p-2 border-r border-zinc-800 text-center text-emerald-300 font-bold">9</td>
                            <td class="p-2 text-right text-amber-400 font-bold">2500</td>
                        </tr>
                        <tr class="hover:bg-zinc-900/40">
                            <td class="p-2 border-r border-zinc-800 text-center text-amber-300 font-bold">4</td>
                            <td class="p-2 border-r border-zinc-800 font-sans">藥師</td>
                            <td class="p-2 border-r border-zinc-800 font-sans">學者和遊俠</td>
                            <td class="p-2 border-r border-zinc-800 text-center text-cyan-300 font-bold">10</td>
                            <td class="p-2 border-r border-zinc-800 text-center text-amber-300 font-bold">5</td>
                            <td class="p-2 border-r border-zinc-800 text-center text-emerald-300 font-bold">11</td>
                            <td class="p-2 text-right text-amber-400 font-bold">2000</td>
                        </tr>
                        <tr class="hover:bg-zinc-900/40">
                            <td class="p-2 border-r border-zinc-800 text-center text-amber-300 font-bold">5~6</td>
                            <td class="p-2 border-r border-zinc-800 font-sans">神官</td>
                            <td class="p-2 border-r border-zinc-800 font-sans">神聖魔法</td>
                            <td class="p-2 border-r border-zinc-800 text-center text-cyan-300 font-bold">9</td>
                            <td class="p-2 border-r border-zinc-800 text-center text-amber-300 font-bold">5</td>
                            <td class="p-2 border-r border-zinc-800 text-center text-emerald-300 font-bold">12</td>
                            <td class="p-2 text-right text-amber-400 font-bold">2000</td>
                        </tr>
                        <tr class="hover:bg-zinc-900/40">
                            <td class="p-2 border-r border-zinc-800 text-center text-amber-300 font-bold">7</td>
                            <td class="p-2 border-r border-zinc-800 font-sans">操靈術師</td>
                            <td class="p-2 border-r border-zinc-800 font-sans">操靈魔法</td>
                            <td class="p-2 border-r border-zinc-800 text-center text-cyan-300 font-bold">9</td>
                            <td class="p-2 border-r border-zinc-800 text-center text-amber-300 font-bold">4</td>
                            <td class="p-2 border-r border-zinc-800 text-center text-emerald-300 font-bold">13</td>
                            <td class="p-2 text-right text-amber-400 font-bold">2000</td>
                        </tr>
                        <tr class="hover:bg-zinc-900/40">
                            <td class="p-2 border-r border-zinc-800 text-center text-amber-300 font-bold">8~9</td>
                            <td class="p-2 border-r border-zinc-800 font-sans">魔術師</td>
                            <td class="p-2 border-r border-zinc-800 font-sans">真語魔法</td>
                            <td class="p-2 border-r border-zinc-800 text-center text-cyan-300 font-bold">10</td>
                            <td class="p-2 border-r border-zinc-800 text-center text-amber-300 font-bold">3</td>
                            <td class="p-2 border-r border-zinc-800 text-center text-emerald-300 font-bold">13</td>
                            <td class="p-2 text-right text-amber-400 font-bold">2000</td>
                        </tr>
                        <tr class="hover:bg-zinc-900/40">
                            <td class="p-2 border-r border-zinc-800 text-center text-amber-300 font-bold">10~12</td>
                            <td class="p-2 border-r border-zinc-800 font-sans">射手</td>
                            <td class="p-2 border-r border-zinc-800 font-sans">射手</td>
                            <td class="p-2 border-r border-zinc-800 text-center text-cyan-300 font-bold">13</td>
                            <td class="p-2 border-r border-zinc-800 text-center text-amber-300 font-bold">5</td>
                            <td class="p-2 border-r border-zinc-800 text-center text-emerald-300 font-bold">8</td>
                            <td class="p-2 text-right text-amber-400 font-bold">2500</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>

        <!-- 出身表 (規則書 II) -->
        <div class="space-y-2">
            <h4 class="text-xs font-bold text-amber-400 flex items-center justify-between">
                <span><i class="fa-solid fa-table-list mr-1.5"></i>精靈出身背景對照表 (規則書 II)</span>
                <span class="text-[10px] text-zinc-500 font-normal">B 表出身</span>
            </h4>
            <div class="overflow-x-auto rounded-lg border border-zinc-800 bg-zinc-950">
                <table class="w-full text-left text-xs text-zinc-300">
                    <thead class="bg-zinc-900 text-amber-400 font-bold border-b border-zinc-800">
                        <tr>
                            <th class="p-2 border-r border-zinc-800 text-center">2d 骰值</th>
                            <th class="p-2 border-r border-zinc-800">出身</th>
                            <th class="p-2 border-r border-zinc-800">初始技能</th>
                            <th class="p-2 border-r border-zinc-800 text-center">技</th>
                            <th class="p-2 border-r border-zinc-800 text-center">體</th>
                            <th class="p-2 border-r border-zinc-800 text-center">心</th>
                            <th class="p-2 text-right">初始經驗值</th>
                        </tr>
                    </thead>
                    <tbody class="divide-y divide-zinc-800/60 font-mono text-[11px]">
                        <tr class="hover:bg-zinc-900/40">
                            <td class="p-2 border-r border-zinc-800 text-center text-amber-300 font-bold">2~4</td>
                            <td class="p-2 border-r border-zinc-800 font-sans">練體士</td>
                            <td class="p-2 border-r border-zinc-800 font-sans">練體士</td>
                            <td class="p-2 border-r border-zinc-800 text-center text-cyan-300 font-bold">11</td>
                            <td class="p-2 border-r border-zinc-800 text-center text-amber-300 font-bold">5</td>
                            <td class="p-2 border-r border-zinc-800 text-center text-emerald-300 font-bold">10</td>
                            <td class="p-2 text-right text-amber-400 font-bold">2500</td>
                        </tr>
                        <tr class="hover:bg-zinc-900/40">
                            <td class="p-2 border-r border-zinc-800 text-center text-amber-300 font-bold">5~6</td>
                            <td class="p-2 border-r border-zinc-800 font-sans">密偵</td>
                            <td class="p-2 border-r border-zinc-800 font-sans">斥候</td>
                            <td class="p-2 border-r border-zinc-800 text-center text-cyan-300 font-bold">12</td>
                            <td class="p-2 border-r border-zinc-800 text-center text-amber-300 font-bold">4</td>
                            <td class="p-2 border-r border-zinc-800 text-center text-emerald-300 font-bold">10</td>
                            <td class="p-2 text-right text-amber-400 font-bold">2500</td>
                        </tr>
                        <tr class="hover:bg-zinc-900/40">
                            <td class="p-2 border-r border-zinc-800 text-center text-amber-300 font-bold">7</td>
                            <td class="p-2 border-r border-zinc-800 font-sans">妖精使</td>
                            <td class="p-2 border-r border-zinc-800 font-sans">妖精魔法</td>
                            <td class="p-2 border-r border-zinc-800 text-center text-cyan-300 font-bold">10</td>
                            <td class="p-2 border-r border-zinc-800 text-center text-amber-300 font-bold">2</td>
                            <td class="p-2 border-r border-zinc-800 text-center text-emerald-300 font-bold">14</td>
                            <td class="p-2 text-right text-amber-400 font-bold">2000</td>
                        </tr>
                        <tr class="hover:bg-zinc-900/40">
                            <td class="p-2 border-r border-zinc-800 text-center text-amber-300 font-bold">8~9</td>
                            <td class="p-2 border-r border-zinc-800 font-sans">拳鬥士</td>
                            <td class="p-2 border-r border-zinc-800 font-sans">拳鬥士</td>
                            <td class="p-2 border-r border-zinc-800 text-center text-cyan-300 font-bold">11</td>
                            <td class="p-2 border-r border-zinc-800 text-center text-amber-300 font-bold">4</td>
                            <td class="p-2 border-r border-zinc-800 text-center text-emerald-300 font-bold">11</td>
                            <td class="p-2 text-right text-amber-400 font-bold">2000</td>
                        </tr>
                        <tr class="hover:bg-zinc-900/40">
                            <td class="p-2 border-r border-zinc-800 text-center text-amber-300 font-bold">10~12</td>
                            <td class="p-2 border-r border-zinc-800 font-sans">吟遊詩人</td>
                            <td class="p-2 border-r border-zinc-800 font-sans">吟遊詩人</td>
                            <td class="p-2 border-r border-zinc-800 text-center text-cyan-300 font-bold">9</td>
                            <td class="p-2 border-r border-zinc-800 text-center text-amber-300 font-bold">3</td>
                            <td class="p-2 border-r border-zinc-800 text-center text-emerald-300 font-bold">14</td>
                            <td class="p-2 text-right text-amber-400 font-bold">2500</td>
                        </tr>
                        <tr class="hover:bg-zinc-900/40">
                            <td class="p-2 border-r border-zinc-800 text-center text-amber-300 font-bold">-</td>
                            <td class="p-2 border-r border-zinc-800 font-sans">魔神使</td>
                            <td class="p-2 border-r border-zinc-800 font-sans">召異魔法</td>
                            <td class="p-2 border-r border-zinc-800 text-center text-cyan-300 font-bold">10</td>
                            <td class="p-2 border-r border-zinc-800 text-center text-amber-300 font-bold">4</td>
                            <td class="p-2 border-r border-zinc-800 text-center text-emerald-300 font-bold">12</td>
                            <td class="p-2 text-right text-amber-400 font-bold">2000</td>
                        </tr>
                        <tr class="hover:bg-zinc-900/40">
                            <td class="p-2 border-r border-zinc-800 text-center text-amber-300 font-bold">-</td>
                            <td class="p-2 border-r border-zinc-800 font-sans">森羅導師</td>
                            <td class="p-2 border-r border-zinc-800 font-sans">德魯伊 (森羅魔法)</td>
                            <td class="p-2 border-r border-zinc-800 text-center text-cyan-300 font-bold">8</td>
                            <td class="p-2 border-r border-zinc-800 text-center text-amber-300 font-bold">5</td>
                            <td class="p-2 border-r border-zinc-800 text-center text-emerald-300 font-bold">13</td>
                            <td class="p-2 text-right text-amber-400 font-bold">2000</td>
                        </tr>
                        <tr class="hover:bg-zinc-900/40">
                            <td class="p-2 border-r border-zinc-800 text-center text-amber-300 font-bold">-</td>
                            <td class="p-2 border-r border-zinc-800 font-sans">天地使</td>
                            <td class="p-2 border-r border-zinc-800 font-sans">天地使技能</td>
                            <td class="p-2 border-r border-zinc-800 text-center text-cyan-300 font-bold">10</td>
                            <td class="p-2 border-r border-zinc-800 text-center text-amber-300 font-bold">4</td>
                            <td class="p-2 border-r border-zinc-800 text-center text-emerald-300 font-bold">12</td>
                            <td class="p-2 text-right text-amber-400 font-bold">2000</td>
                        </tr>
                        <tr class="hover:bg-zinc-900/40">
                            <td class="p-2 border-r border-zinc-800 text-center text-amber-300 font-bold">-</td>
                            <td class="p-2 border-r border-zinc-800 font-sans">舞者</td>
                            <td class="p-2 border-r border-zinc-800 font-sans">舞鬥士</td>
                            <td class="p-2 border-r border-zinc-800 text-center text-cyan-300 font-bold">13</td>
                            <td class="p-2 border-r border-zinc-800 text-center text-amber-300 font-bold">5</td>
                            <td class="p-2 border-r border-zinc-800 text-center text-emerald-300 font-bold">8</td>
                            <td class="p-2 text-right text-amber-400 font-bold">2000</td>
                        </tr>
                        <tr class="hover:bg-zinc-900/40">
                            <td class="p-2 border-r border-zinc-800 text-center text-amber-300 font-bold">-</td>
                            <td class="p-2 border-r border-zinc-800 font-sans">騎手</td>
                            <td class="p-2 border-r border-zinc-800 font-sans">騎手技能</td>
                            <td class="p-2 border-r border-zinc-800 text-center text-cyan-300 font-bold">12</td>
                            <td class="p-2 border-r border-zinc-800 text-center text-amber-300 font-bold">6</td>
                            <td class="p-2 border-r border-zinc-800 text-center text-emerald-300 font-bold">8</td>
                            <td class="p-2 text-right text-amber-400 font-bold">2500</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
    <!-- 矮人 (Dwarf) 卡片 -->
    <div class="bg-zinc-900 border border-zinc-800 rounded-xl p-5 space-y-5 shadow-md">
        <!-- 種族標題與基本資訊 -->
        <div class="flex flex-wrap justify-between items-center border-b border-zinc-800 pb-3 gap-2">
            <div class="flex items-center gap-2">
                <span class="text-xs px-2.5 py-1 rounded bg-amber-950 text-amber-300 border border-amber-800 font-bold">人族</span>
                <h3 class="text-lg font-bold text-amber-400">矮人 <span class="text-xs text-zinc-500 font-normal font-mono">(Dwarf)</span></h3>
            </div>
            <div class="text-xs text-zinc-400 flex items-center gap-3">
                <span>污穢度：<strong class="text-amber-400">0</strong></span>
                <span>壽命：<strong class="text-zinc-200">約 200 歲 (15歲成人)</strong></span>
            </div>
        </div>

        <!-- 種族背景簡介 -->
        <p class="text-xs text-zinc-300 leading-relaxed bg-zinc-950 p-3.5 rounded-lg border border-zinc-800/80">
            矮人是比人類更矮，但擁有更健壯身體與強韌肌肉的種族。大多男性長著濃密鬍鬚；女性則沒有鬍鬚，即使成人後仍保有少女般的身段。體毛與頭髮多為銀色或紅色，亦有少數綠色或粉色。性格頑固直爽、極度重視同伴，天生具有鍛鍊自我變強的種族本能，非常適合成為優秀戰士，所打造的精良武器與工藝品亦極為著名。多數生活於山脈間的礦山城鎮，但因尋求與蠻族的戰鬥而積極與人類交流，成為傭兵或冒險者的不在少數。15 歲視為成人，至死都在不斷鍛鍊自己。
        </p>

        <!-- 基本屬性、限制技能與語言 -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
            <div class="bg-zinc-950 p-3 rounded-lg border border-zinc-800 space-y-1">
                <span class="text-amber-400 font-bold block mb-1">
                    <i class="fa-solid fa-language mr-1"></i>初始習得語言
                </span>
                <p class="text-zinc-300">矮人語、交易共通語的「會話語」與「閱讀」</p>
            </div>
            <div class="bg-zinc-950 p-3 rounded-lg border border-zinc-800 space-y-1">
                <span class="text-amber-400 font-bold block mb-1">
                    <i class="fa-solid fa-ban mr-1"></i>限制技能
                </span>
                <p class="text-zinc-300">無限制 (無不能選擇的技能)</p>
            </div>
            <div class="bg-zinc-950 p-3 rounded-lg border border-zinc-800 space-y-1">
                <span class="text-amber-400 font-bold block mb-1">
                    <i class="fa-solid fa-dice mr-1"></i>種族能力值
                </span>
                <p class="text-zinc-300 font-mono">A:2d+6 / B:1d / C:2d / D:2d / E:1d / F:2d+6</p>
            </div>
        </div>

        <!-- 種族特徵 -->
        <div class="bg-zinc-950 p-4 rounded-lg border border-orange-500/30 space-y-3 text-xs">
            <div class="space-y-1">
                <h4 class="font-bold text-orange-300 text-sm flex items-center">
                    <i class="fa-solid fa-eye mr-1.5"></i>種族特徵：［暗視］
                </h4>
                <p class="text-zinc-300 leading-relaxed">
                    在黑暗中視物如白天一樣清楚。
                </p>
            </div>

            <div class="pt-2 border-t border-zinc-800/80 space-y-2">
                <h4 class="font-bold text-orange-300 text-sm flex items-center">
                    <i class="fa-solid fa-fire mr-1.5"></i>種族特徵：［劍之加護／炎身］
                </h4>
                <p class="text-zinc-300 leading-relaxed">
                    完全免疫火屬性的魔法與物理傷害，且可自由決定身上攜帶的物品是否受到火屬性效果影響。
                </p>
                <div class="pt-2 border-t border-zinc-800/60 space-y-1.5 text-zinc-400">
                    <p>
                        <strong class="text-orange-400 font-medium">［炎身 LV2］(冒險者等級 6 以上)：</strong>
                        自己單手碰觸的一人也能獲得相同效果（完全免疫火屬性魔法及物理傷害，身上物品不受火屬性影響）。
                    </p>
                    <p>
                        <strong class="text-orange-400 font-medium">［炎身 LV3］(冒險者等級 11 以上)：</strong>
                        受到純能量攻擊時傷害減半；若該效果為［抵抗：減半］時，直接變為［抵抗：消滅］。
                    </p>
                </div>
            </div>
        </div>

        <!-- 出身表 (規則書 I) -->
        <div class="space-y-2">
            <h4 class="text-xs font-bold text-amber-400 flex items-center justify-between">
                <span><i class="fa-solid fa-table-list mr-1.5"></i>矮人出身背景對照表 (規則書 I)</span>
                <span class="text-[10px] text-zinc-500 font-normal">A 表出身</span>
            </h4>
            <div class="overflow-x-auto rounded-lg border border-zinc-800 bg-zinc-950">
                <table class="w-full text-left text-xs text-zinc-300">
                    <thead class="bg-zinc-900 text-amber-400 font-bold border-b border-zinc-800">
                        <tr>
                            <th class="p-2 border-r border-zinc-800 text-center">2d 骰值</th>
                            <th class="p-2 border-r border-zinc-800">出身</th>
                            <th class="p-2 border-r border-zinc-800">初始技能</th>
                            <th class="p-2 border-r border-zinc-800 text-center">技</th>
                            <th class="p-2 border-r border-zinc-800 text-center">體</th>
                            <th class="p-2 border-r border-zinc-800 text-center">心</th>
                            <th class="p-2 text-right">初始經驗值</th>
                        </tr>
                    </thead>
                    <tbody class="divide-y divide-zinc-800/60 font-mono text-[11px]">
                        <tr class="hover:bg-zinc-900/40">
                            <td class="p-2 border-r border-zinc-800 text-center text-amber-300 font-bold">2~4</td>
                            <td class="p-2 border-r border-zinc-800 font-sans">射手</td>
                            <td class="p-2 border-r border-zinc-800 font-sans">射手</td>
                            <td class="p-2 border-r border-zinc-800 text-center text-cyan-300 font-bold">6</td>
                            <td class="p-2 border-r border-zinc-800 text-center text-amber-300 font-bold">8</td>
                            <td class="p-2 border-r border-zinc-800 text-center text-emerald-300 font-bold">6</td>
                            <td class="p-2 text-right text-amber-400 font-bold">2500</td>
                        </tr>
                        <tr class="hover:bg-zinc-900/40">
                            <td class="p-2 border-r border-zinc-800 text-center text-amber-300 font-bold">5~6</td>
                            <td class="p-2 border-r border-zinc-800 font-sans">戰士</td>
                            <td class="p-2 border-r border-zinc-800 font-sans">戰士</td>
                            <td class="p-2 border-r border-zinc-800 text-center text-cyan-300 font-bold">4</td>
                            <td class="p-2 border-r border-zinc-800 text-center text-amber-300 font-bold">11</td>
                            <td class="p-2 border-r border-zinc-800 text-center text-emerald-300 font-bold">5</td>
                            <td class="p-2 text-right text-amber-400 font-bold">2000</td>
                        </tr>
                        <tr class="hover:bg-zinc-900/40">
                            <td class="p-2 border-r border-zinc-800 text-center text-amber-300 font-bold">7</td>
                            <td class="p-2 border-r border-zinc-800 font-sans">拳鬥士</td>
                            <td class="p-2 border-r border-zinc-800 font-sans">拳鬥士</td>
                            <td class="p-2 border-r border-zinc-800 text-center text-cyan-300 font-bold">5</td>
                            <td class="p-2 border-r border-zinc-800 text-center text-amber-300 font-bold">10</td>
                            <td class="p-2 border-r border-zinc-800 text-center text-emerald-300 font-bold">5</td>
                            <td class="p-2 text-right text-amber-400 font-bold">2000</td>
                        </tr>
                        <tr class="hover:bg-zinc-900/40">
                            <td class="p-2 border-r border-zinc-800 text-center text-amber-300 font-bold">8~9</td>
                            <td class="p-2 border-r border-zinc-800 font-sans">神官</td>
                            <td class="p-2 border-r border-zinc-800 font-sans">神聖魔法</td>
                            <td class="p-2 border-r border-zinc-800 text-center text-cyan-300 font-bold">4</td>
                            <td class="p-2 border-r border-zinc-800 text-center text-amber-300 font-bold">7</td>
                            <td class="p-2 border-r border-zinc-800 text-center text-emerald-300 font-bold">9</td>
                            <td class="p-2 text-right text-amber-400 font-bold">2000</td>
                        </tr>
                        <tr class="hover:bg-zinc-900/40">
                            <td class="p-2 border-r border-zinc-800 text-center text-amber-300 font-bold">10~12</td>
                            <td class="p-2 border-r border-zinc-800 font-sans">魔動機師</td>
                            <td class="p-2 border-r border-zinc-800 font-sans">魔動機術</td>
                            <td class="p-2 border-r border-zinc-800 text-center text-cyan-300 font-bold">6</td>
                            <td class="p-2 border-r border-zinc-800 text-center text-amber-300 font-bold">7</td>
                            <td class="p-2 border-r border-zinc-800 text-center text-emerald-300 font-bold">7</td>
                            <td class="p-2 text-right text-amber-400 font-bold">2000</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>

        <!-- 出身表 (規則書 II) -->
        <div class="space-y-2">
            <h4 class="text-xs font-bold text-amber-400 flex items-center justify-between">
                <span><i class="fa-solid fa-table-list mr-1.5"></i>矮人出身背景對照表 (規則書 II)</span>
                <span class="text-[10px] text-zinc-500 font-normal">B 表出身</span>
            </h4>
            <div class="overflow-x-auto rounded-lg border border-zinc-800 bg-zinc-950">
                <table class="w-full text-left text-xs text-zinc-300">
                    <thead class="bg-zinc-900 text-amber-400 font-bold border-b border-zinc-800">
                        <tr>
                            <th class="p-2 border-r border-zinc-800 text-center">2d 骰值</th>
                            <th class="p-2 border-r border-zinc-800">出身</th>
                            <th class="p-2 border-r border-zinc-800">初始技能</th>
                            <th class="p-2 border-r border-zinc-800 text-center">技</th>
                            <th class="p-2 border-r border-zinc-800 text-center">體</th>
                            <th class="p-2 border-r border-zinc-800 text-center">心</th>
                            <th class="p-2 text-right">初始經驗值</th>
                        </tr>
                    </thead>
                    <tbody class="divide-y divide-zinc-800/60 font-mono text-[11px]">
                        <tr class="hover:bg-zinc-900/40">
                            <td class="p-2 border-r border-zinc-800 text-center text-amber-300 font-bold">2~4</td>
                            <td class="p-2 border-r border-zinc-800 font-sans">學者</td>
                            <td class="p-2 border-r border-zinc-800 font-sans">學者</td>
                            <td class="p-2 border-r border-zinc-800 text-center text-cyan-300 font-bold">3</td>
                            <td class="p-2 border-r border-zinc-800 text-center text-amber-300 font-bold">8</td>
                            <td class="p-2 border-r border-zinc-800 text-center text-emerald-300 font-bold">9</td>
                            <td class="p-2 text-right text-amber-400 font-bold">2500</td>
                        </tr>
                        <tr class="hover:bg-zinc-900/40">
                            <td class="p-2 border-r border-zinc-800 text-center text-amber-300 font-bold">5~6</td>
                            <td class="p-2 border-r border-zinc-800 font-sans">遊俠</td>
                            <td class="p-2 border-r border-zinc-800 font-sans">遊俠</td>
                            <td class="p-2 border-r border-zinc-800 text-center text-cyan-300 font-bold">6</td>
                            <td class="p-2 border-r border-zinc-800 text-center text-amber-300 font-bold">9</td>
                            <td class="p-2 border-r border-zinc-800 text-center text-emerald-300 font-bold">5</td>
                            <td class="p-2 text-right text-amber-400 font-bold">2500</td>
                        </tr>
                        <tr class="hover:bg-zinc-900/40">
                            <td class="p-2 border-r border-zinc-800 text-center text-amber-300 font-bold">7</td>
                            <td class="p-2 border-r border-zinc-800 font-sans">練體士</td>
                            <td class="p-2 border-r border-zinc-800 font-sans">練技 (練體士)</td>
                            <td class="p-2 border-r border-zinc-800 text-center text-cyan-300 font-bold">5</td>
                            <td class="p-2 border-r border-zinc-800 text-center text-amber-300 font-bold">9</td>
                            <td class="p-2 border-r border-zinc-800 text-center text-emerald-300 font-bold">6</td>
                            <td class="p-2 text-right text-amber-400 font-bold">2500</td>
                        </tr>
                        <tr class="hover:bg-zinc-900/40">
                            <td class="p-2 border-r border-zinc-800 text-center text-amber-300 font-bold">8~9</td>
                            <td class="p-2 border-r border-zinc-800 font-sans">吟遊詩人</td>
                            <td class="p-2 border-r border-zinc-800 font-sans">咒歌 (吟遊詩人)</td>
                            <td class="p-2 border-r border-zinc-800 text-center text-cyan-300 font-bold">4</td>
                            <td class="p-2 border-r border-zinc-800 text-center text-amber-300 font-bold">8</td>
                            <td class="p-2 border-r border-zinc-800 text-center text-emerald-300 font-bold">8</td>
                            <td class="p-2 text-right text-amber-400 font-bold">2500</td>
                        </tr>
                        <tr class="hover:bg-zinc-900/40">
                            <td class="p-2 border-r border-zinc-800 text-center text-amber-300 font-bold">10~12</td>
                            <td class="p-2 border-r border-zinc-800 font-sans">妖精使</td>
                            <td class="p-2 border-r border-zinc-800 font-sans">妖精魔法</td>
                            <td class="p-2 border-r border-zinc-800 text-center text-cyan-300 font-bold">5</td>
                            <td class="p-2 border-r border-zinc-800 text-center text-amber-300 font-bold">6</td>
                            <td class="p-2 border-r border-zinc-800 text-center text-emerald-300 font-bold">9</td>
                            <td class="p-2 text-right text-amber-400 font-bold">2000</td>
                        </tr>
                        <tr class="hover:bg-zinc-900/40">
                            <td class="p-2 border-r border-zinc-800 text-center text-amber-300 font-bold">-</td>
                            <td class="p-2 border-r border-zinc-800 font-sans">森羅導師</td>
                            <td class="p-2 border-r border-zinc-800 font-sans">德魯伊 (森羅魔法)</td>
                            <td class="p-2 border-r border-zinc-800 text-center text-cyan-300 font-bold">4</td>
                            <td class="p-2 border-r border-zinc-800 text-center text-amber-300 font-bold">7</td>
                            <td class="p-2 border-r border-zinc-800 text-center text-emerald-300 font-bold">9</td>
                            <td class="p-2 text-right text-amber-400 font-bold">2000</td>
                        </tr>
                        <tr class="hover:bg-zinc-900/40">
                            <td class="p-2 border-r border-zinc-800 text-center text-amber-300 font-bold">-</td>
                            <td class="p-2 border-r border-zinc-800 font-sans">騎手</td>
                            <td class="p-2 border-r border-zinc-800 font-sans">騎手技能</td>
                            <td class="p-2 border-r border-zinc-800 text-center text-cyan-300 font-bold">4</td>
                            <td class="p-2 border-r border-zinc-800 text-center text-amber-300 font-bold">10</td>
                            <td class="p-2 border-r border-zinc-800 text-center text-emerald-300 font-bold">6</td>
                            <td class="p-2 text-right text-amber-400 font-bold">2500</td>
                        </tr>
                        <tr class="hover:bg-zinc-900/40">
                            <td class="p-2 border-r border-zinc-800 text-center text-amber-300 font-bold">-</td>
                            <td class="p-2 border-r border-zinc-800 font-sans">煉金術師</td>
                            <td class="p-2 border-r border-zinc-800 font-sans">賦術</td>
                            <td class="p-2 border-r border-zinc-800 text-center text-cyan-300 font-bold">5</td>
                            <td class="p-2 border-r border-zinc-800 text-center text-amber-300 font-bold">9</td>
                            <td class="p-2 border-r border-zinc-800 text-center text-emerald-300 font-bold">6</td>
                            <td class="p-2 text-right text-amber-400 font-bold">2500</td>
                        </tr>
                        <tr class="hover:bg-zinc-900/40">
                            <td class="p-2 border-r border-zinc-800 text-center text-amber-300 font-bold">-</td>
                            <td class="p-2 border-r border-zinc-800 font-sans">軍師</td>
                            <td class="p-2 border-r border-zinc-800 font-sans">軍師技能</td>
                            <td class="p-2 border-r border-zinc-800 text-center text-cyan-300 font-bold">5</td>
                            <td class="p-2 border-r border-zinc-800 text-center text-amber-300 font-bold">8</td>
                            <td class="p-2 border-r border-zinc-800 text-center text-emerald-300 font-bold">7</td>
                            <td class="p-2 text-right text-amber-400 font-bold">2500</td>
                        </tr>
                        <tr class="hover:bg-zinc-900/40">
                            <td class="p-2 border-r border-zinc-800 text-center text-amber-300 font-bold">-</td>
                            <td class="p-2 border-r border-zinc-800 font-sans">天地使</td>
                            <td class="p-2 border-r border-zinc-800 font-sans">天地使技能</td>
                            <td class="p-2 border-r border-zinc-800 text-center text-cyan-300 font-bold">6</td>
                            <td class="p-2 border-r border-zinc-800 text-center text-amber-300 font-bold">10</td>
                            <td class="p-2 border-r border-zinc-800 text-center text-emerald-300 font-bold">4</td>
                            <td class="p-2 text-right text-amber-400 font-bold">2000</td>
                        </tr>
                        <tr class="hover:bg-zinc-900/40">
                            <td class="p-2 border-r border-zinc-800 text-center text-amber-300 font-bold">-</td>
                            <td class="p-2 border-r border-zinc-800 font-sans">舞者</td>
                            <td class="p-2 border-r border-zinc-800 font-sans">舞鬥士</td>
                            <td class="p-2 border-r border-zinc-800 text-center text-cyan-300 font-bold">13</td>
                            <td class="p-2 border-r border-zinc-800 text-center text-amber-300 font-bold">5</td>
                            <td class="p-2 border-r border-zinc-800 text-center text-emerald-300 font-bold">8</td>
                            <td class="p-2 text-right text-amber-400 font-bold">2000</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
    <!-- 塔彼特 (Tabbit) 卡片 -->
    <div class="bg-zinc-900 border border-zinc-800 rounded-xl p-5 space-y-5 shadow-md">
        <!-- 種族標題與基本資訊 -->
        <div class="flex flex-wrap justify-between items-center border-b border-zinc-800 pb-3 gap-2">
            <div class="flex items-center gap-2">
                <span class="text-xs px-2.5 py-1 rounded bg-pink-950 text-pink-300 border border-pink-800 font-bold">人族</span>
                <h3 class="text-lg font-bold text-amber-400">塔彼特 <span class="text-xs text-zinc-500 font-normal font-mono">(Tabbit)</span></h3>
            </div>
            <div class="text-xs text-zinc-400 flex items-center gap-3">
                <span>污穢度：<strong class="text-amber-400">0</strong></span>
                <span>壽命：<strong class="text-zinc-200">約 50 歲 (10歲成人)</strong></span>
            </div>
        </div>

        <!-- 種族背景簡介 -->
        <p class="text-xs text-zinc-300 leading-relaxed bg-zinc-950 p-3.5 rounded-lg border border-zinc-800/80">
            塔彼特族是身高 1 米左右、外表看起來像是直立兔子的種族。體毛顏色各式各樣，手腳掌上長著肉球，能像人類一樣使用道具與穿鞋。愛好蒐集知識，因痴迷於探尋真相而生。有著卓越的魔法才能與掌握複雜魔法的資質，唯獨無法學會神聖魔法（多數認為源於眾神之戰中詛咒之族的後裔傳承）。相對地，因短手短腳而行動較為遲鈍笨拙。10 歲視為成人，多數在 6 歲左右即成為冒險者並探索直至死亡。
        </p>

        <!-- 基本屬性、限制技能與語言 -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
            <div class="bg-zinc-950 p-3 rounded-lg border border-zinc-800 space-y-1">
                <span class="text-amber-400 font-bold block mb-1">
                    <i class="fa-solid fa-language mr-1"></i>初始習得語言
                </span>
                <p class="text-zinc-300">「神紀文明語」的閱讀，以及交易共通語的「會話語」與「閱讀」</p>
            </div>
            <div class="bg-zinc-950 p-3 rounded-lg border border-zinc-800 space-y-1">
                <span class="text-amber-400 font-bold block mb-1">
                    <i class="fa-solid fa-ban mr-1"></i>限制技能
                </span>
                <p class="text-pink-400 font-bold">神聖魔法 (無法選擇與習得)</p>
            </div>
            <div class="bg-zinc-950 p-3 rounded-lg border border-zinc-800 space-y-1">
                <span class="text-amber-400 font-bold block mb-1">
                    <i class="fa-solid fa-dice mr-1"></i>種族能力值
                </span>
                <p class="text-zinc-300 font-mono">A:1d / B:1d / C:1d / D:2d / E:2d+6 / F:2d</p>
            </div>
        </div>

        <!-- 種族特徵 -->
        <div class="bg-zinc-950 p-4 rounded-lg border border-pink-500/30 space-y-3 text-xs">
            <div class="space-y-1">
                <h4 class="font-bold text-pink-300 text-sm flex items-center">
                    <i class="fa-solid fa-brain mr-1.5"></i>種族特徵：［第六感］
                </h4>
                <p class="text-zinc-300 leading-relaxed">
                    擁有強悍的危險感知能力。當進行危險感知判定時，改為使用「冒險者等級 + 智力加值」進行判定。
                </p>
                <div class="pt-2 border-t border-zinc-800/60 space-y-1.5 text-zinc-400">
                    <p>
                        <strong class="text-pink-400 font-medium">［第六感 LV2］(冒險者等級 6 以上)：</strong>
                        進行陷阱迴避判定時，亦改為使用「冒險者等級 + 智力加值」進行判定。
                    </p>
                    <p>
                        <strong class="text-pink-400 font-medium">［第六感 LV3］(冒險者等級 11 以上)：</strong>
                        進行危險感知判定與陷阱迴避判定時，使用「冒險者等級 + 智力加值」判定並獲得 +4 修正。
                    </p>
                </div>
            </div>
        </div>

        <!-- 出身表 (規則書 I) -->
        <div class="space-y-2">
            <h4 class="text-xs font-bold text-amber-400 flex items-center justify-between">
                <span><i class="fa-solid fa-table-list mr-1.5"></i>塔彼特出身背景對照表 (規則書 I)</span>
                <span class="text-[10px] text-zinc-500 font-normal">A 表出身</span>
            </h4>
            <div class="overflow-x-auto rounded-lg border border-zinc-800 bg-zinc-950">
                <table class="w-full text-left text-xs text-zinc-300">
                    <thead class="bg-zinc-900 text-amber-400 font-bold border-b border-zinc-800">
                        <tr>
                            <th class="p-2 border-r border-zinc-800 text-center">2d 骰值</th>
                            <th class="p-2 border-r border-zinc-800">出身</th>
                            <th class="p-2 border-r border-zinc-800">初始技能</th>
                            <th class="p-2 border-r border-zinc-800 text-center">技</th>
                            <th class="p-2 border-r border-zinc-800 text-center">體</th>
                            <th class="p-2 border-r border-zinc-800 text-center">心</th>
                            <th class="p-2 text-right">初始經驗值</th>
                        </tr>
                    </thead>
                    <tbody class="divide-y divide-zinc-800/60 font-mono text-[11px]">
                        <tr class="hover:bg-zinc-900/40">
                            <td class="p-2 border-r border-zinc-800 text-center text-amber-300 font-bold">2~5</td>
                            <td class="p-2 border-r border-zinc-800 font-sans">操靈術師</td>
                            <td class="p-2 border-r border-zinc-800 font-sans">操靈魔法</td>
                            <td class="p-2 border-r border-zinc-800 text-center text-cyan-300 font-bold">6</td>
                            <td class="p-2 border-r border-zinc-800 text-center text-amber-300 font-bold">6</td>
                            <td class="p-2 border-r border-zinc-800 text-center text-emerald-300 font-bold">10</td>
                            <td class="p-2 text-right text-amber-400 font-bold">2000</td>
                        </tr>
                        <tr class="hover:bg-zinc-900/40">
                            <td class="p-2 border-r border-zinc-800 text-center text-amber-300 font-bold">6~7</td>
                            <td class="p-2 border-r border-zinc-800 font-sans">魔術師</td>
                            <td class="p-2 border-r border-zinc-800 font-sans">真語魔法</td>
                            <td class="p-2 border-r border-zinc-800 text-center text-cyan-300 font-bold">5</td>
                            <td class="p-2 border-r border-zinc-800 text-center text-amber-300 font-bold">7</td>
                            <td class="p-2 border-r border-zinc-800 text-center text-emerald-300 font-bold">10</td>
                            <td class="p-2 text-right text-amber-400 font-bold">2000</td>
                        </tr>
                        <tr class="hover:bg-zinc-900/40">
                            <td class="p-2 border-r border-zinc-800 text-center text-amber-300 font-bold">8~9</td>
                            <td class="p-2 border-r border-zinc-800 font-sans">學者</td>
                            <td class="p-2 border-r border-zinc-800 font-sans">學者</td>
                            <td class="p-2 border-r border-zinc-800 text-center text-cyan-300 font-bold">5</td>
                            <td class="p-2 border-r border-zinc-800 text-center text-amber-300 font-bold">7</td>
                            <td class="p-2 border-r border-zinc-800 text-center text-emerald-300 font-bold">10</td>
                            <td class="p-2 text-right text-amber-400 font-bold">2500</td>
                        </tr>
                        <tr class="hover:bg-zinc-900/40">
                            <td class="p-2 border-r border-zinc-800 text-center text-amber-300 font-bold">10~12</td>
                            <td class="p-2 border-r border-zinc-800 font-sans">魔動機師</td>
                            <td class="p-2 border-r border-zinc-800 font-sans">魔動機術</td>
                            <td class="p-2 border-r border-zinc-800 text-center text-cyan-300 font-bold">8</td>
                            <td class="p-2 border-r border-zinc-800 text-center text-amber-300 font-bold">5</td>
                            <td class="p-2 border-r border-zinc-800 text-center text-emerald-300 font-bold">9</td>
                            <td class="p-2 text-right text-amber-400 font-bold">2000</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>

        <!-- 出身表 (規則書 II) -->
        <div class="space-y-2">
            <h4 class="text-xs font-bold text-amber-400 flex items-center justify-between">
                <span><i class="fa-solid fa-table-list mr-1.5"></i>塔彼特出身背景對照表 (規則書 II)</span>
                <span class="text-[10px] text-zinc-500 font-normal">B 表出身</span>
            </h4>
            <div class="overflow-x-auto rounded-lg border border-zinc-800 bg-zinc-950">
                <table class="w-full text-left text-xs text-zinc-300">
                    <thead class="bg-zinc-900 text-amber-400 font-bold border-b border-zinc-800">
                        <tr>
                            <th class="p-2 border-r border-zinc-800 text-center">2d 骰值</th>
                            <th class="p-2 border-r border-zinc-800">出身</th>
                            <th class="p-2 border-r border-zinc-800">初始技能</th>
                            <th class="p-2 border-r border-zinc-800 text-center">技</th>
                            <th class="p-2 border-r border-zinc-800 text-center">體</th>
                            <th class="p-2 border-r border-zinc-800 text-center">心</th>
                            <th class="p-2 text-right">初始經驗值</th>
                        </tr>
                    </thead>
                    <tbody class="divide-y divide-zinc-800/60 font-mono text-[11px]">
                        <tr class="hover:bg-zinc-900/40">
                            <td class="p-2 border-r border-zinc-800 text-center text-amber-300 font-bold">2~5</td>
                            <td class="p-2 border-r border-zinc-800 font-sans">魔導師</td>
                            <td class="p-2 border-r border-zinc-800 font-sans">操靈魔法 & 真語魔法</td>
                            <td class="p-2 border-r border-zinc-800 text-center text-cyan-300 font-bold">5</td>
                            <td class="p-2 border-r border-zinc-800 text-center text-amber-300 font-bold">6</td>
                            <td class="p-2 border-r border-zinc-800 text-center text-emerald-300 font-bold">11</td>
                            <td class="p-2 text-right text-amber-400 font-bold">1000</td>
                        </tr>
                        <tr class="hover:bg-zinc-900/40">
                            <td class="p-2 border-r border-zinc-800 text-center text-amber-300 font-bold">6~7</td>
                            <td class="p-2 border-r border-zinc-800 font-sans">妖精使</td>
                            <td class="p-2 border-r border-zinc-800 font-sans">妖精魔法</td>
                            <td class="p-2 border-r border-zinc-800 text-center text-cyan-300 font-bold">7</td>
                            <td class="p-2 border-r border-zinc-800 text-center text-amber-300 font-bold">5</td>
                            <td class="p-2 border-r border-zinc-800 text-center text-emerald-300 font-bold">10</td>
                            <td class="p-2 text-right text-amber-400 font-bold">2000</td>
                        </tr>
                        <tr class="hover:bg-zinc-900/40">
                            <td class="p-2 border-r border-zinc-800 text-center text-amber-300 font-bold">8~9</td>
                            <td class="p-2 border-r border-zinc-800 font-sans">吟遊詩人</td>
                            <td class="p-2 border-r border-zinc-800 font-sans">咒歌 (吟遊詩人)</td>
                            <td class="p-2 border-r border-zinc-800 text-center text-cyan-300 font-bold">6</td>
                            <td class="p-2 border-r border-zinc-800 text-center text-amber-300 font-bold">7</td>
                            <td class="p-2 border-r border-zinc-800 text-center text-emerald-300 font-bold">9</td>
                            <td class="p-2 text-right text-amber-400 font-bold">2500</td>
                        </tr>
                        <tr class="hover:bg-zinc-900/40">
                            <td class="p-2 border-r border-zinc-800 text-center text-amber-300 font-bold">10~12</td>
                            <td class="p-2 border-r border-zinc-800 font-sans">藥師</td>
                            <td class="p-2 border-r border-zinc-800 font-sans">遊俠</td>
                            <td class="p-2 border-r border-zinc-800 text-center text-cyan-300 font-bold">7</td>
                            <td class="p-2 border-r border-zinc-800 text-center text-amber-300 font-bold">6</td>
                            <td class="p-2 border-r border-zinc-800 text-center text-emerald-300 font-bold">9</td>
                            <td class="p-2 text-right text-amber-400 font-bold">2500</td>
                        </tr>
                        <tr class="hover:bg-zinc-900/40">
                            <td class="p-2 border-r border-zinc-800 text-center text-amber-300 font-bold">-</td>
                            <td class="p-2 border-r border-zinc-800 font-sans">魔神使</td>
                            <td class="p-2 border-r border-zinc-800 font-sans">召異魔法</td>
                            <td class="p-2 border-r border-zinc-800 text-center text-cyan-300 font-bold">6</td>
                            <td class="p-2 border-r border-zinc-800 text-center text-amber-300 font-bold">6</td>
                            <td class="p-2 border-r border-zinc-800 text-center text-emerald-300 font-bold">10</td>
                            <td class="p-2 text-right text-amber-400 font-bold">2000</td>
                        </tr>
                        <tr class="hover:bg-zinc-900/40">
                            <td class="p-2 border-r border-zinc-800 text-center text-amber-300 font-bold">-</td>
                            <td class="p-2 border-r border-zinc-800 font-sans">森羅導師</td>
                            <td class="p-2 border-r border-zinc-800 font-sans">德魯伊 (森羅魔法)</td>
                            <td class="p-2 border-r border-zinc-800 text-center text-cyan-300 font-bold">5</td>
                            <td class="p-2 border-r border-zinc-800 text-center text-amber-300 font-bold">6</td>
                            <td class="p-2 border-r border-zinc-800 text-center text-emerald-300 font-bold">11</td>
                            <td class="p-2 text-right text-amber-400 font-bold">2000</td>
                        </tr>
                        <tr class="hover:bg-zinc-900/40">
                            <td class="p-2 border-r border-zinc-800 text-center text-amber-300 font-bold">-</td>
                            <td class="p-2 border-r border-zinc-800 font-sans">煉金術師</td>
                            <td class="p-2 border-r border-zinc-800 font-sans">賦術</td>
                            <td class="p-2 border-r border-zinc-800 text-center text-cyan-300 font-bold">6</td>
                            <td class="p-2 border-r border-zinc-800 text-center text-amber-300 font-bold">7</td>
                            <td class="p-2 border-r border-zinc-800 text-center text-emerald-300 font-bold">9</td>
                            <td class="p-2 text-right text-amber-400 font-bold">2500</td>
                        </tr>
                        <tr class="hover:bg-zinc-900/40">
                            <td class="p-2 border-r border-zinc-800 text-center text-amber-300 font-bold">-</td>
                            <td class="p-2 border-r border-zinc-800 font-sans">天地使</td>
                            <td class="p-2 border-r border-zinc-800 font-sans">天地使技能</td>
                            <td class="p-2 border-r border-zinc-800 text-center text-cyan-300 font-bold">5</td>
                            <td class="p-2 border-r border-zinc-800 text-center text-amber-300 font-bold">8</td>
                            <td class="p-2 border-r border-zinc-800 text-center text-emerald-300 font-bold">9</td>
                            <td class="p-2 text-right text-amber-400 font-bold">2000</td>
                        </tr>
                        <tr class="hover:bg-zinc-900/40">
                            <td class="p-2 border-r border-zinc-800 text-center text-amber-300 font-bold">-</td>
                            <td class="p-2 border-r border-zinc-800 font-sans">軍師</td>
                            <td class="p-2 border-r border-zinc-800 font-sans">軍師技能</td>
                            <td class="p-2 border-r border-zinc-800 text-center text-cyan-300 font-bold">8</td>
                            <td class="p-2 border-r border-zinc-800 text-center text-amber-300 font-bold">6</td>
                            <td class="p-2 border-r border-zinc-800 text-center text-emerald-300 font-bold">8</td>
                            <td class="p-2 text-right text-amber-400 font-bold">2500</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
    <!-- 符民 (Runefolk) 卡片 -->
    <div class="bg-zinc-900 border border-zinc-800 rounded-xl p-5 space-y-5 shadow-md">
        <div class="flex flex-wrap justify-between items-center border-b border-zinc-800 pb-3 gap-2">
            <div class="flex items-center gap-2">
                <span class="text-xs px-2.5 py-1 rounded bg-blue-950 text-blue-300 border border-blue-800 font-bold">人族</span>
                <h3 class="text-lg font-bold text-amber-400">符民 <span class="text-xs text-zinc-500 font-normal font-mono">(Runefolk)</span></h3>
            </div>
            <div class="text-xs text-zinc-400 flex items-center gap-3">
                <span>污穢度：<strong class="text-amber-400">0</strong></span>
                <span>壽命：<strong class="text-zinc-200">約 50 年 (機能停止)</strong></span>
            </div>
        </div>
        <p class="text-xs text-zinc-300 leading-relaxed bg-zinc-950 p-3.5 rounded-lg border border-zinc-800/80">
            符民是約兩千年前魔動機文明所創造的人造人。男性型體型高大，女性型則十分嬌小。頸部及部分關節/臉部被硬質素材覆蓋。力氣與靈敏度極佳，極適合做為戰士與射手。由於無法聽見神之聲音或看見妖精，極不擅長魔法，但時常成為魔動機師。外貌終生不變。
        </p>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
            <div class="bg-zinc-950 p-3 rounded-lg border border-zinc-800 space-y-1">
                <span class="text-amber-400 font-bold block mb-1"><i class="fa-solid fa-language mr-1"></i>初始習得語言</span>
                <p class="text-zinc-300">魔動機文明語、交易共通語的「會話語」與「閱讀」</p>
            </div>
            <div class="bg-zinc-950 p-3 rounded-lg border border-zinc-800 space-y-1">
                <span class="text-amber-400 font-bold block mb-1"><i class="fa-solid fa-ban mr-1"></i>限制技能</span>
                <p class="text-pink-400 font-bold">妖精使、神官、德魯伊</p>
            </div>
            <div class="bg-zinc-950 p-3 rounded-lg border border-zinc-800 space-y-1">
                <span class="text-amber-400 font-bold block mb-1"><i class="fa-solid fa-dice mr-1"></i>種族能力值</span>
                <p class="text-zinc-300 font-mono">A:2d / B:1d / C:2d / D:2d / E:2d / F:2d</p>
            </div>
        </div>
        <div class="bg-zinc-950 p-4 rounded-lg border border-blue-500/30 space-y-3 text-xs">
            <div class="space-y-1">
                <h4 class="font-bold text-blue-300 text-sm flex items-center"><i class="fa-solid fa-eye mr-1.5"></i>種族特徵：［暗視］</h4>
                <p class="text-zinc-300 leading-relaxed">在黑暗中視物如白天一樣清楚。</p>
            </div>
            <div class="pt-2 border-t border-zinc-800/80 space-y-2">
                <h4 class="font-bold text-blue-300 text-sm flex items-center"><i class="fa-solid fa-bolt mr-1.5"></i>種族特徵：［HP轉換］</h4>
                <p class="text-zinc-300 leading-relaxed">主動作消耗任意 HP，恢復等量 MP。轉換需花費 10 秒（1 輪），一天限用一次。</p>
                <div class="pt-2 border-t border-zinc-800/60 space-y-1.5 text-zinc-400">
                    <p><strong class="text-blue-400 font-medium">［HP轉換 LV2］(等級 6)：</strong> 改為可用「輔助動作」進行轉換。</p>
                    <p><strong class="text-blue-400 font-medium">［HP轉換 LV3］(等級 11)：</strong> 一天可用 2 次。</p>
                </div>
            </div>
        </div>
        <div class="space-y-2">
            <h4 class="text-xs font-bold text-amber-400 flex items-center justify-between"><span><i class="fa-solid fa-table-list mr-1.5"></i>符民出身背景對照表 (規則書 I & II)</span></h4>
            <div class="overflow-x-auto rounded-lg border border-zinc-800 bg-zinc-950">
                <table class="w-full text-left text-xs text-zinc-300">
                    <thead class="bg-zinc-900 text-amber-400 font-bold border-b border-zinc-800">
                        <tr>
                            <th class="p-2 border-r border-zinc-800 text-center">2d 骰值</th>
                            <th class="p-2 border-r border-zinc-800">出身 (R1 / R2)</th>
                            <th class="p-2 border-r border-zinc-800">初始技能</th>
                            <th class="p-2 border-r border-zinc-800 text-center">技</th>
                            <th class="p-2 border-r border-zinc-800 text-center">體</th>
                            <th class="p-2 border-r border-zinc-800 text-center">心</th>
                            <th class="p-2 text-right">初始經驗值</th>
                        </tr>
                    </thead>
                    <tbody class="divide-y divide-zinc-800/60 font-mono text-[11px]">
                        <tr class="hover:bg-zinc-900/40"><td class="p-2 border-r border-zinc-800 text-center text-amber-300 font-bold">2~4</td><td class="p-2 border-r border-zinc-800 font-sans">學者 / 密偵</td><td class="p-2 border-r border-zinc-800 font-sans">學者 / 斥候</td><td class="p-2 border-r border-zinc-800 text-center text-cyan-300 font-bold">8 / 12</td><td class="p-2 border-r border-zinc-800 text-center text-amber-300 font-bold">10 / 6</td><td class="p-2 border-r border-zinc-800 text-center text-emerald-300 font-bold">8 / 8</td><td class="p-2 text-right text-amber-400 font-bold">2500</td></tr>
                        <tr class="hover:bg-zinc-900/40"><td class="p-2 border-r border-zinc-800 text-center text-amber-300 font-bold">5~6</td><td class="p-2 border-r border-zinc-800 font-sans">射手 / 練體士</td><td class="p-2 border-r border-zinc-800 font-sans">射手 / 練技</td><td class="p-2 border-r border-zinc-800 text-center text-cyan-300 font-bold">12 / 10</td><td class="p-2 border-r border-zinc-800 text-center text-amber-300 font-bold">8 / 8</td><td class="p-2 border-r border-zinc-800 text-center text-emerald-300 font-bold">6 / 8</td><td class="p-2 text-right text-amber-400 font-bold">2500</td></tr>
                        <tr class="hover:bg-zinc-900/40"><td class="p-2 border-r border-zinc-800 text-center text-amber-300 font-bold">7</td><td class="p-2 border-r border-zinc-800 font-sans">戰士 / 輕戰士</td><td class="p-2 border-r border-zinc-800 font-sans">戰士(拳鬥士) / 輕戰士</td><td class="p-2 border-r border-zinc-800 text-center text-cyan-300 font-bold">9 / 11</td><td class="p-2 border-r border-zinc-800 text-center text-amber-300 font-bold">12 / 9</td><td class="p-2 border-r border-zinc-800 text-center text-emerald-300 font-bold">5 / 6</td><td class="p-2 text-right text-amber-400 font-bold">2000 / 2500</td></tr>
                        <tr class="hover:bg-zinc-900/40"><td class="p-2 border-r border-zinc-800 text-center text-amber-300 font-bold">8~9</td><td class="p-2 border-r border-zinc-800 font-sans">魔動機師 / 吟遊詩人</td><td class="p-2 border-r border-zinc-800 font-sans">魔動機術 / 咒歌</td><td class="p-2 border-r border-zinc-800 text-center text-cyan-300 font-bold">12 / 8</td><td class="p-2 border-r border-zinc-800 text-center text-amber-300 font-bold">8 / 9</td><td class="p-2 border-r border-zinc-800 text-center text-emerald-300 font-bold">6 / 9</td><td class="p-2 text-right text-amber-400 font-bold">2000 / 2500</td></tr>
                        <tr class="hover:bg-zinc-900/40"><td class="p-2 border-r border-zinc-800 text-center text-amber-300 font-bold">10~12</td><td class="p-2 border-r border-zinc-800 font-sans">魔術師 / 操靈術師</td><td class="p-2 border-r border-zinc-800 font-sans">真語魔法 / 操靈魔法</td><td class="p-2 border-r border-zinc-800 text-center text-cyan-300 font-bold">9 / 7</td><td class="p-2 border-r border-zinc-800 text-center text-amber-300 font-bold">8 / 9</td><td class="p-2 border-r border-zinc-800 text-center text-emerald-300 font-bold">9 / 10</td><td class="p-2 text-right text-amber-400 font-bold">2000</td></tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>

    <!-- 夢魘 (Nightmare) 卡片 -->
    <div class="bg-zinc-900 border border-zinc-800 rounded-xl p-5 space-y-5 shadow-md">
        <div class="flex flex-wrap justify-between items-center border-b border-zinc-800 pb-3 gap-2">
            <div class="flex items-center gap-2">
                <span class="text-xs px-2.5 py-1 rounded bg-purple-950 text-purple-300 border border-purple-800 font-bold">人族</span>
                <h3 class="text-lg font-bold text-amber-400">夢魘 <span class="text-xs text-zinc-500 font-normal font-mono">(Nightmare)</span></h3>
            </div>
            <div class="text-xs text-zinc-400 flex items-center gap-3">
                <span>污穢度：<strong class="text-pink-400">1</strong></span>
                <span>壽命：<strong class="text-zinc-200">不一定 (15歲不老)</strong></span>
            </div>
        </div>
        <p class="text-xs text-zinc-300 leading-relaxed bg-zinc-950 p-3.5 rounded-lg border border-zinc-800/80">
            夢魘是由人類、精靈、矮人或龍人父母突變誕生的種族。頭部有小角、肌膚蒼白帶斑點。是非常卓越的魔法戰士。15 歲成年後不再老去，極受冒險者歡迎。
        </p>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
            <div class="bg-zinc-950 p-3 rounded-lg border border-zinc-800 space-y-1">
                <span class="text-amber-400 font-bold block mb-1"><i class="fa-solid fa-language mr-1"></i>初始習得語言</span>
                <p class="text-zinc-300">與父母種族相同</p>
            </div>
            <div class="bg-zinc-950 p-3 rounded-lg border border-zinc-800 space-y-1">
                <span class="text-amber-400 font-bold block mb-1"><i class="fa-solid fa-ban mr-1"></i>限制技能</span>
                <p class="text-zinc-300">無限制</p>
            </div>
            <div class="bg-zinc-950 p-3 rounded-lg border border-zinc-800 space-y-1">
                <span class="text-amber-400 font-bold block mb-1"><i class="fa-solid fa-dice mr-1"></i>種族能力值</span>
                <p class="text-zinc-300 font-mono">A:2d / B:2d / C:1d / D:1d / E:2d / F:2d</p>
            </div>
        </div>
        <div class="bg-zinc-950 p-4 rounded-lg border border-purple-500/30 space-y-3 text-xs">
            <div class="space-y-1">
                <h4 class="font-bold text-purple-300 text-sm flex items-center"><i class="fa-solid fa-triangle-exclamation mr-1.5"></i>弱點與屬性</h4>
                <p class="text-zinc-300 leading-relaxed">受銀製武器及弱點屬性攻擊時算出傷害 +2。<br>弱點屬性：人類:土 / 精靈:水冰 / 矮人:火 / 龍人:風</p>
            </div>
            <div class="pt-2 border-t border-zinc-800/80 space-y-2">
                <h4 class="font-bold text-purple-300 text-sm flex items-center"><i class="fa-solid fa-mask mr-1.5"></i>種族特徵：［異貌］</h4>
                <p class="text-zinc-300 leading-relaxed">輔助動作發動。角變大、膚色蒼白，身穿重甲使用魔法無減值且不需詠唱/動作（仍需發動體）。</p>
                <div class="pt-2 border-t border-zinc-800/60 space-y-1.5 text-zinc-400">
                    <p><strong class="text-purple-400 font-medium">［異貌 LV2］(等級 6)：</strong> 異貌時物理與魔法攻擊追加傷害 +1。</p>
                    <p><strong class="text-purple-400 font-medium">［異貌 LV3］(等級 11)：</strong> 異貌時命中與魔法行使判定 +1。</p>
                </div>
            </div>
        </div>
    </div>

    <!-- 里坎特 (Lycanth) 卡片 -->
    <div class="bg-zinc-900 border border-zinc-800 rounded-xl p-5 space-y-5 shadow-md">
        <div class="flex flex-wrap justify-between items-center border-b border-zinc-800 pb-3 gap-2">
            <div class="flex items-center gap-2">
                <span class="text-xs px-2.5 py-1 rounded bg-amber-950 text-amber-300 border border-amber-800 font-bold">人族</span>
                <h3 class="text-lg font-bold text-amber-400">里坎特 <span class="text-xs text-zinc-500 font-normal font-mono">(Lycanth)</span></h3>
            </div>
            <div class="text-xs text-zinc-400 flex items-center gap-3">
                <span>污穢度：<strong class="text-amber-400">0</strong></span>
                <span>壽命：<strong class="text-zinc-200">同人類</strong></span>
            </div>
        </div>
        <p class="text-xs text-zinc-300 leading-relaxed bg-zinc-950 p-3.5 rounded-lg border border-zinc-800/80">
            阿魯符雷姆大陸擁有獸耳與毛茸尾巴的土著。能將頭部獸化為肉食動物以獲得強大筋力，敏捷優秀，極適合做為戰士、密偵與獵人。
        </p>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
            <div class="bg-zinc-950 p-3 rounded-lg border border-zinc-800 space-y-1">
                <span class="text-amber-400 font-bold block mb-1"><i class="fa-solid fa-language mr-1"></i>初始習得語言</span>
                <p class="text-zinc-300">獸化人語、交易共通語的「會話語」與「閱讀」</p>
            </div>
            <div class="bg-zinc-950 p-3 rounded-lg border border-zinc-800 space-y-1">
                <span class="text-amber-400 font-bold block mb-1"><i class="fa-solid fa-ban mr-1"></i>限制技能</span>
                <p class="text-zinc-300">無限制 (獸化時無法使用多數魔法)</p>
            </div>
            <div class="bg-zinc-950 p-3 rounded-lg border border-zinc-800 space-y-1">
                <span class="text-amber-400 font-bold block mb-1"><i class="fa-solid fa-dice mr-1"></i>種族能力值</span>
                <p class="text-zinc-300 font-mono">A:1d / B:1d+3 / C:2d / D:2d / E:1d+6 / F:1d</p>
            </div>
        </div>
        <div class="bg-zinc-950 p-4 rounded-lg border border-amber-500/30 space-y-3 text-xs">
            <div class="space-y-1">
                <h4 class="font-bold text-amber-300 text-sm flex items-center"><i class="fa-solid fa-paw mr-1.5"></i>種族特徵：［暗視 (獸化時)］與［獸化］</h4>
                <p class="text-zinc-300 leading-relaxed">主動作變形。筋力加值 +2，獲得暗視。但無法使用言語（只能講獸化人語），且真語/操靈/妖精/魔動機魔法皆無法使用（神聖魔法可用）。</p>
                <div class="pt-2 border-t border-zinc-800/60 space-y-1.5 text-zinc-400">
                    <p><strong class="text-amber-400 font-medium">［獸變貌 LV2］(等級 6)：</strong> 一天一次可用輔助動作進行獸化。</p>
                    <p><strong class="text-amber-400 font-medium">［獸變貌 LV3］(等級 11)：</strong> 獸化時敏捷加值 +1。</p>
                </div>
            </div>
        </div>
    </div>

    <!-- 龍人 (Drake-kin / Dragon-kin) 卡片 -->
    <div class="bg-zinc-900 border border-zinc-800 rounded-xl p-5 space-y-5 shadow-md">
        <div class="flex flex-wrap justify-between items-center border-b border-zinc-800 pb-3 gap-2">
            <div class="flex items-center gap-2">
                <span class="text-xs px-2.5 py-1 rounded bg-emerald-950 text-emerald-300 border border-emerald-800 font-bold">人族</span>
                <h3 class="text-lg font-bold text-amber-400">龍人 <span class="text-xs text-zinc-500 font-normal font-mono">(Dragon-kin)</span></h3>
            </div>
            <div class="text-xs text-zinc-400 flex items-center gap-3">
                <span>污穢度：<strong class="text-amber-400">0</strong></span>
                <span>壽命：<strong class="text-zinc-200">約 300 歲 (30歲成年)</strong></span>
            </div>
        </div>
        <p class="text-xs text-zinc-300 leading-relaxed bg-zinc-950 p-3.5 rounded-lg border border-zinc-800/80">
            雙足站立的小型龍族，卵生，經三次脫皮後成年。熱衷對外交流與商業，與人類友好共存。
        </p>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
            <div class="bg-zinc-950 p-3 rounded-lg border border-zinc-800 space-y-1">
                <span class="text-amber-400 font-bold block mb-1"><i class="fa-solid fa-language mr-1"></i>初始習得語言</span>
                <p class="text-zinc-300">龍語、交易共通語的「會話語」與「閱讀」</p>
            </div>
            <div class="bg-zinc-950 p-3 rounded-lg border border-zinc-800 space-y-1">
                <span class="text-amber-400 font-bold block mb-1"><i class="fa-solid fa-ban mr-1"></i>限制技能</span>
                <p class="text-zinc-300">無限制</p>
            </div>
            <div class="bg-zinc-950 p-3 rounded-lg border border-zinc-800 space-y-1">
                <span class="text-amber-400 font-bold block mb-1"><i class="fa-solid fa-dice mr-1"></i>種族能力值</span>
                <p class="text-zinc-300 font-mono">A:1d / B:2d / C:2d / D:2d+6 / E:1d / F:2d</p>
            </div>
        </div>
        <div class="bg-zinc-950 p-4 rounded-lg border border-emerald-500/30 space-y-3 text-xs">
            <div class="space-y-1">
                <h4 class="font-bold text-emerald-300 text-sm flex items-center"><i class="fa-solid fa-shield mr-1.5"></i>［鱗之皮膚］與［尾巴武器］</h4>
                <p class="text-zinc-300 leading-relaxed">防護點 +1，且能將尾巴做為武器使用。</p>
            </div>
            <div class="pt-2 border-t border-zinc-800/80 space-y-2">
                <h4 class="font-bold text-emerald-300 text-sm flex items-center"><i class="fa-solid fa-feather-pointed mr-1.5"></i>種族特徵：［劍之加護／風之翼］</h4>
                <p class="text-zinc-300 leading-relaxed">輔助動作發動飛行。一天累計 1 分鐘（6 輪），飛行期間命中與迴避 +1，可載重 200kg 內。</p>
                <div class="pt-2 border-t border-zinc-800/60 space-y-1.5 text-zinc-400">
                    <p><strong class="text-emerald-400 font-medium">［風之翼 LV2］(等級 6)：</strong> 飛行時可用全力移動。</p>
                    <p><strong class="text-emerald-400 font-medium">［風之翼 LV3］(等級 11)：</strong> 一天飛行時間增為 2 分鐘。</p>
                </div>
            </div>
        </div>
    </div>

    <!-- 草原妖精 (Grassrunner) 卡片 -->
    <div class="bg-zinc-900 border border-zinc-800 rounded-xl p-5 space-y-5 shadow-md">
        <div class="flex flex-wrap justify-between items-center border-b border-zinc-800 pb-3 gap-2">
            <div class="flex items-center gap-2">
                <span class="text-xs px-2.5 py-1 rounded bg-lime-950 text-lime-300 border border-lime-800 font-bold">人族</span>
                <h3 class="text-lg font-bold text-amber-400">草原妖精 <span class="text-xs text-zinc-500 font-normal font-mono">(Grassrunner)</span></h3>
            </div>
            <div class="text-xs text-zinc-400 flex items-center gap-3">
                <span>污穢度：<strong class="text-amber-400">0</strong></span>
                <span>壽命：<strong class="text-zinc-200">約 200 歲 (15歲成人)</strong></span>
            </div>
        </div>
        <p class="text-xs text-zinc-300 leading-relaxed bg-zinc-950 p-3.5 rounded-lg border border-zinc-800/80">
            樂天且喜愛漫無目的流浪的小人族。體質極度特殊，完全對瑪那無反應，充滿好奇心。
        </p>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
            <div class="bg-zinc-950 p-3 rounded-lg border border-zinc-800 space-y-1">
                <span class="text-amber-400 font-bold block mb-1"><i class="fa-solid fa-language mr-1"></i>初始習得語言</span>
                <p class="text-zinc-300">草原妖精語、交易共通語的「會話語」與「閱讀」</p>
            </div>
            <div class="bg-zinc-950 p-3 rounded-lg border border-zinc-800 space-y-1">
                <span class="text-amber-400 font-bold block mb-1"><i class="fa-solid fa-ban mr-1"></i>限制技能</span>
                <p class="text-zinc-300">無限制 (但習得魔法亦無 MP 額度)</p>
            </div>
            <div class="bg-zinc-950 p-3 rounded-lg border border-zinc-800 space-y-1">
                <span class="text-amber-400 font-bold block mb-1"><i class="fa-solid fa-dice mr-1"></i>種族能力值</span>
                <p class="text-zinc-300 font-mono">A:2d / B:2d / C:1d / D:2d+6 / E:1d / F:2d+6</p>
            </div>
        </div>
        <div class="bg-zinc-950 p-4 rounded-lg border border-lime-500/30 space-y-3 text-xs">
            <div class="space-y-1">
                <h4 class="font-bold text-lime-300 text-sm flex items-center"><i class="fa-solid fa-ban-smoke mr-1.5"></i>［瑪娜絕緣］與［與蟲或植物溝通］</h4>
                <p class="text-zinc-300 leading-relaxed">沒有 MP（可施放魔晶石魔法）；精神抵抗成功時效果一律變為［消滅］。能感受昆蟲與植物不安或告知危險。</p>
                <div class="pt-2 border-t border-zinc-800/60 space-y-1.5 text-zinc-400">
                    <p><strong class="text-lime-400 font-medium">［瑪娜絕緣 LV2］(等級 6)：</strong> 主動作嘗試解除魔法（冒險者等級+精神加值對抗魔法行使值）。</p>
                    <p><strong class="text-lime-400 font-medium">［瑪娜絕緣 LV3］(等級 11)：</strong> 難以被魔法知覺感知，對［知覺:魔法］敵人之命中/迴避/隱密 +1。</p>
                </div>
            </div>
        </div>
    </div>

    <!-- 樹精靈 (Dryad-kin) 卡片 -->
    <div class="bg-zinc-900 border border-zinc-800 rounded-xl p-5 space-y-5 shadow-md">
        <div class="flex flex-wrap justify-between items-center border-b border-zinc-800 pb-3 gap-2">
            <div class="flex items-center gap-2">
                <span class="text-xs px-2.5 py-1 rounded bg-teal-950 text-teal-300 border border-teal-800 font-bold">人族</span>
                <h3 class="text-lg font-bold text-amber-400">樹精靈 <span class="text-xs text-zinc-500 font-normal font-mono">(Dryad-kin)</span></h3>
            </div>
            <div class="text-xs text-zinc-400 flex items-center gap-3">
                <span>污穢度：<strong class="text-amber-400">0</strong></span>
                <span>壽命：<strong class="text-zinc-200">短命種10年 / 長命種300年</strong></span>
            </div>
        </div>
        <p class="text-xs text-zinc-300 leading-relaxed bg-zinc-950 p-3.5 rounded-lg border border-zinc-800/80">
            植物變化成的人族。頭、肩或手腕會開出花朵並隨情感開花或萎蔫。內部為植物結構，生命力極強，不需睡眠。
        </p>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
            <div class="bg-zinc-950 p-3 rounded-lg border border-zinc-800 space-y-1">
                <span class="text-amber-400 font-bold block mb-1"><i class="fa-solid fa-language mr-1"></i>初始習得語言</span>
                <p class="text-zinc-300">妖精語、交易共通語的「會話語」與「閱讀」</p>
            </div>
            <div class="bg-zinc-950 p-3 rounded-lg border border-zinc-800 space-y-1">
                <span class="text-amber-400 font-bold block mb-1"><i class="fa-solid fa-ban mr-1"></i>限制技能</span>
                <p class="text-zinc-300">無限制</p>
            </div>
            <div class="bg-zinc-950 p-3 rounded-lg border border-zinc-800 space-y-1">
                <span class="text-amber-400 font-bold block mb-1"><i class="fa-solid fa-dice mr-1"></i>種族能力值</span>
                <p class="text-zinc-300 font-mono">A:1d / B:1d / C:1d / D:2d+6 / E:1d / F:1d</p>
            </div>
        </div>
        <div class="bg-zinc-950 p-4 rounded-lg border border-teal-500/30 space-y-3 text-xs">
            <div class="space-y-1">
                <h4 class="font-bold text-teal-300 text-sm flex items-center"><i class="fa-solid fa-seedling mr-1.5"></i>種族特徵：［旺盛的生命力］</h4>
                <p class="text-zinc-300 leading-relaxed">一生不需睡眠。每日 6 點自動回復 20% HP，MP 自動補滿。</p>
                <div class="pt-2 border-t border-zinc-800/60 space-y-1.5 text-zinc-400">
                    <p><strong class="text-teal-400 font-medium">［生命力 LV2］(等級 6)：</strong> 在自然日光照射下，生命抵抗與生死判定 +4。</p>
                    <p><strong class="text-teal-400 font-medium">［生命力 LV3］(等級 11)：</strong> 每日 18 點額外自動回復 20% HP 與全滿 MP。</p>
                </div>
            </div>
        </div>
    </div>

    <!-- 半魔人 (Soleil / Abyss-born variant) 卡片 -->
    <div class="bg-zinc-900 border border-zinc-800 rounded-xl p-5 space-y-5 shadow-md">
        <div class="flex flex-wrap justify-between items-center border-b border-zinc-800 pb-3 gap-2">
            <div class="flex items-center gap-2">
                <span class="text-xs px-2.5 py-1 rounded bg-indigo-950 text-indigo-300 border border-indigo-800 font-bold">人族</span>
                <h3 class="text-lg font-bold text-amber-400">半魔人 <span class="text-xs text-zinc-500 font-normal font-mono">(Demon-hybrid)</span></h3>
            </div>
            <div class="text-xs text-zinc-400 flex items-center gap-3">
                <span>污穢度：<strong class="text-amber-400">0</strong></span>
                <span>壽命：<strong class="text-zinc-200">約 50 年 (可假死停滯)</strong></span>
            </div>
        </div>
        <p class="text-xs text-zinc-300 leading-relaxed bg-zinc-950 p-3.5 rounded-lg border border-zinc-800/80">
            魔法文明時代將人類與魔物融合的人造種族，使命是守護奈落之牆。體內瑪那會結晶化為寶玉顯現在皮膚表面。可自主進入假死狀態防老。
        </p>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
            <div class="bg-zinc-950 p-3 rounded-lg border border-zinc-800 space-y-1">
                <span class="text-amber-400 font-bold block mb-1"><i class="fa-solid fa-language mr-1"></i>初始習得語言</span>
                <p class="text-zinc-300">魔神語、交易共通語的「會話語」與「閱讀」</p>
            </div>
            <div class="bg-zinc-950 p-3 rounded-lg border border-zinc-800 space-y-1">
                <span class="text-amber-400 font-bold block mb-1"><i class="fa-solid fa-ban mr-1"></i>限制技能</span>
                <p class="text-zinc-300">無限制</p>
            </div>
            <div class="bg-zinc-950 p-3 rounded-lg border border-zinc-800 space-y-1">
                <span class="text-amber-400 font-bold block mb-1"><i class="fa-solid fa-dice mr-1"></i>種族能力值</span>
                <p class="text-zinc-300 font-mono">A:2d / B:2d / C:1d / D:1d+3 / E:2d / F:2d+3</p>
            </div>
        </div>
        <div class="bg-zinc-950 p-4 rounded-lg border border-indigo-500/30 space-y-3 text-xs">
            <div class="space-y-1">
                <h4 class="font-bold text-indigo-300 text-sm flex items-center"><i class="fa-solid fa-link mr-1.5"></i>種族特徵：［心靈相通］</h4>
                <p class="text-zinc-300 leading-relaxed">輔助動作指定 10m 內能看見的角色心靈通訊。鼓舞動物/幻獸騎獸時，騎獸命中與迴避 +1（持續 1 分鐘，每 6 小時一次）。</p>
                <div class="pt-2 border-t border-zinc-800/60 space-y-1.5 text-zinc-400">
                    <p><strong class="text-indigo-400 font-medium">［心靈相通 LV2］(等級 6)：</strong> 通訊射程延長至 30m。</p>
                    <p><strong class="text-indigo-400 font-medium">［心靈相通 LV3］(等級 11)：</strong> 騎獸鼓舞效果額外 +1 (共 +2)。</p>
                </div>
            </div>
        </div>
    </div>

    <!-- 矮精靈 (Leprechaun) 卡片 -->
    <div class="bg-zinc-900 border border-zinc-800 rounded-xl p-5 space-y-5 shadow-md">
        <div class="flex flex-wrap justify-between items-center border-b border-zinc-800 pb-3 gap-2">
            <div class="flex items-center gap-2">
                <span class="text-xs px-2.5 py-1 rounded bg-amber-950 text-amber-300 border border-amber-800 font-bold">人族</span>
                <h3 class="text-lg font-bold text-amber-400">矮精靈 <span class="text-xs text-zinc-500 font-normal font-mono">(Leprechaun)</span></h3>
            </div>
            <div class="text-xs text-zinc-400 flex items-center gap-3">
                <span>污穢度：<strong class="text-amber-400">0</strong></span>
                <span>壽命：<strong class="text-zinc-200">約 200 歲 (15歲成人)</strong></span>
            </div>
        </div>
        <p class="text-xs text-zinc-300 leading-relaxed bg-zinc-950 p-3.5 rounded-lg border border-zinc-800/80">
            身高約 130cm 的嬌小種族，擁有毛茸茸大耳朵。擅長使用道具與魔動機術，並具備隱身匿蹤能力。
        </p>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
            <div class="bg-zinc-950 p-3 rounded-lg border border-zinc-800 space-y-1">
                <span class="text-amber-400 font-bold block mb-1"><i class="fa-solid fa-language mr-1"></i>初始習得語言</span>
                <p class="text-zinc-300">魔動機文明語、交易共通語的「會話語」與「閱讀」</p>
            </div>
            <div class="bg-zinc-950 p-3 rounded-lg border border-zinc-800 space-y-1">
                <span class="text-amber-400 font-bold block mb-1"><i class="fa-solid fa-ban mr-1"></i>限制技能</span>
                <p class="text-zinc-300">無限制</p>
            </div>
            <div class="bg-zinc-950 p-3 rounded-lg border border-zinc-800 space-y-1">
                <span class="text-amber-400 font-bold block mb-1"><i class="fa-solid fa-dice mr-1"></i>種族能力值</span>
                <p class="text-zinc-300 font-mono">A:2d / B:1d / C:2d / D:2d / E:2d / F:2d</p>
            </div>
        </div>
        <div class="bg-zinc-950 p-4 rounded-lg border border-amber-500/30 space-y-3 text-xs">
            <div class="space-y-1">
                <h4 class="font-bold text-amber-300 text-sm flex items-center"><i class="fa-solid fa-ghost mr-1.5"></i>［夜視］、［無形之手］與［隱形高手］</h4>
                <p class="text-zinc-300 leading-relaxed">具備暗視能力。裝飾品「其他」欄位視為有 2 個。消耗 5 MP 可主動作隱形（效果同自我隱匿術）。</p>
                <div class="pt-2 border-t border-zinc-800/60 space-y-1.5 text-zinc-400">
                    <p><strong class="text-amber-400 font-medium">［無形之手 LV2］(等級 6)：</strong> 裝飾品「其他」欄位增為 3 個。</p>
                    <p><strong class="text-amber-400 font-medium">［無形之手 LV3］(等級 11)：</strong> 一輪一次可用輔助動作替換裝飾品。</p>
                </div>
            </div>
        </div>
    </div>

    <!-- 血族 (Arv) 卡片 -->
    <div class="bg-zinc-900 border border-zinc-800 rounded-xl p-5 space-y-5 shadow-md">
        <div class="flex flex-wrap justify-between items-center border-b border-zinc-800 pb-3 gap-2">
            <div class="flex items-center gap-2">
                <span class="text-xs px-2.5 py-1 rounded bg-red-950 text-red-300 border border-red-800 font-bold">人族</span>
                <h3 class="text-lg font-bold text-amber-400">血族 <span class="text-xs text-zinc-500 font-normal font-mono">(Arv)</span></h3>
            </div>
            <div class="text-xs text-zinc-400 flex items-center gap-3">
                <span>污穢度：<strong class="text-pink-400">1</strong></span>
                <span>壽命：<strong class="text-zinc-200">約 250 歲 (15歲成人)</strong></span>
            </div>
        </div>
        <p class="text-xs text-zinc-300 leading-relaxed bg-zinc-950 p-3.5 rounded-lg border border-zinc-800/80">
            擁有蒼白膚色與紅金瞳孔的稀少種族，傳言為吸血鬼轉生。靈魂帶有污穢，每週需從人類或蠻族攝取瑪那維生。
        </p>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
            <div class="bg-zinc-950 p-3 rounded-lg border border-zinc-800 space-y-1">
                <span class="text-amber-400 font-bold block mb-1"><i class="fa-solid fa-language mr-1"></i>初始習得語言</span>
                <p class="text-zinc-300">地方語、交易共通語的「會話語」與「閱讀」</p>
            </div>
            <div class="bg-zinc-950 p-3 rounded-lg border border-zinc-800 space-y-1">
                <span class="text-amber-400 font-bold block mb-1"><i class="fa-solid fa-ban mr-1"></i>限制技能</span>
                <p class="text-zinc-300">無限制</p>
            </div>
            <div class="bg-zinc-950 p-3 rounded-lg border border-zinc-800 space-y-1">
                <span class="text-amber-400 font-bold block mb-1"><i class="fa-solid fa-dice mr-1"></i>種族能力值</span>
                <p class="text-zinc-300 font-mono">A:1d / B:1d+3 / C:2d+3 / D:2d / E:1d+6 / F:1d</p>
            </div>
        </div>
        <div class="bg-zinc-950 p-4 rounded-lg border border-red-500/30 space-y-3 text-xs">
            <div class="space-y-1">
                <h4 class="font-bold text-red-300 text-sm flex items-center"><i class="fa-solid fa-vial-circle-check mr-1.5"></i>［夜視］與［魔力攝取］</h4>
                <p class="text-zinc-300 leading-relaxed">暗視。主動作吸取目標 MP 補充己用（消耗對手 MP = 精神加值+污穢點）。一週未吸取瑪那則判定-4 且無法回復 HP/MP。</p>
                <div class="pt-2 border-t border-zinc-800/60 space-y-1.5 text-zinc-400">
                    <p><strong class="text-red-400 font-medium">［魔力攝取 LV2］(等級 6)：</strong> 射程延長至 10m。</p>
                    <p><strong class="text-red-400 font-medium">［魔力攝取 LV3］(等級 11)：</strong> 吸取量增為（精神加值 + 污穢點 + 2）。</p>
                </div>
            </div>
        </div>
    </div>

    <!-- 守護者 (Spriggan) 卡片 -->
    <div class="bg-zinc-900 border border-zinc-800 rounded-xl p-5 space-y-5 shadow-md">
        <div class="flex flex-wrap justify-between items-center border-b border-zinc-800 pb-3 gap-2">
            <div class="flex items-center gap-2">
                <span class="text-xs px-2.5 py-1 rounded bg-stone-900 text-stone-300 border border-stone-700 font-bold">人族</span>
                <h3 class="text-lg font-bold text-amber-400">守護者 <span class="text-xs text-zinc-500 font-normal font-mono">(Spriggan)</span></h3>
            </div>
            <div class="text-xs text-zinc-400 flex items-center gap-3">
                <span>污穢度：<strong class="text-amber-400">0</strong></span>
                <span>壽命：<strong class="text-zinc-200">約 350 歲</strong></span>
            </div>
        </div>
        <p class="text-xs text-zinc-300 leading-relaxed bg-zinc-950 p-3.5 rounded-lg border border-zinc-800/80">
            古代魔法文明遺跡中守護祕寶的古老種族。平時體型嬌小，戰鬥時可變身為 3m 巨大巨人發揮極致體能。
        </p>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
            <div class="bg-zinc-950 p-3 rounded-lg border border-zinc-800 space-y-1">
                <span class="text-amber-400 font-bold block mb-1"><i class="fa-solid fa-language mr-1"></i>初始習得語言</span>
                <p class="text-zinc-300">魔法文明語、巨人語、交易共通語的「會話語」與「閱讀」</p>
            </div>
            <div class="bg-zinc-950 p-3 rounded-lg border border-zinc-800 space-y-1">
                <span class="text-amber-400 font-bold block mb-1"><i class="fa-solid fa-ban mr-1"></i>限制技能</span>
                <p class="text-zinc-300">無限制</p>
            </div>
            <div class="bg-zinc-950 p-3 rounded-lg border border-zinc-800 space-y-1">
                <span class="text-amber-400 font-bold block mb-1"><i class="fa-solid fa-dice mr-1"></i>種族能力值</span>
                <p class="text-zinc-300 font-mono">A:1d / B:2d / C:1d / D:1d / E:2d / F:1d</p>
            </div>
        </div>
        <div class="bg-zinc-950 p-4 rounded-lg border border-stone-500/30 space-y-3 text-xs">
            <div class="space-y-1">
                <h4 class="font-bold text-stone-300 text-sm flex items-center"><i class="fa-solid fa-person-arrow-up-from-line mr-1.5"></i>［夜視］與［巨人化］</h4>
                <p class="text-zinc-300 leading-relaxed">暗視。主動作巨人化：敏捷-6，筋力與生命力+12（現有/上限 HP 提升），持續 10 分鐘，結束後扣 12 HP，一日限 2 次。</p>
                <div class="pt-2 border-t border-zinc-800/60 space-y-1.5 text-zinc-400">
                    <p><strong class="text-stone-400 font-medium">［巨人化 LV2］(等級 6)：</strong> 一天可執行 3 次，且可用主動作主動變回原樣。</p>
                    <p><strong class="text-stone-400 font-medium">［巨人化 LV3］(等級 11)：</strong> 體型切換改為可用「輔助動作」執行。</p>
                </div>
            </div>
        </div>
    </div>

    <!-- 深淵之子 (Abyss-born) 卡片 -->
    <div class="bg-zinc-900 border border-zinc-800 rounded-xl p-5 space-y-5 shadow-md">
        <div class="flex flex-wrap justify-between items-center border-b border-zinc-800 pb-3 gap-2">
            <div class="flex items-center gap-2">
                <span class="text-xs px-2.5 py-1 rounded bg-violet-950 text-violet-300 border border-violet-800 font-bold">人族</span>
                <h3 class="text-lg font-bold text-amber-400">深淵之子 <span class="text-xs text-zinc-500 font-normal font-mono">(Abyss-born)</span></h3>
            </div>
            <div class="text-xs text-zinc-400 flex items-center gap-3">
                <span>污穢度：<strong class="text-amber-400">0</strong></span>
                <span>壽命：<strong class="text-zinc-200">約 100 歲</strong></span>
            </div>
        </div>
        <p class="text-xs text-zinc-300 leading-relaxed bg-zinc-950 p-3.5 rounded-lg border border-zinc-800/80">
            在「奈落的魔域」中受孕誕生的異端兒，身體部分皮膚或眼睛呈現暗紫色。極適合做為魔法戰士。
        </p>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
            <div class="bg-zinc-950 p-3 rounded-lg border border-zinc-800 space-y-1">
                <span class="text-amber-400 font-bold block mb-1"><i class="fa-solid fa-language mr-1"></i>初始習得語言</span>
                <p class="text-zinc-300">地方語、交易共通語的「會話語」與「閱讀」</p>
            </div>
            <div class="bg-zinc-950 p-3 rounded-lg border border-zinc-800 space-y-1">
                <span class="text-amber-400 font-bold block mb-1"><i class="fa-solid fa-ban mr-1"></i>限制技能</span>
                <p class="text-zinc-300">無限制</p>
            </div>
            <div class="bg-zinc-950 p-3 rounded-lg border border-zinc-800 space-y-1">
                <span class="text-amber-400 font-bold block mb-1"><i class="fa-solid fa-dice mr-1"></i>種族能力值</span>
                <p class="text-zinc-300 font-mono">A:2d / B:1d / C:1d+6 / D:2d / E:2d / F:1d</p>
            </div>
        </div>
        <div class="bg-zinc-950 p-4 rounded-lg border border-violet-500/30 space-y-3 text-xs">
            <div class="space-y-1">
                <h4 class="font-bold text-violet-300 text-sm flex items-center"><i class="fa-solid fa-dna mr-1.5"></i>種族特徵分支 (三選一)</h4>
                <p class="text-zinc-300 leading-relaxed">
                    • <strong>深淵之臂：</strong> 單臂紫化，近戰武器追加傷害 +2 (LV6+1 / LV11+1)。<br>
                    • <strong>深淵之身：</strong> 軀幹紫化，防護點 +1 (LV6+1 / LV11+1)。<br>
                    • <strong>深淵之眼：</strong> 單眼紫化，睜眼（每日限 6 輪）時命中判定 +1 (LV6+1 / LV11無時限)。
                </p>
            </div>
        </div>
    </div>

    <!-- 慧人 (Highman) 卡片 -->
    <div class="bg-zinc-900 border border-zinc-800 rounded-xl p-5 space-y-5 shadow-md">
        <div class="flex flex-wrap justify-between items-center border-b border-zinc-800 pb-3 gap-2">
            <div class="flex items-center gap-2">
                <span class="text-xs px-2.5 py-1 rounded bg-cyan-950 text-cyan-300 border border-cyan-800 font-bold">人族</span>
                <h3 class="text-lg font-bold text-amber-400">慧人 <span class="text-xs text-zinc-500 font-normal font-mono">(Highman)</span></h3>
            </div>
            <div class="text-xs text-zinc-400 flex items-center gap-3">
                <span>污穢度：<strong class="text-amber-400">0</strong></span>
                <span>壽命：<strong class="text-zinc-200">約 30 歲</strong></span>
            </div>
        </div>
        <p class="text-xs text-zinc-300 leading-relaxed bg-zinc-950 p-3.5 rounded-lg border border-zinc-800/80">
            魔法文明時代追求完美人類的實驗產物。身上刻有魔方陣，智能與魔力極高，但生命力與壽命極短。
        </p>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
            <div class="bg-zinc-950 p-3 rounded-lg border border-zinc-800 space-y-1">
                <span class="text-amber-400 font-bold block mb-1"><i class="fa-solid fa-language mr-1"></i>初始習得語言</span>
                <p class="text-zinc-300">魔法文明語、交易共通語的「會話語」與「閱讀」</p>
            </div>
            <div class="bg-zinc-950 p-3 rounded-lg border border-zinc-800 space-y-1">
                <span class="text-amber-400 font-bold block mb-1"><i class="fa-solid fa-ban mr-1"></i>限制技能</span>
                <p class="text-zinc-300">無限制</p>
            </div>
            <div class="bg-zinc-950 p-3 rounded-lg border border-zinc-800 space-y-1">
                <span class="text-amber-400 font-bold block mb-1"><i class="fa-solid fa-dice mr-1"></i>種族能力值</span>
                <p class="text-zinc-300 font-mono">A:2d / B:1d / C:2d / D:1d / E:1d / F:1d</p>
            </div>
        </div>
        <div class="bg-zinc-950 p-4 rounded-lg border border-cyan-500/30 space-y-3 text-xs">
            <div class="space-y-1">
                <h4 class="font-bold text-cyan-300 text-sm flex items-center"><i class="fa-solid fa-wand-magic-sparkles mr-1.5"></i>［魔法的天賜之子］與［即視感］</h4>
                <p class="text-zinc-300 leading-relaxed">全魔力 +1，魔法判定大成功（骰出66）時 MP 消耗為 0。每日一次進行智力基準判定前事先宣言，獲得 +2 加值。</p>
            </div>
        </div>
    </div>

    <!-- 螢石人 (Fluorite) 卡片 -->
    <div class="bg-zinc-900 border border-zinc-800 rounded-xl p-5 space-y-5 shadow-md">
        <div class="flex flex-wrap justify-between items-center border-b border-zinc-800 pb-3 gap-2">
            <div class="flex items-center gap-2">
                <span class="text-xs px-2.5 py-1 rounded bg-sky-950 text-sky-300 border border-sky-800 font-bold">人族</span>
                <h3 class="text-lg font-bold text-amber-400">螢石人 <span class="text-xs text-zinc-500 font-normal font-mono">(Fluorite)</span></h3>
            </div>
            <div class="text-xs text-zinc-400 flex items-center gap-3">
                <span>污穢度：<strong class="text-amber-400">0</strong></span>
                <span>壽命：<strong class="text-zinc-200">約 400 歲</strong></span>
            </div>
        </div>
        <p class="text-xs text-zinc-300 leading-relaxed bg-zinc-950 p-3.5 rounded-lg border border-zinc-800/80">
            由高透明度礦物組成的夢幻種族，暱稱「活生生的魔晶石」。精神力與 MP 極高，表情隨礦物發光色調改變。
        </p>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
            <div class="bg-zinc-950 p-3 rounded-lg border border-zinc-800 space-y-1">
                <span class="text-amber-400 font-bold block mb-1"><i class="fa-solid fa-language mr-1"></i>初始習得語言</span>
                <p class="text-zinc-300">任選一語言及交易共通語的「會話語」與「閱讀」</p>
            </div>
            <div class="bg-zinc-950 p-3 rounded-lg border border-zinc-800 space-y-1">
                <span class="text-amber-400 font-bold block mb-1"><i class="fa-solid fa-ban mr-1"></i>限制技能</span>
                <p class="text-pink-400 font-bold">練體士 (無法選擇)</p>
            </div>
            <div class="bg-zinc-950 p-3 rounded-lg border border-zinc-800 space-y-1">
                <span class="text-amber-400 font-bold block mb-1"><i class="fa-solid fa-dice mr-1"></i>種族能力值</span>
                <p class="text-zinc-300 font-mono">A:2d / B:2d / C:2d+6 / D:2d / E:1d / F:2d+6</p>
            </div>
        </div>
        <div class="bg-zinc-950 p-4 rounded-lg border border-sky-500/30 space-y-3 text-xs">
            <div class="space-y-1">
                <h4 class="font-bold text-sky-300 text-sm flex items-center"><i class="fa-solid fa-gem mr-1.5"></i>［靈魂光輝］、［礦石生命］與［晶石身體］</h4>
                <p class="text-zinc-300 leading-relaxed">半徑 10m 照明。不需飲食呼吸，免疫毒與疾病。無法浮於水。防護點 +2，最大 MP +15。</p>
                <div class="pt-2 border-t border-zinc-800/60 space-y-1.5 text-zinc-400">
                    <p><strong class="text-sky-400 font-medium">［晶石身體 LV2］(等級 6)：</strong> 防護點 +3，最大 MP +30。</p>
                    <p><strong class="text-sky-400 font-medium">［晶石身體 LV3］(等級 11)：</strong> 防護點 +4，最大 MP +45。</p>
                </div>
            </div>
        </div>
    </div>
</div>
`;