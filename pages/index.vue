<template>
	<div class="m-8">
		<div>
			<div
				class="relative p-2 pr-6 text-5xl font-bold text-right text-white shadow-lg rounded-t-2xl dark:text-darkgrey bg-dark"
			>
				INFORMATIK & <br />
				SYSTEMTECHNIK
			</div>
		</div>
		<div class="opacity-70 h-96">
			<img
				class="h-full shadow-md rounded-b-2xl"
				src="https://cdn.discordapp.com/attachments/621744068757815306/856592959179718706/8-gigapixel-scale-2_00x.jpg"
			/>
		</div>

		<!-- 		<div class="flex flex-col justify-around m-auto flex-grow-1 sm:flex-row">
			<div class="h-full infobox">
				<div class="header">Kolleg</div>
				<div class="description">für alle Studienberechtigten zur IT-Matura</div>
			</div>
			<div class="h-full infobox">
				<div class="header">Aufbaulehrgang</div>
				<div class="description">
					für Quereinsteiger und Fachschüler zur BHS-Matura
				</div>
			</div>
		</div> -->
	</div>
</template>

<style lang="postcss" scoped>
.header {
	@apply text-5xl text-light font-medium text-center;
}

.infobox {
	@apply mt-5 text-lg bg-white shadow-lg rounded-2xl text-darkgrey dark:text-white dark:bg-darkgrey;
}

.description {
	@apply text-3xl font-medium text-center p-6;
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
