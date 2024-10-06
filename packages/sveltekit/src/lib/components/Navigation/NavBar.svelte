<script lang="ts">
  import { LANGUAGE } from "$lib/enums"
  import type { Page } from "@sanity-types"
  import type { Labels } from "$lib/types"
  import { conversationsActive, horizonallyScrolled } from "$lib/stores"

  import PageLink from "$lib/components/Navigation/PageLink.svelte"

  export let language: LANGUAGE
  export let pages: Page[]
  export let labels: Labels
</script>

<div class="nav-bar" class:scrolled={$horizonallyScrolled}>
  <!-- PAGES -->
  {#if !$horizonallyScrolled}
    <div class="pages">
      {#each pages as page}
        <PageLink {page} {language} />
      {/each}
    </div>
  {/if}

  <!-- CONVERSATIONS -->
  {#if $conversationsActive}
    <a class="conversations" href="#conversations">
      {language === LANGUAGE.ENGLISH
        ? labels.conversations.en
        : labels.conversations.se}
    </a>
  {/if}
</div>

<style lang="scss">
  .nav-bar {
    position: absolute;
    bottom: var(--total-margin);
    left: var(--total-margin);
    width: calc(100vw - var(--double-total-margin));
    display: flex;
    justify-content: space-between;
    z-index: var(--z-nav);

    .pages {
      display: flex;
    }

    &.scrolled {
      justify-content: center;
    }

    .conversations {
      text-decoration: none;
      color: var(--foreground-color);

      &:hover {
        color: var(--accent-color);
      }
    }
  }
</style>
