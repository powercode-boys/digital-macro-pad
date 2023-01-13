import { writable } from "svelte/store";

export const macroStore = writable([]);

export function addMacro({ name, command, description }) {
  macroStore.update((oldMacros) => [
    ...oldMacros,
    { name: name, command: command, description: description },
  ]);
}
