<template>
  <div>
    <div class="hero is-primary ">
      <div class="hero-body">
        <div class="columns">
          <div class="column is-half">
            <h1 class="title is-1 has-text-weight-bold">
              Co-construccion <br>agendas
            </h1>
            <div class="subtitle-container">
              <h2 class="subtitle is-4">
                Aqui encontraras recursos para planificar la co construccion de agendas y tambien podras compartir tus resultados para luego abrirlo a la comunidad.
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="columns my-6 is-centered">
      <div class="column is-3 has-text-centered">
        <img src="~/assets/arrowDown.png" class="image an-icon" alt="">
        <h2 class="is-size-4">
          Descargar
        </h2>
        <br>
        <div>
          <p class="is-size-4">
            Aqui podras descargar nuestra plantilla para co-creacion de agendas
          </p>
        </div>
        <br>
        <br>
        <a href="https://actua.somosmuchas.org/" class="mt-2 button is-primary is-rounded has-text-weight-bold is-medium">Quiero actuar</a>
      </div>
      <div class="column is-3 is-offset-1 has-text-centered">
        <img src="~/assets/share.png" class="image an-icon" alt="">
        <h2 class="is-size-4">
          Comparte
        </h2>
        <br>
        <p class="is-size-4">
          Sube tu agenda, para que podamos compartirla con la comunnidad y abrir el debate y la difusion
        </p>
        <br>
        <a href="https://actua.somosmuchas.org/" class="button is-primary is-rounded has-text-weight-bold is-medium">Quiero actuar</a>
      </div>
    </div>
    <br>
    <!-- <img src="~/assets/title02.svg" class="image mb-6 image-title" alt=""> -->
    <div>
      <h5 data-v-2a183b29="" class="title mt-5 pt-5 is-2 has-text-lefted has-text-primary has-text-weight-bold">
        Ultimos subidos<br data-v-2a183b29="">
      </h5>
    </div>
    <div class="columns">
      <div class="column">
        <div class="actuar-agenda-box">
          <img src="~/assets/paridad-logo.svg" alt="">
          <a href="#" target="_blank" class="button is-primary has-text-weight-bold is-rounded enter-button is-medium">
            ver
          </a>
        </div>
      <!-- <casos-box  title="AGENDA" description="Campaña nacional que promueve y facilita la participación de las mujeres en política. Por lo justo: cincuenta / sí cuenta." href="https://actua.somosmuchas.org/proyecto/paridadya#activa" label='ver'>
             <img src="~/assets/paridad-logo.svg" alt="">
        </casos-box> -->
      </div>
      <div class="column">
        <div class="actuar-agenda-box">
          <img src="~/assets/logo-sin-mujeres.png" alt="">
          <a href="#" target="_blank" class="button is-primary has-text-weight-bold is-rounded enter-button is-medium">
            ver
          </a>
        </div>
      </div>
      <div class="column">
        <div class="actuar-agenda-box">
          <img src="~/assets/logo-recicladores.png" alt="">
          <a href="#" target="_blank" class="button is-primary has-text-weight-bold is-rounded enter-button is-medium">
            ver
          </a>
        </div>
      </div>
    </div>
    <div class="container">
      <div>
        <h1 class="title mt-5 pt-5 is-2 has-text-lefted has-text-primary has-text-weight-bold">
          Que opinas sobre estas agendas?
        </h1>
        <p class="content is-large has-text-justified">
          Buscanos en  nuestro instagram, para hacer comunidad y debatir!
        </p>
      </div>
      <div data-mc-src="4ef2a77e-3497-45e3-bf68-7f83f306f342#instagram" />
      <script src="https://cdn2.woxo.tech/a.js#617dc3d6cd3af80016260b49" async data-usrc />
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.actuar-agenda-box {
  width: 300px;
  height: 300px;
  margin: 0 auto;
  position: relative;
  border: 2px solid $secondary;
  img {
    max-height: 100%;
    max-width: 100%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  @include from($desktop){
    margin: 10px;
  }
}
// .is-custom-image{
//   background-image: url('~assets/cover-color-02.jpg');
//   background-position: center center;
//   background-size: cover;
// }
.subtitle-container{
  padding: 20px;
//   background-color: rgba(#ffe6d6,0.5);
}
.an-icon{
    width:257px;
    margin: 0 auto 20px;
}
.enter-button{
  position: absolute;
  bottom: -20px;
  left: 50%;
  transform: translate(-50%, 0);
  z-index: 150;
  &:hover{
    color: $primary;
    background-color: white;
    border: 2px solid $primary;
  }
}
</style>
