<script lang="ts">
  import { onMount } from 'svelte';
  import Lottie from 'lottie-web';

  export let data: any;

  let lottieEl: HTMLElement;

  onMount(() => {
    Lottie.loadAnimation({
      container: lottieEl,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: data,
    });

    return () => {
      Lottie.destroy();
    };
  });
</script>

<div bind:this={lottieEl} style="width: 100%; height: 100%" />
