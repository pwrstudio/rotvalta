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
  :root {
    --small-width: 120px;
    --normal-width: 160px;
    --large-width: 200px;
  }

  .note-item {
    line-height: 0;
    user-select: none;
    width: var(--normal-width);

    img {
      width: 100%;
      height: auto;
      object-fit: cover;
      max-height: 300px;
    }

    &.small {
      width: var(--small-width);
    }

    &.large {
      width: var(--large-width);
    }

    &:hover {
      opacity: 0.8;
    }
  }
</style>
