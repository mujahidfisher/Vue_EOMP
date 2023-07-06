<template>
  <div id="top" class="section-1" v-for="myInfo in myInfo" :key="myInfo.myemail">
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
    <a href="#top"><button class="btn btn-outline-info go-up"><img class="up-icon" src="https://i.postimg.cc/Yq8347DW/Up.png" alt="up-icon"></button></a>
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
