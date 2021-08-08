<template>
  <div>
    <TheHeader :showingTitle="false" />

    <div
      class="
        article
        flex flex-col
        justify-center
        content-center
        w-[80vw]
        mx-auto
        p-6
        py-32
        border-t-0
        bg-white
      "
    >
      <div v-if="!post.content" class="mx-auto">🧭 Loading Article ...</div>

      <div v-else>
        <h1
          class="
            article-title
            font-ibmmono
            text-5xl
            mb-0
            text-primary-dark
            font-bold
          "
        >
          {{ post.title }}
        </h1>
        <span v-if="post.published_at">{{
          post.published_at.slice(0, 10)
        }}</span>

        <img
          v-if="post.coverImage"
          :src="`${post.coverImage.url}`"
          alt="article image"
          class="article-image w-1/2 mx-auto mt-8 object-contain pb-8"
        />

        <p
          v-if="post.content"
          class="article-content font-roboto text-base"
          v-html="$md.render(post.content)"
        ></p>

        <NuxtLink
          to="/"
          class="
            fixed
            bottom-8
            right-4
            cursor-pointer
            py-2
            px-6
            font-bold
            bg-white
            border-2 border-primary-light border-double
            hover:border-solid hover:text-primary-light
            rounded-lg
          "
          >Back 🏕</NuxtLink
        >
      </div>
    </div>

    <TheFooter class="mt-0" />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component
export default class slug extends Vue {
  slug = this.$route.params.slug
  post = {}
  // layout = 'binchLayout'

  // layout() {
  //   return 'binchLayout'
  // }

  async mounted(URL: string = this.$config.baseURL) {
    this.post = await fetch(
      // `https://strapi-emile-blog.herokuapp.com/articles/${this.id}`
      `${URL}/articles?slug=${this.slug}`
    )
      .then((res) => res.json())
      .then((res) => res[0])
    // .then((res) => {
    //   const title = document.getElementsByClassName('article-title')[0]
    //   console.log(title)
    //   title.scroll(0, 0)
    // })
  }

  updated() {
    const title = document.getElementsByClassName(
      'article-title'
    )[0] as HTMLElement
    console.log(title)
    // console.log(title.offsetTop)

    // title.scrollTop = title.offsetTop
    // const usersTable = document.getElementById('usersTable') as HTMLElement
    try {
      title.scrollIntoView({
        block: 'start',
        inline: 'nearest',
        behavior: 'smooth',
      })
    } catch (error) {}
  }
}
</script>

<style scoped>
.article {
  /* background-color: hsl(227, 27%, 23%); */
  box-shadow: 0px 0px 20px 3px rgba(0, 0, 0, 0.25);
}

.article-title {
  font-family: 'IBM Plex Mono', monospace;
  font-weight: 700;
}

.article-content {
  font-family: 'Roboto', sans-serif;
  font-weight: 300;
}

* >>> h1,
* >>> h2,
* >>> h3 {
  color: rgb(6, 95, 70);
  font-family: 'IBM Plex Mono', monospace;
  font-weight: 700;
  /* font-size: 2.5rem; */
}
* >>> h2 {
  font-size: 2.62rem;
  color: #004727;
  margin: 1rem auto;
}
* >>> h3 {
  font-weight: 400;
  font-size: 1.62rem;
  margin: 1rem auto;
  color: #009250;
}
* >>> pre {
  background-color: hsl(246, 33%, 19%);
  border-radius: 5px;
}
</style>
