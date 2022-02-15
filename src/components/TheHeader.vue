<template>
  <header>
    <nav>
      <i class="fas fa-bars" />
      <h2><router-link to="/">Swindlr</router-link></h2>
      <ul>
        <li><a href="#" class="options">Produkter</a></li>
        <li><a href="#" class="options">Support</a></li>
        <router-link to="/signin" class="login">Logga in</router-link>
      </ul>
    </nav>
  </header>
</template>

<script></script>

<style scoped>
  header {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  nav {
    width: 90%;
    margin: auto;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding-right: 30px;
    left: 95%;
    top: 16px;
  }

  i {
    font-size: 2rem;
  }

  nav li {
    float: left;
  }

  .login {
    background-color: #6200ee;
    color: white;
    padding: 11px 25px;
    border-radius: 2px;
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.228);
    position: absolute;
    left: 85%;
  }

  header a {
    text-decoration: none;
    color: black;
    display: inline-block;
    padding: 0.75rem 1.5rem;
  }

  .options:hover {
    text-decoration: underline;
  }

  ul {
    list-style: none;
  }

  li {
    display: inline;
    padding-right: 0.9em;
    padding-left: 0.9em;
  }

  @media (max-width: 768px) {
    ul {
      display: none;
    }
  }

  @media (min-width: 769px) {
    ul {
      display: block;
    }
  }
</style>
