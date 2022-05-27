<template>
    <div class="card-container" @click="ClickCard" :id="card_id" :class="{zindex: isClicked}">
        <div class="cover">

        </div>
        <div class="back">
            <div class="des-container">
                <router-view/>
            </div>
        </div>
        <p v-show="!isClicked">{{ props.product.name }}</p>
    </div>
</template>

<script setup lang="ts">
import Product from "../../entity/product";
import {computed, ref} from "vue";

const props = defineProps<{ product:  Product, showLike?: boolean }>();
const card_id = `card-${props.product.id}-${Math.round(Math.random() * 10000)}`

const card = (): HTMLElement => {
    return document.getElementById(card_id) as HTMLElement;
}


const urls = ["https://images.maiquer.tech/site-imgs/tar1.webp",
    "https://images.maiquer.tech/site-imgs/tar2.webp",
    "https://images.maiquer.tech/site-imgs/tar3.webp",
    "https://images.maiquer.tech/site-imgs/tar4.webp",
    "https://images.maiquer.tech/site-imgs/tar5.webp",
    "https://images.maiquer.tech/site-imgs/tar6.webp",
    "https://images.maiquer.tech/site-imgs/tar7.webp",
    "https://images.maiquer.tech/site-imgs/tar8.webp",
    "https://images.maiquer.tech/site-imgs/tar9.webp",
    "https://images.maiquer.tech/site-imgs/tar10.webp",
    "https://images.maiquer.tech/site-imgs/tar11.webp",
    "https://images.maiquer.tech/site-imgs/tar12.webp",
    "https://images.maiquer.tech/site-imgs/tar13.webp",
    "https://images.maiquer.tech/site-imgs/tar14.webp",
    "https://images.maiquer.tech/site-imgs/tar15.webp",
    "https://images.maiquer.tech/site-imgs/tar16.webp",
    "https://images.maiquer.tech/site-imgs/tar17.webp",
    "https://images.maiquer.tech/site-imgs/tar18.webp",
    "https://images.maiquer.tech/site-imgs/tar19.webp",
    "https://images.maiquer.tech/site-imgs/tar20.webp",
    "https://images.maiquer.tech/site-imgs/tar21.webp",
    "https://images.maiquer.tech/site-imgs/tar22.webp",
    "https://images.maiquer.tech/site-imgs/tar23.webp",
    "https://images.maiquer.tech/site-imgs/tar24.webp",
    "https://images.maiquer.tech/site-imgs/tar25.webp",
    "https://images.maiquer.tech/site-imgs/tar26.webp",
    "https://images.maiquer.tech/site-imgs/tar27.webp",
    "https://images.maiquer.tech/site-imgs/tar28.webp",
    "https://images.maiquer.tech/site-imgs/tar29.webp"
];

const backgroundImage = computed(() => {
    return `url(${urls[Math.floor(Math.random() * urls.length)]})`;
})
const ratio = 4;
const isClicked = ref(false);

const deg1 = computed(() => {
    return `${isClicked.value ? 180 : 0}deg`;
})

const deg2 = computed(() => {
    return `${!isClicked.value ? -180 : 0}deg`;
})

const scl = computed(() => {
    return `${isClicked.value ? ratio : 1},${isClicked.value ? ratio : 1}`;
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
.zindex {
    z-index: 999;
}

.card-container {
    display: block;
    height: 130px;
    width: 91px;
    border-radius: 10px;
    overflow: visible;
    position: relative;
    box-shadow: 0px 0px 15px rgba(255, 255, 255, 1);

    & > .cover {
        position: absolute;
        width: 100%;
        border-radius: 15px;

        height: 130px;
        background: v-bind(backgroundImage) no-repeat center;
        backface-visibility: hidden;
        background-size: contain;
        transform: rotateY(v-bind(deg1)) scale(v-bind(scl)) translate(v-bind(translate));
        transition: all 0.5s ease;
    }

    & > p {
        margin-top: 140px;
        text-align: center;
        color: #ffeca9;
        font-size: 15px;
    }

    & > .back {
        position: absolute;
        height: 130px;
        width: 100%;
        backface-visibility: hidden;
        background: #EDE6FF no-repeat center;
        border-radius: 10px;
        background-size: cover;
        transform: rotateY(v-bind(deg2)) scale(v-bind(scl)) translate(v-bind(translate));
        transition: all 0.5s ease;
        padding: 1px;

        & > .des-container {
            margin: 2%;
            height: 98%;
            border: 1px;
        }
    }
}
</style>
