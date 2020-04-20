<template>
  <div class="home">
    <top-menu></top-menu>
    <animation></animation>
    <footer-menu></footer-menu>
  </div>
</template>

<script>
import TopMenu from './TopMenu.vue';
import Animation from './Animation.vue'
import FooterMenu from './FooterMenu.vue';

export default {
  name: 'Home',

  components: {
    TopMenu,
    Animation,
    FooterMenu,
  },
}
</script>

<style lang="scss">
.home {
  background-color: #212227;
}
</style>
