<!--
 * @Author: chenzechao
 * @Date: 2023-10-22 20:17:58
 * @LastEditTime: 2023-11-05 21:01:27
 * @LastEditors: chenzechao
 * @Description: 
 * @FilePath: /tius-manager-system/src/views/home/index.vue
-->
<template>
  <!-- <section class="design">
    <header>
      <a-button>返回</a-button>
      <a-button type="primary" @click="submit">提交</a-button>
    </header>
    <main>
      <section class="left">
        <left :value="state.pageConfig.left" />
      </section>
      <section class="content">
        <content :value="state.pageConfig.right" />
      </section>
      <section class="right">
        <right :value="state.pageConfig.right" />
      </section>
    </main>
    <footer> -->
  <render></render>
  <!-- </footer> -->
  <!-- </section> -->
</template>

<script setup lang="ts">
import { reactive, h, ref } from "vue";
import left from "./components/left/index.vue";
import content from "./components/main/index.vue";
import right from "./components/right/index.vue";
import configComs from "./componentData";
import { Button } from "@arco-design/web-vue";
const state = reactive({
  pageConfig: {
    left: configComs,
    right: [],
  },
  text: "",
  text2: "",
});
const flag = ref(true);
const submit = () => {
  console.log(state, 11);
};
const back = () => {
  console.log("返回");
};
const render = (cxt) => {
  return h(
    "section",
    {
      class: ["design", flag.value ? "name" : ""],
      style: { color: "red", fontSize: "20px" },
    },
    [
      h("header", [
        h(Button, { onclick: back }, "返回"),
        h(
          Button,
          {
            type: "primary",
            onclick: submit,
          },
          "提交"
        ),
      ]),
      h("main", [
        h(
          "section",
          { class: "left" },
          h(left, {
            modelValue: state.text,
            ["onUpdate:modelValue"]: (text) => {
              state.text = text;
            },
            text2: state.text2,
            ["onUpdate:text2"]: (text) => {
              state.text2 = text;
            },
            value: state.pageConfig.left,
          })
        ),
        h(
          "section",
          { class: "content" },
          h(content, { value: state.pageConfig.right })
        ),
        h(
          "section",
          { class: "right" },
          h(right, { value: state.pageConfig.right })
        ),
      ]),
      h("footer", "底部"),
    ]
  );
};
</script>
<style lang="scss">
.design {
  header {
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #e3e3e3;
  }
  main {
    display: flex;
    .content {
      flex: 1;
    }
    .left,
    .right {
      width: 200px;
    }
  }
}
</style>
