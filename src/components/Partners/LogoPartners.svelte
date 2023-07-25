<script lang="ts">
  import { partnersLogo } from '@/configs/partners';
</script>

<div class="partners">
  {#each partnersLogo as partner}
    <div class="box_logo">
      <img src={partner.logo} alt="logo-{partner.name}" />
    </div>
  {/each}
</div>

<style lang="scss">
  .partners {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    column-gap: 24px;
    row-gap: 40px;
    width: 100%;
    max-width: 1280px;
    padding: 200px 0;
    margin: auto;

    @include media(mobile) {
      padding: 80px 24px;
    }
  }
  .box_logo {
    width: 288px;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      height: 75%;
    }

    @include media(mobile) {
      width: 152px;
      height: 42px;
    }
  }
</style>
