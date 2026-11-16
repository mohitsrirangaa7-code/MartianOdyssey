# 🚀 Martian Odyssey

### An Interactive 3D Mars Exploration & EVA Simulation Platform

Explore the Red Planet through an immersive, interactive 3D environment. **Martian Odyssey** is a web-based Mars exploration platform that combines realistic procedural terrain generation, scientific data visualisation, mission planning, and interactive EVA (Extra-Vehicular Activity) simulation.

Designed to bring planetary exploration closer to users, the platform allows visitors to explore Martian landscapes, investigate scientifically significant locations, analyse environmental conditions, and plan safe exploration routes.

---

## 🌌 Features

### 1. Interactive Mars Exploration
- Explore procedurally generated Martian terrain in an interactive 3D environment.
- Navigate between two scientifically significant Martian locations:
  - **Jezero Crater** – An ancient paleolake basin featuring river delta deposits, carbonate formations, and olivine-rich terrain.
  - **Candor Chasma** – A deep canyon system within Valles Marineris featuring layered sedimentary deposits and hydrated sulfate formations.
- Explore points of interest (POIs), including scientific sites, habitats, shelters, and hazardous terrain.
- Interact with the environment using camera navigation controls.

### 2. Scientific Terrain Visualisation

The simulator provides multiple visualisation layers to investigate Martian surface characteristics:

| Visualisation | Description |
|---|---|
| Natural | Martian surface appearance and geological features |
| Topography | Terrain elevation, slopes, and potential surface hazards |
| Radiation | Estimated radiation exposure and naturally shielded regions |
| Thermal | Thermal inertia and mineralogical composition |

### 3. EVA Mission Simulation
- Enter an astronaut EVA simulation mode.
- Explore the Martian surface using an astronaut helmet HUD.
- Monitor mission telemetry and environmental parameters.
- View oxygen levels, battery status, position, elevation, and route progress.
- Navigate towards selected destinations and scientific points of interest.

### 4. Intelligent EVA Route Planning
- Calculate terrain-aware exploration routes.
- Identify safer paths using terrain elevation and slope information.
- Support shelter-prioritised route planning.
- Select predefined scientific destinations or custom terrain waypoints.
- Visualise and follow calculated exploration routes.

### 5. Dynamic Environmental Simulation
- Procedural terrain generation using multi-scale noise functions.
- Terrain elevation and normal calculations.
- Geological and mineralogical surface variations.
- Radiation shielding estimation using surrounding terrain.
- Simulated Martian solar day and night cycle.
- Procedural generation of surface details and exploration infrastructure.

### 6. Mission Information & Landing Experience
- Space-inspired landing page and navigation interface.
- Mission and exploration information.
- Interactive capability sections.
- Dedicated mission launch modal.
- Direct navigation from the main website into the 3D exploration environments.

---

## 🛠️ Technology Stack

| Technology | Purpose |
|---|---|
| React 19 | User interface and component architecture |
| TypeScript | Type-safe application development |
| Three.js | 3D graphics and terrain rendering |
| Vite | Development server and build tooling |
| Tailwind CSS 4 | Styling and responsive layouts |
| Express.js | Backend server and API endpoints |
| Motion | Interface animations |
| Lucide React | Interface icons |

---

## 📂 Project Structure

```text
martian-odyssey/
│
├── public/
│   └── assets/
│       ├── mars/
│       │   └── Mars_1_6792.glb
│       └── aistudio/
│
├── src/
│   ├── components/
│   │   ├── Navbar.tsx
│   │   ├── HeroSection.tsx
│   │   ├── CapabilitiesSection.tsx
│   │   ├── MissionsSection.tsx
│   │   ├── MarsModelSection.tsx
│   │   ├── ExploreSection.tsx
│   │   └── LaunchModal.tsx
│   │
│   ├── simulator/
│   │   ├── components/
│   │   │   ├── MarsViewport.tsx
│   │   │   ├── ExplorerOverlay.tsx
│   │   │   └── HelmetHudOverlay.tsx
│   │   │
│   │   ├── data/
│   │   │   └── marsSites.ts
│   │   │
│   │   ├── engine/
│   │   │   ├── proceduralAssets.ts
│   │   │   ├── pathfinding.ts
│   │   │   └── terrainMath.ts
│   │   │
│   │   └── SimulatorApp.tsx
│   │
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
│
├── server.ts
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
├── .env.example
└── README.md
```

---

## ⚙️ Installation & Setup

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) (20.19+ or 22.12+)
- npm
- Git

### 1. Clone the repository

```bash
git clone https://github.com/YOUR_USERNAME/martian-odyssey.git
```

Navigate into the project directory:

```bash
cd martian-odyssey
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure environment variables

Create a `.env` file in the root directory if you need to configure the optional environment variables.

You can use `.env.example` as a reference.

```env
GEMINI_API_KEY=YOUR_GEMINI_API_KEY
APP_URL=YOUR_APP_URL
```

The current application does not require a Gemini API key for its implemented core functionality.

### 4. Start the development server

```bash
npm run dev
```

The application will be available at:

```text
http://localhost:3000
```

---

## 🚀 Available Commands

| Command | Description |
|---|---|
| `npm install` | Install project dependencies |
| `npm run dev` | Start the development server |
| `npm run build` | Build the production frontend |
| `npm run preview` | Preview the production frontend build |
| `npm run lint` | Run TypeScript type checking |
| `npm run clean` | Remove generated build files |

### Production Build

Generate an optimised production build:

```bash
npm run build
```

The compiled frontend will be generated in the `dist/` directory.

To serve the production build through the Express server, run:

```bash
NODE_ENV=production npx tsx server.ts
```

The production server listens on port `3000`.

---

## 🔌 Backend API

The project includes an Express.js backend with an expedition information endpoint.

### Get Expedition Details

**Endpoint:**

```http
GET /api/missions/:slug
```

Supported expedition slugs:

- `jezero-crater`
- `candor-chasma`

Example request:

```http
GET /api/missions/jezero-crater
```

Example response:

```json
{
  "slug": "jezero-crater",
  "title": "Jezero Crater",
  "subtitle": "Ancient Martian River Delta & Astrobiology Surface Sector",
  "coordinates": "18.38° N · 77.58° E",
  "elevation": "-2,569 m Datum",
  "highlights": [
    "Lacustrine clay mineral stratigraphy across the western fan delta.",
    "Pressurized 14-sol rover traverse corridor and core sample cache.",
    "Direct Ka-band orbital telemetry uplink via Martian Odyssey relay."
  ]
}
```

An invalid expedition slug returns a `404` response.

---

## 🪐 Exploration Locations

### Jezero Crater

An ancient Martian paleolake basin featuring geological formations associated with past water activity.

Areas of interest include:
- Neretva Fan Delta
- Margin Carbonate Unit
- Belva Crater Wall Alcove
- Séítah Olivine & Dune Field

### Candor Chasma

A deep canyon environment located within the Valles Marineris system.

Areas of interest include:
- Ceti Mensa Layered Block
- Candor Mensa Sulfates
- Ophir-Candor North Alcove
- West Candor Floor Outpost

---

## ⌨️ Keyboard Shortcuts

The simulator supports the following keyboard shortcuts:

| Key | Action |
|---|---|
| `V` | Toggle EVA helmet mode |
| `H` | Collapse or expand the explorer dock (outside EVA mode) |
| `Esc` | Cancel waypoint selection or close the selected POI |

---

## 🧪 Technical Implementation

Some of the key engineering concepts implemented in the project include:

- **Procedural Terrain Generation:** Multi-scale noise functions and fractal Brownian motion (fBm) are used to generate terrain elevation.
- **Terrain Analysis:** Numerical gradient calculations estimate surface slopes and terrain normals.
- **Scientific Data Layers:** Canvas-based textures visualise topography, radiation exposure, thermal inertia, and mineralogical variations.
- **Terrain-Aware Pathfinding:** Grid-based route computation evaluates terrain characteristics to calculate safer EVA routes.
- **Procedural 3D Assets:** Three.js is used to construct exploration infrastructure, surface features, and rover models.
- **Environmental Modelling:** Terrain geometry is used to estimate radiation shielding and identify potential shelter locations.

*Note: This is an interactive simulation and educational visualisation, not a validated operational Mars mission planning system. Environmental values and route calculations should be treated as modelled estimates.*

---

## 📌 Future Scope

Potential improvements and extensions include:

- More Martian exploration locations.
- Enhanced rover mobility and autonomous navigation.
- Expanded geological and atmospheric data visualisation.
- More detailed environmental and radiation models.
- Additional mission objectives and scientific experiments.
- Improved EVA interactions and resource management.
- Integration of real planetary datasets and elevation models.

---

## 🤝 Contributing

Contributions, suggestions, and improvements are welcome.

1. Fork the repository.
2. Create a new feature branch.
3. Commit your changes.
4. Push the branch.
5. Open a Pull Request.

---

## 📄 License

The application source code contains an Apache-2.0 SPDX license identifier in `src/App.tsx`. A repository-wide license has not been established by the supplied project files. Add an appropriate `LICENSE` file before distributing the project under a specific open-source license.

---

**Martian Odyssey — Exploring the Red Planet, one mission at a time.** 🚀
