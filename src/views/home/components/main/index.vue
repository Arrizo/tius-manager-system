<!--
 * @Author: chenzechao
 * @Date: 2023-10-22 20:09:50
 * @LastEditTime: 2023-10-22 21:21:42
 * @LastEditors: chenzechao
 * @Description: 
 * @FilePath: /tius-manager-system/src/views/home/components/main/index.vue
-->
<template>
  <div class="content">
    <vuedraggable :list="(value as any)" group="itxst" class="sdfas">
      <template #item="{ element }">
        <section>
          <component
            :is="dom[`${element.designType}Preview`]"
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
import inputPreview from "../input/input-preview.vue";
import { shallowReactive, markRaw } from "vue";
const props = defineProps({
  value: {
    type: Object,
    default: () => [],
  },
});
const dom = markRaw({
  inputPreview,
});
</script>
<style lang="scss" scoped>
.sdfas {
  height: 100%;
}
</style>
