<template>
  <ResponsiveNavigation
    :nav-links="navLinks"
    background="#fff"
    link-color="#5E5E5E"
    hover-background="#ddd"
  />
  <ChatComponent />
</template>

<script>
  import ResponsiveNavigation from '../components/ResponsiveNavigation.vue'
  import ChatComponent from '../components/ChatComponent.vue'

  export default {
    components: {
      ResponsiveNavigation,
      ChatComponent
    },
    data() {
      return {
        navLinks: [
          {
            text: 'Home',
            path: '/lounge',
            icon: 'ion-ios-home'
          },
          {
            text: 'Start dating',
            path: '/date',
            icon: 'ion-ios-thumbs-up'
          },
          {
            text: 'Messages',
            path: '/chat',
            icon: 'ion-ios-mail'
          },
          {
            text: 'Favourites',
            path: '/favorites',
            icon: 'ion-ios-heart'
          },
          {
            text: 'Edit profile',
            path: '/edit',
            icon: 'ion-ios-create'
          },
          {
            text: 'Log out',
            path: '/',
            icon: 'ion-ios-log-out'
          }
        ]
      }
    }
  }
</script>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;700&display=swap');

  html {
    font-family: 'Roboto', sans-serif;
  }

  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
  }
</style>
