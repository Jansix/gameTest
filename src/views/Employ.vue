<template>
  <div id="app">
    <fieldset>
      <legend>指令綜合小練習</legend>
      <div>
        <span>姓名: </span>
        <el-input type="text" placeholder="請輸入姓名" v-model="newPerson.name" prefix-icon="el-icon-user" />
      </div>
      <div>
        <span>年齡: </span>
        <el-input type="number" placeholder="請輸入年齡" v-model="newPerson.age" prefix-icon="el-icon-time" :min="0" />
      </div>
      <div>
        <span>性別: </span>
        <el-select v-model="newPerson.sex" placeholder="請輸入性別">
          <el-option value="男">男</el-option>
          <el-option value="女">女</el-option>
        </el-select>
      </div>
      <div>
        <span>手機: </span>
        <el-input type="text" placeholder="請輸入手機" v-model="newPerson.phone" prefix-icon="el-icon-phone" />
      </div>
      <el-button type="primary" @click="add()">創建新用戶</el-button>
    </fieldset>
    <table>
      <List  />
      <Item />
    </table>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';
import List from '../components/List.vue';
import Item from '../components/Item.vue';
export default {
  name: 'Demo',
  data() {
    return {};
  },
  components: {
    List,
    Item,
  },
  methods: {
    ...mapMutations(['delPersons', 'addPersons']),
    add() {
      this.addPersons(this.newPerson);
    },

  },
  computed: {
    ...mapState(['persons', 'newPerson']),
  },
};
</script>

<style scoped>
#app {
  margin: 50px auto;
  width: 600px;
}
fieldset {
  border: 1px solid lightskyblue;
  margin-bottom: 20px;
}

table {
  width: 600px;
  border: 2px solid lightskyblue;
  text-align: center;
}
.el-input {
  width: 50%; /* 調整寬度為 100% */
  height: 30px;
  margin: 10px 0;
}
.el-select {
  width: 50%; /* 調整寬度為 100% */
  height: 30px;
  margin: 10px 0;
}
.el-button {
  margin-top: 10px;
}
</style>
