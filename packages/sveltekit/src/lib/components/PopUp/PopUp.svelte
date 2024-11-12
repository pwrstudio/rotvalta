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
  import X from "$lib/components/Graphics/X.svelte"
  import VideoPlayer from "$lib/components/VideoPlayer/VideoPlayer.svelte"
  import AudioPlayer from "$lib/components/AudioPlayer/AudioPlayer.svelte"

  export let page: Page | FieldNote | ArchivalNote | Conversation
  export let language: LANGUAGE

  console.log(page)

  $: title = language === LANGUAGE.ENGLISH ? page.title_en : page.title_se
  $: content =
    language === LANGUAGE.ENGLISH
      ? (page.content_en?.content ?? [])
      : (page.content_se?.content ?? [])
  $: href = language === LANGUAGE.ENGLISH ? "/en" : "/"
  $: src = page.mainImage ? urlFor(page.mainImage).height(600).url() : ""
  $: videoUrl = page?.videoUrl ?? ""

  $: hideMedia = page.hideMediaInPopup || (!src && !videoUrl)
  $: hideText = content.length === 0
  $: isConversation = page._type === "conversation"

  function closePopUp(event: MouseEvent) {
    if (event.target === event.currentTarget) {
      goto(href, { noScroll: true })
    }
  }
</script>

<div
  role="presentation"
  class="pop-up-container"
  on:click={closePopUp}
  in:fade={{ duration: 200 }}
>
  <div class="pop-up" class:hideMedia class:hideText class:isConversation>
    <!-- CLOSE -->
    <a {href} class="close" data-sveltekit-noscroll><X /></a>

    {#if isConversation}
      <VideoPlayer {videoUrl} />
    {:else}
      <!-- MEDIA -->
      <div class="column media">
        {#if page.audioFileUrl}
          <AudioPlayer audioFileUrl={page.audioFileUrl} />
        {:else if videoUrl}
          <VideoPlayer {videoUrl} />
        {:else}
          <img {src} alt={title} draggable="false" />
        {/if}
      </div>
      <!-- TEXT -->
      <div class="column text">
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
      width: 80ch;
      max-width: 90vw;
      max-height: 90vh;
      padding: var(--total-margin);
      padding-bottom: 0;
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
      }

      .column {
        width: 50%;

        &.media {
          padding-right: var(--inner-margin);
          img {
            width: 100%;
            height: auto;
            object-fit: cover;
          }
          iframe {
            width: 100%;
          }
        }

        &.text {
          overflow-y: auto;
          padding-right: var(--inner-margin);

          h2 {
            margin-bottom: 1em;
          }

          .content {
            white-space: normal;
            overflow-wrap: break-word;
            hyphens: auto;
            padding-bottom: 4em;
          }
        }
      }

      &.hideMedia {
        .media {
          display: none;
        }

        .text {
          width: 100%;
        }
      }

      &.hideText {
        .text {
          display: none;
        }

        .media {
          width: 100%;
          padding-right: 0;
        }
      }

      &.isConversation {
        padding-bottom: var(--total-margin);
      }
    }
  }
</style>
