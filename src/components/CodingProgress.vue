<template>
  <h1 id="coding">Coding Languages</h1>
    <div v-for="codingProgress in codingProgress" class="section-5" :key="codingProgress.img">
      <div class="icons-body">
        <img class="code-icon" :src="codingProgress.img" alt="icon" loading="lazy">
        <p>{{ codingProgress.name }}</p>
      </div>
    </div>
</template>

<script>
    export default {
        computed: {
    codingProgress() {
      return this.$store.state.codingProgress;
    },
  },
  mounted() {
    this.$store.dispatch("fetchCodingProgress");
  },    
    }
</script>

<style scoped>

</style>