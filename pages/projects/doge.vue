<template>
  <project v-html="mdFile" />
</template>

<script>
import Project from '~/components/Project'
import mdFile from '/static/markdown/doge.md'

export default {
  components: {
    Project,
  },

  computed: {
    mdFile() {
      return mdFile
    },
  },
}
</script>
