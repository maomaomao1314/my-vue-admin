import Layout from '../views/layout/Layout'
const asyncRouterMap = [
    {
      path: '/business',
      component: Layout,
      redirect: '/business/project',
      name: '业务管理',
      mark:'business',
      meta: { title: '业务管理', icon: 'business' },
      children: [
        {
          path: 'project',
          name: '项目管理',
          mark:'project',
          component: () => import('@/views/business/project'),
          meta: { title: '项目管理', icon: 'project' }
        },
        {
          path: 'product',
          name: '产品管理',
          mark:'product',
          component: () => import('@/views/business/product'),
          meta: { title: '产品管理', icon: 'project' }
        }
      ]
    },
    {
      path: '/riskmodel',
      component: Layout,
      redirect: '/riskmodel/chargeoff',
      name: '监控管理',
      mark:'riskmodel',
      meta: { title: '监控管理', icon: 'business' },
      children: [
        {
          path: 'chargeoff',
          name: '用信管理',
          mark:'chargeoff',
          component: () => import('@/views/riskmodel/chargeoff'),
          meta: { title: '用信管理', icon: 'project' }
        },
        {
          path: 'afterLooading',
          name: '贷后预警',
          mark:'afterLooading',
          component: () => import('@/views/riskmodel/afterLooading'),
          meta: { title: '贷后预警', icon: 'tree' }
        }
      ]
    },
    {
      path: '/sysconfig',
      component: Layout,
      redirect: '/sysconfig/menusys',
      name: '系统管理',
      mark:'sysconfig',
      meta: { title: '系统管理', icon: 'sysconfig' },
      children: [
        {
          path: 'menusys',
          name: '菜单管理',
          mark:'menusys',
          component: () => import('@/views/sysconfig/menusys'),
          meta: { title: '菜单管理', icon: 'menusys' }
        },
        {
          path: 'databook',
          name: '字典管理',
          mark:'databook',
          component: () => import('@/views/sysconfig/databook'),
          meta: { title: '字典管理', icon: 'tree' }
        }
      ]
    },
    { path: '*', mark:'404', redirect: '/404', hidden: true }
  ]
export default asyncRouterMap