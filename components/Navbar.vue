<template>
  <div id="navbar">
    <div class="is-flex-direction-row is-flex is-align-items-center is-justify-content-space-between">
      <NuxtLink to="/">
        <img src="~/assets/somosmuchas-logo.svg" class="image logo-somos-muchas is-align-self-stretch" alt="">
      </NuxtLink>
      <div class="is-aligh-self-auto ml-4 has-text-centered">
        <a class="has-text-link" @click="sidebarOpen = true">
          <i class="fas fa-bars fa-2x" />
        </a>
        <br>
        Menu
      </div>
    </div>
    <img src="~/assets/barra-superior.svg" class="image is-fullwidth" alt="menu">
    <b-sidebar
      v-model="sidebarOpen"
      type="is-white"
      :fullheight="true"
      :fullwidth="false"
      :overlay="true"
      mobile="fullwidth"
    >
      <div class="p-5 ">
        <img
          src="~/assets/somosmuchas-logo.svg"
          class="image is-fullwdith my-6"
          alt="Somos Muchas"
        >
        <div class="has-text-centered">
          <a @click="switchTo('/')">
            <h1 class="title is-black is-4">
              Inicio
            </h1>
          </a>
          <hr class="has-background-light">
          <a @click="switchTo('/actuar')">
            <h1 class="title is-4">
              Actuar
            </h1>
          </a>
          <hr class="has-background-light">
          <a @click="switchTo('/conversar')">
            <h1 class="title is-4">
              Conversar
            </h1>
          </a>
          <hr class="has-background-light">

          <a @click="switchTo('/conectar')">
            <h1 class="title is-4">
              Conectar
            </h1>
          </a>
          <hr class="has-background-light">

          <a @click="switchTo('/difundir')">
            <h1 class="title is-4 ">
              Difundir
            </h1>
          </a>
          <hr class="has-background-light">

          <a @click="switchTo('/cocrear')">
            <h1 class="title is-4 ">
              Cocrear
            </h1>
          </a>
          <hr class="has-background-light">

          <a @click="switchTo('/quienes-somos')">
            <h1 class="title is-4 ">
              Quienes somos
            </h1>
          </a>
        </div>
      </div>
    </b-sidebar>
  </div>
</template>

<script>
export default {
  data () {
    return {
      sidebarOpen: false
    }
  },
  methods: {
    switchTo (where) {
      this.sidebarOpen = false
      this.$router.push({ path: where })
    }
  }
}
</script>

<style lang="scss" scoped>
.logo-somos-muchas{
  margin-bottom: 20px;
  width: 600px;
}

</style>
