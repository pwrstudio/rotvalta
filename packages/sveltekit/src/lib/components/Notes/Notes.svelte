<script lang="ts">
  import { LANGUAGE } from "$lib/enums"
  import type { Labels } from "$lib/types"
  import type { ArchivalNote, FieldNote } from "@sanity-types"

  import NoteItem from "$lib/components/Notes/NoteItem.svelte"

  export let language: LANGUAGE
  export let fieldNotes: FieldNote[]
  export let archivalNotes: ArchivalNote[]
  export let labels: Labels

  let notesEl: HTMLDivElement
</script>

<div class="notes" bind:this={notesEl}>
  <div class="inner">
    <!-- ARCHIVAL NOTES -->
    <div class="line archival-notes">
      <!-- LABEL -->
      <div class="label">
        {language === LANGUAGE.ENGLISH
          ? labels.archivalNotes.en
          : labels.archivalNotes.se}
      </div>
      <!-- NOTES -->
      <div class="note-container">
        {#each archivalNotes as note}
          <NoteItem {note} {language} />
          <NoteItem {note} {language} />
          <NoteItem {note} {language} />
          <NoteItem {note} {language} />
          <NoteItem {note} {language} />
          <NoteItem {note} {language} />
        {/each}
      </div>
    </div>

    <!-- FIELD NOTES -->
    <div class="line field-notes">
      <!-- LABEL -->
      <div class="label">
        {language === LANGUAGE.ENGLISH
          ? labels.fieldNotes.en
          : labels.fieldNotes.se}
      </div>
      <!-- NOTES -->
      <div class="note-container">
        {#each fieldNotes as note}
          <NoteItem {note} {language} />
        {/each}
      </div>
    </div>
  </div>
</div>

<style lang="scss">
  .notes {
    position: absolute;
    top: 60px;
    left: 480px;
    height: calc(100vh - 120px);
    width: calc(100vw - 480px);
    background: pink;
    position: relative;
    overflow-x: scroll;
    display: flex;
    align-items: center;
    line-height: 0;

    .inner {
      .line {
        padding-left: 40px;
        position: relative;
        background: yellow;
        display: inline-block;
        padding-right: 40px;

        &.archival-notes {
          margin-bottom: 40px;
        }

        .label {
          position: absolute;
          bottom: 0;
          left: 20px;
          background: red;
          transform: rotateZ(-90deg);
          transform-origin: bottom left;
        }
      }
    }

    .note-container {
      display: flex;
      // display: none;
    }
  }
</style>
