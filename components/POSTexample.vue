<template>
  <div class="container">
    <div v-if="error">
      {{ error }}
    </div>

    <form id="form" v-on:submit="handleSubmit" v-else>
      <h3>Restaurants</h3>
      <br />

      <label for="name">Name</label>
      <input id="name" v-model="modifiedData.name" type="text" name="name" />

      <label for="description">Description</label>
      <input
        id="description"
        v-model="modifiedData.description"
        type="text"
        name="description"
      />
      <div>
        <br />
        <b>Select categories</b>
        <br />
        <div v-for="category in allCategories" :key="category.id">
          <label>{{ category.name }}</label>
          <input
            type="checkbox"
            :value="category.id"
            v-model="modifiedData.categories"
            name="categories"
            :id="category.id"
          />
        </div>
      </div>
      <br />

      <input type="submit" value="Submit" />
    </form>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      allCategories: [],
      modifiedData: {
        name: '',
        description: '',
        categories: [],
      },
      error: null,
    }
  },
  async mounted() {
    try {
      // fetching all our Strapi categories on mounting
      this.allCategories = await this.$strapi.$categories.find()
    } catch (error) {
      this.error = error
    }
  },
  methods: {
    async handleSubmit(e) {
      e.preventDefault()

      try {
        // making a POST request to create a new restaurant with Form input
        await this.$strapi.$restaurants.create(this.modifiedData)
      } catch (error) {
        this.error = error
      }
    },
  },
}
</script>

<style scoped>
.container {
  border: 1px solid black;
  margin-top: 3rem;
}
</style>
