<script>
  import { onMount } from "svelte";
  import { macroStore } from "../stores.js";

  let themesOpen = false;

  const THEMES = [
    "light",
    "dark",
    "cupcake",
    "bumblebee",
    "emerald",
    "corporate",
    "synthwave",
    "retro",
    "cyberpunk",
    "valentine",
    "halloween",
    "garden",
    "forest",
    "aqua",
    "lofi",
    "pastel",
    "fantasy",
    "wireframe",
    "black",
    "luxury",
    "dracula",
    "cmyk",
    "autumn",
    "business",
    "acid",
    "lemonade",
    "night",
    "coffee",
    "winter",
  ];

  onMount(() => {
    document.documentElement.dataset.theme = localStorage.getItem("theme");
  });

  function setTheme(theme) {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem("theme", theme);
  }

  async function importMacros() {
    const macroData = await window.electronAPI.import();
    if (macroData.error) return;
    $macroStore = macroData.data;
  }

  async function exportMacros() {
    await window.electronAPI.export($macroStore);
  }
</script>

<div class="dropdown dropdown-end">
  <label class="btn btn-primary btn-circle text-primary-content" tabindex="0"
    ><svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      class="w-6 h-6"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z"
      />
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
      />
    </svg>
  </label>
  <ul
    tabindex="0"
    class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
  >
    <li>
      <div
        class="dropdown dropdown-left max-h-screen"
        on:mouseover={() => (themesOpen = true)}
        on:mouseleave={() => (themesOpen = false)}
      >
        <!-- class="outline-accent-content outline-1" wäre eine Möglichkeit um den Themes-Button hervorzuheben -->
        <label tabindex="0" class="flex space-x-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M15.75 19.5L8.25 12l7.5-7.5"
            />
          </svg><span>Themes</span></label
        >
        {#if themesOpen}
          <ul
            tabindex="0"
            class="dropdown-content menu p-2 shadow bg-base-100 rounded-box overflow-y-scroll max-h-80 flex-nowrap"
          >
            {#each THEMES as theme}
              <li>
                <button on:click={() => setTheme(theme)}
                  >{theme.charAt(0).toUpperCase() + theme.slice(1)}
                </button>
              </li>
            {/each}
          </ul>
        {/if}
      </div>
    </li>
    <li>
      <button on:click={importMacros}>Makros importieren</button>
    </li>
    <li>
      <button on:click={exportMacros}>Makros exportieren</button>
    </li>
  </ul>
</div>
