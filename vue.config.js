module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        'assets': '@/assets',
        'commons': '@/commons',
        'components': '@/components',
        'common': 'components/common',
        'content': 'components/content',
        'network': '@/network',
        'views': '@/views'
      }
    }
  }
}
