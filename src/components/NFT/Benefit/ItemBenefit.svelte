<script lang="ts">
  import { _ } from 'svelte-i18n';

  import { IconPlus } from '@/configs/images';

  export let openModal: () => void = () => {};
  export let benefit: {
    title: string;
    items: string[];
    luckydraw?: boolean;
  };
  export let isModal: boolean = false;
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div class="box_benefit" class:isModal on:click={openModal}>
  {#if benefit.luckydraw}
    <div class="box_lucky" class:isModal>{$_('nft_luckydraw')}</div>
  {/if}
  <div class="text_title">{benefit.title}</div>
  <div class="box_item" class:isModal>
    {#each benefit.items as item}
      <div class="text_item">{item}</div>
    {/each}
  </div>
  <img class="icon_plus" class:isModal src={IconPlus} alt="icon-plus" />
</div>

<style lang="scss">
  .box_benefit {
    position: relative;
    width: 100%;
    max-width: 496px;
    display: flex;
    flex-direction: column;
    gap: 16px;
    padding: 40px;
    background-color: color(grey6);
    border-radius: 16px;

    &.isModal {
      background-color: transparent;
    }

    @include media(laptop) {
      max-width: calc(50% - 8px);
    }

    @include media(mobile) {
      max-width: 100%;
      padding: 24px;
    }
  }
  .box_lucky {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 116px;
    height: 40px;
    @include hellix(14, 600);
    color: color(pink);
    border: 2px solid color(pink);
    border-radius: 32px;
    margin-bottom: 8px;

    @include media(mobile) {
      &:not(.isModal) {
        display: none;
      }
    }
  }
  .text_title {
    @include hellix(24, 600);
    color: color(white);

    @include media(mobile) {
      @include hellix(20, 600);
    }
  }
  .box_item {
    display: flex;
    flex-direction: column;
    gap: 2px;

    @include media(mobile) {
      &:not(.isModal) {
        display: none;
      }
    }
  }
  .text_item {
    position: relative;
    @include hellix(16, 400);
    color: color(grey1);
    margin-left: 10px;

    &::before {
      content: '';
      position: absolute;
      top: 10px;
      left: -10px;
      width: 4px;
      height: 4px;
      border-radius: 50%;
      background-color: color(white);
      opacity: 0.4;
    }
  }
  .icon_plus {
    display: none;

    @include media(mobile) {
      &:not(.isModal) {
        display: block;
        position: absolute;
        top: 22px;
        right: 24px;
        width: 32px;
        height: 32px;
      }
    }
  }
</style>
