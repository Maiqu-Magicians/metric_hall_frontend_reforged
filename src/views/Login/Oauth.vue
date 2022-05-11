<template>
    <div v-if="!state.isOK">正在处理登录.....</div>
    <div v-else>正在跳转......</div>
</template>

<script lang="ts" setup>
import {useRoute,} from "vue-router";
import {onMounted, reactive} from "vue";
import {loginState} from "../../store/loginStatus";
import {ElLoading} from "element-plus";

const state = reactive({
    isOK: false,
    code: ""
})

const route = useRoute();
const login = loginState();
state.code = route.query.code as string;
onMounted(async () => {
    setTimeout(async () => {
        state.isOK = await login.wxLogin(state.code);
        if (state.isOK) location.href = "/";
    }, 500);
});
</script>

<style scoped>
div {
    text-align: center;
    font-size: 16px;
}
</style>
