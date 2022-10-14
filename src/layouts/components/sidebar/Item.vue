<template>
  <!-- 只有一级菜单 -->
  <RouterLink
    v-if="!item.children || !item.children.length"
    class="w-full"
    :to="resolvePath(item.path)"
  >
    <el-menu-item :index="resolvePath(item.path)">
      {{ item.label }}
    </el-menu-item>
  </RouterLink>
  <!-- 嵌套菜单 -->
  <el-sub-menu v-else :index="resolvePath(item.path)">
    <template #title>
      {{ item.label }}
    </template>
    <SidebarItem
      v-for="menu in item.children"
      :key="menu.label"
      :item="menu"
      :baseUrl="resolvePath(item.path)"
    />
  </el-sub-menu>
</template>

<script setup>
import SidebarItem from "./Item.vue";
import path from "path-browserify";
import { useIndexStore } from "@/stores/index";
const indexStore = useIndexStore();
const props = defineProps(["item", "baseUrl"]);

// 获取跳转的完整路径
const resolvePath = (curPath) => {
  return path.resolve(
    indexStore.selectedMenu.path,
    props.baseUrl ?? "",
    curPath
  );
};
</script>
