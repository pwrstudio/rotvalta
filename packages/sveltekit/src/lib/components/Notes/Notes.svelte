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
      <div class="label archival">
        {language === LANGUAGE.ENGLISH
          ? labels.archivalNotes.en
          : labels.archivalNotes.se}
      </div>
      <!-- NOTES -->
      <div class="note-container archival-notes">
        {#each archivalNotes as note}
          <NoteItem {note} {language} />
        {/each}
      </div>
    </div>

    <!-- FIELD NOTES -->
    <div class="line field-notes">
      <!-- LABEL -->
      <div class="label field">
        {language === LANGUAGE.ENGLISH
          ? labels.fieldNotes.en
          : labels.fieldNotes.se}
      </div>
      <!-- NOTES -->
      <div class="note-container field-notes">
        {#each fieldNotes as note}
          <NoteItem {note} {language} />
        {/each}
      </div>
    </div>
  </div>
</div>

<style lang="scss">
  @import "../../styles/index.scss";

  .notes {
    height: 100dvh;
    position: relative;
    display: flex;
    align-items: center;
    line-height: 0;

    .inner {
      display: flex;
      flex-direction: column;

      .line {
        padding-left: 40px;
        position: relative;
        display: inline;
        padding-right: var(--double-total-margin);
        height: 300px;
        padding-bottom: 0;
        display: flex;

        &.archival-notes {
          margin-bottom: 8em;
        }

        .note-container {
          display: flex;

          &.archival-notes {
            align-items: flex-end;
          }

          &.field-notes {
            align-items: flex-start;
          }
        }

        .label {
          position: absolute;
          bottom: 0;
          left: 20px;
          transform: rotateZ(-90deg);
          transform-origin: bottom left;
          user-select: none;

          &.field {
            bottom: unset;
            top: 0;
            transform: rotateZ(-90deg) translateX(-100%);
          }
        }
      }
    }
  }
</style>
