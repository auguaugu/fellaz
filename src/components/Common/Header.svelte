<script lang="ts">
  import { onMount } from 'svelte';
  import { Link, useLocation } from 'svelte-navigator';

  import BannerFavorlet from '@/components/Common/BannerFavorlet.svelte';
  import HeaderLink from './HeaderLink.svelte';

  import { LogoFellaz } from '@/configs/images';

  const location = useLocation();
  $: pathname = $location.pathname;

  let timer: ReturnType<typeof setTimeout>;
  let curScrollY = window.scrollY;
  let showHeader: boolean = false;
  let showBanner: boolean = false;

  const handleBanner = (isShow: boolean) => (showBanner = isShow);

  const onScroll = () => {
    if (timer) return;

    timer = setTimeout(() => {
      timer = null;

      showHeader = window.scrollY <= 100 || window.scrollY < curScrollY;
      curScrollY = window.scrollY;
    }, 300);
  };

  const onClickHome = () => {
    handleBanner(false);
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  };

  onMount(() => {
    // handleBanner(pathname === '/nft');
    onScroll();
    window.addEventListener('scroll', onScroll);

    return () => {
      timer = null;
      window.removeEventListener('scroll', onScroll);
    };
  });
</script>

<div class="container_header" class:showHeader class:showBanner>
  <!-- <BannerFavorlet /> -->

  <div class="header">
    <Link to="/" on:click={onClickHome}>
      <img src={LogoFellaz} alt="logo-fellaz" />
    </Link>

    <HeaderLink onClick={handleBanner} />
  </div>
  <div class="header_border" />
</div>

<style lang="scss">
  .container_header {
    display: flex;
    flex-direction: column;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: var(--PCHeaderHeight);
    z-index: 1000;
    background: rgba(0, 0, 0, 0.5);
    transform: translateY(
      calc(-1 * (var(--PCHeaderHeight) + var(--PCBannerHeight)))
    );
    transition: all 0.3s ease;

    &.showHeader {
      transform: translateY(0);
    }
    &.showBanner {
      top: var(--PCBannerHeight);
    }
  }
  .header {
    position: relative;
    top: 0;
    left: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 100%;
    margin: auto;
    padding: 0 60px;

    img {
      cursor: pointer;
      width: 108.5px;
      height: 24px;
    }
  }
  .header_border {
    width: 100%;
    height: 1px;
    background: color(white);
    opacity: 0.1;
    backdrop-filter: blur(2px);
  }
</style>
