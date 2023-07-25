<script lang="ts">
  import { Link, useLocation } from 'svelte-navigator';
  import { _ } from 'svelte-i18n';

  import { routesInfo } from '@/routes';

  export let onClick: (isShowBanner: boolean) => void;

  const location = useLocation();
  $: pathname = $location.pathname;
</script>

<div class="header_menu">
  {#each routesInfo as { path, name, isShowBanner }}
    {#if name}
      <Link to={path} on:click={() => onClick(!!isShowBanner)}>
        <div class="menu_item" class:focus={pathname === path}>
          {$_(name)}
        </div>
      </Link>
    {/if}
  {/each}
</div>

<style lang="scss">
  .header_menu {
    height: 100%;
    display: flex;
    gap: 40px;
    @include hellix(20, 600);

    @include media(mobile) {
      flex-direction: column;
      justify-content: center;
      gap: 0;
      z-index: 1;
      padding-bottom: 175px;
    }
  }
  .menu_item {
    display: flex;
    align-items: center;
    height: 100%;
    color: color(white);
    cursor: pointer;
    transition: color 0.3s ease;

    &:hover {
      color: color(pink);
    }

    &.focus {
      color: color(pink);
    }

    @include media(mobile) {
      padding: 16px 48px;
    }
  }
</style>
