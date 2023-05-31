<!--
 * @Author: chenzechao chenzc@jw99.net
 * @Date: 2023-05-25 15:00:05
 * @LastEditors: chenzechao chenzc@jw99.net
 * @LastEditTime: 2023-05-31 10:13:24
 * @FilePath: /tius-manager-system/src/layout/default-layout.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <a-layout class="layout">
    <a-layout-header>
      <NavBar />
    </a-layout-header>
    <a-layout>
      <a-layout-sider breakpoint="xl" :collapsible="true" :hide-trigger="true">
          <Menu></Menu>
        <template #trigger="{ collapsed }">
          <IconCaretRight v-if="collapsed"></IconCaretRight>
          <IconCaretLeft v-else></IconCaretLeft>
        </template>
      </a-layout-sider>
      <a-layout-content>
        <page-layout></page-layout>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>
<script lang="ts" setup >
import { useRouter } from 'vue-router'
import PageLayout from './page-layout.vue'
import NavBar from '@/components/navbar/index.vue'
import Menu from '@/components/menu/index.vue'
import {
  IconCaretRight,
  IconCaretLeft,
  IconHome,
  IconCalendar,
} from '@arco-design/web-vue/es/icon';
</script>
<style scoped lang="scss">
$nav-size-height: 60px;

.layout {
  width: 100%;
  height: 100%;

  .arco-layout-header {
    height: $nav-size-height;
    width: 100%;
    position: fixed;
    top: 0px;
    left: 0px;
    z-index: 10;
    box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.05);
    height: $nav-size-height;
  }

  .arco-layout-sider {
    position: fixed;
    top: 60px;
    left: 0px;
    height: 100%;
    transition: all 0.2s cubic-bezier(0.34, 0.69, 0.1, 1);
    width: 196px !important;

    &::after {
      position: absolute;
      top: 0;
      right: -1px;
      display: block;
      width: 1px;
      height: 100%;
      background-color: var(--color-border);
      content: '';
    }
  }

  .arco-layout-content {
    min-height: 100vh;
    overflow-y: hidden;
    background: var(--color-fill-2);
    transition: padding 0.2s cubic-bezier(0.34, 0.69, 0.1, 1);
    padding: 60px 0px 0px 196px;
  }

}
</style>