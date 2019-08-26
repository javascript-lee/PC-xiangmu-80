<template>
    <div class="conta" ref="box">
        <el-card class="my-card">
            <img src="../../assets/images/logo_index.png" alt="">
            <el-form ref="loginForm" :model="loginForm" :rules="ruleForm" status-icon>
            <el-form-item prop="moblie">
                <el-input v-model="loginForm.mobile" placeholder="请输入手机号"></el-input>
            </el-form-item>
             <el-form-item prop="code">
                <el-input v-model="loginForm.code" placeholder="请输入验证码" style="width:236px;margin-right:10px;"></el-input>
                <el-button type="primary">发送验证码</el-button>
            </el-form-item>
            <el-form-item>
                 <el-checkbox :value="true">我已阅读并同意用户协议和隐私条款</el-checkbox>
            </el-form-item>
            <el-form-item>
                <el-button @click="login()" type="primary" style="width:100%"> 登 录 </el-button>
            </el-form-item>
            </el-form>
        </el-card>
    </div>
</template>

<script>

export default {
  data () {
    const checkForm = (rule, value, callback) => {
      if (!/^1[3-9]\d{9}$/.test(value)) {
        return callback(new Error('手机号不正确请重新输入'))
      }
      callback()
    }
    return {
      loginForm: {
        mobile: '17600527083',
        code: '246810'
      },
      ruleForm: {
        mobile: [
          { required: true, message: '请输入手机号', trigger: 'blur' },
          { validator: checkForm, trigger: 'change' }
        ],
        code: [
          { required: true, message: '请输入验证码', trigger: 'blur' },
          { len: 6, message: '请输入长度为6为的验证码', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    login () {
      this.$refs.loginForm.validate((valid) => {
        if (valid) {
          this.$http.post('http://ttapi.research.itcast.cn/mp/v1_0/authorizations', this.loginForm)

            .then(res => {
              this.$router.push('/')
            })
            .catch(() => {
              this.$message.error('手机号或者验证码错误')
            })
        }
      })
    }
  }
}
</script>

<style  scoped>
.conta {
background: url(../../assets/images/login_bg.jpg) no-repeat center / cover;
width: 100%;
height: 100%;
position: absolute;
left:0;
top: 0;
}
.my-card{
    width: 400px;
    height: 380px;
    position: absolute;
    left:50%;
    top:50%;
    transform: translate(-50%,-50%)
}
.my-card img {
    width: 220px;
    display: block;
    margin: 10px auto;
}
</style>
