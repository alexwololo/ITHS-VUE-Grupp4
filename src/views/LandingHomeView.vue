<template>
  <div class="container-landing">
    <div class="landing-view">
      <h1>SLOGAN</h1>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia
        dolorum blanditiis quam eligendi. Illum magnam quod soluta, saepe
        accusamus asperiores.
      </p>
      <a href="#" class="register">Registrera ett konto</a>
    </div>
  </div>
</template>

<script></script>

<style>
  body {
    background: url(assets/photo-1542338347-4fff3276af78.jpg) no-repeat center
      center fixed;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
  }

  .landing-view {
    margin: 50px auto;
    min-width: 200px;
    padding: 60px 30px;
    text-align: left;
    background-color: rgba(128, 128, 128, 0.582);
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

  @media (max-width: 375px) {
    .landing-view {
      margin: 30px auto;
      padding: 30px 15px;
    }

    .register {
      min-width: 70%;
      float: left;
    }
  }
</style>
