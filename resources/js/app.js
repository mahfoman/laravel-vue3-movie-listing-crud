import './bootstrap';

import { createApp } from 'vue'
import VueSweetalert2 from 'vue-sweetalert2';

import App from './layouts/master.vue'
import router from './routes/index'


createApp(App)
    .use(router)
    .use(VueSweetalert2)
    .mount('#app')
