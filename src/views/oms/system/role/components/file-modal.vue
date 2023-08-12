<!--
 * @Author: chenzechao
 * @Date: 2023-07-26 14:18:06
 * @LastEditTime: 2023-07-27 16:55:35
 * @LastEditors: chenzechao
 * @Description: 
 * @FilePath: /tius-manager-system/src/views/oms/system/role/components/file-modal.vue
-->
<template>
  <a-modal v-model:visible="visible" :width="900" title-align="start" title="上传文件" :mask-closable="false"
    :on-before-ok="onBeforeOk">
  <div class="draver" id="draver"></div>
    <input type="file" @change="handleChange">
    <div class="percent">{{ percent }}%</div>
    <a-button @click="handlePause">{{ pause ? '暂停' : '继续' }}</a-button>
  </a-modal>
</template>
<script setup lang="ts">
import { Message } from '@arco-design/web-vue';
import { uploadFile, getFileHash } from '@/api/system/user'
import SparkMd5 from 'spark-md5'
import { ref } from 'vue'
import { onMounted, onBeforeUnmount } from 'vue';
const visible = ref(false)
const pause = ref(true)
const percent=ref(0)
const hash=ref()
const requestList: Array<any> = []
let requestIndex = 0
const handleChange = async (file: any) => {
  // 获取文件
  const files = file.target.files[0]
  try {
    const buffer = await fileToBuffer(files)
    // 将文件按固定大小2m进行切片
    let chunkSize = 2 * 1024 * 1024,
      chunkLength = Math.ceil(files.size / chunkSize),//切片的总数
      chunkList = [], //保存所有切片
      suffix = /\.([0-9A-z]+)$/.exec(files.name)?.[1] //文件的后缀
    const spark = new SparkMd5.ArrayBuffer()
    spark.append(buffer)
    hash.value = spark.end()
    let storageChunk = JSON.parse(localStorage.getItem(hash.value))
    if(storageChunk){
      chunkList=storageChunk.chunkList
      requestIndex=storageChunk.requestIndex
    }else{
      let curChunk = 0
      for (let i = 0; i < chunkLength; i++) {
        chunkList.push({
          chunk: files.slice(curChunk, curChunk + chunkSize),
          fileName: `${hash.value}_${i}.${suffix}`
        })
        curChunk += chunkSize
      }
    localStorage.setItem(hash.value, JSON.stringify({ requestIndex, chunkList }))
    }
    sendRequest(chunkList)
    send()
  } catch (error) {
    Message.error((error as Error).message)
  }
}
const sendRequest = (chunkList: Array<any>) => {
  for (let i = 0; i < chunkList.length; i++) {
    const fn = async () => {
      const formData = new FormData()
      formData.append('chunk', chunkList[i].chunk)
      formData.append('fileName', chunkList[i].fileName)
      const res = await uploadFile(formData)
      console.log(res,11)
      if(res.code==0){
        percent.value=Math.ceil(((requestIndex+1)/chunkList.length)*100)
      }else{
      throw new Error(res.message)
      }
    }
    requestList.push(fn)
  }
}
const handlePause = () => {
  pause.value = !pause.value
  if(pause.value){
    let chunkList = JSON.parse(localStorage.getItem(hash.value))?.chunkList
    localStorage.setItem(hash.value, JSON.stringify({ requestIndex, chunkList }))
  }else{
    send()
  }
}
const fileToBuffer = async (file: any) => {
  return new Promise((resolve, reject) => {
    const fr = new FileReader()
    fr.onload = (e) => {
      resolve(e.target?.result)
    }
    fr.readAsArrayBuffer(file)
    fr.onerror = () => {
      reject(new Error('文件转化失败'))
    }
  })
}
const send = async () => {
  if (pause.value) return
  if (requestIndex >= requestList.length) {
    localStorage.removeItem(hash.value)
    return
  }
  await requestList[requestIndex]()
  requestIndex++
  send()
}
const onBeforeOk = async () => {
  visible.value = false
}
onMounted( async()=>{
  const res = await getFileHash()
  let storageChunk=JSON.parse(localStorage.getItem(res.data))
  if(storageChunk){
    hash.value=res.data
    requestIndex=storageChunk.requestIndex
    percent.value= Math.ceil(((requestIndex + 1 )/ storageChunk.chunkList.length)*100)
    sendRequest(storageChunk.chunkList)
  }
})


defineExpose({
  visible
})
</script>
<style lang="scss" scoped>
.draver{
  width: 200px;
  height: 200px;
  background: red;
}
</style>