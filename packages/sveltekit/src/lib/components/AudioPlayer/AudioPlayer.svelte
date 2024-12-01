<script lang="ts">
  import AudioPlay from "../Graphics/AudioPlay.svelte"
  import AudioPause from "../Graphics/AudioPause.svelte"
  import AudioStop from "../Graphics/AudioStop.svelte"

  export let title: string | undefined
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

  function stopPlayback() {
    if (audio) {
      audio.pause()
      audio.currentTime = 0
      isPlaying = false
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

  function seek(event: MouseEvent) {
    if (audio && duration) {
      const progressBar = event.currentTarget as HTMLDivElement
      const rect = progressBar.getBoundingClientRect()
      const clickX = event.clientX - rect.left
      const newTime = (clickX / rect.width) * duration
      audio.currentTime = newTime
      togglePlayPause()
    }
  }
</script>

<div class="audio-player">
  <div class="title">{title}</div>
  <div class="controls">
    <button on:click={togglePlayPause} title={isPlaying ? "Pause" : "Play"}>
      {#if isPlaying}
        <AudioPause />
      {:else}
        <AudioPlay />
      {/if}
    </button>
    <button on:click={stopPlayback} title="Stop"><AudioStop /></button>
    <div class="time-code">
      {currentTime.toFixed(1)}s / {duration ? duration.toFixed(1) : "0"}s
    </div>
  </div>
  <div role="presentation" class="progress-container" on:click={seek}>
    <div
      class="progress-bar"
      style={`width: ${(currentTime / duration) * 100}%;`}
    ></div>
  </div>
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
    width: 100%;
  }

  .controls {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
  }

  button {
    border: none;
    background: none;
    font-size: 1.2rem;
    cursor: pointer;
    padding: 0;
    margin-right: 10px;
  }

  button:hover {
    color: var(--hover-color, #555);
  }

  .progress-container {
    position: relative;
    height: 10px;
    background: var(--progress-bg, #e0e0e0);
    overflow: hidden;
    cursor: pointer;
  }

  .progress-bar {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    background: var(--progress-bar, var(--foreground-color));
    transition: width 0.1s linear;
  }

  p {
    margin: 0;
    font-size: 0.9rem;
  }

  .title {
    margin-bottom: 10px;
    margin-top: 10px;
  }

  .time-code {
    background: red;
    position: relative;
    top: -3px;
  }
</style>
