<template>
  <a-form layout="inline" :model="form" ref="formRef">
    <a-form-item field="roleName" label="角色名称：">
      <a-input v-limit-input @keyup.enter="onSearch" v-model.trim="form.roleName" allow-clear placeholder="请输入" />
    </a-form-item>
    <a-form-item field="status" label="状态：">
      <a-select placeholder="请选择" v-model="(form.status as string)" allow-clear style="width:208px;" >
        <a-option value="all">全部</a-option>
        <a-option value="true">已启用</a-option>
        <a-option value="false">已禁用</a-option>
      </a-select>
    </a-form-item>
    <a-form-item hide-label>
      <a-space :size="20">
        <a-button type="primary" @click="onSearch" :loading="loading">{{$t('infoConfig.searchText')}}</a-button>
        <a-button @click="onReset" >{{$t('infoConfig.resetText')}}</a-button>
      </a-space>
    </a-form-item>
  </a-form>
</template>
<script lang="ts" setup>
import { reactive, ref,onMounted } from 'vue'
import { RoleSearchForm } from '@/types/system/role'
const emits = defineEmits<{ (event: 'on-search', data: RoleSearchForm): void }>()
const props= defineProps({
  loading:{
    type:Boolean,
    default:false
  }
})
const form = reactive<RoleSearchForm>(new RoleSearchForm())
const formRef = ref()
const onSearch = () => {
  let newForm = JSON.parse(JSON.stringify(form))
  if (newForm.status == 'all') {
    newForm.status = ''
  }
  emits('on-search', newForm)
}
const onReset = () => {
  formRef.value.resetFields()
  onSearch()
}
onMounted(()=>{
  onSearch()
})
</script>
<style lang="scss" scoped></style>