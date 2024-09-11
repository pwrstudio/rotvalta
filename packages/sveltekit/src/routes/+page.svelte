<script lang="ts">
  import type { Homepage } from "@sanity-types"
  import { renderBlockText } from "$lib/modules/sanity"

  export let data: {
    homepage: Homepage
  }

  const { homepage } = data
</script>

<h1>{homepage.title}</h1>
<h2>{homepage.subTitle}</h2>
<div class="content">
  {@html renderBlockText(homepage?.content?.content ?? [])}
</div>
