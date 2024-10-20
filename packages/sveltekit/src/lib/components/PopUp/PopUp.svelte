<script lang="ts">
  import { LANGUAGE } from "$lib/enums"
  import { fade } from "svelte/transition"
  import type {
    Page,
    FieldNote,
    ArchivalNote,
    Conversation,
  } from "@sanity-types"
  import { renderBlockText, urlFor } from "$lib/modules/sanity"
  import { goto } from "$app/navigation"
  import X from "../Graphics/X.svelte"
  // import { onDestroy, onMount } from "svelte"
  import VideoPlayer from "../VideoPlayer/VideoPlayer.svelte"

  export let page: Page | FieldNote | ArchivalNote | Conversation
  export let language: LANGUAGE

  $: title = language === LANGUAGE.ENGLISH ? page.title_en : page.title_se
  $: content =
    language === LANGUAGE.ENGLISH
      ? (page.content_en?.content ?? [])
      : (page.content_se?.content ?? [])
  $: href = language === LANGUAGE.ENGLISH ? "/en" : "/"
  $: src = page.mainImage
    ? urlFor(page.mainImage).height(600).saturation(-100).url()
    : ""
  $: videoUrl = page?.videoUrl ?? ""

  function closePopUp(event: MouseEvent) {
    goto(href, { noScroll: true })
    return event
  }

  // onMount(() => {
  //   disablePageScroll()
  // })

  // onDestroy(() => {
  //   enablePageScroll()
  // })
</script>

<div
  role="presentation"
  class="pop-up-container"
  on:click={closePopUp}
  in:fade={{ duration: 200 }}
>
  <div class="pop-up" class:textonly={page.hideImageInPopup ?? false}>
    <!-- CLOSE -->
    <a {href} class="close" data-sveltekit-noscroll><X /></a>

    {#if videoUrl}
      <VideoPlayer {videoUrl} />
    {:else}
      {#if src && (!page.hideImageInPopup ?? false)}
        <!-- IMAGE -->
        <div class="image">
          <img {src} alt={title} draggable="false" />
        </div>
      {/if}
      <!-- TEXT -->
      <div class="text">
        <h2>{title}</h2>
        <div class="content">{@html renderBlockText(content)}</div>
      </div>
    {/if}
  </div>
</div>

<style lang="scss">
  .pop-up-container {
    position: fixed;
    z-index: var(--z-modal);
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgba(255, 255, 255, 0.8);

    .pop-up {
      width: 60ch;
      max-width: 90vw;
      max-height: 90vh;
      overflow-y: auto;
      padding: var(--total-margin);
      background: var(--background-color);
      border: 1px solid var(--accent-color);
      position: relative;
      display: flex;

      .close {
        position: absolute;
        top: 10px;
        right: 10px;
        color: var(--foreground-color);

        &:hover {
          color: var(--accent-color);
        }
      }

      .image {
        width: 400px;
        margin-right: var(--outer-margin);

        img {
          width: 100%;
          height: auto;
          object-fit: cover;
        }
      }

      .text {
        width: calc(100% - 400px);

        h2 {
          margin-bottom: 1em;
        }

        .content {
          white-space: normal; /* Collapses unnecessary whitespace */
          overflow-wrap: break-word;
          hyphens: auto;
          padding-bottom: 4em;
        }
      }

      &.textonly {
        .image {
          display: none;
        }

        .text {
          width: 100%;
        }
      }
    }
  }
</style>
