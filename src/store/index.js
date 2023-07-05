import { createStore } from 'vuex'

export default createStore({
  state: {
    testcards: null,
    myInfo: null,
    projects: null,
    education: null,
    skills: null,
    qualifications: null
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
    },
    setSkills(state, skills) {
      state.skills = skills
    },
    setQualifications(state, qualifications) {
      state.qualifications = qualifications
    }
  },
  actions: {
    async fetchQualifications(context) {
      try{
        let response = await fetch ("https://mujahidfisher.github.io/Vue_EOMP_Json-server/data.Json")
        let { qualifications } = await
        response.json()
        context.commit("setQualifications", qualifications)
      }catch(e) {
        console.log("nothing");
      }
    },
    async fetchSkills(context) {
      try{
        let response = await fetch ("https://mujahidfisher.github.io/Vue_EOMP_Json-server/data.Json")
        let { skills } = await
        response.json()
        context.commit("setSkills", skills)
      }catch(e) {
        console.log("nothing");
      }
    },
    async fetchEducation(context) {
      try{
        let response = await fetch ("https://mujahidfisher.github.io/Vue_EOMP_Json-server/data.Json")
        let { education } = await
        response.json()
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
