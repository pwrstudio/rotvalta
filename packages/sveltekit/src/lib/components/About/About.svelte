<script lang="ts">
  import { LANGUAGE } from "$lib/enums"
  import { renderBlockText } from "$lib/modules/sanity"
  import type { Homepage, Page } from "@sanity-types"

  export let language: LANGUAGE
  export let homepage: Homepage
  export let pages: Page[]
</script>

<div class="about">
  {#if language === LANGUAGE.ENGLISH}
    <!-- TITLE: ENGLISH -->
    <h1>{homepage.title_en} / {homepage.subTitle_en}</h1>
    <div class="content">
      <!-- CONTENT: ENGLISH -->
      {@html renderBlockText(homepage.content_en?.content ?? [])}
    </div>
  {:else}
    <!-- TITLE: SWEDISH -->
    <h1>{homepage.title_se} / {homepage.subTitle_se}</h1>
    <div class="content">
      <!-- CONTENT: SWEDISH -->
      {@html renderBlockText(homepage.content_se?.content ?? [])}
    </div>
  {/if}

  <!-- LOGOS -->
  <div class="logos">LOGOS</div>

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
</div>

<style lang="scss">
  .about {
    height: 80vh;
    background: green;
    max-width: 60ch;
    margin: 40px;

    .pages {
      display: flex;

      .link {
        margin-right: 10px;
      }
    }
  }
</style>
