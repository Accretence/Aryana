const { resolve, join } = require('path')
const fs = require('fs-extra')
const builtInPath = resolve(__dirname, 'built-in')
const folderPath = resolve(__dirname, '../dist')
const builtInFiles = {
    esm: ['styled-jsx.es.js', 'styled-jsx-server.es.js'],
    cjs: ['styled-jsx.cjs.js'],
}

;(async () => {
    await Promise.all(
        builtInFiles.esm.map(async (file) => {
            const filePath = join(builtInPath, file)
            const target = join(folderPath, file)
            await fs.copy(filePath, target, { overwrite: true })
        })
    )
    console.log('[esm]> Export of styled-jsx has been successfully replaced.')

    await Promise.all(
        builtInFiles.cjs.map(async (name) => {
            const filePath = join(builtInPath, name)
            const target = join(folderPath, name)
            await fs.copy(filePath, target, { overwrite: true })
        })
    )
    console.log('[cjs]> Export of styled-jsx has been successfully replaced.\n')
})().catch((err) => {
    console.log(err)
    process.exit(1)
})
