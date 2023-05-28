<!--
 * @Author: chenzechao
 * @Date: 2023-05-25 00:01:52
 * @LastEditTime: 2023-05-28 23:22:53
 * @LastEditors: chenzechao
 * @Description: 
 * @FilePath: /tius-manager-system/src/view/login/index.vue
-->
<template>
  <div class="login-container">
    <div class="center">
      <a-form ref="loginRef" :model="userInfo" :rules="rulesForm" layout="vertical">
        <a-form-item field="username" hide-label>
          <a-input v-model="userInfo.username" placeholder="账号">
            <template #prefix>
              <icon-user />
            </template></a-input>
        </a-form-item>
        <a-form-item field="password" hide-label>
          <a-input-password v-model="userInfo.password" placeholder="密码" allow-clear>
            <template #prefix>
              <icon-lock />
            </template>
          </a-input-password>
        </a-form-item>
        <a-space :size="16">
          <a-checkbox v-model="remenberPassword">记住密码</a-checkbox>
        </a-space>
               <a-button type="primary" long style="margin-top: 10px;" @click="handlerLogin">登陆</a-button>
      </a-form>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { LoginData } from '@/types/user/userInfo'
import { ref, reactive, onMounted } from 'vue'
import { encode, decode } from 'js-base64'
const loginRef = ref()
const userInfo = reactive<LoginData>(new LoginData())
const remenberPassword = ref<boolean>(false)
const rulesForm = reactive({
  username: [{ required: true, message: '请输入账号' }],
  password: [{ required: true, message: '请输入密码' }]
})

onMounted(() => {
  let username = localStorage.getItem('username')
  if (username) {
    userInfo.username = username
    userInfo.password = decode(localStorage.getItem('password') ?? '')
    remenberPassword.value = true
  }
})
const handlerLogin=()=>{
  if(remenberPassword.value){
    localStorage.setItem('username',userInfo.username)
    localStorage.setItem('password',encode(userInfo.password))
  }else{
    localStorage.removeItem('username')
    localStorage.removeItem('password')
  }
}
</script>
<style lang="scss" scoped>
.login-container {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  .center {
    width: 300px;
  }
}
</style>