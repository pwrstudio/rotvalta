<script lang="ts">
  import { LANGUAGE } from "$lib/enums"
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
      ? replaceNbspInText(page.content_en?.content ?? [])
      : replaceNbspInText(page.content_se?.content ?? [])

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

<!-- layout?:
| 'text-and-image'
| 'only-image'
| 'only-text'
| 'video'
| 'video-and-text'
| 'audio'
| 'audio-and-text'
| 'audio-and-image'
| 'audio-image-and-text' -->

<div role="presentation" class="pop-up-container" on:click={closePopUp}>
  <div class="pop-up {page?.layout ?? ''}">
    <a {href} class="close" data-sveltekit-noscroll><X /></a>

    <!-- MEDIA COLUMN -->
    {#if page?.layout !== "only-text"}
      <div class="column media">
        <!-- Media title -->
        <!-- layout?:
          | 'only-image'
          | 'video'
          | 'audio'
          | 'audio-and-image'
        -->
        {#if !page?.layout?.includes("text")}
          <div class="media-title">
            <h2>{title}</h2>
          </div>
        {/if}

        <!-- Video layouts -->
        <!-- 
          | 'video'
          | 'video-and-text' 
        -->
        {#if page?.layout?.includes("video") && videoUrl}
          <VideoPlayer
            {videoUrl}
            aspectRatio={page.videoAspectRatio ?? "16-9"}
          />
        {/if}

        <!-- Image layouts -->
        <!--
          | 'text-and-image'
          | 'only-image'
          | 'audio-and-image'
          | 'audio-image-and-text'
        -->
        {#if page?.layout?.includes("image")}
          <img {src} alt={title} draggable="false" />
        {/if}

        <!-- Audio layouts -->
        <!--
          | 'audio'
          | 'audio-and-text'
          | 'audio-and-image'
          | 'audio-image-and-text'
        -->
        {#if page?.layout?.includes("audio")}
          <AudioPlayer
            audioFileUrl={page.audioFileUrl ?? ""}
            title={page.audioTitle}
          />
        {/if}
      </div>
    {/if}

    <!-- TEXT COLUMN -->
    <!--
      | 'text-and-image'
      | 'only-text'
      | 'video-and-text'
      | 'audio-and-text'
      | 'audio-image-and-text' 
    -->
    {#if page?.layout?.includes("text") && content.length > 0}
      <div class="column text">
        <h2>{title}</h2>
        <div class="content">{@html renderBlockText(content)}</div>
      </div>
    {/if}
  </div>
</div>

<style lang="scss">
  @import "../../styles/index.scss";

  .pop-up-container {
    position: fixed;
    z-index: var(--z-modal);
    top: 0;
    left: 0;
    width: 100dvw;
    height: 100dvh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgba(255, 255, 255, 0.8);

    .pop-up {
      width: 1200px;
      max-width: 75dvw;
      max-height: 90dvh;
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
        height: 100dvh;
        width: 100dvw;
        max-width: 100dvw;
        max-height: 100dvh;
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
              min-width: 460px;

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
            // overflow-wrap: break-word;
            // hyphens: auto;
          }
        }
      }

      &.only-text {
        width: 70ch;

        @include screen-size("phone") {
          height: 100dvh;
          width: 100dvw;
        }

        .media {
          display: none;
        }

        .text {
          width: 100%;
        }
      }

      &.only-image,
      &.audio-and-image,
      &.video,
      &.audio {
        width: auto;
        display: inline-block;
        max-height: 80dvh;
        overflow: hidden;

        @include screen-size("phone") {
          max-height: 100dvh;
          height: 100dvh;
          width: 100dvw;
        }

        .text {
          display: none;
        }

        .media {
          display: inline-block;
          width: auto;
          padding-right: 0;
          margin-right: 0;
          max-height: 80dvh;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;

          img,
          .video-player {
            max-height: 60dvh;
            width: auto;
            max-width: 100%;
            object-fit: contain;
          }

          .audio-player {
            width: 100%;
            min-width: 0;
          }
        }
      }

      &.audio-and-image {
        max-width: 600px;
      }
    }
  }

  .media-title {
    padding: 10px;
    margin-bottom: 0.5em;
    display: inline-block;
    line-height: 1.1em;
    min-height: fit-content;
  }
</style>
