<template>
	<div class="p-2 lg:p-20 lg:pt-8">
		<h1
			class="pb-4 mb-4 text-4xl font-semibold text-center  text-light dark:text-dark"
		>
			Ausbildungsweg
		</h1>
		<div
			class="grid grid-cols-3 grid-rows-5 gap-2 overflow-hidden  progress lg:font-medium"
		>
			<div class="col-start-1 col-end-4 box">
				<div class="grid w-full h-full grid-cols-3 grid-rows-2">
					<div class="col-start-1 col-end-4 m-auto text-sm lg:text-base">
						Unterstufe AHS oder Neue Mittelschule
					</div>
					<div class="col-start-3 col-end-4 m-auto arrow">
						<i class="bx bx-md bx-down-arrow"></i>
					</div>
				</div>
			</div>

			<div class="row-start-2 row-end-4 box">
				<div class="grid w-full h-full grid-cols-3 grid-rows-2">
					<div class="col-start-1 col-end-4 m-auto text-sm lg:text-base">
						BHS oder Oberstufe AHS
					</div>
					<div class="col-start-2 col-end-3 m-auto arrow">
						<i class="bx bx-md bx-down-arrow"></i>
					</div>
				</div>
			</div>

			<div class="box">
				<div class="grid w-full h-full grid-cols-3 grid-rows-2">
					<div class="col-start-1 col-end-4 m-auto text-sm lg:text-base">
						Fachfremde Ausbildung
					</div>
					<div class="col-start-2 col-end-3 m-auto arrow">
						<i class="bx bx-md bx-down-arrow"></i>
					</div>
				</div>
			</div>

			<div class="box">
				<div class="grid w-full h-full grid-cols-3 grid-rows-2">
					<div class="col-start-1 col-end-4 m-auto text-sm lg:text-base">
						Fachschule für Elektronik <br />(3.5 Jahre)
					</div>
					<div class="col-start-2 col-end-3 m-auto arrow">
						<i class="bx bx-md bx-down-arrow"></i>
					</div>
				</div>
			</div>

			<div class="box">
				<div class="grid w-full h-full grid-cols-3 grid-rows-2">
					<div class="col-start-1 col-end-4 m-auto text-xs lg:text-base">
						Vorbereitungs-Lehrgang <br />(1 Semester)
					</div>
					<div class="col-start-2 col-end-3 m-auto arrow">
						<i class="bx bx-md bx-down-arrow"></i>
					</div>
				</div>
			</div>

			<div class="box">
				<div class="grid w-full h-full grid-cols-3 grid-rows-2">
					<div class="col-start-1 col-end-4 m-auto text-sm lg:text-base">
						Abschluss-Prüfung
					</div>
					<div class="col-start-2 col-end-3 m-auto arrow">
						<i class="bx bx-md bx-down-arrow"></i>
					</div>
				</div>
			</div>

			<div class="box">
				<div class="grid w-full h-full grid-cols-3 grid-rows-2">
					<div class="col-start-1 col-end-4 m-auto text-xs lg:text-base">
						Kolleg für Informatik-Systemtechnik <br />(4 Semester)
					</div>
					<div class="col-start-2 col-end-3 m-auto arrow">
						<i class="bx bx-md bx-down-arrow"></i>
					</div>
				</div>
			</div>

			<div class="col-start-2 col-end-4 box">
				<div class="grid w-full h-full grid-cols-3 grid-rows-2">
					<div class="col-start-1 col-end-4 m-auto text-sm lg:text-base">
						Aufbaulehrgang für Informatik-Systemtechnik <br />(5 Semester)
					</div>
					<div class="col-start-2 col-end-3 m-auto arrow">
						<i class="bx bx-md bx-down-arrow"></i>
					</div>
				</div>
			</div>

			<div class="col-start-1 col-end-4 text-sm lg:text-base box">
				<div class="m-auto text-sm lg:text-base">Reife- und Diplomprüfung</div>
			</div>
		</div>

		<div
			class="flex flex-col justify-around pt-20 pb-10 m-auto mb-20 border-b-4  border-dark flex-grow-1 lg:flex-row"
		>
			<div class="h-full infobox">
				<h1
					class="text-3xl font-semibold text-center  lg:text-4xl text-light dark:text-dark"
				>
					Kolleg
				</h1>
				<div class="description">
					Das Informatik-Kolleg der HTL Mödling bietet allen, die studienberichtigt
					sind, eine kurze intensive Berufsausbildung, die sie zur Diplomprüfung
					führt. Der Unterricht stellt die fachspezifischen Fächer, in denen man sich
					für eine mündliche Abschlussprüfung vorbereitet, in den Mittelpunkt. In den
					allgemeinbildenden Fächern liegt der Fokus auf der Vorbereitung für den
					Einstieg in die Arbeitswelt. In Deutsch und Englisch werden rhetorische und
					kommunikative Kompetenzen erworben. In Mathematik lernt man fachspezifische
					Grundlagen, die relevant für Informatik sind.
				</div>
			</div>
			<div class="h-full infobox">
				<h1
					class="text-3xl font-semibold text-center  lg:text-4xl text-light dark:text-dark"
				>
					Aufbaulehrgang
				</h1>
				<div class="description">
					Der Aufbaulehrgang führt Quereinsteiger und Quereinsteigerinnen, die eine
					berufsbildende mittlere Schule (Fachschule) oder eine Lehre abgeschlossen
					haben, zur Reife- und Diplomprüfung. Die Auszubildenden werden zusätzlich
					zu den fachspezifischen Fächern gezielt in den allgemeinbildenden Fächern
					für die mündlichen und schriftlichen Matura-Prüfungen vorbereitet. Die
					allgemeinbildenden Fächer sind Deutsch, Englisch und angewandte Mathematik.
					Unter anderem geht es darum, dass man die erlernten Fähigkeiten der
					Rhetorik, Kommunikation und angewandten Mathematik im Berufsleben einsetzt.
				</div>
			</div>
		</div>
		<div class="flex flex-col">
	
		<div class="shadow-md p-5 m-auto text-3xl text-center transition-all duration-300 transform scale-100  lg:w-1/5 hover:scale-95 mt-14 rounded-2xl bg-light">
			<a href="/kolleg/pdf/Stundenplan.pdf"
			>Stundenplan</a>
			
		</div>

		<div class="shadow-md p-5 m-auto text-3xl text-center transition-all duration-300 transform scale-100  lg:w-1/5 hover:scale-95 mt-14 rounded-2xl bg-light">
			<a href="https://anmeldung.htl.moedling.at/anmeldung.external/Sonderform"
			>Zur Anmeldung</a>
			
		</div>

		</div>
		
		
	</div>
</template>

<style lang="postcss" scoped>
.box {
	@apply break-normal flex min-w-full min-h-full text-center rounded shadow-md font-bold lg:text-2xl items-center border-2 border-light;
}

.progress {
	@apply bg-white shadow-xl dark:bg-darkgrey rounded-2xl mt-4 lg:mt-0 text-black dark:text-white;
}

.arrow {
	@apply align-text-bottom;
}

.infobox {
	@apply w-full mt-5 text-lg bg-white shadow-lg rounded-2xl text-darkgrey dark:text-white dark:bg-darkgrey lg:w-5/12;
}

.description {
	@apply lg:text-xl font-medium p-3 lg:p-6;
}
</style>

<script>
export default {
	transition: "slide-bottom",
}
</script>
