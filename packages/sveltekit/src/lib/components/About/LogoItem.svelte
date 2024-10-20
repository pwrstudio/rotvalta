<script lang="ts">
  import { urlFor } from "$lib/modules/sanity"
  import type { Logo } from "$lib/types"
  export let logo: Logo

  const href = logo.link
  const alt = logo.title
  const src = urlFor(logo.logo).url()
</script>

<a class="logo" {href} target="_blank">
  <img {src} {alt} />
</a>

<style lang="scss">
  .logo {
    display: block;
    width: 80px;
    height: 80px;

    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }
</style>
