<template>
  <div class="tab-bar-container">
    <a-space>
      <a-tag v-for="(tag, index) in tagList" closable @close="closeTag(tag,index)" :color="tag.name == active ? 'blue' : ''">{{
        tag.meta.locale }}</a-tag>
    </a-space>
  </div>
</template>
<script lang="ts" setup>
import { useRouter } from 'vue-router'
import useAppStore from '@/store/modules/app'
import { computed } from "vue";
const router = useRouter()
const appStore = useAppStore()
const tagList = computed(() => appStore.navBar)
const active = computed(() => router.currentRoute.value.name)
const closeTag = (value: any,index:number) => {
  appStore.removeTag(value,index)
}
</script>
<style lang="scss" scoped>
.tab-bar-container {
  background-color: #fff;
  padding: 8px 10px;
}
</style>