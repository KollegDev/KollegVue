<template>
	<div
		class="flex flex-col min-h-screen p-4 transition duration-200 ease-linear bg-white  dark:bg-black"
	>
		<topbar>
			<circle-item-top
				icon="bxs-component"
				info="Projekte"
				subpage="/projectGallery"
			/>
			<circle-item-top icon="bxs-camera" info="Galerie" subpage="/imageGallery" />
			<circle-item-top icon="bx-book" info="Fächer" subpage="/subjects" />
			<circle-item-top icon="bxs-school" info="Lehrer" subpage="/teachers" />
			<circle-item-top icon="bx-female-sign" info="Frauen" subpage="/women" />
			<circle-item-top icon="bx-mail-send" info="Kontakt" subpage="/contact" />
			<circle-item-top icon="bxs-user-plus" info="Anmeldung" subpage="/signup" />
			<theme-button />
		</topbar>
		<!--Main Menu-->
		<div id="pages" class="flex-grow">
			<!--Index Page Loader-->
			<nuxt />
		</div>
		<!--Mobile Menu-->
		<div class="z-50 lg:hidden">
			<mobile-burger></mobile-burger>
			<mobile-sidebar>
				<div @click="closeSidebarPanel">
					<circle-item icon="bx-home" info="Startseite" subpage="/" />

					<circle-item icon="bx-book" info="Fächer" subpage="/subjects" />

					<circle-item icon="bxs-school" info="Lehrer" subpage="/teachers" />

					<circle-item
						icon="bxs-component"
						info="Projekte"
						subpage="/projectGallery"
					/>

					<circle-item icon="bxs-camera" info="Galerie" subpage="/imageGallery" />

					<circle-item icon="bx-female-sign" info="Frauen" subpage="/women" />

					<circle-item icon="bx-mail-send" info="Kontakt" subpage="/contact" />

					<circle-item icon="bxs-user-plus" info="Anmeldung" subpage="/signup" />

					<!--Theme Swapper-->
					<theme-button @click.native.prevent="closeSidebarPanel" />
				</div>
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
	-ms-touch-action: none;
	touch-action: none;
}
.preventTouch {
	-ms-touch-action: none;
	touch-action: none;
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
import CircleItemTop from "~/components/CircleItemTop"
import Sidebar from "~/components/Sidebar"
import Topbar from "~/components/Topbar"
import ThemeButton from "~/components/ThemeButton"
import MobileBurger from "~/components/M_BurgerMenu/MobileBurger"
import MobileSidebar from "~/components/M_BurgerMenu/MobileSidebar"
import { store, mutations } from "@/components/M_BurgerMenu/store.js"

export default {
	components: {
		CircleItem,
		CircleItemTop,
		Sidebar,
		Topbar,
		ThemeButton,
		MobileBurger,
		MobileSidebar,
	},
	methods: {
		closeSidebarPanel: mutations.toggleNav,
	},
}
</script>
