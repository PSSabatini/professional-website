<template>
  <div class="top-menu">
    <div class="icons-container">
      <icon href="www.linkedin.com/in/paola-sabatini" iconName="linkedin"></icon>
      <icon href="www.github.com/PSSabatini" iconName="github"></icon>
      <icon href="mailto:polasabatini@gmail.com" iconName="email"></icon>
    </div>
  </div>
</template>

<script>
import Icon from  './Icon.vue';

export default {
  name: 'TopMenu',

  components: {
    Icon,
  },

}
</script>

<style lang="scss">
  .top-menu {
    padding: 10px;
    margin: 0;

    p {
      margin: 0;
    }

    .icons-container {
      display: flex;
      padding-left: 20px;
    }
  }

</style>
