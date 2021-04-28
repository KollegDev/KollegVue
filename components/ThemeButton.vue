<template>
  <div class="icon">
    <div class="circle circle-color">
      <button class="bx bx-md" :class="icon" @click="changeMode"></button>
    </div>
  </div>
</template>

<style lang="postcss" scoped>
.circle {
  @apply flex items-center justify-center m-3 font-bold border-4 rounded-full w-14 h-14 cursor-pointer shadow-md;
  &.circle-color {
    @apply border-light text-black dark:text-black dark:border-dark dark:bg-dark;
    &:hover {
      @apply bg-light text-black dark:bg-black dark:text-dark;
    }
  }
}

button {
  outline: none;
}

.icon {
  position: fixed;
  bottom: 0px;
  left: 0px;
}
</style>

<script>
export default {
  methods: {
    changeMode() {
      this.$colorMode.preference =
        this.$colorMode.preference === 'light' ? 'dark' : 'light'
    },
  },
  props: {
    icon: {
      type: String,
      default: 'bx-brightness-half',
    },
  },
}
</script>
