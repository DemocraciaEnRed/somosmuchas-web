<template>
  <div>
    <div class="section">
      <div class="container">
        <the-navbar />
        <nuxt />
      </div>
    </div>
    <the-footer />
  </div>
</template>

<script>
import TheNavbar from '~/components/Navbar.vue'
import TheFooter from '~/components/Footer.vue'
export default {
  components: {
    TheNavbar,
    TheFooter
  }
}
</script>
