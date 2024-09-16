<script lang="ts">
  import type {
    ArchivalNote,
    Homepage,
    Page,
    FieldNote,
    Conversation,
  } from "@sanity-types"
  import type { Labels } from "$lib/types"
  import { LANGUAGE } from "$lib/enums"

  import About from "$lib/components/About/About.svelte"
  import Notes from "$lib/components/Notes/Notes.svelte"
  import Conversations from "$lib/components/Conversations/Conversations.svelte"
  import LanguageSwitch from "$lib/components/LanguageSwitch/LanguageSwitch.svelte"
  import NavBar from "$lib/components/NavBar/NavBar.svelte"

  let language = LANGUAGE.SWEDISH

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

<LanguageSwitch {language} />
<NavBar {language} {pages} {labels} />

<div class="above-fold">
  <About {language} {homepage} />
  <Notes {language} {archivalNotes} {fieldNotes} {labels} />
</div>

<div class="below-fold">
  <Conversations {language} {conversations} {labels} />
</div>
