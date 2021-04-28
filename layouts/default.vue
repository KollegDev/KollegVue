<template>
  <div class="flex h-screen bg-white dark:bg-black">
    <!--Left Navigation Bar-->
    <div class="flex-col">
      <nuxt-link to="/">
        <h1 class="main-icon">IT_</h1>
      </nuxt-link>
      <!--Icon Listings-->
      <nav id="sidebar">
        <circle-item icon="bx-book" info="Fächer" />

        <circle-item icon="bxs-school" info="Lehrer" />

        <circle-item icon="bxs-component" info="Projekte" />

        <circle-item icon="bxs-graduation" info="Schüler" />

        <circle-item icon="bx-briefcase" info="Berufe" />

        <circle-item icon="bx-female-sign" info="Frauen" />

        <circle-item icon="bx-mail-send" info="Kontakt" />

        <circle-item icon="bx-dollar" info="Doge" subpage="/projects/doge" />
      </nav>
    </div>

    <!--Main Menu-->
    <div class="flex-grow overflow-y-auto sm:overflow-y-scroll">
      <themer />
      <nuxt />
    </div>
  </div>
</template>

<style lang="postcss" scoped>
.main-icon {
  @apply flex items-center justify-center p-2 m-3 text-2xl font-bold border-4 border-light bg-light rounded-full dark:text-black dark:bg-dark dark:border-dark w-14 h-14;
  &:hover {
    @apply bg-transparent dark:text-dark dark:bg-transparent;
  }
}
</style>

<script>
import CircleItem from '~/components/CircleItem'
import Themer from '~/components/Themer'

export default {
  components: {
    CircleItem,
    Themer,
  },
}
</script>
