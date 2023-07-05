<template>
  <div class="section-1" v-for="myInfo in myInfo" :key="myInfo.myemail">
    <h1>Resume</h1>
    <h2>{{ myInfo.myname }}</h2>
    <p>{{ myInfo.myoccupation }}</p>
    <div class="top-info">
        <img class="profile" :src="myInfo.myprofilepic" alt="img"/>
        <div class="information">
            <h4>My Information:</h4>
            <p>{{ myInfo.mynumber }}</p>
            <p>{{ myInfo.myemail }}</p>
            <p>{{ myInfo.mylocation }}</p>
            <p>{{ myInfo.mylanguages }}</p>
        </div>
    </div>
  </div>


</template>

<script>
export default {
  computed: {
    myInfo() {
      return this.$store.state.myInfo;
    }
  },
  mounted() {
    this.$store.dispatch("fetchMyInfo");
  }
};
</script>

<style scoped>

</style>
