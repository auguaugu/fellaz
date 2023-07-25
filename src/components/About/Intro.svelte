<script lang="ts">
  import { _ } from 'svelte-i18n';

  import Video from '@/components/Common/Video.svelte';

  import { VideoAboutMain, VideoAboutMainMo } from '@/configs/videos';
  import { isMobile } from '@/store/media';
</script>

<div class="intro">
  <div class="intro_title">
    <div class="main_title"><span>{$_('about_intro_title1')}</span></div>
    <div class="main_title second">
      <span>{$_('about_intro_title2')}</span>
      <span>{$_('about_intro_title3')}</span>
    </div>

    <div class="main_title third">
      <span>{$_('about_intro_title4')}</span>
    </div>

    <div class="sub_title">
      <span>{$_('about_intro_desc')}</span>
    </div>
  </div>

  <div class="box_video">
    <Video src={$isMobile ? VideoAboutMainMo : VideoAboutMain} />
  </div>
</div>

<style lang="scss">
  .intro {
    position: relative;
    height: 100vh;
    padding: 0 60px;

    @include media(mobile) {
      padding: 0 24px;
    }
  }

  @keyframes fadeInUp {
    100% {
      top: 0;
    }
  }
  @keyframes fadeInOpacity {
    100% {
      opacity: 1;
    }
  }
  @keyframes fadeInRight {
    100% {
      left: 0;
    }
  }
  .intro_title {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    max-width: 1244px;
    height: 100%;
    margin: auto;
    padding-top: 240px;
    overflow: hidden;

    .main_title {
      width: fit-content;
      @include hellix(120, 700) {
        font-size: min(120px, 7vw);
        line-height: min(120px, 7vw);
      }
      color: color(white);
      overflow: hidden;

      span {
        position: relative;
        top: 140px;
        left: 0;
        animation: fadeInUp 1s;
        animation-fill-mode: forwards;
        word-break: keep-all;
      }

      &.second {
        @include hellix(100, 400) {
          font-size: min(100px, 5vw);
          line-height: min(100px, 5vw);
        }
        word-break: break-all;

        span {
          animation-delay: 0.5s;

          &:last-of-type {
            left: 720px;
            animation: fadeInUp 1s, fadeInRight 0.5s 0.85s;
            animation-fill-mode: forwards;
          }
        }
      }
      &.third {
        @include hellix(100, 400) {
          font-size: min(100px, 5vw);
          line-height: min(100px, 5vw);
        }
        word-break: break-all;

        span {
          animation-delay: 1s;
        }
      }
    }

    @include media(mobile) {
      max-width: auto;

      .main_title {
        @include hellix(54, 700) {
          font-size: min(54px, 15vw);
          line-height: min(54px, 15vw);
        }
      }
      .main_title.second,
      .main_title.third {
        @include hellix(48, 400) {
          font-size: min(48px, 12.5vw);
          line-height: min(48px, 12.5vw);
        }

        span {
          &:last-of-type {
            display: block;
          }
        }
      }
    }
  }
  .sub_title {
    max-width: min(732px, 50vw);
    height: fit-content;
    @include hellix(20, 400) {
      font-size: min(20px, 1.4vw);
      line-height: min(30px, 2.1vw);
    }
    margin-top: 16px;
    color: color(grey1);
    overflow: hidden;

    span {
      opacity: 0;
      animation: fadeInOpacity 1s 1.5s;
      animation-fill-mode: forwards;
    }

    @include media(mobile) {
      max-width: 100%;
      @include hellix(14, 400);

      span {
        animation: fadeInOpacity 1s 1.75s;
        animation-fill-mode: forwards;
      }
    }
  }
  .box_video {
    display: flex;
    justify-content: flex-end;
    position: absolute;
    top: 0;
    right: 0;
    width: 100vw;
    max-width: 1920px;
    z-index: -1;
    transition: all 1s ease;

    @include media(desktop) {
      max-width: 1400px;
    }
    @include media(mobile) {
      width: 120%;
    }
  }
</style>
