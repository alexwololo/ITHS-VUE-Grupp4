<script>
  import TheHeader from '../components/TheHeader.vue'

  export default {
    components: {
      TheHeader
    }
  }
</script>

<template>
  <TheHeader />
  <h2>Logga in</h2>
</template>

<style lang="scss" scoped>
  h2 {
    margin: 1rem 0 0 1rem;
    color: #fff;
    text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000,
      1px 1px 0 #000;
  }
</style>
