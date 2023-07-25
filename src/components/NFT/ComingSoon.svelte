<script lang="ts">
  import Email from '@/components/About/Email.svelte';

  import {
    LogoFellaz,
    LogoUltraKorea,
    LogoFavorletWhite,
    IconUnion,
  } from '@/configs/images';
</script>

<div class="comingsoon">
  <div class="back_dim" />
  <div class="text_soon">COMING SOON !</div>
  <div class="text_main">
    ULTRA KOREA 2023<br />FELLAZ NFT TICKET
  </div>

  <div class="box_logo">
    <img src={LogoFellaz} alt="logo-fellaz" />
    <img src={IconUnion} alt="icon_union" />
    <img src={LogoUltraKorea} alt="logo-ultrakorea" />
  </div>

  <div class="contents">
    <div class="contents_title">EXCLUSIVE BENEFITS COMING SOON</div>
    <div class="contents_desc">Only in Fellaz</div>
  </div>

  <div class="box_partners">
    <img src={LogoFellaz} alt="logo-fellaz" />
    <img src={LogoFavorletWhite} alt="logo-favorlet" />
  </div>
</div>
<Email desc="about_email_desc1" />

<style lang="scss">
  .back_dim {
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.7);
    z-index: -1;
  }
  .comingsoon {
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 168px 60px 80px;

    @include media(mobile) {
      align-items: flex-start;
      padding: 120px 24px 60px;
    }
  }
  .text_soon {
    @include hellix(26, 700);
    color: color(pink);

    @include media(mobile) {
      @include hellix(16, 600);
    }
  }
  .text_main {
    @include hellix(64, 700) {
      font-size: min(64px, 4.5vw);
      line-height: min(68px, 5vw);
    }
    text-transform: uppercase;
    color: color(white);
    margin-top: 20px;
    text-align: center;

    @include media(mobile) {
      @include hellix(40, 700) {
        font-size: min(36px, 7.5vw);
        line-height: min(40px, 8.5vw);
      }
      margin-top: 20px;
      text-align: left;
    }
  }
  .box_logo {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 40px;
    margin: 64px 0 154px;

    img {
      height: min(80px, 5.5vw);

      &:nth-of-type(2) {
        height: min(64px, 4.5vw);
      }
    }

    @include media(mobile) {
      gap: 8px;
      margin: 40px 0 160px;

      img {
        height: min(32px, 7.8vw);

        &:nth-of-type(2) {
          height: min(24px, 6.8vw);
        }
      }
    }
  }
  .contents {
    width: 100%;
    max-width: 416px;
    min-height: 236px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 8px;
    padding: 32px;
    background: linear-gradient(0deg, #1f1f1f, #1f1f1f),
      rgba(255, 255, 255, 0.06);
    border-radius: 16px;
    text-align: center;
  }
  .contents_title {
    width: 100%;
    max-width: 194px;
    color: color(pink);
    @include hellix(20, 700);
  }
  .contents_desc {
    width: 100%;
    max-width: 194px;
    color: color(white);
    @include hellix(16, 600);
  }
  .box_partners {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 40px;
    margin-top: 40px;
    opacity: 0.5;

    img {
      height: 30px;

      &:first-of-type {
        height: 24px;
      }
    }

    @include media(mobile) {
      flex-direction: column;
      align-items: flex-start;
      gap: 24px;
      margin-top: 80px;
    }
  }
</style>
