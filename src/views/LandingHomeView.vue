<template>
  <TheHeader />

  <div class="container-landing">
    <div class="landing-view">
      <h1>Hitta den du söker!</h1>
      <p>Träffa och chatta med nya personer i närheten.</p>
      <router-link to="/signup" class="register">Skapa ett konto</router-link>
    </div>
  </div>
</template>

<script>
  import TheHeader from '../components/TheHeader.vue'

  export default {
    components: { TheHeader }
  }
</script>

<style>
  body {
    background: url(assets/photo-1542338347-4fff3276af78.jpg) no-repeat center
      center fixed;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    margin: 0;
    min-height: 100vh;
  }

  .landing-view {
    min-width: 200px;
    padding: 60px 30px;
    margin: 60px 30%;
    text-align: left;
    background-color: rgba(255, 255, 255, 0.5);
    border-radius: 1rem;
  }

  .container-landing a {
    max-width: 200px;
  }

  .landing-view p {
    color: black;
    font-weight: bold;
    margin-bottom: 40px;
  }
  .register {
    text-decoration: none;
    font-weight: bold;
    background-color: #6200ee;
    color: white;
    padding: 11px 25px;
    border-radius: 4px;
    box-shadow: inset 0 -0.6em 0 -0.35em rgba(0, 0, 0, 0.17);
  }
  .register:hover,
  .register:focus {
    background-color: #4a00b3;
  }

  @media (max-width: 768px) {
    .landing-view {
      margin: 40px auto;
      padding-left: 20%;
      padding-right: 20%;
      text-align: center;
    }

    .container-landing a {
      display: block;
      margin: 0 auto;
    }
  }
</style>
