/* =============================================================================
   THE HUMAN ARCHIVE — CHAPTER FIVE THROUGH EIGHT
   Hidden Records · 99% · Your Archive · Finale

   This module intentionally does not expose the identities or NASA photographs
   of the two hidden objects until the visitor submits the correct answer.
   Progress and the visitor's own archive are stored locally in localStorage.
   ============================================================================= */
(() => {
  'use strict';

  const $ = (tag, className = '', value = null) => {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (value !== null && value !== undefined) node.textContent = String(value);
    return node;
  };
  const button = (label, className, onClick) => {
    const node = $('button', className, label);
    node.type = 'button';
    node.addEventListener('click', onClick);
    return node;
  };
  const safeRead = (key, fallback) => {
    try {
      const value = localStorage.getItem(key);
      return value ? JSON.parse(value) : fallback;
    } catch (_) { return fallback; }
  };
  const safeWrite = (key, value) => {
    try { localStorage.setItem(key, JSON.stringify(value)); return true; }
    catch (error) { console.warn(`Could not save ${key} locally.`, error); return false; }
  };
  const IMAGE_ROOT = new URL('../../assets/images/', document.currentScript.src);
  const AUDIO_ROOT = new URL('../../assets/audio/', document.currentScript.src);
  const PROGRESS_KEY = 'thaProgress';
  const HIDDEN_STATE_KEY = 'thaHiddenRecordsState';
  const PERSONAL_ARCHIVE_KEY = 'thaPersonalArchive';
  const HIDDEN_IDS = ['sky-crane', 'rtg'];
  const REDUCED_MOTION = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches === true;

  const RECORDS = {
    'sky-crane': {
      id: 'sky-crane',
      title: 'SKY CRANE',
      subtitle: 'MARS LANDING SYSTEM',
      location: 'MARS',
      image: 'sky-crane-landing-system.webp',
      alt: 'NASA illustration of the Mars landing system lowering a rover on long tethers',
      credit: 'NASA / JPL-Caltech',
      imageSource: 'https://www.nasa.gov/missions/mars-science-laboratory/curiosity-rover/heres-how-curiositys-sky-crane-changed-the-way-nasa-explores-mars/',
      imageSourceLabel: 'NASA — How Curiosity’s Sky Crane Changed the Way NASA Explores Mars',
      officialSource: 'https://www.nasa.gov/missions/mars-science-laboratory/curiosity-rover/heres-how-curiositys-sky-crane-changed-the-way-nasa-explores-mars/',
      officialSourceLabel: 'NASA — How Curiosity’s Sky Crane Changed the Way NASA Explores Mars',
      clues: [
        'It was used on Mars.',
        'It never operated independently on the Martian surface.',
        'But it helped a rover reach the Martian surface.',
        'It was not a rover. It was the system that delivered one to Mars.'
      ],
      choices: [
        { id: 'rover', label: 'A ROVER' },
        { id: 'landing-system', label: 'A LANDING SYSTEM' },
        { id: 'satellite', label: 'A SATELLITE' },
        { id: 'scientific-instrument', label: 'A SCIENTIFIC INSTRUMENT' }
      ],
      answer: 'landing-system',
      retryHint: 'Follow the rover’s arrival, not its movement. What helped place it safely on the surface?',
      discover: {
        lead: 'The Sky Crane was a rocket-powered landing system designed to lower a large rover gently onto the surface of Mars.',
        what: 'It was a hovering descent platform. After the rover touched down, the system released its tethers, flew away and deliberately crashed at a safe distance.',
        purpose: 'The long nylon tethers kept the rover away from the rocket exhaust. That helped prevent the exhaust from blasting dust and debris into the landing area.',
        importance: 'It made the delivery of the car-sized Curiosity and Perseverance rovers possible in a way that protected the rover and the science hardware it carried.',
        sequence: ['HOVER', 'LOWER', 'TOUCHDOWN', 'FLY AWAY']
      },
      nasaData: [
        ['MISSIONS', 'Mars Science Laboratory — Curiosity (2012); Mars 2020 — Perseverance (2021)'],
        ['FUNCTION', 'Lowering a rover onto the Martian surface'],
        ['METHOD', 'Rocket-powered hover platform and long nylon tethers'],
        ['AFTER LANDING', 'Released the rover, flew away and intentionally crashed'],
        ['STATUS', 'Mission complete. The landing hardware remained on Mars.']
      ],
      storyLead: 'Not everything that travels to Mars comes back.\n\nThe system that lowered the rover remained on the surface, too.\n\nBecause it left a trace of its own.\nNot just the rover.',
      story: 'A brilliant rocket-powered hover platform. It lowered the massive, car-sized rovers gently onto the Martian surface using long nylon cables so rocket exhaust would not kick up destructive dust clouds. Once safe, it disconnected, flew away, and crashed on purpose.',
      verified: 'NASA / JPL confirms that this landing system was used for the Curiosity landing in 2012 and the Perseverance landing in 2021. It lowered the rovers using long nylon tethers and deliberately crashed after release.'
    },
    'rtg': {
      id: 'rtg',
      title: 'RADIOISOTOPE THERMOELECTRIC GENERATOR',
      shortTitle: 'RTG',
      subtitle: 'LUNAR NUCLEAR POWER SOURCE',
      location: 'MOON',
      image: 'rtg-installation-alsep.webp',
      alt: 'Apollo 12 astronaut Alan L. Bean unloading the ALSEP radioisotope fuel element on the lunar surface',
      credit: 'NASA / JSC',
      imageSource: 'https://science.nasa.gov/image-detail/as12-46-6789-alsep/',
      imageSourceLabel: 'NASA — Apollo 12 ALSEP image',
      secondaryImage: 'rtg-photograph-alsep.webp',
      secondaryAlt: 'Apollo-era photograph of the ALSEP radioisotope power equipment on the lunar surface',
      secondaryImageCredit: 'NASA / JSC',
      secondaryImageSource: 'https://science.nasa.gov/image-detail/1202px-alsep-apollo-14-rtg-12021/',
      officialSource: 'https://science.nasa.gov/planetary-science/programs/radioisotope-power-systems/legacy-systems/',
      officialSourceLabel: 'NASA — Legacy Radioisotope Power Systems',
      clues: [
        'It was used on the Moon.',
        'An astronaut did not carry it away. An astronaut left it behind.',
        'It was not a solar panel. It was not a conventional battery.',
        'It could provide power without sunlight.',
        'It powered an experimental science station.'
      ],
      choices: [
        { id: 'solar-panel', label: 'A SOLAR PANEL' },
        { id: 'battery', label: 'A BATTERY' },
        { id: 'nuclear-power-source', label: 'A NUCLEAR POWER SOURCE' },
        { id: 'antenna', label: 'AN ANTENNA' }
      ],
      answer: 'nuclear-power-source',
      retryHint: 'Think about the lunar night. What kind of power source can keep working when sunlight is absent?',
      discover: {
        lead: 'A Radioisotope Thermoelectric Generator (RTG) converts heat from radioactive decay into electrical power.',
        what: 'The Apollo-era unit used heat released by plutonium-238 as it naturally decayed. Thermoelectric components converted that heat into electricity for the lunar experiments.',
        purpose: 'It supplied steady power to the Apollo Lunar Surface Experiments Package (ALSEP), including through the long lunar night when solar panels could not generate electricity.',
        importance: 'It helped instruments continue gathering scientific information on the Moon beyond the short periods when astronauts were present.',
        sequence: ['RADIOISOTOPE HEAT', 'THERMOELECTRIC CONVERSION', 'ELECTRICITY', 'SCIENCE CONTINUES']
      },
      nasaData: [
        ['MISSION', 'Apollo Lunar Surface Experiments Package (ALSEP)'],
        ['FUNCTION', 'Providing power to lunar surface experiments'],
        ['POWER', 'Approximately 70 watts'],
        ['ENERGY SOURCE', 'Heat from the radioactive decay of plutonium-238'],
        ['USED ON', 'Apollo 12, 14, 15, 16 and 17'],
        ['STATUS', 'Mission complete. Equipment remained on the Moon.']
      ],
      storyLead: 'Night on the Moon lasts about 14 days.\nSolar panels cannot provide power without sunlight.\n\nSo humans built a device.\nIt contained radioactive material.\nIt produced heat.\nThat heat was converted into electricity.\n\nThis device helped experiments continue operating through the lunar night.',
      story: 'A radioisotope thermoelectric generator produced steady electricity using heat from the natural decay of plutonium-238. It helped keep the scientific experiments powered during the long, freezing lunar night.',
      verified: 'NASA’s legacy power-systems material identifies the SNAP-27 radioisotope system used with Apollo lunar experiments. The ALSEP RTG supplied approximately 70 watts using heat from plutonium-238 decay.'
    }
  };

  // ------------------------------ LOCAL STATE ------------------------------
  function readHiddenState() {
    const state = safeRead(HIDDEN_STATE_KEY, {});
    const completed = Array.isArray(state.completed) ? state.completed.filter(id => HIDDEN_IDS.includes(id)) : [];
    const clueProgress = state.clueProgress && typeof state.clueProgress === 'object' ? state.clueProgress : {};
    return {
      completed: [...new Set(completed)],
      clueProgress: {
        'sky-crane': clampInteger(clueProgress['sky-crane'], 0, RECORDS['sky-crane'].clues.length),
        'rtg': clampInteger(clueProgress.rtg, 0, RECORDS.rtg.clues.length)
      }
    };
  }
  function clampInteger(value, min, max) {
    const number = Number(value);
    return Math.max(min, Math.min(max, Number.isFinite(number) ? Math.floor(number) : min));
  }
  function writeHiddenState(state) { safeWrite(HIDDEN_STATE_KEY, state); }
  function readProgress() {
    const saved = safeRead(PROGRESS_KEY, {});
    const hidden = Number(saved.hidden ?? saved.hiddenRecords ?? 0);
    const moon = Number(saved.moon || 0);
    const mars = Number(saved.mars || 0);
    const other = Number(saved.other ?? saved.otherTraces ?? 0);
    return {
      moon: clampInteger(moon, 0, 3), mars: clampInteger(mars, 0, 4),
      other: clampInteger(other, 0, 2), hidden: clampInteger(hidden, 0, 2)
    };
  }
  function writeHiddenProgress(count) {
    const saved = safeRead(PROGRESS_KEY, {});
    saved.hidden = count;
    saved.hiddenRecords = count;
    safeWrite(PROGRESS_KEY, saved);
    window.THA?.setProgress?.('hidden', count);
  }
  function isHiddenSectionUnlocked() {
    const progress = readProgress();
    return progress.moon >= 3 && progress.mars >= 4 && progress.other >= 2;
  }
  function recordIsUnlocked(id, state) {
    if (id === 'sky-crane') return true;
    return state.completed.includes('sky-crane');
  }
  function markComplete(id) {
    const state = readHiddenState();
    if (!state.completed.includes(id)) state.completed.push(id);
    state.clueProgress[id] = RECORDS[id].clues.length;
    writeHiddenState(state);
    writeHiddenProgress(state.completed.length);
    return state;
  }

  // ------------------------------ AUDIO ------------------------------------
  let hiddenHum = null;
  let activeCue = null;
  let audioGeneration = 0;
  const activeTimers = new Set();
  function audioAllowed() { return window.THA?.audioMuted !== true; }
  function createTrack(filename, loop = false, volume = 0.3) {
    const audio = new Audio(new URL(filename, AUDIO_ROOT).href);
    audio.preload = 'auto';
    audio.loop = loop;
    audio.volume = volume;
    return audio;
  }
  function playCue(filename, volume = 0.45, loop = false) {
    if (!audioAllowed()) return null;
    if (activeCue) { try { activeCue.pause(); activeCue.currentTime = 0; } catch (_) {} }
    activeCue = createTrack(filename, loop, volume);
    const current = activeCue;
    const result = current.play();
    if (result && typeof result.catch === 'function') {
      result.catch(error => {
        if (error?.name !== 'NotAllowedError') console.warn(`Chapter audio unavailable: ${filename}`, error);
      });
    }
    return current;
  }
  function startHiddenHum() {
    if (!audioAllowed()) return false;
    if (hiddenHum && !hiddenHum.paused) return true;
    if (!hiddenHum) hiddenHum = createTrack('deep-curiosity-hum.mp3', true, 0.56);
    hiddenHum.loop = true;
    hiddenHum.volume = 0.56;
    const result = hiddenHum.play();
    if (result && typeof result.catch === 'function') {
      result.catch(error => {
        if (error?.name !== 'NotAllowedError') console.warn('Hidden Records ambient hum could not start.', error);
      });
    }
    return true;
  }
  function stopHiddenHum() {
    if (hiddenHum) { try { hiddenHum.pause(); hiddenHum.currentTime = 0; } catch (_) {} }
  }
  function playHiddenCue(file, volume = 0.34) {
    if (!audioAllowed()) return null;
    try { const cue = new Audio(new URL(file, AUDIO_ROOT).href); cue.volume = volume; cue.preload = 'auto'; cue.play().catch(() => {}); return cue; } catch (_) { return null; }
  }

  function stopHiddenAudio() {
    audioGeneration += 1;
    for (const timer of activeTimers) window.clearTimeout(timer);
    activeTimers.clear();
    stopHiddenHum();
    if (activeCue) { try { activeCue.pause(); activeCue.currentTime = 0; } catch (_) {} }
    activeCue = null;
  }
  function schedule(callback, delay, generation = audioGeneration) {
    const timer = window.setTimeout(() => {
      activeTimers.delete(timer);
      if (generation === audioGeneration) callback();
    }, delay);
    activeTimers.add(timer);
    return timer;
  }
  function start99BeepFromGesture() { playCue('beep.mp3', 0.48, false); }
  function startDoorCue() { playCue('old-door-opening.mp3', 0.38, false); }
  function startBreathCue() { playCue('deep-breath.mp3', 0.36, false); }
  function startPianoCue() {
    const audio = playCue('single-piano-note.mp3', 0.40, false);
    if (!audio) return null;
    audio.addEventListener('ended', () => { if (activeCue === audio) activeCue = null; }, { once: true });
    return audio;
  }
  function startRecorderCue() {
    if (!audioAllowed()) return;
    // Reuse the project's existing recording-device confirmation sound design.
    if (typeof window.playTerminalRecCue === 'function') window.playTerminalRecCue();
    else playCue('click.mp3', 0.55, false);
  }
  function stopCueAfter(audio, delay) {
    if (!audio) return;
    window.setTimeout(() => {
      try { audio.pause(); audio.currentTime = 0; } catch (_) {}
    }, delay);
  }
  window.THAHiddenAudio = {
    start: startHiddenHum,
    stop: stopHiddenAudio,
    stopHum: stopHiddenHum,
    start99BeepFromGesture,
    startDoorCue,
    startBreathCue,
    startPianoCue,
    startRecorderCue
  };

  // ------------------------------ SHARED UI --------------------------------
  function makeHeader(sectionLabel, status = 'OBJECT IDENTIFICATION MODE') {
    // Original Chapter Five header is deliberately retained.
    const header = $('header', 'tha-moon-header tha-hidden-header');
    const brand = $('div', 'tha-moon-brand');
    brand.append($('span', 'tha-moon-brand-mark tha-hidden-brand-mark', 'THA'));
    const copy = $('div', 'tha-moon-brand-copy');
    copy.append($('strong', '', 'THE HUMAN ARCHIVE'), $('small', '', sectionLabel));
    brand.append(copy);
    const right = $('div', 'tha-moon-header-right');
    const live = $('span', 'tha-moon-live tha-hidden-live');
    live.append($('i'), document.createTextNode(status));
    const identity = $('div', 'tha-moon-identity-slot');
    identity.id = 'thaMenuIdentitySlot';
    right.append(live, identity);
    header.append(brand, right);
    return header;
  }

  function makeChapterHeader(sectionLabel, status = 'ARCHIVE LINK ACTIVE') {
    // Chapters 06–08 reuse the Main Menu's exact header geometry and branding.
    const header = $('header', 'tha-menu-topbar tha-chapter-topbar');
    const brand = $('div', 'tha-menu-brand');
    brand.append($('span', 'tha-menu-brand-mark', 'THA'));
    const copy = $('span', 'tha-menu-brand-copy');
    copy.append($('strong', '', 'THE HUMAN ARCHIVE'), $('small', '', sectionLabel));
    brand.append(copy);
    const actions = $('div', 'tha-menu-topbar-actions');
    const live = $('span', 'tha-menu-system');
    live.append($('i'), document.createTextNode(status));
    const identity = $('div', 'tha-menu-identity-slot');
    identity.id = 'thaMenuIdentitySlot';
    actions.append(live, identity);
    header.append(brand, actions);
    return header;
  }
  function makeRoot(className) {
    const root = $('section', `tha-hidden-screen ${className}`);
    root.setAttribute('aria-label', 'Hidden Records chapter');
    return root;
  }
  function makeFooter(text = 'CHAPTER FIVE // UNIDENTIFIED OBJECTS // 2126') {
    const footer = $('footer', 'hidden-footer');
    footer.append($('span', '', 'THE HUMAN ARCHIVE'), $('span', '', text));
    return footer;
  }
  function addActionRow(parent, actions) {
    const row = $('div', 'hidden-actions');
    actions.forEach(action => row.append(action));
    parent.append(row);
    return row;
  }
  function makeButton(label, kind, onClick) { return button(label, `hidden-button ${kind || ''}`, onClick); }
  function makeEyebrow(text) { return $('p', 'hidden-eyebrow', text); }
  function makeTitle(text) { return $('h1', 'hidden-page-title', text); }
  function svgScan(variant = 'suspended') {
    const wrap = $('div', `hidden-anomaly-visual hidden-anomaly-${variant}`);
    wrap.setAttribute('role', 'img');
    wrap.setAttribute('aria-label', 'Unidentified object scan. The object identity is withheld.');
    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('viewBox', '0 0 520 330');
    svg.setAttribute('aria-hidden', 'true');
    svg.innerHTML = variant === 'suspended' ? `
      <defs><linearGradient id="scanMetalA" x1="0" x2="1"><stop offset="0" stop-color="#8e9db9" stop-opacity=".10"/><stop offset=".5" stop-color="#bfc8df" stop-opacity=".52"/><stop offset="1" stop-color="#7f91b0" stop-opacity=".14"/></linearGradient><filter id="scanBlurA"><feGaussianBlur stdDeviation="5"/></filter></defs>
      <g fill="none" stroke="#a9a4ec" stroke-opacity=".36" stroke-width="1"><circle cx="260" cy="157" r="112" stroke-dasharray="2 11"/><circle cx="260" cy="157" r="82"/><path d="M25 157H495M260 15V315" stroke-opacity=".22"/><path d="M55 62h42m-21 -21v42M423 252h42m-21 -21v42"/></g>
      <g filter="url(#scanBlurA)" fill="#9da9c9" opacity=".22"><path d="M182 77l154 2 18 46-22 54-32 11-8 72-54 0-12-77-48-24-18-47z"/></g>
      <g fill="url(#scanMetalA)" stroke="#d3d5ef" stroke-opacity=".72" stroke-width="2"><path d="M194 92l130 1 26 37-29 37-24 4-11 78-46 0-13-78-40-13-23-39z"/><path d="M212 96l-33 26 16 38 27-5M318 96l33 26-16 38-27-5"/><path d="M244 248l-22 48m73-48 22 48" stroke-width="5"/></g>
      <g stroke="#a9a4ec" stroke-width="2" stroke-opacity=".6" fill="none"><path d="M216 92L184 52m120 40 33-40M260 249v45"/><path d="M168 52l16-8 16 8m117 0 16-8 16 8"/></g>
      <g fill="#d7d8f2" opacity=".7"><circle cx="260" cy="157" r="3"/><circle cx="194" cy="130" r="2"/><circle cx="327" cy="130" r="2"/></g>` : `
      <defs><linearGradient id="scanMetalB" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#d8c2a0" stop-opacity=".08"/><stop offset=".52" stop-color="#e3d4bc" stop-opacity=".46"/><stop offset="1" stop-color="#a89077" stop-opacity=".12"/></linearGradient><filter id="scanBlurB"><feGaussianBlur stdDeviation="6"/></filter></defs>
      <g fill="none" stroke="#d2b88c" stroke-opacity=".34" stroke-width="1"><circle cx="260" cy="158" r="112" stroke-dasharray="3 10"/><circle cx="260" cy="158" r="76"/><path d="M24 158H496M260 15V314" stroke-opacity=".2"/><path d="M62 68h34m-17 -17v34M425 248h34m-17 -17v34"/></g>
      <g filter="url(#scanBlurB)" fill="#d1bea2" opacity=".2"><path d="M180 112l139-14 34 55-43 102-133-18-20-72z"/></g>
      <g fill="url(#scanMetalB)" stroke="#eadbc6" stroke-opacity=".72" stroke-width="2"><path d="M182 117l138-12 27 45-37 91-126-10-22-69z"/><path d="M189 117l31-26 84-7 34 23M209 228l-21 33m137-38 24 24"/><path d="M220 131h66v58h-66z" fill-opacity=".16"/><path d="M233 131v-21m38 21v-21"/></g>
      <g stroke="#d2b88c" stroke-width="2" fill="none" stroke-opacity=".72"><path d="M183 142L133 116l-20 8m243 44 36 21 17-6M251 229v39l-23 15"/><path d="M105 124l8-8 8 8m291 53 8 8 8-8"/></g>
      <g fill="#eee0c8" opacity=".7"><circle cx="182" cy="117" r="3"/><circle cx="320" cy="105" r="3"/><circle cx="260" cy="158" r="3"/></g>`;
    wrap.append(svg);
    const scanline = $('span', 'hidden-scanline');
    scanline.setAttribute('aria-hidden', 'true');
    wrap.append(scanline);
    return wrap;
  }

  // ------------------------------ CHAPTER 05: LANDING SCREEN ---------------
  function renderHiddenLanding() {
    const root = makeRoot('hxc-landing-screen');
    root.append(makeHeader('HIDDEN RECORDS // UNCATALOGUED HARDWARE', 'OBJECT IDENTIFICATION MODE ACTIVE'));
    const main = $('main', 'hxc-landing-main');
    const hero = $('section', 'hxc-opening');
    const copy = $('div', 'hxc-opening-copy');
    copy.append(
      makeEyebrow('CHAPTER FIVE // THE SEALED INVENTORY'),
      makeTitle('HIDDEN RECORDS'),
      $('p', 'hxc-opening-status', 'TWO OBJECTS REMAIN UNIDENTIFIED'),
      $('p', 'hxc-opening-lead', 'Not every trace is a spacecraft.'),
      $('p', 'hxc-opening-body', 'Some are the systems that carried a rover, lowered it to the ground or kept experiments alive through the lunar night. Their names are still sealed. Recover the evidence to reveal them.')
    );
    const instrument = $('div', 'hxc-opening-instrument');
    instrument.setAttribute('aria-hidden', 'true');
    instrument.append($('span', 'hxc-orbit hxc-orbit-a'), $('span', 'hxc-orbit hxc-orbit-b'), $('span', 'hxc-orbit hxc-orbit-c'), $('strong', '', '02'), $('small', '', 'UNKNOWN OBJECTS'));
    hero.append(copy, instrument);main.append(hero);

    const directive = $('section', 'hxc-directive');
    directive.append($('span', 'hxc-directive-code', 'FIELD DIRECTIVE // 2126'), $('p', '', 'Investigate the cases in order. The second object remains sealed until the first identity is confirmed.'));
    main.append(directive);

    const state = readHiddenState();
    const list = $('section', 'hxc-case-grid');
    list.setAttribute('aria-label', 'Hidden object investigations');
    HIDDEN_IDS.forEach((id, index) => {
      const record = RECORDS[id];
      const completed = state.completed.includes(id);
      const unlocked = recordIsUnlocked(id, state);
      const card = $('article', `hxc-case-card${completed ? ' is-complete' : unlocked ? ' is-active' : ' is-sealed'}`);
      const head = $('div', 'hxc-case-head');
      head.append($('span', 'hxc-case-number', `CASE 0${index + 1} // ${record.location}`), $('span', 'hxc-case-status', completed ? 'IDENTITY RESTORED' : unlocked ? 'SIGNAL DETECTED' : 'SIGNAL SEALED'));
      const visual = $('div', 'hxc-case-visual');
      if (completed) {
        const image = $('img');image.src = new URL(record.image, IMAGE_ROOT).href;image.alt = record.alt;image.loading = 'lazy';image.decoding = 'async';visual.append(image);
      } else {
        const scan = svgScan(id === 'sky-crane' ? 'suspended' : 'instrument');
        visual.append(scan, $('span', 'hxc-visual-seal', 'IDENTITY WITHHELD'));
      }
      const body = $('div', 'hxc-case-body');
      body.append($('p', 'hxc-case-kicker', completed ? 'RECOVERED OBJECT' : unlocked ? 'FIRST TRACE AVAILABLE' : 'NEXT INVESTIGATION'), $('h2', 'hxc-case-title', completed ? (record.shortTitle || record.title) : 'UNIDENTIFIED OBJECT'), $('p', 'hxc-case-description', completed ? (id === 'sky-crane' ? 'The rocket-powered delivery system that lowered Curiosity and Perseverance safely onto Mars. Its work ended on the surface, where the landing stage remains.' : `${record.subtitle} · ${record.location}`) : unlocked ? 'Open the investigation and recover the evidence fragments.' : 'This case unlocks after the first hidden object is correctly identified.'));
      const action = button(completed ? 'OPEN RECOVERED RECORD ↗' : unlocked ? 'ENTER INVESTIGATION →' : 'CASE SEALED // 01 REQUIRED', 'hxc-case-action', () => {
        if (!unlocked && !completed) return;
        playHiddenCue('click.mp3', 0.38);
        openRecord(id, completed);
      });
      action.disabled = !unlocked && !completed;
      body.append(action);card.append(head, visual, body);card.dataset.case = String(index + 1);list.append(card);
    });
    main.append(list, $('p', 'hxc-security-note', 'IDENTITY FIREWALL // NAMES AND ORIGINAL MISSION IMAGES REMAIN SEALED UNTIL IDENTIFICATION'), makeFooter('CHAPTER FIVE // 02 OBJECTS // 2126'));
    root.append(main);
    root.addEventListener('pointerdown', startHiddenHum, { once: true, passive: true });
    root.addEventListener('keydown', startHiddenHum, { once: true });
    window.THAIdentity?.mountInMenu?.();
    return root;
  }
    // ------------------------------ RECORD INVESTIGATION --------------------
  function openRecord(id, alreadyComplete = false) {
    const state = readHiddenState();
    if (!recordIsUnlocked(id, state) && !alreadyComplete) return;
    if (alreadyComplete) renderIdentifiedRecord(id, true);
    else renderInvestigation(id);
  }

  function renderInvestigation(id, restoreScrollY = null, focusQuestion = false) {
    const record = RECORDS[id];
    const state = readHiddenState();
    const revealed = state.clueProgress[id] || 0;
    const root = makeRoot('hidden-investigation-screen hrv2-investigation');
    root.append(makeHeader('HIDDEN RECORDS // LIVE INVESTIGATION', 'SIGNAL LOCKED // IDENTITY SEALED'));
    const main = $('main', 'hrv2-shell hrv2-investigation-main');
    const bar = $('div', 'hrv2-investigation-nav');
    bar.append(
      button('← CASE BOARD', 'hrv2-back-button', () => renderIntoApp(renderHiddenLanding())),
      $('span', 'hrv2-case-counter', `CASE 0${id === 'sky-crane' ? '1' : '2'}  /  ${String(revealed).padStart(2, '0')} OF ${record.clues.length} TRACES`)
    );
    main.append(bar);

    const stage = $('section', 'hrv2-investigation-stage');
    const stageCopy = $('div', 'hrv2-stage-copy');
    stageCopy.append(
      makeEyebrow(`FIELD SCAN // ${record.location}`),
      $('h1', 'hrv2-stage-title', 'UNIDENTIFIED OBJECT'),
      $('p', 'hrv2-stage-description', 'The archive has isolated an unknown piece of mission hardware. Its identity is withheld. Only the recovered evidence can unlock the original record.')
    );
    const facts = $('div', 'hrv2-stage-facts');
    facts.append(makeMeta('LOCATION', record.location), makeMeta('OBJECT TYPE', 'UNKNOWN'));
    stageCopy.append(facts);
    const scan = $('div', 'hrv2-scan-room');
    scan.append(svgScan(id === 'sky-crane' ? 'suspended' : 'instrument'));
    scan.append($('span', 'hrv2-scan-caption', 'LIVE SENSOR // SHAPE UNRESOLVED'));
    stage.append(stageCopy, scan);
    main.append(stage);

    const consolePanel = $('section', 'hrv2-evidence-console');
    const consoleHead = $('div', 'hrv2-console-heading');
    consoleHead.append(
      makeEyebrow('SEQUENTIAL RECOVERY // GAME MODE'),
      $('h2', '', 'DECODE THE TRACES'),
      $('p', '', 'Open the active evidence node. Each recovered clue powers the next lock.')
    );
    const progressBox = $('div', 'hrv2-console-progress');
    progressBox.append($('strong', '', `${String(revealed).padStart(2, '0')} / ${String(record.clues.length).padStart(2, '0')}`), $('span', '', 'TRACES RECOVERED'));
    const progressTrack = $('div', 'hrv2-progress-track');
    const progressFill = $('span');
    progressFill.style.width = `${(revealed / record.clues.length) * 100}%`;
    progressTrack.append(progressFill);
    consoleHead.append(progressBox, progressTrack);
    consolePanel.append(consoleHead);

    const clueList = $('div', 'hrv2-clue-board');
    record.clues.forEach((clue, index) => {
      const number = index + 1;
      const isRevealed = number <= revealed;
      const isAvailable = number === revealed + 1;
      const item = $('article', `hrv2-clue-node ${isRevealed ? 'is-recovered' : isAvailable ? 'is-current' : 'is-locked'}`);
      const header = $('div', 'hrv2-clue-node-head');
      header.append(
        $('span', 'hrv2-clue-node-number', `TRACE ${String(number).padStart(2, '0')}`),
        $('span', 'hrv2-clue-node-status', isRevealed ? 'RECOVERED' : isAvailable ? 'AVAILABLE' : 'SEALED')
      );
      item.append(header);
      const orb = $('div', 'hrv2-clue-orb', isRevealed ? '✓' : isAvailable ? '◉' : '⌑');
      item.append(orb);
      if (isRevealed) {
        item.append($('p', 'hrv2-clue-text', clue), $('span', 'hrv2-clue-confirmation', 'EVIDENCE LOGGED ✓'));
      } else if (isAvailable) {
        item.append(
          $('p', 'hrv2-clue-prompt', 'An encrypted fragment is ready to be recovered.'),
          button('REVEAL TRACE →', 'hrv2-reveal-button', () => {
            playHiddenCue('click.mp3', 0.34);
            const latest = readHiddenState();
            if ((latest.clueProgress[id] || 0) !== number - 1) return;
            latest.clueProgress[id] = number;
            writeHiddenState(latest);
            const savedScrollY = window.scrollY;
            const finalClue = number === record.clues.length;
            renderInvestigation(id, finalClue ? null : savedScrollY, finalClue);
          })
        );
      } else {
        item.append($('p', 'hrv2-clue-locked-copy', 'Complete the previous trace to release this evidence node.'));
      }
      clueList.append(item);
    });
    consolePanel.append(clueList);
    main.append(consolePanel);

    if (revealed >= record.clues.length) {
      const question = $('section', 'hrv2-identification-test');
      question.append(
        makeEyebrow('FINAL LOCK // EVIDENCE COMPLETE'),
        $('h2', '', 'WHAT DID YOU FIND?'),
        $('p', 'hrv2-question-copy', 'Use the recovered traces to identify the role this object played in the mission.')
      );
      const choices = $('div', 'hrv2-answer-grid');
      record.choices.forEach(choice => choices.append(
        button(choice.label, 'hrv2-answer-choice', () => submitGuess(id, choice.id))
      ));
      const feedback = $('p', 'hrv2-answer-feedback');
      feedback.id = 'hiddenAnswerFeedback';
      feedback.setAttribute('aria-live', 'polite');
      question.append(choices, feedback);
      main.append(question);
    }

    main.append(makeFooter(`CASE 0${id === 'sky-crane' ? '1' : '2'} // IDENTITY SEALED // 2126`));
    root.append(main);
    renderIntoApp(root, restoreScrollY);
    if (focusQuestion && revealed >= record.clues.length) {
      requestAnimationFrame(() => root.querySelector('.hrv2-identification-test')?.scrollIntoView({
        behavior: REDUCED_MOTION ? 'auto' : 'smooth', block: 'start'
      }));
    }
  }

  function makeMeta(label, value) {
    const node = $('div', 'hidden-meta-pair');
    node.append($('span', '', label), $('strong', '', value));
    return node;
  }

  function submitGuess(id, selectedId) {
    const record = RECORDS[id];
    if (selectedId === record.answer) {
      markComplete(id);
      // Clear the evidence/question surface entirely. Only the identified record
      // remains after the correct answer, so no stale clue or guess UI survives.
      renderRevealTransition(id);
      return;
    }
    const feedback = document.getElementById('hiddenAnswerFeedback');
    if (feedback) {
      feedback.textContent = record.retryHint;
      feedback.classList.remove('is-visible');
      void feedback.offsetWidth;
      feedback.classList.add('is-visible');
    }
    const panel = document.querySelector('.hidden-question-panel');
    if (panel) {
      panel.classList.remove('is-wrong');
      void panel.offsetWidth;
      panel.classList.add('is-wrong');
      window.setTimeout(() => panel.classList.remove('is-wrong'), 520);
    }
  }

  function renderRevealTransition(id) {
    const root = makeRoot('hidden-reveal-transition hrv2-reveal-transition');
    root.append(makeHeader('HIDDEN RECORDS // IDENTIFICATION CONFIRMED', 'SIGNAL RESOLVED'));
    const main = $('main', 'hrv2-shell hrv2-reveal-main');
    const target = $('div', 'hrv2-reveal-target');
    target.append($('span', '', '✓'));
    main.append(
      target,
      makeEyebrow('ALL TRACES RECOVERED // MATCH CONFIRMED'),
      $('h1', 'hrv2-reveal-title', 'OBJECT IDENTIFIED'),
      $('p', 'hrv2-reveal-copy', 'The evidence has a match. Releasing the original NASA mission record…')
    );
    root.append(main);
    renderIntoApp(root);
    const token = audioGeneration;
    schedule(() => renderIdentifiedRecord(id, false), REDUCED_MOTION ? 120 : 1050, token);
  }

  // ------------------------------ IDENTIFIED RECORD -----------------------
  let activeRecordTab = 'discover';
  function renderIdentifiedRecord(id, reviewMode = false) {
    const record = RECORDS[id];
    activeRecordTab = 'discover';
    const root = makeRoot(`hxc-record-screen ${id === 'rtg' ? 'is-rtg-record' : 'is-sky-crane-record'}`);
    root.append(makeHeader('HIDDEN RECORDS // RECOVERED MISSION HARDWARE', 'IDENTITY RESTORED'));
    const main = $('main', 'hxc-record-main');
    const nav = $('div', 'hxc-record-nav');
    nav.append(button('← CASE BOARD', 'hxc-back-button', () => renderIntoApp(renderHiddenLanding())), $('span', 'hxc-case-counter', `RECOVERED OBJECT // 0${id === 'sky-crane' ? '1' : '2'} OF 02`));
    main.append(nav);

    const hero = $('section', 'hxc-record-hero');
    const copy = $('div', 'hxc-record-copy');
    copy.append(makeEyebrow('IDENTITY RESTORED // NASA RECORD UNSEALED'), $('h1', 'hxc-record-title', record.title), $('p', 'hxc-record-subtitle', record.subtitle));
    const metadata = $('div', 'hxc-record-meta');
    metadata.append(makeMeta('FIELD SITE', record.location), makeMeta('ARCHIVE STATUS', 'IDENTIFIED // VERIFIED SOURCE AVAILABLE'));
    copy.append(metadata);
    const figure = $('figure', 'hxc-record-figure');
    const image = $('img');image.src = new URL(record.image, IMAGE_ROOT).href;image.alt = record.alt;image.loading = 'eager';image.decoding = 'async';image.fetchPriority = 'high';figure.append(image);
    const credit = $('figcaption', 'hxc-record-image-credit');credit.append($('span', '', `IMAGE CREDIT: ${record.credit}`));
    const imageLink = $('a', '', 'NASA IMAGE SOURCE ↗');imageLink.href = record.imageSource;imageLink.target = '_blank';imageLink.rel = 'noopener noreferrer';credit.append(imageLink);figure.append(credit);
    hero.append(copy, figure);main.append(hero);

    if (id === 'sky-crane') main.append(makeLandingSequence(record));
    const learning = $('section', 'hxc-learning');
    const tabs = $('div', 'hxc-record-tabs');tabs.setAttribute('role', 'tablist');tabs.setAttribute('aria-label', 'Identified object record layers');
    const discover = button('DISCOVER', 'hxc-record-tab is-active', () => setRecordTab('discover', id, root, main));discover.setAttribute('role', 'tab');discover.setAttribute('aria-selected', 'true');discover.id = 'hiddenDiscoverTab';
    const explore = button('EXPLORE NASA DATA', 'hxc-record-tab', () => setRecordTab('explore', id, root, main));explore.setAttribute('role', 'tab');explore.setAttribute('aria-selected', 'false');explore.id = 'hiddenExploreTab';
    tabs.append(discover, explore);
    const layer = $('section', 'hxc-record-layer');layer.id = 'hiddenRecordLayer';layer.setAttribute('role', 'tabpanel');
    learning.append(tabs, layer);main.append(learning);renderRecordLayer(layer, id, 'discover');

    const story = $('section', 'hxc-record-story');
    story.append($('span', 'hxc-story-label', 'TEAM INTERPRETATION // 2126 ARCHIVE STORY'), $('p', 'hxc-story-lead', record.storyLead), $('p', 'hxc-story-detail', record.story));main.append(story);
    const actions = $('div', 'hxc-record-actions');
    const nextLabel = id === 'sky-crane' ? 'RETURN TO CASE BOARD →' : 'COMPLETE HIDDEN RECORDS →';
    actions.append(makeNewHiddenButton(nextLabel, 'primary', () => { if (id === 'sky-crane') renderIntoApp(renderHiddenLanding()); else renderHiddenCompletion(); }));
    if (reviewMode && id === 'rtg') actions.append(makeNewHiddenButton('RETURN TO ARCHIVE 99% →', 'secondary', () => window.THANavigation?.goTo('archive99')));
    main.append(actions, makeFooter(`OBJECT IDENTIFIED // ${record.location} // NASA DATA RESTORED`));root.append(main);renderIntoApp(root);
  }
    function makeLandingSequence(record) {
    const section = $('section', 'hxc-landing-sequence');
    section.append(makeEyebrow('CINEMATIC MISSION SEQUENCE'), $('h2', '', 'A CONTROLLED DESCENT'));
    section.append($('p', 'hxc-sequence-copy', 'The platform held position above the surface. Long tethers lowered the rover. When the wheels met the ground, the landing system released and departed.'));
    const steps = $('ol', 'hxc-sequence-steps');
    record.discover.sequence.forEach((name, index) => { const item = $('li', 'hxc-sequence-step');item.append($('span', '', `0${index + 1}`), $('strong', '', name));steps.append(item); });
    section.append(steps);return section;
  }
  function makeNewHiddenButton(label, kind, onClick) {
    const node = button(label, `hxc-action hxc-action-${kind || 'primary'}`, onClick);
    return node;
  }
    function setRecordTab(tab, id, root, main) {
    activeRecordTab = tab;
    root.querySelectorAll('.hxc-record-tab').forEach(node => {
      const selected = node.id === (tab === 'discover' ? 'hiddenDiscoverTab' : 'hiddenExploreTab');
      node.classList.toggle('is-active', selected);
      node.setAttribute('aria-selected', selected ? 'true' : 'false');
    });
    const content = root.querySelector('#hiddenRecordLayer');
    if (content) {
      content.classList.remove('is-layer-entering');
      renderRecordLayer(content, id, tab);
      void content.offsetWidth;
      content.classList.add('is-layer-entering');
    }
  }

  function renderRecordLayer(container, id, tab) {
    container.replaceChildren();
    const record = RECORDS[id];
    const panel = $('div', `hxc-layer-panel hxc-layer-${tab}`);
    if (tab === 'discover') {
      panel.append(makeEyebrow('DISCOVER // OBJECT PURPOSE'), $('h2', 'hxc-layer-title', 'WHAT WAS IT?'), $('p', 'hxc-discover-lead', record.discover.lead));
      if (id === 'rtg' && record.secondaryImage) {
        const figure = $('figure', 'hxc-discover-figure');
        const image = $('img');image.src = new URL(record.secondaryImage, IMAGE_ROOT).href;image.alt = record.secondaryAlt;image.loading = 'lazy';image.decoding = 'async';figure.append(image);
        const caption = $('figcaption', 'hxc-image-caption');caption.append($('span', '', `CREDIT: ${record.secondaryImageCredit || record.credit || 'NASA / JSC'}`));
        const link = $('a', '', 'NASA IMAGE SOURCE ↗');link.href = id === 'rtg' ? 'https://science.nasa.gov/image-detail/1202px-alsep-apollo-14-rtg-12021/' : (record.secondaryImageSource || record.imageSource);link.target = '_blank';link.rel = 'noopener noreferrer';caption.append(link);figure.append(caption);panel.append(figure);
      }
      panel.append(makeInfoBlock('THE OBJECT', record.discover.what), makeInfoBlock('WHY IT MATTERED', record.discover.importance), makeInfoBlock('HOW IT WORKED', record.discover.purpose));
    } else {
      panel.append(makeEyebrow('EXPLORE // NASA DATA'), $('h2', 'hxc-layer-title', 'MISSION RECORD'));
      const rows = $('dl', 'hxc-data-list');
      record.nasaData.forEach(([key, value]) => { const row = $('div', 'hxc-data-row');row.append($('dt', '', key), $('dd', '', value));rows.append(row); });
      panel.append(rows);
      const source = $('aside', 'hxc-source-box');
      source.append($('span', 'hxc-source-kicker', 'VERIFIED SOURCE // NASA DATA'), $('p', '', record.verified), $('strong', 'hxc-source-title', record.officialSourceLabel));
      const link = $('a', 'hxc-source-link', 'VIEW OFFICIAL SOURCE ↗');link.href = record.officialSource;link.target = '_blank';link.rel = 'noopener noreferrer';source.append(link);panel.append(source);
    }
    container.append(panel);
  }
    function makeInfoBlock(label, text) {
    const block = $('section', 'hxc-info-block');
    block.append($('h3', '', label), $('p', '', text));
    return block;
  }

  // ------------------------------ CHAPTER FIVE COMPLETION -----------------
  function renderHiddenCompletion() {
    const state = readHiddenState();
    if (state.completed.length < 2) return renderIntoApp(renderHiddenLanding());
    stopHiddenAudio();
    const root = makeRoot('hxc-completion-screen');
    const main = $('main', 'hxc-completion-main');
    const card = $('section', 'hxc-completion-card');
    card.append(
      $('h1', 'hxc-completion-title', '🔒 HIDDEN RECORDS'),
      $('p', 'hxc-completion-word', 'COMPLETE'),
      $('p', 'hxc-completion-count', '2 / 2 ✓'),
      $('p', 'hxc-completion-question', 'When we leave a spacecraft behind,\ndo we really leave only the spacecraft?'),
      $('p', 'hxc-completion-answer', 'No.'),
      $('p', 'hxc-completion-poem', 'We leave what carried it.\nWhat landed it.\nWhat powered it.\nWhat protected it.'),
      $('p', 'hxc-completion-last', 'Every mission leaves\na trace behind.')
    );
    const actions = $('div', 'hxc-completion-actions');
    actions.append(
      makeNewHiddenButton('REPLAY HIDDEN RECORDS ↺', 'secondary', () => {
        stopHiddenAudio();
        const fresh = { completed: [], clueProgress: { 'sky-crane': 0, rtg: 0 } };
        writeHiddenState(fresh);
        try { const progress = safeRead(PROGRESS_KEY, {});progress.hidden = 0;progress.hiddenRecords = 0;localStorage.setItem(PROGRESS_KEY, JSON.stringify(progress)); } catch (_) {}
        window.THA?.setProgress?.('hidden', 0);renderIntoApp(renderHiddenLanding());
      }),
      makeNewHiddenButton('RETURN TO ARCHIVE', 'primary', () => window.THANavigation?.goTo('archive99'))
    );
    main.append(card, actions);root.append(main);renderIntoApp(root);
    if (audioAllowed()) playCue('piano.mp3', 0.34, false);
  }
    // ------------------------------ MOUNT / HELPERS -------------------------
  function renderIntoApp(node, restoreScrollY = null) {
    const app = document.getElementById('app');
    if (!app || !node) return;
    // Replace without routing for internal transitions. Clue reveals preserve
    // the visitor's current reading position instead of snapping to page top.
    app.replaceChildren(node);
    if (Number.isFinite(restoreScrollY)) window.scrollTo({ top: restoreScrollY, left: 0, behavior: 'auto' });
    else window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
    window.THAIdentity?.restoreForCurrentRoute?.();
  }

  function renderHiddenRecords() {
    startHiddenHum();
    const state = readHiddenState();
    if (!isHiddenSectionUnlocked()) {
      const root = makeRoot('hidden-locked-screen');
      root.append(makeHeader('HIDDEN RECORDS // ACCESS SEALED', 'ARCHIVE LOCKED'));
      const main = $('main', 'hidden-main hidden-access-locked');
      main.append(makeEyebrow('ACCESS REQUIREMENT // 09 MAIN RECORDS'), makeTitle('HIDDEN RECORDS'), $('p', '', 'This evidence zone remains sealed until the Moon, Mars and Other Traces archives are complete.'), makeActionRowFallback());
      root.append(main);
      return root;
    }
    if (state.completed.length === 2) return renderHiddenCompletion();
    return renderHiddenLanding();
  }

  function makeActionRowFallback() {
    const row = $('div', 'hidden-actions');
    row.append(button('RETURN TO ARCHIVE MAP', 'hidden-button hidden-secondary-button', () => window.THANavigation?.goTo('menu')));
    return row;
  }

  window.renderHiddenRecords = renderHiddenRecords;
  })();
