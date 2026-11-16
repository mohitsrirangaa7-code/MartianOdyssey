import 'dotenv/config';
import express, { type Request, type Response } from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { createServer as createViteServer } from 'vite';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PORT = 3000;

interface ExpeditionBackend {
  slug: string;
  title: string;
  subtitle: string;
  coordinates: string;
  elevation: string;
  highlights: string[];
}

// Static mission metadata used by the landing page and API endpoints.
const EXPEDITIONS: Record<'jezero-crater' | 'candor-chasma', ExpeditionBackend> = {
  'jezero-crater': {
    slug: 'jezero-crater',
    title: 'Jezero Crater',
    subtitle: 'Ancient Martian River Delta & Astrobiology Surface Sector',
    coordinates: '18.38° N · 77.58° E',
    elevation: '-2,569 m Datum',
    highlights: [
      'Lacustrine clay mineral stratigraphy across the western fan delta.',
      'Pressurized 14-sol rover traverse corridor and core sample cache.',
      'Direct Ka-band orbital telemetry uplink via Martian Odyssey relay.',
    ],
  },
  'candor-chasma': {
    slug: 'candor-chasma',
    title: 'Candor Chasma',
    subtitle: 'Valles Marineris Central Canyon & Layered Crust Sector',
    coordinates: '6.50° S · 289.10° E',
    elevation: '-5,400 m Canyon Floor',
    highlights: [
      'Exposed multi-kilometer sulfate and layered bedrock canyon walls.',
      'High-altitude aerial drone reconnaissance across Melas-Candor ridge.',
      '21-sol canyon outpost operations and subsurface ice radar survey.',
    ],
  },
};

async function startServer() {
  const app = express();

  // Keep the data contract stable for the client while serving mission details.
  app.get('/api/missions/:slug', (req: Request, res: Response) => {
    const slug = req.params.slug as keyof typeof EXPEDITIONS;
    const expedition = EXPEDITIONS[slug];
    if (!expedition) {
      res.status(404).json({ error: 'Expedition not found' });
      return;
    }
    res.json(expedition);
  });

  const isProd = process.env.NODE_ENV === 'production';

  if (!isProd) {
    // In development, run Vite in middleware mode so the frontend can hot reload.
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    // In production, serve the generated build and fall back to the SPA shell.
    const distPath = path.resolve(__dirname, 'dist');
    app.use(express.static(distPath));
    app.get('*', (_req: Request, res: Response) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
