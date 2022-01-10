<!--
 * @Date: 2022-01-07 13:34:28
 * @LastEditors: dwj18066042960
 * @FilePath: /vue3-vite--template/src/pages/home/home.vue
-->
<template>
  <div class="w-full h-full p-8"> 
    <el-button ref="el" @click="changeColor">ok</el-button>
  </div>
</template>

<script lang="ts" setup>
import {ref} from 'vue'
import { useCssVar } from '@vueuse/core'

const el = ref(null)
const color = useCssVar('--el-color-primary', el)
const changeColor = ()=>{
  color.value = 'blue'
}
</script>

<style lang="scss" scoped></style>