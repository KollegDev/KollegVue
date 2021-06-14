<template>
	<div class="flex justify-center">
		<div class="flex flex-row mt-10">
			<div class="hidden lg:block">
				<img
					src="https://cdn.pixabay.com/photo/2019/11/10/08/22/school-4615187_1280.jpg"
					class="shadow-xl w-96 min-w-96 rounded-2xl"
					alt="Foto von der HTL"
					title="HTL"
				/>
			</div>
			<div class="flex flex-col justify-between ml-3">
				<div class="infobox">
					<p class="text-base"></p>
					<div class="toptext">Anschrift</div>
					Höhere Technische Bundeslehr- und Versuchsanstalt Mödling <br />
					Technikerstr. 1-5<br />
					A-2340 Mödling<br />
					<a href="tel:02236 / 408-0" class="telstyle">Tel: 02236 / 408-0</a><br />
					Fax: 02236 / 408-2250<br />
					E-Mail: office@htl.moedling.at
				</div>

				<div class="infobox">
					<p class="text-base"></p>
					<div class="toptext">Schüler-Office</div>
					<a href="tel:02236/408-2170" class="telstyle">Tel.: 02236/408-2170</a
					><br />
					E-mail: schuloffice@htl.moedling.at<br />
					Öffnungszeiten: Mo - Fr von 7:30 bis 12:00 Uhr
				</div>

				<div class="infobox">
					<p class="text-base"></p>
					<div class="toptext">Der Abteilungsvorstand</div>
					DI Georg Krall<br />
					<a href="tel:02236 / 408-6500" class="telstyle">Tel: 02236 / 408-6500</a
					><br />
					E-Mail: georg.krall@htl.moedling.at<br />
				</div>
			</div>
		</div>
	</div>
</template>

<style lang="postcss">
.infobox {
	@apply h-auto p-6 overflow-hidden bg-white shadow-xl dark:bg-darkgrey w-96 rounded-2xl mt-4 lg:mt-0 text-black dark:text-white;
}

.blury {
	background: rgba(255, 255, 255, 0.1);
	box-shadow: inset 0px 7px 12px rgba(0, 0, 0, 0.25);
	backdrop-filter: blur(20px);
	margin-top: -1px;
}

.toptext {
	@apply text-xl text-light dark:text-dark;
}

.telstyle {
	@apply hover:text-light hover:dark:text-dark hover:underline;
}
</style>

<script>
export default {
	transition: "slide-bottom",
}
</script>
