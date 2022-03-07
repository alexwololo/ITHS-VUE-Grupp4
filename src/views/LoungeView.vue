<template>
  <ResponsiveNavigation
    :nav-links="navLinks"
    background="#fff"
    link-color="#5E5E5E"
    hover-background="#ddd"
  />
  <h2>Lounge</h2>
  <ProfileComponent />
  <div class="lounge-container">
    <div class="favorites">
      <h2>Dina senaste favoriter</h2>
      <FavouritesCarousel />
    </div>
  </div>
</template>

<script>
  import ResponsiveNavigation from '../components/ResponsiveNavigation.vue'
  import FavouritesCarousel from '../components/FavouritesCarousel.vue'
  import ProfileComponent from '../components/ProfileComponent.vue'

  export default {
    components: {
      ResponsiveNavigation,
      FavouritesCarousel,
      ProfileComponent
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

<style lang="scss" scoped>
  h2 {
    margin: 1rem 0 0 1rem;
    color: #fff;
    text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000,
      1px 1px 0 #000;
  }
  .lounge-container {
    margin: 1rem;
    padding: 1rem 0;
    border-radius: 1rem;
    overflow: hidden;
    background-color: white;
    display: flex;
    flex-direction: column;
  }
  .favorites {
    display: block;
    max-width: 100%;
    background-color: white;
    h2 {
      color: #000;
      text-shadow: none;
      margin-left: 2rem;
      margin-bottom: 1rem;
    }
  }

  @media screen and (min-width: 980px) {
    .lounge-container {
      width: 80%;
      margin: 2rem 7rem;
      padding: 0;
    }
  }
  @media screen and (min-width: 1200px) {
    .lounge-container {
      margin: 2rem 9rem;
    }
  }
</style>
