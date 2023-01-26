<script>
  import Error from "../../Alerts/Error.svelte";
  import InputWrapper from "../../Inputs/InputWrapper.svelte";
  import RunInfo from "./RunInfo.svelte";

  let toggle;
  let errors = {
    name: false,
    command: false,
  };

  export let type;
  export let heading;
  export let subHeading;
  export let submitText;
  export let onSubmit;
  export let values = {
    name: "",
    description: "",
    command: "",
    runnable: false,
  };

  function isUnSet(value) {
    return value.trim() === "";
  }

  function submit() {
    //error checker for any error
    let err = false;

    //check name
    if (isUnSet(values.name)) {
      errors.name = true;
      err = true;
    }

    //check command when runnable
    if (values.runnable && isUnSet(values.command)) {
      errors.command = true;
      err = true;
    }

    //exit when no error
    if (err) return;

    //run user logic (pass values)
    onSubmit(values);

    //toggle modal
    toggle.click();
  }

  function onModalToggle(e) {
    let checked = e.target.checked;
    if (!checked) {
      values = {
        name: "",
        description: "",
        command: "",
        runnable: false,
      };
      errors = {
        command: false,
        name: false,
      };
    }
  }
</script>

<input
  bind:this={toggle}
  type="checkbox"
  id={`${type}-modal-toggle`}
  class="modal-toggle"
  on:change={onModalToggle}
/>
<label for={`${type}-modal-toggle`} class="modal cursor-pointer">
  <label class="modal-box relative flex flex-col space-y-2" for="">
    <h3 class="font-bold text-lg">{heading}</h3>
    <p>{subHeading}</p>
    {#if errors.name}
      <Error>Der Name des Makros darf nicht leer sein!</Error>
    {/if}
    {#if errors.command}
      <Error>Ausführbare Makros müssen einen Befehl haben!</Error>
    {/if}
    <form on:submit|preventDefault={submit} class="space-y-2">
      <InputWrapper
        type={`${type}-macro-name-input`}
        label="Der Name deines Makros"
      >
        <input
          type="text"
          placeholder="Name"
          id={`${type}-macro-name-input`}
          class={"input input-bordered w-full" +
            (errors.name ? " input-error" : "")}
          bind:value={values.name}
        />
      </InputWrapper>
      <InputWrapper
        type={`${type}-macro-desc-input`}
        label="Die Beschreibung deines Makros"
      >
        <input
          type="text"
          placeholder="Beschreibung"
          id={`${type}-macro-desc-input`}
          class="input input-bordered w-full"
          bind:value={values.description}
        />
      </InputWrapper>
      <InputWrapper
        type={`${type}-macro-command-input`}
        label="Der Befehl deines Makro"
      >
        <textarea
          spellcheck="false"
          placeholder="Befehl"
          id={`${type}-macro-command-input`}
          class={"textarea textarea-bordered w-full" +
            (errors.command
              ? " border-error focus:outline-2 focus:outline-error"
              : "")}
          bind:value={values.command}
        />
      </InputWrapper>
      <div class="modal-action justify-between">
        <div class="form-control flex flex-row items-center">
          <label
            class="cursor-pointer label space-x-2"
            for={`${type}-macro-runnable-input`}
          >
            <input
              type="checkbox"
              class="checkbox"
              id={`${type}-macro-runnable-input`}
              bind:checked={values.runnable}
            />
            <span class="label-text">Ausführbar</span>
          </label>
          <RunInfo />
        </div>
        <div>
          <button class="btn btn-success" type="submit">{submitText}</button>
          <button
            class="btn btn-error"
            type="button"
            on:click={() => {
              toggle.click();
            }}>Abbrechen</button
          >
        </div>
      </div>
    </form>
  </label>
</label>
