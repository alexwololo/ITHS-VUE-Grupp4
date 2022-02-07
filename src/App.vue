<template>
  <div id="app">
    <ResponsiveNavigation
      :nav-links="navLinks"
      background="#FFF"
      link-color="#777"
      hover-background="#DDD"
    />
    <RouterView />
  </div>
</template>

<script>
  import ResponsiveNavigation from './components/ResponsiveNavigation.vue'

  export default {
    components: {
      ResponsiveNavigation
    },
    data: () => ({
      navLinks: [
        {
          text: 'Web',
          path: '#',
          icon: 'ion-ios-megaphone'
        },
        {
          text: 'Design',
          path: '#',
          icon: 'ion-ios-business'
        },
        {
          text: 'Videos',
          path: '#',
          icon: 'ion-ios-briefcase'
        }
      ]
    })
  }
</script>

<style lang="scss">
  @import 'https://unpkg.com/ionicons@4.2.2/dist/css/ionicons.min.css';
</style>
