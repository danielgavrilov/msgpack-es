/// <reference types="vitest" />

import { resolve } from 'path';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

export default defineConfig({
    build: {
        lib: {
            formats: ['cjs', 'es'],
            fileName: (format) => format === 'cjs' ? 'index.cjs' : 'index.mjs',
            entry: resolve(__dirname, 'src/index.ts'),
        },
    },
    plugins: [dts({ rollupTypes: true })],
});
