<template>
  <div class="mine">
    <mine-info></mine-info>
    <mine-card></mine-card>
  </div>
</template>

<script lang="ts" setup>
import MineInfo from "../components/Mine/MineInfo.vue";
import MineCard from "../components/Mine/MineCard.vue";
</script>

<style lang="scss" scoped>
.mine {
  margin-top: 0;
  height: 100vh;
  background-color: #f0f0f0;
}
</style>
