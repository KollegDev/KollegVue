<template>
	<div class="avatarSpace">
		<item-carousel>
			<slide :index="0">
				<img
					src="https://htl.moedling.at/fileadmin/_processed_/csm_Hack_3e3d36ab0a.jpg"
				/>
				<h1>Niklas Hack</h1>
			</slide>
			<slide :index="1">
				<img
					src="https://htl.moedling.at/fileadmin/_processed_/csm_Niedrist_4bf9c6b0dc.jpg"
				/>
			</slide>
			<slide :index="2">
				<img
					src="https://htl.moedling.at/fileadmin/_processed_/csm_Fuxreiter_3feaae038f.jpg"
				/>
			</slide>
			<slide :index="3">
				<img
					src="https://htl.moedling.at/fileadmin/_processed_/csm_Kner_7090e30948.jpg"
				/>
			</slide>
			<slide :index="4">
				<img
					src="https://htl.moedling.at/fileadmin/_processed_/csm_Zacherl_add05cc5d2.jpg"
			/></slide>
			<slide :index="5">
				<img
					src="https://htl.moedling.at/fileadmin/_processed_/csm_Weiss_c5ef5ea450.jpg"
			/></slide>
		</item-carousel>
	</div>
</template>

<style lang="postcss" scoped>
.carousel-3d-slide {
	@apply bg-none sm:rounded-full rounded-l-3xl shadow-md;
}

.avatarSpace {
	@apply flex pt-10 z-10;
}
</style>

<script>
import ItemCarousel from "~/components/ItemCarousel"
import { Slide } from "vue-carousel-3d"

export default {
	transition: "slide-bottom",
	components: {
		ItemCarousel,
		Slide,
	},
}
</script>
