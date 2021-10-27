<template>
  <section>
    <div class="hero is-primary is-custom-image mt-2">
      <div class="hero-body">
        <div class="columns">
          <div class="column is-half">
            <h1 class="title is-1 has-text-weight-bold">
              CONVERSAR
            </h1>
            <div class="subtitle-container">
              <h2 class="subtitle is-4 has-text-primary">
                Aquí puedes consultar, dialogar y debatir sobre diversas agendas temáticas del movimiento feminista. Encontrarás foros, información adicional y personas
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
    <br>
    <div class="columns my-6 is-centered">
      <div class="column is-5 has-text-centered">
        <img src="~/assets/icon01.svg" class="image an-icon" alt="">
        <h1 class="title is-3">
          Entérate
        </h1>
        <p class="is-size-3">
          Para ampliar el contexto general en el que surgen estas iniciativas y conocer las razones de su necesidad te brindamos material adicional.
        </p>
      </div>
      <div class="column is-5 is-offset-1 has-text-centered">
        <img src="~/assets/icon02.svg" class="image an-icon" alt="">
        <h1 class="title is-3">
          Conoce más
        </h1>
        <p class="is-size-3">
          Suscríbite a cada agenda para acceder a informacion adicional sobre el tema.
        </p>
      </div>
    </div>
    <img src="~/assets/title02.svg" class="image mb-6 image-title" alt="">
    <div class="columns">
      <div class="column">
        <div class="agenda-box">
          <img src="~/assets/paridad-logo.svg" alt="">
          <a class="button is-primary has-text-weight-bold is-rounded enter-button is-medium" href="#paridad">
            <i class="fas fa-angle-down fa-lg fa-fw" />
          </a>
        </div>
      </div>
      <div class="column">
        <div class="agenda-box">
          <img src="~/assets/juntas-logo.png" alt="">
          <a class="button is-primary has-text-weight-bold is-rounded enter-button is-medium" href="https://conversar.somosmuchas.org/agendas" target="_blank">
            ENTRAR
          </a>
        </div>
      </div>
      <div class="column">
        <div class="agenda-box">
          <img src="~/assets/logo-causa-justa.png" alt="">
          <a class="button is-primary has-text-weight-bold is-rounded enter-button is-medium" href="#causajusta">
            <i class="fas fa-angle-down fa-lg fa-fw" />
          </a>
        </div>
      </div>
    </div>
    <div class="columns">
      <div class="column is-one-third">
        <div class="agenda-box">
          <img src="~/assets/logo-borolo.jpeg" alt="">
          <a class="button is-primary has-text-weight-bold is-rounded enter-button is-medium" href="#borolo">
            <i class="fas fa-angle-down fa-lg fa-fw" />
          </a>
        </div>
      </div>
      <div class="column is-one-third">
        <div class="agenda-box">
          <img src="~/assets/logo-recicladores.png" alt="">
          <a class="button is-primary has-text-weight-bold is-rounded enter-button is-medium" href="#recicladores">
            <i class="fas fa-angle-down fa-lg fa-fw" />
          </a>
        </div>
      </div>
    </div>
    <br>
  </section>
</template>

<script>
</script>

<style lang="scss" scoped>
.is-custom-image {
  background-image: url("~assets/cover-color-01.jpg");
  background-position: center center;
  background-size: cover;
  .title {
    text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.5);
  }
  .title {
    color: $primary;
  }
}
.subtitle-container {
  padding: 20px;
  background-color: rgba(#ffe6d6, 0.5);
}
.image-title {
  width: 400px;
}
.it-was-selected {
  border: 2px solid $secondary;
}
.agenda-box {
  height: 250px;
  margin: 10px;
  border: 2px solid $secondary;
  position: relative;
  img {
    max-height: 60%;
    max-width: 75%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 50;
  }
  .enter-button {
    position: absolute;
    bottom: -20px;
    left: 50%;
    transform: translate(-50%, 0);
    z-index: 150;
  }
}
.videoWrapper {
  position: relative;
  padding-bottom: 56.25%; /* 16:9 */
  height: 0;
}
.videoWrapper iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.video-description {
  .title {
    font-size: 4rem;
  }
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.an-icon {
  width: 150px;
  margin: 0 auto 20px;
}
.file-box {
  border: 1px solid $primary;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
@include from($desktop) {
  .image-recicladores img {
    max-width: 50%;
    max-height: 50%;
  }
}
</style>
