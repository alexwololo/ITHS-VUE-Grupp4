<template>
  <ResponsiveNavigation
    :nav-links="navLinks"
    background="#fff"
    link-color="#777"
    hover-background="#ddd"
  />

  <div class="container">
    <div class="welcome">
      <h1>Välkommen, {{ this.$store.state.user }}!</h1>
    </div>
    <div class="profile-container">
      <div class="profile-top">
        <a href="#/edit">Edit profile</a>
      </div>
      <div class="profile-pic">
        <img :src="this.$store.state.picture" alt="" />
      </div>
      <div class="profile-description">empty</div>
    </div>
    <div class="favorites">DINA FAVOURITER</div>
    <div class="messages">DINA MEDDELANDEN</div>
    <div>
      <a class="date-button" href="#/date">Börja snabbdejta</a>
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
  .container {
    width: 100vw;
    background-color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .welcome {
    color: black;
  }

  .profile-container {
    width: 70%;
    height: 60vh;
    display: flex;
    flex-direction: column;
    background-color: white;
    align-items: center;
  }

  .profile-container img {
    width: 250px;
    border-radius: 50%;
    border: 2px solid grey;
  }
  .profile-top {
    width: 100%;
    display: flex;
    flex-direction: row-reverse;
  }
  .date-button {
    background-color: orange;
    font-weight: 600;
    padding: 1rem;
    color: white;
    text-decoration: none;
    border: 5px solid white;
  }

  .date-button:hover {
    background-color: darkorange;
  }

  .favorites {
    display: none;
  }

  .messages {
    display: none;
  }
</style>
