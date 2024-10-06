<script lang="ts">
  import { LANGUAGE } from "$lib/enums"
  import type { Page } from "@sanity-types"

  export let language: LANGUAGE
  export let page: Page

  $: href =
    language === LANGUAGE.ENGLISH
      ? `/en/page/${page.slug?.current ?? ""}`
      : `/page/${page.slug?.current ?? ""}`
  $: title = language === LANGUAGE.ENGLISH ? page.title_en : page.title_se
</script>

<a class="page-link" {href} data-sveltekit-noscroll>{title}</a>

<style lang="scss">
  .page-link {
    margin-right: 10px;
    color: var(--foreground-color);
    text-decoration: none;

    &:hover {
      color: var(--accent-color);
    }
  }
</style>
