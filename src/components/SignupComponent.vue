<script>
  import store from '../store'
  export default {
    store: [store],
    data: () => ({
      userInfo: {
        username: '',
        email: '',
        password: ''
      },
      visibleComponent: '',
      visibleHeader: Boolean(true),
      usernameIsTouched: Boolean(false),
      emailIsTouched: Boolean(false),
      passwordIsTouched: Boolean(false)
    }),
    methods: {
      saveAndNext() {
        this.saveInput(this.userInfo)

        this.visibleComponent = 'welcome'
        this.$emit('click', this.visibleComponent, this.visibleHeader)
      }
    },
    computed: {
      nameIsValid() {
        const username = this.userInfo.username
        return username.length >= 5 && username.length <= 20
      },
      emailIsValid() {
        const email = this.userInfo.email
        return email.length > 5 && email.includes('@')
      },
      passwordIsValid() {
        const password = this.userInfo.password
        return password.length >= 5 && password.length <= 20
      },
      formIsValid() {
        return this.nameIsValid && this.emailIsValid && this.passwordIsValid
      }
    }
  }
</script>

<template>
  <div class="wrapper">
    <h3 id="skapakonto">Skapa nytt konto</h3>

    <form @submit.prevent="submitForm" autocomplete="off">
      <label class="labels" for="username">Användarnamn</label>
      <input
        type="text"
        placeholder="Användarnamn"
        v-model="userInfo.username"
        key="username"
        id="username"
        @blur.once="usernameIsTouched = true"
      />
      <p v-if="!nameIsValid && usernameIsTouched" class="invalidMessage">
        Måste innehålla 5-20 tecken
      </p>

      <label class="labels" for="email">Email</label>
      <input
        type="text"
        placeholder="Mail"
        v-model="userInfo.email"
        key="email"
        id="email"
        @blur.once="emailIsTouched = true"
      />
      <p v-if="!emailIsValid && emailIsTouched" class="invalidMessage">
        Ogiltlig email adress
      </p>

      <label class="labels" for="password">Lösenord</label>
      <input
        type="text"
        placeholder="Lösenord"
        v-model="userInfo.password"
        key="password"
        id="password"
        @blur.once="passwordIsTouched = true"
      />
      <p v-if="!passwordIsValid && passwordIsTouched" class="invalidMessage">
        Måste innehålla 5-20 tecken
      </p>
    </form>
    <!-- <button :disabled="!formIsValid" class="button" @click="saveAndNext" /> -->

    <!-- @click="nextButton"" -->

    <input
      :disabled="!formIsValid"
      @click="saveAndNext"
      @show-message="welcomeUser"
      id="button"
      type="button"
      value="Registrera"
    />
  </div>
</template>

<style scoped>
  .invalidMessage {
    margin-top: 0em;
    font-size: 0.7em;
    color: red;
  }

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
  form {
    display: flex;
    flex-direction: column;
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
  .labels {
    text-align: left;
    margin-bottom: 5px;
    font-size: 13px;
    margin-top: 5px;
  }

  #userlabel {
    margin-right: 85px;
    margin-bottom: 5px;
    font-size: 13px;
  }

  img {
    display: block;
    margin-left: auto;
    margin-right: auto;
  }

  input {
    border: 1px solid lightgrey;
    margin-bottom: 0.4em;
    border-radius: 7px;
    padding: 8px;
    border: none;
  }

  #button {
    margin-top: 10px;
    background-color: #6200ee;
    padding: 10px;
    color: white;
    border-radius: 10px;
    border: none;
    cursor: pointer;
  }
  #button:disabled {
    margin-top: 10px;
    background-color: #a5a5a5;
    padding: 10px;
    color: rgb(0, 0, 0);
    border-radius: 10px;
    border: none;
    cursor: pointer;
  }
</style>

<!-- PREV VERSION -->

<!-- <script>
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
</script> -->

<!-- <template>
  <RouterView />
  <h3 id="skapakonto">Skapa nytt konto</h3>
  <div class="wrapper">
    <label id="userlabel" for="username">Användarnamn</label>
    <input v-model="s" id="username" type="text" placeholder="Användarnamn" />

    <label class="labels" for="email">Email</label>
    <input v-model="t" id="email" type="text" placeholder="Mail" />

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
    <h3>{{ 'Välkommen ' + this.$store.state.user + '!' }}</h3>
  </div>
  <h1>Registrering</h1>
  <div class="wrapper">
    <form>
      <label for="username">Användarnamn:</label>
      <input v-model="s" id="username" type="text" placeholder="Användarnamn" />
      <br />
      <label for="email">Email:</label
      ><input v-model="t" id="email" type="text" placeholder="Mail" />
      <br />
      <label for="password">Lösen:</label
      ><input v-model="u" id="password" type="password" placeholder="Lösen" />
      <input @click="regUser" type="button" value="Registrera" />
    </form>
  </div> -->
<!-- </template> -->

<!-- <style scoped>
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
</style> -->
