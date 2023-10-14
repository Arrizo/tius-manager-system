<!--
 * @Author: chenzechao
 * @Date: 2023-06-02 02:02:48
 * @LastEditTime: 2023-10-14 21:52:09
 * @LastEditors: chenzechao
 * @Description: 
 * @FilePath: /tius-manager-system/src/views/home/index.vue
-->
<template>
  <div>
    <div id="cesiumContainer"></div>
  </div>
</template>
<script lang="ts" setup name>
import { reactive, ref, onMounted } from "vue";
import * as Cesium from "cesium";
// import { ipcRenderer } from 'electron'
const send = async () => {
  console.log(window);
};
onMounted(() => {
  let viewer = new Cesium.Viewer("cesiumContainer", {
    infoBox: false,
    geocoder: false,
    animation: false,
    timeline: false,
    fullscreenButton: false,
    terrainProvider: Cesium.createWorldTerrain(),
  });
});
</script>
<style lang="scss" scoped>
#cesiumContainer {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
</style>
