<template>
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
      <p class="profile-header">{{ users[profileId].biography }}</p>
      <p class="to-messages">
        <router-link class="routerlink" :to="'/'"
          >Skicka meddelande till {{ users[profileId].name }}</router-link
        >
      </p>
    </div>
  </div>
</template>

<script>
  import usersData from '../profiles.json'
  export default {
    data() {
      return {
        users: usersData,
        profileId: this.$route.params.profileid - 1,
        interests: usersData[this.$route.params.profileid - 1].interests
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
  #profile-container {
    background-color: white;
    padding-top: 2rem;
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
    margin-right: 4rem;
    margin-left: 4rem;
    h1 {
      margin: 1rem 0 0 0;
    }
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
    margin: 0 auto 0 auto;
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

  @media screen and (min-width: 980px) {
    #profile-container {
      display: flex;
      justify-content: center;
      align-items: center;
    }
    #left-side {
      margin-right: 4rem;
    }
    #right-side {
      margin-top: 2rem;
      margin-bottom: 1rem;
    }
  }
</style>
