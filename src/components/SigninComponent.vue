<template>
  <h2 id="skapakonto">Logga in på konto</h2>
  <div class="wrapper">
    <label id="elabel" for="email">Email</label>
    <input
      v-model="t"
      id="email"
      type="text"
      placeholder="Mail"
      @blur.once="usernameIsTouched = true"
    />
    <small style="color: red" v-if="this.errUser == true"
      >Email Not Match</small
    >
    <label id="plabel" for="password">Lösenord</label>
    <input v-model="u" id="password" type="password" placeholder="Lösenord" />
    <small style="color: red" v-if="this.errPass == true"
      >Password Not Match</small
    >
    <input
      @click="loginUser"
      @show-message="welcomeUser"
      id="button"
      type="button"
      value="Logga in"
    />
    <RouterLink to="/signup"
      ><a id="loginLink" href="">Registrera</a></RouterLink
    >
    <div v-if="message">
      <h3>Välkommen {{ this.$store.state.user }}!</h3>
    </div>
  </div>
</template>

<script>
  export default {
    emits: ['show-message'],
    data() {
      return {
        message: false,
        s: '',
        t: '',
        u: '',
        user: '',
        errUser: false,
        errPass: false
      }
    },
    methods: {
      loginUser() {
        this.user = JSON.parse(localStorage.getItem('vuex'))
        if (this.user.email == this.t) {
          if (this.user.password == this.u) {
            this.$store.state.user = this.user.user
            this.$store.state.password = this.user.password
            this.$router.push({
              name: 'lounge'
            })
          } else {
            this.errPass = true
          }
        } else {
          this.errUser = true
        }
        this.message = !this.message
      },
      welcomeUser() {
        this.$emit('show-message')
      }
    }
  }
</script>

<style scoped>
  .wrapper {
    font-size: 1rem;
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

  input {
    font-size: 1rem;
    font-family: 'Roboto', sans-serif;
  }

  input[type='text'],
  input[type='password'] {
    border-radius: 7px;
    margin-top: 0.25rem;
    padding: 8px;
    border: none;
    outline: 2px solid lightgrey;
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
    text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000,
      1px 1px 0 #000;
  }

  #button {
    margin-top: 10px;
    background-color: #6200ee;
    box-shadow: inset 0 -0.6em 0 -0.35em rgba(0, 0, 0, 0.17);
    padding: 10px;
    color: white;
    border-radius: 4px;
    border: none;
    font-size: 1rem;
    margin-bottom: 1rem;
    cursor: pointer;
  }

  #button:hover {
    background-color: #4a00b3;
  }

  #elabel {
    margin-right: 140px;
    margin-bottom: 5px;
    margin-top: 5px;
  }

  #plabel {
    margin-right: 120px;
    margin-bottom: 5px;
    margin-top: 5px;
  }

  #userlabel {
    margin-right: 85px;
    margin-bottom: 5px;
  }

  #loginLink {
    margin-top: 5px;
    color: black;
  }
</style>
