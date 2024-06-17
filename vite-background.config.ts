import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
    build: {
        emptyOutDir: false,
        rollupOptions: {
            input: {
                background: "./src/background/background.tsx", // Entry Point
            },
            output: {
                entryFileNames: "assets/background.js"
            }
        },
    },
})