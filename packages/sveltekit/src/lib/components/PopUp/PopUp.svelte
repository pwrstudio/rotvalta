<script lang="ts">
  import { LANGUAGE } from "$lib/enums"
  import { fade } from "svelte/transition"
  import type { FieldNote, ArchivalNote, Page } from "@sanity-types"
  import { renderBlockText, urlFor } from "$lib/modules/sanity"
  import { goto } from "$app/navigation"
  import { replaceNbspInText } from "$lib/modules/utils"

  import X from "$lib/components/Graphics/X.svelte"
  import VideoPlayer from "$lib/components/VideoPlayer/VideoPlayer.svelte"
  import AudioPlayer from "$lib/components/AudioPlayer/AudioPlayer.svelte"

  export let page: (FieldNote | ArchivalNote | Page) & {
    audioFileUrl?: string
  }
  export let language: LANGUAGE

  // Title
  $: title = language === LANGUAGE.ENGLISH ? page.title_en : page.title_se

  // Text content
  $: content =
    language === LANGUAGE.ENGLISH
      ? (replaceNbspInText(page.content_en?.content) ?? [])
      : (replaceNbspInText(page.content_se?.content) ?? [])

  // Return URL for close button
  $: href = language === LANGUAGE.ENGLISH ? "/en" : "/"

  // Image URL
  $: src = page.mainImage ? urlFor(page.mainImage).height(600).url() : ""

  // Video URL
  $: videoUrl = page?.videoUrl ?? ""

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
  <div class="pop-up {page?.layout ?? ''}">
    <!-- CLOSE -->
    <a {href} class="close" data-sveltekit-noscroll><X /></a>
    <!-- MEDIA -->
    <div class="column media {page?.layout ?? ''}">
      <!-- AUDIO -->
      {#if page.layout == "audio"}
        <AudioPlayer
          audioFileUrl={page.audioFileUrl ?? ""}
          title={page.audioTitle}
        />
        <!-- AUDIO AND IMAGE -->
      {:else if page.layout === "audio-and-image"}
        <img {src} alt={title} draggable="false" />
        <AudioPlayer
          audioFileUrl={page.audioFileUrl ?? ""}
          title={page.audioTitle}
        />
        <!-- VIDEO -->
      {:else if page.layout === "video" && videoUrl}
        <VideoPlayer {videoUrl} aspectRatio={page.videoAspectRatio ?? "16-9"} />
        <!-- TEXT AND IMAGE / ONLY IMAGE / ONLY TEXT -->
      {:else}
        <img {src} alt={title} draggable="false" />
      {/if}
    </div>
    <!-- TEXT -->
    <div class="column text">
      <h2>{title}</h2>
      <div class="content">{@html renderBlockText(content)}</div>
    </div>
  </div>
</div>

<style lang="scss">
  @import "../../styles/index.scss";

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
      width: 1200px;
      max-width: 90vw;
      max-height: 90vh;
      padding: var(--total-margin);
      background: var(--background-color);
      border: 1px solid var(--accent-color);
      position: relative;
      display: flex;

      width: auto;

      @include screen-size("phone") {
        display: block;
        overflow-y: auto;
        padding-bottom: 10em;
      }

      @include screen-size("phone") {
        height: 100vh;
        width: 100vw;
        max-width: 100vw;
        max-height: 100vh;
        border: none;
        flex-direction: column;
        padding-top: 60px;
      }

      .close {
        position: absolute;
        top: 5px;
        right: 5px;
        color: var(--accent-color);

        @include screen-size("phone") {
          position: fixed;
          top: 15px;
          right: 20px;
        }

        &:hover {
          color: var(--foreground-color);
        }
      }

      .column {
        width: 50%;

        @include screen-size("phone") {
          width: 100%;
        }

        &.media {
          margin-right: var(--total-margin);
          line-height: 0;
          max-height: 100%;

          img {
            line-height: 0;
            max-width: 100%;
            max-height: 100%;
            display: block;
            margin-left: auto;
            margin-right: auto;
          }

          &.audio-and-image {
            img {
              max-height: calc(100% - 80px);

              @include screen-size("phone") {
                max-height: 400px;
              }
            }
          }

          @include screen-size("phone") {
            margin-bottom: var(--total-margin);
          }
        }

        &.text {
          overflow-y: auto;
          padding-right: var(--inner-margin);
          position: relative;
          top: -5px;

          @include screen-size("phone") {
            overflow-y: unset;
          }

          h2 {
            margin-bottom: 1em;
          }

          .content {
            white-space: normal;
            overflow-wrap: break-word;
            hyphens: auto;
          }
        }
      }

      &.only-text {
        width: 70ch;

        @include screen-size("phone") {
          height: 100vh;
          width: 100vw;
        }

        .media {
          display: none;
        }

        .text {
          width: 100%;
        }
      }

      &.only-image {
        width: auto;
        display: inline-block;
        max-height: 80vh;

        @include screen-size("phone") {
          max-height: 100vh;
          height: 100vh;
          width: 100vw;
        }

        .text {
          display: none;
        }

        .media {
          display: inline-block;
          width: auto;
          padding-right: 0;
          margin-right: 0;

          img {
            display: block; /* Ensure no extra inline spacing */
            width: auto;
            height: auto;
            max-width: 100%;
            max-height: 100%;
            max-height: calc(
              80vh - 60px
            ); /* Constrain height to viewport height */
            object-fit: contain; /* Ensure the image fits within the bounds */
          }
        }
      }
    }
  }
</style>
