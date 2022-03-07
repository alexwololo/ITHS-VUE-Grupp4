<template>
  <header>
    <nav>
      <div class="burger-menu">
        <div id="topbar-mobile">
          <i @click="toggleSideMenu" class="fas fa-bars menu-icon" />
          <h2>
            <router-link to="/">Swindlr</router-link>
          </h2>
        </div>
        <div class="side-menu">
          <ul>
            <li><a href="#" class="options">Produkter</a></li>
            <li><a href="#" class="options">Support</a></li>
            <router-link to="/signin" class="login">Logga in</router-link>
          </ul>
        </div>
      </div>
      <ul ref="nav">
        <h2 class="topbar-heading">
          <router-link to="/">Swindlr</router-link>
        </h2>
        <li><a href="#" class="options">Produkter</a></li>
        <li><a href="#" class="options">Support</a></li>
        <li><router-link to="/signin" class="login">Logga in</router-link></li>
      </ul>
    </nav>
  </header>
</template>

<script>
  export default {
    methods: {
      toggleSideMenu() {
        const nav = this.$refs.nav.classList
        nav.contains('active') ? nav.remove('active') : nav.add('active')
      }
    }
  }
</script>

<style lang="scss" scoped>
  header {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  h2 {
    margin-left: 20px;
    display: inline-flex;
  }

  #topbar-mobile {
    padding-left: 20px;
  }

  nav {
    width: 100%;
    margin: auto;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding-right: 30px;
    left: 95%;
    top: 16px;
    background-color: white;
  }

  header a {
    text-decoration: none;
    color: black;
    display: inline-block;
    padding: 0.75rem 1.5rem;
  }

  .side-menu li {
    float: left;
  }

  ul {
    display: flex;
    height: 100%;
    width: 100%;
    align-items: center;
    margin-block-start: 0;
    margin-block-end: 0;
    padding-inline-start: 0;
    padding-right: 0px;
    background-color: white;
  }

  li {
    display: inline;
    padding-right: 0.9em;
    padding-left: 0.9em;
  }

  .options:hover {
    text-decoration: underline;
  }

  .side-menu a li:hover {
    text-decoration: underline;
  }

  @media screen and (max-width: 770px) {
    .topbar-heading {
      display: none;
    }

    .login:hover {
      text-decoration: underline;
    }

    ul {
      z-index: 1;
      position: fixed;
      width: 250px;
      height: 100%;
      flex-direction: column;
      left: -255px;
      transition: 300ms ease all;
      top: 80px;

      &.active {
        left: 0px;
      }

      li {
        width: 100%;
        padding-left: 0;
        padding-right: 10px;
      }

      a {
        flex-direction: row;
        margin-left: 20px;
        justify-content: space-between;
        margin-right: -20px;
      }
    }
  }

  @media (min-width: 769px) {
    .burger-menu {
      display: none;
    }

    .login {
      background-color: #6200ee;
      color: white;
      padding: 11px 25px;
      border-radius: 4px;
      box-shadow: inset 0 -0.6em 0 -0.35em rgba(0, 0, 0, 0.17);
    }
    .login:hover,
    .login:focus {
      background-color: #4a00b3;
    }
  }
</style>
