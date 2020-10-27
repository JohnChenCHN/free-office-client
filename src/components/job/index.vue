<template>
  <div class="page">
    <div class="single-conatainer">
      <div>
        <div class="first-job-publish">
          <div class="header-container">
            <div class="inner">
              <div class="logo">
                <img src="./img/zzp.png" alt="">
              </div>
              <div class="top-user">
                <a-popconfirm placement="bottom" ok-text="Yes" cancel-text="No" @confirm="confirm">
                  <template slot="title">
                    退出登录
                  </template>
                  <a-button>李小星</a-button>
                </a-popconfirm>
              </div>
            </div>
          </div>
          <div class="content-container">
            <div class="inner-container">
              <div class="job-publish-container">
                <div class="job-manage-container">
                  <div class="job-edit-container">
                    <div class="title-container base-info">
                      <div class="title">基本职业信息</div>
                      <p class="gray">加 * 内容，在确认发布成功后，将无法修改</p>
                    </div>
                    <a-form :form="form">
                      <a-form-item
                        :label-col="formItemLayout.labelCol"
                        :wrapper-col="formItemLayout.wrapperCol"
                        label="公司名称"
                      >
                        <span>{{company}}</span>
                      </a-form-item>
                      <a-form-item
                        :label-col="formItemLayout.labelCol"
                        :wrapper-col="formItemLayout.wrapperCol"
                        label="招聘类型"
                      >
                        <a-select v-decorator="[
          'recruitmentType',
          { rules: [{ required: true, message: '请选择招聘类型' }] },
        ]"  placeholder="请选择招聘类型" @change="handleChangeRecruitmentType" style="width: 100%;">
                          <a-select-option value="兼职招聘">
                            兼职招聘
                          </a-select-option>
                          <a-select-option value="社招">
                            社招
                          </a-select-option>
                        </a-select>
                      </a-form-item>
                      <a-form-item
                        :label-col="formItemLayout.labelCol"
                        :wrapper-col="formItemLayout.wrapperCol"
                        label="职位名称"
                      >
                        <a-input
                          v-decorator="[
          'jobName',
          { rules: [{ required: true, message: '请输入职位名称' }] },
        ]"
                          placeholder="职位名称"
                        />
                      </a-form-item>
                      <a-form-item
                        :label-col="formItemLayout.labelCol"
                        :wrapper-col="formItemLayout.wrapperCol"
                        label="工作城市"
                      >
                        <a-cascader v-decorator="[
          'workCity',
          { rules: [{ required: true, message: '请选择工作城市' }] },
        ]" :options="selAddress" placeholder="请选择工作城市" />
                      </a-form-item>
                      <a-form-item
                        :label-col="formItemLayout.labelCol"
                        :wrapper-col="formItemLayout.wrapperCol"
                        label="工作地点"
                      >
                        <a-input
                          v-decorator="[
          'jobLocal',
          { rules: [{ required: true, message: '请输入工作地点' }] },
        ]"
                          placeholder="具体的街道门牌号地址"
                        />
                      </a-form-item>
                    </a-form>
                    <div class="title-container requirements-info">
                      <h3 class="title">职位要求</h3>
                      <p class="gray">我们将通过以下条件，为您精确推荐合适的牛人，请尽量详细填写</p>
                    </div>
                    <a-form :form="form">
                      <a-form-item
                        :label-col="formItemLayout.labelCol"
                        :wrapper-col="formItemLayout.wrapperCol"
                        label="经验和学历"
                      >
                        <a-select default-value="选择经验" @change="experienceFun" style="width: 150px;margin-right:15px;">
                          <a-select-option v-for="experience in experienceData" :key="experience">
                            {{experience}}
                          </a-select-option>
                        </a-select>
                        <a-select default-value="不限" @change="educationFun" style="width: 150px">
                          <a-select-option v-for="education in educationData" :key="education">
                            {{education}}
                          </a-select-option>
                        </a-select>
                      </a-form-item>
                      <div v-if="isPartTimeJob">
                        <a-form-item
                          :label-col="formItemLayout.labelCol"
                          :wrapper-col="formItemLayout.wrapperCol"
                          label="工作日"
                        >
                          <a-checkbox-group @change="workdayFun" style="width: 100%;margin-top: 9px;">
                            <a-row>
                              <a-col :span="3" v-for="workDay in workDayData" :key="workDay">
                                <a-checkbox :value="workDay">
                                  {{workDay}}
                                </a-checkbox>
                              </a-col>
                            </a-row>
                          </a-checkbox-group>
                        </a-form-item>
                        <a-form-item
                          :label-col="formItemLayout.labelCol"
                          :wrapper-col="formItemLayout.wrapperCol"
                          label="结算方式"
                        >
                          <a-select default-value="日结" @change="payTypeFun" style="width: 150px;margin-right:15px;">
                            <a-select-option value="日结">
                              日结
                            </a-select-option>
                            <a-select-option value="月结">
                              月结
                            </a-select-option>
                            <a-select-option value="周结">
                              周结
                            </a-select-option>
                            <a-select-option value="完工结">
                              完工结
                            </a-select-option>
                          </a-select>
                        </a-form-item>
                        <a-form-item
                          :label-col="formItemLayout.labelCol"
                          :wrapper-col="formItemLayout.wrapperCol"
                          label="招聘截止时间"
                        >
                          <a-date-picker @change="RecruitmentDeadlineFun"
                            format="YYYY-MM-DD"
                            :disabled-date="disabledDate"
                          />
                        </a-form-item>
                      </div>
                      <a-form-item
                        :label-col="formItemLayout.labelCol"
                        :wrapper-col="formItemLayout.wrapperCol"
                        label="薪资范围"
                      >
                        <a-select default-value="最低" @change="SalaryRangeFun" style="width: 150px;margin-right:15px;">
                          <a-select-option v-for="salaryRange in salaryRangeData" :key="salaryRange">
                            {{salaryRange}}
                          </a-select-option>
                        </a-select>
                      </a-form-item>
                      <a-form-item
                        :label-col="formItemLayout.labelCol"
                        :wrapper-col="formItemLayout.wrapperCol"
                        label="职位描述"
                      >
                        <a-textarea
                          v-model="describeVal"
                          placeholder="1.工作内容
2.任职要求
3.特别说明"
                          :auto-size="{ minRows: 5, maxRows: 8 }"
                        />
                      </a-form-item>
                      <a-form-item
                        :label-col="formItemLayout.labelCol"
                        :wrapper-col="formItemLayout.wrapperCol"
                        label="职位类型"
                      >
                        <a-input
                          readonly="readOnly"
                          @click="showModal"
                          v-decorator="[
          'jobType',
          { rules: [{ required: true, message: '选择职位类型' }] },
        ]"
                          placeholder="选择职位类型"
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
                                  <p style=" display: inline-block;white-space: nowrap; width: 32%; overflow: hidden;cursor: pointer;">
                                    <span @click="selVocation('广告/公关/会展')" style="color:#5dd5c8;">广告/公关/会展</span>
                                  </p>
                                  <p style=" display: inline-block;white-space: nowrap; width: 32%; overflow: hidden;cursor: pointer;">
                                    <span>广告/公关/会展</span>
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </a-modal>
                      </a-form-item>
                    </a-form>
                  </div>
                </div>
                <div class="btns">
                  <a-button type="primary" style="width: 120px;background: #5dd5c8;border-color:#5dd5c8;" @click="confirmedIn">
                    发布
                  </a-button>
                  <a-modal v-model="confirmTheReleaseVisible"
                           width="680px" title="设置接收简历的邮箱" @ok="confirmTheReleaseOkFun">
                    <p>该邮箱用于接收附件简历，请使用你常用的工作邮箱，你可以在『 我的资料』 中修改</p>
                    <a-form :form="form">
                    <a-form-item
                      :label-col="formItemLayout.labelCol"
                      :wrapper-col="formItemLayout.wrapperCol"
                      label="工作邮箱"
                    >
                      <a-input
                        v-decorator="[
          'email',
          {
            rules: [
              {
                type: 'email',
                message: '邮箱格式不正确',
              },
              {
                required: true,
                message: '请输入接收简历邮箱',
              },
            ],
          },
        ]"
                      />
                    </a-form-item>
                    </a-form>
                  </a-modal>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import moment from 'moment';
  const treeData = [

    {
      title: '兼职招聘',
      value: '1',
      key: '1',
    },
    {
      title: '社招',
      value: '2',
      key: '2',
    }
  ];
  const formItemLayout = {
    labelCol: { span: 3 },
    wrapperCol: { span: 21 },
  };
  const formTailLayout = {
    labelCol: { span: 4 },
    wrapperCol: { span: 8, offset: 4 },
  };
  export default {
    name: 'job',
    data () {
      return {
        formItemLayout,
        formTailLayout,
        form: this.$form.createForm(this, { name: 'dynamic_rule' }),
        company:'', //公司名称
        value: undefined,
        treeData,
        selAddress: [ //地区选择
          {
            value: 'zhejiang',
            label: '浙江',
            children: [
              {
                value: 'hangzhou',
                label: '杭州',
              },
            ],
          },
          {
            value: 'jiangsu',
            label: '江苏',
            children: [
              {
                value: 'nanjing',
                label: '南京',
              },
            ],
          },
        ],
        experienceData:["1年以内","1-3年","3-5年","5-10年","10年以上"],  //经验
        educationData:["不限","初中及以下","中专/中技","高中","大专","本科","硕士","博士"],  //学历
        salaryRangeData:["1k","2k","3k","4k","5k","6k","7k","8k"],  //薪资范围
        workDayData:["周一","周二","周三","周四","周五","周六","周日"],  //薪资范围
        //模态框字段
        visible: false,
        confirmLoading: false,
        isPartTimeJob: false, //是否是兼职招聘
        //不必填的字段
        experienceVal:'', //经验
        educationVal:'', //学历
        workdayVal:'', //工作日
        payTypeVal:'', //结算方式
        RecruitmentDeadlineVal:'', //招聘截止时间
        SalaryRangeVal:'', //薪资范围
        describeVal:'', //描述
        //确认发布
        confirmTheReleaseVisible:false
      }
    },
    created: function () {
      // console.log(this.$route.query)
      let _data = this.$route.query
      this.company = _data.company;
    },
    mounted:function(){

    },
    methods:{
      // 时间日期start
      moment,
      disabledDate(current) {
        // Can not select days before today and today
        return current && current < moment().endOf('day');
      },
      // 时间日期end

      confirm() {
        console.log('Clicked on Yes.');
      },
      //发布
      confirmedIn(){
        let _this = this;
        this.form.validateFields((errors, values) => {
          console.log(values);
          if (!errors) {
            // experienceVal:'', //经验
            //   educationVal:'', //学历
            //   workdayVal:'', //工作日
            //   payTypeVal:'', //结算方式
            //   RecruitmentDeadlineVal:'', //招聘截止时间
            //   SalaryRangeVal:'', //薪资范围
            //   describeVal:'', //描述
              console.log(this.experienceVal,this.educationVal,this.workdayVal,this.payTypeVal,this.RecruitmentDeadlineVal,this.SalaryRangeVal,this.describeVal,this.company)
            console.info('success');
            console.log(values);
          }
          this.confirmTheReleaseVisible = true
        });
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
          jobType: this.selVocationValue
        })

      },
      handleCancel(e) {
        console.log('Clicked cancel button');
        this.visible = false;
      },
      selVocation(e) {
        this.selVocationValue = e;
      },

      //切换招聘类型
      handleChangeRecruitmentType(value){
        console.log(`${value}`)
        if(`${value}` == '兼职招聘'){
          this.isPartTimeJob = true
        }else{
          this.isPartTimeJob = false
        }
      },
      //不是必填值获取方法
      experienceFun(value){
        this.experienceVal = `${value}`
      },
      educationFun(value){
        this.educationVal = `${value}`
      },
      workdayFun(value){
        this.workdayVal = `${value}`
      },
      payTypeFun(value){
        this.payTypeVal = `${value}`
      },
      RecruitmentDeadlineFun(value){
        this.RecruitmentDeadlineVal = `${value}`
      },
      SalaryRangeFun(value){
        this.SalaryRangeVal = `${value}`
      },
      //确认发布
      confirmTheReleaseOkFun(e){
        console.log(e);
        this.form.validateFields((errors, values) => {
          console.log(values);
          if (!errors) {
            console.info('success');
            console.log(values);
          }
          this.confirmTheReleaseVisible = false;

          this.$router.push({name:'authentication',query: {companyName:this.company}})
        })
        // this.confirmTheReleaseVisible = false;
      }
    },
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  #components-a-popconfirm-demo-placement .ant-btn {
    width: 70px;
    text-align: center;
    padding: 0;
    margin-right: 8px;
    margin-bottom: 8px;
  }
  .single-conatainer {
    padding: 0px!important;
    max-width: 100%!important;
    margin: 0 auto;
    height: 100%;
    position: relative;
    .header-container {
      background-color: #5dd5c8;
      height: 54px;
      -webkit-box-shadow: 0 2px 14px rgba(35, 24, 21, 0.11);
      box-shadow: 0 2px 14px rgba(35, 24, 21, 0.11);
      .inner {
        width: 1000px;
        margin: 0 auto;
        .logo {
          float: left;
          padding-top: 6px;
        }
        .top-user{
          float: right;
          color: #fff;
          padding-top: 10px;
        }
      }
    }
  }
  .first-job-publish{
    .content-container{
      width: 100%;
      height: 100%;
      .inner-container{
        max-width: 930px;
        margin: 0 auto;
        padding: 15px 0px;
        height: 100%;
        .job-publish-container {
          background: #ffffff;
          border-radius: 8px;
          padding: 30px 0 23px;
          padding-left: 0px;
          -webkit-box-shadow: 0 4px 6px rgba(6, 0, 1, 0.05);
          box-shadow: 0 4px 6px rgba(6, 0, 1, 0.05);
          position: relative;
          .job-edit-container {
            margin-bottom: 15px;
            background-color: #fff;
            padding: 20px 40px;
            padding-bottom: 40px;
            .title-container {
              padding-top: 10px;
              padding-bottom: 17px;
              padding-left: 39px;
              background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAJYCAYAAAA+BoUXAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NDc3MUY2Mzg1Rjk2MTFFNzgzRDVGMjUyRDUxNTNBQUYiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NDc3MUY2Mzc1Rjk2MTFFNzgzRDVGMjUyRDUxNTNBQUYiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDoxOEI5ODM2OTVEMzIxMUU3OUI3QTg1MDk5RTZBQ0NBOSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDoxOEI5ODM2QTVEMzIxMUU3OUI3QTg1MDk5RTZBQ0NBOSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PgcJYzAAAArfSURBVHja7N1/kJVV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);
              background-repeat: no-repeat;
              &.base-info{
                background-position: -3px 13px;
              }
              &.requirements-info{
                background-position: 1px -72px;
                margin-top: 20px;
                padding-bottom: 17px;
              }
            }
            .title{
              font-size: 16px;
              font-weight: normal;
            }
            .gray{
              font-size: 12px;
              line-height: 20px;
              margin-top: 5px;
              color: #9fa3b0;
            }
          }
        }
      }
    }
    .btns{
      text-align: center;
      width: 100%;
      padding-top: 13px;
    }
  }
</style>
