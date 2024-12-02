<script lang="ts">
  import { showLeftArrow } from "$lib/stores"
  import ArrowRight from "$lib/components/Graphics/ArrowRight.svelte"
  import ArrowLeft from "$lib/components/Graphics/ArrowLeft.svelte"
  import { fade } from "svelte/transition"

  export let scrollContainer: HTMLDivElement

  function scrollRight() {
    if (scrollContainer) {
      scrollContainer.scrollBy({
        left: window.innerWidth / 2,
        behavior: "smooth",
      })
    }
  }

  function scrollLeft() {
    if (scrollContainer) {
      if (scrollContainer.scrollLeft < 800) {
        scrollContainer.scrollTo({
          left: 0,
          behavior: "smooth",
        })
      } else {
        scrollContainer.scrollBy({
          left: -window.innerWidth / 2,
          behavior: "smooth",
        })
      }
    }
  }
</script>

<!-- RIGHT ARROW -->
<button
  class="scroll-indicator right"
  out:fade={{ duration: 300 }}
  on:click={scrollRight}
>
  <ArrowRight />
</button>

<!-- LEFT ARROW -->
{#if $showLeftArrow}
  <button
    class="scroll-indicator left"
    out:fade={{ duration: 300 }}
    on:click={scrollLeft}
  >
    <ArrowLeft />
  </button>
{/if}

<style lang="scss">
  @import "../../styles/index.scss";

  .scroll-indicator {
    position: absolute;
    pointer-events: auto;
    z-index: var(--z-nav);
    top: 50%;
    user-select: none;
    color: var(--accent-color);
    font-size: 0.8em;
    transform: translateY(-50%);
    cursor: pointer;
    background: transparent;
    border: 0;
    outline: none;

    @include screen-size("phone") {
      top: 75%;
    }

    &.right {
      right: -50px;

      @include screen-size("phone") {
        right: -25px;
      }
    }

    &.left {
      left: -50px;

      @include screen-size("phone") {
        left: -25px;
      }
    }
  }
</style>
