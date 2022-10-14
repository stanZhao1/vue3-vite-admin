<template>
  <el-table
    :data="data"
    style="
      width: 100%;
      height: calc(100vh - var(--topbar-height) - var(--footer-height) - 80px);
    "
  >
    <el-table-column
      v-for="(field, index) in fields"
      :key="field.label"
      v-bind="field"
    >
      <template v-if="field.scopedSlot" #default="{ row, column, $index }">
        <slot
          :name="field.scopedSlot"
          v-bind="{
            row,
            column,
            $index,
          }"
        >
        </slot>
      </template>
    </el-table-column>
  </el-table>
  <el-pagination
    background
    layout="prev, pager, next"
    :total="1000"
    class="absolute bottom-[10px] left-[50%] translate-x-[-50%]"
  />
</template>

<script lang="ts" setup>
const props = defineProps(["data", "fields"]);
</script>
