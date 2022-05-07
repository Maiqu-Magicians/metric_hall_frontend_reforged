<template>
    <el-tabs
        v-model="activeName"
        stretch
        class="demo-tabs"
        @tab-click="handleClick"
    >
        <el-tab-pane label="全部" name="0"></el-tab-pane>
        <el-tab-pane label="自我" name="1"></el-tab-pane>
        <el-tab-pane label="群体" name="2"></el-tab-pane>
        <el-tab-pane label="社会" name="3"></el-tab-pane>
    </el-tabs>
    <el-scrollbar :height="heightW">
        <product-list-view :listing="listing" :show-like="true"/>
    </el-scrollbar>
</template>

<script lang="ts" setup>
import {computed, ref} from "vue";
import {ProductStore} from "../../store/products";
import {useRouter} from "vue-router";
import type {TabsPaneContext} from "element-plus";
import ProductListView from "../../components/Products/ProductListView.vue";
import Product from "../../entity/product";

const router = useRouter();
const activeName = ref('0')
const typeIndex = ref(0)
const all_products = ProductStore();


const handleClick = (tab: TabsPaneContext) => {
    router.push(`/products/all/${tab.paneName}`);
    typeIndex.value = 114
    setTimeout(() => {
        typeIndex.value = Number(tab.paneName)
    }, 50)

};

const listing = computed(() => {
    return all_products.productLs.filter(i => i.type === typeIndex.value || typeIndex.value == 0)
})

const heightW = computed(() => {
    return `${window.innerHeight * 0.68}px`
})

</script>
