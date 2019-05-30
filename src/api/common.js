import request from '@/utils/request'
import Vue from 'vue';
Vue.prototype.$HttpGet = function(url){
    return request({
      url: url,
      method: 'get'
    })
}