<template>
  <a-form layout="inline" :model="form" ref="formRef">
    <a-form-item field="username" label="用户账号：">
      <a-input v-model="form.username" placeholder="请输入" allow-clear style="width: 208px;"></a-input>
    </a-form-item>
    <a-form-item field="nickname" label="用户姓名：">
      <a-input v-model="form.nickname" placeholder="请输入" allow-clear style="width: 208px;"></a-input>
    </a-form-item>
    <a-form-item field="status" label="状态：">
      <a-select placeholder="请选择" v-model="form.status" allow-clear style="width: 208px;">
        <a-option value="all">全部</a-option>
        <a-option value="true">已启用</a-option>
        <a-option value="false">已禁用</a-option>
      </a-select>
    </a-form-item>
    <a-form-item hide-label>
      <a-space :size="20">
        <a-button type="primary" @click="onSearch" :loading="loading" >查询</a-button>
        <a-button @click="onReset">重置</a-button>
      </a-space>
    </a-form-item>
  </a-form>
</template>
<script lang="ts" setup>
import { reactive, ref,onMounted } from 'vue'
import { UserSearchForm } from '@/types/system/user'
const emits = defineEmits<{ (event: 'on-search', data: UserSearchForm): void }>()
const props= defineProps({
  loading:{
    type:Boolean,
    default:false
  }
})
const form = reactive<UserSearchForm>(new UserSearchForm())
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