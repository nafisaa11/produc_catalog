<script lang="ts">
  import type { Product } from "$lib/types/product";

  export let product: Product;
</script>

<a
  href="/product/{product.id}"
  class="block rounded-xl p-4 mt-8 bg-white border border-gray-200 hover:border-indigo-600 transition-all duration-300 hover:shadow-lg hover:shadow-indigo-100/50"
>
  <div class="relative rounded-xl w-full h-50 overflow-hidden">
    <img
      alt={product.title}
      src={product.thumbnail}
      class="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300"
    />
  </div>

  <div class="mt-4">
    <p
      class="text-xs font-semibold text-indigo-600 uppercase tracking-wide mb-1"
    >
      {product.category}
    </p>

    <h3 class="text-lg font-medium text-gray-900 truncate hover:text-indigo-600">
      {product.title}
    </h3>

    <div class="mt-2 flex items-center justify-between">
      <p class="text-lg font-bold text-gray-900">
        ${product.price}
      </p>

      <div class="flex items-center text-sm text-yellow-500">
        <span>★</span>
        <span class="ml-1 text-gray-600">{product.rating}</span>
      </div>
    </div>
  </div>
</a>
