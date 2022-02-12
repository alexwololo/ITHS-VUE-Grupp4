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
        <p class="read-more">
          <router-link class="link-style" :to="'/favorite/' + user.id"
            >Visa mer...</router-link
          >
        </p>
      </div>
    </div>
  </div>
</template>

<script>
  import usersData from '../profiles.json'
  export default {
    data() {
      return {
        users: usersData
      }
    }
  }
</script>

<style lang="scss" scoped>
  h1 {
    margin: 0;
  }
  #profiles-container {
    align-self: center;
    // background-color: white;
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
  .profile-picture {
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
    color: #6200ee;
  }
  .link-style {
    text-decoration: none;
  }

  @media screen and (min-width: 980px) {
    #profiles-container {
      grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
      padding: 1rem 0 0 0;
    }
    .profile-card {
      margin-bottom: 1.5rem;
    }
  }
</style>
