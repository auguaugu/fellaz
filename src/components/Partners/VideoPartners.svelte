<script lang="ts">
  import Video from '@/components/Common/Video.svelte';

  import { partnersVideo } from '@/configs/partners';
</script>

<div class="video_partners">
  {#each partnersVideo as partner}
    <div class="box_partner">
      <div class="box_logo">
        <span class="logo_images">
          {#each partner.images as image}
            <img src={image} alt="logo-{partner.name}" />
          {/each}
        </span>
        <div class="divider" />
        <span>{partner.content}</span>
      </div>
      <div class="box_video">
        <Video src={partner.video} />
      </div>
    </div>
  {/each}
</div>

<style lang="scss">
  .video_partners {
    position: relative;
    display: flex;
    flex-direction: column;
  }
  .box_partner {
    position: relative;
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 60px;

    @include media(laptop) {
      padding: 0 24px;
    }
  }
  .box_logo {
    display: flex;
    align-items: center;
    column-gap: 8px;

    img {
      max-width: 100%;
      max-height: 100px;
    }

    span {
      display: flex;
      width: 430px;
      @include hellix(32, 400);
      color: color(white);

      &:first-of-type {
        justify-content: flex-end;
      }
    }

    @include media(laptop) {
      flex-direction: column;

      img {
        zoom: 0.8;
      }

      span {
        width: 100%;
        justify-content: center;
        @include hellix(20, 400);

        &:first-of-type {
          justify-content: center;
        }
      }
    }
  }
  .logo_images {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;

    @include media(laptop) {
      align-items: center;
    }
  }
  .box_video {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    object-fit: cover;
    opacity: 0.7;
  }
  .divider {
    width: 1px;
    height: 40px;
    background-color: #d9d9d9;
    opacity: 0.5;
    margin: 0 80px;

    @include media(laptop) {
      display: none;
    }
  }
</style>
