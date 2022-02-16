<template>
  <nav>
    <div class="menu-item"><a href="#">Home</a></div>
    <div class="menu-item"><a href="#">About</a></div>
    <DropDown title="Services" :items="services" />
    <div class="menu-item"><a href="#">Contact</a></div>
  </nav>
</template>

<script>
  import DropDown from './DropDown.vue'

  export default {
    name: 'NavBar',
    components: {
      DropDown
    },
    data() {
      return {
        services: [
          {
            title: 'Web',
            link: '#'
          },
          {
            title: 'Design',
            link: '#'
          },
          {
            title: 'Videos',
            link: '#'
          }
        ]
      }
    }
  }
</script>

<style>
  nav {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  nav .menu-item {
    color: #fff;
    padding: 10px 20px;
    position: relative;
    text-align: center;
    border-bottom: 3px solid transparent;
    display: flex;
    transition: 0.4s;
  }

  nav .menu-item.active,
  nav .menu-item:hover {
    background-color: #444;
    border-bottom-color: #ff5858;
  }
  nav .menu-item a {
    color: inherit;
    text-decoration: none;
  }
</style>
