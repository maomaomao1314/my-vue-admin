<template>
  <header>
    <div class="left">
      <img class="logo" src="@/assets/logo.png" height="60px" alt="logo">
    </div>
    <div class="right">
      <el-dropdown class="avatar-container" trigger="click">
      <div class="avatar-wrapper">
        <span>{{name}}</span>
        <i class="el-icon-caret-bottom"/>
        <screenfull></screenfull>
      </div>
      <el-dropdown-menu slot="dropdown" class="user-dropdown">
        <router-link class="inlineBlock" to="/">
          <el-dropdown-item>
            首页
          </el-dropdown-item>
        </router-link>
        <el-dropdown-item divided>
          <span style="display:block;" @click="logout">退出登陆</span>
        </el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
    </div>
  </header>
</template>

<script>
import { mapGetters } from 'vuex'
import Screenfull from '@/components/Screenfull'
export default {
  components:{
    Screenfull
  },
  computed: {
    ...mapGetters([
      'name'
    ])
  },
  methods:{
    logout() {
      this.$store.dispatch('LogOut').then(() => {
        location.reload() // 为了重新实例化vue-router对象 避免bug
      })
    }
  }
}
</script>
<style scoped>
  header {
    height:60px;
    display: flex;
    justify-content: space-between;
    padding:0 20px;
    background-color:cadetblue;
    color:white;
  }
    header *{
    color:white;
    font-size:16px;
  }
  header .left{
    display:flex;
  }
  
  header .right{
    line-height: 60px;
    font-size:14px;
  }
  header h1{
    margin:0;
    line-height:60px;
  }
  header .left .logo{
    margin:0 20px 0 0px;
  }
</style>

