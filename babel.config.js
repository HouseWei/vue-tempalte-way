
module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset'
  ],
  env: {
    production: {
      plugins: ['transform-remove-console']
    },
    development: {
      plugins: ['dynamic-import-node']
    }
  },
  plugins: [
    [
      'component',
      {
        libraryName: 'element-ui',
        styleLibraryName: 'theme-chalk'
      }
    ]
  ]
}
