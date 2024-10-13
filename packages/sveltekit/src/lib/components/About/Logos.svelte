<script lang="ts">
  import type { Logo } from "$lib/types"
  import LogoItem from "$lib/components/About/LogoItem.svelte"

  export let logos: Logo[] | undefined
</script>

{#if logos}
  <div class="logos-container">
    {#each logos as logo}
      <LogoItem {logo} />
    {/each}
  </div>
{/if}

<style lang="scss">
  .logos-container {
    display: flex;
    gap: 10px;
  }
</style>
