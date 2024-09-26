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
    <h2>
      {language === LANGUAGE.ENGLISH
        ? labels.archivalNotes.en
        : labels.archivalNotes.se}
    </h2>

    {#each archivalNotes as note}
      <div>{language === LANGUAGE.ENGLISH ? note.title_en : note.title_se}</div>
    {/each}
  </div>

  <!-- FIELD NOTES -->
  <div class="field-notes">
    <h2>
      {language === LANGUAGE.ENGLISH
        ? labels.fieldNotes.en
        : labels.fieldNotes.se}
    </h2>

    {#each fieldNotes as note}
      <div>{language === LANGUAGE.ENGLISH ? note.title_en : note.title_se}</div>
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
