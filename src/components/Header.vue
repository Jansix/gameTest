<script>
export default {
  name: 'Header',

  computed: {
    auth() {
      return !!localStorage.getItem('token');
    },
  },
  methods: {
    out() {
      localStorage.removeItem('token');
      location.reload();
    },
  },
};
</script>

<template>
  <div>
    <router-link to="/">Home</router-link> | <router-link to="/employ">Employ</router-link> |
    <router-link v-if="!auth" to="/login">Login | </router-link><router-link v-if="!auth" to="/reg">Reg |</router-link
    ><el-button v-if="auth" @click="out">登出</el-button>
  </div>
</template>

<style scoped></style>
