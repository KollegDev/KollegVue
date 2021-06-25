<template>
	<div class="sidebar">
		<div
			class="sidebar-backdrop"
			@click="closeSidebarPanel"
			v-if="isPanelOpen"
		></div>
		<transition name="slide">
			<div v-if="isPanelOpen" class="sidebar-panel">
				<slot></slot>
			</div>
		</transition>
	</div>
</template>
<script>
import { store, mutations } from "@/components/M_BurgerMenu/store.js"

export default {
	methods: {
		closeSidebarPanel: mutations.toggleNav,
	},
	computed: {
		isPanelOpen() {
			return store.isNavOpen
		},
	},
}
</script>
<style lang="postcss" scoped>
.slide-enter-active,
.slide-leave-active {
	transition: transform 0.2s ease;
}

.slide-enter,
.slide-leave-to {
	transform: translateX(-100%);
	transition: all 150ms ease-in 0s;
}

.sidebar-panel {
	@apply overflow-y-auto w-3/4 h-full left-0 top-0 z-10 border-r-4 border-light fixed bg-opacity-100 dark:bg-opacity-100 bg-white dark:bg-black;
}
</style>
