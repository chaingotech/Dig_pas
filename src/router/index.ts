import {createRouter, createWebHistory, RouteRecordRaw} from 'vue-router'
import Home from "@/views/Home.vue";
import Login from '@/views/Login.vue';
import Admin from '@/views/Admin.vue';
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
        component: Login
    },
    {
        path: '/admin',
        name: 'admin',
        component: Admin,
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
