<template>
  <div>
    <div class="hero is-primary is-custom-image mt-2">
      <div class="hero-body">
        <div class="columns">
          <div class="column is-half">
            <h1 class="title is-1 has-text-weight-bold">
              ACTUAR
            </h1>
            <div class="subtitle-container">
              <h2 class="subtitle is-4">
                Aquí puedes consultar, dialogar y debatir sobre diversas agendas temáticas del movimiento feminista. Encontrarás foros, información adicional y personas
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="has-text-centered mt-5">
      <img width="200" src="~/assets/paridad-logo.svg" alt="">
    </div>
    <div class="columns my-6 is-centered">
      <div class="column is-5 has-text-centered">
        <img src="~/assets/icon01.svg" class="image an-icon" alt="">
        <p class="is-size-4">
          Aquí encontrarás un mapeo del Congreso, en el que sabrás qué congresistas son aliadxs, detractorxs o aún no tienen una posición clara, sobre la causa que quieres apoyar.
        </p>
      </div>
      <div class="column is-5 is-offset-1 has-text-centered">
        <img src="~/assets/icon02.svg" class="image an-icon" alt="">
        <p class="is-size-4">
          Además podrás enviar mensajes personalizados a sus redes sociales para motivarles a mantenerse o cambiar de posición.
        </p>
      </div>
    </div>
    <div class="columns is-centered">
      <div class="column is-8 has-text-centered">
        <p class="is-size-4 has-text-primary">
          Encuentra tu causa, informate, actua y comparte.<br>El poder de la ciudadanía esta entre nosotros.
        </p>
        <br>
        <a href="https://activasomosmuchas.democraciaenred.org/" class="button is-primary is-rounded has-text-weight-bold is-medium">Entrar</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.is-custom-image{
    background-image: url('~assets/cover-color-02.jpg');
    background-position: center center;
    background-size: cover;
}
.subtitle-container{
  padding: 20px;
  background-color: rgba(#ffe6d6,0.5);
}
.an-icon{
    width:150px;
    margin: 0 auto 20px;
}
</style>
