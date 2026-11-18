# 🛰️ The Human Archive

### NASA Space Apps Challenge 2026 · **Abandoned Yet in Orbit**

> **ABANDONED ≠ FORGOTTEN**

## 🌌 The story: A mission for the future

**The year is 2126.** Humanity has travelled beyond Earth, landed on other worlds, and sent messages into deep space. The missions may have ended, but they did not leave an empty universe behind. Across the Moon, Mars, and deep space, traces of human exploration remain: spacecraft hardware, scientific instruments, messages, and objects that carry pieces of our history.

You are a **Space Archaeologist working in the year 2126**. Your task is to investigate these traces and recover the stories behind them. Each discovery is a clue. Each object points to a mission, a challenge, a scientific achievement, or a moment in humanity's journey beyond Earth.

As you move through the archive, you uncover **11 human-made traces**. You explore where they were left, learn what they were built to do, reveal their identities, and connect their scientific facts to the people and ideas behind the missions.

The central question is simple: **When a mission ends, what remains of the human story?**

> An object can be abandoned without being forgotten. Every trace is evidence of a question humanity once asked, a challenge it tried to solve, and a possibility it left for the future.

---

## 🔭 What is The Human Archive?

**The Human Archive** is an interactive, story-led space-archaeology experience that turns real remnants of space exploration into a journey of discovery. It is designed for the NASA Space Apps Challenge 2026 track **“Abandoned Yet in Orbit.”** Rather than presenting mission remnants as a simple list of old equipment, the project invites visitors to investigate them as evidence of humanity's presence beyond Earth.

The experience combines:

- **A fictional narrative frame:** a future archaeologist in 2126 guides the visitor's perspective.
- **Real mission context:** each record introduces an object, its mission, its purpose, and relevant scientific information.
- **Interactive discovery:** visitors examine map locations, move through mission timelines, interpret clues, and reveal record identities.
- **Reflection:** the archive asks visitors to think about exploration, discovery, memory, and what humanity leaves behind.

The 2126 setting is the project's storytelling framework. It is not presented as a prediction or an official NASA scenario. The mission history and scientific information are kept distinct from the creative narrative.

## 🎯 Project purpose

The purpose of **The Human Archive** is to help school-age learners discover the legacy of space exploration through curiosity and interaction. The experience is designed to make historical mission hardware and scientific instruments feel meaningful not just as objects left behind, but as clues to the engineering, questions, decisions, and discoveries that made exploration possible.

The project aims to:

1. **Make space history engaging:** turn mission remnants into an interactive investigation instead of a static catalogue.
2. **Connect objects with science:** explain what selected spacecraft, instruments, and messages were for and why they matter.
3. **Encourage curiosity:** let visitors discover information through maps, timelines, and evidence-based clues.
4. **Connect science with human meaning:** invite reflection on exploration, legacy, and the traces future generations may find.

**Intended audience:** school-age space enthusiasts and educators, especially learners aged **10–18**.

---

## 🧭 The visitor's journey

The visitor enters the archive as a Space Archaeologist from 2126 and progresses through four chapters. The first nine records make up the main recovery sequence. Two additional records are unlocked in **Hidden Records**, bringing the archive to 11 discoveries.

### 01 · Moon — Traces on the lunar surface

The journey begins with human-made traces left on the Moon. Visitors investigate the Apollo 11 Descent Stage, explore the Lunar Laser Retroreflectors, and uncover the Fallen Astronaut memorial.

**Records:** Apollo 11 Descent Stage · Laser Retroreflectors · Fallen Astronaut

### 02 · Mars — Machines that explored another world

The archive moves to Mars, where robotic explorers and an aerial vehicle extended humanity's reach across the planet. Visitors discover the Sojourner and Spirit rovers, follow Opportunity's mission story, and explore Ingenuity's helicopter flights.

**Records:** Sojourner Rover · Spirit Rover · Opportunity Rover · Ingenuity Helicopter

### 03 · Other Traces — Messages beyond the planets

The investigation expands beyond planetary surfaces to objects that carry humanity's presence and message into space: Voyager 1 and its Golden Record, and the Pioneer Plaque.

**Records:** Voyager 1 and its Golden Record · Pioneer Plaque

### 04 · Hidden Records — Discoveries beneath the surface of the archive

Two further records complete the collection. Visitors investigate the Sky Crane landing system and the Radioisotope Thermoelectric Generator (RTG), uncovering technologies that supported robotic exploration.

**Records:** Sky Crane · Radioisotope Thermoelectric Generator (RTG)

**Archive total: 11 records**  3 Moon records, 4 Mars records, 2 Other Traces records, and 2 Hidden Records.

---

## 🧩 How discovery works

The archive uses three reusable interactive templates. Each template presents evidence in a different way, while keeping the experience consistent across records.

### Template A — Surface Map Explorer

A map-led discovery view with location context, trace markers, evidence clues, and a record reveal. Used for **Apollo 11, Laser Retroreflectors, Sojourner, and Spirit**.

### Template B — Chrono Slider

A time-based exploration view that lets visitors move through a sequence of mission events. Used for **Opportunity, Ingenuity, Voyager 1, and Pioneer**.

### Template C — Mission Identity Analyzer

A clue-led identification experience. Visitors interpret evidence, make a contextual choice, and then discover the object's mission identity. Used for **Fallen Astronaut, Sky Crane, and RTG**.

Additional record-specific interactions include the two-way lunar laser-ranging simulation, rover and helicopter mission timelines, and the Hidden Records identification sequence.

---

## 🏁 The 99% → 100% completion mechanic

Recovering all 11 records brings the structural archive to **99% completion**. The final **1% belongs to the visitor**.

At the end of the experience, visitors can make a personal contribution by writing a reflection, saving an idea, or creating a drawing. This contribution is handled locally in the browser. The experience can export a text file named:

`Space_Archaeologist_Log.txt`

The exported log records the visitor's reflection and marks the archive as **100% complete**. This final interaction does not require a cloud database.

---

## 📌 Project at a glance

| Project detail | Information |
|---|---|
| Project | The Human Archive |
| Challenge | NASA Space Apps Challenge 2026 |
| Challenge track | Abandoned Yet in Orbit |
| Story setting | The year 2126 |
| Visitor role | Space Archaeologist |
| Archive collection | 11 human-made traces |
| Exploration chapters | Moon · Mars · Other Traces · Hidden Records |
| Intended audience | School-age space enthusiasts and educators · Ages 10–18 |
| Experience format | Interactive, narrative-driven archive / scrollytelling |
| Technology | HTML5, CSS3, and vanilla JavaScript |
| Deployment | Static website · No build step or server-side database required |
| Live application | **** |

---

## 🛠️ Technology and architecture

The project is built with standard browser technologies:

- **HTML5** provides the application shell and document structure.
- **CSS3** provides the visual system, responsive layouts, chapter styling, and transitions.
- **Vanilla JavaScript** powers navigation, record data, reusable templates, clue flows, progress tracking, audio cues, and archive export.
- **WebP** is used for the local mission image library to keep visual assets compact.
- **Web Audio / HTML Audio** support ambient sound and record-specific audio cues.
- **localStorage** preserves visitor progress and personal archive data on the current device/browser.

There is no package installation or compilation step. The project is designed to run as a static website.

## 📁 Complete project structure

The tree below lists the actual files included in this project ZIP. It includes all audio tracks, images, stylesheets, JavaScript modules, and favicon assets.

```text
the-human-archive/
├── index.html
├── README.md
├── favicon.ico
├── favicon-16x16.png
├── favicon-32x32.png
├── apple-touch-icon.png
├── android-chrome-192x192.png
├── android-chrome-512x512.png
├── site.webmanifest
│
├── assets/
│   ├── audio/
│   │   ├── ambient-hum.mp3
│   │   ├── beep.mp3
│   │   ├── click.mp3
│   │   ├── damage-sound.mp3
│   │   ├── deep-breath.mp3
│   │   ├── deep-curiosity-hum.mp3
│   │   ├── electronic-ping.mp3
│   │   ├── fan.mp3
│   │   ├── greeting.mp3
│   │   ├── heartbeat.mp3
│   │   ├── helicopter-whirr.mp3
│   │   ├── laser-whirr.mp3
│   │   ├── low-frequency-ambient.mp3
│   │   ├── old-door-opening.mp3
│   │   ├── opportunity.mp3
│   │   ├── piano.mp3
│   │   ├── radio-static-rise.mp3
│   │   ├── short-musical-passage.mp3
│   │   ├── signal.mp3
│   │   ├── single-piano-note.mp3
│   │   ├── week-signal.mp3
│   │   └── wheel-roll.mp3
│   │
│   └── images/
│       ├── apollo-11-flag-aldrin-as11-40-5875.webp
│       ├── apollo-11-lro-landing-site.webp
│       ├── apollo-14-laser-retroreflector-closeup-as14-67-9386.webp
│       ├── fallen-astronaut-as15-88-11894.webp
│       ├── gusev-crater-map.webp
│       ├── human-archive-logo.png
│       ├── ingenuity-flight-72-damaged.webp
│       ├── ingenuity-flight-path-optimized.webp
│       ├── ingenuity-mars-helicopter.webp
│       ├── lunar-laser-retroreflector-array.webp
│       ├── mars-surface-map.webp
│       ├── opportunity-rover-greeley-panorama.webp
│       ├── pioneer-plaque-artwork.webp
│       ├── rtg-installation-alsep.webp
│       ├── rtg-photograph-alsep.webp
│       ├── sky-crane-landing-system.webp
│       ├── sojourner-and-yogi.webp
│       ├── sojourner-rover-mars-surface.webp
│       ├── spirit-rover-gusev-crater.webp
│       └── voyager-spacecraft-golden-record.webp
│
├── css/
│   ├── 99.css
│   ├── finale.css
│   ├── hidden-records.css
│   ├── maps.css
│   ├── mars.css
│   ├── menu.css
│   ├── moon.css
│   ├── other-traces.css
│   ├── route-bridge.css
│   ├── splash.css
│   ├── style.css
│   ├── templates.css
│   ├── terminal.css
│   └── your-archive.css
│
└── js/
    ├── audio.js
    ├── main.js
    ├── router.js
    │
    ├── data/
    │   └── records.js
    │
    ├── pages/
    │   ├── 99.js
    │   ├── finale.js
    │   ├── hiddenRecords.js
    │   ├── marsMap.js
    │   ├── menu.js
    │   ├── moon.js
    │   ├── otherTraces.js
    │   ├── splash.js
    │   ├── terminal.js
    │   └── your-archive.js
    │
    ├── shared/
    │   ├── identity.js
    │   ├── image-preloader.js
    │   └── navigation.js
    │
    └── templates/
        ├── templateA.js
        ├── templateB.js
        └── templateC.js
```

### Folder and file guide

- `index.html` — application entry point and page metadata, including local favicon declarations.
- `favicon.*`, `apple-touch-icon.png`, `android-chrome-*.png`, and `site.webmanifest` — browser-tab and supported device-installation icons.
- `assets/audio/` — 22 locally stored music, ambience, and interaction audio files.
- `assets/images/` — 20 local visual assets, including mission imagery and the project logo.
- `css/` — 14 shared and chapter-specific stylesheets.
- `js/data/records.js` — archive record data and chapter configuration.
- `js/pages/` — splash, menu, Moon, Mars, Other Traces, Hidden Records, terminal, finale, and personal-archive page modules.
- `js/shared/` — shared identity, navigation, and image-preloading modules.
- `js/templates/` — reusable record presentation Templates A, B, and C.
- `js/audio.js`, `js/main.js`, and `js/router.js` — shared audio handling, application startup, and page routing.

**Archive contents:** 85 files across the HTML entry point, documentation, local assets, stylesheets, JavaScript modules, and favicon package. The `.git` repository history is intentionally not included in this deployment ZIP.

---

## 🎨 Project identity and favicon

The project includes a custom **The Human Archive** emblem built around an illuminated archive portal, an orbital ring, and a star, using the experience's deep-space visual palette. The artwork is used for the browser tab, supported mobile home-screen icons, and the high-resolution project logo.

- `favicon.ico` — multi-size browser favicon fallback.
- `favicon-16x16.png` and `favicon-32x32.png` — standard browser-tab icons.
- `apple-touch-icon.png` — iOS home-screen icon.
- `android-chrome-192x192.png` and `android-chrome-512x512.png` — Android/PWA icon sizes.
- `site.webmanifest` — application name, theme colors, and installable icon metadata.
- `assets/images/human-archive-logo.png` — high-resolution project logo artwork.

All icon files are served locally; no external icon service is required.

---

## 🔭 Scientific content and media

The records are designed around mission information and source links from space-agency material, including **NASA, the NASA Space Science Data Coordinated Archive (NSSDCA), and NASA/JPL**. Relevant record screens provide links to their referenced source material.

The project keeps its factual mission information separate from its creative 2126 archive storytelling. Team-created atmosphere or narrative interpretation is part of the experience, not an official NASA statement or dataset. Audio is used as an interaction and storytelling layer; creative ambient audio should not be interpreted as a NASA recording.

Image credits and source links are displayed alongside the relevant images where implemented.

---

## ⚡ Performance and responsive experience

The project includes measures intended to keep the experience responsive when deployed as a static website:

- Mission images are stored locally as optimized **WebP** assets rather than relying on remote image hosts at runtime.
- A shared image preloader warms the local image library in the background at low network priority after the opening screen is ready.
- Images needed by the active record use eager loading and high fetch priority; below-the-fold material can remain deferred until needed.
- Audio cues are loaded locally and reused by chapter interactions.
- Chapter stylesheets and JavaScript modules are separated by purpose to support maintenance.
- Layouts and controls include responsive styling for smaller screens. Reduced-motion preferences are considered by the experience's screen transitions and interactions.

For best results, deploy the complete project folder with its original `assets/`, `css/`, and `js/` directories. Keep `index.html` at the published site root so relative asset paths resolve correctly.

---

## 🚀 Run locally

No Node.js setup or dependency installation is needed. Start a local web server from the project directory.

### Option 1 — Python

```bash
python -m http.server 8000
```

Open [http://localhost:8000](http://localhost:8000) in a browser.

### Option 2 — Visual Studio Code

1. Open the project folder in Visual Studio Code.
2. Start the folder with the **Live Server** extension.
3. Open the local address provided by Live Server.

Opening `index.html` directly with a `file://` URL is not recommended. A local HTTP server provides the browser environment expected by the app's scripts and media assets.

---

## 🌍 Deploy to GitHub Pages or another static host

1. Place the contents of this project in the root of the GitHub repository.
2. Confirm that `index.html`, `assets/`, `css/`, and `js/` are all at the same published root level.
3. Push the repository to GitHub.
4. For GitHub Pages, open **Settings → Pages**, select the deployment source and branch, and publish from the project root (or the configured `/docs` folder if the project is intentionally placed there).
5. Open the published URL and test the full journey, including audio, image loading, progress restoration, and the personal archive export.

The website does not require environment variables or a server-side API for its current client-side experience. Add the final production URL to the project details table above once deployment is complete.

---

## ✅ Final deployment checklist

- [ ] `index.html` opens successfully from the published root.
- [ ] All local images load from `assets/images/`.
- [ ] Audio files load from `assets/audio/` after the visitor interacts with the experience.
- [ ] Moon, Mars, Other Traces, and Hidden Records navigation works.
- [ ] Record progress remains available after refreshing the same browser.
- [ ] The 99% → 100% personal contribution flow exports `Space_Archaeologist_Log.txt`.
- [ ] The production URL replaces the placeholder in this README.

---

## ❤️ The idea to remember

**The Human Archive is not only about what missions left behind. It is about what those traces still teach us.**

A spacecraft, a scientific instrument, or a message sent into space can outlive the mission that created it. Through these 11 records, the archive invites a new generation to look at those remnants as part of a continuing human story.

> **ABANDONED ≠ FORGOTTEN**
