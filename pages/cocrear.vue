<template>
  <section>
    <div class="hero is-primary is-medium is-custom-image mt-2">
      <div class="hero-body">
        <div class="columns">
          <div class="column is-half">
            <h1 class="title is-1 has-text-weight-bold">
              COCREAR
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
      Aquí tienes un espacio para compartir y acceder a metodologías de trabajo que puedan ser de utilidad para tu causa.
    </h5>
    <img src="~/assets/title03.svg" class="image mb-6 image-title" alt="">
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
    background-image: url('~assets/cover-color-04.jpg');
    background-position: center center;
    background-size: cover;
    h1.title{
      text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.50);
    }
}
.image-title{
 width: 500px;
}
</style>
