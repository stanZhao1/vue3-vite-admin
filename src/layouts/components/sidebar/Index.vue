<template>
  <el-aside
    v-if="indexStore.selectedMenu.children.length"
    width="var(--leftMenu-height)"
    class="left-menu-aside"
  >
    <el-scrollbar view-class="h-full">
      <el-menu :default-active="activeLeftMenuIndex" class="h-full">
        <SidebarItem
          v-for="menu in indexStore.selectedMenu.children"
          :key="menu.label"
          :item="menu"
        />
      </el-menu>
    </el-scrollbar>
  </el-aside>
</template>

<script setup>
import { computed } from "vue";
import { useRoute } from "vue-router";
import SidebarItem from "./Item.vue";
import { useIndexStore } from "@/stores/index";
const indexStore = useIndexStore();
const route = useRoute();

// 获取左侧选中菜单的path
const activeLeftMenuIndex = computed(() => {
  return route.path;
});
</script>

<style scoped>
.left-menu-aside {
  height: calc(100vh - var(--topbar-height));
}
</style>
