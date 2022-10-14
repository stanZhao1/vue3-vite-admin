<template>{{ href }}</template>

<script setup>
import { useRoute } from "vue-router";
const route = useRoute();
const href = route.path.substring(route.path.lastIndexOf("/") + 1);
</script>
