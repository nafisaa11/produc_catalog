<script>
  import ProductCart from "$lib/components/ProductCart.svelte";
  import Pagination from "$lib/components/pagnation.svelte";

  export let data;
</script>

<div class="container mx-auto px-32">
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
