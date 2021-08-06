<template>
  <NuxtLink
    :to="{ name: 'articles-slug', params: { slug: data.slug } }"
    class="cursor-pointer font-bold"
  >
    <div
      class="
        article
        flex flex-col
        justify-center
        content-center
        m-8
        mt-0
        p-3
        bg-white
        border border-gray-300
        shadow-2xl
        rounded-xl
      "
    >
      <img
        class="article-image w-1/3 mx-auto my-2"
        :src="`${data.coverImage.url}`"
        alt="article image"
      />

      <h3 class="article-title text-2xl text-primary-light">
        {{ data.title }}
      </h3>

      <p class="article-text mt-2 text-base">
        {{ data.content.substring(0, 400) + '...' }}
      </p>
    </div>
  </NuxtLink>
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
.article {
  /* background-color: hsl(227, 27%, 23%); */
}
.article:hover {
  box-shadow: inset 0px 0px 10px 1px rgb(112, 112, 112);
}

.article-title {
  /* font-family: 'IBM Plex Mono', monospace; */
  font-family: 'Salsa', cursive;
}
.article-text {
  font-family: 'Roboto', sans-serif;
  font-weight: 300;
}
</style>
