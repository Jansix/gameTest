<template>
  <div class="home">
 <test/>
  </div>
</template>

<script>
import test from '../components/test.vue';

export default {
  name: 'HomeView',
  components: {
    test,
  },
  data() {
    return {
    
    };
  },
  methods: {
   
  },
};
</script>

<style scoped>
i {
  font-size: 50px;
  align-self: center;
  color: #42b983;
}
.home {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
}
h1 {
  font-size: xxx-large;
  color: #42b983;
}
</style>
