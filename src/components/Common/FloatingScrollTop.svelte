<script lang="ts">
  import { onMount } from 'svelte';

  import { IconScrollTop } from '@/configs/images';

  let timer: ReturnType<typeof setTimeout>;
  let invisible: boolean = true;

  const onScroll = () => {
    if (timer) return;

    timer = setTimeout(() => {
      timer = null;

      const scrollY = window.scrollY;
      const scrollHeight = document.documentElement.scrollHeight;
      const innerHeight = window.innerHeight;

      invisible = scrollY <= 100 || scrollHeight <= scrollY + innerHeight + 100;
    }, 300);
  };

  onMount(() => {
    onScroll();
    window.addEventListener('scroll', onScroll);

    return () => {
      timer = null;
      window.removeEventListener('scroll', onScroll);
    };
  });
</script>

<button
  on:click={() => window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })}
  class="icon_scroll_top"
  class:invisible
>
  <img src={IconScrollTop} alt="icon_scroll_top" />
</button>

<style lang="scss">
  .icon_scroll_top {
    position: fixed;
    right: 80px;
    bottom: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 64px;
    height: 64px;
    border-radius: 50%;
    background-color: color(white);
    transition: all 0.3s ease;
    cursor: pointer;
    opacity: 1;
    visibility: visible;
    z-index: 100;

    &.invisible {
      opacity: 0;
      visibility: hidden;
    }

    @include media(mobile) {
      display: none;
    }
  }
</style>
