// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import '../base/common.css'
import './assets/icon/iconfont.css'
import axios from 'axios'
import 'ant-design-vue/dist/antd.css';
import { Button} from 'ant-design-vue';
import { Icon} from 'ant-design-vue';
import { Form} from 'ant-design-vue';
import { Input} from 'ant-design-vue';
import { Radio} from 'ant-design-vue';
import { Modal} from 'ant-design-vue';
import { Popconfirm} from 'ant-design-vue';
import { TreeSelect} from 'ant-design-vue';
import { Select} from 'ant-design-vue';
import { Cascader} from 'ant-design-vue';
import { Checkbox} from 'ant-design-vue';
import { DatePicker} from 'ant-design-vue';
import { Row} from 'ant-design-vue';
import { Col} from 'ant-design-vue';
import { Divider} from 'ant-design-vue';
import { Alert} from 'ant-design-vue';
import { Upload} from 'ant-design-vue';

Vue.use(Button);
Vue.use(Icon);
Vue.use(Form);
Vue.use(Input);
Vue.use(Radio);
Vue.use(Modal);
Vue.use(Popconfirm);
Vue.use(TreeSelect);
Vue.use(Select);
Vue.use(Cascader);
Vue.use(Checkbox);
Vue.use(DatePicker);
Vue.use(Row);
Vue.use(Col);
Vue.use(Divider);
Vue.use(Alert);
Vue.use(Upload);
import { message } from 'ant-design-vue'
Vue.prototype.$message = message;

Vue.prototype.$axios = axios
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
import Router from 'vue-router'

const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

Vue.prototype.Format = function (fmt) {
  var o = {
    "M+": this.getMonth() + 1, //月份
    "d+": this.getDate(), //日
    "h+": this.getHours(), //小时
    "m+": this.getMinutes(), //分
    "s+": this.getSeconds(), //秒
    "q+": Math.floor((this.getMonth() + 3) / 3), //季度
    "S": this.getMilliseconds() //毫秒
  };
  if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
  for (var k in o)
    if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
  return fmt;
}

Date.prototype.Format = function (fmt) {
  var o = {
    "M+": this.getMonth() + 1, //月份
    "d+": this.getDate(), //日
    "h+": this.getHours(), //小时
    "m+": this.getMinutes(), //分
    "s+": this.getSeconds(), //秒
    "q+": Math.floor((this.getMonth() + 3) / 3), //季度
    "S": this.getMilliseconds() //毫秒
  };
  if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
  for (var k in o)
    if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
  return fmt;
}


