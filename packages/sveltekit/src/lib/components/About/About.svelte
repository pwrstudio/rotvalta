<script lang="ts">
  import { LANGUAGE } from "$lib/enums"
  import { renderBlockText } from "$lib/modules/sanity"
  import type { Homepage } from "@sanity-types"

  export let language: LANGUAGE
  export let homepage: Homepage
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
