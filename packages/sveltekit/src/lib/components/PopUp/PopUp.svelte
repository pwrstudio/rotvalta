<script lang="ts">
  import { LANGUAGE } from "$lib/enums"
  import { fade } from "svelte/transition"
  import type {
    Page,
    FieldNote,
    ArchivalNote,
    Conversation,
  } from "@sanity-types"
  import { renderBlockText, toPlainText, urlFor } from "$lib/modules/sanity"
  import { goto } from "$app/navigation"
  import X from "$lib/components/Graphics/X.svelte"
  import VideoPlayer from "$lib/components/VideoPlayer/VideoPlayer.svelte"
  import AudioPlayer from "$lib/components/AudioPlayer/AudioPlayer.svelte"

  export let page: Page | FieldNote | ArchivalNote | Conversation
  export let language: LANGUAGE

  console.log(page)

  function replaceNbspInText(array) {
    if (!array) return []
    return array.map(item => {
      if (item.children && Array.isArray(item.children)) {
        item.children = item.children.map(child => {
          if (child.text && typeof child.text === "string") {
            child.text = child.text.replace(/\u00A0/g, " ") // Replace non-breaking space with a regular space
          }
          return child
        })
      }
      return item
    })
  }

  $: title = language === LANGUAGE.ENGLISH ? page.title_en : page.title_se
  $: content =
    language === LANGUAGE.ENGLISH
      ? (replaceNbspInText(page.content_en?.content) ?? [])
      : (replaceNbspInText(page.content_se?.content) ?? [])
  $: href = language === LANGUAGE.ENGLISH ? "/en" : "/"
  $: src = page.mainImage ? urlFor(page.mainImage).height(600).url() : ""
  $: videoUrl = page?.videoUrl ?? ""

  $: hideMedia = page.hideMediaInPopup || (!src && !videoUrl)
  $: hideText = content.length === 0 || !toPlainText(content).trim()
  $: isConversation = page._type === "conversation"

  $: console.log("content", content)
  $: console.log("hideText", hideText)

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
      width: 1200px;
      max-width: 90vw;
      max-height: 70vh;
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
      }

      .column {
        width: 50%;

        &.media {
          margin-right: var(--total-margin);
          line-height: 0;
          max-height: 100%;

          img {
            line-height: 0;
            max-width: 100%;
            max-height: 100%;
          }
        }

        &.text {
          overflow-y: auto;
          padding-right: var(--inner-margin);
          position: relative;
          top: -5px;

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

      &.hideMedia {
        .media {
          display: none;
        }

        .text {
          width: 100%;
        }
      }

      &.hideText {
        width: 600px;

        .text {
          display: none;
        }

        .media {
          width: 100%;
          width: auto;
          padding-right: 0;
          margin-right: 0;
        }
      }

      &.isConversation {
        padding-bottom: var(--total-margin);
      }
    }
  }
</style>
