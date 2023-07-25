<script lang="ts">
  import { IconPlus, IconMinus } from '@/configs/images';

  export let isOpen: boolean;
  export let onClick: () => void;
  export let title: string;
  export let desc: string;

  let answerEle: HTMLElement;
</script>

<div class="question">
  <button class="question_item" on:click={onClick}>
    <div class="box_title">
      <div class="text_title">
        {title}
      </div>
    </div>
    <div class="box_icon">
      {#if isOpen}
        <img src={IconMinus} alt="icon_minus" />
      {:else}
        <img src={IconPlus} alt="icon_plus" />
      {/if}
    </div>
  </button>
  <div
    bind:this={answerEle}
    class="answer_item"
    style="max-height: {isOpen ? answerEle?.scrollHeight + 'px' : '0px'}"
  >
    <div class="box_desc">
      <div class="text_desc">{@html desc}</div>
    </div>
  </div>
</div>

<style lang="scss">
  .question {
    position: relative;
    display: flex;
    flex-direction: column;
    background-color: color(grey7);
    border-bottom: 2px solid color(black);

    @include media(mobile) {
    }
  }
  .question_item {
    display: flex;
    justify-content: space-between;
    padding: 40px;
    cursor: pointer;
    overflow: hidden;
    z-index: 1;

    @include media(mobile) {
      padding: 24px;
      cursor: auto;
    }
  }
  .box_title {
    height: 100%;
    display: flex;
    align-items: center;
    flex: 1 1 0;
    padding-right: 40px;

    @include media(mobile) {
      padding-right: 10px;
    }
  }
  .text_title {
    @include hellix(20, 600);
    color: color(white);
    white-space: pre-wrap;

    @include media(mobile) {
      @include hellix(14, 400);
    }
  }
  .box_icon {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 4px;

    img {
      width: 24px;
      height: 24px;
    }

    @include media(mobile) {
      img {
        width: 16px;
        height: 16px;
      }
    }
  }
  .answer_item {
    max-height: 0;
    transition: max-height 0.25s;
    overflow: hidden;
    box-sizing: content-box;
    z-index: 1;
  }
  .box_desc {
    padding: 0 40px 40px;
    box-sizing: content-box;

    @include media(mobile) {
      padding: 0 24px 24px;
    }
  }
  .text_desc {
    display: inline-block;
    height: 100%;
    white-space: pre-line;
    @include hellix(16, 400);
    color: color(grey2);

    @include media(mobile) {
      word-break: break-word;
      @include hellix(14, 400);
    }
  }
</style>
