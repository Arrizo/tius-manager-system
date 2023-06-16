<!--
 * @Author: chenzechao
 * @Date: 2023-05-25 00:01:52
 * @LastEditTime: 2023-06-06 09:20:40
 * @LastEditors: chenzechao chenzc@jw99.net
 * @Description:
 * @FilePath: /tius-manager-system/src/view/login/index.vue
-->
<template>
  <div class="login-container">
    <div class="center">
      <section class="login-title">欢迎登录 Tius System</section>
      <div class="login-sub-title">欢迎登录 Tius System</div>
      <a-form
        ref="loginRef"
        :model="userInfo"
        :rules="rulesForm"
        layout="vertical"
      >
        <a-form-item field="account" hide-label>
          <a-input v-model="userInfo.account" placeholder="账号">
            <template #prefix> <icon-user /> </template
          ></a-input>
        </a-form-item>
        <a-form-item field="password" hide-label>
          <a-input-password
            v-model="userInfo.password"
            placeholder="密码"
            allow-clear
          >
            <template #prefix>
              <icon-lock />
            </template>
          </a-input-password>
        </a-form-item>
        <a-space :size="16">
          <a-checkbox v-model="remenberPassword">记住密码</a-checkbox>
        </a-space>
        <a-button
          type="primary"
          long
          style="margin-top: 10px"
          @click="handlerLogin"
          :loading="loading"
          >登陆</a-button
        >
      </a-form>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { LoginForm } from "@/types/user";
import { ref, reactive, onMounted } from "vue";
import { useUserStore } from "@/store";
import { Message } from "@arco-design/web-vue";
import { useRoute, useRouter } from "vue-router";
const loginRef = ref();
const userInfo = reactive<LoginForm>(new LoginForm());
const remenberPassword = ref<boolean>(false);
const loading = ref(false);
const userStore = useUserStore();
const router = useRouter();
const route = useRoute();
const rulesForm = reactive({
  account: [{ required: true, message: "请输入账号" }],
  password: [{ required: true, message: "请输入密码" }],
});

onMounted(() => {
  let account = userStore.loginConfig.account;
  if (account) {
    userInfo.account = account;
    userInfo.password = userStore.loginConfig.password;
    remenberPassword.value = true;
  }
});
const handlerLogin = async () => {
  const valid = await loginRef.value.validate();
  if (valid) {
    return false;
  }
  try {
    loading.value = true;
    await userStore.userLogin(userInfo);
    await userStore.userInfo();
    await userStore.asyncSetRouter();
    router.push({
      path: "/home",
      query: {},
    });
  } catch (error) {
    Message.error(error as string);
  } finally {
    loading.value = false;
  }
  if (remenberPassword.value) {
    userStore.updateConfigLogin({
      loginConfig: { account: userInfo.account, password: userInfo.password },
    } as any);
  } else {
    userStore.clearConfigLogin();
  }
};
</script>
<style lang="scss" scoped>
.login-container {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  .center {
    width: 300px;
    .login-title {
      color: #1d2129;
      font-weight: 500;
      font-size: 24px;
      line-height: 32px;
    }
    .login-sub-title {
      font-size: 16px;
      line-height: 37px;
      color: #86909c;
    }
  }
}
</style>