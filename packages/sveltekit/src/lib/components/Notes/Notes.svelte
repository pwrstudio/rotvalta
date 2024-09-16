<script lang="ts">
  import { LANGUAGE } from "$lib/enums"
  import type { Labels } from "$lib/types"
  import type { ArchivalNote, FieldNote } from "@sanity-types"

  export let language: LANGUAGE
  export let fieldNotes: FieldNote[]
  export let archivalNotes: ArchivalNote[]
  export let labels: Labels
</script>

<div class="notes">
  <!-- ARCHIVAL NOTES -->
  <div class="archival-notes">
    <!-- LABEL -->
    {#if language === LANGUAGE.ENGLISH}
      <h2>{labels.archivalNotes.en}</h2>
    {:else}
      <h2>{labels.archivalNotes.se}</h2>
    {/if}

    {#each archivalNotes as note}
      {#if language === LANGUAGE.ENGLISH}
        <div>{note.title_en}</div>
      {:else}
        <div>{note.title_se}</div>
      {/if}
    {/each}
  </div>

  <!-- FIELD NOTES -->
  <div class="field-notes">
    <!-- LABEL -->
    {#if language === LANGUAGE.ENGLISH}
      <h2>{labels.fieldNotes.en}</h2>
    {:else}
      <h2>{labels.fieldNotes.se}</h2>
    {/if}

    {#each fieldNotes as note}
      {#if language === LANGUAGE.ENGLISH}
        <div>{note.title_en}</div>
      {:else}
        <div>{note.title_se}</div>
      {/if}
    {/each}
  </div>
</div>

<style lang="scss">
  .notes {
    height: 80vh;
    background: pink;
    margin: 40px;
  }
</style>
