<script lang="ts">
  import { useLocation } from 'svelte-navigator';
  import { _ } from 'svelte-i18n';

  import { WEB_URL } from '@/configs/constants';
  import { LogoFavorlet } from '@/configs/images';

  const location = useLocation();
  $: pathname = $location.pathname;
</script>

{#if pathname === '/nft'}
  <a
    href={WEB_URL.favorlet}
    target="_blank"
    rel="noreferrer"
    class="box_favorlet"
  >
    <div class="contents">
      <img height={22} src={LogoFavorlet} alt="img_favorlet" />
      <div class="divider" />
      <div class="banner_text">{$_('floating_banner_favorlet')}</div>
    </div>
    <div class="box_visit">VISIT WEBSITE</div>
  </a>
{/if}

<style lang="scss">
  .box_favorlet {
    position: absolute;
    top: calc(-1 * var(--PCBannerHeight));
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 80px;
    width: 100%;
    height: var(--PCBannerHeight);
    background-color: color(white);
    padding: 0 60px;

    img {
      pointer-events: none;
    }

    @include media(mobile) {
      height: 44px;
      justify-content: flex-start;
      gap: 40px;
      top: calc(-1 * var(--MOBannerHeight));
      padding: 0 24px;

      img {
        height: 12px;
      }
    }
  }
  .contents {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 16px;

    @include media(mobile) {
      gap: 12px;
    }
  }
  .banner_text {
    @include hellix(16, 500);
    color: color(grey2);
    opacity: 0.8;

    @include media(mobile) {
      @include hellix(16, 600) {
        font-size: min(12px, 3.3vw);
        line-height: min(14px, 4vw);
      }
    }
  }
  .box_visit {
    height: 28px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2px;
    background-color: rgb(255, 111, 94, 0.1);
    @include hellix(12, 700);
    border-radius: 30px;
    color: #ff6f5e;
    padding: 0 16px;

    @include media(mobile) {
      display: none;
    }
  }
  .divider {
    width: 1px;
    height: 12px;
    background-color: #423343;
    opacity: 0.2;

    @include media(mobile) {
      display: none;
    }
  }
</style>
