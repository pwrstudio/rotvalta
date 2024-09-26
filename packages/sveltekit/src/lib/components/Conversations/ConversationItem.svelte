<script lang="ts">
  import type { Conversation } from "@sanity-types"
  import { LANGUAGE } from "$lib/enums"
  import { urlFor } from "$lib/modules/sanity"
  import { renderBlockText } from "$lib/modules/sanity"

  export let language: LANGUAGE
  export let conversation: Conversation

  $: title =
    language === LANGUAGE.ENGLISH
      ? conversation.title_en
      : conversation.title_se
  $: href =
    language === LANGUAGE.ENGLISH
      ? `/en/conversation/${conversation.slug?.current ?? ""}`
      : `/conversation/${conversation.slug?.current ?? ""}`
  $: src = urlFor(conversation.mainImage).height(200).url()
  $: content =
    language === LANGUAGE.ENGLISH
      ? (conversation.content_en?.content ?? [])
      : (conversation.content_se?.content ?? [])
</script>

<a class="conversation-item" {href} data-sveltekit-noscroll>
  <div class="image">
    <img {src} alt={title} />
  </div>
  <div class="content">
    {@html renderBlockText(content)}
  </div>
</a>

<style lang="scss">
  .conversation-item {
    line-height: 0;
  }
</style>
