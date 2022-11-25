<template>
  <div class="text-red-500">HELLO</div>
  <World />
</template>
<script setup lang="ts">
export interface IProps {
  title: string;
  initialValue?: number;
}

const year: number = 2022;
const title: string = `${year} iThome 鐵人賽`;
const bool: boolean = false;

const props = withDefaults(defineProps<IProps>(), {
  title: 'Default Title',
  initialValue: 0,
});
</script>
<style scoped lang="scss">
.test {
  position: absolute;
  top: -10px;
  font-size: 2.6rem;
  font-weight: 500;
}

.tw-box {
  @apply flex border border-green-600 bg-red-300 text-blue-500;
}

.container {
  border: 1px red solid;
}

.element {
  position: absolute;
  top: 50%;
  left: 50%;
  display: grid;

  overflow: hidden;

  width: 50px;
  height: 50px;
  justify-content: center;

  background-color: hotpink;
  caret-color: goldenrod;
  color: red;

  font-size: 2rem;
  grid-template-columns: 1fr 1fr;

  isolation: isolate;
  line-height: 1.5;
  outline: 1px solid rebeccapurple;
  pointer-events: none;
  text-align: center;
  transform: translate(-50%, -50%);
  user-select: none;
}
</style>
