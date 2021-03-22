<template>
  <section>
    <div class="hero is-primary is-custom-image mt-2">
      <div class="hero-body">
        <div class="columns">
          <div class="column is-half">
            <h1 class="title is-1 has-text-weight-bold">
              DIFUNDIR
            </h1>
            <div class="subtitle-container">
              <h2 class="subtitle is-4 has-text-primary">
                Aquí encontrarás productos comunicacionales para compartir en tus redes sociales o medios en los que tengas acceso, para así lograr que la causa que apoyas llegue a más personas. Vas a encontrar piezas gráficas, videos, audios y un gran etc.
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
    <br>
    <h5 class="title is-3 has-text-centered has-text-primary has-text-weight-bold">
      Paridad ¡YA!<br>Campaña nacional por la paridad política
    </h5>
    <h5 class="subtitle is-4 has-text-centered has-text-primary">
      La campaña Paridad ¡YA! cincuenta / sí cuenta busca que se redistribuya el poder y se incremente la participación y la representación de las mujeres.
    </h5>
    <img src="~/assets/title04.svg" class="image mb-6 image-title" alt="">
    <div class="columns">
      <div class="column">
        <div class="material-box paridad-ya-bg">
          <a href="https://drive.google.com/drive/folders/1CS_Ok1faS3wU_kSUMwSGnIRsBJewujAd?usp=sharing" target="_blank">
            <div class="text-container">
              <h1 class="title is-2 has-text-shadow has-text-white">DIFUSUIÓN PARIDAD YA!</h1>
            </div>
          </a>
        </div>
      </div>
      <div class="column">
        <div class="material-box juntas-bg">
          <a href="https://drive.google.com/drive/folders/1k1zw1fofBPJsidr6HQr5HlxQ1_BczX8I?usp=sharing" target="_blank">
            <div class="text-container">
              <h1 class="title is-2 has-text-shadow has-text-white">DIFUSIÓN JUNTAS</h1>
            </div>
          </a>
        </div>
      </div>
      <div class="column">
        <div class="material-box causa-justa-bg">
          <a href="https://drive.google.com/drive/folders/1oKxKBJGvp7RG_3tVa_hJLXAZTpBLuu2E?usp=sharing" target="_blank">
            <div class="text-container">
              <h1 class="title is-2 has-text-shadow has-text-white">DIFUSIÓN CAUSA JUSTA!</h1>
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
    background-image: url('~assets/cover-color-05.jpg');
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
  background-size: 100%;
  background-repeat: no-repeat;
  width: 100%;
  position: relative;
  border: 1px solid $primary;

  &:after{
    content: "";
    display: block;
    padding-bottom: 100%;
  }
  &.causa-justa-bg{
    background-image: url('~assets/logo-causa-justa.png');
  }
  &.juntas-bg{
    background-image: url('~assets/juntas-logo.png');
  }
  &.paridad-ya-bg{
    background-image: url('~assets/paridad-logo.svg');
  }
}
</style>
