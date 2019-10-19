import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/views/login'
import Welcome from '@/views/welcome'
import Sign from '@/views/sign'

Vue.use(Router);

export default new Router({
  scrollBehavior(to, from, savedPosition) {
    // keep-alive 返回缓存页面后记录浏览位置
    if (savedPosition && to.meta.keepAlive) {
      return savedPosition;
    }
    // 异步滚动操作
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({x: 0, y: 1});
      }, 0);
    });
  },
  routes: [
    {
      path: '/',
      redirect: 'welcome',
      hidden: true
    },
    {
      path: '/login',
      component: Login,
      hidden: true
    },
    {
      path: '/sign',
      component: Sign,
      hidden: true
    },
    {
      path: '/welcome',
      component: Welcome,
      hidden: true
    },
  ],
})
