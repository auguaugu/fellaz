<script lang="ts">
  import { onMount } from 'svelte';
  import { waitLocale } from 'svelte-i18n';

  import Header from '@/components/Common/Header.svelte';
  import HeaderMobile from '@/components/Common/HeaderMobile.svelte';
  import Footer from '@/components/Common/Footer.svelte';
  import Routes from '@/pages/Routes.svelte';
  import GoogleAnalytics from '@/components/Common/GoogleAnalytics.svelte';
  import FloatingScrollTop from '@/components/Common/FloatingScrollTop.svelte';
  import FloatingSocial from '@/components/Common/FloatingSocial.svelte';

  import { isMobile } from '@/store/media';

  const getInnerHeight = () => {
    const innerHeight = window.innerHeight;
    document.documentElement.style.setProperty('--vh', `${innerHeight}px`);
  };

  onMount(() => {
    getInnerHeight();
    window.addEventListener('resize', getInnerHeight);

    return () => {
      window.removeEventListener('resize', getInnerHeight);
    };
  });
</script>

{#await waitLocale() then}
  <GoogleAnalytics />

  <Routes>
    {#if $isMobile}
      <HeaderMobile />
    {:else}
      <Header />
    {/if}

    <FloatingScrollTop />
    <FloatingSocial />

    <Footer />
  </Routes>
{/await}
