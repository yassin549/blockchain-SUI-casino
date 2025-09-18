// server/index.ts
// This file is the entry point for local development.

import app from './app';
import { createServer } from 'http';
import { setupVite } from './vite';
import { log } from './vite';

(async () => {
  const server = createServer(app);

  if (app.get('env') === 'development') {
    await setupVite(app, server);
  }

  const port = 5000;
  server.listen(port, () => {
    log(`serving on port ${port}`);
  });
})();

