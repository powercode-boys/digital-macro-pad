import { writable } from "svelte/store";

export const macroStore = writable([]);

export function addMacro(name, befehl) {
  macroStore.update((oldMacros) => [
    ...oldMacros,
    { name: name, befehl: befehl },
  ]);
}
