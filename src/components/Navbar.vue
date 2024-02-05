<template>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            <img class="logo" src="../assets/Images/logo.png" alt="Logo" loading="lazy"></a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <router-link to="/" class="nav-link" href="#">Home</router-link>
              </li>

              <li class="nav-item dropdown">
                <router-link to="/resume" class="nav-link dropdown-toggle text-info bg-dark" role="button" data-bs-toggle="dropdown" aria-expanded="false" style="border-radius: 20px">
                  Resume
                </router-link>
                <ul class="dropdown-menu text-info bg-dark">
                  <li><router-link to="/resume" class="dropdown-item text-info bg-dark">Resume Homepage</router-link></li>

                  <li><router-link to="/resume" exact v-scroll-to="{ el: '#education', offset: -50 }" class="dropdown-item text-info bg-dark">Education</router-link></li>

                  <li><router-link to="/resume" exact v-scroll-to="{ el: '#skills', offset: -50 }" class="dropdown-item text-info bg-dark">Skills</router-link></li>

                  <li><router-link to="/resume" exact v-scroll-to="{ el: '#qualifications', offset: -50 }" class="dropdown-item text-info bg-dark">Qualifications</router-link></li>

                  <li><router-link to="/resume" exact v-scroll-to="{ el: '#coding', offset: -50 }" class="dropdown-item text-info bg-dark">Coding Languages</router-link></li>

                  <li><router-link to="/resume" exact v-scroll-to="{ el: '#interests', offset: -50 }" class="dropdown-item text-info bg-dark">Interests</router-link></li>
                </ul>
              </li>

              <li class="nav-item">
                <router-link to="/about" class="nav-link">About</router-link>
              </li>
              <li class="nav-item">
                <router-link to="/testimonials" class="nav-link">Testimonials</router-link>
              </li>
              <li class="nav-item">
                <router-link to="/projects" class="nav-link">Projects</router-link>
              </li>
              <li class="nav-item">
                <router-link to="/contact" class="nav-link">Contact Me</router-link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>

</style>