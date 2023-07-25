<script lang="ts">
  import { _ } from 'svelte-i18n';

  import { WEB_URL } from '@/configs/constants';
  import {
    LogoFellaz,
    IconTwitter,
    IconDiscord,
    IconMedium,
    IconTelegram,
    IconGitbook,
  } from '@/configs/images';

  const icons = [
    { name: 'twitter', link: WEB_URL.twitter, icon: IconTwitter },
    { name: 'discord', link: WEB_URL.discord, icon: IconDiscord },
    { name: 'medium', link: WEB_URL.medium, icon: IconMedium },
    { name: 'telegram', link: WEB_URL.telegram, icon: IconTelegram },
    { name: 'gitbook', link: WEB_URL.gitbook, icon: IconGitbook },
  ];
</script>

<div class="container_footer">
  <div class="footer">
    <div class="footer_content">
      <img src={LogoFellaz} alt="logo-fellaz-footer" />
      <div class="footer_text">{$_('copyright')}</div>
      <div class="footer_link">
        <a
          href={WEB_URL.termsOfUse}
          target="_blank"
          rel="noreferrer"
          class="footer_text"
        >
          Terms of Use
        </a>
        <div class="divider" />
        <a
          href={WEB_URL.privacyPolicy}
          target="_blank"
          rel="noreferrer"
          class="footer_text"
        >
          Privacy Policy
        </a>
        <div class="divider" />
        <a href="mailto:social@fellaz.io" class="footer_text">Contact</a>
      </div>
    </div>

    <div class="footer_icon">
      {#each icons as { name, link, icon }}
        <a href={link} target="_blank" rel="noreferrer">
          <img src={icon} alt="icon_{name}" />
        </a>
      {/each}
    </div>
  </div>
</div>

<style lang="scss">
  .container_footer {
    width: 100%;
    background-color: #101010;
    padding: 40px 60px;

    @include media(mobile) {
      padding: 40px 24px;
    }
  }
  .footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 40px;
    width: 100%;
    max-width: 1236px;
    height: 100%;
    margin: auto;

    img {
      width: 108.5px;
      height: 24px;
    }

    @include media(mobile) {
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
      gap: 20px;
    }
  }
  .footer_text {
    @include hellix(14, 400);
    color: color(grey1);

    @include media(mobile) {
      @include hellix(12, 400);
    }
  }
  .footer_content {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 40px;

    @include media(mobile) {
      flex-direction: column;
      align-items: flex-start;
      gap: 6px;

      img {
        margin-bottom: 40px;
      }
    }
  }
  .footer_link {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    column-gap: 16px;
    row-gap: 6px;
  }
  .divider {
    width: 1px;
    height: 12px;
    background-color: color(white);
    opacity: 0.1;
  }
  .footer_icon {
    display: flex;
    gap: 32px;

    img {
      width: 32px;
      height: 32px;
    }

    @include media(mobile) {
      gap: 26px;
      margin-top: 20px;

      img {
        width: 20px;
        height: 20px;
      }
    }
  }
</style>
