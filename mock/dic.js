import { param2Obj } from './utils'
export default {
  enableFlagOptions: () => {
    const items = [
      {key:'-1',value:'全部'},
      {key:'0',value:'禁用'},
      {key:'1',value:'启用'}
    ]
    return {
      code: 20000,
      data: items
    }
  }
}
