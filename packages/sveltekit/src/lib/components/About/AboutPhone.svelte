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
  <div class="inner">
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
</div>

<style lang="scss">
  @import "../../styles/index.scss";

  .about {
    height: 100%;
    margin-right: var(--total-margin);
    width: 50ch;
    padding-inline: var(--total-margin);
    flex-shrink: 0;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    display: none;

    @include screen-size("phone") {
      height: 100vh;
      width: 100vw;
      display: flex;
      border-bottom: 1px solid var(--accent-color);
    }

    .title {
      margin-bottom: 2em;

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
