export default [
    {
        path: '/home',
        name: 'home',
        component: () => import('@/views/home.vue'),
        meta: {
        title: '首页',
            showBanner: true,
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
    }
]