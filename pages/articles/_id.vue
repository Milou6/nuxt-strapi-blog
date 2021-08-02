<template>
  <div class="m-8">
    <h1>{{ post.title }}</h1>

    <img
      v-if="post.coverImage"
      :src="`${post.coverImage.url}`"
      alt="article image"
      class="article-image"
    />

    <p>{{ post.content }}</p>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component
export default class id extends Vue {
  name = 'id'
  id = this.$route.params.id
  post = {}

  async mounted() {
    this.post = await fetch(
      `https://strapi-emile-blog.herokuapp.com/articles/${this.id}`
    ).then((res) => res.json())
  }
}

// export default {
//   data() {
//     return {
//       id: this.$route.params.id,
//       post: Object,
//     }
//   },
//   // computed: {
//   //   async post() {
//   //     const postData = await fetch('http://localhost:1337/articles').then((res) =>
//   //     res.json())

//   //     return postData
//   //   }
//   // }
//   async mounted() {
//     this.post = await fetch(`http://localhost:1337/articles/${this.id}`).then(
//       (res) => res.json()
//     )
//   },
// }
</script>

<style scoped>
.article-image {
  width: 20vw;
  height: auto;
}
</style>
