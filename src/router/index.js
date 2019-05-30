import Vue from 'vue'
import Router from 'vue-router'

// in development-env not use lazy-loading, because lazy-loading too many pages will cause webpack hot update too slow. so only in production use lazy-loading;
// detail: https://panjiachen.github.io/vue-element-admin-site/#/lazy-loading

Vue.use(Router)

/* Layout */
import Layout from '../views/layout/Layout'

/**
* hidden: true                   if `hidden:true` will not show in the sidebar(default is false)
  当设置 true 的时候该路由不会再侧边栏出现 如401，login等页面，或者如一些编辑页面/edit/1

* alwaysShow: true               if set true, will always show the root menu, whatever its child routes length
*                                if not set alwaysShow, only more than one route under the children
*                                it will becomes nested mode, otherwise not show the root menu
  
  当你一个路由下面的 children 声明的路由大于1个时，自动会变成嵌套的模式--如组件页面
  只有一个时，会将那个子路由当做根路由显示在侧边栏--如引导页面
  若你想不管路由下面的 children 声明的个数都显示你的根路由
  你可以设置 alwaysShow: true，这样它就会忽略之前定义的规则，一直显示根路由


* redirect: noredirect           if `redirect:noredirect` will no redirect in the breadcrumb
  当设置 noredirect 的时候该路由在面包屑导航中不可被点

* mark:     后台通过比对改参数来判断用户是否有权限访问该菜单       

* name:'router-name'             the name is used by <keep-alive> (must set!!!)
  设定路由的名字，一定要填写不然使用<keep-alive>时会出现各种问题

* meta : {
    roles: ['admin', 'editor']   设置该路由进入的权限，支持多个权限叠加
    title: 'title'               设置该路由在侧边栏和面包屑中展示的名字
    icon: 'svg-name'             设置该路由的图标
    noCache: true                如果设置为true，则不会被 <keep-alive> 缓存(默认 false)
    breadcrumb: false            如果设置为false，则不会在breadcrumb面包屑中显示
  }
**/

export const constantRouterMap = [
  { path: '/login', mark:'login', component: () => import('@/views/login/index'), hidden: true },
  { path: '/404', mark:'404', component: () => import('@/views/404'), hidden: true },
  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    name: '首页',
    mark:'home',
    hidden: true,
    children: [{
      path: 'dashboard',
      component: () => import('@/views/dashboard/index')
    }]
  },
]

/**
  这里的路由分为两种，constantRouterMap 和 asyncRouterMap。
  constantRouterMap： 代表那些不需要动态判断权限的路由，如登录页、404、等通用页面。
  asyncRouterMap： 代表那些需求动态判断权限并通过 addRoutes 动态添加的页面。
 */
export default new Router({
  // mode: 'history', //后端支持可开
  //设置跳转新页面的时候，页面滚动条在最顶部
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
})
