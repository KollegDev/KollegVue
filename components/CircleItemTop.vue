<template>
	<div class="icon">
		<nuxt-link :to="subpage">
			<div
				class="transition-all duration-300 transform scale-100 circle circle-color hover:scale-95"
			>
				<slot>
					<i class="bx bx-md boxicon" :class="icon"> </i>
					<div class="text-format">{{ info }}</div>
				</slot>
			</div>
		</nuxt-link>
	</div>
</template>

<style lang="postcss" scoped>
.circle {
	@apply flex flex-grow items-center justify-center m-3 font-bold border-4 rounded-full w-14 h-14 cursor-pointer shadow-md;
	&.circle-color {
		@apply border-light text-black dark:text-white dark:border-dark;
		&:hover {
			.text-format {
				@apply visible block px-2 transform-gpu duration-300 w-auto ease-in-out;
			}
			.boxicon {
				@apply hidden transform-gpu duration-300;
			}
			@apply bg-light text-black dark:bg-dark dark:text-black w-auto;
		}
	}
}

.text-format {
	@apply invisible text-black text-2xl dark:text-black;
}

.icon {
	@apply flex items-center justify-between;
}

.boxicon {
	@apply absolute;
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
