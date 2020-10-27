import Vue from 'vue'
import Router from 'vue-router'

// 对接指南
import guide from '@/components/guide/index'
import companyLogin from '@/components/companyLogin/index'
import talentIn from '@/components/talentIn/index'
import register from '@/components/register/index'
import job from '@/components/job/index'
import authentication from '@/components/authentication/index'

Vue.use(Router)

export default new Router({
  routes: [ //首页
    {
      path: '/',
      name: 'guide',
      component: guide
    },
    {
      path: '/talentIn', //人才入驻
      name:"talentIn",
      component: talentIn,
    },
    {
      path: '/companyLogin',  //企业入驻
      name:"companyLogin",
      component: companyLogin,
    },
    {
      path: '/register',  //注册
      name:"register",
      component: register,
    },
    {
      path: '/job',  //发布职位
      name:"job",
      component: job,
    },
    {
      path: '/authentication',  //企业认证
      name:"authentication",
      component: authentication,
    },
  ]
})
