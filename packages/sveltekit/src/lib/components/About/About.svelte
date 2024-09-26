<script lang="ts">
  import { LANGUAGE } from "$lib/enums"
  import { renderBlockText } from "$lib/modules/sanity"
  import type { Homepage } from "@sanity-types"

  export let language: LANGUAGE
  export let homepage: Homepage

  $: title =
    language === LANGUAGE.ENGLISH ? homepage.title_en : homepage.title_se
  $: subTitle =
    language === LANGUAGE.ENGLISH ? homepage.subTitle_en : homepage.subTitle_se
  $: content =
    language === LANGUAGE.ENGLISH
      ? (homepage.content_en?.content ?? [])
      : (homepage.content_se?.content ?? [])
</script>

<div class="about">
  <h1>{title} / {subTitle}</h1>
  <div class="content">
    {@html renderBlockText(content)}
  </div>
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
