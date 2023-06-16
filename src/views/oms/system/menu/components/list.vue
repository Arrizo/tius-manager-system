<!--
 * @ Author: chenzechao
 * @ Create Time: 2023-06-16 16:26:54
 * @ Modified by: chenzechao
 * @ Modified time: 2023-06-16 18:29:52
 * @ Description:
 -->

<template>
  <a-space class="mb10">
    <a-button v-permission="['oms:orderManagement:recordOrder:add']" type="primary" @click="handleActoin('add')">新增菜单</a-button>
  </a-space>
  <a-table :data="dataList" :scroll="{ x: 1000, y: '100%' }" :pagination="false" :loading="loading" row-key="id">
    <template #expand-icon="{ expanded, record }">
      <template v-if="record.type != 'BUTTON'">
        <icon-caret-down v-if="expanded" style="font-size: 32;" />
        <icon-caret-right v-else style="font-size: 32;" />
      </template>
    </template>
    <template #columns>
      <a-table-column title="菜单名称" ellipsis tooltip data-index="menuName">
        <template #cell="{ record }">
          {{ record.menuName || '--' }}
        </template>
      </a-table-column>
      <a-table-column title="菜单类型" ellipsis tooltip :width="100">
        <template #cell="{ record }">
          {{ record.type }}
        </template>
      </a-table-column>
      <a-table-column title="排序" :width="80" ellipsis tooltip data-index="sort">
        <template #cell="{ record }">
          {{ record.sort || '--' }}
        </template>
      </a-table-column>
      <a-table-column title="权限标识" ellipsis tooltip data-index="perms">
        <template #cell="{ record }">
          {{ record.perms || '--' }}
        </template>
      </a-table-column>
      <a-table-column title="URL" data-index="url" ellipsis tooltip>
        <template #cell="{ record }">
          {{ record.url || '--' }}
        </template>
      </a-table-column>
      <a-table-column title="图标" :width="80">
        <template #cell="{ record }">
          <i :class="['iconfont', `icon-${record.icon}`]"></i>
        </template>
      </a-table-column>
      <a-table-column title="操作" :width="120" fixed="right">
        <template #cell="{ record }">
          <a-space :size="14">
            <a-link v-permission="['system:menu:edit']" @click="handleActoin('edit', record)" type="text">编辑</a-link>
            <a-link v-permission="['system:menu:del']" @click="handleActoin('del', record)" type="text"
              status="danger">删除</a-link>
          </a-space>
        </template>
      </a-table-column>
    </template>
  </a-table>
  <menu-modal ref="menuModalRef" />
</template>
<script lang="ts" setup>
import { ref, reactive } from 'vue'
import menuModal from './menu-modal.vue';
const emits = defineEmits<{ (event: 'reload'): void }>()
const props = defineProps({
  dataList: {
    type: Array,
    default: () => []
  },
  loading: {
    type: Boolean,
    default: false
  }
})
const menuModalRef=ref()
const handleActoin = (type: string, record?: any) => {
  menuModalRef.value.visible=true
}
</script>