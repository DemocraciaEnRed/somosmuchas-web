<template>
  <div class="">
    <div class="">
      <div class="has-text-centered">
        <h1 class="title is-1 is-size-1 has-text-centered has-text-white has-text-weight-bold mb-2 ">
          {{ title }}
        </h1>
        <p class="is-size-5 has-text-centered ">
          {{ description }}
        </p>
        <img v-if="img" :src="img" :alt="title" class="is-inline-block">
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
    img: {
      type: String,
      required: false,
      default: 'https://via.placeholder.com/350'
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
