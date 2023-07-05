<template>
  <div>
    <div
      class="card"
      v-for="project in projects" 
      :key="project.img"
      style="width: 18rem"
    >
      <img :src="project.img" class="card-img-top" alt="img" />
      <!-- <div class="card-body">
        <h5 class="card-title">{{ testcards.name }}</h5>
        <p class="card-text">"{{ testcards.testimony }}"</p>
        <div class="card-footer">
          <i>{{ testcards.sign }}</i>
        </div>
      </div> -->
    </div>
  </div>
</template>

<script>
export default {
    computed: {
            projects() {
                return this.$store.state.projects
            }
        },
        mounted() {
            this.$store.dispatch("fetchProjects")
        }
};
</script>

<style scoped>
</style>
