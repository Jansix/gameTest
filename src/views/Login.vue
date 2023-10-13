<template>
  <div>
    <div v-if="!auth">
      <el-form ref="form" :model="form" class="login-box" :rules="rules">
        <h2>歡迎登入</h2>
        <el-form-item label="帳號" prop="name">
          <el-input type="text" placeholder="請輸入帳號" v-model="form.name" />
        </el-form-item>
        <el-form-item label="密碼" prop="password">
          <el-input type="password" placeholder="請輸入密碼" v-model="form.password" />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm" class="btn">登入</el-button>
        </el-form-item>
        <div class="box">
          <p @click="toReg">沒帳號帳號? 快去註冊一個吧!</p>
        </div>
      </el-form>
    </div>
    <div v-else>
      <h1>你已登入不用重複登入</h1>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Login',
  data() {
    return {
      form: {
        name: '',
        password: '',
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
          axios
            .get('http://localhost:3000/users')
            .then((res) => {
              const users = res.data;
              const matchedUser = users.find((user) => user.name === this.form.name && user.password === this.form.password);
              if (matchedUser) {
                console.log('登入成功', matchedUser);
                localStorage.setItem('token', matchedUser.token);
                this.$router.push('/');
                location.reload();
              } else {
                alert('登入失敗，帳號或密碼不正確');
              }
            })
            .catch((e) => console.log(e));
        } else {
          console.log(errors);
          this.$message({
            message: '登入失敗',
            type: 'warning',
          });
          return false;
        }
      });
    },
    toReg() {
      this.$router.push('/reg');
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
