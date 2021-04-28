<template>
  <project v-html="mdFile" paddingX="px-8" />
</template>

<script>
import Project from '~/components/Project'
import mdFile from '/static/markdown/doge.md'

export default {
  components: {
    Project,
  },

  transition: 'slide-bottom',

  computed: {
    mdFile() {
      return mdFile
    },
  },
}
</script>
