<script>
  export let id;
  export let label;
</script>

<div class="form-control w-full">
  <label class="label" for={id}>
    <span class="label-text">{label}</span>
  </label>
  <slot />
</div>
