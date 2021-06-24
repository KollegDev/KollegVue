<template>
	<div class="">
		<h1 class="mt-4 text-4xl font-semibold text-center text-light dark:text-dark">
			Theorie Lehrer
		</h1>
		<div
			class="flex flex-col flex-wrap justify-center border-t-4 sm:mr-10 border-dark sm:flex-row"
		>
			<avatar
				name="Dipl. Ing. Georg Krall"
				sub1="NSVS"
				image="https://htl.moedling.at/kolleg/images/teachers/Krall.jpg"
			></avatar>

			<avatar
				name="Dipl. Ing. Niklas Hack"
				sub1="MEDT"
				sub2="POS"
				sub3="DBI"
				sub4="SYP"
				image="https://htl.moedling.at/kolleg/images/teachers/Hack.jpg"
			></avatar>

			<avatar
				name="Dipl. Ing. Thomas Fuxreiter"
				sub1="MEDT"
				sub2="SYP"
				sub3="NSVS"
				sub4="DBI"
				image="https://htl.moedling.at/kolleg/images/teachers/Fuxreiter.jpg"
			></avatar>

			<avatar
				name="Dipl. Ing. Silvia Niedrist"
				sub1="MEDT"
				sub2="POS"
				image="https://htl.moedling.at/kolleg/images/teachers/Niedrist.jpg"
			></avatar>

			<avatar
				name="Dipl. Ing. Manfred Weiss"
				sub1="SYP"
				image="https://htl.moedling.at/kolleg/images/teachers/Weiss.jpg"
			></avatar>

			<avatar
				name="Mag. Harald Paulsen"
				sub1="AM"
				image="https://htl.moedling.at/kolleg/images/teachers/Paulsen.jpg"
			></avatar>

			<avatar
				name="Mag. Michael Staffenberger"
				sub1="AM"
				image="https://htl.moedling.at/kolleg/images/teachers/Staffenberger.jpg"
			></avatar>

			<avatar
				name="Mag. Herwig Wallisch"
				sub1="WIR"
				image="https://htl.moedling.at/kolleg/images/teachers/Wallisch.jpg"
			></avatar>

			<avatar
				name="Mag. Verena Zehetbauer"
				sub1="E"
				image="https://htl.moedling.at/kolleg/images/teachers/Zehetbauer.jpg"
			></avatar>

			<avatar
				name="Roland Kneringer"
				sub1="TINF"
				image="https://htl.moedling.at/kolleg/images/teachers/Kner.jpg"
			></avatar>

			<avatar name="Mag. Karin Bünger" sub1="E"></avatar>
		</div>
		<h1 class="mt-4 text-4xl font-semibold text-center text-light dark:text-dark">
			Werkstätten Lehrer
		</h1>
		<div
			class="flex flex-col flex-wrap justify-center border-t-4 sm:mr-10 sm:flex-row border-dark"
		>
			<avatar
				name="Rene Ostermann"
				sub1="WEPT"
				image="https://htl.moedling.at/fileadmin/elektronik/bilder/theorielehrer/Ostermann.jpg"
			></avatar>

			<avatar
				name="Manfred Zellhofer"
				sub1="WEPT"
				image="https://htl.moedling.at/fileadmin/elektronik/bilder/werkstaettenlehrer/Zellhofer.jpg"
			></avatar>
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
