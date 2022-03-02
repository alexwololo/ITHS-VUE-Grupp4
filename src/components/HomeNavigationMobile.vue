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

<script>
  export default {}
</script>

<style scoped>
  @media (min-width: 769px) {
    ul {
      display: none;
    }
  }
</style>
