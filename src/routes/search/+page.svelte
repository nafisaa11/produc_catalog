<script>
  import ProductCart from "$lib/components/ProductCart.svelte";
  import Pagination from "$lib/components/pagnation.svelte";

  export let data;
</script>

<div class="container mx-auto px-32">
  <div class="mb-8">
    {#if data.searchQuery}
      <h1 class="text-2xl font-medium text-gray-800">
        Hasil pencarian untuk <span class="font-bold text-green-600"
          >"{data.searchQuery}"</span
        >
      </h1>
      <p class="text-gray-500 text-sm mt-1">
        Menampilkan {data.products.length} dari {data.total} produk
      </p>
    {:else}
      <h1 class="text-2xl font-bold text-gray-800">Semua Produk</h1>
    {/if}
  </div>

  {#if data.products.length > 0}
    <div class="grid grid-cols-1 gap-4 lg:grid-cols-6 lg:gap-4">
      {#each data.products as product}
        <ProductCart {product} />
      {/each}
    </div>

    <div class="mt-auto pt-12 pb-8 flex justify-center">
      <Pagination
        total={data.total}
        limit={data.limit}
        currentPage={data.currentPage}
      />
    </div>
  {:else}
    <div
      class="flex flex-col items-center justify-center py-20 bg-gray-50 rounded-2xl border border-dashed border-gray-300"
    >
      <svg
        class="w-16 h-16 text-gray-300 mb-4"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
        ></path>
      </svg>
      <h2 class="text-xl font-semibold text-gray-600">
        Tidak ada produk yang ditemukan
      </h2>
      <p class="text-gray-400 mt-2">Coba gunakan kata kunci lain</p>
      <a
        href="/"
        class="mt-6 px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
      >
        Kembali ke Beranda
      </a>
    </div>
  {/if}
</div>
