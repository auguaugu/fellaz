<script lang="ts">
  import Intro from '@/components/About/Intro.svelte';
  import BackVideo from '@/components/About/BackVideo.svelte';
  import Description from '@/components/About/Description.svelte';
  // import Ecosystem from '@/components/About/Ecosystem.svelte';
  import Feature from '@/components/About/Feature.svelte';
  import Email from '@/components/About/Email.svelte';
  import Partners from '@/components/About/Partners.svelte';

  window.scrollTo(0, 0);
</script>

<Intro />
<BackVideo />
<Description />
<!-- <Ecosystem /> -->
<Feature />
<Email
  title1="about_email_title1"
  title2="about_email_title2"
  desc="about_email_desc1"
/>
<Partners />
