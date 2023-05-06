baseUrl = 'http://localhost:7003'    // 本地开发环境
// baseUrl = 'http://www.yancx.cn'          // 生产环境
module.exports = {
  productionSourceMap: false,
  outputDir: 'blog-view',
  devServer: {
    port: 7002,
    proxy: {
      '/api': {
        target: baseUrl,
        changeOrigin: true
      }
    }
  }
};
