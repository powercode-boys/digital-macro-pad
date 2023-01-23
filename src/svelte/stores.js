import { writable, readable } from "svelte/store";

export const macroStore = writable([]);
let loaded = false;

macroStore.subscribe((macros) => {
  if (loaded) window.electronAPI.saveMacros(macros);
  loaded = true;
});

export function addMacro(macro) {
  macroStore.update((oldMacros) => [...oldMacros, macro]);
}

export function removeMacro(idx) {
  macroStore.update((oldMacros) => removeByIdx(oldMacros, idx));
}

function removeByIdx(array, idx) {
  return [...array.slice(0, idx), ...array.slice(idx + 1, array.length)];
}

export function editMacro(data, idx) {
  console.log(idx);
  macroStore.update((oldMacros) => {
    let newMacros = [...oldMacros];
    newMacros[idx] = { ...oldMacros[idx], ...data };
    console.log(oldMacros, newMacros);
    return newMacros;
  });
}

//example
// editMacro({name: "Test"}, 1) -> changes name of second (bc of 0 indexing) macro to "Test"

export const editStore = writable({
  name: "",
  description: "",
  command: "",
  idx: 0,
});
