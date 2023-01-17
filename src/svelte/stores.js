import { writable } from "svelte/store";

export const macroStore = writable([]);
let loaded = false

macroStore.subscribe(macros => {
  if(loaded) window.electronAPI.saveMacros(macros);
  loaded = true;
});

export function addMacro({ name, command }) {
  macroStore.update((oldMacros) => [...oldMacros, { name: name, command }]);
}
