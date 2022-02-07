<template>
  <header>
    <nav>
      <h2><router-link to="/">Swindler</router-link></h2>
      <ul>
        <li />
        <div class="dropdown" />
      </ul>
    </nav>
  </header>
</template>

<script></script>

<style>
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
    justify-content: space-between;
    align-items: center;
    text-align: center;
  }

  /* CSS för länkarna efter Registrering / Inloggning */
  header a {
    text-decoration: none;
    color: black;
    display: inline-block;
    padding: 0.75rem 1.5rem;
  }

  li a:hover {
    text-decoration: underline;
  }

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  li {
    display: inline;
    padding-right: 0.9em;
    padding-left: 0.9em;
  }
</style>
