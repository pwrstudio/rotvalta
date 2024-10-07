<script lang="ts">
  import { LANGUAGE } from "$lib/enums"
  import type { Conversation } from "@sanity-types"
  import { splitArray } from "$lib/modules/utils"

  import ConversationItem from "$lib/components/Conversations/ConversationItem.svelte"

  export let language: LANGUAGE
  export let conversations: Conversation[]

  const [firstConversationGroup, secondConversationGroup] =
    splitArray(conversations)
</script>

<div id="conversations" class="conversations-container">
  <!-- FIRST COLUMN -->
  <div class="column first">
    {#each firstConversationGroup as conversation}
      <ConversationItem {language} {conversation} />
    {/each}
  </div>
  <!-- SECOND COLUMN -->
  <div class="column second">
    {#each secondConversationGroup as conversation}
      <ConversationItem {language} {conversation} />
    {/each}
  </div>
</div>

<style lang="scss">
  .conversations-container {
    border-top: 1px solid var(--accent-color);
    padding-inline: var(--total-margin);
    width: 100%;
    padding-top: var(--double-total-margin);
    display: inline-flex;
    padding-bottom: var(--double-total-margin);

    .column {
      width: 50%;
      height: 100%;

      &.first {
        border-right: 1px solid var(--accent-color);
        padding-right: var(--total-margin);
      }

      &.second {
        padding-left: var(--total-margin);
      }
    }
  }
</style>
