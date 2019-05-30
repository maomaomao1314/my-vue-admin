import { param2Obj } from './utils'
const items = [
  //一级菜单
  { id: '10000', name: '业务管理', parentId: '00000', type: 'menu', path:'business', url: '/business', expanded: true, sortnum: '10000', rank: 1 },
  { id: '20000', name: '监控预警', parentId: '00000', type: 'menu', path:'riskmodel', url: '/riskmodel', expanded: true, sortnum: '20000', rank: 1 },
  { id: '30000', name: '系统管理', parentId: '00000', type: 'menu', path:'sysconfig', url: '/sysconfig', expanded: true, sortnum: '30000', rank: 1 },
  //二级菜单
  { id: '11000', name: '项目管理', parentId: '10000', type: 'menu', path:'project', url: '/business/project', expanded: false, sortnum: '11000', rank: 2 },
  { id: '12000', name: '产品管理', parentId: '10000', type: 'menu', path:'product', url: '/business/product', expanded: false, sortnum: '12000', rank: 2 },
  //二级菜单
  { id: '21000', name: '用信管理', parentId: '20000', type: 'menu', path:'chargeoff', url: '/riskmodel/chargeoff', expanded: false, sortnum: '21000', rank: 2 },
  { id: '22000', name: '贷后预警', parentId: '20000', type: 'menu', path:'afterLooading', url: '/riskmodel/afterLooading', expanded: false, sortnum: '22000', rank: 2 },
  //二级菜单
  { id: '31000', name: '菜单管理', parentId: '30000', type: 'menu', path:'menu', url: '/sysconfig/menu', expanded: false, sortnum: '31000', rank: 2 },
  { id: '32000', name: '字典管理', parentId: '30000', type: 'menu', path:'databook', url: '/sysconfig/databook', expanded: false, sortnum: '32000', rank: 2 },

]
export default {

  getmenu: () => {
    var menu = items.map(item => {
      let patentitem = items.find(it =>{
        return it.id == item.parentId
      })
      if(patentitem){
        item.parentname = patentitem.name
      }else{
        item.parentname = ''
      }
      return item 
    })
    return {
      code: 20000,
      data: menu
    }
  }
}
