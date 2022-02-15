<script>
  export default {
    emits: ['show-message'],
    data() {
      return { message: false, s: '', t: '', u: '' }
    },
    methods: {
      regUser() {
        this.$store.commit('setUser', this.s)
        this.$store.commit('setEmail', this.t)
        this.$store.commit('setPassword', this.u)
        console.log(this.s)
        this.message = !this.message
      },
      welcomeUser() {
        this.$emit('show-message')
      }
    }
  }
</script>

<template>
  <RouterView />
  <h3 id="skapakonto">Skapa nytt konto</h3>
  <div class="wrapper">
    <label id="userlabel" for="username">Användarnamn</label>
    <input v-model="s" id="username" type="text" placeholder="Användarnamn" />

    <label class="labels" for="email">Email</label>
    <input v-model="t" id="email" type="text" placeholder="Mail" />

    <label class="labels" for="password">Lösenord</label>
    <input v-model="u" id="password" type="password" placeholder="Lösenord" />
    <input
      @click="regUser"
      @show-message="welcomeUser"
      id="button"
      type="button"
      value="Registrera"
    />
    <a id="loginLink" href="">Logga in</a>
    <div v-if="message">
      <h3>Välkommen {{ this.$store.state.user }}!</h3>
    </div>
  </div>
</template>

<style scoped>
  .wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    background-color: rgba(255, 255, 255, 0.5);
    padding: 20px;
    margin-top: 50px;
    border-radius: 10px;
    margin-left: 30px;
    margin-right: 30px;
    color: black;
  }

  #username {
    border-radius: 7px;
    padding: 8px;
    border: none;
  }

  #email {
    border-radius: 7px;
    padding: 8px;
    border: none;
  }

  #password {
    border-radius: 7px;
    padding: 8px;
    border: none;
  }

  #skapakonto {
    color: white;
    text-align: center;
  }

  #button {
    margin-top: 10px;
    background-color: #6200ee;
    padding: 10px;
    color: white;
    border-radius: 10px;
    border: none;
  }

  .labels {
    margin-right: 140px;
    margin-bottom: 5px;
    font-size: 13px;
    margin-top: 5px;
  }

  #userlabel {
    margin-right: 85px;
    margin-bottom: 5px;
    font-size: 13px;
  }

  #loginLink {
    margin-top: 5px;
    font-size: 12px;
    color: black;
  }
</style>
