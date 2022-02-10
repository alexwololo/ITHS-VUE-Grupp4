<template>
  <h1>Favoritprofiler</h1>
  <div id="profiles-container">
    <div class="profile-card" v-for="user in users" :key="user.id">
      <img :src="user.picture" alt="Profile picture" class="profile-picture" />
      <div class="profile-information">
        <div class="name-age">
          <p>{{ user.name }}</p>
          <p>{{ user.age }} år</p>
        </div>
        <p class="read-more">Visa mer...</p>
      </div>
    </div>
  </div>
</template>

<script>
  import usersData from '../profiles.json'
  export default {
    created() {},
    data() {
      return {
        users: usersData
      }
    },
    methods: {}
  }
</script>

<style lang="scss" scoped>
  #profiles-container {
    align-self: center;
    background-color: white;
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-content: center;
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
  .profile-picture {
    align-self: center;
    width: 150px;
    border: 1px solid grey;
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
  }
  // p {
  //   white-space: pre-line;
  // }
</style>
