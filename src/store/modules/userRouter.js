import Layout from '@/views/layout/Layout'
import asyncRouterMap from '@/router/addrouters'

function filterAsyncRouter(asyncRouterMap,responseRouterMap){ //根据后台传过来的菜单列表来过滤页面上可以显示的菜单
  //第一个参数是系统定义的菜单列表，第二个是后台传过来改用户可以显示的菜单列表
  let routers = []
  routers = asyncRouterMap.filter(item => {
    if(responseRouterMap.includes(item.mark)){
      if(routers.children && routers.children.length){
        item.children = filterAsyncRouter(routers.children,responseRouterMap)
      }
      return true
    }else{
      return false
    }
  })
 
  return routers
}
const menu = {
  state:{
      addRouters : [] //这是根据后台传过来的菜单权限进行过滤过的菜单列表
  },
  mutations:{
      SET_ROUTERS:(state, routers) =>{
          state.addRouters = routers
      }
  },
  actions:{
      GenerationRoutes({ commit }, data){
          return new Promise(resolve => {
              let router = filterAsyncRouter(asyncRouterMap,data)
              commit('SET_ROUTERS',router)
              resolve()
          }, reject => {
              reject()
          })
      }
  }
}
export default menu