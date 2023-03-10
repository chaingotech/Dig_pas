import {createRouter, createWebHistory, RouteRecordRaw} from 'vue-router'
import Home from "@/views/Home.vue";
import TokenService from '@/services/token.service';

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('@/views/Login.vue')
    },
    {
        path: '/admin',
        name: 'admin',
        component: () => import('@/views/Admin.vue'),
        meta: { requiresAuth: true }
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

router.beforeEach((to) => {
    if (to?.meta?.requiresAuth && !TokenService.getLocalAccessToken()) {
        return {
            path: '/login'
        }
    }
})

export default router
