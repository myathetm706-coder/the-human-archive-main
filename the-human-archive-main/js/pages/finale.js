/* ============================================================================
   THE HUMAN ARCHIVE — CHAPTER EIGHT / FINALE
   A slow, green-lit ending: silence → testimony → breath → piano → signal.
   ============================================================================ */
(() => {
  'use strict';
  const AUDIO_ROOT = new URL('../../assets/audio/', document.currentScript.src);
  const REDUCED_MOTION = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches === true;
  const $ = (tag, cls = '', text = null) => {
    const node = document.createElement(tag);
    if (cls) node.className = cls;
    if (text !== null) node.textContent = String(text);
    return node;
  };

  let sequence = 0;
  let timers = new Set();
  let tracks = [];
  let prepared = false;
  let previousBodyOverflow = '';
  let previousHtmlOverflow = '';
  function muted() { return window.THA?.audioMuted === true; }
  function schedule(fn, ms, token) {
    const id = window.setTimeout(() => { timers.delete(id); if (token === sequence) fn(); }, REDUCED_MOTION ? Math.min(ms, 80) : ms);
    timers.add(id); return id;
  }
  function wait(ms, token) { return new Promise(resolve => schedule(resolve, ms, token)); }
  function waitExact(ms, token) {
    return new Promise(resolve => {
      const id = window.setTimeout(() => { timers.delete(id); resolve(); }, ms);
      timers.add(id);
    });
  }
  function play(name, volume = 0.42, loop = false) {
    if (muted()) return null;
    const audio = new Audio(new URL(name, AUDIO_ROOT).href);
    audio.preload = 'auto'; audio.volume = volume; audio.loop = loop; tracks.push(audio);
    const request = audio.play(); if (request && typeof request.catch === 'function') request.catch(() => {});
    return audio;
  }
  function stop() {
    sequence += 1;
    timers.forEach(window.clearTimeout); timers.clear();
    tracks.forEach(audio => { try { audio.pause(); audio.currentTime = 0; } catch (_) {} });
    tracks = []; prepared = false;
    document.body.classList.remove('tha-finale-scroll-locked');
    if (previousBodyOverflow !== null) document.body.style.overflow = previousBodyOverflow;
    if (previousHtmlOverflow !== null) document.documentElement.style.overflow = previousHtmlOverflow;
  }
  function primeFromGesture() {
    stop();
    if (muted()) return false;
    ['deep-breath.mp3', 'single-piano-note.mp3', 'signal.mp3'].forEach(name => {
      const silent = new Audio(new URL(name, AUDIO_ROOT).href); silent.volume = 0.001; silent.preload = 'auto';
      const request = silent.play();
      if (request && typeof request.then === 'function') request.then(() => { silent.pause(); silent.currentTime = 0; }).catch(() => {});
      else { try { silent.pause(); silent.currentTime = 0; } catch (_) {} }
    });
    prepared = true;
    return true;
  }
  function waitForEnd(audio, fallback, token) {
    if (!audio) return wait(fallback, token);
    return new Promise(resolve => {
      let done = false;
      const finish = () => { if (done) return; done = true; audio.removeEventListener('ended', finish); resolve(); };
      audio.addEventListener('ended', finish, { once: true }); schedule(finish, fallback, token);
    });
  }
  function revealLines(container, lines, token, gap = 880, scrollEach = false) {
    return lines.reduce((promise, line, index) => promise.then(async () => {
      if (token !== sequence) return;
      const node = $('p', 'tha-finale-line', line);
      container.append(node);
      // Force the initial hidden state to be committed before revealing.
      void node.offsetWidth;
      node.classList.add('is-visible');
      if (scrollEach && !REDUCED_MOTION) node.scrollIntoView({ behavior: 'smooth', block: 'center' });
      if (index === lines.length - 1) return;
      await wait(gap, token);
    }), Promise.resolve());
  }

  async function runFinale(root, token) {
    const opening = root.querySelector('.tha-finale-opening-lines');
    const reflection = root.querySelector('.tha-finale-reflection');
    const thesis = root.querySelector('.tha-finale-thesis');
    const motto = root.querySelector('.tha-finale-motto');
    const restart = root.querySelector('.tha-finale-restart-wrap');

    await wait(REDUCED_MOTION ? 100 : 3200, token); // long, intentional opening silence
    await revealLines(opening, [
      'Humanity went into space.',
      'It built things.',
      'It brought some of them back.',
      'It left some of them behind.',
      'Some fell silent.',
      'Some are still carrying out',
      'part of their mission.',
      'But all of them carry a trace',
      'of humanity.'
    ], token, 900);
    if (token !== sequence) return;
    // Let the final opening line complete its soft reveal before the breath cue.
    await waitExact(1150, token);
    if (token !== sequence) return;

    const breath = play('deep-breath.mp3', 0.34, false);
    await waitForEnd(breath, 4850, token);
    if (token !== sequence) return;
    reflection.hidden = false;
    if (!REDUCED_MOTION) reflection.parentElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
    await revealLines(reflection, [
      'Leaving something behind',
      'does not mean its story',
      'has come to an end.'
    ], token, 1050);
    if (token !== sequence) return;

    // Let the final line finish its 1.15-second reveal, then hold the
    // complete reflection passage for three full seconds.
    await waitExact(1150, token);
    if (token !== sequence) return;
    await waitExact(3000, token);
    if (token !== sequence) return;
    thesis.hidden = false;
    if (!REDUCED_MOTION) thesis.parentElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
    const piano = play('single-piano-note.mp3', 0.50, false);
    await revealLines(thesis, ['ONE ARCHIVE REMAINS.', 'YOURS.'], token, 1250, false);
    if (token !== sequence) return;
    // Finish the final line's reveal, then hold the complete two-line
    // archive statement for three full seconds.
    await waitExact(1150, token);
    if (token !== sequence) return;
    await waitExact(3000, token);
    if (token !== sequence) return;
    motto.hidden = false;
    motto.classList.add('is-visible');
    if (!REDUCED_MOTION) motto.scrollIntoView({ behavior: 'smooth', block: 'center' });

    // Let the motto finish its 1.8-second appearance, then keep it fully
    // visible for three seconds while the piano note fades away.
    await waitExact(1800, token);
    if (token !== sequence) return;
    const fadePiano = async () => {
      if (!piano) return;
      const fadeStart = piano.volume;
      const steps = 12;
      for (let step = 1; step <= steps; step += 1) {
        await waitExact(250, token);
        if (token !== sequence) return;
        try { piano.volume = Math.max(0, fadeStart * (1 - step / steps)); } catch (_) {}
      }
      try { piano.pause(); piano.currentTime = 0; } catch (_) {}
    };
    await Promise.all([fadePiano(), waitExact(3000, token)]);
    if (token !== sequence) return;

    root.classList.add('is-fading-to-black');
    await wait(REDUCED_MOTION ? 100 : 1800, token);
    if (token !== sequence) return;
    restart.hidden = false;
    restart.classList.add('is-visible');
    if (!REDUCED_MOTION) restart.scrollIntoView({ behavior: 'smooth', block: 'center' });
    previousBodyOverflow = document.body.style.overflow;
    previousHtmlOverflow = document.documentElement.style.overflow;
    document.body.classList.add('tha-finale-scroll-locked');
    document.body.style.overflow = 'hidden';
    document.documentElement.style.overflow = 'hidden';
    const signal = play('signal.mp3', 0.18, true);
    if (signal) signal.volume = 0.18;
  }

  function clearArchiveForRestart() {
    try {
      const keys = [];
      for (let index = 0; index < localStorage.length; index += 1) {
        const key = localStorage.key(index);
        if (key && key.startsWith('tha') && key !== 'thaAudioMuted') keys.push(key);
      }
      keys.forEach(key => localStorage.removeItem(key));
      // Keep audio preference, but reset all mission/archive progress and the contribution.
      localStorage.removeItem('thaPersonalArchive');
      localStorage.removeItem('thaProgress');
    } catch (error) {
      console.warn('The archive could not be completely reset in local storage.', error);
    }
  }

  function renderFinale() {
    stop();
    const token = sequence;
    const root = $('main', 'tha-finale-screen');
    root.setAttribute('aria-labelledby', 'thaFinaleHeading');
    // Chapter Eight is deliberately stripped back: only the fixed Space
    // Archaeologist identity badge remains in the upper-right corner.
    root.append($('div', 'tha-finale-stars'));
    const main = $('section', 'tha-finale-main');
    const openingStage = $('section', 'tha-finale-stage tha-finale-stage-opening');
    const overline = $('p', 'tha-finale-overline', 'FINAL TRANSMISSION // 2126'); overline.id = 'thaFinaleHeading';
    openingStage.append(overline);
    const opening = $('div', 'tha-finale-opening-lines'); openingStage.append(opening);
    const reflectionStage = $('section', 'tha-finale-stage tha-finale-stage-reflection');
    reflectionStage.append($('div', 'tha-finale-reflection')); reflectionStage.firstElementChild.hidden = true;
    const thesisStage = $('section', 'tha-finale-stage tha-finale-stage-thesis');
    thesisStage.append($('div', 'tha-finale-thesis')); thesisStage.firstElementChild.hidden = true;
    const mottoStage = $('section', 'tha-finale-stage tha-finale-stage-motto');
    mottoStage.append($('p', 'tha-finale-motto', 'ABANDONED ≠ FORGOTTEN.')); mottoStage.firstElementChild.hidden = true;
    const restartStage = $('section', 'tha-finale-stage tha-finale-stage-restart');
    const restartWrap = $('div', 'tha-finale-restart-wrap'); restartWrap.hidden = true;
    const restartButton = $('button', 'tha-finale-restart', 'START AGAIN'); restartButton.type = 'button';
    restartButton.addEventListener('click', () => {
      stop();
      window.THAArchiveExperience?.stop?.();
      window.THAYourArchiveExperience?.stop?.();
      window.THAHiddenAudio?.stopHum?.();
      window.THAMarsAudio?.stop?.();
      window.THAOtherAudio?.stop?.();
      window.stopAllOpeningAudio?.();
      clearArchiveForRestart();
      window.THAIdentity?.hide?.();
      window.THANavigation?.goTo('splash');
    });
    restartWrap.append(restartButton, $('p', 'tha-finale-signal-copy', 'The first signal returns. Weak. But continuous.'), $('p', 'tha-finale-end-note', 'The archive is over. But the story continues.'));
    restartStage.append(restartWrap);
    main.append(openingStage, reflectionStage, thesisStage, mottoStage, restartStage);
    root.append(main);
    runFinale(root, token);
    return root;
  }

  window.THAFinaleExperience = { primeFromGesture, isPrepared: () => prepared, stop };
  window.renderFinale = renderFinale;
})();
