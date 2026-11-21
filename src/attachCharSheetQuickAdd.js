(function () {
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
      // 一般技能或魔法
      const cat = data.category || data.type || '';
      if (cat === '咒歌' || cat === '終律') return { bucket: 'songs', label: data.name };
      if (cat === '鼓咆' || cat === '陣率' || cat === '軍師') return { bucket: 'tactics', label: data.name };
      if (cat === '賦術') return { bucket: 'alchemy', label: data.name };
      if (cat === '練技' || cat === '練體士') return { bucket: 'enhancements', label: data.name };
      if (cat === '騎藝' || cat === '騎手') return { bucket: 'riding', label: data.name };
      return { bucket: 'spells', label: data.name };
    }
  
    window.addCardToActiveCharacter = function (encodedPayload) {
      if (!window.SW25CharSheet) return;
      const payload = JSON.parse(decodeURIComponent(encodedPayload));
      const char = window.SW25CharSheet.getActiveCharacter();
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
  
      window.SW25CharSheet.saveCharacter(char);
  
      // 視覺回饋
      document.querySelectorAll(`[data-char-add-id="${CSS.escape(payload.id)}"]`).forEach(btn => {
        const prev = btn.innerHTML;
        btn.innerHTML = '<i class="fa-solid fa-check text-emerald-400"></i> 已加入';
        setTimeout(() => {
          btn.innerHTML = prev;
        }, 1200);
      });
    };
  
    function injectButtonsIntoContainer(containerId) {
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
    }
  
    const observer = new MutationObserver(() => {
      injectButtonsIntoContainer('bard-list');
      injectButtonsIntoContainer('item-list');
    });
  
    document.addEventListener('DOMContentLoaded', () => {
      injectButtonsIntoContainer('bard-list');
      injectButtonsIntoContainer('item-list');
      observer.observe(document.body, { childList: true, subtree: true });
    });
  })();