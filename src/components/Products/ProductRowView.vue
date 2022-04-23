<template>
  <el-scrollbar height="220px" style="height: 220px;">
    <div class="row">
      <div v-for="i in listing">
        <product-card-col :product="i"></product-card-col>
      </div>
    </div>
  </el-scrollbar>
</template>

<script lang="ts" setup>
import {ProductStore} from "../../store/products";
import {computed} from "vue";

const products = ProductStore()
const listing = computed(() => {
  return products.productLs
})
</script>

<style lang="scss" scoped>
.row {
  display: flex;
  flex-direction: row;
}

</style>