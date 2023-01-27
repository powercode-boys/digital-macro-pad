<script>
  import Error from "../../Alerts/Error.svelte";
  import InputWrapper from "../../Inputs/InputWrapper.svelte";
  import RunInfo from "./RunInfo.svelte";

  let modalToggle;
  let errors = {
    name: false,
    command: false,
  };

  export let type;
  export let heading;
  export let subHeading;
  export let submitText;
  export let onSubmit;
  export let keepValues = false;
  export let values = {
    name: "",
    description: "",
    command: "",
    runnable: false,
  };
  let storeValues = {
    name: "",
    description: "",
    command: "",
    runnable: false,
  };

  $: {
    console.log(values);
    if (
      !(
        isEmpty(values.name) &&
        isEmpty(values.description) &&
        isEmpty(values.command) &&
        !values.runnable
      )
    ) {
      storeValues = { ...values };
    }
  }

  function isEmpty(value) {
    return value.trim() === "";
  }

  function submit() {
    //check errors
    errors.name = isEmpty(values.name);
    errors.command = values.runnable && isEmpty(values.command);

    //exit when name or command is empty
    if (errors.name || errors.command) return;

    //run user logic (pass values)
    onSubmit(values);

    //toggle modal
    modalToggle.click();
  }

  function onModalToggle(e) {
    let checked = e.target.checked;
    console.log(values, storeValues, checked);
    if (checked && keepValues) values = { ...storeValues };
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

<!-- daisyui uses input checkboxes for state checking -->
<input
  bind:this={modalToggle}
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
              modalToggle.click();
            }}>Abbrechen</button
          >
        </div>
      </div>
    </form>
  </label>
</label>
