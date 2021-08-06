<template>
  <div>
    <TheHeader :showingTitle="true" />
    <div class="flex">
      <ArticlesListing />
      <aside class="w-[20vw] bg-gray-100"></aside>
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

<style scoped></style>
