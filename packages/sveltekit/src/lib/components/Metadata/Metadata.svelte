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

  const defaultTitle = "Rotvälta"
  const defaultDescription =
    "ROTVÄLTA / föreställning är ett offentligt konstprojekt av bildkonstnären Kerstin Bergendal, förankrat i lokaliteten kring Götaplatsen, Göteborg."
  const defaultImage = "https://rotvälta.nu/images/logo.jpg"
  const canonicalUrl = "https://xn--rotvlta-8wa.nu" // Punycode encoded version of rotvälta.nu

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
    ? urlFor(page.mainImage).quality(80).height(630).width(1200).url()
    : defaultImage
</script>

<svelte:head>
  <!-- SEO Meta Tags -->
  <title>{title}</title>
  <meta name="description" content={description} />
  <meta name="author" content="Kerstin Bergendal" />
  <meta name="robots" content="index, follow" />
  <link rel="canonical" href={canonicalUrl} />
  <meta name="language" content={language === LANGUAGE.ENGLISH ? "en" : "sv"} />

  <!-- Open Graph Meta Tags -->
  <meta property="og:title" content={title} />
  <meta property="og:description" content={description} />
  <meta property="og:type" content="website" />
  <meta property="og:url" content={canonicalUrl} />
  <meta property="og:image" content={image} />
  <meta property="og:image:alt" content={title} />
  <meta property="og:site_name" content="Rotvälta" />
  <meta
    property="og:locale"
    content={language === LANGUAGE.ENGLISH ? "en_US" : "sv_SE"}
  />

  <!-- Twitter Card Meta Tags -->
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content={title} />
  <meta name="twitter:description" content={description} />
  <meta name="twitter:image" content={image} />
  <meta name="twitter:image:alt" content={title} />

  <!-- Additional SEO Meta Tags -->
  <meta
    name="keywords"
    content="Rotvälta, Kerstin Bergendal, konstprojekt, Götaplatsen, Göteborg"
  />
  <meta name="geo.region" content="SE-O" />
  <meta name="geo.placename" content="Göteborg" />
</svelte:head>
