<template>
  <section>
    <vue-masonry-wall :items="items" :options="options" @append="append">
      <template v-slot:default="{ item }">
        <div class="Item">
          <img :src="item.image" />

          <div class="Content">
            <h5 class="text-ellipsis-1l">{{ item.title }}</h5>
            <p class="text-ellipsis-2l">{{ item.content }}</p>
          </div>
        </div>
      </template>
    </vue-masonry-wall>
  </section>
</template>

<style lang="postcss" scoped>
section {
  @apply mx-10 mr-20 mt-10;
}

h2 {
  @apply text-2xl;
}

.Item {
  @apply dark:bg-gray-300 shadow-md;
}

.Content {
  @apply dark:text-black;
}
</style>

<script>
import VueMasonryWall from 'vue-masonry-wall'
import data from '/static/json/projects.json'

export default {
  components: { VueMasonryWall },
  data() {
    return {
      options: {
        width: 600,
        padding: {
          default: 12,
        },
      },
      items: [],
    }
  },
  methods: {
    append() {
      data.forEach((e) => {
        this.items.push({
          title: e.name,
          content: e.description,
          image: e.image,
        })
      })
    },
  },
}
</script>

<style scoped>
.Item {
  overflow: hidden;
  border-radius: 15px;
  width: 100%;
  background: #f5f5f5;
}
.Content {
  padding: 20px;
}
img {
  object-fit: cover;
  width: 100%;
  height: 100%;
  line-height: 0;
  display: block;
}
</style>
