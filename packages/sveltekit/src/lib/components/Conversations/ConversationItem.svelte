<script lang="ts">
  import type { Conversation } from "@sanity-types"
  import { LANGUAGE } from "$lib/enums"
  import { urlFor } from "$lib/modules/sanity"
  import { renderBlockText } from "$lib/modules/sanity"

  import VideoPosterImage from "$lib/components/Conversations/VideoPosterImage.svelte"

  export let language: LANGUAGE
  export let conversation: Conversation

  $: title =
    language === LANGUAGE.ENGLISH
      ? (conversation.title_en ?? "")
      : (conversation.title_se ?? "")
  $: href =
    language === LANGUAGE.ENGLISH
      ? `/en/conversation/${conversation.slug?.current ?? ""}`
      : `/conversation/${conversation.slug?.current ?? ""}`
  $: src = urlFor(conversation.mainImage).height(200).saturation(-100).url()
  $: content =
    language === LANGUAGE.ENGLISH
      ? (conversation.content_en?.content ?? [])
      : (conversation.content_se?.content ?? [])
</script>

<div class="conversation-item">
  <div class="content">
    {@html renderBlockText(content)}
  </div>
  <div class="image">
    <a {href} data-sveltekit-noscroll>
      <VideoPosterImage {src} {title} />
    </a>
  </div>
</div>

<style lang="scss">
  .conversation-item {
    display: flex;
    margin-bottom: var(--total-margin);
    padding-right: var(--outer-margin);

    .content {
      flex: 1;
      padding-right: var(--outer-margin);
      font-size: var(--font-size-normal);
    }

    a {
      img {
        &:hover {
          opacity: 0.8;
        }
      }
    }
  }
</style>
