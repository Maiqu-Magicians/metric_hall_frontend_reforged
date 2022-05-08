<template>
  <div>
    <main-footer/>
    <router-view/>
  </div>
</template>

<script lang="ts" setup>
import MainFooter from "./components/Base/Footer.vue"
import {loginState} from "./store/loginStatus";
import {onBeforeMount} from "vue";
import {userInfo} from "./store/userInfo";
import {ProductStore} from "./store/products";
import axios from "axios";

// begin init login state
const login = loginState();
const info = userInfo();
const products = ProductStore();

axios.defaults.baseURL="https://api.maiquer.tech"


onBeforeMount(async () => {
//after mounted, init products
      login.loadfromLocal();
      await products.getAll();
      if (login.isLoggedIn) {
        axios.defaults.headers.common["Authorization"] = login.jwtToken
        await info.fetchInfo(login.userid)
      }
    }
)

</script>
