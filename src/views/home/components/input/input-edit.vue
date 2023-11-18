<!--
 * @Author: chenzechao
 * @Date: 2023-10-22 20:06:53
 * @LastEditTime: 2023-10-22 21:22:30
 * @LastEditors: chenzechao
 * @Description: 
 * @FilePath: /tius-manager-system/src/views/home/components/input/input-edit.vue
-->
<template>
  <div>
    <input type="text" v-model="value.text" />
  </div>
</template>
<script lang="ts" setup>
const props = defineProps({
  value: {
    type: Object,
    default: () => {},
  },
});
</script>
