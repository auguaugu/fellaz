<script lang="ts">
  import { _ } from 'svelte-i18n';

  import { WEB_URL } from '@/configs/constants';
  import {
    LogoFellaz,
    LogoAbudhabi,
    IconUnion,
    IconLink,
    IconPowerbybnb,
  } from '@/configs/images';
</script>

<div class="intro">
  <div class="box_logo">
    <img src={LogoFellaz} alt="logo-fellaz" />
    <img class="icon_union" src={IconUnion} alt="icon-union" />
    <img src={LogoAbudhabi} alt="logo-abudhabi" />
  </div>
  <div class="text_desc">
    {$_('nft_intro_main1')}
    <span>{$_('nft_intro_main2')}</span>
  </div>
  <a
    href={WEB_URL.ultra_abu_dhabi}
    target="_blank"
    rel="noreferrer"
    class="box_ultra"
  >
    {$_('nft_intro_website')}
    <img src={IconLink} alt="icon-link" />
  </a>
  <img class="img_powerby" src={IconPowerbybnb} alt="img-powerby" />
</div>

<style lang="scss">
  .intro {
    position: relative;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    padding: 0 60px 80px;

    @include media(mobile) {
      padding: 0 24px 64px;
    }
  }
  .box_logo {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 24px;
    margin: 0 0 16px;

    img {
      height: 64px;

      &.icon_union {
        height: 48px;
      }
    }

    @include media(mobile) {
      gap: 6px;

      img {
        height: 32px;

        &:nth-of-type(2) {
          height: 24px;
        }
      }
    }
  }
  .text_desc {
    @include hellix(20, 400);
    color: color(grey1);

    @include media(mobile) {
      @include hellix(14, 400);

      span {
        display: block;
      }
    }
  }
  .box_ultra {
    width: 100%;
    max-width: 660px;
    height: 56px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 12px;
    background-color: rgba(255, 255, 255, 0.08);
    border-radius: 12px;
    @include hellix(16, 600);
    color: color(white);
    margin: 32px 0 44px;
    padding: 0 24px;
    transition: opacity 0.3s ease;

    &:hover {
      opacity: 0.8;
    }

    @include media(mobile) {
      gap: 8px;
      margin: 24px 0 28px;
    }
  }
  .img_powerby {
    height: 40px;
  }
</style>
