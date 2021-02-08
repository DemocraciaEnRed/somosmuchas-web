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
    <div class="columns">
      <div class="column">
        <casos-box title="PARIDAD ¡YA!" description="Campaña nacional que promueve y facilita la participación de las mujeres en política. Por lo justo: cincuenta / sí cuenta." href="https://activasomosmuchas.democraciaenred.org/proyecto/paridadya#activa">
          <img src="~/assets/paridad-logo.svg" alt="">
        </casos-box>
      </div>
      <div class="column">
        <casos-box title="JUNTAS" description="Diálogo, intercambio y co-construcción de agendas y propuestas de mujeres progresistas de América Latina para responder de forma colectiva a la pandemia y a los efectos que tiene en la vida de las mujeres de la región" href="https://conversar.somosmuchas.org/agendas">
          <img src="~/assets/juntas-logo.png" alt="">
        </casos-box>
      </div>
    </div>
  </div>
</template>

<script>
import CasosBox from '~/components/index/CasosBox.vue'
export default {
  name: 'HomePage',
  components: {
    CasosBox
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
.image-title{
  width: 400px;
}

</style>
