<script>
  import { macroStore } from "../stores.js";

  let keyword = "";
  function searchMacros() {
  $macroStore = $macroStore.map(macro => {
    let fields = [macro.name, macro.description, macro.command];
    return {...macro, isVisible: fields
      .map(str => str.toLowerCase())
      .find(str => str.includes(keyword.toLowerCase()))
     };
   });
  }
</script>

<input
  type="text"
  placeholder="Suche"
  class="input input-bordered input-primary input-md w-full sm:max-w-md text-base"
  bind:value={keyword}
  on:input={searchMacros}
/>
