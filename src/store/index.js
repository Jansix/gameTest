import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    persons: [
      { name: '張三', age: 18, sex: '男', phone: '0911112304' },
      { name: '李四', age: 28, sex: '女', phone: '0912112314' },
      { name: '王五', age: 38, sex: '男', phone: '0911312324' },
      { name: '趙六', age: 48, sex: '女', phone: '0914112344' },
      { name: '李七', age: 58, sex: '男', phone: '0911512354' },
    ],
    newPerson: { name: '', age: '', sex: '', phone: '' },
  },
  getters: {},
  mutations: {
    delPersons(state, index) {
      state.persons.splice(index, 1);
    },
    addPersons(state, obj) {
      const { name, age, sex, phone } = obj;
      if (name && age && sex && phone) {
        state.persons.unshift({ name, age, sex, phone });
        state.newPerson = { name: '', age: '', sex: '', phone: '' };
      }
    },
  },
  actions: {},
  modules: {},
});
