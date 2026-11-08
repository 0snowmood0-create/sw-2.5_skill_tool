// ==================== 各職業技能與魔法資料匯入 ====================
import { bardSongsData } from './data-bards.js';
import { magitechData } from './data-magitech.js';
import { sorcererData } from './data-sorcerer.js';
import { sorceryData } from './data-sorcery.js';
import { wizardData } from './data-wizard.js';
import { divineData } from './data-divine.js';
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
import { combatFeatsData } from './data-combatFeats.js';

// ==================== 道具與裝備資料匯入 (請務必確認 ./Item/ 路徑正確) ====================
import { accessoryItemsData } from './Item/data-accessories.js';
import { ammoItemsData } from './Item/data-ammo.js';
import { axeItemsData } from './Item/data-axes.js';
import { bowItemsData } from './Item/data-bows.js';
import { crossbowItemsData } from './Item/data-crossbows.js';
import { flailItemsData } from './Item/data-flail.js';
import { golemData } from './Item/data-golems.js';
import { grappleItemsData } from './Item/data-grapple.js';
import { gunItemsData } from './Item/data-guns.js';
import { specialItemData } from './Item/data-special-items.js';
import { instrumentItemsData } from './Item/data-instruments.js';
import { itemData } from './Item/data-items.js';
import { livingAndTransitItemsData } from './Item/data-items.js';
import { maceItemsData } from './Item/data-maces.js';
import { metalArmorItemsData } from './Item/data-metal-armors.js';
import { potionItemsData } from './Item/data-potions.js';
import { shieldItemsData } from './Item/data-shields.js';
import { spearItemsData } from './Item/data-spears.js';
import { staffItemsData } from './Item/data-staff.js';
import { swordItemsData } from './Item/data-swords.js';
import { throwingItemsData } from './Item/data-throwing.js';
import { warhammerItemsData } from './Item/data-warhammer.js';
import { geographItemsData } from './Item/data-geographs.js';

// ==================== 整合導出 allSkillsData ====================
export const allSkillsData = [
    ...(typeof bardSongsData !== 'undefined' ? bardSongsData : []),
    ...(typeof magitechData !== 'undefined' ? magitechData : []),
    ...(typeof sorcererData !== 'undefined' ? sorcererData : []),
    ...(typeof sorceryData !== 'undefined' ? sorceryData : []),
    ...(typeof wizardData !== 'undefined' ? wizardData : []),
    ...(typeof divineData !== 'undefined' ? divineData : []),
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
    // 道具陣列
    ...(typeof accessoryItemsData !== 'undefined' ? accessoryItemsData : []),
    ...(typeof ammoItemsData !== 'undefined' ? ammoItemsData : []),
    ...(typeof axeItemsData !== 'undefined' ? axeItemsData : []),
    ...(typeof bowItemsData !== 'undefined' ? bowItemsData : []),
    ...(typeof crossbowItemsData !== 'undefined' ? crossbowItemsData : []),
    ...(typeof flailItemsData !== 'undefined' ? flailItemsData : []),
    ...(typeof golemData !== 'undefined' ? golemData : []),
    ...(typeof grappleItemsData !== 'undefined' ? grappleItemsData : []),
    ...(typeof gunItemsData !== 'undefined' ? gunItemsData : []),
    ...(typeof specialItemData !== 'undefined' ? specialItemData : []),
    ...(typeof instrumentItemsData !== 'undefined' ? instrumentItemsData : []),
    ...(typeof itemData !== 'undefined' ? itemData : []),
    ...(typeof maceItemsData !== 'undefined' ? maceItemsData : []),
    ...(typeof metalArmorItemsData !== 'undefined' ? metalArmorItemsData : []),
    ...(typeof potionItemsData !== 'undefined' ? potionItemsData : []),
    ...(typeof shieldItemsData !== 'undefined' ? shieldItemsData : []),
    ...(typeof spearItemsData !== 'undefined' ? spearItemsData : []),
    ...(typeof staffItemsData !== 'undefined' ? staffItemsData : []),
    ...(typeof swordItemsData !== 'undefined' ? swordItemsData : []),
    ...(typeof throwingItemsData !== 'undefined' ? throwingItemsData : []),
    ...(typeof warhammerItemsData !== 'undefined' ? warhammerItemsData : []),
    ...(typeof geographItemsData !== 'undefined' ? geographItemsData : [])
];

// ==================== 統一標記分類並合併為全域道具陣列 ====================
export const allItemsData = [
    ...(accessoryItemsData || []).map(i => ({ ...i, category: '飾品裝備' })),
    ...(ammoItemsData || []).map(i => ({ ...i, category: '彈藥/消耗品' })),
    ...(axeItemsData || []).map(i => ({ ...i, category: '武器-斧' })),
    ...(bowItemsData || []).map(i => ({ ...i, category: '武器-弓' })),
    ...(crossbowItemsData || []).map(i => ({ ...i, category: '武器-弩' })),
    ...(flailItemsData || []).map(i => ({ ...i, category: '武器-連枷' })),
    ...(golemData || []).map(i => ({ ...i, category: '魔像/強化物件' })),
    ...(grappleItemsData || []).map(i => ({ ...i, category: '武器-格鬥/抓握' })),
    ...(gunItemsData || []).map(i => ({ ...i, category: '武器-魔導槍' })),
    ...(specialItemData || []).map(i => ({ ...i, category: '特殊道具' })),
    ...(instrumentItemsData || []).map(i => ({ ...i, category: '樂器/吟遊詩人' })),
    ...(itemData || []).map(i => ({ ...i, category: '一般冒險道具' })),
    ...(livingAndTransitItemsData || []).map(i => ({ ...i, category: '生活與交通工具' })),
    ...(maceItemsData || []).map(i => ({ ...i, category: '武器-鈍器/錘' })),
    ...(metalArmorItemsData || []).map(i => ({ ...i, category: '防具-金屬鎧甲' })),
    ...(potionItemsData || []).map(i => ({ ...i, category: '藥水/練金卡片' })),
    ...(shieldItemsData || []).map(i => ({ ...i, category: '防具-盾牌' })),
    ...(spearItemsData || []).map(i => ({ ...i, category: '武器-槍' })),
    ...(staffItemsData || []).map(i => ({ ...i, category: '武器-長杖' })),
    ...(swordItemsData || []).map(i => ({ ...i, category: '武器-劍' })),
    ...(throwingItemsData || []).map(i => ({ ...i, category: '武器-投擲' })),
    ...(warhammerItemsData || []).map(i => ({ ...i, category: '武器-戰錘' })),
    ...(geographItemsData || []).map(i => ({ ...i, category: '相導具/相動軌跡' }))
];