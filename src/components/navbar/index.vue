<!--
 * @Author: chenzechao
 * @Date: 2023-05-28 21:20:36
 * @LastEditTime: 2023-05-28 21:59:56
 * @LastEditors: chenzechao
 * @Description: 
 * @FilePath: /tius-manager-system/src/components/navbar/index.vue
-->
<template>
  <div class="navbar">
    <div class="left-side">
      <a-space>
        <img src="http://p3-armor.byteimg.com/tos-cn-i-49unhts6dw/df…e20e64fac803d52bc.svg~tplv-49unhts6dw-image.image"
          width="33" height="33" alt="">
        <div>tius</div>
      </a-space>
    </div>
    <div class="left-center">123</div>
    <ul class="right-side">
      <li v-for="(item,index) in 6" :key="`${index}-riht`">
        <a-tooltip content="搜索">
          <a-button class="nav-btn" type="outline" :shape="'circle'">
            <template #icon>
              <icon-search />
            </template>
          </a-button>
        </a-tooltip>
      </li>
    </ul>
  </div>
</template>
<script lang="ts" setup>
import { } from '@arco-design/web-vue'
</script>
<style lang="scss" scoped>
.navbar {
  height: 100%;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #e3e3e3;
  background-color: #fff;

  .left-side {
    display: flex;
    padding-left: 20px;
  }
  .right-side{
    display: flex;
    padding-right: 20px;
    list-style: none;
    li{
      display: flex;
      padding: 0px 10px;
    }
  }
}
</style>