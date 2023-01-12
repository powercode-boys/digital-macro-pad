<script>
  import AddMacroButton from "./Components/AddMacroButton.svelte";
  import Macro from "./Components/Macro.svelte";
  import Modals from "./Modals.svelte";

  let macros = [];

  function addMacro(name, befehl) {
    macros = [...macros, { name: name, befehl: befehl }];
  }
</script>

<main>
  {#if macros.length > 0}
    <div
      class="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-4"
    >
      {#each macros as macro}
        <Macro name={macro.name} />
      {/each}
    </div>
  {:else}
    <div class="flex justify-center h-screen items-center">
      <p class="text-base-content">
        Du hast noch keinen makro erstellt, drücke das "+" um einen zu
        erstellen!
      </p>
    </div>
  {/if}
  <div class="container mx-auto flex-col px-4 flex">
    <AddMacroButton />
  </div>
</main>
<Modals {addMacro} />

<style global lang="postcss">
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
</style>
