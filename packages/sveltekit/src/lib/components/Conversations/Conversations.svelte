<script lang="ts">
  import { LANGUAGE } from "$lib/enums"
  import type { Conversation } from "@sanity-types"

  export let language: LANGUAGE
  export let conversations: Conversation[]
</script>

<div class="conversations-container">
  {#each conversations as conversation}
    {#if language === LANGUAGE.ENGLISH}
      <div>{conversation.title_en}</div>
    {:else}
      <div>{conversation.title_se}</div>
    {/if}
  {/each}
</div>
