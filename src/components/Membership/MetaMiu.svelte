<script lang="ts">
  import { _ } from 'svelte-i18n';

  import { ImgMetaMiu } from '@/configs/images';
</script>

<div class="metamiu">
  <div class="metamiu_image">
    <img src={ImgMetaMiu} alt="img-metamiu" />
  </div>

  <div class="metamiu_content">
    <div class="metamiu_title">
      <div class="main_title">{$_('pass_metamiu_title')}</div>
      <div class="main_subtitle">{$_('pass_metamiu_subtitle')}</div>
    </div>
    <div class="metamiu_desc">
      <div class="main_desc">{$_('pass_metamiu_desc1')}</div>
      <div class="main_desc">{$_('pass_metamiu_desc2')}</div>
    </div>
  </div>
</div>

<style lang="scss">
  .metamiu {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 120px;
    max-width: 1224px;
    margin: 82px auto 270px;
    padding: 0 60px;
    box-sizing: content-box;

    @include media(laptop) {
      flex-direction: column;
      align-items: flex-start;
    }
    @include media(mobile) {
      gap: 24px;
      margin: 0 auto 160px;
      padding: 0 24px;
    }
  }
  .metamiu_image {
    width: 100%;
    max-width: 512px;
    height: 596px;
    display: flex;
    align-items: center;
    margin: auto;

    img {
      width: 100%;
    }

    @include media(mobile) {
      width: 100%;
      height: 100%;
    }
  }
  .metamiu_content {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }
  .metamiu_title {
    display: flex;
    flex-direction: column;
    gap: 46px;

    .main_title {
      @include hellix(64, 700);
      color: color(white);
    }
    .main_subtitle {
      @include hellix(20, 600);
      color: color(white);
    }

    @include media(mobile) {
      gap: 24px;

      .main_title {
        @include hellix(26, 700);
      }
      .main_subtitle {
        @include hellix(16, 600);
      }
    }
  }
  .metamiu_desc {
    display: flex;
    flex-direction: column;
    gap: 20px;

    .main_desc {
      @include hellix(20, 400);
      color: color(grey1);
    }

    @include media(mobile) {
      gap: 16px;

      .main_desc {
        @include hellix(14, 400);
      }
    }
  }
</style>
