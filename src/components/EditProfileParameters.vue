<template>
  <label>
    Namn:
    <input
      type="text"
      id="edit-name"
      @change="changedValue"
      :value="nameValue"
    />
  </label>
  <label>
    Ålder:
    <input type="text" id="edit-age" @change="changedValue" :value="ageValue" />
  </label>
  <label>
    Intressen & hobbies:
    <textarea
      id="edit-interests"
      @change="changedValue"
      :value="interestsValue"
      rows="4"
      cols="50"
    />
  </label>
  <label>
    Biografi:
    <textarea
      id="edit-biography"
      @change="changedValue"
      :value="biographyValue"
      rows="4"
      cols="50"
    />
  </label>
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
        this.nameValue = document.getElementById('edit-name').value
        this.ageValue = document.getElementById('edit-age').value
        this.interestsValue = document.getElementById('edit-interests').value
        this.biographyValue = document.getElementById('edit-biography').value
        this.$store.commit('setName', this.nameValue)
        this.$store.commit('setAge', this.ageValue)
        this.$store.commit('setInterests', this.interestsValue)
        this.$store.commit('setBiography', this.biographyValue)
      }
    }
  }
</script>

<style lang="scss" scoped>
  textarea {
    border-radius: 7px;
    margin-top: 0.25rem;
    padding: 8px;
    border: none;
    outline: 2px solid lightgrey;
    background-color: none;
    font-family: 'Roboto', sans-serif;
    font-size: 1rem;
    resize: none;
  }
  input {
    border-radius: 7px;
    margin-top: 0.25rem;
    padding: 8px;
    border: none;
    outline: 2px solid lightgrey;
    background-color: none;
    font-family: 'Roboto', sans-serif;
    font-size: 1rem;
  }
  label {
    text-align: left;
    margin: 0 1rem 1rem 1rem;
  }
  label,
  textarea {
    display: flex;
    flex-direction: column;
  }
  input:focus,
  textarea:focus {
    outline: 2px solid grey;
  }
</style>
