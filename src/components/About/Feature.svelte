<script lang="ts">
  import { _ } from 'svelte-i18n';

  import LottieAnimation from '@/components/Common/LottieAnimation.svelte';

  import {
    LottieCommunity,
    LottieOwnership,
    LottieApplicationBlack,
  } from '@/configs/lotties';

  const features = [
    {
      lottie: LottieCommunity,
      title: $_('about_feature1_title'),
      items: [$_('about_feature1_desc')],
    },
    {
      lottie: LottieOwnership,
      title: $_('about_feature2_title'),
      items: [$_('about_feature2_desc')],
    },
    {
      lottie: LottieApplicationBlack,
      title: $_('about_feature3_title'),
      items: [$_('about_feature3_desc')],
    },
  ];
</script>

<div class="feature">
  <div class="feature_container">
    {#each features as { lottie, title, items }}
      <div class="box_feature">
        <div class="box_lottie">
          <LottieAnimation data={lottie} />
        </div>
        <span>{title}</span>
        <div class="hover_box">
          <div class="box_title">{title}</div>
          <div class="box_desc">
            {#each items as item}
              <div class="feature_item">{item}</div>
            {/each}
          </div>
        </div>
      </div>
    {/each}
  </div>
</div>

<style lang="scss">
  .feature {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    margin: 0 auto 320px;
    padding: 0 60px;

    @include media(mobile) {
      margin: 0 auto 160px;
      padding: 0 24px;
    }
  }
  .feature_container {
    display: flex;
    gap: 16px;
    flex-wrap: wrap;
    width: 100%;
    max-width: 1226px;
    overflow: hidden;

    @include media(mobile) {
      flex-direction: column;
      width: 100%;
      height: auto;
      border-radius: 0;
    }
  }
  .box_feature {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    @include hellix(40, 700);
    text-align: center;
    position: relative;
    width: 100%;
    height: auto;
    min-height: 296px;
    background-color: color(grey6);
    transition: all 0.3s ease;
    color: color(white);
    border-radius: 16px;
    overflow: hidden;

    span {
      padding: 0 20px;
    }

    &:hover {
      .box_lottie,
      span {
        display: none;
      }
    }
    &:hover .hover_box {
      opacity: 1;
      visibility: visible;
    }

    @include media(mobile) {
      @include hellix(24, 700);

      .box_lottie,
      span {
        display: none;
      }
    }
  }
  .hover_box {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: absolute;
    top: 0;
    left: 0;
    background: linear-gradient(105.88deg, color(pink) 0%, color(blue) 100%);
    box-shadow: 20px 20px 24px rgba(0, 0, 0, 0.32);
    backdrop-filter: blur(24px);
    transition: all 0.3s ease;
    opacity: 0;
    visibility: hidden;
    padding: 40px;
    text-align: left;
    border-radius: 16px;

    @include media(mobile) {
      padding: 32px;
      background: transparent;
      box-shadow: none;
      backdrop-filter: none;
      opacity: 1;
      visibility: visible;
    }
  }
  .box_title {
    @include hellix(32, 700);

    @include media(mobile) {
      @include hellix(20, 600);
      background: linear-gradient(105.88deg, #e066ff 0%, #4844ff 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }
  }
  .box_desc {
    display: flex;
    flex-direction: column;
    gap: 8px;
    @include hellix(20, 400);
    margin-top: 20px;
    color: color(white);

    @include media(mobile) {
      @include hellix(14, 400);
      margin-top: 16px;
    }
  }
  .box_lottie {
    width: 100%;
    max-width: 120px;
    margin: 0 auto 18px;

    @include media(mobile) {
      max-width: 66px;
      margin: 0 auto;
    }
  }
  .feature_item {
    position: relative;
    @include hellix(20, 400);
    color: color(white);
    /* margin-left: 10px;

    &::before {
      content: '';
      position: absolute;
      top: 12px;
      left: -10px;
      width: 4px;
      height: 4px;
      border-radius: 50%;
      background-color: color(white);
    } */

    @include media(mobile) {
      @include hellix(14, 400);
      /* margin-left: 8px;

      &::before {
        top: 8px;
      } */
    }
  }
</style>
