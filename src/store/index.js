import { createStore } from 'vuex'

export default createStore({
  state: {
    testcards: null
  },
  getters: {
  },
  mutations: {
    setTestimonials(state, testcards) {
      state.testcards = testcards
    }
  },
  actions: {
    async fetchTestimonials(context) {
      try{
        let response = await fetch ("https://mujahidfisher.github.io/Vue_EOMP_Json-server/data.Json")
        let { testcards } = await response.json()
        context.commit("setTestimonials", testcards)
      }catch(e) {
        console.log("nothing");
      }
    }
  },
  modules: {
  }
})
