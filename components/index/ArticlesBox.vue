<template>
  <a v-if="link" :href="link" target="_blank" class="articles-box">
    <slot />
    <p class="is-size-6">
      {{ author }}
      <br>
      {{ date }}
    </p>
    <h3 class="title is-5 mt-5 mb-2">
      {{ title }}
    </h3>
  </a>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    author: {
      type: String,
      required: true
    },
    date: {
      type: String,
      required: true
    },
    link: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.articles-box {
  padding: 20px;
  border: 1px solid $secondary;
  height: 100%;
  display: block;

  p {
    color: rgba(0, 0, 0, 0.5);
  }
  img {
    height: 45px;
    margin: 10px auto;
    display: block;
  }
}
</style>
