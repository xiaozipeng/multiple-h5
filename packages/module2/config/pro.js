const { PUBLIC_PATH } = process.env;
// todo CI/CD 部署时用变量覆盖
module.exports = {
  // 生产环境 CDN 地址
  // base: 'https://dxzg-api.dexunzhenggu.cn/', 
  base: './',
  build: {
    outDir: 'build',
  },
}