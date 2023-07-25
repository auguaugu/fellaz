<script lang="ts">
  import { _ } from 'svelte-i18n';

  const roadmaps = [
    {
      title: $_('pass_roadmap_2q_title'),
      item: [$_('pass_roadmap_2q_item1'), $_('pass_roadmap_2q_item2')],
    },
    {
      title: $_('pass_roadmap_3q_title'),
      item: [
        $_('pass_roadmap_3q_item1'),
        $_('pass_roadmap_3q_item2'),
        $_('pass_roadmap_3q_item3'),
      ],
    },
    {
      title: $_('pass_roadmap_4q_title'),
      item: [$_('pass_roadmap_4q_item1'), $_('pass_roadmap_4q_item2')],
    },
  ];
</script>

<div class="roadmap">
  <div class="roadmap_title">
    <div class="main_title">{$_('pass_roadmap_title')}</div>
  </div>

  <div class="roadmap_container">
    {#each roadmaps as { title, item }}
      <div class="box_roadmap">
        <div class="hover_box" />
        <div>
          <div class="box_title">2023 <span>{title}</span></div>
          {#each item as item}
            <div class="box_item">{item}</div>
          {/each}
        </div>
      </div>
    {/each}
  </div>
</div>

<style lang="scss">
  .roadmap {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 272px auto;
    padding: 0 60px;

    @include media(mobile) {
      margin: 0 auto 100px;
      padding: 0 24px;
    }
  }
  .roadmap_title {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 60px;

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
  .roadmap_container {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 24px;

    @include media(mobile) {
      max-width: 720px;
      flex-direction: column;
      gap: 12px;
    }
  }
  .box_roadmap {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    max-width: 392px;
    min-height: 264px;
    position: relative;
    transition: all 0.3s ease;
    color: color(white);
    padding: 40px;
    overflow: hidden;
    background-color: color(grey6);
    border-radius: 16px;

    &:hover {
      background-color: transparent;
    }

    &:hover .hover_box {
      opacity: 1;
      visibility: visible;
    }

    @include media(mobile) {
      padding: 28px 32px;
      max-width: 100%;
      min-height: auto;
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
    border-radius: 16px;
  }
  .box_title {
    @include hellix(32, 400);

    span {
      @include hellix(32, 700);
    }

    @include media(mobile) {
      @include hellix(20, 400);

      span {
        @include hellix(20, 700);
      }
    }
  }
  .box_item {
    position: relative;
    @include hellix(16, 400);
    color: color(white);
    white-space: pre-line;
    margin-top: 2px;
    margin-left: 10px;

    &:nth-of-type(2) {
      margin-top: 20px;
    }

    &::before {
      content: '';
      position: absolute;
      top: 10px;
      left: -10px;
      width: 4px;
      height: 4px;
      border-radius: 50%;
      background-color: color(white);
      opacity: 0.4;
    }

    @include media(mobile) {
      @include hellix(14, 400);

      &::before {
        top: 8px;
        width: 3px;
        height: 3px;
      }
    }
  }
</style>
