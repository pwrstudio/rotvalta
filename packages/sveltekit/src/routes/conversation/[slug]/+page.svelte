<script lang="ts">
  import { LANGUAGE } from "$lib/enums"
  import type { Conversation } from "@sanity-types"
  import { languageStore } from "$lib/stores"
  languageStore.set(LANGUAGE.SWEDISH)

  import PopUp from "$lib/components/PopUp/PopUp.svelte"

  export let data: {
    conversation: Conversation
  }

  $: conversation = data.conversation
  $: language = $languageStore

  $: console.log("conversation", conversation)
</script>

<PopUp page={conversation} {language} />
