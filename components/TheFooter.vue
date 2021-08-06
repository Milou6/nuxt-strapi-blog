<template>
  <div
    class="
      flex
      justify-around
      content-center
      items-center
      h-[15vh]
      mt-60
      bg-primary-dark
      text-gray-200
      align-middle
    "
  >
    <a
      href="https://github.com/Milou6/nuxt-strapi-blog"
      target="_blank"
      class="underline"
      >GitHub repo</a
    >
    <span>Made w/ NuxtJS, Strapi & TailwindCSS</span>
    <span>Emile Haas</span>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component
export default class TheFooter extends Vue {}
</script>

<style scoped></style>
