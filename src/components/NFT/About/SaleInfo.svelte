<script lang="ts">
  import { _ } from 'svelte-i18n';

  import { WEB_URL } from '@/configs/constants';
  import {
    IconBinance,
    IconXclusive,
    IconTicketmaster,
  } from '@/configs/images';

  const sales = [
    {
      type: $_('nft_sale1_type'),
      date: $_('nft_sale1_date'),
      currency: $_('nft_sale1_currency'),
      price: $_('nft_sale1_price'),
      amount: $_('nft_sale1_amount'),
      market: 'binance',
    },
    {
      type: $_('nft_sale2_type'),
      date: $_('nft_sale2_date'),
      currency: $_('nft_sale2_currency'),
      price: $_('nft_sale2_price'),
      amount: $_('nft_sale2_amount'),
      market: 'xclusive',
    },
  ];
</script>

<div class="saleinfo">
  {#each sales as sale}
    <div class="box_sale" class:inactive={sale.date === 'Finished'}>
      <div class="box_contents">
        <div class="text_type">{sale.type}</div>
        <div class="box_info">
          <div class="text_date">{sale.date}</div>
          <div class="divider" />
          <div class="text_price">{@html sale.price}</div>
        </div>
      </div>
      <div class="box_buttons">
        {#if sale.market === 'binance'}
          <a
            class="button_market"
            href={WEB_URL.binance_nft}
            target="_blank"
            rel="noreferrer"
          >
            <img src={IconBinance} alt={`icon-${sale.market}`} />
            {$_('nft_sale1_market')}
          </a>
        {:else if sale.market === 'xclusive'}
          <a
            class="button_market xclusive"
            href={WEB_URL.xclusive_launchpad}
            target="_blank"
            rel="noreferrer"
          >
            <img src={IconXclusive} alt={`icon-${sale.market}`} />
            {$_('nft_sale2_market')}
          </a>
          <a
            class="button_market ticketmaster"
            href={WEB_URL.ticketmaster}
            target="_blank"
            rel="noreferrer"
          >
            <img src={IconTicketmaster} alt={`icon-ticketmaster`} />
            ticketmaster
          </a>
        {/if}
      </div>
    </div>
  {/each}
</div>

<style lang="scss">
  .saleinfo {
    width: 100%;
    max-width: 1016px;
    position: relative;
    display: flex;
    gap: 24px;
    margin: auto;

    @include media(laptop) {
      max-width: 100%;
      flex-direction: row;
      gap: 16px;
    }

    @include media(mobile) {
      flex-direction: column;
    }
  }
  .box_sale {
    width: calc(50% - 12px);
    min-height: 140px;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    background-color: color(white);
    border-radius: 16px;
    padding: 24px;

    &.inactive {
      opacity: 0.4;
      pointer-events: none;
    }

    @include media(laptop) {
      height: auto;
      flex-direction: column;
      gap: 16px;
      padding: 24px;
    }

    @include media(mobile) {
      width: 100%;
    }
  }
  .box_contents {
    display: flex;
    justify-content: space-between;

    @include media(laptop) {
      flex-direction: column;
      gap: 8px;
    }
  }
  .text_type {
    @include hellix(20, 700);
    color: color(grey2);

    @include media(laptop) {
      @include hellix(16, 600);
    }
  }
  .text_date {
    @include hellix(16, 400);
    color: color(grey2);
  }
  .box_info {
    display: flex;
    align-items: center;
    column-gap: 16px;
    flex-wrap: wrap;
  }
  .text_price {
    @include hellix(16, 400);
    color: color(grey7);
  }
  .box_buttons {
    width: 100%;
    display: flex;
    gap: 16px;

    @include media(laptop) {
      flex-direction: column;
      justify-content: center;
      gap: 8px;
      min-height: 104px;
    }

    @include media(mobile) {
      min-height: auto;
    }
  }
  .button_market {
    width: 100%;
    height: 48px;
    padding: 0 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;
    @include hellix(16, 600);
    background-color: color(yellow);
    border-radius: 12px;
    cursor: pointer;
    transition: opacity 0.3s ease;

    &:hover {
      opacity: 0.8;
    }

    &.xclusive {
      color: color(white);
      background: linear-gradient(105.88deg, #e066ff 0%, #4844ff 100%);
    }

    &.ticketmaster {
      color: color(white);
      background-color: #026cdf;
    }

    img {
      width: 24px;
      height: 24px;
    }

    @include media(laptop) {
      width: 100%;
      @include hellix(14, 600);

      img {
        width: 20px;
        height: 20px;
      }
    }
  }
  .divider {
    width: 1px;
    height: 8px;
    background-color: color(grey1);

    @include media(laptop) {
      height: 8px;
    }
  }
</style>
