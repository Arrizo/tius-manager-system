<!--
 * @ Author: chenzechao
 * @ Create Time: 2023-06-16 16:26:59
 * @ Modified by: chenzechao
 * @ Modified time: 2023-06-16 18:20:49
 * @ Description:
 -->

<template>
  <a-form layout="inline" :model="form" ref="formRef">
    <a-form-item field="menuName" label="菜单名称">
      <a-input v-limit-input v-model.trim="form.menuName" @keyup.enter="onSearch" allow-clear placeholder="请输入" />
    </a-form-item>
    <a-form-item field="type" label="菜单类型：">
      <a-select placeholder="请选择" v-model="form.type" allow-clear>
        <a-option value="all">全部</a-option>
        <a-option value="MENU">目录</a-option>
        <a-option value="PAGE">页面</a-option>
        <a-option value="BUTTON">按钮</a-option>
      </a-select>
    </a-form-item>
    <a-form-item hide-label>
      <a-space :size="20">
        <a-button type="primary" @click="onSearch" :loading="loading">{{ $t('infoConfig.searchText') }}</a-button>
        <a-button @click="onReset">{{ $t('infoConfig.resetText') }}</a-button>
      </a-space>
    </a-form-item>
  </a-form>
</template>
<script lang="ts" setup>
import { ref, reactive, onMounted } from 'vue'
import { MenuSearchForm } from '@/types/system/menu'
const emits = defineEmits<{ (event: 'on-search', data: MenuSearchForm): void }>()
const props = defineProps({
  loading: {
    type: Boolean,
    default: false
  }
})
let form = reactive<MenuSearchForm>(new MenuSearchForm())
const formRef = ref()

const onSearch = () => {
  let newForm = JSON.parse(JSON.stringify(form))
  if (form.type == 'all') { newForm.type = '' }
  emits('on-search', newForm)
}
const onReset = () => {
  formRef.value.resetFields()
  onSearch()
}
onMounted(() => {
  onSearch()
})
</script>