<template>
  <div class="icon">
    <nuxt-link :to="subpage">
      <div class="circle circle-color">
        <slot><i class="bx bx-tada-hover bx-md" :class="icon"></i></slot>
      </div>
    </nuxt-link>
    <div class="text-format">{{ info }}</div>
  </div>
</template>

<style lang="postcss" scoped>
.circle {
  @apply flex items-center justify-center m-3 font-bold border-4 rounded-full w-14 h-14 cursor-pointer shadow-md;
  &.circle-color {
    @apply border-light text-black dark:text-white dark:border-dark;
    &:hover {
      @apply bg-light text-black dark:bg-dark dark:text-black;
    }
  }
}

.text-format {
  @apply text-black text-2xl transform-gpu duration-200 -translate-x-full opacity-0 dark:text-white;
}

.icon {
  @apply sm:flex items-center hidden;
  &:hover {
    .text-format {
      @apply translate-x-0 opacity-100;
    }
  }
}
</style>

<script>
export default {
  props: {
    icon: {
      type: String,
      default: 'bx-question-mark',
    },
    info: {
      type: String,
      default: 'Description',
    },
    subpage: {
      type: String,
      default: '/',
    },
  },
}
</script>
