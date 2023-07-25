<script lang="ts">
  import { _ } from 'svelte-i18n';

  import FaqItem from './FaqItem.svelte';

  import { createLangLink } from '@/utils';

  const questions = [
    {
      title: $_('nft_faq_Q1'),
      desc: createLangLink($_('nft_faq_A1')),
    },
    {
      title: $_('nft_faq_Q2'),
      desc: createLangLink($_('nft_faq_A2')),
    },
    {
      title: $_('nft_faq_Q3'),
      desc: createLangLink($_('nft_faq_A3')),
    },
    {
      title: $_('nft_faq_Q4'),
      desc: createLangLink($_('nft_faq_A4')),
    },
    {
      title: $_('nft_faq_Q5'),
      desc: createLangLink($_('nft_faq_A5')),
    },
    {
      title: $_('nft_faq_Q6'),
      desc: createLangLink($_('nft_faq_A6')),
    },
    {
      title: $_('nft_faq_Q7'),
      desc: createLangLink($_('nft_faq_A7')),
    },
  ];

  let activeIndex = -1;

  const onClickFaq = (target: number) => {
    if (activeIndex === target) {
      activeIndex = -1;
      return;
    }
    activeIndex = target;
  };
</script>

<div class="faq">
  <div class="faq_title">{$_('nft_faq')}</div>
  <div class="faq_list">
    {#each questions as question, i}
      <FaqItem
        isOpen={i + 1 === activeIndex}
        onClick={() => onClickFaq(i + 1)}
        title={question.title}
        desc={question.desc}
      />
    {/each}
  </div>
</div>

<style lang="scss">
  .faq {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    padding: 0 60px 240px;
    background-color: color(black);

    @include media(laptop) {
      padding: 0 24px 160px;
    }
  }
  .faq_title {
    @include hellix(64, 700);
    color: color(white);
    margin-bottom: 80px;

    @include media(mobile) {
      @include hellix(26, 700);
      margin-bottom: 40px;
    }
  }
  .faq_list {
    width: 100%;
    max-width: 1224px;
    display: flex;
    flex-direction: column;
    border-radius: 16px;
    overflow: hidden;
    isolation: isolate;
  }
</style>
