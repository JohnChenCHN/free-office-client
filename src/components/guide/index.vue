<template>
  <div class="page">
    <div class="company-manage">
      <div>
        <div class="TopHeadMenu enterpriseHead">
          <a href="javascript:void(0);" class="icon_logo_white">
            <img src="./img/zzp.png" class="logo">
          </a>
          <div class="menu">
            <router-link :to="{name:'talentIn'}" tag="a" class="item">人才入驻</router-link>
            <router-link :to="{name:'talentIn'}" tag="a" class="item">关于我们</router-link>
            <router-link :to="{name:'talentIn'}" tag="a" class="item">下载APP</router-link>
          </div>
        </div>
      </div>
      <div class="wrapper">
        <div class="layout-head">
          <div class="layout-head notop">
            <div class="logo-menu">
              <ul class="menu">
                <li class="menu-item"><span class="active">发现服务</span></li>
                <li class="menu-item"><span class="">订单管理</span></li>
                <li class="menu-item"><span class="">我的服务</span></li>
                <li class="menu-item"><span class="">工作合约</span></li>
              </ul>
            </div>
            <div class="move-btn">
              <router-link :to="{name:'companyLogin'}" tag="a" class="item">企业登录</router-link>
            </div>
          </div>
        </div>

        <div class="content-inner notop">
          <div class="discovery-container inner notop">
            <div class="top-container">
              <div class="top">
                <div class="logo">
                  <i class="chinese-logo iconfont iconxingzhuangjiehe"></i>
                  <i class="english-logo iconfont iconlanehublogo"></i>
                </div>
                <div class="tip">优质远程工作者，随需随用</div>
                <div class="search-container" style="width:5.96rem;">
                  <div class="search-left">
                    <div class="text">研发</div>
                    <div class="arrow-container">
                      <i class="iconfont arrow iconarrow_down_s"></i>
                    </div>
                  </div>
                  <div class="search-line"></div>
                  <div class="search-right"><i class="search-icon iconinput_search"></i></div>
                  <div class="popover-left">
                    <div class="popover-box">
                      <div class="popover-item selected">研发</div>
                      <div class="popover-item">设计</div>
                      <div class="popover-item">营销</div>
                      <div class="popover-item">产品</div>
                    </div>
                  </div>
                </div>
                <div class="hot-container">
                  <div>热门服务：</div>
                  <div class="hot-item">WEB开发</div>
                  <div class="hot-item">Java开发</div>
                  <div class="hot-item">海报banner设计</div>
                  <div class="hot-item">小程序开发</div>
                  <div class="hot-item">Vue开发</div>
                </div>
              </div>
            </div>
            <div class="category-container">
              <div class="category-list" id="category-list">
                <div class="category-item selected">
                  <div class="text">研发</div>
                  <img src="//static06.lanehub.cn/eplat/static/2020_09_09_06/img/category_indicator.311e4c4.png" class="bottom">
                </div>
                <div class="category-item">
                  <div class="line"></div>
                  <div class="text">设计</div>
                </div>
                <div class="category-item">
                  <div class="line"></div>
                  <div class="text">营销</div>
                </div>
                <div class="category-item">
                  <div class="line"></div>
                  <div class="text">产品</div>
                </div>
              </div>
              <div class="skill-container">
                <div class="skill-item">
                  <img src="https://access-wfile.lanehub.cn/32/70/44/92/21/fd13fc9fca19881c5852c3ef27ab868708e896ab6cd84ec06f7694c9.jpg" alt="" class="img">
                  <div class="center">
                    <div class="skill">WEB开发</div>
                    <div class="use-count">166 企业正在使用</div>
                    <div class="bottom">
                      <div class="price">¥12000</div>
                      <div class="tips">一周成交均价</div>
                    </div>
                  </div>
                  <img src="//static06.lanehub.cn/eplat/static/2020_09_09_05/img/ic_hot.bfdc3d9.png" alt="" class="hot">
                </div>
              </div>
              <div><div class="expand">查看更多</div></div>
            </div>
            <div class="ensure-container">
              <div class="ensure-list">
                <div class="ensure-item">
                  <img src="//static06.lanehub.cn/eplat/static/2020_09_09_05/img/home-recruit1.c0c73c8.png" class="img">
                  <div class="right">
                    <div class="title">7天无忧试用</div>
                    <div class="desc">瓴里对每个服务提供7天试用，不满意可以免费更换人才或退款</div>
                  </div>
                </div>
                <div class="ensure-item">
                  <img src="//static06.lanehub.cn/eplat/static/2020_09_09_05/img/home-recruit2.845083c.png" class="img">
                  <div class="right">
                    <div class="title">远程工作追踪</div>
                    <div class="desc">瓴里工作者在履约期间按天打卡并汇报工作交付，确保工作成果可被追踪。</div>
                  </div>
                </div>
                <div class="ensure-item">
                  <img src="//static06.lanehub.cn/eplat/static/2020_09_09_05/img/home-recruit3.3f22c6e.png" class="img">
                  <div class="right">
                    <div class="title">满意后付款</div>
                    <div class="desc">瓴里提供月结的付款方式，企业在工作者服务一个周期后才会付款</div>
                  </div>
                </div>
              </div>
            </div>
            <div class="top-talent-container">
              <div class="large-title">优质人才</div>
              <div class="top-category-container">
                <div class="top-category-item selected">研发 <div class="divider"></div></div>
                <div class="top-category-item">设计 <div class="divider"></div></div>
                <div class="top-category-item">营销 <div class="divider"></div></div>
                <div class="top-category-item">产品 <div class="divider"></div></div>
              </div>
              <div class="top-list">
                <div data-v-4b2df217="" class="top-item">
                  <img data-v-4b2df217="" src="https://avatar-wfile.lanehub.cn/31/12/44/79/53/e063ae25be7879924bf5b478653330cf6dfd5477e5dc95873a7e22d0.jpeg?x-oss-process=style%2Foriginal&amp;OSSAccessKeyId=LTAI6lVDL34UapL3&amp;Expires=1599650586&amp;Signature=j0WcPAW5P6Ns9xIMaQ9AIMr5Kt4%3D" alt="" class="avatar">
                  <div data-v-4b2df217="" class="bottom-container">
                    <div data-v-4b2df217="" class="name">王炳辰</div>
                    <div data-v-4b2df217="" class="exp">4年工作经验</div>
                    <div data-v-4b2df217="" class="active">20分钟内活跃</div>
                    <div data-v-4b2df217="" class="highlight">HTML、CSS、H5APP/JS、VUE、JQ、微信小程序、钉钉微应用、支付宝小程序、前端热门框架</div>
                  </div>
                </div>
              </div>
            </div>
            <div class="latest-container">
              <div class="large-title">最新成交</div>
              <div class="latest-list">
                <div class="latest-item">
                  <div class="img-box">
                    <img src="https://access-wfile.lanehub.cn/15/84/14/90/44/0eaca5f01183c580883e550fe2c356a4c4045c23de7c0ae2fd83a020.jpg" class="img">
                  </div>
                  <div class="latest-title">IT管理</div>
                  <div class="latest-tip">4天前</div>
                  <div class="latest-price">¥ 30000 /月</div></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'index',
    data () {
      return {
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
