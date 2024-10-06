<script lang="ts">
  import { LANGUAGE } from "$lib/enums"
  export let language: LANGUAGE
</script>

<div class="language-switch">
  <a href="/" class="link" class:active={language === LANGUAGE.SWEDISH}>SE</a>
  <span>/</span>
  <a href="/en" class="link" class:active={language === LANGUAGE.ENGLISH}>EN</a>
</div>

<style lang="scss">
  .language-switch {
    position: absolute;
    z-index: var(--z-nav);
    top: var(--outer-margin);
    left: var(--total-margin);
    user-select: none;

    a {
      color: var(--foreground-color);
      text-decoration: none;

      &:hover {
        color: var(--accent-color);
      }

      &.active {
        color: var(--accent-color);
      }
    }
  }
</style>
