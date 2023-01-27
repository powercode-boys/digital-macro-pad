<script>
  import MacroModal from "./Components/Modals/MacroModal/MacroModal.svelte";
  import { addMacro, editIdxStore, editMacro, macroStore } from "./stores";
</script>

<MacroModal
  type="add"
  heading="Neues Makro erstellen!"
  subHeading="Erstelle hier einen neues Makro für deine Sammlung."
  submitText="Erstellen"
  onSubmit={(macro) => {
    addMacro(macro);
  }}
/>

<MacroModal
  type="edit"
  heading="Makro bearbeiten!"
  subHeading="Bearbeite hier ein Makro aus deiner Sammlung."
  submitText="Bearbeiten"
  keepValues
  values={$macroStore[$editIdxStore]
    ? { ...$macroStore[$editIdxStore] }
    : { command: "", description: "", name: "", runnable: "" }}
  onSubmit={(macro) => {
    editMacro(macro, $editIdxStore);
  }}
/>
