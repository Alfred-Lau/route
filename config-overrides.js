const rewireEslint = require('react-app-rewire-eslint')

// module.exports = function override(config, env) {
//     console.log(config)
//     config = rewireEslint(config, env)
//     return config
// }

module.exports = {
  webpack: function (config, env) {
    config.module.rules.push({
      test: /\.(js|jsx)$/,
      enforce: 'pre',
      loader: 'eslint-loader',
      exclude: /node_modules/,
      options: {
        fix: true
      }
    })

    return config
  }
}
