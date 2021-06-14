<template>
	<div
		class="flex h-full transition duration-200 ease-linear bg-white dark:bg-black"
	>
		<sidebar class="hidden sm:block">
			<circle-item icon="bx-book" info="Fächer" />

			<circle-item icon="bxs-school" info="Lehrer" subpage="/teachers" />

			<circle-item
				icon="bxs-component"
				info="Projekte"
				subpage="/projectGallery"
			/>

			<circle-item icon="bxs-graduation" info="Schüler" />

			<circle-item icon="bx-briefcase" info="Jobbörse" />

			<circle-item icon="bx-female-sign" info="Frauen" subpage="/women" />

			<circle-item icon="bx-mail-send" info="Kontakt" subpage="/contact" />

			<!--Theme Swapper-->
			<theme-button />
		</sidebar>
		<!--Main Menu-->
		<div id="pages" class="flex-grow h-full min-h-screen">
			<!--Index Page Loader-->
			<nuxt />
		</div>
		<!--Mobile Menu-->
		<div class="z-20 mr-10 -ml-7 sm:hidden">
			<mobile-burger></mobile-burger>
			<mobile-sidebar>
				<circle-item icon="bx-book" info="Fächer" />

				<circle-item icon="bxs-school" info="Lehrer" subpage="/teachers" />

				<circle-item
					icon="bxs-component"
					info="Projekte"
					subpage="/projectGallery"
				/>

				<circle-item icon="bxs-graduation" info="Schüler" />

				<circle-item icon="bx-briefcase" info="Jobbörse" />

				<circle-item icon="bx-female-sign" info="Frauen" subpage="/women" />

				<circle-item icon="bx-mail-send" info="Kontakt" subpage="/contact" />

				<!--Theme Swapper-->
				<theme-button />
			</mobile-sidebar>
		</div>
	</div>
</template>

<style>
body {
	-ms-overflow-style: none;
	scrollbar-width: none; /* Firefox */
}
.blurPage {
	filter: blur(8px);
	-webkit-filter: blur(8px);
}
body::-webkit-scrollbar {
	display: none;
}
.page-enter-active,
.page-leave-active {
	transition: opacity 0.25s;
}
.page-enter,
.page-leave-to {
	opacity: 0;
}

.layout-enter-active,
.layout-leave-active {
	transition: opacity 0.25s;
}
.layout-enter,
.layout-leave-to {
	opacity: 0;
}

.slide-bottom-enter-active,
.slide-bottom-leave-active {
	transition: opacity 0.25s ease-in-out, transform 0.25s ease-in-out;
}
.slide-bottom-enter,
.slide-bottom-leave-to {
	opacity: 0;
	transform: translate3d(0, 15px, 0);
}
</style>

<script>
import CircleItem from "~/components/CircleItem"
import Sidebar from "~/components/Sidebar"
import ThemeButton from "~/components/ThemeButton"
import MobileBurger from "~/components/M_BurgerMenu/MobileBurger"
import MobileSidebar from "~/components/M_BurgerMenu/MobileSidebar"

export default {
	components: {
		CircleItem,
		Sidebar,
		ThemeButton,
		MobileBurger,
		MobileSidebar,
	},
}
</script>
