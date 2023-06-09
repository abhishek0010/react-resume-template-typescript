// https://vitejs.dev/config/
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import checker from 'vite-plugin-checker';
import viteTsconfigPaths from 'vite-tsconfig-paths';
import svgrPlugin from 'vite-plugin-svgr';
import handlebars from 'vite-plugin-handlebars';
import Path from 'path';

export default defineConfig({
    plugins: [
      react(),
      checker({
        overlay: { initialIsOpen: false },
        typescript: true,
        eslint: {
          lintCommand: 'eslint "./src/**/*.{ts,tsx}"',
        },
      }),
      viteTsconfigPaths(),
      svgrPlugin(),
      handlebars({
        partialDirectory: Path.resolve(__dirname, 'src/partials'),
      }) as Plugin,
    ],
    server: {
      port: 3000,
      proxy: {
        '/api-server/': '...',
        '/authorization/': '...',
      },
    },
  });