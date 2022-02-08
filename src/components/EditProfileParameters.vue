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
        nameValue: localStorage.getItem('name'),
        ageValue: localStorage.getItem('age'),
        interestsValue: localStorage.getItem('interests'),
        biographyValue: localStorage.getItem('biography')
      }
    },
    methods: {
      changedValue() {
        let name = document.getElementById('editName').value
        let age = document.getElementById('editAge').value
        let interests = document.getElementById('editInterests').value
        let biography = document.getElementById('editBiography').value
        localStorage.setItem('name', name)
        localStorage.setItem('age', age)
        localStorage.setItem('interests', interests)
        localStorage.setItem('biography', biography)
      }
    }
  }
</script>
