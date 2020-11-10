<template>
  <section>
    <div class="hero is-primary is-medium is-custom-image mt-2">
      <div class="hero-body">
        <div class="columns">
          <div class="column is-half">
            <h1 class="title is-1 has-text-weight-bold">
              CONVERSAR
            </h1>
            <h2 class="subtitle is-5">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit, doloremque numquam possimus molestias praesentium rem dignissimos quae. Blanditiis vitae labore vero fugit exercitationem. Sapiente consequatur praesentium alias, veniam minus est!
            </h2>
          </div>
        </div>
      </div>
    </div>
    <br>
    <h5 class="subtitle is-4 has-text-centered has-text-primary">
      Aquí tienes un espacio para compartir y acceder a metodologías de trabajo que puedan ser de utilidad para tu causa.
    </h5>
    <img src="~/assets/title02.svg" class="image mb-6 image-title" alt="">
    <div class="columns">
      <div class="column">
        <div class="agenda-box">
          <img src="~/assets/paridad-logo.svg" alt="">
          <a class="button is-primary has-text-weight-bold is-rounded enter-button is-medium" :class="{'is-warning': paridadSelected}" @click="selectSection('paridad')">
            <i class="fas fa-angle-down fa-lg fa-fw" />
          </a>
        </div>
      </div>
      <div class="column">
        <div class="agenda-box">
          <img src="~/assets/juntas-logo.png" alt="">
          <a class="button is-primary has-text-weight-bold is-rounded enter-button is-medium" :class="{'is-warning': juntasSelected}" @click="selectSection('juntas')">
            <i class="fas fa-angle-down fa-lg fa-fw" />
          </a>
        </div>
      </div>
    </div>
    <br>
    <section v-if="paridadSelected">
      <div class="tile is-ancestor">
        <div class="tile is-parent">
          <article class="tile is-child">
            <div class="videoWrapper">
              <iframe
                width="853"
                height="480"
                src="https://www.youtube.com/embed/S9pFe4lSL1w"
                frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              />
            </div>
          </article>
          <article class="tile is-child pl-5 video-description">
            <h1 class="title is-1 has-text-primary">
              THIS IS A TITLE AND I HOPE YOU DONT OVERFLOW IT
            </h1>
            <h4 class="subtitle is-4 has-text-primary">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur odio veniam praesentium odit necessitatibus, maiores minima doloremque. Placeat magni error magnam, eligendi architecto sint sunt, odio quia quibusdam cumque accusantium?
            </h4>
          </article>
        </div>
      </div>
      <div class="columns my-6 is-centered">
        <div class="column is-5 has-text-centered">
          <img src="~/assets/icon01.svg" class="image an-icon" alt="">
          <h1 class="title is-3 has-text-weight-bold">
            Entérate
          </h1>
          <p class="is-size-3">
            Para ampliar el contexto general en el que surge esta iniciativa y conocer las razones de la necesidad de la paridad política en Colombia, te presentamos el siguiente material
          </p>
          <br>
          <a href="https://google.com">
            <div class="file-box p-5 my-2">
              <p class="has-text-primary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores odio officia</p>
              <i class="fas fa-file-pdf has-text-primary fa-2x fa-fw ml-3" />
            </div>
          </a>
          <a href="https://google.com">
            <div class="file-box p-5 my-2">
              <p class="has-text-primary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores odio officia</p>
              <i class="fas fa-file-pdf has-text-primary fa-2x fa-fw ml-3" />
            </div>
          </a>
          <a href="https://google.com">
            <div class="file-box p-5 my-2">
              <p class="has-text-primary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores odio officia</p>
              <i class="fas fa-file-pdf has-text-primary fa-2x fa-fw ml-3" />
            </div>
          </a>
        </div>
        <div class="column is-5 is-offset-1 has-text-centered">
          <img src="~/assets/icon02.svg" class="image an-icon" alt="">
          <h1 class="title is-3 has-text-weight-bold">
            Conoce más
          </h1>
          <p class="is-size-3">
            Suscríbite para acceder a informacion adicional sobre este tema
          </p>
          <br>
          <a href="https://google.com" class="button is-primary is-rounded is-outline is-large">Contactanos</a>
        </div>
      </div>
    </section>
    <section v-if="juntasSelected">
      <div class="tile is-ancestor">
        <div class="tile is-parent">
          <article class="tile is-child">
            <div class="videoWrapper">
              <iframe
                width="853"
                height="480"
                src="https://www.youtube.com/embed/oDKrIBHQ6rw"
                frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              />
            </div>
          </article>
          <article class="tile is-child pl-5 video-description">
            <h1 class="title is-1 has-text-primary">
              THIS IS A TITLE AND I HOPE YOU DONT OVERFLOW IT
            </h1>
            <h4 class="subtitle is-4 has-text-primary">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur odio veniam praesentium odit necessitatibus, maiores minima doloremque. Placeat magni error magnam, eligendi architecto sint sunt, odio quia quibusdam cumque accusantium?
            </h4>
          </article>
        </div>
      </div>
      <div class="columns my-6 is-centered">
        <div class="column is-5 has-text-centered">
          <img src="~/assets/icon01.svg" class="image an-icon" alt="">
          <h1 class="title is-3 has-text-weight-bold">
            Entérate
          </h1>
          <p class="is-size-3">
            Para ampliar el contexto general en el que surge esta iniciativa y conocer las razones de la necesidad de la paridad política en Colombia, te presentamos el siguiente material
          </p>
          <br>
          <a href="https://google.com">
            <div class="file-box p-5 my-2">
              <p class="has-text-primary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores odio officia</p>
              <i class="fas fa-file-pdf has-text-primary fa-2x fa-fw ml-3" />
            </div>
          </a>
          <a href="https://google.com">
            <div class="file-box p-5 my-2">
              <p class="has-text-primary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores odio officia</p>
              <i class="fas fa-file-pdf has-text-primary fa-2x fa-fw ml-3" />
            </div>
          </a>
          <a href="https://google.com">
            <div class="file-box p-5 my-2">
              <p class="has-text-primary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores odio officia</p>
              <i class="fas fa-file-pdf has-text-primary fa-2x fa-fw ml-3" />
            </div>
          </a>
        </div>
        <div class="column is-5 is-offset-1 has-text-centered">
          <img src="~/assets/icon02.svg" class="image an-icon" alt="">
          <h1 class="title is-3 has-text-weight-bold">
            Conoce más
          </h1>
          <p class="is-size-3">
            Suscríbite para acceder a informacion adicional sobre este tema
          </p>
          <br>
          <a href="https://google.com" class="button is-primary is-rounded is-outline is-large">Contactanos</a>
        </div>
      </div>
    </section>
  </section>
</template>

<script>
export default {
  data () {
    return {
      paridadSelected: true,
      juntasSelected: false
    }
  },
  methods: {
    selectSection (section) {
      switch (section) {
        case 'paridad':
          this.paridadSelected = true
          this.juntasSelected = false
          break
        case 'juntas':
          this.paridadSelected = false
          this.juntasSelected = true
          break
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.is-custom-image{
    background-image: url('~assets/cover-color-01.jpg');
    background-position: center center;
    background-size: cover;
    .title, .subtitle{
        text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.50);
    }
    .title{
        color: $primary;
    }
    .subtitle{
        font-weight: 600;
    }
}
.image-title{
 width: 400px;
}
.agenda-box{
  height: 300px;
  margin: 10px;
  border: 2px solid $secondary;
  position: relative;
  img {
  max-height: 50%;
  max-width: 75%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 50;
}
.enter-button{
  position: absolute;
  bottom: -20px;
  left: 50%;
  transform: translate(-50%, 0);
  z-index: 150;
}
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
.video-description{
    .title{
        font-size: 4rem;
    }
    display:flex;
    flex-direction: column;
    justify-content: center;
}
.an-icon{
    width:150px;
    margin: 0 auto 20px;
}
.file-box{
    border: 1px solid $primary;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
}
</style>
