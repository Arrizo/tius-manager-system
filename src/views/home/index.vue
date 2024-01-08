<!--
 * @Author: chenzechao
 * @Date: 2023-10-22 20:17:58
 * @LastEditTime: 2023-12-12 22:18:24
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
  <!-- <render></render> -->
  <!-- </footer> -->
  <!-- </section> -->
  <!-- <img :src="previewImag" alt="" /> -->
  <!-- <video
    id="video"
    width="320"
    height="240"
    preload
    autoplay
    loop
    muted
  ></video>
  <canvas id="canvas" width="320" height="240"></canvas> -->

  <!-- <section class="ssssd">
    <img :src="imageSrc" alt="" />
    <div>112123</div>
    <div>
      <div v-html="preview"></div>

      <div class="ddd">
        <vue-cropper
          :img="imageUrl"
          autoCrop
          infoTrue
          full
          :outputSize="0.9"
          centerBox
          ref="cropper"
          @realTime="realTime"
        />
      </div>
    </div>
  </section> -->
  <!-- <input type="file" @change="handleFileChange" />
  <button @click="cropImage">Crop Image</button> -->
  <div class=""></div>
  <img
    src="./3e711e60cffb1033cb02933fe218593d.jp2"
    alt=""
    height="300"
    width="300"
    data-display-polyfill-info="true"
  />
</template>

<script setup lang="ts">
import { reactive, h, ref } from "vue";
import loadOpenJPEG from "./jp2-polyfill.js";
import { onMounted } from "vue";
import { nextTick } from "vue";
const imageUrl = ref();
onMounted(() => {
  nextTick(() => {
    loadOpenJPEG();
  });
});
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
.ddd {
  height: 400px;
  width: 400px;
}
</style>
