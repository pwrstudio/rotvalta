<script lang="ts">
  import { LANGUAGE } from "$lib/enums"
  import type { Page } from "@sanity-types"
  import type { Labels } from "$lib/types"

  import X from "$lib/components/Graphics/X.svelte"
  import MenuItem from "$lib/components/Navigation/MenuItem.svelte"
  import Hamburger from "$lib/components/Graphics/Hamburger.svelte"

  export let language: LANGUAGE
  export let pages: Page[]
  export let labels: Labels

  let open = false

  function toggleMenu() {
    open = !open
  }
</script>

{#if open}
  <!-- MENU -->
  <div class="menu">
    <!-- CLOSE MENU BUTTON -->
    <button class="close" on:click={toggleMenu}><X /></button>
    <!-- MENU ITEMS -->
    <div class="inner">
      <MenuItem
        page={undefined}
        directHref={"#notes"}
        directTitle={"Notes"}
        {language}
        on:clicked={toggleMenu}
      />
      <MenuItem
        page={undefined}
        directHref={"#conversations"}
        directTitle={"Conversations"}
        {language}
        on:clicked={toggleMenu}
      />
      {#each pages as page}
        <MenuItem {page} {language} on:clicked={toggleMenu} />
      {/each}
    </div>
  </div>
{:else}
  <!-- OPEN MENU BUTTON -->
  <button class="menu-toggle" on:click={toggleMenu}>
    <Hamburger />
  </button>
{/if}

<style lang="scss">
  @import "../../styles/index.scss";

  .menu-toggle {
    position: fixed;
    z-index: var(--z-nav);
    top: 15px;
    right: 20px;
    display: none;
    color: var(--foreground-color);

    &:hover {
      color: var(--accent-color);
    }

    @include screen-size("phone") {
      display: block;
    }
  }

  .menu {
    position: fixed;
    z-index: var(--z-phone-nav);
    top: 0;
    left: 0;
    width: 100dvw;
    height: 100ch;
    display: none;
    background: var(--background-color);

    @include screen-size("phone") {
      display: block;
    }

    .close {
      position: fixed;
      top: 15px;
      right: 20px;
      color: var(--foreground-color);

      &:hover {
        color: var(--accent-color);
      }
    }

    .inner {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      font-size: 32px;
      padding-top: 20dvh;
    }
  }
</style>
