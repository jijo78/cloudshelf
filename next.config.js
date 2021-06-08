const withPlugins = require('next-compose-plugins')
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true'
})

const config = {

  // Fix live reload in docker
  webpackDevMiddleware: config => {
    config.watchOptions = {
      poll: 1000,
      aggregateTimeout: 300
    }
    return config
  },

  webpack: config => {
    config.resolve = {
      ...config.resolve,
      symlinks: false
    }
    return config
  }
}

module.exports = withPlugins([withBundleAnalyzer], config)
