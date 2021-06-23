<template>
	<project v-html="mdFile" paddingX="px-0 sm:px-8 pt-8" />
</template>

<script>
import Project from "~/components/Project"
import mdFile from "/static/markdown/RieplMarco_Bestellsystem_für_die_Gastronomie.md"

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
