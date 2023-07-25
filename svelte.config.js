import sveltePreprocess from 'svelte-preprocess';

export default {
  preprocess: sveltePreprocess({
    scss: {
      prependData: "@import './src/styles/_global.scss';",
    },
  }),
  onwarn: (warning, handler) => {
    const { code } = warning;
    if (code.startsWith('a11y-')) return;
    if (code.includes('css-unused-')) return;
    handler(warning);
  },
};
