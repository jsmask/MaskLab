import { createApp } from 'vue'
import 'reset.css'
import "@/assets/css/style.scss"
// import "element-plus/dist/index.css"
import App from './App.vue'
import router from "./router";


createApp(App).use(router).mount('#app')
