<template>
  <div class="flex flex-col content-center overflow-hidden">
    <div class="relative w-screen h-[70vh]">
      <video
        class="w-full h-full object-cover blur-[2px]"
        src="~/assets/header-video.mp4"
        alt="pine forest header video"
        type="video/mp4"
        autoplay
        muted
        loop
      ></video>
      <span class="absolute -bottom-6 right-6"
        >Video by cottonbro from Pexels</span
      >
    </div>

    <h1
      v-if="showingTitle"
      class="
        header-title
        h-[30vh]
        mx-auto
        font-salsa
        text-6xl text-primary
        mt-6
      "
    >
      Stuff I find interesting
    </h1>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component
export default class TheHeader extends Vue {
  // articles = []
  @Prop({ type: Boolean }) readonly showingTitle!: Boolean
}
</script>

<style scoped>
.header-title {
  /* font-family: 'Special Elite', cursive; */
  /* font-family: 'Love Ya Like A Sister', cursive; */
  /* font-family: 'IBM Plex Mono', monospace; */
  /* font-family: 'Salsa', cursive; */
  /* font-family: 'Palette Mosaic', cursive; */
}
</style>
