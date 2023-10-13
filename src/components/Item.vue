<template>
  <tbody>
    <tr v-for="(item, index) in persons" :key="index">
      <td v-text="item.name"></td>
      <td v-text="item.sex"></td>
      <td v-text="item.age"></td>
      <td v-text="item.phone"></td>
      <td>
        <button @click="del(index)">刪除</button>
      </td>
    </tr>
  </tbody>
</template>

<script>
import { mapState, mapMutations } from 'vuex';
export default {
  name: 'Item',
  computed: {
    ...mapState(['persons']),
  },
  methods: {
    ...mapMutations(['delPersons']),
    del(index) {
      this.delPersons(index);
    },
  },
};
</script>

<style scoped></style>
