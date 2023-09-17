<!--
 * @Author: chenzechao
 * @Date: 2023-06-02 02:02:48
 * @LastEditTime: 2023-09-17 18:31:32
 * @LastEditors: chenzechao
 * @Description: 
 * @FilePath: /tius-manager-system/src/views/home/index.vue
-->
<template>
  <div>
home
<a-button @click="send">按钮</a-button>
  </div>
</template>
<script lang="ts" setup name>
import{ reactive,ref, onMounted } from 'vue'
import { ipcRenderer } from 'electron'
const send =async ()=>{
console.log(window)
    ipcRenderer.invoke('keyName')
}
ipcRenderer.on('like',(event,data)=>{
debugger
})
</script>
<style lang="less" scoped>

</style>