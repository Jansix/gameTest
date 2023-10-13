<template>
  <div>
    <div v-if="!auth">
      <el-form ref="form" :model="form" class="login-box" :rules="rules">
        <h2>請註冊新帳號</h2>
        <el-form-item label="帳號" prop="name">
          <el-input type="text" placeholder="請輸入帳號" v-model="form.name" />
        </el-form-item>
        <el-form-item label="密碼" prop="password">
          <el-input type="password" placeholder="請輸入密碼" v-model="form.password" />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm" class="btn">註冊</el-button>
        </el-form-item>
        <div class="box">
          <p @click="toLogin">已有帳號? 請登入</p>
        </div>
      </el-form>
    </div>
    <div v-else>
      <h1>你已登入不用重複註冊</h1>
    </div>
  </div>
</template>
<script>
import axios from 'axios';

export default {
  name: 'Reg',
  data() {
    return {
      form: {
        name: '',
        password: '',
        token: '',
      },
      rules: {
        name: [{ required: true, message: '你沒有輸入帳號', trigger: 'blur' }],
        password: [{ required: true, message: '你沒有輸入密碼', trigger: 'blur' }],
      },
    };
  },
  methods: {
    submitForm() {
      this.$refs.form.validate((valid, errors) => {
        if (valid) {
          this.form.token = `這是${this.form.name}的token`; //模擬token產生
          let matchedUser = null; //檢查資料庫內是否有相同帳號
          axios
              .get('http://localhost:3000/users')
              .then((res) => {
                const users = res.data;
                 matchedUser = users.find((user) => user.name === this.form.name );
                if (matchedUser) {
                  alert('帳號已存在')
                } else {
                  axios
                      .post('http://localhost:3000/users', this.form)
                      .then((res) => {
                        console.log('註冊成功', res);
                        alert('請登入');
                        this.$router.push('/login');
                      })
                      .catch((e) => console.log(e));
                }
              })
              .catch((e) => console.log(e));
        } else {
          console.log(errors);
          this.$message({
            message: '註冊失敗',
            type: 'warning',
          });

          return false;
        }
      });
    },
    toLogin() {
      this.$router.push('/login');
    },
  },
  computed: {
    auth() {
      return !!localStorage.getItem('token');
    },
  },
};
</script>
<style scoped>
.login-box {
  width: 350px;
  margin: 150px auto;
  padding: 20px;
  border: 1px solid #dcdfe6;
  border-radius: 5px;
  box-shadow: 0 0 30px #dcdfe6;
}

h2 {
  text-align: center;
}

.box {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

p {
  cursor: pointer;
}

p:hover {
  color: #42b983;
}
</style>
