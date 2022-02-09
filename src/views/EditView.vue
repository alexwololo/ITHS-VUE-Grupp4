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

<style lang="scss" scoped>
  $btn: #3369ff;
  div {
    background-color: white;
    height: 100vh;
    text-align: center;
  }
  h1 {
    text-align: center;
    margin-top: 1rem;
  }
  #saveProfile {
    border: none;
    font-size: 0.9rem;
    border-radius: 1.5em;
    box-sizing: border-box;
    text-decoration: none;
    font-family: 'Roboto', sans-serif;
    text-transform: uppercase;
    font-weight: 400;
    color: #ffffff;
    background-color: $btn;
    box-shadow: inset 0 -0.6em 0 -0.35em rgba(0, 0, 0, 0.17);
    text-align: center;
    position: relative;
    display: inline-block;
    height: min-content;
    width: min-content;
    padding: 0.7em 1.4em;
    cursor: pointer;
  }
  #saveProfile:hover,
  #saveProfile:focus,
  .custom-file-upload:hover,
  .custom-file-upload:focus {
    background-color: #1948ca;
  }
  #saveProfile:active {
    top: 0.1em;
  }
</style>
