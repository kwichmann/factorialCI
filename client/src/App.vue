<template>
  <div id="app">
    <navbar></navbar>
    <factorial :msg='message'></factorial>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue';
import Factorial from './components/Factorial.vue';

export default {
  name: 'app',
  components: {
    Navbar,
    Factorial
  },
  data: () => ({
    message: 'Welcome to the factorial app!'
  })
};
</script>
