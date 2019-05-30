import Vue from 'vue'
import Vuex from 'vuex'
import app from './modules/app'
import userRouter from './modules/userRouter'
import user from './modules/user'
import getters from './getters'
Vue.use(Vuex)
const store = new Vuex.Store({
  modules: {
    app,
    user,
    userRouter
  },
  getters
})

export default store
