<script lang="ts">
  import type { Homepage, Page } from "@sanity-types"
  import { renderBlockText } from "$lib/modules/sanity"

  export let data: {
    homepage: Homepage
  }

  const { homepage } = data

  console.log("homepage", homepage)

  const pages = homepage.pages as Page[]
</script>

<h1>{homepage.title_se}</h1>
<h1>{homepage.title_en}</h1>

<h2>{homepage.subTitle_se}</h2>
<h2>{homepage.subTitle_en}</h2>
<div class="content">
  {@html renderBlockText(homepage?.content_se?.content ?? [])}
</div>
<div class="content">
  {@html renderBlockText(homepage?.content_en?.content ?? [])}
</div>
