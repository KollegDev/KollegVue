<template>
	<div class="w-full mt-2 lg:p-8 lg:w-1/2">
		<div
			class="absolute transform bg-red-500 lg:-translate-y-52 anchor"
			:id="shortID"
		></div>
		<div class="h-72">
			<img :src="image" class="object-cover w-full shadow-md h-72 rounded-t-2xl" />
		</div>

		<div class="descBox">
			<div class="header">{{ fullHeader }}</div>
			<div class="txtDescription">{{ description }}</div>
		</div>
	</div>
</template>

<style lang="postcss" scoped>
.header {
	@apply text-2xl text-light font-medium;
}

.txtDescription {
	@apply text-darkgrey dark:text-white text-xl;
}

.descBox {
	@apply bg-white rounded-b-2xl shadow-lg dark:bg-darkgrey p-4 text-lg flex-shrink;
}
</style>

<script>
export default {
	props: {
		shortID: {
			type: String,
			default: "SBJT",
		},
		fullHeader: {
			type: String,
			default: "Subject",
		},
		description: {
			type: String,
			default: "/",
		},
		image: {
			type: String,
			default:
				"https://images.unsplash.com/photo-1621246734364-ba4f7298bb8d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
		},
	},
}
</script>
