<template>
  <MyInformationVue />
  <EducationVue />
  <Skills />
  <Qualifications />
</template>

<script>
import MyInformationVue from "@/components/MyInformation.vue";
import EducationVue from "@/components/Education.vue";
import Skills from "@/components/Skills.vue";
import Qualifications from "@/components/Qualifications.vue";

export default {
  components: {
    MyInformationVue,
    EducationVue,
    Skills,
    Qualifications
  },
};
</script>

<style scoped></style>
