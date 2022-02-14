<template>
  <ResponsiveNavigation
    :nav-links="navLinks"
    background="#fff"
    link-color="#777"
    hover-background="#ddd"
  />
  <RouterView class="router-view" />
</template>

<script>
  import ResponsiveNavigation from './components/ResponsiveNavigation.vue'

  export default {
    created() {
      window.addEventListener('keyup', this.historyBack)
    },
    components: {
      ResponsiveNavigation
    },
    data() {
      return {
        navLinks: [
          {
            text: 'Swindlr',
            path: '/',
            icon: ''
          },
          {
            text: 'Log in',
            path: '/signin',
            icon: 'ion-ios-log-in'
          },
          {
            text: 'Products',
            path: '/products',
            icon: 'ion-ios-briefcase'
          },
          {
            text: 'Support',
            path: '/support',
            icon: 'ion-ios-help-circle'
          },
          {
            text: 'Edit profile',
            path: '/edit',
            icon: 'ion-ios-create'
          },
          {
            text: 'Date',
            path: '/date',
            icon: 'ion-ios-heart'
          }
        ]
      }
    },
    methods: {
      historyBack(e) {
        if (e.keyCode === 8) {
          this.$router.go(-1)
        }
      }
    }
  }
</script>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;700&display=swap');
  @import 'https://unpkg.com/ionicons@4.2.2/dist/css/ionicons.min.css';

  html {
    font-family: 'Roboto', sans-serif;
  }

  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
  }
  .router-view {
    padding-bottom: 1.5rem;
  }
</style>
