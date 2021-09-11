# Vue 3 + Vite

`<script setup>` 文档 [script setup docs](https://v3.cn.vuejs.org/api/sfc-script-setup.html) 

这是最简化的版本，其中包含了`router`、`eslint`、`prettier`、`tailwindcss`
前端路由为`hash`模式

## 安装依赖

```shell
npm install
```

## 本地开发环境

```shell
npm run dev
```

## 生产环境打包

```shell
npm run build
```

## 检测依赖升级

```shell
npm run update
```

## 使用到的依赖

### vite-plugin-compression

```shell
# 打包时压缩资源
# 文档https://github.com/anncwb/vite-plugin-compression/tree/main#readme
```

### vite-plugin-element-plus

```shell
# 同时按需引入elemen-plus组件和样式
# 如果使用了这个插件，就不需要再main.js中引入全部的样式文件了
# 默认使用esm模块
```

