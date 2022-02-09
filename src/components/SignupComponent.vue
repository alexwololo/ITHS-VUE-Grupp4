<script>
  export default {
    data() {
      return { s: '', t: '', u: '' }
    },
    methods: {
      regUser() {
        this.$store.commit('setUser', this.s)
        this.$store.commit('setEmail', this.t)
        this.$store.commit('setPassword', this.u)
        console.log(this.s)
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
        v-model="s"
        id="username"
        type="text"
        placeholder="Användarnamn"
      />
      <br />
      <label for="email">Email:</label
      ><input
        v-model="t"
        id="email"
        type="text"
        placeholder="Mail"
      />
      <br />
      <label for="password">Lösen:</label
      ><input
        v-model="u"
        id="password"
        type="password"
        placeholder="Lösen"
      />
      <input @click="regUser" type="button" value="Registrera" />
    </form>
  </div>
</template>
