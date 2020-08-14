<template>
  <div class="home">
    <top-menu></top-menu>
    <animation3></animation3>
    <footer-menu></footer-menu>
  </div>
</template>

<script>
import TopMenu from './TopMenu.vue';
import Animation3 from './Animation3.vue'
import FooterMenu from './FooterMenu.vue';

export default {
  name: 'Home',

  components: {
    TopMenu,
    Animation3,
    FooterMenu,
  },
}
</script>

<style lang="scss">
.home {
  background-color: #212227;
}
</style>
