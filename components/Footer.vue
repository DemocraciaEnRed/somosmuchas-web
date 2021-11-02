<template>
  <footer class="footer">
    <div class="container">
      <div class="columns is-vcentered">
        <div class="column has-text-centered has-text-left-desktop">
          <a href="/quienes-somos" class="is-size-5 has-text-white">Quienes somos</a>
          <p class="is-size-5 mt-3 mb-5">
            Redes sociales
          </p>
          <p>
            <a
              href="https://twitter.com/Artemisas_org"
              class="social-button has-text-white"
            ><i class="fab fa-twitter fa-fw fa-lg" /></a>&nbsp;
            <a
              href="https://www.facebook.com/OrganizacionArtemisas"
              class="social-button has-text-white"
            >
              <i class="fab fa-facebook-f fa-fw fa-lg" />
            </a>&nbsp;
            <a
              href="https://www.instagram.com/organizacionartemisas/"
              class="social-button has-text-white"
            >
              <i class="fab fa-instagram fa-fw fa-lg" />
            </a>&nbsp;
            <a
              href="https://www.youtube.com/channel/UCG1I8kZspV32fkRMq9uWiSg?view_as=subscriber"
              class="social-button has-text-white"
            >
              <i class="fab fa-youtube fa-fw fa-lg" />
            </a>&nbsp;
          </p>
        </div>
        <!-- <div class="column has-text-centered has-text-left-desktop">
          <p>
            Te interesa ayudarnos?
          </p>
          <p>
            Contactanos:
            <br>
            <b>somosmuchas@org.io</b>
          </p>
        </div> -->
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
