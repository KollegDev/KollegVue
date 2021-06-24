<template>
    <nuxt-link class="subject-link" :to="`subjects#` + subject">{{ subject }}</nuxt-link>
</template>

<style lang="postcss" scoped>
.subject-link {
	@apply border-l-4 border-r-4 border-light rounded-md px-1 ;
	&:hover {
		@apply text-light dark:text-dark ;
	}
}
</style>

<script>
export default {
	props: {
		subject: {
			type: String,
			default: "POS",
		},
	},
}
</script>
