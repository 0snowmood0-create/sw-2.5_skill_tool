const STORAGE_KEY = 'sw25_character_sheets_v1';
const ACTIVE_ID_KEY = 'sw25_active_character_id_v1';

export const EXP_TABLE_A = [0, 1000, 2000, 3500, 5000, 7000, 9500, 12500, 16500, 21500, 28000, 36000, 46000, 58500, 73500, 93500];
export const EXP_TABLE_B = [0, 500, 1500, 2500, 4000, 5500, 7500, 10000, 13000, 17000, 22000, 28500, 36500, 46500, 59000, 74000];

const MAGIC_SKILLS = new Set([
  '真語魔法', '操靈魔法', '神聖魔法', '魔動機術', '妖精魔法',
  '深智魔法', '奈落魔法', '祕奧魔法', '咒詛魔法'
]);

function nowIso() {
  return new Date().toISOString();
}

function createEmptyAbility() {
  return { base: 12, growth: 0, misc: 0 };
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
      maxHp: 0,
      currentHp: 0,
      maxMp: 0,
      currentMp: 0,
      moveNormal: 0,
      moveLimit: 10,
      moveFull: 0,
      initiative: 0,
      lifeResist: 0,
      mindResist: 0
    },
    skills: [
      { name: '戰士', expTable: 'A', level: 1, magicPower: 0 },
      { name: '斥候', expTable: 'B', level: 1, magicPower: 0 }
    ],
    feats: [],
    learnedAbilities: {
      spells: [],
      songs: [],
      tactics: [],
      alchemy: [],
      enhancements: [],
      riding: [],
      items: []
    },
    equipment: {
      weapons: [],
      armor: { name: '', category: '防具-金屬鎧甲', reqStr: 0, evasionMod: 0, defense: 0, equipped: false },
      shield: { name: '', category: '防具-盾牌', reqStr: 0, evasionMod: 0, defense: 0, equipped: false },
      accessories: []
    },
    combatSync: {
      sizeParts: 1,
      meleeZone: true,
      activeBuffs: []
    }
  };

  const merged = {
    ...baseChar,
    ...overrides,
    meta: { ...baseChar.meta, ...(overrides.meta || {}) },
    abilities: {
      dex: { ...baseChar.abilities.dex, ...(overrides.abilities?.dex || {}) },
      agi: { ...baseChar.abilities.agi, ...(overrides.abilities?.agi || {}) },
      str: { ...baseChar.abilities.str, ...(overrides.abilities?.str || {}) },
      vit: { ...baseChar.abilities.vit, ...(overrides.abilities?.vit || {}) },
      int: { ...baseChar.abilities.int, ...(overrides.abilities?.int || {}) },
      mnd: { ...baseChar.abilities.mnd, ...(overrides.abilities?.mnd || {}) }
    },
    derived: { ...baseChar.derived, ...(overrides.derived || {}) },
    learnedAbilities: { ...baseChar.learnedAbilities, ...(overrides.learnedAbilities || {}) },
    equipment: {
      ...baseChar.equipment,
      ...(overrides.equipment || {}),
      armor: { ...baseChar.equipment.armor, ...(overrides.equipment?.armor || {}) },
      shield: { ...baseChar.equipment.shield, ...(overrides.equipment?.shield || {}) },
      weapons: Array.isArray(overrides.equipment?.weapons) ? overrides.equipment.weapons : [],
      accessories: Array.isArray(overrides.equipment?.accessories) ? overrides.equipment.accessories : []
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
  return (Number(ab?.base) || 0) + (Number(ab?.growth) || 0) + (Number(ab?.misc) || 0);
}

function calcAbilityMod(total) {
  return Math.floor((Number(total) || 0) / 6);
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
      return acc + (Number(buff.modifiers[statKey]) || 0);
    }
    if (buff.stat === statKey) {
      return acc + (Number(buff.value) || 0);
    }
    return acc;
  }, 0);
}

export function recalculateCharacter(rawChar, options = {}) {
  const char = JSON.parse(JSON.stringify(rawChar));
  const prevMaxHp = char.derived?.maxHp || 0;
  const prevMaxMp = char.derived?.maxMp || 0;
  const buffs = char.combatSync?.activeBuffs || [];

  const abilityTotals = {};
  const abilityMods = {};

  ['dex', 'agi', 'str', 'vit', 'int', 'mnd'].forEach(key => {
    const total = calcAbilityTotal(char.abilities[key]) + getBuffSum(buffs, key);
    abilityTotals[key] = total;
    abilityMods[key] = calcAbilityMod(total);
  });

  const skills = (char.skills || []).map(sk => {
    const lv = Math.max(0, Math.min(15, parseInt(sk.level, 10) || 0));
    const table = sk.expTable === 'B' ? 'B' : 'A';
    const magicPower = MAGIC_SKILLS.has(sk.name)
      ? lv + abilityMods.int + getBuffSum(buffs, 'magicPower')
      : (Number(sk.magicPower) || 0);

    return {
      name: sk.name || '',
      expTable: table,
      level: lv,
      magicPower
    };
  });

  const expUsed = skills.reduce((sum, sk) => sum + getExpCost(sk.expTable, sk.level), 0);
  const maxSkillLevel = skills.reduce((maxLv, sk) => Math.max(maxLv, sk.level), 0);

  const fighterSkill = skills.find(s => ['戰士', '拳鬥士', '輕戰士', '舞鬥士'].includes(s.name));
  const fighterLv = fighterSkill ? fighterSkill.level : 0;

  const scoutSkill = skills.find(s => s.name === '斥候');
  const rangerSkill = skills.find(s => s.name === '遊俠');
  const sageSkill = skills.find(s => s.name === '賢者');
  const scoutOrRangerLv = Math.max(scoutSkill?.level || 0, rangerSkill?.level || 0);
  const adventurerLv = maxSkillLevel;

  const maxHp = Math.max(0, abilityTotals.vit + fighterLv * 3 + getBuffSum(buffs, 'maxHp'));
  const casterLevelsSum = skills
    .filter(s => MAGIC_SKILLS.has(s.name))
    .reduce((sum, s) => sum + s.level, 0);
  const maxMp = Math.max(0, abilityTotals.mnd + casterLevelsSum * 3 + getBuffSum(buffs, 'maxMp'));

  const moveNormal = Math.max(0, abilityTotals.agi + getBuffSum(buffs, 'moveNormal'));
  const moveLimit = 10;
  const moveFull = moveNormal * 3;

  const initiative = scoutOrRangerLv + abilityMods.agi + getBuffSum(buffs, 'initiative');
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
    expRemaining: (Number(char.meta.expTotal) || 0) - expUsed,
    adventurerLevel: adventurerLv,
    scoutOrRangerLv,
    sageLv: sageSkill?.level || 0
  };
  char.derived = {
    maxHp,
    currentHp,
    maxMp,
    currentMp,
    moveNormal,
    moveLimit,
    moveFull,
    initiative,
    lifeResist,
    mindResist
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

export function getActiveCharacterId() {
  const list = loadAllCharacters();
  const savedId = localStorage.getItem(ACTIVE_ID_KEY);
  if (savedId && list.some(c => c.id === savedId)) {
    return savedId;
  }
  localStorage.setItem(ACTIVE_ID_KEY, list[0].id);
  return list[0].id;
}

export function setActiveCharacterId(id) {
  const list = loadAllCharacters();
  if (!list.some(c => c.id === id)) return null;
  localStorage.setItem(ACTIVE_ID_KEY, id);
  return list.find(c => c.id === id);
}

export function getActiveCharacter() {
  const list = loadAllCharacters();
  const activeId = getActiveCharacterId();
  return list.find(c => c.id === activeId) || list[0];
}

export function saveCharacter(updatedChar, options = {}) {
  const list = loadAllCharacters();
  const normalized = recalculateCharacter(updatedChar, options);
  const idx = list.findIndex(c => c.id === normalized.id);
  if (idx >= 0) {
    list[idx] = normalized;
  } else {
    list.push(normalized);
  }
  saveAllCharacters(list);
  localStorage.setItem(ACTIVE_ID_KEY, normalized.id);
  return normalized;
}

export function createAndSaveCharacter(overrides = {}) {
  const created = createDefaultCharacter(overrides);
  return saveCharacter(created, { resetCurrentPools: true });
}

export function duplicateCharacter(id) {
  const list = loadAllCharacters();
  const target = list.find(c => c.id === id);
  if (!target) return null;
  const copy = JSON.parse(JSON.stringify(target));
  delete copy.id;
  copy.meta.name = `${target.meta.name || '未命名'} (複製)`;
  return createAndSaveCharacter(copy);
}

export function deleteCharacter(id) {
  let list = loadAllCharacters().filter(c => c.id !== id);
  if (list.length === 0) {
    list = [createDefaultCharacter({ meta: { name: '預設冒險者' } })];
  }
  saveAllCharacters(list);
  localStorage.setItem(ACTIVE_ID_KEY, list[0].id);
  return list;
}

export function exportCharacterJSON(id) {
  const char = id
    ? loadAllCharacters().find(c => c.id === id)
    : getActiveCharacter();
  return JSON.stringify(char || null, null, 2);
}

export function exportAllCharactersJSON() {
  return JSON.stringify(loadAllCharacters(), null, 2);
}

export function importCharactersFromJSON(jsonString, { merge = true } = {}) {
  const parsed = JSON.parse(jsonString);
  const incomingList = Array.isArray(parsed) ? parsed : [parsed];
  const validIncoming = incomingList
    .filter(item => item && typeof item === 'object')
    .map(item => {
      const copy = JSON.parse(JSON.stringify(item));
      if (!copy.id) {
        copy.id = `char_${Date.now()}_${Math.random().toString(36).slice(2, 7)}`;
      }
      return recalculateCharacter(copy);
    });

  if (validIncoming.length === 0) {
    throw new Error('JSON 內沒有有效的角色卡資料');
  }

  const baseList = merge ? loadAllCharacters() : [];
  const mapById = new Map(baseList.map(c => [c.id, c]));
  validIncoming.forEach(c => mapById.set(c.id, c));

  const finalList = Array.from(mapById.values());
  saveAllCharacters(finalList);
  localStorage.setItem(ACTIVE_ID_KEY, validIncoming[0].id);
  return finalList;
}

export function toCombatantSnapshot(charId) {
  const char = charId
    ? loadAllCharacters().find(c => c.id === charId)
    : getActiveCharacter();
  if (!char) return null;

  return {
    sourceCharId: char.id,
    name: char.meta.name,
    race: char.meta.race,
    adventurerLevel: char.computed?.adventurerLevel ?? 1,
    hp: char.derived.currentHp,
    maxHp: char.derived.maxHp,
    mp: char.derived.currentMp,
    maxMp: char.derived.maxMp,
    moveNormal: char.derived.moveNormal,
    initiative: char.derived.initiative,
    lifeResist: char.derived.lifeResist,
    mindResist: char.derived.mindResist,
    sizeParts: char.combatSync?.sizeParts ?? 1,
    meleeZone: char.combatSync?.meleeZone ?? true,
    activeBuffs: char.combatSync?.activeBuffs || []
  };
}

export function syncFromCombatant(charId, patch = {}) {
  const list = loadAllCharacters();
  const target = list.find(c => c.id === charId);
  if (!target) return null;

  if (typeof patch.hp === 'number') target.derived.currentHp = patch.hp;
  if (typeof patch.mp === 'number') target.derived.currentMp = patch.mp;
  if (Array.isArray(patch.activeBuffs)) {
    target.combatSync.activeBuffs = patch.activeBuffs;
  }

  return saveCharacter(target);
}