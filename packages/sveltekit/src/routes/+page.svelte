<script lang="ts">
  import type {
    ArchivalNote,
    Homepage,
    Page,
    FieldNote,
    Conversation,
  } from "@sanity-types"
  import { renderBlockText } from "$lib/modules/sanity"

  export let data: {
    homepage: Homepage
    pages: Page[]
    archivalNotes: ArchivalNote[]
    fieldNotes: FieldNote[]
    conversations: Conversation[]
  }

  const { homepage, pages, archivalNotes, fieldNotes, conversations } = data
</script>

<!-- HOMEPAGE -->
<h1>{homepage.title_se} / {homepage.subTitle_se}</h1>
<h1>{homepage.title_en} / {homepage.subTitle_en}</h1>
<div class="content">
  {@html renderBlockText(homepage?.content_se?.content ?? [])}
</div>
<div class="content">
  {@html renderBlockText(homepage?.content_en?.content ?? [])}
</div>

<!-- PAGES -->
<div class="pages">
  <h3>Pages</h3>
  {#each pages as page}
    <div>{page.title_se}</div>
  {/each}
</div>

<!-- ARCHIVAL NOTES -->
<div class="archival-notes">
  <h3>Archival Notes</h3>
  {#each archivalNotes as note}
    <div>{note.title_se}</div>
  {/each}
</div>

<!-- FIELD NOTES -->
<div class="field-notes">
  <h3>Field Notes</h3>
  {#each fieldNotes as note}
    <div>{note.title_se}</div>
  {/each}
</div>

<!-- CONVERSATIONS -->
<div class="conversations">
  <h3>Conversations</h3>
  {#each conversations as conversation}
    <div>{conversation.title_se}</div>
  {/each}
</div>
