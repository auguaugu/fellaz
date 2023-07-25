<script lang="ts">
  import { _ } from 'svelte-i18n';

  import Detail from '@/components/NFT/Benefit/Detail.svelte';
  import ItemBenefit from '@/components/NFT/Benefit/ItemBenefit.svelte';

  const benefits = [
    {
      title: $_('nft_benefit1_title'),
      items: [
        $_('nft_benefit1_item1'),
        $_('nft_benefit1_item2'),
        $_('nft_benefit1_item3'),
        $_('nft_benefit1_item4'),
        $_('nft_benefit1_item5'),
      ],
    },
    {
      title: $_('nft_benefit2_title'),
      items: [
        $_('nft_benefit2_item1'),
        $_('nft_benefit2_item2'),
        $_('nft_benefit2_item3'),
      ],
      luckydraw: true,
    },
    {
      title: $_('nft_benefit3_title'),
      items: [$_('nft_benefit3_item1'), $_('nft_benefit3_item2')],
    },
    {
      title: $_('nft_benefit4_title'),
      items: [$_('nft_benefit4_item1'), $_('nft_benefit4_item2')],
    },
  ];

  let isModalOpen: boolean = false;
  let benefitIndex: number = 0;

  const openModal = (index: number) => {
    if (!matchMedia('(max-width: 768px)').matches) return;
    benefitIndex = index;
    isModalOpen = true;
    window.history.pushState(null, null);
  };
  const closeModal = () => {
    isModalOpen = false;
  };
</script>

{#if isModalOpen}
  <Detail {closeModal} {benefits} {benefitIndex} />
{/if}

<div class="benefit">
  <div class="contents">
    <div class="box_benefits">
      {#each benefits as benefit, idx}
        <ItemBenefit openModal={() => openModal(idx)} {benefit} />
      {/each}
    </div>
  </div>
</div>

<style lang="scss">
  .benefit {
    position: relative;
    padding: 0 60px;
    background-color: color(black);

    @include media(laptop) {
      padding: 0 24px;
    }
  }
  .contents {
    width: 100%;
    max-width: 1016px;
    display: flex;
    flex-direction: column;
    gap: 24px;
    margin: auto;

    @include media(laptop) {
      max-width: 100%;
      gap: 16px;
    }
  }
  .box_benefits {
    position: relative;
    display: flex;
    flex-wrap: wrap;
    gap: 24px;

    @include media(laptop) {
      gap: 16px;
    }
  }
</style>
