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
                <p class="text-xs text-zinc-400">包含主/輔助動作細節、回復/生死/甦生、污穢度、PC 成長、行為判定與魔法基本規則。</p>
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
- <strong>撿起：</strong>1 次主動作可撿起 1 個同一區域地面的武器/物品。<br>
- <strong>收納：</strong>1 次主動作可將手上 1 個武器/物品作為行李收納。
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
- <strong>基準值：</strong> 冒險者等級 + 生命力加值<br>
- <strong>目標值：</strong> HP 現在值的絕對值（例如 HP 變成 -5，目標值即為 5）
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

    <!-- ==================== 6. 行為判定完整規則模組 ==================== -->
    <div class="space-y-6 bg-zinc-900/90 border border-zinc-800 rounded-xl p-6 shadow-lg">
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
    </div>

    <!-- ==================== 7. 魔法基本規則完整總覽 ==================== -->
    <div class="space-y-6 bg-zinc-900/90 border border-zinc-800 rounded-xl p-6 shadow-lg">
        <!-- 章節主標題 -->
        <div class="border-b border-zinc-800 pb-4 flex items-center gap-3">
            <div class="p-2.5 bg-amber-500/10 rounded-lg text-amber-400">
                <i class="fa-solid fa-wand-sparkles text-2xl"></i>
            </div>
            <div>
                <h2 class="text-xl font-bold text-amber-400 tracking-wider">SW2.5 魔法基本規則完整總覽</h2>
                <p class="text-xs text-zinc-400">包含射程、形狀、對象、貫通與突破、效果時間與解除、抵抗種別、威力表與半減結算、同名／武器重複累積、多部位、屬性、特殊時機施法與造牆注釋。</p>
            </div>
        </div>

        <!-- 7-1. 魔法的射程 -->
        <div class="bg-zinc-950/70 border border-zinc-800 rounded-xl p-4 space-y-3">
            <h3 class="text-base font-bold text-amber-400 flex items-center gap-2">
                <i class="fa-solid fa-bullseye text-amber-500"></i> 1. 魔法的射程
            </h3>
            <p class="text-xs text-zinc-400 leading-relaxed">
                每種魔法皆具備「射程」與「形狀」（常合併記為「射程／形狀：○○／△△」），實際處理依<strong>非戰鬥時</strong>、<strong>基本戰鬥</strong>（⇒『I』126頁）、<strong>上級戰鬥</strong>（⇒『II』51頁）與<strong>熟練戰鬥</strong>（⇒『ET』68頁）而異。
            </p>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs leading-relaxed">
                <div class="bg-zinc-900 p-3.5 rounded-lg border border-zinc-800 space-y-1.5">
                    <div class="font-bold text-amber-400 text-sm">【射程：術者】</div>
                    <ul class="list-disc list-inside space-y-1 text-zinc-300">
                        <li><strong>生效起點：</strong>以術者本身為起點發動魔法。</li>
                        <li><strong>無形狀資料：</strong>不具備「形狀」資料，也不會因狀況或戰鬥規則不同而改變處理方式。</li>
                    </ul>
                </div>

                <div class="bg-zinc-900 p-3.5 rounded-lg border border-zinc-800 space-y-1.5">
                    <div class="font-bold text-cyan-300 text-sm">【射程：接觸】</div>
                    <ul class="list-disc list-inside space-y-1 text-zinc-300">
                        <li><strong>生效條件：</strong>術者必須直接觸碰作為起點的場所、物品或角色來行使（不具「形狀」資料）。</li>
                        <li><strong>非戰鬥時：</strong>可將同一座標的目標設為對象。</li>
                        <li><strong>基本戰鬥：</strong>可將同一區域內的目標設為對象。</li>
                        <li><strong>上級・熟練戰鬥：</strong>可將同一座標的目標設為對象；若術者處於「亂戰狀態」，「同一亂戰區域內的角色」亦可設為對象。</li>
                    </ul>
                </div>

                <div class="bg-zinc-900 p-3.5 rounded-lg border border-zinc-800 space-y-1.5">
                    <div class="font-bold text-emerald-400 text-sm">【射程：○（△△）】</div>
                    <ul class="list-disc list-inside space-y-1 text-zinc-300">
                        <li><strong>記法說明：</strong>「○」填入 1 或 2，「△△」填入距離數值（如「射程：1（10m）」）。施放時必須指定場所、物品或角色，且<strong>必須處於視線可見狀態</strong>。</li>
                        <li><strong>基本戰鬥（僅參照 ○）：</strong>「1」可到達相鄰區域；「2」則不論敵我區域皆可到達。</li>
                        <li><strong>非戰鬥・上級・熟練戰鬥（參照 △△）：</strong>直接依照括號內的實際距離判斷是否到達。</li>
                    </ul>
                </div>

                <div class="bg-zinc-900 p-3.5 rounded-lg border border-zinc-800 space-y-1.5">
                    <div class="font-bold text-purple-400 text-sm">【射程：2（無限）】</div>
                    <ul class="list-disc list-inside space-y-1 text-zinc-300">
                        <li><strong>無距離限制：</strong>完全不受與目標之間的空間距離限制即可生效。</li>
                        <li><strong>視認條件：</strong>這類型的魔法當中，甚至有不少連目視確認都不需要的特例。</li>
                    </ul>
                </div>
            </div>
        </div>

        <!-- 7-2. 魔法的形狀 -->
        <div class="bg-zinc-950/70 border border-zinc-800 rounded-xl p-4 space-y-3">
            <h3 class="text-base font-bold text-amber-400 flex items-center gap-2">
                <i class="fa-solid fa-shapes text-amber-500"></i> 2. 魔法的形狀
            </h3>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 text-xs leading-relaxed">
                <div class="bg-zinc-900 p-3.5 rounded-lg border border-zinc-800 space-y-1">
                    <div class="font-bold text-zinc-200 text-sm">【形狀：―】</div>
                    <p class="text-zinc-300">不具備形狀。適用於射程為「術者」或「接觸」的魔法。</p>
                </div>

                <div class="bg-zinc-900 p-3.5 rounded-lg border border-zinc-800 space-y-1">
                    <div class="font-bold text-amber-400 text-sm">【形狀：射擊】</div>
                    <p class="text-zinc-300">魔法從術者處沿直線飛出並命中目標。中途若有障礙物則無法到達；若從亂戰區域外瞄準亂戰區域內，會發生<strong>誤射</strong>（⇒『I』137頁、『II』71頁、『ET』73頁）。</p>
                </div>

                <div class="bg-zinc-900 p-3.5 rounded-lg border border-zinc-800 space-y-1">
                    <div class="font-bold text-cyan-300 text-sm">【形狀：起點指定】</div>
                    <p class="text-zinc-300">魔法直接在目標處顯現效果。不受中途障礙物阻擋（但仍不可妨礙目視），且對亂戰區域內行使時<strong>不會發生誤射</strong>。</p>
                </div>

                <div class="bg-zinc-900 p-3.5 rounded-lg border border-zinc-800 space-y-1">
                    <div class="font-bold text-pink-400 text-sm">【形狀：貫通】</div>
                    <p class="text-zinc-300">魔法沿一直線射出，並將通過路徑上的範圍捲入效果中（詳見下方第 4 節）。</p>
                </div>

                <div class="bg-zinc-900 p-3.5 rounded-lg border border-zinc-800 space-y-1">
                    <div class="font-bold text-emerald-400 text-sm">【形狀：突破】</div>
                    <p class="text-zinc-300">與「形狀：貫通」同樣具有一直線的效果範圍，但<strong>術者本身會沿著該直線移動</strong>並同時產生效果（詳見下方第 4 節）。</p>
                </div>
            </div>
        </div>

        <!-- 7-3. 魔法的對象 -->
        <div class="bg-zinc-950/70 border border-zinc-800 rounded-xl p-4 space-y-3">
            <h3 class="text-base font-bold text-amber-400 flex items-center gap-2">
                <i class="fa-solid fa-users-viewfinder text-amber-500"></i> 3. 魔法的對象
            </h3>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 text-xs leading-relaxed">
                <div class="bg-zinc-900 p-3.5 rounded-lg border border-zinc-800 space-y-1">
                    <div class="font-bold text-amber-400 text-sm">【對象：術者】</div>
                    <p class="text-zinc-300">以術者自身為對象。此類魔法即使在盲目狀態或黑暗中也能正常行使。</p>
                </div>

                <div class="bg-zinc-900 p-3.5 rounded-lg border border-zinc-800 space-y-1">
                    <div class="font-bold text-amber-400 text-sm">【對象：1體、1體全、1體X】</div>
                    <p class="text-zinc-300">以 1 名角色為對象，行使時必須明確宣告指定哪名角色。「全」「X」記號代表目標擁有多個部位時的處理差異（詳見下方第 9 節）。</p>
                </div>

                <div class="bg-zinc-900 p-3.5 rounded-lg border border-zinc-800 space-y-1">
                    <div class="font-bold text-amber-400 text-sm">【對象：物體1個】</div>
                    <p class="text-zinc-300">以非角色的單一物體為對象。液體或群體等無法計數的東西不可作為對象。</p>
                </div>

                <div class="bg-zinc-900 p-3.5 rounded-lg border border-zinc-800 space-y-1">
                    <div class="font-bold text-amber-400 text-sm">【對象：任意地點】</div>
                    <p class="text-zinc-300">以空間中的任意一點為目標。<strong>基本戰鬥</strong>指定「區域」；<strong>非戰鬥時・上級戰鬥・熟練戰鬥</strong>則指定「座標」。</p>
                </div>

                <div class="bg-zinc-900 p-3.5 rounded-lg border border-zinc-800 space-y-1">
                    <div class="font-bold text-amber-400 text-sm">【對象：接觸點】</div>
                    <p class="text-zinc-300">在術者可觸及的範圍內，或是緊鄰術者的至近位置製作或召喚某物的魔法。</p>
                </div>
            </div>

            <div class="bg-zinc-900 p-4 rounded-lg border border-zinc-800 space-y-3 text-xs leading-relaxed">
                <div class="font-bold text-cyan-300 text-sm">【影響範圍的魔法：「對象：○區域（半徑△△）／＊＊」】</div>
                <p class="text-zinc-300">原則上以特定區域或地點為目標，並以該處為中心在圓形（球形）範圍內產生效果。</p>
                <div class="grid grid-cols-1 md:grid-cols-3 gap-3">
                    <div class="bg-zinc-950 p-3 rounded border border-zinc-800 space-y-1">
                        <div class="font-bold text-amber-400">○區域（僅基本戰鬥參照）</div>
                        <ul class="list-disc list-inside space-y-1 text-zinc-300">
                            <li><strong>1區域：</strong>僅波及單一目標區域。</li>
                            <li><strong>2～3區域：</strong>波及目標區域及其相鄰區域（目標為任一後方區域則波及該區＋前線共 2 區；目標為前線則波及戰場全部 3 區）。</li>
                            <li><strong>全區域：</strong>必定波及戰場所有區域。</li>
                        </ul>
                    </div>

                    <div class="bg-zinc-950 p-3 rounded border border-zinc-800 space-y-1">
                        <div class="font-bold text-emerald-400">（半徑△△）（非戰鬥・上級・熟練參照）</div>
                        <p class="text-zinc-300">表示效果涵蓋的圓（球）形空間半徑長度。基本戰鬥時無須考慮此數值，僅依區域指示判斷即可。</p>
                    </div>

                    <div class="bg-zinc-950 p-3 rounded border border-zinc-800 space-y-1">
                        <div class="font-bold text-purple-400">／＊＊（作用對象上限與性質）</div>
                        <ul class="list-disc list-inside space-y-1 text-zinc-300">
                            <li><strong>／空間：</strong>直接對空間本身產生影響，範圍內所有角色無一例外皆受影響（多具較長持續時間，每輪依是否處於範圍內判定）。</li>
                            <li><strong>／全部：</strong>以施放瞬間位於指定範圍內的所有角色為對象。</li>
                            <li><strong>／X（5／10／15／20）：</strong>規定最大對象數 X。若範圍內人數超過 X，則隨機抽選 X 名作為對象。</li>
                        </ul>
                    </div>
                </div>
                <div class="bg-amber-950/20 border border-amber-500/30 rounded p-2.5 text-zinc-300">
                    <strong class="text-amber-400">術者的除外可否：</strong>「射程：術者」且對象為「／全部」或「／X」的魔法，施放時術者可自行選擇是否將自己（多部位角色則可逐部位選擇）包含在效果內；若非「射程：術者」或對象為「／空間」，則<strong>術者必定包含在內</strong>。
                </div>
            </div>
        </div>

        <!-- 7-4. 「形狀：貫通」與「形狀：突破」的完整處理 -->
        <div class="bg-zinc-950/70 border border-zinc-800 rounded-xl p-4 space-y-3">
            <h3 class="text-base font-bold text-amber-400 flex items-center gap-2">
                <i class="fa-solid fa-arrows-left-right-to-line text-amber-500"></i> 4. 「形狀：貫通」與「形狀：突破」的完整處理
            </h3>
            <p class="text-xs text-zinc-400 leading-relaxed">
                兩者皆會朝特定方向呈一直線飛出並直達效果終點，沿途路徑上的所有事物皆可能被捲入。「突破」與「貫通」的差異在於<strong>使用時術者會隨之移動</strong>。
            </p>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs leading-relaxed">
                <div class="bg-zinc-900 p-3.5 rounded-lg border border-zinc-800 space-y-1.5">
                    <div class="font-bold text-amber-400 text-sm">【「形狀：貫通」—— 決定目標】</div>
                    <p class="text-zinc-300">行使時需先在視界與射程許可範圍內選擇「以位置為目標」或「以角色 1 體為目標」：</p>
                    <ul class="list-disc list-inside space-y-1 text-zinc-300">
                        <li><strong>以位置為目標：</strong>基本戰鬥需指定不同於術者所在的區域（前線有敵人時，從我方後衛指定敵方後衛需《鷹之眼》）；上級／熟練戰鬥則指定可見座標。</li>
                        <li><strong>以角色 1 體為目標：</strong>多部位角色需指定其中 1 個部位。基本戰鬥不可選同區域角色；上級／熟練戰鬥不可選同座標角色。</li>
                        <li><strong>誤射條件禁止選擇：</strong>滿足誤射條件的目標<strong>根本不允許被選為貫通目標</strong>。</li>
                        <li><strong>亂戰區域限制：</strong>基本戰鬥選亂戰區內角色需《精準射擊》；上級／熟練戰鬥從亂戰區外選亂戰區內角色時，除非目標處於獨立狀態且同座標無其他角色，否則同樣需要《精準射擊》。</li>
                    </ul>
                </div>

                <div class="bg-zinc-900 p-3.5 rounded-lg border border-zinc-800 space-y-1.5">
                    <div class="font-bold text-cyan-300 text-sm">【「形狀：貫通」—— 確認效果通過範圍】</div>
                    <p class="text-zinc-300">貫通效果會一直線飛至射程上限，因此目標途中或目標後方皆可能被捲入：</p>
                    <ul class="list-disc list-inside space-y-1 text-zinc-300">
                        <li><strong>基本戰鬥：</strong>若術者位於亂戰區則該區也會被捲入；非亂戰區則由術者決定是否捲入（通常除外）。自前線施放波及目標後方區；自我方後方施放，「射程：1」僅波及前線區，「射程：2」波及前線與敵方後方區。</li>
                        <li><strong>上級戰鬥：</strong>以術者座標為起點、朝目標方向延伸至射程極限為終點，<strong>包含起點與終點之間</strong>皆為效果範圍（同座標隊友會被捲入，必要時可先限制移動 1m 再施放）。</li>
                        <li><strong>熟練戰鬥：</strong>起點與終點算法同上級戰鬥，效果範圍為連接起點與終點線段的<strong>左右各 1m 寬度（含邊界的細長長方形）</strong>。</li>
                    </ul>
                </div>
            </div>

            <div class="bg-zinc-900 p-3.5 rounded-lg border border-zinc-800 space-y-2 text-xs leading-relaxed">
                <div class="font-bold text-pink-400 text-sm">【受影響角色的決定（貫通・突破共通）】</div>
                <p class="text-zinc-300">位於通過區域內的角色原則上受影響機率為一半一半，並設有幾項例外：</p>
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2.5">
                    <div class="bg-zinc-950 p-2.5 rounded border border-zinc-800">
                        <strong class="text-amber-400 block mb-0.5">被選為目標的角色</strong>
                        決定目標時指定的角色<strong>必定成為受效果影響的對象</strong>。
                    </div>
                    <div class="bg-zinc-950 p-2.5 rounded border border-zinc-800">
                        <strong class="text-cyan-300 block mb-0.5">術者自身</strong>
                        術者自身可由術者<strong>任意決定</strong>是否承受效果。
                    </div>
                    <div class="bg-zinc-950 p-2.5 rounded border border-zinc-800">
                        <strong class="text-emerald-400 block mb-0.5">《魔法制御》除外</strong>
                        宣告戰鬥特技《魔法制御》可從範圍內任意排除不限人數的角色。
                    </div>
                    <div class="bg-zinc-950 p-2.5 rounded border border-zinc-800">
                        <strong class="text-pink-400 block mb-0.5">其他角色（1d 判定）</strong>
                        不符上述條件者擲 <strong>1d</strong>：出目 <strong>1～3 受到效果</strong>，<strong>4～6 不受影響</strong>。
                    </div>
                </div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs leading-relaxed">
                <div class="bg-zinc-900 p-3.5 rounded-lg border border-zinc-800 space-y-1.5">
                    <div class="font-bold text-emerald-400 text-sm">【「形狀：突破」—— 射程、終點與起點近傍除外】</div>
                    <ul class="list-disc list-inside space-y-1 text-zinc-300">
                        <li><strong>決定目標：</strong>與「貫通」相同，指定可見地點或角色 1 體（不可選會發生誤射的目標）。</li>
                        <li><strong>終點宣告（上級・熟練戰鬥）：</strong>宣告時可選 <strong>A. 到達「目標」地點或角色所在處為止</strong>，或 <strong>B. 穿過「目標」直至「射程」極限為止</strong>（選 B 必須衝滿射程不可中途停下；基本戰鬥無須區分）。</li>
                        <li><strong>「突破」射程：</strong>原則為「射程：1（移動力m）」，上級／熟練戰鬥受術者移動力影響（⇒『I』60頁、『II』57頁）。</li>
                        <li><strong>起點近傍除外：</strong>基本戰鬥可除外自身所在區；上級／熟練戰鬥可指定並除外「自身限制移動距離以下」範圍（敵我皆除外，但從亂戰發動突破時不可除外）。</li>
                    </ul>
                </div>

                <div class="bg-zinc-900 p-3.5 rounded-lg border border-zinc-800 space-y-1.5">
                    <div class="font-bold text-purple-400 text-sm">【「形狀：突破」—— 使用宣言與行動限制】</div>
                    <ul class="list-disc list-inside space-y-1 text-zinc-300">
                        <li><strong>宣告時機：</strong>不宣告移動種類，而在移動前直接宣告「突破」。本回合若已移動或執行過任何主動作（含多部位或騎乘的任一部位）皆不可再用（輔助動作與宣告特技可在突破前執行）。</li>
                        <li><strong>次數與移動限制：</strong>每回合限 1 次，不受移動妨害，使用後不可再移動。發動後視為<strong>已完成通常移動</strong>，後續不可再用輔助動作施法；宣告《雙重施法》時必須「先施放其他魔法，再施放突破」（《邊跑邊射》不受此限）。</li>
                        <li><strong>《多重行動》順序：</strong>可「先施放突破魔法 → 再近戰攻擊」，不可先近戰後突破（除非擊倒敵人解除亂戰，或符合亂戰脫離條件）。</li>
                        <li><strong>亂戰狀態下的突破：</strong>原則上亂戰中不可宣言突破（熟練戰鬥在亂戰區內處於獨立狀態則可）；僅在<strong>無須脫離宣言即可脫離亂戰</strong>的條件下（不含自身的敵我人數比達 2：1 以上優勢、透明未被視認、或習得《影走》）才可發動。</li>
                    </ul>
                </div>
            </div>

            <div class="bg-zinc-900 p-3.5 rounded-lg border border-zinc-800 space-y-2 text-xs leading-relaxed">
                <div class="font-bold text-amber-400 text-sm">【阻礙「形狀：貫通」「形狀：突破」的要因】</div>
                <div class="grid grid-cols-1 md:grid-cols-3 gap-2.5 text-zinc-300">
                    <div class="bg-zinc-950 p-2.5 rounded border border-zinc-800">
                        <strong class="text-amber-400 block mb-0.5">無法通過的障礙／撞壁</strong>
                        不可破壞／通過之牆壁會阻斷效果。若「突破」被牆阻擋，術者會撞壁並<strong>翻倒</strong>承受落下傷害（基本戰鬥視為 2m；上級／熟練視為起點至終點距離的 1/5 無條件進位 m）。
                    </div>
                    <div class="bg-zinc-950 p-2.5 rounded border border-zinc-800">
                        <strong class="text-emerald-400 block mb-0.5">設為構造物的牆壁</strong>
                        若牆壁設有防護點與 HP（⇒『III』129頁），可用貫通／突破傷害嘗試破壞；成功破壞則效果繼續前進，失敗則視為受阻（突破者承受撞壁傷害）。
                    </div>
                    <div class="bg-zinc-950 p-2.5 rounded border border-zinc-800">
                        <strong class="text-purple-400 block mb-0.5">【火牆】／墜落／角色</strong>
                        穿過【火牆】時，「突破」需做精神抵抗判定（僅決定傷害是否減半，無論成敗皆繼續前進），「貫通」直接通過；路徑有陷阱洞或懸崖則墜落；<strong>任何「角色」（無論多巨大）原則上皆不阻礙突破</strong>。
                    </div>
                </div>
            </div>
        </div>

        <!-- 7-5. 魔法的效果時間、時間經過管理與解除 -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <div class="bg-zinc-950/70 border border-zinc-800 rounded-xl p-4 space-y-3 text-xs leading-relaxed">
                <h3 class="text-base font-bold text-amber-400 flex items-center gap-2">
                    <i class="fa-solid fa-clock text-amber-500"></i> 5. 魔法的效果時間與經過管理
                </h3>
                <div class="bg-zinc-900 p-3 rounded border border-zinc-800 space-y-1 text-zinc-300">
                    <div class="font-bold text-amber-300">【效果時間分類】</div>
                    <div>・<strong>一瞬：</strong>行使後立即顯現一次效果即結束。</div>
                    <div>・<strong>○秒（△輪）／○分（△輪）／○小時／○日／○年：</strong>指定時間內持續（秒／分附記輪數）。</div>
                    <div>・<strong>永續：</strong>魔法效果永遠持續。</div>
                    <div>・<strong>一瞬／○秒（△輪）、一瞬／○分（△輪）：</strong>對目標造成持續「／」後方時間的影響。</div>
                </div>
                <div class="bg-zinc-900 p-3 rounded border border-zinc-800 space-y-1 text-zinc-300">
                    <div class="font-bold text-cyan-300">【時間經過的管理】</div>
                    <div>・<strong>以輪數管理：</strong>附記「（△輪）」的魔法，每當<strong>術者迎來自己手番開始時</strong>便計算經過 1 輪（與陣營內行動順序無關）。因此「10秒（1輪）」若術者先動、下輪後動，實質可能影響隊友 2 次；反之可能 0 次。</div>
                    <div>・<strong>1 日以上的魔法：</strong>無論何時行使，只要迎來每日分界點<strong>「上午 6 點」</strong>即視為經過 1 日（「1 日 1 次」限制同樣於上午 6 點重置）。</div>
                </div>
            </div>

            <div class="bg-zinc-950/70 border border-zinc-800 rounded-xl p-4 space-y-3 text-xs leading-relaxed">
                <h3 class="text-base font-bold text-amber-400 flex items-center gap-2">
                    <i class="fa-solid fa-ban text-amber-500"></i> 6. 魔法的解除（主動與強制）
                </h3>
                <div class="bg-zinc-900 p-3 rounded border border-zinc-800 space-y-1 text-zinc-300">
                    <div class="font-bold text-emerald-400">【術者以輔助動作主動解除】</div>
                    <div>・效果時間非「永續」或「一瞬」的魔法，術者可在自己回合以<strong>輔助動作</strong>隨時依意志解除（無須發聲／動作），多目標時可針對個別對象分別解除。</div>
                    <div>・標記為<strong>「永續」</strong>或<strong>「一瞬／○○」</strong>的魔法，術者<strong>不可依意志主動解除</strong>。</div>
                </div>
                <div class="bg-zinc-900 p-3 rounded border border-zinc-800 space-y-1 text-zinc-300">
                    <div class="font-bold text-pink-400">【他者進行的強制解除】</div>
                    <div>・<strong>達成值比對：</strong>使用【解除魔法】或《破咒》等（道具／魔物能力亦同），解除方（主動）與施放時達成值（被動，6 ゾロ依 +5 規則）比對，解除方超過或自動成功即解除。</div>
                    <div>・<strong>以角色／物體為對象解除（如【解毒術】）：</strong>僅擲 1 次判定，達成值高過該目標身上哪些效果即<strong>同時全部解除</strong>。</div>
                    <div>・<strong>以魔法／效果本身為對象解除（如【解除魔法】）：</strong>每次<strong>僅能解除「1 個」</strong>事先宣告指定的魔法。「／空間」整體算 1 個（整場解除）；「／全部」或「／X」則<strong>每名角色各算 1 個</strong>（僅解除單人）。</div>
                </div>
            </div>
        </div>

        <!-- 7-6. 抵抗的種別與精神抵抗力判定 -->
        <div class="bg-zinc-950/70 border border-zinc-800 rounded-xl p-4 space-y-3 text-xs leading-relaxed">
            <h3 class="text-base font-bold text-amber-400 flex items-center gap-2">
                <i class="fa-solid fa-shield-virus text-amber-500"></i> 7. 抵抗的種別與精神抵抗力判定
            </h3>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2.5">
                <div class="bg-zinc-900 p-3 rounded border border-zinc-800">
                    <strong class="text-pink-400 block mb-0.5">【抵抗：必中】</strong>
                    無抵抗餘地。只要術者魔法行使判定未自動失敗，效果必定顯現。
                </div>
                <div class="bg-zinc-900 p-3 rounded border border-zinc-800">
                    <strong class="text-emerald-400 block mb-0.5">【抵抗：任意】</strong>
                    只要目標有意願抵抗即<strong>自動成功</strong>，該魔法對目標完全不產生任何效果。
                </div>
                <div class="bg-zinc-900 p-3 rounded border border-zinc-800">
                    <strong class="text-zinc-200 block mb-0.5">【抵抗：無（なし）】</strong>
                    針對物體或空間一點施放、不以角色為對象，故不發生抵抗力判定。行使未自動失敗即生效。
                </div>
                <div class="bg-zinc-900 p-3 rounded border border-zinc-800">
                    <strong class="text-amber-400 block mb-0.5">【抵抗：消滅】</strong>
                    目標若嘗試抵抗則進行精神抵抗力判定，<strong>抵抗成功則完全不受任何效果影響</strong>（非角色對象但需比對達成值者亦歸此類）。
                </div>
                <div class="bg-zinc-900 p-3 rounded border border-zinc-800">
                    <strong class="text-cyan-300 block mb-0.5">【抵抗：半減】</strong>
                    多數傷害型魔法屬此類。目標抵抗成功時，承受傷害進行<strong>半減處理</strong>（詳見下方第 8 節）。
                </div>
                <div class="bg-zinc-900 p-3 rounded border border-zinc-800">
                    <strong class="text-purple-400 block mb-0.5">【抵抗：縮短】</strong>
                    即使抵抗成功，效果仍會對目標持續 <strong>10 秒（1 輪）</strong>（併用《魔法擴大／時間》時，抵抗成功仍固定為 10 秒／1 輪）。
                </div>
            </div>
            <div class="bg-amber-950/20 border border-amber-500/30 rounded p-2.5 text-zinc-300 space-y-1">
                <strong class="text-amber-400 block">精神抵抗力判定結算：</strong>
                術者（魔法行使）達成值<strong>高於</strong>目標（精神抵抗）時發揮完整效果；<strong>平手或目標較高</strong>則無效或僅發揮不完全效果（半減／縮短）。多目標時術者僅擲 1 次行使判定決定統一達成值，各目標分別抵抗；若術者<strong>自動失敗（1 ゾロ）</strong>則當下確定無效，目標無須擲抵抗。
            </div>
        </div>

        <!-- 7-7. 威力表與「抵抗：半減」傷害決定流程 -->
        <div class="bg-zinc-950/70 border border-zinc-800 rounded-xl p-4 space-y-3 text-xs leading-relaxed">
            <h3 class="text-base font-bold text-amber-400 flex items-center gap-2">
                <i class="fa-solid fa-burst text-amber-500"></i> 8. 威力表使用與「抵抗：半減」傷害結算
            </h3>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div class="bg-zinc-900 p-3.5 rounded-lg border border-zinc-800 space-y-1.5 text-zinc-300">
                    <div class="font-bold text-amber-400 text-sm">【威力表與算出傷害】</div>
                    <ul class="list-disc list-inside space-y-1">
                        <li><strong>基本計算：</strong>「造成『威力○＋魔力』點傷害」之魔法，依威力表擲 2d 查表後加上角色魔力即為<strong>「算出傷害」</strong>。</li>
                        <li><strong>1 ゾロ：</strong>威力表 2d 擲出 1 ゾロ，跳過所有步驟，適用傷害直接為 <strong>0</strong>，並獲得 <strong>50 點經驗點</strong>。</li>
                        <li><strong>必殺（C值）：</strong>魔法必殺值一般為 <strong>10</strong>。但「抵抗：半減」且目標抵抗成功時，<strong>不會發生必殺</strong>（僅採計第 1 次查表結果）。</li>
                        <li><strong>必殺後的 1 ゾロ：</strong>補擲 2d 擲出 1 ゾロ，僅以先前已確定結果結束計算，<strong>不獲得經驗點</strong>。</li>
                        <li><strong>複數對象傷害決定：</strong>原則上傷害需<strong>逐一分別擲骰</strong>（避免全有或全無）；非關鍵戰鬥 GM 亦可採一括決定。</li>
                    </ul>
                </div>

                <div class="bg-zinc-900 p-3.5 rounded-lg border border-zinc-800 space-y-1.5 text-zinc-300">
                    <div class="font-bold text-cyan-300 text-sm">【「抵抗：半減」的傷害決定流程】</div>
                    <p>抵抗成功時減半的是<strong>「算出傷害」</strong>（小數點<strong>無條件進位</strong>）：</p>
                    <div class="bg-zinc-950 p-2.5 rounded border border-zinc-800 text-zinc-200 space-y-1 font-mono text-[11px]">
                        <div>1. 確認物理或魔法傷害 → 2. 查威力表＋追加傷害 ＝ <strong>算出傷害</strong></div>
                        <div>3. 抵抗成功 → <strong>將「算出傷害」減半（無條件進位）</strong></div>
                        <div>4. 套用直接提升傷害的效果（如《魔力擊》） ＝ <strong>合算傷害</strong></div>
                        <div>5. 套用減少傷害的效果（防護點／減傷） ＝ <strong>適用傷害</strong> → 扣 HP(MP)</div>
                    </div>
                    <ul class="list-disc list-inside space-y-1 pt-1">
                        <li><strong>上升效果不減半：</strong>直接增加傷害的效果是在「算出傷害半減後」才加上。</li>
                        <li><strong>能力值變動：</strong>如知力＋6 使魔力＋1 屬於追加傷害變動，會計入「算出傷害」階段並受半減影響。</li>
                        <li><strong>抵抗成功時附帶效果無效：</strong>兼具傷害與附帶效果的「抵抗：半減」魔法，抵抗成功時<strong>附帶效果完全不生效</strong>。</li>
                    </ul>
                </div>
            </div>
        </div>

        <!-- 7-8. 同名魔法非重複、武器強化累積與多部位對象 -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 text-xs leading-relaxed">
            <div class="bg-zinc-950/70 border border-zinc-800 rounded-xl p-4 space-y-3">
                <h3 class="text-base font-bold text-amber-400 flex items-center gap-2">
                    <i class="fa-solid fa-layer-group text-amber-500"></i> 9. 同名魔法與武器強化的重複・累積
                </h3>
                <div class="bg-zinc-900 p-3 rounded border border-zinc-800 space-y-1 text-zinc-300">
                    <div class="font-bold text-amber-300">【同名魔法非重複與效果時間覆寫】</div>
                    <div>・<strong>同名不累積：</strong>同名魔法對同一目標不重複累積；附有羅馬數字（I、II、III…）與無數字版本（如【防護】I／II／III）<strong>全部視為同名</strong>。</div>
                    <div>・<strong>時間覆寫（上書き）：</strong>對已受影響目標再施放同名魔法，效果持續並<strong>重置為新施放魔法的完整持續時間</strong>（無論原剩餘幾輪）。</div>
                    <div>・<strong>覆寫例外：</strong>若新魔法被目標抵抗成功則無效（維持原時間）；若新施放時間比原有時間短（如原受《魔法擴大／時間》延長），則<strong>不覆寫</strong>維持較長原時間。</div>
                </div>
                <div class="bg-zinc-900 p-3 rounded border border-zinc-800 space-y-1 text-zinc-300">
                    <div class="font-bold text-emerald-400">【強化武器魔法的重複・累積】</div>
                    <div>・<strong>賦予屬性的魔法（原則限 1 種屬性）：</strong>武器已有魔法屬性時再施放<strong>不同屬性</strong>魔法，目標需選擇「接受新屬性（舊效果自動解除）」或「拒絕（維持舊效果）」。</div>
                    <div>・<strong>同屬性可累積：</strong><strong>相同屬性</strong>的「異名」魔法可累積數值恩惠；永續帶屬性的魔法武器僅能累積同屬性魔法，異屬性完全無效。</div>
                    <div>・<strong>不賦予屬性的武器強化魔法：</strong>只要是異名魔法<strong>全部皆可累積</strong>（即使武器已賦予屬性亦同）。</div>
                </div>
            </div>

            <div class="bg-zinc-950/70 border border-zinc-800 rounded-xl p-4 space-y-3">
                <h3 class="text-base font-bold text-amber-400 flex items-center gap-2">
                    <i class="fa-solid fa-dragon text-amber-500"></i> 10. 多部位對象（「1體全」「1體X」）與魔法屬性
                </h3>
                <div class="bg-zinc-900 p-3 rounded border border-zinc-800 space-y-1 text-zinc-300">
                    <div class="font-bold text-cyan-300">【多部位角色的對象處理】</div>
                    <div>・一般「對象：1體」僅能指定 1 個部位。</div>
                    <div>・<strong>對象：1體全：</strong>無論目標有多少部位，<strong>全部部位皆成為對象</strong>，消耗 MP 仍僅 <strong>1 份</strong>。</div>
                    <div>・<strong>對象：1體X：</strong>必定以全部部位為對象，消耗 MP 自動乘以<strong>「該角色部位數」倍</strong>（無須習得／宣告《魔法擴大／數》；MP 不足則無法指定）。併用《魔法擴大／數／すべて》時需支付所有目標部位數總和倍數的 MP（若有《MP輕減／魔力節約》先減算基礎消耗再乘倍）。</div>
                </div>
                <div class="bg-zinc-900 p-3 rounded border border-zinc-800 space-y-1 text-zinc-300">
                    <div class="font-bold text-pink-400">【魔法的屬性分類】</div>
                    <div>・<strong>土、水・冰、炎、風、雷、純能量、斷空、衝擊：</strong>主要作為傷害類型。</div>
                    <div>・<strong>毒、疾病：</strong>對不死族／魔法生物無效，無視部分防禦魔法；可用【解毒術】【治病術】解除。</div>
                    <div>・<strong>精神效果／精神效果（弱）：</strong>無精神魔物無效，可用【清醒術】解除。「（弱）」（含一般睡眠）受 HP/MP 傷害立即解除，他者可用主動作「喚醒（接觸／1體全）」。</div>
                    <div>・<strong>詛咒：</strong>【解除魔法】無效，需用【移除詛咒】。</div>
                    <div>・<strong>詛咒＋精神效果：</strong>對任一屬性無效化即全免疫；數值修正可累積（單一效果同時記載兩者僅套用一次）；解除時<strong>僅能以「解除詛咒」手段解除</strong>。</div>
                    <div>・<strong>複數屬性（○○且××）：</strong>針對每名目標<strong>自動選取對該目標較不利的屬性</strong>結算。</div>
                </div>
            </div>
        </div>

        <!-- 7-9. 特殊時機施法、多效果選擇與造牆魔法注釋 -->
        <div class="bg-zinc-950/70 border border-zinc-800 rounded-xl p-4 space-y-3 text-xs leading-relaxed">
            <h3 class="text-base font-bold text-amber-400 flex items-center gap-2">
                <i class="fa-solid fa-bolt text-amber-500"></i> 11. 特殊時機施法、多效果選擇與造牆魔法注釋
            </h3>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div class="bg-zinc-900 p-3.5 rounded-lg border border-zinc-800 space-y-1.5 text-zinc-300">
                    <div class="font-bold text-amber-400 text-sm">【輔助動作（▶▶）與戰鬥準備（△）施法】</div>
                    <ul class="list-disc list-inside space-y-1">
                        <li><strong>輔助動作魔法（▶▶）：</strong>自己回合內不限次數、任意時機皆可施放（每次消耗 MP），仍須滿足發動體與發聲條件，本回合移動僅限「限制移動」。</li>
                        <li><strong>行使判定與達成值：</strong>輔助動作施法不擲骰（不會大失敗），自動行使成功但<strong>達成值視為「0」</strong>；亦可改用主動作施放以擲骰取得正常達成值。</li>
                        <li><strong>戰鬥準備魔法（△）：</strong>於「戰鬥準備」（⇒『I』129頁）施放，需滿足施法條件、不擲骰且達成值為「0」，但<strong>每種魔法在戰鬥準備階段限用 1 次</strong>（不同魔法可各自施放）。</li>
                        <li><strong>選擇複數效果的魔法：</strong>如【魔導師】施法時選擇賦予哪項特技；併用《魔法擴大／數》對複數目標施放時，<strong>所有目標的效果必須統一</strong>。</li>
                    </ul>
                </div>

                <div class="bg-zinc-900 p-3.5 rounded-lg border border-zinc-800 space-y-1.5 text-zinc-300">
                    <div class="font-bold text-emerald-400 text-sm">【造牆魔法在各戰鬥規則中的處理】</div>
                    <ul class="list-disc list-inside space-y-1">
                        <li><strong>基本戰鬥：</strong>牆壁建於區域與區域之間（每個區間限建 1 道牆），阻擋視線與射線；跨越有牆的區域移動需用「全力移動」。以牆為目標時，相鄰區視為「射程：1」、相隔區視為「射程：2」。</li>
                        <li><strong>上級戰鬥：</strong>牆壁建於 1 個座標點上且<strong>必須垂直於戰場直線</strong>（不可與既有牆壁或角色重疊，亦不可在有牆座標結束移動）。越牆移動需額外計算 <strong>＋10m 繞行距離</strong>；若牆壁位於亂戰區內，亂戰區域將於該處中斷。</li>
                        <li><strong>熟練戰鬥：</strong>術者依數據將牆壁以<strong>無厚度線段</strong>繪製於地圖上（角度任意），依實際圖示判斷視線、射線與繞行路徑。若牆壁完全切斷亂戰區域，無中心點的一側不再視為亂戰區域（新生成的亂戰區亦不跨越牆壁；GM 可依人數與面積整合度酌情擴大亂戰圓半徑 ⇒『ET』71頁）。</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</div>
`;