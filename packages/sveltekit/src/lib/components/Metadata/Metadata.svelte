<script lang="ts">
  import type {
    Page,
    ArchivalNote,
    FieldNote,
    Conversation,
  } from "@sanity-types"
  import { LANGUAGE } from "$lib/enums"
  import { isEmpty, truncate } from "lodash-es"
  import { toPlainText, urlFor } from "$lib/modules/sanity"

  export let page: Page | ArchivalNote | FieldNote | Conversation | undefined =
    undefined
  export let language: LANGUAGE

  const defaultDescription =
    "ROTVÄLTA / föreställning är ett processbaserat offentligt konstprojekt av bildkonstnären Kerstin Bergendal, förankrat i lokaliteten, historien och den sociala väven kring Götaplatsen och, i förlängningen, den bredare berättelsen om staden Göteborg i Sverige."
  const defaultTitle = "Rotvälta"
  const defaultImage = "https://rotvalta.se/logo.png"

  // Helper function to safely extract content
  function safeContent(content: any, fallback: string): string {
    return !isEmpty(content) ? toPlainText(content) : fallback
  }

  $: title = (() => {
    const titleField =
      language === LANGUAGE.ENGLISH ? page?.title_en : page?.title_se
    return titleField ? `${titleField} | ${defaultTitle}` : defaultTitle
  })()

  $: description = (() => {
    const contentField =
      language === LANGUAGE.ENGLISH
        ? page?.content_en?.content
        : page?.content_se?.content
    const fallbackField =
      language === LANGUAGE.ENGLISH
        ? page?.content_se?.content
        : page?.content_en?.content
    return truncate(
      safeContent(contentField, safeContent(fallbackField, defaultDescription)),
      {
        length: 160,
        separator: " ",
      }
    )
  })()

  $: image = page?.mainImage
    ? urlFor(page.mainImage).quality(80).height(1200).width(1200).url()
    : defaultImage
</script>

<svelte:head>
  <title>{title}</title>
  <meta property="og:title" content={title} />
  <meta property="twitter:title" content={title} />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="description" content={description} />
  <meta property="og:description" content={description} />
  <meta property="twitter:description" content={description} />
  <meta name="image" content={image} />
  <meta property="og:type" content="website" />
  <meta property="og:image" content={image} />
  <meta property="twitter:image" content={image} />
</svelte:head>
