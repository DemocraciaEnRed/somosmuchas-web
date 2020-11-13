<template>
  <section>
    <div class="hero is-primary is-custom-image mt-2">
      <div class="hero-body">
        <div class="columns">
          <div class="column is-half">
            <h1 class="title is-1 has-text-weight-bold">
              DIFUNDIR
            </h1>
            <div class="subtitle-container">
              <h2 class="subtitle is-4 has-text-primary">
                Aquí encontrarás productos comunicacionales para compartir en tus redes sociales o medios en los que tengas acceso, para así lograr que la causa que apoyas llegue a más personas. Vas a encontrar piezas gráficas, videos, audios y un gran etc.
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
      La campaña Paridad ¡YA! cincuenta / sí cuenta busca que se redistribuya el poder y se incremente la participación y la representación de las mujeres.
    </h5>
    <img src="~/assets/title04.svg" class="image mb-6 image-title" alt="">
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
    background-image: url('~assets/cover-color-05.jpg');
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
