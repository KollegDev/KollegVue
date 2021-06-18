<template>
	<project v-html="mdFile" paddingX="px-8 pt-8" />
</template>

<script>
import Project from "~/components/Project"
import mdFile from "/static/markdown/KollerFlorianD&D_Character-Generator.md"

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
