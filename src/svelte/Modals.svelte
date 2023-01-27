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
  values={{ ...$macroStore[$editIdxStore] }}
  onSubmit={(macro) => {
    editMacro(macro, $editIdxStore);
  }}
/>
