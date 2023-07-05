import { createStore } from 'vuex'

export default createStore({
  state: {
    testcards: null,
    myInfo: null,
    projects: null,
    education: null
  },
  getters: {
  },
  mutations: {
    setTestimonials(state, testcards) {
      state.testcards = testcards
    },
    setMyInfo(state, myInfo)
    {
      state.myInfo = myInfo
    },
    setProjects(state, projects)
    {
      state.projects = projects
    },
    setEducation(state, education) {
      state.education = education
    }
  },
  actions: {
    async fetchEducation(context) {
      try{
        let response = await fetch ("https://mujahidfisher.github.io/Vue_EOMP_Json-server/data.Json")
        let { education } = await
        response.json()
        console.log(education);
        context.commit("setEducation", education)
      }catch(e) {
        console.log("nothing");
      }
    },
    async fetchMyInfo(context) {
      try{
        let response = await fetch ("https://mujahidfisher.github.io/Vue_EOMP_Json-server/data.Json")
        let { myInfo } = await
        response.json()
        context.commit("setMyInfo", myInfo)
      }catch(e) {
        console.log("nothing");
      }
    },
    async fetchTestimonials(context) {
      try{
        let response = await fetch ("https://mujahidfisher.github.io/Vue_EOMP_Json-server/data.Json")
        let { testcards } = await response.json()
        context.commit("setTestimonials", testcards)
      }catch(e) {
        console.log("nothing");
      }
    },
    async fetchProjects(context) {
      try{
        let response = await fetch ("https://mujahidfisher.github.io/Vue_EOMP_Json-server/data.Json")
        let { projects } = await response.json()
        context.commit("setProjects", projects)
      }catch(e) {
        console.log("nothing");
      }
    }
  },
  modules: {
  }
})
