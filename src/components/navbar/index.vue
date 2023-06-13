<!--
 * @Author: chenzechao
 * @Date: 2023-05-28 21:20:36
 * @LastEditTime: 2023-06-08 13:50:49
 * @LastEditors: chenzechao chenzc@jw99.net
 * @Description: 
 * @FilePath: /tius-manager-system/src/components/navbar/index.vue
-->
<template>
  <div class="navbar">
    <div class="left-side">
      <a-space>
        <svg-icon iconName="icon-083yier" className="logo"></svg-icon>
        Tius
      </a-space>
    </div>
    <!-- <div class="center">用户中心</div> -->
    <ul class="right-side">
      <li>
        <a-tooltip content="语言">
          <a-dropdown trigger="click" @select="actionSelect">
            <a-button shape="circle">
              <template #icon>
                <i class="iconfont icon-zhongyingwen"></i>
              </template>
            </a-button>
            <template #content>
              <a-doption value="zh">中文</a-doption>
              <a-doption value="en">English</a-doption>
            </template>
          </a-dropdown>
        </a-tooltip>
      </li>
      <li>
        <a-tooltip content="语言">
          <a-button shape="circle">
            <template #icon>
              <i class="iconfont icon-baitianmoshimingliangmoshi"></i>
            </template>
          </a-button>
        </a-tooltip>
      </li>
      <li>
        <a-tooltip content="语言">
          <a-button shape="circle">
            <template #icon>
              <i class="iconfont icon-baitianmoshimingliangmoshi"></i>
            </template>
          </a-button>
        </a-tooltip>
      </li>

      <li>
        <a-dropdown trigger="click" @select="actionSelect">
          <a-button class="nav-btn" shape="circle">
            <i class="iconfont icon-gerenzhongxin"></i>
          </a-button>
          <template #content>
            <a-doption value="logout">个人中心</a-doption>
            <a-doption value="logout">退出登录</a-doption>
            <!-- <a-doption value="theme">切换主题</a-doption>
            <a-doption value="auto">切换自定义</a-doption> -->
          </template>
        </a-dropdown>
      </li>
    </ul>
  </div>
</template>
<script lang="ts" setup>
import userUseStore from "@/store/modules/user";
import { Message } from "@arco-design/web-vue";
import { useRouter } from "vue-router";
import { setStorage, getStorage } from "@/utils/auth";
import { useI18n } from "vue-i18n";
const { locale, t } = useI18n();
import { ref } from "vue";
const router = useRouter();
const useStore = userUseStore();
const flag = ref(true);
const actionSelect = (val: any) => {
  switch (val) {
    case 'zh':
      
    case 'en':


    case "theme":
      if (flag.value) {
        document.body.setAttribute("theme-mode", "dark");
        flag.value = false;
      } else {
        flag.value = true;
        document.body.removeAttribute("theme-mode");
      }
      return;
    case "logout":
      useStore.logout();
      useStore.resetInfo();
      Message.success("退出成功！");
      router.push({
        path: "/login",
        query: {
          ...router.currentRoute.value.query,
        },
      });
      return;
    case "auto":
      document.body.style.setProperty("--g-background-cord", "blue");
    default:
      break;
  }
};
const changeLanguage = () => {
  let lang = getStorage("language");
  locale.value = lang == "en" ? "zh" : "en";
  setStorage("language", locale.value);
  // Message.success(t('login.username'))
};
</script>
<style lang="scss" scoped>
.navbar {
  height: 100%;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #e3e3e3;
  background-color: #fff;

  .left-side {
    display: flex;
    padding-left: 30px;
    color: #6b6b6b;
    font-size: 20px;
    .logo {
      width: 50px;
      height: 50px;
    }
  }

  .center {
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    color: var(--g-text-color);
  }

  .right-side {
    display: flex;
    padding-right: 20px;
    list-style: none;

    li {
      display: flex;
      padding: 0px 10px;
    }
  }
}
</style>