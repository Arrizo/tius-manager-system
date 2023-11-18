<!--
 * @Author: chenzechao
 * @Date: 2023-10-22 20:09:50
 * @LastEditTime: 2023-10-22 21:22:16
 * @LastEditors: chenzechao
 * @Description: 
 * @FilePath: /tius-manager-system/src/views/home/components/right/index.vue
-->
<template>
  <div class="content">
    <vuedraggable :list="(value as any)" group="itxst" class="sdfas">
      <template #item="{ element }">
        <section>
          <component
            :is="dom[`${element.designType}Edit`]"
            :value="element.value"
          >
          </component>
        </section>
      </template>
    </vuedraggable>
  </div>
</template>
<script lang="ts" setup>
import vuedraggable from "vuedraggable";
import inputEdit from "../input/input-edit.vue";
import { shallowReactive, markRaw } from "vue";
const props = defineProps({
  value: {
    type: Object,
    default: () => [],
  },
});
const dom = markRaw({
  inputEdit,
});
</script>
<style lang="scss" scoped>
.sdfas {
  height: 100%;
}
</style>
