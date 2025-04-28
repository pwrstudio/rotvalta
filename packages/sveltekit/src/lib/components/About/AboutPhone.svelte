<script lang="ts">
  import { LANGUAGE } from "$lib/enums"
  import type { Homepage } from "@sanity-types"
  import { renderBlockText } from "$lib/modules/sanity"
  import Logos from "$lib/components/About/Logos.svelte"
  import ArrowDown from "../Graphics/ArrowDown.svelte"

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

  function scrollToNotes() {
    const notesElement = document.getElementById("notes")
    if (notesElement) {
      notesElement.scrollIntoView({ behavior: "smooth" })
    }
  }
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

  <button class="arrow-down" on:click={scrollToNotes}>
    <ArrowDown />
  </button>
</div>

<style lang="scss">
  @import "../../styles/index.scss";

  .about {
    height: 100%;
    margin-right: var(--total-margin);
    width: 50ch;
    padding-inline: var(--total-margin);
    // flex-shrink: 0;
    // flex-direction: column;
    // justify-content: center;
    // align-items: center;
    position: relative;

    display: none;

    @include screen-size("phone") {
      height: 100dvh;
      width: 100dvw;
      display: flex;
      border-bottom: 1px solid var(--accent-color);
    }

    .inner {
      margin-top: 8em;
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

    .arrow-down {
      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);
      color: var(--accent-color);
      cursor: pointer;
    }
  }
</style>
