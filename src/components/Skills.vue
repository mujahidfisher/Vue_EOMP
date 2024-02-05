<template>
    <div id="skills"></div>
    <div id="skills" v-for="skills in skills" class="section-3" :key="skills.first">
        <h1 
        class="title-5"  >Skills</h1>
        <p class="sub-header">These are skills besides coding that Iv picked up along the way.{{ skills.desc }}</p>

        <p data-aos="zoom-in" class="ban1">
            {{ skills.first }}
            <img class="iconics" src="https://i.postimg.cc/sxCk0Xmg/icons8-mechanic-48.png" alt="mechanic" loading="lazy">
        </p>
        <p data-aos="zoom-in" class="ban2">
            {{ skills.second }}
            <img class="iconics" src="https://i.postimg.cc/vHtvnB6t/icons8-catering-64.png" alt="catering" loading="lazy">
        </p>
        <p data-aos="zoom-in" class="ban3">
            {{ skills.third }}
            <img class="iconics" src="https://i.postimg.cc/q7qRLmDv/icons8-gardening-64.png" alt="gardening" loading="lazy">
        </p>
        <p data-aos="zoom-in" class="ban4">
            {{ skills.forth }}
            <img class="iconics" src="https://i.postimg.cc/Wpgy9gyG/icons8-editor-64.png" alt="editor" loading="lazy">
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