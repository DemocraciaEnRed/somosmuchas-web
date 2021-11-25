<template>
  <div class="">
    <div class="special-frame">
      <div class="has-text-centered">
        <h1 class="title is-1 is-size-1 has-text-centered has-text-white has-text-weight-bold mb-2 ">
          {{ title }}
        </h1>
        <p class="is-size-4 has-text-centered ">
          {{ description }}
        </p>
        <!-- <img v-if="img" :src="img" :alt="title" class="is-inline-block"> -->
        <!-- <video :src="video" /> -->
        <div class="container my-6 py-4">
          <!-- <video v-if="video" width="550" height="309" controls>
            <source v-if="video" :src="video" type="video/mp4">
            Your browser does not support the video tag.
          </video> -->
          <iframe
            v-if="video"
            width="550"
            height="309"
            :src="video"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          />
          <div v-else>
            <img src="https://via.placeholder.com/550x300" alt="">
          </div>
        </div>
      </div>
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    video: {
      type: String,
      required: false
    }
  }
}
</script>

<style lang="scss" scoped>

.special-frame{
  margin: auto;
  width: 21rem;
  height: auto;
 }
@media screen and (min-width: 720px) {
  .special-frame{
    margin: auto;
    width: 55.125rem !important;
    height: 33.125rem;
  }
}
</style>
