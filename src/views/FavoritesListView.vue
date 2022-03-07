<template>
  <ResponsiveNavigation
    :nav-links="navLinks"
    background="#fff"
    link-color="#5E5E5E"
    hover-background="#ddd"
  />
  <h2>Favoritprofiler</h2>
  <div v-if="users" id="profiles-container">
    <div class="profile-card" v-for="user in users" :key="user.id">
      <router-link class="link-style" :to="'/favorite/' + user.id"
        ><img
          :src="usersData[user.id - 1].picture"
          alt="Profile picture"
          class="profile-picture2"
        />
      </router-link>
      <div class="profile-information">
        <div class="name-age">
          <p>{{ usersData[user.id - 1].name }}</p>
          <p>{{ usersData[user.id - 1].age }} år</p>
        </div>
        <p class="read-more">
          <router-link class="link-style" :to="'/favorite/' + user.id"
            >Visa mer...</router-link
          >
        </p>
      </div>
    </div>
  </div>
  <div v-else id="no-favorites-container">
    <p>Du har inga favoriter ännu.</p>
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
        users: JSON.parse(localStorage.getItem('favoritedProfiles')),
        usersData: usersData,
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
  #no-favorites-container {
    background-color: white;
    text-align: center;
    margin: 1rem;
    border-radius: 1rem;
    padding-bottom: 0.5rem;
    height: 300px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  #profiles-container {
    margin-top: 0;
    align-self: center;
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-content: center;
    padding-bottom: 0.5rem;
  }
  .profile-card {
    display: flex;
    flex-direction: column;
    background-color: #fff;
    border-radius: 16px;
    box-shadow: 0 3px 4px 1px rgba(0, 0, 0, 0.25);
    width: 170px;
    max-height: 100%;
    margin: 0.5rem auto 0.5rem auto;
    margin-left: auto;
    margin-right: auto;
    padding: 0;
  }
  .profile-picture2 {
    align-self: center;
    width: 150px;
    border: 2px solid grey;
    border-radius: 50%;
    margin-top: 0.75rem;
  }
  .name-age {
    display: flex;
    justify-content: space-evenly;
  }
  .read-more {
    float: right;
    margin-right: 1.25rem;
    color: #664692;
  }
  .link-style {
    display: flex;
    justify-content: center;
    text-decoration: none;
    color: #664692;
  }
  a:visited {
    color: #664692;
  }

  @media screen and (min-width: 580px) {
    #no-favorites.container {
      margin-left: auto;
      margin-right: auto;
      width: 500px;
      padding: 0;
      border-radius: 1rem;
    }
    #profiles-container {
      grid-template-columns: 1fr 1fr 1fr;
      padding: 1rem 0 0 0;
      margin-top: -0.5rem;
    }
    .profile-card {
      margin-bottom: 1rem;
    }
  }

  @media screen and (min-width: 768px) {
    #profiles-container {
      grid-template-columns: 1fr 1fr 1fr 1fr;
      padding: 1rem 0 0 0;
      margin-top: -0.5rem;
    }
    .profile-card {
      margin-bottom: 1rem;
    }
  }

  @media screen and (min-width: 980px) {
    #profiles-container {
      width: 980px;
      margin-left: auto;
      margin-right: auto;
      grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
      padding: 1rem 0 0 0;
      margin-top: -0.5rem;
    }
    .profile-card {
      margin-bottom: 1.5rem;
    }
  }

  @media screen and (min-width: 1180px) {
    #no-favorites-container {
      margin-left: auto;
      margin-right: auto;
      width: 500px;
    }
    #profiles-container {
      width: 1180px;
      margin-left: auto;
      margin-right: auto;
      grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
      padding: 1rem 0 0 0;
      margin-top: -0.5rem;
    }
    .profile-card {
      margin-bottom: 1.5rem;
    }
  }
</style>
