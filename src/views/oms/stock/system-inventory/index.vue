<template>
  <a-button @click="getPdf">下载pdf</a-button>
</template>
<script lang="ts" setup>
import puppeteer from 'puppeteer'
const getPdf = async ()=>{
  const browser= await puppeteer.launch({headless:false})
  const page=await browser.newPage();
  await page.goto('https://www.baidu.com',{waitUntil: 'networkidle2'})
  await page.pdf({path: 'hn.pdf', format: 'A4'})
  await browser.close();
}
</script>
<style lang="scss" scoped>
</style>