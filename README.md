# Entity Odyssey

**Entity Odyssey** is a browser-based, Pokémon-style RPG built with HTML5 Canvas and vanilla JavaScript. It was created as the M256 (Intro to Computer Programming) Semester 2 Final Project in 2024, and went well beyond the course’s expectations.

The class had not covered Canvas, collision detection, sprite animation, or turn-based combat systems. This project was largely self-taught.

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)
![Canvas API](https://img.shields.io/badge/Canvas%20API-Game%20Engine-0A66C2?style=flat-square)
![Aseprite](https://img.shields.io/badge/Art-Aseprite%20Pixel%20Art-7D929E?style=flat-square)
![Status](https://img.shields.io/badge/Status-Playable-success?style=flat-square)

---

## Overview

You choose one of three hand-drawn characters (Brute, Jester, or Mage), then explore three connected maps. Walking through tall-grass-style battle zones triggers random encounters. Winning battles earns you XP, unlocking gated areas, and eventually advances you to the next island. The game ends with a final boss fight and credits scene.

The first map closely follows the structure of [Chris Courses’ Pokémon-style game tutorial](https://www.youtube.com/watch?v=yP5DKzriqXA) ([source repo](https://github.com/chriscourses/pokemon-style-game)). After that lift off, maps 2 and 3, the combat system, enemy AI, progression gates, bosses, and characters were designed and built by myself, reusing the patterns I had learned, now from scratch.

---

## Features

- **Three playable characters** with unique stats, move sets, accuracies, and playstyles (tank / agile / high-risk caster)
- **Three full maps** with custom collision data, level-gated barriers, and multi-tier battle zones
- **Turn-based combat** with health bars, move descriptions, stun, status-like effects (poison DoT, move disable, defense steal), and XP leveling
- **Enemy roster** spanning soldiers, gasmen, skeletons, specters, and three bosses (Goliath, Phantom, Ironsoul), each with distinct move AI
- **Map transitions** after boss victories, plus an ending sequence
- **Sprite walk cycles**, foreground layering, and GSAP fade/flash battle transitions
- **Character select UI** overlaid on the Canvas world

---

## Controls & Mechanics

| Input | Action |
| --- | --- |
| `W` `A` `S` `D` | Move (one direction at a time - no diagonals) |
| `Shift` + movement / uppercase WASD | Faster movement (“turbo”) |
| Click dialogue boxes | Advance story / battle text |
| Click moves in battle | Attack or use support skills |

**Progression (level gates):**

| Goal | Unlocks |
| --- | --- |
| Reach level 15 | Map 1 zone 2 |
| Reach level 30 | Map 1 boss area (Goliath) |
| Defeat Goliath | Travel to Map 2 (The Forest) |
| Reach level 45 / 60 | Map 2 deeper zones / Phantom |
| Defeat Phantom | Travel to Map 3 |
| Reach level 75 / 90 | Map 3 deeper zones / Ironsoul |
| Defeat Ironsoul | Ending |

Battles start when you walk through encounter tiles (random chance while moving). Losing a fight drops XP/level; winning grants XP scaled by character `xpGap`.

---

## How to Run

1. Clone or download this repository.
2. Open `index.html` in a browser.
3. **Microsoft Edge is recommended.** Chrome may lag or glitch with this project’s Canvas + GSAP setup (a warning appears if Chrome is detected).

No build step, bundler, or server is required, it is plain HTML/CSS/JS.

> Optional: serve the folder with any static file server if your browser restricts local file loading.

---

## Tech Stack

- **HTML5 Canvas** (2D rendering, sprite sheets, game loop via `requestAnimationFrame`)
- **Vanilla JavaScript** (globals + script-tag load order; no framework)
- **GSAP 3** (battle/map transition animations)
- **CSS** (character select, dialogue, HP bars, battle interface)
- Tile maps authored with online tile-map tooling; collision / barrier / battle-zone grids exported as JS arrays

---

## Assets - What I Made vs. What I Used

| Asset | Origin |
| --- | --- |
| Character artwork (Brute, Jester, Mage) and battle sprites | **Hand-drawn by me** |
| Enemy / boss drawings | **Hand-drawn by me** |
| Battle backgrounds & related battle art | **Drawn by me** |
| Overworld maps & foreground object layers | Built with **online tile-map tools** (not hand-painted pixel-by-pixel) |
| Overworld player walk sprites / some tutorial-era map assets | From / adapted after the **Chris Courses** tutorial asset set |
| Pattern background / inventory-style UI imagery | Sourced online |

---

## Credits & Inspiration

- **Heavily inspired by** Chris Courses: [Pokémon Style Game Tutorial (YouTube)](https://www.youtube.com/watch?v=yP5DKzriqXA) and the accompanying open source project: [chriscourses/pokemon-style-game](https://github.com/chriscourses/pokemon-style-game).
  - Map 1’s overworld loop, collision approach, battle-zone encounter pattern, and camera/movables model follow that tutorial closely (including reused tutorial logic for those foundations).
  - Maps 2-3, custom tile data, progression barriers, the full turn-based combat kit, enemy AI, bosses, and character systems were built by me on top of those skills.
- Gameplay fantasy inspired by **Pokémon**-style encounters and exploration.
- Chrome detection approach adapted from a [Stack Overflow answer](https://stackoverflow.com/questions/4565112/javascript-how-to-find-out-if-the-user-browser-is-chrome).
- Built for **M256 - Intro to Computer Programming**, Final Project 2024.

---

## Skills Demonstrated

- Self-teaching beyond course material (Canvas, game loops, collisions)
- Translating a tutorial into a larger original game without remaining stuck on a 1:1 clone
- Data-driven level design (tile arrays -> runtime collision / encounter systems)
- Turn-based combat design with asymmetric characters and escalating enemy AI
- Separating concerns across readable JS modules while keeping a simple script-tag architecture
- UI/UX for a retro RPG feel (pixel fonts, dialogue flow, HP bar feedback)
- Honest attribution of third-party tutorials and assets

---

## Author

**Kenan Sahsivar** - M256 Final Project, 2024
