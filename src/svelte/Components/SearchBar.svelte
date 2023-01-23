<script>
    import { macroStore } from "../stores.js";

    let keyword = '';

    function searchMacros() {
        for (let i = 0; i < $macroStore.length; i++) {
            if ($macroStore[i].name.toUpperCase().includes(keyword.toUpperCase())) {
                $macroStore[i].visibility = 'visible';
            } else {
                $macroStore[i].visibility = 'hidden';
            }
        }
    }
</script>

<div class="mt-3 ml flex justify-center px-4">
<input type="text" placeholder="Suche" class="input input-bordered input-primary input-md w-full sm:max-w-md text-base" bind:value={keyword} on:input={searchMacros}/>
</div>
