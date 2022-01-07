<!--
 * @Date: 2021-12-01 15:33:26
 * @LastEditors: dwj18066042960
 * @FilePath: /vue3-vite--template/src/App.vue
-->
<template>
    <suspense>
      <router-view />
    </suspense>
</template>
<script lang="ts" setup>
  import { tailwindTheme } from './utils/tailwind/tailwindTheme';
  const { changeTheme } = tailwindTheme();
  changeTheme(localStorage.theme);
</script>
