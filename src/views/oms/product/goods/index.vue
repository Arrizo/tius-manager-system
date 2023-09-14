<!--
 * @Author: chenzechao
 * @Date: 2023-08-12 22:51:30
 * @LastEditTime: 2023-08-24 13:43:15
 * @LastEditors: chenzechao
 * @Description: 
 * @FilePath: /tius-manager-system/src/views/oms/product/goods/index.vue
-->
<template>
  asdfad
</template>
<script setup lang="ts">
import { Scene, PerspectiveCamera } from 'three'

const scene = new Scene()
const camera = new PerspectiveCamera(75, window.innerWidth / innerHeight, 0.1, 1000)

/**
 * @description: 冒泡排序，比较相邻的两个元素的大小，在进行替换位置
 * @param {*} arr
 * @return {*}
 */
const bubbleSort = (arr: Array<number>) => {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
      }
    }
  }
}
/**
 * @description: 选择排序，比较相邻的两个元素的大小，最后放左边
 * @param {*} arr
 * @return {*}
 */
const selectSort = (arr) => {
  for (let i = 0; i < arr.length - 1; i++) {
    let min = i
    for (let j = i; j < arr.length; j++) {
      if (arr[j] < arr[min]) {
        [arr[min], arr[j]] = [arr[j], arr[min]]
      }
    }
  }
  return arr
}
/**
 * @description: 快速排序，取其中任意值为基准输，然后进行分割，小于基数放左边数组，大于放右边数组，然后递归左右两个数组
 * @param {*} arr
 * @return {*}
 */
const quickSort=(arr)=>{
  if(arr.length<=1){
    return arr
  }
  const left=[]
  const right=[]
  const mid=arr[0]
  for(let i=1;i<arr.length;i++){
    if(arr[i]<mid){
      left.push(arr[i])
    }else{
      right.push(arr[i])
    }
  }
  return [...quickSort(left),mid,...quickSort(right)]
}


const listToTree=(arr)=> {
  // 双循环
  arr.forEach(e => { // 父循环
    arr.forEach(y => { // 子循环
      if (y.parentId == e.id) { // 子取parentId和父id做对比
        if (!e.children) {
          e.children = []
        }
        e.children.push(y) // 把子添加父
      }
    })
  })
  arr = arr.filter(ele => ele.parentId === null) // 过滤
  return arr
}
function treeToList(tree) {
  var queen = [];
  var out = [];
  queen = queen.concat(tree);
  while (queen.length) {
    var first = queen.shift();
    if (first.children) {
      // 下一层节点推入
      queen = queen.concat(first.children)
      delete first['children'];
    }
    out.push(first);
  }
  return out;
}
// const treeToList=(arr)=>{
//   const list=[],
//   node=[...arr]
//   while (node.length) {
//     let first=node.shift()
//     if(first.children){
//       node.push(...first.children)
//       delete first['children']
//     }
//     list.push(first)
//   }
  
// }

</script>