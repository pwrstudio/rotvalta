<script lang="ts">
  import { goto } from "$app/navigation"
  import { LANGUAGE } from "$lib/enums"
  import type { Page } from "@sanity-types"
  import { createEventDispatcher } from "svelte"
  const dispatch = createEventDispatcher()

  export let language: LANGUAGE
  export let page: Page | undefined
  export let directHref: string | undefined = undefined
  export let directTitle: string | undefined = undefined

  $: href =
    language === LANGUAGE.ENGLISH
      ? `/en/page/${page?.slug?.current ?? ""}`
      : `/page/${page?.slug?.current ?? ""}`
  $: title = language === LANGUAGE.ENGLISH ? page?.title_en : page?.title_se

  function navigate() {
    dispatch("clicked")
    goto(directHref || href)
  }
</script>

<button class="page-link" on:click={navigate} data-sveltekit-noscroll>
  {directTitle ?? title}
</button>

<style lang="scss">
  .page-link {
    margin-right: 20px;
    color: var(--foreground-color);
    text-decoration: none;
    display: block;
    font-size: var(--font-size-mid);

    &:hover {
      color: var(--accent-color);
    }
  }
</style>
