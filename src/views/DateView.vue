<template>
  <ResponsiveNavigation
    :nav-links="navLinks"
    background="#fff"
    link-color="#777"
    hover-background="#ddd"
  />

  <div class="container" v-if="users.length > 0">
    <div class="profilepic">
      <img class="profileimg" :src="users[0].picture" alt="Profile picture" />
    </div>

    <div class="bar">
      <div class="loading-bar">
        <div class="percentage" :style="{ width: percentage + '%' }" />
      </div>
    </div>

    <div class="info">
      <h2>{{ users[0].name }}, {{ users[0].age }} år</h2>
      <p>{{ users[0].biography }}</p>
    </div>

    <div class="buttons">
      <img class="butt" src="/assets/thumb-up.svg" @click="onYes" />
      <img class="butt" src="/assets/thumb-down.svg" @click="onNo" />
    </div>
  </div>
  <div class="container" v-else>
    <p>Du har gått igenom alla profiler!</p>
    <br />
    <img class="logo" src="/assets/icon.png" />
    <router-link class="routerlink" :to="'/lounge'"
      >Återvänd till start</router-link
    >
  </div>
</template>
<script>
  import usersData from '../profiles.json'
  import ResponsiveNavigation from '../components/ResponsiveNavigation.vue'

  export default {
    components: {
      ResponsiveNavigation
    },
    data() {
      return {
        users: usersData,
        percentage: 100,
        favorites: [],

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
            path: '/favoritess',
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
    },
    created() {
      let intval = setInterval(() => {
        if (this.percentage < 101) this.percentage -= 0.1
        else clearInterval(intval)
      }, 1)
    },

    methods: {
      onYes() {
        this.favorites.push(this.users[0])
        this.users.splice(0, 1)
      },
      onNo() {
        this.users.splice(0, 1)
      },
      goHome() {
        this.favorites.push(this.users[0])
        this.users.splice(0, 1)
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

  .profileimg {
    width: auto;
    background-color: white;
    border-radius: 40px;
    margin-left: 30px;
    margin-right: 30px;
    padding: 20px;
    box-shadow: inset 0 -3em 3em rgb(139, 139, 139),
      0 0 0 2px rgba(139, 139, 139, 0.411),
      0.3em 0.3em 1em rgba(255, 255, 255, 0.3);
  }

  .butt {
    width: auto;
    background-color: white;
    border-radius: 40px;
    margin-left: 30px;
    margin-right: 30px;
    padding: 20px;
    box-shadow: inset 0 -3em 3em rgb(139, 139, 139),
      0 0 0 2px rgba(139, 139, 139, 0.411),
      0.3em 0.3em 1em rgba(255, 255, 255, 0.3);
  }

  .logo {
    width: 200px;
    margin-left: auto;
    margin-right: auto;
  }

  /* "Lådan" till bar:en */
  .loading-bar {
    position: relative;
    width: 300px;
    height: 30px;
    margin-top: 10px;
    margin-left: 20px;
    border-top-right-radius: 15px;
    border-bottom-right-radius: 15px;
    background-color: rgb(221, 221, 221);
    box-shadow: inset 0 -3em 3em rgb(139, 139, 139),
      0 0 0 2px rgba(139, 139, 139, 0.411),
      0.3em 0.3em 1em rgba(255, 255, 255, 0.3);
  }

  /* Den rörliga delen av bar:en */
  .percentage {
    position: absolute;
    height: 100%;
    background-color: #4a00b3;
    border-top-right-radius: 15px;
    border-bottom-right-radius: 15px;
  }

  @media (max-width: 375px) {
    .container {
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      width: auto;
      margin-top: 0;
    }

    .profileimg {
      width: auto;
      background-color: white;
      padding: 30px;
      border-radius: 40px;
      margin: 10px;
      box-shadow: inset 0 -3em 3em rgb(139, 139, 139),
        0 0 0 2px rgba(139, 139, 139, 0.411),
        0.3em 0.3em 1em rgba(255, 255, 255, 0.3);
    }
  }
</style>
