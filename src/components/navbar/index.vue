<!--
 * @Author: chenzechao
 * @Date: 2023-05-28 21:20:36
 * @LastEditTime: 2023-06-01 17:12:44
 * @LastEditors: chenzechao chenzc@jw99.net
 * @Description: 
 * @FilePath: /tius-manager-system/src/components/navbar/index.vue
-->
<template>
  <div class="navbar">
    <div class="left-side">
      <a-space>
        <img src="http://192.168.20.98:5174/src/assets/images/login/logo.png" height="33" alt="">
      </a-space>
    </div>
    <div class="center">用户中心</div>
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
  .center{
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    color: gray;
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