<template>
  <div>
    <section>
      <div class="container is-max-desktop">
        <div>
          <img
            class="px-10"
            src="~/assets/sinmujeresno-dark.png"
            alt="imagen-banner sin mujeres no"
          />
        </div>
        <p class="is-size-3 has-text-centered">
          <b>
            Sin Mujeres ¡NO! Nosotras Ahora, es una plataforma que busca fortalecer el ejercicio de participación política de 300 mujeres de diferentes territorios y partidos políticos de Colombia, por medio de procesos formativos y de acompañamiento en la construcción de agendas con enfoque de género y campañas electorales, así como un ejercicio de posicionamiento, incidencia y posterior veeduría de dichas agendas.
          </b>
        </p>
        <br />
        <p class="is-size-3 has-text-centered">
           En esta plataforma, se apoyan las candidaturas de mujeres a los Consejos Municipales de Juventud y a los cargos de elección popular, que se desarrollarán entre los años 2022 y 2023 a nivel regional y nacional; específicamente en las regiones de Arauca, Bajo Cauca, Norte del Cauca, Nariño, Costa Caribe, Nordeste antioqueño, nodo pacífico (Buenaventura y Cali), Bogotá y Medellín.
        </p>
      </div>
      <!-- <div class="container videoWrapper my-6">
        <iframe
          width="853"
          height="480"
          src="https://www.youtube.com/embed/S9pFe4lSL1w"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        />
      </div> -->
    </section>
    <div class="section">
      <div class="container">
        <div class="">
          <blockquote
            class="tiktok-embed"
            cite="https://www.tiktok.com/@artemisas_org/video/7023872558902578438"
            data-video-id="7023872558902578438"
            style="max-width: 605px; min-width: 325px"
          >
            <section>
              <a
                target="_blank"
                title="@artemisas_org"
                href="https://www.tiktok.com/@artemisas_org"
                >@artemisas_org</a
              >
              <p>
                <a
                  title="foryoupage"
                  target="_blank"
                  href="https://www.tiktok.com/tag/foryoupage"
                  >#foryoupage</a
                >
                <a
                  title="foryou"
                  target="_blank"
                  href="https://www.tiktok.com/tag/foryou"
                  >#foryou</a
                >
              </p>
              <a
                target="_blank"
                title="♬ sonido original - Artemisas_org"
                href="https://www.tiktok.com/music/sonido-original-7023872429278350085"
                >♬ sonido original - Artemisas_org</a
              >
            </section>
          </blockquote>
        </div>
      </div>
    </div>
    <div
      id="smn"
      class="
        section
        is-medium
        max-width
        has-background-primary has-text-white
        pt-4
        top-bar-text
      "
    >
      <div class="container columns">
        <div class="column is-10">
          <img
            src="~/assets/conocenos-enterate.png"
            alt="titulo: conocenos y enterate"
          />
        </div>
        <div class="column is-1 mr-6 my-6">
          <NuxtLink
            to="/actuar"
            class="
              button
              px-6
              is-size-5 is-rounded is-primary is-inverted
              has-text-weight-bold
            "
          >
            ver más
          </NuxtLink>
        </div>
      </div>
      <div class="container">
        <!-- <VueSlickCarousel v-bind="settings">
          <content-box title="¿Que vamos a hacer y por que?" description="Colombia necesita cambios urgentes y las mujeres queremos estar en el poder para renovar la política. Por eso, tenemos como objetivos FORMAR mujeres diversas para que lleguen a los espacios de poder. CONSTRUIR agendas políticas con enfoque de género. Y movilizarnos para ACTUAR electoral y políticamente." />
          <content-box title="¿Con quienes vamos a trabajar?" description="Trabajamos con mujeres lideresas de todo el territorio colombiano que le apuestan a la redistribución del poder, el reconocimiento del papel de las mujeres en la política, y de encontrar la representación de las mujeres y sus agendas." />
          <content-box title="¿En donde vamos a trabajar?" description="Trabajaremos conjuntamente con mujeres de Medellín, del Nordeste Antioqueño, Bajo Cauca, Bogotá, Arauca, Norte del Cauca, Nariño y el nodo Pacifico." />
        </VueSlickCarousel> -->
        <Carousel />
      </div>
    </div>
    <section class="section mt-0 mb-0 bg-aqua expand">
      <div class="container level is-mobile">
        <div class="column is-hidden-mobile is-1 level-left ml-6 my-6">
          <NuxtLink
            to="/agendas"
            class="
              button
              is-rounded
              px-6
              is-size-5 is-primary
              has-text-weight-bold
            ">
            Cómo crear tu propia agenda
          </NuxtLink>
        </div>
        <div class="column is-hidden-desktop is-1 my-3 level-left">
          <NuxtLink
            to="/agendas"
            class="
              button
              is-rounded
              is-size-6 is-primary
              has-text-weight-bold
            ">
            Crear tu agenda
          </NuxtLink>
        </div>
        <!-- backup tmep m-auto my-6 py-6 -->
        <div class="column is-auto level-right  bg-vector">
          <div class="">
            <!-- <img src="~/assets/vector.png" alt="lineas decorativas"> -->
            <h1 class="sub-title-section my-6">Co-construcción<br />agendas</h1>
          </div>
        </div>
      </div>
      <div>
        <div class="tile is-parent">
          <article class="tile is-child notification">
            <div class="content">
              <p class="title">¿Para qué Co-crear agendas?</p>
              <!-- <p class="subtitle">
                With even more content
              </p> -->
              <div class="content container content-margin has-text-justified">
                <p>
                  La co-creación de agendas, es un <b>ejercicio colaborativo</b> en donde se tienen en cuenta las diferentes necesidades de aquellas personas que participan en él.
                </p>
                <p>
                  Por esto, <b>¡Sin Mujeres No!</b> trabajó en la identificación de problemas con mujeres de diferentes departamentos del país para así, garantizar la representatividad de los temas priorizados por las mujeres en las agendas de aquellas que lleguen habitar los espacios de toma de decisiones.
                </p>
              </div>
            </div>
          </article>
        </div>
      </div>
      <!-- el que lleva imagenes boceto -->
      <div class="">
        <div class="container lazy-margin">
          <div class="tile is-parent">
            <article class="tile is-child notification">
              <div class="content">
                <p class="purple-title">
                  <span class="squad">◼</span> Autonomía Económica
                </p>
                <!-- <p class="subtitle">
                  With even more content
                </p> -->
                <div
                  class="content-w container content-margin has-text-justified"
                >
                  La autonomía económica es un pilar fundamental de la autonomía
                  de las mujeres y, por definición, requiere que éstas perciban
                  ingresos que les permitan superar la pobreza y disponer de su
                  tiempo libremente para capacitarse, acceder al mercado
                  laboral, desarrollarse profesional y personalmente, participar
                  de manera activa de la vida social y política, y dedicarse a
                  sus seres queridos sin que ello se transforme en una barrera
                  para el logro de sus propias aspiraciones.
                  <section class="section button-container">
                    <img class="" src="~/assets/image 18.png" alt="" />
                    <a
                      id="autonomia"
                      href="/files/autonomiaeconomica.pdf"
                      alt="descargar imagen en pdf"
                      download
                    >
                      <img
                        src="~/assets/download.png"
                      />
                    </a>
                  </section>
                  <div class="container box has-text-centered is-transparent">
                    <div
                      class="
                        column
                        is-half is-offset-one-quarter is-align-items-center
                      "
                    >
                      <a
                        href="/files/Autonomiaeconomica.pdf"
                        class="button button-download is-rounded bg-button"
                        target="_blank"
                        download
                      >
                        Descargar el resumen
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>
        <div class="container lazy-margin">
          <div class="tile is-parent">
            <article class="tile is-child notification">
              <div class="content">
                <p class="purple-title">
                  <span class="squad">◼</span> Participación Política
                </p>
                <!-- <p class="subtitle">
                  With even more content
                </p> -->
                <div
                  class="content-w container content-margin has-text-justified"
                >
                  <p>
                    La participación política es considerada como “cualquier
                    acción realizada por un individuo o grupo, con la finalidad
                    de incidir en una u otra medida en los asuntos públicos.”
                    (Faro Democrático) Suele orientarse a la elección de cargos
                    públicos, al control y veeduría de los actores políticos, y
                    a la construcción de políticas públicas. Sus características
                    son:<br />
                  </p>
                  <p>Se entiende como una actividad o acción.<br /></p>
                  <p>
                    Es voluntaria y no está ordenada por una clase dominante o
                    por una ley.<br />
                  </p>
                  <p>
                    Le concierne al Estado, al gobierno y a la política, no se
                    limita a fases específicas (como procesos parlamentarios de
                    toma de decisión) ni áreas específicas como elecciones o
                    partidos políticos. Es pluralista, lo que permite que haya
                    participación de aficionados y no académicos.
                  </p>
                  <section class="section button-container">
                    <img
                      class="image"
                      src="~/assets/participacion.png"
                      alt=""
                      style="margin: 0 auto"
                    />
                    <a
                      id="participacion"
                      href="/files/participacionpolitica.pdf"
                      alt="descargar imagen en pdf"
                      download
                    >
                      <img
                        src="~/assets/download.png"
                      />
                    </a>
                  </section>
                  <div class="container box has-text-centered is-transparent">
                    <div
                      class="
                        column
                        is-half is-offset-one-quarter is-align-items-center
                      "
                    >
                      <a
                        href="/files/participaciónpolítica.pdf"
                        class="button button-download is-rounded bg-button"
                        target="_blank"
                        download
                      >
                        Descargar el resumen
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>
        <div class="container lazy-margin">
          <div class="tile is-parent">
            <article class="tile is-child notification">
              <div class="content">
                <p class="purple-title">
                  <span class="squad">◼</span>Acuerdo de Paz
                </p>
                <!-- <p class="subtitle">
                  With even more content
                </p> -->
                <div
                  class="content-w container content-margin has-text-justified"
                >
                  <p>
                    El Acuerdo final para la terminación del conflicto y la
                    construcción de una paz estable y duradera representa la
                    lucha y los esfuerzos de la multiplicidad de mujeres que
                    desde diferentes lugares le han apostado a la construcción
                    de un país distinto, mujeres que han aportado propuestas
                    desde sus necesidades y expectativas, que se ven reflejadas
                    en el acuerdo, y que ahora en el proceso de implementación
                    constituyen una premisa indispensable para la realización de
                    nuevos pactos sociales basados en el reconocimiento y la
                    inclusión.
                  </p>
                  <p>
                    La creación de la subcomisión de género se constituyó como
                    un hecho histórico al ser el escenario idóneo para aportar a
                    las modificaciones de las relaciones desiguales de poder
                    existentes en la sociedad, reconocer las afectaciones
                    diferenciales que la violencia sociopolítica dejó en sus
                    cuerpos y en sus vidas, para establecer acciones que de
                    transformación en la garantía de sus derechos y en su
                    participación en el espacio privado y público, lo cual
                    aporto en trascender de la visión de agentes pasivos en el
                    marco del conflicto a agentes activas con capacidad de
                    transformación.
                  </p>
                  <section class="section button-container">
                    <img
                      class=""
                      src="~/assets/paz.png"
                      alt="imagen resumen agenda de paz"
                    />
                    <a
                      id="paz"
                      href="/files/agendadepaz.pdf"
                      alt="descargar imagen en pdf"
                      download
                    >
                      <img
                        src="~/assets/download.png"
                      />
                    </a>
                  </section>
                  <div class="container box has-text-centered is-transparent">
                    <div
                      class="
                        column
                        is-half is-offset-one-quarter is-align-items-center
                      "
                    >
                      <a
                        href="/files/Agendadepaz.pdf"
                        class="button button-download is-rounded bg-button"
                        target="_blank"
                        download
                      >
                        Descargar el resumen
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
    <section class="section bg-aqua expand">
      <div class="container level is-mobile">
        <!-- backup tmep m-auto my-6 py-6 -->
        <div class="column level-left ">
          <div class="is-hidden-touch ml-6 pl-6">
            <img src="~/assets/Como-crear-tu-propia-agenda.png" alt="lineas decorativas">
          </div>
          <div class="ml-3 is-hidden-desktop">
            <img src="~/assets/Como-crear-tu-propia-agenda.png" alt="lineas decorativas">
          </div>
        </div>
      </div>
      <!-- <div>
        <div class="tile is-parent">
          <article class="tile is-child notification">
            <div class="content">
            </div>
          </article>
        </div>
      </div> -->
      <div class="">
        <div class="container lazy-margin">
          <div class="tile is-parent">
            <article class="tile is-child notification">
              <div class="content">
                <div
                  class="content-w container my-0  content-margin has-text-justified"
                >
                  Te invitamos a conocer nuestra seccion de agendas, donde tenes instrucciones y recursos para aprender a crear tus propias agendas.Tambien tendras la oportinidad de compartir tus agendas con nosotros para recibir ayuda, compartirla y crecer en su alcance.
                </div>
              </div>
            </article>
          </div>
        </div>
        <div class="container columns box level-center mx-6 ml-6 pl-6">
          <dic class="column is-hidden-touch is-half is-offset-one-quarter is-align-items-center">
            <NuxtLink
              to="/agendas"
              class="
                button
                is-rounded
                px-6
                ml-6
                mb-6
                is-size-5 is-primary
                has-text-weight-bold
              ">
              Conoce cómo crear tu propia agenda
            </NuxtLink>
          </dic>
          <dic class="column is-half is-hidden-desktop is-offset-one-quarter is-align-items-center">
            <NuxtLink
              to="/agendas"
              class="
                button
                is-rounded
                px-6
                ml-3
                mb-6
                is-size-5 is-primary
                has-text-weight-bold
              ">
              Cómo crear agendas
            </NuxtLink>
          </dic>
        </div>
      </div>
    </section>
    <section
      id="merepresenta"
      class="
        section
        is-medium
        max-width
        has-background-primary has-text-white
        pt-4
        top-bar-text
        expand
      "
    >
      <div class="container level is-mobile">
        <div class="column level-right bg-vector-dark p-6">
          <div class="">
            <!-- <img src="~/assets/vector.png" alt="lineas decorativas"> -->
            <h1 class="sub-title-section">#MeRepresenta<br /></h1>
          </div>
        </div>
      </div>
      <div class="section">
        <div class="container">
          <content-box
            title=""
            description="La política tradicional no ha representado a las mujeres, y al revisar con las lideresas del territorio colombiano, encontramos que la representatividad y los liderazgos trascienden a la política y se encuentran en la cotidianidad. Es por eso, que queremos invitarlxs a que nos cuenten qué mujeres lxs representa usando el hashtag #MeRepresenta ¡Renovemos la política!"
            video="https://www.youtube.com/embed/ODcMMvOC5Hs"
          />
        </div>
        <!-- se pidio ocultar este boton ISSU: https://app.asana.com/0/1199160884379309/1201417108272610/fn -->
        <!-- <div class="container box has-text-centered is-transparent">
          <div class="column is-half is-offset-one-quarter  is-align-items-center ">
            <a class=" button button-download is-primary is-inverted is-rounded bg-button">
              Conoce la causa completa
            </a>
          </div>
        </div> -->
      </div>
    </section>
    <section
      id="recursos"
      class="
        section
        is-medium
        max-width
        has-background-white
        pt-4
        top-bar-text
        expand"
    >
      <div class="container level is-mobile">
        <div class="column level-left">
          <div class="bg-vector-dark-inverted">
            <!-- <img src="~/assets/vector.png" alt="lineas decorativas"> -->
            <h1 class="sub-title-purple">Recursos<br />audiovisuales</h1>
          </div>
        </div>
      </div>
      <div class="container">
        <div class="columns my-6 is-centered">
          <div class="column is-4 mb-6">
            <h2 class="ml-6 mb-5 indicador">Stickers</h2>
            <div class="actuar-agenda-box">
              <img src="~/assets/stickers-mini.png" alt="" />
              <NuxtLink
                to="/stickers"
                class="
                  button
                  is-primary
                  has-text-weight-bold
                  is-rounded
                  enter-button
                  is-medium
                "
              >
                ver más
              </NuxtLink>
            </div>
            <!-- <casos-box  title="AGENDA" description="Campaña nacional que promueve y facilita la participación de las mujeres en política. Por lo justo: cincuenta / sí cuenta." href="https://actua.somosmuchas.org/proyecto/paridadya#activa" label='ver'>
                <img src="~/assets/paridad-logo.svg" alt="">
            </casos-box> -->
          </div>
          <!-- <div class="column is-hidden is-4">
            <h2 class="ml-6 indicador">Videos</h2>
            <div class="actuar-agenda-box">
              <img src="https://via.placeholder.com/300x300" alt="">
              <a
                href="#"
                target="_blank"
                class="
                  button
                  is-primary
                  has-text-weight-bold
                  is-rounded
                  enter-button
                  is-medium
                " >
                Descargar
              </a>
            </div>
          </div> -->
          <div class="column is-4 mb-3">
            <h2 class="ml-6 mb-5 indicador">Fotos y Videos</h2>
            <div class="actuar-agenda-box">
              <!-- <img src="~/assets/lienzos-mini.png" alt="" /> -->
              <img class="image image-cover " src="~/assets/Collage.jpg" alt="galeria de fotos y videos">
              <a
                href="https://drive.google.com/drive/folders/1FLagFjGOhDlyQeQ3o9NDt9cDbBLBKT-i"
                target="_blank"
                class="
                  button
                  is-primary
                  has-text-weight-bold
                  is-rounded
                  enter-button
                  is-medium
                " >
                Descargar
              </a>
            </div>
          </div>
          <!-- se pidio quitar estos dos y agregar dos nuevos fecha: 29/11/21 -->
          <!-- <div class="column is-4">
            <h2 class="ml-6 indicador">Lienzos</h2>
            <div class="actuar-agenda-box">
              <img src="~/assets/lienzos-mini.png" alt="" />
              <a
                href="https://drive.google.com/drive/u/1/folders/1tRo44_vHsj2TOv0lvXPfkJK_FXTPTUFn"
                target="_blank"
                class="
                  button
                  is-primary
                  has-text-weight-bold
                  is-rounded
                  enter-button
                  is-medium
                " >
                Descargar
              </a>
            </div>
          </div>
          <div class="column is-4">
            <h2 class="ml-6 indicador">Árbol de Problemas</h2>
            <div class="actuar-agenda-box">
              <img src="~/assets/arbol-mini.png" alt="" />
              <a
                href="https://drive.google.com/file/d/1UfZjO8X9n_KCNlpE6f8uyB_QdVl791W3/view"
                target="_blank"
                class="
                  button
                  is-primary
                  has-text-weight-bold
                  is-rounded
                  enter-button
                  is-medium
                "
              >
                Descargar
              </a>
            </div>
          </div> -->
          <!-- viejos -->
        <!-- <div class="columns  my-6 ">
          <div class="column is-4">
            <div class="actuar-agenda-box">
              <img src="https://via.placeholder.com/300x300" alt="">
              <a href="#" target="_blank" class="button is-primary has-text-weight-bold is-rounded enter-button is-medium">
                <i class="fab fa-whatsapp fa-fw fa-lg" />
              </a>
            </div>
          </div>
          <div class="column is-4">
            <div class="actuar-agenda-box">
              <img src="https://via.placeholder.com/300x300" alt="">
              <a href="#" target="_blank" class="button is-primary has-text-weight-bold is-rounded enter-button is-medium">
                <i class="fa fa-folder fa-fw fa-lg" />
              </a>
            </div>
          </div>
        </div> -->
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import Carousel from '~/components/conectar/carousel.vue'
import ContentBox from '~/components/content/ContentBox.vue'

export default {
  components: { ContentBox, Carousel },
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
  },
  head () {
    return {
      script: [
        {
          src: 'https://www.tiktok.com/embed.js',
          async: true
        }
      ]
    }
  }
}
</script>
<style lang="scss">
/* #__layout .section .container{
  margin: 0%;
  padding: 0%;
} */

.expand {
  margin: 0%;
  padding: 0%;
}
.videoWrapper {
  position: relative;
  padding-bottom: 56.25%; /* 16:9 */
  height: 0;
}
.videoWrapper iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.slick-arrow {
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
  background-color: #32bd9f;
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
  background-color: #32bd9f;
  padding: 0.2em;
  font-weight: 700;
  -webkit-border-radius: 100%;
  -moz-border-radius: 100%;
  border-radius: 100%;
}
.bg-aqua {
  background-color: #32bd9f;
}
.bg-vector {
  background: transparent url("../assets/vector.png") no-repeat scroll 70% 50%;
}
.bg-vector-dark {
  background: transparent url("../assets/dark-vector.png") no-repeat scroll 70%
    50%;
}
.bg-vector-dark-inverted {
  overflow: visible;
  background: transparent url("../assets/vector-left.png") no-repeat scroll 150%
    50%;
}
.button-container {
  display: inline-block;
  position: relative;
}

.button-container a {
  position: absolute;
  bottom: 4em;
  right: 4em;
  background-color: #8917ff;
  border-radius: 100%;
  color: white;
  text-transform: uppercase;
  padding: 1em;
  box-shadow: 9px 9px 10px -2px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: 9px 9px 10px -2px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 9px 9px 10px -2px rgba(0, 0, 0, 0.75);
}
.button-container a:hover {
  border: solid 1px black;
}
@media screen and (max-width: 720px) {
  .sub-title-section {
    /* position: absolute;
    left: 23.15%;
    right: 0%;
    top: 3.7%;
    bottom: 8.33%; */
    font-family: Titillium Web;
    font-style: normal;
    font-weight: bold;
    font-size: 26.0729px !important;
    line-height: 22px !important;
    /* or 86% */
    text-align: right;
    color: #ffffff;
    /* background: transparent url("../assets/vector.png") no-repeat scroll 50% 0%; */
  }
  .sub-title-purple {
    /* position: absolute;
    left: 23.15%;
    right: 0%;
    top: 3.7%;
    bottom: 8.33%; */
    font-family: Titillium Web;
    font-style: normal;
    font-weight: bold;
    font-size: 26.0729px !important;
    line-height: 23px !important;
    /* or 86% */
    text-align: left;
    color: #8917ff;
    /* background: transparent url("../assets/vector.png") no-repeat scroll 50% 0%; */
  }
  .title {
    font-family: Titillium Web;
    font-style: normal;
    font-weight: bold;
    font-size: 20px !important;
    line-height: 47px;
    color: #fff;
    margin: none;
    padding: none;
  }
  .notification {
    padding: 0px !important;
  }
  .contenet {
    font-family: Titillium Web;
    font-style: normal;
    font-weight: normal;
    font-size: 14px !important;
    line-height: 21px !important;
  }
  .content-margin {
    margin: 0px !important;
    padding: 0px !important;
  }
  .lazy-margin {
    margin: 10px;
  }
  .margin-center {
    margin: none !important;
    margin-top: 10px !important;
  }
  .purple-title {
    font-family: Titillium Web;
    font-style: normal;
    font-weight: bold;
    font-size: 18px !important;
    line-height: 20px;
    margin: 0px !important;
  }
  .bg-vector {
    background: transparent url("../assets/vector.png") no-repeat scroll 100%
      50%;
  }
  .squad {
    font-size: 0.5em;
    vertical-align: 10% !important;
  }
  .bg-button {
    width: 172.39px;
    height: 31px;
  }
  .button-container a {
    bottom: 1em;
    right: 1.2em;
  }
  .button-container a img {
    width: 30px;
  }
}
.notification {
  background: none;
}

.tile .title {
  font-family: Titillium Web;
  font-style: normal;
  font-weight: bold;
  font-size: 60px;
  line-height: 47px;
  /* identical to box height, or 79% */
  color: #ffffff;
}

.tile .content {
  font-family: Titillium Web;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 21px;
  /* or 105% */
  color: #000000;
}

.purple-title {
  font-family: Titillium Web;
  font-style: normal;
  font-weight: bold;
  font-size: 55px;
  line-height: 47px;
  /* or 86% */
  color: #8917ff;
  /* Inside Auto Layout */
  flex: none;
  order: 0;
  flex-grow: 0;
  margin: 0px 17px;
}
.content-w {
  font-family: Titillium Web;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 21px;
  /* or 105% */
  color: #ffffff !important;
}
.sub-title-section {
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
  color: #ffffff;
  /* background: transparent url("../assets/vector.png") no-repeat scroll 50% 0%; */
}
.sub-title-purple {
  /* position: absolute;
    left: 23.15%;
    right: 0%;
    top: 3.7%;
    bottom: 8.33%; */
  font-family: Titillium Web;
  font-style: normal;
  font-weight: bold;
  font-size: 55px !important;
  line-height: 47px !important;
  /* or 86% */
  text-align: left;
  color: #8917ff;
  /* background: transparent url("../assets/vector.png") no-repeat scroll 50% 0%; */
}
.content-margin {
  margin: 42px;
  padding: 42px;
}
.notification {
  padding-left: 80px;
}
.squad {
  font-size: 0.5em;
  vertical-align: 20%;
}
.margin-center {
  margin: 0.0025em 8em;
}
.bg-button {
  padding: 10px 26px;
  width: 228px;
  height: 41px;
  background: #8917ff;
  border: none;
  border-radius: 290486px;
  color: #fff;
}

.box {
  background: none;
  box-shadow: none;
}

.button-download {
  font-family: Titillium Web;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 21px;
  /* identical to box height, or 105% */

  text-align: center;
}
.actuar-agenda-box {
  width: 300px;
  height: 300px;
  margin: 0 auto;
  position: relative;
  border: 2px solid $secondary;
  img {
    max-height: 100%;
    max-width: 100%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  @include from($desktop) {
    margin: 10px;
  }
}
.enter-button {
  position: absolute;
  bottom: -20px;
  left: 50%;
  transform: translate(-50%, 0);
  z-index: 150;
  &:hover {
    color: $primary;
    background-color: white;
    border: 2px solid $primary;
  }
}
.smartphone {
  position: relative;
  width: 360px;
  height: 640px;
  margin: auto;
  border: 16px black solid;
  border-top-width: 60px;
  border-bottom-width: 60px;
  border-radius: 36px;
}

/* The horizontal line on the top of the device */
.smartphone:before {
  content: "";
  display: block;
  width: 60px;
  height: 5px;
  position: absolute;
  top: -30px;
  left: 50%;
  transform: translate(-50%, -50%);
  background: #333;
  border-radius: 10px;
}

/* The circle on the bottom of the device */
.smartphone:after {
  content: "";
  display: block;
  width: 35px;
  height: 35px;
  position: absolute;
  left: 50%;
  bottom: -65px;
  transform: translate(-50%, -50%);
  background: #333;
  border-radius: 50%;
}

/* The screen (or content) of the device */
.smartphone .content {
  width: 360px;
  height: 640px;
  background: white;
}
.indicador {
  font-family: Titillium Web;
  font-style: normal;
  font-weight: bold;
  font-size: 28.1302px;
  line-height: 19px;
  /* or 69% */

  // text-align: center;

  color: #32bd9f;
}
.image-cover{
  object-fit: cover !important;
}
</style>
