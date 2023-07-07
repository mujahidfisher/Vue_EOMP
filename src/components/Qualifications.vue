<template>
    <div id="qualifications"></div>
    <div id="qualifications" v-for="qualifications in qualifications" class="section-4" :key="qualifications.matric">
        <h1>Qualifications</h1>
        <p>Since Im a school leaver I do not have much behind my name but I strive to change this.</p>
        <div class="boxy">
            <li>
                Qualification:{{ qualifications.matric }}
            </li>
            <li>
                Currently Doning:{{ qualifications.current }}
            </li>
        </div>
    </div>
</template>

<script>
    export default {
        computed: {
            qualifications() {
                return this.$store.state.qualifications
            }
        },
        mounted() {
            this.$store.dispatch("fetchQualifications")
        }
    }
</script>

<style scoped>

</style>