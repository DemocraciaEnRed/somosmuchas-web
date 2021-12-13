<template>
  <b-carousel :autoplay="autoPlay">
    <b-carousel-item
      v-for="(carousel, i) in carousels"
      :key="i"
      class="section is-medium pt-0"
    >
      <section class="hero">
        <div class="hero-body has-text-centered">
          <div class="">
            <div class="special-frame is-hidden-touch">
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
                <p
                  class="is-size-5 has-text-centered is-hidden-touch"
                  v-html="carousel.description"
                ></p>
                <p
                  class="is-size-5 m-0 is-hidden-desktop"
                  v-html="carousel.description"
                >
                  <!-- {{ carousel.description }} -->
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
                    width="550"
                    height="309"
                    :src="carousel.video"
                    class="is-hidden-touch"
                    frameborder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  />
                  <iframe
                    width="2250"
                    height="150"
                    :src="carousel.video"
                    class="is-hidden-desktop m-0 p-0"
                    frameborder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  />
                </div>
              </div>
              <slot />
            </div>
            <div class="is-hidden-desktop">
              <div class="has-text-centered">
                <h1
                  class="
                    title
                    is-1 is-size-3
                    has-text-centered has-text-white has-text-weight-bold
                    mb-2
                  "
                >
                  {{ carousel.title }}
                </h1>
                <p
                  class="is-size-5 has-text-centered is-hidden-touch"
                  v-html="carousel.description"
                ></p>
                <p
                  class="is-size-5 m-0 is-hidden-desktop"
                  v-html="carousel.description"
                >
                  <!-- {{ carousel.description }} -->
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
                    style="width:500px;height:300px;"
                    :src="carousel.video"
                    class="is-hidden-touch"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  />
                  <figure class="image is-16by9">
                    <iframe
                      width="2250"
                      height="150"
                      :src="carousel.video"
                      class="has-ratio is-hidden-desktop m-0 p-0"
                      frameborder="0"
                      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                      allowfullscreen
                    />
                  </figure>
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
      autoPlay: false,
      carousels: [
        {
          title: '¿Qué vamos a hacer y por qué?',
          description:
            'Colombia necesita cambios urgentes y las mujeres queremos estar en el poder para renovar la política. Por eso, tenemos como objetivos <b>FORMAR</b> mujeres diversas para que lleguen a los espacios de poder. <b>CONSTRUIR</b> agendas políticas con enfoque de género. Y movilizarnos para <b>ACTUAR</b> electoral y políticamente.',
          video: 'https://www.youtube.com/embed/ElkUYYKbaNs'
        },
        {
          title: '¿Con quiénes vamos a trabajar?',
          description:
            'Trabajamos con mujeres lideresas de todo el territorio colombiano que le apuestan a la redistribución del poder, el reconocimiento del papel de las mujeres en la política, y de encontrar la representación de las mujeres y sus agendas.',
          video: 'https://www.youtube.com/embed/IoSaxkiWoBU'
        },
        {
          title: '¿En dónde vamos a trabajar?',
          description:
            'Trabajamos con mujeres lideresas de todo el territorio colombiano que apuestan a la redistribución del poder, al reconocimiento del papel de las mujeres en la política y a encontrar la representación de las mujeres y sus agendas',
          video: 'https://www.youtube.com/embed/ug8PJy_JAt0'
        }
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
.carousel-arrow .icon {
  // width: 200px !important;
  background-color: #32bd9f !important;
}
</style>
