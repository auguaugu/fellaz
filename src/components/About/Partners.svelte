<script lang="ts">
  import { partnersLogo } from '@/configs/partners';
</script>

<div class="partners">
  <div class="partners_logo">
    {#each [...partnersLogo, ...partnersLogo] as partner}
      <img src={partner.logo} alt="logo-{partner.name}" />
    {/each}
  </div>
</div>

<style lang="scss">
  .partners {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin: 0 auto;

    @include media(mobile) {
      height: auto;
    }
  }
  @keyframes swiperLeft {
    0% {
      left: 0px;
    }
    100% {
      left: var(--swiperWidth);
    }
  }
  .partners_logo {
    --swiperWidth: -5000px;
    height: 168px;
    display: flex;
    align-items: center;
    gap: 40px;
    border-top: 1px solid rgba(255, 255, 255, 0.2);

    img {
      position: relative;
      left: 0px;
      height: 64px;
      animation: swiperLeft 60s linear infinite;
    }

    @include media(mobile) {
      --swiperWidth: -2000px;
      height: 120px;
      gap: 16px;

      img {
        height: 40px;
      }
    }
  }
</style>
