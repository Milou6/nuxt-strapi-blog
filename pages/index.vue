<template>
  <div>
    <TheHeader :showingTitle="true" />
    <div class="main-section flex">
      <ArticlesListing />
      <aside class="w-[25vw] flex flex-col content-center z-0">
        <div
          id="profile-pic"
          class="relative w-44 h-44 mx-auto mb-4 shadow-2xl"
        >
          <img
            class="
              w-44
              h-44
              object-cover
              overflow-hidden
              border-2 border-primary
            "
            src="~/assets/profile-pic.jpg"
            alt="profile picture"
          />
        </div>
        <span class="profile-description font-roboto mx-auto">This is me</span>
        <span class="profile-description font-roboto mx-auto"
          >I like writing about stuff</span
        >
      </aside>
    </div>
    <TheFooter />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  // layout: 'binchLayout',
})
</script>

<style scoped>
.main-section {
  /* background: linear-gradient(
    90deg,
    rgba(255, 255, 255, 1) 58%,
    rgba(207, 207, 207, 1) 100%
  ); */
}
#profile-pic::after {
  position: absolute;
  content: '';
  bottom: -0.5rem;
  right: -0.5rem;
  width: 11rem;
  height: 11rem;
  background-color: #009250;
  /* border-radius: 100%; */
  z-index: -1;
}
.profile-description {
  /* font-family: 'Roboto', sans-serif; */
}
</style>
