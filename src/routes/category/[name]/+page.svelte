<script lang="ts">
  import ProductCart from "$lib/components/ProductCart.svelte";
  import Pagination from "$lib/components/pagnation.svelte";
  import type { PageData } from "./$types";

  let { data }: { data: PageData } = $props();
  
  const formatTitle = (title: string) => {
    return title.split("-").map(word => 
      word.charAt(0).toUpperCase() + word.slice(1)
    ).join(" ");
  };
</script>

<div class="min-h-screen bg-gray-50 bg-gradient-to-t from-indigo-50 via-white to-indigo-100">
  <div class="container mx-auto px-4 sm:px-6 lg:px-32 py-8">
    
    <!-- Header -->
    <div class="mb-8">
      <h1 class="text-3xl font-bold text-gray-900">
        {formatTitle(data.title)}
      </h1>
      <p class="text-gray-600 mt-2">
        {data.total} products available
      </p>
    </div>

    {#if data.products.length > 0}
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-6 gap-6 mb-12">
        {#each data.products as product}
          <ProductCart {product} />
        {/each}
      </div>

      <!-- Pagination -->
      <div class="flex justify-center pb-8">
        <Pagination
          total={data.total}
          limit={data.limit}
          currentPage={data.currentPage}
        />
      </div>
    {:else}
      <!-- Empty State -->
      <div class="text-center py-20">
        <div class="text-gray-400 mb-4">
          <svg class="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
          </svg>
        </div>
        <h2 class="text-xl font-semibold text-gray-900 mb-2">
          No products found
        </h2>
        <p class="text-gray-600 mb-6">
          No products available in this category yet.
        </p>
        
          <a href="/"
          class="inline-block bg-indigo-600 text-white px-6 py-2.5 rounded-lg font-medium hover:bg-indigo-700 transition-colors"
        >
          Browse All Products
        </a>
      </div>
    {/if}
  </div>
</div>