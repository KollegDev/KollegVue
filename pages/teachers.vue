<template>
	<div>
		<h1 class="mt-4 text-4xl font-semibold text-center text-light dark:text-dark">
			Theorie Lehrer
		</h1>
		<div
			class="flex flex-col flex-wrap justify-around ml-2 border-t-4 sm:mr-10 border-dark sm:flex-row"
		>
			<avatar
				name="Dipl. Ing. Niklas Hack"
				description="MEDT | POS | DBI | SYP"
				image="https://htl.moedling.at/fileadmin/elektronik/bilder/theorielehrer/Hack.jpg"
			></avatar>
			<avatar
				name="Dipl. Ing. Silvia Niedrist"
				description="MEDT | POS"
				image="https://htl.moedling.at/fileadmin/elektronik/bilder/theorielehrer/Niedrist.jpg"
			></avatar>
			<avatar />
			<avatar />
			<avatar />
			<avatar />
			<avatar />
		</div>
		<h1 class="mt-4 text-4xl font-semibold text-center text-light dark:text-dark">
			Werkstätten Lehrer
		</h1>
		<div
			class="flex flex-col flex-wrap border-t-4 sm:mr-10 sm:flex-row border-dark"
		>
			<avatar />
			<avatar />
			<avatar />
			<avatar />
			<avatar />
			<avatar />
			<avatar />
			<avatar />
		</div>
	</div>
</template>
<style lang="postcss" scoped />

<script>
import Avatar from "~/components/Avatar"
import aosMixin from "~/mixins/aos"

export default {
	mixins: [aosMixin],
	transition: "slide-bottom",
	components: {
		Avatar,
	},
}
</script>
