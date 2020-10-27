<template>
  <div class="page">
    <div class="content">
      <div class="contentInfo">
        <a-divider orientation="left">
          企业认证
        </a-divider>
        <a-alert message="温馨提示：以下上传对应项的电子版即可" type="info" />
        <a-form :form="form" :label-col="{ span: 5 }" :wrapper-col="{ span: 12 }">
          <a-form-item label="企业名称">
            <span>{{company}}</span>
          </a-form-item>
          <a-form-item label="营业执照">
            <a-upload
              name="avatar"
              list-type="picture-card"
              class="avatar-uploader"
              :show-upload-list="false"
              action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
              :before-upload="beforeUpload"
              @change="handleChange"
            >
              <img v-if="imageUrl" :src="imageUrl" alt="avatar" />
              <div v-else>
                <a-icon :type="loading ? 'loading' : 'plus'" />
              </div>
            </a-upload>
          </a-form-item>
          <a-form-item label="法人身份证">
            <a-upload
              name="avatar"
              list-type="picture-card"
              class="avatar-uploader"
              :show-upload-list="false"
              action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
              :before-upload="beforeUpload"
              @change="handleChangeCard"
            >
              <img v-if="cardImg" :src="cardImg" alt="avatar" />
              <div v-else>
                <a-icon :type="cardLoading ? 'loading' : 'plus'" />
              </div>
            </a-upload>
            <span>身份证正反面放一张图片上</span>
          </a-form-item>
        </a-form>
        <div class="btns">
          <a-button type="primary" style="width: 120px; text-align: center" @click="confirmedIn">
            保存
          </a-button>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
  function getBase64(img, callback) {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result));
    reader.readAsDataURL(img);
  }
  const formItemLayout = {
    labelCol: { span: 4 },
    wrapperCol: { span: 20 },
  };
  const formTailLayout = {
    labelCol: { span: 4 },
    wrapperCol: { span: 8, offset: 4 },
  };
  export default {
    name: 'authentication',
    data () {
      return {
        formItemLayout,
        formTailLayout,
        form: this.$form.createForm(this, { name: 'dynamic_rule' }),
        company:'',
        //上传营业执照
        loading: false,
        imageUrl: '',
        cardImg: '',
        cardLoading: false,
      }
    },
    created: function () {

      let _data = this.$route.query
      this.company = _data.companyName;
    },
    mounted:function(){

    },
    methods:{

      handleChange(info) {   //上传营业执照
        if (info.file.status === 'uploading') {
          this.loading = true;
          return;
        }
        if (info.file.status === 'done') {
          // Get this url from response in real world.
          getBase64(info.file.originFileObj, imageUrl => {
            this.imageUrl = imageUrl;
            this.loading = false;
          });
        }
      },
      handleChangeCard(info) {  //上传身份证
        if (info.file.status === 'uploading') {
          this.cardLoading = true;
          return;
        }
        if (info.file.status === 'done') {
          // Get this url from response in real world.
          getBase64(info.file.originFileObj, imageUrl => {
            this.cardImg = imageUrl;
            this.cardLoading = false;
          });
        }
      },
      beforeUpload(file) {
        const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
        if (!isJpgOrPng) {
          this.$message.error('请上传图片文件');
        }
        const isLt2M = file.size / 1024 / 1024 < 2;
        if (!isLt2M) {
          this.$message.error('图片最大上传2M');
        }
        return isJpgOrPng && isLt2M;
      },
    },
    confirmedIn(){
      console.log("保存")
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.content{
  width:800px;
  height:auto;
  overflow: hidden;
  margin:0 auto;
  padding-top:50px;
  .avatar-uploader > .ant-upload {
    width: 128px;
    height: 128px;
  }
  .ant-upload-select-picture-card i {
    font-size: 32px;
    color: #999;
  }

  .ant-upload-select-picture-card .ant-upload-text {
    margin-top: 8px;
    color: #666;
  }
  .btns{
    width: 100%;
    height: auto;
    overflow: hidden;
    text-align: center;
    margin-top: 150px;
  }
}
</style>

