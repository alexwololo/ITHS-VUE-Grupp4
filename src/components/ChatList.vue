<template>
  <div v-if="users" id="wrapper">
    <div id="messageBox">
      <h3>Meddelanden</h3>
    </div>
    <ul v-for="user in users" :key="user.id">
      <router-link id="router" :to="'/chat/' + user.id"
        ><li class="dateList">
          <img
            width="50"
            class="pics"
            :src="usersData[user.id - 1].picture"
            alt="Profile picture"
          />
          <p>{{ usersData[user.id - 1].name }}</p>
          <p>{{ usersData[user.id - 1].age }} år</p>
        </li></router-link
      >
    </ul>
  </div>
  <div v-else id="wrapper">
    <div id="messageBox">
      <h3>Meddelanden</h3>
    </div>
    <ul>
      <router-link id="router" :to="'/date'">
        <li id="wrapper2" class="dateList">
          Du har ännu inga kontakter. Börja dejta för att skapa nya kontakter.
        </li>
      </router-link>
    </ul>
  </div>
</template>

<script>
  import usersData from '../og-profiles.json'
  export default {
    data() {
      return {
        users: JSON.parse(localStorage.getItem('favoritedProfiles')),
        usersData: usersData,
        profileId: this.$route.params.profileid - 1
      }
    }
  }
</script>

<style scoped>
  #wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  #messageBox {
    background-color: #6200ee;
    color: white;
    width: 100%;
    text-align: center;
  }

  .pics {
    border-radius: 50%;
    border: 1px solid grey;
  }

  .dateList {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    list-style-type: none;
    background-color: white;
    padding: 15px;
  }

  ul {
    width: 100%;
    padding-left: 0;
    margin: 0;
  }

  ul li:hover {
    background-color: rgb(197, 188, 188);
  }

  #router {
    text-decoration: none;
    color: black;
  }

  #wrapper2 {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
</style>
