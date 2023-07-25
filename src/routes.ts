import About from '@/pages/About.svelte';
import Membership from '@/pages/Membership.svelte';
import Partners from '@/pages/Partners.svelte';
import NFT from '@/pages/NFT.svelte';
import Error from '@/pages/Error.svelte';

export const routesInfo = [
  { path: '/', name: 'menu_about', component: About },
  { path: '/membership', name: 'menu_pass', component: Membership },
  { path: '/nft', name: 'menu_ticket', isShowBanner: false, component: NFT },
  { path: '/partners', name: 'menu_partner', component: Partners },
  { path: '*', component: Error },
];
