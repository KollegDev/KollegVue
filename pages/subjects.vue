<template>
	<NoSsr>
		<carousel
			:per-page="1"
			:loop="true"
			:paginationSize="20"
			:scrollPerPage="false"
			:adjustableHeight="true"
			:navigationEnabled="true"
			:autoplay="true"
			:autoplayTimeout="20000"
			:navigationClickTargetSize="10"
			class="flex-shrink w-full pt-8 m-auto sm:w-3/5"
			paginationActiveColor="#F87171"
			paginationColor="#92908C"
		>
			<slide>
				<subject-item
					fullHeader="Programmieren & Systemtechnik (POS)"
					description="
                In dem Programmieren und System-Engineering-Unterricht (POS) lernt man grundlegende Kenntnisse 
                des Programmierens mittels der klassenorientierten Programmiersprache C# im .NET-Framework kennen.
                Das Fach baut auf einem Level für Anfänger auf und bringt einem Schrittweise den logischen Denkprozess des Programmierens näher.
                In dem Unterrichtsgegenstand werden zu Beginn .NET Konsolenanwendungen erstellt, später gibt es Projekte mit komplexeren Applikationen zu programmieren."
				/>
			</slide>
			<slide>
				<subject-item
					fullHeader="Medientechnik (MEDT)"
					description="
                In dem Medientechnik-Unterricht (MEDT) beschäftigt man sich mit Farbenlehre, dem Internet of Things, Websites sowie deren Design (Frontend & Backend) im und wirft auch einen Blick auf die Audio und Videobearbeitung. 
                Es werden eigene Webauftritte sowie komplexe Webapplikationen erstellt, zusätzlich lernt man diverse Techniken für das optimale Erstellen jener kennen."
				/>
			</slide>
			<slide>
				<subject-item
					fullHeader="Netzwerktechnik & Verteilte Systeme (NSVS)"
					description="
                In dem Netzwerksysteme und verteilte Systeme-Unterricht (NSVS) geht es um Kenntnisse der Netzwerktechnik sowie den Aufbau von Netzwerken. 
                Zudem lernt man auch die Hardware der Netzwerkwelt kennen und nimmt Ethernet Kabel, Glasfaser Technologie, Router und Modems ,WLAN-Repeater etc. genau unter die Lupe. 
                Später simuliert man eigene Netzwerke mit der Software Packet-Tracer der Firma Cisco."
				/>
			</slide>
			<slide>
				<subject-item
					fullHeader="Datenbanken & Informationssysteme (DBI)"
					description="
                In dem Datenbanken und Informationssysteme -Unterricht (DBI) erfährt man wie Datenbanken aufgebaut sind, welche Arten es gibt und programmiert in Datenbanksprachen wie SQL oder auch NO-SQL.
                Dieses Fach ist oft verknüpft mit Fächern wie POS und SYP. 
                Kentnisse über Datenbanksysteme sind ein elementarer Grundbaustein eines jeden Informatikers und werden hier aufbauend gelehrt."
				/>
			</slide>
			<slide>
				<subject-item
					fullHeader="Systemplanung & Projektmanagement (SYP)"
					description="
                In dem Systemplanung und Projektmanagement -Unterricht (SYP) geht es darum die Arbeitsabläufe rund um das Arbeitsfeld System-Engineering via Projekte kennenzulernen.
                Oft werden Projekte sowie deren Planung auch in kleineren Gruppen bewältigt, dabei lernt man auch über agile Herangehensweisen."
				/>
			</slide>
			<slide>
				<subject-item
					fullHeader="Technische Informatik (TINF)"
					description="
                In dem technischen Informatik – Unterricht (TINF) geht es in die Tiefe der Programmierwelt. 
                Man erfährt etwas von diversen Betriebssystemen und wie diese im Hintergrund fungieren, weiters lernt man über Mikrocontroller sowie deren Programmierung mit der Programmiersprache C und Scripting. 
                Man arbeitet anfänglich mit einer VM (Virtual Machine) von Oracle, die einen Rechner simuliert.
                Außerdem lernt man wie Elektronik und Informatik, also Hardware und Software zusammenhängen."
				/>
			</slide>
		</carousel>
	</NoSsr>
</template>

<script>
import SubjectItem from "~/components/SubjectItem"
export default {
	transition: "slide-bottom",
	components: {
		SubjectItem,
	},
}
</script>
