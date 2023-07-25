<script lang="ts">
  import { IconArrowRight } from '@/configs/images';

  export let step: {
    icon: string;
    title: string;
    desc: string;
    linkLabel?: string;
    link?: string;
  };
</script>

<div class="step">
  <div class="contents">
    <div class="box_icon"><img src={step.icon} alt="icon-{step.title}" /></div>
    <div class="step_title">{@html step.title}</div>
    <div class="step_desc">{step.desc}</div>
  </div>
  {#if step.linkLabel}
    <a
      class="step_link"
      class:isLink={!!step.link}
      href={step.link}
      target="_blank"
      rel="noreferrer"
    >
      {step.linkLabel}
      {#if step.link}
        <img src={IconArrowRight} alt="icon-arrow-right" />
      {/if}
    </a>
  {/if}
</div>

<style lang="scss">
  .step {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 24px;
    position: relative;
    width: 392px;
    min-height: 434px;
    background-color: rgba(255, 255, 255, 0.08);
    border-radius: 16px;
    padding: 40px;
    margin: 0;

    @include media(laptop) {
      width: 100%;
      min-height: auto;
      padding: 24px;
    }
  }
  .box_icon {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 64px;
    height: 64px;
    background-color: rgba(224, 102, 255, 0.1);
    border-radius: 12px;
    margin-bottom: 8px;

    img {
      width: 48px;
      height: 48px;
    }

    @include media(mobile) {
      width: 44px;
      height: 44px;

      img {
        width: 36px;
        height: 36px;
      }
    }
  }
  .contents {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }
  .step_title {
    @include hellix(24, 600);
    color: color(white);

    @include media(mobile) {
      @include hellix(20, 600);
    }
  }
  .step_desc {
    @include hellix(16, 400);
    color: color(grey1);

    @include media(mobile) {
      @include hellix(14, 400);
    }
  }
  .step_link {
    display: flex;
    align-items: center;
    @include hellix(16, 600);
    color: color(white);
    transition: opacity 0.3s ease;
    pointer-events: none;
    opacity: 0.5;

    &.isLink {
      pointer-events: all;
      opacity: 1;
    }

    &:hover {
      opacity: 0.8;

      &.isLink {
        opacity: 0.5;
      }
    }

    img {
      width: 24px;
      height: 24px;
      margin-left: 4px;
    }

    @include media(mobile) {
      @include hellix(14, 600);

      img {
        width: 16px;
        height: 16px;
      }
    }
  }
</style>
