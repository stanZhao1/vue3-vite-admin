<script setup>
import { RouterView } from "vue-router";
import zhCn from "element-plus/lib/locale/lang/zh-cn";

const locale = zhCn;
</script>

<template>
  <el-config-provider :locale="locale">
    <RouterView />
  </el-config-provider>
</template>

<style>
#app {
  height: 100vh;
}
</style>
