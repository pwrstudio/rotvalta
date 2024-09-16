<script lang="ts">
  import { LANGUAGE } from "$lib/enums"
  export let language: LANGUAGE
</script>

<div class="language-switch">
  <a href="/" class="link" class:active={language === LANGUAGE.SWEDISH}>SE</a>
  <a href="/en" class="link" class:active={language === LANGUAGE.ENGLISH}>EN</a>
</div>

<style lang="scss">
  .language-switch {
    position: absolute;
    top: 20px;
    left: 40px;
  }
</style>
