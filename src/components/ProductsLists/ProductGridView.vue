<template>
    <div class="grid-container">
        <product-card v-for="i of props.listing " :key="i.id" :product="i" class="card"></product-card>
    </div>
</template>

<script lang="ts" setup>
import Product from "../../entity/product";
import {PropType} from "vue";

const props = defineProps({
    listing: {type: Array as PropType<Product[]>}
})
</script>

<style lang="scss" scoped>
.grid-container {
    display: grid;
    grid-template-columns: repeat(3, auto);
    //grid-template: ;
    grid-template-rows: repeat(5, 200px);
    //grid
}

.card{
    margin: 30px auto;
}
</style>