<script lang="ts">
  import { onMount } from 'svelte';

  import Video from '@/components/Common/Video.svelte';

  import { VideoUltra } from '@/configs/videos';

  let timer: ReturnType<typeof setTimeout>;
  let scrollRate = 0;

  const onScroll = () => {
    if (timer) return;

    timer = setTimeout(() => {
      timer = null;

      const scrollY = window.scrollY;
      const innerHeight = window.innerHeight;

      if (scrollY > innerHeight && scrollRate > 0.9) return;
      scrollRate = scrollY / innerHeight;
    }, 300);
  };

  onMount(() => {
    onScroll();
    window.addEventListener('scroll', onScroll);

    return () => {
      timer = null;
      window.removeEventListener('scroll', onScroll);
    };
  });
</script>

<div class="backvideo" style="filter: blur({scrollRate * 20}px)">
  <Video src={VideoUltra} />
  <div class="shadow" />
</div>

<style lang="scss">
  .backvideo {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: -1;
    opacity: 0.7;
    transform: scale(1.1);
    transition: opacity 1s ease, filter 0.1s ease;
  }
  .shadow {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 260px;
    background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, color(black) 100%);
  }
</style>
