<template>
    <h1 id="interests" class="title-6">Interests</h1>
    <div class="icons-box">
        
    <div class="interests" v-for="interests in interests" :key="interests.img">
        <img class="mythings" :src="interests.img" alt="interests">
        <p>{{ interests.desc }}</p>
    </div>
</div>
</template>

<script>
    export default {
        computed: {
    interests() {
      return this.$store.state.interests;
    }
  },
  mounted() {
    this.$store.dispatch("fetchInterests");
  }
    }
</script>

<style scoped>

</style>