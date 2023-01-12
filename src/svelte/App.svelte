<script>
  let buttons = Array(9);
</script>

<main>
  <div
    class="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-4"
  >
    {#each buttons as button}
      <button class="btn btn-lg btn-primary">Makro</button>
    {/each}
  </div>

  <div class="tooltip fixed bottom-5 right-5 sm:right-[5vw] sm:bottom-[5vh]" data-tip="Makro hinzufügen">
    <button
      class="btn btn-circle btn-outline btn-success"
      ><svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="2.5"
        stroke="currentColor"
        class="w-8 h-8 "
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M12 4.5v15m7.5-7.5h-15"
        />
      </svg>
    </button>
  </div>
</main>

<style global lang="postcss">
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
</style>
