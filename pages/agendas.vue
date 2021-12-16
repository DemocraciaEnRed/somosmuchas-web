<template>
  <div>
    <div class="hero is-primary ">
      <div class="hero-body">
        <div class="columns">
          <div class="column is-half">
            <h1 class="title is-1 has-text-weight-bold">
              Co-construcción <br>agendas
            </h1>
            <div class="subtitle-container pl-0">
              <h2 class="subtitle is-4">
                Aquí encontrarás recursos para planificar la co-construcción de agendas y también podrás compartir tus resultados para luego abrirlo a la comunidad
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="columns my-6 is-centered">
      <div class="column is-3 has-text-centered">
        <img src="~/assets/arrowDown.png" class="image an-icon is-210x210" alt="">
        <!-- <h2 class="is-size-4">
          Descargar
        </h2> -->
        <a href="https://drive.google.com/file/d/1UfZjO8X9n_KCNlpE6f8uyB_QdVl791W3/view?usp=sharing" class="button is-primary is-rounded has-text-weight-bold is-medium" target="_blank" download="arbol.pdf">Descargar</a>
        <br>
        <div>
          <p class="is-size-4">
            Aquí podrás descargar nuestra plantilla e instrucciones para la <br>co-creación de agendas
          </p>
        </div>
        <br>
        <br>
      </div>
      <div class="column is-3 is-offset-1 has-text-centered">
        <img src="~/assets/share.png" class="image an-icon is-210x210" alt="">
        <h2 class="is-size-4">
          Comparte
        </h2>
        <br>
        <p class="is-size-4 mb-5">
          Sube tu agenda, para que podamos compartirla con la comunidad y abrir el debate y la difusión
        </p>
        <br>
        <!-- typeform embebido no funciona -->
        <!-- <button data-tf-popup="zZgFiHbB" data-tf-size="70" style="padding:0 33px; margin-top:10px; width:97px;" class="button is-primary is-rounded has-text-weight-bold is-medium">
          Subir
        </button> -->

        <!-- <a href="https://preguntarparaacordar.typeform.com/to/zZgFiHbB" target="_blanck" class="button is-primary is-rounded has-text-weight-bold is-medium mt-1">
          Subir
        </a> -->
      </div>
    </div>
    <br>
    <!-- typeFOrm -->
    <div class="container">
              <div class="accordion-wrapper mt-4">
        <div class="accordion">
          <input type="checkbox" class="is-hidden" name="radio-a" id="check1"  />
          <label class="accordion-label" for="check1">Comparte tu Agenda</label>
            <div class="accordion-content">
              <Typeform
                url="https://preguntarparaacordar.typeform.com/to/zZgFiHbB"
                :hide-headers="true"
                :hide-footer="false"
                :button-text="Subir"
                :opacity="0"
                style="height:450px !important"
              />
            </div>
        </div>
            </div>
    </div>
    <!-- <img src="~/assets/title02.svg" class="image mb-6 image-title" alt=""> -->
    <div>
      <h5 data-v-2a183b29="" class="title mt-5 pt-5 is-2 has-text-lefted has-text-primary has-text-weight-bold">
        Últimos subidos<br data-v-2a183b29="">
      </h5>
    </div>
    <div class="columns">
      <div class="column">
        <div class="actuar-agenda-box">
          <img class="image"  src="~/assets/Agenda1.png" alt="">
          <!-- <a href="#" target="_blank" class="button is-primary has-text-weight-bold is-rounded enter-button is-medium">
            Ver
          </a> -->
          <NuxtLink to="/sin-mujeres-no#autonomia" class="button is-primary has-text-weight-bold is-rounded enter-button is-medium">
            Ver
          </NuxtLink>
        </div>
      <!-- <casos-box  title="AGENDA" description="Campaña nacional que promueve y facilita la participación de las mujeres en política. Por lo justo: cincuenta / sí cuenta." href="https://actua.somosmuchas.org/proyecto/paridadya#activa" label='ver'>
             <img src="~/assets/paridad-logo.svg" alt="">
        </casos-box> -->
      </div>
      <div class="column">
        <div class="actuar-agenda-box">
          <img  class="image" src="~/assets/Agenda2.png" alt="">
          <!-- <a href="#" target="_blank" class="button is-primary has-text-weight-bold is-rounded enter-button is-medium">
            Ver
          </a> -->
          <NuxtLink to="/sin-mujeres-no#participacion" class="button is-primary has-text-weight-bold is-rounded enter-button is-medium">
            Ver
          </NuxtLink>
        </div>
      </div>
      <div class="column">
        <div class="actuar-agenda-box">
          <img  class="image" src="~/assets/Agenda3.png" alt="">
          <!-- <a href="#" target="_blank" class="button is-primary has-text-weight-bold is-rounded enter-button is-medium">
            Ver
          </a> -->
          <NuxtLink to="/sin-mujeres-no#paz" class="button is-primary has-text-weight-bold is-rounded enter-button is-medium">
            Ver
          </NuxtLink>
        </div>
      </div>
    </div>
    <!-- Ocultado hasta nuevo aviso -->
    <!-- <div class="container">
      <div>
        <h1 class="title mt-5 pt-5 is-2 has-text-lefted has-text-primary has-text-weight-bold">
          Que opinas sobre estas agendas?
        </h1>
        <p class="content is-large has-text-justified">
          Buscanos en  nuestro instagram, para hacer comunidad y debatir!
        </p>
      </div>
      <div class="is-hidden-desktop">
        <div data-mc-src="3a06275c-70b6-4660-9e07-737d6dd9c827#instagram" />
        <script src="https://cdn2.woxo.tech/a.js#617dc3d6cd3af80016260b49" async data-usrc />
      </div>
      <div class="is-hidden-mobile">
        <div data-mc-src="ddf95c13-cc97-44cb-a3ff-d900fec4259e#instagram" />
        <script src="https://cdn2.woxo.tech/a.js#617dc3d6cd3af80016260b49" async data-usrc />
      </div>
    </div>
    <div class="container">
      <div>
        <h1 class="title mt-5 pt-5 is-2 has-text-lefted has-text-primary has-text-weight-bold">
          Co-creando agendas!
        </h1>
        <p class="content  is-large is-size-4 has-text-justified">
          Asi son nuestras sesiones de co-creacion con las personas, a traves de diferentes redes sociales, medios y formas; abrimos el debate y conversamos sobre las agendas propuestas
        </p>
        <div class="container is-flex is-justify-content-center my-6">
          <img src="https://via.placeholder.com/660x445" alt="">
        </div>
        <div class="columns is-justify-content-center">
          <h1 class="is-size-4 is-hidden-mobile  mx-4 my-2">
            Te invitamos a sumarte a nuestro grupo para que
          </h1>
          <a href="#" class="button column is-3 is-hidden-mobile is-primary is-rounded has-text-weight-bold is-medium">Cocreemos Juntas <i class="fab fa-whatsapp fa-fw fa-lg px-1" /></a>
          <a href="#" class="button column is-3 is-hidden-desktop my-5 is-primary is-rounded has-text-weight-bold is-medium">Cocreemos Juntas <i class="fab fa-whatsapp fa-fw fa-lg px-1" /></a>
        </div>
      </div>
    </div> -->
  </div>
</template>

<script>
export default {
  head () {
    return {
      script: [
        {
          src: 'http://embed.typeform.com/next/embed.js',
          async: true
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.is-210x210{
  height: 13.125 rem !important;
  width: 13.125 rem !important;
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
  @include from($desktop){
    margin: 10px;
  }
}
// typeform Styel and Container of typeform
.css-1ig7ubs, .css-1o3fej, .e12baen60{
  height: 450px !important;
}
.accordion-wrapper {
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 4px -2px rgba(0, 0, 0, 0.5);
  width: 90%;
  margin: 0 auto;
}
.accordion {
  width: 100%;
  color: white;
  overflow: hidden;
  margin-bottom: 16px;
}
.accordion:last-child {
  margin-bottom: 0;
}
.accordion-label {
  display: flex;
  -webkit-box-pack: justify;
  justify-content: space-between;
  padding: 16px;
  background: #8917ff;
  font-weight: bold;
  cursor: pointer;
  font-size: 20px;
}
.accordion-label:hover {
  background: #540f9c;
}
.accordion-label::after {
  content: "\276F";
  width: 16px;
  height: 16px;
  text-align: center;
  -webkit-transition: all 0.3s;
  transition: all 0.3s;
}
.accordion-content {
  max-height: 0;
  padding: 0 16px;
  color: rgba(4, 57, 94, 1);
  background: white;
  -webkit-transition: all 0.3s;
  transition: all 0.3s;
  overflow: scroll;
}
.accordion-content p {
  margin: 0;
  color: rgba(4, 57, 94, 0.7);
  font-size: 18px;
}
input:checked + .accordion-label {
  background: #530f9ca2;
}
input:checked + .accordion-label::after {
  -webkit-transform: rotate(90deg);
  transform: rotate(90deg);
}
input:checked ~ .accordion-content {
  max-height: 100vh;
  padding: 16px;
}
// @media screen and (min-widtg: 960px) {
//   .actuar-agenda-box {
//   width: 100px;
//   height: 100px;
//   margin: 0 ;
//   position: relative;
//   border: 20px solid $secondary;
//   img {
//     max-height: 60%;
//     max-width: 60%;
//     position: absolute;
//     top: 50%;
//     left: 50%;
//     transform: translate(-50%, -50%);
//   }
// }
// }
// .is-custom-image{
//   background-image: url('~assets/cover-color-02.jpg');
//   background-position: center center;
//   background-size: cover;
// }
.subtitle-container{
  padding: 20px;
//   background-color: rgba(#ffe6d6,0.5);
}
.an-icon{
    width:257px;
    margin: 0 auto 20px;
}
.enter-button{
  position: absolute;
  bottom: -20px;
  left: 50%;
  transform: translate(-50%, 0);
  z-index: 150;
  &:hover{
    color: $primary;
    background-color: white;
    border: 2px solid $primary;
  }
}
</style>
