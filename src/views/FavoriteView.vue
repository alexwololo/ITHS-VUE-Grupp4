<template>
  <ResponsiveNavigation
    :nav-links="navLinks"
    background="#fff"
    link-color="#5E5E5E"
    hover-background="#ddd"
  />
  <div id="profile-container">
    <div id="left-side">
      <img
        :src="users[profileId].picture"
        alt="Profile picture"
        class="profile-picture"
      />
      <div class="name-age">
        <h1>{{ users[profileId].name }}</h1>
        <h1>{{ users[profileId].age }} år</h1>
      </div>
    </div>
    <div id="right-side">
      <div id="right-top">
        <button
          class="block-button"
          v-if="buttonNotClicked"
          @click="blockButton"
        >
          block
        </button>
        <button class="block-button" v-else @click="unblockButton">
          unblock
        </button>
      </div>
      <div class="interests-container">
        <p class="profile-header">Intressen & Hobbies:</p>
        <ul>
          <li
            class="interests"
            v-for="interest in interests"
            :key="interest.length"
          >
            {{ interest }}
          </li>
        </ul>
      </div>
      <p class="profile-header bio">{{ users[profileId].biography }}</p>
      <p class="to-messages">
        <router-link
          v-if="buttonNotClicked"
          class="routerlink"
          :to="'/chat/' + this.$route.params.profileid"
          >Skicka meddelande till {{ users[profileId].name }}</router-link
        >
        <router-link
          v-else
          class="routerlink-disabled"
          :to="'/chat/' + this.$route.params.profileid"
          >Du har blockat {{ users[profileId].name }}</router-link
        >
        <!-- <button v-else class="routerlink-disabled">
          Du har blockat {{ users[profileId].name }}
        </button> -->
      </p>
    </div>
  </div>
</template>

<script>
  import usersData from '../og-profiles.json'
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
        ],
        users: usersData,
        profileId: this.$route.params.profileid - 1,
        interests: usersData[this.$route.params.profileid - 1].interests,
        buttonClicked: false,
        buttonNotClicked: true,
        blocked: []
      }
    },
    methods: {
      blockButton() {
        this.buttonClicked = true
        this.buttonNotClicked = false
        this.$store.commit('setButton', this.buttonClicked)
        // this.blocked.push({ id: this.users[this.profileId].id })
        // var existingEntries = JSON.parse(
        //   localStorage.getItem('blockedProfiles')
        // )
        // if (existingEntries === null) existingEntries = []
        // var idNumber = this.users[this.profileId].id - 1
        // var entry = {
        //   id: idNumber
        // }
        // if (existingEntries.some((e) => e.id === idNumber)) {
        //   return
        // } else {
        //   existingEntries.push(entry)
        //   localStorage.setItem(
        //     'blockedProfiles',
        //     JSON.stringify(existingEntries)
        //   )
        // }
      },
      unblockButton() {
        this.buttonClicked = false
        this.buttonNotClicked = true
        this.$store.commit('setButton', this.buttonClicked)
      }
    }
  }
</script>

<style lang="scss" scoped>
  p {
    white-space: pre-line;
  }
  .profile-header {
    margin: 0.5rem 0.5rem 0 1rem;
  }
  .bio {
    max-width: 500px;
  }
  #profile-container {
    background-color: white;
    margin: 1rem;
    padding: 1rem 0;
    border-radius: 1rem;
    ul {
      display: flex;
      flex-wrap: wrap;
      padding: 0;
      margin: 0;
    }
    .profile-picture {
      margin: 0 auto;
      display: flex;
      width: 250px;
      height: 250px;
      border: 2px solid grey;
      border-radius: 50%;
      overflow: hidden;
    }
  }
  .name-age {
    display: flex;
    justify-content: space-evenly;
    margin-left: 4rem;
    margin-right: 4rem;
    h1 {
      margin: 1rem 0 0 0;
    }
  }
  .interests-container {
    border-bottom: 3px solid #e6e6e6;
    padding-bottom: 10px;
    margin-bottom: 20px;
  }
  .interests {
    list-style: none;
    background-color: #664692;
    border-radius: 10px;
    color: #fff;
    padding: 0.5rem;
    margin: 0.5rem 1rem;
    float: left;
  }
  .to-messages {
    display: flex;
    margin: 1rem auto 0 auto;
  }
  .routerlink {
    margin: 1rem auto 1rem auto;
    text-decoration: none;
    background-color: #6200ee;
    box-shadow: inset 0 -0.6em 0 -0.35em rgba(0, 0, 0, 0.17);
    border-radius: 4px;
    padding: 0.7em 1.4em;
    color: #fff;
  }
  .routerlink:hover,
  .routerlink:focus {
    background-color: #4a00b3;
  }

  .routerlink-disabled {
    margin: 1rem auto 1rem auto;
    text-decoration: none;
    background-color: grey;
    box-shadow: inset 0 -0.6em 0 -0.35em rgba(0, 0, 0, 0.17);
    border-radius: 4px;
    padding: 0.7em 1.4em;
    color: #fff;
    pointer-events: none;
    cursor: default;
  }
  #right-top {
    text-align: center;
  }
  @media screen and (min-width: 980px) {
    #right-top {
      text-align: right;
    }
    #profile-container {
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 2rem 5rem;
      padding: 0;
      border-radius: 1rem;
    }
    .name-age {
      margin-left: 0;
      margin-right: 0;
    }
    #left-side {
      margin-right: 4rem;
      margin: 2rem 4rem 1.4rem 0;
    }

    #right-side {
      margin-top: 2rem;
      margin-bottom: 1.5rem;
    }
    .interests-container {
      border-bottom: 3px solid #e6e6e6;
      padding-bottom: 10px;
      margin-bottom: 20px;
    }
  }

  @media screen and (min-width: 1200px) {
    #profile-container {
      margin: 2rem 10rem;
    }
  }
</style>
