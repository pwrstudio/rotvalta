<script lang="ts">
  import { onMount } from "svelte"
  import type {
    ArchivalNote,
    Homepage,
    Page,
    FieldNote,
    Conversation,
  } from "@sanity-types"
  import type { Labels } from "$lib/types"
  import {
    conversationsActive,
    languageStore,
    horizonallyScrolled,
    showLeftArrow,
  } from "$lib/stores"

  import About from "$lib/components/About/About.svelte"
  import Notes from "$lib/components/Notes/Notes.svelte"
  import Conversations from "$lib/components/Conversations/Conversations.svelte"
  import LanguageSwitch from "$lib/components/LanguageSwitch/LanguageSwitch.svelte"
  import NavBar from "$lib/components/Navigation/NavBar.svelte"
  import ScrollIndicator from "$lib/components/Navigation/ScrollIndicator.svelte"

  let scrollContainer: HTMLDivElement

  $: language = $languageStore

  export let data: {
    homepage: Homepage
    pages: Page[]
    archivalNotes: ArchivalNote[]
    fieldNotes: FieldNote[]
    conversations: Conversation[]
    labels: Labels
  }

  const { homepage, pages, archivalNotes, fieldNotes, conversations, labels } =
    data

  conversationsActive.set((conversations ?? []).length > 0)

  onMount(() => {
    function handleScroll() {
      horizonallyScrolled.set(scrollContainer.scrollLeft > 200)
      showLeftArrow.set(scrollContainer.scrollLeft > 600)
    }

    function preventBackNavigation(event: WheelEvent) {
      const deltaX = event.deltaX
      const atLeftEdge = scrollContainer.scrollLeft === 0

      if (atLeftEdge && deltaX < 0) {
        event.preventDefault()
      }
    }

    scrollContainer.addEventListener("scroll", handleScroll)
    scrollContainer.addEventListener("wheel", preventBackNavigation, {
      passive: false,
    })

    return () => {
      scrollContainer.removeEventListener("scroll", handleScroll)
      scrollContainer.removeEventListener("wheel", preventBackNavigation)
    }
  })
</script>

<div class="above-fold">
  <LanguageSwitch {language} />
  <NavBar {language} {pages} {labels} />
  <div class="scroll-container" bind:this={scrollContainer}>
    <About {language} {homepage} />
    <Notes {language} {archivalNotes} {fieldNotes} {labels} />
    <ScrollIndicator {scrollContainer} />
  </div>
</div>

{#if $conversationsActive}
  <div class="below-fold">
    <Conversations {language} {conversations} />
  </div>
{/if}

<slot />

<style lang="scss">
  .above-fold {
    height: 100vh;
    width: 100vw;
    position: relative;
    overflow: hidden;

    .scroll-container {
      display: flex;
      flex-wrap: nowrap;
      overflow-y: auto;
      height: 100vh;
    }
  }

  .below-fold {
    width: 100vw;
    display: flex;
    overflow: hidden;
  }
</style>
