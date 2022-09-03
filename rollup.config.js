import babel from 'rollup-plugin-babel'
import resolve from '@rollup/plugin-node-resolve'
import external from 'rollup-plugin-peer-deps-external'
import replace from '@rollup/plugin-replace'
import { terser } from 'rollup-plugin-terser'
import commonjs from '@rollup/plugin-commonjs'
import nodePolyfills from 'rollup-plugin-node-polyfills'

import React from 'react'
import ReactIs from 'react-is'
import ReactDOM from 'react-dom'

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
            }),
            nodePolyfills(),
            commonjs({
                include: /node_modules/,
                namedExports: {
                    'react-is': Object.keys(ReactIs),
                    react: Object.keys(React),
                    'react-dom': Object.keys(ReactDOM),
                },
            }),
            babel({
                exclude: 'node_modules/**',
                presets: ['@babel/preset-react'],
                plugins: ['styled-jsx/babel'],
            }),
            external(),
            resolve({ browser: true }),
            terser(),
        ],
    },
]
