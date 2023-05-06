import Vue from 'vue';
import Router from 'vue-router';
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
        {
          path: '/home',
          name: 'home',
          component: () => import('@/views/home.vue'),
          meta: {
            title: '首页',
            showBanner: true
          },
        },
        {
          path: '/about',
          name: 'about',
          component: () => import('@/views/about.vue'),
          meta: {
            title: '关于',
          },
        },
        {
          path: '/study',
          name: 'study',
          component: () => import('@/views/webgl.vue'),
          meta: {
            title: '练习',
          },
        },
        {
          path: '/photos',
          name: 'photos',
          component: () => import('@/views/photos.vue'),
          meta: {
            title: '摄影',
          },
        },
        {
          path: '/article',
          name: 'article',
          component: () => import('@/views/article.vue'),
          meta: {
            title: '文章列表',
          },
        },
        {
          path: '/article/:article_id',
          name: 'articleContent',
          component: () => import('@/views/articleContent.vue'),
        },
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
