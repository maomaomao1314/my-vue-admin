<template>
  <div class="app-container project-contianer">
    <div class="filter-contianer">
      <div class="btn-left">
        <el-input @keyup.enter.native="handleFilter" placeholder="菜单名称" v-model="listQuery.menuname"></el-input>
        <el-button type="primary" icon="el-icon-search" @click="handleFilter" title="搜索">搜索</el-button>
      </div>
      <div class="btn-right">
        <el-button type="primary" icon="el-icon-plus" @click="handleFilter" title="添加">添加</el-button>
      </div>
    </div>

    <el-table v-loading="listLoading" :data="list" :row-style="showTr" :default-sort = "{prop: 'sortnum', order: 'ascending'}"  element-loading-text="Loading" border fit highlight-current-row>
      <el-table-column align="center" label="#" width="55">
        <template slot-scope="scope">
          <span v-if="scope.row.expanded" @click="troggleMenu(scope.row)">
            <i v-if=" scope.row.expandstatus" class="el-icon-caret-bottom"></i>
            <i v-else class="el-icon-caret-right"></i>
          </span>
        </template>
      </el-table-column>
      <el-table-column header-align="center" align="left" label="菜单名称">
        <template slot-scope="scope"  prop="name">
          {{ scope.row.name }}
        </template>
      </el-table-column>
      <el-table-column label="上级菜单"  header-align="center" align="left">
        <template slot-scope="scope" prop="parentname">
          {{ scope.row.parentname }}
        </template>
      </el-table-column>
      <el-table-column label="路径"  header-align="center" align="left">
        <template slot-scope="scope"  prop="url">
          <span>{{ scope.row.url }}</span>
        </template>
      </el-table-column>
      <el-table-column label="节点"  header-align="center" align="left">
        <template slot-scope="scope" prop="path">
          {{ scope.row.path }}
        </template>
      </el-table-column>
      <el-table-column class-name="status-col" label="权限标识" width="100" header-align="center" align="center">
        <template slot-scope="scope" prop="type">
          <el-tag :type="scope.row.type | statusFilter">{{ scope.row.type }}</el-tag>
        </template>
      </el-table-column>
      <el-table-column prop="sortnum" label="排序"  width="100"> </el-table-column>
      <el-table-column fixed="right" label="操作" width="100" align="center">
        <template slot-scope="scope">
            <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
            <el-button type="text" size="small">编辑</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  filters: {
    statusFilter(status) {
      const statusMap = {
        menu: 'success',
        button: 'warning'
      }
      return statusMap[status]
    }
  },
  data() {
    return {
      listQuery:{},
      list: [],
      listLoading: true
    }
  },
  created() {
    this.getList()
  },
  methods: {
    getList() {
      this.listLoading = true
      this.$HttpGet("/menu/getmenu").then(response => {
        response.data.forEach(item=>{
          item.expandstatus = false //表示当前行的子元素状态是展开还是关闭
          item.ownstatus = item.rank == 1 ? true : false //表示当前本行是隐藏还是显示的
        })
        this.list = response.data
        this.listLoading = false
        
      })
    },
    handleFilter(){

    },
    handleClick(){

    },
    troggleMenu(row){//点击展开和关闭按钮
      row.expandstatus = !row.expandstatus //点击展开和关闭按钮
      let nowTrIndex = this.list.forEach(item=>{
        if(item.parentId == row.id){
           item.ownstatus = row.expandstatus
        }
      })
     
    },
    showTr({row, rowIndex}){
      let parentTrIndex = this.list.findIndex(item=>{
        return item.id == row.parentId
      })
      let show = true
      if( parentTrIndex >-1 ){
        show =  row.rank - this.list[parentTrIndex].rank <= 1 ? this.list[parentTrIndex].expandstatus : row.ownstatus
      }
      return show ? '' : 'display:none;'
    }
  }
}
</script>
