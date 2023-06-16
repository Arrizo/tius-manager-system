<!--
 * @Author: chenzechao chenzc@jw99.net
 * @Date: 2023-06-05 09:02:24
 * @LastEditors: chenzechao chenzc@jw99.net
 * @LastEditTime: 2023-06-15 16:20:16
 * @FilePath: \tius-manager-system\src\views\oms\system\menu\index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <panel>
    <template #search>
      <search @on-search="initData" :loading="loading"></search>
    </template>
    <template #table>
      <list :data-list="dataList" :loading="loading"></list>
    </template>
  </panel>
</template>
<script lang="ts" setup>
import Panel from '@/components/panel/index.vue'
import List from './components/list.vue'
import Search from './components/search.vue'
import { ref, reactive } from "vue";
import { getMenuList } from '@/api/system/menu'
import { MenuSearchForm, MenuListItem } from '@/types/system/menu'
import { Message } from '@arco-design/web-vue';
const loading = ref(false)
const dataList = ref<Array<MenuListItem>>([])
let form = reactive<MenuSearchForm>(new MenuSearchForm())
const initData = async (data: MenuSearchForm) => {
  try {
    loading.value = true
    Object.assign(form, data)
    const { code, message, value } = await getMenuList(form)
    if (code != 0) {
      throw new Error(message)
    }
    dataList.value=value
  } catch (error) {
    Message.error((error as Error).message)
  } finally {
    loading.value = false
  }
}
</script>