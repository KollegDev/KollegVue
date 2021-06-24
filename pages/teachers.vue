<template>
	<div class="">
		<h1 class="mt-4 text-4xl font-semibold text-center text-light dark:text-dark">
			Abteilungsvorstand
		</h1>
		<div
			class="flex flex-col flex-wrap justify-center border-t-4 sm:mr-10 border-dark sm:flex-row"
		>
		<avatar
				name="Dipl. Ing. Georg Krall"
				sub1="NSVS"
				image="https://htl.moedling.at/kolleg/images/teachers/Krall.jpg">
				<subject-link subject="NSVS"/>
			</avatar>
		</div>
		<h1 class="mt-4 text-4xl font-semibold text-center text-light dark:text-dark">
			Theorie Lehrer
		</h1>
		<div
			class="flex flex-col flex-wrap justify-center border-t-4 sm:mr-10 border-dark sm:flex-row"
		>
			<avatar
				name="Dipl. Ing. Niklas Hack"
				image="https://htl.moedling.at/kolleg/images/teachers/Hack.jpg">
				<subject-link subject="MEDT"/>
				<subject-link subject="POS"/>
				<subject-link subject="DBI"/>
				<subject-link subject="SYP"/>
			</avatar>

			<avatar
				name="Dipl. Ing. Silvia Niedrist"
				image="https://htl.moedling.at/kolleg/images/teachers/Niedrist.jpg">
				<subject-link subject="MEDT"/>
				<subject-link subject="POS"/>
				</avatar>

			<avatar
				name="Dipl. Ing. Manfred Weiss"
				image="https://htl.moedling.at/kolleg/images/teachers/Weiss.jpg">
				<subject-link subject="SYP"/>
			</avatar>

			<avatar
				name="Mag. Harald Paulsen"
				image="https://htl.moedling.at/kolleg/images/teachers/Paulsen.jpg">
				<subject-link subject="AM"/>
			</avatar>

			<avatar
				name="Mag. Michael Staffenberger"
				sub1="AM"
				image="https://htl.moedling.at/kolleg/images/teachers/Staffenberger.jpg">
				<subject-link subject="AM"/>
			</avatar>

			<avatar
				name="Mag. Herwig Wallisch"
				sub1="WIR"
				image="https://htl.moedling.at/kolleg/images/teachers/Wallisch.jpg">
				<subject-link subject="WIR"/>
			</avatar>

			<avatar
				name="Mag. Verena Zehetbauer"
				sub1="E"
				image="https://htl.moedling.at/kolleg/images/teachers/Zehetbauer.jpg">
				<subject-link subject="E"/>
			</avatar>

			<avatar
				name="Dipl. Ing. Roland Kneringer"
				sub1="TINF"
				image="https://htl.moedling.at/kolleg/images/teachers/Kner.jpg">
				<subject-link subject="TINF"/>
			</avatar>

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
				image="https://htl.moedling.at/fileadmin/elektronik/bilder/theorielehrer/Ostermann.jpg">
				<subject-link subject="COPR"/>
			</avatar>

			<avatar
				name="Manfred Zellhofer"
				image="https://htl.moedling.at/fileadmin/elektronik/bilder/werkstaettenlehrer/Zellhofer.jpg">
				<subject-link subject="COPR"/>
			</avatar>
		</div>
	</div>
</template>
<style lang="postcss" scoped />

<script>
import Avatar from "~/components/Avatar"
import SubjectLink from "~/components/SubjectLink.vue"
import aosMixin from "~/mixins/aos"

export default {
	mixins: [aosMixin],
	transition: "slide-bottom",
	components: {
		Avatar,
		SubjectLink,
	},
}
</script>
