<template>
  <div id="img-container">
    <img :src="profilePic" alt="" id="profile-pic" :key="updateKey" />
  </div>
  <div id="input-container">
    <label for="uploadImage" class="custom-file-upload"> Bläddra... </label>
    <input
      type="file"
      name=""
      id="uploadImage"
      ref="myFile"
      @change="imageToBase64(), imageUploaded()"
    />
    <input type="button" value="Ladda upp" @click="reload()" />
  </div>
</template>

<script>
  export default {
    data() {
      if (localStorage.getItem('savedImage')) {
        return {
          profilePic: localStorage.getItem('savedImage'),
          pic2: './assets/save-image.png',
          file: {},
          updateKey: 0
        }
      } else {
        return {
          profilePic: './assets/no-profile.png',
          file: {},
          updateKey: 0
        }
      }
    },
    methods: {
      imageUploaded() {
        document.getElementById('profile-pic').src = this.pic2
      },
      reload() {
        document.getElementById('profile-pic').src =
          localStorage.getItem('savedImage')
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

<style lang="scss">
  $size: lightgrey;
  #img-container {
    margin: 1rem auto 1.5rem auto;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 250px;
    height: 250px;
    background-color: white;
    border: 2px solid black;
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
    input[type='file'] {
      display: none;
    }
    input {
      border: none;
      font-size: 0.9rem;
      border-radius: 1.5em;
      box-sizing: border-box;
      text-decoration: none;
      font-family: 'Roboto', sans-serif;
      text-transform: uppercase;
      font-weight: 400;
      color: #ffffff;
      background-color: #3369ff;
      box-shadow: inset 0 -0.6em 0 -0.35em rgba(0, 0, 0, 0.17);
      text-align: center;
      position: relative;
      display: inline-block;
      height: min-content;
      width: min-content;
      margin-left: 1rem;
      padding: 0.7em 1.4em;
      cursor: pointer;
    }
    input:hover,
    input:focus,
    .custom-file-upload:hover,
    .custom-file-upload:focus {
      background-color: #1948ca;
    }
    input:active {
      top: 0.1em;
    }
    .custom-file-upload {
      font-size: 0.9rem;
      border-radius: 1.5em;
      box-sizing: border-box;
      text-decoration: none;
      font-family: 'Roboto', sans-serif;
      text-transform: uppercase;
      font-weight: 400;
      color: #ffffff;
      background-color: #3369ff;
      box-shadow: inset 0 -0.6em 0 -0.35em rgba(0, 0, 0, 0.17);
      text-align: center;
      position: relative;
      display: inline-block;
      height: min-content;
      width: min-content;
      margin-right: 1rem;
      padding: 0.7em 1.4em;
      cursor: pointer;
    }
    .custom-file-upload:active {
      top: 0.1em;
    }
  }
</style>
