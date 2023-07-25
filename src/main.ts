import App from './App.svelte';
import './styles/app.scss';
import './i18n';

const app = new App({
  target: document.getElementById('app'),
});

export default app;
