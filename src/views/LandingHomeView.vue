<template>
  <header>
    <NavBar />
  </header>
</template>

<script>
  import NavBar from '../components/NavBar.vue'

  export default {
    components: {
      NavBar
    }
  }
</script>

<style>
  body {
    box-sizing: border-box;
    font-family: sans-serif;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }

  header {
    width: 100vw;
    background-color: #222;
    padding: 15px;
  }
</style>
