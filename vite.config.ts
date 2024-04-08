import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import * as path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: [{ find: '@', replacement: path.resolve(__dirname, 'src') }],
    },
    base: "/Moovflex/",
    build: {
        rollupOptions: {
            input: {
                main: path.resolve(__dirname, "index.html"),
                404: path.resolve(__dirname, "public/404.html"),
            },
        },
    },
})
