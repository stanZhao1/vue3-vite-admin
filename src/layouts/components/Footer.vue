<template>
  <el-footer
    class="text-center border-t fixed bottom-0"
    :style="{
      width: indexStore.selectedMenu.children.length
        ? 'calc(100% - var(--leftMenu-height))'
        : '100%',
    }"
  >
    <div class="leading-[var(--footer-height)]">
      Copyright &copy; {{ curYear }} Red Run
    </div>
  </el-footer>
</template>

<script setup>
import { useIndexStore } from "@/stores/index";

const indexStore = useIndexStore();
const curYear = new Date().getFullYear();
</script>
