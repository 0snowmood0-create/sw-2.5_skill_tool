// src/reputationRankData.js

export const reputationRankContent = `
<div class="space-y-6">
    <!-- 頁頭標題卡片 -->
    <div class="bg-zinc-900/90 border border-amber-500/30 rounded-xl p-5 shadow-lg">
        <div class="flex items-center gap-3 mb-2">
            <div class="p-2.5 bg-amber-500/10 rounded-lg text-amber-400">
                <i class="fa-solid fa-award text-2xl"></i>
            </div>
            <div>
                <h2 class="text-xl font-bold text-amber-400 tracking-wider">SW2.5 名譽點與冒險者階級 (Reputation & Rank)</h2>
                <p class="text-xs text-zinc-400">包含〈劍之碎片〉兌換、名譽道具/個人專用裝備、冒險者階級升級表、特權與不名譽點數機制。</p>
            </div>
        </div>
    </div>

    <!-- 1. 劍之碎片與名譽點 -->
    <div class="bg-zinc-900 border border-zinc-800 rounded-xl p-5 space-y-4 shadow-md">
        <div class="flex items-center gap-2 border-b border-zinc-800 pb-3">
            <span class="text-xs px-2.5 py-1 rounded bg-amber-950 text-amber-300 border border-amber-800 font-bold">Sword Shards</span>
            <h3 class="text-lg font-bold text-amber-400">〈劍之碎片 (剣のかけら)〉與 名譽點</h3>
        </div>

        <div class="space-y-4 text-xs text-zinc-300">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div class="bg-zinc-950 p-3.5 rounded-lg border border-zinc-800 space-y-1.5">
                    <h4 class="font-bold text-amber-300 text-sm flex items-center">
                        <i class="fa-solid fa-coins mr-1.5"></i>兌換金錢 (金錢換算)
                    </h4>
                    <p class="leading-relaxed">
                        每個〈劍之碎片〉的行情為 <strong>200 G</strong>。除非 GM 特殊設定，否則 PC 無法主動以金錢購買碎片。
                    </p>
                </div>
                <div class="bg-zinc-950 p-3.5 rounded-lg border border-zinc-800 space-y-1.5">
                    <h4 class="font-bold text-amber-300 text-sm flex items-center">
                        <i class="fa-solid fa-dice mr-1.5"></i>上繳公會換取名譽點 (1d 擲骰)
                    </h4>
                    <p class="leading-relaxed">
                        選擇上繳碎片時，代表 1 人擲 <strong>1d</strong> 決定獲得名譽點數。骰出的點數全體隊員各自獲得相同的名譽點（不需平分）。
                    </p>
                    <p class="text-zinc-400 text-[11px]">
                        *跑團結束決定上繳並擲骰後，不得因點數不滿意而改回換取金錢。
                    </p>
                </div>
            </div>

            <!-- GM 指南：碎片數量行情 -->
            <div class="bg-zinc-950 p-4 rounded-lg border border-amber-500/20 space-y-1.5">
                <h4 class="font-bold text-amber-400 text-xs flex items-center">
                    <i class="fa-solid fa-book-bookmark mr-1.5"></i>GM 指南：〈劍之碎片〉掉落總量基準
                </h4>
                <p class="leading-relaxed text-zinc-300">
                    單次團務中獲得的碎片總數，建議為<strong>「全隊 PC 冒險者平均等級」的 1 ～ 2 倍</strong>。<br>
                    低於 1 倍可能使敵人過弱，超過 2 倍則獎勵過剩或代表敵人過強。
                </p>
            </div>
        </div>
    </div>

    <!-- 2. 名譽道具與個人專用裝備 -->
    <div class="bg-zinc-900 border border-zinc-800 rounded-xl p-5 space-y-4 shadow-md">
        <div class="flex items-center gap-2 border-b border-zinc-800 pb-3">
            <span class="text-xs px-2.5 py-1 rounded bg-teal-950 text-teal-300 border border-teal-800 font-bold">Honor Items</span>
            <h3 class="text-lg font-bold text-amber-400">名譽道具 (Honor Items) 與 個人專用裝備</h3>
        </div>

        <div class="space-y-4 text-xs text-zinc-300">
            <p class="leading-relaxed">
                消耗名譽點可獲取特定「個人專用裝備」或特殊物品。個人專用裝備由工匠為 PC 量身打造，能使特定能力值/判定獲得 <strong>+2</strong>（或其他特定效果），僅限該 PC 使用時有效（他人借用無效）。
            </p>

            <!-- 個人專用裝備效果與名譽點對照表 -->
            <div class="space-y-2">
                <h4 class="font-bold text-teal-300 text-xs flex items-center">
                    <i class="fa-solid fa-user-gear mr-1.5"></i>個人專用裝備範例與所需名譽點
                </h4>
                <div class="overflow-x-auto rounded-lg border border-zinc-800 bg-zinc-950">
                    <table class="w-full text-left text-xs text-zinc-300">
                        <thead class="bg-zinc-900 text-amber-400 font-bold border-b border-zinc-800">
                            <tr>
                                <th class="p-2.5 border-r border-zinc-800 w-1/3">個人專用裝備名稱</th>
                                <th class="p-2.5 border-r border-zinc-800">強化效果細節</th>
                                <th class="p-2.5 text-center w-24">名譽點需求</th>
                            </tr>
                        </thead>
                        <tbody class="divide-y divide-zinc-800/60 font-mono text-[11px]">
                            <tr class="hover:bg-zinc-900/40"><td class="p-2.5 border-r border-zinc-800 font-bold text-amber-300">專用武器</td><td class="p-2.5 border-r border-zinc-800 font-sans">器用度 +2（僅影響命中力判定）</td><td class="p-2.5 text-center text-teal-300 font-bold">50</td></tr>
                            <tr class="hover:bg-zinc-900/40"><td class="p-2.5 border-r border-zinc-800 font-bold text-amber-300">專用盾</td><td class="p-2.5 border-r border-zinc-800 font-sans">敏捷度 +2（僅影響迴避力判定）</td><td class="p-2.5 text-center text-teal-300 font-bold">50</td></tr>
                            <tr class="hover:bg-zinc-900/40"><td class="p-2.5 border-r border-zinc-800 font-bold text-amber-300">專用鎧</td><td class="p-2.5 border-r border-zinc-800 font-sans">移動力 +2</td><td class="p-2.5 text-center text-teal-300 font-bold">50</td></tr>
                            <tr class="hover:bg-zinc-900/40"><td class="p-2.5 border-r border-zinc-800 font-bold text-amber-300">專用斥候工具 (スカウトツール)</td><td class="p-2.5 border-r border-zinc-800 font-sans">器用度 +2（僅影響解除判定、陷阱設置判定）</td><td class="p-2.5 text-center text-teal-300 font-bold">50</td></tr>
                            <tr class="hover:bg-zinc-900/40"><td class="p-2.5 border-r border-zinc-800 font-bold text-amber-300">專用飾品</td><td class="p-2.5 border-r border-zinc-800 font-sans">最大 HP +2 或 最大 MP +2（二選一）</td><td class="p-2.5 text-center text-teal-300 font-bold">50</td></tr>
                            <tr class="hover:bg-zinc-900/40"><td class="p-2.5 border-r border-zinc-800 font-bold text-cyan-300">專用發動體</td><td class="p-2.5 border-r border-zinc-800 font-sans">知力 +2（僅影響真語魔法、操靈魔法魔力）</td><td class="p-2.5 text-center text-teal-300 font-bold">100</td></tr>
                            <tr class="hover:bg-zinc-900/40"><td class="p-2.5 border-r border-zinc-800 font-bold text-cyan-300">專用聖印</td><td class="p-2.5 border-r border-zinc-800 font-sans">知力 +2（僅影響神聖魔法魔力）</td><td class="p-2.5 text-center text-teal-300 font-bold">100</td></tr>
                            <tr class="hover:bg-zinc-900/40"><td class="p-2.5 border-r border-zinc-800 font-bold text-cyan-300">專用魔導器 (マギスフィア)</td><td class="p-2.5 border-r border-zinc-800 font-sans">知力 +2（僅影響魔動機術魔力）</td><td class="p-2.5 text-center text-teal-300 font-bold">100</td></tr>
                            <tr class="hover:bg-zinc-900/40"><td class="p-2.5 border-r border-zinc-800 font-bold text-cyan-300">專用寶石盒 / 寶石飾品</td><td class="p-2.5 border-r border-zinc-800 font-sans">知力 +2（僅影響妖精魔法魔力）</td><td class="p-2.5 text-center text-teal-300 font-bold">100</td></tr>
                            <tr class="hover:bg-zinc-900/40"><td class="p-2.5 border-r border-zinc-800 font-bold text-cyan-300">專用樂器</td><td class="p-2.5 border-r border-zinc-800 font-sans">精神力 +2（僅影響奏力）</td><td class="p-2.5 text-center text-teal-300 font-bold">100</td></tr>
                        </tbody>
                    </table>
                </div>
                <p class="text-zinc-500 text-[10px]">
                    *同效果不可重複（例如不可裝備兩個專用飾品達到 HP+4）。新規製作時裝備本身的購買金額（Gamel）仍需另外支付。
                </p>
            </div>
        </div>
    </div>

    <!-- 3. 冒險者階級 (Adventurer Rank) 表格與特權 -->
    <div class="bg-zinc-900 border border-zinc-800 rounded-xl p-5 space-y-4 shadow-md">
        <div class="flex items-center gap-2 border-b border-zinc-800 pb-3">
            <span class="text-xs px-2.5 py-1 rounded bg-amber-950 text-amber-300 border border-amber-800 font-bold">Rank & Prestige</span>
            <h3 class="text-lg font-bold text-amber-400">冒險者階級 (Adventurer Rank) 表格與特權</h3>
        </div>

        <div class="space-y-4 text-xs text-zinc-300">
            <!-- 冒險者階級對照表 -->
            <div class="space-y-2">
                <h4 class="font-bold text-amber-400 text-xs flex items-center">
                    <i class="fa-solid fa-ranking-star mr-1.5"></i>冒險者階級需求與免名譽點額度 (Free Limit)
                </h4>
                <div class="overflow-x-auto rounded-lg border border-zinc-800 bg-zinc-950">
                    <table class="w-full text-left text-xs text-zinc-300">
                        <thead class="bg-zinc-900 text-amber-400 font-bold border-b border-zinc-800">
                            <tr>
                                <th class="p-2 border-r border-zinc-800">階級名稱 (Rank)</th>
                                <th class="p-2 border-r border-zinc-800 text-center">累積名譽點</th>
                                <th class="p-2 border-r border-zinc-800 text-center">免費額度 (Free)</th>
                                <th class="p-2 border-r border-zinc-800">評價與知名度</th>
                                <th class="p-2 text-center">證書發行範圍</th>
                            </tr>
                        </thead>
                        <tbody class="divide-y divide-zinc-800/60 font-mono text-[11px]">
                            <tr class="hover:bg-zinc-900/40"><td class="p-2 border-r border-zinc-800 font-sans font-bold text-zinc-500">無 (馬の骨)</td><td class="p-2 border-r border-zinc-800 text-center">0</td><td class="p-2 border-r border-zinc-800 text-center text-zinc-600">－</td><td class="p-2 border-r border-zinc-800 font-sans">評價對象外</td><td class="p-2 text-center font-sans">－</td></tr>
                            <tr class="hover:bg-zinc-900/40"><td class="p-2 border-r border-zinc-800 font-sans font-bold text-amber-200">匕首級 (ダガー)</td><td class="p-2 border-r border-zinc-800 text-center">20</td><td class="p-2 border-r border-zinc-800 text-center text-zinc-600">－</td><td class="p-2 border-r border-zinc-800 font-sans">［駆け出し］最低限的履歷</td><td class="p-2 text-center font-sans">單一支部</td></tr>
                            <tr class="hover:bg-zinc-900/40"><td class="p-2 border-r border-zinc-800 font-sans font-bold text-amber-200">細身劍級 (レイピア)</td><td class="p-2 border-r border-zinc-800 text-center">50</td><td class="p-2 border-r border-zinc-800 text-center text-teal-300 font-bold">5</td><td class="p-2 border-r border-zinc-800 font-sans">［成長途上］還在修行中</td><td class="p-2 text-center font-sans">單一支部</td></tr>
                            <tr class="hover:bg-zinc-900/40"><td class="p-2 border-r border-zinc-800 font-sans font-bold text-amber-300">闊劍級 (ブロードソード)</td><td class="p-2 border-r border-zinc-800 text-center">100</td><td class="p-2 border-r border-zinc-800 text-center text-teal-300 font-bold">10</td><td class="p-2 border-r border-zinc-800 font-sans">［一人前］有足夠履歷可放心交付任務</td><td class="p-2 text-center font-sans">複數支部合同</td></tr>
                            <tr class="hover:bg-zinc-900/40"><td class="p-2 border-r border-zinc-800 font-sans font-bold text-amber-300">長劍級 (グレートソード)</td><td class="p-2 border-r border-zinc-800 text-center">200</td><td class="p-2 border-r border-zinc-800 text-center text-teal-300 font-bold">20</td><td class="p-2 border-r border-zinc-800 font-sans">［要注意］不只完成工作，更有閃光點</td><td class="p-2 text-center font-sans">都市內合同</td></tr>
                            <tr class="hover:bg-zinc-900/40"><td class="p-2 border-r border-zinc-800 font-sans font-bold text-amber-400">雙手巨劍級 (フランベルジュ)</td><td class="p-2 border-r border-zinc-800 text-center">300</td><td class="p-2 border-r border-zinc-800 text-center text-teal-300 font-bold">30</td><td class="p-2 border-r border-zinc-800 font-sans">［実力者］無庸置疑可期待超額完成任務</td><td class="p-2 text-center font-sans">都市內合同</td></tr>
                            <tr class="hover:bg-zinc-900/40"><td class="p-2 border-r border-zinc-800 font-sans font-bold text-amber-400">哨兵級 (センチネル)</td><td class="p-2 border-r border-zinc-800 text-center">500</td><td class="p-2 border-r border-zinc-800 text-center text-teal-300 font-bold">50</td><td class="p-2 border-r border-zinc-800 font-sans">［一流］展現出無可挑剔的才華與能力</td><td class="p-2 text-center font-sans">國內合同</td></tr>
                            <tr class="hover:bg-zinc-900/40"><td class="p-2 border-r border-zinc-800 font-sans font-bold text-amber-500">霸王級 (ハイペリオン)</td><td class="p-2 border-r border-zinc-800 text-center">700</td><td class="p-2 border-r border-zinc-800 text-center text-teal-300 font-bold">70</td><td class="p-2 border-r border-zinc-800 font-sans">［勇者］唯有尊敬與讚賞的偉大冒險者</td><td class="p-2 text-center font-sans">國內合同</td></tr>
                            <tr class="hover:bg-zinc-900/40"><td class="p-2 border-r border-zinc-800 font-sans font-bold text-cyan-300">〈始源之劍〉級</td><td class="p-2 border-r border-zinc-800 text-center">1,000</td><td class="p-2 border-r border-zinc-800 text-center text-teal-300 font-bold">100</td><td class="p-2 border-r border-zinc-800 font-sans">［英雄］拯救世界的救世主</td><td class="p-2 text-center font-sans">地方合同</td></tr>
                            <tr class="hover:bg-zinc-900/40"><td class="p-2 border-r border-zinc-800 font-sans font-bold text-cyan-300">〈始源之劍〉★</td><td class="p-2 border-r border-zinc-800 text-center">1,500</td><td class="p-2 border-r border-zinc-800 text-center text-teal-300 font-bold">150</td><td class="p-2 border-r border-zinc-800 font-sans">拯救世界的救世主 (★1)</td><td class="p-2 text-center font-sans">地方合同</td></tr>
                            <tr class="hover:bg-zinc-900/40"><td class="p-2 border-r border-zinc-800 font-sans font-bold text-cyan-300">〈始源之劍〉★2</td><td class="p-2 border-r border-zinc-800 text-center">2,000</td><td class="p-2 border-r border-zinc-800 text-center text-teal-300 font-bold">200</td><td class="p-2 border-r border-zinc-800 font-sans">［超英雄］活著的傳奇傳說</td><td class="p-2 text-center font-sans">總部直轄</td></tr>
                            <tr class="hover:bg-zinc-900/40"><td class="p-2 border-r border-zinc-800 font-sans font-bold text-cyan-300">〈始源之劍〉★3</td><td class="p-2 border-r border-zinc-800 text-center">2,500</td><td class="p-2 border-r border-zinc-800 text-center text-teal-300 font-bold">250</td><td class="p-2 border-r border-zinc-800 font-sans">活著的傳奇傳說 (每+500點加1★ / 免費額度+50)</td><td class="p-2 text-center font-sans">總部直轄</td></tr>
                        </tbody>
                    </table>
                </div>
            </div>

            <!-- 階級特權：免費名譽道具退款機制與報酬預支 -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-3 pt-1">
                <div class="bg-zinc-950 p-3.5 rounded-lg border border-zinc-800 space-y-1">
                    <h4 class="font-bold text-emerald-400 text-xs flex items-center">
                        <i class="fa-solid fa-gift mr-1.5"></i>免費名譽道具額度與退款機制
                    </h4>
                    <p class="leading-relaxed text-zinc-300">
                        達到特定階級後，低於/等於「免費額度」的名譽道具<strong>無需消耗名譽點即可取得</strong>（金錢費用仍需支付）。若先前已花名譽點購買，提升階級後相應的名譽點會全額退還回角色持有的名譽點中！
                    </p>
                </div>
                <div class="bg-zinc-950 p-3.5 rounded-lg border border-zinc-800 space-y-1">
                    <h4 class="font-bold text-amber-300 text-xs flex items-center">
                        <i class="fa-solid fa-hand-holding-dollar mr-1.5"></i>冒險者公會報酬無擔保預支上限
                    </h4>
                    <p class="leading-relaxed text-zinc-300">
                        • <strong>無階級 (馬の骨)：</strong> 300 G<br>
                        • <strong>匕首級 (ダガー)：</strong> 500 G<br>
                        • <strong>細身劍級 (レイピア)：</strong> 1,000 G<br>
                        • <strong>雙手巨劍級 (フランベルジュ)：</strong> 5,000 G<br>
                        • <strong>霸王級 (ハイペリオン)：</strong> 10,000 G (後續每提升 1 階上限增 5,000 G)
                    </p>
                </div>
            </div>
        </div>
    </div>

    <!-- 4. 不名譽點 (Infamy Points) 與相殺機制 -->
    <div class="bg-zinc-900 border border-zinc-800 rounded-xl p-5 space-y-4 shadow-md">
        <div class="flex items-center gap-2 border-b border-zinc-800 pb-3">
            <span class="text-xs px-2.5 py-1 rounded bg-red-950 text-red-300 border border-red-800 font-bold">Infamy & Penalty</span>
            <h3 class="text-lg font-bold text-amber-400">不名譽點 (Infamy) 與 惡名修正懲罰</h3>
        </div>

        <div class="space-y-4 text-xs text-zinc-300">
            <p class="leading-relaxed">
                進行不名譽行為（賣出/遺失名譽道具、剝奪階級、違反冒險者不文律等）時會獲得不名譽點。當不名譽點累積過高且<strong>冒險者階級不足以抵禦</strong>時，將承受嚴重社會懲罰。
            </p>

            <!-- 不名譽點影響與防止階級表格 -->
            <div class="space-y-2">
                <h4 class="font-bold text-red-400 text-xs flex items-center">
                    <i class="fa-solid fa-triangle-exclamation mr-1.5"></i>不名譽點數惡名影響與防止階級對照表
                </h4>
                <div class="overflow-x-auto rounded-lg border border-zinc-800 bg-zinc-950">
                    <table class="w-full text-left text-xs text-zinc-300">
                        <thead class="bg-zinc-900 text-amber-400 font-bold border-b border-zinc-800">
                            <tr>
                                <th class="p-2.5 border-r border-zinc-800 text-center w-24">不名譽點</th>
                                <th class="p-2.5 border-r border-zinc-800 w-32">不名譽稱號</th>
                                <th class="p-2.5 border-r border-zinc-800">公會服務與商品惡性影響</th>
                                <th class="p-2.5 text-center w-36">免疫防禦階級需求</th>
                            </tr>
                        </thead>
                        <tbody class="divide-y divide-zinc-800/60 font-mono text-[11px]">
                            <tr class="hover:bg-zinc-900/40"><td class="p-2.5 border-r border-zinc-800 text-center font-bold text-amber-300">1 ~ 20</td><td class="p-2.5 border-r border-zinc-800 font-sans font-bold">哥布林級 / 迷惑</td><td class="p-2.5 border-r border-zinc-800 font-sans text-red-300">道具購買價格、服務利用價格 <strong class="text-red-400">+10%</strong></td><td class="p-2.5 text-center font-sans text-emerald-400">細身劍級 (レイピア) 以上</td></tr>
                            <tr class="hover:bg-zinc-900/40"><td class="p-2.5 border-r border-zinc-800 text-center font-bold text-amber-300">21 ~ 50</td><td class="p-2.5 border-r border-zinc-800 font-sans font-bold">波爾格級 / 危險</td><td class="p-2.5 border-r border-zinc-800 font-sans text-red-300">道具購買價格、服務利用價格 <strong class="text-red-400">+20%</strong></td><td class="p-2.5 text-center font-sans text-emerald-400">闊劍級 (ブロードソード) 以上</td></tr>
                            <tr class="hover:bg-zinc-900/40"><td class="p-2.5 border-r border-zinc-800 text-center font-bold text-amber-300">51 ~ 100</td><td class="p-2.5 border-r border-zinc-800 font-sans font-bold">食人魔級 / 外道</td><td class="p-2.5 border-r border-zinc-800 font-sans text-red-300">道具購買價格、服務利用價格 <strong class="text-red-400">+50%</strong></td><td class="p-2.5 text-center font-sans text-emerald-400">長劍級 (グレートソード) 以上</td></tr>
                            <tr class="hover:bg-zinc-900/40"><td class="p-2.5 border-r border-zinc-800 text-center font-bold text-amber-300">101 ~ 200</td><td class="p-2.5 border-r border-zinc-800 font-sans font-bold">巨魔級 / 極惡</td><td class="p-2.5 border-r border-zinc-800 font-sans text-red-400">道具購買價格、服務利用價格 <strong class="text-red-400">2 倍 (100% UP)</strong></td><td class="p-2.5 text-center font-sans text-emerald-400">哨兵級 (センチネル) 以上</td></tr>
                            <tr class="hover:bg-zinc-900/40"><td class="p-2.5 border-r border-zinc-800 text-center font-bold text-amber-300">201 ~ 500</td><td class="p-2.5 border-r border-zinc-800 font-sans font-bold">龍人級 / 人族之敵</td><td class="p-2.5 border-r border-zinc-800 font-sans text-red-400">道具購買價格、服務利用價格 <strong class="text-red-400">5 倍 (400% UP)</strong></td><td class="p-2.5 text-center font-sans text-emerald-400">〈始源之劍〉級 以上</td></tr>
                            <tr class="hover:bg-zinc-900/40"><td class="p-2.5 border-r border-zinc-800 text-center font-bold text-red-400">501 ~</td><td class="p-2.5 border-r border-zinc-800 font-sans font-bold text-red-400">蠻王級 / 世界破壞者</td><td class="p-2.5 border-r border-zinc-800 font-sans text-red-400 font-bold">冒險者資格完全停止與剝奪</td><td class="p-2.5 text-center font-sans text-red-500 font-bold">無 (全階級無法防止)</td></tr>
                        </tbody>
                    </table>
                </div>
            </div>

            <!-- 相殺機制說明 -->
            <div class="bg-zinc-950 p-3.5 rounded-lg border border-zinc-800 space-y-1.5">
                <h4 class="font-bold text-emerald-400 text-xs flex items-center">
                    <i class="fa-solid fa-shield-heart mr-1.5"></i>不名譽點的相殺與洗白 (消除方式)
                </h4>
                <p class="leading-relaxed text-zinc-300">
                    不名譽點可透過<strong>消耗同等數值的名譽點</strong>進行 1:1 相殺消除。此外，若奪回先前遺失/被奪走的名譽道具，相應產生的不名譽點會自動消除洗白。
                </p>
            </div>
        </div>
    </div>
</div>
`;
