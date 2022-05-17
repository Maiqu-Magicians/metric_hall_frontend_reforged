<template>
    <!--todo: v for items in cols-->
    <title-sort v-for="(i,k) in types"
                class="title" :isActive="i.isActive"
                @click="toggleType(k)">
        {{ i.name }}
    </title-sort>
    <product-grid-view :listing="listing"></product-grid-view>
</template>

<script lang="ts" setup>
import {ProductStore} from "../store/products";
import {computed, reactive, ref} from "vue";
import ProductGridView from "../components/ProductsLists/ProductGridView.vue";

const types = reactive([
    {name: "自我", isActive: true},
    {name: "群体", isActive: false},
    {name: "社会", isActive: false}
])

const type = ref(1)

const toggleType = (key: number) => {
    type.value = key + 1;
    types.forEach(a => a.isActive = false);
    types[key].isActive = true;
}


const products = ProductStore();
const listing = computed(() => {
    return products.productLs.filter(i => i.type === type.value || type.value === 0);
})
</script>

<style lang="scss" scoped>
.title {
    display: inline;
    line-height: 40px;
    width: 200px;
    position: relative;
    color: oldlace;
    font-size: 25px;
    margin-left: 20px;
    margin-top: 20px;
}
</style>
