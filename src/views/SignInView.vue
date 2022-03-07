<template>
  <TheHeader />
  <SigninComponent />
</template>

<script>
  import TheHeader from '../components/TheHeader.vue'
  import SigninComponent from '../components/SigninComponent.vue'

  export default {
    components: { TheHeader, SigninComponent }
  }
</script>
