<script lang="ts">
  import Metadata from "$lib/components/Metadata/Metadata.svelte"
  import { LANGUAGE } from "$lib/enums"
  import { languageStore } from "$lib/stores"
  languageStore.set(LANGUAGE.SWEDISH)
</script>

<Metadata language={LANGUAGE.SWEDISH} />
