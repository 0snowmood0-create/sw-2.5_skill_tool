import {
    loadAllCharacters,
    getActiveCharacter,
    setActiveCharacterId,
    saveCharacter,
    createAndSaveCharacter,
    duplicateCharacter,
    deleteCharacter,
    exportCharacterJSON,
    importCharactersFromJSON,
    toCombatantSnapshot
  } from './charSheet.js';
  
  const ABILITY_META = [
    { key: 'dex', label: '器用度 (技)' },
    { key: 'agi', label: '敏捷度 (技)' },
    { key: 'str', label: '筋力 (體)' },
    { key: 'vit', label: '生命力 (體)' },
    { key: 'int', label: '知力 (心)' },
    { key: 'mnd', label: '精神力 (心)' }
  ];
  
  function escapeHtml(str) {
    return String(str ?? '')
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }
  
  function commitChar(char, options = {}) {
    if (!char) return null;
    const saved = saveCharacter(char, options);
    renderCharSheetPage();
    return saved;
  }
  
  function buildPrintableSheetHTML(char) {
    const comp = char.computed || {};
    const der = char.derived || {};
    const tots = comp.abilityTotals || {};
    const mods = comp.abilityMods || {};
  
    const learnedSections = [
      { key: 'spells', title: '魔法' },
      { key: 'songs', title: '咒歌／終律' },
      { key: 'tactics', title: '鼓咆／陣率' },
      { key: 'alchemy', title: '賦術' },
      { key: 'enhancements', title: '練技' },
      { key: 'riding', title: '騎藝' },
      { key: 'items', title: '隨身道具' }
    ]
      .map(g => {
        const list = char.learnedAbilities?.[g.key] || [];
        if (!list.length) return '';
        return `<div><strong>${g.title}：</strong>${list.map(escapeHtml).join('、')}</div>`;
      })
      .filter(Boolean)
      .join('');
  
    return `<!DOCTYPE html>
  <html lang="zh-Hant">
  <head>
    <meta charset="UTF-8">
    <title>SW2.5 角色卡 - ${escapeHtml(char.meta.name)}</title>
    <style>
      @page { size: A4 portrait; margin: 12mm; }
      * { box-sizing: border-box; }
      body {
        font-family: "Noto Sans TC", "Microsoft JhengHei", sans-serif;
        color: #111;
        background: #fff;
        font-size: 11pt;
        line-height: 1.4;
        margin: 0;
        padding: 16px;
      }
      .no-print {
        margin-bottom: 12px;
        padding: 8px 12px;
        background: #f4f4f5;
        border: 1px solid #d4d4d8;
        border-radius: 6px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 10pt;
      }
      .no-print button {
        padding: 6px 14px;
        background: #18181b;
        color: #fff;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        font-weight: bold;
      }
      @media print {
        .no-print { display: none; }
        body { padding: 0; }
      }
      h1 {
        font-size: 16pt;
        margin: 0 0 8px 0;
        padding-bottom: 4px;
        border-bottom: 2px solid #111;
        display: flex;
        justify-content: space-between;
        align-items: baseline;
      }
      h1 span { font-size: 10pt; font-weight: normal; color: #444; }
      h2 {
        font-size: 11.5pt;
        margin: 12px 0 6px 0;
        padding: 3px 8px;
        background: #e4e4e7;
        border-left: 4px solid #18181b;
      }
      table {
        width: 100%;
        border-collapse: collapse;
        margin-bottom: 8px;
        font-size: 10pt;
      }
      th, td {
        border: 1px solid #52525b;
        padding: 5px 7px;
        text-align: left;
        vertical-align: top;
      }
      th {
        background: #f4f4f5;
        font-weight: bold;
        text-align: center;
      }
      .center { text-align: center; }
      .mono { font-family: Consolas, monospace; }
      .grid-2 {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 10px;
      }
      .box {
        border: 1px solid #52525b;
        padding: 8px;
        min-height: 54px;
        font-size: 10pt;
      }
    </style>
  </head>
  <body>
    <div class="no-print">
      <span>此頁面已針對 A4 紙張排版，可直接列印或於印表機選擇「另存為 PDF」。</span>
      <button onclick="window.print()">立即列印 / 另存 PDF</button>
    </div>
  
    <h1>
      SW2.5 冒險者角色卡：${escapeHtml(char.meta.name)}
      <span>種族：${escapeHtml(char.meta.race)} ｜ 冒險者等級：Lv ${comp.adventurerLevel ?? 1}</span>
    </h1>
  
    <table>
      <tr>
        <th>持有經驗點</th>
        <td class="mono center">${(char.meta.expTotal || 0).toLocaleString()}</td>
        <th>已用／剩餘經驗</th>
        <td class="mono center">${(char.meta.expUsed || 0).toLocaleString()} / ${(comp.expRemaining ?? 0).toLocaleString()}</td>
        <th>名譽點</th>
        <td class="mono center">${char.meta.honorPoints || 0}</td>
        <th>所持金</th>
        <td class="mono center">${(char.meta.moneyG || 0).toLocaleString()} G</td>
      </tr>
    </table>
  
    <h2>六大能力值與修正</h2>
    <table>
      <tr>
        <th>能力</th>
        <th>基值</th>
        <th>成長</th>
        <th>其他</th>
        <th>能力值總和</th>
        <th>能力修正</th>
      </tr>
      ${ABILITY_META.map(m => {
        const ab = char.abilities[m.key] || { base: 0, growth: 0, misc: 0 };
        return `
          <tr>
            <td><strong>${m.label}</strong></td>
            <td class="mono center">${ab.base}</td>
            <td class="mono center">${ab.growth}</td>
            <td class="mono center">${ab.misc}</td>
            <td class="mono center"><strong>${tots[m.key] ?? 0}</strong></td>
            <td class="mono center"><strong>+${mods[m.key] ?? 0}</strong></td>
          </tr>
        `;
      }).join('')}
    </table>
  
    <h2>生命力／精神力與行動數值</h2>
    <table>
      <tr>
        <th>最大 HP</th>
        <th>目前 HP</th>
        <th>最大 MP</th>
        <th>目前 MP</th>
        <th>通常／全力移動</th>
        <th>先制值</th>
        <th>生命抵抗力</th>
        <th>精神抵抗力</th>
      </tr>
      <tr>
        <td class="mono center"><strong>${der.maxHp ?? 0}</strong></td>
        <td class="mono center">${der.currentHp ?? 0}</td>
        <td class="mono center"><strong>${der.maxMp ?? 0}</strong></td>
        <td class="mono center">${der.currentMp ?? 0}</td>
        <td class="mono center">${der.moveNormal ?? 0}m / ${der.moveFull ?? 0}m</td>
        <td class="mono center">${der.initiative ?? 0}</td>
        <td class="mono center">${der.lifeResist ?? 0}</td>
        <td class="mono center">${der.mindResist ?? 0}</td>
      </tr>
    </table>
  
    <div class="grid-2">
      <div>
        <h2>習得技能</h2>
        <table>
          <tr>
            <th>技能名稱</th>
            <th>經驗表</th>
            <th>等級</th>
            <th>魔力</th>
          </tr>
          ${(char.skills || []).map(sk => `
            <tr>
              <td>${escapeHtml(sk.name)}</td>
              <td class="center">${sk.expTable}</td>
              <td class="mono center"><strong>${sk.level}</strong></td>
              <td class="mono center">${sk.magicPower || '-'}</td>
            </tr>
          `).join('')}
        </table>
      </div>
  
      <div>
        <h2>戰鬥特技</h2>
        <div class="box">
          ${char.feats?.length ? char.feats.map(escapeHtml).join('、') : '（無）'}
        </div>
  
        <h2>魔法／練技／咒歌／道具</h2>
        <div class="box">
          ${learnedSections || '（無）'}
        </div>
      </div>
    </div>
  
    <h2>武器與防具裝備</h2>
    <table>
      <tr>
        <th>裝備名稱</th>
        <th>分類／用法</th>
        <th>必筋</th>
        <th>命中／迴避修正</th>
        <th>威力／防護點</th>
        <th>C值</th>
      </tr>
      ${(char.equipment?.weapons || []).map(w => `
        <tr>
          <td><strong>${escapeHtml(w.name)}</strong></td>
          <td class="center">${escapeHtml(w.category)} (${escapeHtml(w.usage)})</td>
          <td class="mono center">${w.reqStr}</td>
          <td class="mono center">${w.accMod >= 0 ? '+' + w.accMod : w.accMod}</td>
          <td class="mono center">威力 ${w.power}</td>
          <td class="mono center">${w.crit}</td>
        </tr>
      `).join('')}
      ${char.equipment?.armor?.name ? `
        <tr>
          <td><strong>${escapeHtml(char.equipment.armor.name)}</strong></td>
          <td class="center">${escapeHtml(char.equipment.armor.category)}</td>
          <td class="mono center">${char.equipment.armor.reqStr}</td>
          <td class="mono center">迴避 ${char.equipment.armor.evasionMod}</td>
          <td class="mono center">防護 ${char.equipment.armor.defense}</td>
          <td class="center">-</td>
        </tr>
      ` : ''}
      ${char.equipment?.shield?.name ? `
        <tr>
          <td><strong>${escapeHtml(char.equipment.shield.name)}</strong></td>
          <td class="center">${escapeHtml(char.equipment.shield.category)}</td>
          <td class="mono center">${char.equipment.shield.reqStr}</td>
          <td class="mono center">迴避 ${char.equipment.shield.evasionMod}</td>
          <td class="mono center">防護 ${char.equipment.shield.defense}</td>
          <td class="center">-</td>
        </tr>
      ` : ''}
      ${!(char.equipment?.weapons?.length || char.equipment?.armor?.name || char.equipment?.shield?.name)
        ? '<tr><td colspan="6" class="center">尚未登錄裝備</td></tr>'
        : ''}
    </table>
  
    <h2>角色備註／背景設定</h2>
    <div class="box">${escapeHtml(char.meta.notes || ' ')}</div>
  </body>
  </html>`;
  }
  
  function classifyCardPayload(payload) {
    const data = payload?.data || {};
    if (payload.itemType === 'feat') {
      return { bucket: 'feat', label: data.name };
    }
    if (payload.itemType === 'item') {
      const cat = data.category || '';
      const isWeapon =
        cat.includes('武器') ||
        ['劍', '槍', '斧', '打擊', '拋射', '格鬥', '扔擲', '魔動機槍'].includes(cat);
      return {
        bucket: isWeapon ? 'weapon' : 'item',
        label: data.name
      };
    }
    const cat = data.category || data.type || '';
    if (cat === '咒歌' || cat === '終律') return { bucket: 'songs', label: data.name };
    if (cat === '鼓咆' || cat === '陣率' || cat === '軍師') return { bucket: 'tactics', label: data.name };
    if (cat === '賦術') return { bucket: 'alchemy', label: data.name };
    if (cat === '練技' || cat === '練體士') return { bucket: 'enhancements', label: data.name };
    if (cat === '騎藝' || cat === '騎手') return { bucket: 'riding', label: data.name };
    return { bucket: 'spells', label: data.name };
  }
  
  export function addCardToActiveCharacter(encodedPayload) {
    const payload = JSON.parse(decodeURIComponent(encodedPayload));
    const char = getActiveCharacter();
    if (!char) return;
  
    const data = payload.data || {};
    const info = classifyCardPayload(payload);
  
    if (info.bucket === 'feat') {
      if (!char.feats.includes(data.name)) {
        char.feats.push(data.name);
      }
    } else if (info.bucket === 'weapon') {
      const exists = char.equipment.weapons.some(w => w.name === data.name);
      if (!exists) {
        char.equipment.weapons.push({
          name: data.name || '',
          category: data.category || '武器',
          usage: data.usage || '1H',
          reqStr: parseInt(data.req_str, 10) || 0,
          accMod: parseInt(data.acc, 10) || 0,
          power: parseInt(data.power, 10) || 0,
          crit: parseInt(data.crit, 10) || 10,
          dmgMod: 0,
          equipped: true
        });
      }
    } else if (info.bucket === 'item') {
      const cat = data.category || '';
      if (cat.includes('鎧甲') || cat.includes('金屬鎧') || cat.includes('非金屬鎧')) {
        char.equipment.armor = {
          name: data.name || '',
          category: cat,
          reqStr: parseInt(data.req_str, 10) || 0,
          evasionMod: parseInt(data.evasion, 10) || 0,
          defense: parseInt(data.defense, 10) || 0,
          equipped: true
        };
      } else if (cat.includes('盾')) {
        char.equipment.shield = {
          name: data.name || '',
          category: cat,
          reqStr: parseInt(data.req_str, 10) || 0,
          evasionMod: parseInt(data.evasion, 10) || 0,
          defense: parseInt(data.defense, 10) || 0,
          equipped: true
        };
      } else {
        const list = char.learnedAbilities.items || (char.learnedAbilities.items = []);
        if (!list.includes(data.name)) list.push(data.name);
      }
    } else {
      const list = char.learnedAbilities[info.bucket] || (char.learnedAbilities[info.bucket] = []);
      if (!list.includes(data.name)) {
        list.push(data.name);
      }
    }
  
    saveCharacter(char);
  
    document.querySelectorAll(`[data-char-add-id="${CSS.escape(payload.id)}"]`).forEach(btn => {
      const prev = btn.innerHTML;
      btn.innerHTML = '<i class="fa-solid fa-check text-emerald-400"></i> 已加入';
      setTimeout(() => {
        btn.innerHTML = prev;
      }, 1200);
    });
  }
  
  export function initCharSheetQuickAddObserver() {
    const injectButtonsIntoContainer = (containerId) => {
      const container = document.getElementById(containerId);
      if (!container) return;
  
      container.querySelectorAll('[data-pin-id]').forEach(pinBtn => {
        if (pinBtn.nextElementSibling?.classList.contains('char-quick-add-btn')) return;
  
        const onclickAttr = pinBtn.getAttribute('onclick') || '';
        const match = onclickAttr.match(/togglePinDataItem\('([^']+)'\)/);
        if (!match) return;
  
        const encodedPayload = match[1];
        let decodedId = '';
        try {
          decodedId = JSON.parse(decodeURIComponent(encodedPayload)).id || '';
        } catch {}
  
        const addBtn = document.createElement('button');
        addBtn.type = 'button';
        addBtn.setAttribute('data-char-add-id', decodedId);
        addBtn.setAttribute('onclick', `addCardToActiveCharacter('${encodedPayload}')`);
        addBtn.className = 'char-quick-add-btn ml-1.5 text-xs px-2.5 py-1 rounded-lg bg-emerald-950/70 hover:bg-emerald-900 text-emerald-300 border border-emerald-700/60 transition-all shrink-0';
        addBtn.innerHTML = '<i class="fa-solid fa-user-plus"></i> 角色卡';
  
        pinBtn.insertAdjacentElement('afterend', addBtn);
      });
    };
  
    const run = () => {
      injectButtonsIntoContainer('bard-list');
      injectButtonsIntoContainer('item-list');
    };
  
    run();
    const observer = new MutationObserver(run);
    observer.observe(document.body, { childList: true, subtree: true });
  }
  
  window.addCardToActiveCharacter = addCardToActiveCharacter;
  window.renderCharSheetPage = renderCharSheetPage;
  
  window.csSwitchCharacter = (id) => {
    setActiveCharacterId(id);
    renderCharSheetPage();
  };
  
  window.csCreateCharacter = () => {
    const nameInput = document.getElementById('cs-new-name');
    const name = (nameInput?.value || '').trim() || '新冒險者';
    createAndSaveCharacter({ meta: { name } });
    renderCharSheetPage();
  };
  
  window.csDuplicateCharacter = () => {
    const char = getActiveCharacter();
    if (!char) return;
    duplicateCharacter(char.id);
    renderCharSheetPage();
  };
  
  window.csDeleteCharacter = () => {
    const char = getActiveCharacter();
    if (!char) return;
    if (!confirm(`確定要刪除角色「${char.meta.name}」嗎？`)) return;
    deleteCharacter(char.id);
    renderCharSheetPage();
  };
  
  window.csPrintCharacterSheet = () => {
    const char = getActiveCharacter();
    if (!char) return;
    const html = buildPrintableSheetHTML(char);
    const win = window.open('', '_blank', 'width=900,height=1100');
    if (!win) {
      alert('請允許瀏覽器開啟彈出視窗以進行列印。');
      return;
    }
    win.document.open();
    win.document.write(html);
    win.document.close();
    win.focus();
    setTimeout(() => win.print(), 250);
  };
  
  window.csExportPrintableHTML = () => {
    const char = getActiveCharacter();
    if (!char) return;
    const html = buildPrintableSheetHTML(char);
    const blob = new Blob([html], { type: 'text/html;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `SW25_列印角色卡_${char.meta.name || char.id}.html`;
    a.click();
    URL.revokeObjectURL(url);
  };
  
  window.csExportCurrentJSON = () => {
    const char = getActiveCharacter();
    if (!char) return;
    const jsonStr = exportCharacterJSON(char.id);
    const blob = new Blob([jsonStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `SW25_角色卡_${char.meta.name || char.id}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };
  
  window.csImportJSON = (event) => {
    const file = event.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = e => {
      try {
        importCharactersFromJSON(e.target.result, { merge: true });
        renderCharSheetPage();
        alert('角色卡匯入完成！');
      } catch (err) {
        alert(`匯入失敗：${err.message}`);
      }
    };
    reader.readAsText(file);
  };
  
  window.csUpdateMeta = (field, value) => {
    const char = getActiveCharacter();
    if (!char) return;
    const numFields = ['expTotal', 'honorPoints', 'moneyG'];
    char.meta[field] = numFields.includes(field) ? (Number(value) || 0) : value;
    commitChar(char);
  };
  
  window.csUpdateAbility = (abKey, part, value) => {
    const char = getActiveCharacter();
    if (!char) return;
    char.abilities[abKey][part] = Number(value) || 0;
    commitChar(char, { syncMaxDelta: true });
  };
  
  window.csAdjustPool = (poolKey, delta) => {
    const char = getActiveCharacter();
    if (!char) return;
    if (poolKey === 'hp') {
      char.derived.currentHp = Math.max(0, Math.min(char.derived.maxHp, (char.derived.currentHp || 0) + delta));
    } else if (poolKey === 'mp') {
      char.derived.currentMp = Math.max(0, Math.min(char.derived.maxMp, (char.derived.currentMp || 0) + delta));
    }
    commitChar(char);
  };
  
  window.csAddSkill = () => {
    const char = getActiveCharacter();
    if (!char) return;
    char.skills.push({ name: '新技能', expTable: 'B', level: 1, magicPower: 0 });
    commitChar(char, { syncMaxDelta: true });
  };
  
  window.csUpdateSkill = (index, field, value) => {
    const char = getActiveCharacter();
    if (!char || !char.skills[index]) return;
    if (field === 'level') {
      char.skills[index].level = Math.max(0, Math.min(15, parseInt(value, 10) || 0));
    } else {
      char.skills[index][field] = value;
    }
    commitChar(char, { syncMaxDelta: true });
  };
  
  window.csRemoveSkill = (index) => {
    const char = getActiveCharacter();
    if (!char) return;
    char.skills.splice(index, 1);
    commitChar(char, { syncMaxDelta: true });
  };
  
  window.csRemoveFeat = (index) => {
    const char = getActiveCharacter();
    if (!char) return;
    char.feats.splice(index, 1);
    commitChar(char);
  };
  
  window.csRemoveLearned = (bucket, index) => {
    const char = getActiveCharacter();
    if (!char || !Array.isArray(char.learnedAbilities[bucket])) return;
    char.learnedAbilities[bucket].splice(index, 1);
    commitChar(char);
  };
  
  window.csRemoveWeapon = (index) => {
    const char = getActiveCharacter();
    if (!char) return;
    char.equipment.weapons.splice(index, 1);
    commitChar(char);
  };
  
  window.csCopyCombatSnapshot = () => {
    const char = getActiveCharacter();
    if (!char) return;
    const snap = toCombatantSnapshot(char.id);
    window.lastCombatantSnapshot = snap;
    navigator.clipboard?.writeText(JSON.stringify(snap, null, 2)).catch(() => {});
    alert(`已產生「${snap.name}」戰鬥快照並複製 JSON（也已存於 window.lastCombatantSnapshot）。`);
  };
  
  export function renderCharSheetPage() {
    const container = document.getElementById('rules-container');
    if (!container) return;
  
    const allChars = loadAllCharacters();
    const char = getActiveCharacter();
    const comp = char.computed || {};
    const der = char.derived || {};
  
    const learnedGroups = [
      { key: 'spells', title: '魔法' },
      { key: 'songs', title: '咒歌／終律' },
      { key: 'tactics', title: '鼓咆／陣率' },
      { key: 'alchemy', title: '賦術' },
      { key: 'enhancements', title: '練技' },
      { key: 'riding', title: '騎藝' },
      { key: 'items', title: '隨身道具' }
    ];
  
    container.innerHTML = `
      <div class="space-y-5">
        <div class="bg-zinc-900 border border-amber-500/30 rounded-xl p-4 shadow-lg flex flex-wrap items-center justify-between gap-3">
          <div class="flex flex-wrap items-center gap-2">
            <span class="text-xs text-zinc-400 font-medium">目前角色：</span>
            <select onchange="csSwitchCharacter(this.value)" class="bg-zinc-950 border border-zinc-700 rounded-lg px-3 py-1.5 text-sm text-amber-300 font-bold focus:outline-none focus:border-amber-500">
              ${allChars.map(c => `<option value="${escapeHtml(c.id)}" ${c.id === char.id ? 'selected' : ''}>${escapeHtml(c.meta.name)} (${escapeHtml(c.meta.race)} / Lv${c.computed?.adventurerLevel ?? 1})</option>`).join('')}
            </select>
  
            <input type="text" id="cs-new-name" placeholder="新角色名稱" class="bg-zinc-950 border border-zinc-700 rounded-lg px-2.5 py-1.5 text-xs text-zinc-200 w-32 focus:outline-none focus:border-amber-500">
            <button type="button" onclick="csCreateCharacter()" class="px-3 py-1.5 rounded-lg bg-amber-600 hover:bg-amber-500 text-zinc-950 text-xs font-bold transition-colors">
              <i class="fa-solid fa-plus mr-1"></i>新增
            </button>
            <button type="button" onclick="csDuplicateCharacter()" class="px-2.5 py-1.5 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-200 border border-zinc-700 text-xs">
              複製
            </button>
            <button type="button" onclick="csDeleteCharacter()" class="px-2.5 py-1.5 rounded-lg bg-red-950/60 hover:bg-red-900/60 text-red-300 border border-red-800/60 text-xs">
              刪除
            </button>
          </div>
  
          <div class="flex flex-wrap items-center gap-2 text-xs">
            <button type="button" onclick="csPrintCharacterSheet()" class="px-3 py-1.5 rounded-lg bg-amber-500/20 hover:bg-amber-500/30 text-amber-300 border border-amber-500/50 font-bold">
              <i class="fa-solid fa-print mr-1"></i>列印 / 存 PDF
            </button>
            <button type="button" onclick="csExportPrintableHTML()" class="px-3 py-1.5 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-200 border border-zinc-700">
              <i class="fa-solid fa-file-code mr-1"></i>匯出列印檔
            </button>
            <button type="button" onclick="csCopyCombatSnapshot()" class="px-3 py-1.5 rounded-lg bg-cyan-950/70 hover:bg-cyan-900 text-cyan-300 border border-cyan-700/60">
              <i class="fa-solid fa-swords mr-1"></i>戰鬥快照
            </button>
            <button type="button" onclick="csExportCurrentJSON()" class="px-3 py-1.5 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-emerald-300 border border-zinc-700">
              <i class="fa-solid fa-download mr-1"></i>匯出 JSON
            </button>
            <label class="px-3 py-1.5 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-amber-300 border border-zinc-700 cursor-pointer">
              <i class="fa-solid fa-upload mr-1"></i>匯入 JSON
              <input type="file" accept=".json" onchange="csImportJSON(event)" class="hidden">
            </label>
          </div>
        </div>
  
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-4">
          <div class="lg:col-span-6 bg-zinc-900 border border-zinc-800 rounded-xl p-4 space-y-3 text-xs">
            <h3 class="text-sm font-bold text-amber-400 border-b border-zinc-800 pb-2">基礎資訊與資源</h3>
            <div class="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
              <div>
                <label class="text-zinc-500 block mb-1">角色名稱</label>
                <input type="text" value="${escapeHtml(char.meta.name)}" onchange="csUpdateMeta('name', this.value)" class="w-full bg-zinc-950 border border-zinc-700 rounded px-2.5 py-1.5 text-zinc-100 font-bold">
              </div>
              <div>
                <label class="text-zinc-500 block mb-1">種族</label>
                <input type="text" value="${escapeHtml(char.meta.race)}" onchange="csUpdateMeta('race', this.value)" class="w-full bg-zinc-950 border border-zinc-700 rounded px-2.5 py-1.5 text-zinc-100">
              </div>
              <div>
                <label class="text-zinc-500 block mb-1">持有經驗點</label>
                <input type="number" step="500" value="${char.meta.expTotal}" onchange="csUpdateMeta('expTotal', this.value)" class="w-full bg-zinc-950 border border-zinc-700 rounded px-2.5 py-1.5 text-amber-300 font-mono font-bold">
              </div>
              <div>
                <label class="text-zinc-500 block mb-1">名譽點</label>
                <input type="number" value="${char.meta.honorPoints}" onchange="csUpdateMeta('honorPoints', this.value)" class="w-full bg-zinc-950 border border-zinc-700 rounded px-2.5 py-1.5 text-zinc-200 font-mono">
              </div>
              <div>
                <label class="text-zinc-500 block mb-1">所持金 (G)</label>
                <input type="number" step="100" value="${char.meta.moneyG}" onchange="csUpdateMeta('moneyG', this.value)" class="w-full bg-zinc-950 border border-zinc-700 rounded px-2.5 py-1.5 text-emerald-300 font-mono">
              </div>
              <div class="bg-zinc-950 border border-zinc-800 rounded px-2.5 py-1.5 flex flex-col justify-center">
                <span class="text-zinc-500">剩餘經驗 / 冒險者Lv</span>
                <span class="font-mono font-bold ${(comp.expRemaining ?? 0) < 0 ? 'text-red-400' : 'text-cyan-300'}">${(comp.expRemaining ?? 0).toLocaleString()} / Lv ${comp.adventurerLevel ?? 1}</span>
              </div>
            </div>
            <div>
              <label class="text-zinc-500 block mb-1">角色備註／背景</label>
              <textarea rows="2" onchange="csUpdateMeta('notes', this.value)" class="w-full bg-zinc-950 border border-zinc-700 rounded px-2.5 py-1.5 text-zinc-300">${escapeHtml(char.meta.notes)}</textarea>
            </div>
          </div>
  
          <div class="lg:col-span-6 bg-zinc-900 border border-zinc-800 rounded-xl p-4 space-y-3 text-xs">
            <h3 class="text-sm font-bold text-amber-400 border-b border-zinc-800 pb-2">生命力／精神力與衍生數值</h3>
            <div class="grid grid-cols-2 gap-3">
              <div class="bg-zinc-950 border border-zinc-800 rounded-lg p-3 space-y-2">
                <div class="flex justify-between items-center">
                  <span class="text-zinc-400 font-bold">HP</span>
                  <span class="font-mono text-sm font-extrabold text-emerald-400">${der.currentHp} / ${der.maxHp}</span>
                </div>
                <div class="flex gap-1.5">
                  <button type="button" onclick="csAdjustPool('hp', -5)" class="flex-1 py-1 rounded bg-red-950/70 hover:bg-red-900 text-red-300 border border-red-800/60 font-mono">-5</button>
                  <button type="button" onclick="csAdjustPool('hp', -1)" class="flex-1 py-1 rounded bg-red-950/50 hover:bg-red-900 text-red-300 border border-red-800/50 font-mono">-1</button>
                  <button type="button" onclick="csAdjustPool('hp', 1)" class="flex-1 py-1 rounded bg-emerald-950/50 hover:bg-emerald-900 text-emerald-300 border border-emerald-800/50 font-mono">+1</button>
                  <button type="button" onclick="csAdjustPool('hp', 5)" class="flex-1 py-1 rounded bg-emerald-950/70 hover:bg-emerald-900 text-emerald-300 border border-emerald-800/60 font-mono">+5</button>
                </div>
              </div>
  
              <div class="bg-zinc-950 border border-zinc-800 rounded-lg p-3 space-y-2">
                <div class="flex justify-between items-center">
                  <span class="text-zinc-400 font-bold">MP</span>
                  <span class="font-mono text-sm font-extrabold text-sky-400">${der.currentMp} / ${der.maxMp}</span>
                </div>
                <div class="flex gap-1.5">
                  <button type="button" onclick="csAdjustPool('mp', -5)" class="flex-1 py-1 rounded bg-red-950/70 hover:bg-red-900 text-red-300 border border-red-800/60 font-mono">-5</button>
                  <button type="button" onclick="csAdjustPool('mp', -1)" class="flex-1 py-1 rounded bg-red-950/50 hover:bg-red-900 text-red-300 border border-red-800/50 font-mono">-1</button>
                  <button type="button" onclick="csAdjustPool('mp', 1)" class="flex-1 py-1 rounded bg-sky-950/50 hover:bg-sky-900 text-sky-300 border border-sky-800/50 font-mono">+1</button>
                  <button type="button" onclick="csAdjustPool('mp', 5)" class="flex-1 py-1 rounded bg-sky-950/70 hover:bg-sky-900 text-sky-300 border border-sky-800/60 font-mono">+5</button>
                </div>
              </div>
            </div>
  
            <div class="grid grid-cols-5 gap-2 text-center">
              <div class="bg-zinc-950 border border-zinc-800 rounded-lg p-2">
                <div class="text-[11px] text-zinc-500">通常移動</div>
                <div class="font-mono font-bold text-amber-300">${der.moveNormal}m</div>
              </div>
              <div class="bg-zinc-950 border border-zinc-800 rounded-lg p-2">
                <div class="text-[11px] text-zinc-500">全力移動</div>
                <div class="font-mono font-bold text-amber-300">${der.moveFull}m</div>
              </div>
              <div class="bg-zinc-950 border border-zinc-800 rounded-lg p-2">
                <div class="text-[11px] text-zinc-500">先制值</div>
                <div class="font-mono font-bold text-cyan-300">${der.initiative}</div>
              </div>
              <div class="bg-zinc-950 border border-zinc-800 rounded-lg p-2">
                <div class="text-[11px] text-zinc-500">生命抵抗</div>
                <div class="font-mono font-bold text-emerald-300">${der.lifeResist}</div>
              </div>
              <div class="bg-zinc-950 border border-zinc-800 rounded-lg p-2">
                <div class="text-[11px] text-zinc-500">精神抵抗</div>
                <div class="font-mono font-bold text-purple-300">${der.mindResist}</div>
              </div>
            </div>
          </div>
        </div>
  
        <div class="bg-zinc-900 border border-zinc-800 rounded-xl p-4 space-y-3 text-xs">
          <h3 class="text-sm font-bold text-amber-400 border-b border-zinc-800 pb-2">六大能力值（基值 + 成長 + 其他 → 總和／修正）</h3>
          <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2.5">
            ${ABILITY_META.map(m => {
              const ab = char.abilities[m.key];
              const total = comp.abilityTotals?.[m.key] ?? 0;
              const mod = comp.abilityMods?.[m.key] ?? 0;
              return `
                <div class="bg-zinc-950 border border-zinc-800 rounded-lg p-2.5 space-y-2">
                  <div class="flex justify-between items-center font-bold">
                    <span class="text-zinc-300">${m.label}</span>
                    <span class="text-amber-400 font-mono">${total} (<span class="text-cyan-300">+${mod}</span>)</span>
                  </div>
                  <div class="grid grid-cols-3 gap-1 text-[11px]">
                    <div>
                      <span class="text-zinc-500 block">基值</span>
                      <input type="number" value="${ab.base}" onchange="csUpdateAbility('${m.key}', 'base', this.value)" class="w-full bg-zinc-900 border border-zinc-700 rounded px-1.5 py-1 text-zinc-200 font-mono text-center">
                    </div>
                    <div>
                      <span class="text-zinc-500 block">成長</span>
                      <input type="number" value="${ab.growth}" onchange="csUpdateAbility('${m.key}', 'growth', this.value)" class="w-full bg-zinc-900 border border-zinc-700 rounded px-1.5 py-1 text-zinc-200 font-mono text-center">
                    </div>
                    <div>
                      <span class="text-zinc-500 block">其他</span>
                      <input type="number" value="${ab.misc}" onchange="csUpdateAbility('${m.key}', 'misc', this.value)" class="w-full bg-zinc-900 border border-zinc-700 rounded px-1.5 py-1 text-zinc-200 font-mono text-center">
                    </div>
                  </div>
                </div>
              `;
            }).join('')}
          </div>
        </div>
  
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-4 text-xs">
          <div class="lg:col-span-5 bg-zinc-900 border border-zinc-800 rounded-xl p-4 space-y-3">
            <div class="flex justify-between items-center border-b border-zinc-800 pb-2">
              <h3 class="text-sm font-bold text-amber-400">技能等級（已用經驗：${(char.meta.expUsed || 0).toLocaleString()}）</h3>
              <button type="button" onclick="csAddSkill()" class="px-2.5 py-1 rounded bg-zinc-800 hover:bg-zinc-700 text-amber-300 border border-zinc-700">
                <i class="fa-solid fa-plus mr-1"></i>新增技能
              </button>
            </div>
            <div class="space-y-2">
              ${char.skills.map((sk, idx) => `
                <div class="grid grid-cols-12 gap-1.5 items-center bg-zinc-950 border border-zinc-800 rounded-lg p-2">
                  <input type="text" value="${escapeHtml(sk.name)}" onchange="csUpdateSkill(${idx}, 'name', this.value)" class="col-span-5 bg-zinc-900 border border-zinc-700 rounded px-2 py-1 text-zinc-100">
                  <select onchange="csUpdateSkill(${idx}, 'expTable', this.value)" class="col-span-2 bg-zinc-900 border border-zinc-700 rounded px-1 py-1 text-amber-300 font-mono">
                    <option value="A" ${sk.expTable === 'A' ? 'selected' : ''}>A表</option>
                    <option value="B" ${sk.expTable === 'B' ? 'selected' : ''}>B表</option>
                  </select>
                  <input type="number" min="0" max="15" value="${sk.level}" onchange="csUpdateSkill(${idx}, 'level', this.value)" class="col-span-2 bg-zinc-900 border border-zinc-700 rounded px-1.5 py-1 text-cyan-300 font-mono font-bold text-center">
                  <span class="col-span-2 text-center font-mono text-purple-300" title="魔力值">魔${sk.magicPower || 0}</span>
                  <button type="button" onclick="csRemoveSkill(${idx})" class="col-span-1 text-zinc-500 hover:text-red-400 text-center">
                    <i class="fa-solid fa-xmark"></i>
                  </button>
                </div>
              `).join('')}
            </div>
          </div>
  
          <div class="lg:col-span-7 bg-zinc-900 border border-zinc-800 rounded-xl p-4 space-y-4">
            <h3 class="text-sm font-bold text-amber-400 border-b border-zinc-800 pb-2">已加入的戰鬥特技、技能與武器</h3>
  
            <div>
              <div class="text-zinc-400 font-bold mb-1.5">戰鬥特技（${char.feats.length}）</div>
              <div class="flex flex-wrap gap-1.5">
                ${char.feats.length
                  ? char.feats.map((f, i) => `
                    <span class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-zinc-950 border border-amber-500/30 text-amber-200">
                      ${escapeHtml(f)}
                      <button type="button" onclick="csRemoveFeat(${i})" class="text-zinc-500 hover:text-red-400"><i class="fa-solid fa-xmark"></i></button>
                    </span>
                  `).join('')
                  : '<span class="text-zinc-500">尚未加入特技；可在「技能檢索」點擊卡片上的「角色卡」按鈕加入。</span>'}
              </div>
            </div>
  
            <div>
              <div class="text-zinc-400 font-bold mb-1.5">武器裝備（${char.equipment.weapons.length}）</div>
              <div class="space-y-1.5">
                ${char.equipment.weapons.length
                  ? char.equipment.weapons.map((w, i) => `
                    <div class="flex justify-between items-center bg-zinc-950 border border-zinc-800 rounded-lg px-3 py-1.5">
                      <span><strong class="text-cyan-300">${escapeHtml(w.name)}</strong> <span class="text-zinc-500">(${escapeHtml(w.usage)} / 必力${w.reqStr} / 威力${w.power} / C${w.crit})</span></span>
                      <button type="button" onclick="csRemoveWeapon(${i})" class="text-zinc-500 hover:text-red-400"><i class="fa-solid fa-xmark"></i></button>
                    </div>
                  `).join('')
                  : '<span class="text-zinc-500">尚未加入武器；可在「道具檢索」點擊武器卡片上的「角色卡」按鈕加入。</span>'}
              </div>
            </div>
  
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
              ${learnedGroups.map(g => {
                const arr = char.learnedAbilities?.[g.key] || [];
                if (!arr.length) return '';
                return `
                  <div class="bg-zinc-950 border border-zinc-800 rounded-lg p-2.5">
                    <div class="text-zinc-400 font-bold mb-1">${g.title}（${arr.length}）</div>
                    <div class="flex flex-wrap gap-1">
                      ${arr.map((name, idx) => `
                        <span class="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-zinc-900 border border-zinc-700 text-zinc-200">
                          ${escapeHtml(name)}
                          <button type="button" onclick="csRemoveLearned('${g.key}', ${idx})" class="text-zinc-500 hover:text-red-400"><i class="fa-solid fa-xmark"></i></button>
                        </span>
                      `).join('')}
                    </div>
                  </div>
                `;
              }).join('')}
            </div>
          </div>
        </div>
      </div>
    `;
  }
  