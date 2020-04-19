<template>
  <div class="home">
    <top-menu></top-menu>
  </div>
</template>

<script>
import TopMenu from './TopMenu.vue';

export default {
  name: 'Home',

  components: {
    TopMenu,
  },

  props: {
  }
}
</script>

<style lang="scss">
.home {
  height: 100vh;
  width: 100%;
  background-color: #222831;
}
</style>
