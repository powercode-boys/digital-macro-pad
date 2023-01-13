<script>
  import Error from "../Alerts/Error.svelte";
  import { addMacro } from "../../stores";
  import Wrapper from "../Inputs/Wrapper.svelte";

  let name = "";
  let command = "";
  let description = "";
  let error = false;
  let modal;

  function close() {
    modal.click();
    name = "";
    command = "";
    description = "";
    error = false;
  }

  function submit() {
    if (name.trim() === "") {
      error = true;
      return;
    }
    addMacro({
      name: name,
      command: command,
      description: description,
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
<label class="modal cursor-pointer">
  <!-- maybe add close on outside click -> can't use normal method because close() needs to be called on modal close -->
  <label class="modal-box relative flex flex-col space-y-2">
    <h3 class="font-bold text-lg">Neues Makro erstellen!</h3>
    <p>Erstelle hier einen neues Makro für deine Sammlung.</p>
    {#if error}
      <Error>Error! Der Name des Makros darf nicht leer sein!</Error>
    {/if}
    <form on:submit|preventDefault={submit} class="space-y-2">
      <Wrapper id="addMacroNameInput" label="Der Name deines Makros">
        <input
          type="text"
          placeholder="Name"
          id="addMacroNameInput"
          class={"input input-bordered w-full" + (error ? " input-error" : "")}
          bind:value={name}
        /></Wrapper
      >
      <Wrapper id="addMacroDescInput" label="Die Beschreibung deines Makros">
        <input
          type="text"
          placeholder="Beschreibung"
          id="addMacroDescInput"
          class="input input-bordered w-full"
          bind:value={description}
        />
      </Wrapper>
      <Wrapper id="addMacroBefehlInput" label="Der Befehl für dein Makro">
        <textarea
          placeholder="Befehl"
          id="addMacroBefehlInput"
          class="textarea textarea-bordered w-full"
          bind:value={command}
        />
      </Wrapper>
      <div class="modal-action space-x-2">
        <button class="btn btn-success" type="submit">Erstellen</button>
        <button class="btn btn-error" type="button" on:click={close}
          >Abbrechen</button
        >
      </div>
    </form>
  </label>
</label>
