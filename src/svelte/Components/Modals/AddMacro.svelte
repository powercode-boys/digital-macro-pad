<script>
  import Error from "../Alerts/Error.svelte";
  import { addMacro } from "../../stores";
  import InputWrapper from "../Inputs/InputWrapper.svelte";

  let name = "";
  let command = "";
  let description = "";
  let runable = false;
  let nameError = false;
  let commandError = false;
  let modal;

  function close() {
    modal.click();
    name = "";
    command = "";
    description = "";
    runable = false;
    nameError = false;
    commandError = false;
  }

  function submit() {
    if (name.trim() === "") {
      nameError = true;
      return;
    }
    if (runable && command.trim() === "") {
      commandError = true;
      return;
    }
    addMacro({
      name: name,
      command: command,
      description: description,
      runable: runable,
    });
    close();
  }
</script>

<input
  bind:this={modal}
  type="checkbox"
  id="addMacroModal"
  class="modal-toggle"
/>
<!-- pointer cursor when close on outside click -->
<label class="modal">
  <!-- maybe add close on outside click -> can't use normal method because close() needs to be called on modal close -->
  <label class="modal-box relative flex flex-col space-y-2">
    <h3 class="font-bold text-lg">Neues Makro erstellen!</h3>
    <p>Erstelle hier einen neues Makro für deine Sammlung.</p>
    {#if nameError}
      <Error>Der Name des Makros darf nicht leer sein!</Error>
    {/if}
    {#if commandError}
      <Error>Ausführbare Makros müssen einen Befehl haben!</Error>
    {/if}
    <form on:submit|preventDefault={submit} class="space-y-2">
      <InputWrapper id="addMacroNameInput" label="Der Name deines Makros">
        <input
          type="text"
          placeholder="Name"
          id="addMacroNameInput"
          class={"input input-bordered w-full" + (nameError ? " input-error" : "")}
          bind:value={name}
        /></InputWrapper
      >
      <InputWrapper
        id="addMacroDescInput"
        label="Die Beschreibung deines Makros"
      >
        <input
          type="text"
          placeholder="Beschreibung"
          id="addMacroDescInput"
          class="input input-bordered w-full"
          bind:value={description}
        />
      </InputWrapper>
      <InputWrapper id="addMacroBefehlInput" label="Der Befehl für dein Makro (Umbrüche mit ^)">
        <textarea
          spellcheck="false"
          placeholder="Befehl"
          id="addMacroBefehlInput"
          class={"textarea textarea-bordered w-full" + (commandError ? " border-error focus:outline-2 focus:outline-error" : "")}
          bind:value={command}
        />
      </InputWrapper>
      <div class="modal-action justify-between space-x-2">
        <label class="label cursor-pointer gap-2">
          <input type="checkbox" class="checkbox" bind:checked={runable} />
          <span class="label-text">Ausführbar</span>
        </label>
        <div>
          <button class="btn btn-success" type="submit">Erstellen</button>
          <button class="btn btn-error" type="button" on:click={close}
            >Abbrechen</button
          >
        </div>
      </div>
    </form>
  </label>
</label>
