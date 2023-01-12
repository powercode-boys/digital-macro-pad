<script>
  let buttons = Array(9);
</script>

<div
  class="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-4"
>
  {#each buttons as button}
    <button class="btn btn-lg btn-primary">Makro</button>
  {/each}
</div>

<button
  class="btn btn-circle btn-outline fixed bottom-5 right-5 sm:right-[5vw] sm:bottom-[5vh]"
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    class="h-8 w-8"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    ><path
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
      d="M6 18L18 6M6 6l12 12"
    /></svg
  >
</button>

<style global lang="postcss">
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
</style>
