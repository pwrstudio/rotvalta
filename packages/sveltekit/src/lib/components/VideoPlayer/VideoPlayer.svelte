<script lang="ts">
  import getVideoId from "get-video-id"

  export let videoUrl: string
  export let aspectRatio: string

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

<div class="video-player {'ratio-' + aspectRatio}">
  {@html videoEmbedCode}
</div>

<style lang="scss">
  @import "../../styles/index.scss";

  .video-player {
    width: 720px;
    max-width: 60dvw;
    aspect-ratio: 16/9;
    cursor: pointer;
    line-height: 0;
    position: relative;
    height: auto;
    max-height: 80dvh;

    @include screen-size("phone") {
      max-width: unset;
      width: 80dvw;
    }

    &.ratio-16-9 {
      aspect-ratio: 16/9;
    }

    &.ratio-4-3 {
      aspect-ratio: 4/3;
    }
  }
</style>
