<script lang="ts">
  export let audioFileUrl: string
  let audio: HTMLAudioElement
  let isPlaying = false
  let currentTime = 0
  let duration = 0

  function togglePlayPause() {
    if (audio) {
      if (isPlaying) {
        audio.pause()
      } else {
        audio.play()
      }
    }
  }

  function handlePlay() {
    isPlaying = true
  }

  function handlePause() {
    isPlaying = false
  }

  function handleTimeUpdate() {
    currentTime = audio.currentTime
  }

  function handleLoadedMetadata() {
    duration = audio.duration
  }
</script>

<div class="audio-player">
  <button on:click={togglePlayPause}>
    {isPlaying ? "Pause" : "Play"}
  </button>
  <p>
    Current Time: {currentTime.toFixed(1)}s / {duration
      ? duration.toFixed(1)
      : "0"}s
  </p>
  <audio
    bind:this={audio}
    src={audioFileUrl}
    on:play={handlePlay}
    on:pause={handlePause}
    on:timeupdate={handleTimeUpdate}
    on:loadedmetadata={handleLoadedMetadata}
  ></audio>
</div>

<style>
  .audio-player {
    background: var(--accent-color);
    padding: var(--inner-margin);
  }
  button {
    margin-right: 10px;
  }
</style>
