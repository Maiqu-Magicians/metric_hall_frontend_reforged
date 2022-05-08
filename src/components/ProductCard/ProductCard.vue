<template>
    <div class="card-container" @click="ClickCard" :id="card_id">
        <div class="cover">

        </div>
        <div class="back">

        </div>
    </div>
</template>

<script setup lang="ts">
import Product from "../../entity/product";
import {computed, ref} from "vue";

const props = defineProps<{ product: Product, showLike?: boolean }>();
const card_id = `card-${props.product.id}-${Math.round(Math.random() * 10000)}`

const card = (): HTMLElement => {
    return document.getElementById(card_id) as HTMLElement;
}

const ratio = 2.5;
const isClicked = ref(false);

const deg1 = computed(() => {
    return `${isClicked.value ? 180 : 0}deg`
})

const deg2 = computed(() => {
    return `${!isClicked.value ? -180 : 0}deg`
})

const scl = computed(() => {
    return `${isClicked.value ? ratio : 1},${isClicked.value ? ratio : 1}`
})

const CardPos = (): { x: number, y: number } => {
    const cord = card().getBoundingClientRect();
    return {x: (cord.left + cord.right) / 2, y: (cord.bottom + cord.top) / 2}
}

const ScreenCenter = (): { x: number, y: number } => {
    const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)
    const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0)
    return {x: vw / 2, y: vh / 2};
}

const Offset = (): { x: number, y: number } => {
    const cd = CardPos();
    const sc = ScreenCenter();
    return {x: sc.x - cd.x, y: sc.y - cd.y}
}

const translate = computed(() => {
    const o = Offset();
    return !isClicked.value ? "0,0" : `${o.x / ratio}px,${o.y / ratio}px`
})

const ClickCard = async () => {
    isClicked.value = !isClicked.value;
};


</script>

<style lang="scss" scoped>
.card-container {
    height: 200px;
    width: 100px;
    overflow: visible;
    position: relative;
    -webkit-perspective: 1000px;

    & > .cover {
        position: absolute;
        width: 100%;
        height: 200px;
        background: url("https://img-cdn.dustella.net/sundry/塔罗.jpg") no-repeat center;
        backface-visibility: hidden;
        background-size: cover;
        transform: rotateY(v-bind(deg1)) scale(v-bind(scl)) translate(v-bind(translate));
        transition: all 0.5s ease;
    }

    & > .back {
        position: absolute;
        height: 200px;
        width: 100%;
        backface-visibility: hidden;
        background: url("https://img-cdn.dustella.net/sundry/29519e5f5627ebb88b6b10c40fb019f8.jpg") no-repeat center;
        background-size: cover;
        transform: rotateY(v-bind(deg2)) scale(v-bind(scl)) translate(v-bind(translate));
        transition: all 0.5s ease;
    }
}
</style>
