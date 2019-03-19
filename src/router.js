import Vue from 'vue';
import Router from 'vue-router';
import articleList from './components/articleList.vue';
import article from './views/article.vue';
import NotFound from './components/404.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: articleList,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/about.vue'),
    },
    {
      path: '/photos',
      name: 'photos',
      component: () => import('./views/photos.vue'),
    },
    {
      path: '/article',
      name: 'articleList',
      component: articleList,
    },
    {
      path: '/article/:article_id',
      name: 'article',
      component: article,
    },
    {
      path: '*',
      component: NotFound,
    },
  ],
});
