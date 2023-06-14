<!--
 * @Author: chenzechao chenzc@jw99.net
 * @Date: 2023-05-31 09:50:18
 * @LastEditors: chenzechao chenzc@jw99.net
 * @LastEditTime: 2023-06-14 18:18:50
 * @FilePath: /tius-manager-system/src/components/menu/index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <a-menu show-collapse-button breakpoint="lg" @collapse="menuCollapse" class="sider-menu" :selected-keys="selectedKeys"
    auto-open-selected>
    <div v-for="(levelOne, index) in routerMenu" :key="`${index}-sub`">
      <a-sub-menu :key="levelOne.perms" v-if="levelOne.type == 'MENU' && levelOne.children.length">
        <template #icon><icon-bug></icon-bug></template>
        <template #title>{{ levelOne.menuName }}</template>
        <a-sub-menu :key="levelTow.perms" v-for="(levelTow, towIndex) in levelOne.children" :title="levelTow.menuName">
          <a-menu-item v-for="(levelThree, threeIndex) in levelTow.children" :key="levelThree.perms"
            @click="menuClick(levelThree)">{{ levelThree.menuName }}</a-menu-item>
        </a-sub-menu>
      </a-sub-menu>
      <a-menu-item v-else :key="(levelOne.perms as any)" :title="levelOne.menuName"></a-menu-item>
    </div>
  </a-menu>
</template>
<script lang="ts" setup>
import { useUserStore } from '@/store';
import { computed, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import useAppStore from '@/store/modules/app'
const appStore = useAppStore()
const userStore = useUserStore()
const routerMenu = computed(() => userStore.menuListVOS)
const router = useRouter()
const menuCollapse = (val: boolean) => {
  appStore.appCommentsEdit({ collapsed: val })
}
//默认展开的额菜单栏
const selectedKeys = computed(() => {
  return [router.currentRoute.value.name]
})
// 点击菜单栏跳转
const menuClick = (item: any) => {
  appStore.addNavBar(item)
  router.push({
    path: item.url
  })
}
onMounted(() => {
  let currentRouter = router.currentRoute.value
  appStore.addNavBar({
    menuName: currentRouter.meta.locale,
    url: currentRouter.path
  })
})
</script>
<style lang="scss" scoped>
::v-deep.sider-menu {
  height: 100%;

  .arco-menu-collapse-button {
    bottom: 20px;
  }
}
</style>