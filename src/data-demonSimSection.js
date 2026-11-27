export const demonActionSimSection = {
    id: 'sec-demon_action_sim',
    title: '魔神行動表抽卡／骰 1d 模擬器',
    icon: 'fa-solid fa-dice-d6',
    content: `
        <div id="demon-sim-app" class="space-y-6">
            <!-- 標題與快速設定 -->
            <div class="bg-zinc-900/90 border border-amber-500/30 rounded-xl p-5 shadow-lg flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                <div class="flex items-center gap-3">
                    <div class="p-2.5 bg-amber-500/10 rounded-lg text-amber-400">
                        <i class="fa-solid fa-dice-d6 text-2xl"></i>
                    </div>
                    <div>
                        <h2 class="text-xl font-bold text-amber-400 tracking-wider">魔神召喚抽卡 &amp; 1d 行動表模擬器</h2>
                        <p class="text-xs text-zinc-400">支援依冒險者／魔神等級抽卡或指定魔神、模擬 1d 行動、【改令】重骰、取消行動 MP 扣款與送還判定計算。</p>
                    </div>
                </div>
                <div class="flex flex-wrap items-center gap-3 text-xs">
                    <label class="flex items-center gap-1.5 bg-zinc-950 px-3 py-1.5 rounded-lg border border-zinc-800">
                        <span class="text-zinc-400">冒險者 Lv</span>
                        <input id="sim-adventurer-lv" type="number" min="1" max="17" value="7" class="w-12 bg-zinc-900 text-amber-300 font-bold text-center rounded border border-zinc-700 py-0.5">
                    </label>
                    <label class="flex items-center gap-1.5 bg-zinc-950 px-3 py-1.5 rounded-lg border border-zinc-800">
                        <span class="text-zinc-400">召異技能 Lv</span>
                        <input id="sim-demon-lv" type="number" min="1" max="17" value="6" class="w-12 bg-zinc-900 text-cyan-300 font-bold text-center rounded border border-zinc-700 py-0.5">
                    </label>
                    <label class="flex items-center gap-1.5 bg-zinc-950 px-3 py-1.5 rounded-lg border border-zinc-800">
                        <span class="text-zinc-400">知力獎勵</span>
                        <input id="sim-int-bonus" type="number" min="-5" max="20" value="4" class="w-12 bg-zinc-900 text-emerald-300 font-bold text-center rounded border border-zinc-700 py-0.5">
                    </label>
                    <label class="flex items-center gap-1.5 bg-zinc-950 px-3 py-1.5 rounded-lg border border-zinc-800">
                        <span class="text-zinc-400">目前 MP</span>
                        <input id="sim-current-mp" type="number" min="0" max="999" value="60" class="w-14 bg-zinc-900 text-purple-300 font-bold text-center rounded border border-zinc-700 py-0.5">
                    </label>
                </div>
            </div>

            <!-- 抽卡／選角控制列 -->
            <div class="bg-zinc-900 border border-zinc-800 rounded-xl p-4 shadow-lg space-y-4">
                <div class="flex flex-col md:flex-row md:items-center justify-between gap-3">
                    <div class="flex flex-wrap items-center gap-2 text-xs">
                        <span class="text-xs text-zinc-400">召喚範圍：</span>
                        <select id="sim-lv-filter" class="bg-zinc-950 text-zinc-200 border border-zinc-700 rounded-lg px-2.5 py-1.5">
                            <option value="all">全部等級 (Lv.1～16)</option>
                            <option value="capped" selected>可召喚上限 (≤ 冒險者 Lv)</option>
                            <option value="1">Lv.1</option><option value="2">Lv.2</option><option value="3">Lv.3</option>
                            <option value="4">Lv.4</option><option value="5">Lv.5</option><option value="6">Lv.6</option>
                            <option value="7">Lv.7</option><option value="8">Lv.8</option><option value="9">Lv.9</option>
                            <option value="10">Lv.10</option><option value="11">Lv.11</option><option value="12">Lv.12</option>
                            <option value="13">Lv.13</option><option value="14">Lv.14</option><option value="15">Lv.15</option>
                            <option value="16">Lv.16</option>
                        </select>
                        <label class="flex items-center gap-1.5 text-xs text-zinc-300 bg-zinc-950 px-2.5 py-1.5 rounded-lg border border-zinc-800 cursor-pointer">
                            <input id="sim-exclude-illegal" type="checkbox" class="accent-amber-500">
                            <span>排除非法供物 (X)</span>
                        </label>
                    </div>

                    <div class="flex flex-wrap items-center gap-2">
                        <select id="sim-demon-select" class="bg-zinc-950 text-zinc-200 border border-zinc-700 rounded-lg px-3 py-2 text-xs font-bold"></select>
                    </div>
                </div>

                <!-- 達成值修正開關 -->
                <div class="flex flex-wrap items-center gap-3 pt-2 border-t border-zinc-800/80 text-xs">
                    <span class="text-zinc-400 font-bold">達成值修正：</span>
                    <label class="flex items-center gap-1.5 bg-zinc-950 px-2.5 py-1 rounded border border-zinc-800 cursor-pointer">
                        <input id="mod-large-container" type="checkbox" class="accent-cyan-400">
                        <span class="text-cyan-300">〈魔神大型容器〉(+1)</span>
                    </label>
                    <label class="flex items-center gap-1.5 bg-zinc-950 px-2.5 py-1 rounded border border-zinc-800 cursor-pointer">
                        <input id="mod-evil-contract" type="checkbox" class="accent-purple-400">
                        <span class="text-purple-300">【邪惡契約】(+2, 送還-1)</span>
                    </label>
                    <label class="flex items-center gap-1.5 bg-zinc-950 px-2.5 py-1 rounded border border-zinc-800 text-zinc-300">
                        <span>【魔神潛能】</span>
                        <select id="mod-potential" class="bg-zinc-900 text-amber-300 font-bold rounded border border-zinc-700 px-1.5 py-0.5">
                            <option value="0">+0</option>
                            <option value="1">+1</option>
                            <option value="2">+2</option>
                            <option value="3">+3 (上限)</option>
                        </select>
                    </label>
                    <label class="flex items-center gap-1.5 bg-zinc-950 px-2.5 py-1 rounded border border-zinc-800 text-zinc-300">
                        <span>其他修正</span>
                        <input id="mod-extra" type="number" min="-10" max="10" value="0" class="w-12 bg-zinc-900 text-zinc-100 text-center rounded border border-zinc-700 py-0.5">
                    </label>
                </div>
            </div>

            <!-- 魔神卡面與 1d 行動模擬區 -->
            <div id="sim-demon-card-container" class="grid grid-cols-1 lg:grid-cols-12 gap-6"></div>

            <!-- 行動／召喚／送還紀錄 -->
            <div class="bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden shadow-lg">
                <div class="px-4 py-3 bg-zinc-950/80 border-b border-zinc-800 flex items-center justify-between">
                    <div class="flex items-center gap-2">
                        <i class="fa-solid fa-clock-rotate-left text-amber-400"></i>
                        <h3 class="font-bold text-zinc-100 text-sm">模擬紀錄</h3>
                    </div>
                    <button id="btn-clear-sim-log" class="text-xs text-zinc-400 hover:text-rose-400 transition">清除紀錄</button>
                </div>
                <div id="sim-log-list" class="p-4 space-y-2 text-xs text-zinc-300 max-h-60 overflow-y-auto">
                    <div class="text-zinc-500">尚未執行抽卡或擲骰。</div>
                </div>
            </div>
        </div>
    `
};