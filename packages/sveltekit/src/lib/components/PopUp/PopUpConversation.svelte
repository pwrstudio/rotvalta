<script lang="ts">
  import { LANGUAGE } from "$lib/enums"
  import type { Conversation } from "@sanity-types"
  import { goto } from "$app/navigation"

  import X from "$lib/components/Graphics/X.svelte"
  import VideoPlayer from "$lib/components/VideoPlayer/VideoPlayer.svelte"

  export let page: Conversation
  export let language: LANGUAGE

  // Return URL for close button
  $: href = language === LANGUAGE.ENGLISH ? "/en" : "/"

  // Video URL
  $: videoUrl = page?.videoUrl ?? ""

  function closePopUp(event: MouseEvent) {
    if (event.target === event.currentTarget) {
      goto(href, { noScroll: true })
    }
  }
</script>

<div role="presentation" class="pop-up-container" on:click={closePopUp}>
  <div class="pop-up">
    <!-- CLOSE -->
    <a {href} class="close" data-sveltekit-noscroll><X /></a>
    <!-- VIDEO -->
    <VideoPlayer {videoUrl} aspectRatio={page.videoAspectRatio ?? "16-9"} />
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
      width: 800px;
      max-width: 75vw;
      max-height: 70vh;
      padding: var(--total-margin);
      background: var(--background-color);
      border: 1px solid var(--accent-color);
      position: relative;
      display: flex;

      @include screen-size("phone") {
        height: 100vh;
        width: 100vw;
        max-width: 100vw;
        max-height: 100vh;
        border: none;
        padding-top: 60px;
      }

      .close {
        position: absolute;
        top: 5px;
        right: 5px;
        color: var(--accent-color);

        @include screen-size("phone") {
          top: 15px;
          right: 20px;
        }

        &:hover {
          color: var(--foreground-color);
        }
      }

      padding-bottom: var(--total-margin);
    }
  }
</style>
