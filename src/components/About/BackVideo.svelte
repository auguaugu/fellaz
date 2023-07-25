<script lang="ts">
  import LottieAnimation from '@/components/Common/LottieAnimation.svelte';
  import Video from '@/components/Common/Video.svelte';

  import { VideoFellaz } from '@/configs/videos';
  import { LottieWeb3 } from '@/configs/lotties';
</script>

<div class="backvideo">
  <div class="backvideo_title">
    <LottieAnimation data={LottieWeb3} />
  </div>
  <Video src={VideoFellaz} />
  <div class="shadow" />
</div>

<style lang="scss">
  .backvideo {
    position: relative;
    width: 100vw;
    height: 880px;
    margin-top: 200px;

    &::before,
    &::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      opacity: 0.2;
      z-index: -1;
    }
    &::before {
      background: color(black);
    }
    &::after {
      background: linear-gradient(105.88deg, color(pink) 0%, color(blue) 100%);
    }

    @include media(mobile) {
      margin-top: 0;
      height: 640px;
    }
  }
  .backvideo_title {
    position: absolute;
    left: calc(50% + 100px);
    bottom: -200px;
    transform: translateX(-50%);
    width: 100%;
    max-width: 1202px;
    height: 481px;
    z-index: 1;

    @include media(mobile) {
      left: 0;
      bottom: -44px;
      transform: none;
      height: auto;
    }
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
