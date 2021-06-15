<template>
	<div class="p-2 sm:w-1/4" data-aos="zoom-in">
		<div class="py-8 text-center">
			<div class="mb-3">
				<img :src="image" />
			</div>
			<h2 class="name">{{ name }}</h2>
			<span class="description">{{ description }}</span>
		</div>
	</div>
</template>

<style lang="postcss" scoped>
.name {
	@apply text-2xl font-medium text-dark;
}
.description {
	@apply block mb-5 font-medium text-black dark:text-white;
}

img {
	@apply object-cover w-56 h-56 mx-auto rounded-full shadow-md;
}
</style>

<script>
import aosMixin from "~/mixins/aos"

export default {
	mixins: [aosMixin],
	transition: "slide-bottom",
	props: {
		name: {
			type: String,
			default: "Firstname Lastname",
		},
		description: {
			type: String,
			default: "Short Description",
		},
		image: {
			type: String,
			default:
				"https://images.unsplash.com/photo-1602661287394-ccf02e1a0893?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
		},
	},
}
</script>
