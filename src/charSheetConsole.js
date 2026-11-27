// SW2.5 冒險者角色卡跑團控制台（單檔 JS 模組，可直接掛載至 #rules-container 或指定容器）
const STORAGE_KEY = 'sw25_character_sheets_v1';
const ACTIVE_ID_KEY = 'sw25_active_character_id_v1';
const STYLE_TAG_ID = 'sw25-char-console-style';

export const EXP_TABLE_A = [0, 1000, 2000, 3500, 5000, 7000, 9500, 12500, 16500, 21500, 28000, 36000, 46000, 58500, 73500, 93500];
export const EXP_TABLE_B = [0, 500, 1500, 2500, 4000, 5500, 7500, 10000, 13000, 17000, 22000, 28500, 36500, 46500, 59000, 74000];

const MAGIC_SKILLS = new Set([
  '真語魔法', '操靈魔法', '神聖魔法', '魔動機術', '妖精魔法',
  '深智魔法', '奈落魔法', '祕奧魔法', '咒詛魔法','召異魔法',
  '魔術師', '操靈術師', '神官', '魔動機師', '妖精使',
  '深智魔導師', '奈落魔導師', '咒法師'
]);

const SKILL_EXP_TABLE_MAP = {
  '戰士': 'A',
  '拳鬥士': 'A',
  '舞鬥士': 'A',
  '輕戰士': 'B',
  '射手': 'B',
  '生命工匠': 'A',
  '真語魔法': 'A',
  '操靈魔法': 'A',
  '神聖魔法': 'A',
  '魔動機術': 'A',
  '妖精魔法': 'A',
  '奈落魔法': 'A',
  '祕奧魔法': 'A',
  '咒詛魔法': 'A',
  '召異魔法': 'A',
  '斥候': 'B',
  '遊俠': 'B',
  '賢者': 'B',
  '吟遊詩人': 'B',
  '練技師': 'B',
  '賦術師': 'B',
  '騎士': 'B',
  '軍師': 'B',
  '天地使': 'B'
};

// 技能等級達標自動習得能力／特技規則（不占用自選格數）
const AUTO_FEATS_BY_SKILL = [
  { skill: '拳鬥士', minLv: 1, name: '追加攻撃', aliases: ['追加攻擊'], req: '拳鬥士Lv.1 / 1H〈格闘〉', cost: '常時', range: '1H〈格闘〉近接', desc: '以 1H〈格闘〉武器近接攻撃時，可對同一目標再進行一次 1H〈格闘〉近接攻撃。' },
  { skill: '拳鬥士', minLv: 7, name: '反擊', aliases: [], req: '拳鬥士Lv.7', cost: '宣言/特殊', range: '近接攻撃受擊時', desc: '受到近接攻撃時，可改以裝備武器的命中力判定與對方比拼達成值進行反擊。' },
  { skill: '拳鬥士', minLv: 13, name: '戰鬥大師', aliases: [], req: '拳鬥士Lv.13', cost: '常時', range: '自身', desc: '每回合可宣告 2 次宣言特技（同一動作不可重複宣告同一宣言特技）。' },
  { skill: '戰士', minLv: 7, name: '強韌', aliases: [], req: '戰士Lv.7', cost: '常時', range: '自身', desc: '最大 HP +15。' },
  { skill: '戰士', minLv: 13, name: '戰鬥大師', aliases: [], req: '戰士Lv.13', cost: '常時', range: '自身', desc: '每回合可宣告 2 次宣言特技（同一動作不可重複宣告同一宣言特技）。' },
  { skill: '舞鬥士', minLv: 7, name: '舞流', aliases: [], req: '舞鬥士Lv.7', cost: '常時', range: '自身', desc: '擴大可進行迴避力判定對應的攻撃範圍（射撃1體、貫通、突破等依規則判定）。' },
  { skill: '舞鬥士', minLv: 13, name: '戰鬥大師', aliases: [], req: '舞鬥士Lv.13', cost: '常時', range: '自身', desc: '每回合可宣告 2 次宣言特技（同一動作不可重複宣告同一宣言特技）。' },
  { skill: '斥候', minLv: 5, name: '尋寶獵人', aliases: [], req: '斥候Lv.5', cost: '常時', range: '戰利品決定', desc: '決定戰利品時的骰面 +1。' },
  { skill: '斥候', minLv: 7, name: '迅捷動作', aliases: [], req: '斥候Lv.7', cost: '常時', range: '先制奪取時', desc: '先制判定勝出時，第 1 回合可額外進行 1 次主動作。' },
  { skill: '斥候', minLv: 9, name: '影步', aliases: [], req: '斥候Lv.9', cost: '常時', range: '自身移動', desc: '移動不受移動妨害影響，且可不經脫離準備直接脫離亂戰區。' },
  { skill: '斥候', minLv: 12, name: '尋寶大師', aliases: [], req: '斥候Lv.12', cost: '常時', range: '戰利品決定', desc: '決定戰利品時的骰面再 +1。' },
  { skill: '斥候', minLv: 15, name: '匠技', aliases: [], req: '斥候Lv.15', cost: '1次/判定', range: '斥候基準判定', desc: '使用斥候技能基準值進行行為判定時，確認 2D 骰面後可選擇重骰 1 次。' },
  { skill: '遊俠', minLv: 5, name: '生存本能', aliases: [], req: '遊俠Lv.5', cost: '1次/日', range: '自然環境抵抗', desc: '於自然環境進行生命／精神抵抗力判定前宣告，可不擲骰直接自動成功。' },
  { skill: '遊俠', minLv: 7, name: '不屈', aliases: [], req: '遊俠Lv.7', cost: '常時', range: 'HP 歸 0 時', desc: 'HP 降至 0 時若生死判定成功，可不陷入昏迷繼續行動；失敗則死亡。' },
  { skill: '遊俠', minLv: 9, name: '魔藥大師', aliases: [], req: '遊俠Lv.9', cost: '戰鬥準備/1次/R', range: '自身〈藥水〉', desc: '對自身使用〈藥水〉分類道具時，可改以戰鬥準備或補助動作使用。' },
  { skill: '遊俠', minLv: 12, name: '縮地', aliases: [], req: '遊俠Lv.12', cost: '常時', range: '全力移動回合', desc: '進行全力移動的回合也可執行通常移動可做的動作（移動類別與迴避 -4 不變）。' },
  { skill: '遊俠', minLv: 15, name: '跑射', aliases: [], req: '遊俠Lv.15', cost: '常時', range: '通常移動回合', desc: '進行通常移動的回合也可執行限制移動可做的動作（移動類別不變）。' },
  { skill: '賢者', minLv: 5, name: '銳眼', aliases: [], req: '賢者Lv.5', cost: '常時', range: '戰利品決定', desc: '決定戰利品時的骰面 +1（戰利品決定數值+1）。' },
  { skill: '賢者', minLv: 7, name: '弱點看破', aliases: ['弱點識破'], req: '賢者Lv.7', cost: '常時', range: '魔物知識判定', desc: '以賢者技能進行魔物知識判定並達弱點值時，自身適用的弱點效果／增傷加倍（弱點效果2倍）。' },
  { skill: '賢者', minLv: 9, name: '魔力節約', aliases: [], req: '賢者Lv.9', cost: '常時', range: '消耗 MP 時', desc: '魔法或能力消耗 MP 時可減免 1 點（最低消耗 1 點，於倍加前計算）。' },
  { skill: '賢者', minLv: 12, name: '魔力耐性', aliases: [], req: '賢者Lv.12', cost: '常時', range: '受魔法傷害時', desc: '自身受到的所有魔法傷害常時 -5。' },
  { skill: '賢者', minLv: 15, name: '賢者智慧', aliases: [], req: '賢者Lv.15', cost: '1次/判定', range: '賢者基準判定', desc: '使用賢者技能基準值進行行為判定時，確認 2D 骰面後可選擇重骰 1 次。' }
];

// 僅用於「不占用自選格數」計算（允許使用者自由新增或保留這些卡片）
const NON_SLOT_FEAT_NAMES = new Set(['銳眼', '弱點看破', '弱點識破']);

function doesNotConsumeFeatSlot(name) {
  return NON_SLOT_FEAT_NAMES.has(String(name || '').trim());
}

// 解析替換型（Ⅰ、Ⅱ、Ⅲ / I、II、III）特技名稱與階級
const ROMAN_RANK_MAP = {
  'Ⅰ': 1, 'I': 1, '１': 1, '1': 1,
  'Ⅱ': 2, 'II': 2, '２': 2, '2': 2,
  'Ⅲ': 3, 'III': 3, '３': 3, '3': 3
};

function parseReplacementFeat(name) {
  const raw = String(name || '').trim();
  const match = raw.match(/^(.*?)\s*[《〈(（]?\s*(Ⅲ|III|３|3|Ⅱ|II|２|2|Ⅰ|I|１|1)\s*[》〉)）]?$/i);
  if (!match) {
    return { baseName: raw, rank: 0, isReplacement: false };
  }
  const baseName = match[1].trim();
  const token = match[2].toUpperCase();
  const rank = ROMAN_RANK_MAP[token] ?? ROMAN_RANK_MAP[match[2]] ?? 0;
  return { baseName, rank, isReplacement: rank > 0 };
}

const EVASION_SKILLS = new Set(['戰士', '輕戰士', '拳鬥士', '舞鬥士']);

const ACCESSORY_SLOTS = ['頭', '臉', '耳', '首', '背', '右手', '左手', '腰', '足', '其他'];

const ABILITY_LABELS = [
  ['dex', '靈巧度'],
  ['agi', '敏捷度'],
  ['str', '筋力'],
  ['vit', '生命力'],
  ['int', '知力'],
  ['mnd', '精神力']
];

const SCOPED_CSS = `
.sw25-cc-root {
  --cc-bg: #0f172a;
  --cc-panel: #18181b;
  --cc-panel-alt: #27272a;
  --cc-border: #3f3f46;
  --cc-text: #f4f4f5;
  --cc-muted: #a1a1aa;
  --cc-accent: #f59e0b;
  --cc-accent-hover: #d97706;
  --cc-cyan: #38bdf8;
  --cc-hp: #ef4444;
  --cc-hp-bg: rgba(239, 68, 68, 0.14);
  --cc-mp: #3b82f6;
  --cc-mp-bg: rgba(59, 130, 246, 0.14);
  --cc-good: #22c55e;
  --cc-warn: #f59e0b;
  --cc-radius: 12px;
  color: var(--cc-text);
  line-height: 1.5;
}
.sw25-cc-root * { box-sizing: border-box; }
.sw25-cc-topbar {
  background: var(--cc-panel);
  border: 1px solid rgba(245, 158, 11, 0.35);
  border-radius: var(--cc-radius);
  padding: 12px 16px;
  margin-bottom: 16px;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  align-items: center;
  justify-content: space-between;
}
.sw25-cc-brand {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 8px;
  font-weight: 700;
  font-size: 1rem;
  color: var(--cc-accent);
}
.sw25-cc-controls {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  align-items: center;
}
.sw25-cc-root select,
.sw25-cc-root input,
.sw25-cc-root textarea,
.sw25-cc-root button {
  font-family: inherit;
  font-size: 0.86rem;
  border-radius: 8px;
  border: 1px solid var(--cc-border);
  background: #09090b;
  color: var(--cc-text);
  padding: 6px 10px;
}
.sw25-cc-root input[type="checkbox"] {
  width: 16px;
  height: 16px;
  accent-color: var(--cc-accent);
  cursor: pointer;
}
.sw25-cc-root input:focus,
.sw25-cc-root select:focus,
.sw25-cc-root textarea:focus {
  outline: none;
  border-color: var(--cc-accent);
}
.sw25-cc-root button {
  cursor: pointer;
  background: var(--cc-panel-alt);
  transition: background 0.15s, border-color 0.15s, transform 0.05s;
}
.sw25-cc-root button:hover {
  border-color: var(--cc-accent);
  background: #323238;
}
.sw25-cc-root button:active { transform: translateY(1px); }
.sw25-cc-root button.primary {
  background: var(--cc-accent);
  color: #18181b;
  font-weight: 700;
  border-color: var(--cc-accent);
}
.sw25-cc-root button.primary:hover { background: var(--cc-accent-hover); }
.sw25-cc-root button.danger { border-color: #7f1d1d; color: #fca5a5; }
.sw25-cc-root button.danger:hover { background: #7f1d1d; color: #fff; }
.sw25-cc-root button.sm { padding: 4px 9px; font-size: 0.8rem; }

.sw25-cc-grid {
  display: grid;
  grid-template-columns: 365px 1fr;
  gap: 16px;
}
@media (max-width: 1024px) {
  .sw25-cc-grid { grid-template-columns: 1fr; }
}
.sw25-cc-card {
  background: var(--cc-panel);
  border: 1px solid var(--cc-border);
  border-radius: var(--cc-radius);
  padding: 14px;
  margin-bottom: 14px;
}
.sw25-cc-card h2, .sw25-cc-card h3 {
  margin: 0 0 10px 0;
  font-size: 0.96rem;
  font-weight: 700;
  color: var(--cc-accent);
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid var(--cc-border);
  padding-bottom: 6px;
  gap: 8px;
  flex-wrap: wrap;
}
.sw25-cc-pool {
  border-radius: 8px;
  padding: 10px 12px;
  margin-bottom: 10px;
  border: 1px solid var(--cc-border);
}
.sw25-cc-pool-hp { background: var(--cc-hp-bg); border-color: rgba(239, 68, 68, 0.4); }
.sw25-cc-pool-mp { background: var(--cc-mp-bg); border-color: rgba(59, 130, 246, 0.4); }
.sw25-cc-pool-header {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin-bottom: 6px;
}
.sw25-cc-pool-title { font-weight: 700; font-size: 0.9rem; }
.sw25-cc-pool-val { font-size: 1.2rem; font-weight: 800; font-variant-numeric: tabular-nums; }
.sw25-cc-bar-track {
  height: 8px;
  background: rgba(9, 9, 11, 0.75);
  border-radius: 999px;
  overflow: hidden;
  margin-bottom: 8px;
}
.sw25-cc-bar-hp { height: 100%; background: var(--cc-hp); transition: width 0.2s; }
.sw25-cc-bar-mp { height: 100%; background: var(--cc-mp); transition: width 0.2s; }
.sw25-cc-pool-btns {
  display: flex;
  gap: 4px;
  flex-wrap: wrap;
}
.sw25-cc-pool-btns button { flex: 1; min-width: 38px; padding: 4px 6px; font-size: 0.78rem; }

.sw25-cc-derived {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 8px;
}
.sw25-cc-pill {
  background: #09090b;
  border: 1px solid var(--cc-border);
  border-radius: 8px;
  padding: 8px;
  text-align: center;
}
.sw25-cc-pill .lbl { font-size: 0.74rem; color: var(--cc-muted); }
.sw25-cc-pill .num { font-size: 1.08rem; font-weight: 700; margin-top: 2px; color: var(--cc-cyan); }

.sw25-cc-root table {
  width: 100%;
  border-collapse: collapse;
  font-size: 0.84rem;
}
.sw25-cc-root th, .sw25-cc-root td {
  border-bottom: 1px solid var(--cc-border);
  padding: 6px 4px;
  text-align: center;
}
.sw25-cc-root th { color: var(--cc-muted); font-weight: 600; font-size: 0.78rem; }
.sw25-cc-root td.left, .sw25-cc-root th.left { text-align: left; }
.sw25-cc-root input.num-in { width: 52px; text-align: center; padding: 4px; }

.sw25-cc-meta-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
}
@media (max-width: 768px) {
  .sw25-cc-meta-grid { grid-template-columns: repeat(2, 1fr); }
}
.sw25-cc-field { display: flex; flex-direction: column; gap: 4px; }
.sw25-cc-field label { font-size: 0.76rem; color: var(--cc-muted); }
.sw25-cc-field input, .sw25-cc-field select { width: 100%; }

.sw25-cc-equip-box {
  background: #09090b;
  border: 1px solid var(--cc-border);
  border-radius: 10px;
  padding: 10px 12px;
  margin-bottom: 12px;
}
.sw25-cc-equip-box.equipped {
  border-color: rgba(245, 158, 11, 0.55);
}
.sw25-cc-equip-grid {
  display: grid;
  grid-template-columns: 95px 2.2fr 0.9fr 1fr 1fr;
  gap: 8px;
  align-items: end;
}
@media (max-width: 768px) {
  .sw25-cc-equip-grid { grid-template-columns: repeat(2, 1fr); }
}
.sw25-cc-slot-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: 8px;
  margin-bottom: 12px;
}
.sw25-cc-slot-card {
  background: #09090b;
  border: 1px solid var(--cc-border);
  border-radius: 8px;
  padding: 8px 10px;
  display: flex;
  flex-direction: column;
  gap: 6px;
}
.sw25-cc-slot-card.equipped {
  border-color: rgba(56, 189, 248, 0.55);
}

.sw25-cc-tabs {
  display: flex;
  gap: 6px;
  border-bottom: 1px solid var(--cc-border);
  margin-bottom: 14px;
  flex-wrap: wrap;
}
.sw25-cc-tab-btn {
  border: none !important;
  border-bottom: 2px solid transparent !important;
  border-radius: 6px 6px 0 0 !important;
  padding: 8px 14px !important;
  background: transparent !important;
  color: var(--cc-muted) !important;
  font-weight: 600;
}
.sw25-cc-tab-btn.active {
  color: var(--cc-accent) !important;
  border-bottom-color: var(--cc-accent) !important;
  background: rgba(245, 158, 11, 0.1) !important;
}
.sw25-cc-pane { display: none; }
.sw25-cc-pane.active { display: block; }

.sw25-cc-badge {
  display: inline-block;
  padding: 2px 8px;
  border-radius: 999px;
  font-size: 0.74rem;
  background: rgba(56, 189, 248, 0.15);
  color: var(--cc-cyan);
  border: 1px solid rgba(56, 189, 248, 0.35);
}
.sw25-cc-badge.warn { background: rgba(245, 158, 11, 0.15); color: #fcd34d; border-color: rgba(245, 158, 11, 0.4); }
.sw25-cc-badge.good { background: rgba(34, 197, 94, 0.15); color: #86efac; border-color: rgba(34, 197, 94, 0.4); }
.sw25-cc-badge.danger { background: rgba(239, 68, 68, 0.16); color: #fca5a5; border-color: rgba(239, 68, 68, 0.45); }

.sw25-cc-buff-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #09090b;
  border: 1px solid var(--cc-border);
  border-radius: 6px;
  padding: 6px 10px;
  margin-bottom: 6px;
  font-size: 0.83rem;
}
.sw25-cc-dice-bar {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 12px;
}
.sw25-cc-log {
  background: #09090b;
  border: 1px solid var(--cc-border);
  border-radius: 8px;
  padding: 10px;
  height: 210px;
  overflow-y: auto;
  font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace;
  font-size: 0.82rem;
}
.sw25-cc-log-entry {
  padding: 4px 0;
  border-bottom: 1px dashed rgba(63, 63, 70, 0.7);
}
.sw25-cc-log-entry:last-child { border-bottom: none; }
.sw25-cc-crit { color: #4ade80; font-weight: 700; }
.sw25-cc-fumble { color: #f87171; font-weight: 700; }

.sw25-cc-feat-box {
  background: rgba(245, 158, 11, 0.05);
  border: 1px solid rgba(245, 158, 11, 0.28);
  border-radius: 10px;
  padding: 10px 12px;
  margin-bottom: 14px;
}
.sw25-cc-rule-note {
  background: rgba(15, 23, 42, 0.75);
  border-left: 3px solid var(--cc-accent);
  border-radius: 6px;
  padding: 7px 10px;
  margin-bottom: 10px;
  font-size: 0.79rem;
  color: #d4d4d8;
}
.sw25-cc-auto-feat-card {
  background: rgba(56, 189, 248, 0.06);
  border: 1px solid rgba(56, 189, 248, 0.3);
  border-radius: 8px;
  padding: 8px 10px;
  margin-bottom: 6px;
}
.sw25-cc-ability-card {
  background: #09090b;
  border: 1px solid var(--cc-border);
  border-radius: 8px;
  padding: 10px 12px;
  margin-bottom: 8px;
}
.sw25-cc-ability-card.editing {
  border-color: var(--cc-accent);
  box-shadow: 0 0 0 1px var(--cc-accent);
}
.sw25-cc-ability-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 8px;
  flex-wrap: wrap;
}
.sw25-cc-ability-meta {
  font-size: 0.78rem;
  color: var(--cc-muted);
  margin: 4px 0;
}
.sw25-cc-ability-desc {
  font-size: 0.84rem;
  white-space: pre-wrap;
  color: #e4e4e7;
}
.sw25-cc-dialog {
  background: var(--cc-panel);
  color: var(--cc-text);
  border: 1px solid var(--cc-border);
  border-radius: 12px;
  padding: 18px;
  max-width: 620px;
  width: 92%;
}
.sw25-cc-dialog::backdrop { background: rgba(0, 0, 0, 0.7); }
.sw25-cc-code-area {
  width: 100%;
  height: 230px;
  font-family: ui-monospace, monospace;
  font-size: 0.8rem;
}
`;

function injectScopedStyles() {
  if (document.getElementById(STYLE_TAG_ID)) return;
  const style = document.createElement('style');
  style.id = STYLE_TAG_ID;
  style.textContent = SCOPED_CSS;
  document.head.appendChild(style);
}

function nowIso() { return new Date().toISOString(); }
function toSafeNumber(val, fallback = 0) {
  const num = Number(val);
  return Number.isFinite(num) ? num : fallback;
}
function escapeHtml(str) {
  return String(str ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}
function createEmptyAbility() { return { base: 12, growth: 0, misc: 0 }; }
function normalizeAbilityInput(ab) {
  const b = createEmptyAbility();
  if (!ab || typeof ab !== 'object') return b;
  return {
    base: toSafeNumber(ab.base, b.base),
    growth: toSafeNumber(ab.growth, b.growth),
    misc: toSafeNumber(ab.misc, b.misc)
  };
}

function normalizeAbilityCardItem(item) {
  if (typeof item === 'string') {
    return { name: item, featType: '', req: '', cost: '', range: '', riskNote: '', desc: '' };
  }
  if (item && typeof item === 'object') {
    return {
      name: String(item.name || ''),
      featType: String(item.featType || ''),
      req: String(item.req || item.restriction || item.condition || ''),
      cost: String(item.cost || ''),
      range: String(item.range || ''),
      riskNote: String(item.riskNote || ''),
      desc: String(item.desc || '')
    };
  }
  return { name: '', featType: '', req: '', cost: '', range: '', riskNote: '', desc: '' };
}

function getDancerSkillLevel(skills = []) {
  const found = skills.find(s => s.name === '舞鬥士' || s.name === '舞踏家');
  return found?.level ?? 0;
}

// 一般選擇習得格數：冒險者等級每 2 級 1 格 + 舞鬥士習得(+1)
function getMaxFeatSlots(adventurerLv, skills = []) {
  const lv = Math.max(0, parseInt(adventurerLv, 10) || 0);
  const baseSlots = lv <= 0 ? 0 : Math.floor((lv + 1) / 2);
  const dancerBonus = getDancerSkillLevel(skills) >= 1 ? 1 : 0;
  return baseSlots + dancerBonus;
}

// 計算實際占用自選特技格數的數量（排除銳眼、弱點看破、弱點識破）
function countSlotConsumingFeats(feats = []) {
  return (feats || [])
    .map(normalizeAbilityCardItem)
    .filter(f => !doesNotConsumeFeatSlot(f.name)).length;
}

// 依技能等級計算自動習得戰鬥特技（不占用自選特技格數，亦不能用習得格選擇習得）
function getAutoFeatsForSkills(skills = []) {
  const skillLvMap = new Map();
  let casterSum = 0;
  skills.forEach(sk => {
    const lv = parseInt(sk.level, 10) || 0;
    skillLvMap.set(sk.name, Math.max(skillLvMap.get(sk.name) || 0, lv));
    if (MAGIC_SKILLS.has(sk.name)) casterSum += lv;
  });

  const list = AUTO_FEATS_BY_SKILL
    .filter(rule => (skillLvMap.get(rule.skill) || 0) >= rule.minLv)
    .map(r => ({
      name: r.name,
      aliases: r.aliases || [],
      req: r.req,
      cost: r.cost,
      range: r.range,
      desc: r.desc,
      autoSource: `${r.skill}Lv.${r.minLv}`
    }));

  if (casterSum >= 11) {
    list.push({
      name: '符文大師',
      aliases: [],
      req: '魔法系技能合計Lv.11',
      cost: '常時',
      range: '自身',
      desc: '每回合可宣告 2 次宣言特技，但至少 1 次須為「使用：魔法系技能」之特技。',
      autoSource: `魔法系合計Lv.${casterSum}`
    });
  }

  return list;
}

function evaluateFeatRequirement(reqText, char) {
  const raw = String(reqText || '').trim();
  if (!raw) return { status: 'none', text: '' };

  const advLv = char.computed?.adventurerLevel ?? 0;
  const totals = char.computed?.abilityTotals || {};
  const mods = char.computed?.abilityMods || {};
  const skills = char.skills || [];

  const statNameMap = {
    '靈巧': 'dex', '靈巧度': 'dex',
    '敏捷': 'agi', '敏捷度': 'agi',
    '筋力': 'str',
    '生命': 'vit', '生命力': 'vit',
    '知力': 'int',
    '精神': 'mnd', '精神力': 'mnd'
  };

  const advMatch = raw.match(/冒險者\s*(?:Lv\.?|等級)?\s*(\d+)/i);
  if (advMatch) {
    const needLv = Number(advMatch[1]);
    if (advLv < needLv) {
      return { status: 'unmet', text: `需冒險者Lv.${needLv}（目前Lv.${advLv}）` };
    }
  }

  const skillMatches = [...raw.matchAll(/([\u4e00-\u9fa5A-Za-z]+)\s*(?:Lv\.?|等級)\s*(\d+)/gi)];
  for (const m of skillMatches) {
    const skName = m[1];
    if (skName === '冒險者') continue;
    const needSkLv = Number(m[2]);
    const found = skills.find(s => s.name === skName || s.name.includes(skName));
    const curSkLv = found?.level ?? 0;
    if (curSkLv < needSkLv) {
      return { status: 'unmet', text: `需${skName}Lv.${needSkLv}（目前Lv.${curSkLv}）` };
    }
  }

  const modMatches = [...raw.matchAll(/(靈巧度?|敏捷度?|筋力|生命力?|知力|精神力?)\s*(?:加值|B)\s*\+\s*(\d+)/gi)];
  for (const m of modMatches) {
    const key = statNameMap[m[1]];
    const needMod = Number(m[2]);
    const curMod = key ? (mods[key] ?? 0) : 0;
    if (curMod < needMod) {
      return { status: 'unmet', text: `需${m[1]}加值+${needMod}（目前+${curMod}）` };
    }
  }

  const valMatches = [...raw.matchAll(/(靈巧度?|敏捷度?|筋力|生命力?|知力|精神力?)\s*(\d+)/g)];
  for (const m of valMatches) {
    if (raw.includes('加值') || raw.includes('B+')) continue;
    const key = statNameMap[m[1]];
    const needVal = Number(m[2]);
    const curVal = key ? (totals[key] ?? 0) : 0;
    if (curVal < needVal) {
      return { status: 'unmet', text: `需${m[1]}${needVal}（目前${curVal}）` };
    }
  }

  return { status: 'met', text: '條件符合' };
}

function normalizeAccessoryItem(item) {
  if (!item || typeof item !== 'object') {
    return { slot: '其他', name: '', note: '', equipped: true };
  }
  const rawSlot = String(item.slot || '其他').trim();
  const normalizedSlot = ACCESSORY_SLOTS.includes(rawSlot) ? rawSlot : (rawSlot || '其他');
  return {
    slot: normalizedSlot,
    name: String(item.name || ''),
    note: String(item.note || ''),
    equipped: item.equipped !== false
  };
}

function normalizeWeaponItem(w) {
  if (!w || typeof w !== 'object') {
    return { name: '', usage: '1H', reqStr: 0, hitMod: 0, power: 10, crit: 10, extraDmg: 0, equipped: true };
  }
  return {
    name: String(w.name || ''),
    usage: String(w.usage || '1H'),
    reqStr: toSafeNumber(w.reqStr, 0),
    hitMod: toSafeNumber(w.hitMod, 0),
    power: toSafeNumber(w.power, 10),
    crit: toSafeNumber(w.crit, 10),
    extraDmg: toSafeNumber(w.extraDmg, 0),
    equipped: w.equipped !== false
  };
}

export function createDefaultCharacter(overrides = {}) {
  const id = overrides.id || `char_${Date.now()}_${Math.random().toString(36).slice(2, 7)}`;
  const baseChar = {
    schemaVersion: 'sw25.char.v1',
    id,
    updatedAt: nowIso(),
    meta: {
      name: '未命名冒險者',
      race: '人類',
      gender: '',
      age: '',
      expTotal: 3000,
      expUsed: 0,
      honorPoints: 0,
      honorRank: '無名',
      moneyG: 1200,
      notes: ''
    },
    abilities: {
      dex: createEmptyAbility(),
      agi: createEmptyAbility(),
      str: createEmptyAbility(),
      vit: createEmptyAbility(),
      int: createEmptyAbility(),
      mnd: createEmptyAbility()
    },
    derived: {
      maxHp: 0, currentHp: 0, maxMp: 0, currentMp: 0,
      moveNormal: 0, moveLimit: 10, moveFull: 0,
      initiative: 0, lifeResist: 0, mindResist: 0,
      evasionBase: 0, totalDefense: 0
    },
    skills: [
      { name: '戰士', expTable: 'A', level: 1, magicPower: 0 },
      { name: '斥候', expTable: 'B', level: 1, magicPower: 0 }
    ],
    feats: [],
    learnedAbilities: {
      spells: [], songs: [], tactics: [], alchemy: [], enhancements: [], riding: [], items: []
    },
    equipment: {
      weapons: [],
      armor: { name: '', category: '防具-金屬鎧甲', reqStr: 0, evasionMod: 0, defense: 0, equipped: true },
      shield: { name: '', category: '防具-盾牌', reqStr: 0, evasionMod: 0, defense: 0, equipped: true },
      accessories: []
    },
    combatSync: { sizeParts: 1, meleeZone: true, activeBuffs: [] }
  };

  const merged = {
    ...baseChar,
    ...overrides,
    meta: { ...baseChar.meta, ...(overrides.meta || {}) },
    abilities: {
      dex: normalizeAbilityInput(overrides.abilities?.dex),
      agi: normalizeAbilityInput(overrides.abilities?.agi),
      str: normalizeAbilityInput(overrides.abilities?.str),
      vit: normalizeAbilityInput(overrides.abilities?.vit),
      int: normalizeAbilityInput(overrides.abilities?.int),
      mnd: normalizeAbilityInput(overrides.abilities?.mnd)
    },
    derived: { ...baseChar.derived, ...(overrides.derived || {}) },
    learnedAbilities: { ...baseChar.learnedAbilities, ...(overrides.learnedAbilities || {}) },
    equipment: {
      ...baseChar.equipment,
      ...(overrides.equipment || {}),
      armor: { ...baseChar.equipment.armor, ...(overrides.equipment?.armor || {}) },
      shield: { ...baseChar.equipment.shield, ...(overrides.equipment?.shield || {}) },
      weapons: Array.isArray(overrides.equipment?.weapons) ? overrides.equipment.weapons.map(normalizeWeaponItem) : [],
      accessories: Array.isArray(overrides.equipment?.accessories) ? overrides.equipment.accessories.map(normalizeAccessoryItem) : []
    },
    combatSync: {
      ...baseChar.combatSync,
      ...(overrides.combatSync || {}),
      activeBuffs: Array.isArray(overrides.combatSync?.activeBuffs) ? overrides.combatSync.activeBuffs : []
    },
    skills: Array.isArray(overrides.skills) ? overrides.skills : baseChar.skills,
    feats: Array.isArray(overrides.feats) ? overrides.feats : baseChar.feats
  };

  return recalculateCharacter(merged, { resetCurrentPools: true });
}

function calcAbilityTotal(ab) {
  return toSafeNumber(ab?.base) + toSafeNumber(ab?.growth) + toSafeNumber(ab?.misc);
}
function calcAbilityMod(total) {
  return Math.floor(toSafeNumber(total) / 6);
}
function getExpCost(expTable, level) {
  const lv = Math.max(0, Math.min(15, parseInt(level, 10) || 0));
  return expTable === 'B' ? EXP_TABLE_B[lv] : EXP_TABLE_A[lv];
}
function getBuffSum(activeBuffs, statKey) {
  if (!Array.isArray(activeBuffs)) return 0;
  return activeBuffs.reduce((acc, buff) => {
    if (!buff) return acc;
    if (typeof buff.modifiers === 'object' && buff.modifiers !== null) {
      return acc + toSafeNumber(buff.modifiers[statKey]);
    }
    if (buff.stat === statKey) return acc + toSafeNumber(buff.value);
    return acc;
  }, 0);
}

export function recalculateCharacter(rawChar, options = {}) {
  const char = JSON.parse(JSON.stringify(rawChar || {}));
  char.meta = {
    name: '未命名冒險者', race: '人類', gender: '', age: '',
    expTotal: 3000, expUsed: 0, honorPoints: 0, honorRank: '無名', moneyG: 1200, notes: '',
    ...(char.meta || {})
  };
  char.abilities = {
    dex: normalizeAbilityInput(char.abilities?.dex),
    agi: normalizeAbilityInput(char.abilities?.agi),
    str: normalizeAbilityInput(char.abilities?.str),
    vit: normalizeAbilityInput(char.abilities?.vit),
    int: normalizeAbilityInput(char.abilities?.int),
    mnd: normalizeAbilityInput(char.abilities?.mnd)
  };

  char.feats = (Array.isArray(char.feats) ? char.feats : []).map(normalizeAbilityCardItem);

  char.learnedAbilities = {
    spells: [], songs: [], tactics: [], alchemy: [], enhancements: [], riding: [], items: [],
    ...(char.learnedAbilities || {})
  };
  ['spells', 'songs', 'tactics', 'alchemy', 'enhancements', 'riding'].forEach(k => {
    char.learnedAbilities[k] = (Array.isArray(char.learnedAbilities[k]) ? char.learnedAbilities[k] : []).map(normalizeAbilityCardItem);
  });

  const rawArmor = char.equipment?.armor || {};
  const rawShield = char.equipment?.shield || {};
  char.equipment = {
    weapons: (Array.isArray(char.equipment?.weapons) ? char.equipment.weapons : []).map(normalizeWeaponItem),
    armor: {
      name: String(rawArmor.name || ''),
      category: String(rawArmor.category || '防具-金屬鎧甲'),
      reqStr: toSafeNumber(rawArmor.reqStr, 0),
      evasionMod: toSafeNumber(rawArmor.evasionMod, 0),
      defense: toSafeNumber(rawArmor.defense, 0),
      equipped: rawArmor.equipped !== false
    },
    shield: {
      name: String(rawShield.name || ''),
      category: String(rawShield.category || '防具-盾牌'),
      reqStr: toSafeNumber(rawShield.reqStr, 0),
      evasionMod: toSafeNumber(rawShield.evasionMod, 0),
      defense: toSafeNumber(rawShield.defense, 0),
      equipped: rawShield.equipped !== false
    },
    accessories: (Array.isArray(char.equipment?.accessories) ? char.equipment.accessories : []).map(normalizeAccessoryItem)
  };
  char.combatSync = {
    sizeParts: toSafeNumber(char.combatSync?.sizeParts, 1),
    meleeZone: char.combatSync?.meleeZone ?? true,
    activeBuffs: Array.isArray(char.combatSync?.activeBuffs) ? char.combatSync.activeBuffs : []
  };

  const prevMaxHp = toSafeNumber(char.derived?.maxHp, 0);
  const prevMaxMp = toSafeNumber(char.derived?.maxMp, 0);
  const buffs = char.combatSync.activeBuffs;

  const abilityTotals = {};
  const abilityMods = {};
  ['dex', 'agi', 'str', 'vit', 'int', 'mnd'].forEach(key => {
    const total = calcAbilityTotal(char.abilities[key]) + getBuffSum(buffs, key);
    abilityTotals[key] = total;
    abilityMods[key] = calcAbilityMod(total);
  });

  const skills = (Array.isArray(char.skills) ? char.skills : []).map(sk => {
    const name = String(sk?.name || '').trim();
    const lv = Math.max(0, Math.min(15, parseInt(sk?.level, 10) || 0));
    const table = (sk?.expTable === 'A' || sk?.expTable === 'B')
      ? sk.expTable
      : (SKILL_EXP_TABLE_MAP[name] || 'A');
    const magicPower = MAGIC_SKILLS.has(name)
      ? lv + abilityMods.int + getBuffSum(buffs, 'magicPower')
      : toSafeNumber(sk?.magicPower, 0);
    return { name, expTable: table, level: lv, magicPower };
  });

  const expUsed = skills.reduce((sum, sk) => sum + getExpCost(sk.expTable, sk.level), 0);
  const maxSkillLevel = skills.reduce((maxLv, sk) => Math.max(maxLv, sk.level), 0);
  const adventurerLv = maxSkillLevel;
  const featMaxSlots = getMaxFeatSlots(adventurerLv, skills);
  const featSlotUsed = countSlotConsumingFeats(char.feats);
  const autoFeats = getAutoFeatsForSkills(skills);
  const hasToughness = autoFeats.some(f => f.name === '強韌');

  const maxHp = Math.max(0, abilityTotals.vit + adventurerLv * 3 + (hasToughness ? 15 : 0) + getBuffSum(buffs, 'maxHp'));
  const casterLevelsSum = skills
    .filter(s => MAGIC_SKILLS.has(s.name))
    .reduce((sum, s) => sum + s.level, 0);
  const maxMp = Math.max(0, abilityTotals.mnd + casterLevelsSum * 3 + getBuffSum(buffs, 'maxMp'));

  const sorceryLv = skills.find(s => ['真語魔法', '魔術師'].includes(s.name))?.level || 0;
  const sorcererLv = skills.find(s => ['操靈魔法', '操靈術師'].includes(s.name))?.level || 0;
  const wizardLevel = (sorceryLv > 0 && sorcererLv > 0) ? Math.min(sorceryLv, sorcererLv) : 0;
  const wizardPower = (sorceryLv > 0 && sorcererLv > 0)
    ? Math.max(sorceryLv, sorcererLv) + abilityMods.int + getBuffSum(buffs, 'magicPower')
    : 0;

  const maxEvasionSkillLv = skills
    .filter(s => EVASION_SKILLS.has(s.name))
    .reduce((maxLv, s) => Math.max(maxLv, s.level), 0);
  const armorEva = char.equipment.armor.equipped ? toSafeNumber(char.equipment.armor.evasionMod, 0) : 0;
  const shieldEva = char.equipment.shield.equipped ? toSafeNumber(char.equipment.shield.evasionMod, 0) : 0;
  const armorDef = char.equipment.armor.equipped ? toSafeNumber(char.equipment.armor.defense, 0) : 0;
  const shieldDef = char.equipment.shield.equipped ? toSafeNumber(char.equipment.shield.defense, 0) : 0;

  const evasionBase = (maxEvasionSkillLv > 0 ? maxEvasionSkillLv + abilityMods.agi : 0) + armorEva + shieldEva + getBuffSum(buffs, 'evasion');
  const totalDefense = armorDef + shieldDef + getBuffSum(buffs, 'defense');

  const moveNormal = Math.max(0, abilityTotals.agi + getBuffSum(buffs, 'moveNormal'));
  const moveLimit = 10;
  const moveFull = moveNormal * 3;
  const initiative = 0 + getBuffSum(buffs, 'initiative');
  const lifeResist = adventurerLv + abilityMods.vit + getBuffSum(buffs, 'lifeResist');
  const mindResist = adventurerLv + abilityMods.mnd + getBuffSum(buffs, 'mindResist');

  let currentHp = Number(char.derived?.currentHp);
  let currentMp = Number(char.derived?.currentMp);

  if (options.resetCurrentPools || Number.isNaN(currentHp)) {
    currentHp = maxHp;
  } else if (options.syncMaxDelta && prevMaxHp > 0) {
    currentHp = Math.max(0, Math.min(maxHp, currentHp + (maxHp - prevMaxHp)));
  } else {
    currentHp = Math.max(0, Math.min(maxHp, currentHp));
  }

  if (options.resetCurrentPools || Number.isNaN(currentMp)) {
    currentMp = maxMp;
  } else if (options.syncMaxDelta && prevMaxMp > 0) {
    currentMp = Math.max(0, Math.min(maxMp, currentMp + (maxMp - prevMaxMp)));
  } else {
    currentMp = Math.max(0, Math.min(maxMp, currentMp));
  }

  char.skills = skills;
  char.meta.expUsed = expUsed;
  char.meta.adventurerLevel = adventurerLv;
  char.computed = {
    abilityTotals,
    abilityMods,
    expRemaining: toSafeNumber(char.meta.expTotal, 0) - expUsed,
    adventurerLevel: adventurerLv,
    featMaxSlots,
    featSlotUsed,
    autoFeats,
    dancerBonusSlot: getDancerSkillLevel(skills) >= 1 ? 1 : 0,
    casterLevelsSum,
    wizardLevel,
    wizardPower,
    maxEvasionSkillLv,
    evasionBase,
    totalDefense
  };
  char.derived = {
    maxHp, currentHp, maxMp, currentMp,
    moveNormal, moveLimit, moveFull,
    initiative, lifeResist, mindResist,
    evasionBase, totalDefense
  };
  char.updatedAt = nowIso();
  return char;
}

export function loadAllCharacters() {
  try {
    const raw = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (!Array.isArray(raw) || raw.length === 0) {
      const initial = [createDefaultCharacter({ meta: { name: '預設冒險者' } })];
      saveAllCharacters(initial);
      localStorage.setItem(ACTIVE_ID_KEY, initial[0].id);
      return initial;
    }
    return raw.map(item => recalculateCharacter(item));
  } catch {
    const initial = [createDefaultCharacter({ meta: { name: '預設冒險者' } })];
    saveAllCharacters(initial);
    localStorage.setItem(ACTIVE_ID_KEY, initial[0].id);
    return initial;
  }
}

export function saveAllCharacters(list) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(list));
}

export function getActiveCharacter() {
  const list = loadAllCharacters();
  const savedId = localStorage.getItem(ACTIVE_ID_KEY);
  return list.find(c => c.id === savedId) || list[0];
}

export function setActiveCharacterId(id) {
  const list = loadAllCharacters();
  if (!list.some(c => c.id === id)) return null;
  localStorage.setItem(ACTIVE_ID_KEY, id);
  return list.find(c => c.id === id);
}

export function saveCharacter(updatedChar, options = {}) {
  const list = loadAllCharacters();
  const normalized = recalculateCharacter(updatedChar, options);
  const idx = list.findIndex(c => c.id === normalized.id);
  if (idx >= 0) list[idx] = normalized;
  else list.push(normalized);
  saveAllCharacters(list);
  localStorage.setItem(ACTIVE_ID_KEY, normalized.id);
  return normalized;
}

// ==================== 供「技能檢索 / 道具檢索」快捷加入 ====================
function parseCardPayload(encodedOrObj) {
  if (encodedOrObj && typeof encodedOrObj === 'object') {
    return encodedOrObj;
  }
  const raw = String(encodedOrObj || '').trim();
  if (!raw) return null;
  try {
    return JSON.parse(decodeURIComponent(raw));
  } catch {
    return JSON.parse(raw);
  }
}

function inferAccessorySlotFromData(data) {
  const raw = `${data.subCategory || ''} ${data.type || ''} ${data.name || ''}`;
  for (const s of ['頭', '臉', '耳', '首', '背', '右手', '左手', '腰', '足']) {
    if (raw.includes(s)) return s;
  }
  if (raw.includes('手')) return '右手';
  return '其他';
}

function classifyCardPayload(payload) {
  const data = payload?.data || payload || {};
  const itemType = payload?.itemType || payload?.type || data.itemType || data.type || '';
  const name = String(data.name || payload?.name || '').trim();
  const cat = String(data.category || data.subCategory || '').trim();

  if (itemType === 'feat' || cat.includes('戰鬥特技')) {
    return { bucket: 'feats', label: name };
  }
  if (
    itemType === 'skill' ||
    itemType === 'class' ||
    cat === '技能' ||
    cat.includes('技能') ||
    Object.prototype.hasOwnProperty.call(SKILL_EXP_TABLE_MAP, name) ||
    MAGIC_SKILLS.has(name)
  ) {
    return { bucket: 'skill', label: name };
  }
  if (itemType === 'item') {
    const isWeapon = cat.includes('武器') || ['劍', '槍', '斧', '打擊', '拋射', '格鬥', '扔擲', '魔動機槍'].includes(cat);
    return { bucket: isWeapon ? 'weapon' : 'item', label: name };
  }
  if (['咒歌', '終律', '鼓咆', '陣率', '軍師', '闘理'].includes(cat)) return { bucket: 'songs', label: name };
  if (['賦術', '練技', '練體士', '騎藝', '騎手'].includes(cat)) return { bucket: 'enhancements', label: name };
  return { bucket: 'spells', label: name };
}

// 處理戰鬥特技新增／替換型（Ⅰ/Ⅱ/Ⅲ）原地替換邏輯
function applyFeatEntry(featsArray, entry, ignoreIdx = -1) {
  const normEntry = normalizeAbilityCardItem(entry);
  const parsedNew = parseReplacementFeat(normEntry.name);

  if (parsedNew.isReplacement) {
    const matchIdx = featsArray.findIndex((f, idx) => {
      if (idx === ignoreIdx) return false;
      const pOld = parseReplacementFeat(normalizeAbilityCardItem(f).name);
      return pOld.isReplacement && pOld.baseName === parsedNew.baseName;
    });

    if (matchIdx >= 0) {
      const oldParsed = parseReplacementFeat(normalizeAbilityCardItem(featsArray[matchIdx]).name);
      if (parsedNew.rank > oldParsed.rank) {
        featsArray[matchIdx] = normEntry;
        return { action: 'replaced', replacedFrom: featsArray[matchIdx]?.name || oldParsed.baseName };
      }
      if (parsedNew.rank === oldParsed.rank) {
        return { action: 'duplicate_rank' };
      }
      return { action: 'lower_rank', currentRank: oldParsed.rank };
    }
  } else {
    const exactDup = featsArray.some((f, idx) => idx !== ignoreIdx && normalizeAbilityCardItem(f).name === normEntry.name);
    if (exactDup) return { action: 'duplicate' };
  }

  if (ignoreIdx >= 0 && ignoreIdx < featsArray.length) {
    featsArray[ignoreIdx] = normEntry;
    return { action: 'updated' };
  }
  featsArray.push(normEntry);
  return { action: 'added' };
}

export function addCardToActiveCharacter(encodedPayload) {
  let payload;
  try {
    payload = parseCardPayload(encodedPayload);
  } catch (err) {
    console.warn('無法解析卡片資料:', err);
    return;
  }
  if (!payload || typeof payload !== 'object') return;

  const char = getActiveCharacter();
  if (!char) return;
  const data = payload.data || payload;
  const info = classifyCardPayload(payload);
  const name = String(data.name || payload.name || '').trim();
  if (!name) return;

  const cardObj = {
    name,
    featType: data.featType || data.timing || '',
    req: data.req || data.requirement || data.restriction || '',
    cost: data.cost || data.mp || data.timing || '',
    range: data.range || data.target || '',
    riskNote: data.risk || data.riskNote || '',
    desc: data.effect || data.summary || data.description || ''
  };

  if (info.bucket === 'skill') {
    const existing = char.skills.find(s => s.name === name);
    const expTable = (data.expTable === 'A' || data.expTable === 'B')
      ? data.expTable
      : (SKILL_EXP_TABLE_MAP[name] || 'A');
    const level = Math.max(0, Math.min(15, parseInt(data.level, 10) || 1));
    if (!existing) {
      char.skills.push({ name, expTable, level, magicPower: 0 });
    }
  } else if (info.bucket === 'weapon') {
    if (!char.equipment.weapons.some(w => w.name === name)) {
      char.equipment.weapons.push({
        name,
        usage: data.usage || '1H',
        reqStr: parseInt(data.req_str, 10) || 0,
        hitMod: parseInt(data.acc, 10) || 0,
        power: parseInt(data.power, 10) || 10,
        crit: parseInt(data.crit, 10) || 10,
        extraDmg: 0,
        equipped: true
      });
    }
  } else if (info.bucket === 'item') {
    const cat = data.category || '';
    if (cat.includes('鎧甲') || cat.includes('金屬鎧') || cat.includes('非金屬鎧')) {
      char.equipment.armor = {
        name,
        category: cat,
        reqStr: parseInt(data.req_str, 10) || 0,
        evasionMod: parseInt(data.evasion, 10) || 0,
        defense: parseInt(data.defense, 10) || 0,
        equipped: true
      };
    } else if (cat.includes('盾')) {
      char.equipment.shield = {
        name,
        category: cat,
        reqStr: parseInt(data.req_str, 10) || 0,
        evasionMod: parseInt(data.evasion, 10) || 0,
        defense: parseInt(data.defense, 10) || 0,
        equipped: true
      };
    } else {
      const slot = (cat === '裝飾品' || cat === '飾品裝備')
        ? inferAccessorySlotFromData(data)
        : (cat || '其他');
      char.equipment.accessories.push({
        slot,
        name,
        note: data.effect || data.summary || '',
        equipped: true
      });
    }
  } else if (info.bucket === 'feats') {
    applyFeatEntry(char.feats, cardObj);
  } else {
    const arr = char.learnedAbilities[info.bucket] || (char.learnedAbilities[info.bucket] = []);
    if (!arr.some(x => x.name === cardObj.name)) arr.push(cardObj);
  }

  saveCharacter(char, { syncMaxDelta: true });
  if (document.getElementById('sw25-cc-root')) {
    renderCharSheetConsole();
  }

  const cardId = payload.id || data.id || name;
  document.querySelectorAll(`[data-char-add-id="${CSS.escape(String(cardId))}"]`).forEach(btn => {
    const prev = btn.innerHTML;
    btn.innerHTML = '<i class="fa-solid fa-check text-emerald-400"></i> 已加入';
    setTimeout(() => { btn.innerHTML = prev; }, 1200);
  });
}

export function initCharSheetQuickAddObserver() {
  const injectButtonsIntoContainer = (container) => {
    if (!container) return;
    container.querySelectorAll('[data-pin-id]').forEach(pinBtn => {
      if (pinBtn.nextElementSibling?.classList.contains('char-quick-add-btn')) return;
      const onclickAttr = pinBtn.getAttribute('onclick') || '';
      const match = onclickAttr.match(/togglePinDataItem\(\s*(['"])([\s\S]*?)\1\s*\)/);
      if (!match) return;

      const encodedPayload = match[2];
      let decodedId = '';
      try {
        const parsed = parseCardPayload(encodedPayload);
        decodedId = parsed?.id || parsed?.data?.id || parsed?.data?.name || '';
      } catch {}

      const addBtn = document.createElement('button');
      addBtn.type = 'button';
      addBtn.setAttribute('data-char-add-id', decodedId);
      addBtn.setAttribute('onclick', `addCardToActiveCharacter('${encodedPayload.replace(/'/g, "\\'")}')`);
      addBtn.className = 'char-quick-add-btn ml-1.5 text-xs px-2.5 py-1 rounded-lg bg-emerald-950/70 hover:bg-emerald-900 text-emerald-300 border border-emerald-700/60 transition-all shrink-0';
      addBtn.innerHTML = '<i class="fa-solid fa-user-plus"></i> 角色卡';
      pinBtn.insertAdjacentElement('afterend', addBtn);
    });
  };

  const run = () => {
    ['bard-list', 'item-list', 'skill-list', 'magic-list', 'feat-list'].forEach(id => {
      injectButtonsIntoContainer(document.getElementById(id));
    });
    document.querySelectorAll('[data-pin-id]').forEach(pinBtn => {
      const parentList = pinBtn.closest('#bard-list, #item-list, #skill-list, #magic-list, #feat-list, [id$="-list"]');
      if (parentList) injectButtonsIntoContainer(parentList);
    });
  };
  run();
  const observer = new MutationObserver(run);
  observer.observe(document.body, { childList: true, subtree: true });
}

// ==================== UI 控制台掛載與渲染 ====================
let activeSubTab = 'tab-skills';
let editingCard = null;
let logHistoryHtml = [];

const CONSOLE_TEMPLATE = `
<div class="sw25-cc-root" id="sw25-cc-root">
  <div class="sw25-cc-topbar">
    <div class="sw25-cc-brand">
      <span>⚔️ SW2.5 冒險者角色卡跑團控制台</span>
      <span class="sw25-cc-badge" id="cc-hdr-adv-lv">冒險者 Lv.1</span>
      <span class="sw25-cc-badge good" id="cc-hdr-exp-rem">剩餘 EXP: 1500</span>
    </div>
    <div class="sw25-cc-controls">
      <select id="cc-char-select" title="切換角色卡"></select>
      <button type="button" class="primary sm" id="cc-btn-new-char">＋ 新角色</button>
      <button type="button" class="sm" id="cc-btn-dup-char">複製</button>
      <button type="button" class="sm" id="cc-btn-import-file">📂 匯入檔案</button>
      <button type="button" class="sm" id="cc-btn-io-modal">匯出 / 檢視 JSON</button>
      <input type="file" id="cc-file-import-input" accept=".json,application/json" style="display:none;" />
      <button type="button" class="danger sm" id="cc-btn-del-char">刪除</button>
    </div>
  </div>

  <div class="sw25-cc-grid">
    <aside>
      <div class="sw25-cc-card">
        <h2>
          <span>生命與魔力池</span>
          <button type="button" class="sm" id="cc-btn-rest-full">全滿休息</button>
        </h2>

        <div class="sw25-cc-pool sw25-cc-pool-hp">
          <div class="sw25-cc-pool-header">
            <span class="sw25-cc-pool-title" style="color:#fca5a5;">HP（生命力）</span>
            <span class="sw25-cc-pool-val" id="cc-hp-display">0 / 0</span>
          </div>
          <div class="sw25-cc-bar-track"><div class="sw25-cc-bar-hp" id="cc-hp-bar" style="width:100%"></div></div>
          <div class="sw25-cc-pool-btns">
            <button type="button" data-cc-pool="hp" data-cc-delta="-10">-10</button>
            <button type="button" data-cc-pool="hp" data-cc-delta="-5">-5</button>
            <button type="button" data-cc-pool="hp" data-cc-delta="-1">-1</button>
            <button type="button" data-cc-pool="hp" data-cc-delta="1">+1</button>
            <button type="button" data-cc-pool="hp" data-cc-delta="5">+5</button>
            <button type="button" data-cc-pool="hp" data-cc-delta="10">+10</button>
          </div>
        </div>

        <div class="sw25-cc-pool sw25-cc-pool-mp">
          <div class="sw25-cc-pool-header">
            <span class="sw25-cc-pool-title" style="color:#93c5fd;">MP（魔力）</span>
            <span class="sw25-cc-pool-val" id="cc-mp-display">0 / 0</span>
          </div>
          <div class="sw25-cc-bar-track"><div class="sw25-cc-bar-mp" id="cc-mp-bar" style="width:100%"></div></div>
          <div class="sw25-cc-pool-btns">
            <button type="button" data-cc-pool="mp" data-cc-delta="-10">-10</button>
            <button type="button" data-cc-pool="mp" data-cc-delta="-5">-5</button>
            <button type="button" data-cc-pool="mp" data-cc-delta="-1">-1</button>
            <button type="button" data-cc-pool="mp" data-cc-delta="1">+1</button>
            <button type="button" data-cc-pool="mp" data-cc-delta="5">+5</button>
            <button type="button" data-cc-pool="mp" data-cc-delta="10">+10</button>
          </div>
        </div>

        <div class="sw25-cc-derived">
          <div class="sw25-cc-pill"><div class="lbl">生命抵抗力</div><div class="num" id="cc-drv-life">0</div></div>
          <div class="sw25-cc-pill"><div class="lbl">精神抵抗力</div><div class="num" id="cc-drv-mind">0</div></div>
          <div class="sw25-cc-pill"><div class="lbl">先制值</div><div class="num" id="cc-drv-init">0</div></div>
          <div class="sw25-cc-pill"><div class="lbl">迴避基準</div><div class="num" id="cc-drv-evasion">0</div></div>
          <div class="sw25-cc-pill"><div class="lbl">總防護點</div><div class="num" id="cc-drv-defense">0</div></div>
          <div class="sw25-cc-pill"><div class="lbl">深智可用級</div><div class="num" id="cc-drv-wizard">-</div></div>
          <div class="sw25-cc-pill"><div class="lbl">通常移動</div><div class="num" id="cc-drv-move">0m</div></div>
          <div class="sw25-cc-pill"><div class="lbl">全力移動</div><div class="num" id="cc-drv-full">0m</div></div>
          <div class="sw25-cc-pill"><div class="lbl">限制移動</div><div class="num">10m</div></div>
        </div>
      </div>

      <div class="sw25-cc-card">
        <h2>六大能力值</h2>
        <table>
          <thead>
            <tr>
              <th class="left">能力</th>
              <th>基礎</th>
              <th>成長</th>
              <th>其他</th>
              <th>總值</th>
              <th>加值</th>
            </tr>
          </thead>
          <tbody id="cc-abilities-tbody"></tbody>
        </table>
      </div>

      <div class="sw25-cc-card">
        <h2><span>狀態與 Buff 修正</span></h2>
        <div style="display:flex; gap:6px; margin-bottom:8px; flex-wrap:wrap;">
          <input type="text" id="cc-buff-name" placeholder="名稱 (如: 祝福/全力攻擊風險)" style="flex:1; min-width:110px;" />
          <select id="cc-buff-stat">
            <option value="magicPower">魔力</option>
            <option value="evasion">迴避力</option>
            <option value="defense">防護點</option>
            <option value="maxHp">HP上限</option>
            <option value="maxMp">MP上限</option>
            <option value="lifeResist">生命抵抗</option>
            <option value="mindResist">精神抵抗</option>
            <option value="initiative">先制值</option>
            <option value="moveNormal">移動力</option>
            <option value="dex">靈巧度</option>
            <option value="agi">敏捷度</option>
            <option value="str">筋力</option>
            <option value="vit">生命力</option>
            <option value="int">知力</option>
            <option value="mnd">精神力</option>
          </select>
          <input type="number" id="cc-buff-val" value="1" style="width:62px;" />
          <button type="button" class="primary sm" id="cc-btn-add-buff">新增</button>
        </div>
        <div id="cc-buff-list"></div>
      </div>
    </aside>

    <div>
      <div class="sw25-cc-card">
        <h2>冒險者基本資料</h2>
        <div class="sw25-cc-meta-grid">
          <div class="sw25-cc-field"><label>角色名稱</label><input type="text" id="cc-meta-name" /></div>
          <div class="sw25-cc-field"><label>種族</label><input type="text" id="cc-meta-race" /></div>
          <div class="sw25-cc-field"><label>性別</label><input type="text" id="cc-meta-gender" /></div>
          <div class="sw25-cc-field"><label>年齡</label><input type="text" id="cc-meta-age" /></div>
          <div class="sw25-cc-field"><label>總經驗值 (EXP)</label><input type="number" id="cc-meta-expTotal" step="500" /></div>
          <div class="sw25-cc-field"><label>已消耗 EXP</label><input type="number" id="cc-meta-expUsed" readonly /></div>
          <div class="sw25-cc-field"><label>所持金 (G)</label><input type="number" id="cc-meta-moneyG" step="100" /></div>
          <div class="sw25-cc-field"><label>名譽點 / 稱號</label><input type="number" id="cc-meta-honorPoints" /></div>
        </div>
      </div>

      <div class="sw25-cc-card">
        <div class="sw25-cc-tabs">
          <button type="button" class="sw25-cc-tab-btn" data-cc-tab="tab-skills">技能等級與魔力</button>
          <button type="button" class="sw25-cc-tab-btn" data-cc-tab="tab-feats">戰鬥特技與魔法筆記</button>
          <button type="button" class="sw25-cc-tab-btn" data-cc-tab="tab-equip">裝備欄位（武器／防具／飾品）</button>
          <button type="button" class="sw25-cc-tab-btn" data-cc-tab="tab-runner">跑團檢定與冒險日誌</button>
        </div>

        <div class="sw25-cc-pane" id="cc-pane-tab-skills">
          <div style="display:flex; gap:8px; margin-bottom:10px; flex-wrap:wrap; align-items:center;">
            <select id="cc-preset-skill-select">
              <option value="">-- 快速選擇 SW2.5 技能 --</option>
              <optgroup label="戰士系 (經驗表 A/B)">
                <option value="戰士|A">戰士 (表A)</option>
                <option value="拳鬥士|A">拳鬥士 (表A)</option>
                <option value="舞鬥士|A">舞鬥士 (表A / 特技+1)</option>
                <option value="輕戰士|B">輕戰士 (表B)</option>
                <option value="射手|B">射手 (表B)</option>
                <option value="生命工匠|A">生命工匠 (表A)</option>
              </optgroup>
              <optgroup label="魔法系 (計入 MP 上限)">
                <option value="真語魔法|A">真語魔法 (表A)</option>
                <option value="操靈魔法|A">操靈魔法 (表A)</option>
                <option value="神聖魔法|A">神聖魔法 (表A)</option>
                <option value="魔動機術|A">魔動機術 (表A)</option>
                <option value="妖精魔法|A">妖精魔法 (表A)</option>
                <option value="奈落魔法|A">奈落魔法 (表A)</option>
                <option value="祕奧魔法|A">祕奧魔法 (表A)</option>
                <option value="咒詛魔法|A">咒詛魔法 (表A)</option>
              </optgroup>
              <optgroup label="其他技能">
                <option value="斥候|B">斥候 (表B)</option>
                <option value="遊俠|B">遊俠 (表B)</option>
                <option value="賢者|B">賢者 (表B)</option>
                <option value="吟遊詩人|B">吟遊詩人 (表B)</option>
                <option value="練技師|B">練技師 (表B)</option>
                <option value="賦術師|B">賦術師 (表B)</option>
                <option value="騎士|B">騎士 (表B)</option>
                <option value="軍師|B">軍師 (表B)</option>
                <option value="天地使|B">天地使 (表B)</option>
              </optgroup>
            </select>
            <input type="text" id="cc-custom-skill-name" placeholder="或輸入自訂技能名稱" />
            <select id="cc-custom-skill-table">
              <option value="A">經驗表 A</option>
              <option value="B">經驗表 B</option>
            </select>
            <button type="button" class="primary sm" id="cc-btn-add-skill">＋ 新增技能</button>
          </div>

          <div id="cc-wizard-banner" style="display:none; margin-bottom:10px; padding:8px 12px; border-radius:8px; background:rgba(56,189,248,0.12); border:1px solid rgba(56,189,248,0.35); font-size:0.84rem;"></div>

          <table>
            <thead>
              <tr>
                <th class="left">技能名稱</th>
                <th>經驗表</th>
                <th>等級 (0~15)</th>
                <th>消耗 EXP</th>
                <th>魔力</th>
                <th>操作</th>
              </tr>
            </thead>
            <tbody id="cc-skills-tbody"></tbody>
          </table>
        </div>

        <div class="sw25-cc-pane" id="cc-pane-tab-feats">
          <div class="sw25-cc-feat-box">
            <h3>
              <span>⚔️ 戰鬥特技欄位（選擇習得＋替換型Ⅰ/Ⅱ/Ⅲ＋技能自動習得）</span>
              <span class="sw25-cc-badge" id="cc-feat-slot-badge">自選 0 / 上限 1 格</span>
            </h3>

            <div class="sw25-cc-rule-note">
              <strong>特技規則提示：</strong>奇數冒險者等級獲得 1 個自選格且須當下選滿（不可保留）；含 Ⅰ/Ⅱ/Ⅲ 的<strong>替換型特技</strong>於獲得新格且滿足條件時逐階原地替換，不占新格；<strong>自動習得特技</strong>依技能等級自動獲得，不占自選格。宣言特技原則每手番 1 次，多次宣告時附帶「風險（Risk）」會累積（持續 1 輪至下次手番開始）。
            </div>

            <div id="cc-auto-feats-wrap" style="margin-bottom:12px;"></div>

            <div style="display:grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap:8px; margin-bottom:8px;">
              <input type="text" id="cc-feat-name" placeholder="特技名稱 (如: 全力攻擊Ⅱ / 銳眼)" />
              <select id="cc-feat-type" title="特技發動類別">
                <option value="">類別（未指定）</option>
                <option value="常時特技">常時特技</option>
                <option value="主動作特技">主動作特技</option>
                <option value="宣言特技">宣言特技</option>
              </select>
              <input type="text" id="cc-feat-req" placeholder="前提/替換條件 (如: 冒險者Lv.7)" />
              <input type="text" id="cc-feat-cost" placeholder="適用時機 (如: 1次近接 / 10秒1輪 / △戰鬥準備)" />
              <input type="text" id="cc-feat-risk" placeholder="風險/限制備註 (如: 風險:迴避-2/1R)" />
            </div>
            <div style="display:flex; gap:8px; margin-bottom:10px; align-items:stretch;">
              <input type="text" id="cc-feat-desc" placeholder="特技效果說明..." style="flex:1;" />
              <button type="button" class="primary sm" id="cc-btn-add-feat">＋ 加入/替換特技</button>
              <button type="button" class="primary sm" id="cc-btn-save-feat" style="display:none;">儲存特技</button>
              <button type="button" class="sm" id="cc-btn-cancel-feat" style="display:none;">取消</button>
            </div>
            <div id="cc-feats-list"></div>
          </div>

          <h3><span>📖 魔法／咒歌／練技筆記</span></h3>
          <div style="display:grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap:8px; margin-bottom:10px;">
            <select id="cc-ability-kind">
              <option value="spells">魔法 / 咒詛 / 深智</option>
              <option value="songs">咒歌 / 鼓咆 / 闘理</option>
              <option value="enhancements">練技 / 賦術 / 騎藝</option>
            </select>
            <input type="text" id="cc-ability-name" placeholder="名稱 (如: 詛咒箭 / 生命之歌)" />
            <input type="text" id="cc-ability-cost" placeholder="消耗/條件 (如: MP 5 / 宣言)" />
            <input type="text" id="cc-ability-range" placeholder="射程/對象 (如: 2(20m)/1體)" />
          </div>
          <div style="display:flex; gap:8px; margin-bottom:12px; align-items:stretch;">
            <textarea id="cc-ability-desc" rows="2" placeholder="效果說明或威力表..." style="flex:1;"></textarea>
            <button type="button" class="primary" id="cc-btn-add-ability">加入筆記</button>
            <button type="button" class="primary" id="cc-btn-save-ability" style="display:none;">儲存修改</button>
            <button type="button" id="cc-btn-cancel-ability" style="display:none;">取消</button>
          </div>
          <div id="cc-ability-cards-list"></div>
        </div>

        <div class="sw25-cc-pane" id="cc-pane-tab-equip">
          <h3>
            <span>防具與盾牌欄位</span>
            <span class="sw25-cc-badge good" id="cc-eq-defense-summary">防護點：0 ｜ 迴避修正：+0</span>
          </h3>

          <div class="sw25-cc-equip-box" id="cc-armor-box">
            <div class="sw25-cc-equip-grid">
              <div class="sw25-cc-field">
                <label>鎧甲狀態</label>
                <label style="display:flex; align-items:center; gap:6px; color:var(--cc-text); font-size:0.84rem; padding:6px 0; cursor:pointer;">
                  <input type="checkbox" id="cc-eq-armor-equipped" /> 裝備中
                </label>
              </div>
              <div class="sw25-cc-field"><label>鎧甲名稱</label><input type="text" id="cc-eq-armor-name" placeholder="例：鎖子甲 / 軟皮甲" /></div>
              <div class="sw25-cc-field"><label>必筋</label><input type="number" id="cc-eq-armor-req" /></div>
              <div class="sw25-cc-field"><label>迴避修正</label><input type="number" id="cc-eq-armor-eva" /></div>
              <div class="sw25-cc-field"><label>防護點</label><input type="number" id="cc-eq-armor-def" /></div>
            </div>
          </div>

          <div class="sw25-cc-equip-box" id="cc-shield-box">
            <div class="sw25-cc-equip-grid">
              <div class="sw25-cc-field">
                <label>盾牌狀態</label>
                <label style="display:flex; align-items:center; gap:6px; color:var(--cc-text); font-size:0.84rem; padding:6px 0; cursor:pointer;">
                  <input type="checkbox" id="cc-eq-shield-equipped" /> 裝備中
                </label>
              </div>
              <div class="sw25-cc-field"><label>盾牌名稱</label><input type="text" id="cc-eq-shield-name" placeholder="例：小圓盾 / 塔盾" /></div>
              <div class="sw25-cc-field"><label>必筋</label><input type="number" id="cc-eq-shield-req" /></div>
              <div class="sw25-cc-field"><label>迴避修正</label><input type="number" id="cc-eq-shield-eva" /></div>
              <div class="sw25-cc-field"><label>防護點</label><input type="number" id="cc-eq-shield-def" /></div>
            </div>
          </div>

          <h3>武器欄位（右手／左手／雙手武裝）</h3>
          <div style="display:flex; gap:6px; flex-wrap:wrap; margin-bottom:8px;">
            <select id="cc-wp-usage" style="width:76px;" title="用法">
              <option value="1H">1H</option>
              <option value="2H">2H</option>
              <option value="1H/2H">1H/2H</option>
              <option value="投擲">投擲</option>
            </select>
            <input type="text" id="cc-wp-name" placeholder="武器名稱 (如: 長劍)" style="flex:1; min-width:120px;" />
            <input type="number" id="cc-wp-req" placeholder="必筋" style="width:68px;" />
            <input type="number" id="cc-wp-hit" placeholder="命中修正" style="width:80px;" />
            <input type="number" id="cc-wp-pow" placeholder="威力" style="width:68px;" />
            <input type="number" id="cc-wp-crit" placeholder="C值" value="10" style="width:62px;" />
            <input type="number" id="cc-wp-dmg" placeholder="追加傷害" style="width:80px;" />
            <button type="button" class="primary sm" id="cc-btn-add-wp">＋ 新增武器</button>
          </div>
          <div style="overflow-x:auto; margin-bottom:14px;">
            <table>
              <thead>
                <tr>
                  <th>裝備</th>
                  <th>用法</th>
                  <th class="left">武器名稱</th>
                  <th>必筋</th>
                  <th>命中修正</th>
                  <th>威力</th>
                  <th>C值</th>
                  <th>追加傷害</th>
                  <th>操作</th>
                </tr>
              </thead>
              <tbody id="cc-weapons-tbody"></tbody>
            </table>
          </div>

          <h3>
            <span>裝飾品欄位（頭／臉／耳／首／背／右手／左手／腰／足／其他）</span>
            <span class="sw25-cc-badge" id="cc-acc-count-badge">已裝備：0 項</span>
          </h3>
          <div style="display:flex; gap:6px; flex-wrap:wrap; margin-bottom:10px;">
            <select id="cc-acc-slot" style="width:92px;">
              ${ACCESSORY_SLOTS.map(s => `<option value="${s}">${s}</option>`).join('')}
            </select>
            <input type="text" id="cc-acc-name" placeholder="飾品名稱 (如: 蝙蝠耳環 / 智慧指環)" style="flex:1; min-width:140px;" />
            <input type="text" id="cc-acc-note" placeholder="效果備註 (如: 知力+1 / 聽覺判定+1)" style="flex:2; min-width:160px;" />
            <button type="button" class="primary sm" id="cc-btn-add-acc">＋ 加入飾品欄</button>
          </div>
          <div class="sw25-cc-slot-grid" id="cc-acc-list"></div>
        </div>

        <div class="sw25-cc-pane" id="cc-pane-tab-runner">
          <h3>快速擲骰與檢定</h3>
          <div class="sw25-cc-dice-bar">
            <button type="button" class="primary sm" data-cc-roll="2d">🎲 2D 擲骰</button>
            <button type="button" class="sm" data-cc-roll="life">🛡️ 生命抵抗力</button>
            <button type="button" class="sm" data-cc-roll="mind">🧠 精神抵抗力</button>
            <button type="button" class="sm" data-cc-roll="evasion">💨 迴避力判定</button>
            <button type="button" class="sm" data-cc-roll="init">⚡ 先制判定</button>
            <button type="button" class="sm" data-cc-roll="magic">✨ 最高魔力行使</button>
            <div style="display:flex; gap:4px; align-items:center;">
              <input type="text" id="cc-custom-roll-label" placeholder="檢定名稱" style="width:100px;" />
              <input type="number" id="cc-custom-roll-mod" value="0" style="width:64px;" title="基準值/修正" />
              <button type="button" class="sm" id="cc-btn-custom-roll">2D + 修正</button>
            </div>
          </div>

          <div style="display:flex; gap:6px; align-items:center; margin-bottom:10px; flex-wrap:wrap;">
            <span style="font-size:0.84rem; color:var(--cc-muted);">施法快捷扣 MP：</span>
            <input type="number" id="cc-cast-mp-cost" value="5" min="1" style="width:68px;" />
            <input type="text" id="cc-cast-spell-name" placeholder="法術名稱 (如: 詛咒箭)" style="width:170px;" />
            <button type="button" class="sm" id="cc-btn-cast-mp">扣除 MP 並記錄</button>
          </div>

          <div class="sw25-cc-log" id="cc-dice-log"></div>

          <h3 style="margin-top:14px;">冒險筆記與戰利品日誌</h3>
          <textarea id="cc-meta-notes" rows="5" style="width:100%;" placeholder="在此記錄劇本進度、NPC 情報、戰利品與重要筆記..."></textarea>
        </div>
      </div>
    </div>
  </div>

  <dialog class="sw25-cc-dialog" id="cc-io-dialog">
    <h3 style="margin-top:0; color:var(--cc-accent);">角色卡 JSON 匯出 / 匯入</h3>
    <div style="display:flex; gap:8px; margin-bottom:8px; flex-wrap:wrap;">
      <button type="button" class="sm" id="cc-btn-export-one">顯示目前角色 JSON</button>
      <button type="button" class="sm" id="cc-btn-export-all">顯示全部角色 JSON</button>
      <button type="button" class="sm" id="cc-btn-download-json">⬇️ 下載 .json 檔</button>
      <button type="button" class="sm" id="cc-btn-copy-json">複製到剪貼簿</button>
    </div>
    <textarea class="sw25-cc-code-area" id="cc-io-textarea" placeholder="可貼上角色卡 JSON，或直接點擊下方按鈕選擇 .json 檔案匯入..."></textarea>
    <div style="display:flex; justify-content:space-between; margin-top:10px; gap:8px; flex-wrap:wrap;">
      <div style="display:flex; gap:8px;">
        <button type="button" class="primary" id="cc-btn-modal-pick-file">📂 選擇檔案匯入</button>
        <button type="button" id="cc-btn-import-json">從文字框匯入並合併</button>
      </div>
      <button type="button" id="cc-btn-close-dialog">關閉</button>
    </div>
  </dialog>
</div>
`;

export function renderCharSheetConsole(targetContainerId = 'rules-container') {
  injectScopedStyles();
  const container = document.getElementById(targetContainerId);
  if (!container) return;

  let currentChar = getActiveCharacter();

  const getCardArray = (draft, kind) => (kind === 'feats' ? draft.feats : draft.learnedAbilities[kind]);

  const appendLog = (htmlText) => {
    const time = new Date().toLocaleTimeString('zh-TW', { hour12: false, hour: '2-digit', minute: '2-digit', second: '2-digit' });
    logHistoryHtml.unshift(`<div class="sw25-cc-log-entry"><span style="color:var(--cc-muted)">[${time}]</span> ${htmlText}</div>`);
    if (logHistoryHtml.length > 80) logHistoryHtml.length = 80;
    const box = document.getElementById('cc-dice-log');
    if (box) box.innerHTML = logHistoryHtml.join('');
  };

  let editingFeatIdx = null;

  const resetFeatForm = () => {
    editingFeatIdx = null;
    ['cc-feat-name', 'cc-feat-req', 'cc-feat-cost', 'cc-feat-risk', 'cc-feat-desc'].forEach(id => {
      const el = document.getElementById(id);
      if (el) el.value = '';
    });
    const typeEl = document.getElementById('cc-feat-type');
    if (typeEl) typeEl.value = '';
    const addBtn = document.getElementById('cc-btn-add-feat');
    const saveBtn = document.getElementById('cc-btn-save-feat');
    const cancelBtn = document.getElementById('cc-btn-cancel-feat');
    if (addBtn) addBtn.style.display = '';
    if (saveBtn) saveBtn.style.display = 'none';
    if (cancelBtn) cancelBtn.style.display = 'none';
    renderFeatsSection();
  };

  const resetAbilityForm = () => {
    editingCard = null;
    ['cc-ability-name', 'cc-ability-cost', 'cc-ability-range', 'cc-ability-desc'].forEach(id => {
      const el = document.getElementById(id);
      if (el) el.value = '';
    });
    const addBtn = document.getElementById('cc-btn-add-ability');
    const saveBtn = document.getElementById('cc-btn-save-ability');
    const cancelBtn = document.getElementById('cc-btn-cancel-ability');
    if (addBtn) addBtn.style.display = '';
    if (saveBtn) saveBtn.style.display = 'none';
    if (cancelBtn) cancelBtn.style.display = 'none';
    renderAbilityCards();
  };

  const commit = (mutatorFn, options = { syncMaxDelta: true }) => {
    const draft = JSON.parse(JSON.stringify(currentChar));
    mutatorFn(draft);
    currentChar = saveCharacter(draft, options);
    updateUI();
  };

  const renderFeatsSection = () => {
    const listEl = document.getElementById('cc-feats-list');
    const autoWrapEl = document.getElementById('cc-auto-feats-wrap');
    const badgeEl = document.getElementById('cc-feat-slot-badge');
    if (!listEl || !badgeEl) return;

    const feats = (currentChar.feats || []).map(normalizeAbilityCardItem);
    const slotUsed = countSlotConsumingFeats(feats);
    const autoFeats = currentChar.computed?.autoFeats || [];
    const dancerBonus = currentChar.computed?.dancerBonusSlot || 0;
    const maxSlots = currentChar.computed?.featMaxSlots ?? getMaxFeatSlots(currentChar.computed?.adventurerLevel ?? 0, currentChar.skills);
    const isOverLimit = slotUsed > maxSlots;

    const dancerHint = dancerBonus > 0 ? '（含舞鬥士+1）' : '';
    const autoHint = autoFeats.length > 0 ? `＋自動 ${autoFeats.length}` : '';
    badgeEl.textContent = `自選 ${slotUsed} / 上限 ${maxSlots} 格${dancerHint} ${autoHint}`;
    badgeEl.className = `sw25-cc-badge ${isOverLimit ? 'danger' : (slotUsed === maxSlots ? 'warn' : 'good')}`;

    if (autoWrapEl) {
      if (autoFeats.length === 0) {
        autoWrapEl.innerHTML = '';
      } else {
        autoWrapEl.innerHTML = `
          <div style="font-size:0.8rem; color:var(--cc-cyan); font-weight:700; margin-bottom:6px;">
            ✨ 技能等級達標自動習得特技（不占用自選格數，亦不消耗習得格）
          </div>
          ${autoFeats.map(af => `
            <div class="sw25-cc-auto-feat-card">
              <div class="sw25-cc-ability-top">
                <div>
                  <span class="sw25-cc-badge">自動：${escapeHtml(af.autoSource)}</span>
                  <strong style="margin-left:6px;">${escapeHtml(af.name)}</strong>
                </div>
                <span style="font-size:0.75rem; color:var(--cc-muted);">${escapeHtml(af.cost)}</span>
              </div>
              <div class="sw25-cc-ability-meta">條件：${escapeHtml(af.req)} ${af.range ? `｜ 範圍：${escapeHtml(af.range)}` : ''}</div>
              <div class="sw25-cc-ability-desc">${escapeHtml(af.desc)}</div>
            </div>
          `).join('')}
        `;
      }
    }

    if (feats.length === 0) {
      listEl.innerHTML = `<div style="color:var(--cc-muted); font-size:0.83rem;">尚未登錄戰鬥特技（冒險者 Lv.${currentChar.computed.adventurerLevel}${dancerHint} 可自選 ${maxSlots} 個戰鬥特技；奇數等級獲得新格時請當下選滿，不可保留）。</div>`;
      return;
    }

    let slotCounter = 0;
    listEl.innerHTML = feats.map((ft, idx) => {
      const noSlot = doesNotConsumeFeatSlot(ft.name);
      const parsedRep = parseReplacementFeat(ft.name);
      const displayNo = noSlot ? '自動/不占格' : `#${++slotCounter}`;
      const isEditing = editingFeatIdx === idx;
      const check = evaluateFeatRequirement(ft.req, currentChar);

      let reqBadge = '';
      if (check.status === 'unmet') {
        reqBadge = `<span class="sw25-cc-badge danger" style="margin-left:6px;">限制未符：${escapeHtml(check.text)}</span>`;
      } else if (check.status === 'met') {
        reqBadge = `<span class="sw25-cc-badge good" style="margin-left:6px;">${escapeHtml(check.text)}</span>`;
      }

      const typeBadge = ft.featType
        ? `<span class="sw25-cc-badge" style="margin-left:6px;">${escapeHtml(ft.featType)}</span>`
        : '';
      const repBadge = parsedRep.isReplacement
        ? `<span class="sw25-cc-badge warn" style="margin-left:6px;">替換型 Rank ${parsedRep.rank}</span>`
        : '';
      const noSlotBadge = noSlot
        ? `<span class="sw25-cc-badge" style="margin-left:6px;">不占自選格</span>`
        : '';
      const riskBadge = ft.riskNote
        ? `<span class="sw25-cc-badge danger" style="margin-left:6px;">${escapeHtml(ft.riskNote)}</span>`
        : '';

      return `
        <div class="sw25-cc-ability-card ${isEditing ? 'editing' : ''}">
          <div class="sw25-cc-ability-top">
            <div>
              <span class="sw25-cc-badge ${noSlot ? '' : 'warn'}">${escapeHtml(displayNo)}</span>
              <strong style="margin-left:6px;">${escapeHtml(ft.name)}</strong>
              ${typeBadge}
              ${repBadge}
              ${noSlotBadge}
              ${riskBadge}
              ${reqBadge}
              ${isEditing ? '<span class="sw25-cc-badge" style="margin-left:6px;">編輯中</span>' : ''}
            </div>
            <div style="display:flex; gap:6px;">
              <button type="button" class="sm" data-cc-edit-feat="${idx}">編輯</button>
              <button type="button" class="danger sm" data-cc-del-feat="${idx}">移除</button>
            </div>
          </div>
          <div class="sw25-cc-ability-meta">
            ${ft.req ? `<strong>前提/替換條件：</strong>${escapeHtml(ft.req)}` : '<strong>前提/替換條件：</strong>無'}
            ${ft.cost ? ` ｜ 適用時機：${escapeHtml(ft.cost)}` : ''}
            ${ft.range ? ` ｜ 對象/備註：${escapeHtml(ft.range)}` : ''}
          </div>
          ${ft.desc ? `<div class="sw25-cc-ability-desc">${escapeHtml(ft.desc)}</div>` : ''}
        </div>
      `;
    }).join('');
  };

  const renderAbilityCards = () => {
    const listEl = document.getElementById('cc-ability-cards-list');
    if (!listEl) return;
    const items = [];
    ['spells', 'songs', 'enhancements'].forEach(k => {
      const labelMap = { spells: '魔法', songs: '咒歌/鼓咆/闘理', enhancements: '練技/賦術/騎藝' };
      (currentChar.learnedAbilities?.[k] || []).forEach((item, idx) => {
        items.push({ kind: k, kindLabel: labelMap[k], idx, ...normalizeAbilityCardItem(item) });
      });
    });

    if (items.length === 0) {
      listEl.innerHTML = `<div style="color:var(--cc-muted); font-size:0.84rem;">尚未加入任何魔法／咒歌／練技筆記（也可在「技能檢索」卡片按「角色卡」一鍵加入）。</div>`;
      return;
    }

    listEl.innerHTML = items.map(it => {
      const isEditing = editingCard && editingCard.kind === it.kind && editingCard.idx === it.idx;
      return `
        <div class="sw25-cc-ability-card ${isEditing ? 'editing' : ''}">
          <div class="sw25-cc-ability-top">
            <div>
              <span class="sw25-cc-badge">${escapeHtml(it.kindLabel)}</span>
              <strong style="margin-left:6px;">${escapeHtml(it.name)}</strong>
              ${isEditing ? '<span class="sw25-cc-badge warn" style="margin-left:6px;">編輯中</span>' : ''}
            </div>
            <div style="display:flex; gap:6px;">
              <button type="button" class="sm" data-cc-edit-kind="${it.kind}" data-cc-edit-idx="${it.idx}">編輯</button>
              <button type="button" class="danger sm" data-cc-del-kind="${it.kind}" data-cc-del-idx="${it.idx}">移除</button>
            </div>
          </div>
          <div class="sw25-cc-ability-meta">${it.cost ? `消耗/條件：${escapeHtml(it.cost)}` : ''} ${it.range ? `｜ 射程/對象：${escapeHtml(it.range)}` : ''}</div>
          <div class="sw25-cc-ability-desc">${escapeHtml(it.desc || '')}</div>
        </div>
      `;
    }).join('');
  };

  const syncSubTabs = () => {
    container.querySelectorAll('[data-cc-tab]').forEach(b => {
      b.classList.toggle('active', b.dataset.ccTab === activeSubTab);
    });
    container.querySelectorAll('.sw25-cc-pane').forEach(p => {
      p.classList.toggle('active', p.id === `cc-pane-${activeSubTab}`);
    });
  };

  const updateUI = () => {
    currentChar = getActiveCharacter();
    const all = loadAllCharacters();
    const sel = document.getElementById('cc-char-select');
    sel.innerHTML = all.map(c =>
      `<option value="${escapeHtml(c.id)}" ${c.id === currentChar.id ? 'selected' : ''}>${escapeHtml(c.meta.name || '未命名')} (Lv.${c.computed.adventurerLevel})</option>`
    ).join('');

    document.getElementById('cc-hdr-adv-lv').textContent = `冒險者 Lv.${currentChar.computed.adventurerLevel}`;
    const rem = currentChar.computed.expRemaining;
    const expBadge = document.getElementById('cc-hdr-exp-rem');
    expBadge.textContent = `剩餘 EXP: ${rem}`;
    expBadge.className = `sw25-cc-badge ${rem < 0 ? 'warn' : 'good'}`;

    const { currentHp, maxHp, currentMp, maxMp, lifeResist, mindResist, initiative, moveNormal, moveFull, evasionBase, totalDefense } = currentChar.derived;
    document.getElementById('cc-hp-display').textContent = `${currentHp} / ${maxHp}`;
    document.getElementById('cc-hp-bar').style.width = `${maxHp > 0 ? Math.min(100, (currentHp / maxHp) * 100) : 0}%`;
    document.getElementById('cc-mp-display').textContent = `${currentMp} / ${maxMp}`;
    document.getElementById('cc-mp-bar').style.width = `${maxMp > 0 ? Math.min(100, (currentMp / maxMp) * 100) : 0}%`;

    document.getElementById('cc-drv-life').textContent = lifeResist;
    document.getElementById('cc-drv-mind').textContent = mindResist;
    document.getElementById('cc-drv-init').textContent = initiative;
    document.getElementById('cc-drv-evasion').textContent = evasionBase;
    document.getElementById('cc-drv-defense').textContent = totalDefense;
    document.getElementById('cc-drv-move').textContent = `${moveNormal}m`;
    document.getElementById('cc-drv-full').textContent = `${moveFull}m`;
    document.getElementById('cc-drv-wizard').textContent = currentChar.computed.wizardLevel > 0
      ? `Lv.${currentChar.computed.wizardLevel} (${currentChar.computed.wizardPower})`
      : '-';

    document.getElementById('cc-abilities-tbody').innerHTML = ABILITY_LABELS.map(([key, label]) => {
      const ab = currentChar.abilities[key];
      const tot = currentChar.computed.abilityTotals[key];
      const mod = currentChar.computed.abilityMods[key];
      return `
        <tr>
          <td class="left"><strong>${label}</strong></td>
          <td><input class="num-in" type="number" data-cc-ab="${key}" data-cc-part="base" value="${ab.base}" /></td>
          <td><input class="num-in" type="number" data-cc-ab="${key}" data-cc-part="growth" value="${ab.growth}" /></td>
          <td><input class="num-in" type="number" data-cc-ab="${key}" data-cc-part="misc" value="${ab.misc}" /></td>
          <td><strong>${tot}</strong></td>
          <td><span class="sw25-cc-badge">+${mod}</span></td>
        </tr>
      `;
    }).join('');

    const buffs = currentChar.combatSync.activeBuffs || [];
    document.getElementById('cc-buff-list').innerHTML = buffs.length === 0
      ? `<div style="color:var(--cc-muted); font-size:0.82rem;">目前無生效中的 Buff / 風險減值修正</div>`
      : buffs.map((b, idx) => `
        <div class="sw25-cc-buff-item">
          <span><strong>${escapeHtml(b.name || '修正')}</strong> (${escapeHtml(b.stat)}: ${b.value >= 0 ? '+' + b.value : b.value})</span>
          <button type="button" class="danger sm" data-cc-del-buff="${idx}">移除</button>
        </div>
      `).join('');

    document.getElementById('cc-meta-name').value = currentChar.meta.name || '';
    document.getElementById('cc-meta-race').value = currentChar.meta.race || '';
    document.getElementById('cc-meta-gender').value = currentChar.meta.gender || '';
    document.getElementById('cc-meta-age').value = currentChar.meta.age || '';
    document.getElementById('cc-meta-expTotal').value = currentChar.meta.expTotal ?? 0;
    document.getElementById('cc-meta-expUsed').value = currentChar.meta.expUsed ?? 0;
    document.getElementById('cc-meta-moneyG').value = currentChar.meta.moneyG ?? 0;
    document.getElementById('cc-meta-honorPoints').value = currentChar.meta.honorPoints ?? 0;
    document.getElementById('cc-meta-notes').value = currentChar.meta.notes || '';

    const wizBanner = document.getElementById('cc-wizard-banner');
    if (currentChar.computed.wizardLevel > 0) {
      wizBanner.style.display = 'block';
      wizBanner.innerHTML = `🔮 <strong>深智魔法已啟用</strong>：可使用最高 <strong>Lv.${currentChar.computed.wizardLevel}</strong> 深智魔法，施法魔力為 <strong>${currentChar.computed.wizardPower}</strong>（取真語／操靈較低等級，魔力取較高等級＋知力加值）。`;
    } else {
      wizBanner.style.display = 'none';
    }

    document.getElementById('cc-skills-tbody').innerHTML = currentChar.skills.map((sk, idx) => {
      const cost = getExpCost(sk.expTable, sk.level);
      const isMagic = MAGIC_SKILLS.has(sk.name);
      const isDancer = (sk.name === '舞鬥士' || sk.name === '舞踏家') && sk.level >= 1;
      return `
        <tr>
          <td class="left">
            <strong>${escapeHtml(sk.name)}</strong>
            ${isMagic ? '<span class="sw25-cc-badge">魔法</span>' : ''}
            ${isDancer ? '<span class="sw25-cc-badge warn">特技+1</span>' : ''}
          </td>
          <td>
            <select data-cc-sk-idx="${idx}" data-cc-sk-field="expTable">
              <option value="A" ${sk.expTable === 'A' ? 'selected' : ''}>A</option>
              <option value="B" ${sk.expTable === 'B' ? 'selected' : ''}>B</option>
            </select>
          </td>
          <td><input class="num-in" type="number" min="0" max="15" data-cc-sk-idx="${idx}" data-cc-sk-field="level" value="${sk.level}" /></td>
          <td>${cost}</td>
          <td>${isMagic ? `<strong>${sk.magicPower}</strong>` : '-'}</td>
          <td><button type="button" class="danger sm" data-cc-del-sk="${idx}">刪除</button></td>
        </tr>
      `;
    }).join('');

    renderFeatsSection();
    renderAbilityCards();

    const armor = currentChar.equipment.armor;
    const shield = currentChar.equipment.shield;
    document.getElementById('cc-eq-armor-equipped').checked = armor.equipped !== false;
    document.getElementById('cc-eq-armor-name').value = armor.name || '';
    document.getElementById('cc-eq-armor-req').value = armor.reqStr ?? 0;
    document.getElementById('cc-eq-armor-eva').value = armor.evasionMod ?? 0;
    document.getElementById('cc-eq-armor-def').value = armor.defense ?? 0;
    document.getElementById('cc-armor-box').classList.toggle('equipped', armor.equipped !== false && Boolean(armor.name));

    document.getElementById('cc-eq-shield-equipped').checked = shield.equipped !== false;
    document.getElementById('cc-eq-shield-name').value = shield.name || '';
    document.getElementById('cc-eq-shield-req').value = shield.reqStr ?? 0;
    document.getElementById('cc-eq-shield-eva').value = shield.evasionMod ?? 0;
    document.getElementById('cc-eq-shield-def').value = shield.defense ?? 0;
    document.getElementById('cc-shield-box').classList.toggle('equipped', shield.equipped !== false && Boolean(shield.name));

    const totalEvaMod = (armor.equipped ? toSafeNumber(armor.evasionMod, 0) : 0) + (shield.equipped ? toSafeNumber(shield.evasionMod, 0) : 0);
    document.getElementById('cc-eq-defense-summary').textContent = `防護點：${totalDefense} ｜ 裝備迴避修正：${totalEvaMod >= 0 ? '+' + totalEvaMod : totalEvaMod}`;

    document.getElementById('cc-weapons-tbody').innerHTML = (currentChar.equipment.weapons || []).map((w, idx) => `
      <tr>
        <td><input type="checkbox" data-cc-wp-eq="${idx}" ${w.equipped !== false ? 'checked' : ''} /></td>
        <td><span class="sw25-cc-badge">${escapeHtml(w.usage || '1H')}</span></td>
        <td class="left"><strong>${escapeHtml(w.name)}</strong></td>
        <td>${w.reqStr}</td>
        <td>${w.hitMod >= 0 ? '+' + w.hitMod : w.hitMod}</td>
        <td>${w.power}</td>
        <td>${w.crit}</td>
        <td>${(w.extraDmg ?? 0) >= 0 ? '+' + (w.extraDmg ?? 0) : (w.extraDmg ?? 0)}</td>
        <td><button type="button" class="danger sm" data-cc-del-wp="${idx}">刪除</button></td>
      </tr>
    `).join('');

    const accessories = currentChar.equipment.accessories || [];
    const equippedAccCount = accessories.filter(a => a.equipped !== false).length;
    document.getElementById('cc-acc-count-badge').textContent = `已裝備：${equippedAccCount} / ${accessories.length} 項`;

    document.getElementById('cc-acc-list').innerHTML = accessories.length === 0
      ? `<div style="color:var(--cc-muted); font-size:0.83rem; grid-column:1/-1;">尚未裝備任何裝飾品，可從上方新增或於「道具檢索」一鍵加入。</div>`
      : accessories.map((a, idx) => `
        <div class="sw25-cc-slot-card ${a.equipped !== false ? 'equipped' : ''}">
          <div style="display:flex; justify-content:space-between; align-items:center; gap:6px;">
            <div style="display:flex; align-items:center; gap:6px;">
              <input type="checkbox" data-cc-acc-eq="${idx}" ${a.equipped !== false ? 'checked' : ''} title="切換裝備狀態" />
              <select data-cc-acc-slot-edit="${idx}" style="padding:2px 6px; font-size:0.76rem;">
                ${ACCESSORY_SLOTS.map(s => `<option value="${s}" ${a.slot === s ? 'selected' : ''}>${s}</option>`).join('')}
              </select>
              <strong style="font-size:0.86rem;">${escapeHtml(a.name)}</strong>
            </div>
            <button type="button" class="danger sm" data-cc-del-acc="${idx}">移除</button>
          </div>
          ${a.note ? `<div style="font-size:0.78rem; color:var(--cc-muted); padding-left:22px;">${escapeHtml(a.note)}</div>` : ''}
        </div>
      `).join('');

    const logBox = document.getElementById('cc-dice-log');
    if (logBox) logBox.innerHTML = logHistoryHtml.join('');
    syncSubTabs();
  };

  container.innerHTML = CONSOLE_TEMPLATE;

  // 事件綁定
  document.getElementById('cc-char-select').addEventListener('change', e => {
    localStorage.setItem(ACTIVE_ID_KEY, e.target.value);
    currentChar = getActiveCharacter();
    resetFeatForm();
    resetAbilityForm();
    updateUI();
  });

  document.getElementById('cc-btn-new-char').addEventListener('click', () => {
    const name = prompt('請輸入新冒險者名稱：', '新冒險者');
    if (!name) return;
    const created = createDefaultCharacter({ meta: { name: name.trim() } });
    currentChar = saveCharacter(created, { resetCurrentPools: true });
    resetFeatForm();
    resetAbilityForm();
    updateUI();
  });

  document.getElementById('cc-btn-dup-char').addEventListener('click', () => {
    const copy = JSON.parse(JSON.stringify(currentChar));
    delete copy.id;
    copy.meta.name = `${currentChar.meta.name} (複製)`;
    currentChar = saveCharacter(createDefaultCharacter(copy), { resetCurrentPools: true });
    resetFeatForm();
    resetAbilityForm();
    updateUI();
  });

  document.getElementById('cc-btn-del-char').addEventListener('click', () => {
    if (!confirm(`確定要刪除角色「${currentChar.meta.name}」嗎？`)) return;
    let list = loadAllCharacters().filter(c => c.id !== currentChar.id);
    if (list.length === 0) list = [createDefaultCharacter({ meta: { name: '預設冒險者' } })];
    saveAllCharacters(list);
    localStorage.setItem(ACTIVE_ID_KEY, list[0].id);
    currentChar = getActiveCharacter();
    resetFeatForm();
    resetAbilityForm();
    updateUI();
  });

  container.querySelectorAll('[data-cc-pool]').forEach(btn => {
    btn.addEventListener('click', () => {
      const pool = btn.dataset.ccPool;
      const delta = Number(btn.dataset.ccDelta);
      commit(c => {
        if (pool === 'hp') c.derived.currentHp = Math.max(0, Math.min(c.derived.maxHp, c.derived.currentHp + delta));
        if (pool === 'mp') c.derived.currentMp = Math.max(0, Math.min(c.derived.maxMp, c.derived.currentMp + delta));
      }, {});
    });
  });

  document.getElementById('cc-btn-rest-full').addEventListener('click', () => {
    commit(c => {
      c.derived.currentHp = c.derived.maxHp;
      c.derived.currentMp = c.derived.maxMp;
    }, { resetCurrentPools: true });
    appendLog('🏕️ 執行全滿休息，HP 與 MP 已完全回復。');
  });

  document.getElementById('cc-abilities-tbody').addEventListener('change', e => {
    const inp = e.target;
    if (!inp.dataset.ccAb) return;
    commit(c => {
      c.abilities[inp.dataset.ccAb][inp.dataset.ccPart] = toSafeNumber(inp.value, 0);
    }, { syncMaxDelta: true });
  });

  document.getElementById('cc-btn-add-buff').addEventListener('click', () => {
    const name = document.getElementById('cc-buff-name').value.trim() || '狀態修正';
    const stat = document.getElementById('cc-buff-stat').value;
    const value = toSafeNumber(document.getElementById('cc-buff-val').value, 0);
    commit(c => {
      c.combatSync.activeBuffs.push({ name, stat, value });
    }, { syncMaxDelta: true });
    document.getElementById('cc-buff-name').value = '';
  });

  document.getElementById('cc-buff-list').addEventListener('click', e => {
    const idx = e.target.dataset.ccDelBuff;
    if (idx === undefined) return;
    commit(c => {
      c.combatSync.activeBuffs.splice(Number(idx), 1);
    }, { syncMaxDelta: true });
  });

  ['name', 'race', 'gender', 'age', 'notes'].forEach(f => {
    document.getElementById(`cc-meta-${f}`).addEventListener('change', e => {
      commit(c => { c.meta[f] = e.target.value; }, {});
    });
  });
  ['expTotal', 'moneyG', 'honorPoints'].forEach(f => {
    document.getElementById(`cc-meta-${f}`).addEventListener('change', e => {
      commit(c => { c.meta[f] = toSafeNumber(e.target.value, 0); }, {});
    });
  });

  container.querySelectorAll('[data-cc-tab]').forEach(btn => {
    btn.addEventListener('click', () => {
      activeSubTab = btn.dataset.ccTab;
      syncSubTabs();
    });
  });

  document.getElementById('cc-btn-add-skill').addEventListener('click', () => {
    const preset = document.getElementById('cc-preset-skill-select').value;
    let name = document.getElementById('cc-custom-skill-name').value.trim();
    let expTable = document.getElementById('cc-custom-skill-table').value;
    if (preset && !name) {
      const [pName, pTab] = preset.split('|');
      name = pName;
      expTable = pTab;
    }
    if (!name) return;
    commit(c => {
      c.skills.push({ name, expTable, level: 1, magicPower: 0 });
    }, { syncMaxDelta: true });
    document.getElementById('cc-custom-skill-name').value = '';
    document.getElementById('cc-preset-skill-select').value = '';
  });

  document.getElementById('cc-skills-tbody').addEventListener('change', e => {
    const idx = e.target.dataset.ccSkIdx;
    const field = e.target.dataset.ccSkField;
    if (idx === undefined) return;
    commit(c => {
      if (field === 'level') c.skills[idx].level = Math.max(0, Math.min(15, parseInt(e.target.value, 10) || 0));
      if (field === 'expTable') c.skills[idx].expTable = e.target.value;
    }, { syncMaxDelta: true });
  });

  document.getElementById('cc-skills-tbody').addEventListener('click', e => {
    const idx = e.target.dataset.ccDelSk;
    if (idx === undefined) return;
    commit(c => { c.skills.splice(Number(idx), 1); }, { syncMaxDelta: true });
  });

  document.getElementById('cc-btn-add-feat').addEventListener('click', () => {
    const name = document.getElementById('cc-feat-name').value.trim();
    if (!name) return;

    const entry = {
      name,
      featType: document.getElementById('cc-feat-type').value || '',
      req: document.getElementById('cc-feat-req').value.trim(),
      cost: document.getElementById('cc-feat-cost').value.trim(),
      range: '',
      riskNote: document.getElementById('cc-feat-risk').value.trim(),
      desc: document.getElementById('cc-feat-desc').value.trim()
    };

    const parsedNew = parseReplacementFeat(name);
    const hasExistingReplacement = parsedNew.isReplacement && currentChar.feats.some(f => {
      const pOld = parseReplacementFeat(normalizeAbilityCardItem(f).name);
      return pOld.isReplacement && pOld.baseName === parsedNew.baseName && parsedNew.rank > pOld.rank;
    });

    const maxSlots = currentChar.computed?.featMaxSlots ?? getMaxFeatSlots(currentChar.computed?.adventurerLevel ?? 0, currentChar.skills);
    const curSlotUsed = countSlotConsumingFeats(currentChar.feats);

    if (!doesNotConsumeFeatSlot(name) && !hasExistingReplacement && curSlotUsed >= maxSlots) {
      if (!confirm(`目前已學 ${curSlotUsed} 個自選戰鬥特技，已達目前上限（${maxSlots} 格）。仍要強制加入嗎？`)) return;
    }

    let resultMsg = '';
    commit(c => {
      const res = applyFeatEntry(c.feats, entry, -1);
      if (res.action === 'replaced') {
        resultMsg = `🔄 已將「${res.replacedFrom}」原地替換為「${name}」（不占新自選格）。`;
      } else if (res.action === 'duplicate') {
        resultMsg = `⚠️ 角色卡已有「${name}」，同一特技不可重複習得。`;
      } else if (res.action === 'duplicate_rank') {
        resultMsg = `⚠️ 角色卡已有同階「${name}」，無法重複習得。`;
      } else if (res.action === 'lower_rank') {
        resultMsg = `⚠️ 目前已擁有較高階（Rank ${res.currentRank}），替換型特技僅能逐階替換。`;
      }
    }, {});

    if (resultMsg) appendLog(resultMsg);
    ['cc-feat-name', 'cc-feat-req', 'cc-feat-cost', 'cc-feat-risk', 'cc-feat-desc'].forEach(id => {
      document.getElementById(id).value = '';
    });
    document.getElementById('cc-feat-type').value = '';
  });

  document.getElementById('cc-btn-save-feat').addEventListener('click', () => {
    if (editingFeatIdx === null) return;
    const name = document.getElementById('cc-feat-name').value.trim();
    if (!name) return;
    const updatedFeat = {
      name,
      featType: document.getElementById('cc-feat-type').value || '',
      req: document.getElementById('cc-feat-req').value.trim(),
      cost: document.getElementById('cc-feat-cost').value.trim(),
      range: '',
      riskNote: document.getElementById('cc-feat-risk').value.trim(),
      desc: document.getElementById('cc-feat-desc').value.trim()
    };
    const idxToSave = editingFeatIdx;
    resetFeatForm();
    commit(c => {
      applyFeatEntry(c.feats, updatedFeat, idxToSave);
    }, {});
  });

  document.getElementById('cc-btn-cancel-feat').addEventListener('click', resetFeatForm);

  document.getElementById('cc-feats-list').addEventListener('click', e => {
    const editIdx = e.target.dataset.ccEditFeat;
    if (editIdx !== undefined) {
      const idx = Number(editIdx);
      const target = normalizeAbilityCardItem(currentChar.feats?.[idx]);
      editingFeatIdx = idx;
      document.getElementById('cc-feat-name').value = target.name || '';
      document.getElementById('cc-feat-type').value = target.featType || '';
      document.getElementById('cc-feat-req').value = target.req || '';
      document.getElementById('cc-feat-cost').value = target.cost || '';
      document.getElementById('cc-feat-risk').value = target.riskNote || '';
      document.getElementById('cc-feat-desc').value = target.desc || '';
      document.getElementById('cc-btn-add-feat').style.display = 'none';
      document.getElementById('cc-btn-save-feat').style.display = '';
      document.getElementById('cc-btn-cancel-feat').style.display = '';
      renderFeatsSection();
      document.getElementById('cc-feat-name').focus();
      return;
    }

    const delIdx = e.target.dataset.ccDelFeat;
    if (delIdx !== undefined) {
      const idx = Number(delIdx);
      if (editingFeatIdx === idx) resetFeatForm();
      commit(c => { c.feats.splice(idx, 1); }, {});
    }
  });

  document.getElementById('cc-btn-add-ability').addEventListener('click', () => {
    const kind = document.getElementById('cc-ability-kind').value;
    const name = document.getElementById('cc-ability-name').value.trim();
    if (!name) return;
    const entry = {
      name,
      featType: '',
      req: '',
      cost: document.getElementById('cc-ability-cost').value.trim(),
      range: document.getElementById('cc-ability-range').value.trim(),
      riskNote: '',
      desc: document.getElementById('cc-ability-desc').value.trim()
    };
    commit(c => {
      getCardArray(c, kind).push(entry);
    }, {});
    ['cc-ability-name', 'cc-ability-cost', 'cc-ability-range', 'cc-ability-desc'].forEach(id => {
      document.getElementById(id).value = '';
    });
  });

  document.getElementById('cc-btn-save-ability').addEventListener('click', () => {
    if (!editingCard) return;
    const newKind = document.getElementById('cc-ability-kind').value;
    const name = document.getElementById('cc-ability-name').value.trim();
    if (!name) return;
    const updatedEntry = {
      name,
      featType: '',
      req: '',
      cost: document.getElementById('cc-ability-cost').value.trim(),
      range: document.getElementById('cc-ability-range').value.trim(),
      riskNote: '',
      desc: document.getElementById('cc-ability-desc').value.trim()
    };
    const { kind: oldKind, idx: oldIdx } = editingCard;
    resetAbilityForm();
    commit(c => {
      const oldArr = getCardArray(c, oldKind);
      if (oldKind === newKind) oldArr[oldIdx] = updatedEntry;
      else {
        oldArr.splice(oldIdx, 1);
        getCardArray(c, newKind).push(updatedEntry);
      }
    }, {});
  });

  document.getElementById('cc-btn-cancel-ability').addEventListener('click', resetAbilityForm);

  document.getElementById('cc-ability-cards-list').addEventListener('click', e => {
    const editKind = e.target.dataset.ccEditKind;
    const editIdx = e.target.dataset.ccEditIdx;
    if (editKind !== undefined && editIdx !== undefined) {
      const arr = currentChar.learnedAbilities[editKind];
      const target = normalizeAbilityCardItem(arr?.[Number(editIdx)]);
      editingCard = { kind: editKind, idx: Number(editIdx) };
      document.getElementById('cc-ability-kind').value = editKind;
      document.getElementById('cc-ability-name').value = target.name || '';
      document.getElementById('cc-ability-cost').value = target.cost || '';
      document.getElementById('cc-ability-range').value = target.range || '';
      document.getElementById('cc-ability-desc').value = target.desc || '';
      document.getElementById('cc-btn-add-ability').style.display = 'none';
      document.getElementById('cc-btn-save-ability').style.display = '';
      document.getElementById('cc-btn-cancel-ability').style.display = '';
      renderAbilityCards();
      document.getElementById('cc-ability-name').focus();
      return;
    }

    const delKind = e.target.dataset.ccDelKind;
    const delIdx = e.target.dataset.ccDelIdx;
    if (!delKind) return;
    if (editingCard && editingCard.kind === delKind && editingCard.idx === Number(delIdx)) {
      resetAbilityForm();
    }
    commit(c => {
      getCardArray(c, delKind).splice(Number(delIdx), 1);
    }, {});
  });

  ['armor', 'shield'].forEach(part => {
    document.getElementById(`cc-eq-${part}-equipped`).addEventListener('change', e => {
      commit(c => { c.equipment[part].equipped = e.target.checked; }, {});
    });
    document.getElementById(`cc-eq-${part}-name`).addEventListener('change', e => {
      commit(c => { c.equipment[part].name = e.target.value; }, {});
    });
    document.getElementById(`cc-eq-${part}-req`).addEventListener('change', e => {
      commit(c => { c.equipment[part].reqStr = toSafeNumber(e.target.value, 0); }, {});
    });
    document.getElementById(`cc-eq-${part}-eva`).addEventListener('change', e => {
      commit(c => { c.equipment[part].evasionMod = toSafeNumber(e.target.value, 0); }, {});
    });
    document.getElementById(`cc-eq-${part}-def`).addEventListener('change', e => {
      commit(c => { c.equipment[part].defense = toSafeNumber(e.target.value, 0); }, {});
    });
  });

  document.getElementById('cc-btn-add-wp').addEventListener('click', () => {
    const name = document.getElementById('cc-wp-name').value.trim();
    if (!name) return;
    commit(c => {
      c.equipment.weapons.push({
        name,
        usage: document.getElementById('cc-wp-usage').value || '1H',
        reqStr: toSafeNumber(document.getElementById('cc-wp-req').value, 0),
        hitMod: toSafeNumber(document.getElementById('cc-wp-hit').value, 0),
        power: toSafeNumber(document.getElementById('cc-wp-pow').value, 10),
        crit: toSafeNumber(document.getElementById('cc-wp-crit').value, 10),
        extraDmg: toSafeNumber(document.getElementById('cc-wp-dmg').value, 0),
        equipped: true
      });
    }, {});
    document.getElementById('cc-wp-name').value = '';
  });

  document.getElementById('cc-weapons-tbody').addEventListener('change', e => {
    const eqIdx = e.target.dataset.ccWpEq;
    if (eqIdx === undefined) return;
    commit(c => {
      c.equipment.weapons[Number(eqIdx)].equipped = e.target.checked;
    }, {});
  });

  document.getElementById('cc-weapons-tbody').addEventListener('click', e => {
    const idx = e.target.dataset.ccDelWp;
    if (idx === undefined) return;
    commit(c => { c.equipment.weapons.splice(Number(idx), 1); }, {});
  });

  document.getElementById('cc-btn-add-acc').addEventListener('click', () => {
    const name = document.getElementById('cc-acc-name').value.trim();
    if (!name) return;
    commit(c => {
      c.equipment.accessories.push({
        slot: document.getElementById('cc-acc-slot').value || '其他',
        name,
        note: document.getElementById('cc-acc-note').value.trim(),
        equipped: true
      });
    }, {});
    document.getElementById('cc-acc-name').value = '';
    document.getElementById('cc-acc-note').value = '';
  });

  document.getElementById('cc-acc-list').addEventListener('change', e => {
    const eqIdx = e.target.dataset.ccAccEq;
    if (eqIdx !== undefined) {
      commit(c => {
        c.equipment.accessories[Number(eqIdx)].equipped = e.target.checked;
      }, {});
      return;
    }
    const slotIdx = e.target.dataset.ccAccSlotEdit;
    if (slotIdx !== undefined) {
      commit(c => {
        c.equipment.accessories[Number(slotIdx)].slot = e.target.value;
      }, {});
    }
  });

  document.getElementById('cc-acc-list').addEventListener('click', e => {
    const idx = e.target.dataset.ccDelAcc;
    if (idx === undefined) return;
    commit(c => { c.equipment.accessories.splice(Number(idx), 1); }, {});
  });

  const roll2D = (base = 0, label = '2D 擲骰') => {
    const d1 = Math.floor(Math.random() * 6) + 1;
    const d2 = Math.floor(Math.random() * 6) + 1;
    const sum = d1 + d2;
    const total = sum + base;
    let tag = '';
    if (sum === 12) tag = ' <span class="sw25-cc-crit">[自動成功!]</span>';
    if (sum === 2) tag = ' <span class="sw25-cc-fumble">[自動失敗!]</span>';
    appendLog(`<strong>${escapeHtml(label)}</strong>：2D(${d1}+${d2}=${sum}) ${base !== 0 ? (base > 0 ? `+ ${base}` : `- ${Math.abs(base)}`) : ''} = <strong>${total}</strong>${tag}`);
  };

  container.querySelectorAll('[data-cc-roll]').forEach(btn => {
    btn.addEventListener('click', () => {
      const mode = btn.dataset.ccRoll;
      if (mode === '2d') roll2D(0, '2D 擲骰');
      if (mode === 'life') roll2D(currentChar.derived.lifeResist, '生命抵抗力判定');
      if (mode === 'mind') roll2D(currentChar.derived.mindResist, '精神抵抗力判定');
      if (mode === 'evasion') roll2D(currentChar.derived.evasionBase, '迴避力判定');
      if (mode === 'init') roll2D(currentChar.derived.initiative, '先制判定');
      if (mode === 'magic') {
        const maxMag = currentChar.skills.filter(s => MAGIC_SKILLS.has(s.name)).reduce((m, s) => Math.max(m, s.magicPower), 0);
        const best = Math.max(maxMag, currentChar.computed.wizardPower || 0);
        roll2D(best, `魔法行使判定 (魔力 ${best})`);
      }
    });
  });

  document.getElementById('cc-btn-custom-roll').addEventListener('click', () => {
    const lbl = document.getElementById('cc-custom-roll-label').value.trim() || '自訂檢定';
    const mod = toSafeNumber(document.getElementById('cc-custom-roll-mod').value, 0);
    roll2D(mod, lbl);
  });

  document.getElementById('cc-btn-cast-mp').addEventListener('click', () => {
    const cost = Math.max(1, toSafeNumber(document.getElementById('cc-cast-mp-cost').value, 1));
    const spell = document.getElementById('cc-cast-spell-name').value.trim() || '魔法/技能';
    if (currentChar.derived.currentMp < cost) {
      appendLog(`<span class="sw25-cc-fumble">⚠️ MP 不足！</span> 施展「${escapeHtml(spell)}」需要 ${cost} MP，目前僅剩 ${currentChar.derived.currentMp} MP。`);
      return;
    }
    commit(c => { c.derived.currentMp -= cost; }, {});
    appendLog(`✨ 施展 <strong>${escapeHtml(spell)}</strong>，消耗 <strong>${cost} MP</strong>（剩餘 ${currentChar.derived.currentMp}/${currentChar.derived.maxMp}）。`);
  });

  const dlg = document.getElementById('cc-io-dialog');
  const ioText = document.getElementById('cc-io-textarea');
  const fileInput = document.getElementById('cc-file-import-input');

  const importFromJsonText = (rawText) => {
    const parsed = JSON.parse(rawText);
    const list = Array.isArray(parsed) ? parsed : [parsed];
    const base = loadAllCharacters();
    const map = new Map(base.map(c => [c.id, c]));
    let lastId = currentChar.id;
    let importedCount = 0;

    list.forEach(item => {
      if (!item || typeof item !== 'object') return;
      if (!item.id) item.id = `char_${Date.now()}_${Math.random().toString(36).slice(2, 7)}`;
      const norm = recalculateCharacter(item);
      map.set(norm.id, norm);
      lastId = norm.id;
      importedCount += 1;
    });

    if (importedCount === 0) throw new Error('檔案內沒有有效的角色卡資料');
    saveAllCharacters(Array.from(map.values()));
    localStorage.setItem(ACTIVE_ID_KEY, lastId);
    currentChar = getActiveCharacter();
    resetFeatForm();
    resetAbilityForm();
    updateUI();
    return importedCount;
  };

  const triggerFilePicker = () => {
    fileInput.value = '';
    fileInput.click();
  };

  document.getElementById('cc-btn-import-file').addEventListener('click', triggerFilePicker);
  document.getElementById('cc-btn-modal-pick-file').addEventListener('click', triggerFilePicker);

  fileInput.addEventListener('change', async e => {
    const file = e.target.files?.[0];
    if (!file) return;
    try {
      const text = await file.text();
      const count = importFromJsonText(text);
      if (dlg.open) dlg.close();
      appendLog(`📂 已從檔案「${escapeHtml(file.name)}」成功匯入 ${count} 張角色卡。`);
      alert(`已成功匯入 ${count} 張角色卡！`);
    } catch (err) {
      alert('匯入失敗（JSON 格式錯誤）：' + err.message);
    } finally {
      fileInput.value = '';
    }
  });

  document.getElementById('cc-btn-io-modal').addEventListener('click', () => {
    ioText.value = JSON.stringify(currentChar, null, 2);
    dlg.showModal();
  });
  document.getElementById('cc-btn-export-one').addEventListener('click', () => {
    ioText.value = JSON.stringify(currentChar, null, 2);
  });
  document.getElementById('cc-btn-export-all').addEventListener('click', () => {
    ioText.value = JSON.stringify(loadAllCharacters(), null, 2);
  });
  document.getElementById('cc-btn-download-json').addEventListener('click', () => {
    const content = ioText.value.trim() || JSON.stringify(currentChar, null, 2);
    const blob = new Blob([content], { type: 'application/json;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    const safeName = (currentChar.meta.name || 'sw25_character').replace(/[\/:*?"<>|]/g, '_');
    a.href = url;
    a.download = `${safeName}.json`;
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(url);
  });
  document.getElementById('cc-btn-copy-json').addEventListener('click', async () => {
    await navigator.clipboard.writeText(ioText.value);
    alert('已複製 JSON 至剪貼簿！');
  });
  document.getElementById('cc-btn-import-json').addEventListener('click', () => {
    try {
      const count = importFromJsonText(ioText.value);
      dlg.close();
      alert(`已成功匯入 ${count} 張角色卡！`);
    } catch (err) {
      alert('JSON 格式錯誤：' + err.message);
    }
  });
  document.getElementById('cc-btn-close-dialog').addEventListener('click', () => dlg.close());

  updateUI();
}

// 掛載全域函式以相容原本 HTML inline onclick 呼叫
window.renderCharSheetPage = () => renderCharSheetConsole('rules-container');
window.renderCharSheetConsole = renderCharSheetConsole;
window.addCardToActiveCharacter = addCardToActiveCharacter;