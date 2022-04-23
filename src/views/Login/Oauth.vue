<template>
  <div v-if="!isOK">正在处理登录.....</div>
  <div v-else>正在跳转......</div>
  <template></template>
</template>

<script lang="ts" setup>
import {useRoute, useRouter} from "vue-router";
import {ref, onMounted} from "vue";
import {loginState} from "../../store/loginStatus";
import {userInfo} from "../../store/userInfo";

const isOK = ref(false);
const debug = ref(false);
const code = ref("");

const route = useRoute();
const router = useRouter();
const login = loginState();
const Info = userInfo();

code.value = route.query.code as string;
onMounted(async () => {
  setTimeout(async () => {
    const res = await login.wxLogin(code.value);
    isOK.value = res;
    await Info.fetchInfo(login.userid);
    if (res && !debug.value) {
      await router.push("/products/all/All");
    }
  }, 1500);
});
</script>

<style scoped>
div {
  text-align: center;
  font-size: 16px;
}
</style>
