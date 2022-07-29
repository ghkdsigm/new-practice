import { createRouter, createWebHistory} from 'vue-router'
import Home from '../pages/Home.vue'
import Helloworld from '../components/HelloWorld.vue'
import Sub from '../pages/Sub.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', name: 'home', component: Home, title: 'HOME', icon: 'fas fa-home fa-fw text-2xl', meta: { isMenu: true, layout: 'DefaultLayout', requireAuth: true } },
        { path: '/sub', name: 'sub', component: Sub, title: 'SUB', icon: 'fas fa-home fa-fw text-2xl', meta: { isMenu: true, layout: 'DefaultLayout', requireAuth: true } },
        { path: '/helloworld', name: 'helloworld', component: Helloworld, title: 'HELLOWORLD', icon: 'fas fa-home fa-fw text-2xl', meta: { isMenu: true, layout: 'DefaultLayout', requireAuth: true } },
    ],  
})

export default router