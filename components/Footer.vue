<template>
  <footer class="footer">
    <div class="container">
      <div class="columns is-vcentered">
        <div class="column has-text-centered has-text-left-desktop">
          <p>
            <a
              href="google.com"
              class="social-button has-text-white"
            ><i class="fab fa-facebook-f fa-fw fa-lg" /></a>&nbsp;<a
              href="google.com"
              class="social-button has-text-white"
            ><i class="fab fa-instagram fa-fw fa-lg" /></a>&nbsp;<a
              href="google.com"
              class="social-button has-text-white"
            ><i
              class="fab fa-youtube fa-fw fa-lg"
            /></a>&nbsp;<span class="is-hidden-desktop"><br><br></span><span class="is-size-5">@OrganizacionArtemisas</span>
          </p>
          <p class="my-5">
            <a
              href="google.com"
              class="social-button has-text-white"
            ><i class="fab fa-twitter fa-fw fa-lg" /></a><span class="is-size-5">@Artemisas_org</span>
          </p>
        </div>
        <div class="column has-text-centered has-text-right-desktop">
          <img src="~/assets/logo-footer.png" class="image logo-footer is-inline-block" alt="">
          <img src="~/assets/fes.png" class="image logo-footer is-inline-block ml-5" alt="">
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.social-button {
  padding: 8px;
  background-color: $primary;
  margin-right: 10px;
}
.logo-footer{
  width:120px;
  vertical-align: middle;
}
</style>
