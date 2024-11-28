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
  @import "../../styles/index.scss";

  .conversations-container {
    border-top: 1px solid var(--accent-color);
    padding-inline: var(--total-margin);
    width: 100%;
    padding-top: var(--double-total-margin);
    display: inline-flex;
    padding-bottom: var(--double-total-margin);

    @include screen-size("phone") {
      flex-wrap: wrap;
      height: auto;
    }

    .column {
      width: 50%;
      height: 100%;

      @include screen-size("phone") {
        width: 100%;
        height: auto;
      }

      &.first {
        border-right: 1px solid var(--accent-color);
        padding-right: var(--total-margin);

        @include screen-size("phone") {
          border-right: unset;
          padding-right: 0;
        }
      }

      &.second {
        padding-left: var(--total-margin);

        @include screen-size("phone") {
          padding-left: 0;
        }
      }
    }
  }
</style>
