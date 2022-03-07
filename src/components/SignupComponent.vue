<template>
  <h2 id="skapakonto">Skapa nytt konto</h2>
  <div class="wrapper">
    <label id="userlabel" for="username"
      >Användarnamn
      <input
        v-model="s"
        id="username"
        type="text"
        placeholder="Användarnamn"
        @blur="nameIsValid()"
      /><span class="warning-text" v-if="msg.username">{{ msg.username }}</span>
    </label>
    <label id="elabel" for="email"
      >Email
      <input
        v-model="t"
        id="email"
        type="text"
        placeholder="Mail"
        @blur="validateEmail()"
      /><span class="warning-text" v-if="msg.email">{{
        msg.email
      }}</span></label
    >

    <label id="plabel" for="password"
      >Lösenord
      <input
        v-model="u"
        id="password"
        type="password"
        placeholder="Lösenord"
        @blur="passwordIsValid()"
      /><span class="warning-text" v-if="msg.password">{{ msg.password }}</span>
    </label>
    <!-- -->
    <input
      :disabled="isRegisterDisabled"
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

<script>
  export default {
    emits: ['show-message'],
    data() {
      return {
        message: false,
        s: '',
        t: '',
        u: '',
        msg: [],
        usernameValid: false,
        emailValid: false,
        passwordValid: false,
        isRegisterDisabled: true,
        usernameIsTouched: Boolean(false),
        emailIsTouched: Boolean(false),
        passwordIsTouched: Boolean(false)
      }
    },
    watch: {
      t(value) {
        // binding this till data value i email input
        this.email = value
        this.validateEmail(value)
        this.formCheckValidation()
      },
      s(value) {
        this.username = value
        this.nameIsValid(value)
        this.formCheckValidation()
      },
      u(value) {
        this.password = value
        this.passwordIsValid(value)
        this.formCheckValidation()
      }
    },

    methods: {
      regUser() {
        console.log('testing', 'register')
        this.$store.commit('setUser', this.s)
        this.$store.commit('setEmail', this.t)
        this.$store.commit('setPassword', this.u)
        this.message = !this.message
      },
      formCheckValidation() {
        if (this.passwordValid && this.emailValid && this.usernameValid) {
          this.isRegisterDisabled = false
        } else {
          this.isRegisterDisabled = true
        }
      },
      welcomeUser() {
        this.$emit('show-message')
      },

      validateEmail() {
        // eslint-disable-next-line no-useless-escape
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.t)) {
          this.msg['email'] = ''
          this.emailValid = true
        } else {
          this.msg['email'] = 'Invalid Email Address'
          this.emailValid = false
        }
      },
      nameIsValid() {
        const username = this.s
        if (username.length >= 5 && username.length <= 20) {
          this.msg['username'] = ''
          this.usernameValid = true
        } else {
          this.msg['username'] = 'Måste innehålla 5-20 tecken'
          this.usernameValid = false
        }
        // return
      },
      emailIsValid() {
        const email = this.userInfo.email
        return email.length > 5 && email.includes('@')
      },
      passwordIsValid() {
        const password = this.u
        if (password.length >= 5 && password.length <= 20) {
          this.msg['password'] = ''
          this.passwordValid = true
        } else {
          this.msg['password'] = 'Måste innehålla 5-20 tecken'
          this.passwordValid = false
        }
      }
    }
  }
</script>

<style scoped>
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
    font-family: 'Roboto', sans-serif;
    font-size: 1rem;
    margin-bottom: 1rem;
    cursor: pointer;
  }

  #button:hover {
    background-color: #4a00b3;
  }

  #button:disabled {
    background-color: #767676;
    cursor: default;
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

  .warning-text {
    color: red;
    margin-top: 5px;
    font-size: 12px;
  }
</style>
