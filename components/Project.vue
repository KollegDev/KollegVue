<template>
	<div class="justify-center markdown-body" :class="paddingX"></div>
</template>

<style lang="postcss" scoped>
@import url("https://cdnjs.cloudflare.com/ajax/libs/github-markdown-css/4.0.0/github-markdown.min.css");

.markdown-body {
	@apply text-black dark:text-white px-20;
}
</style>

<style>
.markdown-body {
	box-sizing: border-box;
	min-width: 200px;
	max-width: 100vw;
	margin: 0 auto;
	font-size: 1.3em;
}

.markdown-body table tr {
	background-color: rgba(255, 255, 255, 0);
	border-top: 1px solid #c6cbd1;
}

.markdown-body img {
	background-color: rgba(255, 255, 255, 0);
	margin: auto;
}

.markdown-body .highlight pre,
.markdown-body pre {
	background-color: rgba(255, 255, 255, 0);
}

.markdown-body table tr:nth-child(2n) {
	background-color: rgba(255, 255, 255, 0);
}
</style>

<script>
export default {
	props: {
		paddingX: {
			type: String,
			default: "px-12",
		},
	},
}
</script>
