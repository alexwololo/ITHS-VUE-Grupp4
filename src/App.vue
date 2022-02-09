<template>
  <TheHeader />
  <LandingHomeView />
  <RouterView />
</template>

<script>
  import TheHeader from './components/TheHeader.vue'
  import LandingHomeView from './views/LandingHomeView.vue'
  export default {
    components: {
      TheHeader,
      LandingHomeView
    }
  }
</script>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;700&display=swap');

  html {
    font-family: 'Roboto', sans-serif;
  }

  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
  }
</style>
