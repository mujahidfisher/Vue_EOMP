import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import "bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"
import "@/assets/style.css"
import "aos/dist/aos.css"
import  AOS from "aos"
import VWave from 'v-wave'
import vueScrollTo from 'vue-scrollto'


createApp(App).use(store).use(VWave).use(router).use(AOS.init()).use(vueScrollTo).mount('#app')
