<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script lang="ts" setup>
import { onMounted } from './.nuxt/imports';
import TestPinia from './components/TestPinia.vue';
import useCounter2Store from './composables/useCounterStore2';
import { useCounterStore } from './stores/counter';

const counter = useCounterStore();
const counter2 = useCounter2Store();

// await new Promise<void>((resolve) => {
//   setTimeout(() => {
//     const newValue = Math.random() > 0.5 ? 5566 : 6655;

//     // counter.updateCounter(newValue);
//     counter2.updateCounter2(newValue);
//     // console.log('hello promise');
//     resolve();
//   }, 1000);
// });

onMounted(async () => {
  // console.log('on mount');
  // await new Promise<void>((resolve) => {
  //   setTimeout(() => {
  //     const newValue = Math.random() > 0.5 ? 5566 : 6655;
  //     counter.updateCounter(newValue);
  //     counter2.updateCounter2(newValue);
  //     // console.log('hello promise');
  //     resolve();
  //   }, 1000);
  // });
});
</script>
