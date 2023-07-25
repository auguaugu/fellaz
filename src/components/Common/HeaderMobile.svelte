<script lang="ts">
  import { onMount } from 'svelte';
  import { Link, useLocation } from 'svelte-navigator';
  import { _ } from 'svelte-i18n';

  import BannerFavorlet from '@/components/Common/BannerFavorlet.svelte';
  import HeaderLink from './HeaderLink.svelte';

  import { LogoFellaz, IconMenu, IconClose } from '@/configs/images';

  const location = useLocation();
  $: pathname = $location.pathname;

  let timer: ReturnType<typeof setTimeout>;
  let curScrollY = window.scrollY;
  let showMenu: boolean = false;
  let showBanner: boolean = false;

  const openMenu = () => {
    showMenu = true;
    document.body.style.overflow = 'hidden';
  };
  const closeMenu = () => {
    showMenu = false;
    document.body.style.overflow = 'auto';
  };
  const handleBanner = (isShow: boolean) => (showBanner = isShow);

  const onClickMenu = (isBanner: boolean) => {
    closeMenu();
    handleBanner(isBanner);
  };

  // const onScroll = () => {
  //   if (timer) return;

  //   timer = setTimeout(() => {
  //     timer = null;

  //     if (pathname !== '/nft') {
  //       showBanner = false;
  //       return;
  //     }

  //     showBanner = window.scrollY <= 100 || window.scrollY < curScrollY;
  //     curScrollY = window.scrollY;
  //   }, 300);
  // };

  // onMount(() => {
  //   onScroll();
  //   window.addEventListener('scroll', onScroll);

  //   return () => {
  //     timer = null;
  //     window.removeEventListener('scroll', onScroll);
  //   };
  // });
</script>

<div class="container_header" class:showBanner>
  <!-- <BannerFavorlet /> -->

  <Link to="/" on:click={() => onClickMenu(false)}>
    <img src={LogoFellaz} alt="logo-fellaz" />
  </Link>
  <button class="icon_menu" on:click={openMenu}>
    <img src={IconMenu} alt="icon_menu" />
  </button>
  <div class="header_border" />
</div>

<div class="header" class:showMenu>
  <HeaderLink onClick={onClickMenu} />

  <div class="box_copyright">
    <img src={LogoFellaz} alt="logo-fellaz-header" />
    <div class="header_copyright">{$_('copyright')}</div>
  </div>
  <button class="icon_close" on:click={closeMenu}>
    <img src={IconClose} alt="icon_close" />
  </button>
  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <div class="background_shadow" class:showMenu on:click={closeMenu} />
</div>

<style lang="scss">
  .container_header {
    display: flex;
    align-items: center;
    position: fixed;
    top: var(--MOBannerHeight);
    left: 0;
    width: 100%;
    height: var(--MOHeaderHeight);
    z-index: 1000;
    padding: 0 24px;
    background: rgba(0, 0, 0, 0.4);
    transform: translateY(calc(-1 * (var(--MOBannerHeight) + 1px)));
    transition: all 0.3s ease;

    &.showBanner {
      transform: translateY(0);
    }

    img {
      width: 72.33px;
      height: 16px;
    }
  }

  .header {
    position: fixed;
    top: 0;
    right: -320px;
    width: 320px;
    height: var(--vh);
    background-color: #101010;
    transition: all 0.3s ease;
    z-index: 1000;

    &.showMenu {
      right: 0;
    }
  }
  .header_border {
    position: absolute;
    top: var(--MOHeaderHeight);
    left: 0;
    width: 100%;
    height: 1px;
    background: color(white);
    opacity: 0.1;
    backdrop-filter: blur(2px);
  }
  .icon_menu,
  .icon_close {
    position: absolute;
    top: 18px;
    right: 24px;
    cursor: pointer;
    background-color: transparent;

    img {
      width: 24px;
      height: 24px;
    }
  }
  .box_copyright {
    width: 100%;
    position: absolute;
    bottom: 0;
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 60px 48px;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    z-index: 1;

    img {
      width: 72.33px;
      height: 16px;
    }
  }
  .header_copyright {
    @include hellix(12, 400);
    color: color(grey1);
  }
  .background_shadow {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: var(--vh);
    background-color: rgba(0, 0, 0, 0.3);
    z-index: -1;
    opacity: 0;
    visibility: hidden;

    &.showMenu {
      opacity: 1;
      visibility: visible;
    }
  }
</style>
