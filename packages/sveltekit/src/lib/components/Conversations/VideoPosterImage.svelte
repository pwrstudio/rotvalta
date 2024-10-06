<script lang="ts">
  import PlayButton from "../Graphics/PlayButton.svelte"

  export let src: string
  export let title: string
</script>

<div class="video-poster-image">
  <img {src} alt={title} draggable="false" />
  <div class="play-button"><PlayButton /></div>
</div>

<style lang="scss">
  .video-poster-image {
    position: relative;
    color: var(--background-color);

    &:hover {
      opacity: 0.8;
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    .play-button {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 50px;
      height: 50px;
    }

    &:hover {
      color: var(--accent-color);
    }
  }
</style>
