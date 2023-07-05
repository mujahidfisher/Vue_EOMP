<template>
    <div class="section-1" v-for="myInfo in myInfo" :key="myInfo.Myemail">
        <img :src="myInfo.Myprofilepic" class="card-img-top" alt="img">
    </div>
    <div class="section-2">

    </div>
    <div class="section-3">

    </div>
</template>

<script>
    export default {
        computed: {
            myInfo() {
                return this.$store.state.myInfo
            }
        },
        mounted() {
            this.$store.dispatch("fetchMyInfo")
        }
    }
</script>

<style scoped>

</style>