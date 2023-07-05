<template>
  <MyInformationVue />
  <EducationVue />
  <Skills />
  <Qualifications />
  <CodingProgressVue />
  <Interests />
</template>

<script>
import MyInformationVue from "@/components/MyInformation.vue";
import EducationVue from "@/components/Education.vue";
import Skills from "@/components/Skills.vue";
import Qualifications from "@/components/Qualifications.vue";
import CodingProgressVue from "@/components/CodingProgress.vue";
import Interests from "@/components/Interests.vue";

export default {
  components: {
    MyInformationVue,
    EducationVue,
    Skills,
    Qualifications,
    CodingProgressVue,
    Interests
  },
};
</script>

<style scoped></style>
