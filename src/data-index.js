// ==================== 各職業技能與魔法資料匯入 ====================
import { bardSongsData } from './data-bards.js';
import { magitechData } from './data-magitech.js';
import { sorcererData } from './data-sorcerer.js';
import { sorceryData } from './data-sorcery.js';
import { wizardData } from './data-wizard.js';
import { divineData, specialDivineSpellsData } from './data-divine.js';
import { fairyData } from './data-fairy.js';
import { alchemistData } from './data-alchemist.js';
import { bibliomancerSpellsData } from './data-bibliomancer.js';
import { darkhunterData } from './data-darkhunter.js';
import { druidData } from './data-druid.js';
import { warLeaderData } from './data-warLeader.js';
import { geomancerData } from './data-geomancer.js';
import { abyssgazerData } from './data-abyssgazer.js';
import { riderData } from './data-rider.js';
import { enhancerData } from './data-enhancer.js';
import { combatFeatsData, passiveFeatsData, majorActionFeatsData, autoFeatsData } from './data-combatFeats.js';
import { vitalsmithSkillsData } from './data-vitalsmith.js';
import { witchSkillsData } from './data-witch.js';
import { demonData } from './data-demon.js';

// ==================== 道具與裝備資料匯入 ====================
import { accessoriesData } from './Item/data-accessories.js';
import { ammoItemsData } from './Item/data-ammo.js';
import { metalArmorData } from './Item/data-armor-metal.js';
import { nonmetalArmorData } from './Item/data-armor-nonmetal.js';
import { geographsData } from './Item/data-geographs.js';
import { golemsData } from './Item/data-golems.js';
import { grimoiresData } from './Item/data-grimoires.js';
import { herbsPotionsData } from './Item/data-herbs-potions.js';
import { generalItemsData } from './Item/data-items-general.js';
import { livingExpensesData } from './Item/data-living-expenses.js';
import { shieldsData } from './Item/data-shields.js';
import { skillItemsData } from './Item/data-skill-items.js';
import { specialInstrumentsData } from './Item/data-special-instruments.js';
import { axeWeaponsData } from './Item/data-weapons-axe.js';
import { bowWeaponsData } from './Item/data-weapons-bow.js';
import { crossbowWeaponsData } from './Item/data-weapons-crossbow.js';
import { firearmWeaponsData } from './Item/data-weapons-firearm.js';
import { flailWeaponsData } from './Item/data-weapons-flail.js';
import { grapplingWeaponsData } from './Item/data-weapons-grappling.js';
import { maceWeaponsData } from './Item/data-weapons-mace.js';
import { spearWeaponsData } from './Item/data-weapons-spear.js';
import { staffWeaponsData } from './Item/data-weapons-staff.js';
import { swordWeaponsData } from './Item/data-weapons-sword.js';
import { throwingWeaponsData } from './Item/data-weapons-throwing.js';
import { warhammerWeaponsData } from './Item/data-weapons-warhammer.js';
import { magitechWeaponData, magitechWeaponCategoryRules } from './Item/data-magitech_weapon.js';
import {
  mountAnimalData,
  mountMythicalData,
  mountMagitechData,
  mountEquipmentData,
} from './Item/data-mounts.js';

export { magitechWeaponCategoryRules };

const asArray = (val) => (Array.isArray(val) ? val : []);
const toTaggedItems = (val, category) =>
  asArray(val).map((item) => ({ ...item, category: item.category || category }));

const allGolemItems = [
  ...asArray(golemsData?.golems),
  ...asArray(golemsData?.enhancements),
];

// ==================== 魔導武器第二型態解說與欄位整合 ====================
const magitechRuleByZhCategory = Object.values(magitechWeaponCategoryRules || {}).reduce((acc, rule) => {
  acc[rule.category] = rule;
  return acc;
}, {});

const formatMagitechWeaponItem = (item) => {
  const rule = magitechRuleByZhCategory[item.category];
  const traitsList = rule?.secondFormCommonTraits || rule?.secondFormTraits || [];
  const secondFormText = traitsList.length > 0
    ? traitsList.map((t) => `【${t.name}】${t.description}`).join('\n')
    : '';

  const fullDescription = [
    rule?.description ? `◆ 機構特徵：${rule.description}` : '',
    secondFormText ? `◆ 第二形態解說：\n${secondFormText}` : '',
  ].filter(Boolean).join('\n\n');

  return {
    ...item,
    subCategory: item.category,
    category: '武器-魔導武器',
    requiredStrength: item.reqStr,
    critical: item.critValue,
    cValue: item.critValue,
    description: item.description || fullDescription,
    effect: item.effect || fullDescription,
    secondFormDescription: secondFormText,
    remarks: [item.remarks, item.isSecondForm ? '第二形態' : ''].filter(Boolean).join(' / ') || '魔動機術／魔導武器',
  };
};

const formattedMagitechWeapons = typeof magitechWeaponData !== 'undefined'
  ? magitechWeaponData.map(formatMagitechWeaponItem)
  : [];

// ==================== 整合導出 allSkillsData ====================
export const allSkillsData = [
  ...(typeof bardSongsData !== 'undefined' ? bardSongsData : []),
  ...(typeof magitechData !== 'undefined' ? magitechData : []),
  ...(typeof sorcererData !== 'undefined' ? sorcererData : []),
  ...(typeof sorceryData !== 'undefined' ? sorceryData : []),
  ...(typeof wizardData !== 'undefined' ? wizardData : []),
  ...(typeof divineData !== 'undefined' ? divineData : []),
  ...(typeof specialDivineSpellsData !== 'undefined' ? specialDivineSpellsData : []),
  ...(typeof fairyData !== 'undefined' ? fairyData : []),
  ...(typeof alchemistData !== 'undefined' ? alchemistData : []),
  ...(typeof bibliomancerSpellsData !== 'undefined' ? bibliomancerSpellsData : []),
  ...(typeof darkhunterData !== 'undefined' ? darkhunterData : []),
  ...(typeof druidData !== 'undefined' ? druidData : []),
  ...(typeof warLeaderData !== 'undefined' ? warLeaderData : []),
  ...(typeof geomancerData !== 'undefined' ? geomancerData : []),
  ...(typeof abyssgazerData !== 'undefined' ? abyssgazerData : []),
  ...(typeof riderData !== 'undefined' ? riderData : []),
  ...(typeof enhancerData !== 'undefined' ? enhancerData : []),
  ...(typeof combatFeatsData !== 'undefined' ? combatFeatsData : []),
  ...(typeof passiveFeatsData !== 'undefined' ? passiveFeatsData : []),
  ...(typeof majorActionFeatsData !== 'undefined' ? majorActionFeatsData : []),
  ...(typeof autoFeatsData !== 'undefined' ? autoFeatsData : []),
  ...(typeof vitalsmithSkillsData !== 'undefined' ? vitalsmithSkillsData : []),
  ...(typeof witchSkillsData !== 'undefined' ? witchSkillsData : []),
  ...(typeof demonData !== 'undefined' ? demonData : []),
  // 道具與裝備陣列
  ...(typeof accessoriesData !== 'undefined' ? accessoriesData : []),
  ...(typeof ammoItemsData !== 'undefined' ? ammoItemsData : []),
  ...(typeof metalArmorData !== 'undefined' ? metalArmorData : []),
  ...(typeof nonmetalArmorData !== 'undefined' ? nonmetalArmorData : []),
  ...(typeof geographsData !== 'undefined' ? geographsData : []),
  ...allGolemItems,
  ...(typeof grimoiresData !== 'undefined' ? grimoiresData : []),
  ...(typeof herbsPotionsData !== 'undefined' ? herbsPotionsData : []),
  ...(typeof generalItemsData !== 'undefined' ? generalItemsData : []),
  ...(typeof livingExpensesData !== 'undefined' ? livingExpensesData : []),
  ...(typeof shieldsData !== 'undefined' ? shieldsData : []),
  ...(typeof skillItemsData !== 'undefined' ? skillItemsData : []),
  ...(typeof specialInstrumentsData !== 'undefined' ? specialInstrumentsData : []),
  ...(typeof axeWeaponsData !== 'undefined' ? axeWeaponsData : []),
  ...(typeof bowWeaponsData !== 'undefined' ? bowWeaponsData : []),
  ...(typeof crossbowWeaponsData !== 'undefined' ? crossbowWeaponsData : []),
  ...(typeof firearmWeaponsData !== 'undefined' ? firearmWeaponsData : []),
  ...(typeof flailWeaponsData !== 'undefined' ? flailWeaponsData : []),
  ...(typeof grapplingWeaponsData !== 'undefined' ? grapplingWeaponsData : []),
  ...(typeof maceWeaponsData !== 'undefined' ? maceWeaponsData : []),
  ...(typeof spearWeaponsData !== 'undefined' ? spearWeaponsData : []),
  ...(typeof staffWeaponsData !== 'undefined' ? staffWeaponsData : []),
  ...(typeof swordWeaponsData !== 'undefined' ? swordWeaponsData : []),
  ...(typeof throwingWeaponsData !== 'undefined' ? throwingWeaponsData : []),
  ...(typeof warhammerWeaponsData !== 'undefined' ? warhammerWeaponsData : []),
  ...formattedMagitechWeapons,
  ...(typeof mountAnimalData !== 'undefined' ? mountAnimalData : []),
  ...(typeof mountMythicalData !== 'undefined' ? mountMythicalData : []),
  ...(typeof mountMagitechData !== 'undefined' ? mountMagitechData : []),
  ...(typeof mountEquipmentData !== 'undefined' ? mountEquipmentData : []),
];

// ==================== 統一標記分類並合併為全域道具陣列 ====================
export const allItemsData = [
  ...(typeof accessoriesData !== 'undefined' ? accessoriesData.map(i => ({ ...i, category: i.category || '飾品裝備' })) : []),
  ...(typeof ammoItemsData !== 'undefined' ? ammoItemsData.map(i => ({ ...i, category: i.category || '彈藥/消耗品' })) : []),
  ...(typeof axeWeaponsData !== 'undefined' ? axeWeaponsData.map(i => ({ ...i, category: i.category || '武器-斧' })) : []),
  ...(typeof bowWeaponsData !== 'undefined' ? bowWeaponsData.map(i => ({ ...i, category: i.category || '武器-弓' })) : []),
  ...(typeof crossbowWeaponsData !== 'undefined' ? crossbowWeaponsData.map(i => ({ ...i, category: i.category || '武器-弩' })) : []),
  ...(typeof flailWeaponsData !== 'undefined' ? flailWeaponsData.map(i => ({ ...i, category: i.category || '武器-連枷' })) : []),
  ...toTaggedItems(allGolemItems, '魔像/強化物件'),
  ...(typeof grapplingWeaponsData !== 'undefined' ? grapplingWeaponsData.map(i => ({ ...i, category: i.category || '武器-格鬥/抓握' })) : []),
  ...(typeof firearmWeaponsData !== 'undefined' ? firearmWeaponsData.map(i => ({ ...i, category: i.category || '武器-魔導槍' })) : []),
  ...formattedMagitechWeapons,
  ...(typeof grimoiresData !== 'undefined' ? grimoiresData.map(i => ({ ...i, category: i.category || '魔導書' })) : []),
  ...(typeof skillItemsData !== 'undefined' ? skillItemsData.map(i => ({ ...i, category: i.category || '技能道具' })) : []),
  ...(typeof specialInstrumentsData !== 'undefined' ? specialInstrumentsData.map(i => ({ ...i, category: i.category || '樂器/吟遊詩人' })) : []),
  ...(typeof generalItemsData !== 'undefined' ? generalItemsData.map(i => ({ ...i, category: i.category || '一般冒險道具' })) : []),
  ...(typeof livingExpensesData !== 'undefined' ? livingExpensesData.map(i => ({ ...i, category: i.category || '生活與交通工具' })) : []),
  ...(typeof maceWeaponsData !== 'undefined' ? maceWeaponsData.map(i => ({ ...i, category: i.category || '武器-鈍器/錘' })) : []),
  ...(typeof metalArmorData !== 'undefined' ? metalArmorData.map(i => ({ ...i, category: i.category || '防具-金屬鎧甲' })) : []),
  ...(typeof nonmetalArmorData !== 'undefined' ? nonmetalArmorData.map(i => ({ ...i, category: i.category || '防具-非金屬鎧甲' })) : []),
  ...(typeof herbsPotionsData !== 'undefined' ? herbsPotionsData.map(i => ({ ...i, category: i.category || '藥水/練金卡片' })) : []),
  ...(typeof shieldsData !== 'undefined' ? shieldsData.map(i => ({ ...i, category: i.category || '防具-盾牌' })) : []),
  ...(typeof spearWeaponsData !== 'undefined' ? spearWeaponsData.map(i => ({ ...i, category: i.category || '武器-槍' })) : []),
  ...(typeof staffWeaponsData !== 'undefined' ? staffWeaponsData.map(i => ({ ...i, category: i.category || '武器-長杖' })) : []),
  ...(typeof swordWeaponsData !== 'undefined' ? swordWeaponsData.map(i => ({ ...i, category: i.category || '武器-劍' })) : []),
  ...(typeof throwingWeaponsData !== 'undefined' ? throwingWeaponsData.map(i => ({ ...i, category: i.category || '武器-投擲' })) : []),
  ...(typeof warhammerWeaponsData !== 'undefined' ? warhammerWeaponsData.map(i => ({ ...i, category: i.category || '武器-戰錘' })) : []),
  ...(typeof geographsData !== 'undefined' ? geographsData.map(i => ({ ...i, category: i.category || '地貌儀' })) : []),
  ...(typeof mountAnimalData !== 'undefined' ? mountAnimalData.map(i => ({ ...i, category: i.category || '騎獸-動物' })) : []),
  ...(typeof mountMythicalData !== 'undefined' ? mountMythicalData.map(i => ({ ...i, category: i.category || '騎獸-幻獸' })) : []),
  ...(typeof mountMagitechData !== 'undefined' ? mountMagitechData.map(i => ({ ...i, category: i.category || '騎獸-魔動機' })) : []),
  ...(typeof mountEquipmentData !== 'undefined' ? mountEquipmentData.map(i => ({ ...i, category: i.category || '騎獸裝備與道具' })) : []),
];