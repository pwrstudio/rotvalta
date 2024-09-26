<script lang="ts">
  import { LANGUAGE } from "$lib/enums"
  import type { Page } from "@sanity-types"
  import { languageStore } from "$lib/stores"
  languageStore.set(LANGUAGE.ENGLISH)

  import PopUp from "$lib/components/PopUp/PopUp.svelte"

  export let data: {
    page: Page
  }

  $: page = data.page
  $: language = $languageStore
</script>

<PopUp {page} {language} />
