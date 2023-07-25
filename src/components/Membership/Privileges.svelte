<script lang="ts">
  import { _ } from 'svelte-i18n';

  import { IconIrl, IconMiu, IconDao, IconToken } from '@/configs/images';

  const privileges = [
    {
      title: 'pass_privileges_subtitle_1',
      desc: 'pass_privileges_desc1',
      icon: IconIrl,
    },
    {
      title: 'pass_privileges_subtitle_2',
      desc: 'pass_privileges_desc2',
      icon: IconMiu,
    },
    {
      title: 'pass_privileges_subtitle_3',
      desc: 'pass_privileges_desc3',
      icon: IconDao,
    },
    {
      title: 'pass_privileges_subtitle_4',
      desc: 'pass_privileges_desc4',
      icon: IconToken,
    },
  ];
</script>

<div class="privileges">
  <div class="privileges_title">
    <div class="main_title">{$_('pass_privileges_title')}</div>
  </div>

  <div class="privileges_container">
    {#each privileges as { title, desc, icon }}
      <div class="privileges_box">
        <div class="box_icon">
          <img src={icon} alt={`img-${title}`} />
        </div>
        <div class="box_contents">
          <div class="box_subtitle">{$_(title)}</div>
          <div class="box_desc">{$_(desc)}</div>
        </div>
      </div>
    {/each}
  </div>
</div>

<style lang="scss">
  .privileges {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 80px;
    max-width: 1224px;
    margin: 82px auto 270px;
    padding: 0 60px;
    box-sizing: content-box;

    @include media(mobile) {
      gap: 40px;
      margin: 160px auto;
      padding: 0 24px;
    }
  }
  .privileges_title {
    display: flex;
    flex-direction: column;

    .main_title {
      @include hellix(64, 700);
      color: color(white);

      @include media(mobile) {
        @include hellix(26, 700);
        text-align: center;
      }
    }
  }

  .privileges_container {
    width: 100%;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 24px;
  }
  .privileges_box {
    width: 100%;
    max-width: 288px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 32px;
    background-color: color(white, 0.08);
    box-shadow: 0px 0px 40px rgba(0, 0, 0, 0.2);
    backdrop-filter: blur(24px);
    border-radius: 16px;
    padding: 40px;

    @include media(mobile) {
      max-width: 100%;
      flex-direction: row;
      align-items: flex-start;
      gap: 30px;
      padding: 24px;
    }
  }
  .box_icon {
    width: 64px;
    height: 64px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: color(#e066ff, 0.1);
    border-radius: 12px;

    img {
      width: 48px;
    }

    @include media(mobile) {
      min-width: 48px;
      width: 48px;
      height: 48px;

      img {
        width: 36px;
      }
    }
  }
  .box_contents {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 16px;

    @include media(mobile) {
      align-items: flex-start;
      gap: 8px;
    }
  }
  .box_subtitle {
    @include hellix(24, 600);
    color: color(white);
    text-align: center;

    @include media(mobile) {
      @include hellix(20, 600);
      text-align: left;
    }
  }
  .box_desc {
    @include hellix(16, 400);
    color: color(white);
    text-align: center;
    padding: 0 10px;

    @include media(mobile) {
      @include hellix(14, 400);
      text-align: left;
      padding: 0;
    }
  }
</style>
