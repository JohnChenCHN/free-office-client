<template>
  <div class="page">
    <div class="enterprise_main_login">
      <div class="enterprise_inner">
        <div class="enterprise-login">
          <div class="label">企业登录注册</div>
          <div class="form">
            <div class="telarea">
              <input placeholder="账号" v-model="account" value="" class="custom-input-2 tel">
            </div>
            <div class="error" v-show="showAccountPrompt">请输入账号</div>
            <div class="codearea">
              <input placeholder="密码" v-model="pass" value="" class="custom-input-2 tel">
            </div>
            <div class="error" v-show="showPassPrompt">请输入密码</div>
            <div class="btn" @click="login">手机登录注册</div>
            <!--                    <div class="qrcode-login">微信快捷登录</div>-->
            <div class="bottom">
              创建账号即代表我已同意
              <a href="" class="highlight">隐私协议</a> 和
              <a href="" class="highlight">用户协议</a></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'talentIn',
    data () {
      return {
        account: "",
        pass: "",
        showAccountPrompt: false,
        showPassPrompt: false,
      }
    },
    methods:{
      login:function(){
        const axios = require('axios');
        let _this = this
        if(_this.account == ""){
          _this.showAccountPrompt = true;
          return
        }
        if(_this.pass == ""){
          _this.showPassPrompt = true;
          return
        }
        // this.$router.push({name:'register',query: {admin:_this.account,password:_this.pass}})
        axios({
          method:'post',
          url:'/api/company/login',
          data:{
            admin:_this.account,
            password:_this.pass
          },
        }).then((res)=>{
          console.log(res);
          if(res.data.success){
            this.$router.push({name:'register',query: {admin:_this.account,password:_this.pass}})
          }else{
            this.$message.error(res.data.message);
          }
        });
      }
    },
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  .TopHeadMenu {
    height: 0.64rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: 0 0.48rem;
    box-sizing: border-box;
    top: 0;
    .aboutus_logo {
      color: #282828;
      display: flex;
      align-items: center;
      .logo {
        font-size: 0.32rem;
        margin-right: 0.12rem
      }
      .clogo {
        font-size: 0.2rem
      }
    }
    .menu {
      display: flex;
      align-items: center;
      .item {
        font-size: 0.14rem;
        line-height: 0.2rem;
        margin-left: 0.4rem;
        cursor: pointer;
        &:hover {
          color: #6984ff
        }
      }
    }
    .icon_logo_cn_black img {
      width: 1.55rem
    }
    .icon_logo_white {
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      .logo {
        width: 0.8rem;
        margin-right: 12px
      }
    }
  }
</style>
