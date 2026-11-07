export const ruleSections = [
  {
    id: 'sec-magitech_rules',
    title: '魔動機術技能 (Magitech) 概要與規則 (表A)',
    icon: 'fa-solid fa-gears',
    content: `
          <div class="bg-zinc-900 border border-zinc-800 p-6 rounded-xl space-y-4">
              <h2 class="text-xl font-bold text-amber-500 flex items-center">
                  <i class="fa-solid fa-gears mr-2"></i> 魔動機術技能 (Magitech) 概要與規則 (表A)
              </h2>
              <div class="text-xs text-zinc-300 space-y-3 leading-relaxed">
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
      `,
  },
  {
    id: 'sec-bard_rules',
    title: '吟遊詩人（Bard）技能概要與用語說明(表B)',
    icon: 'fa-solid fa-feather',
    content: `
      <!-- 吟遊詩人規則 -->
      <div class="bg-zinc-900 border border-zinc-800 p-6 rounded-xl space-y-4">
          <h2 class="text-xl font-bold text-amber-500 flex items-center">
              <i class="fa-solid fa-feather mr-2"></i> 吟遊詩人（Bard）技能概要與用語說明(表B)
          </h2>
          <p class="text-sm text-zinc-300 leading-relaxed">
              吟遊詩人技能可透過樂器的演奏，歌唱，給予聽到的人各式各樣的效果。每習得一個等級的吟遊詩人技能就可習得一個語言的對話。此外可進行見識判定以及演奏判定。
          </p>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
              <div class="bg-zinc-950 p-4 rounded-lg border border-zinc-800 space-y-2">
                  <div class="font-bold text-amber-400 text-sm">【演奏判定與巧奏值】</div>
                  <p class="text-zinc-400"><strong>演奏判定：</strong>『吟遊詩人技能 + 精神力加值』</p>
                  <p class="text-zinc-400"><strong>巧奏值：</strong>當演奏判定 ≥ 巧奏值時可獲得追加樂素。</p>
              </div>
              <div class="bg-zinc-950 p-4 rounded-lg border border-zinc-800 space-y-2">
                  <div class="font-bold text-amber-400 text-sm">【基本用語】</div>
                  <ul class="list-disc list-inside space-y-1 text-zinc-400">
                      <li><strong>奏者：</strong>熟練使用 Bard 技能發揮特殊效果的角色。</li>
                      <li><strong>奏力：</strong>演奏判定的基準值，產生傷害或回復效果時會作為追加數值（類似魔力）。</li>
                      <li><strong>咒歌：</strong>對聽者造成精神影響的樂曲，原則上屬精神效果屬性。</li>
                      <li><strong>終律：</strong>滿足條件時演奏的特殊曲目，可造成直接傷害或回復。</li>
                      <li><strong>樂素：</strong>分為高揚（↑）、鎮靜（↓）、魅惑（♡）三種。</li>
                  </ul>
              </div>
          </div>
      </div>

      <!-- 戰鬥流程與使用限制 -->
      <div class="bg-zinc-900 border border-zinc-800 p-6 rounded-xl space-y-4">
          <h3 class="text-lg font-bold text-amber-400 flex items-center">
              <i class="fa-solid fa-guitar mr-2"></i> 樂器、歌唱與移動限制
          </h3>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
              <div class="bg-zinc-950 p-4 rounded-lg border border-zinc-800 space-y-2">
                  <div class="font-bold text-amber-400">移動限制</div>
                  <p class="text-zinc-300">在使用咒歌或終律時，角色的移動必須為「限制移動」。</p>
              </div>
              <div class="bg-zinc-950 p-4 rounded-lg border border-zinc-800 space-y-2">
                  <div class="font-bold text-amber-400">樂器需求 (2H)</div>
                  <p class="text-zinc-300">除非特別說明，樂器一律為「用法：雙手（2H）」。無法演奏旋律的樂器（如鼓），演奏判定遭受 -4 懲罰且必須歌唱。</p>
              </div>
              <div class="bg-zinc-950 p-4 rounded-lg border border-zinc-800 space-y-2">
                  <div class="font-bold text-amber-400">管樂器與歌唱</div>
                  <p class="text-zinc-300">管樂器演奏時無法歌唱，因此無法使用「需要歌唱」的咒歌。終律全都不需要歌唱。</p>
              </div>
          </div>
      </div>

      <!-- 聽覺不良修正表 -->
      <div class="bg-zinc-900 border border-zinc-800 p-6 rounded-xl space-y-3">
          <h3 class="text-lg font-bold text-amber-400 flex items-center">
              <i class="fa-solid fa-ear-deaf mr-2"></i> 因聽覺不良造成的修正表
          </h3>
          <div class="overflow-x-auto">
              <table class="w-full text-xs text-left border-collapse border border-zinc-800">
                  <thead>
                      <tr class="bg-zinc-950 text-amber-400 border-b border-zinc-800">
                          <th class="p-2 border border-zinc-800">狀況</th>
                          <th class="p-2 border border-zinc-800">行動判定懲罰修正</th>
                          <th class="p-2 border border-zinc-800">對咒歌・終律的抵抗加值</th>
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

      <!-- 寵物（Pet）規則 -->
      <div class="bg-zinc-900 border border-zinc-800 p-6 rounded-xl space-y-3">
          <h3 class="text-lg font-bold text-amber-400 flex items-center">
              <i class="fa-solid fa-kiwi-bird mr-2"></i> 寵物（Pet）規則整理
          </h3>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs text-zinc-300">
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
      `,
  },
  {
    id: 'sec-sorcerer_rules',
    title: '操靈魔法（Sorcerer Magic）與魔像製造規則',
    icon: 'fa-solid fa-hand-sparkles',
    content: `
      <div class="bg-zinc-900 border border-zinc-800 p-6 rounded-xl space-y-4 text-zinc-300">
      <h2 class="text-xl font-bold text-amber-400 flex items-center">
          <i class="fa-solid fa-hand-sparkles mr-2"></i> 操靈魔法（Sorcerer Magic） (表A)與魔像製造規則
      </h2>
      <div class="space-y-3 text-sm leading-relaxed text-zinc-400">
          <p>
              操靈魔法的行使條件與真語魔法相同，需要專用的魔法發動體。操靈術士能夠製造並操控魔像與不死生物。在魔法文明時代，此項技術達到了巔峰，造物的一部分至今仍遺留在現代的拉克西亞，作為迷宮深處的危險遺產。
          </p>
          <p>
              與古代造物的永恆生命與靈活自律相比，現代製造的造物持續時間短暫且指令有限。玩家角色（PC）可製造的魔像與不死生物類型及其規則如下：
          </p>
      </div>
  </div>
  
  <!-- 2. 魔像製造條件與素材規則 -->
  <div class="bg-zinc-900 border border-zinc-800 p-6 rounded-xl space-y-4 text-zinc-300">
      <h3 class="text-lg font-bold text-amber-400 flex items-center">
          <i class="fa-solid fa-hand-sparkles mr-2"></i> 魔物製造的基本條件與素材
      </h3>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
          <div class="bg-zinc-950 p-4 rounded-lg border border-zinc-800 space-y-2">
              <div class="font-bold text-amber-400 text-sm">必要技能與等級</div>
              <p class="text-zinc-400">必須以對應等級習得<strong>召喚術士（コンジャラー）</strong>技能，才能製造該等級的魔物。</p>
          </div>
          <div class="bg-zinc-950 p-4 rounded-lg border border-zinc-800 space-y-2">
              <div class="font-bold text-amber-400 text-sm">通常素材（消耗性）</div>
              <p class="text-zinc-400">施展魔法時消耗並消失，無法回收。適用於短期或一次性魔像製造。</p>
          </div>
          <div class="bg-zinc-950 p-4 rounded-lg border border-zinc-800 space-y-2">
              <div class="font-bold text-amber-400 text-sm">上級素材（可回收）</div>
              <p class="text-zinc-400">效果結束或主動解除時可回收重複使用。若 HP 降至 0 以下或遺留戰場則損毀。</p>
          </div>
      </div>
  </div>
  
  <!-- 3. 魔像製造資料表 (Lv 3 ~ 15) -->
  <div class="bg-zinc-900 border border-zinc-800 p-6 rounded-xl space-y-4">
      <h3 class="text-lg font-bold text-amber-400 flex items-center">
          <i class="fa-solid fa-list-ul mr-2"></i> 魔像製造道具對照表 (Lv 3 ～ 15)
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
  
  <!-- 4. 魔像強化道具說明與表格 -->
  <div class="bg-zinc-900 border border-zinc-800 p-6 rounded-xl space-y-4">
      <h3 class="text-lg font-bold text-amber-400 flex items-center">
          <i class="fa-solid fa-shield-halved mr-2"></i> 魔像強化道具規則與清單
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
  
  <!-- 5. 命令機制規則說明 -->
  <div class="bg-zinc-900 border border-zinc-800 p-6 rounded-xl space-y-4 text-zinc-300">
      <h3 class="text-lg font-bold text-amber-400 flex items-center">
          <i class="fa-solid fa-comments mr-2"></i> 對魔像與不死生物的命令規則
      </h3>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
          <div class="bg-zinc-950 p-4 rounded-lg border border-zinc-800 space-y-2">
              <div class="font-bold text-amber-400 text-sm">【遵從逐步指令】</div>
              <p class="text-zinc-400">術者可在自己手番內以<strong>補助動作</strong>每回合對一體魔物下達指令。指令僅當回合有效。非戰鬥中指揮多體會使移動速度減半（2體）或三分之一（3體）。</p>
          </div>
          <div class="bg-zinc-950 p-4 rounded-lg border border-zinc-800 space-y-2">
              <div class="font-bold text-amber-400 text-sm">【執行守護任務】</div>
              <p class="text-zinc-400">只能指定「場所」或「物體」為守護目標，無法指定角色或術者。若守護物體被搬離範圍或破壞，將自動進入「無命令狀態」。</p>
          </div>
          <div class="bg-zinc-950 p-4 rounded-lg border border-zinc-800 space-y-2">
              <div class="font-bold text-amber-400 text-sm">【追隨移動】</div>
              <p class="text-zinc-400">追隨術者或指定目標移動。此狀態下僅能移動無法執行其他動作。若目標脫離視線且找不到將進入無命令狀態。</p>
          </div>
          <div class="bg-zinc-950 p-4 rounded-lg border border-zinc-800 space-y-2">
              <div class="font-bold text-amber-400 text-sm">【無命令狀態】</div>
              <p class="text-zinc-400">原命令無法執行或未獲下達時進入此狀態。魔物會完全靜止不動，必須透過【指令】魔法、呼應石或支配之杖重新指定。</p>
          </div>
      </div>
  </div>
      `,
  },
  {
    id: 'sec-sorcery_rules',
    title: '真語魔法 (Sorcery) 概要與行使條件',
    icon: 'fa-solid fa-scroll',
    content: `
        <div class="bg-zinc-900 border border-zinc-800 p-6 rounded-xl space-y-4 text-zinc-300">
            <h2 class="text-xl font-bold text-amber-500 flex items-center">
                <i class="fa-solid fa-scroll mr-2"></i> 真語魔法 (Sorcery) 概要與行使條件
            </h2>
            <div class="space-y-4 text-xs leading-relaxed">
                <!-- 魔法發動體 -->
                <div class="bg-zinc-950 p-4 rounded-lg border border-zinc-800 space-y-3">
                    <div class="font-bold text-amber-400 text-sm">【魔法發動體】</div>
                    <p>施展真語魔法時必須準備〈魔法發動體〉。角色可準備多個發動體，只要有任意一個處於可用狀態即可施展魔法。發動體不綁定持有者，借用他人的發動體亦可施展，且數值不會受影響。</p>
                    
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-3 pt-2">
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

                <!-- 行使條件與限制 -->
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div class="bg-zinc-950 p-4 rounded-lg border border-zinc-800 space-y-2">
                        <div class="font-bold text-amber-400 text-sm">【手臂自由的確保（魔法文字）】</div>
                        <p>為在中空描繪魔法文字，持有發動體（或配戴戒指）的手臂必須能自由活動。若 GM 裁定手臂明確無法揮動，則無法施展真語魔法。</p>
                    </div>
                    <div class="bg-zinc-950 p-4 rounded-lg border border-zinc-800 space-y-2">
                        <div class="font-bold text-amber-400 text-sm">【咒文詠唱】</div>
                        <p>施展真語魔法必須使用「魔法文明語」發聲詠唱咒文。若處於無法發聲的狀態，則無法施展真語魔法。</p>
                    </div>
                </div>

                <!-- 鎧甲限制 -->
                <div class="bg-zinc-950 p-4 rounded-lg border border-zinc-800 space-y-2">
                    <div class="font-bold text-amber-400 text-sm">【鎧甲限制（重裝懲罰）】</div>
                    <p>為方便描繪魔法文字，術者宜儘量輕裝。穿著防具時判定會受到以下修正：</p>
                    <ul class="list-disc list-inside text-zinc-400 space-y-1 pl-1">
                        <li>穿著 <span class="text-red-400 font-semibold">〈金屬鎧甲〉</span>：魔法行使判定承受 <span class="text-red-400 font-bold">-4</span> 的修正。</li>
                        <li>穿著必要筋力 10 以上的 <span class="text-orange-400 font-semibold">〈非金屬鎧甲〉</span>：魔法行使判定承受 <span class="text-orange-400 font-bold">-2</span> 的修正。</li>
                    </ul>
                </div>

                <!-- 夢魘種族特例 -->
                <div class="bg-amber-950/20 border border-amber-900/40 p-4 rounded-lg space-y-2">
                    <div class="font-bold text-amber-400 text-sm">【夢魘（Nightmare）［異貌］特例】</div>
                    <p class="text-zinc-300">夢魘角色的種族特徵［異貌］使用期間，可無視「確保手臂自由」與「咒文詠唱」的行使條件。同時，亦可完全無視「鎧甲限制」帶來的 -4 或 -2 判定修正懲罰。</p>
                </div>

                <!-- 列表特別項目 -->
                <div class="bg-zinc-950 p-4 rounded-lg border border-zinc-800 space-y-2">
                    <div class="font-bold text-amber-400 text-sm">【列表特別項目：詠唱】</div>
                    <p>列表中顯示的詠唱為施法時術者所喊出的咒文。對於需要時間施展的魔法，雖然包含複雜步驟與長篇詠唱，但因篇幅無法全數寫出，列表中僅記載最終階段使用的詠唱句。</p>
                </div>
            </div>
        </div>
    `,
  },
  {
    id: 'sec-wizard_rules',
    title: '魔導師 (ウィザード) 與深智魔法規則',
    icon: 'fa-solid fa-hat-wizard',
    content: `
        <div class="bg-zinc-900 border border-zinc-800 p-6 rounded-xl space-y-4 text-zinc-300">
            <h2 class="text-xl font-bold text-amber-500 flex items-center">
                <i class="fa-solid fa-hat-wizard mr-2"></i> 魔導師 (ウィザード) 與深智魔法規則
            </h2>
            <div class="space-y-4 text-xs leading-relaxed">
                
                <!-- 魔導師的身分定義 -->
                <div class="bg-zinc-950 p-4 rounded-lg border border-zinc-800 space-y-2">
                    <div class="font-bold text-amber-400 text-sm">【魔導師的身分定義】</div>
                    <p>魔導師（ウィザード）是同時習得<strong>「真語魔法 (ソーサラー)」</strong>與<strong>「操靈魔法 (コンジャラー)」</strong>這兩種技能者的稱號。他們是極度接近魔法文明時代技術與知識的存在，掌握了魔法最核心的真諦。</p>
                </div>

                <!-- 深智魔法的系統與行使條件 -->
                <div class="bg-zinc-950 p-4 rounded-lg border border-zinc-800 space-y-2">
                    <div class="font-bold text-amber-400 text-sm">【深智魔法的行使條件與限制】</div>
                    <ul class="list-disc list-inside space-y-1 text-zinc-300">
                        <li><strong>施法條件與防具限制</strong>：完全等同於「真語魔法」與「操靈魔法」。</li>
                        <li><strong>魔法發動體</strong>：可共用同一個發動體來施展真語魔法、操靈魔法以及深智魔法。</li>
                        <li><strong>戰鬥特技注意事項</strong>：即便習得戰鬥特技《MP減輕／真語魔法師》或《MP減輕／操靈魔法師》，也<strong>無法</strong>減少深智魔法的 MP 消耗。遊戲中亦不存在《MP減輕／魔導師》這項特技。</li>
                    </ul>
                </div>

                <!-- 等級與魔力計算規則 -->
                <div class="bg-zinc-950 p-4 rounded-lg border border-zinc-800 space-y-2">
                    <div class="font-bold text-amber-400 text-sm">【等級與魔力計算規則】</div>
                    <p>深智魔法是同時習得真語魔法與操靈魔法的角色會自動獲得的系統，本身並無獨立的專屬技能。其強度與可用等級依下列規則決定：</p>
                    <ul class="list-disc list-inside space-y-1 text-zinc-300">
                        <li><strong>可使用的魔法等級</strong>：取兩者中<strong>「較低的技能等級」</strong>。</li>
                        <li><strong>魔力（施法強度）</strong>：取兩者中<strong>「較高的技能等級」＋知力加成</strong>。</li>
                    </ul>
                    <div class="mt-2 p-2 bg-zinc-900 rounded border border-zinc-800 text-zinc-400">
                        <strong>💡 舉例：</strong>若角色擁有真語 4 級、操靈 3 級，則可使用最高 <strong>3 級</strong>的深智魔法，魔力計算方式為 <strong>4 ＋ 知力加成</strong>。
                    </div>
                </div>

                <!-- 複合魔法與多重效果 -->
                <div class="bg-zinc-950 p-4 rounded-lg border border-zinc-800 space-y-2">
                    <div class="font-bold text-amber-400 text-sm">【複合魔法與特殊效果規則】</div>
                    <p><strong>1. 賦予多重魔法效果的複合魔法：</strong></p>
                    <p class="text-zinc-400">部分深智魔法只需施展一次便能產生多種效果（例如【堅韌術】同時賦予【活力術】與【魔法反制】）。此類魔法須遵守<strong>「同名不重複原則」</strong>，若目標已受部分效果影響，重複施展效果不會累加，僅會追加剩餘未有的效果。</p>
                    
                    <p class="mt-2"><strong>2. 特殊目標選取「1體＋1體」：</strong></p>
                    <p class="text-zinc-400">先對選定的其中 1 體（通常為敵方）施加效果，成功後再讓另 1 體（通常為友方）獲得另一效果，兩者皆須在射程內。可受戰鬥特技<strong>《魔法擴大／數》</strong>影響（以每一對 Pair 為單位倍增 MP 消耗），且所有被選中者皆須為互不相同的個體。</p>
                </div>

            </div>
        </div>
    `,
  },
  {
    id: 'sec-divine_rules',
    title: '神聖魔法 (Divine Magic) 概要與規則',
    icon: 'fa-solid fa-hands-praying',
    content: `
            <div class="bg-zinc-900 border border-zinc-800 p-6 rounded-xl space-y-4 text-zinc-300">
                <h2 class="text-xl font-bold text-amber-500 flex items-center">
                    <i class="fa-solid fa-hands-praying mr-2"></i> 神聖魔法 (Divine Magic) 概要與規則
                </h2>
                <div class="space-y-4 text-xs leading-relaxed">
                    
                    <!-- 1. 神聖魔法的特色 -->
                    <div class="bg-zinc-950 p-4 rounded-lg border border-zinc-800 space-y-3">
                        <div class="font-bold text-amber-400 text-sm">【神聖魔法的特色與施展條件】</div>
                        <div class="space-y-2">
                            <p><strong>信仰的神明：</strong>拉克西亞（Laxia）存在許多神明。獲得「神官（Priest）」技能時必須選擇 1 位信仰的神明，無法同時信仰多位神明。</p>
                            <p><strong>魔法分類：</strong></p>
                            <ul class="list-disc list-inside space-y-1 pl-2 text-zinc-400">
                                <li><strong class="text-zinc-300">基本神聖魔法：</strong>所有神官共通可使用的魔法。</li>
                                <li><strong class="text-zinc-300">特殊神聖魔法：</strong>僅信仰該位神明者才能使用的專屬魔法（須滿足等級需求）。</li>
                                <li>神官可使用的魔法組合為：<span class="text-amber-300">「基本神聖魔法」＋「信仰神明的特殊神聖魔法」</span>。</li>
                            </ul>
                            <p><strong>施展條件：</strong></p>
                            <ul class="list-disc list-inside space-y-1 pl-2 text-zinc-400">
                                <li><strong class="text-zinc-300">〈聖印〉：</strong>必須裝備在任意部位作為裝飾品。可預備多個聖印，亦可借用同信仰角色的聖印。</li>
                                <li><strong class="text-zinc-300">發聲：</strong>必須出聲向神明祈禱（語言不限）。若處於無法發聲狀態則無法施展。</li>
                                <li><strong class="text-zinc-300">防具無限制／不需肢體自由：</strong>穿著重鎧無限制與懲罰；不需要肢體自由動作，被綁縛或限制行動依然可施法。</li>
                            </ul>
                        </div>
                    </div>
  
                    <!-- 2. 神的力量與影響圈 -->
                    <div class="bg-zinc-950 p-4 rounded-lg border border-zinc-800 space-y-3">
                        <div class="font-bold text-amber-400 text-sm">【神的力量與影響圈】</div>
                        <p>神的信徒分布會影響神格的力量範圍。若超出勢力圈，神官施展魔法時的 <span class="text-cyan-400">MP 消耗會增加</span>（此增加量於《魔法擴大／＊＊》或多目標倍算前加算）。</p>
                        
                        <!-- 影響圈表格 -->
                        <div class="overflow-x-auto my-2">
                            <table class="w-full text-left border-collapse border border-zinc-800 text-xs">
                                <thead>
                                    <tr class="bg-zinc-900 text-amber-400 border-b border-zinc-800">
                                        <th class="p-2 border-r border-zinc-800">神的分類</th>
                                        <th class="p-2 border-r border-zinc-800">影響圈範圍</th>
                                        <th class="p-2">影響圈外 MP 消耗</th>
                                    </tr>
                                </thead>
                                <tbody class="divide-y divide-zinc-800 text-zinc-300">
                                    <tr>
                                        <td class="p-2 border-r border-zinc-800 font-bold text-amber-300">古代神</td>
                                        <td class="p-2 border-r border-zinc-800">拉克西亞全域</td>
                                        <td class="p-2 text-emerald-400">無額外消耗 (－)</td>
                                    </tr>
                                    <tr>
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
  
                        <p class="font-bold text-zinc-200 mt-2">克服影響圈限制的方法（祠堂與傳教）：</p>
                        <ul class="list-disc list-inside space-y-1.5 pl-2 text-zinc-400">
                            <li><strong class="text-zinc-300">1. 祠堂 (ほこら)：</strong>花費 1,000 G 與 3 天建造。以祠堂為中心半徑 1 公里內不會發生 MP 額外消耗（若祠堂被破壞或污染則失效）。</li>
                            <li><strong class="text-zinc-300">2. 傳教 (布教)：</strong>獲得都市人口 1/200 的信徒（如 12,000 人都市需 60 人信徒），並準備祠堂或簡易神殿供每週參拜。以此都市為據點時免除 MP 額外消耗。（註：塔比特與符文人不計入信徒人數）。</li>
                        </ul>
                    </div>
  
                    <!-- 3. 陣營與神格分類 (†與‡) -->
                    <div class="bg-zinc-950 p-4 rounded-lg border border-zinc-800 space-y-3">
                        <div class="font-bold text-amber-400 text-sm">【第一／第二／第三之劍信仰與神明分類】</div>
                        <p>魔法能否施展由<span class="text-amber-300">信仰的神格陣營</span>決定，與神官自身的種族（人族或蠻族）無關。神明分類如下：</p>
                        
                        <div class="space-y-2 pl-2">
                            <div>
                                <span class="font-bold text-blue-400">† 魔法的神明（第一之劍系 / 第三之劍系）：</span>
                                <ul class="list-disc list-inside pl-4 text-zinc-400 space-y-0.5">
                                    <li><strong>古代神：</strong>始祖神萊福斯、太陽神提丹、鐵神阿斯特莉亞、炎武帝葛倫達爾、賢神基爾希亞</li>
                                    <li><strong>大神：</strong>月神希恩、奈落之盾神伊夫、引導之星神哈魯拉、樹神達里翁</li>
                                </ul>
                            </div>
                            <div>
                                <span class="font-bold text-purple-400">‡ 魔法的神明（第二之劍系）：</span>
                                <ul class="list-disc list-inside pl-4 text-zinc-400 space-y-0.5">
                                    <li><strong>古代神：</strong>戰神達爾克雷姆</li>
                                    <li><strong>大神：</strong>漆黑神艾里亞克、不死女王札伊德斯、滲血之神尼巴塞普斯※、民之神古爾瓦佐※、荒天凶神布拉絲=巴雷斯※</li>
                                    <li><strong>小神：</strong>許金神梅加爾※、慈愛與複仇之女神米莉查、食習神米爾斯※、傳令神帕洛※、傀儡神阿爾馬克※、神之指尖米爾塔巴爾、織線神阿德妮※、風與陷阱之女神芙露西爾、放浪神薩杜爾※、鐵道神王斯特拉斯福德</li>
                                </ul>
                            </div>
                            <div>
                                <span class="font-bold text-pink-400">特殊神明：</span>
                                <p class="pl-4 text-zinc-400"><strong>狂神拉莉絲（大神）：</strong>侍奉拉莉絲的神官可隨時自由施展 † 與 ‡ 雙方的魔法。</p>
                            </div>
                            <div>
                                <span class="font-bold text-amber-300">年輕神明造成的偏差（プレ）：</span>
                                <p class="pl-4 text-zinc-400">成神未滿 1,000 年的小神，神格會隨信徒信仰產生波動。同信仰神官所用的魔法系統可能存在差異，具體由 GM 決定。</p>
                            </div>
                        </div>
                    </div>
  
                    <!-- 4. 神聖魔法特殊規則 -->
                    <div class="bg-zinc-950 p-4 rounded-lg border border-zinc-800 space-y-2">
                        <div class="font-bold text-amber-400 text-sm">【魔法列表特殊規則】</div>
                        <ul class="list-disc list-inside space-y-1 text-zinc-300">
                            <li><strong>非重複原則：</strong>相對應的成對魔法（如【神聖武器】與【邪惡武器】）不可重複疊加，目標必須選擇接受新魔法或保留舊魔法；【神聖領域】與【邪惡領域】則會互相抵消。</li>
                            <li><strong>標記符號說明：</strong>「†」為第一/第三之劍系神明賦予之魔法；「‡」為第二之劍系神明賦予之魔法。</li>
                        </ul>
                    </div>
  
                </div>
            </div>
        `,
  },
  {
    id: 'sec-fairy_rules',
    title: '妖精魔法 (Fairy Magic) 概要與行使條件',
    icon: 'fa-solid fa-gem',
    content: `
            <div class="bg-zinc-900 border border-zinc-800 p-6 rounded-xl space-y-4 text-zinc-300">
                <h2 class="text-xl font-bold text-amber-500 flex items-center">
                    <i class="fa-solid fa-gem mr-2"></i> 妖精魔法 (Fairy Magic) 概要與行使條件
                </h2>
                <div class="space-y-4 text-xs leading-relaxed">
                    <!-- 妖精使的寶石 -->
                    <div class="bg-zinc-950 p-4 rounded-lg border border-zinc-800 space-y-3">
                        <div class="font-bold text-amber-400 text-sm">【〈妖精使的寶石〉裝備與價格】</div>
                        <p>為了施展妖精魔法，必須將稱為〈妖精使的寶石〉的寶石作為飾品裝備。隨著妖精使者的等級提升，所需的寶石價值也會提高。</p>
                        
                        <!-- 價格表格 -->
                        <div class="overflow-x-auto pt-1">
                            <table class="w-full text-center border-collapse border border-zinc-800">
                                <thead>
                                    <tr class="bg-zinc-900 text-amber-300 border-b border-zinc-800">
                                        <th class="p-2 border-r border-zinc-800">等級</th>
                                        <th class="p-2 border-r border-zinc-800">價格 (1顆)</th>
                                        <th class="p-2">價格 (6顆)</th>
                                    </tr>
                                </thead>
                                <tbody class="divide-y divide-zinc-800 text-zinc-400">
                                    <tr><td class="p-1.5 border-r border-zinc-800">1 ~ 2 級</td><td class="p-1.5 border-r border-zinc-800">50 G</td><td class="p-1.5">300 G</td></tr>
                                    <tr><td class="p-1.5 border-r border-zinc-800">3 ~ 4 級</td><td class="p-1.5 border-r border-zinc-800">100 G</td><td class="p-1.5">600 G</td></tr>
                                    <tr><td class="p-1.5 border-r border-zinc-800">5 ~ 6 級</td><td class="p-1.5 border-r border-zinc-800">150 G</td><td class="p-1.5">900 G</td></tr>
                                    <tr><td class="p-1.5 border-r border-zinc-800">7 ~ 8 級</td><td class="p-1.5 border-r border-zinc-800">200 G</td><td class="p-1.5">1200 G</td></tr>
                                    <tr><td class="p-1.5 border-r border-zinc-800">9 ~ 10 級</td><td class="p-1.5 border-r border-zinc-800">250 G</td><td class="p-1.5">1500 G</td></tr>
                                    <tr><td class="p-1.5 border-r border-zinc-800">11 ~ 12 級</td><td class="p-1.5 border-r border-zinc-800">300 G</td><td class="p-1.5">1800 G</td></tr>
                                    <tr><td class="p-1.5 border-r border-zinc-800">13 ~ 14 級</td><td class="p-1.5 border-r border-zinc-800">350 G</td><td class="p-1.5">2100 G</td></tr>
                                    <tr><td class="p-1.5 border-r border-zinc-800">15 級</td><td class="p-1.5 border-r border-zinc-800">400 G</td><td class="p-1.5">2400 G</td></tr>
                                </tbody>
                            </table>
                        </div>
  
                        <div class="space-y-1.5 pt-2 text-zinc-400">
                            <p>• 〈妖精使的寶石〉被視為「裝備部位任意」的飾品。妖精使者需根據其契約模式，將 3 至 6 顆寶石分別裝備於不同的裝備部位。</p>
                            <p>• <span class="text-amber-300 font-semibold">〈寶石盒〉</span>：可將 4 顆寶石組合為一件裝備使用的飾品。</p>
                            <p>• <span class="text-amber-300 font-semibold">〈華美的寶石飾品〉</span>：可將 6 顆寶石組合為一件裝備使用的飾品。</p>
                        </div>
                    </div>
  
                    <!-- 施行條件與限制 -->
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div class="bg-zinc-950 p-4 rounded-lg border border-zinc-800 space-y-2">
                            <div class="font-bold text-amber-400 text-sm">【發聲條件（妖精語）】</div>
                            <p>施展妖精魔法時，需要以「妖精語」發聲來呼喚妖精。如果處於無法發聲的狀態，則無法施展魔法。</p>
                        </div>
                        <div class="bg-zinc-950 p-4 rounded-lg border border-zinc-800 space-y-2">
                            <div class="font-bold text-amber-400 text-sm">【身體自由（不需肢體動作）】</div>
                            <p>施展妖精魔法時，身體的自由活動並非必要條件。因此即使陷入被束縛、無法自由行動的狀態，仍能進行魔法施展。</p>
                        </div>
                    </div>
  
                    <!-- 防具限制 -->
                    <div class="bg-zinc-950 p-4 rounded-lg border border-zinc-800 space-y-2">
                        <div class="font-bold text-amber-400 text-sm">【鎧甲限制（重裝懲罰）】</div>
                        <p>施展妖精魔法時，防具裝備限制如下：</p>
                        <ul class="list-disc list-inside text-zinc-400 space-y-1 pl-1">
                            <li>穿著 <span class="text-red-400 font-semibold">〈金屬鎧〉</span>：進行魔法施展判定時將承受 <span class="text-red-400 font-bold">-4</span> 的懲罰修正。</li>
                            <li>穿著 <span class="text-emerald-400 font-semibold">〈非金屬鎧〉</span> 或使用 <span class="text-emerald-400 font-semibold">〈盾〉</span>：不受限制，可以自由裝備並施展魔法。</li>
                        </ul>
                    </div>
  
                    <!-- 妖精魔法分類說明 -->
                    <div class="bg-zinc-950 p-4 rounded-lg border border-zinc-800 space-y-3">
                        <div class="font-bold text-amber-400 text-sm">【妖精魔法分類與特例】</div>
                        <p>妖精魔法分為「基本妖精魔法」、「屬性妖精魔法」和「特殊妖精魔法」三種類型：</p>
                        <div class="space-y-2 text-zinc-400 pl-1">
                            <p><strong class="text-amber-300">1. 基本妖精魔法：</strong>妖精使者隨時都能使用的魔法。根據「妖精使者技能」等級，可使用相應等級的基本妖精魔法。</p>
                            <p><strong class="text-amber-300">2. 屬性妖精魔法：</strong>分為「土」、「水・冰」、「炎」、「風」、「光」、「闇」六大屬性系統。</p>
                            <p><strong class="text-amber-300">3. 特殊妖精魔法：</strong>包含純能量等特殊型態的魔法（如混沌射擊）。</p>
                        </div>
                        <div class="bg-amber-950/20 border border-amber-900/40 p-3 rounded text-zinc-300 text-xs">
                            <span class="text-amber-400 font-bold">⚠️ 光屬性特別注意：</span>光屬性的妖精魔法，對「魔法生物」、「魔動機」、「不死族」的角色完全無效。
                        </div>
                    </div>
                </div>
            </div>
        `,
  },
  {
    id: 'sec-alchemist_rules',
    title: '賦術（Alchemist）技能概要與規則說明',
    icon: 'fa-solid fa-layer-group',
    content: `
        <!-- 賦術基本概要與用語 -->
        <div class="bg-zinc-900 border border-zinc-800 p-6 rounded-xl space-y-4">
            <h2 class="text-xl font-bold text-amber-500 flex items-center">
                <i class="fa-solid fa-layer-group mr-2"></i> 賦術（Alchemist）技能概要與用語說明
            </h2>
            <p class="text-sm text-zinc-300 leading-relaxed">
                習得煉金術師技能者可進行「賦術判定」。賦術判定用於判定賦術是否對目標產生效果。
                習得煉金術師技能即可獲得「魔動機文明語」的對話與閱讀能力。此外可進行賦術判定、見識判定、文獻判定與藥品學判定。
            </p>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                <div class="bg-zinc-950 p-4 rounded-lg border border-zinc-800 space-y-2">
                    <div class="font-bold text-amber-400 text-sm">【賦術判定與用語】</div>
                    <p class="text-zinc-400"><strong>基準值：</strong>『煉金術師技能等級 + 智力加值』</p>
                    <p class="text-zinc-400"><strong>所要時間：</strong>一瞬</p>
                    <p class="text-zinc-400"><strong>煉金術師：</strong>習得煉金術師技能並運用其技藝的角色。</p>
                    <p class="text-zinc-400"><strong>賦術：</strong>煉金術師所使用的特殊效果，多用於支援同伴或弱化敵人，無法直接造成巨大傷害。</p>
                </div>
                <div class="bg-zinc-950 p-4 rounded-lg border border-zinc-800 space-y-2">
                    <div class="font-bold text-amber-400 text-sm">【賦術的獲得與裝備】</div>
                    <p class="text-zinc-400"><strong>獲得方式：</strong>等級每提升1級可選擇1個賦術。部分賦術有最低技能等級限制（Lv5 或 Lv10）。</p>
                    <p class="text-zinc-400"><strong>必要裝備：</strong>必須裝備〈煉金術士工具包（Alchemist Kit）〉（裝備部位：右手、左手、腰、其他，或以2H裝備〈卡牌發射器（Card Shooter）〉代用）。工具包最多可收納超過100張卡牌。</p>
                </div>
            </div>
        </div>
      
        <!-- 使用條件與動作區分 -->
        <div class="bg-zinc-900 border border-zinc-800 p-6 rounded-xl space-y-4">
            <h3 class="text-lg font-bold text-amber-400 flex items-center">
                <i class="fa-solid fa-layer-group mr-2"></i> 賦術的使用動作與限制
            </h3>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                <div class="bg-zinc-950 p-4 rounded-lg border border-zinc-800 space-y-2">
                    <div class="font-bold text-amber-400">主動作使用 (1回合1次)</div>
                    <ul class="list-disc list-inside text-zinc-300 space-y-1">
                        <li><strong>對象擴大：</strong>「對象：1體」且射程為10m/30m的賦術，可同時對複數目標使用（消耗卡牌數依人數倍增）。</li>
                        <li><strong>卡牌階級統一：</strong>同時使用的卡牌階級必須統一。若混用不同階級，效果以其中最低階級決定。</li>
                        <li><strong>判定與失敗：</strong>需進行賦術判定。若自動失敗，賦術無效且消耗卡牌白白浪費。抵抗比較依據對方的精神抵抗力達成值。</li>
                    </ul>
                </div>
                <div class="bg-zinc-950 p-4 rounded-lg border border-zinc-800 space-y-2">
                    <div class="font-bold text-amber-400">輔助動作使用 (1回合1次)</div>
                    <ul class="list-disc list-inside text-zinc-300 space-y-1">
                        <li><strong>使用優勢：</strong>不佔用主動作，免進行賦術判定且不會自動失敗。</li>
                        <li><strong>使用限制：</strong>無法擴大為複數目標（僅限1體），達成值視為「0」。若對有抵抗意志的對象使用，對方將自動抵抗成功。</li>
                        <li><strong>戰鬥準備：</strong>部分標註「戰鬥準備」的賦術可在戰鬥準備階段以輔助動作規則行使（僅限1次與1體）。</li>
                    </ul>
                </div>
            </div>
            <div class="bg-zinc-950 p-3 rounded-lg border border-zinc-800 text-xs text-zinc-400 space-y-1">
                <p><strong>移動限制：</strong>使用賦術的手番，角色移動僅限「限制移動」或「通常移動」，不可進行「全力移動」。</p>
                <p><strong>解除與屬性：</strong>具持續時間的賦術可由煉金術師以輔助動作主動解除。賦術不屬於魔法，無法被【消除魔法（Dispel Magic）】解除，亦不會觸發【感應魔法】；但會受特定解除能力（如【破詞】、【消滅刺針】）影響。</p>
            </div>
        </div>
      
        <!-- 原質卡（Material Card）與粗製卡規 -->
        <div class="bg-zinc-900 border border-zinc-800 p-6 rounded-xl space-y-4">
            <h3 class="text-lg font-bold text-amber-400 flex items-center">
                <i class="fa-solid fa-layer-group mr-2"></i> 原質卡（Material Card）與粗製卡機制
            </h3>
            
            <!-- 5色說明 -->
            <div class="grid grid-cols-2 md:grid-cols-5 gap-2 text-xs text-center">
                <div class="bg-red-950/40 border border-red-800/60 p-2 rounded-lg text-red-300">
                    <div class="font-bold">紅 (赤)</div>
                    <div class="text-[10px] text-zinc-400 mt-1">動物特質<br>(毛髮/牙/爪/血液)</div>
                </div>
                <div class="bg-emerald-950/40 border border-emerald-800/60 p-2 rounded-lg text-emerald-300">
                    <div class="font-bold">綠 (綠)</div>
                    <div class="text-[10px] text-zinc-400 mt-1">植物特質<br>(花/葉/枝/蔓)</div>
                </div>
                <div class="bg-zinc-950 border border-zinc-700 p-2 rounded-lg text-zinc-300">
                    <div class="font-bold">黑 (黒)</div>
                    <div class="text-[10px] text-zinc-400 mt-1">礦物特質<br>(鐵/金屬/魔動機零件)</div>
                </div>
                <div class="bg-slate-900 border border-slate-700 p-2 rounded-lg text-slate-200">
                    <div class="font-bold">白 (白)</div>
                    <div class="text-[10px] text-zinc-400 mt-1">精神特質<br>(武器/道具/防具)</div>
                </div>
                <div class="bg-amber-950/40 border border-amber-800/60 p-2 rounded-lg text-amber-300">
                    <div class="font-bold">金 (金)</div>
                    <div class="text-[10px] text-zinc-400 mt-1">能量特質<br>(寶石/貴金屬)</div>
                </div>
            </div>
      
            <!-- 價格與粗製卡表格 -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                <div>
                    <div class="font-bold text-amber-400 mb-2">正規原質卡購買價格表 (不分顏色)</div>
                    <table class="w-full text-left border-collapse border border-zinc-800">
                        <thead>
                            <tr class="bg-zinc-950 text-amber-400 border-b border-zinc-800">
                                <th class="p-2 border border-zinc-800">階級 (Rank)</th>
                                <th class="p-2 border border-zinc-800">價格 (G)</th>
                            </tr>
                        </thead>
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
                        <thead>
                            <tr class="bg-zinc-950 text-amber-400 border-b border-zinc-800">
                                <th class="p-2 border border-zinc-800">階級 (Rank)</th>
                                <th class="p-2 border border-zinc-800">戰利品賣出價格需求</th>
                            </tr>
                        </thead>
                        <tbody class="divide-y divide-zinc-800 text-zinc-300">
                            <tr><td class="p-2 border border-zinc-800 font-bold">B 階</td><td class="p-2 border border-zinc-800">10 ～ 99 G</td></tr>
                            <tr class="bg-zinc-950/40"><td class="p-2 border border-zinc-800 font-bold">A 階</td><td class="p-2 border border-zinc-800">100 ～ 999 G</td></tr>
                            <tr><td class="p-2 border border-zinc-800 font-bold">S 階</td><td class="p-2 border border-zinc-800">1,000 ～ 9,999 G</td></tr>
                            <tr class="bg-zinc-950/40"><td class="p-2 border border-zinc-800 font-bold">SS 階</td><td class="p-2 border border-zinc-800">10,000 G ～</td></tr>
                        </tbody>
                    </table>
                    <p class="text-[11px] text-zinc-500 mt-1">* 賣價未滿 10G 之戰利品無法作為粗製卡素材。</p>
                </div>
            </div>
      
            <div class="bg-zinc-950 p-3 rounded-lg border border-zinc-800 text-xs text-zinc-300 space-y-1">
                <div class="font-bold text-amber-400">粗製卡（粗製のマテリアルカード）規則要點：</div>
                <p>1. <strong>作製時間：</strong>每製作1張需要耗時 10 分鐘（需配備煉金術士工具包）。若由煉金術師親自進行戰利品決定，可與確定戰利品作業合併於 10 分鐘內完成。</p>
                <p>2. <strong>戰利品破壞：</strong>經提取製作粗製卡後，原戰利品會變為沙土或失去價值，無法再單獨賣出換錢。</p>
                <p>3. <strong>粗製卡轉售：</strong>未使用的粗製卡可攜回魔動機技能協會，以「該戰利品原本的賣價」賣出給協會，不會造成金錢損失。</p>
            </div>
        </div>
        `,
  },
  {
    id: 'sec-bibliomancer_rules',
    title: '典籍魔導士（Bibliomancer）技能概要與規則說明',
    icon: 'fa-solid fa-book-bookmark',
    content: `
        <div class="bg-zinc-900 border border-zinc-800 p-6 rounded-xl space-y-4">
        <h2 class="text-xl font-bold text-amber-500 flex items-center">
            <i class="fa-solid fa-book-bookmark mr-2"></i> 典籍魔導士技能 魔法使系技能（表 A）
        </h2>
        <p class="text-sm text-zinc-300 leading-relaxed">
            典籍魔導士技能，是在魔法文明時代作為祕術而被創造、使用的「祕奧魔法」，並將其於現代重新復甦、加以行使的技能。習得書籍術師技能的人，被稱為「祕文使」。
        </p>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs text-zinc-300 pt-2">
            <div class="bg-zinc-950 p-3 rounded border border-zinc-800">
                <span class="font-bold text-amber-400 block mb-1">祕奧魔法的魔力</span>
                ＝ 典籍魔導士技能等級 ＋ 智力加值
            </div>
            <div class="bg-zinc-950 p-3 rounded border border-zinc-800">
                <span class="font-bold text-amber-400 block mb-1">可行使的判定與語言</span>
                ● 魔法行使判定<br>
                ◆ 文獻判定（一旦習得，便能進行「魔法文明語」的對話與閱讀）
            </div>
        </div>
    </div>

    <div class="bg-zinc-900 border border-zinc-800 p-6 rounded-xl space-y-4">
        <h3 class="text-lg font-bold text-amber-400 flex items-center">
            <i class="fa-solid fa-scroll mr-2"></i> 祕奧魔法基本規則與限制
        </h3>
        <ul class="list-disc list-inside text-sm text-zinc-300 space-y-2 leading-relaxed">
            <li><strong class="text-amber-300">行使條件：</strong>必須用手指描摹〈魔導書〉中預先準備好的魔法，並在最後發出魔法名稱。未經自己準備的魔導書會提高失敗風險。</li>
            <li><strong class="text-amber-300">移動限制：</strong>行使祕奧魔法的回合，移動種類僅限於「限制移動」。</li>
            <li><strong class="text-amber-300">發聲與鎧甲限制：</strong>最後必須以魔法文明語發出魔法名稱（【異貌】狀態的夢魘不需發聲）。行使時受〈金屬鎧〉或必要筋力 10 以上〈非金屬鎧〉的鎧甲限制，並承擔對應的懲罰修正（夢魘異貌時不受限）。</li>
            <li><strong class="text-amber-300">鎧甲懲罰修正：</strong>必要筋力 10 以上的非金屬鎧：-2。金屬鎧：-4。</li>
            <li><strong class="text-amber-300">〈魔導書〉：</strong>行使祕奧魔法必須持有〈魔導書〉（視為「使用：1H」的道具）。一次祕奧魔法行使僅能使用一冊（雙手各持一冊時擇一）。兼具武器或盾牌功能的魔導書可依規則「裝備」並獲得對應效果。</li>
            <li><strong class="text-amber-300">受限的種族：</strong>獸化人（リカント）在【獸化】狀態下無法發出魔法文明語，故無法行使祕奧魔法。</li>
            <li><strong class="text-amber-300">出生表的替換：</strong>使用「仔細創角」時，若出生表有真語魔法或操靈魔法，可替換為典籍魔導士技能。</li>
        </ul>
    </div>

    <div class="bg-zinc-900 border border-zinc-800 p-6 rounded-xl space-y-4">
        <h3 class="text-lg font-bold text-amber-400 flex items-center">
            <i class="fa-solid fa-coins mr-2"></i> 祕奧魔法的取得與購入
        </h3>
        <p class="text-xs text-zinc-300">
            典籍魔導士不會因技能提升自動獲得魔法，必須從祕文書公會以金錢「購買」，或在冒險途中（遺跡等）發現古代〈魔導書〉來取得。
        </p>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div class="space-y-2">
                <span class="text-sm font-bold text-amber-300 block">■ 市場購入價格與販售價格</span>
                <table class="w-full text-xs text-left text-zinc-300 border border-zinc-800">
                    <thead class="bg-zinc-950 text-amber-400 border-b border-zinc-800">
                        <tr>
                            <th class="p-1.5 border-r border-zinc-800">等級</th>
                            <th class="p-1.5 border-r border-zinc-800">購入價格</th>
                            <th class="p-1.5 border-r border-zinc-800">冒險販售（已解析）</th>
                            <th class="p-1.5">冒險販售（未發現）</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="border-b border-zinc-800/60"><td class="p-1.5 border-r border-zinc-800">1</td><td class="p-1.5 border-r border-zinc-800">500G</td><td class="p-1.5 border-r border-zinc-800">250G</td><td class="p-1.5">1,000G</td></tr>
                        <tr class="border-b border-zinc-800/60"><td class="p-1.5 border-r border-zinc-800">2</td><td class="p-1.5 border-r border-zinc-800">1,500G</td><td class="p-1.5 border-r border-zinc-800">750G</td><td class="p-1.5">3,000G</td></tr>
                        <tr class="border-b border-zinc-800/60"><td class="p-1.5 border-r border-zinc-800">3</td><td class="p-1.5 border-r border-zinc-800">3,000G</td><td class="p-1.5 border-r border-zinc-800">1,500G</td><td class="p-1.5">6,000G</td></tr>
                        <tr class="border-b border-zinc-800/60"><td class="p-1.5 border-r border-zinc-800">4</td><td class="p-1.5 border-r border-zinc-800">6,000G</td><td class="p-1.5 border-r border-zinc-800">3,000G</td><td class="p-1.5">12,000G</td></tr>
                        <tr class="border-b border-zinc-800/60"><td class="p-1.5 border-r border-zinc-800">5</td><td class="p-1.5 border-r border-zinc-800">12,000G</td><td class="p-1.5 border-r border-zinc-800">6,000G</td><td class="p-1.5">24,000G</td></tr>
                    </tbody>
                </table>
            </div>
            <div class="space-y-2">
                <span class="text-sm font-bold text-amber-300 block">■ 未發現魔法解析所需時間</span>
                <table class="w-full text-xs text-left text-zinc-300 border border-zinc-800">
                    <thead class="bg-zinc-950 text-amber-400 border-b border-zinc-800">
                        <tr>
                            <th class="p-1.5 border-r border-zinc-800">魔法等級</th>
                            <th class="p-1.5">所需解析時間</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="border-b border-zinc-800/60"><td class="p-1.5 border-r border-zinc-800">Lv 1</td><td class="p-1.5">3 天</td></tr>
                        <tr class="border-b border-zinc-800/60"><td class="p-1.5 border-r border-zinc-800">Lv 2</td><td class="p-1.5">1 週</td></tr>
                        <tr class="border-b border-zinc-800/60"><td class="p-1.5 border-r border-zinc-800">Lv 3</td><td class="p-1.5">2 週</td></tr>
                        <tr class="border-b border-zinc-800/60"><td class="p-1.5 border-r border-zinc-800">Lv 4</td><td class="p-1.5">3 週</td></tr>
                        <tr class="border-b border-zinc-800/60"><td class="p-1.5 border-r border-zinc-800">Lv 5</td><td class="p-1.5">1 個月</td></tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>

    <div class="bg-zinc-900 border border-zinc-800 p-6 rounded-xl space-y-4">
        <h3 class="text-lg font-bold text-amber-400 flex items-center">
            <i class="fa-solid fa-person-military-pointing mr-2"></i> 行使框的運用與風險
        </h3>
        <div class="space-y-3 text-sm text-zinc-300 leading-relaxed">
            <p>
                祕奧魔法分為「準備行使框」與「應急行使框」。在冒險中可以帶多本魔導書，但「準備行使框」為所有魔導書共用，並非帶多本就能增加準備魔法的數量。
            </p>
            <div class="bg-zinc-950 p-4 rounded-lg border border-zinc-800 space-y-3 text-xs">
                <div>
                    <strong class="text-amber-400">● 準備行使框：</strong>
                    必須預先（前置準備）將術式寫入魔導書中。若要在冒險中更換已寫入準備框的魔法，必須花費「與魔法等級對應」的時間進行「準備框改寫」：
                    <span class="text-amber-300 font-bold">1 階：1小時 ｜ 2 階：2小時 ｜ 3 階：3小時 ｜ 4 階：6小時 ｜ 5 階：12小時</span>。
                </div>
                <div>
                    <strong class="text-amber-400">● 應急行使框：</strong>
                    允許術者「不需預先準備」而緊急行使已習得、或冒險中取得（他人魔導書上）的魔法，但不能在補助動作和戰鬥準備時使用，且需承擔「特殊失敗」風險。
                </div>
                <div>
                    <strong class="text-red-400">◆ 應急行使的特殊失敗：</strong>
                    跑團（Session）開始時，PC 須擲 2d 決定本場的「特殊失敗值」（若出現 2、12 則重新投擲，得到 3～11 的其一數值，此值在該場次中不可被《劍之加護》或《命運變轉》等效果修改）。
                    在進行應急行使判定時，若投骰結果（原骰）等於該「特殊失敗值」，則不論魔力或難度為何，均視為「自動失敗」（特殊失敗）。此時魔法不產生任何效果、MP 正常消耗，且無法獲得 50 點經驗值。若發生特殊失敗，則須立即重新擲 2d 刷新本場次的特殊失敗值（一樣迴避 2 和 12 ）。
                </div>
            </div>
        </div>
    </div>
        `,
  },
  {
    id: 'sec-darkhunter_rules',
    title: '暗獵者 (Dark Hunter) 概要與操氣規則',
    icon: 'fa-solid fa-crosshairs',
    content: `
            <div class="bg-zinc-900 border border-zinc-800 p-6 rounded-xl space-y-4 text-zinc-300">
                <h2 class="text-xl font-bold text-amber-500 flex items-center">
                    <i class="fa-solid fa-crosshairs mr-2"></i> 暗獵者技能 (Dark Hunter) 概要與規則 (其他類技能 B表)
                </h2>
                <div class="space-y-4 text-xs leading-relaxed">
                    
                    <!-- 1. 暗獵者技能概要 -->
                    <div class="bg-zinc-950 p-4 rounded-lg border border-zinc-800 space-y-2">
                        <div class="font-bold text-amber-400 text-sm">【暗獵者（闇狩）技能概要】</div>
                        <p>這是一種運用極高集中力，以燃燒生命力為代價，觸發多種效果的<strong>「操氣」</strong>技能。最初目的是為了討伐異界怪物「魔神」，但所開發的多種效果也可靈活應用於其他情境。擅長操控投擲武器以及辨識魔神的真面目與弱點。習得者被稱為<strong>「闇狩」</strong>。</p>
                        
                        <div class="mt-2 p-3 bg-zinc-900 rounded border border-zinc-800 space-y-1">
                            <div class="font-bold text-amber-300">🔍 專用判定：魔物知識判定（限魔神）[智力]</div>
                            <ul class="list-disc list-inside space-y-1 text-zinc-400 pl-1">
                                <li><strong>自動判斷：</strong>遭遇魔物時可自動判斷是否屬於「分類：魔神」。</li>
                                <li><strong>弱點辨識：</strong>若確認為魔神，可進行魔物知識判定。達成值高於弱點值即可得知弱點並適用。</li>
                                <li><strong>擬態偽裝限制：</strong>若魔物使用擬態或變身能力偽裝，無法自動識破。必須先透過真偽判定揭露異常，否則將持續誤認且無法進行魔物知識判定。</li>
                                <li>此判定類別歸屬於<strong>「知識判定類別」</strong>。</li>
                            </ul>
                        </div>
                    </div>
  
                    <!-- 2. 操氣與理力計算 -->
                    <div class="bg-zinc-950 p-4 rounded-lg border border-zinc-800 space-y-2">
                        <div class="font-bold text-amber-400 text-sm">【操氣與理力】</div>
                        <p><strong>操氣：</strong>闇狩獲得並使用的特殊能力。</p>
                        <p><strong>理力：</strong>表示闇狩使用操氣時的效果強度，類似於魔法系技能中的「魔力」。</p>
                        <div class="p-2 bg-zinc-900 text-amber-300 font-mono text-center rounded border border-zinc-800">
                            理力 ＝ 黑暗獵人技能等級 ＋ 精神力修正值
                        </div>
                    </div>
  
                    <!-- 3. 操氣的獲得條件與規則 -->
                    <div class="bg-zinc-950 p-4 rounded-lg border border-zinc-800 space-y-2">
                        <div class="font-bold text-amber-400 text-sm">【操氣的獲得條件與規則】</div>
                        <ul class="list-disc list-inside space-y-1 text-zinc-300">
                            <li><strong>獲得頻率：</strong>角色每提升 1 級黑暗獵人技能，必須立即從操氣列表中選擇並習得 1 個操氣。無法保留選擇，且一旦習得無法遺忘或放棄。</li>
                            <li><strong>最低等級限制：</strong>當黑暗獵人技能達到 5級 或 10級 時，可選擇最低等級至少為 5級（10級）的操氣。即使技能等級超過 5 或 10 級，仍可自由選擇更低等級的操氣。</li>
                            <li><strong>前提條件：</strong>部分操氣需先習得其他前提操氣。若前提條件以「或（or）」連接，只需具備其中一項即可。</li>
                        </ul>
                    </div>
  
                    <!-- 4. 操氣的使用條件與種類 -->
                    <div class="bg-zinc-950 p-4 rounded-lg border border-zinc-800 space-y-3">
                        <div class="font-bold text-amber-400 text-sm">【操氣的使用條件與分類】</div>
                        
                        <div class="grid grid-cols-1 md:grid-cols-3 gap-2 text-zinc-300">
                            <div class="p-2 bg-zinc-900 border border-zinc-800 rounded">
                                <div class="font-bold text-amber-300 mb-1">○ 常時效果操氣</div>
                                <p class="text-zinc-400">僅對闇狩自身有效，習得後效果持續生效。</p>
                            </div>
                            <div class="p-2 bg-zinc-900 border border-zinc-800 rounded">
                                <div class="font-bold text-amber-300 mb-1">△ 補助動作操氣</div>
                                <p class="text-zinc-400">於自身回合內作為補助動作使用（部分標有「△」亦可在戰鬥準備階段使用）。不需行為判定，效果自動生效（達成值視為 0）。每回合可多次使用，但同名效果不重複/累積。</p>
                            </div>
                            <div class="p-2 bg-zinc-900 border border-zinc-800 rounded">
                                <div class="font-bold text-amber-300 mb-1">＞＞ 主動動作操氣</div>
                                <p class="text-zinc-400">作為主動動作使用，需進行行為判定並計算達成值。無法在執行全力移動的手番內使用。</p>
                            </div>
                        </div>
  
                        <ul class="list-disc list-inside space-y-1 text-zinc-400 pt-1">
                            <li><strong>裝備限制：</strong>使用操氣時無特定裝備限制。</li>
                            <li><strong>發聲與動作：</strong>通常無需發聲或特定肢體動作。</li>
                        </ul>
                    </div>
  
                    <!-- 5. 成本 (HP 消耗) -->
                    <div class="bg-zinc-950 p-4 rounded-lg border border-zinc-800 space-y-2">
                        <div class="font-bold text-amber-400 text-sm">【操氣的成本（HP 消耗）】</div>
                        <p>補助動作與主動動作操氣需要消耗 HP 作為成本：</p>
                        <ul class="list-disc list-inside space-y-1 text-zinc-300 pl-2">
                            <li><strong class="text-zinc-200">補助動作操氣：</strong>HP 消耗為固定值 <span class="text-amber-300">2 點</span> 或隨機 <span class="text-amber-300">1d 點</span>（使用時擲骰決定，結果不可取消）。</li>
                            <li><strong class="text-zinc-200">主動動作操氣：</strong>HP 消耗由擲出的 <span class="text-amber-300">2d 點數</span> 決定：
                                <ul class="list-circle list-inside pl-4 text-zinc-400 space-y-0.5 mt-1">
                                    <li>若結果為 1與1（自動失敗）：HP 消耗為 <strong>0 點</strong>。</li>
                                    <li>若標示為 <span class="font-mono text-amber-300">2d(x)</span>：代表消耗有最大值 x，結果超過時僅消耗最大值 x 點。</li>
                                    <li>若僅標示為 <span class="font-mono text-amber-300">2d</span>：沒有最大值，最高可消耗 12 點。</li>
                                </ul>
                            </li>
                        </ul>
                    </div>
  
                    <!-- 6. 操氣的解除與非魔法特性 -->
                    <div class="bg-zinc-950 p-4 rounded-lg border border-zinc-800 space-y-3">
                        <div class="font-bold text-amber-400 text-sm">【解除規則與非魔法特性】</div>
                        
                        <div class="space-y-2 text-zinc-300">
                            <p><strong>自行解除：</strong>具有持續時間的操氣可由闇狩自身主動解除，此動作視為補助動作。</p>
                            
                            <p><strong>魔法無效（無法被常規解魔）：</strong>操氣並非魔法，因此無法被【解除魔法 (Dispel Magic)】或草原妖精的種族特性「魔法破壞」解除。</p>
                            
                            <p><strong>特定能力有效：</strong>僅有明確標示「可影響操氣」或「可解除非魔法效果」的能力才可解除操氣，例如：戰鬥特技《咒語破解 (Word Break)》、魔法【完全取消】、賦術【解魔針】。</p>
  
                            <p><strong>非魔法特性：</strong></p>
                            <ul class="list-disc list-inside pl-4 text-zinc-400 space-y-0.5">
                                <li>無法被【魔力感知】或【法力搜尋】等魔法檢測到。</li>
                                <li>不受《魔法擴充／＊＊》等魔法行使專用特技的增益影響。</li>
                            </ul>
  
                            <div class="p-3 bg-zinc-900 border border-zinc-800 rounded space-y-1 text-zinc-400">
                                <div class="font-bold text-amber-300">🕸️ 特殊介質：念絲</div>
                                <p>部分操氣使用散發淡淡白光的氣之絲線（念絲）。念絲從闇狩身體延伸而出，他人可明確察覺；念絲<strong>無形無質且不具實體</strong>，無法透過物理方式觸碰或切斷。</p>
                            </div>
                        </div>
                    </div>
  
                </div>
            </div>
        `,
  },
  {
    id: 'sec-druid_rules',
    title: '德魯伊 (Druid) 概要與森羅魔法規則',
    icon: 'fa-solid fa-leaf',
    content: `
            <div class="bg-zinc-900 border border-zinc-800 p-6 rounded-xl space-y-4 text-zinc-300">
                <h2 class="text-xl font-bold text-amber-500 flex items-center">
                    <i class="fa-solid fa-leaf mr-2"></i> 德魯伊技能 (Druid) 概要與規則 (魔法師系技能 A表)
                </h2>
                <div class="space-y-4 text-xs leading-relaxed">
                    
                    <!-- 1. 德魯伊技能概要 -->
                    <div class="bg-zinc-950 p-4 rounded-lg border border-zinc-800 space-y-2">
                        <div class="font-bold text-amber-400 text-sm">【德魯伊（森羅導師）技能概要】</div>
                        <p>德魯伊是能與寄宿於精靈之森與大地中的動植物之魂溝通，並借助其力量施展<strong>「森羅魔法」</strong>的存在，也被稱為<strong>「森羅導師」</strong>。他們崇尚禁慾、熱愛自然萬物，目標是撫慰精靈並讓其回歸輪迴。對於「死者復活」與靈魂「汙穢」相對寬容，但積極討伐不死族、魔神與消滅「奈落魔域」。</p>
                        
                        <div class="mt-2 p-3 bg-zinc-900 rounded border border-zinc-800 space-y-1">
                            <div class="font-bold text-amber-300">🔍 專用判定：魔法施放判定 [智力]</div>
                            <ul class="list-disc list-inside space-y-1 text-zinc-400 pl-1">
                                <li><strong>判定算式：</strong>德魯伊技能等級 ＋ 智力修正值 ＋ 2d6（詳見規則書 I p.116）。</li>
                                <li><strong>種族限制：</strong><span class="text-red-400 font-semibold">符民（ルーンフォーク）無法習得</span>。原因是符民無法感知精靈的存在（但仍能看到精靈引發的現象並受到其效果影響）。多見於精靈、樹精靈與利坎特族。</li>
                            </ul>
                        </div>
                    </div>
  
                    <!-- 2. 森羅魔法與施法條件 -->
                    <div class="bg-zinc-950 p-4 rounded-lg border border-zinc-800 space-y-2">
                        <div class="font-bold text-amber-400 text-sm">【森羅魔法與施法條件】</div>
                        <p>習得 1 等即可使用等級 1 的所有森羅魔法，此後技能每提升 1 等即可自動學得新等級的魔法。</p>
                        
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-2 text-zinc-300 mt-2">
                            <div class="p-2 bg-zinc-900 border border-zinc-800 rounded">
                                <div class="font-bold text-amber-300 mb-1">🚶 移動限制</div>
                                <p class="text-zinc-400">該回合施展魔法時移動類型僅限於<strong>「限制移動」</strong>。</p>
                            </div>
                            <div class="p-2 bg-zinc-900 border border-zinc-800 rounded">
                                <div class="font-bold text-amber-300 mb-1">🗣️ 發聲與語言</div>
                                <p class="text-zinc-400">必須發聲（語言不限，『獸變貌』下亦可使用；『異貌』時的夢魘可不發聲）。</p>
                            </div>
                            <div class="p-2 bg-zinc-900 border border-zinc-800 rounded">
                                <div class="font-bold text-amber-300 mb-1">🛡️ 鎧甲限制</div>
                                <p class="text-zinc-400">裝備<strong>〈金屬鎧〉</strong>時魔力 -4（『異貌』時的夢魘可無視）。</p>
                            </div>
                            <div class="p-2 bg-zinc-900 border border-zinc-800 rounded">
                                <div class="font-bold text-amber-300 mb-1">🪄 必須裝備：宿靈之仗</div>
                                <p class="text-zinc-400">行使時必須裝備〈宿靈之仗〉（用法: 1H，基本價格 100G；可用杖類武器加工，費用 100G）。</p>
                            </div>
                        </div>
                    </div>
  
                    <!-- 3. 特殊性質與用語說明 -->
                    <div class="bg-zinc-950 p-4 rounded-lg border border-zinc-800 space-y-2">
                        <div class="font-bold text-amber-400 text-sm">【森羅魔法的特殊性質】</div>
                        <ul class="list-disc list-inside space-y-1.5 text-zinc-300 pl-1">
                            <li><strong>1. 同名魔法認定：</strong>名稱格式為「【效果名／生物名】」（例如：【大護衛／迪諾斯】）。只要「效果名」相同，不論後方「生物名」為何皆視為同名魔法，效果不可重複或累積。</li>
                            <li><strong>2. 精靈體（精霊体）：</strong>除「時間：一瞬」外，顯現的精靈體會在效果期間待在對象身邊提供效果。無法透過武器或魔法直接干涉，精靈體亦不會進行施法以外的行動。</li>
                            <li><strong>3. 抵抗判定（生命抵抗）：</strong>森羅魔法的抵抗為「抵抗：生命／消滅」或「生命／半減」，是使用目標的<strong>【生命抵抗力】</strong>進行判定，而非精神抵抗力。</li>
                        </ul>
                    </div>
  
                    <!-- 4. 圖騰降靈 (シンボリックロア) 與受益者圖騰 -->
                    <div class="bg-zinc-950 p-4 rounded-lg border border-zinc-800 space-y-3">
                        <div class="font-bold text-amber-400 text-sm">【圖騰降靈（シンボリックロア）與受益者的圖騰】</div>
                        <p>包含【大護衛】、【多重行動者】與【天賦之植】等特殊分類。具備極大威力，但需要事前準備與嚴格限制。</p>
                        
                        <div class="p-3 bg-zinc-900 border border-zinc-800 rounded space-y-1.5 text-zinc-300">
                            <div class="font-bold text-amber-300">🎋 受益者的圖騰（受益者のシンボル）</div>
                            <p class="text-zinc-400">接受效果的對象必須持有（不需裝備）。須由德魯伊購買〈未加工的宿靈之木〉（100G），並與對象見面 1 小時專門製作（德魯伊自身欲接受效果亦須持有）。角色死亡復甦後仍可使用。</p>
                            <p class="text-zinc-400"><strong>適用種族：</strong>僅限人族、蠻族、動物、植物、幻獸、妖精。<em>（妖精使召喚之妖精，以及視為騎獸的動物/幻獸無法獲得）</em></p>
                        </div>

                        <div class="space-y-1">
                            <div class="font-bold text-amber-300">⚠️ 圖騰降靈的使用限制：</div>
                            <ul class="list-disc list-inside space-y-1 text-zinc-400 pl-2">
                                <li><strong>1 回合 1 次：</strong>同名的圖騰降靈 1 回合只能施展 1 次（可在一回合中使用不同名者各 1 次）。</li>
                                <li><strong>特技限制：</strong><span class="text-amber-300">不適用《魔法擴大／數》</span>。</li>
                                <li><strong>對象與次數：</strong>對象必須持有〈受益者的圖騰〉，且同名魔法效果對同一對象 <span class="text-amber-300">1 天限 1 次</span>。</li>
                                <li><strong>騎獸限制：</strong>僅限騎乘狀態下發揮（須由騎手持有圖騰），騎手與騎獸視為複數部位角色。</li>
                            </ul>
                        </div>
                    </div>
  
                    <!-- 5. 戰術與運用注意事項 -->
                    <div class="bg-zinc-950 p-4 rounded-lg border border-zinc-800 space-y-3">
                        <div class="font-bold text-amber-400 text-sm">【圖騰降靈與特殊魔法運用指南】</div>
                        
                        <div class="space-y-2 text-zinc-300">
                            <div class="p-2.5 bg-zinc-900 border border-zinc-800 rounded">
                                <span class="font-bold text-amber-300">1. 【多重行動者】（マルチプルアクター）：</span>
                                <span class="text-zinc-400">單體爆發支援（主動作）。旨在「一輪內強化單一隊友」，效果於對象手番結束時自動消失。建議採取「輪流做主角」意識分段強化隊友，並保留至 Boss 戰。</span>
                            </div>

                            <div class="p-2.5 bg-zinc-900 border border-zinc-800 rounded">
                                <span class="font-bold text-amber-300">2. 【大護衛】（ビッグディフェンダー）：</span>
                                <span class="text-zinc-400">扭轉劣勢的最後王牌。可用於隊友面臨滅團危機時救急，亦可配合《全力攻擊》、《必殺攻擊》或【狂熱】等降低迴避率的特技，抵銷副作用實現無風險強攻。</span>
                            </div>

                            <div class="p-2.5 bg-zinc-900 border border-zinc-800 rounded">
                                <span class="font-bold text-amber-300">3. 【天賦植入】（ギフテッドプラント）：</span>
                                <span class="text-zinc-400">彌補特技不足的應急性魔法（如臨時補足《魔法控制》）。效果僅支援該手番內的一次行動，感覺需要時應果斷使用。</span>
                            </div>

                            <div class="p-2.5 bg-zinc-900 border border-zinc-800 rounded">
                                <span class="font-bold text-amber-300">4. 【自然之力】（ナチュラルパワー）特註：</span>
                                <span class="text-zinc-400">需消耗「主動作」施展。獲得的「臨時 MP」通常於隨後的「補助動作」中用於施展其他森羅魔法（若宣告《雙重施法》或受到【加速】影響，亦可用於主動作）。</span>
                            </div>
                        </div>
                    </div>
  
                </div>
            </div>
        `,
  },
  {
    id: 'sec-warleader_rules',
    title: '軍師技能 (War Leader) 概要與規則 (表B)',
    icon: 'fa-solid fa-bullhorn',
    content: `
            <div class="bg-zinc-900 border border-zinc-800 p-6 rounded-xl space-y-4">
                <h2 class="text-xl font-bold text-amber-500 flex items-center">
                    <i class="fa-solid fa-bullhorn mr-2"></i> 軍師技能 (War Leader) 概要與規則 (表B)
                </h2>
                <div class="text-xs text-zinc-300 space-y-3 leading-relaxed">
                    <!-- 一、 技能概要與三大特徵 -->
                    <div class="bg-zinc-950 p-4 rounded-lg border border-zinc-800 space-y-2">
                        <div class="font-bold text-amber-400 text-sm">【技能概要與三大特徵】</div>
                        <p>軍師技能（B表）是用於在戰場上指揮夥伴、發出有利指示以邁向勝利的技能。習得此技能的人，會被直接稱為<strong>軍師</strong>。</p>
                        <p>• <strong class="text-amber-300">先制力加成：</strong>在計算「先制力」時，可以加上此技能的等級。</p>
                        <p>• <strong class="text-amber-300">鼓咆 (Commands)：</strong>雖然對自身無效，但能透過激勵夥伴、提高士氣來強化其戰鬥力。鼓咆不需要消耗 MP 等代價，且隨著戰鬥輪數的增加，具有提升隊友追加傷害或命中力等效果。此外，其效果範圍受「冒險者等級」影響，名聲越響亮的軍師，影響範圍就越廣。</p>
                        <p>• <strong class="text-amber-300">陣律 (Tactics)：</strong>陣律是消耗透過鼓咆所蓄積的「陣氣」，來強化軍師自身的手段。雖然必須先指揮夥伴並蓄積陣氣才能使用，但其效果大多非常強大，能大幅提升軍師自身的戰鬥能力。</p>
                        <p>• <strong class="text-zinc-200">可行判定：</strong>軍師技能可以進行「先制判定」（參照《I》第 112 頁）。</p>
                        <p>• <strong class="text-zinc-200">種族限制：</strong>目前，所有可作為玩家角色（PC）使用的種族皆可習得並使用軍師技能。</p>
                    </div>
      
                    <!-- 二、 用語說明與習得規則 -->
                    <div class="bg-zinc-950 p-4 rounded-lg border border-zinc-800 space-y-2">
                        <div class="font-bold text-amber-400 text-sm">【用語說明與習得規則】</div>
                        <p>• <strong class="text-zinc-200">軍師 (War Leader)：</strong>在軍師技能的規則與效果中，使用軍師技能相關效果的角色，皆統一表述為「軍師」。</p>
                        <p>• <strong class="text-zinc-200">鼓咆：</strong>是指透過軍師的發聲，將有效且精確的指揮傳達給全體夥伴的技法。一般認為，這是由於軍師的聲音與大氣中的瑪那（Mana）產生干涉，進而確保了指揮傳達的準確性。鼓咆的效果主要以提升「除軍師本人以外」的全體隊友之戰鬥能力為主，完全沒有針對敵人產生影響的效果。</p>
                        <p>• <strong class="text-zinc-200">陣律：</strong>是指鼓咆以外的指揮技法。與鼓咆影響除軍師外的全體隊友相對，陣律則是對「軍師本人」產生影響的效果。</p>
                        <p>• <strong class="text-zinc-200">陣氣：</strong>是僅會在軍師身上蓄積的點數。當軍師蓄積了特定量以上的陣氣後，便能將陣氣作為代價（Cost）消耗，藉此使用強化自身的強大「陣律」，或是使用更高階級的強力「鼓咆」。</p>
                        <p>• <strong class="text-zinc-200">習得規則：</strong>角色每提升 1 級軍師技能，即可從清單中選擇一個「鼓咆」或「陣律」來獲得。獲得的鼓咆與陣律總數，等於該角色的軍師技能等級（例如：軍師技能 5 級的角色，獲得的數量可能是 3 個鼓咆與 2 個陣律）。</p>
                        <p>• <strong class="text-zinc-200">最低等級限制：</strong>鼓咆與陣律皆設有習得所需的「最低技能等級」。鼓咆包含「5 級以上」及「10 級以上」才能獲得的類型；陣律則有「5 級以上」即可獲得的類型（目前沒有必須達到 10 級以上才能獲得的陣律）。若軍師技能未達指定等級則無法選擇。此習得條件以角色成長後的等級進行判定。</p>
                        <p>• <strong class="text-amber-300">習得注意事項：</strong></p>
                        <p class="pl-4">－ <strong>獲得鼓咆時：</strong>由於能使用的鼓咆存在限制（參照「鼓咆的階級與系統」），在選擇獲得鼓咆時，請務必考量此限制。</p>
                        <p class="pl-4">－ <strong>獲得陣律時：</strong>部分陣律以獲得其他特定陣律為前提條件。請注意避免發生「跳過前置技能直接獲得」的情況。</p>
                    </div>
      
                    <!-- 三、 使用鼓咆與陣律的共通規則 -->
                    <div class="bg-zinc-950 p-4 rounded-lg border border-zinc-800 space-y-2">
                        <div class="font-bold text-amber-400 text-sm">【使用鼓咆與陣律的共通規則】</div>
                        <p>• <strong class="text-zinc-200">需要裝備：</strong>軍師若未配戴〈軍師徽章〉（見第 23 頁），則無法使用鼓咆與陣律。</p>
                        <p>• <strong class="text-zinc-200">僅限戰鬥中使用：</strong>鼓咆與陣律無法在非戰鬥狀態下使用。這是因為鼓咆與陣律是靈活運用敵我位置關係等戰況的戰鬥相關技法。</p>
                        <p>• <strong class="text-zinc-200">必須發聲：</strong>使用鼓咆與陣律時，軍師皆必須發聲。即使使用「奈特梅亞（Nightmare）」種族的 [異貌] 能力，也無法省略此發聲動作。</p>
                        <p>• <strong class="text-zinc-200">動作與頻率：</strong></p>
                        <p class="pl-4">－ <strong>鼓咆：</strong>每回合 1 次，以輔助動作執行。每位軍師在一個回合（Round）內只能使用 1 次鼓咆。</p>
                        <p class="pl-4">－ <strong>陣律：</strong>每回合 1 次。原則上在一個回合內也只能從中選擇 1 種並使用 1 次。軍師可以在同一個回合內，各使用 1 次鼓咆與 1 次陣律。</p>
                        <p>• <strong class="text-zinc-200">不限移動類別：</strong>無論該回合的移動方式是「限制移動」、「通常移動」或「全力移動」，皆可使用鼓咆與陣律。</p>
                        <p>• <strong class="text-zinc-200">對象與範圍：</strong>鼓咆對象為指揮範圍內的所有隊友；陣律對象為軍師本人。</p>
                        <p>• <strong class="text-zinc-200">效果時間：</strong></p>
                        <p class="pl-4">－ <strong>鼓咆：</strong>基本為「10 秒（1 回合）」，持續到該軍師下一個回合的手番（Turn）開始為止。若效果標註為「在～的瞬間～」，則在效果發揮當下即結束。受鼓咆影響的角色隨後移出指揮範圍，效果依然持續；軍師陷入戰鬥不能狀態，已生效的效果亦不消失。但若<strong>受影響的角色自身陷入戰鬥不能狀態，該鼓咆對該角色的效果將立即結束</strong>。</p>
                        <p class="pl-4">－ <strong>陣律：</strong>基本為「一瞬」。</p>
                        <p>• <strong class="text-zinc-200">達成值與抵抗：</strong>鼓咆與陣律皆為「達成值：0」的效果。若對象對鼓咆或陣律有抵抗意志，則該對象自動成功抵抗。</p>
                        <p>• <strong class="text-zinc-200">效果不重疊：</strong>單一角色同時只能適用一種鼓咆效果。若另一名軍師使用不同鼓咆，受影響者需選擇捨棄舊效果接受新效果，或維持舊效果拒絕新效果。</p>
                        <p>• <strong class="text-zinc-200">與咒歌及【戰鬥歌曲】併用：</strong>同樣使用「聲音」的「咒歌」與「【戰鬥歌曲】」可以與鼓咆或陣律併用。軍師能將鼓咆或陣律融入歌聲之中，故可邊使用鼓咆/陣律邊吟唱咒歌或使用【戰鬥歌曲】。</p>
                        <p>• <strong class="text-zinc-200">解除規則：</strong>具效果時間的鼓咆/陣律無法依自由意志解除。他人強制解除準照魔法解除規定，但鼓咆與陣律<strong>非魔法</strong>，無法使用【魔法解除】（Dispel Magic）或草行者的「魔法打破」解除。可解除手段包括：戰鬥特技《咒語破除》（Word Break）、魔法【完全抵消】（Perfect Cancellation）、賦術【消除針】（Dispel Needle），或明確記載可解除「鼓咆/陣律」/「非限定魔法效果」者。解除時每個受影響的角色均被視為「個別對象（1 體）」，無法一次性全體解除。</p>
                        <p>• <strong class="text-zinc-200">非魔法性質：</strong>對【感知魔法】或【瑪那探索】不會產生反應，且《魔法擴大／＊＊》等僅影響「魔法施放」的戰鬥特技對鼓咆與陣律無效。</p>
                    </div>
      
                    <!-- 四、 鼓咆與陣律的適用對象條件 -->
                    <div class="bg-zinc-950 p-4 rounded-lg border border-zinc-800 space-y-2">
                        <div class="font-bold text-amber-400 text-sm">【鼓咆與陣律的適用對象條件】</div>
                        <p>• <strong class="text-zinc-200">不包含軍師本人：</strong>除明確標註「例外情況亦會影響軍師本人」的特殊項目外，鼓咆對軍師自身不產生任何影響。即便軍師擁有複數部位，該軍師的所有部位皆不受鼓咆影響。</p>
                        <p>• <strong class="text-zinc-200">必須是夥伴（隊友）：</strong>僅對軍師在使用當下認知為「夥伴」的角色產生影響。若處於隱身、不可視等狀態導致軍師無法感知其存在時，鼓咆亦無法產生影響。</p>
                        <p>• <strong class="text-zinc-200">指揮範圍：</strong>軍師能掌握戰況並透過發聲下達適切指示的範圍。鼓咆僅影響使用時身處「指揮範圍」內的角色（移出後效果仍持續直至時間結束）。指揮範圍由軍師的「冒險者等級」決定：</p>
                        
                        <!-- 指揮範圍對照表 -->
                        <div class="overflow-x-auto my-2">
                            <table class="w-full text-left border-collapse border border-zinc-800">
                                <thead>
                                    <tr class="bg-zinc-900 text-amber-400">
                                        <th class="p-2 border border-zinc-800">冒險者等級</th>
                                        <th class="p-2 border border-zinc-800">指揮範圍</th>
                                    </tr>
                                </thead>
                                <tbody class="divide-y divide-zinc-800">
                                    <tr><td class="p-2 border border-zinc-800">無（等級 1）</td><td class="p-2 border border-zinc-800">1 個區域（半徑 5m）</td></tr>
                                    <tr><td class="p-2 border border-zinc-800">匕首 (Dagger, 2~3)</td><td class="p-2 border border-zinc-800">2~3 個區域（半徑 10m）</td></tr>
                                    <tr><td class="p-2 border border-zinc-800">細劍 (Rapier)</td><td class="p-2 border border-zinc-800">全區域（半徑 20m）</td></tr>
                                    <tr><td class="p-2 border border-zinc-800">闊劍 (Broadsword)</td><td class="p-2 border border-zinc-800">全區域（半徑 30m）</td></tr>
                                    <tr><td class="p-2 border border-zinc-800">雙手巨劍 (Flamberge)</td><td class="p-2 border border-zinc-800">全區域（半徑 40m）</td></tr>
                                    <tr><td class="p-2 border border-zinc-800">哨兵 (Sentinel)</td><td class="p-2 border border-zinc-800">全區域（半徑 50m）</td></tr>
                                    <tr><td class="p-2 border border-zinc-800">超巨星 (Hyperion)</td><td class="p-2 border border-zinc-800">全區域（半徑 100m）</td></tr>
                                    <tr><td class="p-2 border border-zinc-800">〈起始之劍〉</td><td class="p-2 border border-zinc-800">全區域（半徑 200m*）</td></tr>
                                </tbody>
                            </table>
                            <div class="text-[10px] text-zinc-400 mt-1">※ 註：冒險者等級每附加一個「★」，半徑額外增加 +100m。</div>
                        </div>
      
                        <p>• <strong class="text-zinc-200">必須能聽到聲音：</strong>不具備聽覺或喪失聽覺的角色不受影響。利用高級使魔、【遠程人偶】或〈通話耳環〉等遠處傳聲效果，只要角色身處指揮範圍外，仍無法獲得鼓咆效果。</p>
                        <p>• <strong class="text-zinc-200">知能要求：</strong>僅對知能等級為「低」、「普通（人類同等）」或「高」的角色產生影響。</p>
                        <p>• <strong class="text-zinc-200">必須通曉語言：</strong>僅對能理解軍師「會話」語言的角色產生影響（僅習得「讀寫」無關）。若軍師習得多種「會話」語言，可同時使用所有可會話語言進行鼓咆。</p>
                        <p>• <strong class="text-zinc-200">騎獸與魔物：</strong>騎獸或魔物只要被認知為夥伴且滿足條件即可受影響。此外，只要騎手滿足條件，即便騎獸本身不滿足條件（如知能不足或聽不懂語言），該騎獸仍可受到鼓咆影響（例如：只要騎手是夥伴，軍師鼓咆即可對「魔動機車」產生效果）。</p>
                    </div>
      
                    <!-- 五、 陣氣 (Tactical Aura) 詳細運作機制 -->
                    <div class="bg-zinc-950 p-4 rounded-lg border border-zinc-800 space-y-2">
                        <div class="font-bold text-amber-400 text-sm">【陣氣 (Tactical Aura) 詳細運作機制】</div>
                        <p>• <strong class="text-zinc-200">定義與意涵：</strong>象徵透過軍師的鼓咆與指揮所提升並整頓出的戰場態勢。代表軍師唯有自己能詳盡掌握的戰況佈局、計畫性，以及洞察有利體勢的分析狀況。</p>
                        <p>• <strong class="text-zinc-200">數值規則：</strong>用於支付鼓咆與陣律的「陣氣消耗（Cost）」，以「0 以上」表示。下限為「0」，凡會導致陣氣變為負值的「宣言」、「支付陣氣」或「套用效果」皆無法執行。陣氣沒有上限值。</p>
                        <p>• <strong class="text-zinc-200">僅限戰鬥中蓄積：</strong>開戰時所有軍師陣氣皆為「0」。僅在戰鬥中蓄積，一旦 GM 宣言戰鬥結束，所有陣氣歸零。</p>
                        <p>• <strong class="text-zinc-200">蓄積於軍師自身：</strong>僅能透過軍師本人所使用的鼓咆、陣律、道具及戰鬥特技來蓄積。其他軍師的效果無法為你蓄積陣氣。數據標示「蓄積陣氣」皆指向宣言使用該效果的軍師本人。</p>
                        <p>• <strong class="text-zinc-200">陣氣消耗 (Cost)：</strong>支付陣氣消耗後會減少等值當前陣氣值。不得宣言使用「陣氣消耗大於自身當前陣氣值」的鼓咆、陣律、道具或戰鬥特技。</p>
                        <p>• <strong class="text-zinc-200">陣氣蓄積 (+○)：</strong>當鼓咆效果適用於 1 個以上的對象時，軍師立即獲得「○點陣氣」（標示無則不獲得）。若沒有任何對象適用鼓咆效果，軍師無法獲得陣氣。即便鼓咆同時對多個對象產生效果，獲得的陣氣量仍是固定的（不因人數多寡加倍）。</p>
                        <p>• <strong class="text-zinc-200">陣氣的消失：</strong>除了支付消耗與戰鬥結束外，若軍師陷入戰鬥不能狀態（氣絕、睡眠、石化、死亡等），目前蓄積的所有陣氣將歸「0」。處於戰鬥不能狀態的軍師無法獲得陣氣。</p>
                    </div>
      
                    <!-- 六、 鼓咆的階級變動與維持 -->
                    <div class="bg-zinc-950 p-4 rounded-lg border border-zinc-800 space-y-2">
                        <div class="font-bold text-amber-400 text-sm">【鼓咆的階級變動與維持】</div>
                        <p>當軍師連續兩回合以上使用鼓咆時，將能夠使用「2 階級」以上的高階鼓咆。基本上，只要持續使用同系統的鼓咆，每回合就能將階級提升 1 級。</p>
                        <p>• <strong class="text-zinc-200">以「前一回合」為基準：</strong>當前回合能使用的最高階級，取決於前一回合使用的鼓咆之「階級」與「系統」。</p>
                        <p>• <strong class="text-zinc-200">同系統（階級 +1）：</strong>若當前回合使用的鼓咆與前一回合為相同系統，最高可以使用「前一回合階級 +1」的鼓咆。亦可選擇使用與前一回合「同階級」或「更低階級」的鼓咆（例：前一回合使用「攻擊系 2 階」，本回合可使用「攻擊系 1~3 階」）。</p>
                        <p>• <strong class="text-zinc-200">不同系統（階級 -1）：</strong>若當前回合使用的鼓咆系統與前一回合不同，最高只能使用「前一回合階級 -1」的鼓咆。若「-1」後結果為 0，則最低仍可使用 1 階級鼓咆（例 1：前一回合使用「攻擊系 3 階」，本回合切換為「非攻擊系」，最高只能用到「2 階」；例 2：前一回合使用「攻擊系 1 階」，本回合仍可使用「非攻擊系 1 階」）。</p>
                        <p>• <strong class="text-zinc-200">「鼓舞系」特殊性：</strong></p>
                        <p class="pl-4">－ <strong>從其他系統切換至鼓舞系：</strong>可直接使用至「與前一回合相同階級」（不需 -1）。</p>
                        <p class="pl-4">－ <strong>從鼓舞系切換至其他系統：</strong>依該鼓舞系鼓咆個別說明決定下一回合上限。原則上切換至任意系統皆可達「前一回合階級 +1」。</p>
                        <p>• <strong class="text-zinc-200">階級與陣氣變動實例演練：</strong></p>
                        <p class="pl-4">－ <strong>第 1 回合：</strong>使用 1 階鼓咆【怒濤攻陣 I】，陣氣 +1（累計 1 點）。</p>
                        <p class="pl-4">－ <strong>第 2 回合：</strong>使用 2 階鼓咆【怒濤攻陣 II 旋風】，陣氣 +1（累計 2 點）。</p>
                        <p class="pl-4">－ <strong>第 3 回合：</strong>使用 3 階鼓咆【怒濤攻陣 III 旋刃】，陣氣 +1（累計 3 點）。隨後以輔助動作支付 3 點陣氣使用【陣律：慮外烈擊 I】（累計 0 點）。主動作擊敗敵人發動【陣律：掃討勝鬨】獲得陣氣 +1（累計 1 點）。</p>
                        <p class="pl-4">－ <strong>第 4 回合：</strong>隊友陷入危機決定切換系統。前一回合為「3 階攻擊系」，本回合想用「鼓舞系」，最高可用至「3 階鼓舞系」。支付 1 點陣氣使用 2 階鼓咆【傷痍見立】（累計 0 點）。</p>
                        <p class="pl-4">－ <strong>第 5 回合：</strong>根據前一回合【傷痍見立】效果，不限系統皆可提升至 3 階。使用 3 階鼓咆【怒濤攻陣 III 旋刃】，陣氣 +1（累計 1 點）。</p>
                        <p class="pl-4">－ <strong>第 6 回合：</strong>使用 4 階鼓咆【怒濤攻陣 IV 輝斬】，陣氣 +2（累計 3 點）。主動作擊敗敵人發動【陣律：掃討勝鬨】獲得陣氣 +1（累計 4 點）。</p>
                        <p class="pl-4">－ <strong>第 7 回合：</strong>再次使用 4 階鼓咆【怒濤攻陣 IV 輝斬】，陣氣 +2（累計 6 點）。</p>
                        <p class="pl-4">－ <strong>第 8 回合：</strong>現有 6 點陣氣，可選擇：選項 1（支付 5 點使用 5 階鼓咆【怒濤攻陣 V 颱風】，剩餘 1 點）；選項 2（使用 4 階鼓咆【怒濤攻陣 IV 輝斬】使陣氣變為 8 點，隨後支付 5 點使用【陣律：慮外烈擊 II】，剩餘 3 點）。</p>
                        <p>• <strong class="text-zinc-200">接受鼓咆效果條件：</strong>角色從指揮範圍外移入、戰鬥中被召喚或剛從氣絕復甦，即便軍師鼓咆階級已提升，該角色仍能直接套用該高階鼓咆效果。</p>
                        <p>• <strong class="text-zinc-200">複數軍師判斷：</strong>場上有兩名軍師使用不同階級或系統的鼓咆，受影響角色各自判斷是否接受該效果（單一對象同一時間只能套用一種鼓咆效果）。</p>
                    </div>
                </div>
            </div>
        `,
  },
  {
    id: 'sec-geomancer_rules',
    title: '天地使技能 (Geomancer) 概要與規則 (表B)',
    icon: 'fa-solid fa-earth-asia',
    content: `
            <div class="bg-zinc-900 border border-zinc-800 p-6 rounded-xl space-y-4">
                <h2 class="text-xl font-bold text-amber-500 flex items-center">
                    <i class="fa-solid fa-earth-asia mr-2"></i> 天地使技能 (Geomancer) 概要與規則 (表B)
                </h2>
                <div class="text-xs text-zinc-300 space-y-3 leading-relaxed">
                    <!-- 一、 技能概要與判定 -->
                    <div class="bg-zinc-950 p-4 rounded-lg border border-zinc-800 space-y-2">
                        <div class="font-bold text-amber-400 text-sm">【技能概要與特徵】</div>
                        <p>這項技能能引導充盈於世界本身的力量發揮各種現象，據說其力量源頭可追溯至三把〈始源之劍〉。習得「天地使技能」的人被稱為<strong>「天地使」</strong>。</p>
                        <p>• <strong class="text-amber-300">不消耗 MP：</strong>天地使所使用的「相域」不需要消耗 MP 等能量。雖然不屬於魔法，但能發揮接近魔法的效果。</p>
                        <p>• <strong class="text-amber-300">隨機選擇與完全無法抵抗：</strong>最大的特徵在於「對象是從領域內的所有角色中隨機選擇一名」，以及「該效果完全無法抵抗」。雖然力量強大，但也屬於難以控制、相當棘手的力量。</p>
                        <p>• <strong class="text-zinc-200">可行判定：</strong>探索判定、天氣預測判定。</p>
                        <p>• <strong class="text-zinc-200">種族限制：</strong>目前所有可作為 PC（玩家角色）的種族皆可習得並使用。</p>
                    </div>
      
                    <!-- 二、 相域、命脈點與取消機制 -->
                    <div class="bg-zinc-950 p-4 rounded-lg border border-zinc-800 space-y-2">
                        <div class="font-bold text-amber-400 text-sm">【相域、命脈點與取消機制】</div>
                        <p>• <strong class="text-zinc-200">領域（相域）：</strong>天地使技能每提升 1 級即可習得 1 個「相域」。共分為「造成確定傷害」、「給予不利效果」、「給予回復效果」以及「給予有利效果」四種類型。大多數相域消耗的命脈點越多，效果越強。</p>
                        <p>• <strong class="text-zinc-200">命脈點：</strong>使用相域所需的代價數值，分為<strong>「天之命脈點」、「地之命脈點」、「人之命脈點」</strong>三種。必須在開啟專用道具〈地脈儀〉後方可獲得與管理。</p>
                        <p>• <strong class="text-amber-300">取消（Cancel）機制：</strong>決定相域的對象後，使用者可以選擇**取消（Cancel）**該次效果。因此可達成「只讓同伴獲得有利效果」或「只對敵人施加不利效果」的目的。透過戰鬥特技可增加影響人數或進行更巧妙的取消操作，但請注意，**無論成長到什麼程度，都無法指定特定目標**。</p>
                    </div>
      
                    <!-- 三、 地脈儀（Geograph）與展開/收納規則 -->
                    <div class="bg-zinc-950 p-4 rounded-lg border border-zinc-800 space-y-2">
                        <div class="font-bold text-amber-400 text-sm">【〈地脈儀〉(Geograph) 與展開／收納規則】</div>
                        <p>• <strong class="text-zinc-200">專用裝飾品：</strong>屬於「裝飾品：任意」。天地使必須裝備並「展開」〈地脈儀〉才能開始累積命脈點並使用相域。</p>
                        <p>• <strong class="text-zinc-200">性能依價格而異：</strong>越昂貴的〈地脈儀〉，其相域的效果範圍越廣，命脈點的上限值也越高。</p>
                        <p>• <strong class="text-zinc-200">展開／收納動作規則：</strong></p>
                        <p class="pl-4">－ 展開與收納皆為**輔助動作**，且**不可在同一回合內同時執行**。</p>
                        <p class="pl-4">－ 執行通常移動時，必須在**移動前**用輔助動作收納；若在收納狀態移動，通常移動後必定在移動後展開。</p>
                        <p class="pl-4">－ 若在展開狀態下因外力強制移動，〈地脈儀〉會**自動收納**。</p>
                    </div>
                </div>
            </div>
        `,
  },
  {
    id: 'sec-abyssgazer_rules',
    title: '奈落魔法技能 (Abyssgazer) 概要與規則 (表A)',
    icon: 'fa-solid fa-eye-low-vision',
    content: `
        <div class="bg-zinc-900 border border-zinc-800 p-6 rounded-xl space-y-4">
            <h2 class="text-xl font-bold text-amber-500 flex items-center">
                <i class="fa-solid fa-eye-low-vision mr-2"></i> 奈落魔法技能 (Abyssgazer) 概要與規則 (表A)
            </h2>
            <div class="text-xs text-zinc-300 space-y-3 leading-relaxed">
                <div class="bg-zinc-950 p-4 rounded-lg border border-zinc-800 space-y-2">
                    <div class="font-bold text-amber-400 text-sm">【技能概要與力量來源】</div>
                    <p>習得此技能者被稱為「奈落使」或「奈落的窺視者」。本技能屬於魔法師系技能（表A）。</p>
                    <p>術者透過瑪娜感知並引動空間中無處不在的「奈落魔域」裂縫與偏移來發動【奈落魔法】。泛用性相較於一般魔法較低，但單體效果強大，且多數效果與「奈落魔域」密切相關。</p>
                </div>
                <div class="bg-zinc-950 p-4 rounded-lg border border-zinc-800 space-y-2">
                    <div class="font-bold text-amber-400 text-sm">【發動條件與觸媒】</div>
                    <p><strong>發動媒介：</strong>必須使用以「深淵碎片（アビスシャード）」加工製成的「深淵之刃（アビスナイフ）」作為觸媒切開空間以引發力量（深淵之刃可加工為任何帶刃武器）。</p>
                    <p><strong>發聲語言：</strong>無固定咒文，但發動時必須以「魔神語」表達願望（習得本技能即自動獲得魔神語的交流能力）。</p>
                    <p><strong>判定方式：</strong>使用時進行魔法行使判定。</p>
                </div>
            </div>
        </div>
    `,
    },
    {
        id: 'sec-rider_rules',
        title: '騎手技能 (Rider) 概要與規則 (表B)',
        icon: 'fa-solid fa-horse',
        content: `
          <div class="bg-zinc-900 border border-zinc-800 p-6 rounded-xl space-y-4">
              <h2 class="text-xl font-bold text-amber-500 flex items-center">
                  <i class="fa-solid fa-horse mr-2"></i> 騎手技能 (Rider) 完整規則與指南 (表B)
              </h2>
              <div class="text-xs text-zinc-300 space-y-3 leading-relaxed">
                  <!-- 1. 技能概要與特典 -->
                  <div class="bg-zinc-950 p-4 rounded-lg border border-zinc-800 space-y-2">
                      <div class="font-bold text-amber-400 text-sm">【騎手技能特典與可執行判定】</div>
                      <p><b>類別與經驗值：</b>其他系技能（經驗值表B）。</p>
                      <p><b>技能特典：</b></p>
                      <ul class="list-disc list-inside space-y-1 pl-2">
                          <li>可單手操縱騎獸（空下的單手可使用武器、盾牌或「用法：1 H」的道具）。</li>
                          <li>以輔助動作進行騎獸的乘降（上下馬）。</li>
                          <li>可執行「騎乘判定」。</li>
                          <li>能依照「冒險者等級」的騎獸等級來強化騎獸。</li>
                          <li>每提升 1 級可學習 1 招「騎藝」。</li>
                          <li>可從騎手公會租借騎獸與購入騎獸用裝備品。</li>
                      </ul>
                      <p><b>可執行判定：</b>急救判定、受身判定、騎乘判定、弱點隱蔽判定、地圖製作判定、魔物知識判定（無法識破弱點）。</p>
                  </div>

                  <!-- 2. 騎乘資格與基本規則 -->
                  <div class="bg-zinc-950 p-4 rounded-lg border border-zinc-800 space-y-2">
                      <div class="font-bold text-amber-400 text-sm">【騎乘資格與基本規則】</div>
                      <p><b>騎乘者與騎手：</b>騎乘著騎獸之人稱為「騎乘者」，其中持有騎手技能者稱為「騎手」。</p>
                      <p><b>無騎手技能者的限制：</b>僅能騎乘［馬］［戰馬］［迷你魔動機車］［魔動機車］，且必須以雙手握住韁繩或操縱桿，無法使用於其他用途，參數參照適合等級。</p>
                      <p><b>騎乘特點與行動：</b></p>
                      <ul class="list-disc list-inside space-y-1 pl-2">
                          <li>移動方式與移動力完全以騎獸為主，無關騎乘者的敏捷與移動速度。</li>
                          <li>騎乘者與騎獸視為共用回合、同一座標且同步移動。回合開始時雙方同時開始。</li>
                          <li>騎手可以不發聲命令騎獸；非騎手原則上只能進行騎乘者本身的動作。</li>
                          <li>騎手與騎獸各自的動作分開進行，誰先動作可任意決定，但必須完成整套動作後才能換另一方，不能交錯進行。</li>
                          <li>騎乘者在回合內離開騎獸即解除騎乘狀態。原則上解除後騎獸無法進行動作（除非透過【遠隔指示】等騎藝例外處理）。即使騎獸先完成動作，騎手隨後也能降下。</li>
                      </ul>
                  </div>

                  <!-- 3. 騎獸的乘降與落馬機制 -->
                  <div class="bg-zinc-950 p-4 rounded-lg border border-zinc-800 space-y-2">
                      <div class="font-bold text-amber-400 text-sm">【騎獸的乘降與落馬機制】</div>
                      <p><b>乘降（上下馬）規則：</b></p>
                      <ul class="list-disc list-inside space-y-1 pl-2">
                          <li>騎手以輔助動作乘降；非騎手以主動作乘降。1 回合內所有騎乘者僅能進行 1 次乘或降（不論動作類別或主動作次數）。</li>
                          <li>騎乘必須在自己的移動後進行，且移動後座標須與騎獸相同。若該輪騎獸尚未行動，乘上後可隨騎獸進一步移動。</li>
                          <li>騎手以輔助動作降下時，若該輪騎獸尚未移動，騎手可自己移動；若騎獸已移動過，降下後騎手不可再移動。</li>
                          <li>任何角色皆無法騎乘跌倒狀態的騎獸，騎乘前必須先讓騎獸站起。</li>
                          <li>具有［搭載］技能的騎獸，被搭載（騎上）為主動作，降下為輔助動作（若騎獸未移動，降下者可自行移動）。</li>
                      </ul>
                      <p><b>落馬與墜落傷害：</b></p>
                      <ul class="list-disc list-inside space-y-1 pl-2">
                          <li>騎獸跌倒時，騎乘者會落馬並解除騎乘狀態，承受墜落傷害。</li>
                          <li>墜落距離計算：以「當前回合移動距離的 1/5（無條件進位）」m 計算，最少視為 2 m 高度墜落。正常適用墜落修正。</li>
                          <li>「受身判定」對落馬墜落傷害有效。在自己或騎獸的回合中落馬者，該回合內不得重新騎乘騎獸。</li>
                      </ul>
                  </div>

                  <!-- 4. 騎獸租借與維持費 -->
                  <div class="bg-zinc-950 p-4 rounded-lg border border-zinc-800 space-y-2">
                      <div class="font-bold text-amber-400 text-sm">【騎獸租借與維持費】</div>
                      <p><b>租借機制：</b>騎手可向騎手公會購買〈騎獸契約證〉來租借騎獸。每種可租借的騎獸種類皆須單獨購買一個契約證；購買後即可無償多次租借該種類騎獸。</p>
                      <p><b>維持費：</b>租借騎獸時由騎手負擔維持費。PC 用餐、住宿時，騎獸每個部位皆須支付與 PC 相同的費用。<i>（「分類：魔動機」及雕像化狀態下的騎獸不需維持費）</i>。</p>
                      <p><b>歸還注意事項：</b>租借之騎獸須於跑團結束時歸還。若無法歸還或歸還時騎獸 HP 在 0 以下，將獲得「不名譽稱號」。</p>
                  </div>

                  <!-- 5. 購買騎獸與所有權 -->
                  <div class="bg-zinc-950 p-4 rounded-lg border border-zinc-800 space-y-2">
                      <div class="font-bold text-amber-400 text-sm">【購買騎獸與所有權規則】</div>
                      <p><b>專有證/機石：</b>購買專屬騎獸會獲得針對個體的〈騎獸專有證/機石〉（如〈＊＊的騎獸專有證〉），代表常駐契約狀態，不受公會同種租借限制，且同一種類可複數購買。</p>
                      <p><b>市售騎獸：</b>非騎手/未加入公會者亦可在一般市場購買【馬】【戰馬】【魔動迷你機車】【魔動機車】，但無法獲得專有證、無法雕像化攜行，亦無法升格【馬/戰馬】。</p>
                      <p><b>購買騎獸之特典：</b>所有部位最大 HP 上升 10 點；可裝備專有騎獸限定裝備與追加武裝；跑團結束無歸還義務且死亡不扣不名譽；名譽點騎獸僅能以購買獲得。</p>
                      <p><b>所有權與契約證：</b></p>
                      <ul class="list-disc list-inside space-y-1 pl-2">
                          <li>〈騎獸契約證／機石〉（種類契約）：需持有（免裝備），租借時展示並印上記號。記錄生物特徵僅本人可用，同種類契約證放在一起會相互破壞干涉。</li>
                          <li>〈騎獸專有證／機石〉（個體契約）：轉讓時需新持有者持證並由原所有者唸出密語。但舊所有者可持證唸密語抹消後續所有者，若要完全安全讓渡需一同至公會廢棄舊證並重新發行。</li>
                      </ul>
                  </div>

                  <!-- 6. 戰鬥時騎乘與特例能力 -->
                  <div class="bg-zinc-950 p-4 rounded-lg border border-zinc-800 space-y-2">
                      <div class="font-bold text-amber-400 text-sm">【戰鬥時騎乘與騎獸應對】</div>
                      <p><b>戰鬥應對與弱點：</b>PC 與騎獸同座標戰鬥。弱點隱蔽判定基準值改用「<b>騎手的騎手技能等級 ＋ 智力加值</b>」。騎手與騎獸可各自獨立選擇攻擊目標。</p>
                      <p><b>動作與武器限制：</b>騎乘時<b>無法使用類別〈格鬥〉的武器</b>。移動限制依騎獸移動方式為準。射出武器與魔法行使為「限制移動」後動作。</p>
                      <p><b>能力標記：</b>標記<b>［前提］</b>的能力須擁有對應騎藝才能下達指示；標記<b>［擴張］</b>的能力無騎藝可直接使用，持有對應騎藝則獲得效果強化。</p>
                      <p><b>複數部位騎獸：</b>每回合預設僅能選擇其中<b>任意一個部位</b>進行主/輔助動作。若需多部位同時動作，需搭配【勢如破竹】、【三頭六臂】等特定騎藝。</p>
                  </div>
              </div>
          </div>
      `,
    },
    {
        id: "enhancer_rules",
        title: "練體士規則",
        icon: "fa-person-running",
        content: `
          <div class="space-y-6 text-zinc-200">
            <!-- 標題與基本資訊 -->
            <div class="bg-zinc-900 p-5 rounded-xl border border-zinc-800 shadow-md">
              <div class="flex flex-wrap justify-between items-center mb-3">
                <h2 class="text-xl md:text-2xl font-bold text-amber-400 flex items-center">
                  <i class="fa-solid fa-person-running mr-2.5 text-amber-500"></i>練體士技能（Enhancer）規則
                </h2>
                <div class="flex gap-2">
                  <span class="text-xs bg-zinc-800 text-zinc-300 px-2.5 py-1 rounded border border-zinc-700 font-medium">其他系技能</span>
                  <span class="text-xs bg-amber-950/80 text-amber-300 px-2.5 py-1 rounded border border-amber-800 font-bold">經驗點表 B</span>
                </div>
              </div>
              <p class="text-sm text-zinc-300 leading-relaxed">
                透過瑪那（Mana）使肉體產生變容，以在戰鬥中取得優勢的技能。使用練體士技能的角色稱為<strong class="text-amber-400">「練體士」</strong>。
                本技能並非駕馭武器的技能，但能使用與魔法不同的特殊招式<strong class="text-amber-400">「練技」</strong>。
                練體士技能基本上<strong class="text-red-400">無法進行行為判定</strong>，且不屬於施法者系技能，因此<strong class="text-red-400">不會增加角色 MP</strong>。
              </p>
            </div>
      
            <!-- 核心規則卡片網格 -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      
              <!-- 練技的獲得 -->
              <div class="bg-zinc-900 p-5 rounded-xl border border-zinc-800 space-y-3">
                <h3 class="text-base font-bold text-amber-400 flex items-center border-b border-zinc-800 pb-2">
                  <i class="fa-solid fa-book-medical mr-2 text-amber-500"></i>練技的獲得
                </h3>
                <ul class="text-xs text-zinc-300 space-y-2 list-disc list-inside leading-relaxed">
                  <li><strong>等級取得：</strong>練體士技能每提升 1 級，即可從練技列表中選擇 1 個練技習得。</li>
                  <li><strong>習得需求：</strong>部分練技設有最低技能等級限制（例如 Lv 5），練體士技能等級未達標前無法選擇。</li>
                  <li><strong>選擇彈性：</strong>當技能達到 Lv 5 時，即可選擇最低需求 Lv 5 的練技。即使等級達 Lv 5 以上，仍可選擇未設最低需求（Lv 1 可用）的練技。</li>
                </ul>
              </div>
      
              <!-- 練技的使用條件 -->
              <div class="bg-zinc-900 p-5 rounded-xl border border-zinc-800 space-y-3">
                <h3 class="text-base font-bold text-amber-400 flex items-center border-b border-zinc-800 pb-2">
                  <i class="fa-solid fa-person-running mr-2 text-amber-500"></i>使用條件與限制
                </h3>
                <ul class="text-xs text-zinc-300 space-y-2 list-disc list-inside leading-relaxed">
                  <li><strong>移動限制：</strong>使用練技的手番移動僅限「限制移動」或「通常移動」。宣告「全力移動」的手番無法使用練技。</li>
                  <li><strong>呼吸需求：</strong>練技透過特殊呼吸引發效果。角色在無法呼吸的狀態下無法使用練技（但不需要發出聲音）。</li>
                  <li><strong>對象限制：</strong>對象僅限「練體士本人」。即使有多部位角色，亦無法對其他部位施加（但各部位可各自選擇練技發動）。</li>
                </ul>
              </div>
      
              <!-- 練技的使用與機制 -->
              <div class="bg-zinc-900 p-5 rounded-xl border border-zinc-800 space-y-3">
                <h3 class="text-base font-bold text-amber-400 flex items-center border-b border-zinc-800 pb-2">
                  <i class="fa-solid fa-bolt mr-2 text-amber-500"></i>使用方式與重複限制
                </h3>
                <ul class="text-xs text-zinc-300 space-y-2 list-disc list-inside leading-relaxed">
                  <li><strong>動作類型：</strong>以<strong class="text-cyan-300">「輔助動作」</strong>發動。不需進行行為判定即可自動生效，達成值視為「0」。無法以主動作發動來獲得達成值。</li>
                  <li><strong>使用次數：</strong>原則上 1 回合內可使用任意次數不同練技。</li>
                  <li><strong>效果累積：</strong>同名練技效果原則上無法重複或累積（少數練技有 1 回合 1 次或可發動多次累積加成的特例）。</li>
                </ul>
              </div>
      
              <!-- MP 消耗與解除 -->
              <div class="bg-zinc-900 p-5 rounded-xl border border-zinc-800 space-y-3">
                <h3 class="text-base font-bold text-amber-400 flex items-center border-b border-zinc-800 pb-2">
                  <i class="fa-solid fa-flask-vial mr-2 text-amber-500"></i>MP 消耗與效果解除
                </h3>
                <ul class="text-xs text-zinc-300 space-y-2 list-disc list-inside leading-relaxed">
                  <li><strong>MP 消耗：</strong>每次使用共通消耗 <strong class="text-cyan-300">3 MP</strong>。可使用〈魔晶石〉替代部分或全部消耗（一次限用 1 顆）。</li>
                  <li><strong>主動解除：</strong>具持續時間的練技，使用者可於自身手番以「輔助動作」隨時主動解除。</li>
                  <li><strong>解除手段：</strong>練技非魔法，無法被【魔法解除】（Dispel Magic）解除；但戰鬥特技《破言》（Word Break）可以解除練技。</li>
                </ul>
              </div>
      
            </div>
      
            <!-- 重點觀念區塊 (非魔法) -->
            <div class="bg-amber-950/30 p-5 rounded-xl border border-amber-800/60 space-y-2">
              <h3 class="text-sm font-bold text-amber-400 flex items-center">
                <i class="fa-solid fa-circle-exclamation mr-2 text-amber-500"></i>重點提示：練體士屬於「非魔法」效果
              </h3>
              <p class="text-xs text-zinc-300 leading-relaxed">
                練技並非魔法，因此不會對【魔法感知】或【瑪那探測】等感知魔法產生反應。<br>
                《魔法擴大／＊＊》等強化魔法的戰鬥特技無法套用於練技；練體士亦非施法者，無法指定《MP減輕／＊＊》。<br>
                相對地，遊戲中存在專為練技設計的專用戰鬥特技（例如《練體之極意》）。
              </p>
            </div>
          </div>
        `
      }
    ]