import { writable } from "svelte/store";

export const macroStore = writable([]);
let loaded = false

macroStore.subscribe(macros => {
  if(loaded) window.electronAPI.saveMacros(macros);
  loaded = true;
});

export function addMacro({ name, command, description }) {
  macroStore.update((oldMacros) => [
    ...oldMacros,
    { name: name, command: command, description: description },
  ]);
}

export function removeMacro(idx) {
  macroStore.update((oldMacros) => removeByIdx(oldMacros, idx));
}

function removeByIdx(array, idx) {
  return [...array.slice(0, idx), ...array.slice(idx + 1, array.length)];
}
