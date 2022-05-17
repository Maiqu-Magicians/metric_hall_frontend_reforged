<template>
    <div class="row">
        <product-card :product="i" v-for="i in listing"></product-card>
    </div>
</template>

<script lang="ts" setup>
import {ProductStore} from "../../store/products";
import {computed} from "vue";

const props = defineProps({
    type: Number
})
const products = ProductStore()
const listing = computed(() => {
    return products.productLs.filter(i=>i.type === props.type!)
})
</script>

<style lang="scss" scoped>
.row {
    position: relative;
    display: inline-flex;
    flex-direction: row;
    flex: 1;
    //overflow-y: initial;
    overflow: visible;
    margin: 60px 20px 20px;
    height: 200px;

    & > div {
        display: inline;
    }
}

</style>