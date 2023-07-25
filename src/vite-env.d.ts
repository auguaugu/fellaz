/// <reference types="svelte" />
/// <reference types="vite/client" />
declare module '*.svg?component' {
  import Svelte from 'svelte';
  export default Svelte.SvelteComponent;
}
