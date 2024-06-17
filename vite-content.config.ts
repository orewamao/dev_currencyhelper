import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
    build: {
        emptyOutDir: false,
        rollupOptions: {
            input: {
                content: "./src/content/content.tsx", // Entry Point
            },
            output: {
                entryFileNames: "assets/content.js"
            }
        },
    },
})