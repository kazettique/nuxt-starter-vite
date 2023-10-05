<template>
  <div class="test">
    <div>this is menu</div>
    <div>counter: {{ counter.getCounter }}</div>
    <div>counter1: {{ counter2.getCounter2 }}</div>
  </div>
</template>
<script lang="ts" setup>
import { computed, reactive, ref } from 'vue';
import useCounter2Store from '@/composables/useCounterStore2';
import { useCounterStore } from '~~/stores/counter';

const counter = useCounterStore();
const counter2 = useCounter2Store();
</script>
<style></style>
