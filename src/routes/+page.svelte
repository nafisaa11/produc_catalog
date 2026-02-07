<script>
  import ProductCart from '$lib/components/ProductCart.svelte';

  export let data;
</script>


<div class="container mx-auto px-32">
<div class="grid grid-cols-1 gap-4 lg:grid-cols-6 lg:gap-4">
{#each data.products as product}
  <ProductCart
   product={product}
  />
{/each}

</div>
</div>
