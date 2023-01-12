<script>
  export let macro;
</script>

<button>
  <div class="card bg-primary text-primary-content p-4 hover:bg-opacity-80 h-full">
    <div class="card-body text-start">
      <h2 class="card-title">{macro.name}</h2>
      <p>{macro.beschreibung}</p>
    </div>
  </div>
</button>
