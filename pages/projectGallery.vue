<template>
	<project-gallery></project-gallery>
</template>

<script>
import ProjectGallery from "~/components/ProjectGallery"

export default {
	transition: "slide-bottom",
	components: {
		ProjectGallery,
	},
}
</script>
