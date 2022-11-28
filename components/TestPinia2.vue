<template>
  <div>current state: {{ counter.n }}</div>
</template>

<script setup lang="ts">
import { useCounter } from '@/stores/counter';

const counter = useCounter();
</script>

<style scoped></style>
