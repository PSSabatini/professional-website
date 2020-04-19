<template>
  <div class="footer-menu">
    <a href="">About</a>
    <a href="">Projects</a>
    <a href="">NPM Packages</a>
  </div>
</template>

<script>
export default {
  name: 'FooterMenu',
}
</script>

<style lang="scss">
  .footer-menu {
    display: flex;
    justify-content: flex-end;

    a {
      padding: 30px 50px;
      font-size: 14px;
      color: white;
      text-decoration: none;

      &:visited {
        color: white;
      }

      &:hover {
        color:yellowgreen;
      }
    }
  }

</style>