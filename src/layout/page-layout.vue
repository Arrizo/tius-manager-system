<!--
 * @Author: chenzechao chenzc@jw99.net
 * @Date: 2023-05-25 14:54:21
 * @LastEditors: chenzechao chenzc@jw99.net
 * @LastEditTime: 2023-06-16 11:21:16
 * @FilePath: /tius-manager-system/src/layout/page-layout.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <router-view v-slot="{ Component, route }">
    <transition name="fade" mode="out-in" appear>
      <div class="layout-component">
        <component :is="Component" :key="route.fullPath" v-if="route.meta.ignoreCache"></component>
        <keep-alive v-else :include="cacheList">
          <component :is="Component" :key="route.fullPath"></component>
        </keep-alive>
      </div>
    </transition>
  </router-view>
</template>
<script lang="ts" setup name>
import { computed } from 'vue'
const cacheList = computed(() => [])
</script>
<style lang="scss" scoped>
.layout-component {
  margin: 10px;
  background-color: var(--background-color-1);
  height: calc(100vh - 126px);
  overflow: hidden;
}
</style>