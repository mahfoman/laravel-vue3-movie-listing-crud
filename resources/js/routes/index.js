import { createRouter, createWebHistory } from 'vue-router'

import MoviesIndex from '../components/Movies/Index.vue'
import MoviesCreate from '../components/Movies/Create.vue'

const routes = [
    { path: '/', component: MoviesIndex },
    { path: '/create', component: MoviesCreate },
]

export default createRouter({
    history: createWebHistory(),
    routes
})

