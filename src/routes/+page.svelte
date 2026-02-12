<script>
  import ProductCart from "$lib/components/ProductCart.svelte";
  import Pagination from "$lib/components/pagnation.svelte";

  export let data;
</script>

<div class="container mx-auto px-4 md:px-12 lg:px-20 bg-gradient-to-t from-indigo-50 via-white to-indigo-100">
  <div class="max-w-4xl mx-auto text-center px-8 py-12">
    <h1 class="text-4xl md:text-5xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-4 leading-tight">
      Discover Amazing Products
    </h1>

    <p class="text-lg text-gray-600">
      Explore our curated collection of {data.total} premium products
    </p>
  </div>

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
</div>
