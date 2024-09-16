<script lang="ts">
  import type { Labels } from "$lib/types"
  import { LANGUAGE } from "$lib/enums"
  import type { Conversation } from "@sanity-types"

  export let language: LANGUAGE
  export let conversations: Conversation[]
  export let labels: Labels
</script>

<div class="conversations-container">
  <!-- LABEL -->
  {#if language === LANGUAGE.ENGLISH}
    <h2>{labels.conversations.en}</h2>
  {:else}
    <h2>{labels.conversations.se}</h2>
  {/if}

  {#each conversations as conversation}
    {#if language === LANGUAGE.ENGLISH}
      <div>{conversation.title_en}</div>
    {:else}
      <div>{conversation.title_se}</div>
    {/if}
  {/each}
</div>
