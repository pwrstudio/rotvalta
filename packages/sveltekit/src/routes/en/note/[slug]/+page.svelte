<script lang="ts">
  import { LANGUAGE } from "$lib/enums"
  import type { ArchivalNote, FieldNote } from "@sanity-types"
  import { languageStore } from "$lib/stores"
  languageStore.set(LANGUAGE.ENGLISH)

  import PopUp from "$lib/components/PopUp/PopUp.svelte"

  export let data: {
    note: FieldNote | ArchivalNote
  }

  $: note = data.note
  $: language = $languageStore
</script>

<PopUp page={note} {language} />
