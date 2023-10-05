import { useState } from '#app';
import { computed } from 'vue';

function useCounter2Store() {
  const _counter = useState<number>('counter2', () => 0);

  const updateCounter2 = (newValue: number) => (_counter.value = newValue);

  const getCounter2 = computed<number>(() => _counter.value);

  return {
    updateCounter2,
    getCounter2,
  };
}

export default useCounter2Store;
