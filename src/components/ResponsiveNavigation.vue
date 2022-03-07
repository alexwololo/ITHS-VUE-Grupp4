<template>
  <nav :style="{ background: background || '#333' }">
    <div class="image-logo">
      <!-- <h2 class="web-logo" style=""><router-link to="/">Swindlr</router-link></h2> -->
      <!-- <figure class="image-logo"> -->
      <!-- <img src="../../assets/logo.png" alt="logo" style="margin-right: 80px;" />
          <button  class=""><i class="fas fa-bars" data-v-9a9f6144="" /> </button> -->
      <div class="burger-menu">
        <i
          @click="toggleNav"
          class="fas fa-bars menu-icon"
          style="padding: 25px"
        />
        <h2 class="" style="display: inline-flex">
          <router-link to="/">Swindlr</router-link>
        </h2>
      </div>
      <!-- </figure> -->
    </div>
    <ul :style="{ background: background || '#333' }" ref="nav">
      <h2 class="web-logo" style="">
        <router-link to="/">Swindlr</router-link>
      </h2>
      <li
        v-for="(link, index) in navLinks"
        :key="index"
        :style="{ color: linkColor || '#DDD' }"
        @mouseenter="
          $event.currentTarget.style.background = hoverBackground || '#999'
        "
        @mouseleave="
          $event.currentTarget.style.background = background || '#333'
        "
      >
        <router-link :to="link.path" :style="{ color: linkColor || '#DDD' }">
          {{ link.text }}
          <i :class="link.icon" />
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
  export default {
    props: {
      navLinks: {
        default: () => [],
        type: Array
      },
      background: {
        default: '',
        type: String
      },
      linkColor: {
        default: '',
        type: String
      },
      hoverBackground: {
        default: '',
        type: String
      },
      imagePath: {
        default: '',
        type: String
      }
    },
    methods: {
      toggleNav() {
        const nav = this.$refs.nav.classList
        nav.contains('active') ? nav.remove('active') : nav.add('active')
      }
    }
  }
</script>

<style scoped lang="scss">
  img {
    width: 150px;
    height: 40px;
  }

  nav {
    height: 70px;
    width: 100%;
    box-shadow: 2px 2px 2px 2px rgb(230, 230, 230);
    .image-logo {
      flex-grow: 4;
    }
    .burger-menu {
      z-index: 100;
      a {
        text-decoration: none;
        display: flex;
        flex-direction: row-reverse;
        align-items: center;
      }
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

      figure {
        cursor: pointer;
        margin-right: 10px;
        // margin-left: -90px;
      }

      a {
        text-decoration: none;
        display: flex;
        flex-direction: row-reverse;
        align-items: center;
      }

      i {
        margin-right: 20px;
        font-size: 22px;
      }

      li {
        list-style-type: none;
        padding: 10px 20px;
      }
    }
  }

  @media screen and (max-width: 770px) {
    .web-logo {
      display: none;
    }
    nav {
      ul {
        z-index: 1;
        position: fixed;
        width: 250px;
        height: 100%;
        flex-direction: column;
        left: -255px;
        transition: 300ms ease all;
        top: 80px;
        box-shadow: 2px 2px 2px 2px rgb(230, 230, 230);

        &.active {
          left: 0px;
        }

        figure {
          // position: fixed;
          // top: -16px;
          // left: -40px;
          background-color: white;
          padding-left: 42px;
          padding-top: 26px;
          padding-bottom: 10px;
          width: 100%;
          box-shadow: 2px 2px 2px 2px rgb(230, 230, 230);
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
  }

  @media (min-width: 769px) {
    // ul {
    //   display: block;
    .web-logo {
      display: inline-flex;
      padding-left: 10px;
    }
    // }
    ul {
      display: none;
    }

    .burger-menu {
      display: none;
    }
  }
</style>
