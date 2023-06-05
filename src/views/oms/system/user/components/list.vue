<template>
  <a-table :data="dataList" :pagination="paginationOption" @page-change="changePage" @page-size-change="changeSize">
    <template #columns>
      <a-table-column title="用户账号">
        <template #cell="{ record }">
          {{ record.username || '--' }}
        </template>
      </a-table-column>
      <a-table-column title="用户姓名" data-index="nickname"></a-table-column>
      <a-table-column title="用户类型" data-index="typeName">
        <template #cell="{ record }">
          {{ record.typeName || '--' }}
        </template>
      </a-table-column>
      <a-table-column title="所属组织" data-index="orgName">
        <template #cell="{ record }">
          {{ record.orgName || '--' }}
        </template>
      </a-table-column>
      <a-table-column title="岗位名称" data-index="jobName">
        <template #cell="{ record }">
          {{ record.jobName || '--' }}
        </template>
      </a-table-column>
      <a-table-column title="手机号码">
        <template #cell="{ record }">
          <span>***********</span>
        </template>
      </a-table-column>
      <a-table-column title="状态" :width="120">
        <template #cell="{ record, rowIndex }">
          <!-- <div v-permission="['oms:system:user:enable', 'oms:system:user:disable']">
              <a-switch v-model="(list as any)[rowIndex].status" @focus="onSwitchForce(record, rowIndex)">
                <template #checked>
                  启用
                </template>
                <template #unchecked>
                  禁用
                </template>
              </a-switch>
            </div>
            <div v-permission-else="['oms:system:user:enable', 'oms:system:user:disable']">{{ (list as
              any)[rowIndex].status ? '启用' : '禁用' }}</div> -->
        </template>
      </a-table-column>
      <a-table-column title="创建时间" :width="180" data-index="createTime"></a-table-column>
      <a-table-column title="修改时间" :width="180" data-index="updateTime"></a-table-column>
      <a-table-column title="操作" :width="100" align="left" fixed="right">
        <!-- <template #cell="{ record }">
            <a-space :size="14">
              <a-link @click="handleActoin('edit', record)" v-permission="['oms:system:user:edit']">编辑</a-link>
              <a-dropdown @select="(command: CommandType) => handleCommand(command, record)">
                <a-link @click="handleActoin('auth', record)">更多</a-link>
                <template #content>
                  <a-doption value="grant-role-single" v-permission="['oms:system:user:grant:role']">角色授权</a-doption>
                  <a-doption value="grant-shop-single" v-permission="['oms:system:user:grant:shop']">店铺授权</a-doption>
                  <a-doption value="grant-store-single" v-permission="['oms:system:user:grant:store']">仓库授权</a-doption>
                  <a-doption value="reset-password" v-permission="['oms:system:user:resetpassword']">重置密码</a-doption>
                  <a-doption value="delete-single" style="color:red"
                    v-permission="['oms:system:user:delete']">删除</a-doption>
                </template>
              </a-dropdown>
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