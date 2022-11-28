<template>
  <div>
    <button class="m-2 rounded border bg-neutral-300 p-2 shadow" v-on:click="increment()">increment</button>
    <button class="m-2 rounded border bg-neutral-300 p-2 shadow" v-on:click="decrement()">decrement</button>
  </div>
</template>
<script setup lang="ts">
import { useCounterStore } from '@/stores/counter';

const counter = useCounterStore();

const increment = () => counter.increment();
const decrement = () => counter.decrement();
</script>
<style></style>
