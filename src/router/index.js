import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    meta: { Auth: false },
  },
  {
    path: '/employ',
    name: 'employ',
    component: () => import('../views/Employ.vue'),
    meta: {
      Auth: true,
    },
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/Login.vue'),
    meta: { Auth: false },
  },
  {
    path: '/reg',
    name: 'reg',
    component: () => import('../views/Reg.vue'),
    meta: { Auth: false },
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  const Auth = localStorage.getItem('token');
  if (to.matched.some((record) => record.meta.Auth)) {
    if (Auth) {
      next();
    } else {
      alert('請先登入');
      next('/login');
    }
  } else {
    next();
  }
});

export default router;
