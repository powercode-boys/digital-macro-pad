<script>
  let popUp = false;
  export let action;
  export let tooltip;

  function onAction() {
    popUp = true;
    action();
    setTimeout(() => (popUp = false), 1500);
  }
</script>

<div
  class={popUp && tooltip ? "tooltip tooltip-open tooltip-secondary" : ""}
  data-tip={tooltip}
>
  <button class="btn btn-circle btn-secondary" on:click={onAction}>
    <slot />
  </button>
</div>
