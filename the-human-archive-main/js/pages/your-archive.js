/* ============================================================================
   THE HUMAN ARCHIVE — CHAPTER SEVEN / YOUR ARCHIVE
   Personal message, drawing or idea. Data stays in this browser's localStorage.
   ============================================================================ */
(() => {
  'use strict';
  const STORAGE_KEY = 'thaPersonalArchive';
  const AUDIO_ROOT = new URL('../../assets/audio/', document.currentScript.src);
  const REDUCED_MOTION = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches === true;
  const $ = (tag, cls = '', text = null) => {
    const node = document.createElement(tag);
    if (cls) node.className = cls;
    if (text !== null) node.textContent = String(text);
    return node;
  };
  const makeButton = (label, cls, onClick) => {
    const b = $('button', cls, label); b.type = 'button'; b.addEventListener('click', onClick); return b;
  };
  const writeSaved = (value) => {
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(value)); return true; }
    catch (error) { console.warn('The personal archive could not be saved locally.', error); return false; }
  };

  let introToken = 0;
  let introTimers = [];
  let doorAudio = null;
  let primedDoorAudio = null;
  function stop() {
    introToken += 1;
    introTimers.forEach(window.clearTimeout); introTimers = [];
    if (doorAudio) { try { doorAudio.pause(); doorAudio.currentTime = 0; } catch (_) {} }
    doorAudio = null;
  }
  function primeDoorFromGesture() {
    if (window.THA?.audioMuted) return false;
    primedDoorAudio = new Audio(new URL('old-door-opening.mp3', AUDIO_ROOT).href);
    primedDoorAudio.preload = 'auto'; primedDoorAudio.volume = 0.001;
    const request = primedDoorAudio.play();
    if (request && typeof request.then === 'function') request.then(() => { primedDoorAudio.pause(); primedDoorAudio.currentTime = 0; }).catch(() => {});
    else { try { primedDoorAudio.pause(); primedDoorAudio.currentTime = 0; } catch (_) {} }
    return true;
  }
  function playDoorFromGesture() {
    stop();
    if (window.THA?.audioMuted) return null;
    doorAudio = new Audio(new URL('old-door-opening.mp3', AUDIO_ROOT).href);
    doorAudio.preload = 'auto'; doorAudio.volume = 0.44;
    const request = doorAudio.play();
    if (request && typeof request.catch === 'function') request.catch(() => {});
    return doorAudio;
  }
  function playRecordingCue() {
    if (window.THA?.audioMuted) return null;
    const cue = new Audio(new URL('click.mp3', AUDIO_ROOT).href);
    cue.volume = 0.26; void cue.play().catch(() => {});
    return cue;
  }
  function schedule(fn, delay, token) {
    const id = window.setTimeout(() => {
      introTimers = introTimers.filter(item => item !== id);
      if (token === introToken) fn();
    }, REDUCED_MOTION ? Math.min(80, delay) : delay);
    introTimers.push(id);
    return id;
  }
  function scheduleExact(fn, delay, token) {
    const id = window.setTimeout(() => {
      introTimers = introTimers.filter(item => item !== id);
      if (token === introToken) fn();
    }, delay);
    introTimers.push(id);
    return id;
  }

  function makeHeader() {
    const header = $('header', 'tha-menu-topbar tha-ya-menu-header');
    const brand = $('div', 'tha-menu-brand');
    brand.append($('span', 'tha-menu-brand-mark', 'THA'));
    const brandCopy = $('span', 'tha-menu-brand-copy');
    brandCopy.append($('strong', '', 'THE HUMAN ARCHIVE'), $('small', '', 'PERSONAL RECORD // EARTH ORBIT'));
    brand.append(brandCopy);
    const actions = $('div', 'tha-menu-topbar-actions');
    const state = $('span', 'tha-menu-system'); state.append($('i'), document.createTextNode(' CHAPTER SEVEN // CONTRIBUTION RECORD'));
    actions.append(state, $('div', 'tha-menu-identity-slot'));
    actions.lastElementChild.id = 'thaMenuIdentitySlot';
    actions.lastElementChild.setAttribute('aria-label', 'Assigned Space Archaeologist');
    header.append(brand, actions);
    return header;
  }

  function renderYourArchive() {
    // Keep the old-door cue that the router started directly from the visitor's tap.
    const prestartedDoor = doorAudio && !doorAudio.ended && !doorAudio.paused ? doorAudio : null;
    introToken += 1;
    introTimers.forEach(window.clearTimeout); introTimers = [];
    doorAudio = prestartedDoor;
    const token = introToken;
    const root = $('main', 'tha-ya-screen');
    root.append($('div', 'tha-ya-atmosphere'));
    root.append(makeHeader());
    const body = $('section', 'tha-ya-main');
    const mast = $('section', 'tha-ya-masthead');
    mast.setAttribute('aria-label', 'Chapter Seven — Your Archive');
    const mastCopy = $('div', 'tha-ya-masthead-copy');
    mastCopy.append(
      $('p', 'tha-ya-overline', 'CHAPTER 07  /  PERSONAL ARCHIVE'),
      $('h1', 'tha-ya-title', 'YOUR ARCHIVE'),
      $('p', 'tha-ya-masthead-caption', 'A PLACE FOR THE TRACE YOU CHOOSE TO LEAVE BEHIND.')
    );
    const unlocked = $('div', 'tha-ya-unlocked');
    unlocked.append($('span', 'tha-ya-unlocked-index', '07'), $('strong', '', 'UNLOCKED'), $('small', '', 'CONTRIBUTION OPEN'));
    mast.append(mastCopy, unlocked);
    body.append(mast);

    const invitation = $('section', 'tha-ya-invitation');
    invitation.append(
      $('p', 'tha-ya-line', 'You came to investigate'),
      $('p', 'tha-ya-line', 'what humanity left behind.'),
      $('p', 'tha-ya-line tha-ya-turn', 'But you are leaving something, too.'),
      $('h2', 'tha-ya-question', 'What do you want humanity to remember?')
    );
    const chooser = $('section', 'tha-ya-choices');
    chooser.setAttribute('aria-label', 'Choose how to contribute to your archive');
    const options = [
      { id: 'message', icon: '✍️', title: 'A MESSAGE', detail: 'Leave a few words for the future.', tag: '01 // WRITE' },
      { id: 'drawing', icon: '🎨', title: 'A DRAWING', detail: 'Create a small mark of your own.', tag: '02 // DRAW' },
      { id: 'idea', icon: '💡', title: 'AN IDEA', detail: 'Preserve one thought in a single line.', tag: '03 // IMAGINE' }
    ];
    options.forEach(option => {
      const card = makeButton('', 'tha-ya-choice', () => openComposer(option.id, body, composer, root));
      card.append($('span', 'tha-ya-choice-icon', option.icon), $('span', 'tha-ya-choice-copy', option.title), $('span', 'tha-ya-choice-detail', option.detail), $('span', 'tha-ya-choice-tag', option.tag), $('span', 'tha-ya-choice-arrow', '↗'));
      card.dataset.choice = option.id;
      chooser.append(card);
    });
    const composer = $('section', 'tha-ya-composer');
    composer.hidden = true;
    body.append(invitation, chooser, composer);
    root.append(body);

    // A saved contribution remains in localStorage, but returning visitors can
    // make another contribution after a refresh and replay the complete finale.
    const invitationLines = [...invitation.querySelectorAll('.tha-ya-line'), invitation.querySelector('.tha-ya-question')];
    schedule(() => {
      invitation.classList.add('is-visible');
      invitationLines.forEach((line, index) => schedule(() => {
        line.classList.add('is-visible');
        if (!REDUCED_MOTION) line.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }, index * (REDUCED_MOTION ? 20 : 680), token));
      schedule(() => {
        chooser.classList.add('is-visible');
        if (!REDUCED_MOTION) chooser.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }, invitationLines.length * (REDUCED_MOTION ? 20 : 680) + 240, token);
    }, doorAudio ? 4550 : 900, token);
    return root;
  }

  function openComposer(type, body, composer, root) {
    body.querySelectorAll('.tha-ya-choice').forEach(card => {
      const selected = card.dataset.choice === type;
      card.classList.toggle('is-selected', selected);
      card.setAttribute('aria-pressed', String(selected));
    });
    composer.replaceChildren();
    composer.hidden = false;
    composer.dataset.type = type;
    const typeLabel = type === 'message' ? 'A MESSAGE' : type === 'drawing' ? 'A DRAWING' : 'AN IDEA';
    composer.append($('div', 'tha-ya-composer-head', `YOUR CONTRIBUTION // ${typeLabel}`));
    const help = type === 'message'
      ? 'Write something you would like the future to remember.'
      : type === 'drawing'
        ? 'Use your finger or mouse to leave a mark. Your drawing stays on this device.'
        : 'Capture one thought in a single line.';
    composer.append($('p', 'tha-ya-composer-help', help));

    let input = null;
    let canvas = null;
    let strokes = 0;
    if (type === 'message') {
      input = $('textarea', 'tha-ya-textarea');
      input.rows = 5; input.maxLength = 1200; input.placeholder = 'To the people who come after us…';
      input.setAttribute('aria-label', 'Your archive message');
      composer.append(input);
    } else if (type === 'idea') {
      input = $('input', 'tha-ya-idea-input');
      input.type = 'text'; input.maxLength = 180; input.placeholder = 'One idea worth carrying forward…';
      input.setAttribute('aria-label', 'Your archive idea');
      composer.append(input);
    } else {
      const pad = $('div', 'tha-ya-drawing-pad');
      canvas = $('canvas', 'tha-ya-canvas'); canvas.width = 1100; canvas.height = 520;
      canvas.setAttribute('aria-label', 'Drawing canvas. Draw with mouse, stylus or touch.');
      pad.append(canvas); composer.append(pad);
      const context = canvas.getContext('2d');
      context.lineCap = 'round'; context.lineJoin = 'round'; context.strokeStyle = '#b9f2c3'; context.lineWidth = 4;
      let drawing = false;
      const point = event => {
        const rect = canvas.getBoundingClientRect();
        return { x: (event.clientX - rect.left) * canvas.width / rect.width, y: (event.clientY - rect.top) * canvas.height / rect.height };
      };
      canvas.addEventListener('pointerdown', event => {
        drawing = true; strokes += 1; canvas.setPointerCapture?.(event.pointerId);
        const p = point(event); context.beginPath(); context.moveTo(p.x, p.y); context.lineTo(p.x + .1, p.y + .1); context.stroke();
      });
      canvas.addEventListener('pointermove', event => {
        if (!drawing) return; const p = point(event); context.lineTo(p.x, p.y); context.stroke();
      });
      const end = () => { drawing = false; context.closePath(); };
      canvas.addEventListener('pointerup', end); canvas.addEventListener('pointercancel', end); canvas.addEventListener('lostpointercapture', end);
      composer.append(makeButton('CLEAR CANVAS', 'tha-ya-clear', () => { context.clearRect(0, 0, canvas.width, canvas.height); strokes = 0; }));
    }

    const error = $('p', 'tha-ya-error'); error.setAttribute('role', 'alert');
    const actions = $('div', 'tha-ya-editor-actions');
    const save = makeButton('PRESERVE CONTRIBUTION →', 'tha-ya-submit', () => {
      let content = '';
      if (type === 'drawing') {
        if (!strokes) { error.textContent = 'Leave a mark before preserving your drawing.'; return; }
        content = canvas.toDataURL('image/jpeg', 0.76);
      } else {
        content = String(input.value || '').trim();
        if (!content) { error.textContent = type === 'message' ? 'Write a message before preserving it.' : 'Add one idea before preserving it.'; input.focus(); return; }
      }
      const record = {
        archiveId: `HUMAN-2126-${Math.random().toString(16).slice(2, 6).toUpperCase()}`,
        type, content, createdAt: new Date().toISOString(), origin: 'EARTH', year: '2126', status: 'PRESERVED'
      };
      if (!writeSaved(record)) { error.textContent = 'Local storage is unavailable. Your contribution could not be preserved.'; return; }
      const recordingCue = playRecordingCue();
      // Unlock the finale's breath/piano/signal audio from this actual submit tap.
      window.THAFinaleExperience?.primeFromGesture?.();
      renderDossier(body, record, false);
      if (!REDUCED_MOTION) root.querySelector('.tha-ya-dossier')?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      const token = introToken;
      // The archive-created confirmation gets a full ten-second viewing hold.
      // The short recording cue plays at the moment the dossier is created.
      scheduleExact(() => {
        root.classList.add('is-fading-to-dark');
        schedule(() => window.THANavigation?.goTo('finale'), REDUCED_MOTION ? 80 : 1900, token);
      }, 10000, token);
    });
    const cancel = makeButton('CANCEL', 'tha-ya-cancel', () => { composer.hidden = true; body.querySelectorAll('.tha-ya-choice').forEach(card => { card.classList.remove('is-selected'); card.setAttribute('aria-pressed', 'false'); }); });
    actions.append(cancel, save); composer.append(error, actions);
    if (type !== 'drawing') input.focus({ preventScroll: true });
    if (!REDUCED_MOTION) composer.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }

  function renderDossier(body, record, existing) {
    body.querySelector('.tha-ya-masthead')?.remove();
    body.querySelector('.tha-ya-invitation')?.remove();
    body.querySelector('.tha-ya-choices')?.remove();
    body.querySelector('.tha-ya-composer')?.remove();
    body.querySelector('.tha-ya-dossier')?.remove();
    const dossier = $('section', 'tha-ya-dossier'); dossier.setAttribute('aria-labelledby', 'thaYaCreatedTitle');
    const header = $('header', 'tha-ya-dossier-header');
    const seal = $('span', 'tha-ya-dossier-seal', '✓');
    const heading = $('div', 'tha-ya-dossier-heading');
    const status = $('div', 'tha-ya-dossier-status');
    status.append($('span', '', '2126'), $('strong', '', 'PRESERVED'));
    heading.append(
      $('p', 'tha-ya-overline', existing ? 'PERSONAL RECORD // RESTORED' : 'RECORDING DEVICE // CONFIRMATION RECEIVED'),
      $('h2', '', 'ARCHIVE CREATED'),
      $('p', 'tha-ya-dossier-subtitle', 'YOUR CONTRIBUTION IS NOW PART OF THE PERSONAL ARCHIVE.')
    );
    heading.querySelector('h2').id = 'thaYaCreatedTitle';
    header.append(seal, heading, status);
    const fields = $('dl', 'tha-ya-registry');
    [['ARCHIVE ID', record.archiveId], ['SPACE ARCHAEOLOGIST', 'YOU'], ['ORIGIN', 'EARTH'], ['YEAR', '2126'], ['STATUS', 'PRESERVED']].forEach(([label, value]) => {
      const pair = $('div', 'tha-ya-registry-row'); pair.append($('dt', '', label), $('dd', '', value)); fields.append(pair);
    });
    dossier.append(header, fields);
    const contribution = $('div', 'tha-ya-preserved-content');
    contribution.append($('span', 'tha-ya-overline', `PRESERVED CONTRIBUTION // ${record.type.toUpperCase()}`));
    if (record.type === 'drawing' && typeof record.content === 'string' && record.content.startsWith('data:image/')) {
      const image = $('img', 'tha-ya-drawing-preview'); image.src = record.content; image.alt = 'Your saved archive drawing'; contribution.append(image);
    } else {
      contribution.append($('p', 'tha-ya-contribution-text', record.content));
    }
    dossier.append(contribution);
    const ethical = $('p', 'tha-ya-ethical-note');
    ethical.append($('strong', '', 'This message is not sent to NASA.'), $('span', '', 'It belongs to your personal archive.'));
    dossier.append(ethical);
    // Chapter Seven ends on the preserved personal record; no navigation button.
    body.append(dossier);
    requestAnimationFrame(() => dossier.scrollIntoView({ behavior: 'smooth', block: 'start' }));
  }

  window.THAYourArchiveExperience = { primeDoorFromGesture, playDoorFromGesture, playRecordingCue, stop };
  window.renderYourArchive = renderYourArchive;
})();
