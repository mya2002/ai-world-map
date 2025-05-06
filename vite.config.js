import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/ai-world-map/', // 這裡設定 GitHub Pages 的 base 路徑
});
