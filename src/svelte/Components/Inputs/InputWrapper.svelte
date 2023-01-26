<script>
  export let type;
  export let label;
</script>

<div class="form-control w-full">
  <label class="label" for={type}>
    <span class="label-text">{label}</span>
  </label>
  <slot />
</div>
