import './assets/main.css'

import { createApp } from 'vue'
import {createPinia} from "pinia";
import piniaMain from './pinia/piniaMain.vue'

const pinia = createPinia()
const app = createApp(piniaMain)

app.use(pinia)
createApp(piniaMain).mount('#app')
