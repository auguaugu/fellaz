<script lang="ts">
</script>

<div class="error">
  The page does not exist or you have accessed it in the wrong path.
</div>

<style lang="scss">
  .error {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    @include hellix(32, 700);
    color: color(white);
    padding: 0 60px 100px;
    text-align: center;

    @include media(mobile) {
      @include hellix(20, 700);
      padding: 0 24px 160px;
    }
  }
</style>
