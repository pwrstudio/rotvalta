<script lang="ts">
  import { LANGUAGE } from "$lib/enums"
  import type { Conversation } from "@sanity-types"
  import { languageStore } from "$lib/stores"
  languageStore.set(LANGUAGE.ENGLISH)

  import PopUpConversation from "$lib/components/PopUp/PopUpConversation.svelte"

  export let data: {
    conversation: Conversation
  }

  $: conversation = data.conversation
  $: language = $languageStore
</script>

<PopUpConversation page={conversation} {language} />
