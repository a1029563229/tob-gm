import Vue from 'vue'
import axios from 'axios'

import App from './App'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);
if (!process.env.IS_WEB) Vue.use(require('vue-electron'))
Vue.http = Vue.prototype.$http = axios
Vue.config.productionTip = false

let baseURL = "";
let origin = location.origin;

switch (true) {
  case !!(~location.origin.indexOf('dev')):
    baseURL = "https://backend-dev.codemao.cn/";
    break;
  case !!(~location.origin.indexOf('beta')):
    baseURL = "https://set09.dev-backend.codemao.cn/";
    break;
  case !!(~location.origin.indexOf('172.16.1.133')):
    baseURL = "https://backend-dev.codemao.cn/";
    break;
  case !!(~location.origin.indexOf('debug')):
    baseURL = "https://set14.dev-backend.codemao.cn/";
    break;
  case !!(~location.origin.indexOf('staging')):
    baseURL = "https://backend-test.codemao.cn/";
    break;
  case !!(~location.origin.indexOf('localhost')):
    baseURL = "https://backend-dev.codemao.cn/";
    break;
  default:
    baseURL = "https://api.codemao.cn/";
    break;
}
axios.defaults.baseURL = baseURL;
axios.defaults.withCredentials = true;

axios.interceptors.response.use((res) => {
  if (res.status != '200') {
    return Promise.reject(res);
  }

  return res.data;
}, (error) => {
  console.log(error);
  return Promise.reject(error.response.data);
});

Vue.prototype.$axios = axios;

import { handlerMixins } from './mixins/handler.mixins';

Vue.mixin(handlerMixins);

/* eslint-disable no-new */
new Vue({
  components: { App },
  router,
  store,
  template: '<App/>'
}).$mount('#app')
