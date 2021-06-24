<template>
	<div
		class="sticky top-0 z-50 justify-between hidden bg-white rounded-full shadow-md  dark:bg-black lg:flex"
	>
		<nuxt-link to="/">
			<h1 class="main-icon">IT_</h1>
		</nuxt-link>
		<nav class="flex justify-between">
			<slot />
		</nav>
	</div>
</template>

<style lang="postcss" scoped>
.main-icon {
	@apply items-center justify-center p-2 m-3 text-2xl font-bold border-4 border-light bg-light rounded-full dark:text-black dark:bg-dark dark:border-dark w-14 h-14 shadow-md transform-gpu duration-200 ease-in-out;
	&:hover {
		@apply bg-transparent dark:text-dark dark:bg-transparent;
	}
}
</style>
