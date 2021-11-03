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
    <div id="smn" class=" section is-medium max-width  has-background-primary  has-text-white pt-4 top-bar-text">
      <div class="container columns">
        <div class="column is-11">
          <img src="~/assets/conocenos-enterate.png" alt="titulo: conocenos y enterate">
        </div>
        <div class="column is-1  me-6 my-6">
          <NuxtLink to="/actuar" class="button is-rounded is-primary is-inverted has-text-weight-bold">
            ver más
          </NuxtLink>
        </div>
      </div>
      <div class="container ">
        <VueSlickCarousel v-bind="settings">
          <content-box title="¿Que vamos a hacer y por que?" description="Colombia necesita cambios urgentes y las mujeres queremos estar en el poder para renovar la política. Por eso, tenemos como objetivos FORMAR mujeres diversas para que lleguen a los espacios de poder. CONSTRUIR agendas políticas con enfoque de género. Y movilizarnos para ACTUAR electoral y políticamente." video="https://drive.google.com/file/d/1D-niifrGsRMMpKBb_L2KL8s8Y7Z8xSga/view?usp=sharing" />
          <content-box title="¿Con quienes vamos a trabajar?" description="Trabajamos con mujeres lideresas de todo el territorio colombiano que le apuestan a la redistribución del poder, el reconocimiento del papel de las mujeres en la política, y de encontrar la representación de las mujeres y sus agendas. " />
          <content-box title="¿En donde vamos a trabajar?" description="Trabajaremos conjuntamente con mujeres de Medellín, del Nordeste Antioqueño, Bajo Cauca, Bogotá, Arauca, Norte del Cauca, Nariño y el nodo Pacifico. " />
        </VueSlickCarousel>
      </div>
    </div>
    <section class="section bg-aqua expand">
      <div class="container columns">
        <div class="column is-1  mx-6 my-6">
          <NuxtLink to="/actuar" class="button is-rounded is-primary is-inverted has-text-weight-bold">
            ver más
          </NuxtLink>
        </div>
        <div class="column  is-four-fifths m-auto my-6 py-6">
          <div class="bg-vector">
            <!-- <img src="~/assets/vector.png" alt="lineas decorativas"> -->
            <h1 class="sub-title-section ">
              Co-construccion<br>agendas
            </h1>
          </div>
        </div>
      </div>
      <div>
        <div class="tile is-parent">
          <article class="tile is-child notification">
            <div class="content">
              <p class="title">
                Tall tile
              </p>
              <!-- <p class="subtitle">
                With even more content
              </p> -->
              <div class="content container mx-6 px-6">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt temporibus, similique corrupti beatae qui repudiandae error fuga, nobis voluptate rerum, tenetur aut perferendis quidem debitis neque veritatis! Nisi, omnis reiciendis. Vitae, accusantium facere sequi beatae perferendis autem minus cumque explicabo quasi repellat vel, totam sapiente blanditiis dolorem possimus iusto esse. Sequi beatae voluptatem optio numquam quia totam, suscipit exercitationem molestiae. Eius nesciunt blanditiis perferendis odit dolorum corporis eos est cum illo saepe quaerat exercitationem magni inventore molestias ea, possimus nostrum expedita facilis mollitia, impedit culpa! Quisquam expedita ipsum tenetur assumenda, consequatur explicabo. Quae, soluta animi. Nam perspiciatis iusto earum inventore?
              </div>
            </div>
          </article>
        </div>
      </div>
      <!-- el que lleva iamgenes boceto -->
      <div class="container mx-6">
        <div class="tile is-parent">
          <article class="tile is-child notification">
            <div class="content">
              <p class=" purple-title">
                Tall tile
              </p>
              <!-- <p class="subtitle">
                With even more content
              </p> -->
              <div class="content-w container mx-6 px-6">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt temporibus, similique corrupti beatae qui repudiandae error fuga, nobis voluptate rerum, tenetur aut perferendis quidem debitis neque veritatis! Nisi, omnis reiciendis. Vitae, accusantium facere sequi beatae perferendis autem minus cumque explicabo quasi repellat vel, totam sapiente blanditiis dolorem possimus iusto esse. Sequi beatae voluptatem optio numquam quia totam, suscipit exercitationem molestiae. Eius nesciunt blanditiis perferendis odit dolorum corporis eos est cum illo saepe quaerat exercitationem magni inventore molestias ea, possimus nostrum expedita facilis mollitia, impedit culpa! Quisquam expedita ipsum tenetur assumenda, consequatur explicabo. Quae, soluta animi. Nam perspiciatis iusto earum inventore?
              </div>
              <img class="image is-128x128" src="" alt="">
            </div>
          </article>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import ContentBox from '~/components/content/ContentBox.vue'

export default {
  components: { ContentBox },
  data () {
    return {
      settings: {
        dots: false,
        arrows: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
        autoplay: false,
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
/* #__layout .section .container{
  margin: 0%;
  padding: 0%;
} */

.expand{
  margin: 0%;
  padding: 0%;
}
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
.slick-arrow{
    border: 1px solid transparent;
    border-radius: 100% !important;
    width: 80px;
    height: 80px;
    background-color: transparent;
}
.slick-prev:before {
  content: "<";
  color: #fff !important;
  font-size: 30px;
  background-color: #32BD9F;
  padding: 0.2em;
  font-weight: 700;
  -webkit-border-radius: 100%;
  -moz-border-radius: 100%;
  border-radius: 100%;
}

.slick-next:before {
  content: ">";
  color: #fff !important;
  font-size: 30px;
  background-color: #32BD9F;
  padding: 0.2em;
  font-weight: 700;
  -webkit-border-radius: 100%;
  -moz-border-radius: 100%;
  border-radius: 100%;
}
.bg-aqua{
  background-color: #32BD9F;
}
.bg-vector{
  background: transparent url("../assets/vector.png") no-repeat scroll 70% 50%;
}
.sub-title-section{
  /* position: absolute;
  left: 23.15%;
  right: 0%;
  top: 3.7%;
  bottom: 8.33%; */
  font-family: Titillium Web;
  font-style: normal;
  font-weight: bold;
  font-size: 55px;
  line-height: 47px;
  /* or 86% */
  text-align: right;
  color: #FFFFFF;
  /* background: transparent url("../assets/vector.png") no-repeat scroll 50% 0%; */
}
.notification{
  background: none;
}

.tile .title {
  font-family: Titillium Web;
  font-style: normal;
  font-weight: bold;
  font-size: 60px;
  line-height: 47px;
  /* identical to box height, or 79% */
  color: #FFFFFF;

}

.tile .content{
  font-family: Titillium Web;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 21px;
  /* or 105% */
  color: #000000;

}

.purple-title{
  font-family: Titillium Web;
  font-style: normal;
  font-weight: bold;
  font-size: 55px;
  line-height: 47px;
  /* or 86% */
  color: #8917FF;
  /* Inside Auto Layout */
  flex: none;
  order: 0;
  flex-grow: 0;
  margin: 0px 17px;
}
.content-w{
  font-family: Titillium Web;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 21px;
  /* or 105% */
  color: #FFFFFF !important;
}
</style>
