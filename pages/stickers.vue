<template>
  <div class="container">
    <div class="">
      <NuxtLink
        to="/sin-mujeres-no"
        id="nlink"
        class="
          button
          is-block
          is-size-3 is-primary
          has-text-weight-bold
          has-text-left
        "
      >
         <i class="fas fa-angle-left"></i> <h1 id="sinmujeres">sin mujeres no</h1>
      </NuxtLink>
    </div>
    <div class="section is-medium">
      <p class="parraf">
        <strong>
          Para quienes quieran seguir diseminando nuestros proyectos, ideas y
          generando una comunidad; les compartimos una serie de stickers para
          whatsapp!
        </strong>
      </p>
      <br />
      <br />
      <p class="parraf">
        Pueden utilizarlos como imagen png, descargandolas directamente y
        tambien tienen el archivo para ser instalado con cualquier app de
        stickers!
      </p>
    </div>
    <div class="container mb-6 is-flex is-justify-content-center">
      <a
        href="https://drive.google.com/drive/u/1/folders/1_hFFnJlYqx82e53_2vYIxN0n-bRCeQUr"
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
    <div class="container is-fluid">
      <div class="columns is-multiline">
        <div
          class="column is-12 is-flex is-justify-content-center is-half-tablet"
        >
          <div class="card">
            <div class="card-image">
              <figure class="image">
                <img src="~/assets/stickers/Sinmujeresno.png" alt="" />
              </figure>
            </div>
          </div>
        </div>
        <div class="column is-2 is-half-tablet" />
        <div class="column is-2 is-half-tablet">
          <div class="card">
            <div class="card-image">
              <figure class="image is-128x128 m-6">
                <img
                  class="is-rounded"
                  src="~/assets/stickers/antioquia.png"
                  alt=""
                />
              </figure>
            </div>
          </div>
        </div>
        <div class="column is-2 is-half-tablet">
          <div class="card">
            <div class="card-image">
              <figure class="image is-128x128 m-6">
                <img src="~/assets/stickers/arauca.png" alt="" />
              </figure>
            </div>
          </div>
        </div>
        <div class="column is-2 is-half-tablet">
          <div class="card">
            <div class="card-image">
              <figure class="image is-128x128 m-6">
                <img src="~/assets/stickers/bogota.png" alt="" />
              </figure>
            </div>
          </div>
        </div>
        <div class="column is-2 is-half-tablet">
          <div class="card">
            <div class="card-image">
              <figure class="image is-128x128 m-6">
                <img src="~/assets/stickers/CostaCaribe.png" alt="" />
              </figure>
            </div>
          </div>
        </div>
        <div class="column is-2 is-half-tablet" />
        <div class="column is-2 is-half-tablet" />
        <div class="column is-2 is-half-tablet">
          <div class="card">
            <div class="card-image">
              <figure class="image is-5">
                <img src="~/assets/stickers/doblesigno.png" alt="" />
              </figure>
            </div>
          </div>
        </div>
        <div class="column is-2 is-half-tablet">
          <div class="card">
            <div class="card-image">
              <figure class="image is-128x128 m-6">
                <img src="~/assets/stickers/bajo.png" alt="" />
              </figure>
            </div>
          </div>
        </div>
        <div class="column is-2 is-half-tablet">
          <div class="card">
            <div class="card-image">
              <figure class="image is-128x128 m-6">
                <img src="~/assets/stickers/artemisas.png" alt="" />
              </figure>
            </div>
          </div>
        </div>
        <div class="column is-2 is-half-tablet">
          <div class="card">
            <div class="card-image">
              <figure class="image is-5 m-6">
                <img src="~/assets/stickers/singonossimple.png" alt="" />
              </figure>
            </div>
          </div>
        </div>
        <div class="column is-2 is-half-tablet" />
      </div>
    </div>
  </div>
</template>

<style lang="scss">
h1 , i{
  display: inline-block !important;
}
.parraf {
  font-family: Titillium Web;
  font-style: normal;
  font-weight: normal;
  font-size: 30px;
  line-height: 35px;
  /* or 117% */

  text-align: center;

  color: #2e2e2d;
}
#sinmujeres{
  transition-duration: .5s;
}
#sinmujeres:hover {
  -moz-transform: translate(40px, 0px) skew(1deg, 0deg);
  -webkit-transform: translate(40px, 0px) skew(1deg, 0deg);
  -o-transform: translate(40px, 0px) skew(1deg, 0deg);
  -ms-transform: translate(40px, 0px) skew(1deg, 0deg);
  transform: translate(40px, 0px) skew(1deg, 0deg);
}

</style>
