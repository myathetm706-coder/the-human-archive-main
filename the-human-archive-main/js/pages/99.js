/* ============================================================================
   THE HUMAN ARCHIVE — CHAPTER SIX / 99% CLIMAX
   Independent screen module. Audio order: beep → silence → two heartbeat beats.
   ============================================================================ */
(() => {
  'use strict';

  const AUDIO_ROOT = new URL('../../assets/audio/', document.currentScript.src);
  const REDUCED_MOTION = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches === true;
  const $ = (tag, className = '', text = null) => {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (text !== null) node.textContent = String(text);
    return node;
  };
  const makeAudio = (name, volume = 0.45, loop = false) => {
    const audio = new Audio(new URL(name, AUDIO_ROOT).href);
    audio.preload = 'auto';
    audio.volume = volume;
    audio.loop = loop;
    return audio;
  };

  let sequence = 0;
  let activeAudio = [];
  let activeTimers = new Set();
  let gestureBeep = null;

  function muted() { return window.THA?.audioMuted === true; }
  function schedule(fn, delay, token) {
    const timer = window.setTimeout(() => {
      activeTimers.delete(timer);
      if (token === sequence) fn();
    }, REDUCED_MOTION ? Math.min(delay, 100) : delay);
    activeTimers.add(timer);
    return timer;
  }
  function wait(delay, token) {
    return new Promise(resolve => schedule(resolve, delay, token));
  }
  function waitExact(delay, token) {
    return new Promise(resolve => {
      const timer = window.setTimeout(() => {
        activeTimers.delete(timer);
        resolve();
      }, delay);
      activeTimers.add(timer);
    });
  }
  function play(name, volume = 0.42, loop = false) {
    if (muted()) return null;
    const audio = makeAudio(name, volume, loop);
    activeAudio.push(audio);
    const request = audio.play();
    if (request && typeof request.catch === 'function') request.catch(() => {});
    return audio;
  }
  function waitForEnd(audio, fallbackMs, token) {
    if (!audio) return wait(fallbackMs, token);
    return new Promise(resolve => {
      let finished = false;
      const done = () => {
        if (finished) return;
        finished = true;
        audio.removeEventListener('ended', done);
        resolve();
      };
      audio.addEventListener('ended', done, { once: true });
      schedule(done, fallbackMs, token);
    });
  }
  function stop() {
    sequence += 1;
    activeTimers.forEach(timer => window.clearTimeout(timer));
    activeTimers.clear();
    activeAudio.forEach(audio => {
      try { audio.pause(); audio.currentTime = 0; } catch (_) {}
    });
    activeAudio = [];
    gestureBeep = null;
  }

  function play99BeepFromGesture() {
    stop();
    if (muted()) return null;
    gestureBeep = play('beep.mp3', 0.42, false);
    // Prime the next chapter's old-door cue while this archive-return tap is active.
    window.THAYourArchiveExperience?.primeDoorFromGesture?.();
    // Prime the heartbeat under the same visitor gesture; it is heard later,
    // only when the archive asks its final question.
    const prime = makeAudio('heartbeat.mp3', 0.001, false);
    const request = prime.play();
    if (request && typeof request.then === 'function') {
      request.then(() => { prime.pause(); prime.currentTime = 0; }).catch(() => {});
    } else {
      try { prime.pause(); prime.currentTime = 0; } catch (_) {}
    }
    return gestureBeep;
  }

  async function runClimax(root, token) {
    const intro = root.querySelector('.tha99-intro-lines');
    const question = root.querySelector('.tha99-question');


    await waitForEnd(gestureBeep, 2250, token);
    if (token !== sequence) return;
    await wait(1250, token); // deliberate silence after the short archive beep

    const lines = [...intro.querySelectorAll('[data-reveal-line]')];
    for (const line of lines) {
      line.classList.add('is-revealed');
      if (!REDUCED_MOTION) line.scrollIntoView({ behavior: 'smooth', block: 'center' });
      await wait(REDUCED_MOTION ? 100 : 1050, token);
    }

    root.classList.add('is-heartbeat-phase');
    question.classList.add('is-revealed');
    if (!REDUCED_MOTION) question.scrollIntoView({ behavior: 'smooth', block: 'center' });
    const firstBeat = play('heartbeat.mp3', 0.58, false);
    await waitForEnd(firstBeat, 1100, token);
    if (token !== sequence) return;
    await wait(760, token);
    const secondBeat = play('heartbeat.mp3', 0.58, false);
    await waitForEnd(secondBeat, 1100, token);
    if (token !== sequence) return;
    // Once the question and both heartbeat cues have completed, leave the
    // fully revealed 99% screen in place for seven complete seconds.
    await waitExact(7000, token);
    if (token !== sequence) return;
    root.classList.add('is-departing');
    await wait(REDUCED_MOTION ? 80 : 1250, token);
    if (token !== sequence) return;
    window.THANavigation?.goTo('yourArchive');
  }

  function renderArchive99() {
    // Preserve the beep started inside the visitor's Return-to-Archive tap.
    const prestartedBeep = gestureBeep;
    sequence += 1;
    activeTimers.forEach(timer => window.clearTimeout(timer));
    activeTimers.clear();
    activeAudio = prestartedBeep ? [prestartedBeep] : [];
    gestureBeep = prestartedBeep;
    const token = sequence;
    const root = $('main', 'tha99-screen');
    root.setAttribute('aria-labelledby', 'tha99Title');
    root.innerHTML = `
      <div class="tha99-grain" aria-hidden="true"></div>
      <header class="tha-menu-topbar tha99-menu-header">
        <div class="tha-menu-brand">
          <span class="tha-menu-brand-mark" aria-hidden="true">THA</span>
          <span class="tha-menu-brand-copy"><strong>THE HUMAN ARCHIVE</strong><small>99% RECOVERY // FINAL SIGNAL</small></span>
        </div>
        <div class="tha-menu-topbar-actions">
          <span class="tha-menu-system"><i aria-hidden="true"></i> CHAPTER SIX // RECOVERY INDEX</span>
          <div class="tha-menu-identity-slot" id="thaMenuIdentitySlot" aria-label="Assigned Space Archaeologist"></div>
        </div>
      </header>
      <section class="tha99-main">
        <div class="tha99-heading">
          <p class="tha99-overline">CHAPTER SIX — THE CLIMAX</p>
          <h1 id="tha99Title">ARCHIVE STATUS</h1>
          <p class="tha99-subtitle">ALL KNOWN TRACES HAVE BEEN RECOVERED</p>
        </div>
        <div class="tha99-instrument-layout">
          <section class="tha99-orbit-instrument" aria-label="Archive recovery is at 99 percent">
            <div class="tha99-orbit tha99-orbit-a"></div><div class="tha99-orbit tha99-orbit-b"></div>
            <div class="tha99-orbit-core"><span class="tha99-index-label">RECOVERY INDEX</span><strong>99<span>%</span></strong><small>ONE SIGNAL UNRESOLVED</small></div>
            <span class="tha99-orbit-point tha99-point-a"></span><span class="tha99-orbit-point tha99-point-b"></span>
          </section>
          <section class="tha99-ledger" aria-label="Recovered archive sections">
            <div class="tha99-ledger-head"><span>THE HUMAN ARCHIVE</span><span>RECORD STATUS</span></div>
            <div class="tha99-status-row"><span class="tha99-status-icon">🌙</span><strong>MOON</strong><span class="tha99-status-count">3 / 3</span><b>✓</b></div>
            <div class="tha99-status-row"><span class="tha99-status-icon">🔴</span><strong>MARS</strong><span class="tha99-status-count">4 / 4</span><b>✓</b></div>
            <div class="tha99-status-row"><span class="tha99-status-icon">🛰️</span><strong>OTHER TRACES</strong><span class="tha99-status-count">2 / 2</span><b>✓</b></div>
            <div class="tha99-status-row"><span class="tha99-status-icon">🔒</span><strong>HIDDEN RECORDS</strong><span class="tha99-status-count">2 / 2</span><b>✓</b></div>
            <div class="tha99-ledger-foot"><span>ARCHIVE</span><strong>99% COMPLETE</strong><i>STRUCTURAL RECOVERY // CONFIRMED</i></div>
          </section>
        </div>
        <section class="tha99-transmission" aria-live="polite">
          <div class="tha99-transmission-head"><span>INCOMING TRANSMISSION</span><span class="tha99-transmission-state">DECODING…</span></div>
          <div class="tha99-intro-lines">
            <p data-reveal-line>Why 99%? Everything is complete.</p>
            <p data-reveal-line>Every record is unlocked. Every trace has been found.</p>
            <p data-reveal-line>But the archive still says 99%.</p>
          </div>
          <p class="tha99-question">WHAT'S MISSING?</p>
        </section>
        <p class="tha99-footnote">THE FINAL ONE PERCENT HAS NOT BEEN RECOVERED.</p>
      </section>`;

    runClimax(root, token);
    return root;
  }

  window.THAArchiveExperience = { play99BeepFromGesture, stop };
  window.renderArchive99 = renderArchive99;
})();
