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
    <div class="grid-1">
      <div class="profile-container">
        <div class="profile-top">
          <a href="#/edit">Edit profile</a>
        </div>
        <div class="profile-pic">
          <img :src="this.$store.state.picture" alt="" />
        </div>
        <div class="profile-description">empty</div>
      </div>
    </div>
    <div class="grid-2">
      <div class="lounge-container">
        <div class="favorites">
          <h2>Dina senaste favoriter</h2>
        </div>
        <div class="messages">
          <h2>Du har X olästa meddelanden.</h2>
        </div>
        <div class="date-button-container">
          <a class="date-button" href="#/date">Börja snabbdejta</a>
        </div>
      </div>
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

  .grid-1 {
    width: 100%;
    display: flex;
    justify-content: center;
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

  @media screen and (min-width: 980px) {
    .welcome {
      display: none;
    }
    .container {
      background-color: rgba(255, 255, 255, 0);
      display: grid;
      grid-template-columns: 1fr 1fr;
    }

    .profile-container {
      margin-top: 10%;
    }

    .favorites {
      display: block;
      width: 80%;
      background-color: white;
      margin: 1rem;
    }

    .messages {
      display: block;
      width: 80%;
      background-color: white;
      margin: 1rem;
    }

    .date-button {
      border: 0;
    }

    .date-button-container {
      margin-top: 2rem;
      margin-left: 1rem;
    }

    .lounge-container {
      width: 70%;
      height: 60vh;
      background-color: white;
      margin-top: 10%;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
    }

    .grid-2 {
      width: 100%;
      display: flex;
      justify-content: center;
    }
  }
</style>
