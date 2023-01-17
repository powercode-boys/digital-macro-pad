import { writable } from "svelte/store";

export const macroStore = writable([]);

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

export function editMacro(data, idx) {
  macroStore.update((oldMacros) => {
    let newMacros = [...oldMacros];
    newMacros[idx] = { ...oldMacros[idx], ...data };
    return newMacros;
  });
}

//example
// editMacro({name: "Test"}, 1) -> changes name of second (bc of 0 indexing) macro to "Test"