<template>
  <section>
    <div class="hero is-primary is-medium is-custom-image mt-2">
      <div class="hero-body">
        <div class="columns">
          <div class="column is-half">
            <h1 class="title is-1 has-text-weight-bold">
              COCREAR
            </h1>
            <div class="subtitle-container">
              <h2 class="subtitle is-4 has-text-primary">
                Aquí tienes un espacio para compartir y acceder a metodologías de trabajo que puedan ser de utilidad para tu causa.
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
    <br>
    <h5 class="title is-3 has-text-centered has-text-primary has-text-weight-bold">
      Paridad ¡YA!<br>Campaña nacional por la paridad política
    </h5>
    <h5 class="subtitle is-4 has-text-centered has-text-primary">
      Conoce cómo hemos logrado articularnos para movilizar la paridad política en el país.
    </h5>
    <div class="columns is-centered">
      <div class="column is-one-third">
        <div class="buttons">
          <a href="https://preguntarparaacordar.typeform.com/to/btphdVz9" target="_blank" class="button is-primary is-fullwidth has-text-weight-bold is-medium is-rounded">subir metodologías</a>
        </div>
      </div>
    </div>
    <img src="~/assets/title03.svg" class="image mb-6 image-title" alt="">
    <div class="columns">
      <div class="column">
        <a class="material-box circulos-mujeres-bg" href="/files/presentacion-circulos-nosotras.pdf" download>
          &nbsp;
        </a>
      </div>
      <div class="column">
        <a class="material-box circulos-nosotras-bg" href="/files/presentacion-nosotras.pdf" download>
          &nbsp;
        </a>
      </div>
    </div>
  </section>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.image-title{
 width: 400px;
}
.material-box{
  display: block;
  background-position: center;
  background-size: 100%;
  background-repeat: no-repeat;
  width: 100%;
  height: 200px;
  position: relative;
  border: 1px solid $primary;
  &.circulos-mujeres-bg{
    background-image: url('~assets/circulos-de-mujeres.png');
  }
  &.circulos-nosotras-bg{
    background-image: url('~assets/circulos-nosotras.png');
  }
}
</style>
