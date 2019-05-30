<template>
  <div class="app-container project-contianer">
    <div class="filter-contianer">
      <div class="btn-left">
        <el-input @keyup.enter.native="handleFilter" placeholder="项目编码/名称" v-model="listQuery.project"></el-input>
        <el-input @keyup.enter.native="handleFilter" placeholder="机构编码/名称" v-model="listQuery.coreOrgCode"></el-input>
        <el-select @change="handleFilter" v-model="listQuery.enableFlag" placeholder="选择项目状态">
          <el-option v-for="item in enableFlagOptions" :key="item.key" :label="item.value" :value="item.key"></el-option>
        </el-select>
        <el-button type="primary" icon="el-icon-search" @click="handleFilter" title="搜索">搜索</el-button>
      </div>
      <div class="btn-right">
        <el-button type="primary" icon="el-icon-plus" @click="handleFilter" title="添加">添加</el-button>
      </div>
    </div>

    <el-table v-loading="listLoading" :data="list"  element-loading-text="Loading" border fit highlight-current-row>
      <el-table-column align="center" label="项目编码" width="95">
        <template slot-scope="scope">
          {{ scope.$index }}
        </template>
      </el-table-column>
      <el-table-column label="项目名称">
        <template slot-scope="scope">
          {{ scope.row.title }}
        </template>
      </el-table-column>
      <el-table-column label="卖方主体" width="110" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.author }}</span>
        </template>
      </el-table-column>
      <el-table-column label="Pageviews" width="110" align="center">
        <template slot-scope="scope">
          {{ scope.row.pageviews }}
        </template>
      </el-table-column>
      <el-table-column class-name="status-col" label="Status" width="110" align="center">
        <template slot-scope="scope">
          <el-tag :type="scope.row.status | statusFilter">{{ scope.row.status }}</el-tag>
        </template>
      </el-table-column>
      <el-table-column align="center" prop="created_at" label="Display_time" width="180">
        <template slot-scope="scope">
          <i class="el-icon-time"/>
          <span>{{ scope.row.display_time }}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" prop="created_at" label="操作" width="180">
        <template slot-scope="scope">
          <i class="el-icon-time"/>
          <span>{{ scope.row.display_time }}</span>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { getTableList } from '@/api/table'

export default {
  filters: {
    statusFilter(status) {
      const statusMap = {
        published: 'success',
        draft: 'gray',
        deleted: 'danger'
      }
      return statusMap[status]
    }
  },
  data() {
    return {
      listQuery:{},
      list: null,
      listLoading: true,
      enableFlagOptions:[]
    }
  },
  created() {
    this.fetchData()
    this.getEnableFlagOptions()
  },
  methods: {
    fetchData() {
      this.listLoading = true
      this.$HttpGet("/table/list").then(response => {
        this.list = response.data.items
        this.listLoading = false
      })
    },
    getEnableFlagOptions(){
      this.listLoading = true
      this.$HttpGet("/dic/enableFlagOptions").then(response => {
        this.enableFlagOptions = response.data
        this.listLoading = false
      })
    },
    handleFilter(){

    }
  }
}
</script>
