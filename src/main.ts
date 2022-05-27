import { createApp } from 'vue'
import App from './Main.vue'
import router from './router'
import { createPinia } from 'pinia'
import VConsole from 'vconsole'
import 'animate.css';
import 'element-plus/dist/index.css'


// const vConsole = new VConsole();

createApp(App).use(createPinia()).use(router).mount('#app')
