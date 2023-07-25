<script lang="ts">
  import { _ } from 'svelte-i18n';

  import { ImgAboutEcosystem } from '@/configs/images';
</script>

<div class="ecosystem">
  <div class="ecosystem_title">
    <div class="main_title">{$_('about_ecosystem_title1')}</div>
    <div class="main_title white">{$_('about_ecosystem_title2')}</div>
  </div>

  <img class="img_ecosystem" src={ImgAboutEcosystem} alt="img-ecosystem" />
</div>

<style lang="scss">
  .ecosystem {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 auto;
    padding: 0 60px;

    @include media(mobile) {
      padding: 0 24px;
    }
  }
  .ecosystem_title {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 80px;

    .main_title {
      background: linear-gradient(105.88deg, #e066ff 0%, #4844ff 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      @include hellix(64, 700);

      &.white {
        background: none;
        -webkit-text-fill-color: color(white);
        color: color(white);
      }
    }

    @include media(mobile) {
      .main_title {
        @include hellix(26, 700);
      }
    }
  }
  .img_ecosystem {
    width: 100%;
    max-width: 940px;
  }
</style>
