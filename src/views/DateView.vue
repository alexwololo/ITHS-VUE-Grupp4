<template>
  <ResponsiveNavigation
    :nav-links="navLinks"
    background="#fff"
    link-color="#5E5E5E"
    hover-background="#ddd"
  />
  <h2>Börja dejta</h2>
  <div class="container" v-if="users.length > 0">
    <div class="profilepic">
      <img id="profile-picture" :src="users[0].picture" alt="Profile picture" />
    </div>

    <div class="bar">
      <div class="loading-bar">
        <div class="percentage" :style="{ width: this.counter / 6 + '%' }" />
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
        counter: 600,
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
    },
    created() {
      setInterval(() => {
        this.counter--
        if (this.counter < 1) {
          this.counter = 600
          this.onNo()
        }
      }, 10)
    },

    methods: {
      onYes() {
        this.favorites.push({ id: this.users[0].id })
        this.users.splice(0, 1)
        this.counter = 600
        var existingEntries = JSON.parse(
          localStorage.getItem('favoritedProfiles')
        )
        if (existingEntries === null) existingEntries = []
        var idNumber = this.users[0].id - 1
        var entry = {
          id: idNumber
        }
        if (existingEntries.some((e) => e.id === idNumber)) {
          console.log('Finns redan')
          return
        } else {
          existingEntries.push(entry)
          localStorage.setItem(
            'favoritedProfiles',
            JSON.stringify(existingEntries)
          )
        }
      },
      onNo() {
        this.users.splice(0, 1)
        this.counter = 600
      },
      goHome() {
        this.favorites.push(this.users[0])
        this.users.splice(0, 1)
      }
    }
  }
</script>

<style scoped lang="scss">
  h2 {
    margin: 1rem 0 0 1rem;
    color: #fff;
    text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000,
      1px 1px 0 #000;
  }
  p {
    white-space: pre-line;
  }
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: max-content;
    width: auto;
    background-color: white;
    text-align: center;
    border-radius: 1rem;
    margin: 0.5rem 1rem 1.5rem 1rem;
  }
  .loading-bar {
    position: relative;
    width: 300px;
    height: 30px;
    margin-top: 1.5rem;
    border-radius: 0 15px 15px 0;
    background-color: rgb(221, 221, 221);
    box-shadow: inset 0 -3em 3em rgb(139, 139, 139),
      0 0 0 2px rgba(139, 139, 139, 0.411),
      0.3em 0.3em 1em rgba(255, 255, 255, 0.3);
  }
  .percentage {
    position: absolute;
    height: 100%;
    background-color: #4a00b3;
    border-radius: 0 15px 15px 0;
  }

  .profilepic {
    grid-area: 1 / 1 / 2 / 2;
    margin-top: 1rem;
  }
  #profile-picture {
    border-radius: 50%;
    border: 2px solid grey;
  }
  .bar {
    grid-area: 2 / 1 / 3 / 2;
  }
  .info {
    grid-area: 1 / 2 / 2 / 3;
    margin: 0 1rem 1rem 1rem;
    h2 {
      color: #000;
      text-shadow: none;
    }
  }
  .buttons {
    grid-area: 2 / 2 / 3 / 3;
    margin-bottom: 0.5rem;
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

    cursor: pointer;
  }
  .butt:first-child:hover {
    box-shadow: inset 0 -3em 3em rgb(139, 139, 139), 0 0 0 2px rgb(29, 163, 51),
      0.3em 0.3em 1em rgba(23, 177, 31, 0.3);
  }
  .butt:last-child:hover {
    box-shadow: inset 0 -3em 3em rgb(139, 139, 139),
      0 0 0 2px rgba(201, 0, 0, 0.411), 0.3em 0.3em 1em rgba(255, 0, 0, 0.3);
  }

  .logo {
    width: 200px;
    margin-left: auto;
    margin-right: auto;
  }
  .routerlink {
    margin-bottom: 1rem;
  }

  @media (min-width: 980px) {
    .container {
      display: grid;
      grid-column-gap: 1px;
      grid-row-gap: 1px;
      width: 700px;
      height: 470px;
      margin: 1rem auto 0 auto;
      padding-bottom: 10px;
    }
    .profilepic {
      margin-left: 1rem;
    }
    .loading-bar {
      margin-left: 1.5rem;
    }
    .info {
      margin-top: 2rem;
      margin-right: 0.5rem;
      padding-right: 1rem;
      width: 350px;
      align-self: baseline;
      height: 320px;
    }
    .routerlink {
      margin-bottom: 0;
    }
  }
</style>
