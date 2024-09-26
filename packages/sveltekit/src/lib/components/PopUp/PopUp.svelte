<script lang="ts">
  import { LANGUAGE } from "$lib/enums"
  import type {
    Page,
    FieldNote,
    ArchivalNote,
    Conversation,
  } from "@sanity-types"
  import { renderBlockText } from "$lib/modules/sanity"

  export let page: Page | FieldNote | ArchivalNote | Conversation
  export let language: LANGUAGE

  $: title = language === LANGUAGE.ENGLISH ? page.title_en : page.title_se
  $: content =
    language === LANGUAGE.ENGLISH
      ? (page.content_en?.content ?? [])
      : (page.content_se?.content ?? [])
  $: href = language === LANGUAGE.ENGLISH ? "/en" : "/"
</script>

<div class="pop-up-container">
  <div class="pop-up">
    <a {href} class="close" data-sveltekit-noscroll>X</a>
    <h2>{title}</h2>
    <div class="content">{@html renderBlockText(content)}</div>
  </div>
</div>

<style lang="scss">
  .pop-up-container {
    position: fixed;
    z-index: 1000;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;

    .pop-up {
      width: 600px;
      max-width: 90vw;
      padding: 20px;
      background: lightblue;
      position: relative;

      .close {
        position: absolute;
        top: 10px;
        right: 10px;
      }
    }
  }
</style>
