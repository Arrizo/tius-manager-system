<!--
 * @Author: chenzechao
 * @Date: 2023-05-14 12:08:24
 * @LastEditTime: 2023-05-24 00:50:26
 * @LastEditors: chenzechao
 * @Description: 
 * @FilePath: /tius-manager-system/src/App.vue
-->
<template>
  <router-view></router-view>
  <div class="sda" @click="handerl">sadfads</div>
  <div v-for="(item,index) in list" :key="`${index}-name`">
    {{item.name}}
  </div>
</template>

<script setup lang="ts">
  import {
  
  } from '@/api/user/index.ts'
  import {
    ref
  } from 'vue'
  const list = ref()
  const handerl = async () => {
    const res = await getName(3)
    list.value = res.data.data
  }
</script>

<style lang="scss" scoped>
  .sda {
    background-color: red;
  }
</style>