<script lang="ts">
  import { _ } from 'svelte-i18n';

  import Video from '@/components/Common/Video.svelte';

  import { VideoPartners } from '@/configs/videos';
</script>

<div class="intro">
  <div class="intro_title">
    <div class="main_title"><span>{$_('partners_title')}</span></div>
    <div class="sub_title">
      <span>{$_('partners_subtitle')}</span>
    </div>
  </div>
  <div class="box_video">
    <Video src={VideoPartners} />
  </div>
</div>

<style lang="scss">
  .intro {
    position: relative;
    height: 100vh;
    padding: 0 60px;

    @include media(mobile) {
      padding: 0 24px;
    }
  }

  @keyframes fadeInUp {
    100% {
      top: 0;
    }
  }
  @keyframes fadeInOpacity {
    100% {
      opacity: 1;
    }
  }
  .intro_title {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    overflow: hidden;
    text-align: center;

    .main_title {
      @include hellix(100, 700);
      color: color(white);
      overflow: hidden;
      text-shadow: 0px 0px 16px rgba(0, 0, 0, 0.2);

      span {
        position: relative;
        top: 140px;
        left: 0;
        animation: fadeInUp 1s;
        animation-fill-mode: forwards;
      }
    }

    @include media(mobile) {
      .main_title {
        @include hellix(40, 700);
      }
    }
  }
  .sub_title {
    width: 480px;
    @include hellix(32, 400);
    margin-top: 16px;
    color: color(white);
    overflow: hidden;
    text-shadow: 0px 0px 16px rgba(0, 0, 0, 0.2);

    span {
      position: relative;
      top: 140px;
      left: 0;
      animation: fadeInUp 1s 0.3s;
      animation-fill-mode: forwards;
      margin-top: 8px;
    }

    @include media(mobile) {
      width: 240px;
      @include hellix(16, 400);
    }
  }
  .box_video {
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: -1;
    transition: all 1s ease;
  }
</style>
