<template>
        <div v-for="project in projects" class="card mb-3, card-projects" :key="project.img">
            <img :src="project.img" class="card-img-top" alt="projects">
            <div class="card-body">
              <p class="card-text">{{ project.desc }}</p>
              <p class="card-text">Netify Link:</p>
              <p class="card-text">{{ project.site }}<small class="text-body-secondary"></small></p>
              <p class="card-text">Github Link:</p>
              <p class="card-text"><a>{{ project.gitlink }}</a><small class="text-body-secondary"></small></p>
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
