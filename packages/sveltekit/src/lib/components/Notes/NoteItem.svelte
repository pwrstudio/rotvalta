<script lang="ts">
  import type { ArchivalNote, FieldNote } from "@sanity-types"
  import { LANGUAGE } from "$lib/enums"
  import { urlFor } from "$lib/modules/sanity"

  export let language: LANGUAGE
  export let note: FieldNote | ArchivalNote

  $: title = language === LANGUAGE.ENGLISH ? note.title_en : note.title_se
  $: href =
    language === LANGUAGE.ENGLISH
      ? `/en/note/${note.slug?.current ?? ""}`
      : `/note/${note.slug?.current ?? ""}`
  $: src = urlFor(note.mainImage).height(200).url()
</script>

<a class="note-item" {href} data-sveltekit-noscroll>
  <div class="image">
    <img {src} alt={title} draggable="false" />
  </div>
</a>

<style lang="scss">
  .note-item {
    line-height: 0;
    user-select: none;

    &:hover {
      opacity: 0.8;
    }
  }
</style>
