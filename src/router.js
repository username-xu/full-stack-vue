import Vue from 'vue'
import Router from 'vue-router'
// import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'news',
            component: () => import('./views/News.vue')
        },
        {
            path: '/news',
            name: 'news',
            component: () => import('./views/News.vue')
        },
        {
            path: '/mine',
            name: 'mine',
            component: () => import('./views/Mine.vue')
        }
    ]
})
