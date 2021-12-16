<template>
  <section>
    <div class="hero is-primary is-medium is-custom-image mt-2">
      <div class="hero-body">
        <div class="columns">
          <div class="column is-half">
            <h1 class="title is-1 has-text-weight-bold">
              COCREAR
            </h1>
            <div class="subtitle-container">
              <h2 class="subtitle is-4 has-text-primary">
                Aquí tienes un espacio para compartir y acceder a metodologías de trabajo que puedan ser de utilidad para tu causa.
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
    <br>
    <div class="columns my-6 is-centered">
      <div class="column is-5 has-text-centered">
        <img src="~/assets/icon01.svg" class="image an-icon" alt="">
        <h5 class="is-size-4">
          Descubre
        </h5>
        <br>
        <p class="is-size-4">
          Encontrarás metodologías de trabajo de diferentes causas, que fueron compartidas por otres usuaries interesades.
        </p>
      </div>
      <div class="column is-5 is-offset-1 has-text-centered">
        <img src="~/assets/icon02.svg" class="image an-icon" alt="">
        <h5 class="is-size-4">
          Comparte
        </h5>
        <br>
        <p class="is-size-4">
          Completa un formulario y comparte con la comunidad metodologías de trabajo que consideres útiles.
        </p>
        <br>
        <!-- <a href="https://preguntarparaacordar.typeform.com/to/btphdVz9" target="_blank" class="button is-primary has-text-weight-bold is-medium is-rounded">Subir metodología</a> -->
        <!-- <button data-tf-popup="btphdVz9" data-tf-size="70" style="all:unset;font-family:Helvetica,Arial,sans-serif;display:inline-block;max-width:100%;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;background-color:#8917FF;color:#FFFFFF;font-size:20px;border-radius:25px;padding:0 33px;font-weight:bold;height:50px;cursor:pointer;line-height:50px;text-align:center;margin:0;text-decoration:none;">
          Subir metodología
        </button>
        <script src="//embed.typeform.com/next/embed.js" /> -->
      </div>
    </div>
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
    <img src="~/assets/title03.svg" class="image mb-6 image-title" alt="">
    <div class="columns">
      <div class="column p-5">
        <div class="material-box circulos-mujeres-bg">
          <a href="/files/presentacion-circulos-nosotras.pdf" download>
            <div class="text-container">
              <h1 class="title is-2 has-text-shadow has-text-white">Creación de círculos de mujeres</h1>
            </div>
          </a>
        </div>
      </div>
      <div class="column p-5">
        <div class=" material-box circulos-nosotras-bg">
          <a href="/files/presentacion-nosotras.pdf" download>
            <div class="text-container">
              <h1 class="title is-2 has-text-shadow has-text-white">Presentación de nosotras ahora</h1>
            </div>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.is-custom-image{
  background-image: url('~assets/cover-color-03.jpg');
  background-position: center center;
  background-size: cover;
  h1.title{
    text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.50);
  }
}
.subtitle-container{
  padding: 20px;
  background-color: rgba(#ffe6d6,0.5);
}
.image-title{
 width: 400px;
}
.material-box{
  .text-container{
    position: absolute;
    width: 100%;
    height: 100%;
    display:flex;
    order: 0;
    flex: 1 1 auto;
    align-self: auto;
    padding: 15px;
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
    align-items: center;
    &:hover{
      opacity: 1;
    }
    h1.title{
      text-align: center;
      font-weight: 700;
      width: 100%;
    }
  }
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
  position: relative;
  border: 1px solid $primary;
 &:after{
    content: "";
    display: block;
    padding-bottom: 100%;
  }
  &.circulos-mujeres-bg{
    background-image: url('~assets/circulos-de-mujeres.png');
  }
  &.circulos-nosotras-bg{
    background-image: url('~assets/circulos-nosotras.png');
  }
}
.an-icon{
    width:150px;
    margin: 0 auto 20px;
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
</style>
