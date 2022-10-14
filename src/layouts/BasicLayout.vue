<template>
  <!-- 顶部导航 -->
  <Topbar />
  <el-container>
    <!-- 侧边导航 -->
    <Sidebar />
    <!-- 内容 -->
    <el-container>
      <el-scrollbar
        class="w-full relative"
        style="
          height: calc(100vh - var(--topbar-height) - var(--footer-height));
        "
      >
        <el-main>
          <!-- 设置key是为了不同path指向同一个组件时组件会复用，数据不更新的问题（强制组件不复用） -->
          <RouterView :key="route.path" />
        </el-main>
      </el-scrollbar>
      <Footer />
    </el-container>
  </el-container>
</template>

<script lang="ts" setup>
import Topbar from "./components/Topbar.vue";
import Sidebar from "./components/sidebar/Index.vue";
import Footer from "./components/Footer.vue";
import { useRoute } from "vue-router";
const route = useRoute();
</script>
