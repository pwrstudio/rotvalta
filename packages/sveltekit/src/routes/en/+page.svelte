<script lang="ts">
  import type {
    ArchivalNote,
    Homepage,
    Page,
    FieldNote,
    Conversation,
  } from "@sanity-types"
  import { LANGUAGE } from "$lib/enums"

  import About from "$lib/components/About/About.svelte"
  import Notes from "$lib/components/Notes/Notes.svelte"
  import Conversations from "$lib/components/Conversations/Conversations.svelte"
  import LanguageSwitch from "$lib/components/LanguageSwitch/LanguageSwitch.svelte"

  let language = LANGUAGE.ENGLISH

  export let data: {
    homepage: Homepage
    pages: Page[]
    archivalNotes: ArchivalNote[]
    fieldNotes: FieldNote[]
    conversations: Conversation[]
  }

  const { homepage, pages, archivalNotes, fieldNotes, conversations } = data
</script>

<LanguageSwitch {language} />
<About {language} {homepage} {pages} />
<Notes {language} {archivalNotes} {fieldNotes} />
<Conversations {language} {conversations} />
