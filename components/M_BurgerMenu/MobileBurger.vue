<template>
	<div id="burger" :class="{ active: isBurgerActive }" @click.prevent="toggle">
		<slot>
			<div type="button" class="burger-button" title="Menu">
				<span class="burger-bar burger-bar--1"></span>
				<span class="burger-bar burger-bar--2"></span>
			</div>
		</slot>
	</div>
</template>
<script>
import { store, mutations } from "@/components/M_BurgerMenu/store.js"

export default {
	computed: {
		isBurgerActive() {
			return store.isNavOpen
		},
	},
	methods: {
		toggle() {
			mutations.toggleNav()
		},
	},
}
</script>

<style lang="postcss" scoped>
.burger-bar {
	@apply bg-black dark:bg-white fixed z-10 top-3 h-0.5 w-7 mt-1;
	transition: transform 0.6s cubic-bezier(0.165, 0.84, 0.44, 1),
		background-color 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
}
#burger.active .burger-bar {
	@apply bg-black dark:bg-white;
}

.burger-button {
	@apply fixed cursor-pointer block z-20 top-3 w-7 h-8 border-0 bg-transparent;
	pointer-events: all;
	transition: transform 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
}

button {
	@apply cursor-pointer z-10;
}

/* remove outline */
button:focus {
	outline: 0;
}

.burger-bar--1 {
	-webkit-transform: translateY(-6px);
	transform: translateY(-6px);
	transform: scaleX(1);
}

.burger-bar--2 {
	transform: translateY(6px);
}

#burger.active .burger-bar--1 {
	transform: rotate(45deg);
}

#burger.active .burger-bar--2 {
	transform: rotate(-45deg);
}
</style>
