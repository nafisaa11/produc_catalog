<script lang="ts">
  import ProductCart from "$lib/components/ProductCart.svelte";
  import Pagination from "$lib/components/pagnation.svelte";
  import type { PageData } from "./$types";

  let { data }: { data: PageData } = $props();
</script>

<div class="container mx-auto px-32 py-4">
  <div class="mb-8">
    <h1 class="text-2xl font-bold text-gray-900 capitalize"> Category 
      <span class="font-bold text-green-600 text-3xl"
        >{data.title.replace("-", " ")}</span
      >
    </h1>
  </div>

  {#if data.products.length > 0}
    <div class="grid grid-cols-1 gap-4 lg:grid-cols-6 lg:gap-4">
      {#each data.products as product}
        <ProductCart {product} />
      {/each}
    </div>
  {:else}
    <div
      class="text-center py-20 bg-gray-50 rounded-lg border border-dashed border-gray-300"
    >
      <p class="text-gray-500 text-lg">
        Tidak ada produk ditemukan di kategori ini.
      </p>
      <a
        href="/"
        class="text-green-600 font-bold hover:underline mt-2 inline-block"
        >Kembali ke Beranda</a
      >
    </div>
  {/if}

  <div class="mt-auto pt-12 pb-8 flex justify-center">
    <Pagination
      total={data.total}
      limit={data.limit}
      currentPage={data.currentPage}
    />
  </div>
</div>
