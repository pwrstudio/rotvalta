<script lang="ts">
  import type {
    ArchivalNote,
    Homepage,
    Page,
    FieldNote,
    Conversation,
  } from "@sanity-types"
  import type { Labels } from "$lib/types"
  import { languageStore } from "$lib/stores"

  import About from "$lib/components/About/About.svelte"
  import Notes from "$lib/components/Notes/Notes.svelte"
  import Conversations from "$lib/components/Conversations/Conversations.svelte"
  import LanguageSwitch from "$lib/components/LanguageSwitch/LanguageSwitch.svelte"
  import NavBar from "$lib/components/NavBar/NavBar.svelte"

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
</script>

<div class="above-fold">
  <LanguageSwitch {language} />
  <NavBar {language} {pages} {labels} />
  <About {language} {homepage} />
  <Notes {language} {archivalNotes} {fieldNotes} {labels} />
</div>

<div class="below-fold">
  <Conversations {language} {conversations} {labels} />
</div>

<slot />

<style lang="scss">
  .above-fold {
    height: 100vh;
    background: red;
    width: 100vw;
    position: relative;
  }

  .below-fold {
    height: 100vh;
    background: blue;
    width: 100vw;
    display: flex;
  }
</style>
