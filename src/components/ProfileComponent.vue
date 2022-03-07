<template>
  <div id="profile-container">
    <div id="left-side">
      <div class="welcome">
        <h1 v-if="this.$store.state.user.length">
          Välkommen, {{ this.$store.state.user }}!
        </h1>
        <h1 v-else>Välkommen, (inget användarnamn)!</h1>
      </div>
      <img
        v-if="this.$store.state.picture.length"
        :src="this.$store.state.picture"
        alt="Profile picture"
        class="profile-picture"
      />
      <img
        v-else
        src="assets/profilepics/no-profile-pic.png"
        alt="Profile picture"
        class="profile-picture"
      />
      <div class="name-age">
        <h3 v-if="this.$store.state.name.length">
          {{ this.$store.state.name }}, {{ this.$store.state.age }} år
        </h3>
        <h3 v-else>Inget namn, ingen ålder ifylld.</h3>
      </div>
    </div>
    <div id="right-side">
      <div id="right-top">
        <router-link :to="'/edit'">edit profile</router-link>
      </div>
      <div class="interests-container">
        <p class="profile-header">Intressen & Hobbies:</p>
        <ul v-if="this.$store.state.interests.length">
          <li
            class="interests"
            v-for="interest in this.$store.state.interests.split(',')"
            :key="interest.length"
          >
            {{ interest }}
          </li>
        </ul>
        <ul v-else>
          <li class="interests">No interests added.</li>
        </ul>
      </div>
      <p v-if="this.$store.state.biography.length" class="profile-header bio">
        {{ this.$store.state.biography }}
      </p>
      <p v-else class="profile-header bio">Biografi inte ifylld.</p>
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
    h1 {
      text-align: center;
    }
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
    background-color: orange;
    box-shadow: inset 0 -0.6em 0 -0.35em rgba(0, 0, 0, 0.17);
    border-radius: 4px;
    padding: 0.7em 1.4em;
    color: #2d2d2d;
  }
  .routerlink:hover,
  .routerlink:focus {
    background-color: darkorange;
  }

  #right-top {
    text-align: center;
    a,
    a:visited {
      color: #664692;
    }
    a:hover {
      color: #2e0f58;
    }
  }

  @media screen and (min-width: 980px) {
    #profile-container {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 80%;
      margin: 1rem 7rem 2rem 7rem;
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

    #right-top {
      text-align: right;
    }
    .interests-container {
      border-bottom: 3px solid #e6e6e6;
      padding-bottom: 10px;
      margin-bottom: 20px;
    }
  }

  @media screen and (min-width: 1200px) {
    #profile-container {
      margin: 1rem 9rem 2rem 9rem;
    }
  }
</style>
