<template>
  <div>
    <div class="section has-background-primary has-text-centered has-text-white pt-4 top-bar-text">
      <h5 class="subtitle is-4 has-text-white is-spaced">
        Llegó el momento de juntar fuerzas para avanzar unidas!<br>
        Esta plataforma fue creada con el propósito de ampliar el potencial de las causas feministas. Explora y descubre las herramientas disponibles.
      </h5>
      <h4 class="title is-2 has-text-weight-bold has-text-white">
        “No estoy aceptando las que no puedo cambiar, estoy cambiando las cosas que no puedo aceptar”, Angela Davis
      </h4>
    </div>
    <br>
    <div class="tile is-ancestor">
      <div class="tile is-parent">
        <article class="tile is-child seccion-box seccion-actuar">
          <div class="about">
            Somos una ciudadanía que se ocupa de su presente. Por eso le hablamos a lxs Congresistas, para ser incluídxs en las decisiones que guían el rumbo del país. Entra y escríbele unx a unx
          </div>
          <NuxtLink to="/actuar">
            <div class="barra">
              <h1 class="is-size-3 is-fullwidth">
                <b>ACTUAR</b>
              </h1>
              <div>
                <NuxtLink to="/actuar" class="button is-rounded is-primary is-inverted has-text-weight-bold">
                  ENTRAR
                </NuxtLink>
              </div>
            </div>
          </NuxtLink>
        </article>
      </div>
      <div class="tile is-parent">
        <article class="tile is-child seccion-box seccion-conversar">
          <div class="about">
            Necesitamos diálogos fundamentados y críticos para avanzar en nuestras causas. Debate, opina y crea concesos para fortalecer las agendas temáticas.
          </div>
          <NuxtLink to="/conversar">
            <div class="barra">
              <h1 class="is-size-3 is-fullwidth">
                <b>CONVERSAR</b>
              </h1>
              <div>
                <NuxtLink to="/conversar" class="button is-rounded is-primary is-inverted has-text-weight-bold">
                  ENTRAR
                </NuxtLink>
              </div>
            </div>
          </NuxtLink>
        </article>
      </div>
    </div>
    <div class="tile is-ancestor">
      <div class="tile is-parent">
        <article class="tile is-child seccion-box seccion-conectar">
          <div class="about">
            Vamos a tejer juntas. Entra a este mapeo de iniciativas feministas en Colombia y crea articulación con otras.
          </div>
          <NuxtLink to="/conectar">
            <div class="barra">
              <h1 class="is-size-3 is-fullwidth">
                <b>CONECTAR</b>
              </h1>
              <div>
                <NuxtLink to="/conectar" class="button is-rounded is-primary is-inverted has-text-weight-bold">
                  ENTRAR
                </NuxtLink>
              </div>
            </div>
          </NuxtLink>
        </article>
      </div>
      <div class="tile is-parent">
        <article class="tile is-child seccion-box seccion-difundir">
          <div class="about">
            Que nadie se quede por fuera de tu causa ¡Hagamos eco para ser escuchadxs!
          </div>
          <NuxtLink to="/difundir">
            <div class="barra">
              <h1 class="is-size-3 is-fullwidth">
                <b>DIFUNDIR</b>
              </h1>
              <div>
                <NuxtLink to="/difundir" class="button is-rounded is-primary is-inverted has-text-weight-bold">
                  ENTRAR
                </NuxtLink>
              </div>
            </div>
          </NuxtLink>
        </article>
      </div>
    </div>
    <div class="tile is-ancestor">
      <div class="tile is-parent">
        <article class="tile is-child seccion-box seccion-cocrear">
          <div class="about">
            Solxs no es posible! Por eso liberamos diversas metodologías para ser usadas en tu causa.
          </div>
          <NuxtLink to="/cocrear">
            <div class="barra">
              <h1 class="is-size-3 is-fullwidth">
                <b>COCREAR</b>
              </h1>
              <div>
                <NuxtLink to="/cocrear" class="button is-rounded is-primary is-inverted has-text-weight-bold">
                  ENTRAR
                </NuxtLink>
              </div>
            </div>
          </NuxtLink>
        </article>
      </div>
    </div>
    <br>
    <img src="~/assets/title01.svg" class="image mb-6 image-title" alt="">
    <VueSlickCarousel v-bind="settings">
      <casos-box title="PARIDAD ¡YA!" description="Campaña nacional que promueve y facilita la participación de las mujeres en política. Por lo justo: cincuenta / sí cuenta." href="https://actua.somosmuchas.org/proyecto/paridadya#activa">
        <img src="~/assets/paridad-logo.svg" alt="">
      </casos-box>
      <casos-box title="JUNTAS" description="Diálogo, intercambio y co-construcción de agendas y propuestas de mujeres progresistas de América Latina para responder de forma colectiva a la pandemia y a los efectos que tiene en la vida de las mujeres de la región" href="https://conversar.somosmuchas.org/agendas">
        <img src="~/assets/juntas-logo.png" alt="">
      </casos-box>
      <casos-box title="CAUSA JUSTA POR EL ABORTO" description="Movimiento que busca que se elimine el delito de aborto del Código Penal colombiano" href="http://causajustaporelaborto.org/">
        <img src="~/assets/logo-causa-justa.png" alt="">
      </casos-box>
      <casos-box title="Boroló" description="Iniciativa para hablar de protesta y movilización social" href="http://www.borolo.org/">
        <img src="~/assets/logo-borolo.jpeg" alt="">
      </casos-box>
      <casos-box title="Dignidad para recicladorxs" description="Redes de solidaridad y afecto como respuesta a VIOLENCIAS ECONÓMICAS y fortalecimiento de capacidades de incidencia política." href="https://activasomosmuchas.democraciaenred.org/proyecto/dignidad-para-recicladoras-y-recicladores#activa">
        <img src="~/assets/logo-recicladores.png" alt="">
      </casos-box>
    </VueSlickCarousel>
    <br>
    <section class="articulos">
      <img src="~/assets/title05.svg" class="image mt-6 mb-6 image-titile-articles" alt="Articulos Relacionados">
      <div class="columns">
        <div class="column">
          <articles-box title="¿Quién le teme a las mujeres en la política?" author="Columnista ALEJANDRA COLL" date="14/11/2020" link="https://lasillavacia.com/silla-llena/red-de-las-mujeres/quien-le-teme-las-mujeres-la-politica-77341">
            <img src="~/assets/lasillallena.png" alt="">
          </articles-box>
        </div>
        <div class="column">
          <articles-box title="¿Quién le teme a la paridad?" author="Columnista VANESSA ROSALES" date="05/12/2020" link="https://www.elespectador.com/opinion/quien-le-teme-a-la-paridad/">
            <img src="~/assets/elespectador.png" alt="">
          </articles-box>
        </div>
        <div class="column">
          <articles-box title="¡Paridad! ¿Y las candidatas?" author="Columnista LINA MARÍA ARANGO" date="28/02/2021" link="https://www.eldiario.com.co/opinion/paridad-y-las-candidatas/">
            <img src="~/assets/eldiario.png" alt="">
          </articles-box>
        </div>
        <div class="column">
          <articles-box title="Paridad ya" author="Columnista BRIGITTE BAPTISE" date="10/12/2020" link="https://www.elespectador.com/opinion/paridad-ya/">
            <img src="~/assets/elespectador.png" alt="">
          </articles-box>
        </div>
      </div>
      <div class="columns">
        <div class="column">
          <articles-box title="Discriminación no es meritocracia" author="Editorial" date="26/03/2021" link="https://www.elespectador.com/opinion/editorial/discriminacion-no-es-meritocracia/">
            <img src="~/assets/elespectador.png" alt="">
          </articles-box>
        </div>
        <div class="column">
          <articles-box title="Pírrica, no; cortina de humo, tal vez" author="Columnista CLAUDIA PALACIOS" date="23/12/2020" link="https://www.eltiempo.com/opinion/columnistas/claudia-palacios/pirrica-no-cortina-de-humo-tal-vez-columna-de-claudia-palacios-556773">
            <img src="~/assets/eltiempo.png" alt="">
          </articles-box>
        </div>
        <div class="column">
          <articles-box title="Paridad política: un camino por recorrer" author="Columnista KAREN MARTINEZ" date="09/11/2020" link="https://www.elespectador.com/noticias/nacional/paridad-politica-un-camino-por-recorrer/">
            <img src="~/assets/elespectador.png" alt="">
          </articles-box>
        </div>
        <div class="column">
          <articles-box title="“Los partidos no le apuestan a las mujeres”: Juliana Hernández" author="Columnista NATALIA TAMAYO" date="07/10/2020" link="https://www.elespectador.com/noticias/politica/paridadya-la-campana-ciudadana-para-incidir-que-mas-mujeres-lleguen-a-puestos-de-eleccion-popular/">
            <img src="~/assets/elespectador.png" alt="">
          </articles-box>
        </div>
      </div>
      <div class="columns">
        <div class="column is-one-quarter">
          <articles-box title="Por ahora la paridad en el Congreso de Colombia seguirá siendo una ilusión" author="Editorial" date="05/11/2020" link="https://www.rollingstone.com.co/actualidad/por-ahora-la-paridad-en-el-congreso-de-colombia-seguira-siendo-una-ilusion/">
            <img src="~/assets/rollingstone.png" alt="">
          </articles-box>
        </div>
        <div class="column is-one-quarter">
          <articles-box title="“Las mujeres queremos el poder y a una feminista en la Presidencia”: Paridad ¡Ya!" author="Columnista KAREN MARTINEZ" date="27/04/2021" link="https://diariocriterio.com/2021/04/27/las-mujeres-queremos-el-poder-y-a-una-feminista-a-la-presidencia-paridad-ya/?fbclid=IwAR3-iqotKn40XVurYIeC1Jtt0rsryTqefMZaw22Wq6UZNLb-Uq43aqFt6Og">
            <img src="~/assets/criterio.png" alt="">
          </articles-box>
        </div>
        <div class="column is-one-quarter">
          <articles-box title="Paridad política en el Gobierno de Duque, ¿rabo de paja?" author="Columnista KAREN MARTINEZ" date="19/05/2021" link="https://diariocriterio.com/2021/05/19/paridad-politica-en-el-gobierno-de-duque-rabo-de-paja/">
            <img src="~/assets/criterio.png" alt="">
          </articles-box>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import CasosBox from '~/components/index/CasosBox.vue'
import ArticlesBox from '~/components/index/ArticlesBox.vue'
export default {
  name: 'HomePage',
  components: {
    CasosBox,
    ArticlesBox
  },
  data () {
    return {
      settings: {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
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

<style lang="scss" scoped>
.top-bar-text{
  margin-top:-5px;
}
.seccion-box{
  //padding: 1rem;
  min-height: 250px;
  background-size: cover;
  background-position: center center;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  &.seccion-actuar{
    background-image: url('~assets/cover-bw-02.jpg');
    &:hover .about{
      opacity: 1;
    }
  }
  &.seccion-conversar{
    background-image: url('~assets/cover-bw-01.jpg');
    &:hover .about{
      opacity: 1;
    }
  }
  &.seccion-conectar{
    background-image: url('~assets/cover-bw-03.jpg');
    &:hover .about{
      opacity: 1;
    }
  }
  &.seccion-difundir{
    background-image: url('~assets/cover-bw-05.jpg');
    &:hover .about{
      opacity: 1;
    }
  }
  &.seccion-cocrear{
    background-image: url('~assets/cover-bw-04.jpg');
    &:hover .about{
      opacity: 1;
    }
  }
  .about{
    order: 0;
    flex: 1 1 auto;
    align-self: auto;
    padding: 35px;
    background-color: rgba(darken($primary,25%), 0.7);
    opacity: 0;
    color: #FFF;
    transition: opacity .2s ease-out;
    -moz-transition: opacity .2s ease-out;
    -webkit-transition: opacity .2s ease-out;
    -o-transition: opacity .2s ease-out;
    font-size: $size-4;
    font-weight: 300;
    overflow-y: hidden;
  }
  .barra{
    background-color: rgba(darken($primary,10%), 0.7);
    padding: 6px 15px;
    color: #FFF;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
}
.image-title {
  width: 400px;
}
.image-titile-articles {
  margin-left: auto;
}

</style>
