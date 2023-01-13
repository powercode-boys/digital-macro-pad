<script>
  import Error from "../Alerts/Error.svelte";
  import { addMacro } from "../../stores";

  let name = "";
  let befehl = "";
  let error = false;

  function close() {
    document.getElementById("addMacroModal").click();
    name = "";
    befehl = "";
    error = false;
  }

  function submit() {
    if (name.trim() === "") {
      error = true;
      return;
    }
    addMacro(name, befehl);
    close();
  }
</script>

<input type="checkbox" id="addMacroModal" class="modal-toggle" />
<label class="modal cursor-pointer">
  <!-- maybe add close on outside click -> can't use normal method because close() needs to be called on modal close -->
  <label class="modal-box relative flex flex-col space-y-2">
    <h3 class="font-bold text-lg">Neuen Makro erstellen!</h3>
    <p>Erstelle hier einen neuen Makro für deine Sammlung.</p>
    {#if error}
      <Error>Error! Der Name des Makros darf nicht leer sein!</Error>
    {/if}
    <form on:submit|preventDefault={submit} class="space-y-2">
      <div class="form-control w-full">
        <label class="label" for="addMacroNameInput">
          <span class="label-text">Der name deines Makros</span>
        </label>
        <input
          type="text"
          placeholder="Name"
          id="addMacroNameInput"
          class={"input input-bordered w-full" + (error ? " input-error" : "")}
          bind:value={name}
        />
      </div>
      <div class="form-control w-full">
        <label class="label" for="addMacroBefehlInput">
          <span class="label-text h-25">Der Befehl für deinen Makro</span>
        </label>
        <textarea
          placeholder="Befehl"
          id="addMacroBefehlInput"
          class="textarea textarea-bordered w-full"
          bind:value={befehl}
        />
      </div>
      <div class="modal-action space-x-2">
        <button class="btn btn-success" type="submit">Erstellen</button>
        <button class="btn btn-error" type="button" on:click={close}
          >Abbrechen</button
        >
      </div>
    </form>
  </label>
</label>
