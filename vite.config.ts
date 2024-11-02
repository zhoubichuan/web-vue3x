import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import legacyPlugin from '@vitejs/plugin-legacy'
import basicSsl from '@vitejs/plugin-basic-ssl'
import zipPack from 'vite-plugin-zip-pack'
import postCssPxToRem from 'postcss-pxtorem'

export default defineConfig(({ mode }) => {
    const platform = mode === 'prod' ? '' : mode
    return {
        base: `https://abc${platform}.cn`,
        css: {
            preprocessorOptions: {
                scss: {
                    api: 'modern-compiler',
                },
            },
            postcss: {
                plugins: [
                    postCssPxToRem({
                        rootValue({ file }: any) {
                            // The rootValue is originally 100,
                            // but the vant draft is 375,
                            // so set it to 375 * 100 / draft width
                            return file && file.indexOf('vant') !== -1 ? 37.5 : 75
                        },
                        propList: ['*'],
                        unitPrecision: 5,
                        minPixelValue: 2, // 最小px为2，如果设置1px则不转rem
                    }),
                ],
            },
        },
        server: {
            host: '0.0.0.0',
            port: 18086,
            origin: `https://abc${platform}.cn`,
            cors: true,
        },
        build: {
            outDir: 'dest',
            target: 'es2015',
            minify: 'terser',
            terserOptions: {
                compress: {
                    //  生产环境时移除console
                    drop_console: true,
                    drop_debugger: true,
                },
            },
        },
        plugins: [
            // 浏览器兼容问题配置
            legacyPlugin({
                targets: ['chrome 52'],
                modernPolyfills: true,
                // additionalLegacyPolyfills: ['regenerator-runtime/runtime'],
                // renderLegacyChunks: true,
                // polyfills: [
                //     'es.symbol',
                //     'es.promise',
                //     'es.promise.finally',
                //     'es/map',
                //     'es/set',
                //     'es.array.filter',
                //     'es.array.for-each',
                //     'es.array.flat-map',
                //     'es.object.define-properties',
                //     'es.object.define-property',
                //     'es.object.get-own-property-descriptor',
                //     'es.object.get-own-property-descriptors',
                //     'es.object.keys',
                //     'es.object.to-string',
                //     'web.dom-collections.for-each',
                //     'esnext.global-this',
                //     'esnext.string.match-all'
                // ]
            }),
            vue(),
            vueJsx(),
            basicSsl(),
            zipPack({
                outFileName: 'dest.zip',
                outDir: 'dest',
                inDir: 'dest',
            }),
        ],
        resolve: {
            alias: {
                '@': fileURLToPath(new URL('./src', import.meta.url)),
            },
        },
    }
})
