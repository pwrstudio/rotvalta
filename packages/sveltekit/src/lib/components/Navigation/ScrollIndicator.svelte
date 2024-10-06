<script>
  import { horizonallyScrolled } from "$lib/stores"
  import ArrowRight from "../Graphics/ArrowRight.svelte"
  import { fade } from "svelte/transition"
</script>

{#if !$horizonallyScrolled}
  <div class="scroll-indicator" out:fade={{ duration: 300 }}>
    <ArrowRight />
  </div>
{/if}

<style lang="scss">
  .scroll-indicator {
    position: absolute;
    pointer-events: none;
    z-index: var(--z-nav);
    top: 50%;
    right: 0;
    user-select: none;
    color: var(--accent-color);
    font-size: 0.8em;
    transform: translateY(-50%);
  }
</style>
