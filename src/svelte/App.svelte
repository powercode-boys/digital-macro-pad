<script>
  import AddMacroButton from "./Components/AddMacroButton.svelte";
  import Macro from "./Components/Macro.svelte";
  import Modals from "./Modals.svelte";
  import SearchBar from "./Components/SearchBar.svelte";
  import { macroStore } from "./stores";
  import { onMount } from "svelte";
  import Header from "./Components/Header.svelte";
  import Settings from "./Components/Settings.svelte";

  onMount(async () => {
    let macros = await window.electronAPI.getMacros();
    macroStore.update(() => macros);
  });
</script>

<main>
  <Header>
    <SearchBar />
    <Settings />
  </Header>
  {#if $macroStore.length > 0}
    <div
      class="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-4"
      style="margin-bottom: calc(10vh + 48px - 1rem);"
    >
      {#each $macroStore as macro, idx}
        <Macro {macro} {idx} />
      {/each}
    </div>
  {:else}
    <div class="flex flex-col justify-center items-center" style="height: calc(100vh - 48px - 0.8rem);">
      <p class="text-base-content text-center p-4 select-none">
        Du hast noch kein Makro erstellt, drücke das "+" um einen zu erstellen!
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
