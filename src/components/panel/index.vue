<!--
 * @Author: chenzechao chenzc@jw99.net
 * @Date: 2023-06-05 15:34:48
 * @LastEditors: chenzechao chenzc@jw99.net
 * @LastEditTime: 2023-06-05 15:45:50
 * @FilePath: \tius-manager-system\src\components\panel\index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
<div class="container">
  <div class="container-search">
    <slot name="search"></slot>
  </div>
  <div class="container-table">
    <slot name="table"></slot>
  </div>
</div>
</template>
<script lang="ts" setup></script>
<style lang="scss" scoped>
::v-deep.container{
  &-search{
    padding: 16px 16px 0px 16px;
    border-bottom: 1px solid #e3e3e3;
    .arco-form{
      .arco-form-item{
        margin-bottom: 16px;
      }
    }

  }
  &-table{
    padding: 16px;
  }
}
</style>
