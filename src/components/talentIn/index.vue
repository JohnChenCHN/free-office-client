<template>
  <div class="page">
    <div class="register-talent">
      <div class="homebg" style="background-image:url(https://static06.lanehub.cn/plyr/flance/mobile/wximages/home/home_bg_3.png);">
        <div class="bgcolor">
          <a href="./index.html" class="logo"><img src="./img/zzp.png" alt=""></a>
          <div class="wxlogin">
            <div class="registertips">随时随地，自由工作</div>
            <div class="form">
              <div class="item" style="margin-bottom:24px">
                <div class="value">
                  <div class="special-input el-input">
                    <input type="text" autocomplete="off" placeholder="手机号码" class="el-input__inner">

                  </div>
                </div>
              </div>
              <div class="item">
                <div class="value">
                  <div class="el-input special-input">
                    <input type="text" autocomplete="off" placeholder="验证码" class="el-input__inner">
                  </div>
                </div>
              </div>
            </div>
            <button class="phonelogin">登录</button>
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
        msg: '121'
      }
    },
    methods:{

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
