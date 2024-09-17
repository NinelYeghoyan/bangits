import { defineConfig } from 'vite';
import * as path from 'path';
import react from '@vitejs/plugin-react-swc';
import svgr from 'vite-plugin-svgr';

export default defineConfig({
    base: '/bangits/',
    build: {
        outDir: 'build',
    },
    plugins: [react(), svgr()],
    resolve: {
        alias: [
            { find: '@', replacement: path.resolve(__dirname, 'src') },
            { find: '@app', replacement: path.resolve(__dirname, 'src/app') },
            { find: '@assets', replacement: path.resolve(__dirname, 'src/assets') },
            { find: '@components', replacement: path.resolve(__dirname, 'src/components') },
            { find: '@features', replacement: path.resolve(__dirname, 'src/features') },
            { find: '@i18n', replacement: path.resolve(__dirname, 'src/i18n') },
            { find: '@layout', replacement: path.resolve(__dirname, 'src/layout') },
            { find: '@style', replacement: path.resolve(__dirname, 'src/style') },
            { find: '@utils', replacement: path.resolve(__dirname, 'src/utils') },
        ],
    },
});
