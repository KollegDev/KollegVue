<template>
	<div class="overflow-hidden sm:m-8 sm:overflow-x-visible">
		<vue-masonry-wall :items="items" :options="options">
			<template v-slot:default="{ item }">
				<div class="Item" data-aos="flip-up">
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
	@apply mx-10 sm:mr-20 mt-10;
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
import aosMixin from "~/mixins/aos"
import "viewerjs/dist/viewer.css"
import { component as Viewer } from "v-viewer"
import VueMasonryWall from "vue-masonry-wall"
import data from "/static/json/gallery.json"
var initial = true

export default {
	mixins: [aosMixin],
	components: { VueMasonryWall, Viewer },
	data() {
		return {
			options: {
				width: 450,
				padding: {
					default: 8,
				},
			},
			gallery: {
				navbar: false,
				toolbar: false,
				button: false,
			},
			throttle: 0,
			items: [],
		}
	},
	methods: {
		append() {
			if (initial) {
				data.forEach((e) => {
					this.items.push({
						alt: e.alt,
						image: e.image,
						title: e.title,
					})
				})
				initial = false
			}
		},
		inited(viewer) {
			this.$viewer = viewer
		},
		show() {
			this.$viewer.show()
		},
	},

	destroyed() {
		initial = true
	},

	created() {
		this.append()
	},
}
</script>
