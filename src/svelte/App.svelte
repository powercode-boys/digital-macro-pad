<script>
    let buttons = Array(9);
</script>

{#each buttons as button}
    <button class="btn btn-lg btn-primary w-1/4 h-4/5 m-10">
        Makro
    </button>
{/each}

<button class="btn btn-circle btn-outline" id="addButton">
    <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg>
</button>

<style global lang="postcss">
    @tailwind base;
    @tailwind components;
    @tailwind utilities;

    #addButton {
        position: fixed;
        left: 90%;
        top: 90%;
    }

</style>
