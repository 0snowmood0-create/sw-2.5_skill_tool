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
`;