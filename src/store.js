// import { createStore } from 'vuex'
// import VuexPersistence from 'vuex-persist'
// const vuexLocal = new VuexPersistence({
//   storage: window.localStorage,

//   mutations: {
//     setUser(state, user) {
//       state.user = user
//     },
//     setPassword(state, password) {
//       state.password = password
//     },
//     setEmail(state, email) {
//       state.email = email
//     }
//   },
//   state: {
//     user: {},
//     password: {},
//     email: {}
//   },
//   plugins: [vuexLocal.plugin]
// })
// export default createStore({ vuexLocal, strict: true })

import { createStore } from 'vuex'
import VuexPersistence from 'vuex-persist'
// console.log(new VuexPersistence({ storage: localStorage }))

const mutations = {
    setUser(state, user) {
      state.user = user
    },
    setPassword(state, password) {
      state.password = password
    },
    setEmail(state, email) {
      state.email = email
    },
    setName(state, name) {
      state.name = name
    },
    setAge(state, age) {
      state.age = age
    },
    setInterests(state, interests) {
      state.interests = interests
    },
    setBiography(state, biography) {
      state.biography = biography
    },
    setPicture(state, picture) {
      state.picture = picture
    },
    setButton(state, button) {
      state.button = button
    }
  },
  state = {
    user: {},
    password: {},
    email: {},
    name: {},
    age: {},
    interests: {},
    biography: {},
    picture: {},
    button: {}
  }

export default createStore({
  mutations,
  plugins: [new VuexPersistence({ storage: localStorage }).plugin],
  state,
  strict: true
})
