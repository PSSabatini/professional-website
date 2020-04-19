<template>
  <div class="icon">
    <a :href="href" :class="'icon-' + iconName"></a>
  </div>
</template>

<script>
export default {
  name: 'Icon',

  props: {
    href: {
      default: ''
    },
    iconName: {
      default: ''
    },
  },

}
</script>

<style lang="scss">
  .icon {
    padding: 5px 10px;

    a {
      text-decoration: none;
      font-size: 24px;
      color: white;

      &:visited {
        color: white;
      }

      &:hover { 
        color:yellowgreen;
      }
    }

    .icon-linkedin:before {
      content: "\e90a";
    }

    .icon-github:before {
      content: "\e909";
    }

    .icon-email:before {
      content: "\e908";
    }
  }
</style>