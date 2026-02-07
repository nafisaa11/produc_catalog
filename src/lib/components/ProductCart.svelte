<script lang="ts">
  import type { Product} from '$lib/types/product';

  export let product: Product;
</script>

<a href="#" class="block rounded-lg p-4 shadow-xs shadow-indigo-100">
        
        <div class="relative w-full h-56 overflow-hidden rounded-md">
        <img 
            alt={product.title} 
            src={product.thumbnail} 
            class="h-56 w-full rounded-md object-cover"
        />
    </div>

    <div class="mt-4">
        <p class="text-xs text-gray-500 uppercase tracking-wide mb-1">
            {product.category}
        </p>

        <h3 class="text-lg font-medium text-gray-900 truncate">
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