<template>
  <div>
    <p>Hej</p>
    <UploadImage />
    <EditProfileParameters />
    <input type="button" value="Spara din profil" />
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

<style>
  div {
    background-color: lightblue;
  }
</style>
