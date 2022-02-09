<template>
  <p>Parameters</p>
  <label>
    Namn:
    <input
      type="text"
      id="editName"
      @change="changedValue"
      :value="nameValue"
    />
  </label>
  <br />
  <br />
  <label>
    Ålder:
    <input type="text" id="editAge" @change="changedValue" :value="ageValue" />
  </label>
  <br />
  <br />
  <label>
    Intressen & Hobbies:
    <input
      type="text"
      id="editInterests"
      @change="changedValue"
      :value="interestsValue"
    />
  </label>
  <br />
  <br />
  <label>
    Biografi:
    <input
      type="text"
      id="editBiography"
      @change="changedValue"
      :value="biographyValue"
    />
  </label>
  <br />
  <br />
</template>

<script>
  export default {
    data() {
      return {
        nameValue: this.$store.state.name,
        ageValue: this.$store.state.age,
        interestsValue: this.$store.state.interests,
        biographyValue: this.$store.state.biography
      }
    },
    methods: {
      changedValue() {
        this.nameValue = document.getElementById('editName').value
        this.ageValue = document.getElementById('editAge').value
        this.interestsValue = document.getElementById('editInterests').value
        this.biographyValue = document.getElementById('editBiography').value
        this.$store.commit('setName', this.nameValue)
        this.$store.commit('setAge', this.ageValue)
        this.$store.commit('setInterests', this.interestsValue)
        this.$store.commit('setBiography', this.biographyValue)
      }
    }
  }
</script>

<!-- <script>
  export default {
    data() {
      return {
        nameValue: this.$store.state.name,
        ageValue: this.$store.state.age,
        interestsValue: this.$store.state.interests,
        biographyValue: this.$store.state.biography
      }
    },
    methods: {
      changedValue() {
        let nameValue = document.getElementById('editName').value
        let ageValue = document.getElementById('editAge').value
        let interestsValue = document.getElementById('editInterests').value
        let biographyValue = document.getElementById('editBiography').value
        this.$store.commit('setName', nameValue)
        this.$store.commit('setAge', ageValue)
        this.$store.commit('setInterests', interestsValue)
        this.$store.commit('setBiography', biographyValue)
      }
    }
  }
</script> -->
