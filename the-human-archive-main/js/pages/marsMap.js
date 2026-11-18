/* ============================================================================
   THE HUMAN ARCHIVE — CHAPTER THREE: MARS
   Four independently designed records, matching Belge 1 and Belge 2:
   04 Sojourner (Template A), 05 Spirit (Template A),
   06 Opportunity (Template B + 5-second SIGNAL LOST),
   07 Ingenuity (Template B + 1–72 flight slider).
   ============================================================================ */
(() => {
  'use strict';
  const $ = (tag, cls, txt) => { const n=document.createElement(tag); if(cls)n.className=cls; if(txt!==undefined)n.textContent=String(txt); return n; };
  const btn = (txt, cls, fn) => { const n=$('button',cls,txt); n.type='button'; n.addEventListener('click',fn); return n; };
  const IMG='assets/images/';
  const AUDIO='assets/audio/';
  const SOURCE = {
    sojourner:'https://www.jpl.nasa.gov/missions/mars-pathfinder-sojourner-rover/',
    spirit:'https://science.nasa.gov/mission/mer-spirit/',
    opportunity:'https://science.nasa.gov/mission/mer-opportunity/',
    ingenuity:'https://www.jpl.nasa.gov/videos/see-ingenuitys-flight-map-72-helicopter-flights-on-mars/'
  };
  const DATA = [
    {
      id:'sojourner', number:4, step:1, title:'SOJOURNER', eyebrow:'THE FIRST TO ROAM', subtitle:'A microwave-sized rover. The first steps of surface mobility.', location:'ARES VALLIS',
      images:[
        {src:'sojourner-rover-mars-surface.webp',alt:'Sojourner rover on the Martian surface',credit:'NASA / JPL',url:'https://images.nasa.gov/details/PIA01122'},
        {src:'sojourner-and-yogi.webp',alt:'Sojourner rover examining the Yogi rock on Mars',credit:'NASA / JPL',url:'https://images.nasa.gov/details/PIA00766'}
      ],
      traces:[
        'One of the first successful rovers to travel across Mars.',
        'Part of the Mars Pathfinder mission.',
        'Operated for 83 sols.'
      ],
      what:'A small, six-wheeled robotic rover — humanity’s first successful wheeled vehicle to explore the surface of Mars.',
      purpose:'It tested rover mobility and science operations on another planet, and examined nearby rocks and soil.',
      fate:'It was designed for a short 7-day mission, but operated for 83 sols before communication ended.',
      why:'Sojourner proved that a mobile robot could travel across Mars and investigate its surface at close range.',
      mission:'Mars Pathfinder', arrival:'July 4, 1997', operation:'83 sols', size:'30 cm (1 foot)', weight:'10.6 kg (23 pounds)', distance:'About 100 metres', planned:'7 days',
      storyLead:'It was one of the first rovers to move across the Martian surface. Despite its small size, it was traveling across the surface of an entirely new world.',
      story:'Humanity’s tiny, trailblazing Mars rover — only the size of a microwave oven. It was engineered to last just 7 days, but explored for 83 sols (Martian days) and travelled about 100 metres before falling silent.'
    },
    {
      id:'spirit', number:5, step:2, title:'SPIRIT', eyebrow:'SIX YEARS', subtitle:'A robotic geologist that outlasted its planned mission by years.', location:'GUSEV CRATER',
      images:[
        {src:'spirit-rover-gusev-crater.webp',alt:'NASA Spirit rover on the surface of Gusev Crater',credit:'NASA / JPL-Caltech / Cornell University',url:'https://images.nasa.gov/details/PIA04413'},
        {src:'gusev-crater-map.webp',alt:'Map showing Spirit’s landing and exploration region in Gusev Crater',credit:'NASA / JPL-Caltech / ASU / Cornell University',url:'https://images.nasa.gov/details/PIA21006'}
      ],
      traces:[
        'The rover became embedded in soft soil in May 2009.',
        'Later that year, its right-rear wheel stopped working, leaving four functioning wheels.',
        'Gusev Crater, Mars. 14.5684° S, 175.4726° E. Mars Exploration Rover A (MER-A), 2004–2011.',
        'Evidence of past water activity and hydrothermal processes.'
      ],
      what:'Spirit was a robotic geologist rover, one of NASA’s Mars Exploration Rovers.',
      purpose:'It examined rocks and soil in Gusev Crater to investigate the history of water and the Martian environment.',
      fate:'Spirit became embedded in soft soil in May 2009. Its right-rear wheel stopped working later that year, leaving four functioning wheels. It stopped communicating in March 2010; NASA ended the mission on May 25, 2011.',
      why:'Its observations revealed strong evidence that water had altered Martian rocks and terrain in the past, including signs of hydrothermal processes.',
      mission:'Mars Exploration Rover A (MER-A)', coordinates:'14.5684° S, 175.4726° E', period:'2004–2011', planned:'90 sols', actual:'2,210 sols', distance:'~7.73 km', end:'May 25, 2011',
      storyLead:'It was designed for 90 days. It lasted six years.',
      story:'Spirit became embedded in soft soil in May 2009. Later that year, its right-rear wheel stopped working, leaving four functioning wheels. It continued scientific work until communication was lost in March 2010. Its observations revealed evidence of ancient water and hydrothermal activity on Mars.'
    },
    {
      id:'opportunity', number:6, step:3, title:'OPPORTUNITY', eyebrow:'THE HEART OF THE STORY', subtitle:'A rover that kept going — until the signal disappeared.', location:'MERIDIANI PLANUM',
      images:[{src:'opportunity-rover-greeley-panorama.webp',alt:'Opportunity rover panorama at Endeavour Crater on Mars',credit:'NASA / JPL-Caltech / Cornell / Arizona State University',url:'https://images.nasa.gov/details/PIA15689'}],
      what:'Opportunity was a robotic geologist rover, the second Mars Exploration Rover (MER-B).',
      purpose:'It explored rocks and soil to investigate evidence that liquid water once existed on Mars.',
      fate:'A massive planet-wide dust storm blocked sunlight from its solar panels. Contact was lost in June 2018; the mission ended in February 2019.',
      why:'Opportunity travelled farther than any other Mars rover at the time and transformed scientific understanding of ancient water on Mars.',
      mission:'Mars Exploration Rover B (MER-B)',arrival:'January 25, 2004',planned:'90 sols',actual:'5,498 sols',last:'June 10, 2018',end:'February 13, 2019',distance:'45.16 km',
      storyLead:'Then it fell silent.',
      story:'The ultimate planetary distance runner. Built to survive for 90 days, Opportunity outlasted all expectations by operating for 5,498 sols and covering 45.16 km before a massive, planet-wide dust storm permanently blocked its solar power panels in 2018.',
      timeline:[
        ['2004','LANDING'],
        ['2005','FIRST ROCK EXAMINATION'],
        ['2007','VICTORIA CRATER'],
        ['2010','20 KM TRAVELLED'],
        ['AUG 9, 2011','ENDEAVOUR CRATER ARRIVAL'],
        ['2014','10 YEARS ON MARS'],
        ['2018','MASSIVE DUST STORM']
      ]
    },
    {
      id:'ingenuity', number:7, step:4, title:'INGENUITY', eyebrow:'FLIGHT', subtitle:'A small helicopter. The first powered flight on another planet.', location:'JEZERO CRATER',
      images:[{src:'ingenuity-mars-helicopter.webp',alt:'NASA Ingenuity Mars Helicopter on the Martian surface',credit:'NASA / JPL-Caltech',url:'https://images.nasa.gov/details/PIA23882'}],
      what:'Ingenuity was a small robotic helicopter delivered to Mars with the Perseverance rover.',
      purpose:'It was a technology demonstrator designed to test powered, controlled flight in the thin Martian atmosphere.',
      fate:'After completing 72 flights, a rotor blade was damaged during its final flight. The mission ended on January 25, 2024.',
      why:'Ingenuity became the first aircraft to achieve powered, controlled flight on another planet and opened a path for future aerial explorers.',
      mission:'Mars 2020 / Perseverance technology demonstration',planned:'5 flights',actual:'72 flights',first:'April 19, 2021',final:'January 18, 2024',end:'January 25, 2024',
      storyLead:'What did Ingenuity leave behind?',
      legacy:['Data.','Design lessons.','A path for future flying vehicles.'],
      story:'The little rotorcraft that could. Planned for only five short test flights, Ingenuity flew through the thin Martian atmosphere 72 times, becoming the first aircraft to achieve powered, controlled flight on another planet. A rotor blade was damaged during its final flight.'
    }
  ];
  const PROGRESS='thaProgress';
  let timers=[], effects=[], ambient=null, activeWhirr=null;
  const warmedImages=new Set();
  const warmedAudio=new Map();

  function getProgress(){try{return Math.max(0,Math.min(4,Number(JSON.parse(localStorage.getItem(PROGRESS)||'{}').mars)||0));}catch(_){return 0;}}
  function saveProgress(count){try{const p=JSON.parse(localStorage.getItem(PROGRESS)||'{}');p.mars=Math.max(Number(p.mars)||0,Math.min(4,count));localStorage.setItem(PROGRESS,JSON.stringify(p));window.THA?.setProgress?.('mars',p.mars);return p.mars;}catch(_){return count;}}
  function clearTimers(){timers.forEach(clearTimeout);timers=[];}
  function stopEffects(){effects.forEach(a=>{try{a.pause();a.currentTime=0;}catch(_){}});effects=[];}
  function stopAll(){clearTimers();stopEffects();stopWhirr();try{ambient?.pause();if(ambient)ambient.currentTime=0;}catch(_){}}
  function audio(file,volume=.3){
    if(window.THA?.audioMuted)return null;
    try{
      // Reuse the media element already warmed for the next rover whenever possible.
      let a=warmedAudio.get(file);
      if(a&&a.paused){warmedAudio.delete(file);try{a.currentTime=0;}catch(_){}}
      else{a=new Audio(AUDIO+file);a.preload='auto';a.load();}
      a.volume=volume;
      effects.push(a);
      return a;
    }catch(_){return null;}
  }
  function play(file,volume,onFailure=null){const a=audio(file,volume);if(!a)return null;if(typeof onFailure==='function')a.addEventListener('error',onFailure,{once:true});const request=a.play();if(request&&typeof request.catch==='function')request.catch(()=>{if(typeof onFailure==='function')onFailure();});return a;}
  function startAmbient(){if(!ambient||window.THA?.audioMuted)return;if(ambient.volume<.05||ambient.volume>.90)ambient.volume=.78;ambient.play().catch(()=>{});}
  function pauseAmbient(){try{ambient?.pause();if(ambient)ambient.currentTime=0;}catch(_){}}
  function fadeMedia(media,target,duration,onDone){if(!media){onDone?.();return;}const token=(media.__thaFadeToken||0)+1;media.__thaFadeToken=token;const start=media.volume,steps=Math.max(1,Math.ceil(duration/60));let i=0;const tick=()=>{if(media.__thaFadeToken!==token)return;i++;media.volume=start+(target-start)*(i/steps);if(i>=steps){if(target===0&&media===ambient)pauseAmbient();onDone?.();return;}const t=setTimeout(tick,duration/steps);timers.push(t);};tick();}
  function stopWhirr(){try{activeWhirr?.pause();if(activeWhirr)activeWhirr.currentTime=0;}catch(_){}activeWhirr=null;}
  function warmImages(){
    const next=DATA.find(record=>record.step>getProgress());
    if(!next)return;
    // Warm only the next record's own gallery (two small WebP files at most).
    // Other chapters stay on-demand and all below-the-fold gallery images remain lazy.
    next.images.forEach(item=>{
      if(warmedImages.has(item.src))return;
      warmedImages.add(item.src);
      const image=new Image();
      image.decoding='async';
      image.fetchPriority='low';
      image.loading='eager';
      image.src=IMG+item.src;
    });
  }
  function warmMarsAudio(){
    const next=DATA.find(record=>record.step>getProgress());
    if(!next||window.THA?.audioMuted)return;
    const files=['click.mp3'];
    if(next.id==='sojourner')files.push('wheel-roll.mp3');
    if(next.id==='spirit')files.push('deep-curiosity-hum.mp3');
    if(next.id==='opportunity')files.push('single-piano-note.mp3','piano.mp3');
    if(next.id==='ingenuity')files.push('helicopter-whirr.mp3','damage-sound.mp3','piano.mp3','electronic-ping.mp3');
    files.forEach(file=>{
      if(warmedAudio.has(file))return;
      try{
        const track=new Audio(AUDIO+file);
        track.preload='auto';track.volume=0;track.load();
        warmedAudio.set(file,track);
      }catch(_){}
    });
  }
  function external(url,label='VIEW OFFICIAL NASA SOURCE ↗'){const a=$('a','mars-source',label);a.href=url;a.target='_blank';a.rel='noopener noreferrer';return a;}
  function addImageCard(parent,item,index=0){
    const figure=$('figure','mrx-image-frame');
    const image=$('img');
    image.src=IMG+item.src;
    image.alt=item.alt;
    image.loading=index===0?'eager':'lazy';
    image.decoding='async';
    image.fetchPriority=index===0?'high':'low';
    const caption=$('figcaption','mrx-image-caption');
    caption.append($('span','',item.credit+' ·'));
    const link=$('a','','NASA IMAGE SOURCE ↗');
    link.href=item.url;link.target='_blank';link.rel='noopener noreferrer';
    caption.append(link);
    figure.append(image,caption);parent.append(figure);return figure;
  }
  function gallery(r){
    const grid=$('div',`mrx-image-gallery${r.id==='sojourner'?' is-sojourner-gallery':''}${r.id==='spirit'?' is-spirit-gallery':''}${r.id==='opportunity'?' is-opportunity-gallery':''}`);
    const images=r.images;
    images.forEach((image,index)=>addImageCard(grid,image,index));
    if(r.id==='ingenuity') addImageCard(grid,{src:'ingenuity-flight-path-optimized.webp',alt:'NASA/JPL map tracing the paths of Ingenuity helicopter flights 1 through 72',credit:'NASA / JPL-Caltech',url:'https://www.jpl.nasa.gov/videos/see-ingenuitys-flight-map-72-helicopter-flights-on-mars/'},1);
    return grid;
  }
    function learningLayer(r){
    const panel=$('section','mrx-layer-panel mrx-discover-panel');
    panel.append($('p','mrx-kicker','DISCOVER // THE OBJECT'));
    const questions=[['01 · WHAT WAS IT?',r.what],['02 · WHAT DID IT DO?',r.purpose],['03 · WHY DOES IT MATTER?',r.why]];
    const list=$('div','mrx-answer-grid');
    questions.forEach(([question,answer])=>{
      const card=$('article','mrx-answer-card');
      card.append($('h3','',question),$('p','',answer));list.append(card);
    });
    panel.append(list);return panel;
  }
  function nasaData(r){
    const panel=$('section','mrx-data-card');
    panel.append($('p','mrx-kicker','NASA DATA // VERIFIED MISSION FACTS'));
    let fields=[];
    if(r.id==='opportunity'){
      fields=[['ARRIVAL','January 25, 2004'],['PLANNED','90 sols'],['ACTUAL','5,498 sols'],['LAST CONTACT','June 10, 2018'],['MISSION END','February 13, 2019'],['DISTANCE','45.16 km']];
    }else{
      if(r.mission)fields.push(['MISSION',r.mission]);
      if(r.location)fields.push(['LOCATION',r.location]);
      if(r.coordinates)fields.push(['COORDINATES',r.coordinates]);
      if(r.arrival)fields.push(['ARRIVAL',r.arrival]);
      if(r.period)fields.push(['MISSION PERIOD',r.period]);
      if(r.planned&&r.id!=='spirit')fields.push(['PLANNED',r.planned]);
      if(r.actual&&r.id!=='spirit')fields.push([r.id==='ingenuity'?'COMPLETED':'ACTUAL',r.actual]);
      if(r.operation&&r.id!=='sojourner')fields.push(['OPERATION',r.operation]);
      if(r.size&&r.id!=='sojourner')fields.push(['SIZE',r.size]);
      if(r.weight&&r.id!=='sojourner')fields.push(['WEIGHT',r.weight]);
      if(r.distance)fields.push(['DISTANCE',r.distance]);
      if(r.last)fields.push(['LAST CONTACT',r.last]);
      if(r.first)fields.push(['FIRST FLIGHT',r.first]);
      if(r.final)fields.push(['FINAL FLIGHT',r.final]);
      if(r.end)fields.push(['MISSION END',r.end]);
    }
    const grid=$('dl','mrx-data-grid');
    fields.forEach(([key,value])=>{const row=$('div','mrx-data-row');row.append($('dt','',key),$('dd','',value));grid.append(row);});
    panel.append(grid,external(SOURCE[r.id]));return panel;
  }
  function exploreLayer(r){
    const panel=$('div','mrx-layer-panel mrx-explore-panel');
    panel.append($('p','mrx-kicker','EXPLORE // NASA DATA'));
    panel.append(nasaData(r));
    return panel;
  }
  function tabs(r){
    const section=$('section','mrx-learning-module');
    section.setAttribute('aria-label','Discover and explore mission information');
    const bar=$('div','mrx-tabs');
    const discover=btn('DISCOVER','mrx-tab is-active',()=>select(true));
    const explore=btn('EXPLORE','mrx-tab',()=>select(false));
    discover.setAttribute('aria-pressed','true');explore.setAttribute('aria-pressed','false');
    const d=$('div','mrx-layer');const e=$('div','mrx-layer');
    d.append(learningLayer(r));e.append(exploreLayer(r));e.hidden=true;
    bar.append(discover,explore);section.append(bar,d,e);
    const visited=new Set(['discover']);section.dataset.visitedLayers='discover';
    function select(show){
      d.hidden=!show;e.hidden=show;
      discover.classList.toggle('is-active',show);explore.classList.toggle('is-active',!show);
      discover.setAttribute('aria-pressed',String(show));explore.setAttribute('aria-pressed',String(!show));
      visited.add(show?'discover':'explore');section.dataset.visitedLayers=[...visited].join(',');
      section.dispatchEvent(new CustomEvent('tha-layer-visited'));
    }
    return section;
  }
  function storyCard(r){
    const story=$('section','mrx-story-card');
    story.append($('p','mrx-kicker','TEAM INTERPRETATION / 2126 ARCHIVE STORY'));
    if(r.storyLead)story.append($('p','mrx-story-lead',r.storyLead));
    if(r.legacy){const legacy=$('div','mrx-story-legacy');r.legacy.forEach(line=>legacy.append($('p','',line)));story.append(legacy);}
    if(r.story)story.append($('p','mrx-story-copy',r.story));
    return story;
  }
    function identifiedRecords(){try{return JSON.parse(localStorage.getItem(IDENTIFIED_KEY)||'[]');}catch(_){return [];}}
  function markIdentified(id){const found=new Set(identifiedRecords());found.add(id);try{localStorage.setItem(IDENTIFIED_KEY,JSON.stringify([...found]));}catch(_){}}
  function isIdentified(r){return identifiedRecords().includes(r.id)||r.step<=getProgress();}
  function recordHeader(r){
    const header=$('header','mars-record-top mars-case-heading');
    const mystery=(r.id==='sojourner'||r.id==='spirit')&&!isIdentified(r);
    header.append(
      $('p','mars-overline',`CHAPTER THREE // ${mystery?'UNIDENTIFIED TRACE':'IDENTIFIED RECORD'} ${r.number}`),
      $('p','mars-eyebrow',r.eyebrow),
      $('h1','mars-case-title',mystery?'UNKNOWN OBJECT':r.title),
      $('p','mars-record-subtitle',mystery?'Identity withheld until the evidence is recovered.':r.subtitle),
      $('p','mars-location',mystery?'FIELD COORDINATES // WITHHELD':'FIELD SITE // '+r.location)
    );
    return header;
  }
  function footer(onRecord=false){const f=$('footer',`mars-footer${onRecord?' mars-record-footer':''}`);f.append($('span','','MARS SURFACE SURVEY // ARCHIVE 2126'),btn(onRecord?'← MARS FIELD MAP':'← ARCHIVE MENU','mars-secondary',()=>window.THANavigation?.goTo(onRecord?'marsMap':'menu')));return f;}
  function playSojournerWheelThenAmbient(){
    // The wheel cue is intentionally isolated: do not restart the Martian bed
    // until the complete wheel-roll clip has ended (or failed to load).
    pauseAmbient();
    const wheel=play('wheel-roll.mp3',.34);
    let resumed=false;
    const resume=()=>{
      if(resumed)return;
      resumed=true;
      if(wheel){wheel.removeEventListener('ended',resume);wheel.removeEventListener('error',resume);}
      if(rootIsMarsMap())startAmbient();
    };
    function rootIsMarsMap(){return Boolean(document.querySelector('.tha-mars-screen') && document.querySelector('.tha-mars-screen .mars-map-intro'));}
    if(wheel){
      wheel.addEventListener('ended',resume,{once:true});
      wheel.addEventListener('error',resume,{once:true});
      const fallback=setTimeout(resume,5000);
      timers.push(fallback);
    }else resume();
  }
  function addContinue(root,r,layers=null){
    const actions=$('div',`mrx-record-actions is-${r.id}-actions`);
    const label=r.number===7?'MARS ARCHIVE COMPLETE →':`RETURN TO MARS MAP // TRACE ${r.number+1} →`;
    actions.append(btn(label,'mrx-primary',()=>{
      saveProgress(r.step);
      if(r.number===7){renderCompletion(root,false);return;}
      if(r.id==='sojourner'){renderMarsMapInto(root,false);playSojournerWheelThenAmbient();return;}
      if(r.id==='spirit'){
        pauseAmbient();const cue=play('deep-curiosity-hum.mp3',.25);
        if(cue){cue.addEventListener('ended',()=>startAmbient(),{once:true});setTimeout(()=>{if(ambient&&ambient.paused)startAmbient();},4200);}else startAmbient();
        if(ambient)fadeMedia(ambient,.38,120);
        renderMarsMapInto(root);if(ambient)ambient.volume=.78;return;
      }
      renderMarsMapInto(root);
    }));
    return actions;
  }
  function recoveredHeader(r){
    const header=$('header','mrx-record-heading');
    header.append(
      $('p','mrx-kicker',`CHAPTER THREE // MARS FIELD RECORD ${String(r.number).padStart(2,'0')}`),
      $('p','mrx-record-eyebrow',r.eyebrow),
      $('h1','mrx-record-title',r.title),
      $('p','mrx-record-subtitle',r.subtitle),
      $('span','mrx-record-location',`FIELD SITE // ${r.location}`)
    );
    return header;
  }
    function traceSequence(root,r,content){
    const section=$('section','mars-trace-game');
    const intro=$('div','mars-trace-game-intro');
    intro.append(
      $('p','mars-overline','FIELD INVESTIGATION // LIVE EVIDENCE'),
      $('h2','','FOLLOW THE TRACE'),
      $('p','mars-trace-instruction','Recover each signal in order. Every trace unlocks the next fragment of the object’s story.')
    );
    const status=$('div','mars-trace-game-status');
    const count=$('strong','mars-trace-count',`00 / ${String(r.traces.length).padStart(2,'0')}`);
    const statusLabel=$('span','','TRACES RECOVERED');
    status.append(count,statusLabel);
    const track=$('div','mars-trace-progress-track');
    const fill=$('span','mars-trace-progress-fill');
    track.append(fill);
    intro.append(status,track);
    section.append(intro);

    const list=$('div','mars-trace-board');
    let revealed=0;
    const cards=[];
    r.traces.forEach((line,i)=>{
      const card=$('article',`mars-trace-node ${i===0?'is-active':'is-sealed'}`);
      card.dataset.trace=String(i+1);
      const meta=$('div','mars-trace-node-meta');
      meta.append($('span','mars-trace-index',`TRACE ${String(i+1).padStart(2,'0')}`),$('span','mars-trace-state',i===0?'SIGNAL FOUND':'SEALED'));
      const trigger=btn(i===0?'DECODE TRACE →':'AWAITING PREVIOUS TRACE','mars-trace-trigger',()=>{
        if(i!==revealed||trigger.disabled)return;
        play('click.mp3',.38);
        card.classList.remove('is-active');
        card.classList.add('is-recovered');
        trigger.disabled=true;
        trigger.textContent='TRACE RECOVERED ✓';
        card.querySelector('.mars-trace-state').textContent='RECOVERED';
        const copy=$('p','mars-trace-copy',line);
        card.append(copy);
        revealed++;
        count.textContent=`${String(revealed).padStart(2,'0')} / ${String(r.traces.length).padStart(2,'0')}`;
        fill.style.width=`${(revealed/r.traces.length)*100}%`;
        const next=cards[revealed];
        if(next){
          next.classList.remove('is-sealed');
          next.classList.add('is-active');
          const nextButton=next.querySelector('.mars-trace-trigger');
          if(nextButton){nextButton.disabled=false;nextButton.textContent='DECODE NEXT TRACE →';}
          next.querySelector('.mars-trace-state').textContent='SIGNAL FOUND';
        }
        if(revealed===r.traces.length){
          markIdentified(r.id);
          section.classList.add('is-sequence-complete');
          // Do not append a second completion message below the clues. Move
          // directly into the dedicated, full-screen identity confirmation.
          const t=setTimeout(()=>{if(root.isConnected)renderMarsTraceTransition(root,r);},2000);
          timers.push(t);
        }
      });
      trigger.disabled=i!==0;
      card.append(meta,$('div','mars-trace-node-glyph',String(i+1).padStart(2,'0')),trigger);
      list.append(card);
      cards.push(card);
    });
    section.append(list);
    return section;
  }
  function unidentifiedObject(r){
    const panel=$('section','mars-mystery-scan');
    panel.setAttribute('aria-label',`Unidentified scan for record ${r.number}`);
    panel.append($('p','mars-overline','UNIDENTIFIED TRACE // SCAN IN PROGRESS'),$('h2','','OBJECT DETECTED'),$('p','mars-mystery-copy','The archive has found a shape beneath the Martian dust. Recover the clues to identify it.'));
    const scan=$('div','mars-silhouette-stage');
    scan.innerHTML='<svg viewBox="0 0 560 220" role="img" aria-label="An unidentified rover-shaped silhouette, not an actual mission photograph"><defs><linearGradient id="scanGlow" x1="0" x2="1"><stop stop-color="#f1a27c" stop-opacity=".04"/><stop offset=".5" stop-color="#f1a27c" stop-opacity=".26"/><stop offset="1" stop-color="#f1a27c" stop-opacity=".04"/></linearGradient></defs><path d="M20 186H540M36 160H524" stroke="#f0aa82" stroke-opacity=".16" stroke-dasharray="4 12"/><ellipse cx="280" cy="173" rx="165" ry="17" fill="#030706" opacity=".55"/><g fill="#120b08" stroke="#f5b28b" stroke-opacity=".5" stroke-width="3"><path d="M178 125h186l-14-40h-76l-13-30h-38l-10 28h-30z"/><path d="M223 84l5-42h58l9 42"/><path d="M250 41h25v-18h-25z"/><path d="M169 125h-18v24h18m209-24h18v24h-18"/></g><g fill="#0b0807" stroke="#f4b18c" stroke-width="3"><circle cx="195" cy="151" r="23"/><circle cx="280" cy="151" r="23"/><circle cx="365" cy="151" r="23"/></g><path d="M0 110H560" stroke="url(#scanGlow)" stroke-width="28"/><path d="M0 110H560" stroke="#ffd0ae" stroke-opacity=".65" stroke-dasharray="3 16"/></svg>';
    panel.append(scan,$('span','mars-scan-caption','ARCHIVE VISUAL // SCHEMATIC SILHOUETTE · NOT A NASA IMAGE'));
    return panel;
  }
  function missionDurationCompare(r){
    if(r.id!=='spirit')return null;
    const section=$('section','mrx-duration-card');
    section.append($('p','mrx-kicker','MISSION LIFE // PLANNED VS ACTUAL'),$('h2','','90 SOLS → 2,210 SOLS'),$('p','mrx-section-copy','Spirit was designed for a 90-sol primary mission. It kept working for 2,210 sols — more than 24 times the planned duration.'));
    const bars=$('div','mrx-duration-bars');
    [['PLANNED','90 sols',90],['ACTUAL','2,210 sols',2210]].forEach(([label,value,number])=>{
      const row=$('div','mrx-duration-row');row.append($('span','mrx-duration-label',label),$('strong','mrx-duration-value',value));
      const track=$('span','mrx-duration-track');const fill=$('i','mrx-duration-fill');fill.style.setProperty('--bar-target',(number/2210*100)+'%');fill.style.width=(number/2210*100)+'%';track.append(fill);row.append(track);bars.append(row);
    });
    section.append(bars,$('p','mrx-duration-tagline','DESIGNED FOR 90 SOLS. IT LASTED SIX YEARS.'));return section;
  }
    function buildTemplateA(root,r,content){
    if(r.step<=getProgress()||isIdentified(r)){
      renderIdentifiedMarsRecord(root,r);
      return;
    }
    content.append(traceSequence(root,r,content));
  }
  function revealTemplateA(root,r,content,open){
    renderIdentifiedMarsRecord(root,r);
  }

  function renderMarsTraceTransition(root,r){
    clearTimers();
    stopEffects();
    pauseAmbient();
    root.className='tha-mars-screen is-trace-transition';
    // Keep the shared Mars archive header visible during the confirmation.
    // The transition itself has no footer and no record-specific header.
    const header=fieldHeader();
    root.replaceChildren(header);

    const main=$('main','mars-trace-transition-main');
    const ring=$('div','mars-trace-transition-ring');
    ring.append($('span','mars-trace-check','✓'));
    main.append(
      ring,
      $('p','mars-overline','FIELD INVESTIGATION // TRACE COMPLETE'),
      $('h1','','IDENTITY CONFIRMED'),
      $('p','mars-trace-transition-copy','All evidence fragments align. Restoring the original mission record…')
    );
    root.append(main);
    window.THAIdentity?.mountInMenu?.();
    window.scrollTo({top:0,behavior:'auto'});

    // Hold the confirmation screen for a full three seconds before opening
    // the identified record dossier.
    const t=setTimeout(()=>{
      if(root.isConnected)renderIdentifiedMarsRecord(root,r);
    },3000);
    timers.push(t);
  }

  function sojournerQuickFacts(){
    const section=$('section','mrx-fact-ribbon');
    [['HEIGHT','30 cm','About one foot tall.'],['MASS','10.6 kg','A remarkably small planetary rover.'],['MISSION LIFE','83 sols','It far outlasted its planned 7-day mission.']].forEach(([label,value,note],index)=>{
      const card=$('article','mrx-fact-card');
      card.append($('span','mrx-fact-index',`0${index+1}`),$('span','mrx-fact-label',label),$('strong','mrx-fact-value',value),$('p','mrx-fact-note',note));
      section.append(card);
    });
    return section;
  }
  function makeDiscoverExploreReveal(root,r){
    const section=$('section',`mrx-reveal-section mrx-reveal-${r.id}`);
    const trigger=btn('DISCOVER + EXPLORE','mrx-primary mrx-reveal-trigger',()=>{
      const open=section.classList.toggle('is-open');
      trigger.setAttribute('aria-expanded',String(open));
      trigger.textContent=open?'HIDE DISCOVER + EXPLORE':'DISCOVER + EXPLORE';
      body.hidden=!open;story.hidden=!open;actions.hidden=!open;
      if(open)requestAnimationFrame(()=>layerWrap.scrollIntoView({behavior:'smooth',block:'start'}));
    });
    trigger.setAttribute('aria-expanded','false');
    const body=$('div','mrx-reveal-body');body.hidden=true;
    const layerWrap=tabs(r);
    body.append(layerWrap);
    const story=storyCard(r);story.hidden=true;
    const actions=addContinue(root,r,layerWrap);actions.hidden=true;
    section.append(trigger,body,story,actions);
    return section;
  }
    function renderIdentifiedMarsRecord(root,r){
    stopEffects();clearTimers();
    root.className='tha-mars-screen mrx-experience-screen is-record is-identified-record';
    root.replaceChildren(fieldHeader(),recoveredHeader(r));
    const content=$('main','mrx-record-main');
    content.append($('p','mrx-progress',`MARS ARCHIVE // ${r.step} OF 04 RECORDS RECOVERED · ALL CLUES RECOVERED`));
    const hero=$('section','mrx-record-hero');
    hero.append(gallery(r));content.append(hero);
    if(r.id==='sojourner')content.append(sojournerQuickFacts());
    if(r.id==='spirit'){
      const compare=missionDurationCompare(r);if(compare)content.append(compare);
      const wheel=$('section','mrx-wheel-status');
      wheel.append($('p','mrx-kicker','WHEEL STATUS // LATE 2009'),$('h2','','4 OF 6 WORKING'),$('p','','The right-rear wheel stopped working in late 2009. Spirit continued operating with four functioning wheels.'));
      content.append(wheel);
    }
    content.append(makeDiscoverExploreReveal(root,r));
    root.append(content,footer(true));
    if(ambient)ambient.volume=.78;startAmbient();
    window.THAIdentity?.mountInMenu?.();
    window.scrollTo({top:0,behavior:'smooth'});
  }
  function buildOpportunity(root,r,content){
    content.append(gallery(r));
    const timeline=$('section','mars-timeline is-appearing');
    timeline.append(
      $('p','mars-overline','THE HEART OF THE STORY // MISSION TIMELINE'),
      $('p','mars-timeline-help','The timeline assembles one stop at a time. Select each year to recover the next event.')
    );
    const ol=$('ol','mars-events');let selected=0;
    r.timeline.forEach(([year,label],i)=>{
      const li=$('li','mars-event-item');li.style.animationDelay=(i*160)+'ms';
      const action=btn('', 'mars-event',()=>{
        if(i!==selected)return;
        action.disabled=true;action.classList.add('is-selected');
        action.querySelector('.mars-event-prompt')?.remove();
        action.append($('span','mars-event-year',year),$('strong','mars-event-title',label));
        play('click.mp3',.3);
        selected++;
        if(ambient){const target=Math.min(.78,.50+selected*.055);fadeMedia(ambient,target,850);}
        const next=ol.querySelectorAll('.mars-event')[selected];
        if(next)next.disabled=false;
        if(selected===r.timeline.length){
          const storm=$('section','mars-storm-gate');
          storm.append(
            $('p','mars-overline','2018'),
            $('h2','','A MASSIVE DUST STORM ON MARS')
          );
          timeline.append(storm);
          requestAnimationFrame(()=>storm.scrollIntoView({behavior:'smooth',block:'center'}));
          // Let the Martian ambience swell under the final event, then begin
          // the approaching-storm crescendo one second later.
          if(ambient)fadeMedia(ambient,.88,420);
          const timer=setTimeout(()=>signalLost(root,r,content,storm),1000);timers.push(timer);
        }
      });
      action.disabled=i!==0;
      action.append($('span','mars-event-index',String(i+1).padStart(2,'0')),$('span','mars-event-prompt',`${year}  ·  ${label}`));
      li.append(action);ol.append(li);
    });
    timeline.append(ol);content.append(timeline);
  }

  function signalLost(root,r,content,storm){
    if(content.dataset.signalStarted)return;
    content.dataset.signalStarted='true';

    // The final storm swell rises quickly. At its peak, the sound is cut
    // abruptly and the entire viewport becomes black before SIGNAL LOST.
    fadeMedia(ambient,1,760,()=>{
      if(!root.isConnected)return;
      root.classList.add('is-signal-blackout');
      const blackout=$('section','mars-signal-sequence');
      blackout.setAttribute('role','status');
      blackout.setAttribute('aria-live','assertive');
      content.replaceChildren(blackout);
      window.scrollTo({top:0,left:0,behavior:'auto'});
      pauseAmbient();stopEffects();stopWhirr();
      blackout.append($('h2','','SIGNAL LOST'));

      // Exactly five complete seconds of silence: no ambient bed, wind,
      // clicks, heartbeat, or piano is active during this interval.
      const reveal=setTimeout(()=>{
        if(!root.isConnected)return;
        root.classList.remove('is-signal-blackout');
        content.replaceChildren(gallery(r));
        const layers=tabs(r);
        content.append(layers);
        const story=storyCard(r);
        story.classList.add('is-revealing');
        content.append(story);
        const motto=$('p','mars-abandoned','ABANDONED ≠ FORGOTTEN.');
        motto.hidden=true;
        content.append(motto);
        const actions=addContinue(root,r,layers);
        actions.hidden=true;
        content.append(actions);
        requestAnimationFrame(()=>layers.scrollIntoView({behavior:'smooth',block:'start'}));

        // One isolated note marks the return of the archive layers and story.
        const returnNote=play('single-piano-note.mp3',.34);
        if(returnNote)fadeMedia(returnNote,0,2100,()=>{try{returnNote.pause();returnNote.currentTime=0;}catch(_){}});

        // The short piano cue accompanies the final motto and is allowed to
        // recede naturally instead of continuing underneath the next chapter.
        const revealMotto=()=>{
          if(!root.isConnected||!motto.isConnected)return;
          const piano=play('piano.mp3',.34);
          motto.hidden=false;
          motto.classList.add('is-revealing');
          actions.hidden=false;
          motto.scrollIntoView({behavior:'smooth',block:'center'});
          if(piano)fadeMedia(piano,0,1450,()=>{try{piano.pause();piano.currentTime=0;}catch(_){}});
        };
        const mottoTimer=setTimeout(revealMotto,2200);timers.push(mottoTimer);
      },5000);
      timers.push(reveal);
    });
  }

  function buildIngenuity(root,r,content){
    content.append(gallery(r));
    const flight=$('section','mrx-flight-console');
    flight.append(
      $('p','mrx-kicker','FLIGHT RECORD // FIVE PLANNED'),
      $('h2','','SEVENTY-TWO FLIGHTS'),
      $('p','mrx-section-copy','Move through the flight log. The first five flights were the original technology demonstration; the mission ultimately reached seventy-two.')
    );
    const stats=$('div','mrx-flight-stats');
    const planned=$('div','mrx-flight-stat');planned.append($('span','','ORIGINAL PLAN'),$('strong','','05'));planned.append($('small','','FLIGHTS'));
    const completed=$('div','mrx-flight-stat is-highlight');completed.append($('span','','COMPLETED'),$('strong','','72'));completed.append($('small','','FLIGHTS'));
    stats.append(planned,completed);
    const output=$('output','mrx-flight-output','FLIGHT 01 / 72');
    const range=$('input','mrx-flight-range');range.type='range';range.min='1';range.max='72';range.value='1';range.setAttribute('aria-label','Ingenuity flight number, 1 to 72');range.setAttribute('aria-valuetext','Flight 1 of 72');
    const markers=$('div','mrx-flight-markers');
    for(let i=0;i<72;i++){const dot=$('span','mrx-flight-marker');if(i<5)dot.classList.add('is-planned');markers.append(dot);}
    const damagePanel=$('section','mrx-flight-damage-panel');damagePanel.hidden=true;
    flight.append(stats,output,range,markers,damagePanel);content.append(flight);

    range.addEventListener('input',()=>{
      const number=Number(range.value);
      output.textContent=`FLIGHT ${String(number).padStart(2,'0')} / 72`;
      range.setAttribute('aria-valuetext',`Flight ${number} of 72`);
      markers.querySelectorAll('.mrx-flight-marker').forEach((dot,index)=>dot.classList.toggle('is-passed',index<number));
      if(number!==72||flight.dataset.final)return;

      flight.dataset.final='true';
      flight.classList.add('is-final-flight','is-vibrating');
      let damageStarted=false,whirrSafety=null,damageSafety=null,damageFinished=false;
      const stopWhirrMotion=()=>flight.classList.remove('is-vibrating');
      const finishDamageTremor=()=>{
        if(damageFinished)return;
        damageFinished=true;
        if(damageSafety)clearTimeout(damageSafety);
        root.classList.remove('mrx-damage-tremor');
      };

      const damageSequence=()=>{
        if(damageStarted||!flight.isConnected)return;
        damageStarted=true;
        if(whirrSafety)clearTimeout(whirrSafety);
        stopWhirrMotion();
        stopWhirr();
        pauseAmbient();

        // The rotor-damage cue is the exact moment the whole archive record
        // shakes and every final-flight detail is revealed together.
        damagePanel.replaceChildren();
        const finalFlight=$('section','mrx-final-flight-status');
        finalFlight.append(
          $('p','mrx-kicker','FINAL TRANSMISSION // FLIGHT RECORD'),
          $('h3','','FLIGHT 72 / 72'),
          $('p','','The final flight is logged. Rotor telemetry continues for a moment longer.')
        );
        damagePanel.append(finalFlight,$('p','mrx-kicker','FLIGHT 72 // ROTOR DAMAGE DETECTED'));
        addImageCard(damagePanel,{src:'ingenuity-flight-72-damaged.webp',alt:'NASA image of Ingenuity after flight 72, showing rotor blade damage',credit:'NASA / JPL-Caltech',url:'https://images.nasa.gov/details/PIA26243'},0);
        const story=storyCard(r);
        const layers=tabs(r);
        const actions=addContinue(root,r,layers);
        damagePanel.append(story,layers,actions);
        damagePanel.dataset.revealed='true';
        damagePanel.hidden=false;
        root.classList.add('mrx-damage-tremor');
        requestAnimationFrame(()=>finalFlight.scrollIntoView({behavior:'smooth',block:'center'}));

        const sound=play('damage-sound.mp3',.82,finishDamageTremor);
        if(sound){
          sound.addEventListener('ended',finishDamageTremor,{once:true});
          sound.addEventListener('error',finishDamageTremor,{once:true});
          damageSafety=setTimeout(finishDamageTremor,3500);
          timers.push(damageSafety);
        }else finishDamageTremor();
      };

      // While the helicopter whirs, only the flight-log console moves.
      // Full-screen tremble is reserved for the rotor-damage sound below.
      activeWhirr=play('helicopter-whirr.mp3',.78,damageSequence);
      if(activeWhirr){
        activeWhirr.addEventListener('ended',damageSequence,{once:true});
        activeWhirr.addEventListener('error',damageSequence,{once:true});
        whirrSafety=setTimeout(damageSequence,3500);
        timers.push(whirrSafety);
      }else damageSequence();
    });
  }
    function renderRecordInto(root,r){
    stopEffects();clearTimers();
    // The initial Sojourner and Spirit investigation is deliberately kept on
    // the existing Template A clue screen. Only the recovered dossier gets
    // the new Mars record design.
    if((r.id==='sojourner'||r.id==='spirit')&&(r.step<=getProgress()||isIdentified(r))){
      renderIdentifiedMarsRecord(root,r);return;
    }
    if(r.id==='sojourner'||r.id==='spirit'){
      root.className='tha-mars-screen is-record';
      root.replaceChildren(fieldHeader(),recordHeader(r));
      const content=$('main','mars-record-content');
      content.append($('p','mars-progress-line',`MARS ARCHIVE // ${getProgress()} OF 04 RECORDS RECOVERED`));
      buildTemplateA(root,r,content);
      root.append(content,footer(true));
    }else{
      root.className='tha-mars-screen mrx-experience-screen is-record';
      root.replaceChildren(fieldHeader(),recoveredHeader(r));
      const content=$('main','mrx-record-main');
      content.append($('p','mrx-progress',`MARS ARCHIVE // ${getProgress()} OF 04 RECORDS RECOVERED`));
      if(r.id==='opportunity')buildOpportunity(root,r,content);
      else buildIngenuity(root,r,content);
      root.append(content,footer(true));
    }
    if(ambient)ambient.volume=r.id==='opportunity'?.50:.78;
    startAmbient();window.THAIdentity?.mountInMenu?.();window.scrollTo({top:0,behavior:'smooth'});
  }
    function mapSVG(){return `<svg class="mars-terrain-svg" viewBox="0 0 1000 590" preserveAspectRatio="none" role="presentation" aria-hidden="true"><defs><linearGradient id="marsRoute" x1="0" y1="1" x2="1" y2="0"><stop stop-color="#ffe0c9"/><stop offset=".55" stop-color="#f4a27d"/><stop offset="1" stop-color="#fff1e4"/></linearGradient></defs><path d="M170 442 C260 420 325 380 420 325 S590 245 700 212 S800 135 860 88" fill="none" stroke="#1b0d08" stroke-width="14" stroke-opacity=".46"/><path d="M170 442 C260 420 325 380 420 325 S590 245 700 212 S800 135 860 88" fill="none" stroke="url(#marsRoute)" stroke-width="3" stroke-dasharray="7 12" stroke-linecap="round" opacity=".92"/></svg>`;}
  function mapRecordList(){const panel=$('aside','mars-expedition-list');panel.append($('p','mars-overline','FIELD LOG // RECOVERY ORDER'),$('h2','','THE ROVER YEARS'));DATA.forEach(r=>{const unlocked=r.step<=getProgress()+1;const complete=r.step<=getProgress();const label=complete?'RECOVERED // REOPEN':isIdentified(r)?'IDENTIFIED // REOPEN':unlocked?'READY TO OPEN':'LOCKED';const row=btn('',`mars-expedition-row${complete?' is-complete':''}${unlocked?' is-unlocked':' is-locked'}`,()=>{if(!unlocked)return;openRecordFromMap(r);});row.disabled=!unlocked;const copy=$('span','mars-expedition-copy');copy.append($('strong','',isIdentified(r)?r.title:(unlocked?'UNIDENTIFIED TRACE':'SEALED TRACE')));row.append($('span','mars-expedition-no',String(r.number).padStart(2,'0')),copy,$('span','mars-expedition-status',label));panel.append(row);});panel.append($('p','mars-expedition-note','The archive opens one new trace at a time. Recovered records can be revisited.'));return panel;}
  function openRecordFromMap(r){const root=document.querySelector('.tha-mars-screen');if(!root||r.step>getProgress()+1)return;startAmbient();play('click.mp3',.38);const frame=root.querySelector('.mars-map-frame');if(frame){frame.style.setProperty('--mars-focus-x',`${r.x||([17,42,70,86][r.step-1])}%`);frame.style.setProperty('--mars-focus-y',`${r.y||([75,55,36,15][r.step-1])}%`);frame.classList.add('is-zooming');}const t=window.setTimeout(()=>{if(root.isConnected)renderRecordInto(root,r);},660);timers.push(t);}
  function fieldHeader(){
    const header=$('header','tha-moon-header mars-header');
    const brand=$('div','tha-moon-brand');brand.append($('span','tha-moon-brand-mark','THA'));
    const brandCopy=$('div','tha-moon-brand-copy');brandCopy.append($('strong','','THE HUMAN ARCHIVE'),$('small','','FIELD RECOVERY // 2126'));brand.append(brandCopy);
    const right=$('div','tha-moon-header-right');
    const status=$('span','tha-moon-live');status.append($('i'),document.createTextNode('PLANETARY LINK // ACTIVE'));
    const identity=$('div','tha-moon-identity-slot');identity.id='thaMenuIdentitySlot';
    right.append(status,identity);header.append(brand,right);return header;
  }
  function renderMarsMapInto(root, startAudio=true){
    warmImages();
    warmMarsAudio();
    stopEffects();
    clearTimers();
    root.className='tha-mars-screen';
    root.replaceChildren();
    const header=fieldHeader();
    const intro=$('section','mars-map-intro');
    intro.append(
      $('p','mars-overline','A NEW WORLD // MARS EXPEDITION'),
      $('h1','','MARS / LOST OBJECT MAP'),
      $('p','mars-map-subtitle','A red world. Four traces. Follow the rover years.'),
      $('p','mars-map-intro-copy','A new atmosphere. A new surface. A route marked by the machines humanity left behind.')
    );
    const layout=$('section','mars-map-layout');
    const count=$('div','mars-recovery-counter');
    const next=DATA[Math.min(getProgress(),3)];
    count.append(
      $('span','mars-counter-label',getProgress()===4?'MARS ARCHIVE COMPLETE':'RECORD DETECTED: '+String(next.number)),
      $('strong','',`${getProgress()} / 4 RECOVERED`)
    );
    layout.append(count);
    const frame=$('div','mars-map-frame');
    const surface=$('img','mars-surface-image');
    surface.src=IMG+'mars-surface-map.webp';
    surface.alt='Rust-red rocky Martian landscape supplied for The Human Archive map background';
    surface.loading='eager';
    surface.decoding='async';
    frame.append(surface);
    frame.insertAdjacentHTML('beforeend',mapSVG());
    frame.append(
      $('span','mars-map-hud-top','MARS FIELD SURVEY // 4 SIGNALS'),
      $('span','mars-map-hud-bottom','PATHFINDER → GUSEV → MERIDIANI → JEZERO')
    );
    const coords=[[17,75],[42,55],[70,36],[86,15]];
    DATA.forEach((r,i)=>{
      const [x,y]=coords[i];
      r.x=x;r.y=y;
      const complete=r.step<=getProgress();
      const available=r.step<=getProgress()+1;
      const newlyUnlocked=available&&!complete;
      const mark=btn('',`mars-marker ${complete?'is-complete':''} ${available?'is-current':'is-locked'} ${newlyUnlocked?'is-new-unlock':''} ${i===3?'is-edge-right':''}`,()=>openRecordFromMap(r));
      mark.style.left=x+'%';mark.style.top=y+'%';
      mark.disabled=!available;
      mark.setAttribute('aria-label',`${r.number} ${complete?'identified':available?'unidentified trace detected':'unidentified trace locked'}`);
      const symbol=$('span','mars-marker-symbol');
      symbol.append($('span','mars-marker-number',String(r.number).padStart(2,'0')));
      const caption=isIdentified(r)?r.title:(available?'UNIDENTIFIED TRACE':'SEALED TRACE');
      mark.append($('span','mars-marker-halo'),symbol,$('span','mars-marker-caption',caption));
      frame.append(mark);
    });
    layout.append(frame);
    const audioSource=$('a','mars-audio-source','NASA: FIRST AUDIO RECORDING OF SOUNDS ON MARS ↗');
    audioSource.href='https://science.nasa.gov/resource/first-audio-recording-of-sounds-on-mars/';
    audioSource.target='_blank';audioSource.rel='noopener noreferrer';
    root.append(header,intro,layout,audioSource,$('p','mars-map-footnote','MAP BACKGROUND // PROJECT-TEAM-SUPPLIED MARTIAN SURFACE IMAGE · DISCOVERY MARKERS AND ROUTE ARE INTERACTIVE ARCHIVE OVERLAYS.'),footer());
    window.THAIdentity?.mountInMenu?.();
    if(getProgress()===4){root.append(btn('MARS ARCHIVE COMPLETE →','mars-primary mars-open-completion',()=>renderCompletion(root,true)));}
    if(startAudio)startAmbient();
  }
  function renderCompletion(root,returnVisit=false){
    stopAll();
    try{localStorage.setItem('thaMarsCompletionSeen','true');}catch(_){}
    root.className='tha-mars-screen mrx-completion-screen';
    root.replaceChildren();
    const main=$('main','mrx-completion-main');
    const card=$('section','mrx-completion-card');
    card.append(
      $('h1','mrx-completion-title','🔴 MARS ARCHIVE COMPLETE'),
      $('p','mrx-completion-count','4 / 4 ✓'),
      $('p','mrx-completion-line','We found the traces on Mars.'),
      $('p','mrx-completion-line','But humanity traveled even farther.')
    );
    const actions=$('div','mrx-completion-actions');
    if(returnVisit){
      actions.append(
        btn('CONTINUE TO OTHER TRACES →','mrx-primary',()=>window.THANavigation?.goTo('otherTraces')),
        btn('RETURN TO ARCHIVE','mrx-secondary',()=>window.THANavigation?.goTo('menu'))
      );
    }else{
      actions.append(
        btn('REPLAY MARS ↺','mrx-primary',()=>{
          try{const progress=JSON.parse(localStorage.getItem(PROGRESS)||'{}');progress.mars=0;localStorage.setItem(PROGRESS,JSON.stringify(progress));localStorage.removeItem('thaMarsCompletionSeen');localStorage.removeItem(IDENTIFIED_KEY);}catch(_){}
          window.THA?.setProgress?.('mars',0);renderMarsMapInto(root);
        }),
        btn('RETURN TO ARCHIVE','mrx-secondary',()=>window.THANavigation?.goTo('menu'))
      );
    }
    card.append(actions);main.append(card);root.append(main);
    window.THAIdentity?.mountInMenu?.();
    const chord=play('piano.mp3',.28);
    if(chord){const ping=()=>play('electronic-ping.mp3',.12);chord.addEventListener('ended',()=>{const timer=setTimeout(ping,1500);timers.push(timer);},{once:true});}
    else{const timer=setTimeout(()=>play('electronic-ping.mp3',.12),1500);timers.push(timer);}
  }
    function renderMarsMap(){stopAll();void warmImages();try{ambient=new Audio(AUDIO+'low-frequency-ambient.mp3');ambient.preload='auto';ambient.volume=.78;ambient.loop=true;ambient.setAttribute('fetchpriority','high');ambient.dataset.provenance='NASA Perseverance SuperCam microphone sample, converted from supplied WAV to MP3 for efficient local playback.';ambient.load();window.THAMarsAmbient=ambient;}catch(_){ambient=null;}const root=$('main','tha-mars-screen');let seen=false;try{seen=localStorage.getItem('thaMarsCompletionSeen')==='true';}catch(_){}if(getProgress()===4&&seen)renderCompletion(root,true);else renderMarsMapInto(root);return root;}

  window.THAMarsAudio={stop:stopAll};
  window.renderMarsMap=renderMarsMap;
  window.renderMarsRecord=(id)=>{const root=document.querySelector('.tha-mars-screen')||renderMarsMap();const r=DATA.find(x=>x.id===id||x.number===Number(id));if(r&&r.step<=getProgress()+1)renderRecordInto(root,r);return root;};
})();
