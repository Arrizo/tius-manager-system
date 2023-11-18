<!--
 * @Author: chenzechao
 * @Date: 2023-10-22 20:09:50
 * @LastEditTime: 2023-11-05 21:24:35
 * @LastEditors: chenzechao
 * @Description: 
 * @FilePath: /tius-manager-system/src/views/home/components/left/index.vue
-->
<template>
  <div>
    <vuedraggable
      :list="(value as any)"
      :group="group"
      :clone="handleClose"
      class="nav-list"
    >
      <template #item="{ element }">
        <section>
          <input type="text" :value="modelValue" @input="asdd" />
          <input type="text" :value="text2" @input="asdd1" />
          <span>
            {{ element.descript }}
          </span>
          <i class="iconfont" :class="element.hoverIcon"></i>
        </section>
      </template>
    </vuedraggable>
  </div>
</template>
<script lang="ts" setup>
import vuedraggable from "vuedraggable";
import { ref, computed } from "vue";
const props = defineProps({
  modelValue: {
    type: String,
    default: "",
  },
  text2: {
    type: String,
    default: "",
  },
  value: {
    type: Object,
    default: () => [],
  },
});
const emits = defineEmits(["update:modelValue", "update:text2"]);

const asdd = (e) => {
  emits("update:modelValue", e.target.value);
};
const asdd1 = (e) => {
  emits("update:text2", e.target.value);
};
const group = ref({
  name: "itxst",
  pull: "clone", //允许拖出,如果设置 字符串'clone' 表示该组拖出的元素会被克隆
  put: false, //允许拖入
});
const handleClose = (e) => {
  return JSON.parse(JSON.stringify(e));
};
</script>
<style lang="scss" scoped>
.nav-list {
  display: flex;
  flex-wrap: wrap;
  section {
    width: 30%;
    padding: 10px 6px;
    display: flex;
    flex-direction: column;
    align-items: center;
    &:hover {
      i,
      span {
        color: #4080ff;
      }
    }
    span {
      color: #888888;
      font-weight: bold;
    }
    i {
      font-size: 24px;
    }
  }
}
</style>
