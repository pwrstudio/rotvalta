<script lang="ts">
  import { LANGUAGE } from "$lib/enums"
  import type { ArchivalNote, FieldNote } from "@sanity-types"

  export let language: LANGUAGE
  export let fieldNotes: FieldNote[]
  export let archivalNotes: ArchivalNote[]
</script>

<div class="notes">
  <!-- ARCHIVAL NOTES -->
  <div class="archival-notes">
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
