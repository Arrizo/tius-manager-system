<template>
  <a-modal v-model:visible="visible" @ok="onOk" @cancel="onCancel">

  </a-modal>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
const visible = ref(false)
const onOk = () => {

}
const onCancel = () => {

}
defineExpose({
  visible
})
</script>