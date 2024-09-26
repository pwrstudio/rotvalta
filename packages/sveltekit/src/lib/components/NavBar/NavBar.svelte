<script lang="ts">
  import { LANGUAGE } from "$lib/enums"
  import type { Page } from "@sanity-types"
  import type { Labels } from "$lib/types"

  import PageLink from "$lib/components/NavBar/PageLink.svelte"

  export let language: LANGUAGE
  export let pages: Page[]
  export let labels: Labels
</script>

<div class="nav-bar">
  <!-- PAGES -->
  <div class="pages">
    {#each pages as page}
      <PageLink {page} {language} />
    {/each}
  </div>

  <!-- CONVERSATIONS -->
  <a class="conversations" href="/#conversations">
    {language === LANGUAGE.ENGLISH
      ? labels.conversations.en
      : labels.conversations.se}
  </a>
</div>

<style lang="scss">
  .nav-bar {
    position: absolute;
    bottom: 40px;
    left: 40px;
    width: calc(100vw - 80px);
    display: flex;
    justify-content: space-between;
    background: orange;

    .pages {
      display: flex;
    }

    .conversations {
      text-decoration: none;
      color: var(--foreground-color);
    }
  }
</style>
