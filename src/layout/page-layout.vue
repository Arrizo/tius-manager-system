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
  height: 100%;
  width: 100%;
}
</style>