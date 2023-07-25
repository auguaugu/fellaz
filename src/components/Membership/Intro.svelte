<script lang="ts">
  import { _ } from 'svelte-i18n';

  import LottieAnimation from '@/components/Common/LottieAnimation.svelte';
  import Video from '@/components/Common/Video.svelte';

  import { VideoMembership } from '@/configs/videos';
  import { LottieMembership } from '@/configs/lotties';
</script>

<div class="intro">
  <div class="intro_title">
    <div class="box_lottie">
      <LottieAnimation data={LottieMembership} />
    </div>
    <div class="sub_title">{$_('pass_intro_desc')}</div>
  </div>

  <div class="intro_nft">
    <Video src={VideoMembership} />
  </div>

  <div class="sub_title mobile">{$_('pass_intro_desc')}</div>
</div>

<style lang="scss">
  .intro {
    position: relative;
    width: 100%;
    max-width: 1356px;
    height: 900px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: auto;
    padding: 0 60px;

    @include media(mobile) {
      height: auto;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
      margin: 120px auto 60px;
      padding: 0 24px;
    }
  }
  .intro_title {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
  }
  .box_lottie {
    width: 100%;
    max-width: 776px;

    @include media(mobile) {
      width: 100%;
      max-width: 312px;
    }
  }

  .sub_title {
    width: 100%;
    max-width: 686px;
    @include hellix(20, 400);
    margin-top: 24px;
    color: color(grey1);

    &.mobile {
      width: 100%;
      display: none;

      @include media(mobile) {
        display: flex;
      }
    }

    @include media(mobile) {
      display: none;
      @include hellix(14, 400);
    }
  }

  .intro_nft {
    position: absolute;
    right: -100px;
    width: 640px;
    margin: 20px 0 0;
    z-index: -1;
    transition: all 1s ease;

    @include media(mobile) {
      right: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
      width: 100%;
      max-width: 400px;
      margin: 0 auto;
    }
  }
</style>
