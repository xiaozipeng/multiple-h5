
const path = require('path');
const domainPath = path.resolve(__dirname, '../../common/env/domain.js');
const getDomain = require(domainPath);

// 代理开关
const DOMAIN_PROXY_ENABLE = ['f10'];
// 生成h5的代理配置
const genProxyConfig = function () {
  const proxyConfig = {};
  const domainConfig = getDomain(process.env.PROJECT_ENV) || {};
  Object.keys(domainConfig).forEach((key) => {
    if (!DOMAIN_PROXY_ENABLE.includes(key)) return;
    const proxyKey = `/api/${key}`;
    proxyConfig[proxyKey] = {
      target: domainConfig[key],
      rewrite: (path) => path.replace(/^\/api/, ''),
      changeOrigin: true,
    };
  });
  return proxyConfig;
};

module.exports = {
  base: '/',
  server: {
    port: 4000,
    proxy: genProxyConfig(),
    // historyApiFallback: true
  },
}