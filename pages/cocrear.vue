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
                Aquí puedes consultar, dialogar y debatir sobre diversas agendas temáticas del movimiento feminista. Encontrarás foros, información adicional y personas
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
    <img src="~/assets/title03.svg" class="image mb-6 image-title" alt="">
    <h5 class="title is-4 has-text-primary">
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
    background-image: url('~assets/cover-color-04.jpg');
    background-position: center center;
    background-size: cover;
    h1.title{
      text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.50);
    }
}
.subtitle-container{
  padding: 20px;
  background-color: rgba(#ffe6d6,0.5);
}
.image-title{
 width: 400px;
}
</style>
