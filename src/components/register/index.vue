<template>
  <div class="page">
    <div class="enterprise-register-father view">
      <div class="layout-head">
        <div class="logo-menu">
          <div class="yuanling_logo default">宅职聘</div>
        </div>
        <div class="quit-box">
          <div class="popover-btn">用户{{admin}}<a-icon type="caret-down" style="color: #999;"/></div>
          <div class="quit">退出登录</div>
        </div>
      </div>
      <div class="bannber"></div>
      <div class="step-tabs">
        <div class="tab-pane tab-pane1">
          <div class="step-num step-active"><span>1</span></div>
          <div class="step-text">完善个人信息</div>
        </div>
        <div class="tab-line"></div>
        <div class="tab-pane tab-pane2">
          <div :class="[isShow ? 'step-num':'step-num step-active']"><span>2</span></div>
          <div class="step-text">确认公司信息</div>
        </div>
      </div>
      <div class="register-person-data" v-if="isShow">
        <div class="person-data-body">
          <a-form :form="form">
            <a-form-item
              :label-col="formItemLayout.labelCol"
              :wrapper-col="formItemLayout.wrapperCol"
              label="账号"
            >
              <a-input
                v-decorator="[
          'account',
          { rules: [{ required: true, message: '请输入账号' }] },
        ]"
                placeholder="请输入账号"
              />
            </a-form-item>
            <a-form-item
              :label-col="formItemLayout.labelCol"
              :wrapper-col="formItemLayout.wrapperCol"
              label="密码"
            >
              <a-input
                v-decorator="[
          'passWord',
          { rules: [{ required: true, message: '请输入密码' }] },
        ]"
                placeholder="请输入密码"
              />
            </a-form-item>
            <a-form-item
              :label-col="formItemLayout.labelCol"
              :wrapper-col="formItemLayout.wrapperCol"
              label="公司全称"
            >
              <a-input
                v-decorator="[
          'companyName',
          { rules: [{ required: true, message: '请输入公司名称' }] },
        ]"
                placeholder="请输入公司名称"
              />
            </a-form-item>
            <a-form-item :label-col="formTailLayout.labelCol" :wrapper-col="formTailLayout.wrapperCol">
              <a-button type="primary" @click="check">
                下一步
              </a-button>
            </a-form-item>
          </a-form>
        </div>
      </div>
      <div class="register-company-data" v-else>
        <div class="company-data-body">

          <a-form :form="form">
            <a-form-item
              :label-col="formItemLayout.labelCol"
              :wrapper-col="formItemLayout.wrapperCol"
              label="公司全称"
            >
<!--              <a-input-->
<!--                disabled-->
<!--                v-decorator="[-->
<!--          'companyNameInfo',-->
<!--          { rules: [{ required: true, message: '' }] },-->
<!--        ]"-->
<!--                placeholder="公司全称"-->
<!--              />-->
              <a-input
                v-decorator="[
          'companyNameInfo',
          { rules: [{ required: true, message: '' }] },
        ]"
                placeholder="公司全称"
              />
            </a-form-item>
            <a-form-item
              :label-col="formItemLayout.labelCol"
              :wrapper-col="formItemLayout.wrapperCol"
              label="公司简称"
            >
              <a-input
                v-decorator="[
          'companyShort',
          { rules: [{ required: true, message: '请输入公司简称' }] },
        ]"
                placeholder="公司简称"
              />
            </a-form-item>
            <a-form-item
              :label-col="formItemLayout.labelCol"
              :wrapper-col="formItemLayout.wrapperCol"
              label="所属行业"
            >
              <a-input
                @click="showModal"
                readonly="readonly"
                v-decorator="[
          'industry',
          { rules: [{ required: true, message: '请选择所属行业' }] },
        ]"
                placeholder="所属行业"
              />
              <a-modal
                title="Title"
                width="893px"
                :visible="visible"
                :confirm-loading="confirmLoading"
                @ok="handleOk"
                @cancel="handleCancel"
              >
                <div class="industry-panel" style="width: 845px; height: 490px; overflow-y: auto;">
                  <div class="list">
                    <div class="item" style="display: flex; align-items: center;">
                      <div class="level1-name" style="padding: 15px 20px 5px;width: 160px;font-size: 14px;flex: none;box-sizing: content-box;">广告/传媒/文化/体育</div>
                      <div class="level2-content" style="padding: 15px 20px 5px;border-left: 1px solid #f5f6f9;flex-grow: 1;">
                        <p @click="selVocation('广告/公关/会展')" style=" display: inline-block;white-space: nowrap; width: 32%; overflow: hidden;cursor: pointer;">广告/公关/会展</p>
                        <p style=" display: inline-block;white-space: nowrap; width: 32%; overflow: hidden;cursor: pointer;">新闻/出版</p>
                        <p style=" display: inline-block;white-space: nowrap; width: 32%; overflow: hidden;cursor: pointer;">广播/影视</p>
                        <p style=" display: inline-block;white-space: nowrap; width: 32%; overflow: hidden;cursor: pointer;">文化/体育/娱乐</p>
                      </div>
                    </div>
                  </div>
                </div>
              </a-modal>
            </a-form-item>
            <a-form-item
              :label-col="formItemLayout.labelCol"
              :wrapper-col="formItemLayout.wrapperCol"
              label="问题1"
            >
              <p class="radioPrompt">公司目前的人员规模</p>
              <a-radio-group v-decorator="['radioSelValue']" @change="onChange">
                <a-radio :style="radioStyle" value="少于50人">
                  少于50人
                </a-radio>
                <a-radio :style="radioStyle" value="51-100">
                  51-100
                </a-radio>
                <a-radio :style="radioStyle" value="101-500">
                  101-500
                </a-radio>
                <a-radio :style="radioStyle" value="500人以上">
                  500人以上
                </a-radio>
              </a-radio-group>
            </a-form-item>
            <a-form-item
              :label-col="formItemLayout.labelCol"
              :wrapper-col="formItemLayout.wrapperCol"
              label="问题2"
            >
              <p class="radioPrompt">是否有过远程用工经验</p>
              <a-radio-group v-decorator="['TelnetValue']" @change="onChange">
                <a-radio :style="radioStyle" value="从未尝试过">
                  从未尝试过
                </a-radio>
                <a-radio :style="radioStyle" value="有尝试过">
                  有尝试过
                </a-radio>
                <a-radio :style="radioStyle" value="公司正在使用远程员工">
                  公司正在使用远程员工
                </a-radio>
              </a-radio-group>
            </a-form-item>
            <a-form-item
              :label-col="formItemLayout.labelCol"
              :wrapper-col="formItemLayout.wrapperCol"
              label="问题3"
            >
              <p class="radioPrompt">你认为远程员工在公司中的理想占比是多少</p>
              <a-radio-group v-decorator="['proportionValue']" @change="onChange">
                <a-radio :style="radioStyle" value="10%以下">
                  10%以下
                </a-radio>
                <a-radio :style="radioStyle" value="10%-20%">
                  10%-20%
                </a-radio>
                <a-radio :style="radioStyle" value="20-50%">
                  20-50%
                </a-radio>
                <a-radio :style="radioStyle" value="50%以上">
                  50%以上
                </a-radio>
              </a-radio-group>
            </a-form-item>
            <a-form-item
              :label-col="formItemLayout.labelCol"
              :wrapper-col="formItemLayout.wrapperCol"
              label="问题4"
            >
              <p class="radioPrompt">你认为灵活远程用工带来的最大收益是</p>
              <a-radio-group v-decorator="['revenueValue']" @change="onChange">
                <a-radio :style="radioStyle" value="不受地域限制来雇佣员工">
                  不受地域限制来雇佣员工
                </a-radio>
                <a-radio :style="radioStyle" value="人员雇佣成本更为灵活">
                  人员雇佣成本更为灵活
                </a-radio>
                <a-radio :style="radioStyle" value="可根据业务需求量调整">
                  可根据业务需求量调整
                </a-radio>
                <a-radio :style="radioStyle" value="远程协作更为高效便捷">
                  远程协作更为高效便捷
                </a-radio>
              </a-radio-group>
            </a-form-item>
            <a-form-item
              :label-col="formItemLayout.labelCol"
              :wrapper-col="formItemLayout.wrapperCol"
              label="问题5"
            >
              <p class="radioPrompt">你有哪些职位希望可以实现远程办公</p>

              <a-input
                v-decorator="[
          'jobInfo',
          { rules: [{ required: true, message: '请填写需要远程办公的职位' }] },
        ]"
                placeholder="你有哪些职位希望可以实现远程办公"
              />
            </a-form-item>

            <a-form-item :label-col="formTailLayout.labelCol" :wrapper-col="formTailLayout.wrapperCol">
              <a-button type="primary" @click="confirmedIn">
                确认入驻
              </a-button>
              <a-button type="link" @click="lastStep">
                返回上一步
              </a-button>
            </a-form-item>
          </a-form>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { Modal } from 'ant-design-vue';
  const formItemLayout = {
    labelCol: { span: 4 },
    wrapperCol: { span: 20 },
  };
  const formTailLayout = {
    labelCol: { span: 4 },
    wrapperCol: { span: 8, offset: 4 },
  };
  export default {
    name: 'register',
    data () {
      return {
        admin:"",
        account:"",
        checkNick: false,
        formItemLayout,
        formTailLayout,
        form: this.$form.createForm(this, { name: 'dynamic_rule' }),
        isShow: true,
        radioStyle: {
          display: 'block',
          height: '30px',
          lineHeight: '30px',
        },
        //模态框字段
        visible: false,
        confirmLoading: false,
        selVocationValue: '', //选择的行业
      }
    },
    created: function () {
      // console.log(this.$route.query)
      let _data = this.$route.query
      this.admin = _data.admin;
    },
    mounted:function(){
      this.setDefaultValue()
    },
    methods:{
      // 下一步
      check() {
        this.form.validateFields((errors, values) => {
          console.log(values);
          if (!errors) {
            let _companyName = values.companyName
            console.info('success');
            console.log(values);
            this.isShow = false

            setTimeout(() => {
              this.form.setFieldsValue({ // form表单赋值
                companyNameInfo: _companyName
              })
              this.setDefaultValue()
            }, 10);
          }
        });
      },
      // radio赋值默认值
      setDefaultValue(){
        this.form.setFieldsValue({ // form表单赋值
          TelnetValue: "从未尝试过",
          revenueValue:"不受地域限制来雇佣员工",
          radioSelValue:"少于50人",
          proportionValue:"10%以下"
        })
      },
      // 确认入驻
      confirmedIn(){
        console.log("确认入驻")
        let _this = this;
        this.form.validateFields((errors, values) => {
          console.log(values);
          if (!errors) {
            console.info('success');
            console.log(values);
            _this.isShow = false;
            let _company = values.companyNameInfo
            Modal.success({
                title: '入驻成功，去发布您的第一个招聘信息吧~',
                onOk() {
                  _this.$router.push({name:'job',query: {company:_company}})
                },
            })
          }
        });
      },
      // 返回上一步
      lastStep(){
        this.isShow = true
      },
      onChange(e) {
        console.log('radio checked', e.target.value);
      },
      //模态框方法
      showModal() {
        this.visible = true;
      },
      handleOk(e) {
        console.log(e)
        // this.confirmLoading = true;

        this.visible = false;
        this.confirmLoading = false;
        this.form.setFieldsValue({ // form表单赋值
          industry: this.selVocationValue
        })

      },
      handleCancel(e) {
        console.log('Clicked cancel button');
        this.visible = false;
      },
      selVocation(e) {
        this.selVocationValue = e;
      }
      // axios({
      //   method:'post',
      //   url:'http://140.143.60.140:3388/company/register',
      //   data:{
      //     admin:_this.account,
      //     password:_this.pass,
      //     company:_this.pass,
      //   },
      // }).then((res)=>{
      //   console.log(res);
      // });
    },
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  .enterprise-register-father {
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: #fff;
    .bannber{
      width: 100%;
      height: 200px;
      background: url(//static06.yuanling.com/eplat/static/2020_10_19_01/img/register-banner.fe19fbf.png) no-repeat;
      background-size: cover;
      line-height: 200px;
      text-align: center;
      font-size: 36px;
      font-weight: 600;
      color: #ffffff;
    }
    .layout-head {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      height: 64px;
      padding: 0 48px;
      box-sizing: border-box;
      background: #fff;
      box-shadow: 0 0 6px 0 rgba(0,0,0,.06);
      .logo-menu{
        display: flex;
        align-items: center;
        .yuanling_logo{
          &.default{
            color: #000;
          }
        }
      }
      .quit-box{
        position: relative;
        height: 40px;
        line-height: 40px;
        .popover-btn {
          font-size: 14px;
          color: #333;
          cursor: pointer;
        }
        .quit {
          display: none;
          position: absolute;
          right: 6px;
          width: 80px;
          height: 44px;
          line-height: 44px;
          text-align: center;
          background: #fff;
          box-shadow: 0 1px 8px 0 rgba(0,0,0,.1);
          border-radius: 4px;
          font-size: 14px;
          color: #333;
          cursor: pointer;
        }
      }
    }
    .banner{
      width: 100%;
      height: 200px;
      background: url(//static06.yuanling.com/eplat/static/2020_10_12_02/img/register-banner.fe19fbf.png) no-repeat;
      background-size: cover;
      line-height: 200px;
      text-align: center;
      font-size: 36px;
      font-weight: 600;
      color: #fff;
    }
    .step-tabs {
      display: flex;
      align-items: flex-start;
      height: 73px;
      margin: 56px 0;
      .tab-pane {
        position: relative;
        .step-text {
          position: absolute;
          left: 50%;
          top: 52px;
          transform: translateX(-50%);
          width: 90px;
          font-size: 15px;
          color: #666;
        }
      .step-num{
        width: 40px;
        height: 40px;
        line-height: 40px;
        text-align: center;
        border-radius: 50%;
        font-size: 24px;
        font-weight: 500;
      }
      }
      .tab-pane1 .step-num {
          background: #e0e5ff;
          color: #3c58f2;
      }
      .tab-pane1 .step-active{
        background: #3c58f2;
        color: #fff;
      }
      .tab-line {
        width: 262px;
        height: 1px;
        margin: 20px 8px 0;
        background: #d9d9d9;
      }
      .tab-pane2 .step-num {
        background: #f7f7f7;
        color: #595959;
      }
      .tab-pane2 .step-active{
        background: #3c58f2;
        color: #fff;
      }
    }
    .register-person-data {
      display: flex;
      align-items: flex-start;
      justify-content: center;
      .person-data-body{
        width: 545px;
      }
    }
    .register-company-data {
      display: flex;
      align-items: flex-start;
      justify-content: center;
      .company-data-body{
        width: 595px;
      }
      .industry-panel{
        height: 490px;
        overflow-y: auto;
        .item{
          display: flex;
          align-items: center;
          &:nth-child(odd){
            background-color: #f9fafb;
          }
          .level1-name{
            padding: 15px 20px 5px;
            width: 160px;
            font-size: 14px;
            flex: none;
            box-sizing: content-box;
          }
          .level2-content {
            padding: 15px 20px 5px;
            border-left: 1px solid #f5f6f9;
            flex-grow: 1;
          }
          p {
            display: inline-block;
            white-space: nowrap;
            width: 32%;
            overflow: hidden;
            cursor: pointer;
            span:hover {
              color: #00c2b3;
            }
          }
        }
      }
    }

  }
</style>
