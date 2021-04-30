<template>
	<carousel-3d
		:autoplay="true"
		:autoplay-timeout="5000"
		:width="400"
		:height="400"
		:display="5"
		:animation="200"
		:space="10"
	>
		<slot></slot>
	</carousel-3d>
</template>

<script>
import { Carousel3d } from "vue-carousel-3d"

export default {
	components: {
		Carousel3d,
	},
}
</script>
