import { fileURLToPath, URL } from 'node:url';

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
// import VueDevTools from 'vite-plugin-vue-devtools';

import qiankun from 'vite-plugin-qiankun';
import basicSsl from '@vitejs/plugin-basic-ssl';
// import ElementPlus from 'unplugin-element-plus/vite';
import zipPack from 'vite-plugin-zip-pack';
import postCssPxToRem from 'postcss-pxtorem';
// https://vitejs.dev/config/
export default defineConfig({
    css: {
        preprocessorOptions: {
            scss: {
                additionalData: `
                    @use "@/styles/element-plus.scss" as *;
                `
            }
        },
        postcss: {
            plugins: [
                postCssPxToRem({
                    rootValue: 100,
                    propList: ['*']
                })
            ]
        }
    },
    build: {
        outDir: 'dest',
        cssCodeSplit: false
    },
    plugins: [
        vue(),
        vueJsx(),
        // 官方脚手架集成的插件，但 import-html-entry 报错
        // VueDevTools(),
        qiankun('sub-project', {
            useDevMode: true
        }),
        basicSsl(),
        zipPack({
            outFileName: 'dest.zip',
            outDir: 'dest',
            inDir: 'dest'
        })
    ],
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url))
        }
    },
    server: {
        host: '0.0.0.0',
        port: 18081,
        origin: 'https://abc.demo.cn',
        cors: true
    }
});
