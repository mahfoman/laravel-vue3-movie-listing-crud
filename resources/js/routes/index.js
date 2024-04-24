import { createRouter, createWebHistory } from 'vue-router'

import MoviesIndex from '../components/Movies/Index.vue'
import MoviesCreate from '../components/Movies/Create.vue'

const routes = [
    { path: '/', name:'movies.index', component: MoviesIndex, meta : { title: 'Movies'} },
    { path: '/create', name:'movies.create', component: MoviesCreate, meta : { title: 'Create Movie'} },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

router.beforeEach((to, from, next) => {
    document.title = to.meta.title;
    next();
});

export default router;

