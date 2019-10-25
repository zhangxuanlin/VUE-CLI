import Vue from 'vue';
import Router from 'vue-router';
import Home from '@v/Home.vue';

Vue.use(Router);
console.log(process.env, 9990);
const i = Math.random() * 100;
const routers = new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [{
        path: '/login',
        name: 'login',
        component: () => import('@v/Login.vue'),
    }, {
        path: '/',
        name: 'home',
        component: Home,
    }, {
        path: '/about',
        name: 'about',
        component: () => import('@v/About.vue'),
        meta: {
            requiresAuth: true,
        },
    }, {
        path: '/bigData',
        name: 'bigData',
        component: () => import('@v/BigData.vue'),
    }, {
        path: '/defaua',
        name: 'defaua',
        component: () => import('@v/Defaua.vue'),
    }, {
        path: '*',
        // redirect: {
        //     name: 'home',
        // },
        name: '404',
        component: () => import('@c/common/404.vue'),
    }, {
        path: '/user',
        component: () => import('@v/User.vue'),
        children: [{
            path: '',
            component: () => import('@v/Defau.vue'),
        }, {
            path: 'me',
            component: () => import('@v/me.vue'),
        }, {
            path: 'you',
            component: () => import('@v/you.vue'),
        }, {
            path: 'query/:id',
            component: () => import('@v/query.vue'),
        }],
    }],
});

export default routers;
console.log(i);
routers.beforeEach((to, from, next) => {
    if (to.matched.some(v => v.meta.requiresAuth)) {
        // eslint-disable-next-line no-constant-condition
        if (20 <= 50) {
            if (to.path === '/login') { // 这就是跳出循环的关键
                next();
            } else {
                next({ path: '/404' });
            }
        } else {
            next();
        }
    } else {
        next();
    }
    // if (i > 50) {
    //     next();
    // } else {
    //     if (to.path === '/login') { // 这就是跳出循环的关键
    //         next();
    //     } else {
    //         next('/login');
    //     }
    //     console.log('请先登录');
    // }
});
