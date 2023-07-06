<template>
    <div id="skills" v-for="skills in skills" class="section-3" :key="skills.first">
        <h1 
        class="title-5"  >Skills</h1>
        <p class="sub-header">These are skills besides coding that Iv picked up along the way.{{ skills.desc }}</p>

        <p class="ban1">
            {{ skills.first }}
            <img class="iconics" src="https://i.postimg.cc/FKxYPXmr/4284214.png" alt="mechanic">
        </p>
        <p class="ban2">
            {{ skills.second }}
            <img class="iconics" src="https://i.postimg.cc/Z5RpvRh8/1321802-200.png" alt="catering">
        </p>
        <p class="ban3">
            {{ skills.third }}
            <img class="iconics" src="https://i.postimg.cc/cLpC1414/3047840.png" alt="gardening">
        </p>
        <p class="ban4">
            {{ skills.forth }}
            <img class="iconics" src="https://i.postimg.cc/FH3mZbmN/5067194.png" alt="editor">
        </p>
    </div>






</template>

<script>
    export default {
        computed: {
    skills() {
      return this.$store.state.skills;
    },
  },
  mounted() {
    this.$store.dispatch("fetchSkills");
  },
        
    }
</script>

<style scoped>


</style>