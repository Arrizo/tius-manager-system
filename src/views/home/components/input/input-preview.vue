<!--
 * @Author: chenzechao
 * @Date: 2023-10-22 20:06:48
 * @LastEditTime: 2023-10-22 21:21:58
 * @LastEditors: chenzechao
 * @Description: 
 * @FilePath: /tius-manager-system/src/views/home/components/input/input-preview.vue
-->
<template>
  <div>{{ value.text }}</div>
</template>
<script lang="ts" setup>
const props = defineProps({
  value: {
    type: Object,
    default: () => {},
  },
});
</script>
