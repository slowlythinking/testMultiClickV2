import { createRouter, createWebHistory } from 'vue-router'
const routerHistory = createWebHistory()
const router = createRouter({
    history: routerHistory,
    routes: [
        {
            path:'/',
            redirect:'/home'
        },
        {
            path:'/home',
            component: () => import('../views/home.vue')
        },
        {
            path:'/home-2',
            component: () => import('../views/home-2.vue')
        }
    ]
})

export default router