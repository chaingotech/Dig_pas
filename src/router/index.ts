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
        path: '/:passport',
        name: 'passport',
        component: () => import('@/views/Passport.vue')
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
        meta: { requiresAuth: true, next: 'admin' }
    },
    {
        path: '/admin/:passport',
        name: 'edit-passport',
        component: () => import('@/views/admin/EditPassport.vue'),
        meta: { requiresAuth: true, next: 'edit-passport' }
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

router.beforeEach((to) => {
    if (to?.meta?.requiresAuth && !TokenService.getLocalAccessToken()) {
        return {
            name: 'login',
            params: {
                next: to?.meta?.next as string || '',
                ...(to?.params || {})
            }
        }
    }
})

export default router
