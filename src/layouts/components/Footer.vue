<template>
  <el-footer
    class="text-center border-t fixed bottom-0"
    :style="{
      width: indexStore.selectedMenu.children.length
        ? 'calc(100% - 200px)'
        : '100%',
    }"
  >
    <div class="leading-[60px]">Footer</div>
  </el-footer>
</template>

<script setup>
import { useIndexStore } from "@/stores/index";

const indexStore = useIndexStore();
</script>
