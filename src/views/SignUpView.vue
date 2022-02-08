<script>
  export default {
    data() {
      return { userId: this.$store.state.user, s: '', t: '', u: '' }
    },
    methods: {
      blabla() {
        this.$store.commit('setUser', this.s)
        this.$store.commit('setEmail', this.t)
        this.$store.commit('setPassword', this.u)
        console.log(this.s)
        console.log(this.userId)
      }
    }
  }
</script>

<template>
  <RouterView />
  <h1>Registrering</h1>
  <div class="wrapper">
    <form>
      <label for="username">Användarnamn:</label>
      <input
        @input="blabla"
        v-model="s"
        id="username"
        type="text"
        placeholder="Användarnamn"
      />
      <br />
      <label for="email">Email:</label
      ><input
        @input="blabla"
        v-model="t"
        id="email"
        type="text"
        placeholder="Mail"
      />
      <br />
      <label for="password">Lösen:</label
      ><input
        @input="blabla"
        v-model="u"
        id="password"
        type="password"
        placeholder="Lösen"
      />
    </form>
    <button class="button">Registrera</button>
  </div>
</template>
