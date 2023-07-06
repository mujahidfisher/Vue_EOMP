import { createStore } from 'vuex'

export default createStore({
  state: {
    testcards: null,
    myInfo: null,
    projects: null,
    education: null,
    skills: null,
    qualifications: null,
    codingProgress: null,
    interests: null
  },
  getters: {
  },
  mutations: {
    setTestimonials(state, testcards) {
      state.testcards = testcards
    },
    setInterests(state, interest) {
      state.interests = interest
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
    },
    setCodingProgress(state, codingProgress) {
      state.codingProgress = codingProgress
    }
  },
  actions: {
    async fetchInterests(context) {
      try{
        let response = await fetch ("https://mujahidfisher.github.io/Vue_EOMP_Json-server/data.Json")
        let { interests } = await
        response.json()
        context.commit("setInterests", interests)
      }catch(e) {
        document.write("this page is not responding reload")
      }
    },
    async fetchCodingProgress(context) {
      try{
        let response = await fetch ("https://mujahidfisher.github.io/Vue_EOMP_Json-server/data.Json")
        let { codingProgress } = await
        response.json()
        context.commit("setCodingProgress", codingProgress)
      }catch(e) {
        document.write("this page is not responding reload")
      }
    },
    async fetchQualifications(context) {
      try{
        let response = await fetch ("https://mujahidfisher.github.io/Vue_EOMP_Json-server/data.Json")
        let { qualifications } = await
        response.json()
        context.commit("setQualifications", qualifications)
      }catch(e) {
        document.write("this page is not responding reload")
      }
    },
    async fetchSkills(context) {
      try{
        let response = await fetch ("https://mujahidfisher.github.io/Vue_EOMP_Json-server/data.Json")
        let { skills } = await
        response.json()
        context.commit("setSkills", skills)
      }catch(e) {
        document.write("this page is not responding reload")
      }
    },
    async fetchEducation(context) {
      try{
        let response = await fetch ("https://mujahidfisher.github.io/Vue_EOMP_Json-server/data.Json")
        let { education } = await
        response.json()
        context.commit("setEducation", education)
      }catch(e) {
        document.write("this page is not responding reload")
      }
    },
    async fetchMyInfo(context) {
      try{
        let response = await fetch ("https://mujahidfisher.github.io/Vue_EOMP_Json-server/data.Json")
        let { myInfo } = await
        response.json()
        context.commit("setMyInfo", myInfo)
      }catch(e) {
        document.write("this page is not responding reload")
      }
    },
    async fetchTestimonials(context) {
      try{
        let response = await fetch ("https://mujahidfisher.github.io/Vue_EOMP_Json-server/data.Json")
        let { testcards } = await response.json()
        context.commit("setTestimonials", testcards)
      }catch(e) {
        document.write("this page is not responding reload")
      }
    },
    async fetchProjects(context) {
      try{
        let response = await fetch ("https://mujahidfisher.github.io/Vue_EOMP_Json-server/data.Json")
        let { projects } = await response.json()
        context.commit("setProjects", projects)
      }catch(e) {
        document.write("this page is not responding reload")
      }
    }
  },
  modules: {
  }
})
