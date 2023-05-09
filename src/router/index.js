import Vue from 'vue';
import Router from 'vue-router';
import children from './module/children';
import layout from '@/components/layout.vue'
import NotFound from '@/components/404.vue';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/',
      name: 'layout',
      component: layout,
        children: [
          ...children
      ]
    },
    {
      path: '*',
      component: NotFound,
      meta: {
        title: '404',
      },
    },
  ],
});

router.beforeEach((to, from, next) => {
  document.title = to.meta.title || '延长线';
  next();
});
export default router;
