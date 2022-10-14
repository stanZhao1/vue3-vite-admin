<template>
  <el-header class="p-0 flex justify-items-center border-b">
    <!-- logo -->
    <div class="w-[200px] text-center leading-[60px]">LOGO</div>
    <!-- 导航 -->
    <el-menu
      :default-active="activeTopMenuIndex"
      mode="horizontal"
      :ellipsis="false"
      class="flex-grow border-b-0"
    >
      <el-menu-item
        v-for="menu in menus"
        :key="menu.label"
        :index="menu.path.substring(1) == '' ? 'index' : menu.path.substring(1)"
        class="px-0"
      >
        <RouterLink class="px-4" :to="resolvePath(menu)">{{
          menu.label
        }}</RouterLink>
      </el-menu-item>
    </el-menu>
    <!-- 菜单 -->
    <el-dropdown class="pr-[20px]">
      <span class="el-dropdown-link leading-[60px]">
        个人中心
        <el-icon class="el-icon--right">
          <arrow-down />
        </el-icon>
      </span>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item>
            <RouterLink to="/login">退出登录</RouterLink>
          </el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </el-header>
</template>

<script setup>
import menus from "@/mock/menu.json";
import { computed } from "vue";
import { useRoute } from "vue-router";
import { useIndexStore } from "@/stores/index";
const route = useRoute();
const indexStore = useIndexStore();

// 获取选中的顶部菜单path
const activeTopMenuIndex = computed(() => {
  const path = route.path.split("/")[1];
  indexStore.changeSelectedMenu(getSelectedMenu(path)); // 选中的菜单数据存入store
  return path;
});

// 获取选中的菜单（顶部+侧边栏）
const getSelectedMenu = (path) => {
  return menus.filter((item) => {
    if (path == "index") {
      return item;
    }
    return item.path.substring(1) == path;
  })[0];
};

// 获取跳转的完整路径
const resolvePath = (menu) => {
  let path = menu.path;
  const getFullPath = (subMenu) => {
    if (subMenu.children?.length) {
      path = path + "/" + subMenu.children[0].path;
      getFullPath(subMenu.children[0]);
    }
  };
  // 有多级菜单
  if (menu.children?.[0]?.children?.length) {
    getFullPath(menu);
    return path;
  }
  // 只有一级菜单
  return menu.path;
};
</script>
