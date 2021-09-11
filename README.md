<p style='color:#409eff'>vue3 + vite 开箱即用的空架子</p>

## 脚本

#### 安装依赖

```shell
npm install
```

#### 本地开发环境

```shell
npm run dev
```

#### 生产环境打包

```shell
npm run build
```

#### 检测依赖升级

```shell
npm run update
```

## 使用须知

- `<script setup>` 文档 [script setup docs](https://v3.cn.vuejs.org/api/sfc-script-setup.html) 

- 这是最简化的版本，其中包含了`element-plus`、`sass`、`vuex`、`vue-router`、`axios`、`eslint`、`prettier`、`tailwindcss`以及这些插件相关的依赖，除此以外没有任何多余的依赖，不需要的可以手动删除
- 前端路由为`hash`模式
- 环境配置统一在`.env[mode]`文件中
- 使用`element-plus`需要按需引入

## `vite.config.js`配置说明

### `loadEnv`函数

配置环境变量一定要使用这个函数，否则`vite`识别不了

### `vite-plugin-compression`

```shell
# 打包时使用gzip或brotli来压缩资源
# 文档https://github.com/anncwb/vite-plugin-compression/tree/main#readme
```

### `vite-plugin-element-plus`

```shell
# element按需加载组件和样式，默认使用esm模块
# 使用组件例 import { ElButton, ElInput } from 'element-plus'
```

