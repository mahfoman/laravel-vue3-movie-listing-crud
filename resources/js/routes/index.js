import { createRouter, createWebHistory } from 'vue-router'

import MoviesIndex from '../components/Movies/Index.vue'
import MoviesCreate from '../components/Movies/Create.vue'
import MoviesEdit from '../components/Movies/Edit.vue'

const routes = [
    { path: '/', name:'movies.index', component: MoviesIndex, meta : { title: 'Movies'} },
    { path: '/create', name:'movies.create', component: MoviesCreate, meta : { title: 'Create Movie'} },
    { path: '/edit/:id', name:'movies.edit', component: MoviesEdit, meta : { title: 'Edit Movie'} },
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

