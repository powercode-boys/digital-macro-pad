<script>
  import Error from "../Alerts/Error.svelte";
  import { editMacro } from "../../stores";
  import InputWrapper from "../Inputs/InputWrapper.svelte";

  export let idx;
  export let name;
  export let command;
  export let description;
  export let runnable;
  let error = false;
  let modal;

  function close() {
    modal.click();
    error = false;
  }

  function submit() {
    if (name.trim() === "") {
      error = true;
      return;
    }
    editMacro(
      {
        name: name,
        command: command,
        description: description,
        runnable: runnable,
      },
      idx,
    );
    close();
  }
</script>

<input
  bind:this={modal}
  type="checkbox"
  id="editMacroModal"
  class="modal-toggle"
/>
<!-- pointer cursor when close on outside click -->
<label class="modal">
  <!-- maybe add close on outside click -> can't use normal method because close() needs to be called on modal close -->
  <label class="modal-box relative flex flex-col space-y-2">
    <h3 class="font-bold text-lg">Makro bearbeiten!</h3>
    <p>Bearbeite hier ein Makro aus deine Sammlung.</p>
    {#if error}
      <Error>Error! Der Name des Makros darf nicht leer sein!</Error>
    {/if}
    <form on:submit|preventDefault={submit} class="space-y-2">
      <InputWrapper id="editMacroNameInput" label="Der Name deines Makros">
        <input
          type="text"
          placeholder="Name"
          id="editMacroNameInput"
          class={"input input-bordered w-full" + (error ? " input-error" : "")}
          bind:value={name}
        /></InputWrapper
      >
      <InputWrapper
        id="editMacroDescInput"
        label="Die Beschreibung deines Makros"
      >
        <input
          type="text"
          placeholder="Beschreibung"
          id="editMacroDescInput"
          class="input input-bordered w-full"
          bind:value={description}
        />
      </InputWrapper>
      <InputWrapper id="editMacroBefehlInput" label="Der Befehl für dein Makro">
        <textarea
          spellcheck="false"
          placeholder="Befehl"
          id="editMacroBefehlInput"
          class="textarea textarea-bordered w-full"
          bind:value={command}
        />
      </InputWrapper>
      <div class="modal-action justify-between space-x-2">
        <label class="label cursor-pointer gap-2">
          <input type="checkbox" class="checkbox" bind:checked={runnable} />
          <span class="label-text">Ausführbar</span>
        </label>
        <div>
          <button class="btn btn-success" type="submit">Bearbeiten</button>
          <button class="btn btn-error" type="button" on:click={close}
            >Abbrechen</button
          >
        </div>
      </div>
    </form>
  </label>
</label>
