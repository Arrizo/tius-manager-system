<!--
 * @Author: chenzechao
 * @Date: 2023-06-02 23:10:49
 * @LastEditTime: 2023-06-04 22:23:51
 * @LastEditors: chenzechao
 * @Description: 
 * @FilePath: /tius-manager-system/src/components/tabBar/index.vue
-->
<template>
  <a-affix>
    <div class="tab-bar-container">
      <a-space>
        <tab-bar-item v-for="(tag,index) in tagList" :key="`${index}-tag`" :index="index" :itemData="tag"></tab-bar-item>
      </a-space>
    </div>
  </a-affix>
</template>
<script lang="ts" setup>
import useAppStore from '@/store/modules/app'
import tabBarItem from '@/components/tab-bar-item/index.vue'
import { computed } from "vue";
const appStore = useAppStore()
const tagList = computed(() => {
  return appStore.navBar
})
</script>
<style lang="scss" scoped>
.tab-bar-container {
  background-color: #fff;
  padding: 8px 10px;
}
</style>