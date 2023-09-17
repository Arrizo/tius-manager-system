<!--
 * @Author: chenzechao
 * @Date: 2023-05-31 23:45:57
 * @LastEditTime: 2023-09-17 16:48:13
 * @LastEditors: chenzechao
 * @Description: 
 * @FilePath: /tius-manager-system/src/views/oms/system/role/index.vue
-->
<template>
  <panel>
    <template #search>
      <search @on-search="initData" :loading="loading"></search>
    </template>
    <template #table>
      <list :data-list="dataList" :total="total" @on-search="initData" :page-number="form.pageNum"
        :page-size="form.pageSize"></list>
    </template>
  </panel>
</template>
<script lang="ts" setup name="system-role">
import Search from './components/search.vue'
import List from './components/list.vue'
import Panel from '@/components/panel/index.vue'
import { RoleSearchForm,RoleSearchResResultItem } from '@/types/system/role'
import { getList } from '@/api/system/role'
import { reactive, ref,onMounted } from 'vue'
import { Message } from '@arco-design/web-vue'
let form = reactive<RoleSearchForm>(new RoleSearchForm())
const dataList = ref<Array<RoleSearchResResultItem>>([])
const total = ref(0)
const loading = ref(false)
const initData = async (data: RoleSearchForm) => {
  try {
    loading.value = true
    Object.assign(form, data)
    const {code,message,value} = await getList(form)
    if (code != 0) {
      throw new Error(message)
    }
    dataList.value = value.result
    total.value = value.totalCount
    form.pageNum = value.pageNum
    form.pageSize = value.pageSize
  } catch (error) {
    Message.error((error as Error).message)
  } finally {
    loading.value = false
  }
}
</script>