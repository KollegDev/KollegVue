<template>
		<nuxt-link :to="subpage">
	<div class="icon">
			<div class="circle circle-color">
				<slot><i class="bx bx-md" :class="icon"></i></slot>
			</div>
		<div id="tfm" class="lg:hidden text-format-mobile">
			{{ info }}
		</div>
		<div class="text-black dark:text-white lg:hidden"></div>
		<div class="hidden lg:flex text-format">{{ info }}</div>
	</div>
		</nuxt-link>
</template>

<style lang="postcss" scoped>
.circle {
	@apply flex items-center justify-center m-3 font-bold border-4 rounded-full w-14 h-14 cursor-pointer shadow-md;
	&.circle-color {
		@apply border-light text-black dark:text-white dark:border-dark;
		&:hover {
			@apply bg-light text-black dark:bg-dark dark:text-black;
		}
	}
}

.text-format {
	@apply invisible lg:visible text-black text-2xl transform-gpu duration-200 -translate-x-full opacity-0 dark:text-white;
}
.text-format-mobile {
	@apply text-black text-2xl dark:text-white font-medium;
}
.icon {
	@apply flex items-center justify-between;
	&:hover {
		.text-format {
			@apply translate-x-0 opacity-100;
		}
	}
}
</style>

<script>
export default {
	props: {
		icon: {
			type: String,
			default: "bx-question-mark",
		},
		info: {
			type: String,
			default: "Description",
		},
		subpage: {
			type: String,
			default: "/",
		},
	},
}
</script>
