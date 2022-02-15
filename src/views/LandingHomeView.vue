<template>
  <TheHeader />

  <div class="container-landing">
    <div class="landing-view">
      <h1>SLOGAN</h1>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia
        dolorum blanditiis quam eligendi. Illum magnam quod soluta, saepe
        accusamus asperiores.
      </p>
      <router-link to="/signup" class="register"
        >Registrera ett konto</router-link
      >
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
    border-radius: 2px;
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.11);
  }

  @media (max-width: 768px) {
    .container-landing a {
      display: block;
    }
  }
</style>
