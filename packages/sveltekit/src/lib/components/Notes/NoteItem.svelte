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
  $: src = urlFor(note.mainImage).width(300).url()
</script>

<a class="note-item {note.imageSize}" {href} data-sveltekit-noscroll>
  <img {src} alt={title} draggable="false" />
</a>

<style lang="scss">
  .note-item {
    line-height: 0;
    user-select: none;
    width: 200px;

    img {
      width: 100%;
      height: auto;
      object-fit: cover;
      max-height: 400px;
    }

    &.small {
      width: 150px;
    }

    &.large {
      width: 250px;
    }

    &:hover {
      opacity: 0.8;
    }
  }
</style>
