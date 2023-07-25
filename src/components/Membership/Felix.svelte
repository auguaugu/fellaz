<script lang="ts">
  import { _ } from 'svelte-i18n';

  import { ImgFelix } from '@/configs/images';
</script>

<div class="felix">
  <div class="felix_container">
    <img src={ImgFelix} alt="img-felix" class="img_felix" />

    <div class="felix_content">
      <div class="felix_title">
        <div class="main_subtitle">{$_('pass_felix_subtitle')}</div>
        <div class="main_title">{$_('pass_felix_title')}</div>
      </div>
      <div class="felix_desc">
        <div class="main_desc">{$_('pass_felix_desc1')}</div>
      </div>
    </div>
  </div>
</div>

<style lang="scss">
  .felix {
    width: 100vw;
    height: 298px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: color(#161616);
    padding: 0 60px;

    @include media(mobile) {
      height: auto;
      align-items: flex-end;
      margin: 0 auto 100px;
      padding: 32px 24px;
    }
  }
  .felix_container {
    position: relative;
    width: 100%;
    max-width: 1224px;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: content-box;

    @include media(mobile) {
      flex-direction: column;
    }
  }
  .img_felix {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    max-width: 376px;

    @include media(laptop) {
      max-width: 312px;
    }
    @include media(mobile) {
      position: relative;
      left: auto;
      bottom: auto;
      transform: translateY(-112px);
      margin-bottom: -80px;
    }
  }

  .felix_content {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 32px;

    @include media(mobile) {
      gap: 24px;
    }
  }
  .felix_title {
    width: 100%;
    max-width: 792px;
    display: flex;
    flex-direction: column;
    gap: 8px;

    @include media(laptop) {
      max-width: 60%;
    }
    @include media(mobile) {
      max-width: 100%;
      gap: 4px;
    }
  }
  .main_title {
    @include hellix(32, 700);
    color: color(white);

    @include media(mobile) {
      @include hellix(24, 700);
    }
  }
  .main_subtitle {
    @include hellix(20, 700);
    color: color(pink);

    @include media(mobile) {
      @include hellix(14, 700);
    }
  }
  .felix_desc {
    width: 100%;
    max-width: 792px;
    display: flex;
    flex-direction: column;

    @include media(laptop) {
      max-width: 60%;
    }
    @include media(mobile) {
      max-width: 100%;
    }
  }
  .main_desc {
    @include hellix(16, 400);
    color: color(grey1);
    white-space: pre-line;

    @include media(mobile) {
      @include hellix(14, 400);
    }
  }
</style>
