<template>
  <ResponsiveNavigation
    :nav-links="navLinks"
    background="#fff"
    link-color="#5E5E5E"
    hover-background="#ddd"
  />
  <h2>Redigera profil</h2>
  <div id="edit-container">
    <div id="left-side">
      <UploadImage />
    </div>
    <div id="right-side">
      <EditProfileParameters />
      <input
        id="saveProfile"
        type="button"
        value="Spara din profil"
        @click="saveChanges()"
      />
    </div>
  </div>
</template>

<script>
  import UploadImage from '../components/UploadImage.vue'
  import EditProfileParameters from '../components/EditProfileParameters.vue'
  import ResponsiveNavigation from '../components/ResponsiveNavigation.vue'

  export default {
    data() {
      return {
        nameValue: '',
        ageValue: '',
        interestsValue: '',
        biographyValue: '',
        pictureValue: '',
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
    components: {
      UploadImage,
      EditProfileParameters,
      ResponsiveNavigation
    },
    methods: {
      saveChanges() {
        this.nameValue = this.$store.state.name
        this.ageValue = this.$store.state.age
        this.interestsValue = this.$store.state.interests
        this.biographyValue = this.$store.state.biography
        this.pictureValue = this.$store.state.picture
        this.$store.commit('setName', this.nameValue)
        this.$store.commit('setAge', this.ageValue)
        this.$store.commit('setInterests', this.interestsValue)
        this.$store.commit('setBiography', this.biographyValue)
        this.$store.commit('setPicture', this.pictureValue)
      }
    }
  }
</script>

<style lang="scss" scoped>
  $btn: #6200ee;
  h2 {
    display: flex;
    padding: 1rem 0 1rem 1rem;
    margin: 0;
    background-color: white;
    color: #000;
  }
  #edit-container {
    background-color: white;
    text-align: center;
    margin: 0 auto;
    padding-bottom: 0.5rem;
  }
  #saveProfile {
    border: none;
    font-size: 1rem;
    border-radius: 4px;
    box-sizing: border-box;
    text-decoration: none;
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    color: #ffffff;
    background-color: $btn;
    box-shadow: inset 0 -0.6em 0 -0.35em rgba(0, 0, 0, 0.17);
    text-align: center;
    display: inline-block;
    height: max-content;
    width: max-content;
    padding: 0.7em 1.4em;
    margin-bottom: 1rem;
    cursor: pointer;
  }
  #saveProfile:hover,
  #saveProfile:focus {
    background-color: #4a00b3;
  }
  #saveProfile:active {
    top: 0.1em;
  }

  @media screen and (min-width: 768px) {
    h2 {
      margin-top: 1rem;
      margin-left: 1rem;
      padding: 0;
      background-color: transparent;
      color: #fff;
      text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000,
        1px 1px 0 #000;
    }
    #edit-container {
      margin: 1rem 3rem;
      padding: 2rem 1rem 1rem 1rem;
      border-radius: 1rem;
    }
  }

  @media screen and (min-width: 980px) {
    #edit-container {
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 1rem 3rem;
      padding: 0;
    }
    #left-side {
      margin-right: 4rem;
    }
    #right-side {
      margin-top: 2rem;
      margin-bottom: 1rem;
    }
  }

  @media screen and (min-width: 1200px) {
    #edit-container {
      margin: 1rem 10rem;
    }
  }
</style>
