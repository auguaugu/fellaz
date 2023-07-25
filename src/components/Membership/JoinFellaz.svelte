<script lang="ts">
  import { _ } from 'svelte-i18n';

  import { WEB_URL } from '@/configs/constants';
  import { IconTwitter, IconDiscord } from '@/configs/images';
</script>

<div class="join">
  <div class="join_title">
    <div class="main_title">{$_('pass_join_title')}</div>
  </div>

  <div class="join_icons">
    <a class="box_icon" href={WEB_URL.twitter} target="_blank" rel="noreferrer">
      <div class="hover_box" />
      <img src={IconTwitter} alt="icon-twitter" />
    </a>
    <a class="box_icon" href={WEB_URL.discord} target="_blank" rel="noreferrer">
      <div class="hover_box" />
      <img src={IconDiscord} alt="icon-discord" />
    </a>
  </div>

  <div class="join_desc">
    <div class="text_desc">{$_('pass_join_desc1')}</div>
    <div class="text_desc">{$_('pass_join_desc2')}</div>
    <div class="text_desc">{$_('pass_join_desc3')}</div>
  </div>
</div>

<style lang="scss">
  .join {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 auto 320px;
    padding: 0 60px;

    @include media(mobile) {
      margin: 0 auto 100px;
      padding: 0 24px;
    }
  }
  .join_title {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 80px;

    .main_title {
      @include hellix(64, 700);
      color: color(white);
    }

    @include media(mobile) {
      margin-bottom: 40px;

      .main_title {
        @include hellix(26, 700);
      }
    }
  }
  .join_icons {
    display: flex;
    gap: 32px;
  }
  .box_icon {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 64px;
    height: 64px;
    background-color: color(grey5);
    border-radius: 50%;
    transition: all 0.3s ease;
    overflow: hidden;
    cursor: pointer;

    &:hover {
      background-color: transparent;
    }

    &:hover .hover_box {
      opacity: 1;
      visibility: visible;
    }

    img {
      width: 32px;
      height: 32px;
    }

    @include media(mobile) {
      width: 48px;
      height: 48px;

      img {
        width: 24px;
        height: 24px;
      }
    }
  }
  .hover_box {
    width: 100%;
    height: 100%;
    position: absolute;
    inset: 0;
    background: linear-gradient(105.88deg, color(pink) 0%, color(blue) 100%);
    box-shadow: 20px 20px 24px rgba(0, 0, 0, 0.32);
    backdrop-filter: blur(24px);
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s ease;
    z-index: -1;
    border-radius: 50%;
  }
  .join_desc {
    width: 100%;
    max-width: 808px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    margin-top: 40px;
  }
  .text_desc {
    @include hellix(16, 400);
    color: color(grey1);
    text-align: center;
    white-space: pre-line;

    @include media(mobile) {
      @include hellix(14, 400);
      text-align: left;
    }
  }
</style>
