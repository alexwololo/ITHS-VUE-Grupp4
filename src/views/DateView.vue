<template>
  <ResponsiveNavigation
    :nav-links="navLinks"
    background="#fff"
    link-color="#777"
    hover-background="#ddd"
  />

  <div class="container" v-for="user in users.slice(0, 1)" :key="user.id">
    <div class="profilepic">
      <img :src="user.picture" alt="Profile picture" />
    </div>

    <div class="bar"><CountDown /></div>

    <div class="info">
      <h2>{{ user.name }} {{ user.age }} år</h2>
      <p>{{ user.biography }}</p>
    </div>

    <div class="buttons"><YesNoDate /></div>
  </div>
</template>

<script>
  import usersData from '../profiles.json'
  import CountDown from '../components/CountDown.vue'
  import YesNoDate from '../components/YesNoDate.vue'
  import ResponsiveNavigation from '../components/ResponsiveNavigation.vue'

  export default {
    components: {
      CountDown,
      YesNoDate,
      ResponsiveNavigation
    },
    data() {
      return {
        users: usersData,
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
    display: grid;
    height: max-content;
    width: 600px;
    grid-column-gap: 1px;
    grid-row-gap: 1px;
    background-color: white;
    text-align: center;
    margin: auto;
    border-radius: 4px;
    margin: 0 auto;
    margin-top: 50px;
    padding-bottom: 10px;
  }

  .profilepic {
    grid-area: 1 / 1 / 2 / 2;
    margin-top: 15px;
  }
  .bar {
    grid-area: 2 / 1 / 3 / 2;
  }
  .info {
    grid-area: 1 / 2 / 2 / 3;
  }
  .buttons {
    grid-area: 2 / 2 / 3 / 3;
  }

  @media (max-width: 375px) {
    .container {
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      width: auto;
      height: max-content;
      margin-top: 0;
    }
  }
</style>
