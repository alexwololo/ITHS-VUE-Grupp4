<template>
  <RouterView />
</template>

<script>
  export default {
    created() {
      window.addEventListener('keyup', this.historyBack)
    },
    components: {},
    data() {
      return {}
    },
    methods: {
      historyBack(e) {
        var activeElement = document.activeElement
        var inputs = ['input', 'textarea']

        if (
          activeElement &&
          inputs.indexOf(activeElement.tagName.toLowerCase()) === -1 &&
          e.keyCode === 8
        ) {
          this.$router.go(-1)
        }
      }
    }
  }
</script>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;700&display=swap');
  @import 'https://unpkg.com/ionicons@4.2.2/dist/css/ionicons.min.css';

  html {
    font-family: 'Roboto', sans-serif;
  }

  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
  }
</style>
