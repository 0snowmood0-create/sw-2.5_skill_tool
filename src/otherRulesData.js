export const otherRulesContent = `
<div class="space-y-6">
    <!-- 頁頭標題卡片 -->
    <div class="bg-zinc-900/90 border border-amber-500/30 rounded-xl p-5 shadow-lg">
        <div class="flex items-center gap-3 mb-2">
            <div class="p-2.5 bg-amber-500/10 rounded-lg text-amber-400">
                <i class="fa-solid fa-book-bookmark text-2xl"></i>
            </div>
            <div>
                <h2 class="text-xl font-bold text-amber-400 tracking-wider">SW2.5 其他規則：主動作與輔助動作補足</h2>
                <p class="text-xs text-zinc-400">包含戰鬥動作細節、離脫準備、裝備/物品撿拾與轉手、戰鬥狀態切換等說明。</p>
            </div>
        </div>
    </div>

    <!-- 主動作區塊 -->
    <div class="bg-zinc-900 border border-zinc-800 rounded-xl p-5 space-y-4 shadow-md">
        <div class="flex items-center gap-2 border-b border-zinc-800 pb-3">
            <span class="text-xs px-2.5 py-1 rounded bg-amber-950 text-amber-300 border border-amber-800 font-bold">Main Action</span>
            <h3 class="text-lg font-bold text-amber-400">主動作 (Main Action) 補足與細節</h3>
        </div>

        <div class="space-y-4 text-xs text-zinc-300">
            <!-- 亂戰離脫 -->
            <div class="bg-zinc-950 p-4 rounded-lg border border-zinc-800 space-y-2">
                <h4 class="font-bold text-amber-300 text-sm flex items-center">
                    <i class="fa-solid fa-person-running mr-1.5"></i>從亂戰區域脫離準備
                </h4>
                <p class="leading-relaxed">
                    處於亂戰狀態的角色，要移動到亂戰區域外，原則上必須以主動作執行「從亂戰區域脫離準備」。接著在自身下一次的手番進行移動時，即可向後退的方向移動。
                </p>
                <div class="bg-zinc-900/80 p-2.5 rounded border border-amber-500/20 text-zinc-400 space-y-1">
                    <p><strong class="text-amber-400">懲罰：</strong> 執行了離脫準備後，直到自身下一次手番到來前，迴避力判定會受到 <span class="text-red-400 font-bold">-4</span> 的懲罰修正。</p>
                    <p><strong class="text-emerald-400">例外：</strong> 若該亂戰中，自身以外的己方亂戰區域內角色人數，超過敵方人數的 <span class="text-emerald-400 font-bold">2 倍以上</span>，可免去離脫準備，即座透過移動脫出亂戰區域。</p>
                </div>
            </div>

            <!-- 道具使用與拾取/收納 -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div class="bg-zinc-950 p-3.5 rounded-lg border border-zinc-800 space-y-1">
                    <h4 class="font-bold text-amber-300 text-xs flex items-center mb-1">
                        <i class="fa-solid fa-flask mr-1.5"></i>道具的使用
                    </h4>
                    <p class="leading-relaxed text-zinc-300">
                        大部分道具以主動作使用。無特別記述則無需進行行為判定。產生魔法效果的道具只要無特別提及，可在「通常移動」時使用。
                    </p>
                </div>
                <div class="bg-zinc-950 p-3.5 rounded-lg border border-zinc-800 space-y-1">
                    <h4 class="font-bold text-amber-300 text-xs flex items-center mb-1">
                        <i class="fa-solid fa-hand-holding mr-1.5"></i>武器等的拾取與收納
                    </h4>
                    <p class="leading-relaxed text-zinc-300">
                        • <strong>撿起：</strong>1 次主動作可撿起 1 個同一區域地面的武器/物品。<br>
                        • <strong>收納：</strong>1 次主動作可將手上 1 個武器/物品作為行李收納。
                    </p>
                </div>
            </div>

            <!-- 手渡與飾品 -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div class="bg-zinc-950 p-3.5 rounded-lg border border-zinc-800 space-y-1">
                    <h4 class="font-bold text-amber-300 text-xs flex items-center mb-1">
                        <i class="fa-solid fa-handshake mr-1.5"></i>武器等手遞給他人
                    </h4>
                    <p class="leading-relaxed text-zinc-300">
                        手遞方需以<strong>主動作</strong>進行，且需先結束手番；接收方再以<strong>輔助動作</strong>接過完成。接收瞬間雙方需在同一區域（遞交瞬間可不同）。若未能成功接過，物品會掉落至地面。
                    </p>
                </div>
                <div class="bg-zinc-950 p-3.5 rounded-lg border border-zinc-800 space-y-1">
                    <h4 class="font-bold text-amber-300 text-xs flex items-center mb-1">
                        <i class="fa-solid fa-gem mr-1.5"></i>飾品的交換／裝備／收納
                    </h4>
                    <p class="leading-relaxed text-zinc-300">
                        以 1 次主動作進行「卸下飾品收納並從行李裝備新飾品」。僅「裝備空部位」或「僅卸下飾品收納」亦可透過 1 次主動作完成。
                    </p>
                </div>
            </div>

            <!-- 其他說明 -->
            <div class="bg-zinc-950 p-3.5 rounded-lg border border-zinc-800 space-y-1">
                <h4 class="font-bold text-amber-300 text-xs flex items-center mb-1">
                    <i class="fa-solid fa-gavel mr-1.5"></i>輔助動作轉主動作 & GM 定義動作
                </h4>
                <p class="leading-relaxed text-zinc-300">
                    可特意將輔助動作作為主動作執行（在輔助動作被封印時有效，一回合限 1 次）。此外，任何伴隨判定或消耗一輪（10秒）大半時間的動作，由 GM 裁定是否屬於主動作。
                </p>
            </div>
        </div>
    </div>

    <!-- 輔助動作區塊 -->
    <div class="bg-zinc-900 border border-zinc-800 rounded-xl p-5 space-y-4 shadow-md">
        <div class="flex items-center gap-2 border-b border-zinc-800 pb-3">
            <span class="text-xs px-2.5 py-1 rounded bg-emerald-950 text-emerald-300 border border-emerald-800 font-bold">Minor Action</span>
            <h3 class="text-lg font-bold text-amber-400">輔助動作 (Minor Action) 補足與細節</h3>
        </div>

        <div class="space-y-4 text-xs text-zinc-300">
            <!-- 武器保持重點 -->
            <div class="bg-zinc-950 p-4 rounded-lg border border-emerald-500/30 space-y-2">
                <h4 class="font-bold text-emerald-300 text-sm flex items-center">
                    <i class="fa-solid fa-circle-info mr-1.5"></i>武器或盾的「裝備」與「保持」重點
                </h4>
                <p class="leading-relaxed text-zinc-300">
                    不滿足必要筋力/Rank 的武器或盾可拿在手上「保持」，保持狀態無法攻擊/防禦，但可進行收納、放棄或手遞，且占用手數與用法相同（如 2H 需雙手）。若條件恢復滿足，可透過輔助動作切換回裝備狀態。
                </p>
            </div>

            <!-- 細項分類表格 -->
            <div class="overflow-x-auto rounded-lg border border-zinc-800 bg-zinc-950">
                <table class="w-full text-left text-xs text-zinc-300">
                    <thead class="bg-zinc-900 text-amber-400 font-bold border-b border-zinc-800">
                        <tr>
                            <th class="p-2.5 border-r border-zinc-800 w-1/4">輔助動作項目</th>
                            <th class="p-2.5">詳細規則說明</th>
                        </tr>
                    </thead>
                    <tbody class="divide-y divide-zinc-800/60 font-sans text-[11px]">
                        <tr class="hover:bg-zinc-900/40">
                            <td class="p-2.5 border-r border-zinc-800 font-bold text-amber-300">裝備 / 保持</td>
                            <td class="p-2.5 leading-relaxed">將行李中的武器/盾/道具拿在手上。手需空出。可用狀態自動為裝備，無法裝備則為保持。</td>
                        </tr>
                        <tr class="hover:bg-zinc-900/40">
                            <td class="p-2.5 border-r border-zinc-800 font-bold text-amber-300">裝備狀態變更</td>
                            <td class="p-2.5 leading-relaxed font-mono">「1H兩／2H」武器可切換單/雙手持握（切換雙手需另一隻手空著）。</td>
                        </tr>
                        <tr class="hover:bg-zinc-900/40">
                            <td class="p-2.5 border-r border-zinc-800 font-bold text-amber-300">鞘中收納 (特定武器)</td>
                            <td class="p-2.5 leading-relaxed font-mono">一般收納為主動作。但〈劍〉及「1H」〈槍〉可作為輔助動作收納至鞘/槍套。</td>
                        </tr>
                        <tr class="hover:bg-zinc-900/40">
                            <td class="p-2.5 border-r border-zinc-800 font-bold text-amber-300">放棄 (丟棄)</td>
                            <td class="p-2.5 leading-relaxed">將武器掉落地面以空出手來。重新撿起需主動作，且地面物品敵我皆可撿拾。</td>
                        </tr>
                        <tr class="hover:bg-zinc-900/40">
                            <td class="p-2.5 border-r border-zinc-800 font-bold text-amber-300">接收 (接過)</td>
                            <td class="p-2.5 leading-relaxed">配合他人手遞主動作，以此輔助動作將物品接過持握。</td>
                        </tr>
                        <tr class="hover:bg-zinc-900/40">
                            <td class="p-2.5 border-r border-zinc-800 font-bold text-amber-300">起身 (轉倒回復)</td>
                            <td class="p-2.5 leading-relaxed text-red-300">
                                可於移動前起身。起身該手番直到結束前，所有行動判定承受 <strong class="text-red-400 font-bold">-2 懲罰</strong>。若手番中轉倒，無法在該手番內起身。
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div class="bg-zinc-950 p-3 rounded-lg border border-zinc-800 text-zinc-400 text-xs">
                <p>💡 <strong>執行順序限制：</strong> 輔助動作次數無限制且可組合，但<strong>絕不能在主動作之後執行</strong>（即使擁有多個主動作，只要執行一次主動作後即無法進行輔助動作）。可在「戰鬥準備」時進行（接收除外）。</p>
            </div>
        </div>
    </div>
</div>
`;