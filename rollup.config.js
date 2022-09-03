import babel from '@rollup/plugin-babel'
import resolve from '@rollup/plugin-node-resolve'
import external from 'rollup-plugin-peer-deps-external'
import replace from '@rollup/plugin-replace'
import { terser } from 'rollup-plugin-terser'
import commonjs from '@rollup/plugin-commonjs'
import nodePolyfills from 'rollup-plugin-node-polyfills'

export default [
    {
        input: './src/index.js',
        output: [
            {
                file: 'dist/index.js',
                format: 'cjs',
            },
            {
                file: 'dist/index.es.js',
                format: 'es',
                exports: 'named',
            },
        ],
        plugins: [
            replace({
                'process.env.NODE_ENV': JSON.stringify('development'),
                preventAssignment: true,
            }),
            nodePolyfills(),
            resolve({ browser: true }),
            commonjs({
                include: /node_modules/,
            }),
            babel({
                exclude: 'node_modules/**',
                presets: ['@babel/preset-react'],
                plugins: ['styled-jsx/babel'],
                babelHelpers: 'bundled',
            }),
            external(),
        ],
    },
]
