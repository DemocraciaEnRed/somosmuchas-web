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
              <h2 class="subtitle is-4 has-text-primary text-white">
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
      <div class="column p-5">
        <div class="material-box circulos-mujeres-bg">
          <a href="/files/presentacion-circulos-nosotras.pdf" download>
            <div class="text-container">
              <h1 class="title is-2 has-text-shadow has-text-white">Presentación de nosotras ahora</h1>
            </div>
          </a>
        </div>
      </div>
      <div class="column p-5">
        <div class=" material-box circulos-nosotras-bg">
          <a  href="/files/presentacion-nosotras.pdf" download>
            <div class="text-container">
              <h1 class="title is-2 has-text-shadow has-text-white">Creación de círculos de mujeres</h1>
            </div>
          </a>
        </div>
      </div>
    </div>
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
  h1.title{
    text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.50);
  }
}
.image-title{
 width: 400px;
}
.material-box{
  .text-container{
    position: absolute;
    width: 100%;
    height: 100%;
    display:flex;
    order: 0;
    flex: 1 1 auto;
    align-self: auto;
    padding: 15px;
    background-color: rgba(darken($primary,25%), 0.7);
    opacity: 0;
    color: #FFF;
    transition: opacity .2s ease-out;
    -moz-transition: opacity .2s ease-out;
    -webkit-transition: opacity .2s ease-out;
    -o-transition: opacity .2s ease-out;
    font-size: $size-4;
    font-weight: 300;
    overflow-y: hidden;
    align-items: center;
    &:hover{
      opacity: 1;
    }
    h1.title{
      text-align: center;
      font-weight: 700;
      width: 100%;
    }
  }
  background-position: center;
  background-size: 100%;
  background-repeat: no-repeat;
  width: 100%;
  position: relative;
  border: 1px solid $primary;
 &:after{
    content: "";
    display: block;
    padding-bottom: 100%;
  }
  &.circulos-mujeres-bg{
    background-image: url('~assets/circulos-de-mujeres.png');
  }
  &.circulos-nosotras-bg{
    background-image: url('~assets/circulos-nosotras.png');
  }
}
</style>
