<script lang="ts">
  import { _ } from 'svelte-i18n';

  import SaleInfo from '@/components/NFT/About/SaleInfo.svelte';

  import { WebpUltra } from '@/configs/images';
</script>

<div class="about">
  <div class="contents">
    <div class="main_title">
      {$_('nft_about_title1')}
      <div>{$_('nft_about_title2')}</div>
    </div>
    <div class="box_desc">
      <div class="main_desc">
        {$_('nft_about_subtitle1')}
        <div>{$_('nft_about_subtitle2')}</div>
      </div>
      <div class="sub_desc">
        {$_('nft_about_desc')}
      </div>
    </div>
    <img class="video_nft" src={WebpUltra} alt="webp-ultra" />
  </div>

  <SaleInfo />

  <div class="shadow" />
</div>

<style lang="scss">
  .about {
    position: relative;
    padding: 140px 60px 24px;

    @include media(laptop) {
      padding: 120px 24px 24px;
    }
  }
  .contents {
    position: relative;
    width: 100%;
    max-width: 1016px;
    display: flex;
    flex-direction: column;
    padding: 100px 0;
    margin: auto;

    @include media(laptop) {
      padding: 0;
    }
  }
  .main_title {
    @include hellix(64, 700);
    color: color(white);

    @include media(mobile) {
      @include hellix(26, 700);
    }
  }
  .box_desc {
    width: 100%;
    max-width: 494px;
    margin: 80px 0 0;

    @include media(laptop) {
      max-width: 100%;
    }

    @include media(mobile) {
      margin: 32px 0;
    }
  }
  .main_desc {
    margin: 0 0 24px;
    @include hellix(24, 600);
    color: color(white);

    @include media(mobile) {
      margin: 0 0 16px;
      @include hellix(16, 600);
    }
  }
  .sub_desc {
    @include hellix(16, 400);
    color: color(grey1);

    @include media(mobile) {
      @include hellix(14, 400);
    }
  }
  .video_nft {
    position: absolute;
    right: 48px;
    bottom: 0;
    width: 400px;
    height: 400px;

    @include media(laptop) {
      position: relative;
      right: 0;
      width: 320px;
      height: 320px;
      margin: auto;
    }
  }
  .shadow {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 260px;
    background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, color(black) 100%);
    z-index: -1;
  }
</style>
