<template>
  <div class="container">
    <div v-if="error">
      {{ error }}
    </div>
    <ul v-else>
      <li v-for="restaurant in restaurants" :key="restaurant.id">
        {{ restaurant.name }}
        <!-- {{ restaurant.description }} -->
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Tutorial',
  data() {
    return {
      restaurants: [],
      error: null,
    }
  },
  async mounted() {
    try {
      this.restaurants = await this.$strapi.$restaurants.find()
    } catch (error) {
      this.error = error
    }
  },
}
</script>
