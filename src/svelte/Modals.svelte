<script>
  import AddMacro from "./Components/Modals/AddMacro.svelte";
  import EditMacro from "./Components/Modals/EditMacro.svelte";
  import { editStore } from "./stores";
</script>

<AddMacro />
<EditMacro
  command={$editStore.command}
  description={$editStore.description}
  name={$editStore.name}
  idx={$editStore.idx}
/>
