<script lang="ts">
  export let src: string;
  let loadVideo = false;

  const onLoadedData = () => (loadVideo = true);
</script>

<video
  {src}
  autoPlay
  muted
  loop
  playsInline
  on:loadeddata={onLoadedData}
  class:visible={loadVideo}
/>

<style lang="scss">
  video {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: opacity 1s;
    opacity: 0;

    &.visible {
      opacity: 1;
    }
  }
</style>
