<template>
  <div>
    <button v-on@click="increment()" class="m-2 rounded border bg-neutral-300 p-2 shadow">increment</button>
    <button v-on@click="decrement()" class="m-2 rounded border bg-neutral-300 p-2 shadow">decrement</button>
  </div>
</template>
<script setup lang="ts">
import { useCounter } from '@/stores/counter';

const counter = useCounter();

const increment = () => counter.increment();
const decrement = () => counter.decrement();
</script>
<style></style>
