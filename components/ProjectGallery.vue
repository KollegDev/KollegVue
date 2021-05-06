<template>
	<section class="pb-8">
		<vue-masonry-wall :items="items" :options="options" @append="append">
			<template v-slot:default="{ item }">
				<div class="Item">
					<nuxt-link :to="item.subpage">
						<img :src="item.image" />
						<div class="Content">
							<h2 class="text-ellipsis-1l">{{ item.title }}</h2>
							<p class="text-ellipsis-2l">{{ item.content }}</p>
						</div>
					</nuxt-link>
				</div>
			</template>
		</vue-masonry-wall>
	</section>
</template>

<style lang="postcss" scoped>
section {
	@apply mx-10 sm:mr-20 mt-10;
}

h2 {
	@apply text-2xl;
}

.Item {
	@apply dark:bg-darkgrey shadow-md duration-200 ease-linear transform-gpu hover:opacity-50 hover:border-light hover:border-4 dark:hover:border-dark;
}

.Content {
	@apply dark:text-white;
}
</style>

<script>
import VueMasonryWall from "vue-masonry-wall"
import data from "/static/json/projects.json"
var initial = true

export default {
	components: { VueMasonryWall },
	data() {
		return {
			options: {
				width: 650,
				padding: {
					default: 8,
				},
			},
			throttle: 300,
			items: [],
		}
	},
	methods: {
		append() {
			if (initial) {
				data.forEach((e) => {
					this.items.push({
						title: e.name,
						content: e.description,
						image: e.image,
						subpage: e.subpage,
					})
				})
				initial = false
			}
		},
	},

	destroyed() {
		initial = true
	},

	async created() {
		this.append()
	},
}
</script>

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
