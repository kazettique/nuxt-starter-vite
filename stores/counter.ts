import { defineStore } from 'pinia';
import { computed, ref } from 'vue';

export const useCounterStore = defineStore('counter', () => {
  // store, state
  const count = ref(0);

  // actions
  const increment = () => count.value++;
  const decrement = () => count.value--;

  // computed, getter
  const squareCount = computed(() => count.value ** 2);

  return { count, increment, decrement, squareCount };
});
