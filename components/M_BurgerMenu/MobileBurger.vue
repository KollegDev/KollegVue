<template>
	<div id="burger" :class="{ active: isBurgerActive }" @click.prevent="toggle">
		<slot>
			<button type="button" class="burger-button" title="Menu">
				<span class="hidden">Toggle menu</span>
				<span class="burger-bar burger-bar--1"></span>
				<span class="burger-bar burger-bar--2"></span>
			</button>
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
	@apply bg-black dark:bg-white absolute right-1.5 left-1.5 top-3 h-0.5 w-7;
}
.burger-bar {
	transition: transform 0.6s cubic-bezier(0.165, 0.84, 0.44, 1),
		background-color 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
}
#burger.active .burger-bar {
	@apply bg-black dark:bg-white;
}

.burger-button {
	@apply relative block z-10 w-7 h-7 border-0 bg-transparent;
}
.burger-button {
	pointer-events: all;
	transition: transform 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
}

.hidden {
	@apply hidden;
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
}

.burger-bar--2 {
	transform: translateY(8px);
}

#burger.active .burger-button {
	transform: rotate(-180deg);
}

#burger.active .burger-bar--1 {
	transform: rotate(45deg);
}

#burger.active .burger-bar--2 {
	transform: rotate(-45deg);
}
</style>
