<template>
  <div>
    <div class="section has-background-primary has-text-centered has-text-white is-size-4 top-bar-text">
      Es una plataforma creada con el proposito de facilitar el accionar de las mujeres, ampliando el potencial de sus iniciativas particulares. Explora y descubre las herramientas que tienes disponibles.
    </div>
    <br>
    <div class="tile is-ancestor">
      <div class="tile is-parent">
        <article class="tile is-child seccion-box seccion-actuar">
          <div class="about">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda porro non quibusdam. Provident expedita animi fugit adipisci totam obcaecati voluptas rerum officia molestiae dolores laboriosam ea facilis, cumque consectetur reiciendis.
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
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda porro non quibusdam. Provident expedita animi fugit adipisci totam obcaecati voluptas rerum officia molestiae dolores laboriosam ea facilis, cumque consectetur reiciendis.
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
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda porro non quibusdam. Provident expedita animi fugit adipisci totam obcaecati voluptas rerum officia molestiae dolores laboriosam ea facilis, cumque consectetur reiciendis.
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
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda porro non quibusdam. Provident expedita animi fugit adipisci totam obcaecati voluptas rerum officia molestiae dolores laboriosam ea facilis, cumque consectetur reiciendis.
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
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda porro non quibusdam. Provident expedita animi fugit adipisci totam obcaecati voluptas rerum officia molestiae dolores laboriosam ea facilis, cumque consectetur reiciendis.
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
        <casos-box title="Lalal un titulo" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel quibusdam corporis in culpa odit tenetur, officiis dolorum. Accusantium ab eum cum nisi itaque rem ipsam, vero hic optio saepe iusto!" to="/actuar">
            <img src="~/assets/juntas-logo.png" alt="">
        </casos-box>
      </div>
      <div class="column">
        <casos-box title="Lalal un titulo" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel quibusdam corporis in culpa odit tenetur, officiis dolorum. Accusantium ab eum cum nisi itaque rem ipsam, vero hic optio saepe iusto!" to="/actuar">
            <img src="~/assets/paridad-logo.svg" alt="">
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
  min-height: 300px;
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
    padding: 10px;
    background-color: rgba(darken($primary,20%), 0.6);
    opacity: 0;
    color: #FFF;
    transition: opacity .2s ease-out;
    -moz-transition: opacity .2s ease-out;
    -webkit-transition: opacity .2s ease-out;
    -o-transition: opacity .2s ease-out;
    font-size: $size-5;
    overflow-y: hidden;
  }
  .barra{
    background-color: rgba($primary, 0.6);
    padding: 10px;
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
