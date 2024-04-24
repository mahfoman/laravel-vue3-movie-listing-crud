import './bootstrap';

import { createApp } from 'vue'

import App from './layouts/master.vue'
import router from './routes/index'


createApp(App)
    .use(router)
    .mount('#app')
