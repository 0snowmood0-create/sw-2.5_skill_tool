export const ruleSections = [
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
            <p class="text-xs text-zinc-300 leading-relaxed mb-3">
              典籍魔導士（祕文使）是將魔法文明時代的祕術「祕奧魔法」於現代復甦並加以行使的技能。習得後即可進行「魔法文明語」的對話與閱讀。
            </p>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
              <div class="bg-zinc-950 p-3.5 rounded-lg border border-zinc-800">
                <span class="font-bold text-amber-400 block mb-1">祕奧魔法的魔力</span>
                ＝ 典籍魔導士技能等級 ＋ 智力加值
              </div>
              <div class="bg-zinc-950 p-3.5 rounded-lg border border-zinc-800">
                <span class="font-bold text-amber-400 block mb-1">可執行判定</span>
                魔法行使判定、文獻判定
              </div>
            </div>
          </div>
  
          <div class="bg-zinc-900 border border-zinc-800 p-5 rounded-xl space-y-4">
            <h3 class="text-base font-bold text-amber-400 border-b border-zinc-800 pb-2 flex items-center">
              <i class="fa-solid fa-scroll mr-2 text-amber-500"></i>1. 祕奧魔法基本規則與限制
            </h3>
            <ul class="list-disc list-inside text-xs text-zinc-300 space-y-2 leading-relaxed bg-zinc-950 p-4 rounded-lg border border-zinc-800">
              <li><strong class="text-amber-300">行使條件：</strong>必須用手指描摹〈魔導書〉中預先準備好的魔法，並在最後以魔法文明語發出魔法名稱（【異貌】夢魘不需發聲）。</li>
              <li><strong class="text-amber-300">移動限制：</strong>行使祕奧魔法的回合，移動種類僅限於「限制移動」。</li>
              <li><strong class="text-amber-300">鎧甲限制：</strong>必要筋力 10 以上的〈非金屬鎧〉承受 -2 懲罰；〈金屬鎧〉承受 -4 懲罰（夢魘異貌時不受限）。</li>
              <li><strong class="text-amber-300">〈魔導書〉：</strong>必須持有〈魔導書〉（視為「使用：1H」的道具）。一次行使僅能使用一冊。兼具武器或盾牌功能的魔導書可依規則「裝備」並獲得對應效果。</li>
              <li><strong class="text-amber-300">種族與出生表：</strong>獸化人在【獸化】狀態下無法發出魔法文明語，故無法行使。使用「仔細創角」時，出生表的真語或操靈魔法可替換為典籍魔導士技能。</li>
            </ul>
          </div>
  
          <div class="bg-zinc-900 border border-zinc-800 p-5 rounded-xl space-y-4">
            <h3 class="text-base font-bold text-amber-400 border-b border-zinc-800 pb-2 flex items-center">
              <i class="fa-solid fa-coins mr-2 text-amber-500"></i>2. 祕奧魔法的取得、價格與解析時間
            </h3>
            <p class="text-xs text-zinc-300">
              典籍魔導士不會因技能提升自動獲得魔法，必須從祕文書公會購買，或在冒險中發現古代〈魔導書〉解析取得。
            </p>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
              <div>
                <div class="font-bold text-amber-400 mb-2">市場購入與冒險販售價格</div>
                <table class="w-full text-left border-collapse border border-zinc-800">
                  <thead class="bg-zinc-950 text-amber-400 border-b border-zinc-800">
                    <tr>
                      <th class="p-2 border border-zinc-800">等級</th>
                      <th class="p-2 border border-zinc-800">購入價格</th>
                      <th class="p-2 border border-zinc-800">販售 (已解析)</th>
                      <th class="p-2 border border-zinc-800">販售 (未發現)</th>
                    </tr>
                  </thead>
                  <tbody class="divide-y divide-zinc-800 text-zinc-300">
                    <tr><td class="p-2 border border-zinc-800">1</td><td class="p-2 border border-zinc-800">500G</td><td class="p-2 border border-zinc-800">250G</td><td class="p-2 border border-zinc-800">1,000G</td></tr>
                    <tr class="bg-zinc-950/40"><td class="p-2 border border-zinc-800">2</td><td class="p-2 border border-zinc-800">1,500G</td><td class="p-2 border border-zinc-800">750G</td><td class="p-2 border border-zinc-800">3,000G</td></tr>
                    <tr><td class="p-2 border border-zinc-800">3</td><td class="p-2 border border-zinc-800">3,000G</td><td class="p-2 border border-zinc-800">1,500G</td><td class="p-2 border border-zinc-800">6,000G</td></tr>
                    <tr class="bg-zinc-950/40"><td class="p-2 border border-zinc-800">4</td><td class="p-2 border border-zinc-800">6,000G</td><td class="p-2 border border-zinc-800">3,000G</td><td class="p-2 border border-zinc-800">12,000G</td></tr>
                    <tr><td class="p-2 border border-zinc-800">5</td><td class="p-2 border border-zinc-800">12,000G</td><td class="p-2 border border-zinc-800">6,000G</td><td class="p-2 border border-zinc-800">24,000G</td></tr>
                  </tbody>
                </table>
              </div>
              <div>
                <div class="font-bold text-amber-400 mb-2">未發現魔法解析所需時間</div>
                <table class="w-full text-left border-collapse border border-zinc-800">
                  <thead class="bg-zinc-950 text-amber-400 border-b border-zinc-800">
                    <tr>
                      <th class="p-2 border border-zinc-800">魔法等級</th>
                      <th class="p-2 border border-zinc-800">所需解析時間</th>
                    </tr>
                  </thead>
                  <tbody class="divide-y divide-zinc-800 text-zinc-300">
                    <tr><td class="p-2 border border-zinc-800">Lv 1</td><td class="p-2 border border-zinc-800">3 天</td></tr>
                    <tr class="bg-zinc-950/40"><td class="p-2 border border-zinc-800">Lv 2</td><td class="p-2 border border-zinc-800">1 週</td></tr>
                    <tr><td class="p-2 border border-zinc-800">Lv 3</td><td class="p-2 border border-zinc-800">2 週</td></tr>
                    <tr class="bg-zinc-950/40"><td class="p-2 border border-zinc-800">Lv 4</td><td class="p-2 border border-zinc-800">3 週</td></tr>
                    <tr><td class="p-2 border border-zinc-800">Lv 5</td><td class="p-2 border border-zinc-800">1 個月</td></tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
  
          <div class="bg-zinc-900 border border-zinc-800 p-5 rounded-xl space-y-4">
            <h3 class="text-base font-bold text-amber-400 border-b border-zinc-800 pb-2 flex items-center">
              <i class="fa-solid fa-triangle-exclamation mr-2 text-amber-500"></i>3. 行使框的運用與應急特殊失敗風險
            </h3>
            <div class="bg-zinc-950 p-4 rounded-lg border border-zinc-800 space-y-3 text-xs leading-relaxed">
              <p><strong class="text-amber-400">● 準備行使框（所有魔導書共用）：</strong>必須預先將術式寫入魔導書。冒險中更換準備框魔法需花費改寫時間：<span class="text-amber-300 font-bold">1 階：1小時 ｜ 2 階：2小時 ｜ 3 階：3小時 ｜ 4 階：6小時 ｜ 5 階：12小時</span>。</p>
              <p><strong class="text-amber-400">● 應急行使框：</strong>無需預先準備即可緊急行使已習得或他人魔導書上的魔法（不可用於補助動作與戰鬥準備）。</p>
              <p><strong class="text-red-400">◆ 應急行使的特殊失敗：</strong>跑團開始時擲 2d 決定本場「特殊失敗值」（2 與 12 重擲，得 3～11，不可被《劍之加護》或《命運變轉》修改）。應急行使原骰等於該值時即「特殊失敗」（自動失敗、MP 照扣、無 50 經驗值），並立即重擲 2d 刷新本場次的特殊失敗值。</p>
            </div>
          </div>
        </div>
      `,
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
              運用極高集中力、以燃燒生命力（HP）為代價觸發各種效果的<strong>「操氣」</strong>技能。最初為討伐「魔神」而開發，擅長操控投擲武器與辨識魔神弱點。習得者稱為<strong>「闇狩」</strong>。
            </p>
            <div class="bg-zinc-950 p-3.5 rounded-lg border border-zinc-800 text-xs space-y-1">
              <div class="font-bold text-amber-400">🔍 專用判定：魔物知識判定（限魔神）[智力]</div>
              <p class="text-zinc-300">遭遇魔物時可自動判斷是否屬於「分類：魔神」並進行弱點辨識（若魔物使用擬態偽裝則無法自動識破）。</p>
            </div>
          </div>
  
          <div class="bg-zinc-900 border border-zinc-800 p-5 rounded-xl space-y-4">
            <h3 class="text-base font-bold text-amber-400 border-b border-zinc-800 pb-2 flex items-center">
              <i class="fa-solid fa-fire-flame-curved mr-2 text-amber-500"></i>1. 理力計算與操氣獲得規則
            </h3>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs leading-relaxed">
              <div class="bg-zinc-950 p-4 rounded-lg border border-zinc-800 space-y-2">
                <div class="font-bold text-amber-400 text-sm">【理力計算公式】</div>
                <p>表示闇狩使用操氣時的效果強度（類似魔法的「魔力」）：</p>
                <div class="p-2.5 bg-zinc-900 text-amber-300 font-mono text-center rounded border border-zinc-800 font-bold">
                  理力 ＝ 暗獵者技能等級 ＋ 精神力加值
                </div>
              </div>
              <div class="bg-zinc-950 p-4 rounded-lg border border-zinc-800 space-y-1.5">
                <div class="font-bold text-amber-400 text-sm">【操氣的獲得條件】</div>
                <ul class="list-disc list-inside space-y-1 text-zinc-300">
                  <li><strong>獲得頻率：</strong>每提升 1 級必須立即習得 1 個操氣，不可保留或遺忘。</li>
                  <li><strong>等級與前提：</strong>部分操氣需 Lv5 / Lv10 最低限制或前置操氣。</li>
                </ul>
              </div>
            </div>
          </div>
  
          <div class="bg-zinc-900 border border-zinc-800 p-5 rounded-xl space-y-4">
            <h3 class="text-base font-bold text-amber-400 border-b border-zinc-800 pb-2 flex items-center">
              <i class="fa-solid fa-heart-pulse mr-2 text-amber-500"></i>2. 操氣分類、HP 消耗與非魔法特性
            </h3>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs leading-relaxed">
              <div class="p-3.5 bg-zinc-950 border border-zinc-800 rounded-lg space-y-1">
                <div class="font-bold text-amber-300">○ 常時效果操氣</div>
                <p class="text-zinc-300">僅對闇狩自身有效，習得後效果持續生效。</p>
              </div>
              <div class="p-3.5 bg-zinc-950 border border-zinc-800 rounded-lg space-y-1">
                <div class="font-bold text-amber-300">△ 補助動作操氣</div>
                <p class="text-zinc-300">消耗固定 <strong>2 HP</strong> 或 <strong>1d HP</strong>。不需判定自動生效（達成值 0），同名效果不累積。</p>
              </div>
              <div class="p-3.5 bg-zinc-950 border border-zinc-800 rounded-lg space-y-1">
                <div class="font-bold text-amber-300">＞＞ 主動動作操氣</div>
                <p class="text-zinc-300">消耗 <strong>2d HP</strong>（1,1 自動失敗時消耗 0 點；標示 2d(x) 時上限為 x 點）。不可在全力移動手番使用。</p>
              </div>
            </div>
            <div class="bg-zinc-950 p-4 rounded-lg border border-zinc-800 text-xs text-zinc-300 space-y-1.5">
              <p><strong>無裝備與發聲限制：</strong>使用操氣無特定裝備、發聲或肢體動作限制。具持續時間者可由自身以補助動作解除。</p>
              <p><strong>非魔法特性與念絲：</strong>操氣非魔法，不受《魔法擴大》或【魔法解除】影響（僅受《破言》、【完全取消】、【消滅刺針】影響）。「念絲」無形無質不具實體，無法物理切斷。</p>
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
            <p class="text-xs text-zinc-300 leading-relaxed">
              能與寄宿於森林與大地中的動植物之魂溝通，借助其力量施展<strong>「森羅魔法」</strong>的「森羅導師」。<span class="text-red-400 font-semibold">※ 符民（ルーンフォーク）無法習得此技能。</span>
            </p>
          </div>
  
          <div class="bg-zinc-900 border border-zinc-800 p-5 rounded-xl space-y-4">
            <h3 class="text-base font-bold text-amber-400 border-b border-zinc-800 pb-2 flex items-center">
              <i class="fa-solid fa-seedling mr-2 text-amber-500"></i>1. 施法條件與特殊性質
            </h3>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs leading-relaxed">
              <div class="p-3.5 bg-zinc-950 border border-zinc-800 rounded-lg space-y-1">
                <div class="font-bold text-amber-300">🚶 移動與發聲條件</div>
                <p class="text-zinc-300">施法回合僅限<strong>「限制移動」</strong>；必須發聲（語言不限，『獸變貌』下亦可使用；『異貌』夢魘可不發聲）。</p>
              </div>
              <div class="p-3.5 bg-zinc-950 border border-zinc-800 rounded-lg space-y-1">
                <div class="font-bold text-amber-300">🪄 裝備與鎧甲限制</div>
                <p class="text-zinc-300">必須裝備<strong>〈宿靈之仗〉</strong>（1H，100G）。裝備<strong>〈金屬鎧〉</strong>時魔力 -4（『異貌』夢魘可無視）。</p>
              </div>
            </div>
            <div class="bg-zinc-950 p-4 rounded-lg border border-zinc-800 text-xs space-y-1.5 leading-relaxed">
              <ul class="list-disc list-inside space-y-1 text-zinc-300">
                <li><strong>同名魔法認定：</strong>名稱格式「【效果名／生物名】」中，只要「效果名」相同即視為同名魔法，效果不可重複累積。</li>
                <li><strong>精靈體與抵抗：</strong>顯現的精靈體無法被武器或魔法直接干涉；森羅魔法的抵抗判定是使用目標的<strong>【生命抵抗力】</strong>。</li>
              </ul>
            </div>
          </div>
  
          <div class="bg-zinc-900 border border-zinc-800 p-5 rounded-xl space-y-4">
            <h3 class="text-base font-bold text-amber-400 border-b border-zinc-800 pb-2 flex items-center">
              <i class="fa-solid fa-tree mr-2 text-amber-500"></i>2. 圖騰降靈 (シンボリックロア) 與運用指南
            </h3>
            <div class="bg-zinc-950 p-4 rounded-lg border border-zinc-800 space-y-2 text-xs leading-relaxed">
              <div class="font-bold text-amber-400 text-sm">【受益者的圖騰與使用限制】</div>
              <p>接受【大護衛】、【多重行動者】、【天賦植入】等圖騰降靈效果者，必須持有德魯伊以〈未加工的宿靈之木〉（100G）花費 1 小時製作的〈受益者的圖騰〉（僅限人族、蠻族、動物、植物、幻獸、妖精；騎獸須由騎手持有）。</p>
              <ul class="list-disc list-inside space-y-1 text-zinc-300">
                <li>同名圖騰降靈 <strong>1 回合限施展 1 次</strong>，對同一對象 <strong>1 天限 1 次</strong>，且<strong>不適用《魔法擴大／數》</strong>。</li>
                <li><strong>【多重行動者】：</strong>單體一輪爆發支援，效果於對象手番結束時消失。</li>
                <li><strong>【大護衛】：</strong>救急王牌，亦可抵銷《全力攻擊》《必殺攻擊》等降低迴避的副作用。</li>
                <li><strong>【自然之力】：</strong>主動作獲得「臨時 MP」，通常搭配後續補助動作或《雙重詠唱》施展其他森羅魔法。</li>
              </ul>
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
          <div class="bg-zinc-900 border border-zinc-800 p-5 rounded-xl shadow-md">
            <div class="flex flex-wrap justify-between items-center gap-2 mb-3">
              <h2 class="text-xl font-bold text-amber-400 flex items-center">
                <i class="fa-solid fa-earth-asia mr-2.5 text-amber-500"></i>天地使 (Geomancer) 概要與規則
              </h2>
              <div class="flex gap-2">
                <span class="text-xs bg-zinc-800 text-zinc-300 px-2.5 py-1 rounded border border-zinc-700 font-medium">其他系技能</span>
                <span class="text-xs bg-amber-950/80 text-amber-300 px-2.5 py-1 rounded border border-amber-800 font-bold">經驗表 B</span>
              </div>
            </div>
            <p class="text-xs text-zinc-300 leading-relaxed">
              引導充盈於世界本身的力量發揮「相域」現象的技能（可進行探索判定、天氣預測判定）。每提升 1 級可習得 1 個「相域」。
            </p>
          </div>
  
          <div class="bg-zinc-900 border border-zinc-800 p-5 rounded-xl space-y-4">
            <h3 class="text-base font-bold text-amber-400 border-b border-zinc-800 pb-2 flex items-center">
              <i class="fa-solid fa-compass mr-2 text-amber-500"></i>1. 相域特徵、命脈點與〈地脈儀〉
            </h3>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs leading-relaxed">
              <div class="bg-zinc-950 p-4 rounded-lg border border-zinc-800 space-y-2">
                <div class="font-bold text-amber-400 text-sm">【隨機對象與取消 (Cancel) 機制】</div>
                <p>• <strong>不消耗 MP 且無法抵抗：</strong>相域消耗「天、地、人」三種命脈點，對象為領域內隨機 1 名角色，且效果<strong>完全無法抵抗</strong>。</p>
                <p>• <strong>取消機制：</strong>抽選出對象後可選擇<strong>取消（Cancel）</strong>該次效果，藉此達成只輔助隊友或只攻擊敵人的目的（但無論如何都無法指定特定目標）。</p>
              </div>
              <div class="bg-zinc-950 p-4 rounded-lg border border-zinc-800 space-y-2">
                <div class="font-bold text-amber-400 text-sm">【〈地脈儀〉(Geograph) 展開規則】</div>
                <p>• 必須裝備（裝飾品：任意）並<strong>展開</strong>〈地脈儀〉才能累積命脈點與使用相域（價格越高範圍與上限越大）。</p>
                <p>• 展開與收納皆為<strong>輔助動作</strong>（不可同回合執行）。通常移動前必須先收納，移動後才可再展開；遭強制移動時會自動收納。</p>
              </div>
            </div>
          </div>
        </div>
      `,
    },
    {
      id: 'sec-abyssgazer_rules',
      title: '奈落魔法 (Abyssgazer) 概要與規則 (表A)',
      icon: 'fa-solid fa-eye-low-vision',
      content: `
        <div class="space-y-6 text-zinc-300">
          <div class="bg-zinc-900 border border-zinc-800 p-5 rounded-xl shadow-md">
            <div class="flex flex-wrap justify-between items-center gap-2 mb-3">
              <h2 class="text-xl font-bold text-amber-400 flex items-center">
                <i class="fa-solid fa-eye-low-vision mr-2.5 text-amber-500"></i>奈落魔法 (Abyssgazer) 概要與規則
              </h2>
              <div class="flex gap-2">
                <span class="text-xs bg-zinc-800 text-zinc-300 px-2.5 py-1 rounded border border-zinc-700 font-medium">魔法師系技能</span>
                <span class="text-xs bg-amber-950/80 text-amber-300 px-2.5 py-1 rounded border border-amber-800 font-bold">經驗表 A</span>
              </div>
            </div>
            <p class="text-xs text-zinc-300 leading-relaxed">
              習得者稱為「奈落使」或「奈落的窺視者」。透過瑪娜感知並引動空間中無處不在的「奈落魔域」裂縫與偏移來發動【奈落魔法】，單體效果強大且多與「奈落魔域」密切相關。
            </p>
          </div>
  
          <div class="bg-zinc-900 border border-zinc-800 p-5 rounded-xl space-y-4">
            <h3 class="text-base font-bold text-amber-400 border-b border-zinc-800 pb-2 flex items-center">
              <i class="fa-solid fa-khanda mr-2 text-amber-500"></i>1. 發動條件與觸媒
            </h3>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs leading-relaxed">
              <div class="bg-zinc-950 p-4 rounded-lg border border-zinc-800 space-y-1.5">
                <div class="font-bold text-amber-400 text-sm">【發動媒介：深淵之刃】</div>
                <p>必須使用以「深淵碎片（アビスシャード）」加工製成的<strong>「深淵之刃（アビスナイフ）」</strong>作為觸媒切開空間以引發力量（深淵之刃可加工為任何帶刃武器）。</p>
              </div>
              <div class="bg-zinc-950 p-4 rounded-lg border border-zinc-800 space-y-1.5">
                <div class="font-bold text-amber-400 text-sm">【發聲語言與判定】</div>
                <p>無固定咒文，但發動時必須以<strong>「魔神語」</strong>表達願望（習得本技能即自動獲得魔神語的交流能力）。使用時進行魔法行使判定。</p>
              </div>
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
          <div class="bg-zinc-900 border border-zinc-800 p-5 rounded-xl shadow-md">
            <div class="flex flex-wrap justify-between items-center gap-2 mb-3">
              <h2 class="text-xl font-bold text-amber-400 flex items-center">
                <i class="fa-solid fa-shoe-prints mr-2.5 text-amber-500"></i>舞鬥士 (Battle Dancer) 概要與規則
              </h2>
              <div class="flex gap-2">
                <span class="text-xs bg-zinc-800 text-zinc-300 px-2.5 py-1 rounded border border-zinc-700 font-medium">戰士系技能</span>
                <span class="text-xs bg-amber-950/80 text-amber-300 px-2.5 py-1 rounded border border-amber-800 font-bold">經驗表 A</span>
              </div>
            </div>
            <p class="text-xs text-zinc-300 leading-relaxed">
              以輕盈如舞蹈般的動作翻弄敵人，兼具近接攻擊與高迴避能力的閃避型戰士技能。所有 PC 種族皆可習得。
            </p>
          </div>
  
          <div class="bg-zinc-900 border border-zinc-800 p-5 rounded-xl space-y-4">
            <h3 class="text-base font-bold text-amber-400 border-b border-zinc-800 pb-2 flex items-center">
              <i class="fa-solid fa-bullseye mr-2 text-amber-500"></i>1. 技能判定、傷害計算與裝備限制
            </h3>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs leading-relaxed">
              <div class="bg-zinc-950 p-4 rounded-lg border border-zinc-800 space-y-1.5">
                <div class="font-bold text-amber-400 text-sm">【判定、傷害與咒歌免疫】</div>
                <ul class="list-disc list-inside space-y-1 text-zinc-300">
                  <li>可進行<strong>「命中力判定」</strong>與<strong>「迴避力判定」</strong>。</li>
                  <li>物理追加傷害計入<strong>「舞鬥士技能等級 ＋ 筋力加值」</strong>。</li>
                  <li>使用舞鬥士進行命中或迴避時，<strong>完全不受咒歌【Dance】懲罰影響</strong>。</li>
                </ul>
              </div>
              <div class="bg-zinc-950 p-4 rounded-lg border border-zinc-800 space-y-1.5">
                <div class="font-bold text-amber-400 text-sm">【武器與防具限制】</div>
                <ul class="list-disc list-inside space-y-1 text-zinc-300">
                  <li><strong>武器：</strong>可使用近接、投擲武器與「拳鬥士專用」武器；<strong>無法使用任何射擊武器</strong>。</li>
                  <li><strong>防具：</strong>僅能穿著「拳鬥士專用」或「拳鬥士可裝備」的防具，且<strong>完全無法裝備任何盾牌</strong>。</li>
                </ul>
              </div>
            </div>
          </div>
  
          <div class="bg-zinc-900 border border-zinc-800 p-5 rounded-xl space-y-4">
            <h3 class="text-base font-bold text-amber-400 border-b border-zinc-800 pb-2 flex items-center">
              <i class="fa-solid fa-crown mr-2 text-amber-500"></i>2. 特技習得與「宣言特技欄追加」
            </h3>
            <div class="bg-zinc-950 p-4 rounded-lg border border-zinc-800 space-y-3 text-xs leading-relaxed">
              <p>舞鬥士達到 <strong>1 級</strong>時獲得 <strong>1 個額外宣言特技欄位</strong>（僅限使用舞鬥士命中或迴避時宣告）：可選《庇護攻擊 I》《斬返 I》《牽制攻擊 I》《全力攻擊 I》（不可升 III）《挑釁攻擊 I》《必殺攻擊 I》《魔力擊》，以及放浪者專用的《陰影步 I》《捨身攻擊 I》《露拂》《亂擊 I》。</p>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-3 pt-1">
                <div class="p-3 bg-zinc-900 border border-zinc-800 rounded">
                  <strong class="text-amber-400">7 級自動習得：</strong><span class="text-cyan-300 font-bold">《舞動流轉 (舞い流し)》</span>
                </div>
                <div class="p-3 bg-zinc-900 border border-zinc-800 rounded">
                  <strong class="text-amber-400">13 級自動習得：</strong><span class="text-cyan-300 font-bold">《戰鬥大師 (バトルマスター)》</span>
                </div>
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
          <div class="bg-zinc-900 border border-zinc-800 p-5 rounded-xl shadow-md">
            <div class="flex flex-wrap justify-between items-center gap-2 mb-3">
              <h2 class="text-xl font-bold text-amber-400 flex items-center">
                <i class="fa-solid fa-swords mr-2.5 text-amber-500"></i>SW2.5 上級戰鬥規則 (Advanced Combat)
              </h2>
              <span class="text-xs bg-amber-950/80 text-amber-300 px-2.5 py-1 rounded border border-amber-800 font-bold">戰鬥系統規則</span>
            </div>
            <p class="text-xs text-zinc-400 leading-relaxed">
              以 1m (整數米) 為單位精確管理戰場座標、自由移動、動態亂戰區域與精密的射程/移動妨害機制。
            </p>
          </div>
  
          <div class="bg-zinc-900 border border-zinc-800 p-5 rounded-xl space-y-4">
            <h3 class="text-base font-bold text-amber-400 border-b border-zinc-800 pb-2 flex items-center">
              <i class="fa-solid fa-person-boot mr-2 text-amber-500"></i>1. 移動種類與距離限制
            </h3>
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
                    <td class="p-2.5 border border-zinc-800">移動途中可能遭受敵方移動妨害。移動中途可執行補助動作。</td>
                  </tr>
                  <tr>
                    <td class="p-2.5 border border-zinc-800 font-bold text-pink-400">全力移動</td>
                    <td class="p-2.5 border border-zinc-800 text-cyan-300 font-mono">移動力 × 3 (m)</td>
                    <td class="p-2.5 border border-zinc-800 text-pink-300">迴避修正 <strong>-4</strong>，不可執行主動作</td>
                    <td class="p-2.5 border border-zinc-800">高速長距離奔跑。僅可於移動前後執行補助動作。</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
  
          <div class="bg-zinc-900 border border-zinc-800 p-5 rounded-xl space-y-4">
            <h3 class="text-base font-bold text-amber-400 border-b border-zinc-800 pb-2 flex items-center">
              <i class="fa-solid fa-users-rays mr-2 text-amber-500"></i>2. 亂戰區域與移動妨害
            </h3>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs leading-relaxed">
              <div class="bg-zinc-950 p-4 rounded-lg border border-zinc-800 space-y-2">
                <div class="font-bold text-amber-400 text-sm">【亂戰半徑對照表 (上限 20 人/部位)】</div>
                <table class="w-full text-center border-collapse border border-zinc-800 font-mono">
                  <thead class="bg-zinc-900 text-amber-400">
                    <tr><th class="p-1.5 border border-zinc-800">參與人數 (含部位)</th><th class="p-1.5 border border-zinc-800">前後半徑</th></tr>
                  </thead>
                  <tbody class="divide-y divide-zinc-800">
                    <tr><td class="p-1.5 border border-zinc-800">2 ～ 5 人</td><td class="p-1.5 border border-zinc-800 text-emerald-400 font-bold">3 m</td></tr>
                    <tr><td class="p-1.5 border border-zinc-800">6 ～ 10 人</td><td class="p-1.5 border border-zinc-800 text-emerald-400 font-bold">4 m</td></tr>
                    <tr><td class="p-1.5 border border-zinc-800">11 ～ 15 人</td><td class="p-1.5 border border-zinc-800 text-emerald-400 font-bold">5 m</td></tr>
                    <tr><td class="p-1.5 border border-zinc-800">16 ～ 20 人</td><td class="p-1.5 border border-zinc-800 text-emerald-400 font-bold">6 m</td></tr>
                  </tbody>
                </table>
              </div>
              <div class="bg-zinc-950 p-4 rounded-lg border border-zinc-800 space-y-2">
                <div class="font-bold text-amber-400 text-sm">【移動妨害、遮蔽與貫通/突破】</div>
                <ul class="list-disc list-inside space-y-1 text-zinc-300">
                  <li><strong>移動妨害：</strong>妨害側總部位數必須高於通過側半數（1:2 比例），截停後於該座標形成新亂戰（制限移動與「形狀：突破」免疫）。</li>
                  <li><strong>遮蔽與誤射：</strong>跨過亂戰射擊後方產生遮蔽（需《鷹眼》）；往亂戰內射擊無《精密射擊》會隨機誤射。</li>
                </ul>
              </div>
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
    }
  ];