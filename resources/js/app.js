import './bootstrap';

import { createApp } from 'vue'
import MoviesIndex from './components/Movies/Index.vue'

createApp({})
    .component('MoviesIndex', MoviesIndex)
    .mount('#app')
