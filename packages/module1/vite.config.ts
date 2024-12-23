import path from "path";
import { defineConfig } from "vite";
import deepmerge from 'deepmerge'
import uni from "@dcloudio/vite-plugin-uni";
import commonjs from 'vite-plugin-commonjs';

// 获取当前环境
const ENV = process.env.NODE_ENV || 'development'
const PROJECT_ENV = process.env.PROJECT_ENV;
console.log('项目环境：', PROJECT_ENV);

// 基础配置
const baseConfig = {
  base: '/',
  plugins: [uni(), commonjs()],
  // 可以在这里添加其他公共的配置项
  define: {
		'process.env.PROJECT_ENV': JSON.stringify(process.env.PROJECT_ENV),
		'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
	},
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'), // 将 @ 映射到 src 目录
      '~': path.resolve(__dirname, './src/external'), // 将 ~ 映射到 src/external 目录
    },
  },
}

// 根据环境选择不同的配置
let envConfig = {}
if (ENV === 'production') {
  envConfig = require('./config/pro.js')
} else if (ENV === 'development') {
  envConfig = require('./config/dev.js')
}

// 合并基础配置和环境特定的配置
export default defineConfig(deepmerge(baseConfig, envConfig))
