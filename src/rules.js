export const ruleSections = [
  {
    id: 'sec-skill_overview_rules',
    title: '技能總表與職業定位一覽',
    icon: 'fa-solid fa-table-list',
    content: `
        <div class="space-y-6">
            <!-- 標題區塊 -->
            <div class="bg-zinc-900/90 border border-amber-500/30 rounded-xl p-5 shadow-lg flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div class="flex items-center gap-3">
                    <div class="p-2.5 bg-amber-500/10 rounded-lg text-amber-400">
                        <i class="fa-solid fa-table-list text-2xl"></i>
                    </div>
                    <div>
                        <h2 class="text-xl font-bold text-amber-400 tracking-wider">SW2.5 全職業技能總表</h2>
                        <p class="text-xs text-zinc-400">收錄基本規則書 I～III 與主要擴充書之全技能分類、經驗表（A/B）及核心職能簡介。</p>
                    </div>
                </div>
                <div class="flex gap-2 text-xs">
                    <span class="px-2.5 py-1 rounded bg-amber-950/60 text-amber-300 border border-amber-800/60">經驗表 A：主力戰鬥 / 魔法職</span>
                    <span class="px-2.5 py-1 rounded bg-cyan-950/60 text-cyan-300 border border-cyan-800/60">經驗表 B：偵察 / 輔助 / 特殊職</span>
                </div>
            </div>

            <!-- 1. 戰士系技能 -->
            <div class="bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden shadow-lg">
                <div class="px-4 py-3 bg-zinc-950/80 border-b border-zinc-800 flex items-center gap-2">
                    <i class="fa-solid fa-sword text-red-400"></i>
                    <h3 class="font-bold text-zinc-100 text-base">一、戰士系技能（物理攻擊與前衛防禦）</h3>
                </div>
                <div class="overflow-x-auto">
                    <table class="w-full text-left border-collapse text-xs">
                        <thead>
                            <tr class="bg-zinc-950/50 text-zinc-400 border-b border-zinc-800">
                                <th class="py-2.5 px-4 w-32">技能名稱</th>
                                <th class="py-2.5 px-2 w-16 text-center">經驗表</th>
                                <th class="py-2.5 px-3 w-36">主要檢定 / 基準</th>
                                <th class="py-2.5 px-4">職能定位與特色簡介</th>
                            </tr>
                        </thead>
                        <tbody class="divide-y divide-zinc-800/70 text-zinc-300">
                            <tr class="hover:bg-zinc-800/40">
                                <td class="py-2.5 px-4 font-bold text-amber-400">戰士 (Fighter)</td>
                                <td class="py-2.5 px-2 text-center text-amber-300 font-bold">A</td>
                                <td class="py-2.5 px-3 text-zinc-400">命中 / 迴避 / 追加傷害</td>
                                <td class="py-2.5 px-4">全能型重裝前衛，可裝備所有武器與金屬鎧甲，擁有最高等級的防護與穩定輸出，Lv7 習得《堅韌》。</td>
                            </tr>
                            <tr class="hover:bg-zinc-800/40">
                                <td class="py-2.5 px-4 font-bold text-amber-400">拳鬥士 (Grappler)</td>
                                <td class="py-2.5 px-2 text-center text-amber-300 font-bold">A</td>
                                <td class="py-2.5 px-3 text-zinc-400">命中 / 迴避 / 追加傷害</td>
                                <td class="py-2.5 px-4">高機動輕裝近戰，僅能穿非金屬鎧，專精格鬥武器與連擊追打，Lv1 自動習得《追加攻擊》與《投擲》。</td>
                            </tr>
                            <tr class="hover:bg-zinc-800/40">
                                <td class="py-2.5 px-4 font-bold text-amber-400">輕戰士 (Fencer)</td>
                                <td class="py-2.5 px-2 text-center text-cyan-300 font-bold">B</td>
                                <td class="py-2.5 px-3 text-zinc-400">命中 / 迴避 / 追加傷害</td>
                                <td class="py-2.5 px-4">輕裝高速技巧派，武器與防具必筋上限減半，但所有武器 C 值（爆擊值）-1，擅長高迴避與高爆擊爆發。</td>
                            </tr>
                            <tr class="hover:bg-zinc-800/40">
                                <td class="py-2.5 px-4 font-bold text-amber-400">射手 (Shooter)</td>
                                <td class="py-2.5 px-2 text-center text-cyan-300 font-bold">B</td>
                                <td class="py-2.5 px-3 text-zinc-400">命中 / 追加傷害</td>
                                <td class="py-2.5 px-4">遠程射擊專家（無迴避力），負責使用弓、弩、投擲武器與魔動機槍進行遠距離精準打擊。</td>
                            </tr>
                            <tr class="hover:bg-zinc-800/40">
                                <td class="py-2.5 px-4 font-bold text-amber-400">舞鬥士 (Battle Dancer)</td>
                                <td class="py-2.5 px-2 text-center text-amber-300 font-bold">A</td>
                                <td class="py-2.5 px-3 text-zinc-400">命中 / 迴避 / 追加傷害</td>
                                <td class="py-2.5 px-4">可使用所有近戰、投擲與拳鬥士武器（必筋無減半），但防具限拳鬥士可裝備且不可用盾；Lv1 額外獲得 1 格指定宣言特技欄，Lv7 自動習得《舞い流し》、Lv13 自動習得《バトルマスター》。</td>
                            </tr>
                            <tr class="hover:bg-zinc-800/40">
                                <td class="py-2.5 px-4 font-bold text-amber-400">生命工匠 (Vitalsmith)</td>
                                <td class="py-2.5 px-2 text-center text-amber-300 font-bold">A</td>
                                <td class="py-2.5 px-3 text-zinc-400">命中 / 迴避 / 魔物知識(限定)</td>
                                <td class="py-2.5 px-4">以運動生理學鑽研格鬥技的「闘學士」，限用〈格鬥〉武器與拳鬥士防具（禁盾且無《追加攻擊》）；可對生物類魔物進行知識判定，並隨等級自動習得專屬招式「闘理」進行弱點與關節打擊。</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            <!-- 2. 魔法師系技能 -->
            <div class="bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden shadow-lg">
                <div class="px-4 py-3 bg-zinc-950/80 border-b border-zinc-800 flex items-center gap-2">
                    <i class="fa-solid fa-wand-magic-sparkles text-purple-400"></i>
                    <h3 class="font-bold text-zinc-100 text-base">二、魔法師系技能（施展魔法與提供最大 MP）</h3>
                </div>
                <div class="overflow-x-auto">
                    <table class="w-full text-left border-collapse text-xs">
                        <thead>
                            <tr class="bg-zinc-950/50 text-zinc-400 border-b border-zinc-800">
                                <th class="py-2.5 px-4 w-32">技能名稱</th>
                                <th class="py-2.5 px-2 w-16 text-center">經驗表</th>
                                <th class="py-2.5 px-3 w-36">魔法體系</th>
                                <th class="py-2.5 px-4">職能定位與特色簡介</th>
                            </tr>
                        </thead>
                        <tbody class="divide-y divide-zinc-800/70 text-zinc-300">
                            <tr class="hover:bg-zinc-800/40">
                                <td class="py-2.5 px-4 font-bold text-indigo-400">真語魔法師 (Sorcerer)</td>
                                <td class="py-2.5 px-2 text-center text-amber-300 font-bold">A</td>
                                <td class="py-2.5 px-3 text-zinc-400">真語魔法</td>
                                <td class="py-2.5 px-4">正統元素與能量砲台，擁有最強大的範圍純能量轟炸、防護罩與飛行等汎用魔法。</td>
                            </tr>
                            <tr class="hover:bg-zinc-800/40">
                                <td class="py-2.5 px-4 font-bold text-emerald-400">操靈魔法師 (Conjurer)</td>
                                <td class="py-2.5 px-2 text-center text-amber-300 font-bold">A</td>
                                <td class="py-2.5 px-3 text-zinc-400">操靈魔法</td>
                                <td class="py-2.5 px-4">擅長團隊 Buff/Debuff、基礎回復與召喚魔像（Golem）協助前線卡位與作戰。</td>
                            </tr>
                            <tr class="hover:bg-zinc-800/40">
                                <td class="py-2.5 px-4 font-bold text-yellow-400">神官 (Priest)</td>
                                <td class="py-2.5 px-2 text-center text-amber-300 font-bold">A</td>
                                <td class="py-2.5 px-3 text-zinc-400">神聖魔法</td>
                                <td class="py-2.5 px-4">隊伍核心補師，具備全體治癒、異常狀態解除與驅魔能力，並可依信仰神明習得專屬特殊神聖魔法。</td>
                            </tr>
                            <tr class="hover:bg-zinc-800/40">
                                <td class="py-2.5 px-4 font-bold text-teal-400">妖精使 (Fairy Tamer)</td>
                                <td class="py-2.5 px-2 text-center text-amber-300 font-bold">A</td>
                                <td class="py-2.5 px-3 text-zinc-400">妖精魔法</td>
                                <td class="py-2.5 px-4">與六大屬性妖精契約，同時具備屬性攻擊、單體大回復、防禦強化與召喚妖精戰士的多面手。</td>
                            </tr>
                            <tr class="hover:bg-zinc-800/40">
                                <td class="py-2.5 px-4 font-bold text-cyan-400">魔動機師 (Magitech)</td>
                                <td class="py-2.5 px-2 text-center text-amber-300 font-bold">A</td>
                                <td class="py-2.5 px-3 text-zinc-400">魔動機術</td>
                                <td class="py-2.5 px-4">結合魔導槍射擊與輔助裝置的科技法職，擅長瞬間裝填、範圍榴彈、光學偵察與高速急救。</td>
                            </tr>
                            <tr class="hover:bg-zinc-800/40">
                                <td class="py-2.5 px-4 font-bold text-lime-400">德魯伊 (Druid)</td>
                                <td class="py-2.5 px-2 text-center text-amber-300 font-bold">A</td>
                                <td class="py-2.5 px-3 text-zinc-400">森羅魔法</td>
                                <td class="py-2.5 px-4">自然與物理系輔助法師，多數魔法不需抵抗即可直接賦予「物理傷害減免」或直接命中的物理攻擊。</td>
                            </tr>
                            <tr class="hover:bg-zinc-800/40">
                                <td class="py-2.5 px-4 font-bold text-rose-400">典籍魔導士 (Bibliomancer)</td>
                                <td class="py-2.5 px-2 text-center text-amber-300 font-bold">A</td>
                                <td class="py-2.5 px-3 text-zinc-400">祕奧魔法</td>
                                <td class="py-2.5 px-4">透過魔導書釋放高威力儀式魔法的專家，具備獨特的咒文擴張與超常現象控制力。</td>
                            </tr>
                            <tr class="hover:bg-zinc-800/40">
                                <td class="py-2.5 px-4 font-bold text-amber-500">奈落使 (Abyssgazer)</td>
                                <td class="py-2.5 px-2 text-center text-amber-300 font-bold">A</td>
                                <td class="py-2.5 px-3 text-zinc-400">奈落魔法</td>
                                <td class="py-2.5 px-4">操控奈落之力的禁忌施法者，透過累積「穢度」與消耗生命代價換取強大的扭曲與支配魔法。</td>
                            </tr>
                            <tr class="hover:bg-zinc-800/40">
                                <td class="py-2.5 px-4 font-bold text-purple-400">咒法師 (Witch)</td>
                                <td class="py-2.5 px-2 text-center text-amber-300 font-bold">A</td>
                                <td class="py-2.5 px-3 text-zinc-400">咒詛魔法</td>
                                <td class="py-2.5 px-4">擅長施展、轉移與解除詛咒的「咒法師」，須手持單手生活道具製成的〈咒法具〉（禁武器／盾牌）並以魔法文明語詠唱，精通削弱敵方屬性、弱點賦予與念動操作。</td>
                            </tr>
                            <tr class="hover:bg-zinc-800/40">
                                <td class="py-2.5 px-4 font-bold text-violet-400">深智魔法 (Wizard)</td>
                                <td class="py-2.5 px-2 text-center text-zinc-500 font-bold">複合</td>
                                <td class="py-2.5 px-3 text-zinc-400">真語＋操靈</td>
                                <td class="py-2.5 px-4">無需額外花費經驗點，當同時擁有《真語魔法師》與《操靈魔法師》時自動解鎖（取兩者較低等級）。</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            <!-- 3. 其他技能（偵察、知識與流派輔助） -->
            <div class="bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden shadow-lg">
                <div class="px-4 py-3 bg-zinc-950/80 border-b border-zinc-800 flex items-center gap-2">
                    <i class="fa-solid fa-compass text-emerald-400"></i>
                    <h3 class="font-bold text-zinc-100 text-base">三、其他技能（偵察探索、魔物知識與特殊輔助體系）</h3>
                </div>
                <div class="overflow-x-auto">
                    <table class="w-full text-left border-collapse text-xs">
                        <thead>
                            <tr class="bg-zinc-950/50 text-zinc-400 border-b border-zinc-800">
                                <th class="py-2.5 px-4 w-32">技能名稱</th>
                                <th class="py-2.5 px-2 w-16 text-center">經驗表</th>
                                <th class="py-2.5 px-3 w-36">核心功能 / 系統</th>
                                <th class="py-2.5 px-4">職能定位與特色簡介</th>
                            </tr>
                        </thead>
                        <tbody class="divide-y divide-zinc-800/70 text-zinc-300">
                            <tr class="hover:bg-zinc-800/40">
                                <td class="py-2.5 px-4 font-bold text-emerald-300">斥候 (Scout)</td>
                                <td class="py-2.5 px-2 text-center text-cyan-300 font-bold">B</td>
                                <td class="py-2.5 px-3 text-zinc-400">先制力 / 陷阱 / 隱蔽</td>
                                <td class="py-2.5 px-4">地下城探索必備，負責開鎖、拆陷阱、潛行偵察以及決定戰鬥開場「先制判定」。</td>
                            </tr>
                            <tr class="hover:bg-zinc-800/40">
                                <td class="py-2.5 px-4 font-bold text-emerald-300">遊俠 (Ranger)</td>
                                <td class="py-2.5 px-2 text-center text-cyan-300 font-bold">B</td>
                                <td class="py-2.5 px-3 text-zinc-400">野外求生 / 藥草加值</td>
                                <td class="py-2.5 px-4">自然環境專家，大幅提升救命草與魔香草的回復量（可加智力加值），並擅長追蹤與野外生存。</td>
                            </tr>
                            <tr class="hover:bg-zinc-800/40">
                                <td class="py-2.5 px-4 font-bold text-emerald-300">賢者 (Sage)</td>
                                <td class="py-2.5 px-2 text-center text-cyan-300 font-bold">B</td>
                                <td class="py-2.5 px-3 text-zinc-400">魔物知識 / 語言 / 鑑定</td>
                                <td class="py-2.5 px-4">隊伍智囊，負責戰鬥開場「魔物知識判定」以看穿敵人弱點與數據，並可習得各種語言與寶物鑑定。</td>
                            </tr>
                            <tr class="hover:bg-zinc-800/40">
                                <td class="py-2.5 px-4 font-bold text-amber-300">練體士 (Enhancer)</td>
                                <td class="py-2.5 px-2 text-center text-cyan-300 font-bold">B</td>
                                <td class="py-2.5 px-3 text-zinc-400">練技（消耗 MP 強化）</td>
                                <td class="py-2.5 px-4">透過消耗少量 MP 在「輔助動作」自我強化（如提高命中、防護、能力值或自我再生），前衛熱門副職。</td>
                            </tr>
                            <tr class="hover:bg-zinc-800/40">
                                <td class="py-2.5 px-4 font-bold text-amber-300">吟遊詩人 (Bard)</td>
                                <td class="py-2.5 px-2 text-center text-cyan-300 font-bold">B</td>
                                <td class="py-2.5 px-3 text-zinc-400">咒歌 / 終律（演奏系統）</td>
                                <td class="py-2.5 px-4">透過演奏累積「樂素」釋放廣域增益或控場咒歌，並在樂素充足時發動強力「終律」造成傷害或大回復。</td>
                            </tr>
                            <tr class="hover:bg-zinc-800/40">
                                <td class="py-2.5 px-4 font-bold text-amber-300">騎手 (Rider)</td>
                                <td class="py-2.5 px-2 text-center text-cyan-300 font-bold">B</td>
                                <td class="py-2.5 px-3 text-zinc-400">騎藝（騎乘魔物作戰）</td>
                                <td class="py-2.5 px-4">駕馭戰馬、魔動機或幻獸一同參戰，分擔傷害、提供高機動力並擁有額外的騎獸部位行動次數。</td>
                            </tr>
                            <tr class="hover:bg-zinc-800/40">
                                <td class="py-2.5 px-4 font-bold text-amber-300">鍊金術師 (Alchemist)</td>
                                <td class="py-2.5 px-2 text-center text-cyan-300 font-bold">B</td>
                                <td class="py-2.5 px-3 text-zinc-400">賦術（消耗魔賦卡）</td>
                                <td class="py-2.5 px-4">不耗 MP，改以「輔助動作」消耗魔賦卡（紅/綠/黑/白/金）瞬間為隊友增傷、加防或削弱敵人。</td>
                            </tr>
                            <tr class="hover:bg-zinc-800/40">
                                <td class="py-2.5 px-4 font-bold text-amber-300">軍師 (Warleader)</td>
                                <td class="py-2.5 px-2 text-center text-cyan-300 font-bold">B</td>
                                <td class="py-2.5 px-3 text-zinc-400">鼓咆 / 陣率</td>
                                <td class="py-2.5 px-4">不耗 MP 與金錢，透過戰場指揮累積「陣氣」，為全隊提供常駐光環（鼓咆）與關鍵時刻的戰術逆轉（陣率）。</td>
                            </tr>
                            <tr class="hover:bg-zinc-800/40">
                                <td class="py-2.5 px-4 font-bold text-amber-300">天地使 (Geomancer)</td>
                                <td class="py-2.5 px-2 text-center text-cyan-300 font-bold">B</td>
                                <td class="py-2.5 px-3 text-zinc-400">相域（天/地/人脈）</td>
                                <td class="py-2.5 px-4">攜帶地貌儀展開結界，在回合結束時隨機對領域內的敵我觸發天、地、人三種命運干涉效果。</td>
                            </tr>
                            <tr class="hover:bg-zinc-800/40">
                                <td class="py-2.5 px-4 font-bold text-red-400">暗獵者 (Dark Hunter)</td>
                                <td class="py-2.5 px-2 text-center text-amber-300 font-bold">A</td>
                                <td class="py-2.5 px-3 text-zinc-400">操氣（消耗 HP/MP）</td>
                                <td class="py-2.5 px-4">專精討伐特定強敵的賞金獵人，消耗 HP 或 MP 發動「操氣」強化爆發傷害，並支援武器/射擊雙修。</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    `
},
    {
      id: 'sec-magitech_rules',
      title: '魔動機術 (Magitech) 概要與規則 (表A)',
      icon: 'fa-solid fa-gears',
      content: `
        <div class="space-y-6 text-zinc-300">
          <div class="bg-zinc-900 border border-zinc-800 p-5 rounded-xl shadow-md">
            <div class="flex flex-wrap justify-between items-center gap-2 mb-3">
              <h2 class="text-xl font-bold text-amber-400 flex items-center">
                <i class="fa-solid fa-gears mr-2.5 text-amber-500"></i>魔動機術 (Magitech) 概要與規則
              </h2>
              <div class="flex gap-2">
                <span class="text-xs bg-zinc-800 text-zinc-300 px-2.5 py-1 rounded border border-zinc-700 font-medium">魔法師系技能</span>
                <span class="text-xs bg-amber-950/80 text-amber-300 px-2.5 py-1 rounded border border-amber-800 font-bold">經驗表 A</span>
              </div>
            </div>
            <p class="text-xs text-zinc-400 leading-relaxed">
              透過魔法文明遺留的魔動機技術與魔動機石發動法術，並能操縱特殊射擊武器〈槍〉進行戰鬥的技術。
            </p>
          </div>
  
          <div class="bg-zinc-900 border border-zinc-800 p-5 rounded-xl space-y-4">
            <h3 class="text-base font-bold text-amber-400 border-b border-zinc-800 pb-2 flex items-center">
              <i class="fa-solid fa-microchip mr-2 text-amber-500"></i>行使條件與專用裝備
            </h3>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs leading-relaxed">
              <div class="bg-zinc-950 p-4 rounded-lg border border-zinc-800 space-y-2">
                <div class="font-bold text-amber-400 text-sm">【魔動機石〈マギスフィア〉】</div>
                <p>施放魔動機術時必須將魔動機石作為裝飾品裝備。魔動機石只是單純道具，完全不挑選持有者，借用他人的也可正常使用。</p>
                <p>魔動機石有（小）（中）（大）三種尺寸：（小）可固定在手臂或腰部，具浮遊能力會在術者周圍漂浮跟隨；（中）為手提包般箱型；（大）為背包大小箱型。（中）與（大）無浮遊能力，需要用手拿著或裝備於部位。</p>
              </div>
              <div class="bg-zinc-950 p-4 rounded-lg border border-zinc-800 space-y-2">
                <div class="font-bold text-amber-400 text-sm">【槍〈ガン〉與彈丸〈弾丸〉說明】</div>
                <p>魔動機術可以使用稱為〈ガン〉的特殊射擊武器。〈ガン〉是透過射出〈弾丸〉來攻擊敵人的射擊武器，但必須透過魔動機術將魔力注入〈弾丸〉才能進行射擊。</p>
              </div>
            </div>
          </div>
        </div>
      `,
    },
    {
      id: 'sec-bard_rules',
      title: '吟遊詩人 (Bard) 概要與規則 (表B)',
      icon: 'fa-solid fa-feather',
      content: `
        <div class="space-y-6 text-zinc-300">
          <div class="bg-zinc-900 border border-zinc-800 p-5 rounded-xl shadow-md">
            <div class="flex flex-wrap justify-between items-center gap-2 mb-3">
              <h2 class="text-xl font-bold text-amber-400 flex items-center">
                <i class="fa-solid fa-feather mr-2.5 text-amber-500"></i>吟遊詩人 (Bard) 概要與規則
              </h2>
              <div class="flex gap-2">
                <span class="text-xs bg-zinc-800 text-zinc-300 px-2.5 py-1 rounded border border-zinc-700 font-medium">其他系技能</span>
                <span class="text-xs bg-amber-950/80 text-amber-300 px-2.5 py-1 rounded border border-amber-800 font-bold">經驗表 B</span>
              </div>
            </div>
            <p class="text-xs text-zinc-300 leading-relaxed">
              吟遊詩人技能可透過樂器的演奏、歌唱，給予聽到的人各式各樣的效果。每習得一個等級的吟遊詩人技能就可習得一個語言的對話。此外可進行見識判定以及演奏判定。
            </p>
          </div>
  
          <div class="bg-zinc-900 border border-zinc-800 p-5 rounded-xl space-y-4">
            <h3 class="text-base font-bold text-amber-400 border-b border-zinc-800 pb-2 flex items-center">
              <i class="fa-solid fa-music mr-2 text-amber-500"></i>1. 演奏判定與基本用語
            </h3>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs leading-relaxed">
              <div class="bg-zinc-950 p-4 rounded-lg border border-zinc-800 space-y-2">
                <div class="font-bold text-amber-400 text-sm">【演奏判定與巧奏值】</div>
                <p class="text-zinc-300"><strong>演奏判定：</strong>『吟遊詩人技能 ＋ 精神力加值』</p>
                <p class="text-zinc-300"><strong>巧奏值：</strong>當演奏判定 ≥ 巧奏值時可獲得追加樂素。</p>
              </div>
              <div class="bg-zinc-950 p-4 rounded-lg border border-zinc-800 space-y-2">
                <div class="font-bold text-amber-400 text-sm">【基本用語】</div>
                <ul class="list-disc list-inside space-y-1 text-zinc-300">
                  <li><strong>奏者：</strong>熟練使用 Bard 技能發揮特殊效果的角色。</li>
                  <li><strong>奏力：</strong>演奏判定的基準值，產生傷害或回復效果時會作為追加數值（類似魔力）。</li>
                  <li><strong>咒歌：</strong>對聽者造成精神影響的樂曲，原則上屬精神效果屬性。</li>
                  <li><strong>終律：</strong>滿足條件時演奏的特殊曲目，可造成直接傷害或回復。</li>
                  <li><strong>樂素：</strong>分為高揚（↑）、鎮靜（↓）、魅惑（♡）三種。</li>
                </ul>
              </div>
            </div>
          </div>
  
          <div class="bg-zinc-900 border border-zinc-800 p-5 rounded-xl space-y-4">
            <h3 class="text-base font-bold text-amber-400 border-b border-zinc-800 pb-2 flex items-center">
              <i class="fa-solid fa-guitar mr-2 text-amber-500"></i>2. 樂器、歌唱與移動限制
            </h3>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs leading-relaxed">
              <div class="bg-zinc-950 p-4 rounded-lg border border-zinc-800 space-y-2">
                <div class="font-bold text-amber-400 text-sm">【移動限制】</div>
                <p class="text-zinc-300">在使用咒歌或終律時，角色的移動必須為「限制移動」。</p>
              </div>
              <div class="bg-zinc-950 p-4 rounded-lg border border-zinc-800 space-y-2">
                <div class="font-bold text-amber-400 text-sm">【樂器需求 (2H)】</div>
                <p class="text-zinc-300">除非特別說明，樂器一律為「用法：雙手（2H）」。無法演奏旋律的樂器（如鼓），演奏判定遭受 -4 懲罰且必須歌唱。</p>
              </div>
              <div class="bg-zinc-950 p-4 rounded-lg border border-zinc-800 space-y-2">
                <div class="font-bold text-amber-400 text-sm">【管樂器與歌唱】</div>
                <p class="text-zinc-300">管樂器演奏時無法歌唱，因此無法使用「需要歌唱」的咒歌。終律全都不需要歌唱。</p>
              </div>
            </div>
          </div>
  
          <div class="bg-zinc-900 border border-zinc-800 p-5 rounded-xl space-y-4">
            <h3 class="text-base font-bold text-amber-400 border-b border-zinc-800 pb-2 flex items-center">
              <i class="fa-solid fa-ear-deaf mr-2 text-amber-500"></i>3. 因聽覺不良造成的修正表
            </h3>
            <div class="overflow-x-auto">
              <table class="w-full text-xs text-left border-collapse border border-zinc-800">
                <thead>
                  <tr class="bg-zinc-950 text-amber-400 border-b border-zinc-800">
                    <th class="p-2.5 border border-zinc-800">狀況</th>
                    <th class="p-2.5 border border-zinc-800">行動判定懲罰修正</th>
                    <th class="p-2.5 border border-zinc-800">對咒歌・終律的抵抗加值</th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-zinc-800 text-zinc-300">
                  <tr>
                    <td class="p-2 border border-zinc-800 font-medium">單耳聽不見</td>
                    <td class="p-2 border border-zinc-800">-1（聽覺判定 -2）</td>
                    <td class="p-2 border border-zinc-800">+1</td>
                  </tr>
                  <tr class="bg-zinc-950/40">
                    <td class="p-2 border border-zinc-800 font-medium">雙耳聽不見</td>
                    <td class="p-2 border border-zinc-800">-2（聽覺不可）</td>
                    <td class="p-2 border border-zinc-800">自動成功 / +4</td>
                  </tr>
                  <tr>
                    <td class="p-2 border border-zinc-800 font-medium">強風吹襲</td>
                    <td class="p-2 border border-zinc-800">-1（聽覺判定 -2）</td>
                    <td class="p-2 border border-zinc-800">+2</td>
                  </tr>
                  <tr class="bg-zinc-950/40">
                    <td class="p-2 border border-zinc-800 font-medium">因噪音無法分辨聲音</td>
                    <td class="p-2 border border-zinc-800">-1（聽覺判定 -2）</td>
                    <td class="p-2 border border-zinc-800">+2</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
  
          <div class="bg-zinc-900 border border-zinc-800 p-5 rounded-xl space-y-4">
            <h3 class="text-base font-bold text-amber-400 border-b border-zinc-800 pb-2 flex items-center">
              <i class="fa-solid fa-kiwi-bird mr-2 text-amber-500"></i>4. 寵物（Pet）規則整理
            </h3>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs leading-relaxed">
              <ul class="list-disc list-inside space-y-1.5 bg-zinc-950 p-4 rounded-lg border border-zinc-800">
                <li><strong>獲得條件：</strong>Bard 達到 3 級（1隻）、5級與 7級（各加1隻），最多 3隻。價格最低 100G。</li>
                <li><strong>持續歌唱：</strong>奏者停止歌唱後，寵物可接續演唱該咒歌維持效果（達成值視為 0，範圍限半徑 10m）。</li>
                <li><strong>限制：</strong>每日最多演唱 3首，連續最長 3分鐘。寵物完全無法使用終律。</li>
              </ul>
              <ul class="list-disc list-inside space-y-1.5 bg-zinc-950 p-4 rounded-lg border border-zinc-800">
                <li><strong>樂素機制：</strong>寵物歌唱無法生成樂素，但可防止手番開始時的樂素自然減少（-1）。</li>
                <li><strong>傷害排除：</strong>只要跟在奏者身邊，不會成為攻擊或範圍效果目標；若離開身邊，基準值視為 0，HP 1 / MP 0。</li>
              </ul>
            </div>
          </div>
        </div>
      `,
    },
    {
      id: 'sec-sorcerer_rules',
      title: '操靈魔法 (Conjurer) 與魔像製造規則 (表A)',
      icon: 'fa-solid fa-hand-sparkles',
      content: `
        <div class="space-y-6 text-zinc-300">
          <div class="bg-zinc-900 border border-zinc-800 p-5 rounded-xl shadow-md">
            <div class="flex flex-wrap justify-between items-center gap-2 mb-3">
              <h2 class="text-xl font-bold text-amber-400 flex items-center">
                <i class="fa-solid fa-hand-sparkles mr-2.5 text-amber-500"></i>操靈魔法 (Conjurer) 與魔像製造規則
              </h2>
              <div class="flex gap-2">
                <span class="text-xs bg-zinc-800 text-zinc-300 px-2.5 py-1 rounded border border-zinc-700 font-medium">魔法師系技能</span>
                <span class="text-xs bg-amber-950/80 text-amber-300 px-2.5 py-1 rounded border border-amber-800 font-bold">經驗表 A</span>
              </div>
            </div>
            <div class="space-y-2 text-xs leading-relaxed text-zinc-300">
              <p>操靈魔法的行使條件與真語魔法相同，需要專用的魔法發動體。操靈術士能夠製造並操控魔像與不死生物。在魔法文明時代，此項技術達到了巔峰，造物的一部分至今仍遺留在現代的拉克西亞，作為迷宮深處的危險遺產。</p>
              <p>與古代造物的永恆生命與靈活自律相比，現代製造的造物持續時間短暫且指令有限。玩家角色（PC）可製造的魔像與不死生物類型及其規則如下：</p>
            </div>
          </div>
  
          <div class="bg-zinc-900 border border-zinc-800 p-5 rounded-xl space-y-4">
            <h3 class="text-base font-bold text-amber-400 border-b border-zinc-800 pb-2 flex items-center">
              <i class="fa-solid fa-cubes mr-2 text-amber-500"></i>1. 魔物製造的基本條件與素材
            </h3>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs leading-relaxed">
              <div class="bg-zinc-950 p-4 rounded-lg border border-zinc-800 space-y-2">
                <div class="font-bold text-amber-400 text-sm">【必要技能與等級】</div>
                <p class="text-zinc-300">必須以對應等級習得<strong>操靈術士（コンジャラー）</strong>技能，才能製造該等級的魔物。</p>
              </div>
              <div class="bg-zinc-950 p-4 rounded-lg border border-zinc-800 space-y-2">
                <div class="font-bold text-amber-400 text-sm">【通常素材（消耗性）】</div>
                <p class="text-zinc-300">施展魔法時消耗並消失，無法回收。適用於短期或一次性魔像製造。</p>
              </div>
              <div class="bg-zinc-950 p-4 rounded-lg border border-zinc-800 space-y-2">
                <div class="font-bold text-amber-400 text-sm">【上級素材（可回收）】</div>
                <p class="text-zinc-300">效果結束或主動解除時可回收重複使用。若 HP 降至 0 以下或遺留戰場則損毀。</p>
              </div>
            </div>
          </div>
  
          <div class="bg-zinc-900 border border-zinc-800 p-5 rounded-xl space-y-4">
            <h3 class="text-base font-bold text-amber-400 border-b border-zinc-800 pb-2 flex items-center">
              <i class="fa-solid fa-list-ul mr-2 text-amber-500"></i>2. 魔像製造道具對照表 (Lv 3 ～ 15)
            </h3>
            <div class="overflow-x-auto">
              <table class="w-full text-xs text-left border-collapse border border-zinc-800">
                <thead>
                  <tr class="bg-zinc-950 text-amber-400 border-b border-zinc-800">
                    <th class="p-2.5 border border-zinc-800 text-center">等級</th>
                    <th class="p-2.5 border border-zinc-800">魔像名稱 (中 / 日)</th>
                    <th class="p-2.5 border border-zinc-800 text-center">MP 消費</th>
                    <th class="p-2.5 border border-zinc-800">通常素材 (G)</th>
                    <th class="p-2.5 border border-zinc-800">上級素材 (G)</th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-zinc-800 text-zinc-300">
                  <tr><td class="p-2 text-center font-bold text-amber-400 border border-zinc-800">Lv 3</td><td class="p-2 border border-zinc-800">橡木人偶 (オーク) / 橡木獵犬</td><td class="p-2 text-center border border-zinc-800">4</td><td class="p-2 border border-zinc-800">魔化橡木支 (50)</td><td class="p-2 border border-zinc-800">強魔化橡木支 (100)</td></tr>
                  <tr class="bg-zinc-950/40"><td class="p-2 text-center font-bold text-amber-400 border border-zinc-800">Lv 4</td><td class="p-2 border border-zinc-800">稻草飛鳥 / 黏土人偶 (ロームパペット)</td><td class="p-2 text-center border border-zinc-800">8</td><td class="p-2 border border-zinc-800">魔化稻草/黏土 (100/200)</td><td class="p-2 border border-zinc-800">強魔化稻草/黏土 (200/300)</td></tr>
                  <tr><td class="p-2 text-center font-bold text-amber-400 border border-zinc-800">Lv 5</td><td class="p-2 border border-zinc-800">骨骼生物 / 皮革魚偶</td><td class="p-2 text-center border border-zinc-800">10</td><td class="p-2 border border-zinc-800">魔化動物骨頭/皮革 (300)</td><td class="p-2 border border-zinc-800">強魔化骨頭/皮革 (500)</td></tr>
                  <tr class="bg-zinc-950/40"><td class="p-2 text-center font-bold text-amber-400 border border-zinc-800">Lv 6</td><td class="p-2 border border-zinc-800">肉身魔像 (フラービィゴーレム)</td><td class="p-2 text-center border border-zinc-800">10</td><td class="p-2 border border-zinc-800">魔化肉塊 (500)</td><td class="p-2 border border-zinc-800">強魔化肉塊 (1000)</td></tr>
                  <tr><td class="p-2 text-center font-bold text-amber-400 border border-zinc-800">Lv 7</td><td class="p-2 border border-zinc-800">石頭僕人 (ストーンサーバント)</td><td class="p-2 text-center border border-zinc-800">12</td><td class="p-2 border border-zinc-800">魔化石頭 (1000)</td><td class="p-2 border border-zinc-800">強魔化石頭 (2000)</td></tr>
                  <tr class="bg-zinc-950/40"><td class="p-2 text-center font-bold text-amber-400 border border-zinc-800">Lv 8</td><td class="p-2 border border-zinc-800">黃銅鳥像 (ブラスウィング)</td><td class="p-2 text-center border border-zinc-800">14</td><td class="p-2 border border-zinc-800">魔化黃銅 (1500)</td><td class="p-2 border border-zinc-800">強魔化黃銅 (3000)</td></tr>
                  <tr><td class="p-2 text-center font-bold text-amber-400 border border-zinc-800">Lv 9</td><td class="p-2 border border-zinc-800">火山渣魚偶 (スコリアフリッバー)</td><td class="p-2 text-center border border-zinc-800">16</td><td class="p-2 border border-zinc-800">魔化火山渣 (1500)</td><td class="p-2 border border-zinc-800">強魔化火山渣 (3000)</td></tr>
                  <tr class="bg-zinc-950/40"><td class="p-2 text-center font-bold text-amber-400 border border-zinc-800">Lv 10</td><td class="p-2 border border-zinc-800">岩石魔像 (ロックゴーレム)</td><td class="p-2 text-center border border-zinc-800">20</td><td class="p-2 border border-zinc-800">魔化岩石 (2000)</td><td class="p-2 border border-zinc-800">強魔化岩石 (5000)</td></tr>
                  <tr><td class="p-2 text-center font-bold text-amber-400 border border-zinc-800">Lv 11</td><td class="p-2 border border-zinc-800">青銅魔像 (ブロンズゴーレム)</td><td class="p-2 text-center border border-zinc-800">24</td><td class="p-2 border border-zinc-800">魔化青銅 (4000)</td><td class="p-2 border border-zinc-800">強魔化青銅 (10000)</td></tr>
                  <tr class="bg-zinc-950/40"><td class="p-2 text-center font-bold text-amber-400 border border-zinc-800">Lv 12</td><td class="p-2 border border-zinc-800">金紅石鳥像 (ルチルラプター)</td><td class="p-2 text-center border border-zinc-800">28</td><td class="p-2 border border-zinc-800">魔化金紅石 (6000)</td><td class="p-2 border border-zinc-800">強魔化金紅石 (15000)</td></tr>
                  <tr><td class="p-2 text-center font-bold text-amber-400 border border-zinc-800">Lv 13</td><td class="p-2 border border-zinc-800">鋼鐵魔像 (アイアンゴーレム)</td><td class="p-2 text-center border border-zinc-800">32</td><td class="p-2 border border-zinc-800">魔化鐵 (8000)</td><td class="p-2 border border-zinc-800">強魔化鐵 (20000)</td></tr>
                  <tr class="bg-zinc-950/40"><td class="p-2 text-center font-bold text-amber-400 border border-zinc-800">Lv 14</td><td class="p-2 border border-zinc-800">花崗岩龜偶 (グラナイシェトル)</td><td class="p-2 text-center border border-zinc-800">36</td><td class="p-2 border border-zinc-800">魔化花崗岩 (10000)</td><td class="p-2 border border-zinc-800">強魔化花崗岩 (25000)</td></tr>
                  <tr><td class="p-2 text-center font-bold text-amber-400 border border-zinc-800">Lv 15</td><td class="p-2 border border-zinc-800">鉑合金龍像 (ドラコ・プラチニジウム)</td><td class="p-2 text-center border border-zinc-800">40</td><td class="p-2 border border-zinc-800">魔化鉑金 (15000)</td><td class="p-2 border border-zinc-800">強魔化鉑金 (50000)</td></tr>
                </tbody>
              </table>
            </div>
          </div>
  
          <div class="bg-zinc-900 border border-zinc-800 p-5 rounded-xl space-y-4">
            <h3 class="text-base font-bold text-amber-400 border-b border-zinc-800 pb-2 flex items-center">
              <i class="fa-solid fa-shield-halved mr-2 text-amber-500"></i>3. 魔像強化道具規則與清單
            </h3>
            <p class="text-xs text-zinc-400 leading-relaxed">
              強化道具必須在魔像製作時決定並裝備，製作後無法更改。相同道具效果不累積。當魔像破壞或解除時可回收重複使用。宣言型與主動作型能力每回合僅能分別使用一次。
            </p>
            <div class="overflow-x-auto">
              <table class="w-full text-xs text-left border-collapse border border-zinc-800">
                <thead>
                  <tr class="bg-zinc-950 text-amber-400 border-b border-zinc-800">
                    <th class="p-2.5 border border-zinc-800">強化道具名稱 (中/日)</th>
                    <th class="p-2.5 border border-zinc-800 text-center">價格 G (小/中/大)</th>
                    <th class="p-2.5 border border-zinc-800">效果與說明</th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-zinc-800 text-zinc-300">
                  <tr><td class="p-2 border border-zinc-800 font-medium">貓眼石鉚釘 (猫目石の鋲)</td><td class="p-2 text-center border border-zinc-800">200 / 800 / 4000</td><td class="p-2 border border-zinc-800">賦予 2回攻擊</td></tr>
                  <tr class="bg-zinc-950/40"><td class="p-2 border border-zinc-800 font-medium">金製貓眼石鉚釘 (猫目石の金鋲)</td><td class="p-2 text-center border border-zinc-800">200 / 800 / 4000</td><td class="p-2 border border-zinc-800">賦予 2回攻擊 & 雙擊 (需先裝備貓眼石釘)</td></tr>
                  <tr><td class="p-2 border border-zinc-800 font-medium">虎眼石鉚釘 (虎目石の鋲)</td><td class="p-2 text-center border border-zinc-800">150 / 600 / 3000</td><td class="p-2 border border-zinc-800">賦予 連續攻擊</td></tr>
                  <tr class="bg-zinc-950/40"><td class="p-2 border border-zinc-800 font-medium">金製虎眼石鉚釘 (虎目石の金鋲)</td><td class="p-2 text-center border border-zinc-800">300 / 1200 / 6000</td><td class="p-2 border border-zinc-800">賦予 連續攻擊 II (需先裝備虎眼石釘)</td></tr>
                  <tr><td class="p-2 border border-zinc-800 font-medium">黑玉之印 (黒玉の印)</td><td class="p-2 text-center border border-zinc-800">100 / 400 / 2000</td><td class="p-2 border border-zinc-800">【瞄準】命中力判定 +2，打擊點 -4</td></tr>
                  <tr class="bg-zinc-950/40"><td class="p-2 border border-zinc-800 font-medium">太陽石的輝耀 (太陽石の輝き)</td><td class="p-2 text-center border border-zinc-800">- / 1200 / 6000</td><td class="p-2 border border-zinc-800">【預備】下一輪攻擊必中，打擊點 +5/+7</td></tr>
                  <tr><td class="p-2 border border-zinc-800 font-medium">紫電紫水晶 (紫電の紫水晶)</td><td class="p-2 text-center border border-zinc-800">600 / 1600 / 8000</td><td class="p-2 border border-zinc-800">【電擊/雷光】射程 20m，精神抵抗半減，造成 2d+3 雷傷害</td></tr>
                  <tr class="bg-zinc-950/40"><td class="p-2 border border-zinc-800 font-medium">青蓮青寶石 (青蓮の青玉)</td><td class="p-2 text-center border border-zinc-800">600 / 1600 / 8000</td><td class="p-2 border border-zinc-800">【水炮/雪吐息】生命抵抗半減，造成 2d+4 水冰傷害並跌倒</td></tr>
                  <tr><td class="p-2 border border-zinc-800 font-medium">石榴石的活力 (柘榴石の活力)</td><td class="p-2 text-center border border-zinc-800">200 / 800 / 4000</td><td class="p-2 border border-zinc-800">HP 提升 (+5 / +10 / +15)</td></tr>
                  <tr class="bg-zinc-950/40"><td class="p-2 border border-zinc-800 font-medium">月長石的安寧 (月長石の安らぎ)</td><td class="p-2 text-center border border-zinc-800">250 / 1000 / 5000</td><td class="p-2 border border-zinc-800">使魔像的弱點變為「無」</td></tr>
                  <tr><td class="p-2 border border-zinc-800 font-medium">石英的瓦解 (石英の途絶)</td><td class="p-2 text-center border border-zinc-800">- / 1000 / 5000</td><td class="p-2 border border-zinc-800">【屬性耐性】選擇獲得一項屬性耐性（不可選弱點）</td></tr>
                </tbody>
              </table>
            </div>
          </div>
  
          <div class="bg-zinc-900 border border-zinc-800 p-5 rounded-xl space-y-4">
            <h3 class="text-base font-bold text-amber-400 border-b border-zinc-800 pb-2 flex items-center">
              <i class="fa-solid fa-comments mr-2 text-amber-500"></i>4. 對魔像與不死生物的命令規則
            </h3>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs leading-relaxed">
              <div class="bg-zinc-950 p-4 rounded-lg border border-zinc-800 space-y-2">
                <div class="font-bold text-amber-400 text-sm">【遵從逐步指令】</div>
                <p class="text-zinc-300">術者可在自己手番內以<strong>補助動作</strong>每回合對一體魔物下達指令。指令僅當回合有效。非戰鬥中指揮多體會使移動速度減半（2體）或三分之一（3體）。</p>
              </div>
              <div class="bg-zinc-950 p-4 rounded-lg border border-zinc-800 space-y-2">
                <div class="font-bold text-amber-400 text-sm">【執行守護任務】</div>
                <p class="text-zinc-300">只能指定「場所」或「物體」為守護目標，無法指定角色或術者。若守護物體被搬離範圍或破壞，將自動進入「無命令狀態」。</p>
              </div>
              <div class="bg-zinc-950 p-4 rounded-lg border border-zinc-800 space-y-2">
                <div class="font-bold text-amber-400 text-sm">【追隨移動】</div>
                <p class="text-zinc-300">追隨術者或指定目標移動。此狀態下僅能移動無法執行其他動作。若目標脫離視線且找不到將進入無命令狀態。</p>
              </div>
              <div class="bg-zinc-950 p-4 rounded-lg border border-zinc-800 space-y-2">
                <div class="font-bold text-amber-400 text-sm">【無命令狀態】</div>
                <p class="text-zinc-300">原命令無法執行或未獲下達時進入此狀態。魔物會完全靜止不動，必須透過【指令】魔法、呼應石或支配之杖重新指定。</p>
              </div>
            </div>
          </div>
        </div>
      `,
    },
    {
      id: 'sec-sorcery_rules',
      title: '真語魔法 (Sorcery) 概要與規則 (表A)',
      icon: 'fa-solid fa-scroll',
      content: `
        <div class="space-y-6 text-zinc-300">
          <div class="bg-zinc-900 border border-zinc-800 p-5 rounded-xl shadow-md">
            <div class="flex flex-wrap justify-between items-center gap-2 mb-3">
              <h2 class="text-xl font-bold text-amber-400 flex items-center">
                <i class="fa-solid fa-scroll mr-2.5 text-amber-500"></i>真語魔法 (Sorcery) 概要與行使條件
              </h2>
              <div class="flex gap-2">
                <span class="text-xs bg-zinc-800 text-zinc-300 px-2.5 py-1 rounded border border-zinc-700 font-medium">魔法師系技能</span>
                <span class="text-xs bg-amber-950/80 text-amber-300 px-2.5 py-1 rounded border border-amber-800 font-bold">經驗表 A</span>
              </div>
            </div>
            <p class="text-xs text-zinc-400 leading-relaxed">
              透過魔法文明語詠唱咒文並配合〈魔法發動體〉描繪魔法文字，引發純粹魔力現象的古典魔法體系。
            </p>
          </div>
  
          <div class="bg-zinc-900 border border-zinc-800 p-5 rounded-xl space-y-4">
            <h3 class="text-base font-bold text-amber-400 border-b border-zinc-800 pb-2 flex items-center">
              <i class="fa-solid fa-wand-sparkles mr-2 text-amber-500"></i>1. 魔法發動體
            </h3>
            <div class="bg-zinc-950 p-4 rounded-lg border border-zinc-800 space-y-3 text-xs leading-relaxed">
              <p>施展真語魔法時必須準備〈魔法發動體〉。角色可準備多個發動體，只要有任意一個處於可用狀態即可施展魔法。發動體不綁定持有者，借用他人的發動體亦可施展，且數值不會受影響。</p>
              <div class="grid grid-cols-1 md:grid-cols-3 gap-3 pt-1">
                <div class="bg-zinc-900 p-3 rounded border border-zinc-800 space-y-1">
                  <span class="font-bold text-amber-300 block">直接單手持拿</span>
                  <p class="text-zinc-400">單手持拿短杖（Wand）、長杖（Rod）等小型魔杖，該隻手不可裝備武器或盾牌。</p>
                  <span class="inline-block bg-amber-950/60 text-amber-400 border border-amber-800/50 text-[10px] px-1.5 py-0.5 rounded mt-1">費用：100 G</span>
                </div>
                <div class="bg-zinc-900 p-3 rounded border border-zinc-800 space-y-1">
                  <span class="font-bold text-amber-300 block">做為武器 / 加工武器</span>
                  <p class="text-zinc-400">分類為〈法杖〉的武器可直接做為發動體；其餘武器加工後亦可做為發動體，不影響原性能。</p>
                  <span class="inline-block bg-amber-950/60 text-amber-400 border border-amber-800/50 text-[10px] px-1.5 py-0.5 rounded mt-1">費用：法杖免費 / 其它額外 +100 G</span>
                </div>
                <div class="bg-zinc-900 p-3 rounded border border-zinc-800 space-y-1">
                  <span class="font-bold text-amber-300 block">做為戒指裝備</span>
                  <p class="text-zinc-400">將發動體製作為戒指，必須裝備於「右手」、「左手」或「其他」裝飾品部位。</p>
                  <span class="inline-block bg-amber-950/60 text-amber-400 border border-amber-800/50 text-[10px] px-1.5 py-0.5 rounded mt-1">費用：100 G</span>
                </div>
              </div>
            </div>
          </div>
  
          <div class="bg-zinc-900 border border-zinc-800 p-5 rounded-xl space-y-4">
            <h3 class="text-base font-bold text-amber-400 border-b border-zinc-800 pb-2 flex items-center">
              <i class="fa-solid fa-ban mr-2 text-amber-500"></i>2. 行使條件與鎧甲限制
            </h3>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs leading-relaxed">
              <div class="bg-zinc-950 p-4 rounded-lg border border-zinc-800 space-y-2">
                <div class="font-bold text-amber-400 text-sm">【手臂自由的確保（魔法文字）】</div>
                <p>為在中空描繪魔法文字，持有發動體（或配戴戒指）的手臂必須能自由活動。若 GM 裁定手臂明確無法揮動，則無法施展真語魔法。</p>
              </div>
              <div class="bg-zinc-950 p-4 rounded-lg border border-zinc-800 space-y-2">
                <div class="font-bold text-amber-400 text-sm">【咒文詠唱】</div>
                <p>施展真語魔法必須使用「魔法文明語」發聲詠唱咒文。若處於無法發聲的狀態，則無法施展真語魔法。</p>
              </div>
            </div>
  
            <div class="bg-zinc-950 p-4 rounded-lg border border-zinc-800 space-y-2 text-xs leading-relaxed">
              <div class="font-bold text-amber-400 text-sm">【鎧甲限制（重裝懲罰）】</div>
              <p>為方便描繪魔法文字，術者宜儘量輕裝。穿著防具時判定會受到以下修正：</p>
              <ul class="list-disc list-inside text-zinc-400 space-y-1 pl-1">
                <li>穿著 <span class="text-red-400 font-semibold">〈金屬鎧甲〉</span>：魔法行使判定承受 <span class="text-red-400 font-bold">-4</span> 的修正。</li>
                <li>穿著必要筋力 10 以上的 <span class="text-orange-400 font-semibold">〈非金屬鎧甲〉</span>：魔法行使判定承受 <span class="text-orange-400 font-bold">-2</span> 的修正。</li>
              </ul>
            </div>
  
            <div class="bg-amber-950/20 border border-amber-900/40 p-4 rounded-lg space-y-1.5 text-xs leading-relaxed">
              <div class="font-bold text-amber-400 text-sm">【夢魘（Nightmare）［異貌］特例】</div>
              <p class="text-zinc-300">夢魘角色的種族特徵［異貌］使用期間，可無視「確保手臂自由」與「咒文詠唱」的行使條件。同時，亦可完全無視「鎧甲限制」帶來的 -4 或 -2 判定修正懲罰。</p>
            </div>
          </div>
        </div>
      `,
    },
    {
      id: 'sec-wizard_rules',
      title: '魔導師與深智魔法 (Wizard) 概要與規則 (表A)',
      icon: 'fa-solid fa-hat-wizard',
      content: `
        <div class="space-y-6 text-zinc-300">
          <div class="bg-zinc-900 border border-zinc-800 p-5 rounded-xl shadow-md">
            <div class="flex flex-wrap justify-between items-center gap-2 mb-3">
              <h2 class="text-xl font-bold text-amber-400 flex items-center">
                <i class="fa-solid fa-hat-wizard mr-2.5 text-amber-500"></i>魔導師與深智魔法 (Wizard) 概要與規則
              </h2>
              <div class="flex gap-2">
                <span class="text-xs bg-zinc-800 text-zinc-300 px-2.5 py-1 rounded border border-zinc-700 font-medium">複合魔法系統</span>
                <span class="text-xs bg-amber-950/80 text-amber-300 px-2.5 py-1 rounded border border-amber-800 font-bold">經驗表 A</span>
              </div>
            </div>
            <p class="text-xs text-zinc-300 leading-relaxed">
              魔導師（ウィザード）是同時習得<strong>「真語魔法 (ソーサラー)」</strong>與<strong>「操靈魔法 (コンジャラー)」</strong>這兩種技能者的稱號。他們是極度接近魔法文明時代技術與知識的存在，掌握了魔法最核心的真諦。
            </p>
          </div>
  
          <div class="bg-zinc-900 border border-zinc-800 p-5 rounded-xl space-y-4">
            <h3 class="text-base font-bold text-amber-400 border-b border-zinc-800 pb-2 flex items-center">
              <i class="fa-solid fa-calculator mr-2 text-amber-500"></i>1. 等級、魔力計算與行使限制
            </h3>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs leading-relaxed">
              <div class="bg-zinc-950 p-4 rounded-lg border border-zinc-800 space-y-2">
                <div class="font-bold text-amber-400 text-sm">【等級與魔力計算規則】</div>
                <p>深智魔法無獨立技能，同時習得真語與操靈即自動獲得：</p>
                <ul class="list-disc list-inside space-y-1 text-zinc-300">
                  <li><strong>可使用魔法等級：</strong>取兩者中<strong>「較低的技能等級」</strong>。</li>
                  <li><strong>魔力（施法強度）：</strong>取兩者中<strong>「較高的技能等級」＋知力加成</strong>。</li>
                </ul>
                <div class="mt-2 p-2 bg-zinc-900 rounded border border-zinc-800 text-zinc-400">
                  <strong>💡 舉例：</strong>真語 4 級、操靈 3 級 ➔ 可用最高 <strong>3 級</strong>深智魔法，魔力為 <strong>4 ＋ 知力加成</strong>。
                </div>
              </div>
  
              <div class="bg-zinc-950 p-4 rounded-lg border border-zinc-800 space-y-2">
                <div class="font-bold text-amber-400 text-sm">【行使條件與 MP 減輕限制】</div>
                <ul class="list-disc list-inside space-y-1.5 text-zinc-300">
                  <li><strong>施法條件與防具限制：</strong>完全等同於「真語魔法」與「操靈魔法」。</li>
                  <li><strong>魔法發動體：</strong>可共用同一個發動體來施展真語、操靈以及深智魔法。</li>
                  <li><strong>戰鬥特技限制：</strong>即便習得《MP減輕／真語魔法師》或《MP減輕／操靈魔法師》，也<strong>無法</strong>減少深智魔法的 MP 消耗（遊戲中亦無《MP減輕／魔導師》）。</li>
                </ul>
              </div>
            </div>
          </div>
  
          <div class="bg-zinc-900 border border-zinc-800 p-5 rounded-xl space-y-4">
            <h3 class="text-base font-bold text-amber-400 border-b border-zinc-800 pb-2 flex items-center">
              <i class="fa-solid fa-layer-group mr-2 text-amber-500"></i>2. 複合魔法與特殊效果規則
            </h3>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs leading-relaxed">
              <div class="bg-zinc-950 p-4 rounded-lg border border-zinc-800 space-y-2">
                <div class="font-bold text-amber-400 text-sm">【賦予多重魔法效果的複合魔法】</div>
                <p class="text-zinc-300">部分深智魔法只需施展一次便能產生多種效果（例如【堅韌術】同時賦予【活力術】與【魔法反制】）。須遵守<strong>「同名不重複原則」</strong>，若目標已受部分效果影響，重複施展不會累加，僅追加剩餘未有的效果。</p>
              </div>
              <div class="bg-zinc-950 p-4 rounded-lg border border-zinc-800 space-y-2">
                <div class="font-bold text-amber-400 text-sm">【特殊目標選取「1體＋1體」】</div>
                <p class="text-zinc-300">先對選定的其中 1 體（通常為敵方）施加效果，成功後再讓另 1 體（通常為友方）獲得另一效果，兩者皆須在射程內。可受<strong>《魔法擴大／數》</strong>影響（以每一對 Pair 為單位倍增 MP 消耗），且所有被選中者皆須為互不相同的個體。</p>
              </div>
            </div>
          </div>
        </div>
      `,
    },
    {
      id: 'sec-divine_rules',
      title: '神聖魔法 (Divine Magic) 概要與規則 (表A)',
      icon: 'fa-solid fa-hands-praying',
      content: `
        <div class="space-y-6 text-zinc-300">
          <div class="bg-zinc-900 border border-zinc-800 p-5 rounded-xl shadow-md">
            <div class="flex flex-wrap justify-between items-center gap-2 mb-3">
              <h2 class="text-xl font-bold text-amber-400 flex items-center">
                <i class="fa-solid fa-hands-praying mr-2.5 text-amber-500"></i>神聖魔法 (Divine Magic) 概要與規則
              </h2>
              <div class="flex gap-2">
                <span class="text-xs bg-zinc-800 text-zinc-300 px-2.5 py-1 rounded border border-zinc-700 font-medium">魔法師系技能</span>
                <span class="text-xs bg-amber-950/80 text-amber-300 px-2.5 py-1 rounded border border-amber-800 font-bold">經驗表 A</span>
              </div>
            </div>
            <p class="text-xs text-zinc-300 leading-relaxed">
              獲得「神官（Priest）」技能時必須選擇 1 位信仰的神明（無法同時信仰多位）。可使用的魔法組合為：<span class="text-amber-300 font-semibold">「基本神聖魔法」＋「信仰神明的特殊神聖魔法」</span>。
            </p>
          </div>
  
          <div class="bg-zinc-900 border border-zinc-800 p-5 rounded-xl space-y-4">
            <h3 class="text-base font-bold text-amber-400 border-b border-zinc-800 pb-2 flex items-center">
              <i class="fa-solid fa-cross mr-2 text-amber-500"></i>1. 施展條件與防具無限制
            </h3>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs leading-relaxed">
              <div class="bg-zinc-950 p-4 rounded-lg border border-zinc-800 space-y-1.5">
                <div class="font-bold text-amber-400 text-sm">【〈聖印〉裝備】</div>
                <p class="text-zinc-300">必須裝備在任意部位作為裝飾品。可預備多個聖印，亦可借用同信仰角色的聖印。</p>
              </div>
              <div class="bg-zinc-950 p-4 rounded-lg border border-zinc-800 space-y-1.5">
                <div class="font-bold text-amber-400 text-sm">【發聲祈禱】</div>
                <p class="text-zinc-300">必須出聲向神明祈禱（語言不限）。若處於無法發聲狀態則無法施展。</p>
              </div>
              <div class="bg-zinc-950 p-4 rounded-lg border border-zinc-800 space-y-1.5">
                <div class="font-bold text-amber-400 text-sm">【無重裝與肢體限制】</div>
                <p class="text-zinc-300">穿著重鎧無限制與懲罰；不需要肢體自由動作，被綁縛或限制行動依然可施法。</p>
              </div>
            </div>
          </div>
  
          <div class="bg-zinc-900 border border-zinc-800 p-5 rounded-xl space-y-4">
            <h3 class="text-base font-bold text-amber-400 border-b border-zinc-800 pb-2 flex items-center">
              <i class="fa-solid fa-globe mr-2 text-amber-500"></i>2. 神的力量與影響圈
            </h3>
            <p class="text-xs text-zinc-300 leading-relaxed">
              神的信徒分布會影響神格的力量範圍。若超出勢力圈，神官施展魔法時的 <span class="text-cyan-400 font-bold">MP 消耗會增加</span>（此增加量於《魔法擴大／＊＊》或多目標倍算前加算）。
            </p>
            <div class="overflow-x-auto">
              <table class="w-full text-left border-collapse border border-zinc-800 text-xs">
                <thead>
                  <tr class="bg-zinc-950 text-amber-400 border-b border-zinc-800">
                    <th class="p-2.5 border-r border-zinc-800">神的分類</th>
                    <th class="p-2.5 border-r border-zinc-800">影響圈範圍</th>
                    <th class="p-2.5">影響圈外 MP 消耗</th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-zinc-800 text-zinc-300">
                  <tr>
                    <td class="p-2 border-r border-zinc-800 font-bold text-amber-300">古代神</td>
                    <td class="p-2 border-r border-zinc-800">拉克西亞全域</td>
                    <td class="p-2 text-emerald-400">無額外消耗 (－)</td>
                  </tr>
                  <tr class="bg-zinc-950/40">
                    <td class="p-2 border-r border-zinc-800 font-bold text-amber-300">大神</td>
                    <td class="p-2 border-r border-zinc-800">有神話傳說的大陸</td>
                    <td class="p-2 text-amber-400">＋1 MP</td>
                  </tr>
                  <tr>
                    <td class="p-2 border-r border-zinc-800 font-bold text-amber-300">小神</td>
                    <td class="p-2 border-r border-zinc-800">有淵源的特定地方</td>
                    <td class="p-2 text-red-400">＋2 MP</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="bg-zinc-950 p-4 rounded-lg border border-zinc-800 text-xs space-y-1.5">
              <div class="font-bold text-amber-400">克服影響圈限制的方法（祠堂與傳教）：</div>
              <ul class="list-disc list-inside space-y-1 text-zinc-300">
                <li><strong>1. 祠堂 (ほこら)：</strong>花費 1,000 G 與 3 天建造。以祠堂為中心半徑 1 公里內不會發生 MP 額外消耗（若祠堂被破壞或污染則失效）。</li>
                <li><strong>2. 傳教 (布教)：</strong>獲得都市人口 1/200 的信徒（如 12,000 人都市需 60 人信徒），並準備祠堂或簡易神殿供每週參拜。以此都市為據點時免除 MP 額外消耗。（註：塔比特與符文人不計入信徒人數）。</li>
              </ul>
            </div>
          </div>
  
          <div class="bg-zinc-900 border border-zinc-800 p-5 rounded-xl space-y-4">
            <h3 class="text-base font-bold text-amber-400 border-b border-zinc-800 pb-2 flex items-center">
              <i class="fa-solid fa-scale-balanced mr-2 text-amber-500"></i>3. 神格分類 († 與 ‡) 與非重複原則
            </h3>
            <div class="bg-zinc-950 p-4 rounded-lg border border-zinc-800 space-y-2.5 text-xs leading-relaxed">
              <p>魔法能否施展由<span class="text-amber-300">信仰的神格陣營</span>決定，與神官自身的種族（人族或蠻族）無關：</p>
              <div>
                <span class="font-bold text-blue-400">† 第一之劍 / 第三之劍系神明：</span>
                <p class="pl-4 text-zinc-400"><strong>古代神：</strong>始祖神萊福斯、太陽神提丹、鐵神阿斯特莉亞、炎武帝葛倫達爾、賢神基爾希亞<br><strong>大神：</strong>月神希恩、奈落之盾神伊夫、引導之星神哈魯拉、樹神達里翁</p>
              </div>
              <div>
                <span class="font-bold text-purple-400">‡ 第二之劍系神明：</span>
                <p class="pl-4 text-zinc-400"><strong>古代神：</strong>戰神達爾克雷姆<br><strong>大神：</strong>漆黑神艾里亞克、不死女王札伊德斯、滲血之神尼巴塞普斯※、民之神古爾瓦佐※、荒天凶神布拉絲=巴雷斯※<br><strong>小神：</strong>許金神梅加爾※、慈愛與複仇之女神米莉查、食習神米爾斯※、傳令神帕洛※、傀儡神阿爾馬克※、神之指尖米爾塔巴爾、織線神阿德妮※、風與陷阱之女神芙露西爾、放浪神薩杜爾※、鐵道神王斯特拉斯福德</p>
              </div>
              <div>
                <span class="font-bold text-pink-400">特殊神明與規則：</span>
                <ul class="list-disc list-inside pl-4 text-zinc-300 space-y-1 mt-1">
                  <li><strong>狂神拉莉絲（大神）：</strong>侍奉拉莉絲的神官可隨時自由施展 † 與 ‡ 雙方的魔法。</li>
                  <li><strong>非重複原則：</strong>相對應的成對魔法（如【神聖武器】與【邪惡武器】）不可重複疊加；【神聖領域】與【邪惡領域】則會互相抵消。</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      `,
    },
    {
      id: 'sec-fairy_rules',
      title: '妖精魔法 (Fairy Magic) 概要與規則 (表A)',
      icon: 'fa-solid fa-gem',
      content: `
        <div class="space-y-6 text-zinc-300">
          <div class="bg-zinc-900 border border-zinc-800 p-5 rounded-xl shadow-md">
            <div class="flex flex-wrap justify-between items-center gap-2 mb-3">
              <h2 class="text-xl font-bold text-amber-400 flex items-center">
                <i class="fa-solid fa-gem mr-2.5 text-amber-500"></i>妖精魔法 (Fairy Magic) 概要與行使條件
              </h2>
              <div class="flex gap-2">
                <span class="text-xs bg-zinc-800 text-zinc-300 px-2.5 py-1 rounded border border-zinc-700 font-medium">魔法師系技能</span>
                <span class="text-xs bg-amber-950/80 text-amber-300 px-2.5 py-1 rounded border border-amber-800 font-bold">經驗表 A</span>
              </div>
            </div>
            <p class="text-xs text-zinc-300 leading-relaxed">
              藉由裝備〈妖精使的寶石〉並以「妖精語」呼喚契約妖精，借用自然屬性與純能量力量的魔法體系。
            </p>
          </div>
  
          <div class="bg-zinc-900 border border-zinc-800 p-5 rounded-xl space-y-4">
            <h3 class="text-base font-bold text-amber-400 border-b border-zinc-800 pb-2 flex items-center">
              <i class="fa-solid fa-ring mr-2 text-amber-500"></i>1. 〈妖精使的寶石〉裝備與價格
            </h3>
            <div class="bg-zinc-950 p-4 rounded-lg border border-zinc-800 space-y-3 text-xs leading-relaxed">
              <p>施展妖精魔法必須將〈妖精使的寶石〉作為飾品裝備。隨著妖精使者等級提升，所需的寶石價值也會提高：</p>
              <div class="overflow-x-auto">
                <table class="w-full text-center border-collapse border border-zinc-800">
                  <thead>
                    <tr class="bg-zinc-900 text-amber-400 border-b border-zinc-800">
                      <th class="p-2 border-r border-zinc-800">等級</th>
                      <th class="p-2 border-r border-zinc-800">價格 (1顆)</th>
                      <th class="p-2">價格 (6顆)</th>
                    </tr>
                  </thead>
                  <tbody class="divide-y divide-zinc-800 text-zinc-300">
                    <tr><td class="p-1.5 border-r border-zinc-800">1 ~ 2 級</td><td class="p-1.5 border-r border-zinc-800">50 G</td><td class="p-1.5">300 G</td></tr>
                    <tr class="bg-zinc-900/40"><td class="p-1.5 border-r border-zinc-800">3 ~ 4 級</td><td class="p-1.5 border-r border-zinc-800">100 G</td><td class="p-1.5">600 G</td></tr>
                    <tr><td class="p-1.5 border-r border-zinc-800">5 ~ 6 級</td><td class="p-1.5 border-r border-zinc-800">150 G</td><td class="p-1.5">900 G</td></tr>
                    <tr class="bg-zinc-900/40"><td class="p-1.5 border-r border-zinc-800">7 ~ 8 級</td><td class="p-1.5 border-r border-zinc-800">200 G</td><td class="p-1.5">1,200 G</td></tr>
                    <tr><td class="p-1.5 border-r border-zinc-800">9 ~ 10 級</td><td class="p-1.5 border-r border-zinc-800">250 G</td><td class="p-1.5">1,500 G</td></tr>
                    <tr class="bg-zinc-900/40"><td class="p-1.5 border-r border-zinc-800">11 ~ 12 級</td><td class="p-1.5 border-r border-zinc-800">300 G</td><td class="p-1.5">1,800 G</td></tr>
                    <tr><td class="p-1.5 border-r border-zinc-800">13 ~ 14 級</td><td class="p-1.5 border-r border-zinc-800">350 G</td><td class="p-1.5">2,100 G</td></tr>
                    <tr class="bg-zinc-900/40"><td class="p-1.5 border-r border-zinc-800">15 級</td><td class="p-1.5 border-r border-zinc-800">400 G</td><td class="p-1.5">2,400 G</td></tr>
                  </tbody>
                </table>
              </div>
              <ul class="list-disc list-inside space-y-1 text-zinc-400">
                <li>〈妖精使的寶石〉視為「裝備部位任意」飾品，需依契約模式將 3 至 6 顆寶石分別裝備於不同部位。</li>
                <li><strong class="text-amber-300">〈寶石盒〉：</strong>可將 4 顆寶石組合為一件裝備使用的飾品。</li>
                <li><strong class="text-amber-300">〈華美的寶石飾品〉：</strong>可將 6 顆寶石組合為一件裝備使用的飾品。</li>
              </ul>
            </div>
          </div>
  
          <div class="bg-zinc-900 border border-zinc-800 p-5 rounded-xl space-y-4">
            <h3 class="text-base font-bold text-amber-400 border-b border-zinc-800 pb-2 flex items-center">
              <i class="fa-solid fa-shield-halved mr-2 text-amber-500"></i>2. 行使條件、鎧甲限制與屬性分類
            </h3>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs leading-relaxed">
              <div class="bg-zinc-950 p-4 rounded-lg border border-zinc-800 space-y-2">
                <div class="font-bold text-amber-400 text-sm">【發聲與肢體條件】</div>
                <p><strong>發聲條件：</strong>需以「妖精語」發聲呼喚妖精，無法發聲時不可施展。</p>
                <p><strong>不需肢體自由：</strong>被束縛或無法自由活動身體時，仍可正常施展魔法。</p>
              </div>
              <div class="bg-zinc-950 p-4 rounded-lg border border-zinc-800 space-y-2">
                <div class="font-bold text-amber-400 text-sm">【鎧甲限制（重裝懲罰）】</div>
                <ul class="list-disc list-inside space-y-1 text-zinc-300">
                  <li>穿著 <span class="text-red-400 font-semibold">〈金屬鎧〉</span>：魔法行使判定承受 <span class="text-red-400 font-bold">-4</span> 懲罰修正。</li>
                  <li>穿著 <span class="text-emerald-400 font-semibold">〈非金屬鎧〉</span> 或裝備 <span class="text-emerald-400 font-semibold">〈盾〉</span>：不受任何限制與懲罰。</li>
                </ul>
              </div>
            </div>
            <div class="bg-amber-950/20 border border-amber-900/40 p-4 rounded-lg text-xs leading-relaxed">
              <span class="text-amber-400 font-bold">⚠️ 光屬性特別注意：</span>光屬性的妖精魔法，對「魔法生物」、「魔動機」、「不死族」的角色完全無效。
            </div>
          </div>
        </div>
      `,
    },
    {
      id: 'sec-alchemist_rules',
      title: '煉金術師與賦術 (Alchemist) 概要與規則 (表B)',
      icon: 'fa-solid fa-layer-group',
      content: `
        <div class="space-y-6 text-zinc-300">
          <div class="bg-zinc-900 border border-zinc-800 p-5 rounded-xl shadow-md">
            <div class="flex flex-wrap justify-between items-center gap-2 mb-3">
              <h2 class="text-xl font-bold text-amber-400 flex items-center">
                <i class="fa-solid fa-layer-group mr-2.5 text-amber-500"></i>煉金術師與賦術 (Alchemist) 概要與規則
              </h2>
              <div class="flex gap-2">
                <span class="text-xs bg-zinc-800 text-zinc-300 px-2.5 py-1 rounded border border-zinc-700 font-medium">其他系技能</span>
                <span class="text-xs bg-amber-950/80 text-amber-300 px-2.5 py-1 rounded border border-amber-800 font-bold">經驗表 B</span>
              </div>
            </div>
            <p class="text-xs text-zinc-300 leading-relaxed">
              習得煉金術師技能即可獲得「魔動機文明語」的對話與閱讀能力，並可進行賦術判定、見識判定、文獻判定與藥品學判定。
            </p>
          </div>
  
          <div class="bg-zinc-900 border border-zinc-800 p-5 rounded-xl space-y-4">
            <h3 class="text-base font-bold text-amber-400 border-b border-zinc-800 pb-2 flex items-center">
              <i class="fa-solid fa-address-card mr-2 text-amber-500"></i>1. 賦術判定、習得與必要裝備
            </h3>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs leading-relaxed">
              <div class="bg-zinc-950 p-4 rounded-lg border border-zinc-800 space-y-1.5">
                <div class="font-bold text-amber-400 text-sm">【賦術判定與基本定義】</div>
                <p><strong>基準值：</strong>『煉金術師技能等級 ＋ 智力加值』（所要時間：一瞬）。</p>
                <p><strong>賦術特性：</strong>消耗「原質卡」發動，多用於支援同伴或弱化敵人，無法直接造成巨大傷害。</p>
              </div>
              <div class="bg-zinc-950 p-4 rounded-lg border border-zinc-800 space-y-1.5">
                <div class="font-bold text-amber-400 text-sm">【習得與必要裝備】</div>
                <p><strong>獲得方式：</strong>每提升 1 級可選擇 1 個賦術（部分有 Lv5 或 Lv10 最低限制）。</p>
                <p><strong>必要裝備：</strong>必須裝備〈煉金術士工具包〉（部位：右手、左手、腰、其他）或以 2H 裝備〈卡牌發射器〉代用，工具包最多可收納超過 100 張卡牌。</p>
              </div>
            </div>
          </div>
  
          <div class="bg-zinc-900 border border-zinc-800 p-5 rounded-xl space-y-4">
            <h3 class="text-base font-bold text-amber-400 border-b border-zinc-800 pb-2 flex items-center">
              <i class="fa-solid fa-bolt mr-2 text-amber-500"></i>2. 使用動作區分與非魔法特性
            </h3>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs leading-relaxed">
              <div class="bg-zinc-950 p-4 rounded-lg border border-zinc-800 space-y-1.5">
                <div class="font-bold text-amber-400 text-sm">【主動作使用 (1回合1次)】</div>
                <ul class="list-disc list-inside text-zinc-300 space-y-1">
                  <li><strong>對象擴大：</strong>「對象：1體」且射程為 10m/30m 的賦術，可同時對複數目標使用（消耗卡牌數依人數倍增）。</li>
                  <li><strong>卡牌階級統一：</strong>混用不同階級卡牌時，效果以最低階級決定。</li>
                  <li><strong>判定與抵抗：</strong>需進行賦術判定，自動失敗時卡牌照常消耗；對抗目標的精神抵抗力達成值。</li>
                </ul>
              </div>
              <div class="bg-zinc-950 p-4 rounded-lg border border-zinc-800 space-y-1.5">
                <div class="font-bold text-amber-400 text-sm">【輔助動作使用 (1回合1次)】</div>
                <ul class="list-disc list-inside text-zinc-300 space-y-1">
                  <li><strong>免判定不失敗：</strong>不佔用主動作，免進行賦術判定且不會自動失敗。</li>
                  <li><strong>使用限制：</strong>無法擴大為複數目標（僅限 1 體），達成值視為「0」，有抵抗意志的對象將自動抵抗成功。</li>
                  <li><strong>戰鬥準備：</strong>標註「戰鬥準備」的賦術可於準備階段以輔助動作規則行使。</li>
                </ul>
              </div>
            </div>
            <div class="bg-zinc-950 p-4 rounded-lg border border-zinc-800 text-xs text-zinc-300 space-y-1">
              <p><strong>移動限制：</strong>使用賦術的手番僅限「限制移動」或「通常移動」，不可「全力移動」。</p>
              <p><strong>非魔法屬性：</strong>具持續時間的賦術可由術者以輔助動作解除。賦術非魔法，無法被【消除魔法】解除，亦不觸發【感應魔法】；但會受《破言》、【完全取消】、【消滅刺針】影響。</p>
            </div>
          </div>
  
          <div class="bg-zinc-900 border border-zinc-800 p-5 rounded-xl space-y-4">
            <h3 class="text-base font-bold text-amber-400 border-b border-zinc-800 pb-2 flex items-center">
              <i class="fa-solid fa-palette mr-2 text-amber-500"></i>3. 原質卡（Material Card）與粗製卡機制
            </h3>
            <div class="grid grid-cols-2 md:grid-cols-5 gap-2 text-xs text-center">
              <div class="bg-red-950/40 border border-red-800/60 p-2 rounded-lg text-red-300"><div class="font-bold">紅 (赤)</div><div class="text-[10px] text-zinc-400 mt-1">動物特質<br>(毛髮/牙/爪/血液)</div></div>
              <div class="bg-emerald-950/40 border border-emerald-800/60 p-2 rounded-lg text-emerald-300"><div class="font-bold">綠 (綠)</div><div class="text-[10px] text-zinc-400 mt-1">植物特質<br>(花/葉/枝/蔓)</div></div>
              <div class="bg-zinc-950 border border-zinc-700 p-2 rounded-lg text-zinc-300"><div class="font-bold">黑 (黒)</div><div class="text-[10px] text-zinc-400 mt-1">礦物特質<br>(鐵/金屬/魔動機零件)</div></div>
              <div class="bg-slate-900 border border-slate-700 p-2 rounded-lg text-slate-200"><div class="font-bold">白 (白)</div><div class="text-[10px] text-zinc-400 mt-1">精神特質<br>(武器/道具/防具)</div></div>
              <div class="bg-amber-950/40 border border-amber-800/60 p-2 rounded-lg text-amber-300"><div class="font-bold">金 (金)</div><div class="text-[10px] text-zinc-400 mt-1">能量特質<br>(寶石/貴金屬)</div></div>
            </div>
  
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
              <div>
                <div class="font-bold text-amber-400 mb-2">正規原質卡購買價格表 (不分顏色)</div>
                <table class="w-full text-left border-collapse border border-zinc-800">
                  <thead><tr class="bg-zinc-950 text-amber-400 border-b border-zinc-800"><th class="p-2 border border-zinc-800">階級 (Rank)</th><th class="p-2 border border-zinc-800">價格 (G)</th></tr></thead>
                  <tbody class="divide-y divide-zinc-800 text-zinc-300">
                    <tr><td class="p-2 border border-zinc-800 font-bold">B 階</td><td class="p-2 border border-zinc-800">20 G</td></tr>
                    <tr class="bg-zinc-950/40"><td class="p-2 border border-zinc-800 font-bold">A 階</td><td class="p-2 border border-zinc-800">200 G</td></tr>
                    <tr><td class="p-2 border border-zinc-800 font-bold">S 階</td><td class="p-2 border border-zinc-800">2,000 G</td></tr>
                    <tr class="bg-zinc-950/40"><td class="p-2 border border-zinc-800 font-bold">SS 階</td><td class="p-2 border border-zinc-800">20,000 G</td></tr>
                  </tbody>
                </table>
              </div>
              <div>
                <div class="font-bold text-amber-400 mb-2">戰利品作製「粗製卡」對照表</div>
                <table class="w-full text-left border-collapse border border-zinc-800">
                  <thead><tr class="bg-zinc-950 text-amber-400 border-b border-zinc-800"><th class="p-2 border border-zinc-800">階級 (Rank)</th><th class="p-2 border border-zinc-800">戰利品賣出價格需求</th></tr></thead>
                  <tbody class="divide-y divide-zinc-800 text-zinc-300">
                    <tr><td class="p-2 border border-zinc-800 font-bold">B 階</td><td class="p-2 border border-zinc-800">10 ～ 99 G</td></tr>
                    <tr class="bg-zinc-950/40"><td class="p-2 border border-zinc-800 font-bold">A 階</td><td class="p-2 border border-zinc-800">100 ～ 999 G</td></tr>
                    <tr><td class="p-2 border border-zinc-800 font-bold">S 階</td><td class="p-2 border border-zinc-800">1,000 ～ 9,999 G</td></tr>
                    <tr class="bg-zinc-950/40"><td class="p-2 border border-zinc-800 font-bold">SS 階</td><td class="p-2 border border-zinc-800">10,000 G ～</td></tr>
                  </tbody>
                </table>
              </div>
            </div>
  
            <div class="bg-zinc-950 p-4 rounded-lg border border-zinc-800 text-xs text-zinc-300 space-y-1">
              <div class="font-bold text-amber-400">粗製卡（粗製のマテリアルカード）規則要點：</div>
              <p>1. <strong>作製時間：</strong>每製作 1 張需耗時 10 分鐘（可與戰利品決定作業合併於 10 分鐘內完成）。賣價未滿 10G 之戰利品無法作製。</p>
              <p>2. <strong>戰利品破壞與轉售：</strong>提取後原戰利品失去價值；未使用的粗製卡可攜回魔動機技能協會以「原戰利品賣價」售出。</p>
            </div>
          </div>
        </div>
      `,
    },
  {
    id: 'sec-bibliomancer_rules',
    title: '典籍魔導士與祕奧魔法 (Bibliomancer) 概要與規則 (表A)',
    icon: 'fa-solid fa-book-bookmark',
    content: `
        <div class="space-y-6 text-zinc-300">
          <div class="bg-zinc-900 border border-zinc-800 p-5 rounded-xl shadow-md">
            <div class="flex flex-wrap justify-between items-center gap-2 mb-3">
              <h2 class="text-xl font-bold text-amber-400 flex items-center">
                <i class="fa-solid fa-book-bookmark mr-2.5 text-amber-500"></i>典籍魔導士與祕奧魔法 (Bibliomancer) 概要與規則
              </h2>
              <div class="flex gap-2">
                <span class="text-xs bg-zinc-800 text-zinc-300 px-2.5 py-1 rounded border border-zinc-700 font-medium">魔法師系技能</span>
                <span class="text-xs bg-amber-950/80 text-amber-300 px-2.5 py-1 rounded border border-amber-800 font-bold">經驗表 A</span>
              </div>
            </div>
            <p class="text-xs text-zinc-300 leading-relaxed">
              習得者稱為「祕文使（秘文使い）」。發掘並解析魔法文明時代遺留的〈魔導書〉，將當時的終極失傳祕術「祕奧魔法」於現代重現行使的技能。<strong>祕奧魔法魔力 ＝ 典籍魔導士技能等級 ＋ 智力加值</strong>。
            </p>
          </div>

          <!-- 1. 技能特性與基本限制 -->
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 text-xs text-zinc-300 leading-relaxed">
            <div class="bg-zinc-900 border border-zinc-800 rounded-xl p-4 space-y-3">
              <h3 class="text-sm font-bold text-amber-400 border-b border-zinc-800 pb-1.5">
                <i class="fa-solid fa-scroll mr-1.5 text-amber-500"></i>技能特性與基本規範
              </h3>
              <p>發掘並解析魔法文明時代遺留的〈魔導書〉，將當時的終極失傳祕術「祕奧魔法」於現代重現行使的技能。特色為效果單機能化且強力、步驟簡略，透過事前將咒文寫入〈魔導書〉即可輕易施展。</p>
              <ul class="list-disc list-inside space-y-1.5 bg-zinc-950 p-3 rounded-lg border border-zinc-800/80">
                <li><strong>可用判定：</strong>魔法行使判定、文獻判定</li>
                <li><strong>習得語言：</strong>習得技能時自動學會 <span class="text-cyan-300 font-bold">魔法文明語（會話・讀文）</span></li>
                <li><strong>種族限制：</strong>獸化人（リカント）處於 <span class="text-red-400 font-bold">［獸變貌］</span> 時無法發聲，不可行使祕奧魔法</li>
                <li><strong>出生表替換：</strong>「細心創建」創角時，出生表的「真語魔法師」或「操靈魔法師」可替換為典籍魔導士技能</li>
                <li><strong>移動限制：</strong>行使祕奧魔法的輪次僅限 <span class="text-amber-300 font-bold">限制移動</span></li>
                <li><strong>發聲要求：</strong>須以魔法文明語發聲念出魔法名稱（<span class="text-emerald-400">［異貌］</span>夢魘無需發聲）</li>
                <li><strong>戰鬥特技：</strong>適用一般魔法使系特技；無法隨等級自動習得魔法（須另行入手與會得）</li>
              </ul>
            </div>

            <!-- 鎧甲限制與魔導書運用 -->
            <div class="space-y-4">
              <div class="bg-zinc-900 border border-zinc-800 rounded-xl p-4 space-y-2.5">
                <h3 class="text-sm font-bold text-amber-400 border-b border-zinc-800 pb-1.5">
                  <i class="fa-solid fa-shield-virus mr-1.5 text-amber-500"></i>鎧甲限制（［異貌］夢魘免除）
                </h3>
                <table class="w-full text-xs text-center border-collapse bg-zinc-950 rounded-lg overflow-hidden border border-zinc-800">
                  <thead>
                    <tr class="bg-zinc-900 text-zinc-400 border-b border-zinc-800">
                      <th class="py-1.5 px-3 text-left">裝備鎧甲種類</th>
                      <th class="py-1.5 px-3">魔法行使判定修正</th>
                    </tr>
                  </thead>
                  <tbody class="divide-y divide-zinc-800/60">
                    <tr>
                      <td class="py-1.5 px-3 text-left text-zinc-200">必要筋力 10 以上的〈非金屬鎧〉</td>
                      <td class="py-1.5 px-3 font-bold text-red-400 font-mono">-2</td>
                    </tr>
                    <tr>
                      <td class="py-1.5 px-3 text-left text-zinc-200">〈金屬鎧〉</td>
                      <td class="py-1.5 px-3 font-bold text-red-400 font-mono">-4</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div class="bg-zinc-900 border border-zinc-800 rounded-xl p-4 space-y-2">
                <h3 class="text-sm font-bold text-amber-400 border-b border-zinc-800 pb-1.5">
                  <i class="fa-solid fa-book-open mr-1.5 text-amber-500"></i>〈魔導書〉操作與「裝備」規則
                </h3>
                <ul class="list-disc list-inside space-y-1 text-zinc-300">
                  <li><strong>描摹與持握：</strong>須以手指依正確文法與步驟描摹〈魔導書〉上的複合魔法文字。〈魔導書〉為 <strong class="text-amber-300">「用法：1H」</strong> 道具，使用他人魔導書有手順失誤風險。</li>
                  <li><strong>雙手持書：</strong>可雙手各持 1 冊，但單次行使僅能使用其中 1 冊（魔導書的特殊行使效果也僅限該次使用的那一冊）。</li>
                  <li><strong>武器／盾牌型魔導書：</strong>部分兼具武器或盾牌功能的魔導書可依規則「裝備」並常駐獲得效果（可一手揮舞武器魔導書、另一手獲得盾牌魔導書防護點，或在《多重行動》時搭配另一冊特殊效果魔導書施法；但兩面盾牌效果依基本規則不疊加）。</li>
                </ul>
              </div>
            </div>
          </div>

          <!-- 2. 祕奧魔法的階級、入手、會得與公會交易 -->
          <div class="bg-zinc-900 border border-zinc-800 rounded-xl p-5 space-y-4 text-xs text-zinc-300 leading-relaxed">
            <h3 class="text-base font-bold text-amber-400 border-b border-zinc-800 pb-2 flex items-center justify-between">
              <span><i class="fa-solid fa-coins mr-2 text-amber-500"></i>祕奧魔法階級（1～5）、入手、會得與公會交易</span>
              <span class="text-[11px] font-normal text-zinc-400">須滿足技能等級行使框之階級條件方可購買或會得</span>
            </h3>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div class="bg-zinc-950 p-3.5 rounded-lg border border-zinc-800 space-y-1.5">
                <div class="font-bold text-cyan-300">● 祕文書公會購入（即座會得）</div>
                <p>祕奧魔法分為 <strong>1～5 共 5 個階級（Rank）</strong>，階級越高越複雜強力。向祕文書公會購買已解析魔法時，入手同時即完全理解並<strong>「會得」</strong>（市場購入品不可轉賣）。</p>
              </div>
              <div class="bg-zinc-950 p-3.5 rounded-lg border border-zinc-800 space-y-1.5">
                <div class="font-bold text-cyan-300">● 冒險發現、販售與免費會得</div>
                <p>冒險中從遺跡發現的古代〈魔導書〉可限定性地直接行使，或於冒險後賣給祕文書公會（已解析品為市價半價；未發現品為市價 2 倍）。</p>
                <p>若出售魔法的階級符合自身技能等級上限，公會將作為謝禮<strong class="text-emerald-400">免費傳授解析內容使其「會得」</strong>（未發現品須待公會解析完成；若冒險間隔過短或想保留手邊直接行使的機會，亦可暫不出售）。</p>
              </div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <div class="font-bold text-amber-400 mb-2">祕奧魔法市場購入與販售價格表</div>
                <table class="w-full text-center border-collapse border border-zinc-800 bg-zinc-950">
                  <thead class="bg-zinc-900 text-amber-400 border-b border-zinc-800">
                    <tr>
                      <th class="p-2 border border-zinc-800">階級 (Rank)</th>
                      <th class="p-2 border border-zinc-800">市場購入價格</th>
                      <th class="p-2 border border-zinc-800">販售 (已解析)</th>
                      <th class="p-2 border border-zinc-800">販售 (未發現)</th>
                    </tr>
                  </thead>
                  <tbody class="divide-y divide-zinc-800 text-zinc-300 font-mono">
                    <tr><td class="p-2 border border-zinc-800 font-bold text-amber-300">1</td><td class="p-2 border border-zinc-800">500 G</td><td class="p-2 border border-zinc-800">250 G</td><td class="p-2 border border-zinc-800 text-emerald-400">1,000 G</td></tr>
                    <tr class="bg-zinc-900/40"><td class="p-2 border border-zinc-800 font-bold text-amber-300">2</td><td class="p-2 border border-zinc-800">1,500 G</td><td class="p-2 border border-zinc-800">750 G</td><td class="p-2 border border-zinc-800 text-emerald-400">3,000 G</td></tr>
                    <tr><td class="p-2 border border-zinc-800 font-bold text-amber-300">3</td><td class="p-2 border border-zinc-800">3,000 G</td><td class="p-2 border border-zinc-800">1,500 G</td><td class="p-2 border border-zinc-800 text-emerald-400">6,000 G</td></tr>
                    <tr class="bg-zinc-900/40"><td class="p-2 border border-zinc-800 font-bold text-amber-300">4</td><td class="p-2 border border-zinc-800">6,000 G</td><td class="p-2 border border-zinc-800">3,000 G</td><td class="p-2 border border-zinc-800 text-emerald-400">12,000 G</td></tr>
                    <tr><td class="p-2 border border-zinc-800 font-bold text-amber-300">5</td><td class="p-2 border border-zinc-800">12,000 G</td><td class="p-2 border border-zinc-800">6,000 G</td><td class="p-2 border border-zinc-800 text-emerald-400">24,000 G</td></tr>
                  </tbody>
                </table>
              </div>

              <div>
                <div class="font-bold text-amber-400 mb-2">未發現的祕奧魔法解析所需時間</div>
                <table class="w-full text-center border-collapse border border-zinc-800 bg-zinc-950">
                  <thead class="bg-zinc-900 text-amber-400 border-b border-zinc-800">
                    <tr>
                      <th class="p-2 border border-zinc-800">階級 (Rank)</th>
                      <th class="p-2 border border-zinc-800">解析所需時間</th>
                    </tr>
                  </thead>
                  <tbody class="divide-y divide-zinc-800 text-zinc-300">
                    <tr><td class="p-2 border border-zinc-800 font-bold text-amber-300 font-mono">1</td><td class="p-2 border border-zinc-800">3 日</td></tr>
                    <tr class="bg-zinc-900/40"><td class="p-2 border border-zinc-800 font-bold text-amber-300 font-mono">2</td><td class="p-2 border border-zinc-800">1 週</td></tr>
                    <tr><td class="p-2 border border-zinc-800 font-bold text-amber-300 font-mono">3</td><td class="p-2 border border-zinc-800">2 週</td></tr>
                    <tr class="bg-zinc-900/40"><td class="p-2 border border-zinc-800 font-bold text-amber-300 font-mono">4</td><td class="p-2 border border-zinc-800">3 週</td></tr>
                    <tr><td class="p-2 border border-zinc-800 font-bold text-amber-300 font-mono">5</td><td class="p-2 border border-zinc-800">1 個月</td></tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <!-- 3. 典籍魔導士技能行使框表與購入/會得階級限制 -->
          <div class="bg-zinc-900 border border-zinc-800 rounded-xl p-5 space-y-4 text-xs text-zinc-300 leading-relaxed">
            <h3 class="text-base font-bold text-amber-400 border-b border-zinc-800 pb-2 flex items-center justify-between">
              <span><i class="fa-solid fa-table mr-2 text-amber-500"></i>典籍魔導士技能行使框表（準備行使框／應急行使框）</span>
              <span class="text-[11px] font-normal text-zinc-400">最大行使框階級即為購入與免費會得之階級上限</span>
            </h3>
            <p>習得典籍魔導士技能後，依技能等級獲得「準備行使框」與「應急行使框」兩種行使框。行使框所指示的最高階級，即為向祕文書公會購買或出售未發現祕奧魔法後取得免費會得權利時的階級上限判斷基準。</p>

            <div class="overflow-x-auto">
              <table class="w-full text-center border-collapse border border-zinc-800 bg-zinc-950 font-mono">
                <thead class="bg-zinc-900 text-amber-400 border-b border-zinc-800">
                  <tr>
                    <th class="p-2 border border-zinc-800 w-24">技能等級</th>
                    <th class="p-2 border border-zinc-800">準備行使框的階級與數量</th>
                    <th class="p-2 border border-zinc-800 w-36">應急行使框的階級</th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-zinc-800 text-zinc-300">
                  <tr><td class="p-1.5 border border-zinc-800 font-bold text-amber-300">1</td><td class="p-1.5 border border-zinc-800">1 × 1</td><td rowspan="3" class="p-1.5 border border-zinc-800 font-bold text-cyan-300 align-middle">1</td></tr>
                  <tr class="bg-zinc-900/40"><td class="p-1.5 border border-zinc-800 font-bold text-amber-300">2</td><td class="p-1.5 border border-zinc-800">1 × 2</td></tr>
                  <tr><td class="p-1.5 border border-zinc-800 font-bold text-amber-300">3</td><td class="p-1.5 border border-zinc-800">1 × 3</td></tr>
                  <tr class="bg-zinc-900/40"><td class="p-1.5 border border-zinc-800 font-bold text-amber-300">4</td><td class="p-1.5 border border-zinc-800">1 × 3、2 × 1</td><td rowspan="3" class="p-1.5 border border-zinc-800 font-bold text-cyan-300 align-middle bg-zinc-900/40">2</td></tr>
                  <tr><td class="p-1.5 border border-zinc-800 font-bold text-amber-300">5</td><td class="p-1.5 border border-zinc-800">1 × 3、2 × 2</td></tr>
                  <tr class="bg-zinc-900/40"><td class="p-1.5 border border-zinc-800 font-bold text-amber-300">6</td><td class="p-1.5 border border-zinc-800">1 ～ 2 × 3</td></tr>
                  <tr><td class="p-1.5 border border-zinc-800 font-bold text-amber-300">7</td><td class="p-1.5 border border-zinc-800">1 ～ 2 × 3、3 × 1</td><td rowspan="3" class="p-1.5 border border-zinc-800 font-bold text-cyan-300 align-middle">3</td></tr>
                  <tr class="bg-zinc-900/40"><td class="p-1.5 border border-zinc-800 font-bold text-amber-300">8</td><td class="p-1.5 border border-zinc-800">1 ～ 2 × 3、3 × 2</td></tr>
                  <tr><td class="p-1.5 border border-zinc-800 font-bold text-amber-300">9</td><td class="p-1.5 border border-zinc-800">1 ～ 3 × 3</td></tr>
                  <tr class="bg-zinc-900/40"><td class="p-1.5 border border-zinc-800 font-bold text-amber-300">10</td><td class="p-1.5 border border-zinc-800">1 ～ 3 × 3、4 × 1</td><td rowspan="3" class="p-1.5 border border-zinc-800 font-bold text-cyan-300 align-middle bg-zinc-900/40">4</td></tr>
                  <tr><td class="p-1.5 border border-zinc-800 font-bold text-amber-300">11</td><td class="p-1.5 border border-zinc-800">1 ～ 3 × 3、4 × 2</td></tr>
                  <tr class="bg-zinc-900/40"><td class="p-1.5 border border-zinc-800 font-bold text-amber-300">12</td><td class="p-1.5 border border-zinc-800">1 ～ 4 × 3</td></tr>
                  <tr><td class="p-1.5 border border-zinc-800 font-bold text-amber-300">13</td><td class="p-1.5 border border-zinc-800">1 ～ 4 × 3、5 × 1</td><td rowspan="3" class="p-1.5 border border-zinc-800 font-bold text-cyan-300 align-middle">5</td></tr>
                  <tr class="bg-zinc-900/40"><td class="p-1.5 border border-zinc-800 font-bold text-amber-300">14</td><td class="p-1.5 border border-zinc-800">1 ～ 4 × 3、5 × 2</td></tr>
                  <tr><td class="p-1.5 border border-zinc-800 font-bold text-amber-300">15</td><td class="p-1.5 border border-zinc-800">1 ～ 5 × 3</td></tr>
                </tbody>
              </table>
            </div>
          </div>

          <!-- 4. 準備行使框的運用、階級限制與改寫時間 -->
          <div class="bg-zinc-900 border border-zinc-800 rounded-xl p-5 space-y-4 text-xs text-zinc-300 leading-relaxed">
            <h3 class="text-base font-bold text-amber-400 border-b border-zinc-800 pb-2">
              <i class="fa-solid fa-bookmark mr-2 text-amber-500"></i>準備行使框：事前選定、通常行使、階級限制與改寫
            </h3>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div class="bg-zinc-950 p-3.5 rounded-lg border border-zinc-800 space-y-1.5">
                <div class="font-bold text-cyan-300">● 事前選定與共用限制</div>
                <p>即使反覆描摹並記憶步驟，同時熟練運用多數祕奧魔法仍需經驗與熟練。角色必須從已「會得」的祕奧魔法中，依準備行使框限制事前決定可實際行使的魔法（例如 Lv1 即使會得 2 種以上 1 階魔法，準備框也僅能放 1 種）。</p>
                <p>冒險攜帶多本〈魔導書〉時，準備行使框為<strong>全書共通且必須相同</strong>，無法靠每本魔導書設定不同內容來增加可用魔法。</p>
              </div>
              <div class="bg-zinc-950 p-3.5 rounded-lg border border-zinc-800 space-y-1.5">
                <div class="font-bold text-cyan-300">● 準備框行使、低階填入與改寫時間</div>
                <p><strong>通常行使：</strong>與一般魔法行使相同（進行魔法行使判定、精神抵抗對抗、消耗 MP、6 連 1 連自動成功／失敗規則不變）。</p>
                <p><strong>階級限制：</strong>各階級欄位數量有上限（如 Lv4 僅 1 個 2 階框，即使會得 2 種以上 2 階魔法也只能準備 1 種），但<strong>可將較低階級魔法填入較高階級框</strong>（如 Lv4 將全部 4 格都填 1 階魔法）。</p>
                <p><strong>改寫時間：</strong>可將已填入的魔法改寫為其他已會得魔法，耗時依<strong>新準備魔法的階級</strong>決定：<strong>1階 1小時／2階 2小時／3階 3小時／4階 6小時／5階 12小時</strong>。</p>
              </div>
            </div>
          </div>

          <!-- 5. 應急行使框與「特殊失敗」風險 -->
          <div class="bg-zinc-900 border border-zinc-800 rounded-xl p-5 space-y-4 text-xs text-zinc-300 leading-relaxed">
            <h3 class="text-base font-bold text-amber-400 border-b border-zinc-800 pb-2">
              <i class="fa-solid fa-triangle-exclamation mr-2 text-red-400"></i>應急行使框：臨場施法、限制與「特殊失敗」
            </h3>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div class="bg-zinc-950 p-3.5 rounded-lg border border-zinc-800 space-y-1.5">
                <div class="font-bold text-amber-300">● 應急行使對象、階級上限與動作限制</div>
                <ul class="list-disc list-inside space-y-1 text-zinc-300">
                  <li><strong>適用對象：</strong>① 已會得但未放入準備行使框的祕奧魔法；② 冒險發現的古代〈魔導書〉、文獻或他人〈魔導書〉上的祕奧魔法（<strong>未使用自身〈魔導書〉時，即使準備框有放也須走應急行使框</strong>）。</li>
                  <li><strong>階級與數量：</strong>上限等同準備行使框最高階級，不可超過；<strong>無數量限制</strong>。</li>
                  <li><strong>動作限制：</strong>有「特殊失敗」風險；<strong>不可於輔助動作或戰鬥準備行使</strong>（輔助動作與戰鬥準備僅限準備行使框）。</li>
                </ul>
              </div>
              <div class="bg-zinc-950 p-3.5 rounded-lg border border-red-900/50 space-y-1.5">
                <div class="font-bold text-red-400">● 特殊失敗值與發生機制</div>
                <ul class="list-disc list-inside space-y-1 text-zinc-300">
                  <li><strong>設定與個別管理：</strong>每次 Session 開始時，每位典籍魔導士各自擲 2d（遇 1 連、6 連重骰，取 <strong>3～11</strong>，<strong>不可使用任何骰面操作／變更效果</strong>），記為「特殊失敗值」；不同 Session 不繼承。</li>
                  <li><strong>觸發與效果：</strong>應急行使時魔法行使判定<strong>骰面</strong>與「特殊失敗值」相同即為<strong>「自動失敗」</strong>（無任何魔法效果、MP 照常扣除；與 1 連不同之處在於<strong>仍可獲得 50 點經驗點</strong>）。透過《劍的加護／命運變轉》等改變<strong>骰面本身</strong>可迴避；單純加減達成值修正無效。</li>
                  <li><strong>重骰變更：</strong>發生特殊失敗後重新擲 2d 決定新特殊失敗值（遇 1 連、6 連或與前值相同則重骰，限 3～11，不可操作骰面）。</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
    `
  },
    {
      id: 'sec-darkhunter_rules',
      title: '暗獵者與操氣 (Dark Hunter) 概要與規則 (表B)',
      icon: 'fa-solid fa-crosshairs',
      content: `
        <div class="space-y-6 text-zinc-300">
          <div class="bg-zinc-900 border border-zinc-800 p-5 rounded-xl shadow-md">
            <div class="flex flex-wrap justify-between items-center gap-2 mb-3">
              <h2 class="text-xl font-bold text-amber-400 flex items-center">
                <i class="fa-solid fa-crosshairs mr-2.5 text-amber-500"></i>暗獵者與操氣 (Dark Hunter) 概要與規則
              </h2>
              <div class="flex gap-2">
                <span class="text-xs bg-zinc-800 text-zinc-300 px-2.5 py-1 rounded border border-zinc-700 font-medium">其他系技能</span>
                <span class="text-xs bg-amber-950/80 text-amber-300 px-2.5 py-1 rounded border border-amber-800 font-bold">經驗表 B</span>
              </div>
            </div>
            <p class="text-xs text-zinc-300 leading-relaxed mb-3">
              以極高集中力燃燒生命力（HP）並產生多樣效果的<strong>「操氣」</strong>技能。最初目的為討伐異界怪物「魔神」，但所編織的多樣效果亦可應用於其他局面並傳承給少數人；擅長操控投擲武器與看穿魔神真身及弱點。習得者稱為<strong>「闇狩（やみがり）」</strong>，目前所有可作為 PC 的種族皆可習得。
            </p>
            <div class="bg-zinc-950 p-3.5 rounded-lg border border-zinc-800 text-xs space-y-1.5">
              <div class="font-bold text-amber-400">🔍 專用判定：魔物知識判定（魔神限定）[智力]</div>
              <p class="text-zinc-300">遭遇魔物時可<strong>自動判別</strong>是否屬於「分類：魔神」；若為「分類：魔神」，即可進行魔物知識判定（屬於判定包中的「知識判定包」），達成值達魔神弱點值以上時亦套用弱點。</p>
              <p class="text-zinc-400">※ 若部分魔物以擬態或變身偽裝正體，無法自動看穿，須先以真偽判定等察覺異常；若未察覺則維持誤認狀態，亦無法進行魔物知識判定。</p>
            </div>
          </div>
  
          <div class="bg-zinc-900 border border-zinc-800 p-5 rounded-xl space-y-4">
            <h3 class="text-base font-bold text-amber-400 border-b border-zinc-800 pb-2 flex items-center">
              <i class="fa-solid fa-fire-flame-curved mr-2 text-amber-500"></i>1. 用語（闇狩・操氣・理力）與操氣獲得規則
            </h3>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs leading-relaxed">
              <div class="bg-zinc-950 p-4 rounded-lg border border-zinc-800 space-y-2">
                <div class="font-bold text-amber-400 text-sm">【核心用語與理力公式】</div>
                <ul class="list-disc list-inside space-y-1 text-zinc-300">
                  <li><strong>闇狩：</strong>表記暗獵者技能各項特殊效果時，稱熟練運用者為「闇狩」。</li>
                  <li><strong>操氣：</strong>闇狩獲得並使用的特殊效果。</li>
                  <li><strong>理力：</strong>表示使用操氣時的效果強度，扮演類似魔法師系技能「魔力」的角色。</li>
                </ul>
                <div class="p-2.5 bg-zinc-900 text-amber-300 font-mono text-center rounded border border-zinc-800 font-bold">
                  理力 ＝ 暗獵者技能等級 ＋ 精神力加值
                </div>
              </div>
              <div class="bg-zinc-950 p-4 rounded-lg border border-zinc-800 space-y-1.5">
                <div class="font-bold text-amber-400 text-sm">【操氣獲得、等級限制與前提】</div>
                <ul class="list-disc list-inside space-y-1 text-zinc-300">
                  <li><strong>獲得與不可保留：</strong>每習得 1 級暗獵者技能即從操氣資料選 1 項獲得；<strong>不可保留</strong>，每升 1 級必定選 1 項，且已獲得者<strong>不可退還或遺忘</strong>。</li>
                  <li><strong>獲得等級限制：</strong>部分操氣設有最低技能等級（5 或 10），須於技能升至該等級（或更高）時選擇獲得，依成長後等級判斷。</li>
                  <li><strong>前提操氣：</strong>需先獲得指定前提操氣方可獲得；若前提以「or」連結多項，獲得其中任 1 項即滿足條件。</li>
                </ul>
              </div>
            </div>
          </div>
  
          <div class="bg-zinc-900 border border-zinc-800 p-5 rounded-xl space-y-4">
            <h3 class="text-base font-bold text-amber-400 border-b border-zinc-800 pb-2 flex items-center">
              <i class="fa-solid fa-heart-pulse mr-2 text-amber-500"></i>2. 操氣使用條件、種類、成本與非魔法特性
            </h3>
            <div class="bg-zinc-950 p-3.5 rounded-lg border border-zinc-800 text-xs text-zinc-300 space-y-1">
              <div class="font-bold text-cyan-300">● 使用條件與對象</div>
              <p>使用操氣<strong>無裝備限制</strong>，發聲或身體動作原則上亦非必要。部分操氣為主動作使用，若該手番進行<strong>「全力移動」</strong>則不可使用。常時操氣對象皆為闇狩自身；補助動作與主動作操氣之對象依各操氣資料而定。</p>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs leading-relaxed">
              <div class="p-3.5 bg-zinc-950 border border-zinc-800 rounded-lg space-y-1.5">
                <div class="font-bold text-amber-300">○ 常時效果操氣</div>
                <p class="text-zinc-300">僅對闇狩自身生效，獲得後常時發揮效果。</p>
              </div>
              <div class="p-3.5 bg-zinc-950 border border-zinc-800 rounded-lg space-y-1.5">
                <div class="font-bold text-amber-300">►► 補助動作操氣（含 △ 戰鬥準備）</div>
                <p class="text-zinc-300">於手番中以補助動作使用（附「△」者亦可用於戰鬥準備），消耗 <strong>2 點</strong>或 <strong>1d 點</strong> HP（宣告使用當下立即擲 1d 決定消耗量，不得因骰面大而取消）。</p>
                <p class="text-zinc-400">免除行為判定，達成值視為「0」；不可「以主動作使用操氣並取得達成值」。即使處於禁止補助動作狀態仍可以主動作使用操氣，但同樣不進行判定、不求達成值。1 輪可多次使用，但<strong>同名操氣效果不重複・不累積</strong>。</p>
              </div>
              <div class="p-3.5 bg-zinc-950 border border-zinc-800 rounded-lg space-y-1.5">
                <div class="font-bold text-amber-300">► 主動作操氣</div>
                <p class="text-zinc-300">以主動作使用（「全力移動」手番不可使用），必定進行以理力為基準值的行為判定並求達成值。</p>
                <p class="text-zinc-400">消耗量依判定時 <strong>2d</strong> 骰面合計決定：<strong>1 連（自動失敗）</strong>或特殊效果導致之自動失敗時消耗 <strong>「0」點</strong>；標示 <strong>2d(x)</strong> 時上限為 x 點（例如 2d(6) 骰出 7 以上亦僅扣 6 點）；僅標示 <strong>2d</strong> 者無上限，自動失敗外即為出目合計（最多 12 點）。</p>
              </div>
            </div>
            <div class="bg-zinc-950 p-4 rounded-lg border border-zinc-800 text-xs text-zinc-300 space-y-2">
              <div class="font-bold text-amber-400">● 成本消耗、解除與非魔法規則</div>
              <ul class="list-disc list-inside space-y-1 text-zinc-300">
                <li><strong>HP 成本特性：</strong>屬於「消耗」而非傷害，減輕或代承受傷害之效果無效；減輕 HP 消耗之效果有效，但<strong>不可用減輕 MP 消耗之效果替代</strong>。消耗所致 HP 減少可一般回復；HP 可因消耗降至「0」以下，但通常會因此氣絕並需進行生死判定（習得《不屈》且生死判定成功可免氣絕）。</li>
                <li><strong>主動解除：</strong>具效果時間的操氣，可由使用的闇狩以自身意思（視為<strong>輔助動作</strong>）解除。</li>
                <li><strong>非魔法特性：</strong>操氣非魔法，無法以【消除魔法】或拉斯蘭德 6 級種族特徵「魔法破除」解除；但《破言》、【完全抵消】、賦術【消除針】等於明確記載可對象化操氣或解除魔法以外效果時有效。同時不觸發【感應魔法】、【瑪娜搜尋】，亦不受《魔法擴大／＊＊》等僅影響魔法行使的特技恩惠。</li>
              </ul>
              <div class="pt-1 border-t border-zinc-800/80 text-cyan-200">
                <strong>【念絲註解】</strong>部分操氣使用稱為「念絲」的氣之絲線，呈淡白發光，自闇狩延伸而出，他人可清楚辨識其使用；無實體與質量，無法以物理方式觸碰或切斷。
              </div>
            </div>
          </div>
        </div>
      `,
    },
    {
      id: 'sec-druid_rules',
      title: '德魯伊與森羅魔法 (Druid) 概要與規則 (表A)',
      icon: 'fa-solid fa-leaf',
      content: `
        <div class="space-y-6 text-zinc-300">
          <div class="bg-zinc-900 border border-zinc-800 p-5 rounded-xl shadow-md">
            <div class="flex flex-wrap justify-between items-center gap-2 mb-3">
              <h2 class="text-xl font-bold text-amber-400 flex items-center">
                <i class="fa-solid fa-leaf mr-2.5 text-amber-500"></i>德魯伊與森羅魔法 (Druid) 概要與規則
              </h2>
              <div class="flex gap-2">
                <span class="text-xs bg-zinc-800 text-zinc-300 px-2.5 py-1 rounded border border-zinc-700 font-medium">魔法師系技能</span>
                <span class="text-xs bg-amber-950/80 text-amber-300 px-2.5 py-1 rounded border border-amber-800 font-bold">經驗表 A</span>
              </div>
            </div>
            <p class="text-xs text-zinc-300 leading-relaxed mb-3">
              與寄宿於森林、大地之動植物精靈交信並借力施展<strong>「森羅魔法」</strong>的<strong>「森羅導師」</strong>，多居於阿爾弗雷姆大陸東部森林並四處修行或執行使命。對死者蘇生與靈魂「穢」抱持一定寬容，但視不死族與魔神（尤以消滅「奈落」與「奈落魔域」為最重使命）為須討伐之存在；對惡魔統治者則以「以毒攻毒」視之而不致敵對。多見於精靈、梅莉亞與部分利坎特部族，秉持禁慾與愛護自然之理念；可用判定為<strong>魔法行使判定</strong>。
            </p>
            <div class="bg-zinc-950 p-3.5 rounded-lg border border-zinc-800 text-xs space-y-1">
              <div class="font-bold text-red-400">🚫 受限種族：符民（ルーンフォーク）— 習得不可</div>
              <p class="text-zinc-300">符民無法看見精靈姿態亦無法感知其存在，因此<strong>無法習得德魯伊技能</strong>（但可辨識森羅魔法或精靈引發的現象並承受其效果）。</p>
            </div>
          </div>
  
          <div class="bg-zinc-900 border border-zinc-800 p-5 rounded-xl space-y-4">
            <h3 class="text-base font-bold text-amber-400 border-b border-zinc-800 pb-2 flex items-center">
              <i class="fa-solid fa-seedling mr-2 text-amber-500"></i>1. 森羅魔法習得、使用條件與〈宿靈之棒杖〉
            </h3>
            <p class="text-xs text-zinc-300 leading-relaxed">
              習得德魯伊 1 級即可使用全部 1 級森羅魔法，此後每升 1 級自動可使用新等級全部魔法（基本規則與表記同一般魔法）。
            </p>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs leading-relaxed">
              <div class="p-3.5 bg-zinc-950 border border-zinc-800 rounded-lg space-y-1">
                <div class="font-bold text-amber-300">🚶 移動與發聲條件</div>
                <p class="text-zinc-300">行使時該手番移動僅限<strong>「限制移動」</strong>；必須發聲呼喚精靈（<strong>語言不限</strong>，故<strong>［獸變貌］</strong>狀態的利坎特亦可正常行使；<strong>［異貌］</strong>夢魘可免除發聲）。</p>
              </div>
              <div class="p-3.5 bg-zinc-950 border border-zinc-800 rounded-lg space-y-1">
                <div class="font-bold text-amber-300">🛡️ 鎧甲與武器限制</div>
                <p class="text-zinc-300">裝備／穿著<strong>〈金屬鎧〉</strong>時魔力 <strong>-4（最低 0）</strong>；〈非金屬鎧〉與〈盾〉無魔力減少（<strong>［異貌］</strong>夢魘可無視此限制）。武器無直接限制，但須手持〈宿靈之棒杖〉，故會受持握限制影響。</p>
              </div>
            </div>
            <div class="bg-zinc-950 p-4 rounded-lg border border-zinc-800 text-xs space-y-1.5 leading-relaxed">
              <div class="font-bold text-cyan-300">● 〈宿靈之棒杖〉(ヤドリギの棒杖) 裝備與加工</div>
              <p class="text-zinc-300">行使森羅魔法須使用<strong>〈宿靈之棒杖〉</strong>（視為<strong>「用法：1H」</strong>道具，基本交易價格 <strong>100G</strong>）。任意〈法杖（スタッフ）〉皆可花費 <strong>100G</strong> 加工兼作〈宿靈之棒杖〉，裝備或持握即可行使森羅魔法。</p>
            </div>
          </div>

          <div class="bg-zinc-900 border border-zinc-800 p-5 rounded-xl space-y-4">
            <h3 class="text-base font-bold text-amber-400 border-b border-zinc-800 pb-2 flex items-center">
              <i class="fa-solid fa-ghost mr-2 text-amber-500"></i>2. 森羅魔法註釋：同名認定、精靈體與生命抵抗
            </h3>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs leading-relaxed">
              <div class="p-3.5 bg-zinc-950 border border-zinc-800 rounded-lg space-y-1.5">
                <div class="font-bold text-amber-300">同名與みなす魔法</div>
                <p class="text-zinc-300">格式為【○○／＊＊】者，只要<strong>「○○」相同</strong>，不論「＊＊」動植物／魔物名為何皆視為<strong>同名魔法</strong>，對單一對象<strong>不重複・不累積</strong>（註記時常省略「／＊＊」）。</p>
              </div>
              <div class="p-3.5 bg-zinc-950 border border-zinc-800 rounded-lg space-y-1.5">
                <div class="font-bold text-amber-300">精靈體</div>
                <p class="text-zinc-300">動植物精靈以半透明姿態顯現；「時間：一瞬」以外者於效果時間內隨對象賦予效果。<strong>無法以武器或魔法直接干涉</strong>，亦不作魔法效果以外行動或產生額外效果；符民無法知覺精靈體，但會受其效果影響。</p>
              </div>
              <div class="p-3.5 bg-zinc-950 border border-zinc-800 rounded-lg space-y-1.5">
                <div class="font-bold text-amber-300">抵抗：生命／消滅・生命／半減</div>
                <p class="text-zinc-300">以<strong>生命抵抗力判定</strong>進行抵抗（非精神抵抗力判定）；成功時依記載消滅或半減，處理同一般「抵抗：消滅／半減」。</p>
              </div>
            </div>
          </div>
  
          <div class="bg-zinc-900 border border-zinc-800 p-5 rounded-xl space-y-4">
            <h3 class="text-base font-bold text-amber-400 border-b border-zinc-800 pb-2 flex items-center">
              <i class="fa-solid fa-tree mr-2 text-amber-500"></i>3. 受益者的圖騰（シンボリックロア）與〈受益者的象徵〉
            </h3>
            <div class="bg-zinc-950 p-4 rounded-lg border border-zinc-800 space-y-2 text-xs leading-relaxed">
              <div class="font-bold text-amber-400 text-sm">【何謂受益者的圖騰 (シンボリックロア)】</div>
              <p class="text-zinc-300">【大護衛（ビッグディフェンダー）】【多重行動者（マルチプルアクター）】【天賦植入（ギフテッドプラント）】屬<strong>「受益者的圖騰」</strong>分類。透過附加限制與將部分行使手順預先寄宿於道具，使原本準備繁複、無法即時施展的強大精靈之力得以具現。</p>
              <div class="font-bold text-cyan-300 pt-1">【〈受益者的象徵〉(受益者のシンボル) 製作與適用對象】</div>
              <p class="text-zinc-300">受術者須<strong>持有</strong>（放於行李即可，無須裝備為飾品）由 1 級以上德魯伊以<strong>〈未加工的宿靈之木〉</strong>（100G；委託 NPC 含木料共 100G 謝禮）與對象面對面花費 <strong>1 小時</strong>加工製成、可放於掌心的小型固有木雕；<strong>德魯伊自身受惠亦須持有</strong>，製作後<strong>終生有效</strong>（復活後亦有效）。</p>
              <p class="text-zinc-300">僅限分類為<strong>「人族、蠻族、動物、植物、幻獸、妖精」</strong>者可持有並受惠；【召喚妖精】使役妖精無法事前製作，<strong>騎獸單獨時亦無法取得</strong>。</p>
            </div>
          </div>

          <div class="bg-zinc-900 border border-zinc-800 p-5 rounded-xl space-y-4">
            <h3 class="text-base font-bold text-amber-400 border-b border-zinc-800 pb-2 flex items-center">
              <i class="fa-solid fa-ban mr-2 text-amber-500"></i>4. 受益者的圖騰行使側與對象側限制（含 GM 運用注意）
            </h3>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs leading-relaxed">
              <div class="bg-zinc-950 p-4 rounded-lg border border-zinc-800 space-y-1.5">
                <div class="font-bold text-amber-400 text-sm">【行使側限制 ①②】</div>
                <ul class="list-disc list-inside space-y-1 text-zinc-300">
                  <li><strong>① 1 輪 1 次：</strong>同名受益者的圖騰 1 輪限行使 1 次（例如任一【大護衛】發動後，該輪所有【大護衛】皆不可再用，無論輔助動作或多次主動作；不同名者可各用 1 次）。</li>
                  <li><strong>② 《魔法擴大》不適用：</strong>所有受益者的圖騰皆<strong>不受任何《魔法擴大／＊＊》</strong>（含《魔法擴大すべて》）影響；「對象：1體X」可消耗對象部位數倍 MP 同時施加於全部位。</li>
                </ul>
              </div>
              <div class="bg-zinc-950 p-4 rounded-lg border border-zinc-800 space-y-1.5">
                <div class="font-bold text-amber-400 text-sm">【對象側限制 ①②③】</div>
                <ul class="list-disc list-inside space-y-1 text-zinc-300">
                  <li><strong>① 須持有〈受益者的象徵〉：</strong>未持有者不可選為目標（魔物資料角色除外）。</li>
                  <li><strong>② 同名效果 1 日 1 次：</strong>同一角色（含魔物資料）1 天僅能受同名受益者的圖騰效果 <strong>1 次</strong>，第 2 次起無效消滅（不同德魯伊施展亦同；不同名者可各受 1 次）。</li>
                  <li><strong>③ 騎獸限騎乘時：</strong>騎獸單獨不可為對象；騎乘時若<strong>騎手持有</strong>〈受益者的象徵〉，則將騎手與騎獸視為複數部位同一角色，對「1體X／1體全」同時賦予效果（含「分類：魔動機」騎獸；騎手當日已受同名效果則皆不生效）。</li>
                </ul>
              </div>
            </div>
          <div class="bg-zinc-900 border border-zinc-800 p-5 rounded-xl space-y-4">
            <h3 class="text-base font-bold text-amber-400 border-b border-zinc-800 pb-2 flex items-center">
              <i class="fa-solid fa-compass-drafting mr-2 text-amber-500"></i>5. 受益者的圖騰運用注意事項（【多重行動者】【大護衛】【天賦植入】）
            </h3>
            <p class="text-xs text-zinc-300 leading-relaxed">
              受益者的圖騰以強大支援效果換取嚴格限制，實戰中須意識限制並掌握各魔法定位運用：
            </p>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs leading-relaxed">
              <div class="p-3.5 bg-zinc-950 border border-zinc-800 rounded-lg space-y-1.5">
                <div class="font-bold text-amber-300">【多重行動者（マルチプルアクター）】</div>
                <p class="text-zinc-300">1 輪 1 次、不可用《魔法擴大／數》增對象，且<strong>手番結束效果即自動消滅</strong>（無法跨多手番受惠），實質為「1 輪僅強化 1 人」，不宜全員齊發硬衝，適合<strong>輪流創造高光（見せ場）</strong>。</p>
                <p class="text-zinc-300">因同名效果 1 日 1 次，最適合留至劇本高潮<strong>「頭目戰」</strong>發揮；另注意<strong>【多重行動者／クラッシュベア】為主動作行使</strong>。</p>
              </div>
              <div class="p-3.5 bg-zinc-950 border border-zinc-800 rounded-lg space-y-1.5">
                <div class="font-bold text-cyan-300">【大護衛（ビッグディフェンダー）】</div>
                <p class="text-zinc-300">關鍵時刻的<strong>最後王牌</strong>，於 PC 陷入絕境時提供大幅防禦效果以近乎無效化敵攻；因 1 日 1 次限制，通常建議保留至大危機投入。</p>
                <p class="text-zinc-300">亦可搭配《全力攻擊》《必殺攻擊》【狂熱（ファナティシズム）】等迴避懲罰效果，使之近乎無風險發動（此時可搭配【多重行動者】追求最大效益）；因 1 輪 1 次，<strong>2 人以上同時陷險時須抉擇優先救 1 人</strong>。</p>
              </div>
              <div class="p-3.5 bg-zinc-950 border border-zinc-800 rounded-lg space-y-1.5">
                <div class="font-bold text-emerald-300">【天賦植入（ギフテッドプラント）】</div>
                <p class="text-zinc-300">在施法 PC 覺得戰鬥特技「差 1 個」時（如剛要學《魔法控制》前，或前衛魔戰士先拿《多重動作》而缺《魔法擴大／數》），補齊缺口<strong>僅限 1 個手番</strong>，且<strong>對象手番結束即結束</strong>。</p>
                <p class="text-zinc-300">因 1 日 1 次，戰略倚靠風險高，定位為<strong>應急型</strong>；正因屬應急，覺得需要時應積極使用（錯過「當下」往往「下次」就不必了）。</p>
              </div>
            </div>
          </div>

            <div class="bg-amber-950/20 border border-amber-900/40 p-4 rounded-lg text-xs leading-relaxed space-y-1">
              <div class="font-bold text-amber-400">⚠️ GM 側運用注意事項</div>
              <p class="text-zinc-300">魔物資料免除〈受益者的象徵〉僅為遊戲簡便；魔物方德魯伊不宜替全體部下準備象徵，合理做法是限於<strong>自身與指揮官／保鑣等級中 1～2 體</strong>，避免造成玩家不公或過度壓力。</p>
            </div>
          </div>
        </div>
      `,
    },
    {
      id: 'sec-warleader_rules',
      title: '軍師 (War Leader) 概要與規則 (表B)',
      icon: 'fa-solid fa-bullhorn',
      content: `
        <div class="space-y-6 text-zinc-300">
          <div class="bg-zinc-900 border border-zinc-800 p-5 rounded-xl shadow-md">
            <div class="flex flex-wrap justify-between items-center gap-2 mb-3">
              <h2 class="text-xl font-bold text-amber-400 flex items-center">
                <i class="fa-solid fa-bullhorn mr-2.5 text-amber-500"></i>軍師 (War Leader) 概要與規則
              </h2>
              <div class="flex gap-2">
                <span class="text-xs bg-zinc-800 text-zinc-300 px-2.5 py-1 rounded border border-zinc-700 font-medium">其他系技能</span>
                <span class="text-xs bg-amber-950/80 text-amber-300 px-2.5 py-1 rounded border border-amber-800 font-bold">經驗表 B</span>
              </div>
            </div>
            <p class="text-xs text-zinc-300 leading-relaxed">
              在戰場上指揮夥伴、發出有利指示的技能（可進行「先制判定」）。每提升 1 級可習得 1 個「鼓咆」或「陣律」（部分需 Lv5 / Lv10 最低限制）。
            </p>
          </div>
  
          <div class="bg-zinc-900 border border-zinc-800 p-5 rounded-xl space-y-4">
            <h3 class="text-base font-bold text-amber-400 border-b border-zinc-800 pb-2 flex items-center">
              <i class="fa-solid fa-flag mr-2 text-amber-500"></i>1. 鼓咆、陣律與共通使用規則
            </h3>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs leading-relaxed">
              <div class="bg-zinc-950 p-4 rounded-lg border border-zinc-800 space-y-1.5">
                <div class="font-bold text-amber-400 text-sm">【鼓咆 (Commands) vs 陣律 (Tactics)】</div>
                <p><strong>鼓咆：</strong>輔助動作（每回合 1 次），強化指揮範圍內「除軍師以外」的所有夥伴，並為軍師蓄積「陣氣」。單一角色同時僅能套用一種鼓咆。</p>
                <p><strong>陣律：</strong>每回合 1 次，消耗蓄積的「陣氣」大幅強化「軍師本人」（可與鼓咆同回合各用 1 次）。</p>
              </div>
              <div class="bg-zinc-950 p-4 rounded-lg border border-zinc-800 space-y-1.5">
                <div class="font-bold text-amber-400 text-sm">【發動條件與非魔法特性】</div>
                <p><strong>裝備與發聲：</strong>必須配戴〈軍師徽章〉，僅限戰鬥中使用，且必須發聲（夢魘［異貌］亦不可省略發聲；不限移動類別）。</p>
                <p><strong>併行與解除：</strong>可與咒歌、【戰鬥歌曲】併用。非魔法效果，僅受《破言》、【完全抵消】、【消除針】個別解除。</p>
              </div>
            </div>
  
            <div class="overflow-x-auto">
              <table class="w-full text-xs text-left border-collapse border border-zinc-800">
                <thead>
                  <tr class="bg-zinc-950 text-amber-400">
                    <th class="p-2 border border-zinc-800">冒險者等級</th>
                    <th class="p-2 border border-zinc-800">指揮範圍（需聽得見聲音且通曉語言）</th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-zinc-800">
                  <tr><td class="p-2 border border-zinc-800">無（等級 1）</td><td class="p-2 border border-zinc-800">1 個區域（半徑 5m）</td></tr>
                  <tr class="bg-zinc-950/40"><td class="p-2 border border-zinc-800">匕首 (Dagger, 2~3)</td><td class="p-2 border border-zinc-800">2~3 個區域（半徑 10m）</td></tr>
                  <tr><td class="p-2 border border-zinc-800">細劍 (Rapier) / 闊劍 (Broadsword)</td><td class="p-2 border border-zinc-800">全區域（半徑 20m / 半徑 30m）</td></tr>
                  <tr class="bg-zinc-950/40"><td class="p-2 border border-zinc-800">雙手巨劍 (Flamberge) / 哨兵 (Sentinel)</td><td class="p-2 border border-zinc-800">全區域（半徑 40m / 半徑 50m）</td></tr>
                  <tr><td class="p-2 border border-zinc-800">超巨星 (Hyperion) / 〈起始之劍〉</td><td class="p-2 border border-zinc-800">全區域（半徑 100m / 半徑 200m，每多一 ★ +100m）</td></tr>
                </tbody>
              </table>
            </div>
          </div>
  
          <div class="bg-zinc-900 border border-zinc-800 p-5 rounded-xl space-y-4">
            <h3 class="text-base font-bold text-amber-400 border-b border-zinc-800 pb-2 flex items-center">
              <i class="fa-solid fa-arrow-trend-up mr-2 text-amber-500"></i>2. 陣氣蓄積與鼓咆階級變動規則
            </h3>
            <div class="bg-zinc-950 p-4 rounded-lg border border-zinc-800 space-y-2 text-xs leading-relaxed">
              <p>• <strong>陣氣運作：</strong>開戰為 0、戰鬥結束或軍師戰鬥不能時歸 0（無上限）。鼓咆至少影響 1 名夥伴時固定獲得「+○點陣氣」（不因人數加倍）。</p>
              <p>• <strong>同系統（階級 +1）：</strong>延續前一回合相同系統的鼓咆時，最高可使用「前一回合階級 +1」的鼓咆。</p>
              <p>• <strong>不同系統（階級 -1）：</strong>切換不同系統時，最高只能使用「前一回合階級 -1」（最低 1 階）。但切換至<strong>「鼓舞系」</strong>可直接維持「與前一回合相同階級」不需 -1。</p>
            </div>
          </div>
        </div>
      `,
    },
    {
        id: 'sec-geomancer_rules',
        title: '天地使 (Geomancer) 概要與規則 (表B)',
        icon: 'fa-solid fa-earth-asia',
        content: `
          <div class="space-y-6 text-zinc-300">
            <!-- 標題與技能概要 -->
            <div class="bg-zinc-900 border border-zinc-800 p-5 rounded-xl shadow-md">
              <div class="flex flex-wrap justify-between items-center gap-2 mb-3">
                <h2 class="text-xl font-bold text-amber-400 flex items-center">
                  <i class="fa-solid fa-earth-asia mr-2.5 text-amber-500"></i>天地使 (Geomancer) 概要與規則
                </h2>
                <div class="flex gap-2">
                  <span class="text-xs bg-zinc-800 text-zinc-300 px-2.5 py-1 rounded border border-zinc-700 font-medium">其他系技能</span>
                  <span class="text-xs bg-amber-950/80 text-amber-300 px-2.5 py-1 rounded border border-amber-800 font-bold">經驗表 B</span>
                  <span class="text-xs bg-emerald-950/80 text-emerald-300 px-2.5 py-1 rounded border border-emerald-800 font-medium">全種族可習得</span>
                </div>
              </div>
              <p class="text-xs text-zinc-300 leading-relaxed mb-3">
                引導充盈於世界本身的力量引發「相域」現象的技能（習得者亦稱為<strong>天地使</strong>）。每提升 1 級可習得 1 個「相域」（含「確定傷害」「不利效果」「回復效果」「有利效果」4 類，可自由選擇天相／地相／人相，部分有最低技能等級 5 或 10 限制）。
              </p>
              <div class="bg-zinc-950/80 border border-zinc-800/80 rounded-lg px-3.5 py-2.5 text-xs flex flex-wrap items-center gap-x-4 gap-y-1">
                <span class="font-bold text-amber-400">可用判定（天地使觀察判定組合）：</span>
                <span>● 探索判定</span>
                <span>● 天候預測判定</span>
              </div>
            </div>
  
            <!-- 1. 〈地脈儀〉與命脈點管理 -->
            <div class="bg-zinc-900 border border-zinc-800 p-5 rounded-xl space-y-4">
              <h3 class="text-base font-bold text-amber-400 border-b border-zinc-800 pb-2 flex items-center">
                <i class="fa-solid fa-compass mr-2 text-amber-500"></i>1. 〈地脈儀〉(Geograph) 展開與「命脈點」管理
              </h3>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs leading-relaxed">
                <div class="bg-zinc-950 p-4 rounded-lg border border-zinc-800 space-y-2">
                  <div class="font-bold text-amber-400 text-sm">【〈地脈儀〉展開與移動限制】</div>
                  <p>• <strong>裝備與展開：</strong>視為「裝飾品：任意」（漂浮於身旁不佔用雙手）。僅裝備無法使用相域，必須以<strong>輔助動作「展開」</strong>才可讀取命脈（高價款相域範圍更廣、命脈點上限更高）。</p>
                  <p>• <strong>移動限制：</strong>展開期間僅能進行<strong>「限制移動」</strong>；若要「通常移動」，必須在移動<strong>前</strong>以輔助動作<strong>收納</strong>（展開與收納不可於同一手番執行；通常移動後再展開則當下無法使用相域）。</p>
                  <p>• <strong>強制移動：</strong>展開中若受強制移動效果影響，〈地脈儀〉會<strong>自動收納</strong>（仍維持飾品裝備狀態，之後可重新展開）。</p>
                </div>
                <div class="bg-zinc-950 p-4 rounded-lg border border-zinc-800 space-y-2">
                  <div class="font-bold text-amber-400 text-sm">【「命脈點」蓄積與喪失】</div>
                  <p>• <strong>獲得條件：</strong>展開〈地脈儀〉的瞬間（及每過 10 秒／戰鬥中每次天地使<strong>手番開始時</strong>），<strong>天・地・人</strong> 3 種命脈點各獲得 <strong>1 點</strong>（亦可透過〈瞬脈的念珠〉等道具瞬間增加）。</p>
                  <p>• <strong>跨回合累積：</strong>未消耗的命脈點會持續保留累積至上限（下限為 0，不會變負數）。</p>
                  <p>• <strong>收納即歸零：</strong>一旦將〈地脈儀〉<strong>收納</strong>，已累積的所有命脈點與發動中的相域皆會<strong>全部消失解除</strong>。</p>
                </div>
              </div>
  
              <!-- 展開與收納移動限制表 -->
              <div class="overflow-x-auto">
                <table class="w-full text-xs text-left border-collapse border border-zinc-800">
                  <thead>
                    <tr class="bg-zinc-950 text-amber-400 border-b border-zinc-800">
                      <th class="p-2.5 border-r border-zinc-800">動作（皆為輔助動作）</th>
                      <th class="p-2.5">允許的移動種類與順序限制</th>
                    </tr>
                  </thead>
                  <tbody class="divide-y divide-zinc-800 bg-zinc-950/40">
                    <tr>
                      <td class="p-2.5 border-r border-zinc-800 font-medium text-zinc-200">展開〈地脈儀〉</td>
                      <td class="p-2.5">限制移動、通常移動（若為通常移動，必定為<strong>移動後</strong>展開，且當手番不可使用相域）</td>
                    </tr>
                    <tr>
                      <td class="p-2.5 border-r border-zinc-800 font-medium text-zinc-200">維持〈地脈儀〉展開（使用相域）</td>
                      <td class="p-2.5">僅限<strong>限制移動</strong></td>
                    </tr>
                    <tr>
                      <td class="p-2.5 border-r border-zinc-800 font-medium text-zinc-200">收納〈地脈儀〉</td>
                      <td class="p-2.5">限制移動、通常移動（若進行通常移動，須在<strong>移動前</strong>以輔助動作收納）</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
  
            <!-- 2. 相域發動、對象決定與取消機制 -->
            <div class="bg-zinc-900 border border-zinc-800 p-5 rounded-xl space-y-4">
              <h3 class="text-base font-bold text-amber-400 border-b border-zinc-800 pb-2 flex items-center">
                <i class="fa-solid fa-hurricane mr-2 text-amber-500"></i>2. 相域使用、隨機對象與取消 (Cancel) 機制
              </h3>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs leading-relaxed">
                <div class="bg-zinc-950 p-4 rounded-lg border border-zinc-800 space-y-2">
                  <div class="font-bold text-amber-400 text-sm">【使用方式與持續累積】</div>
                  <p>• <strong>每手番限 1 次：</strong>以<strong>輔助動作</strong>選擇 1 個相域並決定消耗命脈點數（至少 1 點，消耗越多效果越強；同名相域重複使用會被後者覆蓋）。</p>
                  <p>• <strong>手番結束時發動：</strong>效果並非使用當下立刻生效，而是於<strong>天地使的手番結束時</strong>觸發，之後<strong>每 10 秒（手番結束時）持續自動觸發</strong>，直到〈地脈儀〉收納為止。不同手番使用的不同相域會<strong>全數重疊</strong>並同時作用於該次選出的對象（套用順序任意）。</p>
                  <p>• <strong>達成值 0 ／ 抵抗必中：</strong>所有相域皆視為「達成值：0」「抵抗：必中」，單次產生之效果時間為「一瞬」或「10 秒（至下輪天地使手番開始時解除）」。</p>
                </div>
                <div class="bg-zinc-950 p-4 rounded-lg border border-zinc-800 space-y-2">
                  <div class="font-bold text-amber-400 text-sm">【隨機對象、多部位與取消規則】</div>
                  <p>• <strong>範圍內隨機 1 體（含自身）：</strong>以天地使為中心（半徑○m／空間），從範圍內所有角色（不論敵我、是否察覺）中<strong>均等機率隨機抽出 1 體</strong>（天地使自身亦在抽選名單內）。</p>
                  <p>• <strong>多部位角色處理：</strong>依<strong>「每個部位算 1 體」</strong>計算機率（如 1 部位＋5 部位則各部位均為 1/6）。預設僅中選部位受影響；註明「多部位無效」則不生效；註明「全部位受影響」則全體部位皆生效（不重複累計）。</p>
                  <p>• <strong>取消（Cancel）：</strong>抽出對象後可選擇<strong>取消</strong>，使<strong>該手番結束時</strong>所有相域效果均不發動（下一手番結束時仍會繼續運作）。搭配戰鬥特技《相克之標的》（對象變為不同 2 體）與《相克之別離》（可針對個別對象只取消部分相域效果）能大幅提升控場精準度。</p>
                </div>
              </div>
            </div>
  
            <!-- 3. 手番處理流程與無作為決定表 -->
            <div class="grid grid-cols-1 lg:grid-cols-12 gap-4">
              <!-- 左側：流程圖 -->
              <div class="lg:col-span-5 bg-zinc-900 border border-zinc-800 p-5 rounded-xl space-y-3">
                <h3 class="text-base font-bold text-amber-400 border-b border-zinc-800 pb-2 flex items-center">
                  <i class="fa-solid fa-diagram-project mr-2 text-amber-500"></i>3. 天地使手番流程
                </h3>
                <ol class="space-y-2 text-xs">
                  <li class="bg-zinc-950 border border-zinc-800 p-2.5 rounded-lg flex items-start gap-2.5">
                    <span class="bg-amber-500/20 text-amber-400 border border-amber-500/40 font-bold px-1.5 py-0.5 rounded">1</span>
                    <div><strong class="text-zinc-100">手番開始：</strong>若〈地脈儀〉未展開，可在此時以<strong>輔助動作展開</strong>。</div>
                  </li>
                  <li class="bg-zinc-950 border border-zinc-800 p-2.5 rounded-lg flex items-start gap-2.5">
                    <span class="bg-amber-500/20 text-amber-400 border border-amber-500/40 font-bold px-1.5 py-0.5 rounded">2</span>
                    <div><strong class="text-zinc-100">蓄積命脈點：</strong>展開狀態下，<strong>天・地・人 3 種命脈點各 +1</strong>。</div>
                  </li>
                  <li class="bg-zinc-950 border border-zinc-800 p-2.5 rounded-lg flex items-start gap-2.5">
                    <span class="bg-amber-500/20 text-amber-400 border border-amber-500/40 font-bold px-1.5 py-0.5 rounded">3</span>
                    <div><strong class="text-zinc-100">使用相域（輔助動作）：</strong>選擇 1 個相域並消耗對應命脈點（每手番限 1 次）。</div>
                  </li>
                  <li class="bg-zinc-950 border border-zinc-800 p-2.5 rounded-lg flex items-start gap-2.5">
                    <span class="bg-amber-500/20 text-amber-400 border border-amber-500/40 font-bold px-1.5 py-0.5 rounded">4</span>
                    <div><strong class="text-zinc-100">執行主動作：</strong>進行任意主動作（移動僅限限制移動）。</div>
                  </li>
                  <li class="bg-zinc-950 border border-zinc-800 p-2.5 rounded-lg flex items-start gap-2.5">
                    <span class="bg-amber-500/20 text-amber-400 border border-amber-500/40 font-bold px-1.5 py-0.5 rounded">5</span>
                    <div><strong class="text-zinc-100">手番結束與結算：</strong>從範圍內隨機決定對象 → 選擇<strong>套用全部已啟動相域</strong>（順序自訂）或<strong>取消</strong>（本回合不發動）。</div>
                  </li>
                </ol>
              </div>
  
              <!-- 右側：無作為決定表 -->
              <div class="lg:col-span-7 bg-zinc-900 border border-zinc-800 p-5 rounded-xl space-y-3">
                <h3 class="text-base font-bold text-amber-400 border-b border-zinc-800 pb-2 flex items-center">
                  <i class="fa-solid fa-dice mr-2 text-amber-500"></i>4. 隨機 1 體決定表（無作為決定表）
                </h3>
                <p class="text-[11px] text-zinc-400">可用抽牌或線上抽籤取代；若僅用 2 顆 1d6 骰子均等抽選，可參照下表（若無對應編號或抽中空號則重擲）：</p>
                <div class="overflow-x-auto">
                  <table class="w-full text-xs text-left border-collapse border border-zinc-800">
                    <thead>
                      <tr class="bg-zinc-950 text-amber-400 border-b border-zinc-800">
                        <th class="p-2 border-r border-zinc-800 w-20 text-center">對象數</th>
                        <th class="p-2">1d6 決定方式</th>
                      </tr>
                    </thead>
                    <tbody class="divide-y divide-zinc-800 bg-zinc-950/40 text-[11px]">
                      <tr>
                        <td class="p-2 border-r border-zinc-800 text-center font-bold text-zinc-200">6 以下</td>
                        <td class="p-2">編號 1～6，擲 1d6 選出對應號碼（無該號則重擲）。</td>
                      </tr>
                      <tr>
                        <td class="p-2 border-r border-zinc-800 text-center font-bold text-zinc-200">7</td>
                        <td class="p-2">編號 1～7，擲 2 次 1d6：兩次不同取「第 1 次點數」；「1～5 對子」為 7 號；「6 對子」重擲。</td>
                      </tr>
                      <tr>
                        <td class="p-2 border-r border-zinc-800 text-center font-bold text-zinc-200">8</td>
                        <td class="p-2">分 A、B 兩組（各編號 1～4）。先擲 1d6 分組（1～3 為 A、4～6 為 B），再擲 1d6 選號（5、6 重擲）。</td>
                      </tr>
                      <tr>
                        <td class="p-2 border-r border-zinc-800 text-center font-bold text-zinc-200">9</td>
                        <td class="p-2">分 A、B、C 三組（各編號 1～3）。擲 1d6 分組（1~2 A／3~4 B／5~6 C），再擲 1d6 除以 2 無條件進位。</td>
                      </tr>
                      <tr>
                        <td class="p-2 border-r border-zinc-800 text-center font-bold text-zinc-200">10</td>
                        <td class="p-2">同 8 人處理（分 A、B 兩組各編號 1～5，僅擲出 6 重擲）。</td>
                      </tr>
                      <tr>
                        <td class="p-2 border-r border-zinc-800 text-center font-bold text-zinc-200">11～12</td>
                        <td class="p-2">分 A、B 兩組各編號 1～6（11 人時 B 組 6 為空號，抽中從頭重擲；12 人無空號）。</td>
                      </tr>
                      <tr>
                        <td class="p-2 border-r border-zinc-800 text-center font-bold text-zinc-200">13～14</td>
                        <td class="p-2">分 A、B 兩組各編號 1～7，分組後依「7 人規則」抽選（13 人時 B 組 7 為空號，抽中從頭重擲）。</td>
                      </tr>
                      <tr>
                        <td class="p-2 border-r border-zinc-800 text-center font-bold text-zinc-200">15～18</td>
                        <td class="p-2">盡量均分 A、B、C 三組，分組後依「6 以下規則」抽選。</td>
                      </tr>
                      <tr>
                        <td class="p-2 border-r border-zinc-800 text-center font-bold text-zinc-200">19～20</td>
                        <td class="p-2">分 A、B 兩組，依「10 人規則」抽選。</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        `,
      },
    {
      id: 'sec-abyssgazer_rules',
      title: '奈落使與奈落魔法 (Abyssgazer) 概要與規則 (表A)',
      icon: 'fa-solid fa-eye-low-vision',
      content: `
        <div class="space-y-6 text-zinc-300">
          <div class="bg-zinc-900 border border-zinc-800 p-5 rounded-xl shadow-md">
            <div class="flex flex-wrap justify-between items-center gap-2 mb-3">
              <h2 class="text-xl font-bold text-amber-400 flex items-center">
                <i class="fa-solid fa-eye-low-vision mr-2.5 text-amber-500"></i>奈落使與奈落魔法 (Abyssgazer) 概要與規則
              </h2>
              <div class="flex gap-2">
                <span class="text-xs bg-zinc-800 text-zinc-300 px-2.5 py-1 rounded border border-zinc-700 font-medium">魔法師系技能</span>
                <span class="text-xs bg-amber-950/80 text-amber-300 px-2.5 py-1 rounded border border-amber-800 font-bold">經驗表 A</span>
              </div>
            </div>
            <p class="text-xs text-zinc-300 leading-relaxed">
              習得者稱為「奈落使（奈落使い）」或「奈落睨士」。以瑪娜之力從虛無空間引出「奈落魔域」的超常現象並隨心操縱；相較其他魔法泛用性較低但威力強大，且多與「奈落魔域」相關。<strong>奈落魔法魔力 ＝ 奈落使技能等級 ＋ 知力加值</strong>。
            </p>
          </div>

          <!-- 1. 技能特性、天賦與基本規範 -->
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 text-xs text-zinc-300 leading-relaxed">
            <div class="bg-zinc-900 border border-zinc-800 rounded-xl p-4 space-y-3">
              <h3 class="text-sm font-bold text-amber-400 border-b border-zinc-800 pb-1.5">
                <i class="fa-solid fa-eye mr-1.5 text-amber-500"></i>技能特性、傳承與基本規範
              </h3>
              <p>連接「奈落魔域」的空間裂縫與偏移雖難以察覺卻無處不在，奈落睨士能察知並引出其中力量操縱各種事象；除人族外，波爾克（ボルグ）、凱帕拉烏拉（ケパラウラ）等部分蠻族亦有此才能。</p>
              <p>發掘裂縫與偏移深入異界需仰賴<strong>天性才能</strong>，師徒多透過同行異界以體感學習，天性相性與感性較理論更為重要。習得技能 1 級即可使用全部 1 級奈落魔法，此後每升 1 級自動可使用新等級全部魔法。</p>
              <ul class="list-disc list-inside space-y-1.5 bg-zinc-950 p-3 rounded-lg border border-zinc-800/80">
                <li><strong>可用判定：</strong>魔法行使判定</li>
                <li><strong>習得語言：</strong>習得技能時自動獲得 <span class="text-cyan-300 font-bold">魔神語（會話）</span></li>
                <li><strong>種族限制：</strong>獸化人（リカント）處於 <span class="text-red-400 font-bold">［獸變貌］</span> 時因無法發聲「魔神語」，不可行使奈落魔法</li>
                <li><strong>魔力與表記：</strong>依術者想念將異界力量化為期望效果；基本規則與表記同傳統魔法，並可消耗擴張素材強化效果</li>
              </ul>
            </div>

            <!-- 2. 奈落魔法使用條件與〈深淵之刃〉 -->
            <div class="space-y-4">
              <div class="bg-zinc-900 border border-zinc-800 rounded-xl p-4 space-y-2.5">
                <h3 class="text-sm font-bold text-amber-400 border-b border-zinc-800 pb-1.5">
                  <i class="fa-solid fa-list-check mr-1.5 text-amber-500"></i>奈落魔法使用條件與鎧甲限制
                </h3>
                <ul class="list-disc list-inside space-y-1 text-zinc-300">
                  <li><strong>移動限制：</strong>行使奈落魔法的手番移動僅限 <span class="text-amber-300 font-bold">「限制移動」</span></li>
                  <li><strong>魔神語發聲：</strong>無定型咒文，但行使時必須以 <span class="text-cyan-300 font-bold">「魔神語」</span> 發聲表達自身願望</li>
                  <li><strong>肢體與身形：</strong>須以〈深淵之刃〉做出切開空間的身振，無法自由活動時不可行使</li>
                  <li><strong>鎧甲限制：</strong>裝備〈金屬鎧〉時行使判定承受 <span class="text-red-400 font-bold">-4</span> 懲罰修正（<span class="text-emerald-400">［異貌］</span> 夢魘可無視此限制）</li>
                </ul>
              </div>

              <div class="bg-zinc-900 border border-zinc-800 rounded-xl p-4 space-y-2">
                <h3 class="text-sm font-bold text-amber-400 border-b border-zinc-800 pb-1.5">
                  <i class="fa-solid fa-khanda mr-1.5 text-amber-500"></i>〈深淵之刃〉裝備與武器加工
                </h3>
                <ul class="list-disc list-inside space-y-1 text-zinc-300">
                  <li><strong>〈深淵之刃〉(アビスナイフ)：</strong>由〈深淵碎片〉加工製成、刀身與刃部施有魔法加工的小型發動體刀刃，視為 <strong>「用法：1H」</strong> 特定技能道具，價格 <strong class="text-amber-300">100 G</strong>。</li>
                  <li><strong>武器加工：</strong>凡具刀刃（具 〆 標記）的「用法：1H」或「用法：2H」武器皆可進行〈深淵之刃〉加工並視為〈深淵之刃〉，揮舞武器即可行使奈落魔法。</li>
                  <li><strong>加工例外：</strong><strong>生來武器</strong>無法進行〈深淵之刃〉加工。</li>
                </ul>
              </div>
            </div>
          </div>

          <!-- 3. 奈落魔法效果的擴張、手順與素材 -->
          <div class="bg-zinc-900 border border-zinc-800 rounded-xl p-5 space-y-4 text-xs text-zinc-300 leading-relaxed">
            <h3 class="text-base font-bold text-amber-400 border-b border-zinc-800 pb-2 flex items-center justify-between">
              <span><i class="fa-solid fa-wand-sparkles mr-2 text-amber-500"></i>奈落魔法「擴張效果」、手順與擴張素材</span>
              <span class="text-[11px] font-normal text-zinc-400">行使前宣告並追加消耗擴張素材，擴張次數無限制</span>
            </h3>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div class="bg-zinc-950 p-3.5 rounded-lg border border-zinc-800 space-y-1.5">
                <div class="font-bold text-cyan-300">● 擴張效果、擴張時間與同時使用</div>
                <p>於魔法原有效果之外別框記載的強化效果稱為<strong>「擴張效果」</strong>（依魔法而異，有多項時分為「擴張效果 1」「擴張效果 2」）；擴張次數無限制。</p>
                <p><strong>擴張時間：</strong>消耗 1 次即可在該效果時間內持續生效；標示「1 回」則僅限該次行使有效。若因《魔法擴大／數》或其他擴張使對象增加，所有對象一併適用且合計僅算<strong>擴張 1 次</strong>，不需追加素材。</p>
                <p><strong>同時使用：</strong>擁有多項擴張效果的魔法，可分別消耗各自對應的擴張素材同時套用。</p>
              </div>

              <div class="bg-zinc-950 p-3.5 rounded-lg border border-zinc-800 space-y-1.5">
                <div class="font-bold text-cyan-300">● 適用手順、素材消耗與自動失敗</div>
                <p><strong>手順：</strong>行使前先決定套用的擴張效果，在消耗 MP 的同時追加消耗指定數量的擴張素材（〈惡魔之血〉〈惡魔之血晶〉〈大惡魔之血晶〉或〈深淵碎片〉），隨後進行行使判定並發揮效果。</p>
                <p><strong>素材消耗與遺失：</strong>素材消耗種類與數量依各擴張效果而定；無論行使成敗，已消耗素材當場消失。若行使判定<strong>自動失敗（1,1）</strong>，魔法與所有擴張效果皆不生效，已消耗素材全部遺失。</p>
              </div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <div class="font-bold text-amber-400 mb-2">擴張素材價格與公會購買表</div>
                <p class="text-zinc-400 mb-2">主要自「分類：魔神」等魔物戰利品獲得；習得奈落使技能者可於冒險者公會購買血類素材，但<strong>〈深淵碎片〉為非賣品無法購買</strong>。</p>
                <table class="w-full text-center border-collapse border border-zinc-800 bg-zinc-950 font-mono">
                  <thead class="bg-zinc-900 text-amber-400 border-b border-zinc-800">
                    <tr>
                      <th class="p-2 border border-zinc-800 text-left">素材名稱</th>
                      <th class="p-2 border border-zinc-800">價格 (G)</th>
                    </tr>
                  </thead>
                  <tbody class="divide-y divide-zinc-800 text-zinc-300">
                    <tr><td class="p-2 border border-zinc-800 text-left font-sans text-zinc-200">〈惡魔之血〉</td><td class="p-2 border border-zinc-800 text-amber-300 font-bold">200 G</td></tr>
                    <tr class="bg-zinc-900/40"><td class="p-2 border border-zinc-800 text-left font-sans text-zinc-200">〈惡魔之血晶〉</td><td class="p-2 border border-zinc-800 text-amber-300 font-bold">1,600 G</td></tr>
                    <tr><td class="p-2 border border-zinc-800 text-left font-sans text-zinc-200">〈大惡魔之血晶〉</td><td class="p-2 border border-zinc-800 text-amber-300 font-bold">3,200 G</td></tr>
                    <tr class="bg-zinc-900/40"><td class="p-2 border border-zinc-800 text-left font-sans text-zinc-200">〈深淵碎片〉</td><td class="p-2 border border-zinc-800 text-zinc-500 font-sans">非賣品</td></tr>
                  </tbody>
                </table>
              </div>

              <div class="bg-zinc-950 p-3.5 rounded-lg border border-zinc-800 space-y-2">
                <div class="font-bold text-amber-400">● 擴張素材代用規則</div>
                <p>〈惡魔之血〉〈惡魔之血晶〉〈大惡魔之血晶〉之間，<strong>高價素材可代用低價素材</strong>：需要消耗 1 個〈惡魔之血〉的擴張效果，可改為消耗 1 個〈惡魔之血晶〉或 1 個〈大惡魔之血晶〉取得效果。</p>
                <p class="text-red-400"><strong>※ 不可代用：</strong>需消耗〈深淵碎片〉的擴張效果，無法以血類素材代用。</p>
              </div>
            </div>

            <div class="bg-amber-950/15 border border-amber-900/40 rounded-lg p-3.5 space-y-1.5">
              <div class="font-bold text-amber-400">
                <i class="fa-solid fa-lightbulb mr-1.5"></i>專欄：奈落魔法與擴張素材的運用建議
              </div>
              <p>奈落魔法透過消耗〈惡魔之血〉等戰利品提升威力、增加對象或改變行使時機，但<strong>不建議每次行使都套用擴張素材</strong>——若每發皆擴張，所需數量龐大、金錢負擔極重。</p>
              <p>建議平時使用無擴張、MP 消耗較低的奈落魔法，僅在關鍵時刻投入擴張素材追求高效果；若想增加使用擴張素材的機會，資金應優先投入素材而非裝備，並可搭配暗獵者技能的【大亂獲】等手段增加收入與戰利品取得數量。</p>
            </div>
          </div>
        </div>
      `,
    },
    {
      id: 'sec-rider_rules',
      title: '騎手 (Rider) 概要與規則 (表B)',
      icon: 'fa-solid fa-horse',
      content: `
        <div class="space-y-6 text-zinc-300">
          <div class="bg-zinc-900 border border-zinc-800 p-5 rounded-xl shadow-md">
            <div class="flex flex-wrap justify-between items-center gap-2 mb-3">
              <h2 class="text-xl font-bold text-amber-400 flex items-center">
                <i class="fa-solid fa-horse mr-2.5 text-amber-500"></i>騎手 (Rider) 概要與規則
              </h2>
              <div class="flex gap-2">
                <span class="text-xs bg-zinc-800 text-zinc-300 px-2.5 py-1 rounded border border-zinc-700 font-medium">其他系技能</span>
                <span class="text-xs bg-amber-950/80 text-amber-300 px-2.5 py-1 rounded border border-amber-800 font-bold">經驗表 B</span>
              </div>
            </div>
            <p class="text-xs text-zinc-300 leading-relaxed">
              可單手操縱騎獸（空手可使用武器/盾牌）、以輔助動作乘降、依照「冒險者等級」強化騎獸，且每提升 1 級可學習 1 招「騎藝」。可執行急救、受身、騎乘、弱點隱蔽、地圖製作與魔物知識判定（無法識破弱點）。
            </p>
          </div>
  
          <div class="bg-zinc-900 border border-zinc-800 p-5 rounded-xl space-y-4">
            <h3 class="text-base font-bold text-amber-400 border-b border-zinc-800 pb-2 flex items-center">
              <i class="fa-solid fa-person-falling mr-2 text-amber-500"></i>1. 騎乘行動、乘降與落馬規則
            </h3>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs leading-relaxed">
              <div class="bg-zinc-950 p-4 rounded-lg border border-zinc-800 space-y-1.5">
                <div class="font-bold text-amber-400 text-sm">【騎乘行動與武器限制】</div>
                <ul class="list-disc list-inside space-y-1 text-zinc-300">
                  <li>移動力完全以騎獸為主；騎乘者與騎獸共用回合、同座標且同步移動。</li>
                  <li>騎手與騎獸各自整套動作分開進行（不可交錯）。騎乘時<strong>無法使用〈格鬥〉武器</strong>。</li>
                  <li>無騎手技能者僅能騎乘［馬/戰馬/迷你魔動機車/魔動機車］，且必須雙手握住韁繩/操縱桿。</li>
                </ul>
              </div>
              <div class="bg-zinc-950 p-4 rounded-lg border border-zinc-800 space-y-1.5">
                <div class="font-bold text-amber-400 text-sm">【乘降與落馬墜落傷害】</div>
                <ul class="list-disc list-inside space-y-1 text-zinc-300">
                  <li>騎手以<strong>輔助動作</strong>乘降（非騎手為主動作），1 回合限 1 次乘或降。</li>
                  <li>騎獸跌倒時騎乘者落馬並承受墜落傷害（距離為當回合移動距離 1/5 無條件進位，最低 2m，可進行受身判定）。</li>
                  <li>複數部位騎獸每回合預設僅能擇一部位行動（需搭配【勢如破竹】等騎藝方可多部位動作）。</li>
                </ul>
              </div>
            </div>
          </div>
  
          <div class="bg-zinc-900 border border-zinc-800 p-5 rounded-xl space-y-4">
            <h3 class="text-base font-bold text-amber-400 border-b border-zinc-800 pb-2 flex items-center">
              <i class="fa-solid fa-file-contract mr-2 text-amber-500"></i>2. 騎獸租借、購買與維持費
            </h3>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs leading-relaxed">
              <div class="bg-zinc-950 p-4 rounded-lg border border-zinc-800 space-y-1.5">
                <div class="font-bold text-amber-400 text-sm">【租借與維持費】</div>
                <p>購買〈騎獸契約證〉後可無償多次租借該種騎獸。PC 用餐住宿時，騎獸每個部位皆須支付等額維持費（魔動機與雕像化免維持費）。跑團結束無法歸還或 HP ≤ 0 將獲得「不名譽稱號」。</p>
              </div>
              <div class="bg-zinc-950 p-4 rounded-lg border border-zinc-800 space-y-1.5">
                <div class="font-bold text-amber-400 text-sm">【購買專有騎獸特典】</div>
                <p>獲得〈騎獸專有證/機石〉，所有部位最大 HP +10、可裝備專有裝備與追加武裝、無歸還義務且死亡不扣不名譽；名譽點騎獸僅能購買獲得。</p>
              </div>
            </div>
          </div>
        </div>
      `,
    },
    {
      id: 'sec-enhancer_rules',
      title: '練體士與練技 (Enhancer) 概要與規則 (表B)',
      icon: 'fa-solid fa-person-running',
      content: `
        <div class="space-y-6 text-zinc-300">
          <div class="bg-zinc-900 border border-zinc-800 p-5 rounded-xl shadow-md">
            <div class="flex flex-wrap justify-between items-center gap-2 mb-3">
              <h2 class="text-xl font-bold text-amber-400 flex items-center">
                <i class="fa-solid fa-person-running mr-2.5 text-amber-500"></i>練體士與練技 (Enhancer) 概要與規則
              </h2>
              <div class="flex gap-2">
                <span class="text-xs bg-zinc-800 text-zinc-300 px-2.5 py-1 rounded border border-zinc-700 font-medium">其他系技能</span>
                <span class="text-xs bg-amber-950/80 text-amber-300 px-2.5 py-1 rounded border border-amber-800 font-bold">經驗表 B</span>
              </div>
            </div>
            <p class="text-xs text-zinc-300 leading-relaxed">
              透過瑪那（Mana）使肉體產生變容以在戰鬥中取得優勢的技能（每提升 1 級可習得 1 個「練技」）。本技能<strong class="text-red-400">無法進行行為判定</strong>，且<strong class="text-red-400">不會增加角色 MP</strong>。
            </p>
          </div>
  
          <div class="bg-zinc-900 border border-zinc-800 p-5 rounded-xl space-y-4">
            <h3 class="text-base font-bold text-amber-400 border-b border-zinc-800 pb-2 flex items-center">
              <i class="fa-solid fa-bolt mr-2 text-amber-500"></i>1. 使用條件、MP 消耗與機制
            </h3>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs leading-relaxed">
              <div class="bg-zinc-950 p-4 rounded-lg border border-zinc-800 space-y-1.5">
                <div class="font-bold text-amber-400 text-sm">【發動條件與限制】</div>
                <ul class="list-disc list-inside space-y-1 text-zinc-300">
                  <li><strong>移動與呼吸：</strong>僅限「限制移動」或「通常移動」手番使用（全力移動不可）。需能呼吸（不需發聲），對象僅限「練體士本人」。</li>
                  <li><strong>動作與次數：</strong>以<strong class="text-cyan-300">「輔助動作」</strong>發動（達成值 0，免判定）。1 回合內可使用任意次數不同練技，同名效果原則上不重複累積。</li>
                </ul>
              </div>
              <div class="bg-zinc-950 p-4 rounded-lg border border-zinc-800 space-y-1.5">
                <div class="font-bold text-amber-400 text-sm">【MP 消耗與解除手段】</div>
                <ul class="list-disc list-inside space-y-1 text-zinc-300">
                  <li><strong>MP 消耗：</strong>每次使用共通消耗 <strong class="text-cyan-300">3 MP</strong>，可使用〈魔晶石〉替代（一次限 1 顆）。</li>
                  <li><strong>非魔法特性：</strong>使用者可於自身手番以輔助動作主動解除。練技非魔法，不受《魔法擴大》或【魔法解除】影響，僅能被《破言》解除。</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      `,
    },
    {
      id: 'sec-battle_dancer_rules',
      title: '舞鬥士 (Battle Dancer) 概要與規則 (表A)',
      icon: 'fa-solid fa-shoe-prints',
      content: `
        <div class="space-y-6 text-zinc-300">
          <!-- 標題與技能概要 -->
          <div class="bg-zinc-900 border border-zinc-800 p-5 rounded-xl shadow-md">
            <div class="flex flex-wrap justify-between items-center gap-2 mb-3">
              <h2 class="text-xl font-bold text-amber-400 flex items-center">
                <i class="fa-solid fa-shoe-prints mr-2.5 text-amber-500"></i>舞鬥士 (Battle Dancer) 概要與規則
              </h2>
              <div class="flex gap-2">
                <span class="text-xs bg-zinc-800 text-zinc-300 px-2.5 py-1 rounded border border-zinc-700 font-medium">戰士系技能</span>
                <span class="text-xs bg-amber-950/80 text-amber-300 px-2.5 py-1 rounded border border-amber-800 font-bold">經驗表 A</span>
                <span class="text-xs bg-emerald-950/80 text-emerald-300 px-2.5 py-1 rounded border border-emerald-800 font-medium">全種族可習得</span>
              </div>
            </div>
            <p class="text-xs text-zinc-300 leading-relaxed mb-3">
              以輕盈如舞蹈般的動作翻弄敵人並為自身創造有利戰況的戰士系技能。可穿戴武具進行近接攻擊與投擲攻擊，所有 PC 種族皆可習得並使用。
            </p>
            <div class="bg-zinc-950/80 border border-zinc-800/80 rounded-lg px-3.5 py-2.5 text-xs flex flex-wrap items-center gap-x-4 gap-y-1">
              <span class="font-bold text-amber-400">可用行為判定：</span>
              <span>● 命中力判定（⇒『Ⅰ』110 頁）</span>
              <span>● 迴避力判定（⇒『Ⅰ』112 頁）</span>
            </div>
          </div>

          <!-- 1. 傷害計算、裝備限制與咒歌免疫 -->
          <div class="bg-zinc-900 border border-zinc-800 p-5 rounded-xl space-y-4">
            <h3 class="text-base font-bold text-amber-400 border-b border-zinc-800 pb-2 flex items-center">
              <i class="fa-solid fa-bullseye mr-2 text-amber-500"></i>1. 傷害計算、裝備限制、咒歌免疫與專用飾品
            </h3>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs leading-relaxed">
              <div class="bg-zinc-950 p-4 rounded-lg border border-zinc-800 space-y-2">
                <div class="font-bold text-amber-400 text-sm">【追加傷害、咒歌免疫與專用飾品】</div>
                <ul class="list-disc list-inside space-y-1.5 text-zinc-300">
                  <li><strong>物理追加傷害：</strong>以舞鬥士技能進行命中力判定時，決定物理傷害可計入<strong>「舞鬥士技能等級 ＋ 筋力加值」</strong>。</li>
                  <li><strong>咒歌【舞蹈】無效化：</strong>以舞鬥士技能進行命中力・迴避力判定時，不受咒歌【舞蹈】（⇒『Ⅲ』190 頁、『MA』164 頁）的懲罰修正影響。</li>
                  <li><strong>專用飾品：</strong>存在僅對習得 3 級以上舞鬥士技能的角色生效的飾品<strong>〈蕾絲束腹〉（〈レースアップコルセット〉）</strong>（⇒84 頁）。</li>
                </ul>
              </div>
              <div class="bg-zinc-950 p-4 rounded-lg border border-zinc-800 space-y-2">
                <div class="font-bold text-amber-400 text-sm">【武器與防具限制】</div>
                <ul class="list-disc list-inside space-y-1.5 text-zinc-300">
                  <li><strong>武器：</strong>滿足必要筋力與等級即可使用大多數近接武器、投擲武器與「拳鬥士專用」武器（必要筋力上限內皆可）；<strong>所有射擊武器皆無法使用</strong>。</li>
                  <li><strong>防具：</strong>僅能使用標示為<strong>「拳鬥士專用」</strong>或<strong>「拳鬥士可裝備」</strong>的防具，且<strong>完全無法使用盾牌</strong>。</li>
                </ul>
              </div>
            </div>
          </div>

          <!-- 2. 戰鬥特技與「追加宣言特技格」 -->
          <div class="bg-zinc-900 border border-zinc-800 p-5 rounded-xl space-y-4">
            <h3 class="text-base font-bold text-amber-400 border-b border-zinc-800 pb-2 flex items-center">
              <i class="fa-solid fa-crown mr-2 text-amber-500"></i>2. 戰鬥特技、追加宣言特技格與自動習得
            </h3>
            <div class="bg-zinc-950 p-4 rounded-lg border border-zinc-800 space-y-3 text-xs leading-relaxed">
              <p>
                舞鬥士可習得部分其他戰士系技能可習得的戰鬥特技（可習得等級與取代等級準照既有戰士系技能；未指定其他技能的特技則與其他戰士系技能相同可習得）。此外，<strong>1 級</strong>時可獲得 <strong>1 個追加宣言特技格</strong>，並在 <strong>7 級</strong>、<strong>13 級</strong>分別自動習得特技。
              </p>

              <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div class="p-3 bg-zinc-900 border border-zinc-800 rounded">
                  <strong class="text-amber-400">7 級自動習得：</strong><span class="text-cyan-300 font-bold">《舞流》（《舞い流し》）</span><span class="text-zinc-400">（⇒35 頁）</span>
                </div>
                <div class="p-3 bg-zinc-900 border border-zinc-800 rounded">
                  <strong class="text-amber-400">13 級自動習得：</strong><span class="text-cyan-300 font-bold">《戰鬥大師》（《バトルマスター》）</span><span class="text-zinc-400">（⇒35 頁）</span>
                </div>
              </div>

              <div class="border-t border-zinc-800 pt-3 space-y-1.5">
                <div class="font-bold text-amber-400">【追加宣言特技格規則】</div>
                <ul class="list-disc list-inside space-y-1 text-zinc-300">
                  <li><strong>使用限制：</strong>此格習得的宣言特技，<strong>僅限以舞鬥士技能進行命中力判定或迴避力判定時才能宣言</strong>，且不可保留不習得。</li>
                  <li><strong>取代規則：</strong>若為取代戰鬥特技，於冒險者等級達奇數級且符合取代等級時自動取代；參照戰士系技能等級者可參照舞鬥士技能（參照冒險者等級者仍參照冒險者等級）。</li>
                  <li><strong>可選特技（共 11 項）：</strong>《圍攻Ⅰ》（26 頁）、《斬返Ⅰ》（28 頁）、《牽制攻擊Ⅰ》（28 頁）、《全力攻擊Ⅰ》（28 頁，<strong>不可取代為《全力攻擊Ⅲ》</strong>）、《挑發攻擊Ⅰ》（29 頁）、《必殺攻擊Ⅰ》（30 頁）、《魔力擊》（31 頁），以及流浪者（ヴァグランツ）專用的《暗影步Ⅰ》（32 頁）、《捨身攻擊Ⅰ》（32 頁）、《除霧》（33 頁）、《亂擊Ⅰ》（33 頁）。</li>
                </ul>
              </div>
            </div>

            <!-- 舞鬥士可習得的戰鬥特技一覽表 -->
            <div class="overflow-x-auto">
              <table class="w-full text-xs text-left border-collapse border border-zinc-800">
                <thead>
                  <tr class="bg-zinc-950 text-amber-400 border-b border-zinc-800">
                    <th class="p-2.5 border-r border-zinc-800 w-28">分類</th>
                    <th class="p-2.5 border-r border-zinc-800">名稱</th>
                    <th class="p-2.5 border-r border-zinc-800 w-20 text-center">參照頁</th>
                    <th class="p-2.5">備註</th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-zinc-800 bg-zinc-950/40 text-[11px]">
                  <tr>
                    <td class="p-2 border-r border-zinc-800 font-bold text-zinc-200">常時特技</td>
                    <td class="p-2 border-r border-zinc-800">《迴避行動Ⅱ》《頑強》《變幻自在Ⅰ／Ⅱ》《戰鬥大師》（《バトルマスター》）</td>
                    <td class="p-2 border-r border-zinc-800 text-center">23 / 23 / 25 / 35</td>
                    <td class="p-2">《頑強》不可《超頑強》；《戰鬥大師》於舞鬥士 13 級自動習得</td>
                  </tr>
                  <tr>
                    <td class="p-2 border-r border-zinc-800 font-bold text-zinc-200">宣言特技</td>
                    <td class="p-2 border-r border-zinc-800">《斬返Ⅰ／Ⅱ》《全力攻擊Ⅰ／Ⅱ》《挑發攻擊Ⅰ／Ⅱ》《格擋Ⅰ／Ⅱ》（《薙ぎ払いⅠ／Ⅱ》）《必殺攻擊Ⅰ／Ⅱ／Ⅲ》《折牙》（《牙折り》）</td>
                    <td class="p-2 border-r border-zinc-800 text-center">28 / 28 / 29 / 29 / 30 / 27</td>
                    <td class="p-2">《全力攻擊Ⅰ／Ⅱ》不可取代為《全力攻擊Ⅲ》</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <!-- 3. 培育與流派方向參考 -->
          <div class="bg-zinc-900 border border-zinc-800 p-5 rounded-xl space-y-3">
            <h3 class="text-base font-bold text-amber-400 border-b border-zinc-800 pb-2 flex items-center">
              <i class="fa-solid fa-compass-drafting mr-2 text-amber-500"></i>3. 常見培育方向參考
            </h3>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs leading-relaxed">
              <div class="bg-zinc-950 p-3.5 rounded-lg border border-zinc-800 space-y-1.5">
                <div class="font-bold text-amber-400">① 攻擊力重視型</div>
                <p class="text-zinc-300">習得《武器習熟A／＊＊》搭配 2H 強力武器，並以追加特技格補《斬返Ⅰ》《牽制攻擊Ⅰ》《挑發攻擊Ⅰ》等不扣迴避的特技，適合高筋力種族。</p>
              </div>
              <div class="bg-zinc-950 p-3.5 rounded-lg border border-zinc-800 space-y-1.5">
                <div class="font-bold text-amber-400">② 出手數重視型</div>
                <p class="text-zinc-300">習得《雙武器》（《両手利き》）增加攻擊次數，並以《牽制攻擊Ⅰ》或《圍攻Ⅰ》彌補雙手攻擊的命中懲罰，適合高器用、筋力較低的種族。</p>
              </div>
              <div class="bg-zinc-950 p-3.5 rounded-lg border border-zinc-800 space-y-1.5">
                <div class="font-bold text-amber-400">③ 迴避力重視型</div>
                <p class="text-zinc-300">習得《防具習熟A／非金屬》或搭配《挑發攻擊Ⅰ》拉怪閃避；流浪者可用《暗影步Ⅰ》，成長後可結合流派秘傳（38 頁）或〈刀刃裙〉（〈ブレードスカート〉）反擊；亦適合與魔法使系技能混搭《魔力擊》（但追加特技格無法選《魔法擴大／＊＊》）。</p>
              </div>
            </div>
          </div>
        </div>
      `,
    },
    {
      id: 'sec-advanced_combat_rules',
      title: '上級戰鬥規則 (Advanced Combat)',
      icon: 'fa-solid fa-swords',
      content: `
        <div class="space-y-6 text-zinc-300">
          <!-- 標題區塊 -->
          <div class="bg-zinc-900 border border-zinc-800 p-5 rounded-xl shadow-md">
            <div class="flex flex-wrap justify-between items-center gap-2 mb-3">
              <h2 class="text-xl font-bold text-amber-400 flex items-center">
                <i class="fa-solid fa-swords mr-2.5 text-amber-500"></i>SW2.5 上級戰鬥規則 (Advanced Combat)
              </h2>
              <span class="text-xs bg-amber-950/80 text-amber-300 px-2.5 py-1 rounded border border-amber-800 font-bold">戰鬥系統完整規則</span>
            </div>
            <p class="text-xs text-zinc-400 leading-relaxed">
              以 <strong>1m（整數米）</strong>為單位在「一維假想直線」上精確管理戰場座標、角色相對距離、多重動態亂戰區域、移動妨害、射程遮蔽與貫通／突破判定。
            </p>
          </div>

          <!-- 1. 戰場座標與位置管理原則 -->
          <div class="bg-zinc-900 border border-zinc-800 p-5 rounded-xl space-y-4">
            <h3 class="text-base font-bold text-amber-400 border-b border-zinc-800 pb-2 flex items-center">
              <i class="fa-solid fa-ruler-horizontal mr-2 text-amber-500"></i>1. 戰場座標與位置管理原則
            </h3>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs leading-relaxed">
              <div class="bg-zinc-950 p-4 rounded-lg border border-zinc-800 space-y-2.5">
                <div class="font-bold text-amber-400 text-sm">【一維直線與整數米座標】</div>
                <ul class="list-disc list-inside space-y-1.5 text-zinc-300">
                  <li><strong>一維直線管理：</strong>戰場上假想一條連接敵我雙方的直線，所有角色皆以此直線上的座標管理位置，不處理未滿 1m 的小數單位（禁止停在有小數點的位置）。</li>
                  <li><strong>靈活的亂戰區域：</strong>與「基本戰鬥」僅有單一亂戰區不同，上級戰鬥允許突破前線切入敵方後衛，戰場上可<strong>同時存在多個亂戰區域</strong>。</li>
                  <li><strong>同一座標重疊：</strong>多名角色（無論敵我）可同時存在於同一座標。「座標相同」代表處於無法區分的極近距離，可進行近戰攻擊及施加「射程：接觸」的魔法或效果。</li>
                </ul>
              </div>
              <div class="bg-zinc-950 p-4 rounded-lg border border-zinc-800 space-y-2.5">
                <div class="font-bold text-cyan-300 text-sm">【GM 裁定指南：相對距離與座標上限】</div>
                <ul class="list-disc list-inside space-y-1.5 text-zinc-300">
                  <li><strong>重視相對距離：</strong>核心在於掌握角色彼此相距幾公尺。GM 可設定多個基準點或依戰況調整（例：「A 與 B 相距 3m，C 再往後 5m，故 AC 相距 8m」），無須執著於嚴格比例尺。</li>
                  <li><strong>座標限制（地形邊界）：</strong>GM 可依戰場地形限制可移動或作為魔法起點的座標範圍（例：在房間最深處遭遇魔物時，魔物後方不存在更深的座標）。</li>
                </ul>
                <div class="mt-2 p-2.5 bg-zinc-900/90 rounded border border-zinc-800 font-mono text-[11px] text-zinc-300 text-center">
                  [白1] ←─ 5m ─→ [白2] ←─ 5m ─→ [黑1] ←─── 15m ───→ [黑2 + 黑3 (同座標)]
                </div>
              </div>
            </div>
          </div>

          <!-- 2. 戰鬥手順與初期配置距離 -->
          <div class="bg-zinc-900 border border-zinc-800 p-5 rounded-xl space-y-4">
            <h3 class="text-base font-bold text-amber-400 border-b border-zinc-800 pb-2 flex items-center">
              <i class="fa-solid fa-list-ol mr-2 text-amber-500"></i>2. 戰鬥流程與戰力初期配置
            </h3>
            <div class="grid grid-cols-1 lg:grid-cols-12 gap-4 text-xs leading-relaxed">
              <div class="lg:col-span-5 bg-zinc-950 p-4 rounded-lg border border-zinc-800 space-y-2">
                <div class="font-bold text-amber-400 text-sm">【戰鬥手順（與基本戰鬥相同）】</div>
                <ol class="list-decimal list-inside space-y-1 text-zinc-300">
                  <li><strong>戰鬥開始處理：</strong>1.1 陣營確認 → 1.2 戰鬥準備 → 1.3 魔物知識判定 → 1.4 先制判定 → 1.5 戰力初期配置。</li>
                  <li><strong>先攻側順次行動：</strong>依序執行（移動 → 主動作，補助動作原則於手番內任意時機執行）。</li>
                  <li><strong>後攻側順次行動：</strong>同上，一人行動完畢才換下一位，不可穿插他人行動。</li>
                  <li><strong>戰鬥繼續／結束確認：</strong>若繼續則回到步驟 2 進入下一輪。</li>
                  <li><strong>戰鬥後處理：</strong>戰利品獲得等結算。</li>
                </ol>
              </div>
              <div class="lg:col-span-7 bg-zinc-950 p-4 rounded-lg border border-zinc-800 space-y-2">
                <div class="font-bold text-amber-400 text-sm">【1.5 初期配置與戰鬥開始距離目安】</div>
                <p class="text-zinc-300">
                  無特殊狀況時，雙方最前線（先頭）距離於 <strong>5m ～ 30m</strong> 間決定；其餘角色置於同座標或更後方。有編組隊列時列間約 <strong>1～2m</strong>，未編隊的後衛型角色建議置於先頭後方 <strong>3～5m</strong>。
                </p>
                <table class="w-full text-left border-collapse border border-zinc-800 mt-2">
                  <thead class="bg-zinc-900 text-amber-400">
                    <tr>
                      <th class="p-2 border border-zinc-800">遭遇狀況</th>
                      <th class="p-2 border border-zinc-800 text-right">建議距離目安</th>
                    </tr>
                  </thead>
                  <tbody class="divide-y divide-zinc-800">
                    <tr><td class="p-1.5 px-2 border border-zinc-800">狹窄房間內的遭遇</td><td class="p-1.5 px-2 border border-zinc-800 text-right font-mono text-cyan-300 font-bold">5 m</td></tr>
                    <tr><td class="p-1.5 px-2 border border-zinc-800">較寬敞房間內的遭遇</td><td class="p-1.5 px-2 border border-zinc-800 text-right font-mono text-cyan-300 font-bold">10 m</td></tr>
                    <tr><td class="p-1.5 px-2 border border-zinc-800">森林中、惡劣天候等視線不良的戶外遭遇</td><td class="p-1.5 px-2 border border-zinc-800 text-right font-mono text-cyan-300 font-bold">10 m</td></tr>
                    <tr><td class="p-1.5 px-2 border border-zinc-800">視野良好的戶外遭遇</td><td class="p-1.5 px-2 border border-zinc-800 text-right font-mono text-cyan-300 font-bold">20 m</td></tr>
                    <tr><td class="p-1.5 px-2 border border-zinc-800">騎馬等移動狀態下遭遇</td><td class="p-1.5 px-2 border border-zinc-800 text-right font-mono text-emerald-300 font-bold">+10 ～ 20 m</td></tr>
                    <tr><td class="p-1.5 px-2 border border-zinc-800">遭遇敵方包含「多部位魔物」</td><td class="p-1.5 px-2 border border-zinc-800 text-right font-mono text-emerald-300 font-bold">+5 ～ 10 m</td></tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <!-- 3. 移動力、移動種類與無法移動的處理 -->
          <div class="bg-zinc-900 border border-zinc-800 p-5 rounded-xl space-y-4">
            <h3 class="text-base font-bold text-amber-400 border-b border-zinc-800 pb-2 flex items-center">
              <i class="fa-solid fa-person-boot mr-2 text-amber-500"></i>3. 移動力、移動種類與距離限制
            </h3>
            <p class="text-xs text-zinc-300 leading-relaxed">
              上級戰鬥中，角色的<strong>「移動力」原則上等於敏捷度</strong>（隨魔法、裝備加減；魔物資料中的「移動速度」即為移動力）。手番由「移動、主動作、補助動作」構成，移動後才執行主動作。
            </p>
            <div class="overflow-x-auto">
              <table class="w-full text-xs text-left text-zinc-300 border-collapse border border-zinc-800">
                <thead class="bg-zinc-950 text-amber-400 font-bold border-b border-zinc-800">
                  <tr>
                    <th class="p-2.5 border border-zinc-800">移動類別</th>
                    <th class="p-2.5 border border-zinc-800">可移動距離</th>
                    <th class="p-2.5 border border-zinc-800">動作限制 / 修正</th>
                    <th class="p-2.5 border border-zinc-800">適用情況與說明</th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-zinc-800">
                  <tr>
                    <td class="p-2.5 border border-zinc-800 font-bold text-emerald-400">制限移動</td>
                    <td class="p-2.5 border border-zinc-800 text-cyan-300 font-mono">固定 3 m</td>
                    <td class="p-2.5 border border-zinc-800">可執行 主動作 + 補助動作</td>
                    <td class="p-2.5 border border-zinc-800">若移動力未滿 3m 則降至移動力上限。不可被移動妨害。</td>
                  </tr>
                  <tr class="bg-zinc-950/40">
                    <td class="p-2.5 border border-zinc-800 font-bold text-amber-400">通常移動</td>
                    <td class="p-2.5 border border-zinc-800 text-cyan-300 font-mono">移動力 (m)</td>
                    <td class="p-2.5 border border-zinc-800">可執行 主動作 + 補助動作</td>
                    <td class="p-2.5 border border-zinc-800">移動途中可能遭受敵方或亂戰區移動妨害。移動中途可執行補助動作。</td>
                  </tr>
                  <tr>
                    <td class="p-2.5 border border-zinc-800 font-bold text-pink-400">全力移動</td>
                    <td class="p-2.5 border border-zinc-800 text-cyan-300 font-mono">移動力 × 3 (m)</td>
                    <td class="p-2.5 border border-zinc-800 text-pink-300">迴避力判定 <strong>-4</strong>，不可執行主動作</td>
                    <td class="p-2.5 border border-zinc-800">高速長距離奔跑（仍可能受移動妨害）。僅可於移動前後執行補助動作。</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="bg-zinc-950/80 border border-amber-500/30 rounded-lg p-3 text-xs text-zinc-300">
              <strong class="text-amber-400"><i class="fa-solid fa-ban mr-1.5"></i>無法移動的情況（亂戰中／定身效果）：</strong>
              角色在<strong>亂戰狀態下原則上無法移動</strong>，或因魔法、特殊能力被禁止移動。此時該角色視為不移動，<strong>仍可執行「制限移動」下允許的主動作與補助動作</strong>。
            </div>
          </div>

          <!-- 4. 亂戰區域的發生、範圍與半徑表 -->
          <div class="bg-zinc-900 border border-zinc-800 p-5 rounded-xl space-y-4">
            <h3 class="text-base font-bold text-amber-400 border-b border-zinc-800 pb-2 flex items-center">
              <i class="fa-solid fa-users-rays mr-2 text-amber-500"></i>4. 亂戰區域的發生與範圍對照表
            </h3>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs leading-relaxed">
              <div class="bg-zinc-950 p-4 rounded-lg border border-zinc-800 space-y-2">
                <div class="font-bold text-amber-400 text-sm">【亂戰區域的發生與中心點】</div>
                <ul class="list-disc list-inside space-y-1.5 text-zinc-300">
                  <li><strong>自動發生：</strong>敵對雙方處於<strong>同一座標</strong>，其中一方對另一方進行攻擊、行使魔法或使用特殊能力時，雙方立即進入「亂戰狀態」，該座標成為<strong>中心點</strong>並自動產生亂戰區域（若任一方已在亂戰中則不新建，依參加／干涉規則處理）。</li>
                  <li><strong>範圍判定：</strong>依參加亂戰的<strong>「亂戰狀態」總人數（含部位數）</strong>決定前後對稱延伸距離；<strong>剛好位於邊界距離（如 3m 處）的座標視為在亂戰區域內</strong>。</li>
                  <li><strong>多部位與人數上限：</strong>多部位魔物依部位數計入人數（2 部位算 2 人）。<strong>單一亂戰區域上限為 20 人（部位）</strong>，GM 需調整戰場避免超限。</li>
                </ul>
              </div>
              <div class="bg-zinc-950 p-4 rounded-lg border border-zinc-800 space-y-2">
                <div class="font-bold text-amber-400 text-sm">【亂戰半徑對照表 (上限 20 人/部位)】</div>
                <table class="w-full text-center border-collapse border border-zinc-800 font-mono">
                  <thead class="bg-zinc-900 text-amber-400">
                    <tr><th class="p-1.5 border border-zinc-800">亂戰狀態人數 (含部位)</th><th class="p-1.5 border border-zinc-800">前後半徑</th></tr>
                  </thead>
                  <tbody class="divide-y divide-zinc-800">
                    <tr><td class="p-1.5 border border-zinc-800">2 ～ 5 人</td><td class="p-1.5 border border-zinc-800 text-emerald-400 font-bold">前後 3 m</td></tr>
                    <tr><td class="p-1.5 border border-zinc-800">6 ～ 10 人</td><td class="p-1.5 border border-zinc-800 text-emerald-400 font-bold">前後 4 m</td></tr>
                    <tr><td class="p-1.5 border border-zinc-800">11 ～ 15 人</td><td class="p-1.5 border border-zinc-800 text-emerald-400 font-bold">前後 5 m</td></tr>
                    <tr><td class="p-1.5 border border-zinc-800">16 ～ 20 人</td><td class="p-1.5 border border-zinc-800 text-emerald-400 font-bold">前後 6 m</td></tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <!-- 5. 亂戰狀態 vs 獨立狀態、參加與脫離 -->
          <div class="bg-zinc-900 border border-zinc-800 p-5 rounded-xl space-y-4">
            <h3 class="text-base font-bold text-amber-400 border-b border-zinc-800 pb-2 flex items-center">
              <i class="fa-solid fa-arrows-left-right-to-line mr-2 text-amber-500"></i>5. 亂戰狀態 vs 獨立狀態、參加與脫離
            </h3>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs leading-relaxed">
              <div class="bg-zinc-950 p-4 rounded-lg border border-zinc-800 space-y-2">
                <div class="font-bold text-emerald-400 text-sm">【亂戰狀態（已捲入交戰）】</div>
                <ul class="list-disc list-inside space-y-1.5 text-zinc-300">
                  <li><strong>座標統一：</strong>所有「亂戰狀態」角色的座標<strong>一律視為該亂戰區域的中心點</strong>。</li>
                  <li><strong>可干涉對象：</strong>可對同一亂戰區域內的任何角色（包含亂戰狀態與獨立狀態）進行近戰攻擊或施加「射程：接觸」的魔法／效果，無須在意原本座標差。</li>
                  <li><strong>如何參加亂戰：</strong>移動至既有的<strong>「亂戰區域中心點」</strong>並表明參加意思，即自動加入成為亂戰狀態。</li>
                </ul>
              </div>
              <div class="bg-zinc-950 p-4 rounded-lg border border-zinc-800 space-y-2">
                <div class="font-bold text-sky-400 text-sm">【獨立狀態（在範圍內但尚未捲入）】</div>
                <ul class="list-disc list-inside space-y-1.5 text-zinc-300">
                  <li><strong>保留固有座標：</strong>身處亂戰區域範圍內（例如因附近爆發亂戰或範圍擴大被捲入），但尚未處於亂戰狀態的角色稱為「獨立狀態」，<strong>仍保留各自的固有座標</strong>（即使與中心點同座標亦同）。</li>
                  <li><strong>不計入範圍人數：</strong>獨立狀態角色<strong>不計入</strong>亂戰區域半徑的人數計算。</li>
                  <li><strong>轉為亂戰狀態（僅限可依自身意志行動者）：</strong><br>
                    ① 獨立狀態下輪到<strong>自己的手番開始時</strong>，自動轉為亂戰狀態。<br>
                    ② 受到<strong>敵對亂戰狀態角色干涉</strong>（近戰／接觸效果）時，自動轉為亂戰狀態。<br>
                    <span class="text-zinc-400">※ 轉為亂戰狀態的瞬間，座標立即移動至亂戰中心點；若處於氣絕／睡眠等無法依自身意志行動狀態，則維持獨立狀態且座標不變。</span>
                  </li>
                  <li><strong>亂戰 → 獨立：</strong>戰鬥中因氣絕、睡眠等失去自主行動能力時，從亂戰狀態轉為獨立狀態（座標留在中心點）。</li>
                </ul>
              </div>
            </div>
            <div class="bg-zinc-950/90 border border-emerald-500/30 rounded-lg p-3.5 text-xs text-zinc-300 space-y-1">
              <div class="font-bold text-emerald-400"><i class="fa-solid fa-person-running mr-1.5"></i>從亂戰區域脫離的 2 種條件</div>
              <p>亂戰狀態角色原則上不可移動（否則會在移動開始時被亂戰區移動妨害截停），但符合以下任一條件即可不受妨害移動脫離：</p>
              <ol class="list-decimal list-inside space-y-1">
                <li><strong>已執行脫離準備：</strong>上一個自身手番已宣告並完成「從亂戰區域脫離準備」，本回合可用任意移動方式移動脫離。</li>
                <li><strong>人數壓倒性優勢（超過 2 倍）：</strong>亂戰內<strong>「自身以外」的我方亂戰狀態人數</strong>，<strong>嚴格大於</strong>敵對陣營在該亂戰區域內總人數（亂戰＋獨立皆計）的 <strong>2 倍</strong>時，可直接移動脫離。</li>
              </ol>
            </div>
          </div>

          <!-- 6. 亂戰區域的動態變化（擴大、縮小、結合、消滅） -->
          <div class="bg-zinc-900 border border-zinc-800 p-5 rounded-xl space-y-4">
            <h3 class="text-base font-bold text-amber-400 border-b border-zinc-800 pb-2 flex items-center">
              <i class="fa-solid fa-arrows-to-circle mr-2 text-amber-500"></i>6. 亂戰區域的變化（擴大、縮小、結合與消滅）
            </h3>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs leading-relaxed">
              <div class="bg-zinc-950 p-4 rounded-lg border border-zinc-800 space-y-2">
                <div class="font-bold text-amber-400 text-sm">【擴大與縮小（結算時機是關鍵）】</div>
                <ul class="list-disc list-inside space-y-1.5 text-zinc-300">
                  <li><strong>擴大與縮小：</strong>當亂戰狀態人數增減（新角色參加、獨立狀態被干涉加入、脫離或被擊倒）導致跨越人數門檻時，前後半徑隨之擴大或縮小。</li>
                  <li><strong>結算時機：</strong>範圍的擴大或縮小，一律在<strong>移動或動作產生結果「之後」</strong>才進行判定。</li>
                </ul>
                <div class="p-2.5 bg-zinc-900 rounded border border-zinc-800 text-[11px] text-zinc-300 space-y-1">
                  <div class="font-bold text-cyan-300">📖 規則書範例（5人亂戰半徑 3m，敵人 B 在 4m 處）：</div>
                  <p>角色 D 移動至中心點表明參加亂戰，<strong>此時尚未擴大</strong>（D 還打不到 4m 外的 B）。D 攻擊亂戰內原目標後，人數變為 6 人、範圍擴大為 4m，B 進入範圍成為獨立狀態；若 D 習得《雙擊》，第 2 擊便可攻擊 B（但若第 1 擊就擊倒原目標使人數維持 5 人，則不擴大）。</p>
                </div>
              </div>
              <div class="bg-zinc-950 p-4 rounded-lg border border-zinc-800 space-y-2">
                <div class="font-bold text-pink-400 text-sm">【亂戰區域的結合與消滅】</div>
                <ul class="list-disc list-inside space-y-1.5 text-zinc-300">
                  <li><strong>結合條件：</strong>當某個亂戰區域的<strong>「中心點」被包含進另一個亂戰區域範圍內</strong>時，兩個亂戰合併為一（<strong>僅外圍範圍重疊不會結合</strong>）。結合發生於亂戰「發生」或「擴大」之後緊接著處理。</li>
                  <li><strong>結合後的新中心點：</strong>取結合前兩中心點的<strong>中點</strong>；若非整數米，則向<strong>原本亂戰人數較多的一方偏移 0.5m</strong>（人數相同由 GM 決定）。原兩邊的亂戰狀態角色全數移至新中心點，並依總人數重新計算範圍。</li>
                  <li><strong>消滅條件：</strong>亂戰需有敵對雙方才能成立。當任一方陣營的所有角色皆被擊倒、氣絕等失去自主行動能力時，該亂戰區域立即消滅。</li>
                </ul>
              </div>
            </div>
          </div>

          <!-- 7. 移動妨害完整規則 -->
          <div class="bg-zinc-900 border border-zinc-800 p-5 rounded-xl space-y-4">
            <h3 class="text-base font-bold text-amber-400 border-b border-zinc-800 pb-2 flex items-center">
              <i class="fa-solid fa-hand mr-2 text-amber-500"></i>7. 移動妨害（亂戰外截停、多部位比例與通過／離脫比較）
            </h3>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs leading-relaxed">
              <div class="bg-zinc-950 p-4 rounded-lg border border-zinc-800 space-y-2">
                <div class="font-bold text-amber-400 text-sm">【A. 亂戰區域外的角色進行移動妨害】</div>
                <ul class="list-disc list-inside space-y-1.5 text-zinc-300">
                  <li><strong>觸發條件：</strong>手番角色宣告移動種別與目標座標後，若其移動路徑（<strong>包含移動起點</strong>）的任一點落入敵對角色（亂戰外）的<strong>制限移動距離內（通常前後 3m）</strong>，該敵人即可宣告進行移動妨害。</li>
                  <li><strong>截停座標與限制：</strong>妨害者於「手番角色移動路徑上」且「自身制限移動範圍內」指定一點，<strong>雙方皆移動至該座標</strong>並結束手番角色的移動（不可指定亂戰區域內的座標為妨害點）。</li>
                  <li><strong>多部位比例限制（2:1 以內）：</strong>角色無法單獨妨害<strong>超過自身部位數 2 倍</strong>的角色（剛好 2 倍可妨害；故 1 部位無法單獨攔下 3 部位以上魔物）。多名角色可<strong>共同妨害</strong>（全員皆須能以制限移動抵達該截停座標），只要合計部位數達到對方一半以上（2:1 以內）即可成立。</li>
                  <li><strong>自動形成亂戰：</strong>被移動妨害後，即使手番角色未執行任何攻擊動作，<strong>手番結束時該座標也會自動形成亂戰區域</strong>，雙方進入亂戰狀態（若妨害者處於「透明」狀態，則無須等手番結束，<strong>立即</strong>形成亂戰）。</li>
                </ul>
              </div>

              <div class="bg-zinc-950 p-4 rounded-lg border border-zinc-800 space-y-2">
                <div class="font-bold text-cyan-300 text-sm">【B. 亂戰區域的移動妨害（通過 vs 離脫）】</div>
                <ul class="list-disc list-inside space-y-1.5 text-zinc-300">
                  <li><strong>截停結果：</strong>亂戰內角色可妨害試圖通過該亂戰的敵人；一旦成立，移動者<strong>強制移至亂戰中心點並轉為亂戰狀態</strong>。</li>
                  <li><strong>獨立狀態與內外限制：</strong>妨害側可由亂戰內「亂戰＋獨立」角色共同參與（參與妨害的獨立狀態角色立即轉為亂戰狀態並移至中心點）。<strong>亂戰外與亂戰內角色不可共同妨害</strong>。</li>
                  <li><strong>人數（部位數）2 倍比較：</strong>當<strong>移動側計入人數 ＞ 妨害側計入人數 × 2</strong> 時，無法妨害。注意「通過（從區外穿過）」與「離脫（從區內離開）」是否計入移動者自身不同：</li>
                </ul>
                <table class="w-full text-center border-collapse border border-zinc-800 mt-1.5 text-[11px]">
                  <thead class="bg-zinc-900 text-amber-400">
                    <tr>
                      <th class="p-1.5 border border-zinc-800" rowspan="2">移動類型</th>
                      <th class="p-1.5 border border-zinc-800" colspan="3">移動側計入</th>
                      <th class="p-1.5 border border-zinc-800" colspan="2">妨害側計入</th>
                    </tr>
                    <tr>
                      <th class="p-1 border border-zinc-800">自身</th>
                      <th class="p-1 border border-zinc-800">亂戰狀態</th>
                      <th class="p-1 border border-zinc-800">獨立狀態</th>
                      <th class="p-1 border border-zinc-800">亂戰狀態</th>
                      <th class="p-1 border border-zinc-800">獨立狀態</th>
                    </tr>
                  </thead>
                  <tbody class="divide-y divide-zinc-800">
                    <tr>
                      <td class="p-1.5 border border-zinc-800 font-bold text-amber-300">通過（穿過亂戰）</td>
                      <td class="p-1.5 border border-zinc-800 text-emerald-400 font-bold">○</td>
                      <td class="p-1.5 border border-zinc-800 text-emerald-400 font-bold">○</td>
                      <td class="p-1.5 border border-zinc-800 text-zinc-500">×</td>
                      <td class="p-1.5 border border-zinc-800 text-emerald-400 font-bold">○</td>
                      <td class="p-1.5 border border-zinc-800 text-emerald-400 font-bold">○</td>
                    </tr>
                    <tr>
                      <td class="p-1.5 border border-zinc-800 font-bold text-sky-300">離脫（離開亂戰）</td>
                      <td class="p-1.5 border border-zinc-800 text-zinc-500">×</td>
                      <td class="p-1.5 border border-zinc-800 text-emerald-400 font-bold">○</td>
                      <td class="p-1.5 border border-zinc-800 text-zinc-500">×</td>
                      <td class="p-1.5 border border-zinc-800 text-emerald-400 font-bold">○</td>
                      <td class="p-1.5 border border-zinc-800 text-emerald-400 font-bold">○</td>
                    </tr>
                  </tbody>
                </table>
                <div class="text-[11px] text-zinc-400 pt-1">
                  ※ <strong>重要注釋：</strong>被妨害導致實際移動距離縮短時，距離計算依實際移動距離為準，但<strong>「移動種別」維持原宣告</strong>（例：宣告通常移動卻在 2m 被攔下，仍視為通常移動，不可改算制限移動）。此外，以<strong>「形狀：突破」</strong>移動時<strong>免疫一切移動妨害</strong>。
                </div>
              </div>
            </div>
          </div>

          <!-- 8. 射程、範圍效果、誤射與遮蔽 -->
          <div class="bg-zinc-900 border border-zinc-800 p-5 rounded-xl space-y-4">
            <h3 class="text-base font-bold text-amber-400 border-b border-zinc-800 pb-2 flex items-center">
              <i class="fa-solid fa-crosshairs mr-2 text-amber-500"></i>8. 射程、範圍魔法、誤射與遮蔽判定
            </h3>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs leading-relaxed">
              <div class="bg-zinc-950 p-4 rounded-lg border border-zinc-800 space-y-2">
                <div class="font-bold text-amber-400 text-sm">【射程、範圍效果與誤射】</div>
                <ul class="list-disc list-inside space-y-1.5 text-zinc-300">
                  <li><strong>「射程：接觸」：</strong>僅可對「與自身同座標者」或「自身處於亂戰狀態時，同一亂戰區域內的（包含獨立狀態）角色」使用。</li>
                  <li><strong>距離與半徑數值：</strong>「射程：○（△m）」直接依 △m 判定距離；範圍魔法「對象：○區域（半徑△m）／～」依半徑 △m 決定涵蓋座標。</li>
                  <li><strong>範圍效果涵蓋亂戰：</strong>只要<strong>亂戰中心點</strong>落入範圍半徑內，該亂戰內<strong>所有亂戰狀態角色皆成為對象</strong>；獨立狀態角色則依各自固有座標判定是否在半徑內。</li>
                  <li><strong>誤射規則：</strong>從<strong>亂戰區域外</strong>以遠隔攻擊或「形狀：射擊」瞄準亂戰內目標時，若該目標所在座標還有其他角色（亂戰狀態全部同在中心點；獨立狀態若同座標亦計），會從同座標全體中<strong>隨機抽選目標（誤射）</strong>。<strong>身處亂戰區域內向同亂戰內射擊不會發生誤射</strong>。</li>
                </ul>
              </div>
              <div class="bg-zinc-950 p-4 rounded-lg border border-zinc-800 space-y-2">
                <div class="font-bold text-pink-400 text-sm">【遮蔽判定（《鷹眼》需求）】</div>
                <ul class="list-disc list-inside space-y-1.5 text-zinc-300">
                  <li><strong>亂戰區域造成的遮蔽：</strong>對亂戰外的角色而言，亂戰區域會阻擋視線；<strong>跨越亂戰區域瞄準後方目標需要戰鬥特技《鷹眼》</strong>。亂戰內角色瞄準同亂戰內目標、或亂戰外直接瞄準亂戰內目標，<strong>均不產生遮蔽</strong>。</li>
                  <li><strong>敵對角色造成的遮蔽：</strong>位於自身與目標之間的<strong>亂戰外敵對角色</strong>也會形成遮蔽（跨越瞄準需《鷹眼》）。</li>
                  <li><strong>不構成遮蔽的例外：</strong>與使用者同座標的敵人、與目標同座標的敵人、<strong>我方角色</strong>（任何情況），以及<strong>獨立狀態角色</strong>（任何情況）皆<strong>不會產生遮蔽</strong>。</li>
                </ul>
              </div>
            </div>
          </div>

          <!-- 9. 「形狀：貫通」與「形狀：突破」特殊規則 -->
          <div class="bg-zinc-900 border border-zinc-800 p-5 rounded-xl space-y-4">
            <h3 class="text-base font-bold text-amber-400 border-b border-zinc-800 pb-2 flex items-center">
              <i class="fa-solid fa-bolt mr-2 text-amber-500"></i>9. 「形狀：貫通」與「形狀：突破」特殊規則
            </h3>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs leading-relaxed">
              <div class="bg-zinc-950 p-4 rounded-lg border border-zinc-800 space-y-2">
                <div class="font-bold text-amber-400 text-sm">【起點、目標與終點（A / B 選擇）】</div>
                <ul class="list-disc list-inside space-y-1.5 text-zinc-300">
                  <li><strong>起點與波及：</strong>以使用者所在座標為起點（含起點與終點，範圍內角色以 1/2 機率受影響；使用者可將自身除外，但<strong>同座標隊友可能被捲入</strong>，貫通時可先制限移動 1m 再施放）。</li>
                  <li><strong>始點近傍除外（僅限突破）：</strong>「形狀：突破」可指定自身<strong>制限移動距離以內</strong>的近傍座標排除在效果外（但在亂戰狀態下發動突破時不可使用此除外）。</li>
                  <li><strong>目標選擇：</strong>可指定「座標地點」（不可選自身同座標）或「單一角色」（不可選同座標者；若從亂戰外指定亂戰內角色且可能誤射，除「無同座標者的獨立狀態角色」外，<strong>需要《精準射擊／ターゲッティング》</strong>）。</li>
                  <li><strong>終點決定：</strong><br>
                    ・<strong>「形狀：貫通」：</strong>一律延伸至該方向的<strong>射程極限</strong>為終點。<br>
                    ・<strong>「形狀：突破」：</strong>宣告時二選一 —— <strong>A. 停在目標地點／目標角色處</strong>；或 <strong>B. 穿過目標並一路衝至射程極限（不可中途停下）</strong>。</li>
                </ul>
              </div>
              <div class="bg-zinc-950 p-4 rounded-lg border border-zinc-800 space-y-2">
                <div class="font-bold text-emerald-400 text-sm">【亂戰中發動突破與地形撞擊裁定】</div>
                <ul class="list-disc list-inside space-y-1.5 text-zinc-300">
                  <li><strong>亂戰狀態下發動「突破」的 4 種允許條件：</strong>原則上亂戰中不可宣告突破，除非符合可脫離條件之一：<br>
                    ① 上一自身手番已執行<strong>「從亂戰區域脫離準備」</strong>。<br>
                    ② 自身以外我方亂戰人數達到敵方<strong>「2：1」以上優勢</strong>（嚴格超過 2 倍）。<br>
                    ③ 處於<strong>「透明」</strong>等未被視認狀態（若移動或主動作會解除透明則不成立）。<br>
                    ④ 習得戰鬥特技<strong>《影走り》</strong>或具備同類能力。
                  </li>
                  <li><strong>撞牆傷害（突破）：</strong>突破路徑被牆壁阻擋時使用者撞牆並<strong>轉倒</strong>，上級戰鬥中以宣告起點至終點距離的 <strong>1/5（無條件進位）m</strong> 作為落下距離計算落下傷害。若牆壁設有防護點與 HP（構造物），可嘗試以貫通／突破傷害破壞；破壞成功則繼續前進，失敗則受阻並承受撞擊傷害。</li>
                  <li><strong>坑洞墜落與角色不阻擋：</strong>路徑上有落穴或懸崖會墜落（由 GM 裁定）；無論體型多龐大，<strong>「角色」原則上不會阻擋貫通或突破</strong>。</li>
                </ul>
              </div>
            </div>
          </div>

          <!-- 10. 亂戰離脫方向與移動中途補助動作 -->
          <div class="bg-zinc-900 border border-zinc-800 p-5 rounded-xl space-y-4">
            <h3 class="text-base font-bold text-amber-400 border-b border-zinc-800 pb-2 flex items-center">
              <i class="fa-solid fa-route mr-2 text-amber-500"></i>10. 亂戰離脫方向與移動中途補助動作
            </h3>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs leading-relaxed">
              <div class="bg-zinc-950 p-4 rounded-lg border border-zinc-800 space-y-2">
                <div class="font-bold text-emerald-400 text-sm">【亂戰區域的離脫方向與脫出要求】</div>
                <ul class="list-disc list-inside space-y-1.5 text-zinc-300">
                  <li><strong>前後皆可離脫：</strong>與基本戰鬥只能後退不同，上級戰鬥從亂戰脫離時，可任選<strong>前方或後方</strong>方向移動[cite: 31]。</li>
                  <li><strong>必須徹底脫出：</strong>移動種別可任選，但<strong>必須移動到足以完全脫出亂戰區域的距離</strong>[cite: 32]。若移動距離不足以脫出，則<strong>無法執行該次移動</strong>，且先前已做的「亂戰區域離脫準備」權利也會喪失[cite: 32]。</li>
                </ul>
              </div>
              <div class="bg-zinc-950 p-4 rounded-lg border border-zinc-800 space-y-2">
                <div class="font-bold text-cyan-300 text-sm">【補助動作時機 vs 主動作時機】</div>
                <ul class="list-disc list-inside space-y-1.5 text-zinc-300">
                  <li><strong>移動中途可做補助動作：</strong>除移動前後外，上級戰鬥允許在<strong>移動中途</strong>執行補助動作（例：前進 10m 時，走到第 7m 座標時執行補助動作）[cite: 32]。</li>
                  <li><strong>主動作必須在終點座標：</strong>主動作<strong>不可於移動中途執行</strong>，必須在完成移動、抵達終點座標後才可進行[cite: 32]。</li>
                </ul>
              </div>
            </div>
          </div>

          <!-- 11. 武器與道具的傳遞（受け渡し） -->
          <div class="bg-zinc-900 border border-zinc-800 p-5 rounded-xl space-y-4">
            <h3 class="text-base font-bold text-amber-400 border-b border-zinc-800 pb-2 flex items-center">
              <i class="fa-solid fa-handshake mr-2 text-amber-500"></i>11. 武器與道具的傳遞規則
            </h3>
            <div class="grid grid-cols-1 lg:grid-cols-12 gap-4 text-xs leading-relaxed">
              <div class="lg:col-span-5 bg-zinc-950 p-4 rounded-lg border border-zinc-800 space-y-2">
                <div class="font-bold text-amber-400 text-sm">【傳遞步驟（手渡す → 受け取る）】</div>
                <ol class="list-decimal list-inside space-y-1.5 text-zinc-300">
                  <li><strong>交出方（主動作）：</strong>移動完成後，於該座標執行「傳遞（手渡す）」主動作並結束自身手番[cite: 33]。</li>
                  <li><strong>接收方（補助動作）：</strong>於自身手番中，在移動前、移動後或<strong>移動中途與交出方座標一致的時機</strong>，以補助動作接收[cite: 33]。</li>
                </ol>
              </div>
              <div class="lg:col-span-7 bg-zinc-950 p-4 rounded-lg border border-zinc-800 space-y-1.5">
                <div class="font-bold text-cyan-300 text-sm">📖 規則書範例（座標以數值表示：沃夫初始 (6)、畢特初始 (1)）[cite: 34]</div>
                <p class="text-zinc-300">
                  畢特（移動力 7）通常移動前進至座標 <strong>(8)</strong>，以補助動作丟棄左手〈圓盾〉空出單手，再以補助動作取出〈治療藥水〉並以主動作交出（結束手番）[cite: 34]。隨後沃夫（移動力 13）先以補助動作將雙手握持的〈混種劍〉改為單手握持空出手，前進至座標 <strong>(8)</strong> 時以補助動作接過藥水，繼續前進至座標 <strong>(12)</strong> 完成移動，最後以主動作喝下藥水回復 HP[cite: 34]。
                </p>
              </div>
            </div>
          </div>

          <!-- 12. 製作牆壁的魔法 -->
          <div class="bg-zinc-900 border border-zinc-800 p-5 rounded-xl space-y-4">
            <h3 class="text-base font-bold text-amber-400 border-b border-zinc-800 pb-2 flex items-center">
              <i class="fa-solid fa-wall-brick mr-2 text-amber-500"></i>12. 製作牆壁的魔法
            </h3>
            <div class="bg-zinc-950 p-4 rounded-lg border border-zinc-800 text-xs leading-relaxed">
              <ul class="list-disc list-inside space-y-1.5 text-zinc-300">
                <li><strong>生成方位與座標限制：</strong>牆壁建於單一座標並阻斷戰場，一律<strong>垂直於戰場直線</strong>（不可沿直線方向建造）[cite: 33]。已有牆壁或角色的座標無法生成牆壁，角色亦<strong>不可在已有牆壁的座標結束移動</strong>（牆壁與角色不可同座標）[cite: 33]。</li>
                <li><strong>翻越／繞行距離 +10m：</strong>越過牆壁移動時，移動距離<strong>追加 +10m</strong> 計算；若剩餘移動力足夠，視為繞行通過[cite: 33]。</li>
                <li><strong>截斷亂戰區域：</strong>若牆壁出現在亂戰區域內，亂戰區域會<strong>在該處中斷</strong>[cite: 33]。</li>
              </ul>
            </div>
          </div>
        </div>
      `,
    },
    {
      id: 'sec-feat_rules',
      title: '戰鬥特技運用注意事項 (Combat Feat Rules)',
      icon: 'fa-solid fa-burst',
      content: `
        <div class="space-y-6 text-zinc-300">
          <div class="bg-zinc-900 border border-zinc-800 p-5 rounded-xl shadow-md">
            <div class="flex flex-wrap justify-between items-center gap-2 mb-3">
              <h2 class="text-xl font-bold text-amber-400 flex items-center">
                <i class="fa-solid fa-burst mr-2.5 text-amber-500"></i>戰鬥特技運用注意事項 (Combat Feat Rules)
              </h2>
              <span class="text-xs bg-amber-950/80 text-amber-300 px-2.5 py-1 rounded border border-amber-800 font-bold">特技裁定規則</span>
            </div>
            <p class="text-xs text-zinc-400 leading-relaxed">
              官方關於《庇護》、《魔法擴大/全》、《多重動作》以及複數同時攻擊特技組合的詳細裁定與限制。
            </p>
          </div>
  
          <div class="bg-zinc-900 border border-zinc-800 p-5 rounded-xl space-y-4">
            <h3 class="text-base font-bold text-amber-400 border-b border-zinc-800 pb-2 flex items-center">
              <i class="fa-solid fa-shield-heart mr-2 text-amber-500"></i>1. 《庇護》、《魔法擴大/全》與《多重動作》細則
            </h3>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs leading-relaxed">
              <div class="bg-zinc-950 p-4 rounded-lg border border-zinc-800 space-y-1.5">
                <div class="font-bold text-amber-400 text-sm">【《庇護 (かばう)》細則】</div>
                <p>不改變攻擊目標，故敵人的《追加攻擊》或《左右開弓》第 2 擊仍會打向原本目標。無法庇護不可迴避的魔法/範圍攻擊；1 回合限宣告 1 次（需《護衛》方可庇護多人）。</p>
              </div>
              <div class="bg-zinc-950 p-4 rounded-lg border border-zinc-800 space-y-1.5">
                <div class="font-bold text-amber-400 text-sm">【《魔法擴大/全》】</div>
                <p>視同同時擁有所有《魔法擴大／＊＊》。同一手番進行多次施法（如搭配《雙重詠唱》）時，每次施法均可自由選擇不同擴大組合。</p>
              </div>
              <div class="bg-zinc-950 p-4 rounded-lg border border-zinc-800 space-y-1.5">
                <div class="font-bold text-amber-400 text-sm">【《多重動作》順序限制】</div>
                <p>僅限「主動作」的攻擊或魔法宣告（追加攻擊/雙重詠唱衍生動作不可宣告）。與《雙重詠唱》併用時，<strong>必須先宣告《雙重詠唱》並先施法</strong>。</p>
              </div>
            </div>
          </div>
  
          <div class="bg-zinc-900 border border-zinc-800 p-5 rounded-xl space-y-4">
            <h3 class="text-base font-bold text-amber-400 border-b border-zinc-800 pb-2 flex items-center">
              <i class="fa-solid fa-table-list mr-2 text-amber-500"></i>2. 複數同時攻擊特技 (如《薙掃》) 組合對照表
            </h3>
            <div class="overflow-x-auto">
              <table class="w-full text-left text-xs text-zinc-300 border-collapse border border-zinc-800">
                <thead class="bg-zinc-950 text-amber-400 font-bold border-b border-zinc-800">
                  <tr>
                    <th class="p-2.5 border border-zinc-800 w-1/3">搭配的宣言特技</th>
                    <th class="p-2.5 border border-zinc-800">組合後的處理規則與限制</th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-zinc-800">
                  <tr>
                    <td class="p-2.5 font-bold text-pink-400 border border-zinc-800">《囓咬》《牙折》《盾牌衝擊》《陰影步(效果2)》《掠奪》</td>
                    <td class="p-2.5 text-pink-300 font-bold border border-zinc-800">完全不可組合 (不可併用)</td>
                  </tr>
                  <tr class="bg-zinc-950/40">
                    <td class="p-2.5 font-bold text-emerald-400 border border-zinc-800">《牽制攻擊》《挑釁攻擊》</td>
                    <td class="p-2.5 text-emerald-300 border border-zinc-800">適用於被《薙掃》攻擊的所有目標</td>
                  </tr>
                  <tr>
                    <td class="p-2.5 font-bold text-cyan-400 border border-zinc-800">《全力攻擊》《必殺攻擊》《魔力擊》《鎧貫》《捨身攻擊》《露拂》</td>
                    <td class="p-2.5 border border-zinc-800">效果僅能套用於命中的目標中隨機選擇的 1 體</td>
                  </tr>
                  <tr class="bg-zinc-950/40">
                    <td class="p-2.5 font-bold text-amber-400 border border-zinc-800">《斬返 I》 / 《斬返 II》</td>
                    <td class="p-2.5 border border-zinc-800">《斬返 I》對被迴避的所有目標再次攻擊；《斬返 II》另可選 1 體初擊命中目標增加傷害</td>
                  </tr>
                  <tr>
                    <td class="p-2.5 font-bold text-purple-400 border border-zinc-800">《多重動作》</td>
                    <td class="p-2.5 text-purple-300 border border-zinc-800">不論攻擊多少目標，附隨的魔法行使依然只有 1 次</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      `,
    },
    {
      id: 'sec-power_table_rules',
      title: '威力表 (Power Table 0~100)',
      icon: 'fa-solid fa-table-cells',
      content: `
        <div class="space-y-6 text-zinc-300">
          <div class="bg-zinc-900 border border-zinc-800 p-5 rounded-xl shadow-md">
            <div class="flex flex-wrap justify-between items-center gap-2 mb-2">
              <h2 class="text-xl font-bold text-amber-400 flex items-center">
                <i class="fa-solid fa-table-cells mr-2.5 text-amber-500"></i>SW2.5 威力表 (Power Table 0~100)
              </h2>
              <span class="text-xs bg-amber-950/80 text-amber-300 px-2.5 py-1 rounded border border-amber-800 font-bold">核心數值對照表</span>
            </div>
            <p class="text-xs text-zinc-400">ソードワールド2.5 官方完整威力表對照與即時傷害對應查詢。</p>
          </div>
  
          <div class="bg-zinc-900 border border-amber-500/40 rounded-xl p-5 space-y-3 shadow-lg">
            <h3 class="text-base font-bold text-amber-400 flex items-center">
              <i class="fa-solid fa-calculator mr-2 text-amber-500"></i>即時威力傷害查詢 (Quick Power Calculator)
            </h3>
            <div class="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
              <div>
                <label class="block text-zinc-400 mb-1 font-medium">選擇威力 (Power)</label>
                <input type="number" id="calc-power-input" min="0" max="100" value="20" oninput="calcPowerResult()" class="w-full bg-zinc-950 border border-zinc-700 rounded px-3 py-1.5 text-amber-300 font-bold focus:outline-none focus:border-amber-500">
              </div>
              <div>
                <label class="block text-zinc-400 mb-1 font-medium">2d6 擲骰合計 (2d Roll)</label>
                <select id="calc-dice-input" onchange="calcPowerResult()" class="w-full bg-zinc-950 border border-zinc-700 rounded px-3 py-1.5 text-cyan-300 font-bold focus:outline-none focus:border-amber-500">
                  <option value="2">2 (自動失敗/自動大失敗)</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7" selected>7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                  <option value="10">10</option>
                  <option value="11">11</option>
                  <option value="12">12</option>
                </select>
              </div>
              <div class="bg-zinc-950 border border-zinc-800 rounded p-2.5 flex flex-col justify-center items-center">
                <span class="text-zinc-500 text-[11px]">威力對應基礎傷害</span>
                <span id="calc-power-output" class="text-xl font-extrabold text-amber-400">4</span>
              </div>
            </div>
          </div>
  
          <div class="bg-zinc-900 border border-zinc-800 rounded-xl p-5 space-y-4">
            <div class="flex justify-between items-center border-b border-zinc-800 pb-2">
              <h3 class="text-base font-bold text-amber-400 flex items-center">
                <i class="fa-solid fa-list-ol mr-2 text-amber-500"></i>全威力對照表 (0 ~ 100)
              </h3>
              <span class="text-[11px] text-zinc-500">※ 標記 <strong>*</strong> 代表結果為 0 點傷害</span>
            </div>
  
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 text-xs font-mono">
              <div class="overflow-x-auto rounded border border-zinc-800 bg-zinc-950">
                <table class="w-full text-center">
                  <thead class="bg-zinc-900 text-amber-400 font-bold border-b border-zinc-800">
                    <tr>
                      <th class="py-1 px-1.5 bg-amber-500/10 border-r border-zinc-800">威力</th>
                      <th class="py-1 px-1">2</th><th class="py-1 px-1">3</th><th class="py-1 px-1">4</th>
                      <th class="py-1 px-1">5</th><th class="py-1 px-1">6</th><th class="py-1 px-1">7</th>
                      <th class="py-1 px-1">8</th><th class="py-1 px-1">9</th><th class="py-1 px-1">10</th>
                      <th class="py-1 px-1">11</th><th class="py-1 px-1">12</th>
                    </tr>
                  </thead>
                  <tbody id="power-table-body-1" class="divide-y divide-zinc-800/50 text-zinc-300"></tbody>
                </table>
              </div>
  
              <div class="overflow-x-auto rounded border border-zinc-800 bg-zinc-950">
                <table class="w-full text-center">
                  <thead class="bg-zinc-900 text-amber-400 font-bold border-b border-zinc-800">
                    <tr>
                      <th class="py-1 px-1.5 bg-amber-500/10 border-r border-zinc-800">威力</th>
                      <th class="py-1 px-1">2</th><th class="py-1 px-1">3</th><th class="py-1 px-1">4</th>
                      <th class="py-1 px-1">5</th><th class="py-1 px-1">6</th><th class="py-1 px-1">7</th>
                      <th class="py-1 px-1">8</th><th class="py-1 px-1">9</th><th class="py-1 px-1">10</th>
                      <th class="py-1 px-1">11</th><th class="py-1 px-1">12</th>
                    </tr>
                  </thead>
                  <tbody id="power-table-body-2" class="divide-y divide-zinc-800/50 text-zinc-300"></tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      `,
    },
    {
      id: 'sec-vitalsmith_rules',
      title: '生命工匠（闘學士）與闘理',
      icon: 'fa-solid fa-hand-fist',
      content: `
          <div class="space-y-6">
              <div class="bg-zinc-900 border border-zinc-800 p-5 rounded-xl shadow-md">
                <div class="flex flex-wrap justify-between items-center gap-2 mb-3">
                  <h2 class="text-xl font-bold text-amber-400 flex items-center">
                    <i class="fa-solid fa-hand-fist mr-2.5 text-amber-500"></i>生命工匠（闘學士）與闘理 (Vitalsmith) 概要與規則
                  </h2>
                  <div class="flex gap-2">
                    <span class="text-xs bg-zinc-800 text-zinc-300 px-2.5 py-1 rounded border border-zinc-700 font-medium">戰士系技能</span>
                    <span class="text-xs bg-amber-950/80 text-amber-300 px-2.5 py-1 rounded border border-amber-800 font-bold">經驗表 A</span>
                  </div>
                </div>
                <p class="text-xs text-zinc-300 leading-relaxed">
                  習得者稱為「闘學士」，以運動生理學與力學等「學問」體系化格鬥技的戰士系技能（<span class="text-red-400 font-semibold">注意：無《追加攻擊》</span>）。
                </p>
              </div>
  
              <!-- 技能基本規範 -->
              <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 text-xs text-zinc-300 leading-relaxed">
                  <div class="bg-zinc-900 border border-zinc-800 rounded-xl p-4 space-y-3">
                      <h3 class="text-sm font-bold text-amber-400 border-b border-zinc-800 pb-1.5">
                          <i class="fa-solid fa-book-medical mr-1.5 text-amber-500"></i>技能特性與可用判定
                      </h3>
                      <p>以運動生理學與力學等「學問」體系化格鬥技的戰士系技能。相較於單發重擊，擅長以靈巧手法與踢技累積優勢；對生物（特別是人族、蠻族）的生理弱點極具壓制力，對其他魔物亦能透過關節狙擊牽制戰局。</p>
                      <div class="bg-zinc-950 p-3 rounded-lg border border-zinc-800/80 space-y-1.5">
                          <div class="font-bold text-cyan-300">可進行的行為判定：</div>
                          <ul class="list-disc list-inside space-y-1 text-zinc-300">
                              <li><strong>命中力判定</strong>（追加傷害為「生命工匠技能等級 ＋ 筋力加值」）</li>
                              <li><strong>迴避力判定</strong></li>
                              <li><strong>魔物知識判定（限定）</strong>：僅限對 <span class="text-amber-300">「分類：蠻族／動物／植物／幻獸／人族」</span> 進行</li>
                          </ul>
                      </div>
                      <div class="flex justify-between text-zinc-400 pt-1">
                          <span><strong class="text-amber-300">限制種族：</strong>無</span>
                          <span><strong class="text-amber-300">自動習得特技：</strong>無</span>
                      </div>
                  </div>
  
                  <!-- 武器防具與戰鬥特技 -->
                  <div class="bg-zinc-900 border border-zinc-800 rounded-xl p-4 space-y-3">
                      <h3 class="text-sm font-bold text-amber-400 border-b border-zinc-800 pb-1.5">
                          <i class="fa-solid fa-shield-halved mr-1.5 text-amber-500"></i>裝備限制與戰鬥特技
                      </h3>
                      <div class="space-y-2">
                          <div>
                              <span class="text-cyan-300 font-bold">● 可裝備武器：</span>僅限類別 <span class="text-amber-300 font-bold">〈格鬥〉</span>（含「※拳鬥士專用」武器）。
                          </div>
                          <div class="bg-zinc-950 p-2.5 rounded-lg border border-zinc-800/80">
                              <span class="text-pink-400 font-bold">〈掌打〉規則：</span>手上未裝備武器，或僅裝備「用法：1H拳」武器且該手未持有其他物品時方可使用。攻擊本身不強，但部分「闘理」僅能在使用〈掌打〉攻擊時宣言。
                          </div>
                          <div>
                              <span class="text-cyan-300 font-bold">● 可裝備防具：</span>僅限「拳鬥士專用」「拳鬥士可裝備」防具，<span class="text-red-400 font-bold">完全不可裝備盾牌</span>。
                          </div>
                          <div>
                              <span class="text-cyan-300 font-bold">● 可習得／使用之戰士系特技：</span>僅限 <span class="text-emerald-400 font-bold">《迴避行動Ⅱ》《頑強》《變幻自在Ⅰ》</span>（其餘需戰士系前提之特技皆不可使用）。
                          </div>
                      </div>
                  </div>
              </div>
  
              <!-- 闘理系統規則 -->
              <div class="bg-zinc-900 border border-zinc-800 rounded-xl p-5 space-y-4 text-xs text-zinc-300 leading-relaxed">
                  <h3 class="text-base font-bold text-amber-400 border-b border-zinc-800 pb-2 flex items-center justify-between">
                      <span><i class="fa-solid fa-fire-flame-curved mr-2 text-amber-500"></i>專屬系統：「闘理」運用規則</span>
                      <span class="text-[11px] font-normal text-zinc-400">隨技能等級自動習得對應等級之全部闘理</span>
                  </h3>
  
                  <p>所有闘理皆視同戰鬥特技運作，且條件均為 <strong class="text-amber-300">「使用：生命工匠技能」</strong>（未使用生命工匠技能的判定無法套用效果）。</p>
  
                  <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
                      <div class="bg-zinc-950 p-3.5 rounded-lg border border-zinc-800 space-y-1.5">
                          <div class="font-bold text-emerald-400 text-sm">◯ 常時型闘理</div>
                          <p>只要處於可使用生命工匠技能的狀態，效果便<strong>常時自動適用</strong>。</p>
                      </div>
  
                      <div class="bg-zinc-950 p-3.5 rounded-lg border border-zinc-800 space-y-1.5">
                          <div class="font-bold text-amber-400 text-sm">🗨️ 宣言型闘理 ＆ 🗨️△ 戰鬥準備宣言</div>
                          <ul class="list-disc list-inside space-y-1">
                              <li><strong>與宣言特技共用次數</strong>：1 次輪次中，宣言型闘理與宣言型戰鬥特技合計僅能擇一宣言 1 次。</li>
                              <li><strong>《變幻自在Ⅰ》連動</strong>：習得後每輪可自由組合宣言闘理與宣言特技最多 <strong>2 次</strong>（同名闘理不可重複套用於同一次動作）。</li>
                              <li><strong>「適用：－」</strong>：可在自己輪次的任意時機宣言並立即生效。</li>
                              <li><strong>「適用：1 次的＊＊攻擊」</strong>：若與同時攻擊複數目標的效果疊加，僅對攻擊者任選的 <strong>1 個對象</strong>生效。</li>
                              <li><strong>🗨️△ 標記</strong>：可於<strong>戰鬥準備</strong>階段宣言並獲得效果。</li>
                          </ul>
                      </div>
                  </div>
              </div>
          </div>
      `
  },
  {
    id: 'sec-witch_rules',
    title: '咒法師 與咒詛魔法',
    icon: 'fa-solid fa-hat-witch',
    content: `
        <div class="space-y-6">
            <div class="bg-zinc-900 border border-zinc-800 p-5 rounded-xl shadow-md">
              <div class="flex flex-wrap justify-between items-center gap-2 mb-3">
                <h2 class="text-xl font-bold text-amber-400 flex items-center">
                  <i class="fa-solid fa-wand-sparkles mr-2.5 text-amber-500"></i>咒法師與咒詛魔法 (Witch) 概要與規則
                </h2>
                <div class="flex gap-2">
                  <span class="text-xs bg-zinc-800 text-zinc-300 px-2.5 py-1 rounded border border-zinc-700 font-medium">魔法師系技能</span>
                  <span class="text-xs bg-amber-950/80 text-amber-300 px-2.5 py-1 rounded border border-amber-800 font-bold">經驗表 A</span>
                </div>
              </div>
              <p class="text-xs text-zinc-300 leading-relaxed">
                擅長操弄「詛咒」的魔法技能，源流自古代魔法文明並結合本土發展而成。隨技能等級自動習得對應等級之全部咒詛魔法。<strong>咒詛魔法魔力 ＝ 咒法師技能等級 ＋ 知力加值</strong>。
              </p>
            </div>

            <!-- 技能基本規範與行使條件 -->
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 text-xs text-zinc-300 leading-relaxed">
                <div class="bg-zinc-900 border border-zinc-800 rounded-xl p-4 space-y-3">
                    <h3 class="text-sm font-bold text-amber-400 border-b border-zinc-800 pb-1.5">
                        <i class="fa-solid fa-book-skull mr-1.5 text-amber-500"></i>技能特性與基本限制
                    </h3>
                    <p>擅長操弄「詛咒」的魔法技能，源流自古代魔法文明並結合本土發展而成。隨技能等級自動習得對應等級之全部咒詛魔法。</p>
                    <ul class="list-disc list-inside space-y-1.5 bg-zinc-950 p-3 rounded-lg border border-zinc-800/80">
                        <li><strong>可用判定：</strong>魔法行使判定</li>
                        <li><strong>習得語言：</strong>習得技能時自動學會 <span class="text-cyan-300 font-bold">魔法文明語（會話・讀文）</span></li>
                        <li><strong>種族限制：</strong>獸化人（リカント）處於 <span class="text-red-400 font-bold">［獸變貌］</span> 時無法發聲，不可行使咒詛魔法</li>
                        <li><strong>移動限制：</strong>行使魔法的輪次僅限 <span class="text-amber-300 font-bold">限制移動</span></li>
                        <li><strong>發聲要求：</strong>須以魔法文明語詠唱（<span class="text-emerald-400">［異貌］</span>夜魔免除發聲）</li>
                        <li><strong>戰鬥特技：</strong>適用一般魔法使系特技；《MP減輕／＊＊》可指定咒法師技能（消耗 MP -1）</li>
                    </ul>
                </div>

                <!-- 鎧甲限制與轉移詛咒補充 -->
                <div class="space-y-4">
                    <div class="bg-zinc-900 border border-zinc-800 rounded-xl p-4 space-y-2.5">
                        <h3 class="text-sm font-bold text-amber-400 border-b border-zinc-800 pb-1.5">
                            <i class="fa-solid fa-shield-virus mr-1.5 text-amber-500"></i>鎧甲限制（［異貌］夢魘免除）
                        </h3>
                        <table class="w-full text-xs text-center border-collapse bg-zinc-950 rounded-lg overflow-hidden border border-zinc-800">
                            <thead>
                                <tr class="bg-zinc-900 text-zinc-400 border-b border-zinc-800">
                                    <th class="py-1.5 px-3 text-left">裝備鎧甲種類</th>
                                    <th class="py-1.5 px-3">魔法行使判定修正</th>
                                </tr>
                            </thead>
                            <tbody class="divide-y divide-zinc-800/60">
                                <tr>
                                    <td class="py-1.5 px-3 text-left text-zinc-200">必要筋力 10 以上的〈非金屬鎧〉</td>
                                    <td class="py-1.5 px-3 font-bold text-red-400 font-mono">-2</td>
                                </tr>
                                <tr>
                                    <td class="py-1.5 px-3 text-left text-zinc-200">〈金屬鎧〉</td>
                                    <td class="py-1.5 px-3 font-bold text-red-400 font-mono">-4</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div class="bg-amber-950/15 border border-amber-900/40 rounded-xl p-4 space-y-2">
                        <h3 class="text-sm font-bold text-amber-400">
                            <i class="fa-solid fa-arrows-turn-to-dots mr-1.5"></i>轉移詛咒效果的補充規則
                        </h3>
                        <p>部分咒詛魔法可將詛咒效果從 A 角色轉移至 B 角色：</p>
                        <ul class="list-disc list-inside space-y-1 text-zinc-300">
                            <li>若原詛咒為「對象：1體全」或「對象：1體X」，無論轉移前後部位數多寡，<strong>轉移後目標的所有部位皆會承受該詛咒效果</strong>。</li>
                            <li>即使原詛咒為「對象：1體X」且部位眾多，<strong>轉移詛咒的魔法本身不適用 MP 乘算</strong>。</li>
                        </ul>
                    </div>
                </div>
            </div>

            <!-- 專用施法媒介〈咒法具〉 -->
            <div class="bg-zinc-900 border border-zinc-800 rounded-xl p-5 space-y-3 text-xs text-zinc-300 leading-relaxed">
                <h3 class="text-base font-bold text-amber-400 border-b border-zinc-800 pb-2 flex items-center justify-between">
                    <span><i class="fa-solid fa-mug-hot mr-2 text-amber-500"></i>專用施法媒介：〈咒法具〉規範</span>
                    <span class="text-xs font-mono text-amber-300 bg-zinc-950 px-2.5 py-0.5 rounded border border-zinc-800">製作費用：100G 特殊染料</span>
                </h3>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div class="bg-zinc-950 p-3.5 rounded-lg border border-zinc-800 space-y-1.5">
                        <div class="font-bold text-cyan-300">● 製作材質與使用條件</div>
                        <p>咒法師耗費 <strong>100G 特殊染料</strong>，在常見的單手生活道具（茶器、餐具、筆、小鍋、手鏡、燭台、短手杖等）上刻下個人咒印製成（製成後仍可作日常工具使用）。</p>
                        <p>施法時必須作為 <strong class="text-amber-300">「用法：1H」</strong> 道具握於手中，且為<strong>個人專用品</strong>（借用他人咒法具無法施法）。施法完成瞬間〈咒法具〉會化為不透光、不反光的漆黑。</p>
                    </div>
                    <div class="bg-zinc-950 p-3.5 rounded-lg border border-zinc-800 space-y-1.5">
                        <div class="font-bold text-red-400">● 禁止武器與盾牌</div>
                        <p>因詛咒追求「間接性」，與武器、盾牌「直接傷害或防禦」的本質衝突，<strong>不可選擇任何武器或盾牌製成〈咒法具〉</strong>。</p>
                        <p class="text-zinc-400">※ 若將餐刀、餐叉等製成〈咒法具〉，必須強烈將其認知為純粹餐具；製成後雖可切開熟肉，但再也無法對生物造成任何傷害。</p>
                    </div>
                </div>
            </div>
        </div>
    `
  } 
  ];