<template>
  <div id="app">
    <Home/>
  </div>
</template>

<script>
import Home from './components/Home.vue'

export default {
  name: 'App',
  components: {
    Home,
  }
}
</script>

<style lang="scss">
  body {
    padding: 0;
    margin: 0;
    font-family: Arial, Helvetica, sans-serif;
  }

</style>
