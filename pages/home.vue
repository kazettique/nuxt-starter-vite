<template>
  <div class="test">
    <div>home page</div>
    <Menu />
    <NuxtLink to="/dashboard">go to dashboard</NuxtLink>
    <NuxtLink to="/hello/world">go to hello world</NuxtLink>
  </div>
</template>
<script lang="ts" setup>
import Menu from '@/components/Menu.vue';
</script>

<style></style>
