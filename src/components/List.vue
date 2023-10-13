<template>
  <thead>
    <tr>
      <td>姓名</td>
      <td>性別</td>
      <td>年齡</td>
      <td>手機</td>
      <td>刪除</td>
    </tr>

  </thead>
</template>
<script>
import Item from '../components/Item.vue';
export default {
  name: 'List',

  components: {
    Item,
  },

};
</script>
<style scoped>
thead {
  background-color: lightskyblue;
}
</style>
