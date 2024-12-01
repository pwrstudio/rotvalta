<script lang="ts">
  import { LANGUAGE } from "$lib/enums"
  import type { ArchivalNote, FieldNote } from "@sanity-types"
  import { languageStore } from "$lib/stores"
  languageStore.set(LANGUAGE.SWEDISH)

  import PopUp from "$lib/components/PopUp/PopUp.svelte"
  import Metadata from "$lib/components/Metadata/Metadata.svelte"

  export let data: {
    note: FieldNote | ArchivalNote
  }

  $: note = data.note
  $: language = $languageStore
</script>

<Metadata page={note} {language} />
<PopUp page={note} {language} />
