<template>
  <div>
    <div style="float:left" class="poii1"><img src="@/assets/yyt.png" height="90px" width="190px"></div>
<div class="poii"><img src="@/assets/ggt.png" height="80px"></div>
  <div class="poo" style="width: 100%;height: 100%;overflow: hidden">

    <div class="po">
      <div class="poi"><img src="@/assets/moo.png"></div>

  <div class="ij" style="width: 400px;">
    <div style="text-align:center;font-size: 25px;color: #b3c0d1;margin: 14px 0">欢迎登录</div>
    <div><el-divider></el-divider></div>
    <div class="hb">
        <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm">
          <el-form-item prop="username">
            <el-input class="fr" prefix-icon="el-icon-user-solid" v-model="ruleForm.username" placeholder="请输入账号"></el-input>
          </el-form-item>
          <el-form-item prop="password">
            <el-input prefix-icon="el-icon-lock" v-model="ruleForm.password" show-password
                      placeholder="请输入密码"></el-input>
          </el-form-item>
          <el-form-item>
            <div class="ff" style="display: flex">
              <el-input prefix-icon="el-icon-key" v-model="ruleForm.validCode" style="width: 50%"
                        placeholder="请输入验证码"></el-input>
              <ValidCode @input="createValidCode"/>
            </div>
          </el-form-item>
          <el-form-item>
            <el-button  @click="submitForm('ruleForm')" style="width: 152px">登录</el-button>
            <el-button  @click="$router.push('/SignUp')" style="width: 152px">注册</el-button>
          </el-form-item>
        </el-form>
        </div>
  </div>
  </div>
  </div>
  <div class="wee"><span >Copyright 2021-2080 vip.com，All Rights Reserved ICP证：优易 Y7-20211128</span><span style="margin-left:10px"><img  :src="url.url"/></span></div>
  </div>
</template>
<script>
import ValidCode from "@/components/ValidCode";
export default {
  name: 'Login',
  components: {ValidCode},
  data() {

    return {
      recordNr:"登录前台",
       url: {url: require('../assets/pic.gif')},
      ruleForm: {},
      rules: {
        username: [
          {required: true, message: '请输入用户名', trigger: 'blur'},
        ],
        password: [
          {required: true, message: '请输入用密码', trigger: 'blur'}
        ],
        validCode: '',
      }
    };
  },
  created() {
    sessionStorage.removeItem("user")
  },
  methods: {

//     onSubmits(formName) {

// this.ruleForm.recordNr=this.recordNr

//       this.$refs[formName].validate((valid) => {
//         if (valid) {
//           let _this = this;
//           axios
//             .post("http://localhost:8888/record/add", this.ruleForm)

//         }
//       });
//     },


    createValidCode(data) {
      this.validCode = data
    },
    submitForm() {
      this.ruleForm.recordNr=this.recordNr
      this.$refs['ruleForm'].validate((valid) => {
        if (valid) {
          if (!this.ruleForm.validCode) {
            this.$message.error("请填写验证码")
            return
          }
          if (this.ruleForm.validCode.toLowerCase() !== this.validCode.toLowerCase()) {
            this.$message.error("验证码错误")
            return
          }
          // 提交逻辑
          this.$axios.post('/logins', this.ruleForm).then((res) => {
             axios
            .post("http://localhost:8888/record/add", this.ruleForm)
            const token = res.headers['authorization']
            this.$store.commit('SET_TOKEN', token)
            this.$store.commit('SET_USERINFO', res.data.data)
            sessionStorage.setItem("user", JSON.stringify(res.data))
            console.log(res.data)
            this.$router.push('/Index')
            this.$message.success("登录成功")
            location.reload();
          })
        }
      });
    },
  },
  mounted() {

  }
}
</script>
<style scoped>

.po{
   padding-top: 80px;
  padding-left: 400px;
  height: 660px;
  background-image: url('../assets/mo.png');
}
.ij{
  height: 500px;
   border-radius: 4px;
  float: right;
  margin-right: 400px;
  padding-left: 40px;
  padding-right: 40px;
  background: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04)
}
.poi{
  float: left;

}
.ij .el-input{
      border: 0.5px solid #b2b2b2;

  border-radius: 4px;

 margin-bottom: 10px;




}
.el-divider{
  width: 100%;
}
.hb{
  margin-top: 50px;
}
.el-button{
  background: #f10180;
  color: #fff;
  height: 50px;
  border-radius: 4px;

}
.poii{
  float: right;
  margin-right: 400px;
  padding-top: 12px;
  padding-bottom: 5px;
}

.poii1{
  float: right;
  margin-left: 370px;
  padding-top: 12px;
  padding-bottom: 5px;
}
.wee{
  color: #666;
    text-align: center;
    padding-top: 25px;
}
.wee span{

font-family: 微软雅黑;
}

</style>
