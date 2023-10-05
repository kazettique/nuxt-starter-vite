import { defineStore } from 'pinia';
import { computed, ref } from 'vue';

export const useCounterStore = defineStore('counter', () => {
  // store, state
  const _counter = ref<number>(0);

  // actions
  const increment = () => _counter.value++;
  const decrement = () => _counter.value--;
  const updateCounter = (newValue: number) => (_counter.value = newValue);

  // computed, getter
  const squareCount = computed(() => _counter.value ** 2);
  const getCounter = computed<number>(() => _counter.value);

  return { increment, decrement, squareCount, updateCounter, getCounter };
});
