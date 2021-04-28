<template>
  <div class="flex h-screen bg-white dark:bg-black">
    <sidebar>
      <circle-item icon="bx-book" info="Fächer" />

      <circle-item icon="bxs-school" info="Lehrer" />

      <circle-item icon="bxs-component" info="Projekte" />

      <circle-item icon="bxs-graduation" info="Schüler" />

      <circle-item icon="bx-briefcase" info="Berufe" />

      <circle-item icon="bx-female-sign" info="Frauen" />

      <circle-item icon="bx-mail-send" info="Kontakt" />

      <circle-item icon="bx-dollar" info="Doge" subpage="/projects/doge" />
    </sidebar>
    <!--Main Menu-->
    <div class="flex-grow overflow-y-auto sm:overflow-y-scroll">
      <!--Theme Swapper-->
      <themer />
      <!--Index Page Loader-->
      <nuxt />
    </div>
  </div>
</template>

<style>
.scrollbar-hidden::-webkit-scrollbar {
  display: none;
}
</style>

<script>
import CircleItem from '~/components/CircleItem'
import Themer from '~/components/Themer'
import Sidebar from '~/components/Sidebar'

export default {
  components: {
    CircleItem,
    Themer,
    Sidebar,
  },
}
</script>
