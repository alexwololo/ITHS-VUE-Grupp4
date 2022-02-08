<template>
  <div>
    <h1>Redigera profil</h1>
    <UploadImage />
    <EditProfileParameters />
    <input id="saveProfile" type="button" value="Spara din profil" />
  </div>
</template>

<script>
  import UploadImage from '../components/UploadImage.vue'
  import EditProfileParameters from '../components/EditProfileParameters.vue'

  export default {
    components: {
      UploadImage,
      EditProfileParameters
    }
  }
</script>

<style lang="scss">
  div {
    background-color: white;
    height: 100vh;
  }
  h1 {
    text-align: center;
    margin-top: 1rem;
  }
</style>
