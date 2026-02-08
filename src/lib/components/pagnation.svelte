<script lang="ts">
  import { page } from "$app/state";

  export let total: number;
  export let limit: number;
  export let currentPage: number;

  $: totalPages = Math.ceil(total / limit);

  function getPageUrl(p: number) {
    const params = new URLSearchParams(page.url.searchParams);
    params.set("page", p.toString());
    return `?${params.toString()}`;
  }
</script>

{#if totalPages > 1}
  <div class="flex items-center justify-center gap-2 mt-10">
    <a
      href={currentPage > 1 ? getPageUrl(currentPage - 1) : "#"}
      aria-label="Previous"
      class="mr-4 transition-opacity {currentPage === 1
        ? 'opacity-30 pointer-events-none'
        : 'hover:opacity-100'}"
    >
      <svg
        width="9"
        height="16"
        viewBox="0 0 12 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M11 1L2 9.24242L11 17"
          stroke="#111820"
          stroke-opacity="0.7"
          stroke-width="2"
          stroke-linecap="round"
        />
      </svg>
    </a>

    <div class="flex gap-2 text-gray-500 text-sm md:text-base">
      {#each Array(totalPages) as _, i}
        {@const pageNum = i + 1}
        <a
          href={getPageUrl(pageNum)}
          class="flex items-center justify-center active:scale-95 w-9 md:w-12 h-9 md:h-12 aspect-square rounded-md transition-all border
                {currentPage === pageNum
            ? 'bg-green-600 text-white border-green-600'
            : 'bg-white border-gray-200 text-gray-600 hover:bg-gray-100/70'}"
        >
          {pageNum}
        </a>
      {/each}
    </div>

    <a
      href={currentPage < totalPages ? getPageUrl(currentPage + 1) : "#"}
      aria-label="Next"
      class="ml-4 transition-opacity {currentPage === totalPages
        ? 'opacity-30 pointer-events-none'
        : 'hover:opacity-100'}"
    >
      <svg
        width="9"
        height="16"
        viewBox="0 0 12 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1 1L10 9.24242L1 17"
          stroke="#111820"
          stroke-opacity="0.7"
          stroke-width="2"
          stroke-linecap="round"
        />
      </svg>
    </a>
  </div>
{/if}
