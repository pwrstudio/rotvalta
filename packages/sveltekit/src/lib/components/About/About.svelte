<script lang="ts">
  import { LANGUAGE } from "$lib/enums"
  import type { Homepage } from "@sanity-types"
  import { renderBlockText } from "$lib/modules/sanity"
  import Logos from "$lib/components/About/Logos.svelte"

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
  <!-- TITLE -->
  <div class="title">
    <h1>{title}</h1>
    <span class="divider">/</span>
    <h2>{subTitle}</h2>
  </div>

  <!-- CONTENT -->
  <div class="content">
    {@html renderBlockText(content)}
    <!-- <a class="read-more">Read more</div> -->
  </div>

  <!-- LOGOS -->
  <div class="logos">
    <Logos logos={homepage.logos} />
  </div>
</div>

<style lang="scss">
  .about {
    height: 100%;
    margin-right: var(--total-margin);
    width: 50ch;
    padding-inline: var(--total-margin);
    padding-top: 100px;
    flex-shrink: 0;

    .title {
      margin-bottom: 1em;

      h1,
      h2 {
        display: inline-block;
      }

      .divider {
        font-size: var(--font-size-large);
      }
    }

    .content {
      .read-more {
        float: right;
      }
    }
  }
</style>
