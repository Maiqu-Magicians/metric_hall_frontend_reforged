<template>
  <el-card>
    <el-radio-group v-model="ans" @change="select">
      <el-radio v-for="i in q.choice" :key="i.option" border size="large" :label="i.option">
        {{ `${i.option}、 ${i.optionContent}` }}
      </el-radio>
    </el-radio-group>
  </el-card>
</template>

<script lang="ts" setup>
import {Question} from "../../entity/Questionare";
import {computed, PropType, ref} from "vue";

const props = defineProps({
  questions: {type:Object as PropType<Question>, required: true}
})

const q = computed(() => {
  return props.questions
})

const ans = ref("")

const select = () => {
  setTimeout(() => {
    emits("next", props.questions.index, ans.value)
    ans.value = "";
  },500)
}

const emits = defineEmits(["next"])
</script>

<style lang="scss" scoped>
.el-card {
  margin: 30px;
}

.el-radio-group {
  display: flex;
  flex-direction: column;

  & > .el-radio {
    width: 90%;
    height: 50px;
    margin: 20px;
  }
}
</style>