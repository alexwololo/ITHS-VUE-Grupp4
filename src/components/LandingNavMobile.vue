<template>
  <header>
    <nav>
      <div id="nav-mobile">
        <ul>
          <li><a href="#" class="options">Produkter</a></li>
          <li><a href="#" class="options">Support</a></li>
          <router-link to="/signin" class="login">Logga in</router-link>
        </ul>
      </div>
    </nav>
  </header>
</template>

<script></script>

<style scoped>
  nav {
    background-color: white;
    width: 100%;
  }

  ul {
    list-style: none;
    text-align: center;
  }

  #nav-mobile a {
    text-decoration: none;
    color: black;
    padding: 0;
    line-height: 4;
  }

  @media (min-width: 769px) {
    #nav-mobile {
      display: none;
    }
  }
</style>
