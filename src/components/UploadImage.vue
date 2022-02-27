<template>
  <div id="img-container">
    <img
      v-if="this.$store.state.picture.length"
      :src="this.$store.state.picture"
      alt=""
      id="profile-pic"
      :key="0"
    />
    <img v-else src="assets/no-image.png" alt="" id="profile-pic" :key="1" />
  </div>
  <p>Välj ny profilbild.</p>
  <div id="input-container">
    <label for="uploadImage" class="custom-file-upload btn">
      Bläddra...
      <input
        type="file"
        id="uploadImage"
        ref="myFile"
        @change="imageToBase64(), imageUploaded()"
      />
    </label>
    <input class="btn" type="button" value="Ladda upp" @click="reload()" />
  </div>
</template>

<script>
  export default {
    data() {
      if (this.$store.state.picture.length) {
        return {
          pic2: './assets/save-image.png'
        }
      } else {
        return {
          pic2: './assets/save-image.png'
        }
      }
    },
    methods: {
      imageUploaded() {
        document.getElementById('profile-pic').src = this.pic2
      },
      reload() {
        this.$store.commit('setPicture', localStorage.getItem('savedImage'))
        document.getElementById('profile-pic').src = this.$store.state.picture
      },
      imageToBase64() {
        var filesSelected = document.getElementById('uploadImage').files
        if (filesSelected.length > 0) {
          var fileToLoad = filesSelected[0]

          var fileReader = new FileReader()

          fileReader.onload = function (fileLoadedEvent) {
            var srcData = fileLoadedEvent.target.result
            localStorage.setItem('savedImage', srcData)
          }
          fileReader.readAsDataURL(fileToLoad)
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  $btn: #6200ee;
  #img-container {
    margin: 0 auto 1.5rem auto;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 250px;
    height: 250px;
    background-color: white;
    border: 2px solid grey;
    border-radius: 50%;
    overflow: hidden;
  }
  #img-container img {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
  #input-container {
    max-height: 50px;
    display: flex;
    justify-content: center;
    margin-bottom: 1rem;
    input[type='file'] {
      opacity: 0;
      width: 0;
    }
    input {
      border: none;
      margin-left: 1rem;
    }
    input:hover,
    input:focus,
    .custom-file-upload:hover,
    .custom-file-upload:focus,
    .custom-file-upload:focus-within {
      background-color: #4a00b3;
    }
    input:active {
      top: 0.1em;
    }
    .custom-file-upload {
      margin-right: 1rem;
    }
    .custom-file-upload:active {
      top: 0.1em;
    }
    .btn {
      font-size: 1rem;
      border-radius: 4px;
      box-sizing: border-box;
      text-decoration: none;
      font-family: 'Roboto', sans-serif;
      font-weight: 400;
      color: #ffffff;
      background-color: $btn;
      box-shadow: inset 0 -0.6em 0 -0.35em rgba(0, 0, 0, 0.17);
      text-align: center;
      display: inline-block;
      padding: 0.7em 1.4em;
      cursor: pointer;
    }
  }
</style>
