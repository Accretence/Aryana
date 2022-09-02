const fs = require('fs-extra')
const path = require('path')
const componentsPath = path.join(__dirname, '../src')

module.exports = async () => {
  const files = await fs.readdir(componentsPath)

  async function fetchComponents() {
    let res = []

    for (let i = 0; i < files.length; i++) {
      const comPath = path.join(componentsPath, files[i])

      console.log(files[i])

      const stat = await fs.stat(comPath)
      if (!stat.isDirectory()) break

      const entry = path.join(comPath, 'index.js')

      const hasFile = await fs.pathExists(entry)
      if (!hasFile) break

      res.push({ name: files[i], url: entry })
    }

    return res
  }

  const components = await fetchComponents()
  console.log(components)

  const componentsEntries = components
    .filter(r => r)
    .reduce((pre, current) => {
      return Object.assign({}, pre, { [current.name]: current.url })
    }, {})

  console.log(
    `\n${Object.keys(componentsEntries).length} Components in total have been collected.`,
  )
  console.log('Bundle now...')

  const configs = {
    mode: 'none',
    entry: componentsEntries,
    output: {
      filename: '[name].js',
      path: path.resolve(__dirname, '../dist'),
      libraryTarget: 'commonjs',
    },

    resolve: {
      extensions: ['.ts', '.tsx', '.js'],
      alias: {
        components: componentsPath,
      },
    },

    externals: [
      {
        react: {
          root: 'React',
          commonjs2: 'react',
          commonjs: 'react',
          amd: 'react',
        },
        'react-dom': {
          root: 'ReactDOM',
          commonjs2: 'react-dom',
          commonjs: 'react-dom',
          amd: 'react-dom',
        },
        // '/styled-jsx/': {
        //   root: '_JSXStyle',
        //   commonjs2: 'styled-jsx',
        //   commonjs: 'styled-jsx',
        //   amd: 'styled-jsx',
        // },
      },
      function (context, request, done) {
        if (/^styled-jsx/.test(request)) {
          return done(null, 'commonjs ' + request)
        }
        done()
      },
    ],

    module: {
      rules: [
        {
          test: /\.js?$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
          options: {
            plugins: ['styled-jsx/babel'],
          },
        },
      ],
    },
  }

  return [
    configs,
    {
      ...configs,
      entry: '[name].js',
    },
    {
      ...configs,
      mode: 'production',
      entry: {
        'index.min': path.join(componentsPath, 'index.js'),
      },
      output: {
        filename: '[name].js',
        path: path.resolve(__dirname, '../dist'),
        library: 'Aryana',
        libraryTarget: 'umd',
        globalObject: 'this',
      },
    },
  ]
}
