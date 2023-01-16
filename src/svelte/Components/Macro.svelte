<script>
    export let macro;
    const clipboardIcon = '&#128203;';
    let showConfirmation = false;

    function copyCommand() {
        showConfirmation = true;
        navigator.clipboard.writeText(macro.command);
        setTimeout(() => showConfirmation = false, 1500);
    }

</script>

<button>
    <div class="card bg-primary text-primary-content p-4 hover:bg-opacity-80 h-full">
        <div class="card-body text-start">
            <h2 class="card-title overflow-clip">{macro.name}</h2> <!-- Title doesn't clip -->
            <p class="break-all">{macro.description}</p>
        </div>
        <div id="copyButton" class="flex items-end justify-end ">
            <div class={showConfirmation ? 'tooltip tooltip-open tooltip-secondary' : ''} data-tip="Copied!">
                <button class="btn btn-circle btn-secondary text-xl"
                        on:click={copyCommand}>{@html clipboardIcon}</button>
            </div>
        </div>
    </div>
</button>