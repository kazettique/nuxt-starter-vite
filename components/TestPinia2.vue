<template>
  <div>current state: {{ counter.count }}</div>
</template>

<script setup lang="ts">
import { useCounterStore } from '@/stores/counter';

const counter = useCounterStore();
</script>

<style scoped></style>
