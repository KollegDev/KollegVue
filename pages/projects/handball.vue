<template>
	<project v-html="mdFile" paddingX="px-0 lg:px-8 pt-8" />
</template>

<script>
import Project from "~/components/Project"
import mdFile from "/static/markdown/BrandfellnerWPF-Projekt_HandballScoreStatistics.md"

export default {
	components: {
		Project,
	},

	transition: "slide-bottom",

	computed: {
		mdFile() {
			return mdFile
		},
	},
}
</script>
