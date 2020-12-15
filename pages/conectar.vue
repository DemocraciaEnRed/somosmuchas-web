<template>
  <section>
    <div class="hero is-primary is-medium is-custom-image mt-2">
      <div class="hero-body">
        <div class="columns">
          <div class="column is-half">
            <h1 class="title is-1 has-text-weight-bold">
              CONECTAR
            </h1>
            <div class="subtitle-container">
              <h2 class="subtitle is-4 has-text-primary">
                Aquí conocerás iniciativas feministas que se están desarrollando actualmente.
                Explora y conecta con otras.
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
    <br>
    <hr>
    <h5 class="title is-1 has-text-centered has-text-primary">
      Próximamente
    </h5>
  </section>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.is-custom-image{
    background-image: url('~assets/cover-color-03.jpg');
    background-position: center center;
    background-size: cover;
}
.subtitle-container{
  padding: 20px;
  background-color: rgba(#ffe6d6,0.5);
}
</style>
