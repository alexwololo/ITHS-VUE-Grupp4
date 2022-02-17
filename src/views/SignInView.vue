<script>
  import TheHeader from '../components/TheHeader.vue'

  export default {
    components: { TheHeader },
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

<template>
  <TheHeader />
  <div class="wrapper">
    <h3 id="skapakonto">Logga in på konto</h3>
    <label id="elabel" for="email">Email</label>
    <input v-model="t" id="email" type="text" placeholder="Mail" />
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

  #elabel {
    margin-right: 140px;
    margin-bottom: 5px;
    font-size: 13px;
    margin-top: 5px;
  }

  #plabel {
    margin-right: 120px;
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
