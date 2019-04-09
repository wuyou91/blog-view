import Vue from 'vue';
import Router from 'vue-router';
import home from './views/home.vue';
import article from './views/article.vue';
import articleContent from './views/articleContent.vue';
import NotFound from './components/404.vue';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      redirect: '/home',
    },
    {
      path: '/home',
      name: 'home',
      component: home,
      meta: {
        title: '首页',
      },
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('./views/about.vue'),
      meta: {
        title: '关于',
      },
    },
    {
      path: '/photos',
      name: 'photos',
      component: () => import('./views/photos.vue'),
      meta: {
        title: '摄影',
      },
    },
    {
      path: '/article',
      name: 'article',
      component: article,
      meta: {
        title: '文章列表',
      },
    },
    {
      path: '/article/:article_id',
      name: 'articleContent',
      component: articleContent
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
