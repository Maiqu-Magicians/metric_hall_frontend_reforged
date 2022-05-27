<template>
    <div class="title-wrapper">
        <svg xmlns="http://www.w3.org/2000/svg" width="104.5" height="34"
             viewBox="0 0 104.5 34" fill="none">
            <path id="矩形 1" fill-rule="evenodd" style="fill:#FFFFFF" transform="translate(0 0)  rotate(0 52.25 17)"
                  opacity="0.3" d="M104.5,18.39L93.77,0L11.57,0L0,18.39L11.57,34L93.77,34L104.5,18.39Z "/>
            <path id="矩形 1" style="stroke:#FFFFFF; stroke-width:1; stroke-opacity:1; stroke-dasharray:0 0"
                  transform="translate(0 0)  rotate(0 52.25 17)"
                  d="M104.5,18.39L93.77,0L11.57,0L0,18.39L11.57,34L93.77,34L104.5,18.39Z "/>
            <text xml:space="preserve" text-anchor="start" font-family="Noto Sans JP" font-size="18" stroke-width="0"
                  fill="#FFFFFF" id="svg_1" y="23.06779" x="15.84333" stroke-dasharray="0 0" stroke="#FFFFFF"><slot></slot></text>
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="34"
             viewBox="0 0 15 34" fill="none" v-if="props.isActive">
            <path id="矩形 2" fill-rule="evenodd" style="fill:#FFFFFF"
                  transform="translate(0 0)  rotate(0 7.500000000000002 17)" opacity="0.8"
                  d="M15,18.57L4.08,0L0,0L10.66,18.57L0,34L4.08,34L15,18.57Z "/>
        </svg>

    </div>
</template>

<script lang="ts" setup>
const props = defineProps({
    isActive: {
        type: Boolean,
        default: false
    }
})

</script>

<style lang="scss" scoped>
.title-wrapper {
    display: inline;

}
</style>