<!--
 * @Author: chenzechao
 * @Date: 2023-06-03 20:08:24
 * @LastEditTime: 2023-06-04 22:23:41
 * @LastEditors: chenzechao
 * @Description: 
 * @FilePath: /tius-manager-system/src/components/tab-bar-item/index.vue
-->
<template>
  <a-dropdown trigger="contextMenu" @select="actionSelect">
    <div class="tag-item" :class="{ 'tag-active': currentPath == itemData.url }" @click.stop="goActive">
      {{ itemData.menuName }}
      <span class="close" @click.stop="close">x</span>
    </div>
    <template #content>
      <a-doption :value="Eaction.current">关闭当前标签页</a-doption>
      <a-doption :value="Eaction.left" :disabled="disabledLeft">关闭左侧标签页</a-doption>
      <a-doption :value="Eaction.right" :disabled="disabledRight">关闭右侧标签页</a-doption>
      <a-doption :value="Eaction.others">关闭其他标签页</a-doption>
      <a-doption :value="Eaction.all">关闭所有标签页</a-doption>
    </template>
  </a-dropdown>
</template>
<script lang="ts" setup>
import useAppStore from '@/store/modules/app'
import { useRouter } from 'vue-router'
import { computed } from "vue";

enum Eaction {
  all = 'all',
  others = 'others',
  current = 'current',
  left = 'left',
  right = 'right',
}
const router = useRouter()
const appStore = useAppStore()
const props = defineProps({
  itemData: {
    type: Object,
    default: () => { },
  },
  index: {
    type: Number,
    default: 0
  }
})
const disabledLeft = computed(() => [0].includes(props.index))
const disabledRight = computed(() => appStore.navBar.length == props.index + 1)
const currentPath = computed(() => router.currentRoute.value.fullPath)
const currentRouterIndex = (list: Array<any>) => {
  return list.findIndex(item => item.url === router.currentRoute.value.fullPath)
}
const close = () => {
  let copyTagList = [...appStore.navBar]
  appStore.closeTag(props.itemData, props.index)
  // 当前没有导航tag，返回首页
  if (!appStore.navBar.length) {
    router.replace({ path: '/' })
    return
  }
  if (currentPath.value == props.itemData.url) {
    // 当前关闭的tag上一个是否存在，存在则拿上一个，不存在拿在一个
    let nextIndex = props.index - 1 >= 0 ? props.index - 1 : props.index + 1
    router.replace({
      path: copyTagList[nextIndex].url
    })
  }

}
const goActive = () => {
  router.push({
    path: props.itemData.url
  })
}
const actionSelect = (val: any) => {
  const copyTagList = [...appStore.navBar];
  const activeIndex = currentRouterIndex(copyTagList)
  const { itemData, index } = props
  switch (val) {
    case Eaction.current:
      return close()
    case Eaction.left:
      appStore.navBar.splice(0, index)
      if (activeIndex < index) {
        router.replace({
          path: copyTagList[index].url
        })
      }
      return
    case Eaction.right:
      appStore.navBar.splice(index + 1)
      if (activeIndex > index) {
        router.replace({
          path: copyTagList[index].url
        })
      }
      return
    case Eaction.all:
      router.replace({
        path: '/home'
      })
      appStore.navBar = []
      return
    case Eaction.others:
      appStore.navBar = [itemData]
      router.replace({
        path: itemData.url
      })
      return
    default:
      break;
  }
}
</script>
<style lang="scss" scoped>
.tag-item {
  background-color: #e3e3e3;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 4px;
  cursor: pointer;

  .close {
    padding: 2px 6px;
    border-radius: 10px;
  }
}

.tag-active {
  background-color: burlywood;
  color: #fff;
}
</style>