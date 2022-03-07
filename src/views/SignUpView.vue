<template>
  <TheHeader />
  <SignupComponent />
</template>

<script>
  import SignupComponent from '../components/SignupComponent.vue'
  import TheHeader from '../components/TheHeader.vue'

  export default {
    components: {
      SignupComponent,
      TheHeader
    }
  }
</script>
