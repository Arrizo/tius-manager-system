<!--
 * @Author: chenzechao chenzc@jw99.net
 * @Date: 2023-06-16 18:23:44
 * @LastEditors: chenzechao chenzc@jw99.net
 * @LastEditTime: 2023-06-19 13:53:26
 * @FilePath: \tius-manager-system\src\views\oms\system\menu\components\menu-modal.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <a-modal v-model:visible="visible" :width="900" title-align="start" :on-before-ok="onBeforeOk" :mask-closable="false"
    :title="title">
    <a-form :model="form" ref="formRef" auto-label-width>
      <a-row :gutter="30">
        <a-col :span="12">
          <a-form-item field="pid" label="上级菜单：">
            <a-cascader check-strictly :field-names="{ value: 'id', label: 'menuName'}" :options="last_list"
              v-model="form.pid" placeholder="请选择" allow-clear allow-search/>
          </a-form-item>
        </a-col>
        <a-col :span="12">
          <a-form-item field="type" label="菜单类型：">
            <a-select placeholder="请选择" v-model="form.type">
              <a-option value="MENU">目录</a-option>
              <a-option value="PAGE">页面</a-option>
              <a-option value="BUTTON">按钮</a-option>
            </a-select>
          </a-form-item>
        </a-col>
      </a-row>
      <a-row :gutter="30">
        <a-col :span="12">
          <a-form-item field="menuName" label="菜单名称：">
            <a-input v-limit-input v-model="form.menuName" placeholder="请输入" :max-length="20" allow-clear
              show-word-limit />
          </a-form-item>
        </a-col>
        <a-col :span="12">
          <a-form-item field="sort" label="排序：" v-if="form.type !== 'BUTTON'">
            <a-input-number v-model="form.sort" placeholder="请输入" />
          </a-form-item>
        </a-col>
      </a-row>
      <a-row :gutter="30">
        <a-col :span="12">
          <a-form-item field="icon" label="图标样式：" v-if="form.type !== 'BUTTON'">
            <!-- <icon-select v-model="form.icon"></icon-select>
            <a-link style="margin-top:32px;color:#3E6CFE;margin-left:4px;font-weight: 500;" v-if="form.icon"
              @click="form.icon = ''">清空</a-link> -->
          </a-form-item>
        </a-col>
        <a-col :span="12">
          <a-form-item field="url" label="URL：" v-if="form.type !== 'BUTTON'">
            <a-input v-limit-input v-model="form.url" placeholder="请输入" />
          </a-form-item>
        </a-col>
      </a-row>
      <a-row :gutter="30">
        <a-col :span="12">
          <a-form-item field="perms" label="权限标识：">
            <a-input v-limit-input v-model="form.perms" placeholder="请输入" />
          </a-form-item>
        </a-col>
      </a-row>
    </a-form>
    <template #footer>
      <a-button>取消</a-button>
      <a-button type="primary">确定</a-button>
      <a-button type="primary">确定并添加下一个</a-button>
    </template>
  </a-modal>
</template>
<script lang="ts" setup>
import { ref, computed, reactive,onMounted } from 'vue'
import { MenuForm, MenuListItem } from '@/types/system/menu'
import { getMenuList } from '@/api/system/menu'
import { Message } from '@arco-design/web-vue';
const visible = ref(false)
const formRef = ref()
const form = reactive<MenuForm>(new MenuForm())
const last_list = ref<MenuListItem[]>([]);
const title = computed(() => form.id ? '编辑' : '新增')
const onBeforeOk = async () => {
  const valide = await formRef.value.validate()
}
const getInitMenu = async () => {
  try {
    const { code, value, message } = await getMenuList({
      menuName: "",
      type: ""
    })
    if (code != 0) {
      throw new Error(message)
    }
    last_list.value = value
  } catch (error) {
    Message.error((error as Error).message)
  }
}
onMounted(()=>{
  getInitMenu()
})
defineExpose({
  visible
})
</script>