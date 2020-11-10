<template>
  <section>
    <div class="hero is-primary is-medium is-custom-image mt-2">
      <div class="hero-body">
        <div class="columns">
          <div class="column is-half">
            <h1 class="title is-1 has-text-weight-bold">
              DIFUNDIR
            </h1>
            <h2 class="subtitle is-5">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit, doloremque numquam possimus molestias praesentium rem dignissimos quae. Blanditiis vitae labore vero fugit exercitationem. Sapiente consequatur praesentium alias, veniam minus est!
            </h2>
          </div>
        </div>
      </div>
    </div>
    <br>
    <h5 class="subtitle is-4 has-text-centered has-text-primary">
      Aquí encontrarás productos comunicacionales para compartir en tus redes sociales o medios en los que tengas acceso, para así lograr que la causa que apoyas llegue a más personas. Vas a encontrar piezas gráficas, videos, audios y un gran etc.
    </h5>
    <img src="~/assets/title04.svg" class="image mb-6 image-title" alt="">
    <h5 class="title is-1 has-text-primary">
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
.image-title{
 width: 600px;
}
</style>
