<template>
  <div
    class="flex h-screen transition duration-200 ease-linear bg-white dark:bg-black"
  >
    <sidebar class="hidden sm:flex">
      <circle-item icon="bx-book" info="Fächer" />

      <circle-item icon="bxs-school" info="Lehrer" />

      <circle-item
        icon="bxs-component"
        info="Projekte"
        subpage="/projectGallery"
      />

      <circle-item icon="bxs-graduation" info="Schüler" />

      <circle-item icon="bx-briefcase" info="Berufe" />

      <circle-item icon="bx-female-sign" info="Frauen" />

      <circle-item icon="bx-mail-send" info="Kontakt" subpage="contact" />

      <!--Theme Swapper-->
      <theme-button />
    </sidebar>
    <!--Main Menu-->
    <div class="flex-grow overflow-y-auto sm:overflow-y-scroll scrollbar-hide">
      <!--Index Page Loader-->
      <nuxt />
    </div>
  </div>
</template>

<style>
.page-enter-active,
.page-leave-active {
  transition: opacity 0.25s;
}
.page-enter,
.page-leave-to {
  opacity: 0;
}

.layout-enter-active,
.layout-leave-active {
  transition: opacity 0.25s;
}
.layout-enter,
.layout-leave-to {
  opacity: 0;
}

.slide-bottom-enter-active,
.slide-bottom-leave-active {
  transition: opacity 0.25s ease-in-out, transform 0.25s ease-in-out;
}
.slide-bottom-enter,
.slide-bottom-leave-to {
  opacity: 0;
  transform: translate3d(0, 15px, 0);
}
</style>

<script>
import CircleItem from '~/components/CircleItem'
import Sidebar from '~/components/Sidebar'
import ThemeButton from '~/components/ThemeButton'

export default {
  components: {
    CircleItem,
    Sidebar,
    ThemeButton,
  },
}
</script>
