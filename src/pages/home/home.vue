<!--
 * @Date: 2022-01-07 13:34:28
 * @LastEditors: dwj18066042960
 * @FilePath: /vue3-vite--template/src/pages/home/home.vue
-->
<template>
  <div class="w-full h-full p-8"> 
    <el-button>ok</el-button>
    <el-date-picker v-model="value1" type="date" placeholder="Pick a day">
      </el-date-picker>
    </div>
</template>

<script lang="ts" setup>
import {ref} from 'vue'
const value1 = ref('')
</script>

<style lang="scss" scoped></style>