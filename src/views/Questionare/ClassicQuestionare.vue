<template>
  <p>{{ questions[currentIndex].question }}</p>
  <radio-choice :questions="questions[currentIndex]" @next="next" :class="{entering:animateActive,leaving:!animateActive}"></radio-choice>
</template>

<script lang="ts" setup>
import RadioChoice from "../../components/Questionare/RadioChoice.vue";
import {Question, Test} from "../../entity/Questionare";
import {reactive, ref} from "vue";

const currentIndex = ref(0)
const questions = Test;
const animateActive = ref(true)

const next = (index: number, value: string) => {
  if (currentIndex.value + 1 >= questions.length) {
    console.log("Finish")
  } else {
    console.log(index, value)
    animateActive.value=!animateActive.value;
    setTimeout(()=>{
        animateActive.value = !animateActive.value;
    },500)
    currentIndex.value++;
  }
}

const saveProgress = () => {

}
</script>

<style lang="scss" scoped>
p {
  text-align: center;
  font-size: 20px;

}

@keyframes leaving {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
    transform: translateX(-50%) scale(0.9);
  }
}

.leaving {
  animation: leaving 1s;
}

@keyframes entering {
  from {
    transform: translateX(50%) scale(0.9);
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.entering {
  animation: entering 1s;
}
</style>