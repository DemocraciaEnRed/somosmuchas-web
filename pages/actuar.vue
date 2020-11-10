<template>
  <div>
    <div class="hero is-primary is-medium is-custom-image mt-2">
      <div class="hero-body">
        <div class="columns">
          <div class="column is-half">
            <h1 class="title is-1 has-text-weight-bold">
              ACTUAR
            </h1>
            <h2 class="subtitle is-5">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit, doloremque numquam possimus molestias praesentium rem dignissimos quae. Blanditiis vitae labore vero fugit exercitationem. Sapiente consequatur praesentium alias, veniam minus est!
            </h2>
          </div>
        </div>
      </div>
    </div>
    <div class="columns my-6 is-centered">
      <div class="column is-5 has-text-centered">
        <img src="~/assets/icon01.svg" class="image an-icon" alt="">
        <p class="is-size-3">
          Aquí encontrarás un mapeo del Congreso, en el que sabrás qué congresistas son aliadxs, detractorxs o aún no tienen una posición clara, sobre la causa que quieres apoyar.
        </p>
      </div>
      <div class="column is-5 is-offset-1 has-text-centered">
        <img src="~/assets/icon02.svg" class="image an-icon" alt="">
        <p class="is-size-3">
          Además podrás enviar mensajes personalizados a sus redes sociales para motivarles a mantenerse o cambiar de posición.
        </p>
      </div>
    </div>
    <div class="columns is-centered">
      <div class="column is-6 has-text-centered">
        <p class="is-size-3 has-text-primary">
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
.an-icon{
    width:150px;
    margin: 0 auto 20px;
}
</style>
