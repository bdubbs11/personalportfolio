import './assets/tailwindcss.css';
import { register } from 'swiper/element/bundle';


register();

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router)

app.mount('#app')
