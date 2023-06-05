<!--
 * @Author: chenzechao
 * @Date: 2023-05-31 23:45:57
 * @LastEditTime: 2023-06-05 17:23:23
 * @LastEditors: chenzechao chenzc@jw99.net
 * @Description: 
 * @FilePath: /tius-manager-system/src/view/oms/system/user/index.vue
-->
<template>
  <panel>
    <template #search>
      <search @on-search="initData"></search>
    </template>
    <template #table>
      <list :data-list="dataList" :total="total" @on-search="initData" :page-number="form.pageNum"
        :page-size="form.pageSize"></list>
    </template>
  </panel>
</template>
<script lang="ts" setup name="system-use">
import Search from './components/search.vue'
import List from './components/list.vue'
import Panel from '@/components/panel/index.vue'
import { UserSearchForm, UserSearchListItem } from '@/types/system/user'
import { getList } from '@/api/system/user'
import { reactive, ref } from 'vue'
let form = reactive<UserSearchForm>(new UserSearchForm())
const dataList = ref<Array<UserSearchListItem>>([])
const total = ref(0)
const initData = async (data: UserSearchForm) => {
  Object.assign(form, data)
  const { code, value, message } = await getList(form)
  dataList.value = value.result
  total.value = value.totalCount
  form.pageNum = value.pageNum
  form.pageSize = value.pageSize
}
</script>