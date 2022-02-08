<template>
  <div id="img-container">
    <img :src="profilePic" alt="" id="profile-pic" :key="updateKey" />
  </div>
  <input
    type="file"
    name=""
    id="uploadImage"
    ref="myFile"
    @change="imageToBase64(), imageUploaded()"
  />
  <input type="button" value="Ladda upp" @click="reload()" />
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

<style>
  #img-container {
    margin-left: auto;
    margin-right: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 250px;
    height: 250px;
    background-color: lightcoral;
    border-radius: 50%;
    overflow: hidden;
  }
  #img-container img {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
</style>
