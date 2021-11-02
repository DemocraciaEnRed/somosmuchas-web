<template>
  <div>
    <section>
      <div class="container is-max-desktop">
        <div>
          <img class="px-10" src="~/assets/sinmujeresno.png" alt="imagen-banner sin mujeres no">
        </div>
        <p class="is-size-3 has-text-centered">
          <b>
            Sin Mujeres ¡NO! Nosotras Ahora, es un proyecto que busca fortalecer el
            ejercicio de participación política de 300 mujeres de diferentes
            territorios y partidos políticos de Colombia, por medio de procesos
            formativos y de acompañamiento en la construcción de agendas con
            enfoque de género y campañas electorales.
          </b>
        </p>
        <br>
        <p class="is-size-3 has-text-centered">
          En este proyecto, se apoyan
          las candidaturas de mujeres a los Consejos Municipales de Juventud y a
          los cargos de elección popular, que se desarrollarán entre los años 2022
          y 2023 a nivel regional y nacional; específicamente en las regiones de
          Arauca, Bajo Cauca, Norte del Cauca, Nariño, Costa Caribe, Nordeste
          antioqueño, nodo pacífico (Buenaventura y Cali), Bogotá y Medellín.
        </p>
      </div>
      <div class="container videoWrapper my-6">
        <iframe
          width="853"
          height="480"
          src="https://www.youtube.com/embed/S9pFe4lSL1w"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        />
      </div>
    </section>
    <div class=" section is-large max-width  has-background-primary  has-text-white pt-4 top-bar-text">
      <div class="container columns">
        <div class="column is-11">
          <img src="~/assets/conocenos-enterate.png" alt="">
        </div>
        <div class="column is-1  me-6 my-6">
          <NuxtLink to="/actuar" class="button is-rounded is-primary is-inverted has-text-weight-bold">
            ver más
          </NuxtLink>
        </div>
      </div>
      <VueSlickCarousel v-bind="settings">
        <content-box title="Prueba" description="este es el texto dle contenido del slider" />
        <content-box title="Prueba" description="este es el texto dle contenido del slider" />
        <content-box title="Prueba" description="este es el texto dle contenido del slider" />
      </VueSlickCarousel>
    </div>
  </div>
</template>
<script>
import ContentBox from '~/components/content/ContentBox.vue'

export default {
  components: { ContentBox },
  data () {
    return {
      settings: {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
        autoplay: true,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              infinite: true,
              dots: false
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 0
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      }
    }
  }
}
</script>
<style >

.videoWrapper{
  position: relative;
  padding-bottom: 56.25%; /* 16:9 */
  height: 0;
}
.videoWrapper iframe{
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>
