<template>
  <div class="m-8 border-black border-2 rounded-md">
    <!-- <img src="data.coverImage.url" alt="" /> -->
    <img class="article-image" :src="`${data.coverImage.url}`" alt="" />
    <h3 class="font-bold">{{ data.title }}</h3>
    <p>
      {{ data.content.substring(0, 200) + '...' }}
    </p>
    <p>{{ data.id }}</p>
    <NuxtLink :to="`/articles/${data.id}`" class="cursor-pointer font-bold"
      >Continue Reading</NuxtLink
    >
    <!-- <NuxtLink to="{name: 'articles-id', params: {id: data.id}}"
      >Continue Reading</NuxtLink
    > -->
  </div>
</template>

<script lang="ts">
export default {
  name: 'Article',
  props: {
    data: {
      type: Object,
      default() {
        return {}
      },
    },
  },
  data() {
    return {}
  },
}
</script>

<style scoped>
.article-image {
  width: 20vw;
  height: auto;
}
</style>
