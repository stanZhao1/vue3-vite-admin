<template>
  <CommonTable :data="tableData" :fields="fields">
    <!-- column为自定义列 -->
    <template #customColumn="{ row }">
      <el-tag>{{ row.name }}</el-tag>
    </template>
    <!-- column为操作列 -->
    <template #actions>
      <el-button type="primary" link>编辑</el-button>
      <el-popconfirm title="确定删除吗?">
        <template #reference>
          <el-button type="primary" link>删除</el-button>
        </template>
      </el-popconfirm>
    </template>
  </CommonTable>
</template>

<script setup>
import CommonTable from "@/components/CommonTable.vue";
const tableData = [
  {
    date: "2016-05-03",
    name: "张三",
    address: "深圳福田区",
  },
  {
    date: "2016-05-02",
    name: "李四",
    address: "深圳南山区",
  },
  {
    date: "2016-05-02",
    name: "李四",
    address: "深圳南山区",
  },
  {
    date: "2016-05-02",
    name: "李四",
    address: "深圳南山区",
  },
  {
    date: "2016-05-02",
    name: "李四",
    address: "深圳南山区",
  },
  {
    date: "2016-05-02",
    name: "李四",
    address: "深圳南山区",
  },
  {
    date: "2016-05-02",
    name: "李四",
    address: "深圳南山区",
  },
  {
    date: "2016-05-02",
    name: "李四",
    address: "深圳南山区",
  },
  {
    date: "2016-05-02",
    name: "李四",
    address: "深圳南山区",
  },
  {
    date: "2016-05-02",
    name: "李四",
    address: "深圳南山区",
  },
  {
    date: "2016-05-02",
    name: "李四",
    address: "深圳南山区",
  },
  {
    date: "2016-05-02",
    name: "李四",
    address: "深圳南山区",
  },
  {
    date: "2016-05-02",
    name: "李四",
    address: "深圳南山区",
  },
];
const fields = [
  {
    type: "selection",
  },
  {
    type: "index",
    label: "序号",
    width: "100",
  },
  {
    prop: "date",
    label: "正常数据",
  },
  {
    scopedSlot: "customColumn",
    prop: "name",
    label: "自定义列",
  },
  {
    prop: "actions",
    scopedSlot: "actions",
    label: "操作",
  },
];
</script>
