# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

- **Hiring managers & tech recruiters** evaluating Andrew Shen for Full Stack Software Engineering and Applied Data Science roles.
- **Freelance & software consulting clients** evaluating Andrew's engineering craft and capabilities (e.g., via Raining.dev) for custom product development.

## Product Purpose

A personal portfolio website for Andrew Shen (Full Stack Software Engineer & Consultant, Software Engineer at General Motors, MADS student at the University of Michigan) that showcases his background, experience, projects, and consulting work, and provides a direct way to get in touch.

## Positioning

A memorable, interactive Pokémon-inspired developer portfolio featuring a real-time 3D Three.js opening scene, a flippable Trainer Card, and game-inspired UI craft — balancing playful nostalgia with modern engineering polish and clarity for both recruiters and consulting clients.

## Operating Context

- Desktop and mobile web visitors landing on the interactive 3D Home scene (`/`), scrolling or navigating to About (`/about`), Projects (`/projects`), and Contact (`/contact`).
- Visitors expect fast comprehension of Andrew's experience, clean readability, responsive layout across mobile/tablet/desktop, and working links/contact form.

## Capabilities and Constraints

- **Framework & Stack:** React 18, Vite, React Router v6, Tailwind CSS, Framer Motion, Three.js (`@react-three/fiber`, `@react-three/drei`).
- **3D Scene:** Interactive Home canvas with `Pokeball`, `Steven`, and `Galaxy` models, scroll-to-zoom camera choreography, and dialogue overlay.
- **About Page:** Flippable Trainer Card (`CardFront` / `CardBack`) + Bio & Experience timeline.
- **Projects Page:** Technology-filterable project showcase (`nuocal`, `Spotify Tool Kit`, `Connect`, `Raining Consulting`).
- **Contact Page:** Client-side validated contact form wired to EmailJS (`service_21cxrbi`, `template_c6auk5g`).
- **Preservation Constraint:** Keep all existing factual copy, project entries, Trainer Card data, and EmailJS integration intact.

## Brand Commitments

- **Pokémon Aesthetic:** Binding creative direction — keep and elevate the Pokémon / handheld-RPG aesthetic (modernized retro-meets-clean craft) rather than replacing it with generic corporate minimalism.
- **3D Models & Scene:** Keep and upgrade the lighting, materials, shaders/post-processing or presentation of the 3D models (`Pokeball`, `Steven`, `Galaxy`) so they look noticeably sharper and more cohesive.
- **Existing Assets:** Preserve the Pokémon font (`Pokemon.woff2`) for authentic RPG headings/dialogue/badges while pairing it with clean readable typography (`Inter` / sans-serif) where long-form legibility matters.

## Evidence on Hand

- Existing 3D models in `public/models/` (`twinleafBall.glb`, `steven.glb`, `Waving.fbx`, `galaxy.glb`).
- Existing project logos (color & B&W) in `src/assets/images/projects/`.
- Existing About assets (`pfp.jpg`, `box14.png`, `cardPokeball.png`, `redWalking.gif`, badges) in `src/assets/images/About/`.
- Existing SVG brand logo in `src/assets/images/svg/logo-no-background.svg`.

## Product Principles

1. **Nostalgic craft, modern legibility:** Honor the Pokémon RPG spirit in framing, dialogue, and interactions without sacrificing readability or usability.
2. **Cohesive world across every route:** Home, About, Projects, and Contact should feel like rooms in the same polished world rather than disconnected pages.
3. **Interactive delight with zero friction:** 3D scenes, card flips, and hover states should feel responsive, smooth, and accessible on both desktop and mobile.
4. **Clarity for recruiters and clients:** Key credentials, experience, and project links must be scannable in seconds.
