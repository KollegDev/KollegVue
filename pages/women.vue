<template>
	<div class="text-black dark:text-white">
		<div class="gap-8 pl-12 pr-12 mt-10 lg:flex">
			<div class="flex-col">
				<img
					src="https://htl.moedling.at/kolleg/images/woman/Frauen_it.jpg"
					class="rounded-xl w-96"
					alt="Frau am Laptop"
					title="Frauen in der IT"
				/>
				<div class="pictures"></div>
			</div>

			<div class="flex flex-col gap-3">
				<div class="mt-10 text-3xl font-semibold text-light dark:text-dark">
					Warum Frauen in der IT?
				</div>
				<p class="text-2xl">
					Informationstechnologie (IT) ist ein sehr breites Berufsfeld, das zunehmend an Bedeutung gewinnt. Praktisch alle Wirtschaftszweige sind durch die Digitalisierung erfasst. Um hier erfolgreich zu sein, brauchen Organisationen gut ausgebildete Spezialistinnen und Spezialisten. In dieser Branche ist nicht nur das technologische Know-how von Bedeutung, sondern auch methodische Kenntnisse. Dazu gehören unter anderem: Organisationsfähigkeit, Kommunikation, Teamarbeit sowie Kreativität. Natürlich können auch Frauen hier eine wichtige Rolle spielen. Sie bringen die richtigen Voraussetzungen mit. 
				</p>
				<p class="text-2xl">
					Der Frauenanteil in der IT-Branche ist aktuell noch gering. Nur 15,6 % der Fachkräfte in Österreich sind weiblich (Daten aus 2017). Doch immer mehr Unternehmen erkennen die Vorteile der weiblichen Mitarbeiterinnen und erklären sich bereit mehr Frauen in diesem Gebiet einzusetzen. 
				</p>
				<p class="text-2xl">
					Dazu hat das österreichische AMS eine Initiative –
					<a class="underline text-light"
						href="https://www.ams.at/arbeitsuchende/karenz-und-wiedereinstieg/so-unterstuetzen-wir-ihren-wiedereinstieg/fit-frauen-in-handwerk-und-technik"
						>Frauen in Technik.
					</a>
				</p>
			</div>
		</div>

		<div class="pt-10 pl-12 pr-12 lg:flex">
			<div class="flex flex-col gap-3">
				<div class="text-3xl font-semibold text-light dark:text-dark">
					Warum das Kolleg für Informatik-Systemtechnik der HTL Mödling?
				</div>
				<p class="mb-8 text-2xl">
					Das Kolleg für Informatik-Systemtechnik an der HTL Mödling kombiniert erfolgreich Theorie und Praxis. Vermittelt werden Grundlagen und Konzepte mit Schwerpunkt auf Programmierung, Datenbanken, Netzwerktechnik und Medientechnik. Abgerundet wird das Programm durch Inhalte aus Systemplanung, Projektmanagement, Wirtschaft und Recht. Die Teilnehmerinnen und Teilnehmer können das erworbene Wissen in diversen fächerübergreifenden Projektarbeiten anwenden.
				</p>
			</div>
			<div class="flex flex-col">
				<img
					src="https://htl.moedling.at/kolleg/images/woman/KennenlernTreff.jpg"
					class="w-96 rounded-xl"
					alt="Bild von einem Team"
					title="Kolleg für Informatik-Systemtechnik"
				/>
				<div class="pictures ml-4"></div>
			</div>
		</div>
	<h1 class="mt-4 text-4xl font-semibold text-center text-light dark:text-dark">
			Initiativen
	</h1>
	<div class="flex flex-col flex-wrap justify-around border-t-4  sm:mr-10 border-dark sm:flex-row">
		<subject-item
				image="https://htl.moedling.at/kolleg/images/subjects/code.jpg"
				fullHeader="Internationaler Mädchentag"
				description="
                Die HTL- Mödling setzt ein Zeichen für die Gleichberechtigung und leuchtet pink.
				Internationaler Welt-Mädchentag am 11. Oktober | Plan (plan-international.at)"
		/>
		<subject-item
				image="https://htl.moedling.at/kolleg/images/subjects/code.jpg"
				fullHeader="Kennenlerntag"
				description="
                Jedes Jahr organisiert DI Silvia Niedrist (Genderbeauftragte der Abteilung) ein Treffen, um die neuen Frauen in der Abteilung kennenzulernen. In Gesprächen unter Frauen lassen sich in einer sonst männerdominierten Welt manche fachlichen, schulischen, aber auch persönlichen Probleme leichter lösen."
		/>
		<subject-item
				image="https://htl.moedling.at/kolleg/images/subjects/code.jpg"
				fullHeader="FIT-Studien-Infotag"
				description="
                Jedes Jahr bekommen die Kolleg – Schülerinnen Einblick in die MINT-Studienfächer an den österreichischen Universitäten und Fachhochschulen. Vor Ort erhalten sie aus erster Hand durch aktive Studentinnen aktuelle Informationen."
		/>
		<subject-item
				image="https://htl.moedling.at/kolleg/images/subjects/code.jpg"
				fullHeader="Schnupper-Tag"
				description="
                Machen Sie einen Termin beim Abteilungsvorstand aus und nehmen Sie im echten Unterricht teil."
		/>
	</div>
</div>
</template>

<style lang="postcss">
.pictures {
	@apply h-16 p-2 w-80 rounded-b-2xl;
}

.blury {
	
}
</style>

<script>
import SubjectItem from "~/components/SubjectItem"

export default {
	transition: "slide-bottom",
	components: {
		SubjectItem,
	},
}
</script>
