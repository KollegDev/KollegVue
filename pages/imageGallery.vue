<template>
	<div class="w-auto mt-4 overflow-hidden lg:m-8 lg:overflow-x-hidden">
		<h1 class="text-transparent">_</h1>
		<vue-masonry-wall :items="items" :options="options">
			<div id="refresh"></div>
			<template v-slot:default="{ item }">
				<div class="Item">
					<viewer class="viewer" ref="viewer" :options="gallery">
						<template>
							<img :src="item.image" :alt="item.alt" :title="item.title" />
						</template>
					</viewer>
				</div>
			</template>
		</vue-masonry-wall>
	</div>
</template>

<style lang="postcss" scoped>
section {
	@apply mx-10 lg:mr-20 mt-10;
}

h2 {
	@apply text-2xl;
}

.Item {
	@apply dark:bg-darkgrey shadow-md duration-200 ease-linear transform-gpu hover:opacity-50 cursor-pointer;
}

.Content {
	@apply dark:text-white;
}
</style>

<style scoped>
.Item {
	overflow: hidden;
	border-radius: 15px;
	width: 100%;
	background: #f5f5f5;
}
.Content {
	padding: 20px;
}
img {
	object-fit: cover;
	width: 100%;
	height: 100%;
	line-height: 0;
	display: block;
}
</style>

<script>
import "viewerjs/dist/viewer.css"
import { component as Viewer } from "v-viewer"
import VueMasonryWall from "vue-masonry-wall"
import axios from "axios"

export default {
	components: { VueMasonryWall, Viewer },
	data() {
		return {
			gallery: {
				navbar: false,
				toolbar: false,
				button: false,
			},
			options: {
				width: 450,
				padding: {
					default: 8,
				},
			},
			//Wannabe buffer
			items: [],	
		}
	},
	methods: {
		getGalleryData() {
			axios
				.get("/json/gallery.json")
				.then((res) => (this.items = res.data))
				.catch((err) => console.log(err))
		},

		inited(viewer) {
			this.$viewer = viewer
		},
		show() {
			this.$viewer.show()
		},
		refresh() {
        this.$nuxt.refresh()
      }
	},

	beforeMount() {
		this.getGalleryData()
	},

}
</script>
