/**
 * 获取域名
 * @typedef {{f10: string; }} Domain
 * @param {'test' | 'uat' | 'production'} env
 * @returns {Domain} 返回域名列表
 */
module.exports = function getDomain(env = 'production') {
  return {
    test: {
      f10: 'https://test-dxzg-api.dexunzhenggu.cn',
      dx: 'https://test-dxzg-api.dexunzhenggu.cn',
    },
    uat: {
      f10: 'https://dxzg-api.dexunzhenggu.cn',
      dx: 'https://dxzg-api.dexunzhenggu.cn',
    },
    production: {
      f10: 'https://dxzg-api.dexunzhenggu.cn',
      dx: 'https://dxzg-api.dexunzhenggu.cn',
    },
  }[env];
}
