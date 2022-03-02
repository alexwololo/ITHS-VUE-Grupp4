<template>
  <ResponsiveNavigation
    :nav-links="navLinks"
    background="#fff"
    link-color="#777"
    hover-background="#ddd"
  />

  <div class="icbreaker-container">
    <div class="icebreaker-info">
      <h1>
        Vi har satt ihop ett par frågor som kan hjälpa dig att föra ditt samtal
        vidare
      </h1>
      <p>Välj en av nedanstående frågor för att bibehålla er gnista!</p>
    </div>
    <div class="icbreaker-questions">
      <ul>
        <li><icebreaker /></li>
        <li><icebreaker /></li>
        <li><icebreaker /></li>
        <li><icebreaker /></li>
        <li><icebreaker /></li>
      </ul>
    </div>
  </div>
</template>

<script>
  import ResponsiveNavigation from '../components/ResponsiveNavigation.vue'

  export default {
    components: {
      ResponsiveNavigation
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

<style scoped>
  .icbreaker-container {
    min-width: 200px;
    padding: 60px 30px;
    margin: 60px 30%;
    text-align: left;
    background-color: rgba(255, 255, 255, 0.5);
  }
</style>
