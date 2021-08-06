<template>
  <div class="container w-full flex flex-col content-center">
    <div v-if="error">
      <h2>Couldn't fetch articles from server</h2>
      {{ error }}
    </div>
    <div
      v-else-if="articles.length == 0"
      class="
        loader
        w-11/12
        flex
        justify-center
        shadow-2xl
        border border-gray-300
        rounded-xl
        m-8
        mt-0
        p-4
        h-screen
      "
    >
      🧭 Loading Articles ...
    </div>
    <ul v-else>
      <li v-for="article in articles" :key="article.id">
        <Article :data="article" />
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component
export default class ArticlesListing extends Vue {
  articles = []
  error = null

  async mounted(URL: string = this.$config.baseURL) {
    // await fetch('https://strapi-emile-blog.herokuapp.com/articles')
    await fetch(`${URL}/articles`)
      .then((res) => res.json())
      .then((res) => {
        this.articles = res
      })
  }
}
</script>

<style scoped>
.loader {
  /* background-color: hsl(227, 27%, 23%); */
}
</style>
