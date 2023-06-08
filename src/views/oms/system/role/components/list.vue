<!--
 * @Author: chenzechao chenzc@jw99.net
 * @Date: 2023-06-05 20:27:46
 * @LastEditors: chenzechao chenzc@jw99.net
 * @LastEditTime: 2023-06-08 13:39:32
 * @FilePath: \tius-manager-system\src\views\oms\system\role\components\list.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <a-table :data="dataList" :pagination="paginationOption" @page-change="changePage" @page-size-change="changeSize" :scroll="{x:1000,y:'550px'}">
    <template #columns>
        <a-table-column title="角色名称" ellipsis tooltip :width="120">
          <template #cell="{ record }">
            {{ record.roleName || '--' }}
          </template>
        </a-table-column>
        <a-table-column title="授权用户" :width="120">
          <template #cell="{ record }">
          </template>
        </a-table-column>
        <a-table-column title="备注" ellipsis tooltip :width="180">
          <template #cell="{ record }">
            {{ record.remark || '--' }}
          </template>
        </a-table-column>
        <a-table-column title="状态" :width="100">
          <template #cell="{ record, rowIndex }">
            <div v-permission-else="['system:role:status']">{{ record.status ? '启用' : '禁用' }}</div>
          </template>
        </a-table-column>
        <a-table-column title="创建时间">
          <template #cell="{ record }"> {{ record.createTime || '--' }}</template>
        </a-table-column>
        <a-table-column title="修改时间">
          <template #cell="{ record }"> {{ record.updateTime || '--' }}</template>
        </a-table-column>
        <a-table-column title="操作" :width="180" fixed="right">
          <!-- <template #cell="{ record }">
            <a-space :size="14">
              <a-link v-permission="['system:role:edit']" @click="handleActoin('edit', record)" type="text">编辑</a-link>
              <a-link v-permission="['system:role:params']" @click="handleActoin('auth', record)"
                type="text">字段授权</a-link>
              <a-link v-permission="['system:role:del']" @click="handleActoin('del', record)" type="text"
                status="danger">删除</a-link>
            </a-space>
          </template> -->
        </a-table-column>
      </template>
  </a-table>
</template>
<script lang="ts" setup>
import { reactive, ref, computed } from 'vue';
const emits = defineEmits<{ (event: 'on-search', data: any): void }>()
const props = defineProps({
  dataList: {
    type: Array,
    default: () => []
  },
  total: {
    type: Number,
    default: 0
  },
  pageSize: {
    type: Number,
    default: 10
  },
  pageNumber: {
    type: Number,
    default: 1
  }
})
const paginationOption = computed(() => {
  return {
    total: props.total,
    showJumper: true,
    showTotal: true,
    showPageSize: true,
    pageSizeOptions: [10, 50, 100],
    baseSize: 3,
    pageSize: props.pageSize,
    current: props.pageNumber
  }
})
const changePage = (page: number) => {
  emits('on-search',{pageNum:page})
}
const changeSize = (size: number) => {
  emits('on-search',{pageSize:size})
}
</script>