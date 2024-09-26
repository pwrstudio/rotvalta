<script lang="ts">
  import type { Labels } from "$lib/types"
  import { LANGUAGE } from "$lib/enums"
  import type { Conversation } from "@sanity-types"

  export let language: LANGUAGE
  export let conversations: Conversation[]
  export let labels: Labels
</script>

<div id="conversations" class="conversations-container">
  <!-- LABEL -->
  <h2>
    {language === LANGUAGE.ENGLISH
      ? labels.conversations.en
      : labels.conversations.se}
  </h2>

  {#each conversations as conversation}
    <div>
      {language === LANGUAGE.ENGLISH
        ? conversation.title_en
        : conversation.title_se}
    </div>
  {/each}
</div>
