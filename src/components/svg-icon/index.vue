<template>
  <svg :class="svgClass" aria-hidden="true" class="svg-icon">
    <use :xlink:href="iconfClassName" :fill="color"></use>
  </svg>
</template>
<script setup lang="ts">
import { computed } from 'vue'
const props = defineProps({
  // 传入自定义的类名
  className: {
    type: String,
    default: ''
  },
  color: {
    type: String,
    default: '#409eff'
  },
  iconName: {
    type: String,
    default: ""
  }
})
const iconfClassName = computed(() => {
  return `#${props.iconName}`
})
const svgClass = computed(() => {
  return `${props.className}`
})
</script>
<style lang="scss" scoped>
.svg-icon {
  width: 1em;
  height: 1em;
  position: relative;
  fill: currentColor;
  vertical-align: -2px;
}
</style>