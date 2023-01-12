<script>
  import Macro from "./Components/Macro.svelte";

  let macros = [
    { name: "Test Makro 1" },
    { name: "Test Makro 2" },
    { name: "Test Makro 3" },
    { name: "Test Makro 4" },
    { name: "Test Makro 5" },
  ];
</script>

<main>
  <div
    class="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-4"
  >
    {#each macros as macro}
      <Macro name={macro.name} />
    {/each}
  </div>

  <div
    class="tooltip fixed bottom-5 right-5 sm:right-[5vw] sm:bottom-[5vh]"
    data-tip="Makro hinzufügen"
  >
    <button class="btn btn-circle btn-outline btn-success"
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
