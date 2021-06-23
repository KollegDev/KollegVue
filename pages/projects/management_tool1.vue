<template>
	<project v-html="mdFile" paddingX=" px-0 sm:px-8 pt-8" />
</template>

<script>
import Project from "~/components/Project"
import mdFile from "/static/markdown/GrossbergerMarkus_Management_Tool.md"

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
