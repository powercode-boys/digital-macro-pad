<script>
  import { removeMacro } from "../stores";


    export let macro;
    export let idx;

    const clipboardIcon = '&#128203;';
    let confirmPopup = false;

    function copyCommand() {
        confirmPopup = true;
        navigator.clipboard.writeText(macro.command);
        setTimeout(() => confirmPopup = false, 1500);
    }

</script>

<div class="card bg-primary text-primary-content p-4 h-full">
    <div class="card-body text-start">
        <h2 class="card-title overflow-clip break-words">{macro.name}</h2> <!-- Title doesn't clip -->
        <p class="break-words italic">{macro.description}</p>
    </div>
    <div id="copyButton" class="flex items-end justify-end">
        <div class={confirmPopup ? 'tooltip tooltip-open tooltip-secondary' : ''} data-tip="Copied!">
            <button class="btn btn-circle btn-secondary text-xl"
                    on:click={copyCommand}>{@html clipboardIcon}</button>
        </div>
    </div>
</div>