<template>
  <nav :style="{ background: background || '#333' }">
    <ul :style="{ background: background || '#333' }" ref="nav">
      <figure class="image-logo" @click="toggleNav">
        <img src="../../assets/logo.png" alt="logo" />
      </figure>
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
    height: 80px;
    width: 100%;
    box-shadow: 2px 2px 2px 2px rgb(230, 230, 230);
    .image-logo {
      flex-grow: 4;
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

  @media screen and (max-width: 1085px) {
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
          position: fixed;
          top: -16px;
          left: -40px;
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
</style>
