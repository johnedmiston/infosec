import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'
import { fileURLToPath, URL } from 'node:url'

import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import legacy from '@vitejs/plugin-legacy'
import * as babel from '@babel/core';

// A very simple Vite plugin support babel transpilation
const babelPlugin = {
  name: 'plugin-babel',
  transform: (src:string, id:string) => {
    if (/\.(jsx?|vue)$/.test(id)) { // the pattern of the file to handle
    return babel.transform(src, {
      filename: id,
      babelrc: true,
    });
    }
  },
};

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    babelPlugin,
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
    legacy({
      // to be compatible with legacy browsers
      targets: ['defaults', 'not IE 11', 'chrome >= 64', 'edge >= 79', 'safari >= 11.1', 'firefox >= 67'],
      modernTargets: ['iOS>=11']
    }),
  ],
  base: './',
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
