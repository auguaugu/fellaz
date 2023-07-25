<script lang="ts">
  import { Router, Route } from 'svelte-navigator';

  import { routesInfo } from '@/routes';
</script>

<Router>
  <div class="wrap">
    <div class="container_contents">
      {#each routesInfo as { path, component }}
        <Route {path} primary={false}>
          <svelte:component this={component} />
        </Route>
      {/each}
    </div>

    <slot />
  </div>
</Router>

<style lang="scss">
  .wrap {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: var(--vh);
  }
  .container_contents {
    display: flex;
    flex-direction: column;
    width: 100%;
    margin: 0 auto;
    overflow: hidden;

    @include media(mobile) {
      max-width: auto;
    }
  }
</style>
