<script lang="ts">
  import getVideoId from "get-video-id"

  export let videoUrl: string

  const postfix = ""

  function generateEmbedCode(url: string): string {
    const { id, service } = getVideoId(url)

    if (!id || !service) {
      return "Invalid URL or unsupported video service"
    }

    switch (service) {
      case "youtube":
        return `<iframe width="100%"" height="100%" src="https://www.youtube.com/embed/${id}${postfix}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
      case "vimeo":
        return `<iframe src="https://player.vimeo.com/video/${id}${postfix}" width="100%" height="100%" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>`
      default:
        return "Unsupported video service"
    }
  }

  let videoEmbedCode = generateEmbedCode(videoUrl ?? "")
</script>

<div class="video-player">
  {@html videoEmbedCode}
</div>

<style lang="scss">
  .video-player {
    background: var(--accent-color);
    width: 100%;
    aspect-ratio: 16/9;
    cursor: pointer;
    line-height: 0;
    position: relative;
    margin: var(--inner-margin);
  }
</style>
