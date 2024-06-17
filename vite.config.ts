import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  // server:
  // {
  //   strictPort: true,
  //   port: 3000
  // },
  build: {
    target:"esnext",
    rollupOptions: {
      input: {
        index: path.resolve('index.html')
      },
      output: {
        // entryFileNames: "index.js"
      }
    }
  }
})