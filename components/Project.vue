<template>
  <div class="justify-center markdown-body"></div>
</template>

<style lang="postcss" scoped>
@import url('https://cdnjs.cloudflare.com/ajax/libs/github-markdown-css/4.0.0/github-markdown.min.css');

.markdown-body {
  @apply text-black dark:text-white px-16;
}
</style>

<style>
.markdown-body {
  box-sizing: border-box;
  min-width: 200px;
  max-width: 85vw;
  margin: 0 auto;
  padding: 45px;
}

@media (max-width: 767px) {
  .markdown-body {
    padding: 15px;
  }
}

.markdown-body table tr {
  background-color: rgba(255, 255, 255, 0);
  border-top: 1px solid #c6cbd1;
}

.markdown-body img {
  max-width: 100%;
  box-sizing: initial;
  background-color: rgba(255, 255, 255, 0);
}
</style>
