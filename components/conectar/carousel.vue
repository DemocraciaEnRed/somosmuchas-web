<template>
  <b-carousel>
    <b-carousel-item v-for="(carousel, i) in carousels" :key="i">
      <section class="hero is-medium">
        <div class="hero-body has-text-centered">
          <div class="">
            <div class="special-frame">
              <div class="has-text-centered">
                <h1
                  class="
                    title
                    is-1 is-size-1
                    has-text-centered has-text-white has-text-weight-bold
                    mb-2
                  "
                >
                  {{ carousel.title }}
                </h1>
                <p class="is-size-5 has-text-centered">
                  {{ carousel.description }}
                </p>
                <!-- <img v-if="img" :src="img" :alt="title" class="is-inline-block"> -->
                <!-- <video :src="video" /> -->
                <div class="container my-6 py-4">
                  <!-- <video v-if="carousel.video" width="550" height="309" controls>
                    <source v-if="carousel.video" :src="video" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                  <div v-else>
                    <img src="https://via.placeholder.com/550x300" alt="" />
                  </div> -->
                  <iframe
                    width="853"
                    height="480"
                    :src="carousel.video"
                    frameborder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                />
                </div>
              </div>
              <slot />
            </div>
          </div>
        </div>
      </section>
    </b-carousel-item>
  </b-carousel>
</template>

<script>
export default {
  data () {
    return {
      carousels: [
        { title: '¿Que vamos a hacer y por que?', description: 'Colombia necesita cambios urgentes y las mujeres queremos estar en el poder para renovar la política. Por eso, tenemos como objetivos FORMAR mujeres diversas para que lleguen a los espacios de poder. CONSTRUIR agendas políticas con enfoque de género. Y movilizarnos para ACTUAR electoral y políticamente.', video: 'https://www.youtube.com/embed/ElkUYYKbaNs' },
        { title: '¿Con quienes vamos a trabajar?', description: 'Trabajamos con mujeres lideresas de todo el territorio colombiano que le apuestan a la redistribución del poder, el reconocimiento del papel de las mujeres en la política, y de encontrar la representación de las mujeres y sus agendas.', video: '' },
        { title: '¿En donde vamos a trabajar?', description: 'Trabajaremos conjuntamente con mujeres de Medellín, del Nordeste Antioqueño, Bajo Cauca, Bogotá, Arauca, Norte del Cauca, Nariño y el nodo Pacifico.', video: 'https://www.youtube.com/embed/ug8PJy_JAt0' }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.special-frame {
  margin: auto;
  width: 21rem;
  height: auto;
}
@media screen and (min-width: 720px) {
  .special-frame {
    margin: auto;
    width: 55.125rem !important;
    height: 33.125rem;
  }
}
</style>
