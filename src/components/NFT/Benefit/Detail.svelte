<script lang="ts">
  import { onMount } from 'svelte';
  import { Pagination } from 'swiper';
  import { Swiper, SwiperSlide } from 'swiper/svelte';
  import 'swiper/css';
  import 'swiper/css/pagination';

  import ItemBenefit from '@/components/NFT/Benefit/ItemBenefit.svelte';

  export let closeModal: () => void;
  export let benefits: {
    title: string;
    items: string[];
    luckydraw?: boolean;
  }[];
  export let benefitIndex: number;

  onMount(() => {
    window.addEventListener('popstate', closeModal);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('popstate', closeModal);
      document.body.style.overflow = 'auto';
    };
  });
</script>

<div class="detail">
  <Swiper
    modules={[Pagination]}
    slidesPerView={1}
    pagination={{ clickable: true }}
    initialSlide={benefitIndex}
  >
    {#each benefits as benefit}
      <SwiperSlide>
        <div class="box_benefit">
          <ItemBenefit {benefit} isModal={true} />
        </div>
      </SwiperSlide>
    {/each}
  </Swiper>

  <button class="button_close" on:click={() => window.history.go(-1)}>
    <div class="icon_close" />
  </button>
</div>

<style lang="scss">
  .detail {
    width: 100vw;
    height: calc(var(--vh) + 2px);
    position: fixed;
    top: -2px;
    left: 0;
    background: rgba(0, 0, 0, 0.9);
    -webkit-backdrop-filter: blur(10px);
    backdrop-filter: blur(10px);
    z-index: 10000;
  }
  .button_close {
    position: fixed;
    top: 18px;
    left: 16px;
    width: 36px;
    height: 36px;
    z-index: 1;
    background-color: transparent;
  }
  .icon_close {
    position: relative;
    left: 3px;
    width: 18px;
    height: 2px;
    background-color: color(white);
    transform: rotate(45deg);

    &::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 18px;
      height: 2px;
      background-color: color(white);
      transform: rotate(90deg);
    }
  }
  .box_benefit {
    width: 100vw;
    height: var(--vh);
    display: flex;
    align-items: center;
    padding-bottom: 60px;
  }
</style>
