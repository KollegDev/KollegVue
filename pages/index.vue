<template>
	<div class="w-full lg:p-8">
		<div>
			<div
				class="relative p-2 lg:pr-6 mt-4 text-3xl font-bold text-center m-auto lg:text-right text-white shadow-lg lg:text-5xl rounded-t-2xl dark:text-darkgrey bg-dark"
			>
				INFORMATIK & <br />
				SYSTEMTECHNIK
			</div>
		</div>
		<div class="h-56 opacity-90 lg:h-96">
			<img
				class="h-full shadow-sm rounded-b-2xl"
				src="https://htl.moedling.at/kolleg/images/cover.jpg"
				alt="Schüler des Kollegs im Freien"
			/>
		</div>

		<div class="flex flex-col justify-around m-auto flex-grow-1 lg:flex-row">
			<div class="h-full infobox">
				<nuxt-link to="/signup">
					<div class="header">Kolleg</div>
					<div class="description">
						für alle Studienberechtigten zur <br />
						IT-Matura
					</div>
				</nuxt-link>
			</div>
			<div class="h-full infobox">
				<nuxt-link to="/signup">
					<div class="header">Aufbaulehrgang</div>
					<div class="description">
						für Quereinsteiger und Fachschüler zur <br />
						BHS-Matura
					</div>
				</nuxt-link>
			</div>
      <div
			class="p-5 m-auto text-3xl text-center transition-all duration-300 transform scale-100 lg:hidden lg:w-1/5 hover:scale-95 mt-14 rounded-2xl bg-light"
		>
			<a href="https://anmeldung.htl.moedling.at/anmeldung.external/Sonderform"
				>Zur Anmeldung</a
			>
		</div>
		</div>
	</div>
</template>

<style lang="postcss" scoped>
.header {
	@apply text-3xl lg:text-5xl text-light font-medium text-center;
}

.infobox {
	@apply transform transition-all duration-300 scale-100 hover:scale-95 hover:border-light hover:border-4 dark:hover:border-dark w-full mt-5 text-lg bg-white shadow-lg rounded-2xl text-darkgrey dark:text-white dark:bg-darkgrey lg:w-2/6;
}

.description {
	@apply text-xl lg:text-3xl font-medium text-center p-3 lg:p-6;
}
</style>

<style scoped>
img {
	object-fit: cover;
	width: 100%;
	line-height: 0;
	display: block;
}
</style>

<script>
export default {
	transition: "slide-bottom",
}
</script>
