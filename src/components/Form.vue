<template>
    <form
  action="https://formspree.io/f/xwkdejzz"
  method="POST"
>

<div class="form" name="form">
    <input type="text" class="form-control" placeholder="First name" name="First name" required>

    <input type="text" class="form-control" placeholder="Last name" name="Last name" required>

    <input type="email" 
    class="form-control" 
    placeholder="Email:" name="email" required>

    <textarea type="text"
    class="form-control"
    placeholder="Message:" name="message" required></textarea>

  <button class="btn btn-outline-info" type="submit">SUBMIT</button>
</div>
</form>

</template>

<script>
    export default {
        
    }
</script>

<style scoped>

</style>