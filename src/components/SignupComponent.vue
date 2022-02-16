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
  <h2 id="skapakonto">Skapa nytt konto</h2>
  <div class="wrapper">
    <label id="userlabel" for="username"
      >Användarnamn
      <input v-model="s" id="username" type="text" placeholder="Användarnamn"
    /></label>

    <label id="elabel" for="email"
      >email <input v-model="t" id="email" type="text" placeholder="Mail"
    /></label>

    <label id="plabel" for="password"
      >Lösenord
      <input v-model="u" id="password" type="password" placeholder="Lösenord"
    /></label>
    <input
      @click="regUser"
      @show-message="welcomeUser"
      id="button"
      type="button"
      value="Registrera"
    />
    <RouterLink to="/signin"><a id="loginLink" href="">Logga in</a></RouterLink>
    <div v-if="message">
      <h3>Välkommen {{ this.$store.state.user }}!</h3>
    </div>
  </div>
</template>

<style scoped>
  h2 {
    color: #fff;
    text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000,
      1px 1px 0 #000;
  }
  .wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    background-color: rgba(255, 255, 255, 0.5);
    padding: 20px;
    margin-top: 30px;
    border-radius: 10px;
    margin-left: 30px;
    margin-right: 30px;
    color: black;
  }

  label {
    display: flex;
    flex-direction: column;
  }

  input[type='text'],
  input[type='password'] {
    border-radius: 7px;
    margin-top: 0.25rem;
    padding: 8px;
    border: none;
    outline: 2px solid lightgrey;
    background-color: white;
    font-family: 'Roboto', sans-serif;
    font-size: 1rem;
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
    border-radius: 4px;
    border: none;
    font-family: 'Roboto', sans-serif;
    font-size: 1rem;
    margin-bottom: 1rem;
  }

  #elabel,
  #plabel,
  #userlabel {
    text-align: left;
    margin: 0 1rem 1rem 1rem;
  }

  #loginLink {
    margin-top: 5px;
    color: black;
  }
</style>
