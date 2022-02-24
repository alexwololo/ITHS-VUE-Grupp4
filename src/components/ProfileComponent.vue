<template>
  <div id="profile-container">
    <div id="left-side">
      <div class="welcome">
        <h1>Välkommen, {{ this.$store.state.user }}!</h1>
      </div>
      <img
        :src="this.$store.state.picture"
        alt="Profile picture"
        class="profile-picture"
      />
      <div class="name-age">
        <h3>{{ this.$store.state.name }}, {{ this.$store.state.age }} år</h3>
      </div>
    </div>
    <div id="right-side">
      <div class="interests-container">
        <p class="profile-header">Intressen & Hobbies:</p>
        <ul>
          <li
            class="interests"
            v-for="interest in this.$store.state.interests.split(', ')"
            :key="interest.length"
          >
            {{ interest }}
          </li>
        </ul>
      </div>
      <p class="profile-header bio">{{ this.$store.state.biography }}</p>
      <p class="to-messages">
        <router-link class="routerlink" :to="'/date'">Börja dejta</router-link>
      </p>
    </div>
  </div>
</template>

<script></script>

<style lang="scss" scoped>
  .welcome {
    display: flex;
    justify-content: center;
  }

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
    background-color: #6200ee;
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
    background-color: orange;
    box-shadow: inset 0 -0.6em 0 -0.35em rgba(0, 0, 0, 0.17);
    border-radius: 4px;
    padding: 0.7em 1.4em;
    color: #fff;
  }
  .routerlink:hover,
  .routerlink:focus {
    background-color: darkorange;
  }

  @media screen and (min-width: 980px) {
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
