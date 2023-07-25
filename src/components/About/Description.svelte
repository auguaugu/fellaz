<script lang="ts">
  import { _ } from 'svelte-i18n';

  import Video from '@/components/Common/Video.svelte';

  import { VideoAboutSub } from '@/configs/videos';
</script>

<div class="description">
  <div class="description_animation">
    <Video src={VideoAboutSub} />
  </div>

  <div class="description_content">
    <div class="description_title">
      <div class="main_title">{$_('about_description_title1')}</div>
      <div class="main_title">{$_('about_description_title2')}</div>
    </div>

    <div class="description_desc">
      <div class="main_desc">
        <span> {$_('about_description_subtitle1')}</span>
      </div>
      <div class="sub_desc">{$_('about_description_desc')}</div>
    </div>
  </div>
</div>

<style lang="scss">
  .description {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 40px;
    max-width: 1524px;
    margin: 400px auto 216px;
    padding: 0 60px;

    @include media(mobile) {
      margin: 160px auto;
      padding: 0 24px;
    }
  }
  .description_animation {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 500px;
    height: 500px;
    z-index: -1;
    transition: all 1s ease;

    @include media(mobile) {
      width: 100%;
      height: 100%;
      max-width: 340px;
      max-height: 340px;
    }
  }
  .description_content {
    max-width: 764px;
    display: flex;
    flex-direction: column;
    gap: 80px;

    @include media(mobile) {
      gap: 40px;
    }
  }
  .description_title {
    display: flex;
    flex-direction: column;

    .main_title {
      @include hellix(64, 700);
      color: color(white);

      @include media(mobile) {
        @include hellix(26, 700);
      }
    }
  }
  .description_desc {
    display: flex;
    flex-direction: column;
    gap: 20px;

    .main_desc {
      @include hellix(32, 700);
      color: color(white);
    }
    .sub_desc {
      @include hellix(20, 400);
      color: color(grey1);
    }

    @include media(mobile) {
      gap: 16px;

      .main_desc {
        @include hellix(20, 600);

        span {
          display: block;
        }
      }
      .sub_desc {
        @include hellix(14, 600);
      }
    }
  }
</style>
