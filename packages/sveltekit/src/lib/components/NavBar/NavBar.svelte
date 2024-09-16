<script lang="ts">
  import { LANGUAGE } from "$lib/enums"
  import type { Page } from "@sanity-types"
  import type { Labels } from "$lib/types"

  export let language: LANGUAGE
  export let pages: Page[]
  export let labels: Labels
</script>

<div class="nav-bar">
  <!-- PAGES -->
  <div class="pages">
    {#each pages as page}
      {#if language === LANGUAGE.ENGLISH}
        <!-- LINK: ENGLISH -->
        <div class="link">{page.title_en}</div>
      {:else}
        <!-- LINK: SWEDISH -->
        <div class="link">{page.title_se}</div>
      {/if}
    {/each}
  </div>

  <!-- CONVERSATIONS -->
  <div class="conversations">
    <!-- LABEL -->
    {#if language === LANGUAGE.ENGLISH}
      <div>{labels.conversations.en}</div>
    {:else}
      <div>{labels.conversations.se}</div>
    {/if}
  </div>
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

      .link {
        margin-right: 10px;
      }
    }
  }
</style>
