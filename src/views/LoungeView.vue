<template>
  <ResponsiveNavigation
    :nav-links="navLinks"
    background="#fff"
    link-color="#777"
    hover-background="#ddd"
  />
  <ProfileComponent />
  <div class="lounge-container">
    <div class="favorites">
      <h2>Dina senaste favoriter</h2>
      <FavouritesCarousel />
    </div>
    <div class="messages">
      <h2>Du har X olästa meddelanden.</h2>
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

<style scoped>
  .lounge-container {
    margin: 1rem;
    padding: 1rem 0;
    border-radius: 1rem;
    background-color: white;
    display: flex;
    flex-direction: column;
  }
  .favorites {
    display: block;
    width: 97%;
    background-color: white;
    margin: 1rem;
  }

  .messages {
    display: block;
    width: 97%;
    background-color: white;
    margin: 1rem;
  }
  @media screen and (min-width: 980px) {
    .favorites {
      display: block;
      width: 97%;
      background-color: white;
      margin: 1rem;
    }

    .messages {
      display: block;
      width: 97%;
      background-color: white;
      margin: 1rem;
    }

    .lounge-container {
      width: 80%;
      margin: 2rem 7rem;
      padding: 0;
      border-radius: 1rem;
      background-color: white;
      display: flex;
      flex-direction: column;
    }
  }
  @media screen and (min-width: 1200px) {
    .lounge-container {
      margin: 2rem 9rem;
    }
  }
</style>
