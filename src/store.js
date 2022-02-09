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
console.log(new VuexPersistence({ storage: localStorage }))
export default
createStore({
  mutations: {
    setUser(state, user) {
      state.user = user
    },
    setPassword(state, password) {
      state.password = password
    },
    setEmail(state, email) {
      state.email = email
    }
  },
  plugins: [new VuexPersistence({ storage: localStorage }).plugin],
  state: { user: {}, password: {}, email: {} },
  strict: true
})
