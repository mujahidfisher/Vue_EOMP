<template>
    <div class="title-4">
        <h1>Education History</h1>
    </div>
  <div v-for="educ in education" class="section-2" :key="educ.year">
    <div class="card-educ mb-3" style="max-width: 540px;">
        <div class="row g-0">
          <div class="col-md-4">
            <img :src="educ.img" class="img-fluid-school rounded-start" alt="institutions">
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">{{ educ.place }}</h5>
              <p class="card-text">Grade: {{ educ.grades }}</p>
              <p class="card-text">{{ educ.year }}</p>
            </div>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  computed: {
    education() {
      return this.$store.state.education;
    },
  },
  mounted() {
    this.$store.dispatch("fetchEducation");
  },
};
</script>

<style scoped></style>
