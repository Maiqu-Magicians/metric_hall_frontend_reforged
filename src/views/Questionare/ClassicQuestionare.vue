<template>
  <p>{{ questions[currentIndex].question }}</p>
  <radio-choice :questions="questions[currentIndex]" @next="next"></radio-choice>
</template>

<script lang="ts" setup>
import RadioChoice from "../../components/Questionare/RadioChoice.vue";
import {Question} from "../../entity/Questionare";
import {ref} from "vue";

const currentIndex = ref(0)
const questions: Question[] = [
  {
    question: "标题",
    index: 1,
    choice: [
      {
        option: "A",
        optionContent: "第一个"
      },
      {
        option: "B",
        optionContent: "选项"
      },
      {
        option: "C",
        optionContent: "lalala"
      },
      {
        option: "D",
        optionContent: "lalala"
      }
    ]
  }
]

const next = (index: number, value: string) => {
  console.log(index, value)
}
</script>

<style lang="scss" scoped>
p {
  text-align: center;
  font-size: 20px;

}
</style>