<template>
<NavbarVue />
<router-view />
<Footer />
</template>

<script>
import NavbarVue from './components/Navbar.vue'
import Footer from './components/Footer.vue';

  export default {
    components: {
      NavbarVue,
      Footer
    }
  }
</script>

<style scoped>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>
