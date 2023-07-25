<script lang="ts">
  import { _ } from 'svelte-i18n';

  import Step from '@/components/NFT/HowToUse/Step.svelte';

  import { WEB_URL } from '@/configs/constants';
  import { IconBuy, IconTransfer, IconVerify } from '@/configs/images';

  const data = [
    {
      icon: IconBuy,
      title: $_('nft_how_step1'),
      desc: $_('nft_how_step1_desc'),
      linkLabel: $_('nft_how_step1_label'),
    },
    {
      icon: IconTransfer,
      title: $_('nft_how_step2'),
      desc: $_('nft_how_step2_desc'),
      linkLabel: $_('nft_how_step2_label'),
      link: WEB_URL.favorlet_gitbook,
    },
    {
      icon: IconVerify,
      title: $_('nft_how_step3'),
      desc: $_('nft_how_step3_desc'),
    },
  ];
</script>

<div class="howtouse">
  <div class="how_title">{$_('nft_how')}</div>
  <div class="contents">
    {#each data as step}
      <Step {step} />
    {/each}
  </div>
</div>

<style lang="scss">
  .howtouse {
    position: relative;
    display: flex;
    flex-direction: column;
    padding: 240px 60px;
    background-color: color(black);

    @include media(laptop) {
      padding: 160px 24px;
    }
  }
  .how_title {
    @include hellix(64, 700);
    color: color(white);
    margin-bottom: 80px;
    text-align: center;

    @include media(mobile) {
      @include hellix(26, 700);
      margin-bottom: 40px;
    }
  }
  .contents {
    width: 100%;
    max-width: 1224px;
    display: flex;
    gap: 24px;
    position: relative;
    margin: auto;

    @include media(laptop) {
      flex-direction: column;
    }
  }
</style>
