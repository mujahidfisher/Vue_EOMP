<template>
  <div class="body-card">
    <div
      class="card border-info"
      v-for="testcards in testcards"
      style="width: 18rem"
      :key="testcards.img"
    >
      <img :src="testcards.img" class="card-img-top" alt="img" loading="lazy">
      <div class="card-body">
        <h5 class="card-title">{{ testcards.name }}</h5>
        <p class="card-text">"{{ testcards.testimony }}"</p>
        <div class="card-footer">
          <i>{{ testcards.sign }}</i>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    testcards() {
      return this.$store.state.testcards;
    },
  },
  mounted() {
    this.$store.dispatch("fetchTestimonials");
  },
};
</script>

<style scoped></style>
