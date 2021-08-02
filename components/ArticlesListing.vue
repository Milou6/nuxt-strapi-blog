<template>
  <div class="container">
    <div v-if="error">
      <h2>Couldn't fetch articles from server</h2>
      {{ error }}
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

  // async fetch() {
  //   this.articles = await fetch('http://localhost:1337/articles').then((res) =>
  //     res.json()
  //   )
  //   console.log('async fetch')
  // }
  async mounted() {
    // await fetch('http://localhost:1337/articles')
    await fetch('https://strapi-emile-blog.herokuapp.com/articles')
      .then((res) => res.json())
      .then((res) => {
        this.articles = res
      })
    console.log('async fetch')
  }
}

// export default {
//   name: 'ArticlesListing',
//   data() {
//     return {
//       articles: {
//         type: Array,
//         default: [],
//       },
//       error: null,
//     }
//   },
//   async fetch() {
//     this.articles = await fetch('http://localhost:1337/articles').then((res) =>
//       res.json()
//     )
//   },
//   // async mounted() {
//   //   try {
//   //     this.articles = await this.$strapi.$articles.find()
//   //   } catch (error) {
//   //     this.error = error
//   //   }
//   // },
// }
</script>
