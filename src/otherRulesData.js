export const otherRulesContent = `
<div class="space-y-6">
    <!-- 頁頭標題卡片 -->
    <div class="bg-zinc-900/90 border border-amber-500/30 rounded-xl p-5 shadow-lg">
        <div class="flex items-center gap-3 mb-2">
            <div class="p-2.5 bg-amber-500/10 rounded-lg text-amber-400">
                <i class="fa-solid fa-book-bookmark text-2xl"></i>
            </div>
            <div>
                <h2 class="text-xl font-bold text-amber-400 tracking-wider">SW2.5 其他規則彙整</h2>
                <p class="text-xs text-zinc-400">包含主/輔助動作細節、回復/生死/甦生、污穢度與 PC 成長規則。</p>
            </div>
        </div>
    </div>

    <!-- 1. 主動作與輔助動作區塊 -->
    <div class="bg-zinc-900 border border-zinc-800 rounded-xl p-5 space-y-4 shadow-md">
        <div class="flex items-center gap-2 border-b border-zinc-800 pb-3">
            <span class="text-xs px-2.5 py-1 rounded bg-amber-950 text-amber-300 border border-amber-800 font-bold">Action Rules</span>
            <h3 class="text-lg font-bold text-amber-400">主動作 (Main Action) 與 輔助動作 (Minor Action) 補足</h3>
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
                        <i class="fa-solid fa-flask mr-1.5"></i>道具的使用 (主動作)
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

            <!-- 輔助動作細項表格 -->
            <div class="space-y-2">
                <h4 class="font-bold text-emerald-400 text-sm flex items-center">
                    <i class="fa-solid fa-bolt mr-1.5"></i>輔助動作細項目對照
                </h4>
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
            </div>
            
            <div class="bg-zinc-950 p-3 rounded-lg border border-zinc-800 text-zinc-400 text-xs">
                <p>💡 <strong>執行順序限制：</strong> 輔助動作次數無限制且可組合，但<strong>絕不能在主動作之後執行</strong>。可在「戰鬥準備」時進行（接收除外）。</p>
            </div>
        </div>
    </div>

    <!-- 2. 各種回復與飲食睡眠區塊 -->
    <div class="bg-zinc-900 border border-zinc-800 rounded-xl p-5 space-y-4 shadow-md">
        <div class="flex items-center gap-2 border-b border-zinc-800 pb-3">
            <span class="text-xs px-2.5 py-1 rounded bg-teal-950 text-teal-300 border border-teal-800 font-bold">Recovery</span>
            <h3 class="text-lg font-bold text-amber-400">各種回復、飲食與睡眠規則</h3>
        </div>

        <div class="space-y-4 text-xs text-zinc-300">
            <!-- 藥草、藥水、修理具 -->
            <div class="grid grid-cols-1 md:grid-cols-3 gap-3">
                <div class="bg-zinc-950 p-3.5 rounded-lg border border-zinc-800 space-y-1.5">
                    <h4 class="font-bold text-emerald-400 text-sm flex items-center">
                        <i class="fa-solid fa-seedling mr-1.5"></i>藥草類 (毒屬性)
                    </h4>
                    <p class="leading-relaxed">
                        回復量 = 威力表 + 施加者「遊俠(Ranger)等級 + 器用加值」。需花費 <strong>10 分鐘</strong> 準備，期間使用者不可進行其他作業（接受效果者可做別的事）。
                    </p>
                </div>
                <div class="bg-zinc-950 p-3.5 rounded-lg border border-zinc-800 space-y-1.5">
                    <h4 class="font-bold text-cyan-400 text-sm flex items-center">
                        <i class="fa-solid fa-vial mr-1.5"></i>藥水類 (毒屬性)
                    </h4>
                    <p class="leading-relaxed">
                        飲用為<strong>主動作</strong>，回復加值為「遊俠等級 + 智力加值」。非戰鬥中遊俠可協助他人飲用。具［潑灑使用可］標示者可用主動作潑灑他人或自己（戰鬥中可用）。持有《藥水大師》者能以輔助動作對自身使用（每輪1次/1瓶）。
                    </p>
                </div>
                <div class="bg-zinc-950 p-3.5 rounded-lg border border-zinc-800 space-y-1.5">
                    <h4 class="font-bold text-amber-400 text-sm flex items-center">
                        <i class="fa-solid fa-wrench mr-1.5"></i>修理膠帶 (〈リペアテープ〉)
                    </h4>
                    <p class="leading-relaxed">
                        主動作對「分類：魔法生物」或「分類：魔動機」之單一部位使用。回復量 = 威力表 + 「騎手(Rider)等級 + 器用加值」。
                    </p>
                </div>
            </div>

            <!-- 飲食與睡眠 -->
            <div class="bg-zinc-950 p-4 rounded-lg border border-zinc-800 space-y-3">
                <h4 class="font-bold text-amber-300 text-sm flex items-center">
                    <i class="fa-solid fa-utensils mr-1.5"></i>飲食與睡眠的必要性與自然回復
                </h4>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-3 text-zinc-300">
                    <div class="bg-zinc-900/60 p-3 rounded border border-red-900/40 space-y-1">
                        <span class="text-red-400 font-bold block mb-1">缺乏飲食／睡眠的懲罰</span>
                        <p>前一日完全未進食、或睡眠未滿 3 小時迎向新的一日（朝6點）時：</p>
                        <p class="text-red-300">• <strong>HP 最大值 & MP 最大值各 -1</strong></p>
                        <p class="text-red-300">• <strong>所有行為判定遭受 -1 懲罰修正</strong></p>
                        <p class="text-zinc-500 text-[10px]">*懲罰分別計算且每日累積。吃飽或連續睡眠6小時可一次解除累積懲罰。</p>
                    </div>
                    <div class="bg-zinc-900/60 p-3 rounded border border-emerald-900/40 space-y-1">
                        <span class="text-emerald-400 font-bold block mb-1">睡眠自然回復效果</span>
                        <p>於安眠環境（遮風避雨、有寢具）連續睡眠 3 小時：</p>
                        <p class="text-emerald-300">• <strong>回復最大 HP 的 10%（無條件進位）</strong></p>
                        <p class="text-emerald-300">• <strong>回復最大 MP 的 50%（無條件進位）</strong></p>
                        <p class="text-zinc-500 text-[10px]">*每日限 2 次（連續6小時算2次）。超過6小時不再額外回復。</p>
                    </div>
                </div>
            </div>

            <!-- 「1日1回」特徵回復點 -->
            <div class="bg-zinc-950 p-3 rounded-lg border border-zinc-800 flex justify-between items-center">
                <span class="text-amber-400 font-bold"><i class="fa-solid fa-sun mr-1.5"></i>「1日1回」能力之次數重置時間</span>
                <span class="text-zinc-300 font-medium">每日日出（早晨 6 點 / 朝6時）重置</span>
            </div>
        </div>
    </div>

    <!-- 3. 氣絕與生死判定區塊 -->
    <div class="bg-zinc-900 border border-zinc-800 rounded-xl p-5 space-y-4 shadow-md">
        <div class="flex items-center gap-2 border-b border-zinc-800 pb-3">
            <span class="text-xs px-2.5 py-1 rounded bg-red-950 text-red-300 border border-red-800 font-bold">Unconscious & Death</span>
            <h3 class="text-lg font-bold text-amber-400">氣絕與生死判定規則</h3>
        </div>

        <div class="space-y-4 text-xs text-zinc-300">
            <div class="bg-zinc-950 p-4 rounded-lg border border-red-900/30 space-y-3">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <div class="space-y-1.5">
                        <h4 class="font-bold text-red-400 text-sm flex items-center">
                            <i class="fa-solid fa-heart-pulse mr-1.5"></i>生死判定基準與目標值
                        </h4>
                        <p class="leading-relaxed">
                            HP 降至 0 以下時角色進入氣絕並需立即進行生死判定。<br>
                            • <strong>基準值：</strong> 冒險者等級 + 生命力加值<br>
                            • <strong>目標值：</strong> HP 現在值的絕對值（例如 HP 變成 -5，目標值即為 5）
                        </p>
                    </div>
                    <div class="space-y-1.5 bg-zinc-900/60 p-3 rounded border border-zinc-800">
                        <h4 class="font-bold text-amber-300 text-sm mb-1">生死判定結果處置</h4>
                        <p><strong class="text-red-400">失敗：</strong> 角色死亡。</p>
                        <p><strong class="text-amber-300">成功：</strong> 保持氣絕狀態生存。</p>
                        <p><strong class="text-emerald-400">大成功 (66 雙六)：</strong> HP 變為 1，從氣絕狀態甦醒！</p>
                    </div>
                </div>

                <div class="pt-2 border-t border-zinc-800/80 grid grid-cols-1 md:grid-cols-3 gap-3">
                    <div class="space-y-1">
                        <span class="text-amber-400 font-bold block"><i class="fa-solid fa-rotate-right mr-1"></i>再次生死判定的時機</span>
                        <p class="text-zinc-400">氣絕狀態中，HP 再次減少 1 點以上時；或是距離上次生死判定經過 <strong>10 分鐘</strong> 時。</p>
                    </div>
                    <div class="space-y-1">
                        <span class="text-emerald-400 font-bold block"><i class="fa-solid fa-clock mr-1"></i>放置 1 小時自然醒覺</span>
                        <p class="text-zinc-400">氣絕放置 1 小時後，若期間進行的 6 次生死判定皆成功，HP 變為 1 並清醒。</p>
                    </div>
                    <div class="space-y-1">
                        <span class="text-cyan-400 font-bold block"><i class="fa-solid fa-wand-sparkles mr-1"></i>甦醒條件注意點</span>
                        <p class="text-zinc-400">單純將 HP 回復至 1 以上<strong>不會自動清醒</strong>！需透過【Awaken】魔法、〈醒覺藥水〉或應急手當判定等手段才可喚醒。</p>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- 4. 死者甦生與污穢度區塊 -->
    <div class="bg-zinc-900 border border-zinc-800 rounded-xl p-5 space-y-4 shadow-md">
        <div class="flex items-center gap-2 border-b border-zinc-800 pb-3">
            <span class="text-xs px-2.5 py-1 rounded bg-purple-950 text-purple-300 border border-purple-800 font-bold">Resurrection</span>
            <h3 class="text-lg font-bold text-amber-400">死者甦生 (Resurrection) 與 污穢度</h3>
        </div>

        <div class="space-y-4 text-xs text-zinc-300">
            <!-- 甦生執行與忌避 -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div class="bg-zinc-950 p-3.5 rounded-lg border border-zinc-800 space-y-2">
                    <h4 class="font-bold text-purple-300 text-sm flex items-center">
                        <i class="fa-solid fa-skull mr-1.5"></i>【Resurrection】行使條件
                    </h4>
                    <p class="leading-relaxed">
                        需有相對完整的頭部與脊椎，且甦生者會失去死亡瞬間前 1 小時內的記憶。公會委託操靈術師甦生費用為 <strong>10,000 G</strong>（可貸款）；若 PC 擁有 7 級以上操靈士(Conjurer)技能則可自行行使。
                    </p>
                </div>
                <div class="bg-zinc-950 p-3.5 rounded-lg border border-zinc-800 space-y-2">
                    <h4 class="font-bold text-purple-300 text-sm flex items-center">
                        <i class="fa-solid fa-hand-slash mr-1.5"></i>甦生的忌避感情 (玩家選擇)
                    </h4>
                    <p class="leading-relaxed">
                        因甦生會扭曲靈魂產生「污穢」，一般社會視為禁忌。死亡 PC 的玩家可自主選擇是否接受甦生，若玩家拒絕則無法被甦生。
                    </p>
                </div>
            </div>

            <!-- 穢れ表與符民特別處置 -->
            <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                <!-- 穢れ表 -->
                <div class="md:col-span-2 space-y-2">
                    <h4 class="font-bold text-amber-400 text-xs flex items-center justify-between">
                        <span><i class="fa-solid fa-biohazard mr-1.5"></i>穢れ表 (2d + 死亡天數-3 + 目前污穢度)</span>
                    </h4>
                    <div class="overflow-x-auto rounded-lg border border-zinc-800 bg-zinc-950">
                        <table class="w-full text-left text-xs text-zinc-300">
                            <thead class="bg-zinc-900 text-amber-400 font-bold border-b border-zinc-800">
                                <tr>
                                    <th class="p-2 border-r border-zinc-800 text-center w-16">骰值</th>
                                    <th class="p-2 border-r border-zinc-800 text-center w-20">污穢增加</th>
                                    <th class="p-2">影響與特徵變異</th>
                                </tr>
                            </thead>
                            <tbody class="divide-y divide-zinc-800/60 font-mono text-[11px]">
                                <tr class="hover:bg-zinc-900/40"><td class="p-2 border-r border-zinc-800 text-center font-bold">2~7</td><td class="p-2 border-r border-zinc-800 text-center text-amber-400 font-bold">+1</td><td class="p-2 font-sans">無特別外觀影響</td></tr>
                                <tr class="hover:bg-zinc-900/40"><td class="p-2 border-r border-zinc-800 text-center font-bold">8~10</td><td class="p-2 border-r border-zinc-800 text-center text-amber-400 font-bold">+1</td><td class="p-2 font-sans">長出小角 / 伸長 (角+1)</td></tr>
                                <tr class="hover:bg-zinc-900/40"><td class="p-2 border-r border-zinc-800 text-center font-bold">11~13</td><td class="p-2 border-r border-zinc-800 text-center text-amber-400 font-bold">+1</td><td class="p-2 font-sans">身體出現痣 (痣+1)</td></tr>
                                <tr class="hover:bg-zinc-900/40"><td class="p-2 border-r border-zinc-800 text-center font-bold">14</td><td class="p-2 border-r border-zinc-800 text-center text-amber-400 font-bold">+1</td><td class="p-2 font-sans">黑眼珠出現金色輪廓</td></tr>
                                <tr class="hover:bg-zinc-900/40"><td class="p-2 border-r border-zinc-800 text-center font-bold">15</td><td class="p-2 border-r border-zinc-800 text-center text-amber-400 font-bold">+1</td><td class="p-2 font-sans">手指變長</td></tr>
                                <tr class="hover:bg-zinc-900/40"><td class="p-2 border-r border-zinc-800 text-center font-bold">16</td><td class="p-2 border-r border-zinc-800 text-center text-amber-400 font-bold">+1</td><td class="p-2 font-sans">聲音變得沙啞</td></tr>
                                <tr class="hover:bg-zinc-900/40"><td class="p-2 border-r border-zinc-800 text-center font-bold">17</td><td class="p-2 border-r border-zinc-800 text-center text-amber-400 font-bold">+2</td><td class="p-2 font-sans">肌膚變得如屍體般蒼白</td></tr>
                                <tr class="hover:bg-zinc-900/40"><td class="p-2 border-r border-zinc-800 text-center font-bold">18</td><td class="p-2 border-r border-zinc-800 text-center text-amber-400 font-bold">+2</td><td class="p-2 font-sans">隱約散發瘴氣</td></tr>
                                <tr class="hover:bg-zinc-900/40"><td class="p-2 border-r border-zinc-800 text-center font-bold">19</td><td class="p-2 border-r border-zinc-800 text-center text-amber-400 font-bold">+3</td><td class="p-2 font-sans text-red-300">討厭日光 (所有行為判定 -2)</td></tr>
                                <tr class="hover:bg-zinc-900/40"><td class="p-2 border-r border-zinc-800 text-center font-bold">20</td><td class="p-2 border-r border-zinc-800 text-center text-amber-400 font-bold">+3</td><td class="p-2 font-sans text-red-300">變得喜歡吸血 (每日需喝活血否則同無進食)</td></tr>
                                <tr class="hover:bg-zinc-900/40"><td class="p-2 border-r border-zinc-800 text-center font-bold">21~25</td><td class="p-2 border-r border-zinc-800 text-center text-amber-400 font-bold">+4</td><td class="p-2 font-sans text-red-300">無法進食生肉以外的食物</td></tr>
                                <tr class="hover:bg-zinc-900/40"><td class="p-2 border-r border-zinc-800 text-center font-bold">26~</td><td class="p-2 border-r border-zinc-800 text-center text-amber-400 font-bold">+4</td><td class="p-2 font-sans text-red-400">皮膚開始腐爛脫落</td></tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <!-- 符民甦生與污穢上限 -->
                <div class="space-y-3">
                    <div class="bg-zinc-950 p-3.5 rounded-lg border border-blue-900/40 space-y-1.5">
                        <h4 class="font-bold text-blue-300 text-xs flex items-center">
                            <i class="fa-solid fa-robot mr-1.5"></i>符民 (Runefolk) 的甦生
                        </h4>
                        <p class="leading-relaxed text-zinc-300 text-[11px]">
                            符民甦生時<strong>不產生污穢</strong>亦不使用穢れ表。但代價為<strong>失去最新 1 年間的記憶</strong>（技能等級與經驗點不會喪失）。
                        </p>
                    </div>
                    <div class="bg-zinc-950 p-3.5 rounded-lg border border-red-900/50 space-y-1.5">
                        <h4 class="font-bold text-red-400 text-xs flex items-center">
                            <i class="fa-solid fa-skull-crossbones mr-1.5"></i>污穢度 5 的不死化下場
                        </h4>
                        <p class="leading-relaxed text-zinc-300 text-[11px]">
                            當污穢度達到 <strong>5 以上</strong> 時，PC 會即座<strong>不死怪物化 (Undead)</strong>，靈魂永久喪失，操靈術師會直接將其破壞，該角色完全失去無法再使用。
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- 5. PC 成長規則區塊 -->
    <div class="bg-zinc-900 border border-zinc-800 rounded-xl p-5 space-y-4 shadow-md">
        <div class="flex items-center gap-2 border-b border-zinc-800 pb-3">
            <span class="text-xs px-2.5 py-1 rounded bg-amber-950 text-amber-300 border border-amber-800 font-bold">Growth</span>
            <h3 class="text-lg font-bold text-amber-400">PC 的成長與經驗點消費</h3>
        </div>

        <div class="space-y-4 text-xs text-zinc-300">
            <div class="grid grid-cols-1 md:grid-cols-3 gap-3">
                <div class="bg-zinc-950 p-3.5 rounded-lg border border-zinc-800 space-y-1.5">
                    <h4 class="font-bold text-amber-300 text-sm flex items-center">
                        <i class="fa-solid fa-up-long mr-1.5"></i>冒險者等級與特技提升
                    </h4>
                    <p class="leading-relaxed">
                        當技能等級超過目前冒險者等級時，冒險者等級隨之上升（HP、生命/精神抵抗一併提升）。於奇數等級（1, 3, 5...）可獲得新戰鬥特技；等級 6 與 11 時種族特徵獲得強化。
                    </p>
                </div>
                <div class="bg-zinc-950 p-3.5 rounded-lg border border-zinc-800 space-y-1.5">
                    <h4 class="font-bold text-amber-300 text-sm flex items-center">
                        <i class="fa-solid fa-dice-d6 mr-1.5"></i>能力值成長擲骰 (2d)
                    </h4>
                    <p class="leading-relaxed">
                        團務結束後擲 2d10/2d6：依兩顆骰子點數對應【1器用 / 2敏捷 / 3筋力 / 4生命 / 5智力 / 6精神】，二選一增加 1 點。能力加值改變時，連動數值（命中、魔力、HP/MP上限）需重新計算。
                    </p>
                </div>
                <div class="bg-zinc-950 p-3.5 rounded-lg border border-zinc-800 space-y-1.5">
                    <h4 class="font-bold text-amber-300 text-sm flex items-center">
                        <i class="fa-solid fa-coins mr-1.5"></i>經驗點獲得行情
                    </h4>
                    <p class="leading-relaxed">
                        標準一次團務達成目標可獲 <strong>1,000 點</strong>，未達成可獲 <strong>500 點</strong>。自動失敗與擊敗魔物皆可額外獲得經驗點。
                    </p>
                </div>
            </div>

            <!-- 經驗點需求表格 (A/B) -->
            <div class="space-y-2">
                <h4 class="font-bold text-amber-400 text-xs flex items-center">
                    <i class="fa-solid fa-table mr-1.5"></i>技能等級經驗點對照表 (括號內為累計)
                </h4>
                <div class="overflow-x-auto rounded-lg border border-zinc-800 bg-zinc-950">
                    <table class="w-full text-left text-xs text-zinc-300">
                        <thead class="bg-zinc-900 text-amber-400 font-bold border-b border-zinc-800">
                            <tr>
                                <th class="p-2 border-r border-zinc-800 text-center">目標 Lv</th>
                                <th class="p-2 border-r border-zinc-800">表格 A (主要/魔法職業)</th>
                                <th class="p-2">表格 B (輕裝/輔助/技藝職業)</th>
                            </tr>
                        </thead>
                        <tbody class="divide-y divide-zinc-800/60 font-mono text-[11px]">
                            <tr class="hover:bg-zinc-900/40"><td class="p-2 border-r border-zinc-800 text-center font-bold text-amber-300">1</td><td class="p-2 border-r border-zinc-800">1,000</td><td class="p-2">500</td></tr>
                            <tr class="hover:bg-zinc-900/40"><td class="p-2 border-r border-zinc-800 text-center font-bold text-amber-300">2</td><td class="p-2 border-r border-zinc-800">1,000 (2,000)</td><td class="p-2">1,000 (1,500)</td></tr>
                            <tr class="hover:bg-zinc-900/40"><td class="p-2 border-r border-zinc-800 text-center font-bold text-amber-300">3</td><td class="p-2 border-r border-zinc-800">1,500 (3,500)</td><td class="p-2">1,000 (2,500)</td></tr>
                            <tr class="hover:bg-zinc-900/40"><td class="p-2 border-r border-zinc-800 text-center font-bold text-amber-300">4</td><td class="p-2 border-r border-zinc-800">1,500 (5,000)</td><td class="p-2">1,500 (4,000)</td></tr>
                            <tr class="hover:bg-zinc-900/40"><td class="p-2 border-r border-zinc-800 text-center font-bold text-amber-300">5</td><td class="p-2 border-r border-zinc-800">2,000 (7,000)</td><td class="p-2">1,500 (5,500)</td></tr>
                            <tr class="hover:bg-zinc-900/40"><td class="p-2 border-r border-zinc-800 text-center font-bold text-amber-300">6</td><td class="p-2 border-r border-zinc-800">2,500 (9,500)</td><td class="p-2">2,000 (7,500)</td></tr>
                            <tr class="hover:bg-zinc-900/40"><td class="p-2 border-r border-zinc-800 text-center font-bold text-amber-300">7</td><td class="p-2 border-r border-zinc-800">3,000 (12,500)</td><td class="p-2">2,500 (10,000)</td></tr>
                            <tr class="hover:bg-zinc-900/40"><td class="p-2 border-r border-zinc-800 text-center font-bold text-amber-300">8</td><td class="p-2 border-r border-zinc-800">4,000 (16,500)</td><td class="p-2">3,000 (13,000)</td></tr>
                            <tr class="hover:bg-zinc-900/40"><td class="p-2 border-r border-zinc-800 text-center font-bold text-amber-300">9</td><td class="p-2 border-r border-zinc-800">5,000 (21,500)</td><td class="p-2">4,000 (17,000)</td></tr>
                            <tr class="hover:bg-zinc-900/40"><td class="p-2 border-r border-zinc-800 text-center font-bold text-amber-300">10</td><td class="p-2 border-r border-zinc-800">6,000 (27,500)</td><td class="p-2">5,000 (22,000)</td></tr>
                            <tr class="hover:bg-zinc-900/40"><td class="p-2 border-r border-zinc-800 text-center font-bold text-amber-300">11</td><td class="p-2 border-r border-zinc-800">7,500 (35,000)</td><td class="p-2">6,000 (28,000)</td></tr>
                            <tr class="hover:bg-zinc-900/40"><td class="p-2 border-r border-zinc-800 text-center font-bold text-amber-300">12</td><td class="p-2 border-r border-zinc-800">9,000 (44,000)</td><td class="p-2">7,500 (35,500)</td></tr>
                            <tr class="hover:bg-zinc-900/40"><td class="p-2 border-r border-zinc-800 text-center font-bold text-amber-300">13</td><td class="p-2 border-r border-zinc-800">10,500 (54,500)</td><td class="p-2">9,000 (44,500)</td></tr>
                            <tr class="hover:bg-zinc-900/40"><td class="p-2 border-r border-zinc-800 text-center font-bold text-amber-300">14</td><td class="p-2 border-r border-zinc-800">12,000 (66,500)</td><td class="p-2">10,500 (55,000)</td></tr>
                            <tr class="hover:bg-zinc-900/40"><td class="p-2 border-r border-zinc-800 text-center font-bold text-amber-300">15</td><td class="p-2 border-r border-zinc-800">13,500 (80,000)</td><td class="p-2">12,000 (67,000)</td></tr>
                        </tbody>
                    </table>
                </div>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-2 text-[11px] text-zinc-400 font-sans pt-1">
                    <p><strong class="text-amber-400">表格 A 技能：</strong> 戰士、拳鬥士、操靈士、真語士、神官、魔動機師、騎手(野獸大師)</p>
                    <p><strong class="text-amber-400">表格 B 技能：</strong> 輕戰士、射手、斥候、遊俠、學者、練體士、吟遊詩人、賦術師、騎手</p>
                </div>
            </div>
        </div>
    </div>
</div>
<!-- ==================== 行為判定完整規則模組 ==================== -->
<class="space-y-6 bg-zinc-900/90 border border-zinc-800 rounded-xl p-6 shadow-lg">
    <!-- 章節主標題 -->
    <div class="border-b border-zinc-800 pb-4 flex items-center gap-3">
        <div class="p-2.5 bg-amber-500/10 rounded-lg text-amber-400">
            <i class="fa-solid fa-dice-d20 text-2xl"></i>
        </div>
        <div>
            <h2 class="text-xl font-bold text-amber-400 tracking-wider">行為判定完整規則總覽</h2>
            <p class="text-xs text-zinc-400">包含基本公式、自動成功／失敗處理、目標值目安、加減值修正、對抗比較、四大判定包、再挑戰與縮短時間規則。</p>
        </div>
    </div>

    <!-- 1. 基本公式與自動成功/失敗 -->
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div class="bg-zinc-950/70 border border-zinc-800 rounded-xl p-4 space-y-3">
            <h3 class="text-base font-bold text-amber-400 flex items-center gap-2">
                <i class="fa-solid fa-calculator text-amber-500"></i> 1. 基本計算公式與平目
            </h3>
            <div class="space-y-1.5 text-xs bg-zinc-900 p-3 rounded-lg border border-zinc-800/80 font-mono">
                <div class="text-cyan-300">・一般基準值 ＝ 技能等級 ＋ 能力值加值</div>
                <div class="text-cyan-300">・冒險者基準值 ＝ 冒險者等級 ＋ 能力值加值</div>
                <div class="text-amber-300 font-bold">・達成值 ＝ 基準值 ＋ 2d6</div>
                <div class="text-emerald-400">・達成值 ≧ 目標值 → 成功 ｜ 達成值 ＜ 目標值 → 失敗</div>
            </div>
            <p class="text-xs text-zinc-300 leading-relaxed">
                <strong class="text-amber-300">【平目】</strong>：不具備對應技能時仍可嘗試部分行為判定；此時技能等級視為「0」，且<span class="text-red-400 font-bold">不可加上對應的能力值加值</span>（基準值 ＝ 0，僅以 2d 出目決定達成值）。
            </p>
        </div>

        <div class="bg-zinc-950/70 border border-zinc-800 rounded-xl p-4 space-y-3">
            <h3 class="text-base font-bold text-amber-400 flex items-center gap-2">
                <i class="fa-solid fa-bolt text-amber-500"></i> 2. 自動成功（6雙）與自動失敗（1雙）
            </h3>
            <ul class="text-xs text-zinc-300 space-y-2 leading-relaxed">
                <li>
                    <span class="text-emerald-400 font-bold">● 自動成功（2d 擲出兩個 6）</span>：無視基準值、目標值與任何修正，<span class="text-emerald-300 font-bold">必定成功</span>（平目亦可觸發）。若規則需計算達成值數值，則將 2d 視為「12」計算後<span class="text-amber-300 font-bold">再額外 ＋5</span>。
                </li>
                <li>
                    <span class="text-red-400 font-bold">● 自動失敗（2d 擲出兩個 1）</span>：無視任何修正，<span class="text-red-300 font-bold">必定失敗</span>，且該角色當場立刻獲得 <span class="text-amber-400 font-bold">50 點經驗點</span>（平目亦可獲得）。若需計算達成值數值，強制視為 <span class="text-red-300 font-bold">「0」</span>。
                </li>
                <li class="text-zinc-400">
                    ※ 進行判定所需的 MP 或道具（如施法），無論成功、失敗、自動成功或自動失敗，原則上皆照常消耗。
                </li>
            </ul>
        </div>
    </div>

    <!-- 2. 目標值目安表 與 加減值修正 -->
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div class="bg-zinc-950/70 border border-zinc-800 rounded-xl p-4 space-y-3">
            <h3 class="text-base font-bold text-amber-400">3. 目標值難度目安表（GM 決定）</h3>
            <div class="overflow-x-auto">
                <table class="w-full text-xs text-left border-collapse">
                    <thead>
                        <tr class="bg-zinc-900 text-zinc-400 border-b border-zinc-800">
                            <th class="py-2 px-3">狀況難度描述</th>
                            <th class="py-2 px-3 text-center w-20">目標值</th>
                        </tr>
                    </thead>
                    <tbody class="divide-y divide-zinc-800/60 text-zinc-300">
                        <tr><td class="py-1.5 px-3">沒有技能的素人也幾乎都會成功</td><td class="py-1.5 px-3 text-center font-bold text-amber-300">5</td></tr>
                        <tr><td class="py-1.5 px-3">沒有技能的素人也有一半機率成功</td><td class="py-1.5 px-3 text-center font-bold text-amber-300">7</td></tr>
                        <tr><td class="py-1.5 px-3">有技能的話大致會成功；對素人而言很困難</td><td class="py-1.5 px-3 text-center font-bold text-amber-300">9</td></tr>
                        <tr><td class="py-1.5 px-3">光有技能的話成功率各半</td><td class="py-1.5 px-3 text-center font-bold text-amber-300">11</td></tr>
                        <tr><td class="py-1.5 px-3">光有技能的話能成功算很幸運</td><td class="py-1.5 px-3 text-center font-bold text-amber-300">13</td></tr>
                        <tr><td class="py-1.5 px-3">若未對該技能有一定程度的精通就無法成功</td><td class="py-1.5 px-3 text-center font-bold text-amber-300">15</td></tr>
                        <tr><td class="py-1.5 px-3">除了相當高的技能等級外，還需要能力資質</td><td class="py-1.5 px-3 text-center font-bold text-amber-300">17</td></tr>
                        <tr><td class="py-1.5 px-3">若未精通並熟練該技能就無法成功</td><td class="py-1.5 px-3 text-center font-bold text-amber-300">19</td></tr>
                        <tr><td class="py-1.5 px-3">除了技能與能力外，還需要運氣</td><td class="py-1.5 px-3 text-center font-bold text-amber-300">21</td></tr>
                    </tbody>
                </table>
            </div>
        </div>

        <div class="bg-zinc-950/70 border border-zinc-800 rounded-xl p-4 space-y-3">
            <h3 class="text-base font-bold text-amber-400">4. 加值與減值修正（僅適用行動判定）</h3>
            <p class="text-xs text-zinc-400">※ 環境與身體負面減值僅適用於「行動判定」，不適用於生死、生命抵抗、精神抵抗力判定；達成值低於 0 視為 0。</p>
            <div class="space-y-2 text-xs text-zinc-300">
                <div class="bg-zinc-900 p-2.5 rounded border border-zinc-800">
                    <span class="text-amber-300 font-bold block mb-1">【修正目安】</span>
                    些微有利/不利：<span class="text-cyan-300 font-bold">±1</span> ｜ 明顯有利/不利：<span class="text-cyan-300 font-bold">±2</span> ｜ 足以顛覆實力：<span class="text-cyan-300 font-bold">±3</span> ｜ 壓倒性有利/不利：<span class="text-cyan-300 font-bold">±4</span>
                </div>
                <div class="bg-zinc-900 p-2.5 rounded border border-zinc-800">
                    <span class="text-pink-400 font-bold block mb-1">【視線不良減值】</span>（具備暗視者無減值）<br>
                    僅有月星光戶外：<span class="text-red-400">-2</span> ｜ 無光源屋內/地下：<span class="text-red-400">-4</span> ｜ 濃霧/沙塵暴：<span class="text-red-400">-2</span> ｜ 單眼受損：<span class="text-red-400">-1</span> ｜ 雙眼受損：<span class="text-red-400">-4</span>
                </div>
                <div class="bg-zinc-900 p-2.5 rounded border border-zinc-800">
                    <span class="text-pink-400 font-bold block mb-1">【身體受限減值】</span><br>
                    跌倒或剛站起當下：<span class="text-red-400">-2</span>（至該角色回合結束） ｜ 冰上/泥濘立足點差：<span class="text-red-400">-2</span> ｜ 單手/單腳不能用：<span class="text-red-400">-2</span> ｜ 雙手/雙腳不能用：<span class="text-red-400">-4</span> ｜ 被網/藤蔓/泥沼纏住：<span class="text-red-400">-2</span> ｜ 腰部以下浸水：<span class="text-red-400">-2</span> ｜ 全身浸水：<span class="text-red-400">-4</span>
                </div>
            </div>
        </div>
    </div>

    <!-- 3. 達成值比較（對抗判定） -->
    <div class="bg-zinc-950/70 border border-zinc-800 rounded-xl p-4 space-y-3">
        <h3 class="text-base font-bold text-amber-400">5. 達成值的比較（對抗判定與受動側優先原則）</h3>
        <div class="bg-amber-950/20 border border-amber-900/40 rounded-lg p-3 text-xs text-zinc-200 space-y-1">
            <div class="font-bold text-amber-400">★ 受動側優先三大原則（主動發起者為「能動側」，承受／閃避者為「受動側」）：</div>
            <div>1. 能動側<span class="text-red-400 font-bold">自動失敗</span>時，受動側無須擲骰<span class="text-emerald-400 font-bold">直接獲勝</span>。</div>
            <div>2. 能動側與受動側<span class="text-cyan-300 font-bold">達成值同點</span>時，<span class="text-emerald-400 font-bold">受動側獲勝</span>。</div>
            <div>3. 能動側與受動側<span class="text-amber-300 font-bold">雙方皆自動成功</span>時，<span class="text-emerald-400 font-bold">受動側獲勝</span>。</div>
        </div>
        <div class="overflow-x-auto">
            <table class="w-full text-xs text-left border-collapse">
                <thead>
                    <tr class="bg-zinc-900 text-zinc-400 border-b border-zinc-800">
                        <th class="py-2 px-3">對抗狀況</th>
                        <th class="py-2 px-3 text-cyan-300">能動側判定</th>
                        <th class="py-2 px-3 text-emerald-300">受動側判定</th>
                    </tr>
                </thead>
                <tbody class="divide-y divide-zinc-800/60 text-zinc-300">
                    <tr><td class="py-1.5 px-3">攻擊的命中與迴避</td><td class="py-1.5 px-3">命中力判定</td><td class="py-1.5 px-3">迴避力判定</td></tr>
                    <tr><td class="py-1.5 px-3">魔法／咒歌／賦術的抵抗</td><td class="py-1.5 px-3">魔法行使／演奏／賦術判定</td><td class="py-1.5 px-3">精神抵抗力判定</td></tr>
                    <tr><td class="py-1.5 px-3">騎獸弱點的隱蔽</td><td class="py-1.5 px-3">魔物知識判定（魔物可能用魔力）</td><td class="py-1.5 px-3">弱點隱蔽判定</td></tr>
                    <tr><td class="py-1.5 px-3">發現隱藏物品・構造物／足跡</td><td class="py-1.5 px-3">探索判定／足跡追蹤判定</td><td class="py-1.5 px-3">隱蔽判定</td></tr>
                    <tr><td class="py-1.5 px-3">察覺全般隱蔽事物</td><td class="py-1.5 px-3">異常感知判定（GM指示）</td><td class="py-1.5 px-3">隱蔽判定（達成值視為高4點）</td></tr>
                    <tr><td class="py-1.5 px-3">發現／觸發前察覺／解除陷阱</td><td class="py-1.5 px-3">探索／陷阱迴避（GM指示）／解除判定</td><td class="py-1.5 px-3">陷阱設置判定（陷阱迴避時受動視為高4點）</td></tr>
                    <tr><td class="py-1.5 px-3">看破／察覺變裝</td><td class="py-1.5 px-3">真偽判定／異常感知（GM指示）</td><td class="py-1.5 px-3">變裝判定（異常感知時受動視為高4點）</td></tr>
                    <tr><td class="py-1.5 px-3">發現／察覺隱密狀態者</td><td class="py-1.5 px-3">探索（達成值+4）／危險感知（GM指示）</td><td class="py-1.5 px-3">隱密判定</td></tr>
                    <tr><td class="py-1.5 px-3">隱密接近／扒竊／跟蹤與察覺</td><td class="py-1.5 px-3">隱密判定／扒竊判定／跟蹤判定</td><td class="py-1.5 px-3">危險感知判定（GM指示）</td></tr>
                </tbody>
            </table>
        </div>
    </div>

    <!-- 4. 行為判定與判定包一覽 -->
    <div class="bg-zinc-950/70 border border-zinc-800 rounded-xl p-4 space-y-4">
        <h3 class="text-base font-bold text-amber-400">6. 行動判定與四大／專屬判定包（パッケージ）一覽</h3>
        <p class="text-xs text-zinc-400">
            ※ 扣除「生死判定」「生命抵抗力判定」「精神抵抗力判定」後，其餘全部行為判定統稱為<strong class="text-amber-300">「行動判定」</strong>。<br>
            ※ 標註 <span class="text-emerald-400 font-bold">*</span> 之游俠判定僅限於「自然環境」（有充足植物、天然岩石或土壤之環境）進行。
        </p>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
            <div class="bg-zinc-900 border border-zinc-800 rounded-lg p-3 space-y-1.5">
                <div class="font-bold text-cyan-300 border-b border-zinc-800 pb-1">技巧判定包（斥候 or 游俠 ＋ 器用度加值）</div>
                <div class="text-zinc-300">・<span class="text-amber-300">僅斥候</span>：扒竊判定（10秒）、變裝判定（10分，幫他人變裝 -4）</div>
                <div class="text-zinc-300">・<span class="text-emerald-300">共通</span>：隱蔽（1分）、解除*（1分）、陷阱設置*（10分）<span class="text-zinc-400">（斥候機械類無工具 -4）</span></div>
                <div class="text-zinc-300">・<span class="text-lime-300">僅游俠</span>：急救判定（10分，含騎手；目標值為負HP絕對值，成功HP變1）</div>
            </div>

            <div class="bg-zinc-900 border border-zinc-800 rounded-lg p-3 space-y-1.5">
                <div class="font-bold text-cyan-300 border-b border-zinc-800 pb-1">運動判定包（斥候 or 游俠 ＋ 敏捷度加值）</div>
                <div class="text-zinc-300">・<span class="text-amber-300">僅斥候</span>：先制判定（一瞬，<span class="text-red-400">6雙不視為自動成功且無+5，僅算12</span>）</div>
                <div class="text-zinc-300">・<span class="text-emerald-300">共通</span>：受身（一瞬，含騎手）、隱密（1分，無準備 -2）、輕業（1分）、登攀（1分）、跟蹤（10分）<span class="text-zinc-400">（以上裝備金屬鎧皆 -4）</span></div>
            </div>

            <div class="bg-zinc-900 border border-zinc-800 rounded-lg p-3 space-y-1.5">
                <div class="font-bold text-cyan-300 border-b border-zinc-800 pb-1">觀察判定包（斥候 or 游俠 ＋ 智力加值）</div>
                <div class="text-zinc-300">・<span class="text-amber-300">僅斥候</span>：寶物鑑定（10分，含賢者；斥候僅知價格；-4 可縮短為一瞬）</div>
                <div class="text-zinc-300">・<span class="text-emerald-300">共通</span>：足跡追蹤（1分）、異常感知*（一瞬）、順風耳（10秒）、危險感知（一瞬）、探索*（10分）、天候預測（1分）、陷阱迴避*（一瞬）、地圖製作*（10分，含賢者/騎手）</div>
                <div class="text-zinc-300">・<span class="text-lime-300">僅游俠</span>：疾病知識（10分，含賢者，-4 可一瞬）、藥品學（1分，含賢者/煉金）</div>
            </div>

            <div class="bg-zinc-900 border border-zinc-800 rounded-lg p-3 space-y-1.5">
                <div class="font-bold text-cyan-300 border-b border-zinc-800 pb-1">知識判定包 & 煉金／騎手專屬判定包</div>
                <div class="text-zinc-300">・<span class="text-amber-300">賢者知識判定包（賢者＋智力）</span>：見識（一瞬，含吟遊/煉金）、魔物知識（一瞬，含騎手）、文獻（10分，含煉金）、文明鑑定（10分）</div>
                <div class="text-zinc-300">・<span class="text-purple-300">煉金知識判定包（煉金＋智力）</span>：見識、文獻、藥品學</div>
                <div class="text-zinc-300">・<span class="text-orange-300">騎手運動（騎手＋敏捷）</span>：受身、騎乘（1分）</div>
                <div class="text-zinc-300">・<span class="text-orange-300">騎手知識（騎手＋智力）</span>：弱點隱蔽（一瞬）、地圖製作、魔物知識<span class="text-zinc-400">（不可看破弱點）</span></div>
                <div class="text-zinc-300">・<span class="text-orange-300">騎手觀察（需【探索指令】）</span>：足跡追蹤、異常感知、危險感知、探索、陷阱迴避</div>
            </div>
        </div>

        <!-- 冒險者判定速查 -->
        <div class="bg-zinc-900 border border-zinc-800 rounded-lg p-3 text-xs text-zinc-300 space-y-1">
            <div class="font-bold text-amber-300">【冒險者判定（基準值 ＝ 冒險者等級 ＋ 對應能力值加值）】</div>
            <div>・<span class="text-cyan-300">真偽判定（智力 / 10秒）</span>：識破演技、謊言、幻覺或偽裝（由 GM 提示進行）。</div>
            <div>・<span class="text-cyan-300">游泳判定（敏捷 / 1分或10秒）</span>：游過水域並減輕水中行動減值。</div>
            <div>・<span class="text-cyan-300">跳躍判定（敏捷 / 10秒）</span>：預設目標值 10。跳遠3m/跳高1m內 ±0（每增1m/10cm -2）、無助跑/看不見落點/強風 -2、金屬鎧 -4、幾乎無行李/5m助跑 +2。</div>
            <div>・<span class="text-cyan-300">登攀判定（筋力 / 1分）</span>：預設目標值 10。5m內 ±0（每增5m -2）、無抓握點陡坡/懸空繩索/金屬鎧 -4、強風 -2、無行李/有繩索輔助 +2。失敗從嘗試高度一半處墜落。</div>
            <div>・<span class="text-cyan-300">腕力判定（筋力 / 10秒）</span>：搬巨石、推開生鏽鐵門、折彎鐵棒等純力量檢定。</div>
        </div>
    </div>

    <!-- 5. 再挑戰與縮短時間規則 -->
    <div class="bg-zinc-950/70 border border-zinc-800 rounded-xl p-4 space-y-3">
        <h3 class="text-base font-bold text-amber-400">7. 行為判定的再挑戰與縮短時間規則</h3>
        <div class="bg-zinc-900 border border-amber-500/30 rounded-lg p-2.5 text-center text-xs font-mono text-amber-300 font-bold">
            【時間階段表】 10秒（1輪） ↔ 1分（6輪） ↔ 10分（60輪） ↔ 1小時 ↔ 6小時 ↔ 24小時 ↔ 1週
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs text-zinc-300 leading-relaxed">
            <div class="bg-zinc-900/60 p-3 rounded-lg border border-zinc-800 space-y-1.5">
                <div class="font-bold text-cyan-300">【失敗後的再挑戰】</div>
                <div>・<span class="text-red-400 font-bold">不可再挑戰</span>：「所需時間：一瞬」的判定（除非特技/道具允許），以及失敗後狀況已改變失去機會者（如隱密失敗被發現）。</div>
                <div>・<span class="text-amber-300 font-bold">有代價/風險者</span>：可承擔相同風險以<span class="text-zinc-100 font-bold">原所需時間</span>再挑戰。</div>
                <div>・<span class="text-emerald-300 font-bold">無風險者</span>：同一名 PC 再挑戰時，所需時間依階段表<span class="text-zinc-100 font-bold">往上拉長 1 階</span>（上限 1 週；換人嘗試則按原時間）。</div>
                <div>・<span class="text-pink-400 font-bold">解除陷阱特例</span>：失敗後可選擇「立刻以原時間再挑戰（若再失敗陷阱直接觸發）」，或拉長階段安全再挑戰。開鎖連續失敗可能導致<span class="text-red-400">鑰匙孔損壞</span>。</div>
            </div>

            <div class="bg-zinc-900/60 p-3 rounded-lg border border-zinc-800 space-y-1.5">
                <div class="font-bold text-cyan-300">【縮短所需時間（趕時間硬做）】</div>
                <div>・原本所需時間在<span class="text-amber-300 font-bold">「1分（6輪）」以上</span>的判定，可依階段表往下縮短時間（最低至 10 秒）。</div>
                <div>・<span class="text-red-400 font-bold">代價</span>：每縮短 1 階段，達成值承受 <span class="text-red-400 font-bold">「－2」</span> 減值修正。</div>
                <div>・<span class="text-zinc-400">限制1</span>：需長詠唱時間的魔法行使（如 1 小時的復活術）不可縮短。</div>
                <div>・<span class="text-zinc-400">限制2</span>：縮短時間進行陷阱「解除判定」一旦失敗會<span class="text-red-400">立刻觸發陷阱</span>。</div>
                <div>・<span class="text-zinc-400">限制3</span>：對曾縮短時間的判定進行再挑戰時，強制恢復為原本表定的正常所需時間（無減值，不可再縮短）。</div>
            </div>
        </div>
    </div>
`;