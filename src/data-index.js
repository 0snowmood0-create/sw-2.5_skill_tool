import { bardSongsData } from './data-bards.js';
import { magitechData } from './data-magitech.js';
import { sorcererData } from './data-sorcerer.js';
import { sorcerySpellsData } from './data-sorcery.js';
import { wizardSpellsData } from './data-wizard.js';
import { divineSpellsData } from './data-divine.js';
import { specialDivineSpellsData } from './data-divine.js';
import { fairySpellsData } from './data-fairy.js';
import { alchemistData } from './data-alchemist.js';
import { darkHunterSkillsData } from './data-darkhunter.js';
import { druidSkillsData } from './data-druid.js';
import { warLeaderData } from './data-warLeader.js';
import { geomancerPhases }  from './data-geomancer.js';
import { abyssgazerData }  from './data-abyssgazer.js';
import { riderdata }  from './data-rider.js';
import { bibliomancerSpellsData }  from './data-bibliomancer.js';
import { enhancerData }  from './data-enhancer.js';

import { 
  declaredFeatsData, 
  passiveFeatsData, 
  majorActionFeatsData, 
  autoFeatsData 
} from './data-combatFeats.js';

// 聚合所有技能與魔法資料
export const allSkillsData = [
  ...bardSongsData,
  ...magitechData,
  ...sorcererData,
  ...sorcerySpellsData,
  ...wizardSpellsData,
  ...divineSpellsData,
  ...specialDivineSpellsData,
  ...fairySpellsData,
  ...alchemistData,
  ...darkHunterSkillsData,
  ...druidSkillsData,
  ...warLeaderData,
  ...geomancerPhases,
  ...abyssgazerData,
  ...riderdata,
  ...bibliomancerSpellsData,
  ...enhancerData,
  ...declaredFeatsData,
  ...passiveFeatsData,
  ...majorActionFeatsData,
  ...autoFeatsData
];