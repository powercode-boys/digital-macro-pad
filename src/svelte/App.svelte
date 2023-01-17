<script>
  import AddMacroButton from "./Components/AddMacroButton.svelte";
  import Macro from "./Components/Macro.svelte";
  import Modals from "./Modals.svelte";
  import { macroStore } from "./stores";
  import {onMount} from "svelte";

  onMount(async () => {
    let macros = await window.electronAPI.getMacros()
    macroStore.update(() => macros)
  });
</script>

<main>
    {#if $macroStore.length > 0}
      <div
        class="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-4"
      >
        {#each $macroStore as macro}
          <Macro name={macro.name} />
        {/each}
      </div>
    {:else}
      <div class="flex flex-col justify-center items-center h-screen">
        <p class="text-base-content text-center p-4">
          Du hast noch kein Makro erstellt, drücke das "+" um einen zu
          erstellen!
        </p>
      </div>
    {/if}
  <AddMacroButton />
</main>
<Modals />

<style global lang="postcss">
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
</style>
