<script lang="ts">
  import { onMount } from 'svelte';
  import { _ } from 'svelte-i18n';

  import { WEB_URL } from '@/configs/constants';
  import { IconTwitter, IconPlus, IconMinus } from '@/configs/images';

  let timer: ReturnType<typeof setTimeout>;
  let isOpen: boolean = false;
  let invisible: boolean = true;

  const data = {
    icon: IconTwitter,
    link: WEB_URL.twitter,
    colors: ['#049AFF', '#0F8CFF'],
  };

  const onScroll = () => {
    if (timer) return;

    timer = setTimeout(() => {
      timer = null;

      const scrollY = window.scrollY;
      const scrollHeight = document.documentElement.scrollHeight;
      const innerHeight = window.innerHeight;

      invisible = scrollHeight <= scrollY + innerHeight + 100;
    }, 300);
  };

  const onToggle = () => (isOpen = !isOpen);

  onMount(() => {
    onScroll();
    window.addEventListener('scroll', onScroll);

    return () => {
      timer = null;
      window.removeEventListener('scroll', onScroll);
    };
  });
</script>

<div
  class="box_social"
  class:invisible
  class:isOpen
  style="--socialColor: {data.colors[0]}; --socialColor2: {data.colors[1]}"
>
  <a href={data.link} target="_blank" rel="noreferrer" class="button_social">
    <img src={data.icon} alt="img_social" />
    <span>
      {$_('floating_social')}
    </span>
  </a>

  <button class="button_toggle" on:click={onToggle}>
    {#if isOpen}
      <img src={IconMinus} alt="icon-minus" />
    {:else}
      <img src={IconPlus} alt="icon-plus" />
    {/if}
  </button>
</div>

<style lang="scss">
  .box_social {
    width: 140px;
    height: 64px;
    position: fixed;
    left: 80px;
    bottom: 80px;
    display: flex;
    align-items: center;
    background-color: var(--socialColor);
    border-radius: 16px;
    overflow: hidden;
    z-index: 100;
    transition: all 0.3s ease;
    opacity: 1;
    visibility: visible;
    white-space: nowrap;

    &.isOpen {
      width: 256px;
    }
    &.invisible {
      opacity: 0;
      visibility: hidden;
    }
    img {
      width: 24px;
      height: 24px;
    }
    span {
      display: flex;
      align-items: center;
      gap: 6px;
      @include hellix(16, 600);
      color: color(white);
    }

    @include media(mobile) {
      width: 112px;
      height: 48px;
      left: 24px;
      bottom: 40px;
      border-radius: 12px;

      &.isOpen {
        width: 210px;
      }
      span {
        @include hellix(14, 700);

        img {
          width: 16px;
          height: 16px;
        }
      }
    }
  }
  .button_social {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    gap: 24px;
    padding-left: 24px;

    @include media(mobile) {
      gap: 16px;
      padding-left: 16px;
    }
  }
  .button_toggle {
    width: 68px;
    height: 100%;
    position: absolute;
    top: 0;
    right: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--socialColor2);
    cursor: pointer;

    img {
      width: 20px;
      height: 20px;
    }

    @include media(mobile) {
      width: 56px;
    }
  }
</style>
